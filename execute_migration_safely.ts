import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();
const BACKUP_FILE = path.join(__dirname, 'db_backup_full_snapshot.json');
const ROLLBACK_FILE = path.join(__dirname, 'rollback_migration.ts');

async function main() {
  console.log('--- 1. EXPORTING FULL BACKUP ---');
  const backup = {
    courses: await prisma.courses.findMany(),
    lessons: await prisma.lessons.findMany(),
    enrollments: await prisma.enrollments.findMany(),
    progress: await prisma.user_progress.findMany(),
    users: await prisma.users.findMany(),
    lesson_access: await prisma.lesson_access.findMany()
  };

  fs.writeFileSync(BACKUP_FILE, JSON.stringify(backup, null, 2), 'utf-8');
  
  console.log('--- 2. VERIFYING BACKUP INTEGRITY ---');
  const fileStats = fs.statSync(BACKUP_FILE);
  const sizeMb = (fileStats.size / (1024 * 1024)).toFixed(2);
  
  const parsed = JSON.parse(fs.readFileSync(BACKUP_FILE, 'utf-8'));
  console.log(`Backup Size: ${sizeMb} MB`);
  console.log(`Courses Count: ${parsed.courses.length}`);
  console.log(`Lessons Count: ${parsed.lessons.length}`);
  console.log(`Enrollments Count: ${parsed.enrollments.length}`);
  console.log(`Progress Count: ${parsed.progress.length}`);
  console.log(`Users Count: ${parsed.users.length}`);

  if (
    parsed.courses.length !== backup.courses.length ||
    parsed.lessons.length !== backup.lessons.length ||
    parsed.enrollments.length !== backup.enrollments.length
  ) {
    throw new Error('BACKUP VERIFICATION FAILED! Mismatch between DB and file.');
  }
  console.log('Backup verified successfully.');

  console.log('\n--- 3. GENERATING ROLLBACK SCRIPT ---');
  const rollbackCode = `
import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

async function rollback() {
  console.log('Reading backup file...');
  const backup = JSON.parse(fs.readFileSync(path.join(__dirname, 'db_backup_full_snapshot.json'), 'utf-8'));
  
  console.log('Deleting current records...');
  // Be careful with foreign keys; deleting courses drops lessons via cascade.
  await prisma.courses.deleteMany();
  
  console.log('Restoring courses...');
  await prisma.courses.createMany({ data: backup.courses });
  
  console.log('Restoring lessons...');
  await prisma.lessons.createMany({ data: backup.lessons });
  
  console.log('Restoring enrollments...');
  await prisma.enrollments.createMany({ data: backup.enrollments });
  
  console.log('Restoring progress...');
  await prisma.user_progress.createMany({ data: backup.progress });

  console.log('Rollback complete!');
}

rollback().catch(console.error).finally(() => prisma.$disconnect());
  `;
  fs.writeFileSync(ROLLBACK_FILE, rollbackCode.trim(), 'utf-8');
  console.log(`Rollback script generated at: ${ROLLBACK_FILE}`);

  console.log('\n--- 4. EXECUTING MIGRATION ---');
  const idsToDelete = [102, 103, 107, 108, 109];
  const deletedCourses = await prisma.courses.deleteMany({
    where: { id: { in: idsToDelete } }
  });
  console.log(`Deleted ${deletedCourses.count} duplicate/empty courses.`);

  const renames = [
    { id: 87, newSlug: 'python-basics' },
    { id: 98, newSlug: 'python-games' },
    { id: 88, newSlug: 'linux-hardening' },
    { id: 97, newSlug: 'network-security' },
    { id: 90, newSlug: 'web-development' },
    { id: 93, newSlug: 'mobile-app-development' },
    { id: 94, newSlug: 'javascript-modern' },
    { id: 91, newSlug: 'react-advanced' },
    { id: 95, newSlug: 'nextjs-ui' },
    { id: 92, newSlug: 'ai-data-science' },
    { id: 96, newSlug: 'machine-learning' }
  ];

  let renamedCount = 0;
  for (const r of renames) {
    await prisma.courses.update({
      where: { id: r.id },
      data: { category: r.newSlug }
    });
    renamedCount++;
  }
  console.log(`Renamed ${renamedCount} courses slugs successfully.`);

  console.log('\n--- 5. POST-MIGRATION VERIFICATION ---');
  const totalCourses = await prisma.courses.count();
  const totalLessons = await prisma.lessons.count();
  const totalEnrollments = await prisma.enrollments.count();
  const totalProgress = await prisma.user_progress.count();
  
  // check duplicate slugs
  const allCourses = await prisma.courses.findMany({ select: { category: true } });
  const slugs = allCourses.map(c => c.category);
  const duplicates = slugs.filter((item, index) => item !== null && slugs.indexOf(item) !== index);

  // check broken links (lessons with no course)
  const cIds = (await prisma.courses.findMany({ select: { id: true } })).map(c => c.id);
  const brokenLinks = await prisma.lessons.count({
    where: { course_id: { notIn: cIds } }
  });

  console.log(`Total Courses: ${totalCourses}`);
  console.log(`Total Lessons: ${totalLessons}`);
  console.log(`Total Enrollments: ${totalEnrollments}`);
  console.log(`Total Progress Records: ${totalProgress}`);
  console.log(`Broken Links Count: ${brokenLinks}`);
  console.log(`Duplicate Slug Count: ${duplicates.length}`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
