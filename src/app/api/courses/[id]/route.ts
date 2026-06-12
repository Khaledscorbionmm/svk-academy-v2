import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const prisma = new PrismaClient();
import { pythonTrackData } from '@/context/tracks/pythonData';
import { cyberTrackData } from '@/context/tracks/cyberData';
import { languageTrackData } from '@/context/tracks/languageData';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    // Support querying by category string (e.g. "python") or integer ID
    let course;
    if (isNaN(Number(id))) {
        course = await prisma.courses.findFirst({ where: { category: id } });
    } else {
        course = await prisma.courses.findUnique({ where: { id: Number(id) } });
    }
    
    if (!course) return NextResponse.json({ error: 'الكورس غير موجود' }, { status: 404 });
    
    // Inject static modular curriculum instead of database lessons
    let lessons: any[] = [];
    if (course.category === 'python') lessons = pythonTrackData;
    else if (course.category === 'security' || course.category === 'cybersecurity') lessons = cyberTrackData;
    else if (course.category === 'languages') lessons = languageTrackData;
    
    // Fallback to database if no static track found (for legacy/other courses)
    if (lessons.length === 0) {
      const dbLessons = await prisma.lessons.findMany({
          where: { course_id: course.id },
          orderBy: { order_index: 'asc' },
          select: { id: true, title: true, order_index: true, is_free: true, duration_minutes: true, audio_url: true, video_url: true }
      });
      lessons = dbLessons;
    } else {
      // Map static lessons to have an 'id' property matching their slug so existing components don't break
      lessons = lessons.map(l => ({ ...l, id: l.lesson_slug, course_id: course?.id }));
    }
    let isEnrolled = false;
    const session = await getServerSession(authOptions);

    if (session && session.user) {
      if (session.user.role === 'admin') {
        isEnrolled = true;
      } else if (session.user.role === 'student') {
        const enrollCheck = await prisma.enrollments.findFirst({
            where: { student_id: Number(session.user.id), course_id: course.id }
        });
        if (enrollCheck) isEnrolled = true;
      }
    }

    return NextResponse.json({ course, lessons, isEnrolled });
  } catch (e) {
    console.error('[Course Detail Error]', e);
    return NextResponse.json({ error: 'حدث خطأ في جلب الكورس' }, { status: 500 });
  }
}
