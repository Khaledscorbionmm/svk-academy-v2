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
    
    // Get all students
    const students = await query(`
      SELECT s.id, s.name, s.email, s.phone, s.age, s.created_at, s.is_active,
             (SELECT COUNT(*) FROM enrollments e WHERE e.student_id = s.id) as course_count,
             COALESCE(
               (SELECT JSON_AGG(JSON_BUILD_OBJECT('course_id', cr.course_id, 'title', c.title_ar))
                FROM course_requests cr
                JOIN courses c ON c.id = cr.course_id
                WHERE cr.student_id = s.id AND cr.status = 'pending'),
               '[]'::json
             ) as requested_courses
      FROM students s
      ORDER BY s.created_at DESC
    `);

    return NextResponse.json({ students });
  } catch (error) {
    console.error('[Admin Students GET Error]', error);
    return NextResponse.json({ error: 'حدث خطأ في جلب قائمة الطلاب' }, { status: 500 });
  }
}

// Toggle student status (active/inactive)
export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || (session.user as any).role !== 'admin') {
    return NextResponse.json({ error: 'غير مصرح لك' }, { status: 403 });
  }

  try {
    await initializeDatabase();
    const { studentId, is_active } = await request.json();

    if (!studentId) {
      return NextResponse.json({ error: 'مُعرف الطالب مطلوب' }, { status: 400 });
    }

    await query(
      'UPDATE students SET is_active = $1 WHERE id = $2',
      [is_active, studentId]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Admin Student Status POST Error]', error);
    return NextResponse.json({ error: 'حدث خطأ في تعديل حالة الطالب' }, { status: 500 });
  }
}

// Reset student password
export async function PUT(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || (session.user as any).role !== 'admin') {
    return NextResponse.json({ error: 'غير مصرح لك' }, { status: 403 });
  }

  try {
    await initializeDatabase();
    const { studentId, newPassword } = await request.json();

    if (!studentId || !newPassword || !newPassword.trim()) {
      return NextResponse.json({ error: 'مُعرف الطالب وكلمة المرور الجديدة مطلوبان' }, { status: 400 });
    }

    const { hashPassword } = await import('@/lib/auth');
    const hash = await hashPassword(newPassword);

    await query(
      'UPDATE students SET password_hash = $1 WHERE id = $2',
      [hash, studentId]
    );

    return NextResponse.json({ success: true, message: 'تم إعادة تعيين كلمة السر بنجاح' });
  } catch (error) {
    console.error('[Admin Student Password PUT Error]', error);
    return NextResponse.json({ error: 'حدث خطأ في إعادة تعيين كلمة السر' }, { status: 500 });
  }
}
