const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_5j1fJvIkbVUa@ep-late-water-asl94ydd-pooler.c-4.eu-central-1.aws.neon.tech/neondb?sslmode=require',
  ssl: { rejectUnauthorized: false }
});

const easyCourses = [
  {
    title: 'Python for Beginners - Master the Basics',
    title_ar: 'أساسيات بايثون للمبتدئين',
    description: 'Learn Python from scratch. No prior programming experience required.',
    description_ar: 'تعلم لغة بايثون من الصفر. لا يشترط وجود أي خبرة مسبقة في البرمجة.',
    price: 0.00,
    category: 'Programming',
    level: 'beginner',
    lessons: [
      { title: 'مقدمة عن بايثون (ما هي؟ ولماذا بايثون؟)', order_index: 1, is_free: true, content_type: 'video', audio_url: '', video_url: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
      { title: 'طباعة النصوص (دالة Print)', order_index: 2, is_free: true, content_type: 'video', audio_url: '', video_url: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
      { title: 'المتغيرات وأنواع البيانات (Variables)', order_index: 3, is_free: false, content_type: 'video', audio_url: '', video_url: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
      { title: 'العمليات الحسابية الأساسية', order_index: 4, is_free: false, content_type: 'video', audio_url: '', video_url: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
      { title: 'الشروط والجمل الشرطية (If/Else)', order_index: 5, is_free: false, content_type: 'video', audio_url: '', video_url: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
    ]
  },
  {
    title: 'Web Design Basics (HTML & CSS)',
    title_ar: 'أساسيات تصميم الويب (HTML & CSS)',
    description: 'Build your first website using HTML and CSS.',
    description_ar: 'تعلم كيف تبني موقعك الأول من الصفر باستخدام HTML و CSS بأسهل طريقة.',
    price: 150.00,
    category: 'Web Development',
    level: 'beginner',
    lessons: [
      { title: 'مقدمة في عالم الويب (كيف تعمل المواقع؟)', order_index: 1, is_free: true, content_type: 'video', audio_url: '', video_url: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
      { title: 'أساسيات HTML (العناوين والفقرات)', order_index: 2, is_free: true, content_type: 'video', audio_url: '', video_url: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
      { title: 'إضافة الصور والروابط للموقع', order_index: 3, is_free: false, content_type: 'video', audio_url: '', video_url: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
      { title: 'مقدمة في CSS وتنسيق الألوان', order_index: 4, is_free: false, content_type: 'video', audio_url: '', video_url: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
    ]
  },
  {
    title: 'JavaScript for Kids & Beginners',
    title_ar: 'جافا سكريبت للجميع (ببساطة شديدة)',
    description: 'Learn the fundamentals of JavaScript in a fun way.',
    description_ar: 'مقدمة بسيطة وممتعة في لغة جافا سكريبت لتجعل مواقعك تفاعلية.',
    price: 250.00,
    category: 'Web Development',
    level: 'beginner',
    lessons: [
      { title: 'ما هي جافا سكريبت؟ (سحر المواقع)', order_index: 1, is_free: true, content_type: 'video', audio_url: '', video_url: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
      { title: 'طريقة كتابة أول كود لك (Console.log)', order_index: 2, is_free: false, content_type: 'video', audio_url: '', video_url: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
      { title: 'المتغيرات (let و const)', order_index: 3, is_free: false, content_type: 'video', audio_url: '', video_url: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
    ]
  },
  {
    title: 'Cybersecurity 101',
    title_ar: 'مبادئ الأمن السيبراني (كيف تحمي نفسك)',
    description: 'Basic cybersecurity concepts everyone should know.',
    description_ar: 'مفاهيم أساسية في الأمن السيبراني يجب على الجميع معرفتها لحماية بياناتهم.',
    price: 0.00,
    category: 'Security',
    level: 'beginner',
    lessons: [
      { title: 'أهمية الأمن السيبراني ولماذا نحتاجه؟', order_index: 1, is_free: true, content_type: 'video', audio_url: '', video_url: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
      { title: 'كيف تبتكر كلمة مرور لا يمكن اختراقها', order_index: 2, is_free: true, content_type: 'video', audio_url: '', video_url: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
      { title: 'احذر من رسائل التصيّد (Phishing)', order_index: 3, is_free: false, content_type: 'video', audio_url: '', video_url: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
    ]
  }
];

async function seed() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    for (const course of easyCourses) {
      console.log(`Inserting course: ${course.title_ar}...`);
      
      const courseResult = await client.query(`
        INSERT INTO courses (title, title_ar, description, description_ar, price, category, level, is_published)
        VALUES ($1, $2, $3, $4, $5, $6, $7, true)
        RETURNING id
      `, [course.title, course.title_ar, course.description, course.description_ar, course.price, course.category, course.level]);
      
      const courseId = courseResult.rows[0].id;
      
      for (const lesson of course.lessons) {
        // Add minimal markdown content for testing
        const content = '# ' + lesson.title + '\n\nهذا الدرس هو مثال تجريبي لتعلم الأساسيات بطريقة مبسطة جداً.';
        
        await client.query(`
          INSERT INTO lessons (course_id, title, order_index, is_free, content_type, audio_url, video_url, content)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        `, [courseId, lesson.title, lesson.order_index, lesson.is_free, lesson.content_type, lesson.audio_url, lesson.video_url, content]);
      }
    }

    await client.query('COMMIT');
    console.log('Successfully seeded easy courses!');
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Error seeding data:', err);
  } finally {
    client.release();
    pool.end();
  }
}

seed();
