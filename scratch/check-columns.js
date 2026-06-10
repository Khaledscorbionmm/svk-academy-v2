const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_5j1fJvIkbVUa@ep-late-water-asl94ydd-pooler.c-4.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  ssl: { rejectUnauthorized: false }
});

async function run() {
  try {
    const res = await pool.query("SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'lessons'");
    console.log("=== LESSONS COLUMNS ===");
    console.log(res.rows);

    const oneRes = await pool.query("SELECT * FROM lessons LIMIT 1");
    console.log("\n=== EXAMPLE ROW ===");
    console.log(oneRes.rows[0]);
  } catch(e) {
    console.error('Error:', e);
  } finally {
    pool.end();
  }
}

run();
