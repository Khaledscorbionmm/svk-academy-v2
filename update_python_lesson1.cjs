const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/context/tracks/pythonData.ts');
let fileContent = fs.readFileSync(filePath, 'utf-8');

const match = fileContent.match(/export const pythonTrackData = (\[[\s\S]*\]);/);
if (match) {
    let data = JSON.parse(match[1]);
    
    // Update Lesson 1 exactly as requested
    if (data[0].lesson_slug === 'python-1') {
        data[0].exercise_instructions = "قم بإنشاء متغير age وضع بداخله عمرك، ثم استخدم print لطباعته.";
        data[0].expected_output = "25";
    }
    
    const newContent = `export const pythonTrackData = ${JSON.stringify(data, null, 2)};\n`;
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log('Successfully updated pythonData.ts with precise lesson 1 wording');
} else {
    console.log('Failed to parse pythonData.ts');
}
