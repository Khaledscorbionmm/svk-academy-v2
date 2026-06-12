import fs from 'fs';
const files = [
  { p: 'src/context/tracks/pythonData.ts', name: 'pythonTrackData', old: 'const pythonData = [' },
  { p: 'src/context/tracks/cyberData.ts', name: 'cyberTrackData', old: 'const cyberData = [' },
  { p: 'src/context/tracks/languageData.ts', name: 'languageTrackData', old: 'const languageData = [' }
];
for(const f of files) {
  let text = fs.readFileSync(f.p, 'utf-8');
  text = text.replace(f.old, 'export const ' + f.name + ' = [');
  text = text.replace(/export default \w+;/g, '');
  fs.writeFileSync(f.p, text);
}
