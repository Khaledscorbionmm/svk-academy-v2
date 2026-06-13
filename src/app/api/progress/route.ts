import { NextRequest, NextResponse } from 'next/server';
import { query, initDb } from '@/lib/db';
import { getCombinedSession } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    await initDb();
    const session = await getCombinedSession();
    if (!session?.user || (session.user as any).role !== 'student') {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }
    const payload = session.user as any;
    const body = await req.json();
    const { lessonId, courseId, completed, score, totalQuestions } = body;

    if (!lessonId) {
      return NextResponse.json({ success: false, error: 'lessonId required' }, { status: 400 });
    }

    // Get student id
    const studentRows = await query(
      'SELECT id FROM students WHERE email = $1 OR phone = $1',
      [payload.email]
    ) as any[];

    if (!studentRows.length) {
      return NextResponse.json({ success: false, error: 'Student not found' }, { status: 404 });
    }
    const studentId = studentRows[0].id;
    const resolvedCourseId = courseId || null;

    // Upsert lesson_access row
    await query(
      `INSERT INTO lesson_access (student_id, course_id, lesson_slug, status, score, total_questions)
       VALUES ($1, $2, $3, 'approved', $4, $5)
       ON CONFLICT (student_id, lesson_slug)
       DO UPDATE SET
         score = COALESCE(EXCLUDED.score, lesson_access.score),
         total_questions = COALESCE(EXCLUDED.total_questions, lesson_access.total_questions),
         completed_at = CASE WHEN $6 THEN NOW() ELSE lesson_access.completed_at END,
         status = 'approved'`,
      [studentId, resolvedCourseId, String(lessonId), score ?? null, totalQuestions ?? null, completed ?? false]
    );

    return NextResponse.json({ success: true, message: 'Progress saved' });
  } catch (error) {
    console.error('[Progress API Error]', error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    await initDb();
    const session = await getCombinedSession();
    if (!session?.user || (session.user as any).role !== 'student') {
      return NextResponse.json({ progress: {} }, { status: 401 });
    }
    const payload = session.user as any;

    const studentRows = await query(
      'SELECT id FROM students WHERE email = $1 OR phone = $1',
      [payload.email]
    ) as any[];

    if (!studentRows.length) {
      return NextResponse.json({ progress: {} });
    }
    const studentId = studentRows[0].id;

    const rows = await query(
      `SELECT lesson_slug, status, completed_at, score, total_questions, course_id
       FROM lesson_access WHERE student_id = $1`,
      [studentId]
    ) as any[];

    const progress: Record<string, any> = {};
    for (const row of rows) {
      progress[row.lesson_slug] = {
        completed: row.completed_at !== null,
        score: row.score,
        totalQuestions: row.total_questions,
        courseId: row.course_id,
      };
    }
    return NextResponse.json({ progress });
  } catch (error) {
    console.error('[Progress GET Error]', error);
    return NextResponse.json({ progress: {} });
  }
}

export const dynamic = 'force-dynamic';
