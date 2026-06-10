const { Pool } = require('pg');
const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_5j1fJvIkbVUa@ep-late-water-asl94ydd-pooler.c-4.eu-central-1.aws.neon.tech/neondb?sslmode=require'
});

async function run() {
  try {
    const res = await pool.query(`
      SELECT c.title_ar, l.title, l.content, l.video_url 
      FROM lessons l 
      JOIN courses c ON c.id=l.course_id 
      WHERE c.category='Languages' 
      LIMIT 1
    `);
    console.log("Full Language Lesson:");
    console.log(res.rows[0].content);
  } catch (err) {
    console.error(err);
  } finally {
    await pool.end();
  }
}
run();
