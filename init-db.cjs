const { Pool } = require('pg');

const DB = "postgresql://neondb_owner:npg_5j1fJvIkbVUa@ep-late-water-asl94ydd-pooler.c-4.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";
const pool = new Pool({ connectionString: DB, ssl: { rejectUnauthorized: false } });

async function run() {
  const client = await pool.connect();
  try {
    // Check existing tables
    const tables = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema='public' ORDER BY table_name");
    console.log('Tables:', tables.rows.map(r => r.table_name).join(', '));
    
    // Check courses columns
    const cols = await client.query("SELECT column_name FROM information_schema.columns WHERE table_name='courses' ORDER BY ordinal_position");
    console.log('Courses columns:', cols.rows.map(r => r.column_name).join(', '));
    
    // Drop and recreate courses with correct schema
    console.log('\nDropping old tables...');
    await client.query('DROP TABLE IF EXISTS enrollments CASCADE');
    await client.query('DROP TABLE IF EXISTS lessons CASCADE');
    await client.query('DROP TABLE IF EXISTS courses CASCADE');
    console.log('Dropped!');
    
    // Create fresh courses table
    await client.query(`CREATE TABLE courses (
      id SERIAL PRIMARY KEY,
      title VARCHAR(500) NOT NULL,
      description TEXT,
      instructor_name VARCHAR(255),
      category VARCHAR(100),
      level VARCHAR(50) DEFAULT 'beginner',
      price DECIMAL(10,2) DEFAULT 0,
      currency VARCHAR(10) DEFAULT 'EGP',
      duration_hours INTEGER DEFAULT 0,
      thumbnail_url VARCHAR(1000),
      is_published BOOLEAN DEFAULT false,
      is_featured BOOLEAN DEFAULT false,
      enrollment_count INTEGER DEFAULT 0,
      rating DECIMAL(3,2) DEFAULT 0,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    )`);
    
    await client.query(`CREATE TABLE enrollments (
      id SERIAL PRIMARY KEY,
      student_id INTEGER,
      course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
      enrolled_at TIMESTAMPTZ DEFAULT NOW(),
      progress_percent INTEGER DEFAULT 0,
      completed_at TIMESTAMPTZ
    )`);
    
    await client.query(`CREATE TABLE lessons (
      id SERIAL PRIMARY KEY,
      course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
      title VARCHAR(500) NOT NULL,
      content TEXT,
      video_url VARCHAR(1000),
      duration_minutes INTEGER DEFAULT 0,
      order_index INTEGER DEFAULT 0,
      is_free BOOLEAN DEFAULT false,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )`);
    console.log('Tables recreated!');
    
    // Seed courses
    const courses = [
      ['Python للمبتدئين - من الصفر للاحتراف', 'تعلم Python من الصفر مع شرح عميق للمفاهيم الأساسية', 'خالد أحمد', 'البرمجة', 299, 40, 'beginner', 4.9, 487],
      ['JavaScript الحديث - ES6 وما بعده', 'أتقن JavaScript الحديثة مع مشاريع عملية', 'محمد علي', 'تطوير الويب', 249, 30, 'beginner', 4.8, 612],
      ['React.js - بناء تطبيقات احترافية', 'بناء تطبيقات React من الصفر للإنتاج', 'أحمد كمال', 'تطوير الويب', 399, 50, 'intermediate', 4.9, 341],
      ['Node.js + Express - Backend كامل', 'بناء APIs احترافية مع Node.js و Express', 'عمر حسن', 'تطوير الويب', 349, 45, 'intermediate', 4.7, 298],
      ['تصميم قواعد البيانات SQL', 'SQL من الأساسيات للاستعلامات المتقدمة', 'يوسف إبراهيم', 'قواعد البيانات', 199, 25, 'beginner', 4.8, 523],
      ['خوارزميات وهياكل البيانات', 'Big-O, Sorting, Trees, Graphs بالعربي الكامل', 'سارة منصور', 'علوم الحاسب', 449, 60, 'advanced', 5.0, 189],
      ['الذكاء الاصطناعي - مقدمة عملية', 'Machine Learning و AI للمبتدئين خطوة بخطوة', 'كريم وليد', 'الذكاء الاصطناعي', 499, 55, 'intermediate', 4.9, 276],
      ['Git و GitHub - للمحترفين', 'كل ما تحتاجه عن Version Control من الصفر', 'منى سعيد', 'أدوات التطوير', 149, 15, 'beginner', 4.7, 834],
      ['Docker و DevOps الأساسيات', 'تعلم Docker, CI/CD من الصفر للاحتراف', 'طارق محمود', 'DevOps', 379, 35, 'intermediate', 4.8, 203],
      ['Cybersecurity للمبتدئين', 'أمن المعلومات والاختراق الأخلاقي الأساسيات', 'دينا فارس', 'الأمن السيبراني', 399, 40, 'beginner', 4.6, 321],
    ];
    
    for (const [title, desc, instructor, category, price, hours, level, rating, enrollments] of courses) {
      await client.query(
        'INSERT INTO courses (title, description, instructor_name, category, price, duration_hours, level, is_published, is_featured, rating, enrollment_count) VALUES ($1,$2,$3,$4,$5,$6,$7,true,true,$8,$9)',
        [title, desc, instructor, category, price, hours, level, rating, enrollments]
      );
    }
    console.log('10 courses seeded!');
    
    const final = await client.query('SELECT (SELECT COUNT(*) FROM admins) as admins, (SELECT COUNT(*) FROM courses) as courses');
    console.log('Final stats:', JSON.stringify(final.rows[0]));
    console.log('DATABASE FULLY READY!');
    
  } finally {
    client.release();
    await pool.end();
  }
}

run().catch(e => { console.error('ERROR:', e.message); process.exit(1); });
