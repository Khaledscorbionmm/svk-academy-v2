import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const courses = await prisma.courses.findMany({
    include: { lessons: true }
  });
  
  const audit = courses.map(c => ({
    id: c.id,
    slug: c.category || 'NO_SLUG',
    lessonsCount: c.lessons.length,
    isPublished: c.is_published,
    source: 'database'
  }));
  
  console.log('--- ALL COURSES ---');
  console.table(audit);
  
  console.log('\n--- ZERO LESSONS ---');
  const zeroLessons = audit.filter(c => c.lessonsCount === 0);
  console.table(zeroLessons);
  
  console.log('\n--- DUPLICATE SLUGS ---');
  const slugs = audit.map(c => c.slug);
  const duplicates = slugs.filter((item, index) => item !== 'NO_SLUG' && slugs.indexOf(item) !== index);
  const duplicateCourses = audit.filter(c => duplicates.includes(c.slug));
  console.table(duplicateCourses);
  
  console.log('\n--- ORPHAN RECORDS (Lessons without Courses) ---');
  const lessons = await prisma.lessons.findMany();
  const courseIds = courses.map(c => c.id);
  const orphans = lessons.filter(l => !l.course_id || !courseIds.includes(l.course_id));
  console.table(orphans.map(o => ({ id: o.id, title: o.title, course_id: o.course_id })));
}

main().catch(console.error).finally(() => prisma.$disconnect());
