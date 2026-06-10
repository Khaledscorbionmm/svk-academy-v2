import { NextRequest, NextResponse } from 'next/server';
import { query, initializeDatabase } from '@/lib/db';
import { signToken, COOKIE_NAME, COOKIE_OPTIONS } from '@/lib/auth';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, age, password, code } = await req.json();

    if (!name || !password || !email || !code) {
      return NextResponse.json({ error: 'يرجى إدخال كافة البيانات المطلوبة بالإضافة لكود تفعيل البريد' }, { status: 400 });
    }

    const emailTrimmed = email.trim().toLowerCase();

    await initializeDatabase();

    // Verify verification code (OTP)
    const verRows = await query(`
      SELECT code FROM email_verifications 
      WHERE email = $1 AND expires_at > NOW() 
      ORDER BY created_at DESC LIMIT 1
    `, [emailTrimmed]) as any[];

    if (!verRows.length || verRows[0].code !== code.trim()) {
      return NextResponse.json({ error: 'كود التحقق غير صحيح أو انتهت صلاحيته' }, { status: 400 });
    }

    // Delete used codes
    await query('DELETE FROM email_verifications WHERE email = $1', [emailTrimmed]);

    // Check if email or phone already exists
    if (emailTrimmed) {
      const emailCheck = await query('SELECT id FROM students WHERE email = $1', [emailTrimmed]);
      if (emailCheck.length > 0) {
        return NextResponse.json({ error: 'البريد الإلكتروني مسجل مسبقاً' }, { status: 400 });
      }
    }
    
    if (phone) {
      const phoneCheck = await query('SELECT id FROM students WHERE phone = $1', [phone]);
      if (phoneCheck.length > 0) {
        return NextResponse.json({ error: 'رقم الهاتف مسجل مسبقاً' }, { status: 400 });
      }
    }

    const hash = await bcrypt.hash(password, 12);
    const parsedAge = age ? parseInt(age, 10) : null;

    const insertRes = await query(`
      INSERT INTO students (name, email, phone, age, password_hash)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, name, email, phone
    `, [name, emailTrimmed || null, phone || null, parsedAge, hash]);

    const user = insertRes[0] as { id: number; name: string; email: string | null; phone: string | null };
    const token = signToken({ id: user.id, email: (user.email || user.phone) as string, name: user.name, role: 'student' });

    const response = NextResponse.json({
      success: true,
      user: { id: user.id, name: user.name, email: user.email }
    });

    response.cookies.set(COOKIE_NAME, token, COOKIE_OPTIONS);
    response.cookies.set('svk_student_token', token, COOKIE_OPTIONS);

    return response;
  } catch (error) {
    console.error('[Register API Error]', error);
    return NextResponse.json({ error: 'حدث خطأ أثناء إنشاء الحساب' }, { status: 500 });
  }
}
