import fs from 'fs';
import { pythonTrackData } from './src/context/tracks/pythonData';
import { cyberTrackData } from './src/context/tracks/cyberData';
import { languageTrackData } from './src/context/tracks/languageData';

const tracks = [
  { name: 'Python', data: pythonTrackData },
  { name: 'Cyber Security', data: cyberTrackData },
  { name: 'Language', data: languageTrackData }
];

const placeholderKeywords = [
  "شرح تفصيلي للدرس",
  "مثال تطبيقي للدرس",
  "شرح الخطأ الشائع",
  "مثال خاطئ",
  "محتوى مؤقت",
  "\\[محتوى",
  "TODO",
  "تفاصيل إضافية",
  "مثال عملي",
  "اكتب شرحاً",
  "اكتب الكود"
];

const auditResults = [];

for (const track of tracks) {
  const data = track.data || [];
  const totalLessons = data.length;
  
  let placeholders = 0;
  let duplicates = 0;
  let missing = 0;
  
  const seenContexts = new Set();
  
  for (const lesson of data) {
    let isPlaceholder = false;
    const contextStr = (lesson.content?.context || '').trim();
    
    const textToCheck = JSON.stringify(lesson);
    for (const kw of placeholderKeywords) {
      if (textToCheck.includes(kw)) {
        isPlaceholder = true;
        break;
      }
    }
    
    if (contextStr.length < 20) {
      isPlaceholder = true;
    }

    if (isPlaceholder) {
      placeholders++;
    } else {
      if (seenContexts.has(contextStr)) {
        duplicates++;
      } else {
        seenContexts.add(contextStr);
      }
    }
  }
  
  const generated = totalLessons - placeholders;
  let qualityScore = 0;
  if (totalLessons > 0) {
    qualityScore = Math.max(0, ((totalLessons - placeholders - duplicates) / totalLessons) * 100);
  }
  
  const readiness = qualityScore >= 95 ? '✅ Ready' : qualityScore >= 70 ? '⚠️ Review Needed' : '❌ Not Ready';

  auditResults.push({
    "Course": track.name,
    "Total Lessons": totalLessons,
    "Generated Content": generated,
    "Missing": 0, // Assuming static structure length for now
    "Duplicates": duplicates,
    "Placeholders": placeholders,
    "Quality Score": qualityScore.toFixed(1) + '%',
    "Status": readiness,
    scoreRaw: qualityScore
  });
}

auditResults.sort((a, b) => b.scoreRaw - a.scoreRaw);

console.log('| Course | Total Lessons | Generated | Missing | Duplicates | Placeholders | Quality Score | Publish Readiness |');
console.log('|---|---|---|---|---|---|---|---|');
for (const r of auditResults) {
  console.log(`| ${r.Course} | ${r['Total Lessons']} | ${r['Generated Content']} | ${r.Missing} | ${r.Duplicates} | ${r.Placeholders} | ${r['Quality Score']} | ${r.Status} |`);
}
