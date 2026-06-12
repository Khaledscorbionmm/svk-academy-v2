import { PrismaClient } from '@prisma/client';
import bcryptjs from 'bcryptjs';

const prisma = new PrismaClient();

async function runRealAccountTest() {
  const email = 'khaledelmasry9700@gmail.com';
  console.log(`--- INVESTIGATING REAL ACCOUNT: ${email} ---`);

  const lowerEmail = email.toLowerCase().trim();

  // 1. Check Admins
  console.log('\n[1] Checking Admins Table...');
  const admin = await prisma.admins.findUnique({
    where: { email: lowerEmail },
  });
  if (admin) {
    console.log(`  Found in admins: ID=${admin.id}, Role=${admin.role}`);
  } else {
    console.log(`  Not found in admins table.`);
  }

  // 2. Check Students
  console.log('\n[2] Checking Students Table...');
  const student = await prisma.students.findUnique({
    where: { email: lowerEmail },
  });
  if (student) {
    console.log(`  Found in students: ID=${student.id}`);
    console.log(`  Is Active: ${student.is_active}`);
    console.log(`  Password Hash length: ${student.password_hash?.length}`);
    console.log(`  Password Hash start: ${student.password_hash?.substring(0, 10)}...`);

    if (!student.is_active) {
      console.log('  FAILURE REASON: Account is BANNED (is_active is false)');
    }
  } else {
    console.log(`  Not found in students table.`);
  }

  if (!admin && !student) {
    console.log('\n  FAILURE REASON: User not found in either table.');
  }
}

runRealAccountTest().catch(console.error).finally(() => prisma.$disconnect());
