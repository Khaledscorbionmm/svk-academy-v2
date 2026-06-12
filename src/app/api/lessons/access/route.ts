import { NextRequest, NextResponse } from 'next/server';
import { query, queryOne, initializeDatabase } from '@/lib/db';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(request: NextRequest) {
  try {
    await initializeDatabase();
    const session = await getServerSession(authOptions);
    const { searchParams } = new URL(request.url);
    const studentIdParam = searchParams.get('studentId');
    
    let targetStudentId: number | null = null;
    
    if (session?.user && (session.user as any).role === 'admin' && studentIdParam) {
      targetStudentId = parseInt(studentIdParam, 10);
    } else {
      // Otherwise, get from student session
      if (!session || !session.user) {
        return NextResponse.json({ error: 'غير مصرح لك' }, { status: 401 });
      }
      targetStudentId = parseInt((session.user as any).id, 10);
    }
    
    if (!targetStudentId) {
      return NextResponse.json({ error: 'معرف الطالب غير صالح' }, { status: 400 });
    }
    
    const rows = await query(
      'SELECT lesson_slug, status, requested_at, approved_at FROM lesson_access WHERE student_id = $1',
      [targetStudentId]
    );
    
    return NextResponse.json({ access: rows });
  } catch (error) {
    console.error('[Get Lesson Access Error]', error);
    return NextResponse.json({ error: 'حدث خطأ في جلب بيانات الوصول' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await initializeDatabase();
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user || (session.user as any).role !== 'student') {
      return NextResponse.json({ error: 'يرجى تسجيل الدخول كطالب أولاً' }, { status: 401 });
    }
    
    const body = await request.json();
    const { courseId, lessonSlug } = body;
    
    if (!courseId || !lessonSlug) {
      return NextResponse.json({ error: 'بيانات الطلب غير مكتملة' }, { status: 400 });
    }
    
    await query(
      `INSERT INTO lesson_access (student_id, course_id, lesson_slug, status) 
       VALUES ($1, $2, $3, 'requested') 
       ON CONFLICT (student_id, lesson_slug) DO UPDATE SET status = 'requested', requested_at = NOW()`,
      [parseInt((session.user as any).id, 10), courseId, lessonSlug]
    );
    
    return NextResponse.json({ success: true, status: 'requested' });
  } catch (error) {
    console.error('[Request Lesson Access Error]', error);
    return NextResponse.json({ error: 'حدث خطأ في تقديم الطلب' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    await initializeDatabase();
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user || (session.user as any).role !== 'admin') {
      return NextResponse.json({ error: 'غير مصرح لك للقيام بهذا الإجراء' }, { status: 403 });
    }
    
    const body = await request.json();
    const { studentId, studentEmail, lessonSlug, status } = body;
    
    if (!lessonSlug || !status) {
      return NextResponse.json({ error: 'بيانات التحديث غير مكتملة' }, { status: 400 });
    }

    // Resolve student ID from email if not provided
    let resolvedStudentId = studentId;
    if (!resolvedStudentId && studentEmail) {
      const studentRows = await query('SELECT id FROM students WHERE email = $1 OR phone = $1', [studentEmail]) as any[];
      if (!studentRows.length) {
        return NextResponse.json({ error: 'الطالب غير موجود' }, { status: 404 });
      }
      resolvedStudentId = studentRows[0].id;
    }
    
    if (!resolvedStudentId) {
      return NextResponse.json({ error: 'يجب توفير معرف الطالب أو بريده الإلكتروني' }, { status: 400 });
    }
    
    const approvedAt = status === 'approved' ? new Date() : null;
    
    await query(
      `UPDATE lesson_access SET status = $1, approved_at = $2 WHERE student_id = $3 AND lesson_slug = $4`,
      [status, approvedAt, resolvedStudentId, lessonSlug]
    );
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Update Lesson Access Error]', error);
    return NextResponse.json({ error: 'حدث خطأ في تحديث البيانات' }, { status: 500 });
  }
}

