import { NextResponse, NextRequest } from 'next/server';
import { query, initDb } from '@/lib/db';
import { verifyToken, COOKIE_NAME } from '@/lib/auth';

export async function GET(req: NextRequest) {
  try {
    await initDb();

    // Verify admin via JWT cookie
    const token = req.cookies.get(COOKIE_NAME)?.value;
    const payload = token ? verifyToken(token) : null;

    if (!payload || payload.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Enrollments = students who were approved to at least 1 lesson
    const enrollmentsRows = await query(
      `SELECT
         s.id as student_id,
         s.name,
         s.email,
         c.title_ar as course_title,
         MIN(la.approved_at) as enrolled_at,
         c.price
       FROM lesson_access la
       JOIN students s ON s.id = la.student_id
       JOIN courses c ON c.id = la.course_id
       WHERE la.status = 'approved' AND la.approved_at IS NOT NULL
       GROUP BY s.id, s.name, s.email, c.id, c.title_ar, c.price
       ORDER BY MIN(la.approved_at) DESC
       LIMIT 50`
    ) as any[];

    return NextResponse.json({
      payments: enrollmentsRows,
    });
  } catch (error) {
    console.error('Admin payments API error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
