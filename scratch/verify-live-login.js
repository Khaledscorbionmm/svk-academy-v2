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
  console.log('Testing live login on: https://www.smartvenomk.xyz');
  
  // 1. Post to login
  const loginRes = await post('https://www.smartvenomk.xyz/api/auth/login', {
    identifier: 'admin@smartvenom.com',
    password: 'Admin@SVK2025!'
  });
  
  console.log('Login Status:', loginRes.statusCode);
  console.log('Login Response:', loginRes.body);
  
  const setCookie = loginRes.headers['set-cookie'];
  if (!setCookie) {
    console.log('Error: No cookies set on login!');
    return;
  }
  
  console.log('Received Cookies:', setCookie);
  
  // Extract svk_admin_token cookie
  const adminCookie = setCookie.find(c => c.startsWith('svk_admin_token='));
  if (!adminCookie) {
    console.log('Error: svk_admin_token cookie not found in response!');
    return;
  }
  
  const cookieHeader = adminCookie.split(';')[0];
  console.log('Using Cookie Header:', cookieHeader);
  
  // 2. Request dashboard with the cookie
  console.log('Requesting Admin Dashboard...');
  const dashRes = await get('https://www.smartvenomk.xyz/admin/dashboard', cookieHeader);
  
  console.log('Dashboard Status:', dashRes.statusCode);
  console.log('Is Redirect:', [301, 302, 307, 308].includes(dashRes.statusCode));
  if (dashRes.headers.location) {
    console.log('Redirect Location:', dashRes.headers.location);
  }
  
  if (dashRes.statusCode === 200 && !dashRes.headers.location) {
    console.log('SUCCESS! Admin Dashboard accessed successfully on the live site without redirection loop.');
  } else {
    console.log('FAILED! Dashboard request returned status:', dashRes.statusCode, 'redirect:', dashRes.headers.location);
  }
}

verify().catch(console.error);
