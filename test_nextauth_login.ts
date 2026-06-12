import { PrismaClient } from '@prisma/client';
import bcryptjs from 'bcryptjs';

const prisma = new PrismaClient();

async function checkLogin() {
  const email = 'khaledelmasry9700@gmail.com';
  // What if the user used a specific password? We don't know it.
  // But we can check if the DB record is perfectly structured for bcrypt.
  
  const student = await prisma.students.findUnique({ where: { email } });
  if (!student) {
      console.log('Student not found');
      return;
  }
  
  console.log('Student found:', student.email);
  console.log('Password hash:', student.password_hash);
  
  if (!student.password_hash) {
      console.log('No password hash! Login will fail.');
      return;
  }
  
  // Can bcrypt parse this hash?
  try {
      const isValid = await bcryptjs.compare('WrongPassword123!', student.password_hash);
      console.log('Bcrypt parse successful. Hash is valid format. Result:', isValid);
  } catch (e) {
      console.error('Bcrypt failed to parse hash!', e);
  }
}

checkLogin().catch(console.error).finally(() => prisma.$disconnect());
