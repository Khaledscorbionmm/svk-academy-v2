import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/auth';

const ALWAYS_PUBLIC = [
  '/admin/login',
  '/api/auth/login',
  '/api/auth/logout',
  '/api/auth/register',
  '/api/healthz',
  '/_next',
  '/favicon.ico',
];

const PUBLIC_PAGES = ['/', '/courses', '/login', '/register'];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Allow always public resources
  if (ALWAYS_PUBLIC.some(p => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // 2. Allow public pages
  if (PUBLIC_PAGES.some(p => pathname === p)) {
    return NextResponse.next();
  }

  // 3. Protect Admin Dashboard and APIs
  const requiresAdminAuth =
    pathname.startsWith('/admin/dashboard') ||
    pathname.startsWith('/api/admin/');

  if (requiresAdminAuth) {
    const token = request.cookies.get(COOKIE_NAME)?.value;
    if (!token) {
      if (pathname.startsWith('/api/')) {
        return NextResponse.json({ error: 'غير مصرح لك' }, { status: 401 });
      }
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    const payload = verifyToken(token);
    if (!payload || payload.role !== 'admin') {
      if (pathname.startsWith('/api/')) {
        return NextResponse.json({ error: 'غير مسموح لك' }, { status: 403 });
      }
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    return NextResponse.next();
  }

  // 4. Protect Student Dashboard and Learning Space
  const requiresStudentAuth =
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/learn');

  if (requiresStudentAuth) {
    const studentToken = request.cookies.get('svk_student_token')?.value;
    const adminToken = request.cookies.get(COOKIE_NAME)?.value;
    
    let isAuthorized = false;
    
    // Check student token
    if (studentToken) {
      const payload = verifyToken(studentToken);
      if (payload) isAuthorized = true;
    }
    
    // Admin is also allowed to view dashboard/learn space for previewing
    if (adminToken && !isAuthorized) {
      const payload = verifyToken(adminToken);
      if (payload && payload.role === 'admin') isAuthorized = true;
    }

    if (!isAuthorized) {
      if (pathname.startsWith('/api/')) {
        return NextResponse.json({ error: 'يرجى تسجيل الدخول' }, { status: 401 });
      }
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
