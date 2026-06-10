const { Pool } = require('pg');
const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_5j1fJvIkbVUa@ep-late-water-asl94ydd-pooler.c-4.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  ssl: { rejectUnauthorized: false }
});

async function check() {
  try {
    const courses = await pool.query("SELECT id, title, title_ar, enrollment_count FROM courses");
    console.log("=== COURSES ===");
    console.log(courses.rows);

    const students = await pool.query("SELECT id, name, email FROM students");
    console.log("=== STUDENTS ===");
    console.log(students.rows);

    const enrollments = await pool.query("SELECT * FROM enrollments");
    console.log("=== ENROLLMENTS ===");
    console.log(enrollments.rows);
  } catch(e) {
    console.error(e);
  } finally {
    pool.end();
  }
}
check();
