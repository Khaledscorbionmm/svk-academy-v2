import fs from 'fs';
const rawTs = fs.readFileSync('./src/context/tracks/pythonData.ts', 'utf8');
const start = rawTs.indexOf('[');
const arr = new Function('return ' + rawTs.substring(start, rawTs.lastIndexOf('];') + 1))();
const titles = arr.slice(19, 100).map((l, i) => `${i + 20}. ${l.title} (${l.lesson_type})`);
fs.writeFileSync('titles.txt', titles.join('\n'));
