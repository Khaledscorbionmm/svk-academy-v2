const { Pool } = require('pg');

const connectionString = 'postgresql://neondb_owner:npg_5j1fJvIkbVUa@ep-late-water-asl94ydd-pooler.c-4.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false }
});

const languageLessons = {
  "English Fluency Masterclass": [
    { title: "الحروف الهجائية الإنجليزية ونطقها (Alphabet & Sounds)", videoUrl: "https://www.youtube.com/embed/7VhwE1WvO00", content: "# الحروف الإنجليزية\nتعلم الحروف الأبجدية الإنجليزية الـ 26 وطريقة نطقها الصحيحة.\n\n## أهمية النطق الصحيح\nالنطق الصحيح للحروف هو الأساس لقراءة الكلمات بشكل سليم.\n\n### تدريب\nحاول نطق الحروف أمام المرآة وكررها بصوت عالٍ." },
    { title: "التحيات والتعارف (Greetings & Introductions)", videoUrl: "https://www.youtube.com/embed/JuEMrR5E4S8", content: "# التحيات في اللغة الإنجليزية\nتعلم كيف تلقي التحية وتعرف بنفسك للمتحدثين باللغة الإنجليزية.\n\n## مفردات أساسية\n- Hello / Hi (مرحباً)\n- Good Morning (صباح الخير)\n- How are you? (كيف حالك؟)\n\n### المحادثة\nاستخدم هذه الكلمات لبناء محادثة بسيطة." },
    { title: "الأرقام والأيام والشهور (Numbers, Days & Months)", videoUrl: "https://www.youtube.com/embed/XqZsoesa55w", content: "# الأرقام والأيام\nتعلم العد باللغة الإنجليزية ومعرفة أيام الأسبوع وشهور السنة.\n\n## الأيام\n- Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday\n\n### تدريب\nاكتب تاريخ ميلادك باللغة الإنجليزية كاملة." },
    { title: "تكوين الجمل البسيطة (Basic Sentence Structure)", videoUrl: "https://www.youtube.com/embed/D_kC5F0i1B8", content: "# تكوين الجمل\nتتكون الجملة الإنجليزية عادة من الفاعل (Subject) ثم الفعل (Verb) ثم المفعول به (Object).\n\n## أمثلة\n- I eat an apple. (أنا آكل تفاحة)\n- She reads a book. (هي تقرأ كتاباً)\n\n### تدريب\nاكتب 5 جمل بسيطة تصف روتينك اليومي." },
    { title: "السؤال والجواب (Asking & Answering Questions)", videoUrl: "https://www.youtube.com/embed/Qn5B_bH5JQQ", content: "# تكوين الأسئلة\nتعلم كلمات الاستفهام الأساسية (Wh- Questions) وكيفية الرد عليها.\n\n## كلمات الاستفهام\n- What (ماذا)\n- Where (أين)\n- When (متى)\n- Why (لماذا)\n- Who (من)\n\n### تدريب\nاسأل صديقك 3 أسئلة باستخدام هذه الكلمات." }
  ],
  "French for Beginners (Parlez Français)": [
    { title: "الأبجدية الفرنسية وطريقة النطق (L'alphabet français)", videoUrl: "https://www.youtube.com/embed/52JqA03eW-g", content: "# الأبجدية الفرنسية\nتتكون الأبجدية الفرنسية من 26 حرفاً تماماً كالإنجليزية ولكن نطقها مختلف.\n\n## النطق\nانتبه للحروف المتحركة وحرف الـ (R) الذي يُنطق من الحنجرة.\n\n### تدريب\nاستمع للأغنية الأبجدية الفرنسية وكررها." },
    { title: "التحيات الأساسية بالفرنسية (Les Salutations)", videoUrl: "https://www.youtube.com/embed/HdTGpanI0KA", content: "# التحيات\nتعلم كيف تقول مرحباً ووداعاً باللغة الفرنسية.\n\n## كلمات هامة\n- Bonjour (صباح الخير / مرحباً)\n- Bonsoir (مساء الخير)\n- Merci (شكراً)\n- Au revoir (إلى اللقاء)\n\n### محادثة\nابدأ محادثة بسيطة مع زميلك باستخدام Bonjour." },
    { title: "الأرقام الفرنسية من 1 إلى 100 (Les Nombres)", videoUrl: "https://www.youtube.com/embed/hBwP0wUoUaY", content: "# الأرقام الفرنسية\nتعلم العد باللغة الفرنسية.\n\n## الأرقام\n- Un (واحد)\n- Deux (اثنين)\n- Trois (ثلاثة)\n- Quatre (أربعة)\n\n### تدريب\nعد من 1 إلى 10 بصوت عالٍ." },
    { title: "التعريف بالنفس (Se Présenter)", videoUrl: "https://www.youtube.com/embed/q1J_L0Yj67s", content: "# التعريف بالنفس\nتعلم كيف تخبر الآخرين عن اسمك وعمرك وجنسيتك.\n\n## أمثلة\n- Je m'appelle... (اسمي...)\n- J'ai... ans (عمري... سنة)\n- Je suis Égyptien (أنا مصري)\n\n### تدريب\nاكتب فقرة قصيرة تعرف فيها عن نفسك بالفرنسية." },
    { title: "الأفعال الأساسية الشائعة (Les Verbes Courants)", videoUrl: "https://www.youtube.com/embed/vX0A1xPqIqw", content: "# الأفعال\nتعلم أهم الأفعال الفرنسية وكيفية تصريفها في المضارع.\n\n## الأفعال\n- Être (يكون)\n- Avoir (يملك)\n- Faire (يفعل)\n- Aller (يذهب)\n\n### تدريب\nاستخدم فعل Être لوصف نفسك في 3 جمل." }
  ],
  "German Made Easy (Deutsch Lernen)": [
    { title: "الأبجدية الألمانية والنطق (Das deutsche Alphabet)", videoUrl: "https://www.youtube.com/embed/WJ6z6XkF8qE", content: "# الأبجدية الألمانية\nتعرف على الحروف الألمانية والحروف الإضافية (Ä, Ö, Ü, ß).\n\n## النطق\nكل حرف في الألمانية يُنطق تقريباً كما يُكتب، مما يسهل القراءة.\n\n### تدريب\nانطق اسمك باللغة الألمانية حرفاً حرفاً." },
    { title: "التحيات والمجاملات (Begrüßung und Abschied)", videoUrl: "https://www.youtube.com/embed/bQ0JNaC0R2c", content: "# التحيات\nالكلمات الأساسية للترحيب والوداع في ألمانيا.\n\n## المفردات\n- Hallo (مرحباً)\n- Guten Morgen (صباح الخير)\n- Danke (شكراً)\n- Tschüss (وداعاً)\n\n### تدريب\nتبادل التحيات مع صديقك باللغة الألمانية." },
    { title: "الأرقام الألمانية (Die Zahlen)", videoUrl: "https://www.youtube.com/embed/qL09A6n9lOQ", content: "# الأرقام الألمانية\nتعلم العد من صفر إلى مليون.\n\n## الأرقام\n- Eins (واحد)\n- Zwei (اثنين)\n- Drei (ثلاثة)\n- Vier (أربعة)\n\n### تدريب\nاكتب رقم هاتفك وقم بقراءته باللغة الألمانية." },
    { title: "التعريف بالنفس (Sich Vorstellen)", videoUrl: "https://www.youtube.com/embed/L6q98A0eL9Y", content: "# التعريف بالنفس\nتعلم كيف تخبر الآخرين بمعلوماتك الشخصية.\n\n## أمثلة\n- Ich heiße... (اسمي...)\n- Ich komme aus Ägypten (أنا من مصر)\n- Ich wohne in Kairo (أنا أعيش في القاهرة)\n\n### تدريب\nعرف نفسك لزملائك في 4 جمل ألمانية." },
    { title: "الأفعال والضمائر الأساسية (Verben und Pronomen)", videoUrl: "https://www.youtube.com/embed/6aXWl1Wp76Q", content: "# الأفعال والضمائر\nتعلم الضمائر الشخصية (ich, du, er, sie, es...) وتصريف الأفعال الأساسية.\n\n## الأفعال\n- Sein (يكون)\n- Haben (يملك)\n- Machen (يفعل)\n\n### تدريب\nاكتب 5 جمل باستخدام فعل Sein." }
  ]
};

async function patchLanguages() {
  console.log("Starting Language Lessons Patch...");
  try {
    const coursesRes = await pool.query(`SELECT id, title FROM courses WHERE category='Languages'`);
    const langCourses = coursesRes.rows;

    for (const course of langCourses) {
      console.log("Patching course: " + course.title);
      
      const delRes = await pool.query("DELETE FROM lessons WHERE course_id = $1", [course.id]);
      console.log("  Deleted " + delRes.rowCount + " old lessons.");

      const lessons = languageLessons[course.title];
      if (lessons) {
        // 2. Insert new lessons
        for (let i = 0; i < lessons.length; i++) {
          const lesson = lessons[i];
          const orderIndex = i + 1;

          await pool.query(
            'INSERT INTO lessons (title, content, text_content, content_type, video_url, course_id, order_index, is_free) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
            [lesson.title, lesson.content, lesson.content, 'video', lesson.videoUrl, course.id, orderIndex, true]
          );
        }
        console.log("  Inserted " + lessons.length + " new REAL lessons with unique YouTube videos.");
      } else {
        console.warn("  No content defined for " + course.title);
      }
    }
    
    console.log("Patch completed successfully!");
  } catch (error) {
    console.error("Error during patch:", error);
  } finally {
    pool.end();
  }
}

patchLanguages();
