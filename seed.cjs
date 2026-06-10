const { Pool } = require('pg');
const bcrypt = require('bcryptjs');

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_5j1fJvIkbVUa@ep-late-water-asl94ydd-pooler.c-4.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  ssl: { rejectUnauthorized: false }
});

async function seed() {
  try {
    const hash = await bcrypt.hash('Password123', 12);
    let res = await pool.query('SELECT id FROM students WHERE email = $1', ['student@test.com']);
    let studentId;
    if (res.rows.length > 0) {
      studentId = res.rows[0].id;
      await pool.query('UPDATE students SET password_hash = $1, xp = 50 WHERE id = $2', [hash, studentId]);
    } else {
      res = await pool.query('INSERT INTO students (name, email, password_hash, xp) VALUES ($1, $2, $3, $4) RETURNING id', ['طالب تجريبي', 'student@test.com', hash, 50]);
      studentId = res.rows[0].id;
    }
    
    let reqRes = await pool.query('SELECT id FROM lesson_access WHERE student_id = $1 AND lesson_slug = $2', [studentId, 'python-vars']);
    if (reqRes.rows.length === 0) {
      await pool.query('INSERT INTO lesson_access (student_id, course_id, lesson_slug, status) VALUES ($1, 1, $2, $3)', [studentId, 'python-vars', 'requested']);
    }
    console.log('Test student created successfully. ID: ' + studentId);
  } catch(e) {
    console.error(e);
  } finally {
    pool.end();
  }
}

seed();
