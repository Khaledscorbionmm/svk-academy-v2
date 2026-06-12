import { verifyToken, COOKIE_NAME } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { query, initializeDatabase } from '@/lib/db';



export async function GET(request: NextRequest) {
  try {
    await initializeDatabase();
    
    const token = request.cookies.get(COOKIE_NAME)?.value;
    const decoded = token ? verifyToken(token) : null;
    
    if (!decoded || decoded.role !== 'admin') {
      return NextResponse.json({ error: 'غير مصرح لك للوصول إلى هذه البيانات' }, { status: 403 });
    }
    
    // Fetch course requests
    const courseRequests = await query(`
      SELECT cr.student_id, cr.course_id, cr.status, cr.requested_at,
             s.name as student_name, s.email as student_email,
             c.title as course_title, c.price as course_price
      FROM course_requests cr
      JOIN students s ON cr.student_id = s.id
      JOIN courses c ON cr.course_id = c.id
      WHERE cr.status = 'pending'
      ORDER BY cr.requested_at DESC
    `);
    
    // Also fetch lesson_access requests if any
    const lessonRequests = await query(`
      SELECT la.id, la.student_id, la.lesson_slug, la.status, la.requested_at,
             s.name as student_name, s.email as student_email,
             c.title as course_title
      FROM lesson_access la
      JOIN students s ON la.student_id = s.id
      JOIN courses c ON la.course_id = c.id
      WHERE la.status = 'requested'
      ORDER BY la.requested_at DESC
    `);
    
    return NextResponse.json({ courseRequests, lessonRequests });
  } catch (error) {
    console.error('[Admin Get Requests Error]', error);
    return NextResponse.json({ error: 'حدث خطأ في جلب طلبات التفعيل' }, { status: 500 });
  }
}
