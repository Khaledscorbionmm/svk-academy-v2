const { Pool } = require('pg');
const bcrypt = require('bcryptjs');

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_V5fPWLc1lxRD@ep-gentle-block-a2b6i99b-pooler.eu-central-1.aws.neon.tech/svk-academy?sslmode=require',
  ssl: { rejectUnauthorized: false }
});

async function init() {
  const client = await pool.connect();
  try {
    console.log('Connected to Neon DB!');

    await client.query('CREATE TABLE IF NOT EXISTS admins (id SERIAL PRIMARY KEY, email VARCHAR(255) UNIQUE NOT NULL, password_hash VARCHAR(255) NOT NULL, name VARCHAR(255) DEFAULT \'Admin\', role VARCHAR(50) DEFAULT \'admin\', created_at TIMESTAMPTZ DEFAULT NOW(), last_login TIMESTAMPTZ)');
    console.log('admins table OK');

    await client.query('CREATE TABLE IF NOT EXISTS courses (id SERIAL PRIMARY KEY, title VARCHAR(500) NOT NULL, title_ar VARCHAR(500), description TEXT, thumbnail_url VARCHAR(1000), price DECIMAL(10,2) DEFAULT 0, currency VARCHAR(10) DEFAULT \'EGP\', instructor_name VARCHAR(255), category VARCHAR(100), level VARCHAR(50) DEFAULT \'beginner\', duration_hours INTEGER DEFAULT 0, is_published BOOLEAN DEFAULT false, is_featured BOOLEAN DEFAULT false, enrollment_count INTEGER DEFAULT 0, rating DECIMAL(3,2) DEFAULT 0, created_at TIMESTAMPTZ DEFAULT NOW())');
    console.log('courses table OK');

    await client.query('CREATE TABLE IF NOT EXISTS students (id SERIAL PRIMARY KEY, email VARCHAR(255) UNIQUE NOT NULL, name VARCHAR(255) NOT NULL, phone VARCHAR(50), country VARCHAR(100) DEFAULT \'Egypt\', is_active BOOLEAN DEFAULT true, created_at TIMESTAMPTZ DEFAULT NOW())');
    console.log('students table OK');

    const hash = await bcrypt.hash('Admin@SVK2025!', 12);
    await client.query('INSERT INTO admins (email, password_hash, name, role) VALUES ($1,$2,$3,$4) ON CONFLICT (email) DO NOTHING', ['admin@smartvenom.com', hash, 'مشرف النظام', 'admin']);
    console.log('Admin seeded!');

    const coursesData = [
      ['Python للمبتدئين - من الصفر للاحتراف', 'خالد أحمد', 'البرمجة', 299, 40],
      ['JavaScript الحديث - ES6 وما بعده', 'محمد علي', 'تطوير الويب', 249, 30],
      ['React.js - بناء تطبيقات احترافية', 'أحمد كمال', 'تطوير الويب', 399, 50],
      ['تصميم قواعد البيانات SQL', 'عمر حسن', 'قواعد البيانات', 199, 25],
      ['خوارزميات وهياكل البيانات', 'يوسف إبراهيم', 'علوم الحاسب', 349, 60],
      ['الذكاء الاصطناعي - مقدمة عملية', 'سارة منصور', 'الذكاء الاصطناعي', 449, 45],
    ];

    for (const [title, instructor, category, price, hours] of coursesData) {
      await client.query('INSERT INTO courses (title, instructor_name, category, price, duration_hours, is_published, is_featured) VALUES ($1,$2,$3,$4,$5,true,true) ON CONFLICT DO NOTHING', [title, instructor, category, price, hours]);
    }
    console.log('6 sample courses seeded!');

    const adminCheck = await client.query('SELECT email, name, role FROM admins');
    const courseCount = await client.query('SELECT COUNT(*) as cnt FROM courses');
    console.log('Admins:', JSON.stringify(adminCheck.rows));
    console.log('Total courses:', courseCount.rows[0].cnt);
    console.log('DATABASE INITIALIZED SUCCESSFULLY!');

  } finally {
    client.release();
    await pool.end();
  }
}

init().catch(e => { console.error('INIT ERROR:', e.message); process.exit(1); });
