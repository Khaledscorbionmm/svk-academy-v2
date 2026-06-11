import { NextRequest, NextResponse } from 'next/server';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { track, milestone, practicalAnswers, objectiveScore, totalObjective } = body;

    if (!practicalAnswers || !Array.isArray(practicalAnswers)) {
      return NextResponse.json({ error: 'Practical answers array required' }, { status: 400 });
    }

    // Prepare prompt to evaluate practical questions
    const answersText = practicalAnswers.map((pa, idx) => 
      `السؤال العملي ${idx + 1}:\nالسؤال: ${pa.question}\nإجابة الطالب:\n${pa.answer}\n`
    ).join('\n---\n');

    const prompt = `أنت مصحح ومعلم خبير في منصة SVK Academy. المسار الحالي هو: ${track}.
لقد أنهى الطالب لتوه ${milestone} درس.
الدرجة الموضوعية (اختياري وصح/خطأ) هي: ${objectiveScore} من ${totalObjective}.

إليك إجابات الطالب على الأسئلة العملية (البرمجية/التطبيقية):
${answersText}

المطلوب منك:
1. قم بتقييم الإجابات العملية بدقة. (أعطِ درجة لكل سؤال من 1).
2. قم بحساب الدرجة الإجمالية النهائية (بجمع الدرجة الموضوعية + درجات الأسئلة العملية). واعتبر أن إجمالي الأسئلة هو (عدد الأسئلة الموضوعية + عدد الأسئلة العملية).
3. استخرج نقاط قوة الطالب بناءً على أدائه.
4. استخرج نقاط الضعف إن وجدت.
5. استنتج أرقام الدروس التي ينبغي مراجعتها لتحسين نقاط الضعف (بناءً على الأخطاء).

يجب أن تعيد النتيجة **حصرياً** ككائن JSON بالصيغة التالية (بدون أي نص آخر):
{
  "practicalScore": number, // مجموع درجات الأسئلة العملية (مثلاً إذا كانوا سؤالين وأجاب بواحد صحيح فضع 1)
  "totalScore": number, // المجموع الكلي (العملي + الموضوعي)
  "maxScore": number, // إجمالي عدد الأسئلة الكلي (العملي + الموضوعي)
  "strengths": ["نقطة 1", "نقطة 2"],
  "weaknesses": ["نقطة ضعف 1"],
  "recommendedLessons": ["الدرس 2", "الدرس 5"] // أرقام أو أسماء الدروس المقترحة
}`;

    const response = await fetch(`${GEMINI_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          { role: 'user', parts: [{ text: prompt }] }
        ],
        generationConfig: {
          temperature: 0.2, // Low temperature for consistent JSON output
        }
      }),
    });

    if (!response.ok) {
      console.error('Gemini API Error:', await response.text());
      return NextResponse.json({ error: 'Failed to grade exam via AI' }, { status: 500 });
    }

    const data = await response.json();
    let reply = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    
    // Clean JSON response
    reply = reply.replace(/```json/gi, '').replace(/```/g, '').trim();
    
    let resultJSON;
    try {
      resultJSON = JSON.parse(reply);
    } catch (parseError) {
      console.error('Failed to parse AI grading JSON:', reply);
      return NextResponse.json({ error: 'AI returned invalid format' }, { status: 500 });
    }

    return NextResponse.json(resultJSON);

  } catch (error) {
    console.error('AI Grade API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
