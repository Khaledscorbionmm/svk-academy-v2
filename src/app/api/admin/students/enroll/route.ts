import { NextRequest, NextResponse } from 'next/server';
import { query, initializeDatabase } from '@/lib/db';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || (session.user as any).role !== 'admin') {
    return NextResponse.json({ error: 'غير مصرح لك' }, { status: 403 });
  }

  try {
    await initializeDatabase();
    const { searchParams } = new URL(request.url);
    const studentId = searchParams.get('studentId');

    if (!studentId) {
      return NextResponse.json({ error: 'مُعرف الطالب مطلوب' }, { status: 400 });
    }

    // Get active enrollments
    const enrollments = await query(
      'SELECT course_id FROM enrollments WHERE student_id = $1',
      [studentId]
    );

    // Get list of all courses to display
    const courses = await query(
      'SELECT id, title, title_ar FROM courses ORDER BY created_at DESC'
    );

    // Get pending course requests
    const requested = await query(
      "SELECT course_id FROM course_requests WHERE student_id = $1 AND status = 'pending'",
      [studentId]
    );

    const activeCourseIds = enrollments.map((e: any) => e.course_id);
    const requestedCourseIds = requested.map((r: any) => r.course_id);

    return NextResponse.json({ activeCourseIds, courses, requestedCourseIds });
  } catch (error) {
    console.error('[Admin Enrollments GET Error]', error);
    return NextResponse.json({ error: 'حدث خطأ في جلب اشتراكات الطالب' }, { status: 500 });
  }
}

// Toggle enrollment status for a student in a course
export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || (session.user as any).role !== 'admin') {
    return NextResponse.json({ error: 'غير مصرح لك' }, { status: 403 });
  }

  try {
    await initializeDatabase();
    const { studentId, courseId, activate } = await request.json();

    if (!studentId || !courseId) {
      return NextResponse.json({ error: 'البيانات المطلوبة ناقصة' }, { status: 400 });
    }

    if (activate) {
      // Enroll student in course
      await query(`
        INSERT INTO enrollments (student_id, course_id)
        VALUES ($1, $2)
        ON CONFLICT (student_id, course_id) DO NOTHING
      `, [studentId, courseId]);

      // Approve pending requests
      await query(`
        UPDATE course_requests
        SET status = 'approved'
        WHERE student_id = $1 AND course_id = $2
      `, [studentId, courseId]);
    } else {
      // Remove enrollment
      await query(
        'DELETE FROM enrollments WHERE student_id = $1 AND course_id = $2',
        [studentId, courseId]
      );

      // Clean up requests
      await query(`
        DELETE FROM course_requests
        WHERE student_id = $1 AND course_id = $2
      `, [studentId, courseId]);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Admin Enrollments POST Error]', error);
    return NextResponse.json({ error: 'حدث خطأ في تعديل اشتراك الكورس' }, { status: 500 });
  }
}
