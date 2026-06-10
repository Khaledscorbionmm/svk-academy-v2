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

async function verify() {
  console.log('Testing login for 010696945646 with password 12345678 on live site...');
  
  const loginRes = await post('https://www.smartvenomk.xyz/api/auth/login', {
    identifier: '010696945646',
    password: '12345678'
  });
  
  console.log('Status Code:', loginRes.statusCode);
  console.log('Response Body:', loginRes.body);
  
  if (loginRes.statusCode === 200 && loginRes.body.includes('"success":true')) {
    console.log('SUCCESS! Student login with phone number and password 12345678 is 100% working on live site.');
  } else {
    console.log('FAILED! Login failed.');
  }
}

verify().catch(console.error);
