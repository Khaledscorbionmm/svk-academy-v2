import fs from 'fs';

const p = 'src/app/learn/[lessonId]/page.tsx';
let content = fs.readFileSync(p, 'utf8');

// 1. Update state definition
content = content.replace(
  "useState<'workspace' | 'quiz'>('workspace');",
  "useState<'workspace' | 'quiz' | 'macro_exam'>('workspace');"
);

// 2. Add the Macro Exam tab button
const quizTabString = `{examObj && (
            <button 
              className="header-tab-btn"
              onClick={() => setActiveTab('quiz')}`;

const macroExamTabString = `
          {isMacroExamDue && (
            <button 
              className="header-tab-btn"
              onClick={() => setActiveTab('macro_exam')} 
              style={{ 
                background: activeTab === 'macro_exam' ? 'rgba(16,185,129,0.15)' : 'transparent', 
                border: 'none', 
                color: activeTab === 'macro_exam' ? '#10b981' : '#94a3b8', 
                padding: '8px 20px', 
                borderRadius: '8px', 
                cursor: 'pointer', 
                fontFamily: "'Cairo', sans-serif", 
                fontSize: '0.9rem', 
                fontWeight: 700, 
                transition: 'all 0.2s', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                whiteSpace: 'nowrap'
              }}
            >
              <span className="desktop-text">🏆 اختبار المايلستون</span>
              <span className="mobile-text">🏆 اختبار</span>
            </button>
          )}
          `;

content = content.replace(quizTabString, macroExamTabString + quizTabString);

// 3. Add the Macro Exam view logic
const workspaceStart = `          ) : activeTab === 'workspace' ? (`;

const macroExamViewString = `          ) : activeTab === 'macro_exam' ? (
            <div style={{ flex: 1, overflowY: 'auto' }}>
              <SmartExamView 
                track={track} 
                milestone={milestone} 
                onPass={() => {
                  if (typeof window !== 'undefined') {
                    localStorage.setItem(\`svk_macro_exam_\${track}_\${milestone}\`, 'passed');
                  }
                  setMacroExamPassed(true);
                  setActiveTab('workspace');
                }} 
                onExit={() => setActiveTab('workspace')} 
              />
            </div>
`;

content = content.replace(workspaceStart, macroExamViewString + workspaceStart);

fs.writeFileSync(p, content, 'utf8');
console.log('Patched page.tsx successfully.');
