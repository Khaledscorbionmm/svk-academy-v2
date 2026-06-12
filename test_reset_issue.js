const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

async function test() {
  const prisma = new PrismaClient();
  const testEmail = 'real_user_test_' + Date.now() + '@example.com';
  
  // 1. Create a student as if they just registered
  const hashed = await bcrypt.hash('oldPassword123', 10);
  await prisma.students.create({
    data: {
      name: 'Test Real User',
      email: testEmail,
      password_hash: hashed,
    }
  });
  
  // 2. Perform a password reset as the API would
  const newHashed = await bcrypt.hash('NewPass123!@#', 10);
  
  // Simulate the reset-password API logic
  const studentResult = await prisma.students.updateMany({
    where: { email: testEmail },
    data: { password_hash: newHashed }
  });
  console.log('Update result:', studentResult);
  
  // 3. Simulate the login API logic
  const { Pool } = require('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const result = await pool.query('SELECT * FROM students WHERE email = $1', [testEmail]);
  
  if (result.rows.length === 0) {
    console.log('User not found during login!');
    return;
  }
  
  const student = result.rows[0];
  const isValid = await bcrypt.compare('NewPass123!@#', student.password_hash);
  console.log('Is valid?', isValid);
  
  await pool.end();
  await prisma.$disconnect();
}
test();
