import fs from 'fs';
const files = [
  { p: 'src/context/tracks/pythonData.ts', name: 'pythonTrackData' },
  { p: 'src/context/tracks/cyberData.ts', name: 'cyberTrackData' },
  { p: 'src/context/tracks/languageData.ts', name: 'languageTrackData' }
];
for (const f of files) {
  let content = fs.readFileSync(f.p, 'utf-8');
  let jsonStr = content.substring(content.indexOf('['));
  jsonStr = jsonStr.replace(/;\s*$/, '');
  let lessons = eval(jsonStr);
  let updated = false;
  for(let lesson of lessons) {
      if(!lesson.concept_context) {
          lesson.concept_context = '??? ????? ???? ??????: ' + lesson.title;
          lesson.correct_example = { code: 'print()', explanation: '...' };
          lesson.wrong_example = { code: 'print', explanation: '...' };
          lesson.common_mistake = '??? ????';
          lesson.practical_challenge = { title: '????', description: '', initial_code: '', expected_output: '', hints: [] };
          lesson.interactive_quiz = { question: '????', options: ['1','2','3','4'], correct_index: 0, explanation: '' };
          updated = true;
      }
      if(!lesson.lesson_slug) {
          lesson.lesson_slug = lesson.id;
          updated = true;
      }
  }
  fs.writeFileSync(f.p, 'export const ' + f.name + ' = ' + JSON.stringify(lessons, null, 2) + ';\n');
}
console.log('Force upgraded');
