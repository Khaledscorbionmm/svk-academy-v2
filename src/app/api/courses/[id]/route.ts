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
    
    let course: any = null;
    let lessons: any[] = [];
    
    // 1. DUAL-READ ARCHITECTURE: Try Database First
    try {
        if (isNaN(Number(id))) {
            course = await prisma.courses.findFirst({ where: { category: id } });
        } else {
            course = await prisma.courses.findUnique({ where: { id: Number(id) } });
        }
        
        if (course) {
            // Fetch DB lessons if course found
            const dbLessons = await prisma.lessons.findMany({
                where: { course_id: course.id },
                orderBy: { order_index: 'asc' },
                select: { id: true, title: true, order_index: true, is_free: true, duration_minutes: true, audio_url: true, video_url: true, lesson_slug: true }
            });
            lessons = dbLessons.map(l => ({ ...l, id: l.lesson_slug }));
        }
    } catch (e) {
        console.error("[Fallback Triggered] Prisma DB connection failed for course route:", e);
    }
    
    // 2. FALLBACK ARCHITECTURE: Serve Static Track Data
    if (!course || lessons.length === 0) {
        if (id === 'python' || id === '102') {
            course = { id: 102, category: 'python', title: 'PYTHON AI Track', description: 'AI Generated Track' };
            lessons = pythonTrackData.map(l => ({ ...l, id: l.lesson_slug, course_id: 102 }));
        } else if (id === 'security' || id === 'cybersecurity') {
            course = { id: 103, category: 'security', title: 'CYBER SECURITY Track', description: 'AI Generated Track' };
            lessons = cyberTrackData.map(l => ({ ...l, id: l.lesson_slug, course_id: 103 }));
        } else if (id === 'languages') {
            course = { id: 104, category: 'languages', title: 'LANGUAGES Track', description: 'AI Generated Track' };
            lessons = languageTrackData.map(l => ({ ...l, id: l.lesson_slug, course_id: 104 }));
        } else {
            return NextResponse.json({ error: 'الكورس غير موجود' }, { status: 404 });
        }
    }
    
    let isEnrolled = false;
    const session = await getServerSession(authOptions);

    if (session && session.user) {
      if (session.user.role === 'admin') {
        isEnrolled = true;
      } else if (session.user.role === 'student') {
        try {
            const enrollCheck = await prisma.enrollments.findFirst({
                where: { student_id: Number(session.user.id), course_id: course.id }
            });
            if (enrollCheck) isEnrolled = true;
        } catch(e) {
            console.error("Enrollment check failed, defaulting to unenrolled", e);
        }
      }
    }

    return NextResponse.json({ course, lessons, isEnrolled });
  } catch (e: any) {
    console.error('[Course Detail Error]', e);
    return NextResponse.json({ error: 'حدث خطأ في جلب الكورس', message: e.message, stack: e.stack }, { status: 500 });
  }
}
