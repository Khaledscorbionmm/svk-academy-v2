const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_5j1fJvIkbVUa@ep-late-water-asl94ydd-pooler.c-4.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  ssl: { rejectUnauthorized: false }
});

async function run() {
  try {
    const courseRes = await pool.query("SELECT id FROM courses WHERE title = 'أساسيات واحتراف لغة Python'");
    if (courseRes.rows.length === 0) {
      console.log("Python course not found");
      return;
    }
    const courseId = courseRes.rows[0].id;
    console.log(`Python Course ID: ${courseId}`);

    const sampleIndexes = [1, 2, 5, 11, 15, 21, 31, 41, 51, 61];
    const lessonsRes = await pool.query(
      "SELECT id, title, order_index, code_template, practice_expected, practice_instructions, code_explanation, exam_data FROM lessons WHERE course_id = $1 AND order_index = ANY($2) ORDER BY order_index",
      [courseId, sampleIndexes]
    );

    console.log(`\n=== SAMPLE PYTHON LESSONS VERIFICATION ===\n`);
    lessonsRes.rows.forEach(lesson => {
      console.log(`----------------------------------------`);
      console.log(`[الدرس ${lesson.order_index}]: ${lesson.title}`);
      console.log(`الكود الافتراضي:\n${lesson.code_template}`);
      console.log(`المخرجات المتوقعة: ${lesson.practice_expected}`);
      console.log(`التعليمات: ${lesson.practice_instructions}`);
      console.log(`الشرح البرمجي: ${lesson.code_explanation}`);
      
      let exam = lesson.exam_data;
      if (typeof exam === 'string') {
        try {
          exam = JSON.parse(exam);
        } catch(e) {
          console.log("Failed parsing exam data string");
        }
      }
      
      if (exam && exam.questions && exam.questions[0]) {
        console.log(`سؤال الاختبار الأول: ${exam.questions[0].question}`);
        console.log(`خيارات السؤال: ${exam.questions[0].options.join(' | ')}`);
      } else {
        console.log("No exam questions found or invalid format");
      }
    });

  } catch(e) {
    console.error('Error:', e);
  } finally {
    pool.end();
  }
}

run();
