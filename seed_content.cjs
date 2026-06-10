const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_5j1fJvIkbVUa@ep-late-water-asl94ydd-pooler.c-4.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  ssl: { rejectUnauthorized: false }
});

async function seed() {
  try {
    console.log('Clearing old lessons and courses...');
    await pool.query('DELETE FROM lessons');
    await pool.query('DELETE FROM courses');

    console.log('Creating Premium Course...');
    const courseRes = await pool.query(`
      INSERT INTO courses (title, description, price, thumbnail_url, category, instructor_name, level, duration_hours)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING id
    `, [
      'احترف تطوير الويب المتكامل (MERN Stack)',
      'دورة شاملة تأخذك من الصفر وحتى بناء تطبيقات ويب حقيقية ومتقدمة باستخدام أحدث التقنيات.',
      369,
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000',
      'تطوير الويب', 'م. خالد - SVK', 'مبتدئ إلى متقدم', 45
    ]);
    const courseId = courseRes.rows[0].id;

    console.log('Inserting Free Video Lesson...');
    await pool.query(`
      INSERT INTO lessons (course_id, title, video_url, order_index, is_free, duration_minutes, content_type)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `, [
      courseId,
      'الدرس الأول: مقدمة إلى عالم البرمجة وتطوير الويب',
      'https://www.youtube.com/embed/dQw4w9WgXcQ',
      1, true, 15, 'video'
    ]);

    console.log('Inserting Premium Text Lesson...');
    await pool.query(`
      INSERT INTO lessons (course_id, title, order_index, is_free, duration_minutes, content_type, text_content)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `, [
      courseId,
      'الدرس الثاني: المقال الشامل عن عمل خوادم الويب (نظري)',
      2, false, 20, 'text',
      `<h2>مقدمة في خوادم الويب</h2>
      <p>الخادم (Server) هو جهاز كمبيوتر متصل بالإنترنت يعمل على مدار الساعة لتقديم صفحات الويب للمستخدمين.</p>
      <h3>ما هو الـ HTTP؟</h3>
      <p>هو بروتوكول نقل النص الفائق، وهو لغة التخاطب بين المتصفح والخادم.</p>
      <ul>
        <li><strong>GET</strong>: لجلب البيانات</li>
        <li><strong>POST</strong>: لإرسال البيانات</li>
      </ul>
      <blockquote>"الفهم الجيد للأساسيات النظرية هو حجر الزاوية للمبرمج المحترف." - م. خالد</blockquote>`
    ]);

    console.log('Inserting Short Quiz...');
    await pool.query(`
      INSERT INTO lessons (course_id, title, order_index, is_free, duration_minutes, content_type, exam_data)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `, [
      courseId,
      'اختبار قصير 1: أساسيات الويب',
      3, false, 10, 'exam',
      JSON.stringify({
        title: "اختبار أساسيات الويب",
        questions: [
          {
            question: "ما هو البروتوكول المستخدم لنقل صفحات الويب؟",
            options: ["FTP", "HTTP", "SMTP", "SSH"],
            correctAnswer: 1
          },
          {
            question: "أي طريقة تستخدم لإرسال بيانات تسجيل الدخول بأمان؟",
            options: ["GET", "OPTIONS", "POST", "DELETE"],
            correctAnswer: 2
          }
        ]
      })
    ]);

    console.log('Inserting Final Course Exam...');
    await pool.query(`
      INSERT INTO lessons (course_id, title, order_index, is_free, duration_minutes, content_type, exam_data)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `, [
      courseId,
      'الامتحان النهائي الشامل للكورس',
      4, false, 60, 'exam',
      JSON.stringify({
        title: "الامتحان النهائي المتكامل",
        questions: [
          {
            question: "ما هي الميزة الأساسية في استخدام React؟",
            options: ["تعديل مباشر على DOM", "Virtual DOM", "سرعة قواعد البيانات", "دعم الذكاء الاصطناعي"],
            correctAnswer: 1
          },
          {
            question: "في لغة JavaScript، أي مما يلي يستخدم لتعريف متغير لا يمكن تغيير قيمته؟",
            options: ["var", "let", "const", "static"],
            correctAnswer: 2
          }
        ]
      })
    ]);

    console.log('Database seeded successfully!');
  } catch(e) {
    console.error('Seeding failed:', e);
  } finally {
    pool.end();
  }
}

seed();
