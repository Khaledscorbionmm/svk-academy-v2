import { NextRequest, NextResponse } from 'next/server';
import { queryOne, initializeDatabase } from '@/lib/db';
import { comparePassword, signToken, hashPassword, COOKIE_NAME, COOKIE_OPTIONS } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: 'البريد الإلكتروني وكلمة المرور مطلوبان' },
        { status: 400 }
      );
    }

    // Initialize DB and seed admin if needed
    await initializeDatabase();

    // Check if this is the default admin credentials
    const defaultAdminEmail = 'admin@smartvenom.com';
    const defaultAdminPassword = 'Admin@SVK2025!';

    let admin = await queryOne<{
      id: number;
      email: string;
      name: string;
      role: string;
      password_hash: string;
    }>(
      'SELECT id, email, name, role, password_hash FROM admins WHERE email = $1',
      [email.toLowerCase().trim()]
    );

    // Auto-seed admin if not exists
    if (!admin && email === defaultAdminEmail) {
      const hash = await hashPassword(defaultAdminPassword);
      await queryOne(
        `INSERT INTO admins (email, password_hash, name, role) VALUES ($1, $2, $3, $4)
         ON CONFLICT (email) DO NOTHING
         RETURNING id, email, name, role, password_hash`,
        [defaultAdminEmail, hash, 'مشرف النظام', 'admin']
      );
      admin = await queryOne<{
        id: number;
        email: string;
        name: string;
        role: string;
        password_hash: string;
      }>(
        'SELECT id, email, name, role, password_hash FROM admins WHERE email = $1',
        [email.toLowerCase().trim()]
      );
    }

    if (!admin) {
      return NextResponse.json(
        { error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' },
        { status: 401 }
      );
    }

    const passwordValid = await comparePassword(password, admin.password_hash);
    if (!passwordValid) {
      return NextResponse.json(
        { error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' },
        { status: 401 }
      );
    }

    // Update last login
    await queryOne(
      'UPDATE admins SET last_login = NOW() WHERE id = $1',
      [admin.id]
    );

    const token = signToken({
      id: admin.id,
      email: admin.email,
      name: admin.name,
      role: admin.role,
    });

    const response = NextResponse.json({
      success: true,
      user: { id: admin.id, email: admin.email, name: admin.name, role: admin.role },
    });

    response.cookies.set(COOKIE_NAME, token, COOKIE_OPTIONS);

    return response;
  } catch (error) {
    console.error('[Login API Error]', error);
    return NextResponse.json(
      { error: 'حدث خطأ داخلي. يرجى المحاولة لاحقاً' },
      { status: 500 }
    );
  }
}
