import { PrismaClient } from '@prisma/client';
import bcryptjs from 'bcryptjs';

const prisma = new PrismaClient({ log: ['warn', 'error'] });

async function runAudit() {
  console.log('--- STARTING FORENSIC AUDIT ---');
  const email = 'test_e2e_forensic@gmail.com';
  
  // 1. Cleanup
  console.log('[1] Cleaning up old test data...');
  await prisma.students.deleteMany({ where: { email } });
  await prisma.password_resets.deleteMany({ where: { email } });
  await prisma.password_reset_logs.deleteMany({ where: { email } });

  // 2. Create Student
  console.log('[2] Creating test student...');
  const initialHash = await bcryptjs.hash('oldPassword123!', 10);
  const student = await prisma.students.create({
    data: {
      name: 'Test Forensic',
      email: email,
      password_hash: initialHash,
      is_active: true,
      phone: '1234567890'
    }
  });
  console.log('    Student created:', student.id, student.email);

  // 3. Simulate Forgot Password
  console.log('[3] Simulating Forgot Password (saving token)...');
  const resetCode = '123456';
  const hashedCode = await bcryptjs.hash(resetCode, 10);
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000);
  
  await prisma.password_resets.create({
    data: {
      email,
      hashed_code: hashedCode,
      expires_at: expiresAt
    }
  });
  console.log('    Reset token saved.');

  // 4. Simulate Reset Password
  console.log('[4] Simulating Reset Password Flow...');
  const newPassword = 'newPassword456!';
  
  const resetRecord = await prisma.password_resets.findUnique({ where: { email } });
  if (!resetRecord) throw new Error('Reset record not found');
  
  const isCodeValid = await bcryptjs.compare(resetCode, resetRecord.hashed_code);
  console.log('    isCodeValid:', isCodeValid);
  if (!isCodeValid) throw new Error('Code compare failed');

  const newHashedPassword = await bcryptjs.hash(newPassword, 10);
  
  await prisma.students.update({
    where: { email },
    data: { password_hash: newHashedPassword }
  });
  
  await prisma.password_resets.delete({ where: { id: resetRecord.id } });
  console.log('    Password updated in students table and token deleted.');

  // 5. Simulate Login
  console.log('[5] Simulating Login Flow...');
  const updatedStudent = await prisma.students.findUnique({ where: { email } });
  console.log('    Fetched updated student from DB.');
  
  const isLoginValid = await bcryptjs.compare(newPassword, updatedStudent!.password_hash!);
  console.log('    isLoginValid (bcrypt compare):', isLoginValid);
  
  if (isLoginValid) {
    console.log('--- AUDIT SUCCESSFUL! NO BUGS FOUND IN LOGIC ---');
  } else {
    console.log('--- AUDIT FAILED! COMPARE RETURNED FALSE ---');
  }
}

runAudit().catch(console.error).finally(() => prisma.$disconnect());
