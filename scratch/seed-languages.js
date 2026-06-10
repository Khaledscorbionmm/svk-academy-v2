const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_5j1fJvIkbVUa@ep-late-water-asl94ydd-pooler.c-4.eu-central-1.aws.neon.tech/neondb?sslmode=require',
  ssl: { rejectUnauthorized: false }
});

const languageCourses = [
  {
    title: 'English Fluency Masterclass',
    title_ar: 'تحدث الإنجليزية بطلاقة',
    description: 'Master English pronunciation, grammar, and daily conversations.',
    description_ar: 'كورس شامل لتعلم اللغة الإنجليزية من الصفر حتى الاحتراف، مع التركيز على المحادثة اليومية والنطق الصحيح.',
    price: 350.00,
    category: 'Languages',
    level: 'all_levels',
    lessons: [
      { title: 'أساسيات النطق السليم (Phonics)', order_index: 1, is_free: true, content_type: 'video', audio_url: '', video_url: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
      { title: 'كيف تقدم نفسك باللغة الإنجليزية', order_index: 2, is_free: true, content_type: 'video', audio_url: '', video_url: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
      { title: 'أهم 100 كلمة إنجليزية في الحياة اليومية', order_index: 3, is_free: false, content_type: 'video', audio_url: '', video_url: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
      { title: 'قواعد الزمن الحاضر البسيط (Present Simple)', order_index: 4, is_free: false, content_type: 'video', audio_url: '', video_url: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
    ]
  },
  {
    title: 'French for Beginners (Parlez Français)',
    title_ar: 'تعلم اللغة الفرنسية من الصفر',
    description: 'Start your journey with the French language. Bonjour!',
    description_ar: 'ابدأ رحلتك في تعلم اللغة الفرنسية، لغة الفن والجمال. سنتعلم الأساسيات خطوة بخطوة.',
    price: 200.00,
    category: 'Languages',
    level: 'beginner',
    lessons: [
      { title: 'مرحباً! (Bonjour) - التحيات الأساسية', order_index: 1, is_free: true, content_type: 'video', audio_url: '', video_url: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
      { title: 'نطق الحروف الفرنسية والأصوات الأنفية', order_index: 2, is_free: true, content_type: 'video', audio_url: '', video_url: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
      { title: 'الأرقام باللغة الفرنسية', order_index: 3, is_free: false, content_type: 'video', audio_url: '', video_url: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
    ]
  },
  {
    title: 'German Made Easy (Deutsch Lernen)',
    title_ar: 'اللغة الألمانية ببساطة',
    description: 'Learn German step by step. Great for work and study in Germany.',
    description_ar: 'كورس مخصص لتبسيط قواعد اللغة الألمانية المعقدة، مثالي لمن يخطط للدراسة أو العمل في ألمانيا.',
    price: 400.00,
    category: 'Languages',
    level: 'beginner',
    lessons: [
      { title: 'التحيات الألمانية (Guten Tag)', order_index: 1, is_free: true, content_type: 'video', audio_url: '', video_url: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
      { title: 'قواعد النطق في اللغة الألمانية', order_index: 2, is_free: true, content_type: 'video', audio_url: '', video_url: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
      { title: 'كيف تركب جملة بسيطة باللغة الألمانية', order_index: 3, is_free: false, content_type: 'video', audio_url: '', video_url: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
    ]
  }
];

async function seed() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    for (const course of languageCourses) {
      console.log(`Inserting language course: ${course.title_ar}...`);
      
      const courseResult = await client.query(`
        INSERT INTO courses (title, title_ar, description, description_ar, price, category, level, is_published)
        VALUES ($1, $2, $3, $4, $5, $6, $7, true)
        RETURNING id
      `, [course.title, course.title_ar, course.description, course.description_ar, course.price, course.category, course.level]);
      
      const courseId = courseResult.rows[0].id;
      
      for (const lesson of course.lessons) {
        const content = '# ' + lesson.title + '\n\nمرحباً بك في هذا الدرس الرائع لتعلم اللغات!';
        
        await client.query(`
          INSERT INTO lessons (course_id, title, order_index, is_free, content_type, audio_url, video_url, content)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        `, [courseId, lesson.title, lesson.order_index, lesson.is_free, lesson.content_type, lesson.audio_url, lesson.video_url, content]);
      }
    }

    await client.query('COMMIT');
    console.log('Successfully seeded language courses!');
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Error seeding data:', err);
  } finally {
    client.release();
    pool.end();
  }
}

seed();
