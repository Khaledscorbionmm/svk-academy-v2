const { Pool } = require('pg');
const bcrypt = require('bcryptjs');

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_5j1fJvIkbVUa@ep-late-water-asl94ydd-pooler.c-4.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  ssl: { rejectUnauthorized: false }
});

const studentId = 6;
const newPassword = '12345678';

async function run() {
  try {
    const hash = await bcrypt.hash(newPassword, 12);
    
    const res = await pool.query(
      "UPDATE students SET password_hash = $1 WHERE id = $2 RETURNING id, name, email, phone",
      [hash, studentId]
    );
    
    if (res.rows.length > 0) {
      console.log('Successfully updated student password!');
      console.log('Student details:', res.rows[0]);
      console.log('New temporary password is:', newPassword);
    } else {
      console.log('Student not found with ID:', studentId);
    }
  } catch(e) {
    console.error('Error:', e);
  } finally {
    pool.end();
  }
}

run();
