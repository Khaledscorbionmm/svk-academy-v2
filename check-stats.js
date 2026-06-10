const { Pool } = require('pg');
const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_5j1fJvIkbVUa@ep-late-water-asl94ydd-pooler.c-4.eu-central-1.aws.neon.tech/neondb?sslmode=require'
});

async function run() {
  try {
    const res = await pool.query(`
      SELECT c.title, c.category, COUNT(l.id) as num_lessons, COUNT(DISTINCT l.title) as unique_titles,
      COUNT(DISTINCT l.video_url) as unique_videos
      FROM courses c 
      LEFT JOIN lessons l ON c.id=l.course_id 
      GROUP BY c.id, c.title, c.category
      ORDER BY c.category
    `);
    console.log("Course Statistics:");
    console.log(JSON.stringify(res.rows, null, 2));
  } catch (err) {
    console.error(err);
  } finally {
    await pool.end();
  }
}
run();
