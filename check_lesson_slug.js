require('dotenv').config({ path: '.env' });
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function run() {
  const { rows } = await pool.query('SELECT id, content FROM lessons LIMIT 1');
  console.log('ID:', rows[0].id);
  console.log('slug:', JSON.parse(rows[0].content).lesson_slug);
  process.exit(0);
}
run();
