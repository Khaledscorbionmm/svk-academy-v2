import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';

const prisma = new PrismaClient();

function getLessonHash(lesson: any) {
  // Exclude id, course_id, and created_at because they will obviously differ
  const { id, course_id, created_at, ...compareFields } = lesson;
  const str = JSON.stringify(compareFields);
  return crypto.createHash('sha256').update(str).digest('hex');
}

async function comparePair(idA: number, idB: number) {
  const lessonsA = await prisma.lessons.findMany({
    where: { course_id: idA },
    orderBy: [{ order_index: 'asc' }, { title: 'asc' }]
  });

  const lessonsB = await prisma.lessons.findMany({
    where: { course_id: idB },
    orderBy: [{ order_index: 'asc' }, { title: 'asc' }]
  });

  console.log(`\n--- Comparing Course ${idA} vs ${idB} ---`);
  console.log(`Lesson Count: Course ${idA} has ${lessonsA.length}, Course ${idB} has ${lessonsB.length}`);

  let exactMatches = 0;
  const maxLen = Math.max(lessonsA.length, lessonsB.length);
  let titleMismatches = 0;

  for (let i = 0; i < maxLen; i++) {
    const a = lessonsA[i];
    const b = lessonsB[i];

    if (!a || !b) {
      continue;
    }

    if (a.title !== b.title) {
      titleMismatches++;
    }

    const hashA = getLessonHash(a);
    const hashB = getLessonHash(b);

    if (hashA === hashB) {
      exactMatches++;
    }
  }

  const percentage = maxLen === 0 ? 100 : (exactMatches / maxLen) * 100;

  console.log(`Titles Matched: ${maxLen - titleMismatches} / ${maxLen}`);
  console.log(`Content Hashes Matched: ${exactMatches} / ${maxLen}`);
  console.log(`Duplicate Percentage: ${percentage.toFixed(2)}%`);
  
  if (percentage < 100) {
    console.log(`[WARNING] Courses ${idA} and ${idB} are NOT exact 100% duplicates!`);
  } else {
    console.log(`[SUCCESS] Courses ${idA} and ${idB} are EXACT 100% duplicates.`);
  }
}

async function main() {
  await comparePair(104, 107);
  await comparePair(105, 108);
  await comparePair(106, 109);
}

main().catch(console.error).finally(() => prisma.$disconnect());
