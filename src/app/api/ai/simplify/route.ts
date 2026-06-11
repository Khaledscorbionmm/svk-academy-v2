import { NextRequest, NextResponse } from 'next/server';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

// Naive fallback generator if AI fails
function generateNaiveFallback(text: string): string {
  const sentences = text.split('.').map(s => s.trim()).filter(s => s.length > 0);
  let simplified = "*(تم توليد هذا التبسيط محلياً بسبب صعوبة الاتصال بالذكاء الاصطناعي)*\\n\\n";
  simplified += "### الخلاصة المبسطة:\\n";
  
  sentences.slice(0, 4).forEach((sentence, index) => {
    simplified += `- ${sentence}\\n`;
  });
  
  return simplified;
}

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    if (!text) {
      return NextResponse.json({ error: 'النص مطلوب للتبسيط' }, { status: 400 });
    }

    const prompt = `أنت مساعد تعليمي خبير في تبسيط المعلومات المعقدة.
قم بقراءة النص التالي:
"""
${text}
"""

المطلوب منك:
1. إعادة صياغة النص بطريقة أبسط بكثير لتناسب المبتدئين.
2. تبسيط المصطلحات المعقدة إلى كلمات سهلة الفهم.
3. إعطاء مثال عملي واضح وبسيط.
4. الحفاظ على المعنى الأصلي دون تشويهه.
5. نسق إجابتك باستخدام الماركدوان (Markdown) وضع العناوين والنقاط.
`;

    let attempt = 0;
    const maxAttempts = 2;
    let responseText = '';
    
    while (attempt < maxAttempts) {
      try {
        const response = await fetch(`${GEMINI_URL}?key=${GEMINI_API_KEY}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
            generationConfig: { temperature: 0.7, maxOutputTokens: 2048 }
          }),
        });

        if (!response.ok) {
          const errorBody = await response.text();
          console.error(`[Gemini Simplify API] Attempt ${attempt + 1} failed. Status: ${response.status}. Body: ${errorBody}`);
          throw new Error(`API Error ${response.status}`);
        }

        const data = await response.json();
        const simplified = data.candidates?.[0]?.content?.parts?.[0]?.text;
        
        if (simplified) {
          return NextResponse.json({ simplified });
        } else {
          throw new Error("No text returned from AI");
        }
      } catch (err: any) {
        attempt++;
        if (attempt >= maxAttempts) {
          console.error('[Gemini Simplify API] All attempts failed:', err.message);
          // Return naive fallback gracefully with a 200 OK
          return NextResponse.json({ 
            simplified: generateNaiveFallback(text),
            isFallback: true
          });
        }
        // Wait before retry
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
      }
    }

  } catch (error: any) {
    console.error('[Simplify Route] Unhandled Error:', error.message);
    return NextResponse.json(
      { error: 'حدث خطأ غير متوقع في الخادم. الرجاء المحاولة لاحقاً.' },
      { status: 500 }
    );
  }
}
