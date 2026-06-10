'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LearnPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const router = useRouter();
  const { lessonId } = use(params);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [sidebar, setSidebar] = useState(true);
  const [accessStatus, setAccessStatus] = useState<'approved' | 'locked'>('locked');

  // Exam state
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    async function fetchLesson() {
      try {
        const res = await fetch(`/api/lessons/${lessonId}`);
        if (res.ok) {
          const json = await res.json();
          setData(json);
          // Temporary for demo: allow access if is_free or just allow all for now.
          // In production, check /api/auth/me and access records.
          setAccessStatus(json.lesson.is_free ? 'approved' : 'approved'); 
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
      <div style={{ minHeight: '100vh', background: '#050508', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '50px', height: '50px', border: '3px solid rgba(99,102,241,0.3)', borderTopColor: '#6366f1', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (!data) return null;

  const { lesson, course, sidebar: sideLessons } = data;
  const isVideo = lesson.content_type === 'video';
  const isText = lesson.content_type === 'text';
  const isExam = lesson.content_type === 'exam';

  let examObj = null;
  if (isExam && lesson.exam_data) {
    examObj = typeof lesson.exam_data === 'string' ? JSON.parse(lesson.exam_data) : lesson.exam_data;
  }

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

      {/* Navbar */}
      <div style={{ borderBottom: '1px solid rgba(99,102,241,0.1)', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(5,5,10,0.9)', backdropFilter: 'blur(12px)', height: 64, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={() => setSidebar(!sidebar)} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', width: 36, height: 36, borderRadius: 8, cursor: 'pointer' }}>☰</button>
          <Link href={`/courses/${lesson.course_id}`} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: 13 }}>العودة للكورس ←</Link>
          <span style={{ color: '#334155' }}>|</span>
          <span style={{ fontSize: 15, fontWeight: 700, color: '#f8fafc' }}>{lesson.title}</span>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <div style={{ padding: '4px 12px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 20, color: '#818cf8', fontSize: 13, fontWeight: 700 }}>
            {isVideo ? 'فيديو 🎥' : isText ? 'مقال 📖' : 'امتحان 🧠'}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Sidebar */}
        {sidebar && (
          <div style={{ width: 300, background: 'rgba(5,5,10,0.8)', borderLeft: '1px solid rgba(99,102,241,0.1)', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '20px' }}>
              <h3 style={{ margin: '0 0 16px', fontSize: 16, color: '#f8fafc', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 16 }}>{course.title_ar || course.title}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {sideLessons.map((l: any, i: number) => {
                  const isActive = Number(l.id) === Number(lessonId);
                  return (
                    <Link key={l.id} href={`/learn/${l.id}`} style={{ textDecoration: 'none' }}>
                      <div style={{ 
                        padding: '12px 16px', borderRadius: 10, display: 'flex', alignItems: 'center', gap: 12,
                        background: isActive ? 'linear-gradient(90deg, rgba(99,102,241,0.15), transparent)' : 'transparent',
                        border: isActive ? '1px solid rgba(99,102,241,0.3)' : '1px solid transparent',
                        color: isActive ? '#818cf8' : '#94a3b8', transition: 'all 0.2s'
                      }}>
                        <div style={{ width: 24, height: 24, borderRadius: 6, background: isActive ? '#6366f1' : 'rgba(255,255,255,0.05)', color: isActive ? '#fff' : '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>
                          {l.content_type === 'video' ? '▶' : l.content_type === 'text' ? '📖' : '🧠'}
                        </div>
                        <span style={{ fontSize: 14, fontWeight: isActive ? 700 : 400 }}>{i + 1}. {l.title}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div style={{ flex: 1, position: 'relative', overflowY: 'auto' }}>
          {/* Animated Background */}
          <div style={{ position: 'absolute', top: -200, left: -200, width: 600, height: 600, background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 60%)', filter: 'blur(40px)', zIndex: 0, pointerEvents: 'none' }} />

          <div style={{ maxWidth: isVideo ? 1000 : 800, margin: '0 auto', padding: '40px', position: 'relative', zIndex: 10 }}>
            <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 24, background: 'linear-gradient(135deg, #fff, #c4b5fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {lesson.title}
            </h1>

            {/* Render Video */}
            {isVideo && lesson.video_url && (
              <div style={{ background: '#000', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', aspectRatio: '16/9' }}>
                <iframe src={lesson.video_url} width="100%" height="100%" style={{ border: 'none' }} allowFullScreen />
              </div>
            )}

            {/* Render Text */}
            {isText && lesson.text_content && (
              <div 
                style={{ background: 'rgba(15,15,25,0.8)', padding: '40px', borderRadius: 20, border: '1px solid rgba(99,102,241,0.15)', lineHeight: 2, fontSize: 16, color: '#cbd5e1' }}
                dangerouslySetInnerHTML={{ __html: lesson.text_content }}
              />
            )}

            {/* Render Exam */}
            {isExam && examObj && (
              <div style={{ background: 'rgba(15,15,25,0.8)', padding: '40px', borderRadius: 20, border: '1px solid rgba(99,102,241,0.15)' }}>
                <h2 style={{ fontSize: 24, marginBottom: 30, color: '#a855f7' }}>{examObj.title}</h2>
                
                {showResults ? (
                  <div style={{ textAlign: 'center', padding: '40px' }}>
                    <div style={{ fontSize: 60, marginBottom: 20 }}>{score >= examObj.questions.length / 2 ? '🏆' : '📚'}</div>
                    <h3 style={{ fontSize: 28, color: score >= examObj.questions.length / 2 ? '#22c55e' : '#f59e0b', marginBottom: 10 }}>
                      نتيجتك: {score} من {examObj.questions.length}
                    </h3>
                    <p style={{ color: '#94a3b8', fontSize: 16, marginBottom: 30 }}>
                      {score >= examObj.questions.length / 2 ? 'عمل رائع! لقد اجتزت الاختبار بنجاح.' : 'يمكنك مراجعة الدروس والمحاولة مرة أخرى.'}
                    </p>
                    <button onClick={() => { setShowResults(false); setAnswers({}); }} style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', color: '#818cf8', padding: '12px 30px', borderRadius: 10, fontSize: 16, cursor: 'pointer', fontFamily: "'Cairo', sans-serif" }}>
                      إعادة المحاولة 🔄
                    </button>
                  </div>
                ) : (
                  <div>
                    {examObj.questions.map((q: any, qi: number) => (
                      <div key={qi} style={{ marginBottom: 40 }}>
                        <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>{qi + 1}. {q.question}</h4>
                        <div style={{ display: 'grid', gap: 12 }}>
                          {q.options.map((opt: string, oi: number) => {
                            const isSelected = answers[qi] === oi;
                            return (
                              <button key={oi} onClick={() => setAnswers(prev => ({...prev, [qi]: oi}))} style={{
                                textAlign: 'right', padding: '16px 20px', borderRadius: 12, cursor: 'pointer',
                                background: isSelected ? 'rgba(99,102,241,0.15)' : 'rgba(255,255,255,0.02)',
                                border: isSelected ? '1px solid rgba(99,102,241,0.4)' : '1px solid rgba(255,255,255,0.05)',
                                color: isSelected ? '#a855f7' : '#e2e8f0', fontFamily: "'Cairo', sans-serif", fontSize: 15, transition: 'all 0.2s'
                              }}>
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 30, textAlign: 'center' }}>
                      <button onClick={handleExamSubmit} disabled={Object.keys(answers).length < examObj.questions.length} style={{
                        background: Object.keys(answers).length < examObj.questions.length ? 'rgba(255,255,255,0.1)' : 'linear-gradient(135deg, #6366f1, #a855f7)',
                        border: 'none', color: '#fff', padding: '16px 40px', borderRadius: 14, fontSize: 16, fontWeight: 700, cursor: Object.keys(answers).length < examObj.questions.length ? 'not-allowed' : 'pointer', fontFamily: "'Cairo', sans-serif"
                      }}>
                        تسليم الإجابات وإنهاء الاختبار 🏁
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 40 }}>
              <button style={{ background: 'transparent', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 24px', borderRadius: 10, cursor: 'pointer', fontFamily: "'Cairo', sans-serif" }}>
                ← الدرس السابق
              </button>
              <button style={{ background: 'rgba(99,102,241,0.1)', color: '#818cf8', border: '1px solid rgba(99,102,241,0.3)', padding: '12px 24px', borderRadius: 10, cursor: 'pointer', fontFamily: "'Cairo', sans-serif" }}>
                الدرس التالي →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
