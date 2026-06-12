import fs from 'fs';

const rawTs = fs.readFileSync('src/context/tracks/pythonData.ts', 'utf8');
const arrayStart = rawTs.indexOf('[');
const arrayStr = rawTs.substring(arrayStart, rawTs.lastIndexOf('];') + 1);

let pythonTrackData;
try {
    pythonTrackData = new Function(`return ${arrayStr}`)();
} catch (e) {
    console.error("Failed to parse the array:", e);
    process.exit(1);
}

const batchFiles = [
    'batch1.json', 'batch2.json', 'batch3.json', 'batch4.json', 
    'batch5.json', 'batch6.json', 'batch7.json', 'batch8.json'
];

let generatedLessons = [];

for (const file of batchFiles) {
    if (fs.existsSync(file)) {
        try {
            const data = JSON.parse(fs.readFileSync(file, 'utf8'));
            generatedLessons = generatedLessons.concat(data);
            console.log(`Loaded ${data.length} lessons from ${file}`);
        } catch (e) {
            console.error(`Error reading or parsing ${file}:`, e);
        }
    } else {
        console.warn(`File ${file} not found!`);
    }
}

let updatedCount = 0;

for (let i = 20; i < 100; i++) {
    const lesson = pythonTrackData[i];
    if (!lesson) continue;

    const generated = generatedLessons.find(l => l.lesson_slug === lesson.lesson_slug || l.title === lesson.title);
    if (generated) {
        // Update content
        if (generated.content) {
            lesson.content = { ...lesson.content, ...generated.content };
        }
        
        if (generated.quick_practical_examples) {
            lesson.quick_practical_examples = generated.quick_practical_examples;
        }

        if (generated.exam_data) {
            lesson.exam_data = generated.exam_data;
        }

        updatedCount++;
    }
}

const newContent = `export const pythonTrackData = ${JSON.stringify(pythonTrackData, null, 2)};\n`;
fs.writeFileSync('src/context/tracks/pythonData.ts', newContent);

console.log(`Successfully merged ${updatedCount} lessons into pythonData.ts!`);
