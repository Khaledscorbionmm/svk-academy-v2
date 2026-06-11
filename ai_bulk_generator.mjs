import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
    console.error("Missing GEMINI_API_KEY in .env.local");
    process.exit(1);
}

const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

const rawTs = fs.readFileSync('src/context/tracks/pythonData.ts', 'utf8');
const arrayStart = rawTs.indexOf('[');
const arrayStr = rawTs.substring(arrayStart);

let pythonTrackData;
try {
    pythonTrackData = new Function(`return ${arrayStr}`)();
} catch (e) {
    console.error("Failed to parse the array:", e);
    process.exit(1);
}

const delay = ms => new Promise(res => setTimeout(res, ms));

async function generateAIContentForLesson(lessonTitle, baseCode) {
    const prompt = `أنت خبير تعليمي محترف في برمجة بايثون.
لدينا درس بعنوان: "${lessonTitle}"
ويحتوي على الكود الأساسي التالي:
\`\`\`python
${baseCode}
\`\`\`

المطلوب إرجاع رد بصيغة JSON فقط، يحتوي على 3 نصوص باللغة العربية:
1. "correct_explanation": شرح مبسط وسهل الفهم يوضح ما يفعله هذا الكود تحديداً ولماذا كتبناه هكذا. (حوالي سطرين).
2. "mistake_explanation": شرح لخطأ شائع جداً يقع فيه المبتدئون عند كتابة أكواد مشابهة لهذا الدرس تحديداً (لا تذكر الخطأ المتعلق بحالة الأحرف إلا إذا كان الدرس يخص ذلك).
3. "challenge_explanation": شرح لتحدي صغير وممتع يُطلب من الطالب تنفيذه لتعديل هذا الكود، وكيف سيستفيد منه.

الرد يجب أن يكون JSON فقط كالتالي:
{
  "correct_explanation": "...",
  "mistake_explanation": "...",
  "challenge_explanation": "..."
}
`;

    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const response = await fetch(`${GEMINI_URL}?key=${GEMINI_API_KEY}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ role: 'user', parts: [{ text: prompt }] }],
                    generationConfig: { temperature: 0.7, maxOutputTokens: 1024 }
                }),
            });

            if (!response.ok) {
                if (response.status === 429) {
                    console.log(`Rate limit hit on attempt ${attempt}. Waiting 5 seconds...`);
                    await delay(5000);
                    continue;
                }
                throw new Error(`HTTP Error ${response.status}: ${await response.text()}`);
            }

            const data = await response.json();
            let text = data.candidates?.[0]?.content?.parts?.[0]?.text;
            
            if (text) {
                // Remove markdown codeblock artifacts if any
                text = text.replace(/```json/g, '').replace(/```/g, '').trim();
                return JSON.parse(text);
            }
        } catch (e) {
            console.error(`Attempt ${attempt} failed:`, e.message);
            await delay(2000 * attempt);
        }
    }
    return null;
}

async function run() {
    console.log("Starting bulk AI generation...");
    let updatedCount = 0;

    // Iterate through lessons 6 to 100 (index 5 to 99)
    for (let i = 5; i < 100; i++) {
        const lesson = pythonTrackData[i];
        if (!lesson.quick_practical_examples) continue;

        // Skip if already looks unique (doesn't have the generic phrase)
        const currentExpl = lesson.quick_practical_examples.find(e => e.type === 'correct')?.explanation || '';
        if (!currentExpl.includes('هذا مثال عملي يوضح كيفية استخدام')) {
            console.log(`Skipping Lesson ${i+1}: Already unique.`);
            continue;
        }

        console.log(`Processing Lesson ${i+1}: ${lesson.title}...`);
        const baseCode = lesson.content?.example || "print('hello')";
        
        const aiData = await generateAIContentForLesson(lesson.title, baseCode);
        
        if (aiData) {
            lesson.quick_practical_examples.forEach(ex => {
                if (ex.type === 'correct') {
                    ex.explanation = aiData.correct_explanation || ex.explanation;
                } else if (ex.type === 'wrong') {
                    ex.explanation = aiData.mistake_explanation || ex.explanation;
                } else if (ex.type === 'challenge') {
                    ex.explanation = aiData.challenge_explanation || ex.explanation;
                }
            });
            updatedCount++;
            console.log(`✅ Success for Lesson ${i+1}`);
            
            // Save incrementally in case of crash
            const newContent = `export const pythonTrackData = ${JSON.stringify(pythonTrackData, null, 2)};\n`;
            fs.writeFileSync('src/context/tracks/pythonData.ts', newContent);
        } else {
            console.log(`❌ Failed for Lesson ${i+1}`);
        }

        // Delay 1.5 seconds between standard requests to avoid rate limits
        await delay(1500);
    }
    
    console.log(`\n🎉 Bulk generation complete! Updated ${updatedCount} lessons.`);
}

run();
