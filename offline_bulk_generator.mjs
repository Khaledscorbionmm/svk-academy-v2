import fs from 'fs';

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

function getUniqueExplanation(title) {
    const t = title.toLowerCase();
    if (t.includes('str') || t.includes('نصوص')) {
        return {
            correct: `في هذا المثال، قمنا بالتعامل مع النصوص (Strings) في بايثون، وهي الأساس لأي تطبيق يتعامل مع البيانات النصية والرسائل.`,
            mistake: `خطأ شائع جداً: نسيان إغلاق علامات التنصيص (" أو ') مما يؤدي إلى ظهور SyntaxError وانهيار البرنامج.`,
            challenge: `تحدي: حاول إضافة كلمة "مرحباً" قبل النص المطبوع باستخدام أسلوب دمج النصوص (Concatenation) أو (f-strings).`
        };
    } else if (t.includes('int') || t.includes('float') || t.includes('math') || t.includes('حساب')) {
        return {
            correct: `هذا الكود يستعرض كيفية إجراء العمليات الحسابية أو التعامل مع الأرقام، وهو ما تحتاجه في برمجة الألعاب وحساب النقاط.`,
            mistake: `الخطأ الشائع هنا هو محاولة دمج نص مع رقم مباشرة (مثلاً طباعة "Score: " + 10) دون تحويل الرقم إلى نص عبر ()str.`,
            challenge: `تحدي رياضي: قم بتعديل الكود ليقوم بضرب الناتج النهائي في 5 ثم قم بطباعته.`
        };
    } else if (t.includes('list') || t.includes('قوائم')) {
        return {
            correct: `المثال أعلاه يوضح قوة القوائم (Lists) في تخزين عدة عناصر متسلسلة في متغير واحد بدل إنشاء عشرات المتغيرات المستقلة.`,
            mistake: `أكثر الأخطاء شيوعاً هو محاولة الوصول لعنصر غير موجود في القائمة (IndexError)، تذكر دائماً أن العد يبدأ من الصفر (0).`,
            challenge: `تحدي القوائم: استخدم دالة append() لإضافة عنصر جديد في نهاية القائمة ثم قم بطباعة القائمة بالكامل.`
        };
    } else if (t.includes('dict') || t.includes('قاموس')) {
        return {
            correct: `القاموس (Dictionary) يسمح لك بربط البيانات بمفاتيح (Keys) واضحة بدلاً من مجرد ترتيب رقمي، وهذا أساسي في بناء قواعد البيانات.`,
            mistake: `الخطأ الشائع هو محاولة الوصول لمفتاح (Key) غير موجود في القاموس (KeyError). استخدم طريقة .get() لتجنب ذلك.`,
            challenge: `تحدي القواميس: أضف مفتاحاً جديداً يسمى "status" واعطه القيمة "active" ثم اطبعه.`
        };
    } else if (t.includes('if') || t.includes('else') || t.includes('شرط')) {
        return {
            correct: `هذا الكود يستخدم الجمل الشرطية (If/Else) لاتخاذ قرارات ديناميكية بناءً على المعطيات، وهو العقل المدبر لأي برنامج ذكي.`,
            mistake: `أغلب المبتدئين ينسون النقطتين الرأسيتين (:) في نهاية السطر الشرطي، أو يخطئون في المسافات البادئة (Indentation).`,
            challenge: `تحدي منطقي: أضف شرطاً إضافياً (elif) للتحقق مما إذا كانت القيمة تساوي صفراً بالتحديد.`
        };
    } else if (t.includes('for') || t.includes('while') || t.includes('تكرار') || t.includes('loop')) {
        return {
            correct: `حلقات التكرار (Loops) توفر عليك كتابة مئات الأسطر! هنا نستخدمها لتنفيذ أمر معين عدة مرات بشكل آلي.`,
            mistake: `في حلقة (while)، من أخطر الأخطاء هو نسيان تحديث العداد، مما يؤدي إلى الدخول في "حلقة لا نهائية" (Infinite Loop) وتوقف الجهاز.`,
            challenge: `تحدي التكرار: قم بتعديل الحلقة بحيث تتخطى (continue) التنفيذ إذا كان الرقم قابلاً للقسمة على 2.`
        };
    } else if (t.includes('def') || t.includes('func') || t.includes('دوال')) {
        return {
            correct: `الدوال (Functions) تساعدنا في تغليف مجموعة من الأوامر تحت اسم واحد، لنتمكن من إعادة استخدامها لاحقاً وتجنب التكرار.`,
            mistake: `تذكر دائماً أن الدالة لا تعمل بمجرد كتابتها! يجب عليك "استدعاء" الدالة بكتابة اسمها مع الأقواس () لكي يتم تشغيلها.`,
            challenge: `تحدي الدوال: أضف مدخلاً جديداً (Parameter) للدالة وقم باستخدامه داخل الأوامر.`
        };
    } else if (t.includes('class') || t.includes('oop') || t.includes('كائن')) {
        return {
            correct: `هذا الكود هو تطبيق مباشر لمفهوم (Object Oriented Programming)، حيث ننشئ مخططاً (Class) ثم نصنع منه كائنات (Objects).`,
            mistake: `نسيان كتابة (self) كأول مدخل في دوال الكلاس هو خطأ يومي للمبتدئين! (self) هو ما يربط الدالة بالكائن نفسه.`,
            challenge: `تحدي OOP: قم بإنشاء كائن (Object) ثانٍ من هذا الكلاس مع إعطائه بيانات مختلفة، ثم اطبع خصائصه.`
        };
    } else if (t.includes('try') || t.includes('except') || t.includes('error')) {
        return {
            correct: `استخدام Try/Except هو الجدار الواقي لبرنامجك. هذا الكود سيلتقط الخطأ بدلاً من السماح للبرنامج بالانهيار في وجه المستخدم.`,
            mistake: `استخدام except فارغة (Bare except) هو ممارسة سيئة، حيث سيتم إخفاء جميع الأخطاء حتى تلك التي لم تتوقعها! حدد نوع الخطأ دائماً.`,
            challenge: `تحدي الأمان: أضف قسم (finally) في نهاية الكود لطباعة رسالة "انتهت العملية" سواء حدث خطأ أم لا.`
        };
    } else {
        return {
            correct: `في هذا الدرس (${title.replace(/"/g, '')})، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية.`,
            mistake: `أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation).`,
            challenge: `التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية.`
        };
    }
}

let updatedCount = 0;

pythonTrackData.forEach((lesson, index) => {
    // Only target lessons 6 to 100
    if (index >= 5 && index < 100) {
        if (!lesson.quick_practical_examples) return;

        const currentExpl = lesson.quick_practical_examples.find(e => e.type === 'correct')?.explanation || '';
        if (currentExpl.includes('هذا مثال عملي يوضح')) {
            const uniqueExpls = getUniqueExplanation(lesson.title || `Lesson ${index + 1}`);
            
            lesson.quick_practical_examples.forEach(ex => {
                if (ex.type === 'correct') {
                    ex.explanation = uniqueExpls.correct;
                } else if (ex.type === 'wrong') {
                    ex.explanation = uniqueExpls.mistake;
                } else if (ex.type === 'challenge') {
                    ex.explanation = uniqueExpls.challenge;
                }
            });
            updatedCount++;
        }
    }
});

const newContent = `export const pythonTrackData = ${JSON.stringify(pythonTrackData, null, 2)};\n`;
fs.writeFileSync('src/context/tracks/pythonData.ts', newContent);

console.log(`Successfully generated highly specific offline content for ${updatedCount} lessons!`);
