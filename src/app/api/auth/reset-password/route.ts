import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcryptjs from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'unknown_ip';
    const { email, code, newPassword } = await req.json();

    if (!email || !code || !newPassword) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (newPassword.length < 8) {
      return NextResponse.json({ error: 'Password must be at least 8 characters long.' }, { status: 400 });
    }

    const lowerEmail = email.toLowerCase().trim();

    const resetRecord = await prisma.password_resets.findUnique({
      where: { email: lowerEmail }
    });

    if (!resetRecord) {
      return NextResponse.json({ error: 'Invalid or expired code' }, { status: 400 });
    }

    if (new Date() > resetRecord.expires_at) {
      await prisma.password_resets.delete({ where: { id: resetRecord.id } });
      return NextResponse.json({ error: 'Code has expired. Please request a new one.' }, { status: 400 });
    }

    if (resetRecord.attempts >= 5) {
      await prisma.password_resets.delete({ where: { id: resetRecord.id } });
      await prisma.password_reset_logs.create({
        data: { email: lowerEmail, ip_address: ip, status: 'BRUTE_FORCE_BLOCKED' }
      });
      return NextResponse.json({ error: 'Too many failed attempts. Code invalidated.' }, { status: 403 });
    }

    // Verify code
    const isCodeValid = await bcryptjs.compare(code, resetRecord.hashed_code);
    if (!isCodeValid) {
      await prisma.password_resets.update({
        where: { id: resetRecord.id },
        data: { attempts: resetRecord.attempts + 1 }
      });
      await prisma.password_reset_logs.create({
        data: { email: lowerEmail, ip_address: ip, status: 'INVALID_CODE_ATTEMPT' }
      });
      return NextResponse.json({ error: 'Invalid verification code' }, { status: 400 });
    }

    // Code is valid! Hash new password.
    const newHashedPassword = await bcryptjs.hash(newPassword, 10);

    // Update in either students or admins
    const student = await prisma.students.findUnique({ where: { email: lowerEmail } });
    if (student) {
      await prisma.students.update({
        where: { email: lowerEmail },
        data: { password_hash: newHashedPassword }
      });
    } else {
      const admin = await prisma.admins.findUnique({ where: { email: lowerEmail } });
      if (admin) {
        await prisma.admins.update({
          where: { email: lowerEmail },
          data: { password_hash: newHashedPassword }
        });
      }
    }

    // Delete token after single use
    await prisma.password_resets.delete({ where: { id: resetRecord.id } });

    // Audit log
    await prisma.password_reset_logs.create({
      data: { email: lowerEmail, ip_address: ip, status: 'SUCCESS' }
    });

    return NextResponse.json({ success: true, message: 'Password updated successfully' });
  } catch (error: any) {
    console.error('Reset Password Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
