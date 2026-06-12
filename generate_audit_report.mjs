import fs from 'fs';

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

let reportLines = [];
reportLines.push("# Lessons 20-100 Audit Report\n");
reportLines.push("| Lesson Number | Current Type | Missing Sections | Proposed Correction |");
reportLines.push("| --- | --- | --- | --- |");

for (let i = 19; i < 100; i++) {
    const lesson = pythonTrackData[i];
    if (!lesson) continue;
    
    const isGeneric = lesson.content && lesson.content.description && lesson.content.description.includes('شرح متكامل ومبسط عن');
    
    let missing = [];
    if (isGeneric) {
        missing.push("Concept Explanation");
        missing.push("Correct Example");
        missing.push("Wrong Example");
        missing.push("Common Mistake");
        missing.push("Practical Sandbox");
        
        if (!lesson.exam_data) {
            missing.push("Mini Assessment");
        }
    }

    if (isGeneric) {
        reportLines.push(`| ${lesson.order_index} (${lesson.lesson_slug}) | ${lesson.lesson_type} | ${missing.join(', ')} | Rewrite using AI to provide actual educational content based on the lesson title. Keep type as ${lesson.lesson_type}. |`);
    }
}

fs.writeFileSync('audit_report_20_100.md', reportLines.join('\n'));
console.log("Report generated at audit_report_20_100.md");
