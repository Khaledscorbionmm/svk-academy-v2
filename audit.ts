// @ts-nocheck
import { pythonTrackData } from './src/context/tracks/pythonData.ts';
import fs from 'fs';

// Helper to count words
function wordCount(str) {
  if (!str) return 0;
  return str.split(/\s+/).filter(w => w.length > 0).length;
}

const report = {
  total_lessons: pythonTrackData.length,
  classification: {
    concept: 0,
    explanation: 0,
    practical: 0,
    challenge: 0,
    quiz: 0
  },
  weak_explanations: [],
  missing_practical: [],
  mostly_quizzes: [],
  repetitive_content: [],
  metrics: {
    contentDensityScore: 0,
    learningProgressionScore: 0,
    educationalBalanceScore: 0
  }
};

let totalWords = 0;
let lessonsWithExamples = 0;
let lessonsWithQuizzes = 0;

const analyzedLessons = pythonTrackData.map((lesson, index) => {
  const desc = lesson.content?.description || '';
  const context = lesson.content?.context || '';
  const example = lesson.content?.example || '';
  const quickExamples = lesson.quick_practical_examples || [];
  const exercise = lesson.exercise_instructions || '';
  const quizzes = lesson.quizzes || [];
  
  const theoryWords = wordCount(desc) + wordCount(context);
  const practicalContent = example.length > 5 || quickExamples.length > 0;
  const hasQuiz = quizzes.length > 0;
  const hasExercise = exercise.length > 5;
  
  let type = 'Explanation Lesson';
  if (theoryWords > 80 && !practicalContent) type = 'Concept Lesson';
  if (practicalContent && theoryWords < 50) type = 'Practical Lesson';
  if (hasExercise && !practicalContent && theoryWords < 50) type = 'Challenge Lesson';
  if (hasQuiz && theoryWords < 30) type = 'Quiz Lesson';

  // Overrides based on mixed content
  if (theoryWords > 30 && practicalContent) type = 'Concept & Practical Lesson';
  
  // Categorization
  if (type.includes('Concept') || type.includes('Explanation')) report.classification.concept++;
  if (type.includes('Practical')) report.classification.practical++;
  if (type.includes('Challenge')) report.classification.challenge++;
  if (type.includes('Quiz')) report.classification.quiz++;

  // Weak explanations
  if (theoryWords < 30 && !hasQuiz) {
    report.weak_explanations.push({ id: lesson.lesson_slug, title: lesson.title, words: theoryWords });
  }

  // Missing practical
  if (!practicalContent && !hasQuiz) {
    report.missing_practical.push({ id: lesson.lesson_slug, title: lesson.title });
  }

  // Mostly quizzes
  if (hasQuiz && theoryWords < 30 && !practicalContent) {
    report.mostly_quizzes.push({ id: lesson.lesson_slug, title: lesson.title });
  }
  
  totalWords += theoryWords;
  if (practicalContent) lessonsWithExamples++;
  if (hasQuiz) lessonsWithQuizzes++;

  return { id: lesson.lesson_slug, type };
});

// Repetition check (simple check for same title keywords or tiny identical descriptions)
const descMap = new Map();
pythonTrackData.forEach(lesson => {
  const desc = lesson.content?.description || '';
  if (desc.length > 20) {
    if (descMap.has(desc)) {
      report.repetitive_content.push({ id: lesson.lesson_slug, title: lesson.title });
    } else {
      descMap.set(desc, lesson.lesson_slug);
    }
  }
});

// Scoring Algorithms
// Density: average words per lesson (normalized to 0-100, assuming 100 words/lesson is 100)
const avgWords = totalWords / pythonTrackData.length;
report.metrics.contentDensityScore = Math.min(100, Math.round((avgWords / 80) * 100));

// Progression: smooth distribution of concepts vs practical vs challenges.
// Ideal: 40% practical, 40% concept, 20% challenges/quizzes
const practicalRatio = lessonsWithExamples / pythonTrackData.length;
const quizRatio = lessonsWithQuizzes / pythonTrackData.length;
report.metrics.educationalBalanceScore = Math.min(100, Math.round(
  (1 - Math.abs(0.5 - practicalRatio)) * 50 + 
  (1 - Math.abs(0.2 - quizRatio)) * 50
));

// Learning Progression (are concepts followed by practical?)
let progressionScore = 100;
let consecutiveTheory = 0;
analyzedLessons.forEach(l => {
  if (l.type.includes('Concept') && !l.type.includes('Practical')) {
    consecutiveTheory++;
    if (consecutiveTheory > 3) progressionScore -= 5;
  } else {
    consecutiveTheory = 0;
  }
});
report.metrics.learningProgressionScore = Math.max(0, progressionScore);

fs.writeFileSync('audit_results.json', JSON.stringify(report, null, 2));
console.log('Audit complete.');
