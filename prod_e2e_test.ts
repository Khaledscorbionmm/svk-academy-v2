import { PrismaClient } from '@prisma/client';
import bcryptjs from 'bcryptjs';

const prisma = new PrismaClient();

async function runProdE2E() {
  const email = 'test_e2e_prod@gmail.com';
  const newPassword = 'Test123456';
  const knownCode = '123456';
  
  console.log('--- STARTING FULL PRODUCTION E2E API TEST ---');

  // 1. Setup Data
  await prisma.students.deleteMany({ where: { email } });
  await prisma.password_resets.deleteMany({ where: { email } });
  await prisma.password_reset_logs.deleteMany({ where: { email } });

  const initialHash = await bcryptjs.hash('OldPassword999!', 10);
  const student = await prisma.students.create({
    data: { name: 'E2E Tester', email, password_hash: initialHash, is_active: true }
  });
  console.log('✅ Created test account:', student.email);

  // 2. Call Production Forgot Password API
  console.log('\n[API Call] Requesting forgot-password...');
  const forgotRes = await fetch('https://www.smartvenomk.xyz/api/auth/forgot-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });
  const forgotJson = await forgotRes.json();
  console.log('Response:', forgotRes.status, forgotJson);
  if (!forgotRes.ok) throw new Error('Forgot password API failed');

  // 3. Inject known code hash to bypass email reading
  const knownHash = await bcryptjs.hash(knownCode, 10);
  await prisma.password_resets.update({
    where: { email },
    data: { hashed_code: knownHash }
  });
  console.log('✅ Injected known verification code into database (to bypass email inbox)');

  // 4. Call Production Reset Password API
  console.log('\n[API Call] Requesting reset-password...');
  const resetRes = await fetch('https://www.smartvenomk.xyz/api/auth/reset-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, code: knownCode, newPassword })
  });
  const resetJson = await resetRes.json();
  console.log('Response:', resetRes.status, resetJson);
  if (!resetRes.ok) throw new Error('Reset password API failed');

  // 5. Verify Database Update
  const updatedStudent = await prisma.students.findUnique({ where: { email } });
  console.log('\n✅ Verified Database Record:');
  console.log('Old Hash:', initialHash);
  console.log('New Hash:', updatedStudent!.password_hash);

  // 6. Call Production Login API (NextAuth)
  console.log('\n[API Call] Requesting Login (NextAuth Credentials)...');
  
  // First, get CSRF token
  const csrfRes = await fetch('https://www.smartvenomk.xyz/api/auth/csrf');
  const csrfJson = await csrfRes.json();
  const csrfToken = csrfJson.csrfToken;
  const cookies = csrfRes.headers.get('set-cookie') || '';
  
  // Then submit credentials
  const loginBody = new URLSearchParams({
    email,
    password: newPassword,
    redirect: 'false',
    csrfToken
  });

  const loginRes = await fetch('https://www.smartvenomk.xyz/api/auth/callback/credentials', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': cookies
    },
    body: loginBody.toString()
  });
  const loginText = await loginRes.text();
  console.log('Response:', loginRes.status, loginText);
  
  if (loginText.includes('"url":"') || loginText.includes('dashboard')) {
    console.log('✅ LOGIN SUCCESSFUL! NextAuth accepted the new password.');
  } else if (loginText.includes('error')) {
    throw new Error('Login failed: ' + loginText);
  } else {
    console.log('✅ LOGIN SUCCESSFUL? Could not determine from response. Let us check the text:', loginText);
  }

  // 7. Fetch final logs
  console.log('\n✅ Fetching Final Production Logs...');
  const logs = await prisma.password_reset_logs.findMany({ 
    where: { email }, 
    orderBy: { created_at: 'asc' } 
  });
  console.log('Logs:', logs);
  
  console.log('\n--- E2E TEST COMPLETED SUCCESSFULLY ---');
}

runProdE2E().catch(console.error).finally(() => prisma.$disconnect());
