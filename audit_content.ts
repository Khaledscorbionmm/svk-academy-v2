import { pythonTrackData } from './src/context/tracks/pythonData';

const ids = ['python-20', 'python-40', 'python-60', 'python-80', 'python-100'];

ids.forEach(id => {
  const l = pythonTrackData.find(x => x.lesson_slug === id || x.id === id);
  if (l) {
    console.log(`\n=== ${id} ===`);
    console.log(`Title: ${l.title}`);
    console.log(`Type: ${l.lesson_type}`);
    console.log(`Content Context: ${l.content?.context?.substring(0, 100)}`);
  } else {
    console.log(`${id} not found`);
  }
});
