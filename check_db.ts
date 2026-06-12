import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function check() {
  const student = await prisma.students.findUnique({ where: { email: 'khaledelmasry9700@gmail.com' } });
  console.log(student);
}

check().catch(console.error).finally(() => prisma.$disconnect());
