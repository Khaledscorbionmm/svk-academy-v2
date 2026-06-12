const fs = require('fs');
const path = require('path');

const filesToFix = [
  'src/app/api/admin/lessons/[lessonId]/route.ts',
  'src/app/api/admin/payments/route.ts',
  'src/app/api/admin/pending-counts/route.ts',
  'src/app/api/admin/qa/route.ts',
  'src/app/api/admin/radar/route.ts',
  'src/app/api/admin/requests/approve/route.ts',
  'src/app/api/admin/requests/route.ts',
  'src/app/api/admin/students/enroll/route.ts',
  'src/app/api/admin/students/route.ts'
];

for (const file of filesToFix) {
  let content = fs.readFileSync(file, 'utf8');
  
  // 1. Remove next-auth imports
  content = content.replace(/import\s*\{\s*getServerSession\s*\}\s*from\s*['"]next-auth['"];?/g, '');
  content = content.replace(/import\s*\{\s*authOptions\s*\}\s*from\s*['"]@\/app\/api\/auth\/\[\.\.\.nextauth\]\/route['"];?/g, '');
  
  // 2. Add our auth import if not present
  if (!content.includes("import { verifyToken")) {
      content = "import { verifyToken, COOKIE_NAME } from '@/lib/auth';\n" + content;
  }
  
  // 3. Find the parameter name (req or request)
  let reqName = 'request';
  if (content.match(/export\s+async\s+function\s+(GET|POST|PUT|DELETE)\s*\(\s*req\s*:/)) {
      reqName = 'req';
  } else if (content.match(/export\s+async\s+function\s+(GET|POST|PUT|DELETE)\s*\(\s*request\s*:/)) {
      reqName = 'request';
  } else {
      console.log('Could not find req/request in', file);
  }

  // 4. Replace session retrieval
  const sessionRetrievalRegex = /const\s+session\s*=\s*await\s+getServerSession\(authOptions\);?/g;
  content = content.replace(sessionRetrievalRegex, `const token = ${reqName}.cookies.get(COOKIE_NAME)?.value;
    const decoded = token ? verifyToken(token) : null;`);
    
  // 5. Replace session checks
  content = content.replace(/!session\s*\|\|\s*!session\.user\s*\|\|\s*\(session\.user\s+as\s+any\)\.role\s*!==\s*'admin'/g,
      `!decoded || decoded.role !== 'admin'`);
  content = content.replace(/!session\s*\|\|\s*!session\.user\s*\|\|\s*session\.user\.role\s*!==\s*'admin'/g,
      `!decoded || decoded.role !== 'admin'`);
  content = content.replace(/!session\s*\|\|\s*!session\.user/g, `!decoded`);

  fs.writeFileSync(file, content);
  console.log('Fixed', file);
}
