import fs from 'fs';

// Read the raw TS file
const rawTs = fs.readFileSync('src/context/tracks/pythonData.ts', 'utf8');

const arrayStart = rawTs.indexOf('[');
const arrayStr = rawTs.substring(arrayStart);

let pythonTrackData;
try {
    pythonTrackData = new Function(`return ${arrayStr}`)();
} catch (e) {
    console.error("Failed to parse the array:", e);
    process.exit(1);
}

// Rebalance algorithm: ~65% concept, ~20% sandbox, ~15% challenges
pythonTrackData.forEach((lesson, index) => {
    const num = index + 1;
    let proposedType = 'concept'; // Default

    if (num % 25 === 0) {
        proposedType = 'capstone'; 
    } else if (num % 10 === 0) {
        proposedType = 'milestone';
    } else if (num % 20 === 5) {
        proposedType = 'project';
    } else if (num % 15 === 7) {
        proposedType = 'scenario';
    } else if (num % 12 === 0) {
        proposedType = 'debugging';
    } else if (num % 13 === 0) {
        proposedType = 'ai_challenge';
    } else if (num % 14 === 0) {
        proposedType = 'mini_mission';
    } else if (num % 17 === 0) {
        proposedType = 'code_reading';
    } else if (num % 5 === 0) {
        proposedType = 'sandbox'; // 20% sandbox
    }

    lesson.lesson_type = proposedType;
});

// Calculate and log stats
const stats = {};
pythonTrackData.forEach(l => {
    stats[l.lesson_type] = (stats[l.lesson_type] || 0) + 1;
});
console.log("New Distribution:");
console.log(stats);

// Serialize back
const newContent = `export const pythonTrackData = ${JSON.stringify(pythonTrackData, null, 2)};\n`;
fs.writeFileSync('src/context/tracks/pythonData.ts', newContent);
console.log('Rebalancing complete!');
