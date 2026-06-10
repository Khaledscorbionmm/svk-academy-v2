import { NextRequest, NextResponse } from 'next/server';
import { query, initializeDatabase } from '@/lib/db';
import { signToken, COOKIE_NAME } from '@/lib/auth';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, age, password } = await req.json();

    if (!name || !password || (!email && !phone)) {
      return NextResponse.json({ error: 'يرجى إدخال كافة البيانات المطلوبة' }, { status: 400 });
    }

    await initializeDatabase();

    // Check if email or phone already exists
    if (email) {
      const emailCheck = await query('SELECT id FROM students WHERE email = $1', [email]);
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
    `, [name, email || null, phone || null, parsedAge, hash]);

    const user = insertRes[0] as { id: number; name: string; email: string | null; phone: string | null };
    const token = signToken({ id: user.id, email: (user.email || user.phone) as string, name: user.name, role: 'student' });

    const response = NextResponse.json({
      success: true,
      user: { id: user.id, name: user.name, email: user.email }
    });

    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/'
    });

    return response;
  } catch (error) {
    console.error('[Register API Error]', error);
    return NextResponse.json({ error: 'حدث خطأ أثناء إنشاء الحساب' }, { status: 500 });
  }
}
