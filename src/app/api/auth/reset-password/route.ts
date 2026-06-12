import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcryptjs from 'bcryptjs';

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

    // Update in all relevant tables to ensure synchronization
    let updated = false;

    const adminResult = await prisma.admins.updateMany({
      where: { email: lowerEmail },
      data: { password_hash: newHashedPassword }
    });
    if (adminResult.count > 0) updated = true;

    const studentResult = await prisma.students.updateMany({
      where: { email: lowerEmail },
      data: { password_hash: newHashedPassword }
    });
    if (studentResult.count > 0) updated = true;

    const legacyUser = await prisma.users.findUnique({ where: { email: lowerEmail } });
    if (legacyUser) {
      await prisma.users.updateMany({
        where: { email: lowerEmail },
        data: { password_hash: newHashedPassword }
      });
      updated = true;

      // Crucial Fix: If this legacy user migrated, their student record might use their username as the email field
      if (legacyUser.username) {
        await prisma.students.updateMany({
          where: { email: legacyUser.username.toLowerCase().trim() },
          data: { password_hash: newHashedPassword }
        });
      }
    }

    if (!updated) {
       return NextResponse.json({ error: 'User not found in database to update' }, { status: 404 });
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
