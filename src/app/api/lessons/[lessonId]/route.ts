import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { verifyToken, COOKIE_NAME } from '@/lib/auth';

export async function GET(req: NextRequest, { params }: { params: Promise<{ lessonId: string }> }) {
  try {
    const { lessonId } = await params;
    
    if (isNaN(Number(lessonId))) {
      return NextResponse.json({ error: 'Invalid lesson ID' }, { status: 400 });
    }
    
    // Fetch lesson first
    const result = await query('SELECT * FROM lessons WHERE id = $1', [lessonId]);
    if (result.length === 0) {
      return NextResponse.json({ error: 'Lesson not found' }, { status: 404 });
    }
    const lesson = result[0] as any;
    
    // Check if it belongs to a course, get course details
    const courseRes = await query('SELECT id, title, title_ar, category FROM courses WHERE id = $1', [lesson.course_id]);
    const course = courseRes[0] as any;

    // Get all lessons for sidebar
    const allLessonsRes = await query('SELECT id, title, is_free, duration_minutes, content_type FROM lessons WHERE course_id = $1 ORDER BY order_index ASC', [lesson.course_id]);
    const allLessons = allLessonsRes;

    // Check Access
    let accessStatus = 'locked';
    const token = req.cookies.get(COOKIE_NAME)?.value;
    const payload = token ? verifyToken(token) : null;

    if (payload) {
      if (payload.role === 'admin') {
        accessStatus = 'approved'; // Admins can access everything
      } else if (payload.role === 'student') {
        if (lesson.is_free) {
          accessStatus = 'approved';
        } else {
          // Check enrollment
          const enrollCheck = await query(
            'SELECT id FROM enrollments WHERE student_id = $1 AND course_id = $2',
            [payload.id, lesson.course_id]
          );
          if (enrollCheck.length > 0) {
            accessStatus = 'approved';
          }
        }
      }
    } else {
      // Guest access
      if (lesson.is_free) {
        accessStatus = 'approved';
      }
    }

    // Get current student info (if any) to pre-fill WhatsApp message
    const studentInfo = payload && payload.role === 'student' ? {
      name: payload.name || '',
      email: payload.email || '',
      phone: (payload as any).phone || ''
    } : null;

    return NextResponse.json({
      lesson: accessStatus === 'approved' ? lesson : { 
        id: lesson.id, 
        course_id: lesson.course_id, 
        title: lesson.title, 
        is_free: false, 
        content_type: lesson.content_type 
      },
      course,
      sidebar: allLessons,
      accessStatus,
      studentInfo
    });
  } catch (error) {
    console.error('Failed to fetch lesson:', error);
    return NextResponse.json({ error: 'Failed to fetch lesson' }, { status: 500 });
  }
}
