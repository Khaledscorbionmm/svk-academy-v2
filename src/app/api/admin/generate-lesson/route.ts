import { NextResponse } from 'next/server';

// Temporary Mock Generator until API keys are provided
async function mockGenerateLesson(topic: string, index: number, config: any) {
  // Simulate LLM delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  return {
    lesson_slug: `${config.slug || 'course'}-${index}`,
    title: topic,
    lesson_type: "concept",
    content: {
      context: `مقدمة شاملة عن موضوع: ${topic} (هذا محتوى تجريبي تم توليده بواسطة المحاكي لأن مفاتيح الـ API غير متوفرة حالياً).`,
      description: `شرح تفصيلي يناسب مستوى: ${config.difficulty}.`,
      prototype: `// ${topic} code prototype`,
      parameters: "المعاملات الأساسية",
      return_value: "القيمة المرجعة",
      example: `console.log('Hello from ${topic}');`
    },
    exercise_instructions: `تمرين عملي حول ${topic}: قم بكتابة كود يطبق ما تعلمته.`,
    expected_output: "النتيجة المتوقعة",
    quick_practical_examples: [
      {
        type: "correct",
        title: "مثال صحيح",
        code: `// Correct usage for ${topic}`,
        explanation: "شرح لماذا هذا المثال صحيح."
      },
      {
        type: "wrong",
        title: "مثال خاطئ",
        code: `// Wrong usage for ${topic}`,
        error_message: "Error: Invalid syntax",
        explanation: "شرح سبب الخطأ وكيفية تجنبه."
      },
      {
        type: "mistake",
        title: "خطأ شائع",
        code: `// Common mistake for ${topic}`,
        explanation: "هذا الخطأ يقع فيه الكثير من المبتدئين."
      }
    ],
    exam_data: {
      title: `اختبار قصير: ${topic}`,
      questions: [
        {
          question: `ما هي الفائدة الأساسية من ${topic}؟`,
          options: ["الخيار أ", "الخيار ب", "الخيار ج", "الخيار د"],
          correct_answer: "الخيار أ",
          explanation: "توضيح الإجابة الصحيحة."
        }
      ]
    }
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { topic, index, config } = body;

    if (!topic) {
      return NextResponse.json({ error: 'Topic is required' }, { status: 400 });
    }

    // In the future: if (config.provider === 'openai') { callOpenAI() } else { callGemini() }
    
    // Fallback to mock for now
    const generatedLesson = await mockGenerateLesson(topic, index, config);

    return NextResponse.json({ success: true, lesson: generatedLesson });
  } catch (error: any) {
    console.error('Generation API Error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
