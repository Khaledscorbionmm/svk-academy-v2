'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface EnrolledCourse {
  id: number;
  title: string;
  title_en: string;
  icon: string;
  progress: number;
  lessonsTotal: number;
  lessonsDone: number;
  lastLesson: string;
  lastLessonEn: string;
  lastLessonHref: string;
}

interface Achievement {
  id: string;
  title: string;
  title_en: string;
  icon: string;
  description: string;
  description_en: string;
  earned: boolean;
  xp: number;
}

interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar: string;
  xp: number;
  isMe?: boolean;
}

interface DashboardData {
  student: { name: string; xp: number };
  stats: { enrolledCourses: number; completedLessons: number; avgScore: number; rank: number };
  leaderboard: { name: string; xp: number; avatar_letter: string }[];
  courses: { id: number; title: string; title_ar: string; thumbnail_url: string; category: string; progress: number }[];
  recentQuizzes: { lesson_slug: string; score: number; total_questions: number; completed_at: string; course_title: string }[];
}



const TRANSLATIONS = {
  ar: {
    academy: 'أكاديمية SVK',
    courses: 'الكورسات',
    welcome: 'مرحباً بك 👋',
    level: 'المستوى',
    xp_points: 'نقطة XP',
    stat_courses: 'الكورسات المسجّلة',
    stat_lessons: 'الدروس المكتملة',
    stat_quiz: 'متوسط الاختبارات',
    stat_xp: 'إجمالي XP',
    continue_learning: 'استمر من حيث توقفت',
    progress: 'التقدم',
    lessons: 'دروس',
    btn_continue: '🚀 استمر التعلم',
    btn_follow: 'متابعة ←',
    my_courses: '📚 كورساتي',
    achievements: '🏆 الإنجازات',
    completed_of: 'مكتملة',
    leaderboard: '🏅 أفضل الطلاب',
    quick_links: '⚡ روابط سريعة',
    vars_lesson: '🐍 الدرس الأول: Hello World',
    vars_desc: 'بايثون · 10 دقائق',
    if_lesson: '📦 الدرس الحادي عشر: المتغيرات',
    if_desc: 'بايثون · 15 دقيقة',
    all_courses: '📚 كل الكورسات',
    explore_more: 'استكشف المزيد',
    explore_new: '+ استكشف كورسات جديدة',
    you: 'أنت',
    logout: 'تسجيل الخروج 🚪',
  },
  en: {
    academy: 'SVK Academy',
    courses: 'Courses',
    welcome: 'Welcome Back 👋',
    level: 'Level',
    xp_points: 'XP Points',
    stat_courses: 'Enrolled Courses',
    stat_lessons: 'Completed Lessons',
    stat_quiz: 'Quiz Average',
    stat_xp: 'Total XP',
    continue_learning: 'Continue where you left off',
    progress: 'Progress',
    lessons: 'lessons',
    btn_continue: '🚀 Continue Learning',
    btn_follow: 'Resume ←',
    my_courses: '📚 My Courses',
    achievements: '🏆 Achievements',
    completed_of: 'completed',
    leaderboard: '🏅 Leaderboard',
    quick_links: '⚡ Quick Links',
    vars_lesson: '🐍 Lesson 1: Hello World',
    vars_desc: 'Python · 10 mins',
    if_lesson: '📦 Lesson 11: Variables',
    if_desc: 'Python · 15 mins',
    all_courses: '📚 All Courses',
    explore_more: 'Explore More',
    explore_new: '+ Explore New Courses',
    you: 'You',
    logout: 'Logout 🚪',
  }
};

function XPBar({ current, max, level, lang }: { current: number; max: number; level: number; lang: 'ar' | 'en' }) {
  const pct = Math.min(100, (current / max) * 100);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <span style={{ fontSize: 12, color: '#64748b', minWidth: 60 }}>
        {lang === 'ar' ? `المستوى ${level}` : `Level ${level}`}
      </span>
      <div style={{ flex: 1, height: 8, background: 'rgba(255,255,255,0.08)', borderRadius: 4, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, background: 'linear-gradient(90deg,#6366f1,#a855f7)', borderRadius: 4, transition: 'width 1s ease' }} />
      </div>
      <span style={{ fontSize: 12, color: '#64748b', minWidth: 80 }}>{current} / {max} XP</span>
    </div>
  );
}

export default function StudentDashboardPage() {
  const router = useRouter();
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [student, setStudent] = useState<{ name: string; email: string; xp: number; level: number; avatar: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [dashData, setDashData] = useState<DashboardData | null>(null);

  // Certificate Modal States
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [certCourseId, setCertCourseId] = useState<number | null>(null);
  const [certNameAr, setCertNameAr] = useState('');
  const [certNameEn, setCertNameEn] = useState('');

  const handleClaimCertificateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certNameAr.trim() || !certNameEn.trim()) {
      alert(lang === 'ar' ? 'يرجى إدخال الاسم باللغة العربية والإنجليزية' : 'Please enter name in both Arabic and English');
      return;
    }
    setCertModalOpen(false);
    router.push(`/courses/${certCourseId}/certificate?nameAr=${encodeURIComponent(certNameAr.trim())}&nameEn=${encodeURIComponent(certNameEn.trim())}`);
  };

  useEffect(() => {
    // Load language preference
    try {
      const savedLang = localStorage.getItem('svk_lang');
      if (savedLang === 'en' || savedLang === 'ar') {
        setLang(savedLang);
      }
    } catch (e) {
      console.warn('Local storage not available:', e);
    }
    fetchStudentProfile();
  }, []);

  async function fetchStudentProfile() {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 12000); // 12-second hard timeout

    try {
      const [meRes, dashRes] = await Promise.all([
        fetch('/api/auth/me', { cache: 'no-store', signal: controller.signal }),
        fetch('/api/student/dashboard', { cache: 'no-store', signal: controller.signal }),
      ]);
      clearTimeout(timeoutId);

      let dashDataResult = null;
      if (dashRes.ok) {
        dashDataResult = await dashRes.json();
      }

      if (meRes.ok) {
        const data = await meRes.json();
        if (data.user && data.user.role === 'student') {
          const xp = dashDataResult?.student?.xp ?? 0;
          setStudent({
            name: data.user.name,
            email: data.user.email,
            xp,
            level: Math.floor(xp / 100) + 1,
            avatar: '👨‍💻'
          });
        } else {
          router.push('/login');
          return;
        }
      } else {
        router.push('/login');
        return;
      }

      if (dashDataResult) {
        setDashData(dashDataResult);
        if (dashDataResult.student) {
          setStudent(prev => prev ? { ...prev, xp: dashDataResult.student.xp, level: Math.floor(dashDataResult.student.xp / 100) + 1 } : prev);
        }
      }
    } catch (err: any) {
      clearTimeout(timeoutId);
      if (err.name === 'AbortError') {
        console.error('[Dashboard] Load timeout after 12s — redirecting to login');
        setLoadError(true);
      } else {
        console.error('Failed to load profile:', err);
        router.push('/login');
      }
    } finally {
      setLoading(false);
    }
  }

  const toggleLanguage = () => {
    const nextLang = lang === 'ar' ? 'en' : 'ar';
    setLang(nextLang);
    try {
      localStorage.setItem('svk_lang', nextLang);
    } catch (e) {
      console.warn('Failed to save language preference:', e);
    }
  };

  const handleLogout = async () => {
    setLoggingOut(true);
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
    router.refresh();
  };

  if (loadError) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#060612', color: '#fff', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚠️</div>
          <h2 style={{ marginBottom: '1rem', color: '#f87171' }}>تعذّر تحميل لوحة التحكم</h2>
          <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>يبدو أن هناك مشكلة في الاتصال. يرجى المحاولة مرة أخرى.</p>
          <button onClick={() => { setLoadError(false); setLoading(true); fetchStudentProfile(); }} style={{ background: 'linear-gradient(135deg,#6366f1,#a855f7)', border: 'none', color: '#fff', padding: '12px 24px', borderRadius: '12px', cursor: 'pointer', fontSize: '1rem', fontFamily: "'Cairo', sans-serif", fontWeight: 700, marginLeft: '1rem' }}>
            إعادة المحاولة
          </button>
          <button onClick={() => router.push('/login')} style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171', padding: '12px 24px', borderRadius: '12px', cursor: 'pointer', fontSize: '1rem', fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>
            تسجيل الدخول مجدداً
          </button>
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#060612', color: '#fff', fontFamily: "'Cairo', sans-serif" }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '40px', height: '40px', border: '3px solid rgba(99,102,241,0.3)', borderTopColor: '#6366f1', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 16px' }} />
          <p>{lang === 'ar' ? 'جاري تحميل لوحة التحكم...' : 'Loading dashboard...'}</p>
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';
  const dir = isRtl ? 'rtl' : 'ltr';

  const realStats = dashData?.stats ?? { enrolledCourses: 0, completedLessons: 0, avgScore: 0, rank: 0 };
  const realLeaderboard = dashData?.leaderboard ?? [];
  const realCourses = dashData?.courses ?? [];


  return (
    <div style={{ fontFamily: "'Cairo', 'Tajawal', sans-serif", direction: dir, background: '#060612', color: '#fff', minHeight: '100vh', transition: 'all 0.3s' }}>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet" />

      {/* Navbar */}
      <nav className="dashboard-nav">
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 24 }}>🎓</span>
          <span style={{ fontSize: 18, fontWeight: 900, background: 'linear-gradient(135deg,#6366f1,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {t.academy}
          </span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Link href="/courses" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: 14 }}>
            {t.courses}
          </Link>
          <button onClick={toggleLanguage} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '6px 14px', borderRadius: 8, fontSize: 13, cursor: 'pointer', fontWeight: 600, fontFamily: "'Cairo', sans-serif" }}>
            {lang === 'ar' ? 'English 🇺🇸' : 'العربية 🇪🇬'}
          </button>
          {student && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 14px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: 20 }}>
              <span>{student.avatar}</span>
              <span style={{ color: '#c4b5fd', fontSize: 13, fontWeight: 600 }}>{student.name}</span>
            </div>
          )}
          <button onClick={handleLogout} disabled={loggingOut} style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171', padding: '6px 14px', borderRadius: 8, fontSize: 12, cursor: 'pointer', fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>
            {loggingOut ? '...' : t.logout}
          </button>
        </div>
      </nav>

      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '32px 24px' }}>

        {/* Welcome Header */}
        {student && (
          <div style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(168,85,247,0.08))', border: '1px solid rgba(99,102,241,0.2)', borderRadius: 20, padding: '32px', marginBottom: 32, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -50, left: -50, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)' }} />
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 64, height: 64, borderRadius: 16, background: 'linear-gradient(135deg,#6366f1,#a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>
                  {student.avatar}
                </div>
                <div>
                  <div style={{ fontSize: 12, color: '#64748b', marginBottom: 4 }}>{t.welcome}</div>
                  <h1 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 900, margin: '0 0 8px', background: 'linear-gradient(135deg,#fff,#c4b5fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {student.name}
                  </h1>
                  <XPBar current={student.xp} max={500} level={student.level} lang={lang} />
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.35)', borderRadius: 14, padding: '10px 20px' }}>
                <span style={{ fontSize: 24 }}>⚡</span>
                <div>
                  <div style={{ fontSize: 24, fontWeight: 900, color: '#a855f7' }}>{student.xp}</div>
                  <div style={{ fontSize: 11, color: '#64748b' }}>{t.xp_points}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stats Cards — real data from DB */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 32 }}>
          {[
            { label: t.stat_courses, value: realStats.enrolledCourses, icon: '📚', color: '#6366f1', gradient: 'rgba(99,102,241,0.12)' },
            { label: t.stat_lessons, value: realStats.completedLessons, icon: '✅', color: '#22c55e', gradient: 'rgba(34,197,94,0.1)' },
            { label: t.stat_quiz, value: `${realStats.avgScore}%`, icon: '🧠', color: '#fbbf24', gradient: 'rgba(251,191,36,0.1)' },
            { label: t.stat_xp, value: student?.xp ?? 0, icon: '⚡', color: '#a855f7', gradient: 'rgba(168,85,247,0.1)' },
          ].map((stat, i) => (
            <div key={i} style={{ background: stat.gradient, border: `1px solid ${stat.color}25`, borderRadius: 16, padding: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{stat.icon}</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: stat.color }}>{stat.value}</div>
              <div style={{ color: '#64748b', fontSize: 13, marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="dashboard-grid">
          <div>
            {/* Continue from where you left off - real course from DB */}
            {realCourses.length > 0 && (() => {
              const lastCourse = realCourses[0];
              return (
                <div style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.1))', border: '1px solid rgba(99,102,241,0.25)', borderRadius: 20, padding: '28px', marginBottom: 24 }}>
                  <div style={{ fontSize: 14, color: '#64748b', marginBottom: 12 }}>⏯️ {t.continue_learning}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <span style={{ fontSize: 36 }}>📖</span>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: 18 }}>
                        {lang === 'ar' ? (lastCourse.title_ar || lastCourse.title) : lastCourse.title}
                      </div>
                      <div style={{ color: '#94a3b8', fontSize: 13 }}>{lastCourse.category}</div>
                    </div>
                  </div>
                  <Link href={`/courses/${lastCourse.id}`} style={{ textDecoration: 'none' }}>
                    <button style={{ background: 'linear-gradient(135deg,#6366f1,#a855f7)', border: 'none', color: '#fff', padding: '14px 32px', borderRadius: 12, fontSize: 16, fontWeight: 800, cursor: 'pointer', fontFamily: "'Cairo', sans-serif", boxShadow: '0 8px 24px rgba(99,102,241,0.35)' }}>
                      {t.btn_continue}
                    </button>
                  </Link>
                </div>
              );
            })()}


            {/* My Courses - real from DB */}
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
                {t.my_courses}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {realCourses.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(255,255,255,0.02)', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: 14, color: '#64748b' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📚</div>
                    <p style={{ margin: 0, fontSize: 14 }}>{lang === 'ar' ? 'لم تنضم لأي كورس بعد' : 'No enrolled courses yet'}</p>
                  </div>
                ) : (
                  realCourses.map(course => (
                    <div key={course.id} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, padding: '20px', display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
                      <div style={{ width: 48, height: 48, borderRadius: 12, background: 'linear-gradient(135deg,#6366f1,#a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>📖</div>
                      <div style={{ flex: 1, minWidth: 200 }}>
                        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>
                          {lang === 'ar' ? (course.title_ar || course.title) : course.title}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: 12, color: '#64748b' }}>
                          <span>{course.category}</span>
                          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#64748b' }} />
                          <span style={{ color: course.progress === 100 ? '#10b981' : '#6366f1', fontWeight: 'bold' }}>
                            {course.progress || 0}% {lang === 'ar' ? 'مكتمل' : 'completed'}
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div style={{ width: '100%', height: '5px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', marginTop: '10px', overflow: 'hidden' }}>
                          <div style={{ width: `${course.progress || 0}%`, height: '100%', background: course.progress === 100 ? 'linear-gradient(90deg, #10b981, #059669)' : 'linear-gradient(90deg, #6366f1, #a855f7)', borderRadius: '10px', transition: 'width 1s ease' }} />
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                        {course.progress === 100 && (
                          <button
                            onClick={() => {
                              setCertCourseId(course.id);
                              setCertNameAr(student?.name && !student.name.includes('طالب') ? student.name : '');
                              setCertNameEn('');
                              setCertModalOpen(true);
                            }}
                            style={{
                              background: 'linear-gradient(135deg, #fbbf24, #d97706)',
                              border: 'none', color: '#000', padding: '8px 20px', borderRadius: 10,
                              fontSize: 13, fontWeight: 800, cursor: 'pointer', fontFamily: "'Cairo', sans-serif",
                              boxShadow: '0 0 15px rgba(251,191,36,0.3)', whiteSpace: 'nowrap'
                            }}
                          >
                            🏆 {lang === 'ar' ? 'استلام الشهادة' : 'Claim Certificate'}
                          </button>
                        )}
                        <Link href={`/courses/${course.id}`} style={{ textDecoration: 'none', padding: '8px 20px', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 10, color: '#a855f7', fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap' }}>
                          {t.btn_follow}
                        </Link>
                      </div>
                    </div>
                  ))
                )}
                <Link href="/courses" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '14px', background: 'rgba(255,255,255,0.02)', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: 14, color: '#64748b', fontSize: 14, transition: 'all 0.2s' }}>
                  {t.explore_new}
                </Link>
              </div>
            </div>

            {/* Achievements - based on real completed lessons */}
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span>🏆</span> {t.achievements}
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 12 }}>
                {[
                  { id: 'registered', title: 'البداية', title_en: 'The Beginning', icon: '🎯', desc: 'سجّلت حسابك', desc_en: 'Created your account', earned: true, xp: 10 },
                  { id: 'first_lesson', title: 'أول خطوة', title_en: 'First Step', icon: '👣', desc: 'أكملت درسك الأول', desc_en: 'Completed first lesson', earned: realStats.completedLessons >= 1, xp: 50 },
                  { id: 'five_lessons', title: 'مثابر', title_en: 'Diligent', icon: '🔥', desc: 'أكملت 5 دروس', desc_en: 'Completed 5 lessons', earned: realStats.completedLessons >= 5, xp: 100 },
                  { id: 'ten_lessons', title: 'محترف', title_en: 'Professional', icon: '⭐', desc: 'أكملت 10 دروس', desc_en: 'Completed 10 lessons', earned: realStats.completedLessons >= 10, xp: 200 },
                  { id: 'first_course', title: 'مُكمِل', title_en: 'Completer', icon: '🏆', desc: 'أكملت كورساً كاملاً', desc_en: 'Completed a full course', earned: realStats.enrolledCourses >= 1 && realStats.completedLessons >= 6, xp: 500 },
                  { id: 'high_scorer', title: 'نجم الاختبارات', title_en: 'Quiz Star', icon: '🧠', desc: 'متوسط اختبارات 80%+', desc_en: '80%+ quiz average', earned: realStats.avgScore >= 80, xp: 150 },
                ].map(ach => (
                  <div key={ach.id} style={{
                    background: ach.earned ? 'rgba(99,102,241,0.07)' : 'rgba(255,255,255,0.02)',
                    border: `1px solid ${ach.earned ? 'rgba(99,102,241,0.25)' : 'rgba(255,255,255,0.05)'}`,
                    borderRadius: 14, padding: '16px 12px', textAlign: 'center',
                    opacity: ach.earned ? 1 : 0.5,
                    filter: ach.earned ? 'none' : 'grayscale(0.8)',
                  }}>
                    <div style={{ fontSize: 28, marginBottom: 8 }}>{ach.icon}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4, color: ach.earned ? '#f1f5f9' : '#64748b' }}>
                      {lang === 'ar' ? ach.title : ach.title_en}
                    </div>
                    <div style={{ fontSize: 11, color: '#64748b', lineHeight: 1.4 }}>
                      {lang === 'ar' ? ach.desc : ach.desc_en}
                    </div>
                    {ach.earned && (
                      <div style={{ marginTop: 8, fontSize: 11, color: '#a855f7', fontWeight: 700 }}>+{ach.xp} XP</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Leaderboard */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 18, padding: '20px', marginBottom: 20 }}>
              <h3 style={{ fontSize: 17, fontWeight: 800, margin: '0 0 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
                {t.leaderboard}
              </h3>
              {realLeaderboard.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '1.5rem', color: '#475569', fontSize: '0.85rem' }}>لا يوجد طلاب بعد</div>
              ) : (
                realLeaderboard.map((entry, i) => {
                  const isMe = student && entry.name === student.name;
                  const medals = ['🥇', '🥈', '🥉'];
                  return (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px',
                      borderRadius: 10, marginBottom: 6,
                      background: isMe ? 'rgba(99,102,241,0.12)' : 'transparent',
                      border: isMe ? '1px solid rgba(99,102,241,0.25)' : '1px solid transparent',
                    }}>
                      <div style={{ width: 28, height: 28, borderRadius: 8, background: i < 3 ? 'rgba(251,191,36,0.15)' : 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: i < 3 ? '#fbbf24' : '#64748b' }}>
                        {medals[i] || i + 1}
                      </div>
                      <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg,#6366f1,#a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#fff', fontSize: '0.9rem', flexShrink: 0 }}>
                        {entry.avatar_letter || (entry.name || '?').charAt(0)}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, fontWeight: isMe ? 700 : 400, color: isMe ? '#a855f7' : '#e2e8f0' }}>{entry.name}</div>
                        <div style={{ fontSize: 11, color: '#64748b' }}>{(entry.xp || 0).toLocaleString(isRtl ? 'ar-EG' : 'en-US')} XP</div>
                      </div>
                      {isMe && <span style={{ fontSize: 11, color: '#a855f7', fontWeight: 700 }}>{t.you}</span>}
                    </div>
                  );
                })
              )}
            </div>

            {/* Quick Actions */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 18, padding: '20px' }}>
              <h3 style={{ fontSize: 17, fontWeight: 800, margin: '0 0 14px' }}>{t.quick_links}</h3>
              {[
                { href: '/learn/1', label: t.vars_lesson, desc: t.vars_desc },
                { href: '/learn/11', label: t.if_lesson, desc: t.if_desc },
                { href: '/courses', label: t.all_courses, desc: t.explore_more },
              ].map((link, i) => (
                <Link key={i} href={link.href} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 10, marginBottom: 6, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', color: '#f1f5f9', transition: 'all 0.2s' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{link.label}</div>
                    <div style={{ fontSize: 11, color: '#64748b' }}>{link.desc}</div>
                  </div>
                  <span style={{ color: '#a855f7' }}>{isRtl ? '←' : '→'}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {certModalOpen && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(2, 2, 5, 0.85)',
          backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            background: 'rgba(10, 10, 25, 0.95)', border: '1px solid rgba(168, 85, 247, 0.25)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.6), 0 0 30px rgba(168, 85, 247, 0.15)',
            borderRadius: '24px', padding: '32px', maxWidth: '500px', width: '100%',
            direction: 'rtl', fontFamily: "'Cairo', sans-serif"
          }}>
            <h3 style={{ margin: '0 0 8px', fontSize: '1.4rem', fontWeight: 900, color: '#fff', textAlign: 'center' }}>
              🏆 استلام شهادة التخرج والتميز
            </h3>
            <p style={{ margin: '0 0 24px', fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.6, textAlign: 'center' }}>
              تهانينا الحارة لإتمامك الكورس بنجاح! يرجى إدخال اسمك باللغتين العربية والإنجليزية لطباعته على شهادتك الرسمية.
            </p>

            <form onSubmit={handleClaimCertificateSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: '700', color: '#cbd5e1', marginBottom: '6px' }}>
                  الاسم الكامل باللغة العربية (كما تريده في الشهادة):
                </label>
                <input
                  type="text"
                  value={certNameAr}
                  onChange={(e) => setCertNameAr(e.target.value)}
                  placeholder="مثال: صبري أحمد محمد"
                  required
                  style={{
                    width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px',
                    color: '#fff', outline: 'none', fontSize: '0.9rem', fontFamily: "'Cairo', sans-serif"
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: '700', color: '#cbd5e1', marginBottom: '6px', direction: 'ltr', textAlign: 'left' }}>
                  Full Name in English (as you want it in the certificate):
                </label>
                <input
                  type="text"
                  value={certNameEn}
                  onChange={(e) => setCertNameEn(e.target.value)}
                  placeholder="Example: Sabry Ahmed Mohamed"
                  required
                  style={{
                    width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px',
                    color: '#fff', outline: 'none', fontSize: '0.9rem', direction: 'ltr', textAlign: 'left',
                    fontFamily: "'Cairo', sans-serif"
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                <button
                  type="submit"
                  style={{
                    flex: 1, padding: '12px', borderRadius: '10px', border: 'none',
                    background: 'linear-gradient(135deg, #10b981, #059669)', color: '#000',
                    fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer', fontFamily: "'Cairo', sans-serif"
                  }}
                >
                  إصدار الشهادة 🎓
                </button>
                <button
                  type="button"
                  onClick={() => setCertModalOpen(false)}
                  style={{
                    padding: '12px 20px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.02)', color: '#94a3b8',
                    fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer', fontFamily: "'Cairo', sans-serif"
                  }}
                >
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #060612; }
        ::-webkit-scrollbar-thumb { background: rgba(99,102,241,0.3); border-radius: 3px; }
        
        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 24px;
          align-items: start;
        }
        
        .dashboard-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding: 14px 32px;
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(6, 6, 18, 0.95);
          backdrop-filter: blur(20px);
        }
        
        @media (max-width: 968px) {
          .dashboard-grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        @media (max-width: 768px) {
          .dashboard-nav {
            padding: 12px 16px !important;
            flex-wrap: wrap;
            gap: 12px;
          }
        }
      `}</style>
    </div>
  );
}
