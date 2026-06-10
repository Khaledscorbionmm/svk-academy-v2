const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_5j1fJvIkbVUa@ep-late-water-asl94ydd-pooler.c-4.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  ssl: { rejectUnauthorized: false }
});

async function run() {
  try {
    const coursesRes = await pool.query("SELECT id, title, category FROM courses ORDER BY id");
    console.log("=== COURSES ===");
    console.log(coursesRes.rows);

    const lessonsRes = await pool.query("SELECT id, course_id, title, order_index FROM lessons ORDER BY course_id, order_index");
    console.log("\n=== LESSONS (first 30) ===");
    console.log(lessonsRes.rows.slice(0, 30));

    console.log(`\nTotal lessons: ${lessonsRes.rows.length}`);
  } catch(e) {
    console.error('Error:', e);
  } finally {
    pool.end();
  }
}

run();
