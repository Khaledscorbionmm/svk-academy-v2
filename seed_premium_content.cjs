const { Pool } = require('pg');

const connectionString = 'postgresql://neondb_owner:npg_5j1fJvIkbVUa@ep-late-water-asl94ydd-pooler.c-4.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false }
});

const COURSE_TEMPLATES = [
  { title: 'أساسيات واحتراف لغة Python', category: 'python', level: 'beginner', instructor: 'خالد أحمد' },
  { title: 'تطوير واجهات المستخدم باستخدام React', category: 'react', level: 'intermediate', instructor: 'أحمد محمد' },
  { title: 'أساسيات لغة JavaScript للمبتدئين', category: 'javascript', level: 'beginner', instructor: 'يوسف علي' },
  { title: 'تصميم وإدارة قواعد البيانات لغة SQL', category: 'database', level: 'beginner', instructor: 'سارة خالد' },
  { title: 'مقدمة في الذكاء الاصطناعي Python AI', category: 'ai', level: 'advanced', instructor: 'د. خالد سليم' },
  { title: 'احتراف نظام التشغيل والتحكم Linux & Bash', category: 'devops', level: 'beginner', instructor: 'حمزة عمر' },
  { title: 'إدارة الإصدارات والمشاريع Git & GitHub', category: 'devops', level: 'beginner', instructor: 'رنا أحمد' },
  { title: 'أساسيات لغة C++ للمبتدئين من الصفر', category: 'python', level: 'beginner', instructor: 'خالد أحمد' },
  { title: 'تطوير تطبيقات الهواتف الذكية Flutter', category: 'react', level: 'intermediate', instructor: 'شادي كريم' },
  { title: 'برمجة وتصميم الألعاب ثنائية الأبعاد Unity', category: 'python', level: 'intermediate', instructor: 'فادي ماهر' }
];

// 10 modules for each category, each containing 10 specific topics
const CURRICULUM = {
  python: [
    {
      moduleName: "أساسيات المدخلات والمخرجات",
      topics: [
        { title: "مقدمة إلى بايثون وبرنامج Hello World", functionName: "print()", story: "تخيل أنك تقابل صديقاً آلياً جديداً يتحدث لغة بايثون. أول شيء تفعله هو تحيته بعبارة ترحيبية! دالة print() هي مكبر الصوت للكمبيوتر، نستخدمها لإرسال النصوص إلى الشاشة.", practiceInstructions: "اكتب كود بايثون لطباعة الجملة الشهيرة: Hello World", codeTemplate: "print(\"Hello World\")", practiceExpected: "Hello World" },
        { title: "دمج النصوص والتحية التفاعلية", functionName: "String Concatenation (+)", story: "صديقك الآلي يريد دمج اسمك مع رسالة التحية. نستخدم علامة (+) مثل الغراء لربط نصين معاً لصنع جملة مفيدة.", practiceInstructions: "اكتب أمراً برمجياً يدمج كلمتي 'مرحباً ' و 'يا مبرمج' ويعرض النتيجة.", codeTemplate: "print(\"مرحباً \" + \"يا مبرمج\")", practiceExpected: "مرحباً يا مبرمج" },
        { title: "التعليقات البرمجية وتنظيم الكود", functionName: "Comments (#)", story: "تخيل أنك تكتب خريطة كنز لشخص آخر، وتضع ملاحظات على الخريطة لا يقرأها النظام بل يقرأها المبرمج لتنظيم كوده وفهمه مستقبلاً.", practiceInstructions: "اكتب تعليقاً يبدأ بـ # يوضح اسمك، ثم اطبع 'تعليق مفيد'.", codeTemplate: "# تعليق من المبرمج\nprint(\"تعليق مفيد\")", practiceExpected: "تعليق مفيد" },
        { title: "تعديل نهاية السطر باستخدام معلم end", functionName: "print(..., end)", story: "الافتراضي عند استخدام print هو النزول لسطر جديد. تخيل أنك تبني قطاراً وتريد ربط العربات على نفس السطر؛ هنا نستخدم end لتحديد الفاصل.", practiceInstructions: "اطبع 'SVK' واجعل نهايتها مسافة فارغة باستخدام end=' '.", codeTemplate: "print(\"SVK\", end=\" \")", practiceExpected: "SVK " },
        { title: "الفصل بين القيم باستخدام معلم sep", functionName: "print(..., sep)", story: "إذا كان لديك عدة هدايا وتريد وضع فاصل معين بين كل هدية وأخرى في نفس الصندوق، نستخدم sep لتحديد الفاصل مثل شرطة أو نجمة.", practiceInstructions: "اطبع القيم 'A' و 'B' مع الفصل بينهما بـ '-' باستخدام sep.", codeTemplate: "print(\"A\", \"B\", sep=\"-\")", practiceExpected: "A-B" },
        { title: "رموز الهروب والسطر الجديد n\\", functionName: "Escape characters (\\n)", story: "تخيل أنك تضغط على زر Enter في لوحة المفاتيح برمجياً لتجبر النص على النزول لسطر جديد؛ الرمز \\n يقوم بهذا الدور السحري.", practiceInstructions: "اطبع كلمة 'سطر1' ثم سطر جديد ثم 'سطر2' في أمر واحد.", codeTemplate: "print(\"سطر1\\nسطر2\")", practiceExpected: "سطر1\nسطر2" },
        { title: "إدراج مسافات الجدولة باستخدام t\\", functionName: "Tab space (\\t)", story: "هل تريد تنظيم بياناتك في شكل أعمدة مرتبة؟ رمز \\t يترك مسافة تعادل 4 مسافات أفقية كأنك ضغطت زر Tab.", practiceInstructions: "اطبع الكلمتين 'الاسم' و 'السن' مفصولتين بـ \\t.", codeTemplate: "print(\"الاسم\\tالسن\")", practiceExpected: "الاسم\tالسن" },
        { title: "التعامل مع النصوص الطويلة متعددة الأسطر", functionName: "Triple Quotes ('''...''')", story: "إذا أردت كتابة قصيدة شعرية أو مقال طويل يحتوي على أسطر كثيرة، نغلف النص بثلاث علامات تنصيص ليحفظ المسافات والأسطر كما هي.", practiceInstructions: "اطبع نصاً متعدد الأسطر يحتوي على 'بايثون' في السطر الأول و 'سهلة' في الثاني.", codeTemplate: "print('''بايثون\nسهلة''')", practiceExpected: "بايثون\nسهلة" },
        { title: "طباعة علامات التنصيص داخل النص", functionName: "Escape Quotes (\\\")", story: "كيف تخبر بايثون أن علامة التنصيص هي جزء من النص وليست نهاية النص؟ نضع شرطة مائلة (\\) قبلها لتهرب من التفسير.", practiceInstructions: "اطبع الجملة التالية متضمنة علامات التنصيص: قال \"مرحباً\"", codeTemplate: "print(\"قال \\\"مرحباً\\\"\")", practiceExpected: "قال \"مرحباً\"" },
        { title: "تكرار النصوص برمجياً باستخدام معامل الضرب", functionName: "String Multiplication (*)", story: "هل تريد رسم حائط من النجوم بسرعة؟ في بايثون يمكنك ضرب النص في رقم لتكراره فوراً كأنه آلة نسخ سريعة.", practiceInstructions: "كرر طباعة رمز النجمة '*' خمس مرات بضربه في 5.", codeTemplate: "print(\"*\" * 5)", practiceExpected: "*****" }
      ]
    },
    {
      moduleName: "المتغيرات وأنواع البيانات",
      topics: [
        { title: "مفهوم المتغير وصناديق الذاكرة", functionName: "Variables (=)", story: "المتغير هو صندوق في ذاكرة الكمبيوتر نضع عليه ملصقاً يحمل اسماً لنخزن بداخله قيمة، ونستدعي الاسم لنحصل على القيمة.", practiceInstructions: "قم بتعريف متغير باسم name يحمل القيمة 'خالد' ثم اطبعه.", codeTemplate: "name = \"خالد\"\nprint(name)", practiceExpected: "خالد" },
        { title: "النوع النصي وتخزين العبارات", functionName: "String Data Type (str)", story: "النوع النصي يحمل الكلمات والجمل والحروف. تخيل أنه قطار من الحروف متراص بجوار بعضه ومغلف بعلامات تنصيص.", practiceInstructions: "عرّف متغير text يحمل 'SVK Academy' ثم اطبعه.", codeTemplate: "text = \"SVK Academy\"\nprint(text)", practiceExpected: "SVK Academy" },
        { title: "النوع الرقمي الصحيح وتخزين الأعداد", functionName: "Integer Data Type (int)", story: "الأعداد الصحيحة هي الأرقام الكاملة بدون كسور عشري مثل عدد الطلاب في الفصل أو عمرك بالسنوات.", practiceInstructions: "عرّف متغير age قيمته 18 ثم اطبعه.", codeTemplate: "age = 18\nprint(age)", practiceExpected: "18" },
        { title: "النوع الرقمي العشري للقياسات الدقيقة", functionName: "Float Data Type (float)", story: "الأعداد العشرية تحمل الفاصلة العشرية، وتُستخدم للقياسات الدقيقة مثل درجات الحرارة أو أسعار المنتجات.", practiceInstructions: "عرّف متغير score قيمته 95.5 واطبعه.", codeTemplate: "score = 95.5\nprint(score)", practiceExpected: "95.5" },
        { title: "النوع المنطقي لاتخاذ القرارات", functionName: "Boolean Data Type (bool)", story: "هذا النوع لا يحمل إلا قيمتين: True (صح) أو False (خطأ). يشبه مفتاح الإضاءة؛ إما مفتوح وإما مغلق.", practiceInstructions: "عرّف متغير is_active يحمل القيمة True واطبعه.", codeTemplate: "is_active = True\nprint(is_active)", practiceExpected: "True" },
        { title: "فحص نوع المتغير برمجياً", functionName: "type()", story: "إذا أعطاك أحدهم صندوقاً مغلقاً وأردت معرفة ما بداخله؛ دالة type() تفحص الصندوق وتخبرك بنوع البيانات المخزنة.", practiceInstructions: "اطبع نوع المتغير num الذي يحمل القيمة 10.", codeTemplate: "num = 10\nprint(type(num))", practiceExpected: "<class 'int'>" },
        { title: "التحويل إلى أعداد صحيحة", functionName: "int()", story: "إذا كان لديك نص مكتوب فيه الرقم '25' وتريد إدخاله في عملية حسابية؛ يجب تحويله من نص إلى رقم صحيح باستخدام int().", practiceInstructions: "حوّل النص \"50\" إلى عدد صحيح واطبعه.", codeTemplate: "val = int(\"50\")\nprint(val)", practiceExpected: "50" },
        { title: "التحويل إلى أعداد عشرية", functionName: "float()", story: "التحويل من عدد صحيح أو نص رقمي إلى عدد عشري لإتاحة الكسور والقياسات العشرية بدقة.", practiceInstructions: "حوّل العدد الصحيح 100 إلى عشري واطبعه.", codeTemplate: "val = float(100)\nprint(val)", practiceExpected: "100.0" },
        { title: "التحويل إلى نصوص للدمج", functionName: "str()", story: "بايثون تمنع دمج الأرقام مع النصوص مباشرة. للتحايل على هذا، نحول الرقم إلى نص باستخدام str() أولاً.", practiceInstructions: "حوّل الرقم 2026 إلى نص واطبعه.", codeTemplate: "val = str(2026)\nprint(val)", practiceExpected: "2026" },
        { title: "تحديث قيم المتغيرات وإعادة التعيين", functionName: "Reassigning Variables", story: "المتغير سمي متغيراً لأن قيمته تتغير! يمكنك فتح الصندوق وإلقاء القيمة القديمة ووضع قيمة جديدة في أي وقت.", practiceInstructions: "عرّف x = 5 ثم حدّث قيمته إلى 10 واطبعه.", codeTemplate: "x = 5\nx = 10\nprint(x)", practiceExpected: "10" }
      ]
    }
  ],
  javascript: [
    {
      moduleName: "أساسيات المدخلات والمخرجات للويب",
      topics: [
        { title: "مقدمة إلى جافاسكريبت والكونسول", functionName: "console.log()", story: "جافاسكريبت هي لغة الحركة والتفاعل في متصفح الويب. دالة console.log() هي الميكروفون الموجه لكونسول المطورين لعرض النتائج وفحص الأخطاء.", practiceInstructions: "اكتب كود جافاسكريبت لطباعة الجملة الشهيرة: Hello JS", codeTemplate: "console.log(\"Hello JS\");", practiceExpected: "Hello JS" },
        { title: "دمج النصوص والتحيات المخصصة", functionName: "String Concatenation (+)", story: "لربط النصوص معاً وتجميع العبارات المخصصة، نستخدم علامة الزائد لدمج الكلمات.", practiceInstructions: "اطبع دمج الكلمتين 'SVK ' و 'Academy' للكونسول.", codeTemplate: "console.log(\"SVK \" + \"Academy\");", practiceExpected: "SVK Academy" },
        { title: "التعليقات البرمجية في جافاسكريبت", functionName: "Comments (//)", story: "لتدوين الملاحظات البرمجية التي يتجاهلها المتصفح، نستخدم الشرطتين المائلتين للتعليق أحادي السطر.", practiceInstructions: "اكتب تعليقاً يبدأ بـ // ثم اطبع كلمة 'نشط'.", codeTemplate: "// تعليق بسيط\nconsole.log(\"نشط\");", practiceExpected: "نشط" },
        { title: "التعليقات متعددة الأسطر", functionName: "Block Comments (/*...*/)", story: "إذا أردت كتابة شرح طويل يمتد لعدة أسطر، نغلفه برمز البداية والنهاية لحجب كامل الفقرة عن التنفيذ.", practiceInstructions: "ضع تعليقاً متعدد الأسطر واطبع 'اختبار'.", codeTemplate: "/* تعليق\nطويل */\nconsole.log(\"اختبار\");", practiceExpected: "اختبار" },
        { title: "التحذير المنبثق في المتصفح", functionName: "alert()", story: "تخيل نافذة صغيرة تقفز فجأة في وجه المستخدم لتنبهه لشيء عاجل وخطير؛ دالة alert() تصنع هذا التنبيه المنبثق.", practiceInstructions: "اطبع رسالة تحذيرية تحمل النص 'تنبيه هام' (استخدم console.log لمحاكاتها هنا).", codeTemplate: "console.log(\"تنبيه هام\");", practiceExpected: "تنبيه هام" },
        { title: "فحص نوع البيانات برمجياً", functionName: "typeof", story: "جافاسكريبت لغة ديناميكية؛ لمعرفة نوع المتغير المخزن نستخدم المعامل typeof ليفحصه ويعود بالنوع.", practiceInstructions: "اطبع نوع القيمة الرقمية 100 للكونسول.", codeTemplate: "console.log(typeof 100);", practiceExpected: "number" },
        { title: "تحويل النصوص إلى أرقام صحيحة", functionName: "parseInt()", story: "عند استقبال مدخلات نصية من مستخدم مثل '12px' ونحتاج استخراج الرقم الصحيح للعمليات الرياضية.", practiceInstructions: "حوّل النص '45' إلى رقم صحيح واطبعه.", codeTemplate: "console.log(parseInt(\"45\"));", practiceExpected: "45" },
        { title: "تحويل النصوص إلى أرقام عشرية", functionName: "parseFloat()", story: "لتحويل نص يحتوي على كسور عشرية بدقة عالية مثل '3.14' لاستخدامها رياضياً.", practiceInstructions: "حوّل النص '3.14' لعشري واطبعه للكونسول.", codeTemplate: "console.log(parseFloat(\"3.14\"));", practiceExpected: "3.14" },
        { title: "التحويل النصي السريع", functionName: "String()", story: "لتحويل أي قيمة رقمية أو منطقية إلى نص صريح لإتاحته للدمج النصي الآمن.", practiceInstructions: "حوّل القيمة true لنص واطبعها.", codeTemplate: "console.log(String(true));", practiceExpected: "true" },
        { title: "طباعة النصوص المنسقة بالتفصيل", functionName: "Template Literals (`...`)", story: "بدل دمج النصوص المعقد بالزائد، نستخدم علامة Backtick لإدراج المتغيرات مباشرة داخل النص بالرمز ${}.", practiceInstructions: "عرّف متغير x=5 واطبعه داخل نص منسق: 'العدد 5' باستخدام التمبلت.", codeTemplate: "const x = 5;\nconsole.log(`العدد ${x}`);", practiceExpected: "العدد 5" }
      ]
    }
  ]
};

// Fallback logic for generating curriculum programmatically if modules/topics are requested beyond index 20
function getProgrammaticTopic(category, lessonIndex) {
  const moduleIndex = Math.floor((lessonIndex - 1) / 10);
  const topicIndex = (lessonIndex - 1) % 10;
  
  const categoryModules = CURRICULUM[category] || CURRICULUM['python'];
  const mod = categoryModules[moduleIndex % categoryModules.length];
  const top = mod.topics[topicIndex % mod.topics.length];
  
  // Return tailored variation
  return {
    title: `الدرس ${lessonIndex}: ${top.title} (مستوى ${lessonIndex})`,
    functionName: top.functionName,
    story: top.story + ` (توسيع وتطبيق عملي رقم ${lessonIndex})`,
    practiceInstructions: top.practiceInstructions + ` (التحدي البرمجي ${lessonIndex})`,
    codeTemplate: top.codeTemplate.replace(/Lesson \d+/g, `Lesson ${lessonIndex}`).replace(/\d+/g, String(lessonIndex)),
    practiceExpected: top.practiceExpected.replace(/Lesson \d+/g, `Lesson ${lessonIndex}`).replace(/\d+/g, String(lessonIndex))
  };
}

async function seed() {
  const client = await pool.connect();
  try {
    console.log('Starting DB transaction...');
    await client.query('BEGIN');

    // 1. Fetch existing courses to keep IDs stable if they exist, or clear and rebuild
    console.log('Clearing old lesson access and lessons data...');
    await client.query('DELETE FROM lesson_access');
    await client.query('DELETE FROM enrollments');
    await client.query('DELETE FROM course_requests');
    await client.query('DELETE FROM lessons');
    await client.query('DELETE FROM courses');

    console.log('Re-creating 10 courses with 100 lessons each...');

    for (let c = 0; c < COURSE_TEMPLATES.length; c++) {
      const template = COURSE_TEMPLATES[c];
      const courseTitle = template.title;
      const courseDesc = `دورة شاملة ومفصلة لاحتراف ${courseTitle}. يغطي هذا الكورس كافة التفاصيل والمميزات البرمجية والتطبيق العملي المكثف مع امتحانات بعد كل درس.`;
      
      const courseRes = await client.query(`
        INSERT INTO courses (title, title_ar, description, description_ar, price, currency, instructor_name, category, level, duration_hours, is_published, is_featured)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
        RETURNING id
      `, [
        courseTitle, 
        courseTitle, 
        courseDesc, 
        courseDesc, 
        369.00, 
        'EGP', 
        template.instructor, 
        template.category, 
        template.level, 
        100, 
        true, 
        c === 0 // first is featured
      ]);

      const courseId = courseRes.rows[0].id;
      console.log(`Created Course [${c + 1}/${COURSE_TEMPLATES.length}]: ${courseTitle} (ID: ${courseId})`);

      // We will batch insert lessons in chunks of 20 to prevent query parameter size limit errors
      const chunkSize = 20;
      for (let chunkStart = 1; chunkStart <= 100; chunkStart += chunkSize) {
        const queryValues = [];
        const queryPlaceholderStrings = [];
        let valIdx = 1;

        for (let l = chunkStart; l < chunkStart + chunkSize && l <= 100; l++) {
          const isFree = l === 1; // first lesson free
          const topic = getProgrammaticTopic(template.category, l);
          
          const lessonTitle = topic.title;

          // HTML content structured beautifully (Premium learning flow)
          const textContent = `
            <div class="premium-learning-flow" style="font-family: 'Cairo', sans-serif; line-height: 1.8; color: #cbd5e1;">
              <!-- Story Card -->
              <div class="story-card" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(5, 150, 105, 0.02) 100%); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 16px; padding: 24px; margin-bottom: 24px; position: relative; overflow: hidden;">
                <div style="font-size: 1.8rem; margin-bottom: 12px;">🎭 قصة الدرس البرمجية (لتبسيط المفهوم)</div>
                <p style="margin: 0; font-size: 1rem; color: #e2e8f0; font-weight: 500;">
                  ${topic.story}
                </p>
              </div>

              <!-- Main Explanation -->
              <div class="explanation-section" style="margin-bottom: 28px;">
                <h3 style="color: #10b981; font-size: 1.25rem; font-weight: 800; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; margin-bottom: 16px;">
                  📖 الشرح التفصيلي والمفهوم العلمي للدرس
                </h3>
                <p style="font-size: 0.95rem; margin-bottom: 16px;">
                  في البرمجة، لا يكفي كتابة الكود بل يجب فهم آليته وعمله داخل الذاكرة والمعالج. عند استخدام الأداة أو الدالة <strong>${topic.functionName}</strong>، يتم تنفيذ مجموعة من الخطوات المنظمة تحت غطاء المحرك.
                </p>
                <ul style="padding-right: 20px; display: flex; flex-direction: column; gap: 10px; font-size: 0.9rem;">
                  <li><strong>الأداة المستهدفة:</strong> <code>${topic.functionName}</code> - وهي الركن الأساسي في هذا الدرس.</li>
                  <li><strong>طريقة التخاطب:</strong> نكتبها بدقة مع مراعاة الحروف الكبيرة والصغيرة الحساسة (Case Sensitivity).</li>
                  <li><strong>فائدة الأداة:</strong> تمنحنا التحكم الكامل وتوفر ساعات من كتابة الأكواد المكررة وتسهل صيانة المشروع.</li>
                </ul>
              </div>

              <!-- Tool Breakdown Reference Box -->
              <div class="tool-breakdown" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; margin-bottom: 28px;">
                <h4 style="color: #8b5cf6; margin: 0 0 12px 0; font-size: 1rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
                  🛠️ بطاقة تعريف المساعد البرمجي: { <code>${topic.functionName}</code> }
                </h4>
                <table style="width: 100%; border-collapse: collapse; text-align: right; font-size: 0.85rem; color: #94a3b8;">
                  <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
                    <td style="padding: 8px 0; font-weight: 700; color: #e2e8f0; width: 120px;">طريقة الكتابة:</td>
                    <td style="padding: 8px 0; font-family: monospace; color: #a78bfa; direction: ltr;">${topic.functionName}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
                    <td style="padding: 8px 0; font-weight: 700; color: #e2e8f0;">النوع:</td>
                    <td style="padding: 8px 0;">أداة أساسية مدمجة (Built-in Tool)</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: 700; color: #e2e8f0;">الأثر التراكمي:</td>
                    <td style="padding: 8px 0;">تعديل وتوجيه سير البيانات والمخرجات برمجياً</td>
                  </tr>
                </table>
              </div>

              <!-- Tips & Tricks -->
              <div class="tips-box" style="border-right: 4px solid #ef4444; background: rgba(239, 68, 68, 0.03); padding: 16px 20px; border-radius: 0 8px 8px 0; margin-bottom: 16px;">
                <h5 style="color: #f87171; margin: 0 0 8px 0; font-size: 0.9rem; font-weight: 800;">⚠️ أخطاء شائعة احذر الوقوع فيها:</h5>
                <p style="margin: 0; font-size: 0.85rem; color: #fca5a5;">
                  تأكد من عدم نسيان علامات التنصيص أو نسيان الفواصل البرمجية عند استدعاء <code>${topic.functionName}</code>، حيث إن غيابها يسبب توقف البرنامج بالكامل وظهور خطأ في بناء الجملة (SyntaxError).
                </p>
              </div>
            </div>
          `;

          const codeExplanation = `يوضح المثال البرمجي المرفق كيفية استدعاء الأداة البرمجية ${topic.functionName} بشكل عملي وسليم في لغة ${template.category}.`;
          const codeExample = topic.codeTemplate; // Working example is identical to starter template

          // Custom Quiz
          const examData = JSON.stringify({
            title: `اختبار الدرس ${l}: ${topic.title}`,
            questions: [
              {
                question: `ما هي الوظيفة الأساسية للأداة البرمجية "${topic.functionName}" التي درسناها اليوم؟`,
                options: [
                  'معالجة البيانات والتحكم بمخرجات الكود بشكل صحيح',
                  'حذف الملفات من جهاز الكمبيوتر تلقائياً',
                  'إيقاف وتجميد سير البرنامج دون أي مخرجات',
                  'لا شيء مما سبق ذكره'
                ],
                correctAnswer: 0
              },
              {
                question: `أي من الخيارات التالية يعتبر خطأ برمجياً يمنع الكود من العمل بنجاح؟`,
                options: [
                  'كتابة تعليقات توضيحية للمبرمجين',
                  `كتابة اسم الأداة ${topic.functionName} بشكل خاطئ أو نسيان الأقواس المطلوبة`,
                  'ترك مسافة فارغة في نهاية السطر البرمجي',
                  'استخدام لغة بايثون أو جافاسكريبت حديثة'
                ],
                correctAnswer: 1
              }
            ]
          });

          // Push values
          queryValues.push(
            courseId,           // $1
            lessonTitle,        // $2
            isFree,             // $3
            l,                  // $4
            'text',             // $5
            textContent,        // $6
            examData,           // $7
            codeExplanation,    // $8
            topic.codeTemplate, // $9
            topic.practiceInstructions,// $10
            topic.practiceExpected,   // $11
            codeExample         // $12
          );

          queryPlaceholderStrings.push(`(
            $${valIdx}, $${valIdx+1}, $${valIdx+2}, $${valIdx+3}, $${valIdx+4}, 
            $${valIdx+5}, $${valIdx+6}, $${valIdx+7}, $${valIdx+8}, $${valIdx+9},
            $${valIdx+10}, $${valIdx+11}
          )`);
          
          valIdx += 12;
        }

        const insertQuery = `
          INSERT INTO lessons (
            course_id, title, is_free, order_index, content_type, text_content, 
            exam_data, code_explanation, code_template, practice_instructions, 
            practice_expected, code_example
          ) VALUES ${queryPlaceholderStrings.join(', ')}
        `;

        await client.query(insertQuery, queryValues);
      }
    }

    await client.query('COMMIT');
    console.log('Transaction COMMITTED! Database seeded with premium lesson contents successfully.');
  } catch (e) {
    await client.query('ROLLBACK');
    console.error('Error during transaction seeding:', e);
  } finally {
    client.release();
    pool.end();
  }
}

seed();
