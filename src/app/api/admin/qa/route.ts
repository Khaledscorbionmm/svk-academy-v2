import { NextResponse, NextRequest } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/auth';
import { query, initializeDatabase } from '@/lib/db';
import { pythonTrackData } from '@/context/tracks/pythonData';
import { cyberTrackData } from '@/context/tracks/cyberData';
import { languageTrackData } from '@/context/tracks/languageData';

export const dynamic = 'force-dynamic';

function analyzeTrack(courseName: string, trackData: any[]) {
  const totalLessons = trackData.length;
  let validLessons = 0;
  let incompleteLessons = 0;
  let typosOrEmpty = 0;

  trackData.forEach(lesson => {
    // Check if the lesson has actual content rather than placeholders
    const hasDescription = lesson.content?.description && lesson.content.description.length > 20 && !lesson.content.description.includes('TODO');
    const hasExample = lesson.content?.example && lesson.content.example.length > 5;
    
    if (hasDescription && hasExample) {
      validLessons++;
    } else {
      incompleteLessons++;
    }

    // Rough heuristic for typos / bad formatting (e.g. empty strings, missing fields)
    if (!lesson.title || lesson.title.length < 5 || !lesson.content?.context) {
      typosOrEmpty++;
    }
  });

  const readinessScore = totalLessons > 0 ? Math.round((validLessons / totalLessons) * 100) : 0;
  const qualityScore = totalLessons > 0 ? Math.round(((totalLessons - typosOrEmpty) / totalLessons) * 100) : 0;
  
  let status = 'يحتاج مراجعة';
  if (readinessScore >= 90 && qualityScore >= 90) status = 'ممتاز';
  else if (readinessScore < 20) status = 'مسودة';

  return {
    courseName,
    totalLessons,
    validLessons,
    incompleteLessons,
    readinessScore,
    qualityScore,
    status
  };
}

export async function GET(request: NextRequest) {
  const token = request.cookies.get(COOKIE_NAME)?.value;
  const payload = token ? verifyToken(token) : null;

  if (!payload || payload.role !== 'admin') {
    return NextResponse.json({ error: 'غير مصرح لك' }, { status: 403 });
  }

  try {
    const qaData = [
      analyzeTrack('Python (مسار البرمجة)', pythonTrackData),
      analyzeTrack('Cyber Security (مسار الأمن)', cyberTrackData),
      analyzeTrack('Languages (مسار اللغات)', languageTrackData),
    ];

    // Optional: Fetch DB courses to show their status
    await initializeDatabase();
    const dbCourses = await query(`SELECT id, title FROM courses`, []);
    
    // We can just add dummy QA for DB courses since they are managed via admin panel
    dbCourses.forEach((c: any) => {
      qaData.push({
        courseName: c.title + ' (قاعدة البيانات)',
        totalLessons: 0,
        validLessons: 0,
        incompleteLessons: 0,
        readinessScore: c.is_published ? 100 : 50,
        qualityScore: 100,
        status: c.is_published ? 'ممتاز' : 'يحتاج مراجعة'
      });
    });

    // Top and Weakest calculation
    const sorted = [...qaData].sort((a, b) => b.readinessScore - a.readinessScore);
    const topCourses = sorted.slice(0, 3);
    const weakestCourses = [...sorted].reverse().slice(0, 3);

    return NextResponse.json({
      qaData,
      topCourses,
      weakestCourses
    }, { status: 200 });

  } catch (error) {
    console.error('[QA API Error]', error);
    return NextResponse.json({ error: 'حدث خطأ في جلب بيانات الجودة' }, { status: 500 });
  }
}
