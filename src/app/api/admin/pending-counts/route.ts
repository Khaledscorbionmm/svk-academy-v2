import { NextRequest, NextResponse } from 'next/server';
import { query, initializeDatabase } from '@/lib/db';
import { verifyToken, COOKIE_NAME } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get(COOKIE_NAME)?.value;
    if (!token) return NextResponse.json({ error: 'غير مصرح' }, { status: 401 });

    const payload = verifyToken(token);
    if (!payload || payload.role !== 'admin') {
      return NextResponse.json({ error: 'غير مسموح' }, { status: 403 });
    }

    await initializeDatabase();

    // 1. Pending course requests
    const courseRes = await query('SELECT COUNT(*) as count FROM course_requests WHERE status = $1', ['pending']);
    const pendingCourses = parseInt((courseRes[0]?.count as string) || '0', 10);

    // 2. Pending lesson access requests
    const lessonRes = await query('SELECT COUNT(*) as count FROM lesson_access WHERE status = $1', ['requested']);
    const pendingLessons = parseInt((lessonRes[0]?.count as string) || '0', 10);

    return NextResponse.json({
      pendingCourses,
      pendingLessons,
      totalPending: pendingCourses + pendingLessons
    });
  } catch (error) {
    console.error('[Pending Counts API Error]', error);
    return NextResponse.json({ error: 'خطأ في جلب الأعداد المعلقة' }, { status: 500 });
  }
}
