const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_5j1fJvIkbVUa@ep-late-water-asl94ydd-pooler.c-4.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  ssl: { rejectUnauthorized: false }
});

async function run() {
  try {
    const res = await pool.query(
      "SELECT code, expires_at, created_at FROM email_verifications WHERE email = $1 ORDER BY created_at DESC LIMIT 1",
      ['sandmand097@gmail.com']
    );
    console.log("=== LATEST OTP CODE ===");
    console.log(res.rows);
  } catch(e) {
    console.error('Error:', e);
  } finally {
    pool.end();
  }
}

run();
