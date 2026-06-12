require('dotenv').config({ path: '.env' });
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function run() {
  const result = await pool.query('UPDATE courses SET is_published = true WHERE is_published = false');
  console.log('Published ' + result.rowCount + ' courses.');
  process.exit(0);
}
run();
