import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { verifyToken, COOKIE_NAME } from '@/lib/auth';
import { pythonTrackData } from '@/context/tracks/pythonData';
import { cyberTrackData } from '@/context/tracks/cyberData';
import { languageTrackData } from '@/context/tracks/languageData';

export async function GET(req: NextRequest, { params }: { params: Promise<{ lessonId: string }> }) {
  try {
    const { lessonId } = await params;
    
    let isStatic = false;
    let lesson: any = null;
    let courseCategory = '';
    let allStaticLessons: any[] = [];
    
    // Check static modular arrays first (lessonId acts as lesson_slug)
    if (lessonId.startsWith('python-')) {
      isStatic = true; courseCategory = 'python'; allStaticLessons = pythonTrackData;
    } else if (lessonId.startsWith('cyber-')) {
      isStatic = true; courseCategory = 'cybersecurity'; allStaticLessons = cyberTrackData;
    } else if (lessonId.startsWith('lang-')) {
      isStatic = true; courseCategory = 'languages'; allStaticLessons = languageTrackData;
    }
    
    if (isStatic) {
      lesson = allStaticLessons.find(l => l.lesson_slug === lessonId);
    } else {
      if (isNaN(Number(lessonId))) return NextResponse.json({ error: 'Invalid lesson ID' }, { status: 400 });
      const result = await query('SELECT * FROM lessons WHERE id = $1', [lessonId]);
      if (result.length > 0) lesson = result[0];
    }
    
    if (!lesson) return NextResponse.json({ error: 'Lesson not found' }, { status: 404 });
    
    // Find the course
    let course: any = null;
    if (isStatic) {
      const courseRes = await query('SELECT id, title, title_ar, category FROM courses WHERE category = $1 LIMIT 1', [courseCategory]);
      if (courseRes.length > 0) {
        course = courseRes[0];
        lesson.course_id = course.id;
        lesson.id = lesson.lesson_slug; // Map id to slug for frontend compatibility
      }
    } else {
      const courseRes = await query('SELECT id, title, title_ar, category FROM courses WHERE id = $1', [lesson.course_id]);
      if (courseRes.length > 0) course = courseRes[0];
    }
    
    if (!course) return NextResponse.json({ error: 'Course not found' }, { status: 404 });

    // Sidebar Lessons
    let allLessons: any[] = [];
    if (isStatic) {
      allLessons = allStaticLessons.map(l => ({ id: l.lesson_slug, title: l.title, is_free: l.is_free, duration_minutes: l.duration_minutes, content_type: l.content_type, lesson_slug: l.lesson_slug }));
    } else {
      allLessons = await query('SELECT id, title, is_free, duration_minutes, content_type, lesson_slug FROM lessons WHERE course_id = $1 ORDER BY order_index ASC', [course.id]);
    }

    // Access Check Logic
    let accessStatus = 'locked';
    const adminToken = req.cookies.get(COOKIE_NAME)?.value;
    const studentToken = req.cookies.get('svk_student_token')?.value;
    
    let payload = adminToken ? verifyToken(adminToken) : null;
    if (!payload && studentToken) payload = verifyToken(studentToken);

    const isFree = lesson.is_free || Number(lesson.order_index) === 1;

    if (payload) {
      if (payload.role === 'admin') {
        accessStatus = 'approved';
      } else if (payload.role === 'student') {
        if (isFree) accessStatus = 'approved';
        else {
          const enrollCheck = await query('SELECT id FROM enrollments WHERE student_id = $1 AND course_id = $2', [payload.id, course.id]);
          if (enrollCheck.length > 0) accessStatus = 'approved';
        }
      }
    } else {
      if (isFree) accessStatus = 'approved';
    }

    const studentInfo = payload && payload.role === 'student' ? { name: payload.name || '', email: payload.email || '', phone: (payload as any).phone || '' } : null;

    let hasRequested = false;
    if (payload && payload.role === 'student') {
      const requestCheck = await query("SELECT id FROM course_requests WHERE student_id = $1 AND course_id = $2 AND status = 'pending'", [payload.id, course.id]);
      if (requestCheck.length > 0) hasRequested = true;
    }

    // Transform content JSON to text_content string to fit old API schema if static
    if (isStatic && accessStatus === 'approved') {
      lesson.text_content = JSON.stringify([lesson.content]); 
      // The frontend flashcards parser expects text_content string or stringified JSON if it's language track.
      // We will adjust LanguageLearningLayout to parse the exact schema.
    }

    return NextResponse.json({
      lesson: accessStatus === 'approved' ? lesson : { id: lesson.id || lesson.lesson_slug, course_id: course.id, title: lesson.title, is_free: false, content_type: lesson.content_type },
      course,
      sidebar: allLessons,
      accessStatus,
      studentInfo,
      hasRequested
    });
  } catch (error) {
    console.error('Failed to fetch lesson:', error);
    return NextResponse.json({ error: 'Failed to fetch lesson' }, { status: 500 });
  }
}
