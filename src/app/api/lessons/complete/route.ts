import { NextResponse, NextRequest } from 'next/server';
import { query, initDb } from '@/lib/db';
import { verifyToken } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    await initDb();

    // Get student from JWT cookie
    const token = req.cookies.get('svk_student_token')?.value;
    const payload = token ? verifyToken(token) : null;

    if (!payload) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { lessonSlug, score, totalQuestions } = await req.json();

    if (!lessonSlug || score === undefined || !totalQuestions) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Get student
    const studentRows = await query(
      'SELECT id, xp FROM students WHERE email = $1',
      [payload.email]
    ) as any[];

    if (!studentRows.length) {
      return NextResponse.json({ error: 'Student not found' }, { status: 404 });
    }

    const student = studentRows[0];
    const studentId = student.id;

    // Check lesson_access exists and is approved
    const accessRows = await query(
      `SELECT id, completed_at FROM lesson_access WHERE student_id = $1 AND lesson_slug = $2 AND status = 'approved'`,
      [studentId, lessonSlug]
    ) as any[];

    if (!accessRows.length) {
      return NextResponse.json({ error: 'No approved access for this lesson' }, { status: 403 });
    }

    // Mark as complete with score
    await query(
      `UPDATE lesson_access
       SET completed_at = NOW(), score = $1, total_questions = $2
       WHERE student_id = $3 AND lesson_slug = $4 AND status = 'approved'`,
      [score, totalQuestions, studentId, lessonSlug]
    );

    // Award XP based on score percentage (max 50 XP per lesson, scaled by score)
    const alreadyCompleted = accessRows[0].completed_at !== null;
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
