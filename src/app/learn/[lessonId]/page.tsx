'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function getCodeExample(cat: string, idx: any) {
  if (cat === 'python') return `print("مثال عملي للدرس ${idx}")`;
  return `console.log("مثال عملي للدرس ${idx}");`;
}

export default function LearnPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const router = useRouter();
  const { lessonId } = use(params);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [sidebar, setSidebar] = useState(true);
  
  // Interactive Code Playground States
  const [code, setCode] = useState('');
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [practiceStatus, setPracticeStatus] = useState<'idle' | 'success' | 'fail'>('idle');

  // Exam States
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [activeTab, setActiveTab] = useState<'workspace' | 'quiz'>('workspace');

  useEffect(() => {
    async function fetchLesson() {
      try {
        const res = await fetch(`/api/lessons/${lessonId}`);
        if (res.ok) {
          const json = await res.json();
          setData(json);
          setCode(json.lesson.code_template || '');
          setConsoleOutput([]);
          setPracticeStatus('idle');
          setShowResults(false);
          setAnswers({});
          setActiveTab('workspace');
        } else {
          router.push('/courses');
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchLesson();
  }, [lessonId]);

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: '#020205', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '60px', height: '60px', border: '3px solid rgba(16,185,129,0.1)', borderTopColor: '#10b981', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (!data) return null;

  const { lesson, course, sidebar: sideLessons } = data;

  let examObj = null;
  if (lesson.exam_data) {
    examObj = typeof lesson.exam_data === 'string' ? JSON.parse(lesson.exam_data) : lesson.exam_data;
  }

  // Find index of current lesson in sidebar
  const currentIdx = sideLessons.findIndex((l: any) => Number(l.id) === Number(lessonId));
  const prevLesson = currentIdx > 0 ? sideLessons[currentIdx - 1] : null;
  const nextLesson = currentIdx < sideLessons.length - 1 ? sideLessons[currentIdx + 1] : null;

  // Run Code Logic
  const handleRunCode = () => {
    setIsRunning(true);
    setConsoleOutput([]);
    
    setTimeout(() => {
      try {
        const outputs: string[] = [];
        
        if (course.category === 'javascript') {
          // Safe eval capturing console.log
          const originalLog = console.log;
          console.log = (...args) => {
            outputs.push(args.join(' '));
          };
          
          try {
            // Run JS code
            const fn = new Function(code);
            fn();
          } catch (err: any) {
            outputs.push(`Error: ${err.message}`);
          } finally {
            console.log = originalLog;
          }
        } else if (course.category === 'python') {
          // Simple python print statement parser mockup
          const lines = code.split('\n');
          lines.forEach(line => {
            const trimmed = line.trim();
            if (trimmed.startsWith('print(')) {
              const matches = trimmed.match(/print\((['"])(.*?)\1\)/);
              if (matches && matches[2]) {
                outputs.push(matches[2]);
              }
            }
          });
          if (outputs.length === 0) {
            outputs.push('Code executed successfully. No output returned.');
          }
        } else {
          // Fallback static output
          outputs.push(lesson.practice_expected || 'Code executed successfully!');
        }

        setConsoleOutput(outputs);

        // Verify output
        const expected = (lesson.practice_expected || '').trim();
        const matched = outputs.some(out => out.trim().includes(expected));
        
        if (matched) {
          setPracticeStatus('success');
        } else {
          setPracticeStatus('fail');
        }

      } catch (e: any) {
        setConsoleOutput([`Error: ${e.message}`]);
        setPracticeStatus('fail');
      } finally {
        setIsRunning(false);
      }
    }, 600);
  };

  const handleExamSubmit = () => {
    let correct = 0;
    examObj.questions.forEach((q: any, i: number) => {
      if (answers[i] === q.correctAnswer) correct++;
    });
    setScore(correct);
    setShowResults(true);
  };

  return (
    <div style={{ fontFamily: "'Cairo', sans-serif", direction: 'rtl', background: '#020205', color: '#e2e8f0', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet" />

      {/* Header */}
      <header style={{ borderBottom: '1px solid rgba(16,185,129,0.1)', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(5,5,10,0.95)', backdropFilter: 'blur(20px)', height: 70, flexShrink: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button onClick={() => setSidebar(!sidebar)} style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', color: '#10b981', width: 40, height: 40, borderRadius: '10px', cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>☰</button>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{course.title_ar || course.title}</span>
            <span style={{ fontSize: '1rem', fontWeight: 800, color: '#fff' }}>{lesson.title}</span>
          </div>
        </div>

        {/* Tab Controls */}
        <div style={{ display: 'flex', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '10px', padding: '4px' }}>
          <button onClick={() => setActiveTab('workspace')} style={{ background: activeTab === 'workspace' ? 'rgba(16,185,129,0.15)' : 'transparent', border: 'none', color: activeTab === 'workspace' ? '#10b981' : '#94a3b8', padding: '8px 20px', borderRadius: '8px', cursor: 'pointer', fontFamily: "'Cairo', sans-serif", fontSize: '0.9rem', fontWeight: 700, transition: 'all 0.2s' }}>
            💻 مساحة التطبيق العملي (4 لوحات)
          </button>
          {examObj && (
            <button onClick={() => setActiveTab('quiz')} style={{ background: activeTab === 'quiz' ? 'rgba(16,185,129,0.15)' : 'transparent', border: 'none', color: activeTab === 'quiz' ? '#10b981' : '#94a3b8', padding: '8px 20px', borderRadius: '8px', cursor: 'pointer', fontFamily: "'Cairo', sans-serif", fontSize: '0.9rem', fontWeight: 700, transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '8px' }}>
              🧠 اختبار الدرس 📝
            </button>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link href={`/courses/${lesson.course_id}`} style={{ textDecoration: 'none', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#e2e8f0', padding: '8px 16px', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 600, transition: 'all 0.2s' }}>خروج من الدرس</Link>
        </div>
      </header>

      {/* Main Container */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Navigation Sidebar */}
        {sidebar && (
          <aside style={{ width: 320, background: 'rgba(5,5,10,0.85)', borderLeft: '1px solid rgba(16,185,129,0.1)', overflowY: 'auto', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
            <div style={{ padding: '24px 20px', borderBottom: '1px solid rgba(16,185,129,0.1)', background: 'rgba(16,185,129,0.02)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: 700 }}>التقدم الدراسي</span>
                <span style={{ fontSize: '0.85rem', color: '#64748b', fontFamily: 'monospace' }}>{currentIdx + 1} / {sideLessons.length}</span>
              </div>
              <div style={{ width: '100%', height: 6, background: 'rgba(255,255,255,0.05)', borderRadius: 3, overflow: 'hidden' }}>
                <div style={{ width: `${((currentIdx + 1) / sideLessons.length) * 100}%`, height: '100%', background: 'linear-gradient(90deg, #10b981, #059669)', borderRadius: 3 }} />
              </div>
            </div>
            
            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: 6 }}>
              {sideLessons.map((l: any, idx: number) => {
                const isActive = Number(l.id) === Number(lessonId);
                return (
                  <Link key={l.id} href={`/learn/${l.id}`} style={{ textDecoration: 'none' }}>
                    <div style={{
                      padding: '12px 16px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: 12,
                      background: isActive ? 'rgba(16,185,129,0.1)' : 'transparent',
                      border: isActive ? '1px solid rgba(16,185,129,0.2)' : '1px solid transparent',
                      color: isActive ? '#10b981' : '#94a3b8', transition: 'all 0.2s', cursor: 'pointer'
                    }}>
                      <div style={{ width: 24, height: 24, borderRadius: 6, background: isActive ? '#10b981' : 'rgba(255,255,255,0.05)', color: isActive ? '#000' : '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800 }}>
                        {idx + 1}
                      </div>
                      <span style={{ fontSize: '0.9rem', fontWeight: isActive ? 700 : 400, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>{l.title.replace(/الدرس \d+:\s*/, '')}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </aside>
        )}

        {/* Content Workspace */}
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
          {data.accessStatus === 'locked' ? (
            /* Locked Course Access Screen with WhatsApp Button */
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', background: 'radial-gradient(circle, rgba(16,185,129,0.03) 0%, transparent 70%)', overflowY: 'auto' }}>
              <div style={{
                maxWidth: '600px', width: '100%', background: 'rgba(5,5,10,0.7)', border: '1px solid rgba(16,185,129,0.2)',
                borderRadius: '24px', padding: '40px', textAlign: 'center', backdropFilter: 'blur(20px)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
              }}>
                <div style={{
                  width: '90px', height: '90px', borderRadius: '50%', background: 'rgba(239,68,68,0.1)',
                  border: '1px solid rgba(239,68,68,0.3)', color: '#f87171', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', fontSize: '3rem', margin: '0 auto 24px',
                  boxShadow: '0 0 30px rgba(239,68,68,0.2)', animation: 'pulse 2s infinite'
                }}>
                  🔒
                </div>
                
                <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: '16px' }}>هذا الدرس مدفوع ومحمي 🔒</h2>
                <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.8, marginBottom: '32px' }}>
                  عذراً، هذا المحتوى مخصص للطلاب المشتركين فقط. يرجى التواصل مع إدارة الأكاديمية لحجز الكورس وتفعيله على حسابك للبدء في التعلم فوراً.
                </p>

                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '20px', marginBottom: '32px', textAlign: 'right' }}>
                  <h4 style={{ margin: '0 0 12px', color: '#10b981', fontSize: '0.95rem', fontWeight: 800 }}>ميزات الاشتراك في الكورس الكامل:</h4>
                  <ul style={{ margin: 0, paddingRight: '20px', color: '#cbd5e1', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li>🔓 فتح جميع الدروس (100 درس كامل) مدى الحياة.</li>
                    <li>💻 إمكانية استخدام المحرر البرمجي التفاعلي وتشغيل الأكواد.</li>
                    <li>🧠 إجراء الاختبارات بعد كل درس والحصول على تصحيح فوري.</li>
                    <li>🏆 شهادة إتمام معتمدة عند إنهاء الكورس بنسبة 100%.</li>
                  </ul>
                </div>

                <a 
                  href={`https://wa.me/201034009418?text=${encodeURIComponent(
                    `مرحباً يا هندسة، أريد تفعيل كورس: "${course.title_ar || course.title}".\nبيانات حسابي المسجل بها:\n- الاسم: ${data.studentInfo?.name || ''}\n- الهاتف: ${data.studentInfo?.phone || ''}\n- البريد الإلكتروني: ${data.studentInfo?.email || ''}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <button style={{
                    width: '100%', padding: '16px', borderRadius: '14px', border: 'none',
                    background: 'linear-gradient(135deg, #25d366, #128c7e)', color: '#fff',
                    fontSize: '1.1rem', fontWeight: 800, cursor: 'pointer', fontFamily: "'Cairo', sans-serif",
                    boxShadow: '0 10px 25px rgba(37,211,102,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                    transition: 'all 0.3s'
                  }}>
                    💬 تواصل عبر الواتساب لحجز الكورس وتفعيله
                  </button>
                </a>
              </div>
            </div>
          ) : activeTab === 'workspace' ? (
            /* 4-Panel Grid Workspace */
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '12px', padding: '12px', height: '100%', overflow: 'hidden', background: '#020205' }}>
              
              {/* Panel 1: Written Explanation (الشرح النظري) */}
              <section style={{ background: 'rgba(5,5,10,0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '14px', padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '1.25rem' }}>📖</span>
                  <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#10b981' }}>لوحة الشرح النظري والكتابي</h3>
                </div>
                <div className="explanation-content" style={{ lineHeight: 1.8, fontSize: '0.95rem', color: '#cbd5e1' }} dangerouslySetInnerHTML={{ __html: lesson.text_content }} />
              </section>

              {/* Panel 2: Code & Syntax Explanation (الكود البرمجي وشرحه) */}
              <section style={{ background: 'rgba(5,5,10,0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '14px', padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '1.25rem' }}>💡</span>
                  <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#10b981' }}>بنية الكود البرمجي وشرحه</h3>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <pre style={{ margin: 0, background: 'rgba(0,0,0,0.4)', padding: '16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.03)', fontFamily: 'monospace', fontSize: '0.9rem', color: '#a78bfa', direction: 'ltr', textAlign: 'left', overflowX: 'auto' }}>
                    {lesson.code_example || getCodeExample(course.category, lessonId)}
                  </pre>
                  <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    {lesson.code_explanation || 'يوضح النموذج بالأعلى البنية الأساسية وكيفية استخدام المتغيرات والتعليمات البرمجية لتنفيذ هذا المفهوم بنجاح.'}
                  </p>
                </div>
              </section>

              {/* Panel 3: Interactive Practice Playground (بيئة التطبيق التفاعلية) */}
              <section style={{ background: 'rgba(5,5,10,0.6)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '14px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px', borderBottom: '1px solid rgba(16,185,129,0.1)', background: 'rgba(16,185,129,0.02)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: '1.25rem' }}>💻</span>
                    <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#10b981' }}>محرر الأكواد التفاعلي</h3>
                  </div>
                  <button onClick={handleRunCode} disabled={isRunning} style={{ background: 'linear-gradient(135deg, #10b981, #059669)', border: 'none', color: '#000', padding: '6px 16px', borderRadius: '6px', fontWeight: 700, cursor: 'pointer', fontFamily: "'Cairo', sans-serif", fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                    {isRunning ? 'جاري التشغيل...' : 'تشغيل الكود ▶'}
                  </button>
                </div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
                  <textarea
                    value={code}
                    onChange={e => setCode(e.target.value)}
                    style={{
                      flex: 1, width: '100%', background: 'rgba(0,0,0,0.3)', border: 'none', resize: 'none',
                      outline: 'none', color: '#10b981', padding: '16px', fontFamily: 'monospace', fontSize: '0.95rem',
                      direction: 'ltr', textAlign: 'left', lineHeight: 1.5
                    }}
                  />
                  
                  {/* Console output inside editor */}
                  <div style={{ height: '110px', background: 'rgba(0,0,0,0.6)', borderTop: '1px solid rgba(16,185,129,0.1)', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ background: 'rgba(255,255,255,0.02)', padding: '4px 16px', fontSize: '0.75rem', color: '#64748b', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      شاشة المخرجات (Console)
                    </div>
                    <div style={{ flex: 1, padding: '10px 16px', overflowY: 'auto', fontFamily: 'monospace', fontSize: '0.85rem', color: '#e2e8f0', direction: 'ltr', textAlign: 'left' }}>
                      {consoleOutput.length > 0 ? (
                        consoleOutput.map((out, idx) => (
                          <div key={idx} style={{ color: out.startsWith('Error') ? '#ef4444' : '#10b981' }}>{out}</div>
                        ))
                      ) : (
                        <div style={{ color: '#475569' }}>اضغط على "تشغيل الكود" لعرض النتيجة هنا...</div>
                      )}
                    </div>
                  </div>
                </div>
              </section>

              {/* Panel 4: Ready Example & Instructions (إرشادات التطبيق) */}
              <section style={{ background: 'rgba(5,5,10,0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '14px', padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '1.25rem' }}>🎯</span>
                  <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#10b981' }}>إرشادات التطبيق والمخرجات</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '10px', padding: '16px' }}>
                    <h5 style={{ margin: '0 0 8px', fontSize: '0.9rem', color: '#fff' }}>المطلوب منك:</h5>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.6 }}>{lesson.practice_instructions || 'يرجى كتابة وتعديل الكود البرمجي ليعطي المخرج المطلوب بدقة.'}</p>
                  </div>
                  
                  <div style={{ background: 'rgba(16,185,129,0.03)', border: '1px solid rgba(16,185,129,0.1)', borderRadius: '10px', padding: '16px' }}>
                    <h5 style={{ margin: '0 0 8px', fontSize: '0.9rem', color: '#10b981' }}>المخرجات المتوقعة (Expected Output):</h5>
                    <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: '0.85rem', color: '#cbd5e1', direction: 'ltr', textAlign: 'left' }}>
                      {lesson.practice_expected || 'Hello World'}
                    </pre>
                  </div>

                  {/* Practice Feedback Status */}
                  {practiceStatus !== 'idle' && (
                    <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid', background: practiceStatus === 'success' ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)', color: practiceStatus === 'success' ? '#10b981' : '#f87171', borderColor: practiceStatus === 'success' ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)', display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.9rem', fontWeight: 700 }}>
                      {practiceStatus === 'success' ? '✅ عمل رائع! النتيجة مطابقة للمطلوب.' : '❌ النتيجة غير مطابقة. حاول مجدداً.'}
                    </div>
                  )}
                </div>
              </section>

            </div>
          ) : (
            /* Interactive Quiz Panel */
            <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', width: '100%', height: '100%', overflowY: 'auto' }}>
              <div style={{ background: 'rgba(15,15,25,0.8)', padding: '40px', borderRadius: '20px', border: '1px solid rgba(16,185,129,0.2)', backdropFilter: 'blur(20px)' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#10b981', marginBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '16px' }}>
                  🧠 {examObj.title}
                </h2>

                {showResults ? (
                  <div style={{ textAlign: 'center', padding: '40px' }}>
                    <div style={{ fontSize: '60px', marginBottom: '20px' }}>{score === examObj.questions.length ? '🏆' : '📚'}</div>
                    <h3 style={{ fontSize: '1.8rem', color: score >= examObj.questions.length / 2 ? '#10b981' : '#f59e0b', marginBottom: '10px', fontWeight: 800 }}>
                      نتيجة الاختبار: {score} من {examObj.questions.length}
                    </h3>
                    <p style={{ color: '#94a3b8', fontSize: '1rem', marginBottom: '30px' }}>
                      {score === examObj.questions.length ? 'تهانينا! لقد حصلت على الدرجة النهائية.' : 'أداء جيد! استمر في التعلم والتحسن.'}
                    </p>
                    <button onClick={() => { setShowResults(false); setAnswers({}); }} style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', color: '#10b981', padding: '12px 30px', borderRadius: '10px', fontSize: '1rem', fontWeight: 700, cursor: 'pointer', fontFamily: "'Cairo', sans-serif" }}>
                      إعادة الاختبار 🔄
                    </button>
                  </div>
                ) : (
                  <div>
                    {examObj.questions.map((q: any, qi: number) => (
                      <div key={qi} style={{ marginBottom: '40px' }}>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', color: '#fff' }}>{qi + 1}. {q.question}</h4>
                        <div style={{ display: 'grid', gap: '12px' }}>
                          {q.options.map((opt: string, oi: number) => {
                            const isSelected = answers[qi] === oi;
                            return (
                              <button key={oi} onClick={() => setAnswers(prev => ({ ...prev, [qi]: oi }))} style={{
                                textAlign: 'right', padding: '16px 20px', borderRadius: '12px', cursor: 'pointer',
                                background: isSelected ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.02)',
                                border: isSelected ? '1px solid rgba(16,185,129,0.4)' : '1px solid rgba(255,255,255,0.05)',
                                color: isSelected ? '#10b981' : '#e2e8f0', fontFamily: "'Cairo', sans-serif", fontSize: '0.95rem', transition: 'all 0.2s'
                              }}>
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px', textAlign: 'center' }}>
                      <button onClick={handleExamSubmit} disabled={Object.keys(answers).length < examObj.questions.length} style={{
                        background: Object.keys(answers).length < examObj.questions.length ? 'rgba(255,255,255,0.05)' : 'linear-gradient(135deg, #10b981, #059669)',
                        border: 'none', color: '#000', padding: '16px 40px', borderRadius: '14px', fontSize: '1rem', fontWeight: 700, cursor: Object.keys(answers).length < examObj.questions.length ? 'not-allowed' : 'pointer', fontFamily: "'Cairo', sans-serif"
                      }}>
                        تسليم الإجابات وإنهاء الاختبار 🏁
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Footer Controls */}
          <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '12px 20px', display: 'flex', justifyContent: 'space-between', background: 'rgba(5,5,10,0.95)', flexShrink: 0 }}>
            {prevLesson ? (
              <Link href={`/learn/${prevLesson.id}`} style={{ textDecoration: 'none' }}>
                <button style={{ background: 'rgba(255,255,255,0.03)', color: '#cbd5e1', border: '1px solid rgba(255,255,255,0.05)', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontFamily: "'Cairo', sans-serif", fontSize: '0.85rem' }}>
                  ← الدرس السابق: {prevLesson.title.replace(/الدرس \d+:\s*/, '')}
                </button>
              </Link>
            ) : <div />}

            {nextLesson ? (
              <Link href={`/learn/${nextLesson.id}`} style={{ textDecoration: 'none' }}>
                <button style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981', border: '1px solid rgba(16,185,129,0.2)', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontFamily: "'Cairo', sans-serif", fontSize: '0.85rem', fontWeight: 700 }}>
                  الدرس التالي: {nextLesson.title.replace(/الدرس \d+:\s*/, '')} →
                </button>
              </Link>
            ) : <div />}
          </footer>
        </main>
      </div>

      <style>{`
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: #020205; }
        ::-webkit-scrollbar-thumb { background: rgba(16,185,129,0.2); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(16,185,129,0.4); }
      `}</style>
    </div>
  );
}
