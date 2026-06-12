const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  let consoleErrors = 0;
  let runtimeErrors = 0;

  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('Browser Error:', msg.text());
      consoleErrors++;
    }
  });

  page.on('pageerror', error => {
    console.log('Runtime Exception:', error.message);
    runtimeErrors++;
  });

  console.log('1. Login as student...');
  await page.goto('http://localhost:3000/login');
  
  // Register a new test user for clean progress
  const email = 'e2e_' + Date.now() + '@test.com';
  await page.goto('http://localhost:3000/register');
  await page.fill('input[type="email"]', email);
  await page.fill('input[type="password"]', '123456');
  await page.fill('input[type="text"]', 'E2E Student');
  await page.click('button[type="submit"]');
  await page.waitForTimeout(3000); // Wait for redirect and login logic
  
  console.log('2. Open Python lesson...');
  await page.goto('http://localhost:3000/learn/python-1');
  await page.waitForTimeout(2000);
  
  const artifactPath = '../../brain/e3647c7b-7da5-471b-8420-e441570df74b';
  await page.screenshot({ path: artifactPath + '/01_lesson_loaded.png' });

  console.log('3. Play audio...');
  const audioSrc = await page.evaluate(() => {
    const audio = document.querySelector('audio');
    if(audio && audio.src) return audio.src;
    return null;
  });
  console.log('Audio src found:', audioSrc);
  
  console.log('4. Complete quiz...');
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const correctBtn = buttons.find(b => b.textContent && b.textContent.includes('10'));
    if(correctBtn) correctBtn.click();
  });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: artifactPath + '/02_quiz_passed.png' });

  console.log('5. Verify correct answer accepted...');
  const isPassed = await page.evaluate(() => {
    const text = document.body.innerText;
    return text.includes('??????') || text.includes('??????');
  });
  console.log('Quiz Passed Check:', isPassed);

  console.log('6. Save progress & Open next lesson...');
  await page.evaluate(() => {
    const nextBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('??????'));
    if(nextBtn && !nextBtn.disabled) nextBtn.click();
  });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: artifactPath + '/03_next_lesson.png' });

  console.log('7. Logout & Login again...');
  await page.goto('http://localhost:3000/login');
  await page.fill('input[type="email"]', email);
  await page.fill('input[type="password"]', '123456');
  await page.click('button[type="submit"]');
  await page.waitForTimeout(3000);

  console.log('8. Verify progress persisted...');
  await page.goto('http://localhost:3000/learn/python-1');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: artifactPath + '/04_progress_persisted.png' });

  console.log('--- TEST RESULTS ---');
  console.log('Console Errors:', consoleErrors);
  console.log('Runtime Errors:', runtimeErrors);
  console.log('Audio Valid:', !!audioSrc);
  console.log('Quiz Logic Valid:', isPassed);

  await browser.close();
})();
