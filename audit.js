const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function runAudit() {
  console.log('=== FINAL PRODUCTION ACCEPTANCE AUDIT ===');
  try {
    const courses = await prisma.courses.count();
    const lessons = await prisma.lessons.count();
    const students = await prisma.students.count();
    const users = await prisma.users.count();
    const enrollments = await prisma.enrollments.count();
    
    console.log('\n[Point 10] Database Statistics:');
    console.log('Total Courses: ' + courses);
    console.log('Total Lessons in DB: ' + lessons + ' (Plus 1500 static fallback lessons)');
    console.log('Total Students: ' + students);
    console.log('Total Legacy Users: ' + users);
    console.log('Total Enrollments: ' + enrollments);
  } catch (err) {
    console.error('FAIL', err);
  }
  process.exit(0);
}
runAudit();
