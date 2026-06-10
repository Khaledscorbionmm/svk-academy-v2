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
    
    const students = await query(
      'SELECT id, name, email, phone, country, created_at FROM students ORDER BY created_at DESC'
    );
    
    return NextResponse.json({ students });
  } catch (error) {
    console.error('[Admin Get Students Error]', error);
    return NextResponse.json({ error: 'حدث خطأ في جلب بيانات الطلاب' }, { status: 500 });
  }
}
