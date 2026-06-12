'use client';

import React, { useState } from 'react';
import { useTargetGroup } from '@/context/UserTargetGroupContext';
import Link from 'next/link';

type QuestionType = 'mcq' | 'tf' | 'practical';

interface SmartQuestion {
  id: number;
  type: QuestionType;
  question: string;
  options?: string[];
  correctAnswer?: number;
  placeholder?: string;
}

const SMART_EXAM_QUESTIONS: Record<string, SmartQuestion[]> = {
  python: [
    { id: 1, type: 'mcq', question: "أي دالة تستخدم لطباعة النصوص على الشاشة؟", options: ["echo()", "console.log()", "print()", "write()"], correctAnswer: 2 },
    { id: 2, type: 'tf', question: "بايثون تعتبر لغة مترجمة (Compiled Language) وليست مفسرة (Interpreted).", options: ["صح", "خطأ"], correctAnswer: 1 },
    { id: 3, type: 'practical', question: "قم بكتابة كود بايثون بسيط يقوم بتعريف متغير اسمه x بقيمة 10، ثم يطبع قيمة هذا المتغير.", placeholder: "اكتب الكود هنا..." }
  ],
  cyber: [
    { id: 1, type: 'mcq', question: "أي بروتوكول يوفر اتصالاً آمناً ومشفراً؟", options: ["HTTP", "FTP", "HTTPS", "Telnet"], correctAnswer: 2 },
    { id: 2, type: 'tf', question: "الهندسة الاجتماعية تعتمد بالأساس على اختراق الأنظمة تقنياً وليس خداع البشر.", options: ["صح", "خطأ"], correctAnswer: 1 },
    { id: 3, type: 'practical', question: "اشرح باختصار كيف تقوم بتأمين حسابك الشخصي باستخدام المصادقة الثنائية (2FA).", placeholder: "اشرح الخطوات أو الفكرة العامة هنا..." }
  ],
  lang: [
    { id: 1, type: 'mcq', question: "ما هي الترجمة الصحيحة لـ 'كيف حالك' بالإنجليزية؟", options: ["Who are you?", "How are you?", "Where are you?", "What is this?"], correctAnswer: 1 },
    { id: 2, type: 'tf', question: "كلمة Bonjour في الفرنسية تستخدم للتحية في المساء.", options: ["صح", "خطأ"], correctAnswer: 1 },
    { id: 3, type: 'practical', question: "اكتب جملة قصيرة (بالإنجليزية أو الفرنسية أو الألمانية) تُعرّف فيها عن اسمك.", placeholder: "مثال: My name is..." }
  ]
};

interface ExamResults {
  totalScore: number;
  maxScore: number;
  strengths: string[];
  weaknesses: string[];
  recommendedLessons: string[];
}

interface SmartExamViewProps {
  track: string;
  milestone: number;
  onPass: () => void;
  onExit: () => void;
}

export default function SmartExamView({ track, milestone, onPass, onExit }: SmartExamViewProps) {
  const { targetGroup } = useTargetGroup();
  const isKids = targetGroup === 'kids';

  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [submitting, setSubmitting] = useState(false);
  const [results, setResults] = useState<ExamResults | null>(null);

  // Normalize track key
  const trackKey = track.includes('python') || track === 'programming' ? 'python' : 
                   track.includes('cyber') ? 'cyber' : 'lang';

  const questions = SMART_EXAM_QUESTIONS[trackKey] || SMART_EXAM_QUESTIONS['python'];

  const handleSubmit = async () => {
    setSubmitting(true);

    // 1. Grade Objective Questions
    let objectiveScore = 0;
    let totalObjective = 0;
    const practicalAnswers: any[] = [];

    questions.forEach((q, idx) => {
      if (q.type === 'mcq' || q.type === 'tf') {
        totalObjective++;
        let isCorrect = false;
        if (typeof q.correct_answer !== 'undefined') {
          const correctIdx = q.options.findIndex(opt => opt == q.correct_answer);
          isCorrect = (answers[idx] === correctIdx);
        } else {
          isCorrect = (answers[idx] === q.correctAnswer);
        }
        if (isCorrect) {
          objectiveScore++;
        }
      } else if (q.type === 'practical') {
        practicalAnswers.push({
          question: q.question,
          answer: answers[idx] || ''
        });
      }
    });

    try {
      // 2. Grade Practical via AI
      const res = await fetch('/api/ai/grade-exam', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          track: trackKey,
          milestone,
          objectiveScore,
          totalObjective,
          practicalAnswers
        })
      });

      if (!res.ok) throw new Error('AI Grading Failed');
      
      const grading = await res.json();
      setResults(grading);

      // Save pass state if they got more than 50%
      if (grading.totalScore / grading.maxScore >= 0.5) {
        localStorage.setItem(`svk_macro_exam_${track}_${milestone}`, 'passed');
      }

    } catch (err) {
      console.error(err);
      // Fallback Results
      setResults({
        totalScore: objectiveScore,
        maxScore: totalObjective,
        strengths: ["الأساسيات النظرية"],
        weaknesses: ["لم يتم تقييم الجانب العملي بسبب خطأ في الخادم"],
        recommendedLessons: []
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleRetry = () => {
    setAnswers({});
    setResults(null);
  };

  const theme = isKids ? {
    containerBg: '#fef08a', cardBg: '#ffffff', border: '4px solid #f43f5e', textColor: '#1e293b', btnBg: 'linear-gradient(135deg, #fb7185, #e11d48)', btnColor: '#fff', titleColor: '#e11d48'
  } : {
    containerBg: '#020205', cardBg: 'rgba(15,17,34,0.85)', border: '1px solid rgba(16,185,129,0.3)', textColor: '#e2e8f0', btnBg: 'linear-gradient(135deg, #10b981, #059669)', btnColor: '#000', titleColor: '#10b981'
  };

  if (results) {
    const isPassed = results.totalScore / results.maxScore >= 0.5;
    
    return (
      <div style={{ minHeight: '100vh', background: theme.containerBg, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', direction: 'rtl', fontFamily: "'Cairo', sans-serif" }}>
        <div style={{ maxWidth: '800px', width: '100%', background: theme.cardBg, borderRadius: '24px', border: theme.border, padding: '40px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ fontSize: '4rem', marginBottom: '10px' }}>{isPassed ? '🏆' : '💪'}</div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: isPassed ? '#10b981' : '#ef4444' }}>
              {isPassed ? 'نتيجة أسطورية!' : 'محاولة جيدة، يمكنك التحسن!'}
            </h2>
            <div style={{ fontSize: '5rem', fontWeight: 900, color: theme.titleColor, margin: '20px 0' }}>
              {results.totalScore} <span style={{ fontSize: '2rem', color: '#64748b' }}>/ {results.maxScore}</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
            <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid #10b981', padding: '20px', borderRadius: '16px' }}>
              <h3 style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}><span>🌟</span> نقاط القوة</h3>
              <ul style={{ margin: 0, paddingInlineStart: '20px', color: theme.textColor, lineHeight: '1.8' }}>
                {results.strengths.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
            <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid #ef4444', padding: '20px', borderRadius: '16px' }}>
              <h3 style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}><span>⚠️</span> نقاط تحتاج تحسين</h3>
              <ul style={{ margin: 0, paddingInlineStart: '20px', color: theme.textColor, lineHeight: '1.8' }}>
                {results.weaknesses.map((w, i) => <li key={i}>{w}</li>)}
              </ul>
            </div>
          </div>

          {results.recommendedLessons.length > 0 && (
            <div style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid #3b82f6', padding: '20px', borderRadius: '16px', marginBottom: '30px' }}>
              <h3 style={{ color: '#3b82f6', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}><span>📚</span> الدروس المقترحة للمراجعة</h3>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {results.recommendedLessons.map((l, i) => (
                  <span key={i} style={{ background: '#3b82f6', color: '#fff', padding: '6px 14px', borderRadius: '20px', fontSize: '0.9rem' }}>{l}</span>
                ))}
              </div>
            </div>
          )}

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            {isPassed && (
              <button onClick={onPass} style={{ background: theme.btnBg, color: theme.btnColor, border: 'none', padding: '14px 40px', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 800, cursor: 'pointer' }}>
                متابعة الدروس القادمة 🚀
              </button>
            )}
            <button onClick={handleRetry} style={{ background: 'transparent', color: theme.textColor, border: `2px solid ${theme.titleColor}`, padding: '14px 40px', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 800, cursor: 'pointer' }}>
              إعادة الاختبار 🔄
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: theme.containerBg, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', direction: 'rtl', fontFamily: "'Cairo', sans-serif", color: theme.textColor }}>
      <div style={{ maxWidth: '800px', width: '100%', background: theme.cardBg, borderRadius: '24px', border: theme.border, padding: '40px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, color: theme.titleColor, marginBottom: '8px' }}>
            🧠 التقييم الذكي التفاعلي
          </h2>
          <p style={{ color: '#94a3b8' }}>أجب على الأسئلة ليقوم الذكاء الاصطناعي بتقييم مستواك بدقة!</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '40px' }}>
          {questions.map((q, idx) => (
            <div key={q.id} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '24px' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '20px', color: '#fff', lineHeight: '1.6' }}>
                <span style={{ color: theme.titleColor, marginLeft: '8px' }}>{idx + 1}.</span> 
                {q.question}
              </h4>
              
              {(q.type === 'mcq' || q.type === 'tf') && (
                <div style={{ display: 'grid', gap: '12px' }}>
                  {q.options?.map((opt, oIdx) => {
                    const isSelected = answers[idx] === oIdx;
                    return (
                      <button
                        key={oIdx}
                        onClick={() => setAnswers(prev => ({ ...prev, [idx]: oIdx }))}
                        style={{
                          textAlign: 'right', padding: '16px', borderRadius: '12px', cursor: 'pointer',
                          background: isSelected ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.03)',
                          border: isSelected ? '2px solid #10b981' : '1px solid rgba(255,255,255,0.1)',
                          color: isSelected ? '#10b981' : theme.textColor,
                          fontWeight: isSelected ? 800 : 500, fontSize: '1rem', transition: 'all 0.2s'
                        }}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              )}

              {q.type === 'practical' && (
                <div>
                  <textarea
                    rows={5}
                    placeholder={q.placeholder}
                    value={answers[idx] || ''}
                    onChange={(e) => setAnswers(prev => ({ ...prev, [idx]: e.target.value }))}
                    style={{
                      width: '100%', padding: '16px', borderRadius: '12px', background: '#0f172a',
                      border: '1px solid rgba(255,255,255,0.1)', color: '#38bdf8', fontSize: '1rem',
                      fontFamily: 'monospace', resize: 'vertical', direction: 'ltr'
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button 
            onClick={handleSubmit} 
            disabled={submitting || Object.keys(answers).length < questions.length}
            style={{
              background: (submitting || Object.keys(answers).length < questions.length) ? '#475569' : theme.btnBg,
              color: theme.btnColor, border: 'none', padding: '14px 40px', borderRadius: '12px', fontSize: '1.1rem',
              fontWeight: 800, cursor: (submitting || Object.keys(answers).length < questions.length) ? 'not-allowed' : 'pointer'
            }}
          >
            {submitting ? '🤖 جاري التقييم بالذكاء الاصطناعي...' : '🚀 تسليم الإجابات والحصول على التقرير'}
          </button>
          
          <button onClick={onExit} style={{ background: 'transparent', color: '#ef4444', border: '1px solid #ef4444', padding: '14px 24px', borderRadius: '12px', fontSize: '1rem', fontWeight: 700, cursor: 'pointer' }}>
            خروج
          </button>
        </div>

      </div>
    </div>
  );
}
