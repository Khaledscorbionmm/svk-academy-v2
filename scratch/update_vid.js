const {Pool}=require('pg'); 
const pool=new Pool({connectionString: 'postgresql://neondb_owner:npg_5j1fJvIkbVUa@ep-late-water-asl94ydd-pooler.c-4.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'}); 
async function run(){ 
  await pool.query("UPDATE lessons SET video_url = 'https://www.youtube.com/embed/1B1K5xV9Gk8' WHERE course_id IN (SELECT id FROM courses WHERE category = 'Languages')"); 
  console.log('Updated video URLs for languages!'); 
  pool.end(); 
} 
run();
