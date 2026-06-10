import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(req: NextRequest, { params }: { params: Promise<{ lessonId: string }> }) {
  try {
    const { lessonId } = await params;
    // TODO: Ideally check user session and lesson access rights here

    const result = await query('SELECT * FROM lessons WHERE id = $1', [lessonId]);
    if (result.length === 0) {
      return NextResponse.json({ error: 'Lesson not found' }, { status: 404 });
    }

    const lesson = result[0];
    
    // Check if it belongs to a course, get course details
    const courseRes = await query('SELECT title, title_ar, category FROM courses WHERE id = $1', [lesson.course_id]);
    const course = courseRes[0];

    // Get all lessons for sidebar
    const allLessonsRes = await query('SELECT id, title, is_free, duration_minutes, content_type FROM lessons WHERE course_id = $1 ORDER BY order_index ASC', [lesson.course_id]);
    const allLessons = allLessonsRes;

    return NextResponse.json({
      lesson,
      course,
      sidebar: allLessons
    });
  } catch (error) {
    console.error('Failed to fetch lesson:', error);
    return NextResponse.json({ error: 'Failed to fetch lesson' }, { status: 500 });
  }
}
