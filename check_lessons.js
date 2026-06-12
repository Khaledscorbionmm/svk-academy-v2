const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function check() {
  const lessons = await prisma.lessons.count();
  console.log("Total Lessons in DB:", lessons);

  const coursesWithLessons = await prisma.courses.findMany({
    select: {
      id: true,
      _count: {
        select: { lessons: true }
      }
    }
  });
  console.log("Lessons per course:");
  console.table(coursesWithLessons);
}

check().finally(() => prisma.$disconnect());
