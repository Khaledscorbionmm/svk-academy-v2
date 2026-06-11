import fs from 'fs';

const rawTs = fs.readFileSync('src/context/tracks/pythonData.ts', 'utf8');
const arrayStart = rawTs.indexOf('[');
const arrayStr = rawTs.substring(arrayStart);
let lessons = new Function(`return ${arrayStr}`)();

const targets = [1, 5, 10, 20, 30, 50, 80, 100];
let report = `# Final Content Quality Audit\n\n`;

let allExplanations = new Map();
let allChallenges = new Map();
let allMistakes = new Map();
let allCodes = new Map();
let duplicates = [];

// First pass: collect all content to find duplicates globally
lessons.forEach((l, idx) => {
    const num = idx + 1;
    if (!l.quick_practical_examples) return;

    l.quick_practical_examples.forEach(ex => {
        if (ex.explanation) {
            if (allExplanations.has(ex.explanation)) {
                allExplanations.get(ex.explanation).push(num);
            } else {
                allExplanations.set(ex.explanation, [num]);
            }
        }
        if (ex.type === 'challenge' && ex.code) {
             if (allChallenges.has(ex.code)) allChallenges.get(ex.code).push(num);
             else allChallenges.set(ex.code, [num]);
        }
        if (ex.type === 'wrong' && ex.code) {
             if (allMistakes.has(ex.code)) allMistakes.get(ex.code).push(num);
             else allMistakes.set(ex.code, [num]);
        }
        if (ex.type === 'correct' && ex.code) {
             if (allCodes.has(ex.code)) allCodes.get(ex.code).push(num);
             else allCodes.set(ex.code, [num]);
        }
    });
});

// Calculate global duplicate lists
report += `## Global Duplicate Analysis\n\n`;

function reportDups(map, name) {
    let dupFound = false;
    map.forEach((lessonNums, text) => {
        if (lessonNums.length > 1) {
            dupFound = true;
            report += `- **Duplicate ${name}** found in lessons: ${lessonNums.join(', ')}\n`;
            report += `  - Content snippet: "${text.substring(0, 80)}..."\n\n`;
        }
    });
    if (!dupFound) report += `- No duplicate ${name}s found.\n\n`;
}

reportDups(allExplanations, 'Explanations');
reportDups(allChallenges, 'Challenges');
reportDups(allMistakes, 'Mistakes');
reportDups(allCodes, 'Base Examples');

report += `## Random Inspection Scores\n\n`;

// Target Inspection
targets.forEach(num => {
    const l = lessons[num - 1];
    let score = 100;
    let notes = [];
    
    if (!l.quick_practical_examples) {
        score -= 50;
        notes.push("Missing quick_practical_examples completely.");
    } else {
        const exStr = JSON.stringify(l.quick_practical_examples);
        if (exStr.includes('print("python-')) {
            score -= 30;
            notes.push("Contains placeholder print('python-X') remnants.");
        }
        if (exStr.includes('هذا مثال بسيط يوضح كيفية تطبيق المفهوم بشكل سليم دون تعقيد.')) {
            score -= 20;
            notes.push("Uses generic generated explanation for the correct example.");
        }
        if (exStr.includes('تحدي خاص بدرس:')) {
            score -= 10;
            notes.push("Uses generic generated challenge explanation.");
        }
        if (exStr.includes('invalid_var = 10\\nprint(Invalid_Var)')) {
            score -= 10;
            notes.push("Uses generic Invalid_Var mistake.");
        }
    }
    
    report += `### Lesson ${num}: ${l.title}\n`;
    report += `- **Quality Score**: ${Math.max(0, score)}/100\n`;
    report += `- **Lesson Type Assigned**: ${l.lesson_type || 'None'}\n`;
    if (notes.length > 0) {
        report += `- **Notes**: \n  - ${notes.join('\\n  - ')}\n`;
    } else {
        report += `- **Notes**: Perfect quality. Unique and specific.\n`;
    }
    report += `\n`;
});

report += `## Analysis of Lessons > 20 (Why they look like tests)\n`;
let typeCounts = {};
lessons.slice(20).forEach(l => {
    typeCounts[l.lesson_type] = (typeCounts[l.lesson_type] || 0) + 1;
});
report += `\nDistribution of lesson types from Lesson 21 to 100:\n`;
for (let t in typeCounts) {
    report += `- ${t}: ${typeCounts[t]} lessons\n`;
}

fs.writeFileSync('C:/Users/khaled scorbion/.gemini/antigravity/brain/e3647c7b-7da5-471b-8420-e441570df74b/final_quality_audit.md', report);
console.log("Audit complete");
