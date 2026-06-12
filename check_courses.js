const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function check() {
  const courses = await prisma.courses.findMany({ select: { id: true, category: true, title: true, is_published: true } });
  console.log("DB COURSES:", courses);
}

check().finally(() => prisma.$disconnect());
