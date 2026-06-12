import fs from 'fs';
import OpenAI from 'openai';

const rawTs = fs.readFileSync('src/context/tracks/pythonData.ts', 'utf8');
const arrayStart = rawTs.indexOf('[');
const arrayStr = rawTs.substring(arrayStart, rawTs.lastIndexOf('];') + 1);

let pythonTrackData;
try {
    pythonTrackData = new Function(`return ${arrayStr}`)();
} catch (e) {
    console.error("Failed to parse the array:", e);
    process.exit(1);
}

const indices = [19, 39, 59, 79, 99]; // Lessons 20, 40, 60, 80, 100

const openai = new OpenAI();

async function generateProposed(lesson) {
    const prompt = `You are a world-class Python educator creating content for an interactive learning platform for kids and adults.
Generate a structured JSON object for a lesson titled "${lesson.title}" (Type: ${lesson.lesson_type}, Category: ${lesson.category}).
The response must strictly follow this JSON structure, completely in Arabic:
{
  "content": {
    "context": "لماذا نتعلم هذا؟ ...",
    "description": "شرح المفهوم بأسلوب مبسط ومشوق...",
    "prototype": "الكود الأساسي أو البنية...",
    "parameters": "شرح المتغيرات أو المدخلات...",
    "return_value": "ماذا يفعل أو يرجع...",
    "example": "كود بايثون حقيقي كمثال\\n..."
  },
  "quick_practical_examples": [
    {
      "type": "correct",
      "title": "تطبيق مباشر",
      "code": "كود صحيح يعمل",
      "expected_output": "النتيجة المتوقعة",
      "explanation": "شرح الكود الصحيح"
    },
    {
      "type": "wrong",
      "title": "خطأ صياغة شائع",
      "code": "كود به خطأ شائع",
      "error_message": "رسالة الخطأ",
      "explanation": "لماذا حدث الخطأ وكيف نتجنبه"
    },
    {
      "type": "mistake",
      "title": "مفهوم خاطئ للمبتدئين",
      "explanation": "شرح لخطأ منطقي أو مفهومي شائع بين المبتدئين"
    },
    {
      "type": "use_case",
      "title": "متى نستخدم هذا في الواقع؟",
      "explanation": "أمثلة حقيقية مثل الذكاء الاصطناعي، المواقع، الألعاب"
    },
    {
      "type": "challenge",
      "title": "تحدي: إصلاح الكود أو إكماله",
      "code": "كود يحتاج إلى تعديل",
      "expected_output": "النتيجة المطلوبة",
      "explanation": "تلميح يوضح كيف يمكن حل التحدي"
    }
  ]
}

Ensure all code examples are unique to this specific topic. Do NOT output markdown formatting like \`\`\`json. Output raw JSON only.`;

    const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "user", content: prompt }],
        response_format: { type: "json_object" }
    });

    return JSON.parse(response.choices[0].message.content);
}

async function main() {
    let report = "# Lesson Comparison (Current vs Proposed)\n\n";

    for (const idx of indices) {
        const lesson = pythonTrackData[idx];
        if (!lesson) continue;

        console.log(`Generating proposed content for Lesson ${idx + 1}...`);
        
        report += `## Lesson ${idx + 1}: ${lesson.title}\n`;
        report += `**Type**: \`${lesson.lesson_type}\`\n\n`;
        
        report += `### 🔴 Current Version\n`;
        report += `\`\`\`json\n`;
        report += JSON.stringify({
            content: lesson.content,
            quick_practical_examples: lesson.quick_practical_examples
        }, null, 2);
        report += `\n\`\`\`\n\n`;

        try {
            const proposed = await generateProposed(lesson);
            report += `### 🟢 Proposed Version\n`;
            report += `\`\`\`json\n`;
            report += JSON.stringify(proposed, null, 2);
            report += `\n\`\`\`\n\n`;
        } catch(e) {
            console.error("Error generating for lesson", idx+1, e);
        }
        report += `---\n\n`;
    }

    fs.writeFileSync('comparison_report.md', report);
    console.log("Comparison report saved to comparison_report.md");
}

main();
