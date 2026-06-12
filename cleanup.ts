import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function run() {
  await prisma.lessons.deleteMany({ where: { courses: { title: { endsWith: 'AI Track' } } } });
  await prisma.courses.deleteMany({ where: { title: { endsWith: 'AI Track' } } });
  console.log('Cleaned up AI tracks.');
}
run().finally(() => prisma.$disconnect());
