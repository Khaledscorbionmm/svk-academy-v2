import { NextResponse, NextRequest } from 'next/server';
import { query, initDb } from '@/lib/db';
import { verifyToken } from '@/lib/auth';
import { pythonTrackData } from '@/context/tracks/pythonData';
import { cyberTrackData } from '@/context/tracks/cyberData';
import { languageTrackData } from '@/context/tracks/languageData';

export async function GET(req: NextRequest) {
  try {
    await initDb();

    // Get student from JWT cookie
    const token = req.cookies.get('svk_student_token')?.value;
    const payload = token ? verifyToken(token) : null;

    if (!payload) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const studentEmail = payload.email;

    // Get the student record
    const studentRows = await query(
      'SELECT id, name, xp FROM students WHERE email = $1 OR phone = $1',
      [studentEmail]
    ) as any[];

    if (!studentRows.length) {
      return NextResponse.json({ error: 'Student not found' }, { status: 404 });
    }

    const student = studentRows[0];
    const studentId = student.id;

    // Count approved (enrolled) courses from enrollments table
    const enrolledRows = await query(
      `SELECT COUNT(*) as count FROM enrollments WHERE student_id = $1`,
      [studentId]
    ) as any[];

    // Count completed lessons
    const completedRows = await query(
      `SELECT COUNT(*) as count FROM lesson_access WHERE student_id = $1 AND status = 'approved' AND completed_at IS NOT NULL`,
      [studentId]
    ) as any[];

    // Calculate average quiz score
    const avgRows = await query(
      `SELECT AVG(CASE WHEN total_questions > 0 THEN (score::float / total_questions) * 100 ELSE NULL END) as avg
       FROM lesson_access WHERE student_id = $1 AND score IS NOT NULL`,
      [studentId]
    ) as any[];

    // Get leaderboard rank by XP
    const rankRows = await query(
      `SELECT COUNT(*) + 1 as rank FROM students WHERE xp > $1`,
      [student.xp ?? 0]
    ) as any[];

    // Get top 5 leaderboard
    const leaderboardRows = await query(
      `SELECT name, xp, LEFT(name, 1) as avatar_letter FROM students ORDER BY xp DESC NULLS LAST LIMIT 5`
    ) as any[];

    // Get enrolled courses list with progress metrics
    const coursesRows = await query(
      `SELECT c.id, c.title, c.title_ar, c.thumbnail_url, c.category,
              (SELECT COUNT(*) FROM lessons l WHERE l.course_id = c.id) as total_lessons,
              (SELECT COUNT(*) FROM lesson_access la WHERE la.student_id = $1 AND la.course_id = c.id AND la.completed_at IS NOT NULL) as completed_lessons
       FROM courses c
       JOIN enrollments e ON e.course_id = c.id
       WHERE e.student_id = $1
       LIMIT 6`,
      [studentId]
    ) as any[];

    // Calculate progress percentage for each course
    const coursesWithProgress = coursesRows.map((course: any) => {
      let total = parseInt(course.total_lessons || '0', 10);
      
      // Inject static track lengths
      if (course.category === 'python') total = pythonTrackData.length;
      else if (course.category === 'security' || course.category === 'cybersecurity') total = cyberTrackData.length;
      else if (course.category === 'languages') total = languageTrackData.length;

      const completed = parseInt(course.completed_lessons || '0', 10);
      const progress = total > 0 ? Math.round((completed / total) * 100) : 0;
      return {
        id: course.id,
        title: course.title,
        title_ar: course.title_ar,
        thumbnail_url: course.thumbnail_url,
        category: course.category,
        progress: progress
      };
    });

    // Get recent quiz results
    const recentQuizzesRows = await query(
      `SELECT la.lesson_slug, la.score, la.total_questions, la.completed_at, c.title_ar as course_title
       FROM lesson_access la
       JOIN courses c ON c.id = la.course_id
       WHERE la.student_id = $1 AND la.score IS NOT NULL
       ORDER BY la.completed_at DESC
       LIMIT 5`,
      [studentId]
    ) as any[];

    return NextResponse.json({
      student: {
        name: student.name,
        xp: student.xp ?? 0,
      },
      stats: {
        enrolledCourses: parseInt(enrolledRows[0]?.count ?? '0'),
        completedLessons: parseInt(completedRows[0]?.count ?? '0'),
        avgScore: Math.round(parseFloat(avgRows[0]?.avg ?? '0') || 0),
        rank: parseInt(rankRows[0]?.rank ?? '1'),
      },
      leaderboard: leaderboardRows,
      courses: coursesWithProgress,
      recentQuizzes: recentQuizzesRows,
    });
  } catch (error) {
    console.error('Student dashboard API error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
