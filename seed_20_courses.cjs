const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_5j1fJvIkbVUa@ep-late-water-asl94ydd-pooler.c-4.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  ssl: { rejectUnauthorized: false }
});

const COURSE_TEMPLATES = [
  { title: 'أساسيات لغة Python', category: 'python', level: 'beginner', instructor: 'خالد أحمد' },
  { title: 'تطوير واجهات المستخدم باستخدام React', category: 'react', level: 'intermediate', instructor: 'أحمد محمد' },
  { title: 'أساسيات لغة JavaScript', category: 'javascript', level: 'beginner', instructor: 'يوسف علي' },
  { title: 'قواعد البيانات لغة SQL', category: 'database', level: 'beginner', instructor: 'سارة خالد' },
  { title: 'أساسيات لغة HTML5 & CSS3', category: 'javascript', level: 'beginner', instructor: 'منى أحمد' },
  { title: 'مقدمة في الذكاء الاصطناعي Python AI', category: 'ai', level: 'advanced', instructor: 'د. خالد سليم' },
  { title: 'احتراف لغة TypeScript', category: 'react', level: 'intermediate', instructor: 'محمود حسن' },
  { title: 'بناء خوادم الويب باستخدام Node.js', category: 'javascript', level: 'intermediate', instructor: 'طارق علي' },
  { title: 'أساسيات نظام التشغيل Linux', category: 'devops', level: 'beginner', instructor: 'حمزة عمر' },
  { title: 'إدارة الإصدارات باستخدام Git & GitHub', category: 'devops', level: 'beginner', instructor: 'رنا أحمد' },
  { title: 'أساسيات لغة C++', category: 'python', level: 'beginner', instructor: 'خالد أحمد' },
  { title: 'تطوير تطبيقات الموبايل Flutter', category: 'react', level: 'intermediate', instructor: 'شادي كريم' },
  { title: 'برمجة خوادم الويب باستخدام PHP', category: 'javascript', level: 'beginner', instructor: 'عمر ياسر' },
  { title: 'الأمن السيبراني وحماية الشبكات', category: 'security', level: 'advanced', instructor: 'د. محمد علي' },
  { title: 'هياكل البيانات والخوارزميات', category: 'python', level: 'intermediate', instructor: 'ياسر هشام' },
  { title: 'الحوسبة السحابية و Docker', category: 'devops', level: 'advanced', instructor: 'كريم محمود' },
  { title: 'تطوير تطبيقات الويب باستخدام Next.js', category: 'react', level: 'advanced', instructor: 'أحمد محمد' },
  { title: 'برمجة الألعاب باستخدام C# & Unity', category: 'python', level: 'intermediate', instructor: 'فادي ماهر' },
  { title: 'تحليل البيانات باستخدام Python & Pandas', category: 'ai', level: 'intermediate', instructor: 'ريهام سعيد' },
  { title: 'أساسيات لغة Java', category: 'python', level: 'beginner', instructor: 'خالد أحمد' }
];

async function seed() {
  const client = await pool.connect();
  try {
    console.log('Clearing old courses and lessons...');
    await client.query('BEGIN');
    await client.query('DELETE FROM lesson_access');
    await client.query('DELETE FROM enrollments');
    await client.query('DELETE FROM lessons');
    await client.query('DELETE FROM courses');

    console.log('Seeding 20 courses, each with 100 lessons...');
    
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
        369.00, // Course Single Price
        'EGP', 
        template.instructor, 
        template.category, 
        template.level, 
        100, // 100 hours duration
        true, // Published
        c === 0 // First is featured
      ]);

      const courseId = courseRes.rows[0].id;
      console.log(`Created Course [${c + 1}/20]: ${courseTitle} (ID: ${courseId})`);

      // Prepare 100 lessons for this course in batch
      const queryValues = [];
      const queryPlaceholderStrings = [];
      let valIdx = 1;

      for (let l = 1; l <= 100; l++) {
        const isFree = l === 1; // First lesson free
        const lessonTitle = `الدرس ${l}: ${getLessonTitleSuffix(template.category, l)}`;
        
        // 4 Panels content
        const textContent = `
          <h3>الشرح النظري: ${lessonTitle}</h3>
          <p>أهلاً بك في هذا الدرس الممتع! سنتعرف اليوم بالتفصيل على كيفية عمل الأكواد البرمجية والتطبيقات المرتبطة بها في هذا القسم. يرجى قراءة الشرح بالكامل وتجربة الكود في المحاكي المجاور.</p>
          <ul>
            <li>أهمية المفهوم البرمجي وكيفية تطبيقه في المشاريع الحقيقية.</li>
            <li>تبسيط القواعد البرمجية (Syntax) لفهم البنية الأساسية.</li>
            <li>تجنب الأخطاء الشائعة أثناء كتابة هذا الكود.</li>
          </ul>
        `;

        const codeTemplate = getCodeTemplate(template.category, l);
        const codeExplanation = `يستخدم هذا الكود لتعريف وتطبيق الأساسيات البرمجية الخاصة بالدرس ${l} في لغة ${template.category}.`;
        const practiceInstructions = `اكتب الكود المناسب لطباعة النتيجة المطلوبة في موجه الأوامر كما هو موضح بالدرس.`;
        const practiceExpected = getExpectedOutput(template.category, l);
        const codeExample = getCodeExample(template.category, l);

        const examData = JSON.stringify({
          title: `اختبار الدرس ${l}`,
          questions: [
            {
              question: `ما هو الغرض الأساسي من المفهوم المشروح في الدرس ${l}؟`,
              options: ['تنفيذ عمليات منطقية متطورة', 'تسهيل قراءة الكود وتبسيطه', 'تخزين وعرض البيانات بكفاءة', 'جميع ما سبق صحيح'],
              correctAnswer: 3
            },
            {
              question: `كيف نقوم بكتابة البنية الأساسية بشكل سليم؟`,
              options: ['باتباع القواعد المنصوص عليها في الشرح', 'عشوائياً بدون الالتزام بالبنية', 'باستخدام دوال غير معرفة', 'لا شيء مما سبق'],
              correctAnswer: 0
            }
          ]
        });

        // Push args
        queryValues.push(
          courseId,           // $1
          lessonTitle,        // $2
          isFree,             // $3
          l,                  // $4 (order_index)
          'text',             // $5 (content_type)
          textContent,        // $6
          examData,           // $7
          codeExplanation,    // $8
          codeTemplate,       // $9
          practiceInstructions,// $10
          practiceExpected,   // $11
          codeExample         // $12
        );

        // Placeholders: ($1, $2, ...)
        queryPlaceholderStrings.push(`(
          $${valIdx}, $${valIdx+1}, $${valIdx+2}, $${valIdx+3}, $${valIdx+4}, 
          $${valIdx+5}, $${valIdx+6}, $${valIdx+7}, $${valIdx+8}, $${valIdx+9},
          $${valIdx+10}, $${valIdx+11}
        )`);
        
        valIdx += 12;
      }

      // Batch insert 100 lessons for this course
      const insertQuery = `
        INSERT INTO lessons (
          course_id, title, is_free, order_index, content_type, text_content, 
          exam_data, code_explanation, code_template, practice_instructions, 
          practice_expected, code_example
        ) VALUES ${queryPlaceholderStrings.join(', ')}
      `;

      await client.query(insertQuery, queryValues);
    }

    await client.query('COMMIT');
    console.log('Database seeded with 20 courses and 100 lessons each successfully!');
  } catch (e) {
    await client.query('ROLLBACK');
    console.error('Error during seeding:', e);
  } finally {
    client.release();
    pool.end();
  }
}

function getLessonTitleSuffix(cat, idx) {
  const titles = [
    'المفاهيم الأساسية والمدخل الأساسي',
    'إعداد البيئة وتثبيت الأدوات المطلوبة',
    'أول تطبيق وعرض النتيجة الأولى',
    'فهم المتغيرات وتخصيص القيم الأساسية',
    'أنواع البيانات الأساسية والتعامل معها',
    'العمليات الحسابية والمنطقية الأساسية',
    'الجمل الشرطية والتحكم في سير البرنامج',
    'حلقات التكرار وتكرار الأكواد البرمجية',
    'بناء الدوال واستدعائها وتمرير المعاملات',
    'المصفوفات وهياكل البيانات الأساسية'
  ];
  return `${titles[(idx - 1) % titles.length]} (جزء ${Math.floor((idx - 1) / titles.length) + 1})`;
}

function getCodeTemplate(cat, idx) {
  if (cat === 'python') return `def main():\n    # اكتب كود بايثون هنا للدرس ${idx}\n    print("Hello from Lesson ${idx}")\n\nif __name__ == '__main__':\n    main()`;
  if (cat === 'javascript' || cat === 'react') return `function main() {\n    // اكتب كود جافاسكريبت هنا للدرس ${idx}\n    console.log("Hello from Lesson ${idx}");\n}\n\nmain();`;
  return `// اكتب كود للدرس ${idx} هنا\nconsole.log("تم البدء");`;
}

function getExpectedOutput(cat, idx) {
  return `Hello from Lesson ${idx}`;
}

function getCodeExample(cat, idx) {
  if (cat === 'python') return `print("مثال عملي للدرس ${idx}")`;
  return `console.log("مثال عملي للدرس ${idx}");`;
}

seed();
