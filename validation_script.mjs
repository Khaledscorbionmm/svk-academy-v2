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

const lessonsToCheck = pythonTrackData.slice(19, 100); // Index 19 is lesson 20

let report = "# Final Generation & Validation Report (Lessons 20-100)\n\n";
report += "| Lesson | Topic | Generated Sections | Validation Status |\n";
report += "|---|---|---|---|\n";

const allTexts = new Set();
let duplicatesFound = 0;
let totalSections = 0;
let passedLessons = 0;

lessonsToCheck.forEach((lesson, index) => {
    const lessonNumber = index + 20;
    const requiredSections = ['context', 'description', 'prototype', 'example'];
    const requiredQuick = ['correct', 'wrong', 'mistake', 'use_case', 'challenge'];
    
    let sectionsFound = [];
    let isComplete = true;

    // Check content
    if (lesson.content) {
        requiredSections.forEach(s => {
            if (lesson.content[s] && lesson.content[s].length > 10) {
                sectionsFound.push(s);
            } else {
                isComplete = false;
            }
        });
    } else {
        isComplete = false;
    }

    // Check quick practical examples
    if (lesson.quick_practical_examples && lesson.quick_practical_examples.length >= 5) {
        requiredQuick.forEach(qt => {
            const hasQt = lesson.quick_practical_examples.some(ex => ex.type === qt && ex.explanation && ex.explanation.length > 10);
            if (hasQt) {
                sectionsFound.push(`QPE_${qt}`);
            } else {
                isComplete = false;
            }
        });
    } else {
        isComplete = false;
    }

    const validationStatus = isComplete ? '✅ Passed' : '❌ Failed (Missing Sections)';
    if (isComplete) passedLessons++;

    report += `| ${lessonNumber} | ${lesson.title} | ${sectionsFound.length} sections | ${validationStatus} |\n`;

    // Duplication Check
    const contentsToCheck = [
        lesson.content?.description,
        lesson.content?.example,
        ...(lesson.quick_practical_examples || []).map(ex => ex.explanation)
    ];

    contentsToCheck.forEach(text => {
        if (text && typeof text === 'string') {
            totalSections++;
            const cleanText = text.trim();
            // If it's a generic placeholder, it will be exactly the same
            if (allTexts.has(cleanText) && cleanText.length > 20) {
                duplicatesFound++;
            } else {
                allTexts.add(cleanText);
            }
        }
    });
});

report += "\n## Duplicate Content Audit\n";
report += `- **Total Unique Content Blocks Checked**: ${totalSections}\n`;
report += `- **Duplicates Found**: ${duplicatesFound}\n`;

if (duplicatesFound === 0) {
    report += `\n> [!TIP]\n> **Audit Result**: ✅ PASSED. No generic or duplicated content detected across any of the 80 lessons.\n`;
} else {
    report += `\n> [!WARNING]\n> **Audit Result**: ❌ FAILED. Found ${duplicatesFound} duplicated sections.\n`;
}

// Calculate Quality Score
const completenessScore = (passedLessons / 81) * 100;
const uniquenessScore = ((totalSections - duplicatesFound) / totalSections) * 100;
const finalQualityScore = (completenessScore * 0.5) + (uniquenessScore * 0.5);

report += `\n## Final Quality Score\n`;
report += `### ⭐️ **Score: ${finalQualityScore.toFixed(1)} / 100**\n`;

fs.writeFileSync('final_validation_report.md', report);
console.log("Validation complete! Check final_validation_report.md");
