const fs = require('fs');
const file = 'src/app/learn/[lessonId]/page.tsx';
let code = fs.readFileSync(file, 'utf8');

// 1. Update the tabs in header
code = code.replace(
  /<span className="desktop-text">💻 مساحة التطبيق العملي \(4 لوحات\)<\/span>/g,
  '{isLanguage ? <span className="desktop-text">📖 مساحة الدرس والتعلم</span> : <span className="desktop-text">💻 مساحة التطبيق العملي (4 لوحات)</span>}'
);
code = code.replace(
  /<span className="mobile-text">💻 التطبيق<\/span>/g,
  '{isLanguage ? <span className="mobile-text">📖 الدرس</span> : <span className="mobile-text">💻 التطبيق</span>}'
);

// 2. Hide Mobile Workspace Tabs for Syntax/Editor
const syntaxBtnRegex = /<button[\s\S]*?onClick=\{\(\) => setActiveWorkspaceTab\('syntax'\)\}[\s\S]*?💡 القاموس\s*<\/button>/g;
const editorBtnRegex = /<button[\s\S]*?onClick=\{\(\) => setActiveWorkspaceTab\('editor'\)\}[\s\S]*?💻 التجربة\s*<\/button>/g;

const matchSyntax = code.match(syntaxBtnRegex);
const matchEditor = code.match(editorBtnRegex);

if (matchSyntax && matchEditor) {
  code = code.replace(syntaxBtnRegex, '{!isLanguage && (\n' + matchSyntax[0]);
  code = code.replace(editorBtnRegex, matchEditor[0] + '\n)}');
}

// 3. Hide Panel 2 (Syntax)
const panel2StartRegex = /<section className=\{`workspace-panel \$\{activeWorkspaceTab === 'syntax' \? 'active-panel' : 'hidden-panel'\}`\}[\s\S]*?بنية الكود البرمجي وشرحه[\s\S]*?<\/section>/g;
// Panel 2 is very large because it contains SYNTAX_DICTIONARY map. So regex might fail or take too much memory.

fs.writeFileSync('scratch/update_ui_temp.js', 'console.log("ready");');
