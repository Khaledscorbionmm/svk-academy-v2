import { NextRequest, NextResponse } from 'next/server';
import { query, initializeDatabase } from '@/lib/db';
import { verifyToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    await initializeDatabase();
    
    // Check student token
    const token = request.cookies.get('svk_student_token')?.value;
    if (!token) {
      return NextResponse.json({ error: 'يرجى تسجيل الدخول أولاً' }, { status: 401 });
    }

    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json({ error: 'جلسة منتهية الصلاحية، يرجى تسجيل الدخول مجدداً' }, { status: 401 });
    }

    const { courseId } = await request.json();
    if (!courseId) {
      return NextResponse.json({ error: 'مُعرف الكورس مطلوب' }, { status: 400 });
    }

    // Verify course exists
    const courseCheck = await query('SELECT id FROM courses WHERE id = $1', [courseId]);
    if (courseCheck.length === 0) {
      return NextResponse.json({ error: 'الكورس غير موجود' }, { status: 404 });
    }

    // Upsert activation request
    await query(`
      INSERT INTO course_requests (student_id, course_id, status)
      VALUES ($1, $2, 'pending')
      ON CONFLICT (student_id, course_id) 
      DO UPDATE SET status = 'pending', requested_at = NOW()
    `, [payload.id, courseId]);

    return NextResponse.json({ success: true, message: 'تم إرسال طلب تفعيل الكورس بنجاح' });
  } catch (error) {
    console.error('[Request Activation Error]', error);
    return NextResponse.json({ error: 'حدث خطأ أثناء إرسال طلب التفعيل' }, { status: 500 });
  }
}
