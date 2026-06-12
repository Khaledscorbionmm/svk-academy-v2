import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcryptjs from 'bcryptjs';
import crypto from 'crypto';
import { sendVerificationEmail } from '@/lib/email';

// In-memory rate limiting (simple IP-based map)
const rateLimits = new Map<string, number>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'unknown_ip';
    const now = Date.now();
    const lastAttempt = rateLimits.get(ip);
    
    if (lastAttempt && now - lastAttempt < 60000) {
      return NextResponse.json({ error: 'Too many requests. Please wait 1 minute.' }, { status: 429 });
    }
    rateLimits.set(ip, now);

    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const lowerEmail = email.toLowerCase().trim();

    // Check if email exists in students or admins
    const student = await prisma.students.findUnique({ where: { email: lowerEmail } });
    const admin = await prisma.admins.findUnique({ where: { email: lowerEmail } });

    if (!student && !admin) {
      // Log the failure
      await prisma.password_reset_logs.create({
        data: { email: lowerEmail, ip_address: ip, status: 'FAILED_ATTEMPT_NOT_FOUND' }
      });
      // Return explicit 404 to inform the user
      return NextResponse.json({ error: 'هذا البريد الإلكتروني غير مسجل لدينا' }, { status: 404 });
    }

    // Generate secure 6-digit code
    const rawCode = crypto.randomInt(100000, 999999).toString();
    const hashedCode = await bcryptjs.hash(rawCode, 10);
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

    // Store in DB, invalidating older ones by using upsert (or delete & create)
    await prisma.password_resets.deleteMany({ where: { email: lowerEmail } });
    await prisma.password_resets.create({
      data: {
        email: lowerEmail,
        hashed_code: hashedCode,
        expires_at: expiresAt,
        attempts: 0
      }
    });

    // Send the email
    await sendVerificationEmail(lowerEmail, rawCode);

    // Audit log
    await prisma.password_reset_logs.create({
      data: { email: lowerEmail, ip_address: ip, status: 'REQUESTED' }
    });

    return NextResponse.json({ success: true, message: 'Verification code sent successfully.' });
  } catch (error: any) {
    console.error('Forgot Password Error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error', stack: error.stack }, { status: 500 });
  }
}
