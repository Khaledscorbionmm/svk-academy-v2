import { pythonTrackData } from './src/context/tracks/pythonData';

const types = new Set();
pythonTrackData.forEach(l => {
  types.add(l.lesson_type);
});
console.log('All lesson types in pythonData.ts:', Array.from(types));

// Check types for lessons 21-100 specifically
const laterLessons = pythonTrackData.slice(20, 100);
const laterTypes = new Set(laterLessons.map(l => l.lesson_type));
console.log('Lesson types for 21-100:', Array.from(laterTypes));

// Count quizzes
console.log('Total quizzes in 21-100:', laterLessons.filter(l => l.lesson_type === 'quiz').length);
