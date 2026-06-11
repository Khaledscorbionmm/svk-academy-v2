import { NextRequest, NextResponse } from 'next/server';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    if (!text) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }

    const prompt = `أنت مساعد تعليمي خبير في تبسيط المعلومات المعقدة.
قم بقراءة النص التالي:
"""
${text}
"""

المطلوب منك:
1. إعادة صياغة النص بطريقة أبسط بكثير لتناسب المبتدئين.
2. تبسيط المصطلحات المعقدة إلى كلمات سهلة الفهم.
3. إعطاء مثال عملي واضح وبسيط من الحياة اليومية أو مثال برمجي بسيط جداً يوضح الفكرة.
4. الحفاظ على المعنى الأصلي دون تشويهه.
5. نسق إجابتك باستخدام الماركدوان (Markdown) وضع العناوين والنقاط لتكون القراءة مريحة للعين.
`;

    const response = await fetch(`${GEMINI_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [{ text: prompt }]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 2048,
        }
      }),
    });

    if (!response.ok) {
      console.error('Gemini error:', await response.text());
      return NextResponse.json({ 
        simplified: "عذراً، لم نتمكن من تبسيط النص حالياً بسبب ضغط على الشبكة. حاول مرة أخرى." 
      }, { status: 500 });
    }

    const data = await response.json();
    const simplified = data.candidates?.[0]?.content?.parts?.[0]?.text || "لم يتم إرجاع أي نتيجة.";

    return NextResponse.json({ simplified });

  } catch (error) {
    console.error('AI Simplify error:', error);
    return NextResponse.json(
      { simplified: 'حدث خطأ أثناء الاتصال بالخادم. حاول مرة أخرى.' },
      { status: 500 }
    );
  }
}
