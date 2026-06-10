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
  console.log('Testing live Student signup & login workflow...');
  
  // Use a unique email/phone to test
  const rand = Math.floor(Math.random() * 100000);
  const testStudent = {
    name: 'طالب تجريبي ' + rand,
    email: 'test_student_' + rand + '@gmail.com',
    phone: '010' + String(rand).padStart(8, '0'),
    age: 15,
    password: 'Password123!'
  };

  console.log('Registering Student:', testStudent.email, 'Phone:', testStudent.phone);
  
  // 1. Post to registration
  const regRes = await post('https://www.smartvenomk.xyz/api/auth/register', testStudent);
  console.log('Register Status:', regRes.statusCode);
  console.log('Register Response:', regRes.body);
  
  if (regRes.statusCode !== 200) {
    console.log('Registration failed!');
    return;
  }

  // 2. Try logging in with the PHONE number (test phone number search)
  console.log('Logging in with PHONE number:', testStudent.phone);
  const loginPhoneRes = await post('https://www.smartvenomk.xyz/api/auth/login', {
    identifier: testStudent.phone,
    password: testStudent.password
  });
  console.log('Login Phone Status:', loginPhoneRes.statusCode);
  console.log('Login Phone Response:', loginPhoneRes.body);
  
  const setCookie = loginPhoneRes.headers['set-cookie'];
  if (!setCookie) {
    console.log('Error: No cookies set on login!');
    return;
  }
  
  const studentCookie = setCookie.find(c => c.startsWith('svk_student_token='));
  if (!studentCookie) {
    console.log('Error: svk_student_token not set on login!');
    return;
  }
  const cookieHeader = studentCookie.split(';')[0];
  console.log('Using student cookie:', cookieHeader);
  
  // 3. Request student dashboard using the cookie
  console.log('Requesting Student Dashboard...');
  const dashRes = await get('https://www.smartvenomk.xyz/api/student/dashboard', cookieHeader);
  console.log('Dashboard Status:', dashRes.statusCode);
  console.log('Dashboard Response:', dashRes.body);
  
  if (dashRes.statusCode === 200) {
    console.log('SUCCESS! Student can sign up, log in with phone number, and access dashboard correctly.');
  } else {
    console.log('FAILED! Student dashboard lookup failed.');
  }
}

verify().catch(console.error);
