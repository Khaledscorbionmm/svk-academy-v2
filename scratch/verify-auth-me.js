const https = require('https');

function post(url, data) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const postData = JSON.stringify(data);
    const options = {
      hostname: urlObj.hostname,
      port: 443,
      path: urlObj.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: body
        });
      });
    });

    req.on('error', (e) => reject(e));
    req.write(postData);
    req.end();
  });
}

function get(url, cookies) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      port: 443,
      path: urlObj.pathname + urlObj.search,
      method: 'GET',
      headers: {
        'Cookie': cookies
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: body
        });
      });
    });

    req.on('error', (e) => reject(e));
    req.end();
  });
}

async function verify() {
  console.log('Testing /api/auth/me on live site...');
  
  // 1. Login student
  const loginRes = await post('https://www.smartvenomk.xyz/api/auth/login', {
    identifier: '01000081646', // Existing test phone number
    password: 'Password123!'
  });

  const setCookie = loginRes.headers['set-cookie'];
  if (!setCookie) {
    console.log('Error: No cookies returned from login');
    return;
  }

  // Extract both cookies
  const cookies = setCookie.map(c => c.split(';')[0]).join('; ');
  console.log('Cookies to send:', cookies);

  // 2. Call /api/auth/me
  const meRes = await get('https://www.smartvenomk.xyz/api/auth/me', cookies);
  console.log('Me status:', meRes.statusCode);
  console.log('Me response:', meRes.body);

  const parsed = JSON.parse(meRes.body);
  if (parsed.user && parsed.user.role === 'student') {
    console.log('SUCCESS! /api/auth/me correctly identifies student session and role.');
  } else {
    console.log('FAILED! Student identification is incorrect:', parsed);
  }
}

verify().catch(console.error);
