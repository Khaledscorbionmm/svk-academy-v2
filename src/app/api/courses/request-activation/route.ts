import { NextRequest, NextResponse } from 'next/server';
import { query, initializeDatabase } from '@/lib/db';
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(request: NextRequest) {
  try {
    await initializeDatabase();
    
    // Check student session
    let session: any = await getServerSession(authOptions);
    if (!session) {
      const cookieStore = cookies();
      const customToken = cookieStore.get('svk_student_token')?.value || cookieStore.get('svk_admin_token')?.value || cookieStore.get('svk_token')?.value;
      if (customToken) {
        const payload = verifyToken(customToken) as any;
        if (payload) {
          session = { user: { id: payload.id, name: payload.name, email: payload.email, role: payload.role || 'student' } };
        }
      }
    }
    if (!session || !session.user) {
      return NextResponse.json({ error: 'يرجى تسجيل الدخول أولاً' }, { status: 401 });
    }

    const payload = session.user as any;
    if (payload.role !== 'student') {
      return NextResponse.json({ error: 'صلاحيات غير كافية' }, { status: 403 });
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
    `, [parseInt(payload.id, 10), courseId]);

    return NextResponse.json({ success: true, message: 'تم إرسال طلب تفعيل الكورس بنجاح' });
  } catch (error) {
    console.error('[Request Activation Error]', error);
    return NextResponse.json({ error: 'حدث خطأ أثناء إرسال طلب التفعيل' }, { status: 500 });
  }
}
