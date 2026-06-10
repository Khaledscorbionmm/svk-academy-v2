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

const ENROLLED_COURSES: EnrolledCourse[] = [
  { 
    id: 1, 
    title: 'Python للمبتدئين', 
    title_en: 'Python for Beginners',
    icon: '🐍', 
    progress: 33, 
    lessonsTotal: 6, 
    lessonsDone: 2, 
    lastLesson: 'الشروط if/elif/else', 
    lastLessonEn: 'Conditions if/elif/else',
    lastLessonHref: '/learn/python-if' 
  },
  { 
    id: 2, 
    title: 'JavaScript الحديث', 
    title_en: 'Modern JavaScript',
    icon: '⚡', 
    progress: 10, 
    lessonsTotal: 10, 
    lessonsDone: 1, 
    lastLesson: 'المتغيرات وأنواع البيانات', 
    lastLessonEn: 'Variables and Data Types',
    lastLessonHref: '/learn/python-vars' 
  },
];

const ACHIEVEMENTS: Achievement[] = [
  { id: 'first_login', title: 'البداية', title_en: 'The Beginning', icon: '🎯', description: 'سجّل دخولك للمرة الأولى', description_en: 'Log in for the first time', earned: true, xp: 10 },
  { id: 'first_lesson', title: 'أول خطوة', title_en: 'First Step', icon: '👣', description: 'أكملت درسك الأول', description_en: 'Completed your first lesson', earned: true, xp: 50 },
  { id: 'first_quiz', title: 'محارب الاختبارات', title_en: 'Quiz Warrior', icon: '🧠', description: 'أنجزت اختبارك الأول', description_en: 'Completed your first quiz', earned: true, xp: 80 },
  { id: 'week_streak', title: 'مثابر', title_en: 'Persistent', icon: '🔥', description: '7 أيام متواصلة من التعلم', description_en: '7 continuous days of learning', earned: false, xp: 100 },
  { id: 'perfect_quiz', title: 'نجم اختبارات', title_en: 'Quiz Star', icon: '⭐', description: 'احصل على 100% في اختبار', description_en: 'Score 100% in a quiz', earned: false, xp: 150 },
  { id: 'first_course', title: 'مُكمِل', title_en: 'Completer', icon: '🏆', description: 'أكمل كورساً كاملاً', description_en: 'Complete an entire course', earned: false, xp: 500 },
];

const LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, name: 'أحمد علي', avatar: '🥇', xp: 2450 },
  { rank: 2, name: 'سارة محمود', avatar: '🥈', xp: 2100 },
  { rank: 3, name: 'خالد سعد', avatar: '🥉', xp: 1800 },
  { rank: 4, name: 'طالب نشط', avatar: '👨‍💻', xp: 340, isMe: true },
  { rank: 5, name: 'فاطمة أحمد', avatar: '👩‍💻', xp: 280 },
];

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
    vars_lesson: '🐍 درس المتغيرات',
    vars_desc: 'Python · 25 دقيقة',
    if_lesson: '🔀 الشروط if/else',
    if_desc: 'Python · 30 دقيقة',
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
    vars_lesson: '🐍 Variables Lesson',
    vars_desc: 'Python · 25 mins',
    if_lesson: '🔀 Conditions if/else',
    if_desc: 'Python · 30 mins',
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
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    // Load language preference
    const savedLang = localStorage.getItem('svk_lang');
    if (savedLang === 'en' || savedLang === 'ar') {
      setLang(savedLang);
    }
    fetchStudentProfile();
  }, []);

  async function fetchStudentProfile() {
    try {
      const res = await fetch('/api/auth/me');
      if (res.ok) {
        const data = await res.json();
        if (data.user && data.user.role === 'student') {
          setStudent({
            name: data.user.name,
            email: data.user.email,
            xp: 340, // default dummy
            level: 4,
            avatar: '👨‍💻'
          });
        } else {
          router.push('/login');
        }
      } else {
        router.push('/login');
      }
    } catch {
      router.push('/login');
    } finally {
      setLoading(false);
    }
  }

  const toggleLanguage = () => {
    const nextLang = lang === 'ar' ? 'en' : 'ar';
    setLang(nextLang);
    localStorage.setItem('svk_lang', nextLang);
  };

  const handleLogout = async () => {
    setLoggingOut(true);
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
    router.refresh();
  };

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

  const totalLessonsDone = ENROLLED_COURSES.reduce((s, c) => s + c.lessonsDone, 0);
  const avgQuizScore = 78;
  const lastCourse = ENROLLED_COURSES[0];

  // Modify leaderboard with current student name
  const updatedLeaderboard = LEADERBOARD.map(entry => {
    if (entry.isMe && student) {
      return { ...entry, name: student.name };
    }
    return entry;
  });

  return (
    <div style={{ fontFamily: "'Cairo', 'Tajawal', sans-serif", direction: dir, background: '#060612', color: '#fff', minHeight: '100vh', transition: 'all 0.3s' }}>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet" />

      {/* Navbar */}
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '14px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100, background: 'rgba(6,6,18,0.95)', backdropFilter: 'blur(20px)' }}>
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

        {/* Stats Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 32 }}>
          {[
            { label: t.stat_courses, value: ENROLLED_COURSES.length, icon: '📚', color: '#6366f1', gradient: 'rgba(99,102,241,0.12)' },
            { label: t.stat_lessons, value: totalLessonsDone, icon: '✅', color: '#22c55e', gradient: 'rgba(34,197,94,0.1)' },
            { label: t.stat_quiz, value: `${avgQuizScore}%`, icon: '🧠', color: '#fbbf24', gradient: 'rgba(251,191,36,0.1)' },
            { label: t.stat_xp, value: student?.xp || 340, icon: '⚡', color: '#a855f7', gradient: 'rgba(168,85,247,0.1)' },
          ].map((stat, i) => (
            <div key={i} style={{ background: stat.gradient, border: `1px solid ${stat.color}25`, borderRadius: 16, padding: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{stat.icon}</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: stat.color }}>{stat.value}</div>
              <div style={{ color: '#64748b', fontSize: 13, marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 24, alignItems: 'start' }}>
          <div>
            {/* Continue from where you left off */}
            {lastCourse && (
              <div style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.1))', border: '1px solid rgba(99,102,241,0.25)', borderRadius: 20, padding: '28px', marginBottom: 24 }}>
                <div style={{ fontSize: 14, color: '#64748b', marginBottom: 12 }}>⏯️ {t.continue_learning}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <span style={{ fontSize: 36 }}>{lastCourse.icon}</span>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 18 }}>
                      {lang === 'ar' ? lastCourse.title : lastCourse.title_en}
                    </div>
                    <div style={{ color: '#94a3b8', fontSize: 13 }}>
                      {lang === 'ar' ? lastCourse.lastLesson : lastCourse.lastLessonEn}
                    </div>
                  </div>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13, color: '#64748b' }}>
                    <span>{t.progress}</span>
                    <span>{lastCourse.lessonsDone} / {lastCourse.lessonsTotal} {t.lessons}</span>
                  </div>
                  <div style={{ height: 8, background: 'rgba(255,255,255,0.06)', borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${lastCourse.progress}%`, background: 'linear-gradient(90deg,#6366f1,#a855f7)', borderRadius: 4 }} />
                  </div>
                </div>
                <Link href={lastCourse.lastLessonHref} style={{ textDecoration: 'none' }}>
                  <button style={{ background: 'linear-gradient(135deg,#6366f1,#a855f7)', border: 'none', color: '#fff', padding: '14px 32px', borderRadius: 12, fontSize: 16, fontWeight: 800, cursor: 'pointer', fontFamily: "'Cairo', sans-serif", boxShadow: '0 8px 24px rgba(99,102,241,0.35)' }}>
                    {t.btn_continue}
                  </button>
                </Link>
              </div>
            )}

            {/* My Courses */}
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
                {t.my_courses}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {ENROLLED_COURSES.map(course => (
                  <div key={course.id} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, padding: '20px', display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 36 }}>{course.icon}</span>
                    <div style={{ flex: 1, minWidth: 200 }}>
                      <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>
                        {lang === 'ar' ? course.title : course.title_en}
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#64748b', marginBottom: 6 }}>
                        <span>{course.lessonsDone} / {course.lessonsTotal} {t.lessons} {t.completed_of}</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div style={{ height: 6, background: 'rgba(255,255,255,0.05)', borderRadius: 3, overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${course.progress}%`, background: 'linear-gradient(90deg,#6366f1,#a855f7)', borderRadius: 3, transition: 'width 0.5s ease' }} />
                      </div>
                    </div>
                    <Link href={course.lastLessonHref} style={{ textDecoration: 'none', padding: '8px 20px', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 10, color: '#a855f7', fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap' }}>
                      {t.btn_follow}
                    </Link>
                  </div>
                ))}
                <Link href="/courses" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '14px', background: 'rgba(255,255,255,0.02)', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: 14, color: '#64748b', fontSize: 14, transition: 'all 0.2s' }}>
                  {t.explore_new}
                </Link>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span>🏆</span> {t.achievements}
                <span style={{ fontSize: 12, color: '#64748b', fontWeight: 400, marginRight: isRtl ? 'auto' : 0, marginLeft: isRtl ? 0 : 'auto' }}>
                  {ACHIEVEMENTS.filter(a => a.earned).length} / {ACHIEVEMENTS.length} {t.completed_of}
                </span>
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 12 }}>
                {ACHIEVEMENTS.map(ach => (
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
                      {lang === 'ar' ? ach.description : ach.description_en}
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
              {updatedLeaderboard.map((entry, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px',
                  borderRadius: 10, marginBottom: 6,
                  background: entry.isMe ? 'rgba(99,102,241,0.12)' : 'transparent',
                  border: entry.isMe ? '1px solid rgba(99,102,241,0.25)' : '1px solid transparent',
                }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: entry.rank <= 3 ? 'rgba(251,191,36,0.15)' : 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: entry.rank <= 3 ? '#fbbf24' : '#64748b' }}>
                    {entry.rank}
                  </div>
                  <span style={{ fontSize: 20 }}>{entry.avatar}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: entry.isMe ? 700 : 400, color: entry.isMe ? '#a855f7' : '#e2e8f0' }}>{entry.name}</div>
                    <div style={{ fontSize: 11, color: '#64748b' }}>{entry.xp.toLocaleString(isRtl ? 'ar-EG' : 'en-US')} XP</div>
                  </div>
                  {entry.isMe && <span style={{ fontSize: 11, color: '#a855f7', fontWeight: 700 }}>{t.you}</span>}
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 18, padding: '20px' }}>
              <h3 style={{ fontSize: 17, fontWeight: 800, margin: '0 0 14px' }}>{t.quick_links}</h3>
              {[
                { href: '/learn/python-vars', label: t.vars_lesson, desc: t.vars_desc },
                { href: '/learn/python-if', label: t.if_lesson, desc: t.if_desc },
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

      <style>{`
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #060612; }
        ::-webkit-scrollbar-thumb { background: rgba(99,102,241,0.3); border-radius: 3px; }
      `}</style>
    </div>
  );
}
