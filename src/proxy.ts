import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/auth';

const ALWAYS_PUBLIC = [
  '/admin/login',
  '/api/auth/login',
  '/api/auth/logout',
  '/api/auth/register',
  '/api/healthz',
  '/api/courses',
  '/_next',
  '/favicon.ico',
];

const PUBLIC_PAGES = ['/', '/courses', '/learn', '/login', '/register', '/about'];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (ALWAYS_PUBLIC.some(p => pathname.startsWith(p))) return NextResponse.next();
  if (PUBLIC_PAGES.some(p => pathname === p || pathname.startsWith(p + '/'))) return NextResponse.next();

  const requiresAdminAuth =
    pathname.startsWith('/admin/dashboard') ||
    pathname.startsWith('/admin/courses') ||
    pathname.startsWith('/admin/students') ||
    pathname.startsWith('/admin/settings') ||
    pathname.startsWith('/api/admin/');

  if (requiresAdminAuth) {
    const token = request.cookies.get(COOKIE_NAME)?.value;
    if (!token) {
      if (pathname.startsWith('/api/')) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    const payload = verifyToken(token);
    if (!payload || payload.role !== 'admin') {
      if (pathname.startsWith('/api/')) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    const headers = new Headers(request.headers);
    headers.set('x-user-id', String(payload.id));
    headers.set('x-user-email', payload.email);
    headers.set('x-user-role', payload.role);
    return NextResponse.next({ request: { headers } });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
