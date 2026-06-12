import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const courses = await prisma.courses.findMany({
    include: {
      lessons: { select: { id: true } },
      enrollments: { select: { id: true } },
      lesson_access: { select: { id: true } }
    },
    orderBy: { created_at: 'asc' }
  });

  const detailedCourses = await Promise.all(courses.map(async c => {
    const lessonIds = c.lessons.map(l => l.id);
    let progressCount = 0;
    if (lessonIds.length > 0) {
      progressCount = await prisma.user_progress.count({
        where: { lesson_id: { in: lessonIds } }
      });
    }

    return {
      id: c.id,
      title: c.title,
      category: c.category || 'NO_SLUG',
      isPublished: c.is_published,
      lessonsCount: c.lessons.length,
      enrollmentsCount: c.enrollments.length,
      progressCount: progressCount + c.lesson_access.length,
    };
  }));

  console.log(JSON.stringify(detailedCourses, null, 2));
}

main().catch(console.error).finally(() => prisma.$disconnect());
