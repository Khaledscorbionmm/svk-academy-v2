const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/context/tracks/pythonData.ts');
let fileContent = fs.readFileSync(filePath, 'utf-8');

// The file exports `export const pythonTrackData = [...]`
// We need to require it or parse it
const match = fileContent.match(/export const pythonTrackData = (\[[\s\S]*\]);/);
if (match) {
    let data = JSON.parse(match[1]);
    
    // Lesson 1
    if (data[0].lesson_slug === 'python-1') {
        data[0].exercise_instructions = "قم بإنشاء متغير يحمل اسم age وضع بداخله عمرك كرقم صحيح (مثلاً 25)، ثم استخدم أمر الطباعة print لعرض المتغير.";
        data[0].expected_output = "25";
    }
    
    // Lesson 2
    if (data[1].lesson_slug === 'python-2') {
        data[1].exercise_instructions = "قم بإنشاء متغير باسم price وضَع فيه سعر الكورس (مثلاً 99.9) ثم اطبعه.";
        data[1].expected_output = "99.9";
    }
    
    const newContent = `export const pythonTrackData = ${JSON.stringify(data, null, 2)};\n`;
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log('Successfully updated pythonData.ts');
} else {
    console.log('Failed to parse pythonData.ts');
}
