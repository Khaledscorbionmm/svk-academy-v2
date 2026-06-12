const http = require('http');

const urls = [
  '/api/courses',
  '/api/lessons/python-1',
  '/api/lessons/cyber-10',
  '/api/lessons/lang-5',
  '/api/stats',
  '/api/healthz'
];

async function checkUrls() {
  for (const url of urls) {
    try {
      const res = await fetch('http://localhost:3000' + url);
      console.log(url + ' -> ' + res.status);
    } catch (e) {
      console.error(url + ' -> ERROR', e.message);
    }
  }
}
checkUrls();
