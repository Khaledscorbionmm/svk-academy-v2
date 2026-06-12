import fs from 'fs';
import path from 'path';

async function testGenerateAPI() {
  console.log('--- Testing Course Builder (Generate API) ---');
  try {
    const res = await fetch('http://localhost:3000/api/admin/generate-lesson', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        topic: 'Test Next.js Route',
        index: 1,
        config: { slug: 'test-course', difficulty: 'beginner' }
      })
    });
    
    if (res.ok) {
      const data = await res.json();
      console.log('✅ /api/admin/generate-lesson is active');
      console.log(`   Returned Topic: ${data.lesson.title}`);
      console.log(`   Has Practical Examples: ${Array.isArray(data.lesson.quick_practical_examples)}`);
    } else {
      console.log('❌ /api/admin/generate-lesson failed with status:', res.status);
    }
  } catch (err: any) {
    console.log('❌ Failed to connect to local server for Generate API:', err.message);
  }
}

async function testPublishAPI() {
  console.log('\n--- Testing Publishing Automation API ---');
  try {
    const mockLesson = { lesson_slug: 'verify-1', title: 'Verify', content: { context: 'test' } };
    const res = await fetch('http://localhost:3000/api/admin/publish', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        slug: 'verify-test-course',
        lessons: [mockLesson]
      })
    });
    
    if (res.ok) {
      console.log('✅ /api/admin/publish is active');
      const testFilePath = path.join(process.cwd(), 'src', 'context', 'tracks', 'verify-test-courseData.ts');
      if (fs.existsSync(testFilePath)) {
        console.log('✅ Publishing automation successfully wrote to filesystem.');
        // Clean up test file
        fs.unlinkSync(testFilePath);
      } else {
        console.log('❌ File was not written.');
      }
    } else {
      console.log('❌ /api/admin/publish failed with status:', res.status);
    }
  } catch (err: any) {
    console.log('❌ Failed to connect to local server for Publish API:', err.message);
  }
}

function verifyRandomLessons() {
  console.log('\n--- Verifying Existing Track Content (Random Sampling) ---');
  
  // Dynamic require to get current state
  const { pythonTrackData } = require('./src/context/tracks/pythonData');
  const { cyberTrackData } = require('./src/context/tracks/cyberData');
  const { languageTrackData } = require('./src/context/tracks/languageData');
  
  const tracks = [
    { name: 'Python', data: pythonTrackData },
    { name: 'Cyber Security', data: cyberTrackData },
    { name: 'Language', data: languageTrackData }
  ];
  
  for (const track of tracks) {
    console.log(`\nTrack: ${track.name}`);
    const data = track.data;
    if (!data || data.length === 0) {
      console.log('❌ Track is empty.');
      continue;
    }
    
    // Pick 2 random lessons
    for (let i = 0; i < 2; i++) {
      const idx = Math.floor(Math.random() * data.length);
      const lesson = data[idx];
      
      const hasContext = !!lesson.content?.context;
      const hasExamples = Array.isArray(lesson.quick_practical_examples) && lesson.quick_practical_examples.length > 0;
      const hasQuestions = Array.isArray(lesson.exam_data?.questions) && lesson.exam_data.questions.length > 0;
      const isPlaceholder = JSON.stringify(lesson).includes('TODO');
      
      console.log(`  Lesson [${lesson.lesson_slug}]: ${lesson.title}`);
      console.log(`    - Concept Context Exists: ${hasContext ? '✅' : '❌'}`);
      console.log(`    - Practical Examples (Correct/Wrong/Mistake): ${hasExamples ? '✅' : '❌'}`);
      console.log(`    - Quiz Exists: ${hasQuestions ? '✅' : '❌'}`);
      console.log(`    - Contains Placeholder: ${isPlaceholder ? '❌ YES' : '✅ NO'}`);
    }
  }
}

async function runAll() {
  await testGenerateAPI();
  await testPublishAPI();
  verifyRandomLessons();
}

runAll();
