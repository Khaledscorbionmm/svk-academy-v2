import { NextResponse } from 'next/server';
import { query, initDb } from '@/lib/db';

export async function GET() {
  try {
    await initDb();
    
    // Try each query to see which one fails
    let errors: string[] = [];

    try {
      await query('SELECT id, name, xp FROM students LIMIT 1');
    } catch(e: any) {
      errors.push('students table: ' + e.message);
    }

    try {
      await query(`SELECT c.id, c.title, c.title_ar, c.thumbnail_url, c.category,
              (SELECT COUNT(*) FROM lessons l WHERE l.course_id = c.id) as total_lessons,
              (SELECT COUNT(*) FROM lesson_access la WHERE la.student_id = 1 AND la.course_id = c.id AND la.completed_at IS NOT NULL) as completed_lessons
       FROM courses c
       JOIN enrollments e ON e.course_id = c.id
       WHERE e.student_id = 1
       LIMIT 6`);
    } catch(e: any) {
      errors.push('courses query: ' + e.message);
    }
    
    try {
       await query(`SELECT la.lesson_slug, la.score, la.total_questions, la.completed_at, c.title_ar as course_title
       FROM lesson_access la
       JOIN courses c ON c.id = la.course_id
       WHERE la.student_id = 1 AND la.score IS NOT NULL
       ORDER BY la.completed_at DESC
       LIMIT 5`);
    } catch(e: any) {
       errors.push('recentQuizzes query: ' + e.message);
    }

    return NextResponse.json({ success: true, errors });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
