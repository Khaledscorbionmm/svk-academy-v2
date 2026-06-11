import fs from 'fs';

// Read the raw TS file
const rawTs = fs.readFileSync('src/context/tracks/pythonData.ts', 'utf8');

// Find where the array starts
const arrayStart = rawTs.indexOf('[');
const arrayStr = rawTs.substring(arrayStart);

let pythonTrackData;
try {
    pythonTrackData = new Function(`return ${arrayStr}`)();
} catch (e) {
    console.error("Failed to parse the array:", e);
    process.exit(1);
}

// Assign lesson types based on the algorithm from the plan
pythonTrackData.forEach((lesson, index) => {
    const num = index + 1;
    let proposedType = 'concept';

    if (num % 20 === 0) {
        proposedType = 'capstone';
    } else if (num % 10 === 0) {
        proposedType = 'milestone';
    } else if (num % 10 === 5) {
        proposedType = 'project';
    } else if (num % 10 === 8) {
        proposedType = 'scenario';
    } else if (num % 7 === 0) {
        proposedType = 'debugging';
    } else if (num % 11 === 0) {
        proposedType = 'ai_challenge';
    } else if (num % 13 === 0) {
        proposedType = 'code_reading';
    } else if (num % 4 === 0 && num % 20 !== 0) {
        proposedType = 'mini_mission';
    } else if (num % 3 === 0) {
        proposedType = 'sandbox';
    }

    // Overrides for early lessons
    if (num === 1) proposedType = 'concept';
    if (num === 2) proposedType = 'sandbox';
    if (num === 3) proposedType = 'debugging';

    lesson.lesson_type = proposedType;
});

// Serialize back
const newContent = `export const pythonTrackData = ${JSON.stringify(pythonTrackData, null, 2)};\n`;
fs.writeFileSync('src/context/tracks/pythonData.ts', newContent);

console.log('Applied lesson types successfully!');
