const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function check() {
  const courses = await prisma.courses.findMany({ select: { id: true, title: true, is_featured: true, enrollment_count: true } });
  console.table(courses);
}

check().finally(() => prisma.$disconnect());
