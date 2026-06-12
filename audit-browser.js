const puppeteer = require('puppeteer');
const fs = require('fs');

async function run() {
  console.log('Starting Browser Audit...');
  const browser = await puppeteer.launch({ 
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--ignore-certificate-errors'] 
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  // Add error listener
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.error('PAGE ERROR:', error.message));
  page.on('response', response => {
    if (response.status() >= 400 && response.status() !== 404) { // Ignore some 404s for favicon
      console.log('API RESPONSE ERROR:', response.status(), response.url());
    }
  });

  const artifactDir = 'C:\\Users\\khaled scorbion\\.gemini\\antigravity\\brain\\e3647c7b-7da5-471b-8420-e441570df74b';

  try {
    // 1. Load Homepage
    console.log('Navigating to https://www.smartvenomk.xyz ...');
    await page.goto('https://www.smartvenomk.xyz', { waitUntil: 'networkidle2', timeout: 30000 });
    await page.screenshot({ path: artifactDir + '\\audit_homepage.png' });
    console.log('Screenshot saved: audit_homepage.png');

    // Wait a bit
    await new Promise(r => setTimeout(r, 2000));

    // 2. Click Login or navigate to /login
    console.log('Navigating to /login ...');
    await page.goto('https://www.smartvenomk.xyz/login', { waitUntil: 'networkidle2' });
    await page.screenshot({ path: artifactDir + '\\audit_login_page.png' });
    
    // Attempt Login
    console.log('Attempting login...');
    await page.type('input[name="identifier"], input[type="email"]', 'student@test.com');
    await page.type('input[name="password"], input[type="password"]', '123456');
    await page.keyboard.press('Enter');
    
    await new Promise(r => setTimeout(r, 4000));
    await page.screenshot({ path: artifactDir + '\\audit_post_login.png' });
    
    // 3. Course cards & Course details
    console.log('Navigating to course listing...');
    await page.goto('https://www.smartvenomk.xyz/courses', { waitUntil: 'networkidle2' });
    await page.screenshot({ path: artifactDir + '\\audit_courses.png' });

    console.log('Navigating to a specific course detail...');
    await page.goto('https://www.smartvenomk.xyz/courses/1', { waitUntil: 'networkidle2' });
    await page.screenshot({ path: artifactDir + '\\audit_course_details.png' });

    // 4. Lesson Pages Load
    console.log('Navigating to a lesson...');
    await page.goto('https://www.smartvenomk.xyz/learn/python-1', { waitUntil: 'networkidle2' });
    await page.screenshot({ path: artifactDir + '\\audit_lesson.png' });

  } catch (err) {
    console.error('Audit Script Exception:', err);
  } finally {
    await browser.close();
    console.log('Browser Audit Complete.');
  }
}

run();
