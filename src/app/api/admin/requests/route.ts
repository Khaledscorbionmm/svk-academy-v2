import { NextRequest, NextResponse } from 'next/server';
import { query, initializeDatabase } from '@/lib/db';
import { verifyToken } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    await initializeDatabase();
    const adminToken = request.cookies.get('svk_admin_token')?.value;
    const adminPayload = adminToken ? verifyToken(adminToken) : null;
    
    if (!adminPayload || adminPayload.role !== 'admin') {
      return NextResponse.json({ error: 'غير مصرح لك للوصول إلى هذه البيانات' }, { status: 403 });
    }
    
    // Fetch all requests along with student details
    const requests = await query(
      `SELECT la.id, la.student_id, la.lesson_slug, la.status, la.requested_at, la.approved_at,
              s.name as student_name, s.email as student_email
       FROM lesson_access la
       JOIN students s ON la.student_id = s.id
       ORDER BY la.requested_at DESC`
    );
    
    return NextResponse.json({ requests });
  } catch (error) {
    console.error('[Admin Get Requests Error]', error);
    return NextResponse.json({ error: 'حدث خطأ في جلب طلبات التفعيل' }, { status: 500 });
  }
}
