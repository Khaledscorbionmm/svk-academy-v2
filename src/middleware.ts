import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/auth';

// Public paths that don't need auth
const PUBLIC_PATHS = [
  '/admin/login',
  '/api/auth/login',
  '/api/healthz',
  '/_next',
  '/favicon.ico',
  '/public',
];

// Paths that require admin auth
const ADMIN_PATHS = ['/admin/dashboard', '/admin/courses', '/admin/students', '/admin/settings'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public paths
  if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // Redirect root to admin login
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // Check auth for admin routes and protected APIs
  const requiresAuth =
    ADMIN_PATHS.some((p) => pathname.startsWith(p)) ||
    (pathname.startsWith('/api/') && !pathname.startsWith('/api/auth/login') && !pathname.startsWith('/api/healthz'));

  if (requiresAuth) {
    const token = request.cookies.get(COOKIE_NAME)?.value;

    if (!token) {
      if (pathname.startsWith('/api/')) {
        return NextResponse.json({ error: 'غير مصادق عليه' }, { status: 401 });
      }
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }

    const payload = verifyToken(token);

    if (!payload) {
      if (pathname.startsWith('/api/')) {
        return NextResponse.json({ error: 'جلسة منتهية الصلاحية' }, { status: 401 });
      }
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }

    // Add user info to request headers for downstream use
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-id', String(payload.id));
    requestHeaders.set('x-user-email', payload.email);
    requestHeaders.set('x-user-role', payload.role);

    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
};
