import { AgentPersona } from './agents';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

export interface LessonContent {
  id: string;
  title: string;
  track: string;
  content: string;
}

export interface StudentJournal {
  agentId: string;
  lessonId: string;
  journalEntry: string;
}

export async function simulateStudentExperience(agent: AgentPersona, lesson: LessonContent): Promise<StudentJournal> {
  const prompt = `
${agent.prompt}

LESSON CONTEXT:
Track: ${lesson.track}
Title: ${lesson.title}

CONTENT:
${lesson.content}

TASK:
Write a short journal entry (1-2 paragraphs) from your persona's perspective. 
Explain how you felt reading this, what was confusing, what was boring, and if you would be able to pass a test on this.
Reply ONLY with the journal entry text.
`;

  try {
    const response = await fetch(`${GEMINI_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.7 }
      }),
    });

    if (!response.ok) {
      throw new Error(`Gemini API Error: ${await response.text()}`);
    }

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    return {
      agentId: agent.id,
      lessonId: lesson.id,
      journalEntry: reply.trim()
    };
  } catch (error) {
    console.error(`Simulation Error for ${agent.name}:`, error);
    return {
      agentId: agent.id,
      lessonId: lesson.id,
      journalEntry: `Error simulating student experience: ${error}`
    };
  }
}
