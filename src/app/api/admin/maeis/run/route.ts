import { NextRequest, NextResponse } from 'next/server';
import { STUDENT_AGENTS, EXPERT_AGENTS } from '@/lib/maeis/agents';
import { simulateStudentExperience, StudentJournal, LessonContent } from '@/lib/maeis/studentSimulator';
import { runExpertDebate } from '@/lib/maeis/debateEngine';
import { saveReport } from '@/lib/maeis/reportStore';
import { pythonTrackData as pythonLessons } from '@/context/tracks/pythonData';
import { cyberTrackData as cyberLessons } from '@/context/tracks/cyberData';
import { languageTrackData as languageLessons } from '@/context/tracks/languageData';

// Map tracks
const trackMap: Record<string, any[]> = {
  python: pythonLessons,
  cyber: cyberLessons,
  languages: languageLessons
};

export async function POST(request: NextRequest) {
  try {
    const { track, lessonIndex } = await request.json();
    
    if (!track || typeof lessonIndex !== 'number') {
      return NextResponse.json({ error: 'Missing track or lessonIndex' }, { status: 400 });
    }

    const lessons = trackMap[track];
    if (!lessons || !lessons[lessonIndex]) {
      return NextResponse.json({ error: 'Lesson not found' }, { status: 404 });
    }

    const rawLesson = lessons[lessonIndex];
    const lesson: LessonContent = {
      id: `${track}-${lessonIndex}`,
      title: rawLesson.title,
      track: track,
      content: rawLesson.content.substring(0, 3000) // limit size to avoid hitting token limits
    };

    // 1. Run Student Simulation
    const journals: StudentJournal[] = [];
    for (const agent of STUDENT_AGENTS) {
      const journal = await simulateStudentExperience(agent, lesson);
      journals.push(journal);
    }

    // 2. Run Expert Debate
    const report = await runExpertDebate(EXPERT_AGENTS, lesson, journals);

    if (!report) {
      return NextResponse.json({ error: 'Debate Engine Failed' }, { status: 500 });
    }

    // 3. Save to Store
    await saveReport(report);

    return NextResponse.json({ success: true, report });

  } catch (error) {
    console.error('MAEIS Run Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
