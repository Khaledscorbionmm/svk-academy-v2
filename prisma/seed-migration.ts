import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
  console.log('--- Phase 1: Pre-Migration Counts ---');
  
  // 1. Count DB existing
  const dbCoursesBefore = await prisma.courses.count();
  const dbLessonsBefore = await prisma.lessons.count();
  console.log('DB Courses Before:', dbCoursesBefore);
  console.log('DB Lessons Before:', dbLessonsBefore);

  // 2. Read Local Files
  const tracksDir = path.join(process.cwd(), 'src/context/tracks');
  let fileCoursesCount = 0;
  let fileLessonsCount = 0;
  const coursesToMigrate = [];

  const files = ['pythonData.ts', 'cyberData.ts', 'languageData.ts'];
  
  for (const file of files) {
    const filePath = path.join(tracksDir, file);
    if (!fs.existsSync(filePath)) {
       console.log('File missing, skipping', file);
       continue;
    }
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    // Extract the array using simple regex or eval
    try {
        const jsonMatch = fileContent.substring(fileContent.indexOf('['));
        // Clean up the ending export
        const cleanJson = jsonMatch.replace(/;\s*export\s+default\s+\w+;\s*$/, '');
        // Evaluate the string to get the JS object array
        const lessonsArray = eval(cleanJson);
        
        fileCoursesCount++;
        fileLessonsCount += lessonsArray.length;
        
        coursesToMigrate.push({
            slug: file.replace('Data.ts', ''),
            title: file.replace('Data.ts', '').toUpperCase() + ' AI Track',
            lessons: lessonsArray
        });
    } catch(e) {
        console.log('Error parsing', file, e.message);
    }
  }

  console.log('Local File Courses:', fileCoursesCount);
  console.log('Local File Lessons:', fileLessonsCount);

  console.log('\n--- Phase 2: PostgreSQL Migration ---');
  let migratedLessonsCount = 0;
  
  for (const courseData of coursesToMigrate) {
      // Create Course
      const course = await prisma.courses.create({
          data: {
              title: courseData.title,
              category: courseData.slug,
              description: 'AI Generated 9-Component Track',
              level: 'all',
              is_published: true
          }
      });
      
      console.log('Created Course:', course.title, 'ID:', course.id);
      
      // Create Lessons
      for (let i = 0; i < courseData.lessons.length; i++) {
          const lesson = courseData.lessons[i];
          
          await prisma.lessons.create({
              data: {
                  course_id: course.id,
                  title: lesson.title || lesson.id,
                  // We map our rich JSON into the 'content' string field
                  content: JSON.stringify(lesson),
                  order_index: i,
                  is_free: true
              }
          });
          migratedLessonsCount++;
      }
  }
  
  console.log('\n--- Phase 3: Post-Migration Verification ---');
  const dbCoursesAfter = await prisma.courses.count();
  const dbLessonsAfter = await prisma.lessons.count();
  
  console.log('DB Courses After:', dbCoursesAfter);
  console.log('DB Lessons After:', dbLessonsAfter);
  
  const courseDiff = dbCoursesAfter - dbCoursesBefore;
  const lessonDiff = dbLessonsAfter - dbLessonsBefore;
  
  console.log('Courses Added:', courseDiff);
  console.log('Lessons Added:', lessonDiff);
  
  let success = true;
  if (courseDiff !== fileCoursesCount) {
      console.error('VERIFICATION FAILED: Course count mismatch!');
      success = false;
  }
  if (lessonDiff !== fileLessonsCount) {
      console.error('VERIFICATION FAILED: Lesson count mismatch!');
      success = false;
  }
  
  if (success) {
      console.log('SUCCESS: All counts perfectly match. Slugs mapped to JSON payload.');
      fs.writeFileSync('database_migration_report.md', '# Database Migration Report\n\nStatus: SUCCESS\nLessons Migrated: ' + lessonDiff + '\nCourses Migrated: ' + courseDiff);
  } else {
      fs.writeFileSync('database_migration_report.md', '# Database Migration Report\n\nStatus: FAILED\nMismatch detected. Aborting routing switch.');
  }
}

main().finally(() => prisma.$disconnect());
