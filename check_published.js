require('dotenv').config({ path: '.env' });
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function run() {
  const { rows } = await pool.query('SELECT title, is_published, (SELECT COUNT(*) FROM lessons WHERE course_id = courses.id) as lesson_count FROM courses ORDER BY title');
  console.table(rows);
  process.exit(0);
}
run();
