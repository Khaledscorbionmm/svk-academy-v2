const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_5j1fJvIkbVUa@ep-late-water-asl94ydd-pooler.c-4.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  ssl: { rejectUnauthorized: false }
});

async function run() {
  try {
    const res = await pool.query("SELECT id, name, email, phone, created_at FROM students ORDER BY id DESC LIMIT 20");
    console.log('Registered Students:');
    console.table(res.rows);
  } catch(e) {
    console.error('Error:', e);
  } finally {
    pool.end();
  }
}

run();
