require('dotenv').config({ path: '.env' });
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function run() {
  const { rows } = await pool.query("SELECT id, title, content FROM lessons WHERE content LIKE '%10%' AND course_id = (SELECT id FROM courses WHERE category = 'python' LIMIT 1)");
  
  for (let r of rows) {
    try {
      const c = JSON.parse(r.content);
      if (c.exam_data && JSON.stringify(c.exam_data).includes('10')) {
        console.log('ID:', r.id, 'Title:', r.title);
        console.log(JSON.stringify(c.exam_data, null, 2));
      }
    } catch(e){}
  }
  process.exit(0);
}
run();
