import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from '@prisma/client';
import { pythonTrackData } from '@/context/tracks/pythonData';
import { cyberTrackData } from '@/context/tracks/cyberData';
import { languageTrackData } from '@/context/tracks/languageData';

const prisma = new PrismaClient();

export async function GET(req: NextRequest, { params }: { params: Promise<{ lessonId: string }> }) {
  try {
    const { lessonId } = await params;
    
    let lesson: any = null;
    let course: any = null;
    let allLessons: any[] = [];
    
    // 1. DUAL-READ ARCHITECTURE: Try Database First
    try {
        let whereClause: any = {};
        if (!isNaN(Number(lessonId))) {
            whereClause = { id: Number(lessonId) };
        } else {
            whereClause = {
                content: {
                    contains: `"lesson_slug":"${lessonId}"` // Very fast subset matching
                }
            };
        }

        const dbLessons = await prisma.lessons.findMany({
            where: whereClause,
            include: { courses: true },
            take: 1
        });
        
        if (dbLessons.length > 0) {
            const dbLesson = dbLessons[0];
            course = dbLesson.courses;
            // Parse our beautiful JSON 9-Component structure that we imported into the string content field
            lesson = JSON.parse(dbLesson.content as string);
            lesson.id = dbLesson.id; // Map to DB ID for consistent URL routing
            
            // Map text_content and audio_url from db columns if they exist
            if (dbLesson.text_content) lesson.text_content = dbLesson.text_content;
            if (dbLesson.audio_url) lesson.audio_url = dbLesson.audio_url;
            
            // Fetch sidebar
            const sidebarData = await prisma.lessons.findMany({
                where: { course_id: course.id },
                orderBy: { order_index: 'asc' }
            });
            
            allLessons = sidebarData.map(l => {
                const p = JSON.parse(l.content as string);
                return { id: l.id, title: p.title, is_free: p.is_free, duration_minutes: p.duration_minutes, content_type: p.content_type, lesson_slug: p.lesson_slug };
            });
        }
    } catch (e) {
        console.error("DB Fetch Error. Falling back to local files.", e);
    }
    
    // 2. FALLBACK ARCHITECTURE: Local Files (If DB failed or not found)
    if (!lesson) {
        console.log(`[Fallback Triggered] Serving lesson ${lessonId} from local .ts files.`);
        let courseCategory = '';
        let allStaticLessons: any[] = [];
        
        if (lessonId.startsWith('python-')) { courseCategory = 'python'; allStaticLessons = pythonTrackData; } 
        else if (lessonId.startsWith('cyber-')) { courseCategory = 'security'; allStaticLessons = cyberTrackData; } 
        else if (lessonId.startsWith('lang-')) { courseCategory = 'languages'; allStaticLessons = languageTrackData; }
        
        lesson = allStaticLessons.find(l => l.lesson_slug === lessonId);
        
        if (!lesson) return NextResponse.json({ error: 'Lesson not found' }, { status: 404 });
        
        // Mock the course for file fallback
        course = await prisma.courses.findFirst({ where: { category: courseCategory } });
        if (!course) course = { id: 999, title: courseCategory + ' Track', category: courseCategory };
        
        allLessons = allStaticLessons.map(l => ({ id: l.lesson_slug, title: l.title, is_free: l.is_free, duration_minutes: l.duration_minutes, content_type: l.content_type, lesson_slug: l.lesson_slug }));
    }

    // 3. NextAuth Protection Logic
    let accessStatus = 'locked';
    const session = await getServerSession(authOptions);
    
    const isFree = lesson.is_free || Number(lesson.order_index || 0) <= 1 || lesson.lesson_slug?.endsWith('-1') || lesson.lesson_slug?.endsWith('-2');

    if (session) {
      if (session.user?.role === 'admin') {
        accessStatus = 'approved';
      } else if (session.user?.role === 'student') {
        if (isFree) accessStatus = 'approved';
        else {
          // Check DB Enrollments if the user is a student
          const isEnrolled = await prisma.enrollments.findFirst({
              where: {
                  student_id: Number(session.user.id),
                  course_id: course.id
              }
          });
          if (isEnrolled) accessStatus = 'approved';
        }
      }
    } else {
      if (isFree) accessStatus = 'approved';
    }

    const studentInfo = session?.user?.role === 'student' ? { name: session.user.name || '', email: session.user.email || '', phone: '' } : null;
    const hasRequested = false; // Mocking this for now as it's legacy

    return NextResponse.json({
      lesson: accessStatus === 'approved' ? lesson : { id: lesson.id || lesson.lesson_slug, course_id: course.id, title: lesson.title, is_free: false, content_type: lesson.content_type },
      course,
      sidebar: allLessons,
      accessStatus,
      studentInfo,
      hasRequested
    });
  } catch (error) {
    console.error('Failed to fetch lesson:', error);
    return NextResponse.json({ error: 'Failed to fetch lesson' }, { status: 500 });
  }
}
