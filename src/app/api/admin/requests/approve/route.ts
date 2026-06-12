import { NextRequest, NextResponse } from 'next/server';
import { query, initializeDatabase } from '@/lib/db';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(request: NextRequest) {
  try {
    await initializeDatabase();
    
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user || (session.user as any).role !== 'admin') {
      return NextResponse.json({ error: 'غير مصرح لك' }, { status: 403 });
    }
    
    const { studentId, courseId, action } = await request.json(); // action = 'approve' or 'reject'
    
    if (!studentId || !courseId || !action) {
      return NextResponse.json({ error: 'بيانات غير مكتملة' }, { status: 400 });
    }

    if (action === 'approve') {
      // 1. Update course_requests status
      await query(`
        UPDATE course_requests
        SET status = 'approved'
        WHERE student_id = $1 AND course_id = $2
      `, [studentId, courseId]);

      // 2. Insert into enrollments with global fallback permission indicator
      await query(`
        INSERT INTO enrollments (student_id, course_id, enrolled_at, status, access_level)
        VALUES ($1, $2, NOW(), 'active', 'full')
        ON CONFLICT (student_id, course_id) DO UPDATE SET status = 'active', access_level = 'full'
      `, [studentId, courseId]);

      // 3. Also grant full lesson access for backward compatibility with older pages
      const lessons = await query(`SELECT id, lesson_slug FROM lessons WHERE course_id = $1`, [courseId]) as any[];
      for (const lesson of lessons) {
        if (!lesson.lesson_slug) continue;
        await query(`
          INSERT INTO lesson_access (student_id, course_id, lesson_slug, status, approved_at)
          VALUES ($1, $2, $3, 'approved', NOW())
          ON CONFLICT (student_id, course_id, lesson_slug) DO UPDATE SET status = 'approved', approved_at = NOW()
        `, [studentId, courseId, lesson.lesson_slug]);
      }

      return NextResponse.json({ success: true, message: 'تم تفعيل الكورس بنجاح للطالب' });
    } else if (action === 'reject') {
      await query(`
        UPDATE course_requests
        SET status = 'rejected'
        WHERE student_id = $1 AND course_id = $2
      `, [studentId, courseId]);
      
      return NextResponse.json({ success: true, message: 'تم رفض طلب التفعيل' });
    } else {
      return NextResponse.json({ error: 'إجراء غير صالح' }, { status: 400 });
    }

  } catch (error) {
    console.error('[Admin Approve Course Request Error]', error);
    return NextResponse.json({ error: 'حدث خطأ أثناء معالجة الطلب' }, { status: 500 });
  }
}
