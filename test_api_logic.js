const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function check() {
  const id = "89";
  let course = await prisma.courses.findUnique({ where: { id: Number(id) } });
  console.log("Course Found:", course?.id);
  
  if (course) {
    const dbLessons = await prisma.lessons.findMany({
        where: { course_id: course.id },
        orderBy: { order_index: 'asc' },
        select: { id: true, title: true, order_index: true, is_free: true, duration_minutes: true, audio_url: true, video_url: true, lesson_slug: true }
    });
    console.log("dbLessons length:", dbLessons.length);
    if (dbLessons.length > 0) {
      console.log("First dbLesson:", dbLessons[0]);
    }
    const lessons = dbLessons.map(l => ({ ...l, id: l.lesson_slug }));
    console.log("lessons.length mapped:", lessons.length);
    console.log("fallback triggered?", (!course || lessons.length === 0));
  }
}

check().finally(() => prisma.$disconnect());
