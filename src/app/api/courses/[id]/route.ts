import { NextRequest, NextResponse } from 'next/server';
import { query, queryOne, initializeDatabase } from '@/lib/db';
import { verifyToken, COOKIE_NAME } from '@/lib/auth';
import { pythonTrackData } from '@/context/tracks/pythonData';
import { cyberTrackData } from '@/context/tracks/cyberData';
import { languageTrackData } from '@/context/tracks/languageData';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await initializeDatabase();
    
    const course = await queryOne<Record<string, unknown>>(
      'SELECT * FROM courses WHERE id = $1',
      [id]
    );
    
    if (!course) return NextResponse.json({ error: 'الكورس غير موجود' }, { status: 404 });
    
    // Inject static modular curriculum instead of database lessons
    let lessons: any[] = [];
    if (course.category === 'python') lessons = pythonTrackData;
    else if (course.category === 'security' || course.category === 'cybersecurity') lessons = cyberTrackData;
    else if (course.category === 'languages') lessons = languageTrackData;
    
    // Fallback to database if no static track found (for legacy/other courses)
    if (lessons.length === 0) {
      lessons = await query<Record<string, unknown>>(
        'SELECT id, title, order_index, is_free, duration_minutes, audio_url, video_url FROM lessons WHERE course_id = $1 ORDER BY order_index',
        [id]
      );
    } else {
      // Map static lessons to have an 'id' property matching their slug so existing components don't break
      lessons = lessons.map(l => ({ ...l, id: l.lesson_slug, course_id: course.id }));
    }
    let isEnrolled = false;
    const adminToken = request.cookies.get(COOKIE_NAME)?.value;
    const studentToken = request.cookies.get('svk_student_token')?.value;
    let payload = adminToken ? verifyToken(adminToken) : null;
    if (!payload && studentToken) payload = verifyToken(studentToken);

    if (payload && payload.role === 'student') {
      const enrollCheck = await query('SELECT id FROM enrollments WHERE student_id = $1 AND course_id = $2', [payload.id, course.id]);
      if (enrollCheck.length > 0) isEnrolled = true;
    } else if (payload && payload.role === 'admin') {
      isEnrolled = true; // Admins have access to everything
    }

    return NextResponse.json({ course, lessons, isEnrolled });
  } catch (e) {
    console.error('[Course Detail Error]', e);
    return NextResponse.json({ error: 'حدث خطأ في جلب الكورس' }, { status: 500 });
  }
}
