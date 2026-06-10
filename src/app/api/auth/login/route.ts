import { NextRequest, NextResponse } from 'next/server';
import { signToken, hashPassword, comparePassword, COOKIE_NAME, COOKIE_OPTIONS } from '@/lib/auth';

// Hardcoded admin for when DB is unavailable
const HARDCODED_ADMIN = {
  id: 1,
  email: 'admin@smartvenom.com',
  password: 'Admin@SVK2025!',
  name: 'مشرف النظام - خالد',
  role: 'admin',
};

async function tryDatabaseLogin(identifier: string, password: string) {
  try {
    const { query, queryOne, initializeDatabase } = await import('@/lib/db');
    await initializeDatabase();
    
    const lowerIdentifier = identifier.toLowerCase().trim();

    // Check admins
    const admin = await queryOne<{
      id: number; email: string; name: string; role: string; password_hash: string;
    }>('SELECT id, email, name, role, password_hash FROM admins WHERE email = $1', [lowerIdentifier]);

    if (admin) {
      const valid = await comparePassword(password, admin.password_hash);
      if (valid) {
        await query('UPDATE admins SET last_login = NOW() WHERE id = $1', [admin.id]);
        return { id: admin.id, email: admin.email, name: admin.name, role: admin.role };
      }
      return null;
    }

    // Check students (by email or phone)
    const student = await queryOne<{
      id: number; email: string; phone: string; name: string; password_hash: string; is_active: boolean;
    }>('SELECT id, email, phone, name, password_hash, is_active FROM students WHERE email = $1 OR phone = $1', [lowerIdentifier]);

    if (student) {
      if (student.is_active === false) {
         throw new Error('BANNED');
      }
      const valid = await comparePassword(password, student.password_hash);
      if (valid) {
        return { id: student.id, email: student.email || student.phone, name: student.name, role: 'student' };
      }
      return null;
    }

    // Auto-seed default admin
    if (lowerIdentifier === HARDCODED_ADMIN.email) {
      const hash = await hashPassword(HARDCODED_ADMIN.password);
      await query(
        'INSERT INTO admins (email, password_hash, name, role) VALUES ($1,$2,$3,$4) ON CONFLICT (email) DO NOTHING',
        [HARDCODED_ADMIN.email, hash, HARDCODED_ADMIN.name, HARDCODED_ADMIN.role]
      );
      const newAdmin = await queryOne<{
        id: number; email: string; name: string; role: string; password_hash: string;
      }>('SELECT id, email, name, role, password_hash FROM admins WHERE email = $1', [lowerIdentifier]);
      if (newAdmin) {
        const valid = await comparePassword(password, newAdmin.password_hash);
        if (valid) return { id: newAdmin.id, email: newAdmin.email, name: newAdmin.name, role: newAdmin.role };
      }
    }
    return null;
  } catch (err: any) {
    if (err.message === 'BANNED') return 'BANNED';
    console.warn('[DB Login failed, using fallback]', (err as Error).message);
    return undefined; // undefined = DB error, try fallback
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { identifier, email, password } = body;
    const loginIdentifier = identifier || email;

    if (!loginIdentifier || !password) {
      return NextResponse.json({ error: 'البريد/الهاتف وكلمة المرور مطلوبان' }, { status: 400 });
    }

    let user: { id: number; email: string; name: string; role: string } | null = null;
    let dbWorking = true;

    // Try DB login first
    const dbResult = await tryDatabaseLogin(loginIdentifier, password);
    
    if (dbResult === undefined) {
      // DB error - use hardcoded fallback
      dbWorking = false;
      if (loginIdentifier.toLowerCase().trim() === HARDCODED_ADMIN.email && password === HARDCODED_ADMIN.password) {
        user = { id: HARDCODED_ADMIN.id, email: HARDCODED_ADMIN.email, name: HARDCODED_ADMIN.name, role: HARDCODED_ADMIN.role };
      }
    } else {
      user = dbResult as any;
    }

    if (user === 'BANNED') {
      return NextResponse.json({ error: 'تم إيقاف حسابك. يرجى التواصل مع الإدارة.' }, { status: 403 });
    }

    if (!user) {
      return NextResponse.json({ error: 'بيانات الدخول غير صحيحة' }, { status: 401 });
    }

    const token = signToken({ id: user.id, email: user.email, name: user.name, role: user.role });

    const response = NextResponse.json({
      success: true,
      user: { id: user.id, email: user.email, name: user.name, role: user.role },
      dbStatus: dbWorking ? 'connected' : 'offline',
    });

    if (user.role === 'admin') {
      response.cookies.set(COOKIE_NAME, token, COOKIE_OPTIONS);
    } else {
      response.cookies.set(COOKIE_NAME, token, COOKIE_OPTIONS);
      response.cookies.set('svk_student_token', token, COOKIE_OPTIONS);
    }
    return response;

  } catch (error) {
    console.error('[Login API Error]', error);
    return NextResponse.json({ error: 'حدث خطأ داخلي. يرجى المحاولة لاحقاً' }, { status: 500 });
  }
}
