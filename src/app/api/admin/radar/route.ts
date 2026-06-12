import { verifyToken, COOKIE_NAME } from '@/lib/auth';
import { NextResponse, NextRequest } from 'next/server';
import { query, initDb } from '@/lib/db';



export async function GET(req: NextRequest) {
  try {
    await initDb();

    // Verify admin
    const token = req.cookies.get(COOKIE_NAME)?.value;
    const decoded = token ? verifyToken(token) : null;
    if (!decoded || decoded.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Total students
    const studentsRows = await query('SELECT COUNT(*) as count FROM students') as any[];
    const totalStudents = parseInt(studentsRows[0]?.count ?? '0');

    // Total courses
    const coursesRows = await query('SELECT COUNT(*) as count FROM courses') as any[];
    const totalCourses = parseInt(coursesRows[0]?.count ?? '0');

    // Active enrollments (students who have at least 1 approved lesson_access)
    const enrollmentsRows = await query(
      `SELECT COUNT(DISTINCT student_id) as count FROM lesson_access WHERE status = 'approved'`
    ) as any[];
    const activeEnrollments = parseInt(enrollmentsRows[0]?.count ?? '0');

    // Total completed lessons
    const completedRows = await query(
      `SELECT COUNT(*) as count FROM lesson_access WHERE status = 'approved' AND completed_at IS NOT NULL`
    ) as any[];
    const completedLessons = parseInt(completedRows[0]?.count ?? '0');

    // Total pending requests
    const pendingRows = await query(
      `SELECT COUNT(*) as count FROM lesson_access WHERE status = 'requested'`
    ) as any[];
    const pendingRequests = parseInt(pendingRows[0]?.count ?? '0');

    // Students registered this month
    let newStudentsThisMonth = 0;
    try {
      const thisMonthRows = await query(
        `SELECT COUNT(*) as count FROM students WHERE created_at >= date_trunc('month', NOW())`
      ) as any[];
      newStudentsThisMonth = parseInt(thisMonthRows[0]?.count ?? '0');
    } catch (_) {
      // created_at may not exist yet
    }

    // Recent course activity
    const topCoursesRows = await query(
      `SELECT c.title_ar, c.title, COUNT(la.student_id) as enrolled_count, c.category
       FROM courses c
       LEFT JOIN lesson_access la ON la.course_id = c.id AND la.status = 'approved'
       GROUP BY c.id, c.title_ar, c.title, c.category
       ORDER BY enrolled_count DESC, c.id ASC
       LIMIT 5`
    ) as any[];

    // Top students by XP
    const topStudentsRows = await query(
      `SELECT name, email, xp FROM students ORDER BY xp DESC NULLS LAST LIMIT 5`
    ) as any[];

    // Recent pending lesson requests
    const pendingLessonsRows = await query(
      `SELECT s.name as student_name, s.email, la.lesson_slug, la.requested_at, c.title_ar as course_title
       FROM lesson_access la
       JOIN students s ON s.id = la.student_id
       JOIN courses c ON c.id = la.course_id
       WHERE la.status = 'requested'
       ORDER BY la.requested_at DESC
       LIMIT 10`
    ) as any[];

    return NextResponse.json({
      stats: {
        totalStudents,
        totalCourses,
        activeEnrollments,
        completedLessons,
        pendingRequests,
        newStudentsThisMonth,
      },
      topCourses: topCoursesRows,
      topStudents: topStudentsRows,
      pendingLessons: pendingLessonsRows,
    });
  } catch (error) {
    console.error('Admin radar API error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
