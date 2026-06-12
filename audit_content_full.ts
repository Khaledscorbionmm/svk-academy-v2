import { pythonTrackData } from './src/context/tracks/pythonData';

const ids = ['python-20', 'python-40', 'python-60', 'python-80', 'python-100'];

ids.forEach(id => {
  const l = pythonTrackData.find(x => x.lesson_slug === id || x.id === id);
  if (l) {
    console.log(`\n=== ${id} ===`);
    console.log(JSON.stringify(l, null, 2));
  }
});
