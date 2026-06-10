'use client';

import React, { useState, useEffect } from 'react';
import { useTargetGroup } from '@/context/UserTargetGroupContext';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface ComprehensiveExamViewProps {
  track: string; // 'languages' | 'cybersecurity' | 'programming'
  milestone: number; // e.g. 20, 40, 60, 80, 100
  onPass: () => void;
  onExit: () => void;
}

const EXAM_QUESTIONS: Record<string, Question[]> = {
  programming: [
    {
      id: 1,
      question: "في لغة بايثون، أي من الخيارات التالية يُنشئ متغيراً بشكل صحيح؟",
      options: ["var x = 5", "let x = 5", "x = 5", "int x = 5"],
      correctAnswer: 2,
      explanation: "في بايثون يتم إنشاء المتغيرات مباشرة بكتابة الاسم ثم علامة يساوي والقيمة."
    },
    {
      id: 2,
      question: "ما هي مخرجات الكود التالي: print(type(10.5))؟",
      options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'double'>"],
      correctAnswer: 1,
      explanation: "الأرقام التي تحتوي على علامة عشرية تتبع الفئة float في بايثون."
    },
    {
      id: 3,
      question: "أي مما يلي يُستخدم لإضافة شرط بديل إذا لم يتحقق الشرط الأول (if) في بايثون؟",
      options: ["else if", "elif", "else", "switch"],
      correctAnswer: 1,
      explanation: "نستخدم الكلمة المحجوزة elif لتعريف شروط إضافية بديلة."
    },
    {
      id: 4,
      question: "ما هي وظيفة الرابط المنطقي (and)؟",
      options: ["يعطي True إذا كان أحد الشروط صحيحاً", "يعطي True فقط إذا كانت كل الشروط صحيحة معاً", "يعكس القيمة المنطقية", "يقوم بعملية الجمع"],
      correctAnswer: 1,
      explanation: "رابط and يتطلب أن تكون جميع الشروط المربوطة صحيحة معاً ليعطي نتيجة إيجابية."
    },
    {
      id: 5,
      question: "كيف نتحقق من طول القائمة (List) أو عدد حروف النص في بايثون؟",
      options: ["count()", "size()", "length()", "len()"],
      correctAnswer: 3,
      explanation: "الدالة len() تعود بعدد العناصر في القائمة أو طول النص."
    }
  ],
  cybersecurity: [
    {
      id: 1,
      question: "أي بروتوكول يُستخدم لنقل البيانات بشكل مشفر وآمن عبر مواقع الويب؟",
      options: ["HTTP", "FTP", "HTTPS", "SMTP"],
      correctAnswer: 2,
      explanation: "يضيف بروتوكول HTTPS طبقة تشفير SSL/TLS لتأمين تداول البيانات."
    },
    {
      id: 2,
      question: "ما هو المنفذ الافتراضي (Port) لخدمة الـ SSH الآمنة؟",
      options: ["80", "22", "443", "21"],
      correctAnswer: 1,
      explanation: "يعمل بروتوكول SSH افتراضياً على المنفذ رقم 22 للاتصال الآمن بالخوادم."
    },
    {
      id: 3,
      question: "في نظام لينكس، أي أمر يُستخدم لتغيير صلاحيات الملفات والمجلدات؟",
      options: ["chown", "chmod", "ls -l", "passwd"],
      correctAnswer: 1,
      explanation: "الأمر chmod (change mode) يستخدم لتعديل صلاحيات القراءة والكتابة والتنفيذ."
    },
    {
      id: 4,
      question: "أي نوع من التشفير يستخدم نفس المفتاح لتشفير وفك تشفير البيانات؟",
      options: ["التشفيير المتماثل (Symmetric)", "التشفير غير المتماثل (Asymmetric)", "الهيدرا (Hydra)", "الهاش (Hashing)"],
      correctAnswer: 0,
      explanation: "التشفير المتماثل يعتمد على مفتاح سري واحد مشترك لكلا العمليتين."
    },
    {
      id: 5,
      question: "ما هو الهدف الأساسي لجدار الحماية (Firewall) في الشبكة؟",
      options: ["تشفير البيانات", "توليد كلمات المرور", "مراقبة وتصفية حزم البيانات الواردة والصادرة", "تسريع سرعة الإنترنت"],
      correctAnswer: 2,
      explanation: "يقوم جدار الحماية بتحليل حزم البيانات ومنع الاتصالات غير المصرح بها بناءً على قواعد أمنية."
    }
  ],
  languages: [
    {
      id: 1,
      question: "ما هي الترجمة الصحيحة للعبارة الإنجليزية: 'Nice to meet you'؟",
      options: ["صباح الخير", "كيف حالك؟", "سعدت بلقائك", "أراك لاحقاً"],
      correctAnswer: 2,
      explanation: "تُستخدم عبارة Nice to meet you للتعبير عن السرور بلقاء شخص ما لأول مرة."
    },
    {
      id: 2,
      question: "بالفرنسية، كيف نقول 'صباح الخير' أو 'مرحباً' بشكل رسمي؟",
      options: ["Bonsoir", "Au revoir", "Merci", "Bonjour"],
      correctAnswer: 3,
      explanation: "Bonjour هي التحية الصباحية الرسمية والأكثر استخداماً بالفرنسية."
    },
    {
      id: 3,
      question: "بالألمانية، ماذا تعني كلمة 'Danke schön'؟",
      options: ["شكراً جزيلاً", "أهلاً بك", "تفضل", "من فضلك"],
      correctAnswer: 0,
      explanation: "Danke schön هي عبارة شكر وتقدير وتعني شكراً جزيلاً."
    },
    {
      id: 4,
      question: "أي من الضمائر التالية يُستخدم للمفرد المتحدث بالفرنسية (Je m'appelle...)؟",
      options: ["Tu", "Je", "Il", "Nous"],
      correctAnswer: 1,
      explanation: "الضمير Je يعني 'أنا' ويستخدم للتعريف بالنفس بالفرنسية."
    },
    {
      id: 5,
      question: "ما معنى السؤال الألماني المشهور: 'Wie geht es dir?'؟",
      options: ["ما اسمك؟", "من أين أنت؟", "كيف حالك؟", "كم عمرك؟"],
      correctAnswer: 2,
      explanation: "Wie geht es dir? تعني حرفياً 'كيف حالك؟' للأصدقاء بالألمانية."
    }
  ]
};

export default function ComprehensiveExamView({ track, milestone, onPass, onExit }: ComprehensiveExamViewProps) {
  const { targetGroup } = useTargetGroup();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [failed, setFailed] = useState(false);

  const questions = EXAM_QUESTIONS[track] || EXAM_QUESTIONS['programming'];

  const isKids = targetGroup === 'kids';

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.correctAnswer) {
        correct++;
      }
    });

    setScore(correct);
    setSubmitted(true);
    
    // Must pass at least 80% (e.g. 4 out of 5 correct)
    const passThreshold = Math.ceil(questions.length * 0.8);
    if (correct >= passThreshold) {
      setFailed(false);
      // Save in localStorage to prevent repeat lock
      localStorage.setItem(`svk_macro_exam_${track}_${milestone}`, 'passed');
      setTimeout(() => {
        onPass();
      }, 2000);
    } else {
      setFailed(true);
    }
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    setFailed(false);
  };

  // Kids layout vs Adults layout
  const theme = isKids ? {
    containerBg: '#fef08a', // bright yellow
    cardBg: '#ffffff',
    border: '4px solid #f43f5e', // deep rose border
    textColor: '#1e293b',
    btnBg: 'linear-gradient(135deg, #fb7185, #e11d48)',
    btnColor: '#fff',
    titleColor: '#e11d48'
  } : {
    containerBg: '#020205',
    cardBg: 'rgba(15,17,34,0.85)',
    border: '1px solid rgba(16,185,129,0.3)',
    textColor: '#e2e8f0',
    btnBg: 'linear-gradient(135deg, #10b981, #059669)',
    btnColor: '#000',
    titleColor: '#10b981'
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: theme.containerBg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      direction: 'rtl',
      fontFamily: "'Cairo', sans-serif",
      color: theme.textColor,
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        maxWidth: '700px',
        width: '100%',
        background: theme.cardBg,
        borderRadius: '24px',
        border: theme.border,
        padding: '40px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
        position: 'relative'
      }}>
        
        {/* Kid decorative badges */}
        {isKids && (
          <div style={{ position: 'absolute', top: '-20px', right: '20px', background: '#fbbf24', color: '#000', padding: '6px 16px', borderRadius: '20px', fontWeight: 900, transform: 'rotate(5deg)', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
            🏆 تحدي الأبطال الكبير!
          </div>
        )}

        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: theme.titleColor, marginBottom: '8px' }}>
            {isKids ? '🌟 الاختبار الشامل للأبطال 🌟' : '📝 الاختبار الشامل والتقييم الدوري'}
          </h2>
          <p style={{ color: isKids ? '#475569' : '#94a3b8', fontSize: '1rem', margin: 0 }}>
            {isKids 
              ? `لقد أنهيت 20 درساً بنجاح! جاوب بذكاء لتفتح مغامرات الدروس القادمة!` 
              : `تقييم مستوى رقم ${milestone / 20} لقياس مدى فهمك للمفردات والمفاهيم في الـ 20 درساً السابقة.`}
          </p>
        </div>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            {failed ? (
              <div>
                <div style={{ fontSize: '5rem', marginBottom: '20px' }}>😢</div>
                <h3 style={{ fontSize: '1.6rem', color: '#ef4444', fontWeight: 800, marginBottom: '10px' }}>
                  {isKids ? 'حاول مرة أخرى يا بطل! 🦾' : 'لم تتجاوز الاختبار التقييمي'}
                </h3>
                <p style={{ color: isKids ? '#475569' : '#94a3b8', marginBottom: '30px', fontSize: '1.05rem' }}>
                  لقد حصلت على {score} من أصل {questions.length} إجابات صحيحة. يجب الحصول على 80% (على الأقل 4 إجابات) لفتح الدروس القادمة.
                </p>
                <button 
                  onClick={handleRetry} 
                  style={{ 
                    background: '#ef4444', 
                    color: '#fff', 
                    border: 'none', 
                    padding: '14px 40px', 
                    borderRadius: '12px', 
                    fontSize: '1.1rem', 
                    fontWeight: 800, 
                    cursor: 'pointer',
                    boxShadow: '0 10px 20px rgba(239, 68, 68, 0.2)'
                  }}
                >
                  إعادة المحاولة 🔄
                </button>
              </div>
            ) : (
              <div>
                <div style={{ fontSize: '5rem', marginBottom: '20px', animation: 'bounce 1s infinite' }}>🎉🏆</div>
                <h3 style={{ fontSize: '1.8rem', color: '#10b981', fontWeight: 900, marginBottom: '10px' }}>
                  {isKids ? 'عمل أسطوري ومذهل! ⭐⭐⭐' : 'تهانينا! لقد تجاوزت الاختبار الشامل بنجاح'}
                </h3>
                <p style={{ color: isKids ? '#475569' : '#94a3b8', fontSize: '1.05rem', marginBottom: '20px' }}>
                  النتيجة: {score} من {questions.length} إجابات صحيحة.
                </p>
                <div style={{ background: '#ecfdf5', border: '1px solid #10b981', color: '#10b981', padding: '16px', borderRadius: '12px', display: 'inline-block', fontWeight: 700 }}>
                  🔓 تم فتح الدروس القادمة بنجاح! جاري تحويلك...
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '30px' }}>
              {questions.map((q, idx) => (
                <div key={q.id} style={{ background: isKids ? '#eff6ff' : 'rgba(255,255,255,0.01)', border: isKids ? '2px solid #bfdbfe' : '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '20px' }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '14px', color: isKids ? '#1e3a8a' : '#fff' }}>
                    {idx + 1}. {q.question}
                  </h4>
                  <div style={{ display: 'grid', gap: '10px' }}>
                    {q.options.map((opt, oIdx) => {
                      const isSelected = answers[idx] === oIdx;
                      return (
                        <button
                          key={oIdx}
                          onClick={() => setAnswers(prev => ({ ...prev, [idx]: oIdx }))}
                          style={{
                            textAlign: 'right',
                            padding: '14px 20px',
                            borderRadius: '10px',
                            cursor: 'pointer',
                            background: isSelected 
                              ? (isKids ? '#bfdbfe' : 'rgba(16,185,129,0.15)') 
                              : (isKids ? '#fff' : 'rgba(255,255,255,0.02)'),
                            border: isSelected 
                              ? `2px solid ${isKids ? '#3b82f6' : '#10b981'}` 
                              : `1px solid ${isKids ? '#e2e8f0' : 'rgba(255,255,255,0.05)'}`,
                            color: isSelected ? (isKids ? '#1e3a8a' : '#10b981') : theme.textColor,
                            fontWeight: isSelected ? 800 : 500,
                            fontFamily: "'Cairo', sans-serif",
                            fontSize: '0.95rem',
                            transition: 'all 0.2s'
                          }}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', borderTop: isKids ? '2px dashed #f43f5e' : '1px solid rgba(255,255,255,0.05)', paddingTop: '24px' }}>
              <button 
                onClick={handleSubmit} 
                disabled={Object.keys(answers).length < questions.length}
                style={{
                  background: Object.keys(answers).length < questions.length ? '#cbd5e1' : theme.btnBg,
                  color: theme.btnColor,
                  border: 'none',
                  padding: '14px 40px',
                  borderRadius: '12px',
                  fontSize: '1.1rem',
                  fontWeight: 800,
                  cursor: Object.keys(answers).length < questions.length ? 'not-allowed' : 'pointer',
                  fontFamily: "'Cairo', sans-serif",
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                }}
              >
                تسليم الإجابات وإنهاء الاختبار 🏁
              </button>
              
              <button 
                onClick={onExit}
                style={{
                  background: 'rgba(239, 68, 68, 0.1)',
                  color: '#ef4444',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  padding: '14px 24px',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: "'Cairo', sans-serif"
                }}
              >
                خروج
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
