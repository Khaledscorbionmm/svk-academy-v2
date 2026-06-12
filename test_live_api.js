const https = require('https');

function check() {
  https.get('https://www.smartvenomk.xyz/api/lessons/8564', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log('Status:', res.statusCode);
      if (res.statusCode === 200) {
        console.log('SUCCESS! The update is live on Vercel.');
        try {
          const json = JSON.parse(data);
          console.log('Lesson fetched:', json.lesson.title);
        } catch(e) {}
      } else {
        console.log('Still returning:', res.statusCode);
      }
    });
  }).on('error', err => {
    console.error('Error:', err.message);
  });
}
check();
