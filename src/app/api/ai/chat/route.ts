import { NextRequest, NextResponse } from 'next/server';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

const SVK_SYSTEM_PROMPT = `أنت مساعد SVK Academy الذكي — أذكى مساعد تعليمي برمجي في الشرق الأوسط.

**شخصيتك:**
- محترف، ودود، وذكي للغاية
- تشرح بالعربي الواضح مع أمثلة عملية
- تستخدم الإيموجي بذكاء
- تعطي أمثلة كود قابلة للتشغيل مباشرة

**قدراتك:**
1. شرح أي مفهوم برمجي بعمق (Python, JS, React, SQL, AI, DevOps)
2. تحليل الكود وإيجاد الأخطاء وشرح سببها
3. إصلاح الأخطاء مع شرح خطوة بخطوة
4. اقتراح تحسينات للكود
5. الإجابة على أسئلة خوارزميات وهياكل البيانات
6. مساعدة في مشاريع الـ frontend والـ backend

**قواعد مهمة:**
- إذا أعطاك المستخدم كود به خطأ → حلله، اشرح الخطأ، أعطه الكود المُصلح
- دائماً اعطِ مثال عملي مع كل شرح
- إذا سألك عن شيء خارج البرمجة → أجب بلطف أنك متخصص في البرمجة
- استخدم \`\`\`python أو \`\`\`javascript لكتابة الكود
- اشرح كل سطر من الكود المُصلح

**السياق:** أنت جزء من منصة SVK Academy التعليمية.`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages, context } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'messages required' }, { status: 400 });
    }

    // Build conversation history for Gemini
    const contents = [];

    // Add system context as first user message
    const systemContext = context ? `
[سياق الجلسة: ${context.page || 'صفحة التعلم'}]
${context.currentLesson ? `[الدرس الحالي: ${context.currentLesson}]` : ''}
${context.currentCode ? `[كود المستخدم الحالي:\n\`\`\`\n${context.currentCode}\n\`\`\`]` : ''}
${context.errorMessage ? `[رسالة الخطأ: ${context.errorMessage}]` : ''}

${SVK_SYSTEM_PROMPT}` : SVK_SYSTEM_PROMPT;

    contents.push({
      role: 'user',
      parts: [{ text: systemContext }],
    });
    contents.push({
      role: 'model',
      parts: [{ text: 'مرحباً! أنا مساعد SVK Academy الذكي. كيف يمكنني مساعدتك اليوم؟ 🚀' }],
    });

    // Add conversation messages
    for (const msg of messages) {
      contents.push({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }],
      });
    }

    const response = await fetch(`${GEMINI_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents,
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
        },
        safetySettings: [
          { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
          { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Gemini error:', err);
      
      // Fallback intelligent response
      const lastMsg = messages[messages.length - 1]?.content || '';
      return NextResponse.json({
        reply: generateFallbackReply(lastMsg, context),
        fallback: true,
      });
    }

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'عذراً، لم أستطع الرد. حاول مرة أخرى.';

    return NextResponse.json({ reply });

  } catch (error) {
    console.error('AI Chat error:', error);
    return NextResponse.json(
      { reply: 'عذراً، حدث خطأ في الاتصال. تأكد من إعداد مفتاح Gemini API. 🔧', fallback: true },
      { status: 200 }
    );
  }
}

function generateFallbackReply(message: string, context: Record<string, string> = {}): string {
  const msg = message.toLowerCase();

  if (msg.includes('error') || msg.includes('خطأ') || msg.includes('مشكلة')) {
    return `🔍 **تحليل الخطأ:**\n\nبناءً على رسالة الخطأ، الأسباب الشائعة:\n\n1. **SyntaxError** → خطأ في كتابة الكود (فاصلة ناقصة، قوس مفتوح)\n2. **TypeError** → استخدام نوع بيانات خاطئ\n3. **NameError** → متغير غير معرّف\n4. **IndentationError** → مشكلة في المسافات البادئة (Python)\n\n💡 **حل سريع:** انسخ رسالة الخطأ كاملة وأرسلها لي وسأحللها! `;
  }

  if (msg.includes('python') || msg.includes('بايثون')) {
    return `🐍 **Python بالعربي:**\n\n\`\`\`python\n# مثال بسيط\nname = "خالد"\nage = 20\nprint(f"مرحباً {name}، عمرك {age} سنة")\n\`\`\`\n\n**أنواع البيانات الأساسية:**\n- \`str\` → النصوص\n- \`int\` → الأرقام الصحيحة\n- \`float\` → الأرقام العشرية\n- \`bool\` → True / False\n\nما هو سؤالك عن Python تحديداً؟ 🎯`;
  }

  if (msg.includes('javascript') || msg.includes('js')) {
    return `⚡ **JavaScript:**\n\n\`\`\`javascript\n// مثال على المتغيرات\nconst name = "خالد";\nlet age = 20;\nconsole.log(\`مرحباً \${name}\`);\n\`\`\`\n\nاسألني عن أي موضوع JS! 🚀`;
  }

  return `مرحباً! 👋 أنا مساعد SVK Academy.\n\nيمكنني مساعدتك في:\n- 🐍 Python\n- ⚡ JavaScript\n- ⚛️ React\n- 🗄️ SQL\n- 🤖 AI/ML\n\nما هو سؤالك؟ أنا هنا للمساعدة! 💪`;
}
