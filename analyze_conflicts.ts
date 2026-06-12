import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const courses = await prisma.courses.findMany({
    include: {
      lessons: { select: { id: true } },
      enrollments: { select: { id: true } }
    },
    orderBy: { created_at: 'asc' }
  });

  const detailedCourses = courses.map(c => ({
    id: c.id,
    title: c.title,
    category: c.category || 'NO_SLUG',
    isPublished: c.is_published,
    lessonsCount: c.lessons.length,
    enrollmentsCount: c.enrollments.length,
    createdAt: c.created_at
  }));

  console.log(JSON.stringify(detailedCourses, null, 2));
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
