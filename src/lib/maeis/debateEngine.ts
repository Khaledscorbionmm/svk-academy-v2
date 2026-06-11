import { AgentPersona } from './agents';
import { LessonContent, StudentJournal } from './studentSimulator';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

export interface MaeisReport {
  lessonId: string;
  track: string;
  timestamp: string;
  scores: {
    clarity: number;
    engagement: number;
    difficulty: number;
    retention: number;
    beginnerFriendliness: number;
    professionalValue: number;
  };
  issues: Array<{
    problem: string;
    reason: string;
    severity: 'Critical' | 'Important' | 'Enhancement';
    recommendedFix: string;
  }>;
  debateSummary: string;
}

export async function runExpertDebate(
  experts: AgentPersona[],
  lesson: LessonContent,
  journals: StudentJournal[]
): Promise<MaeisReport | null> {
  const journalsText = journals.map(j => `Agent ${j.agentId} Journal:\n${j.journalEntry}\n`).join('---\n');
  const expertsText = experts.map(e => `- ${e.name} (${e.role}): ${e.prompt}`).join('\n');

  const prompt = `
You are the central coordinator for the Multi-Agent Educational Intelligence System (MAEIS).
You have a panel of expert reviewers analyzing a lesson based on simulated student experiences.

EXPERT PANEL:
${expertsText}

LESSON CONTEXT:
Track: ${lesson.track}
Title: ${lesson.title}
Content:
${lesson.content}

STUDENT JOURNALS (Simulated Experiences):
${journalsText}

TASK:
Synthesize the experts' analysis and the student journals. 
Output ONLY a valid JSON object matching this exact structure:
{
  "scores": {
    "clarity": number (0-100),
    "engagement": number (0-100),
    "difficulty": number (0-100),
    "retention": number (0-100),
    "beginnerFriendliness": number (0-100),
    "professionalValue": number (0-100)
  },
  "issues": [
    {
      "problem": "Description of the problem",
      "reason": "Why it is a problem based on the student journals",
      "severity": "Critical" | "Important" | "Enhancement",
      "recommendedFix": "How to fix it without deleting unrelated data"
    }
  ],
  "debateSummary": "A short 2-paragraph summary of the main points the experts debated."
}
`;

  try {
    const response = await fetch(`${GEMINI_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.2 } // Low temperature for valid JSON
      }),
    });

    if (!response.ok) {
      throw new Error(`Gemini API Error: ${await response.text()}`);
    }

    const data = await response.json();
    let reply = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    
    // Clean JSON
    reply = reply.replace(/```json/gi, '').replace(/```/g, '').trim();
    
    const parsed = JSON.parse(reply);
    
    return {
      lessonId: lesson.id,
      track: lesson.track,
      timestamp: new Date().toISOString(),
      ...parsed
    } as MaeisReport;

  } catch (error) {
    console.error('Debate Engine Error:', error);
    return null;
  }
}
