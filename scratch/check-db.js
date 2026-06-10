const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_5j1fJvIkbVUa@ep-late-water-asl94ydd-pooler.c-4.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  ssl: { rejectUnauthorized: false }
});

async function run() {
  try {
    // Check lessons columns
    const res = await pool.query("SELECT column_name FROM information_schema.columns WHERE table_name = 'lessons'");
    const columns = res.rows.map(r => r.column_name);
    console.log('Current lessons columns:', columns);

    if (!columns.includes('audio_url')) {
      console.log('Adding audio_url column to lessons...');
      await pool.query('ALTER TABLE lessons ADD COLUMN audio_url VARCHAR(1000)');
      console.log('Column audio_url added!');
    } else {
      console.log('audio_url column already exists.');
    }
  } catch(e) {
    console.error('Error:', e);
  } finally {
    pool.end();
  }
}

run();
