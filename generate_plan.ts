import { pythonTrackData } from './src/context/tracks/pythonData.ts';
import fs from 'fs';

let planMarkdown = `# Course Diversity Improvement Plan: Python (Lessons 1-100)

## Overview
This plan details the transition of the Python course from a purely repetitive "Concept + Practical" structure to a highly diverse and engaging 10-format learning experience. The goal is to maximize retention, combat cognitive overload, and introduce real-world development workflows.

## Proposed Lesson Types
1. **Concept Lessons**: Core theory and syntax.
2. **Interactive Sandbox Lessons**: Guided experimentation without strict right/wrong answers.
3. **Real Project Lessons**: Building small but functional apps.
4. **Debugging Lessons**: Fixing broken code written by "others".
5. **AI Challenge Lessons**: Prompting AI or fixing AI hallucinations.
6. **Code Reading Lessons**: Understanding large codebases without writing code.
7. **Mini Missions**: Fast-paced, high-pressure tasks.
8. **Milestone Assessments**: Comprehensive quizzes and evaluations.
9. **Real World Scenarios**: Translating business requirements into code.
10. **Capstone Projects**: Massive multi-part projects bringing everything together.

## Lesson Restructuring Mapping

| Lesson | Current Title | Proposed Type | Reason |
| :--- | :--- | :--- | :--- |
`;

pythonTrackData.forEach((lesson, index) => {
  const num = index + 1;
  let proposedType = 'Concept Lesson';
  let reason = 'Fundamental syntax introduction.';

  // Algorithm for distribution
  if (num % 20 === 0) {
    proposedType = 'Capstone Project';
    reason = 'Comprehensive synthesis of the last 20 lessons.';
  } else if (num % 10 === 0) {
    proposedType = 'Milestone Assessment';
    reason = 'Evaluate retention of the module concepts.';
  } else if (num % 10 === 5) {
    proposedType = 'Real Project Lesson';
    reason = 'Apply recent concepts to a tangible mini-project.';
  } else if (num % 10 === 8) {
    proposedType = 'Real World Scenarios';
    reason = 'Business requirement translation practice.';
  } else if (num % 7 === 0) {
    proposedType = 'Debugging Lessons';
    reason = 'Develop critical bug-hunting skills.';
  } else if (num % 11 === 0) {
    proposedType = 'AI Challenge Lessons';
    reason = 'Interact with AI to fix/optimize code.';
  } else if (num % 13 === 0) {
    proposedType = 'Code Reading Lessons';
    reason = 'Improve comprehension by reading existing codebases.';
  } else if (num % 4 === 0 && num % 20 !== 0) {
    proposedType = 'Mini Missions';
    reason = 'Gamified, quick application of concepts.';
  } else if (num % 3 === 0) {
    proposedType = 'Interactive Sandbox Lessons';
    reason = 'Open-ended exploration of syntax.';
  }

  // Override for the very first lessons
  if (num === 1) { proposedType = 'Concept Lesson'; reason = 'First impression, core intro.'; }
  if (num === 2) { proposedType = 'Interactive Sandbox Lessons'; reason = 'Get hands dirty immediately.'; }
  if (num === 3) { proposedType = 'Debugging Lessons'; reason = 'Early exposure to reading errors.'; }

  planMarkdown += `| ${num} | ${lesson.title} | **${proposedType}** | ${reason} |\n`;
});

planMarkdown += `
## Technical Implementation Strategy

### Component Changes
- Create new UI templates for each lesson type (e.g., \`DebuggingView\`, \`CapstoneView\`).
- Update the \`pythonData.ts\` data structure to support a \`lesson_type\` property.
- Implement specialized "sandbox presets" for debugging or code reading.

### User Review Required
> [!IMPORTANT]
> Please review the mapping above. Should we proceed with converting the data structure in \`pythonData.ts\` to support the \`lesson_type\` field and implementing the new UI templates for these specific lesson numbers?
`;

const destPath = 'C:/Users/khaled scorbion/.gemini/antigravity/brain/e3647c7b-7da5-471b-8420-e441570df74b/implementation_plan.md';
fs.writeFileSync(destPath, planMarkdown);
console.log('Plan generated.');
