const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function runAudit() {
    console.log('Starting content audit...');
    const lessons = await prisma.lessons.findMany({
        select: { id: true, title: true, content: true, course_id: true }
    });

    const courses = await prisma.courses.findMany();
    const courseMap = {};
    courses.forEach(c => courseMap[c.id] = c.category);

    const placeholders = ['generic', 'placeholder', 'todo', 'lorem ipsum', 'example concept', 'provide a', 'your code here'];
    
    // Maps to find duplicates
    const hashes = {
        correct_example: new Map(),
        wrong_example: new Map(),
        challenge_question: new Map(),
        common_mistake: new Map()
    };

    const results = [];

    // First pass: map hashes
    for (const l of lessons) {
        if (!l.content) continue;
        let context = null;
        try {
            const parsed = JSON.parse(l.content); if (Array.isArray(parsed) && parsed.length > 0) context = parsed[0]; else if (typeof parsed === 'object') context = parsed; else continue; if(context.concept_context) context = context.concept_context;
        } catch(e) { continue; }

        if (!context) continue;

        ['correct_example', 'wrong_example', 'challenge_question', 'common_mistake'].forEach(key => {
            const val = context[key];
            if (val && typeof val === 'string' && val.length > 10) {
                const norm = val.toLowerCase().trim().replace(/\s+/g, ' ');
                if (!hashes[key].has(norm)) hashes[key].set(norm, []);
                hashes[key].get(norm).push(context.lesson_slug || l.id);
            }
        });
    }

    // Second pass: scoring
    let totalDuplicates = 0;
    let totalPlaceholders = 0;

    for (const l of lessons) {
        if (!l.content) continue;
        let context = null;
        try {
            const parsed = JSON.parse(l.content); if (Array.isArray(parsed) && parsed.length > 0) context = parsed[0]; else if (typeof parsed === 'object') context = parsed; else continue; if(context.concept_context) context = context.concept_context;
        } catch(e) { continue; }
        if (!context) continue;

        let score = 100;
        let issues = [];
        let duplicateCount = 0;
        let placeholderCount = 0;
        let relevanceScore = 100;

        const category = courseMap[l.course_id] || '';
        const allText = JSON.stringify(context).toLowerCase();

        // Check placeholders
        placeholders.forEach(p => {
            if (allText.includes(p)) {
                score -= 20;
                placeholderCount++;
                issues.push(`Placeholder found: "${p}"`);
            }
        });

        // Check duplicates
        ['correct_example', 'wrong_example', 'challenge_question', 'common_mistake'].forEach(key => {
            const val = context[key];
            if (val && typeof val === 'string' && val.length > 10) {
                const norm = val.toLowerCase().trim().replace(/\s+/g, ' ');
                const dupes = hashes[key].get(norm) || [];
                if (dupes.length > 1) {
                    score -= 15;
                    duplicateCount++;
                    issues.push(`Duplicated ${key} (Shared with ${dupes.length - 1} others)`);
                }
            }
        });

        // Relevance check (basic keyword matching)
        if (category === 'python' && !allText.includes('python') && !allText.includes('def ') && !allText.includes('print(')) {
            relevanceScore -= 30;
            score -= 10;
            issues.push('Low Python relevance');
        } else if (category === 'security' && !allText.includes('security') && !allText.includes('attack') && !allText.includes('vulnerabil') && !allText.includes('protect')) {
            relevanceScore -= 30;
            score -= 10;
            issues.push('Low Cyber Security relevance');
        } else if (category === 'languages' && !allText.includes('word') && !allText.includes('speak') && !allText.includes('verb') && !allText.includes('say')) {
            relevanceScore -= 30;
            score -= 10;
            issues.push('Low Languages relevance');
        }

        totalDuplicates += duplicateCount;
        totalPlaceholders += placeholderCount;

        score = Math.max(0, score);

        let categoryRank = 'No changes';
        if (score < 60) categoryRank = 'Major rewrites';
        else if (score < 90) categoryRank = 'Minor fixes';

        results.push({
            id: l.id,
            slug: context.lesson_slug || l.id,
            title: l.title,
            course: category,
            score,
            relevanceScore,
            categoryRank,
            issues
        });
    }

    // Sort by worst score
    results.sort((a, b) => a.score - b.score);

    // Generate Markdown Report
    let md = `# Content Audit Report\n\n`;
    md += `## Global Metrics\n`;
    md += `- **Total Lessons Audited:** ${results.length}\n`;
    md += `- **Total Duplicates Found:** ${totalDuplicates}\n`;
    md += `- **Total Placeholders Found:** ${totalPlaceholders}\n`;
    const avgScore = results.reduce((acc, r) => acc + r.score, 0) / (results.length || 1);
    md += `- **Average Quality Score:** ${avgScore.toFixed(2)} / 100\n\n`;

    const noChanges = results.filter(r => r.categoryRank === 'No changes');
    const minorFixes = results.filter(r => r.categoryRank === 'Minor fixes');
    const majorRewrites = results.filter(r => r.categoryRank === 'Major rewrites');

    md += `## Rankings\n`;
    md += `- 🟢 **No changes needed:** ${noChanges.length} lessons\n`;
    md += `- 🟡 **Minor fixes needed:** ${minorFixes.length} lessons\n`;
    md += `- 🔴 **Major rewrites needed:** ${majorRewrites.length} lessons\n\n`;

    md += `### 🔴 Major Rewrites (Score < 60)\n`;
    majorRewrites.forEach(r => {
        md += `- **[${r.slug}] ${r.title}** (Score: ${r.score}) - Issues: ${r.issues.join(', ')}\n`;
    });

    md += `\n### 🟡 Minor Fixes (Score 60-89)\n`;
    minorFixes.forEach(r => {
        md += `- **[${r.slug}] ${r.title}** (Score: ${r.score}) - Issues: ${r.issues.join(', ')}\n`;
    });

    md += `\n### 🟢 High Quality (Score 90-100) (First 10 shown)\n`;
    noChanges.slice(0, 10).forEach(r => {
        md += `- **[${r.slug}] ${r.title}** (Score: ${r.score})\n`;
    });

    const reportPath = 'C:/Users/khaled scorbion/.gemini/antigravity/brain/e3647c7b-7da5-471b-8420-e441570df74b/content_audit_report.md';
    fs.writeFileSync(reportPath, md);
    fs.writeFileSync('audit_data.json', JSON.stringify(results, null, 2));

    console.log('Audit complete! Results saved to ' + reportPath);
    await prisma.$disconnect();
}

runAudit().catch(console.error);
