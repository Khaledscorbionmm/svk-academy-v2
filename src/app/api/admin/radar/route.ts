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

    // 1. Stats
    const studentsRes = await query('SELECT COUNT(*) as count FROM students');
    const coursesRes = await query('SELECT COUNT(*) as count FROM courses');
    
    // Calculate estimated revenue (students * 369)
    const totalStudents = parseInt(studentsRes[0].count as string, 10);
    const totalCourses = parseInt(coursesRes[0].count as string, 10);
    const estimatedRevenue = totalStudents * 369;

    // 2. Recent Lesson Access Requests
    const requestsRes = await query(`
      SELECT la.id, la.lesson_slug, la.status, la.requested_at,
             s.name as student_name, s.email as student_email, s.id as student_id,
             c.title_ar as course_title
      FROM lesson_access la
      JOIN students s ON la.student_id = s.id
      JOIN courses c ON la.course_id = c.id
      WHERE la.status = 'requested'
      ORDER BY la.requested_at DESC
      LIMIT 10
    `);

    // 3. Recent Signups
    const signupsRes = await query(`
      SELECT id, name, email, created_at, xp 
      FROM students 
      ORDER BY created_at DESC 
      LIMIT 5
    `);

    return NextResponse.json({
      stats: {
        totalStudents,
        totalCourses,
        revenue: estimatedRevenue,
        pendingRequests: requestsRes.length
      },
      requests: requestsRes,
      recentSignups: signupsRes
    });
  } catch (error) {
    console.error('[Radar API Error]', error);
    return NextResponse.json({ error: 'خطأ في جلب بيانات الرادار' }, { status: 500 });
  }
}
