const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn, exec } = require('child_process');

const PORT = 8080;
let devProcess = null;
let activeClients = [];

// Helper to broadcast terminal logs to connected SSE clients
function logToClients(data) {
  const message = data.toString();
  activeClients.forEach(client => {
    client.write(`data: ${JSON.stringify({ log: message })}\n\n`);
  });
}

// Helper to scan files recursively
function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git' && file !== '.vercel') {
        getFiles(filePath, fileList);
      }
    } else {
      const ext = path.extname(file);
      if (['.tsx', '.ts', '.css', '.js', '.json', '.cjs', '.html', '.md', '.bat'].includes(ext)) {
        fileList.push(path.relative(__dirname, filePath).replace(/\\/g, '/'));
      }
    }
  });
  return fileList;
}

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const { pathname } = parsedUrl;
  const method = req.method;

  // 1. Serve SSE stream for logs
  if (pathname === '/api/logs' && method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*'
    });
    
    activeClients.push(res);
    req.on('close', () => {
      activeClients = activeClients.filter(c => c !== res);
    });
    return;
  }

  // 2. Get file list
  if (pathname === '/api/files' && method === 'GET') {
    try {
      const files = getFiles(__dirname);
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ files }));
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: e.message }));
    }
    return;
  }

  // 3. Read file content
  if (pathname === '/api/file/read' && method === 'GET') {
    try {
      const filePath = parsedUrl.searchParams.get('path');
      if (!filePath) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'مسار الملف مطلوب' }));
        return;
      }
      const resolvedPath = path.resolve(__dirname, filePath);
      if (!resolvedPath.startsWith(__dirname)) {
        res.writeHead(403, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'غير مسموح بالوصول خارج مجلد المشروع' }));
        return;
      }
      const content = fs.readFileSync(resolvedPath, 'utf8');
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ content }));
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: e.message }));
    }
    return;
  }

  // 4. Write file content
  if (pathname === '/api/file/write' && method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const { filePath, content } = JSON.parse(body);
        if (!filePath) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'مسار الملف ومحتواه مطلوبان' }));
          return;
        }
        const resolvedPath = path.resolve(__dirname, filePath);
        if (!resolvedPath.startsWith(__dirname)) {
          res.writeHead(403, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'غير مسموح بالكتابة خارج مجلد المشروع' }));
          return;
        }
        fs.writeFileSync(resolvedPath, content, 'utf8');
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: true }));
      } catch (e) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: e.message }));
      }
    });
    return;
  }

  // 5. Run Dev Server
  if (pathname === '/api/run/dev' && method === 'POST') {
    if (devProcess) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'سيرفر التطوير يعمل بالفعل' }));
      return;
    }

    logToClients('\n>>> بدء تشغيل سيرفر التطوير المحلي (npm run dev)...\n');
    devProcess = spawn('npm', ['run', 'dev'], { shell: true });

    devProcess.stdout.on('data', (data) => logToClients(data));
    devProcess.stderr.on('data', (data) => logToClients(data));
    devProcess.on('close', (code) => {
      logToClients(`\n>>> توقف سيرفر التطوير المحلي بكود: ${code}\n`);
      devProcess = null;
    });

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true }));
    return;
  }

  // 6. Stop Dev Server
  if (pathname === '/api/stop/dev' && method === 'POST') {
    if (!devProcess) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'سيرفر التطوير متوقف بالفعل' }));
      return;
    }

    logToClients('\n>>> جاري إيقاف سيرفر التطوير المحلي...\n');
    exec(`taskkill /pid ${devProcess.pid} /T /F`, (err) => {
      if (err) {
        devProcess.kill();
      }
      devProcess = null;
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true }));
    });
    return;
  }

  // 7. Run Build
  if (pathname === '/api/run/build' && method === 'POST') {
    logToClients('\n>>> جاري بدء بناء وفحص المشروع (npm run build)...\n');
    const buildProcess = spawn('npm', ['run', 'build'], { shell: true });

    buildProcess.stdout.on('data', (data) => logToClients(data));
    buildProcess.stderr.on('data', (data) => logToClients(data));
    buildProcess.on('close', (code) => {
      logToClients(`\n>>> انتهت عملية البناء بكود: ${code} ${code === 0 ? '✓ تم البناء بنجاح!' : '✗ فشل البناء!'}\n`);
    });

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true }));
    return;
  }

  // 8. Deploy to Production
  if (pathname === '/api/run/deploy' && method === 'POST') {
    logToClients('\n>>> جاري نشر التحديثات للموقع الفعلي (npx vercel --prod --yes)...\n');
    const deployProcess = spawn('npx', ['vercel', '--prod', '--yes'], { shell: true });

    deployProcess.stdout.on('data', (data) => logToClients(data));
    deployProcess.stderr.on('data', (data) => logToClients(data));
    deployProcess.on('close', (code) => {
      logToClients(`\n>>> انتهى النشر بكود: ${code} ${code === 0 ? '✓ تم تحديث الموقع الفعلي ونشره بنجاح!' : '✗ فشل النشر!'}\n`);
    });

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true }));
    return;
  }

  // 9. Get status
  if (pathname === '/api/status' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      devRunning: !!devProcess
    }));
    return;
  }

  // 10. Serve Beautiful UI
  if (pathname === '/' || pathname === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>لوحة التحكم البرمجية الفخمة - SVK Academy</title>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;800;900&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #030308;
      --card-bg: rgba(10, 10, 25, 0.75);
      --primary: #10b981;
      --primary-glow: rgba(16, 185, 129, 0.25);
      --purple: #8b5cf6;
      --purple-glow: rgba(139, 92, 246, 0.25);
      --cyan: #06b6d4;
      --cyan-glow: rgba(6, 182, 212, 0.25);
      --text: #f1f5f9;
      --text-muted: #64748b;
      --border: rgba(255, 255, 255, 0.05);
    }
    
    * {
      box-sizing: border-box;
      font-family: 'Cairo', system-ui, sans-serif;
    }
    
    body {
      background: var(--bg);
      color: var(--text);
      margin: 0;
      padding: 0;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow-x: hidden;
    }

    /* Animated background */
    .bg-glows {
      position: absolute;
      inset: 0;
      z-index: 0;
      overflow: hidden;
      pointer-events: none;
    }
    .glow {
      position: absolute;
      border-radius: 50%;
      filter: blur(140px);
      opacity: 0.12;
    }
    .glow-1 {
      width: 500px; height: 500px;
      background: var(--primary);
      top: -150px; right: -150px;
      animation: float 10s infinite alternate;
    }
    .glow-2 {
      width: 600px; height: 600px;
      background: var(--purple);
      bottom: -200px; left: -200px;
      animation: float 14s infinite alternate-reverse;
    }
    @keyframes float {
      0% { transform: translate(0, 0); }
      100% { transform: translate(50px, 50px); }
    }

    .container {
      position: relative;
      z-index: 10;
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
      padding: 24px;
      display: flex;
      flex-direction: column;
      height: 100vh;
      overflow: hidden;
    }

    .header-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 16px 24px;
      backdrop-filter: blur(20px);
      box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    }

    .branding {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    
    .logo {
      font-size: 2rem;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.08); }
    }

    h1 {
      font-size: 1.4rem;
      font-weight: 900;
      margin: 0;
      background: linear-gradient(90deg, #fff, #c4b5fd, #93c5fd);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .subtitle {
      color: var(--text-muted);
      font-size: 0.8rem;
      margin-top: 2px;
    }

    .controls-row {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      border-radius: 30px;
      font-size: 0.8rem;
      font-weight: 700;
      margin-left: 12px;
    }
    .status-active {
      background: rgba(16, 185, 129, 0.12);
      border: 1px solid rgba(16, 185, 129, 0.3);
      color: #10b981;
    }
    .status-inactive {
      background: rgba(239, 68, 68, 0.12);
      border: 1px solid rgba(239, 68, 68, 0.3);
      color: #ef4444;
    }

    .btn {
      padding: 10px 20px;
      border: none;
      border-radius: 10px;
      font-size: 0.85rem;
      font-weight: 800;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: all 0.2s;
      color: #fff;
    }

    .btn-dev {
      background: linear-gradient(135deg, #10b981, #059669);
      box-shadow: 0 4px 15px var(--primary-glow);
    }
    .btn-dev:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px #10b981;
    }
    
    .btn-stop {
      background: linear-gradient(135deg, #ef4444, #dc2626);
      box-shadow: 0 4px 15px rgba(239, 68, 68, 0.2);
    }
    .btn-stop:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px #ef4444;
    }

    .btn-build {
      background: linear-gradient(135deg, #8b5cf6, #7c3aed);
      box-shadow: 0 4px 15px var(--purple-glow);
    }
    .btn-build:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px var(--purple);
    }

    .btn-deploy {
      background: linear-gradient(135deg, #06b6d4, #0891b2);
      box-shadow: 0 4px 15px var(--cyan-glow);
    }
    .btn-deploy:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px var(--cyan);
    }

    /* main workspace split layout */
    .workspace-pane {
      display: grid;
      grid-template-columns: 320px 1fr;
      gap: 16px;
      flex: 1;
      min-height: 0; /* Important for scroll */
      margin-bottom: 16px;
    }

    /* Sidebar explorer */
    .explorer-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 20px;
      backdrop-filter: blur(20px);
      box-shadow: 0 8px 32px rgba(0,0,0,0.3);
      display: flex;
      flex-direction: column;
      min-height: 0;
    }

    .explorer-header {
      font-size: 1rem;
      font-weight: 800;
      margin-bottom: 12px;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 8px;
      border-bottom: 1px solid rgba(255,255,255,0.05);
      padding-bottom: 10px;
    }

    .search-bar {
      background: rgba(0, 0, 0, 0.4);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 8px 12px;
      color: #fff;
      font-size: 0.85rem;
      outline: none;
      width: 100%;
      margin-bottom: 12px;
      transition: all 0.2s;
    }
    .search-bar:focus {
      border-color: var(--primary);
    }

    .file-list {
      flex: 1;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding-left: 4px;
    }

    .file-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 12px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 0.8rem;
      color: #cbd5e1;
      background: rgba(255,255,255,0.01);
      border: 1px solid transparent;
      transition: all 0.2s;
      direction: ltr;
      text-align: left;
    }
    
    .file-item:hover {
      background: rgba(255,255,255,0.04);
      color: #fff;
      border-color: rgba(255,255,255,0.05);
      transform: translateX(-2px);
    }

    .file-item.active {
      background: rgba(16, 185, 129, 0.1);
      border-color: rgba(16, 185, 129, 0.2);
      color: #10b981;
      font-weight: 700;
    }

    .file-badge {
      font-size: 0.65rem;
      font-weight: 800;
      padding: 2px 6px;
      border-radius: 4px;
      background: rgba(255,255,255,0.08);
      color: #94a3b8;
    }
    .badge-tsx { background: rgba(99,102,241,0.15); color: #818cf8; }
    .badge-css { background: rgba(6,182,212,0.15); color: #22d3ee; }
    .badge-js { background: rgba(245,158,11,0.15); color: #fbbf24; }

    /* Editor workspace */
    .editor-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 16px;
      backdrop-filter: blur(20px);
      box-shadow: 0 8px 32px rgba(0,0,0,0.3);
      display: flex;
      flex-direction: column;
      min-height: 0;
      overflow: hidden;
    }

    .editor-header-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 20px;
      background: rgba(0, 0, 0, 0.3);
      border-bottom: 1px solid var(--border);
    }

    .open-file-title {
      font-family: 'Fira Code', monospace;
      font-size: 0.85rem;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 8px;
      direction: ltr;
    }

    .btn-save {
      background: linear-gradient(135deg, #10b981, #059669);
      border: none;
      color: #000;
      padding: 6px 16px;
      border-radius: 6px;
      font-weight: 700;
      cursor: pointer;
      font-size: 0.8rem;
      display: flex;
      align-items: center;
      gap: 6px;
      font-family: 'Cairo', sans-serif;
    }

    #editor-container {
      flex: 1;
      width: 100%;
      min-height: 0;
    }

    /* Terminal logs pane */
    .console-card {
      background: rgba(3, 3, 8, 0.96);
      border: 1px solid rgba(16, 185, 129, 0.15);
      border-radius: 16px;
      padding: 16px;
      box-shadow: inset 0 0 20px rgba(0,0,0,0.8);
      display: flex;
      flex-direction: column;
      height: 180px;
      flex-shrink: 0;
    }

    .console-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      padding-bottom: 8px;
      margin-bottom: 10px;
    }

    .console-title {
      font-size: 0.8rem;
      font-weight: 800;
      color: var(--primary);
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .btn-clear {
      background: transparent;
      border: 1px solid rgba(255,255,255,0.1);
      color: #94a3b8;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 0.7rem;
      cursor: pointer;
      transition: all 0.2s;
    }
    .btn-clear:hover {
      background: rgba(255,255,255,0.05);
      color: #fff;
    }

    .console-body {
      flex: 1;
      overflow-y: auto;
      font-family: 'Fira Code', 'Courier New', monospace;
      font-size: 0.75rem;
      line-height: 1.5;
      color: #10b981;
      text-align: left;
      direction: ltr;
      white-space: pre-wrap;
      padding: 8px;
      background: rgba(0,0,0,0.4);
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <div class="bg-glows">
    <div class="glow glow-1"></div>
    <div class="glow glow-2"></div>
  </div>

  <div class="container">
    {/* Header bar */}
    <div class="header-bar">
      <div class="branding">
        <span class="logo">🛠️</span>
        <div>
          <h1>لوحة التحكم المطورية (SVK Control Center)</h1>
          <div class="subtitle">تعديل ملفات الكود، فحص وبناء المشروع، وتحديث السيرفر المحلي والإنتاج</div>
        </div>
        <span id="dev-status" class="status-badge status-inactive">متوقف</span>
      </div>

      <div class="controls-row">
        <button id="btn-dev" class="btn btn-dev" onclick="toggleDevServer()">تشغيل السيرفر المحلي ▶</button>
        <button class="btn btn-build" onclick="runBuild()">بناء وفحص المشروع ⚙️</button>
        <button class="btn btn-deploy" onclick="runDeploy()">نشر وتحديث الموقع الفعلي 🚀</button>
      </div>
    </div>

    {/* Split workspace */}
    <div class="workspace-pane">
      {/* File Explorer */}
      <div class="explorer-card">
        <div class="explorer-header">
          <span>📁</span>
          <span>شجرة ملفات الأكاديمية</span>
        </div>
        <input type="text" id="search-input" class="search-bar" placeholder="بحث عن ملف..." oninput="filterFiles()">
        <div id="file-list" class="file-list">
          جاري تحميل شجرة الملفات...
        </div>
      </div>

      {/* Code Editor */}
      <div class="editor-card">
        <div class="editor-header-bar">
          <div class="open-file-title">
            <span>📝</span>
            <span id="open-file-name">يرجى اختيار ملف لتعديل الكود من القائمة اليمنى</span>
          </div>
          <button id="btn-save" class="btn-save" style="display: none;" onclick="saveFile()">💾 حفظ التعديلات</button>
        </div>
        <div id="editor-container"></div>
      </div>
    </div>

    {/* Console Output */}
    <div class="console-card">
      <div class="console-header">
        <div class="console-title">
          <span>🖥️</span>
          <span>شاشة مخرجات الخادم (Terminal Output)</span>
        </div>
        <button class="btn-clear" onclick="clearConsole()">مسح الشاشة</button>
      </div>
      <div id="console-body" class="console-body">لوحة التحكم جاهزة...</div>
    </div>
  </div>

  {/* Load Monaco Editor CDN */}
  <script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js"></script>
  <script>
    const consoleBody = document.getElementById('console-body');
    const devStatus = document.getElementById('dev-status');
    const btnDev = document.getElementById('btn-dev');
    const fileListContainer = document.getElementById('file-list');
    const openFileName = document.getElementById('open-file-name');
    const btnSave = document.getElementById('btn-save');
    const searchInput = document.getElementById('search-input');

    let devRunning = false;
    let editor = null;
    let currentFilePath = null;
    let allFiles = [];

    // Load Monaco Editor
    require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.39.0/min/vs' } });
    require(['vs/editor/editor.main'], function () {
      editor = monaco.editor.create(document.getElementById('editor-container'), {
        value: '// اختر ملفاً من القائمة الجانبية لعرض وتعديل الكود...\n// Choose a file from the explorer list to view or edit code...',
        language: 'plaintext',
        theme: 'vs-dark',
        automaticLayout: true,
        fontSize: 14,
        fontFamily: "'Fira Code', Courier, monospace",
        minimap: { enabled: true },
        scrollBeyondLastLine: false,
        padding: { top: 12, bottom: 12 }
      });
    });

    // Connect to SSE log stream
    const eventSource = new EventSource('/api/logs');
    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.log) {
        appendLog(data.log);
      }
    };

    function appendLog(text) {
      consoleBody.textContent += text;
      consoleBody.scrollTop = consoleBody.scrollHeight;
    }

    function clearConsole() {
      consoleBody.textContent = 'تم مسح الشاشة...\n';
    }

    // Load files tree
    async function loadFiles() {
      try {
        const res = await fetch('/api/files');
        const data = await res.json();
        allFiles = data.files || [];
        renderFiles(allFiles);
      } catch (err) {
        fileListContainer.innerHTML = 'فشل في تحميل شجرة الملفات.';
      }
    }

    function renderFiles(files) {
      fileListContainer.innerHTML = '';
      if (files.length === 0) {
        fileListContainer.innerHTML = 'لا توجد ملفات متطابقة.';
        return;
      }

      files.forEach(file => {
        const item = document.createElement('div');
        item.className = 'file-item';
        if (currentFilePath === file) {
          item.className += ' active';
        }
        item.onclick = () => loadFileContent(file);

        // Get extension badge
        const ext = file.split('.').pop();
        const badge = document.createElement('span');
        badge.className = 'file-badge';
        if (['tsx', 'ts'].includes(ext)) badge.className += ' badge-tsx';
        else if (ext === 'css') badge.className += ' badge-css';
        else if (ext === 'js' || ext === 'cjs') badge.className += ' badge-js';
        badge.textContent = ext.toUpperCase();

        const label = document.createElement('span');
        label.textContent = file;

        item.appendChild(badge);
        item.appendChild(label);
        fileListContainer.appendChild(item);
      });
    }

    function filterFiles() {
      const query = searchInput.value.toLowerCase();
      const filtered = allFiles.filter(f => f.toLowerCase().includes(query));
      renderFiles(filtered);
    }

    // Load file content to editor
    async function loadFileContent(filePath) {
      if (!editor) return;
      try {
        appendLog(`\\n[Explorer] جاري فتح الملف: ${filePath}...\\n`);
        const res = await fetch(\`/api/file/read?path=\${encodeURIComponent(filePath)}\`);
        const data = await res.json();
        
        currentFilePath = filePath;
        openFileName.textContent = filePath;
        btnSave.style.display = 'flex';

        // Select language mode dynamically
        const ext = filePath.split('.').pop();
        let lang = 'plaintext';
        if (['tsx', 'ts'].includes(ext)) lang = 'typescript';
        else if (ext === 'js' || ext === 'cjs') lang = 'javascript';
        else if (ext === 'css') lang = 'css';
        else if (ext === 'json') lang = 'json';
        else if (ext === 'html') lang = 'html';
        else if (ext === 'md') lang = 'markdown';
        else if (ext === 'bat') lang = 'bat';

        const model = monaco.editor.createModel(data.content, lang);
        editor.setModel(model);

        // Highlight active explorer item
        const items = document.querySelectorAll('.file-item');
        items.forEach(item => {
          if (item.lastChild.textContent === filePath) {
            item.className = 'file-item active';
          } else {
            item.className = 'file-item';
          }
        });

      } catch (err) {
        appendLog(`\\n[Error] فشل في فتح الملف: \${err.message}\\n`);
      }
    }

    // Save edited code
    async function saveFile() {
      if (!editor || !currentFilePath) return;
      const content = editor.getValue();
      try {
        appendLog(`\\n[Editor] جاري حفظ التعديلات على الملف: ${currentFilePath}...\\n`);
        const res = await fetch('/api/file/write', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ filePath: currentFilePath, content })
        });
        const data = await res.json();
        if (res.ok) {
          appendLog(`✓ تم حفظ التعديلات بنجاح!\\n`);
        } else {
          appendLog(`✗ فشل الحفظ: \${data.error}\\n`);
        }
      } catch (err) {
        appendLog(`\\n[Error] حدث خطأ أثناء الحفظ: \${err.message}\\n`);
      }
    }

    // Check dev server status
    async function checkStatus() {
      try {
        const res = await fetch('/api/status');
        const data = await res.json();
        devRunning = data.devRunning;
        
        if (devRunning) {
          devStatus.textContent = 'نشط (يعمل)';
          devStatus.className = 'status-badge status-active';
          btnDev.textContent = 'إيقاف السيرفر المحلي ⏹';
          btnDev.className = 'btn btn-stop';
        } else {
          devStatus.textContent = 'متوقف';
          devStatus.className = 'status-badge status-inactive';
          btnDev.textContent = 'تشغيل السيرفر المحلي ▶';
          btnDev.className = 'btn btn-dev';
        }
      } catch (err) {
        console.error(err);
      }
    }

    async function toggleDevServer() {
      const endpoint = devRunning ? '/api/stop/dev' : '/api/run/dev';
      try {
        const res = await fetch(endpoint, { method: 'POST' });
        if (res.ok) {
          setTimeout(checkStatus, 1000);
        }
      } catch (err) {
        appendLog('\\nحدث خطأ أثناء الاتصال بالخادم\\n');
      }
    }

    async function runBuild() {
      try {
        await fetch('/api/run/build', { method: 'POST' });
      } catch (err) {
        appendLog('\\nحدث خطأ أثناء محاولة بناء المشروع\\n');
      }
    }

    async function runDeploy() {
      if (!confirm('هل تريد فعلاً رفع ونشر التحديثات البرمجية الحالية للموقع المباشر؟')) return;
      try {
        await fetch('/api/run/deploy', { method: 'POST' });
      } catch (err) {
        appendLog('\\nحدث خطأ أثناء محاولة النشر\\n');
      }
    }

    // Initial load
    loadFiles();
    setInterval(checkStatus, 3000);
    checkStatus();
  </script>
</body>
</html>`);
  }
});

server.listen(PORT, () => {
  console.log(`Control Center server running at http://localhost:${PORT}`);
  const openCmd = process.platform === 'win32' ? 'start' : process.platform === 'darwin' ? 'open' : 'xdg-open';
  exec(`${openCmd} http://localhost:${PORT}`);
});
