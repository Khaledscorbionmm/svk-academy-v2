import { NextResponse, NextRequest } from 'next/server';
import { query, initDb } from '@/lib/db';
import { getCombinedSession } from "@/lib/auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
  try {
    await initDb();

    const session = await getCombinedSession();

    if (!session || !session.user || (session.user as any).role !== 'student') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const payload = session.user as any;

    const { lessonSlug, score, totalQuestions } = await req.json();

    if (!lessonSlug || score === undefined || !totalQuestions) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Get student
    const studentRows = await query(
      'SELECT id, xp FROM students WHERE email = $1 OR phone = $1',
      [payload.email]
    ) as any[];

    if (!studentRows.length) {
      return NextResponse.json({ error: 'Student not found' }, { status: 404 });
    }

    const student = studentRows[0];
    const studentId = student.id;

    // Get course_id for this lesson
    const lessonRows = await query(
      'SELECT course_id, is_free FROM lessons WHERE id = $1',
      [parseInt(lessonSlug, 10) || 0]
    ) as any[];

    if (!lessonRows.length) {
      return NextResponse.json({ error: 'Lesson not found' }, { status: 404 });
    }
    const courseId = lessonRows[0].course_id;
    const isFree = lessonRows[0].is_free;

    // Check if enrolled in this course
    const enrollRows = await query(
      'SELECT id FROM enrollments WHERE student_id = $1 AND course_id = $2',
      [studentId, courseId]
    ) as any[];

    let isAuthorized = enrollRows.length > 0;
    let alreadyCompleted = false;

    // If not enrolled directly, check manual override approved lesson_access or if lesson is free
    if (!isAuthorized) {
      const accessRows = await query(
        `SELECT id, completed_at FROM lesson_access WHERE student_id = $1 AND lesson_slug = $2 AND status = 'approved'`,
        [studentId, lessonSlug]
      ) as any[];
      if (accessRows.length > 0) {
        isAuthorized = true;
        alreadyCompleted = accessRows[0].completed_at !== null;
      } else if (isFree) {
        isAuthorized = true;
        const freeAccessRows = await query(
          `SELECT completed_at FROM lesson_access WHERE student_id = $1 AND lesson_slug = $2`,
          [studentId, lessonSlug]
        ) as any[];
        if (freeAccessRows.length > 0) {
          alreadyCompleted = freeAccessRows[0].completed_at !== null;
        }
      }
    } else {
      // Check if already completed
      const accessRows = await query(
        `SELECT completed_at FROM lesson_access WHERE student_id = $1 AND lesson_slug = $2`,
        [studentId, lessonSlug]
      ) as any[];
      if (accessRows.length > 0) {
        alreadyCompleted = accessRows[0].completed_at !== null;
      }
    }

    if (!isAuthorized) {
      return NextResponse.json({ error: 'No approved access for this lesson' }, { status: 403 });
    }

    // Mark as complete with score (upsert)
    await query(
      `INSERT INTO lesson_access (student_id, course_id, lesson_slug, status, completed_at, score, total_questions)
       VALUES ($1, $2, $3, 'approved', NOW(), $4, $5)
       ON CONFLICT (student_id, lesson_slug)
       DO UPDATE SET completed_at = NOW(), score = $4, total_questions = $5, status = 'approved'`,
      [studentId, courseId, lessonSlug, score, totalQuestions]
    );

    // Award XP based on score percentage (max 50 XP per lesson, scaled by score)
    let xpAwarded = 0;

    if (!alreadyCompleted) {
      const percentage = totalQuestions > 0 ? score / totalQuestions : 0;
      xpAwarded = Math.round(percentage * 50);

      if (xpAwarded > 0) {
        await query(
          'UPDATE students SET xp = COALESCE(xp, 0) + $1 WHERE id = $2',
          [xpAwarded, studentId]
        );
      }
    }

    return NextResponse.json({
      success: true,
      xpAwarded,
      alreadyCompleted,
      score,
      totalQuestions,
    });
  } catch (error) {
    console.error('Complete lesson API error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
