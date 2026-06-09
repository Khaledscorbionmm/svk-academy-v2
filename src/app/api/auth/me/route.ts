import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/auth';

export async function GET(request: NextRequest) {
  const token = request.cookies.get(COOKIE_NAME)?.value;

  if (!token) {
    return NextResponse.json({ error: 'غير مصادق عليه' }, { status: 401 });
  }

  const payload = verifyToken(token);

  if (!payload) {
    return NextResponse.json({ error: 'جلسة منتهية الصلاحية' }, { status: 401 });
  }

  return NextResponse.json({
    user: {
      id: payload.id,
      email: payload.email,
      name: payload.name,
      role: payload.role,
    },
  });
}
