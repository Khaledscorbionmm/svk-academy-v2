const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_5j1fJvIkbVUa@ep-late-water-asl94ydd-pooler.c-4.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  ssl: { rejectUnauthorized: false }
});

async function update() {
  try {
    await pool.query("ALTER TABLE lessons ADD COLUMN IF NOT EXISTS content_type VARCHAR(50) DEFAULT 'video'");
    await pool.query("ALTER TABLE lessons ADD COLUMN IF NOT EXISTS text_content TEXT");
    await pool.query("ALTER TABLE lessons ADD COLUMN IF NOT EXISTS exam_data JSONB");
    await pool.query("ALTER TABLE students ADD COLUMN IF NOT EXISTS age INTEGER");
    await pool.query("ALTER TABLE lessons ADD COLUMN IF NOT EXISTS code_explanation TEXT");
    await pool.query("ALTER TABLE lessons ADD COLUMN IF NOT EXISTS code_template TEXT");
    await pool.query("ALTER TABLE lessons ADD COLUMN IF NOT EXISTS practice_instructions TEXT");
    await pool.query("ALTER TABLE lessons ADD COLUMN IF NOT EXISTS practice_expected TEXT");
    await pool.query("ALTER TABLE lessons ADD COLUMN IF NOT EXISTS code_example TEXT");
    console.log('Columns added successfully');
  } catch(e) {
    console.error(e);
  } finally {
    pool.end();
  }
}
update();
