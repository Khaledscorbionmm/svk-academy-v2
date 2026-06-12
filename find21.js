const fs = require('fs');
const data = fs.readFileSync('src/context/tracks/pythonData.ts', 'utf8');

const lines = data.split('\n');
const startIdx = lines.findIndex(l => l.includes('python-21'));
if (startIdx !== -1) {
    console.log(lines.slice(startIdx, startIdx + 30).join('\n'));
} else {
    console.log('Not found');
}
