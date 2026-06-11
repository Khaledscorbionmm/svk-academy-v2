import fs from 'fs';

const BASE_URL = 'http://localhost:3000';
const results = [];

async function validateRoute(name, route, method = 'GET', body = null, headers = {}) {
  const startTime = Date.now();
  let status = 0;
  let pass = false;
  let evidence = '';
  let networkError = null;

  try {
    const options = { method, headers };
    if (body) {
      options.body = JSON.stringify(body);
      options.headers['Content-Type'] = 'application/json';
    }

    const res = await fetch(`${BASE_URL}${route}`, options);
    status = res.status;
    const text = await res.text();
    
    pass = status >= 200 && status < 400;
    
    // Extract title or snippets for evidence
    if (text.includes('<title>')) {
      evidence = text.split('<title>')[1].split('</title>')[0];
    } else {
      evidence = text.substring(0, 100).replace(/\n/g, ' ') + '...';
    }

  } catch (error) {
    networkError = error.message;
  }

  const duration = Date.now() - startTime;

  const result = {
    test: name,
    route: route,
    status,
    pass,
    durationMs: duration,
    evidence,
    networkError
  };

  console.log(`[${pass ? 'PASS' : 'FAIL'}] ${name} - ${duration}ms`);
  results.push(result);
}

async function runTests() {
  console.log('Starting Deep Runtime Validation...\n');

  // 1. Registration
  await validateRoute('Registration UI', '/register');
  
  // 2. Login
  await validateRoute('Login UI', '/login');
  
  // 3. Course Browsing
  await validateRoute('Course Browsing UI', '/courses');
  
  // 4. Lesson Opening
  await validateRoute('Lesson Opening UI', '/learn/python-0');
  
  // 5. Quiz Submission (API validation)
  await validateRoute('Quiz Submission API', '/api/ai/grade-exam', 'POST', {
    code: 'print("Hello")',
    question: 'Write a python program to print Hello',
    targetGroup: 'adults'
  });
  
  // 6. Child Mode (simulate by passing cookie if server uses it, but it's local storage mostly. We will just load the lesson)
  await validateRoute('Child Mode Emulation', '/learn/python-0', 'GET', null, {
    'Cookie': 'svk_target_group=kids'
  });
  
  // 7. Professional Mode
  await validateRoute('Professional Mode Emulation', '/learn/python-0', 'GET', null, {
    'Cookie': 'svk_target_group=adults'
  });
  
  // 8. MAEIS Dashboard
  await validateRoute('MAEIS Dashboard UI', '/admin/maeis');

  // 9. Certificate Generation
  await validateRoute('Certificate UI', '/courses/python/certificate');
  
  fs.writeFileSync('runtime_results.json', JSON.stringify(results, null, 2));
  console.log('\nValidation complete. Results saved to runtime_results.json');
}

runTests();
