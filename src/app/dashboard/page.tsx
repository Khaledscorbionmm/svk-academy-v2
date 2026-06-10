'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface EnrolledCourse {
  id: number;
  title: string;
  icon: string;
  progress: number;
  lessonsTotal: number;
  lessonsDone: number;
  lastLesson: string;
  lastLessonHref: string;
}

interface Achievement {
  id: string;
  title: string;
  icon: string;
  description: string;
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

const MOCK_STUDENT = {
  name: 'محمد أحمد',
  email: 'mohammed@example.com',
  xp: 340,
  level: 4,
  avatar: '👨‍💻',
  joinDate: 'مايو 2025',
};

const ENROLLED_COURSES: EnrolledCourse[] = [
  { id: 1, title: 'Python للمبتدئين', icon: '🐍', progress: 33, lessonsTotal: 6, lessonsDone: 2, lastLesson: 'الشروط if/elif/else', lastLessonHref: '/learn/python-if' },
  { id: 2, title: 'JavaScript الحديث', icon: '⚡', progress: 10, lessonsTotal: 10, lessonsDone: 1, lastLesson: 'مقدمة في JavaScript', lastLessonHref: '/learn/python-vars' },
];

const ACHIEVEMENTS: Achievement[] = [
  { id: 'first_login', title: 'البداية', icon: '🎯', description: 'سجّل دخولك للمرة الأولى', earned: true, xp: 10 },
  { id: 'first_lesson', title: 'أول خطوة', icon: '👣', description: 'أكملت درسك الأول', earned: true, xp: 50 },
  { id: 'first_quiz', title: 'محارب الاختبارات', icon: '🧠', description: 'أنجزت اختبارك الأول', earned: true, xp: 80 },
  { id: 'week_streak', title: 'مثابر', icon: '🔥', description: '7 أيام متواصلة من التعلم', earned: false, xp: 100 },
  { id: 'perfect_quiz', title: 'نجم اختبارات', icon: '⭐', description: 'احصل على 100% في اختبار', earned: false, xp: 150 },
  { id: 'first_course', title: 'مُكمِل', icon: '🏆', description: 'أكمل كورساً كاملاً', earned: false, xp: 500 },
];

const LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, name: 'أحمد علي', avatar: '🥇', xp: 2450 },
  { rank: 2, name: 'سارة محمود', avatar: '🥈', xp: 2100 },
  { rank: 3, name: 'خالد سعد', avatar: '🥉', xp: 1800 },
  { rank: 4, name: 'محمد أحمد', avatar: '👨‍💻', xp: 340, isMe: true },
  { rank: 5, name: 'فاطمة أحمد', avatar: '👩‍💻', xp: 280 },
];

function XPBar({ current, max, level }: { current: number; max: number; level: number }) {
  const pct = Math.min(100, (current / max) * 100);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <span style={{ fontSize: 12, color: '#64748b', minWidth: 60 }}>المستوى {level}</span>
      <div style={{ flex: 1, height: 8, background: 'rgba(255,255,255,0.08)', borderRadius: 4, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, background: 'linear-gradient(90deg,#6366f1,#a855f7)', borderRadius: 4, transition: 'width 1s ease' }} />
      </div>
      <span style={{ fontSize: 12, color: '#64748b', minWidth: 80 }}>{current} / {max} XP</span>
    </div>
  );
}

export default function StudentDashboardPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalLessonsDone = ENROLLED_COURSES.reduce((s, c) => s + c.lessonsDone, 0);
  const avgQuizScore = 78;
  const lastCourse = ENROLLED_COURSES[0];

  return (
    <div style={{ fontFamily: "'Cairo', sans-serif", direction: 'rtl', background: '#060612', color: '#fff', minHeight: '100vh' }}>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet" />

      {/* Navbar */}
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '14px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100, background: 'rgba(6,6,18,0.95)', backdropFilter: 'blur(20px)' }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 24 }}>🎓</span>
          <span style={{ fontSize: 18, fontWeight: 900, background: 'linear-gradient(135deg,#6366f1,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SVK Academy</span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Link href="/courses" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: 14 }}>الكورسات</Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 14px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: 20 }}>
            <span>{MOCK_STUDENT.avatar}</span>
            <span style={{ color: '#c4b5fd', fontSize: 14, fontWeight: 600 }}>{MOCK_STUDENT.name}</span>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '32px 24px' }}>

        {/* Welcome Header */}
        <div style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(168,85,247,0.08))', border: '1px solid rgba(99,102,241,0.2)', borderRadius: 20, padding: '32px', marginBottom: 32, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -50, left: -50, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)' }} />
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 64, height: 64, borderRadius: 16, background: 'linear-gradient(135deg,#6366f1,#a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>
                {MOCK_STUDENT.avatar}
              </div>
              <div>
                <div style={{ fontSize: 12, color: '#64748b', marginBottom: 4 }}>مرحباً بك 👋</div>
                <h1 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 900, margin: '0 0 8px', background: 'linear-gradient(135deg,#fff,#c4b5fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {MOCK_STUDENT.name}
                </h1>
                <XPBar current={MOCK_STUDENT.xp} max={500} level={MOCK_STUDENT.level} />
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.35)', borderRadius: 14, padding: '10px 20px' }}>
              <span style={{ fontSize: 24 }}>⚡</span>
              <div>
                <div style={{ fontSize: 24, fontWeight: 900, color: '#a855f7' }}>{MOCK_STUDENT.xp}</div>
                <div style={{ fontSize: 11, color: '#64748b' }}>نقطة XP</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 32 }}>
          {[
            { label: 'الكورسات المسجّلة', value: ENROLLED_COURSES.length, icon: '📚', color: '#6366f1', gradient: 'rgba(99,102,241,0.12)' },
            { label: 'الدروس المكتملة', value: totalLessonsDone, icon: '✅', color: '#22c55e', gradient: 'rgba(34,197,94,0.1)' },
            { label: 'متوسط الاختبارات', value: `${avgQuizScore}%`, icon: '🧠', color: '#fbbf24', gradient: 'rgba(251,191,36,0.1)' },
            { label: 'إجمالي XP', value: MOCK_STUDENT.xp, icon: '⚡', color: '#a855f7', gradient: 'rgba(168,85,247,0.1)' },
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
                <div style={{ fontSize: 14, color: '#64748b', marginBottom: 12 }}>⏯️ استمر من حيث توقفت</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <span style={{ fontSize: 36 }}>{lastCourse.icon}</span>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 18 }}>{lastCourse.title}</div>
                    <div style={{ color: '#94a3b8', fontSize: 13 }}>{lastCourse.lastLesson}</div>
                  </div>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13, color: '#64748b' }}>
                    <span>التقدم</span>
                    <span>{lastCourse.lessonsDone} / {lastCourse.lessonsTotal} دروس</span>
                  </div>
                  <div style={{ height: 8, background: 'rgba(255,255,255,0.06)', borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${lastCourse.progress}%`, background: 'linear-gradient(90deg,#6366f1,#a855f7)', borderRadius: 4 }} />
                  </div>
                </div>
                <Link href={lastCourse.lastLessonHref} style={{ textDecoration: 'none' }}>
                  <button style={{ background: 'linear-gradient(135deg,#6366f1,#a855f7)', border: 'none', color: '#fff', padding: '14px 32px', borderRadius: 12, fontSize: 16, fontWeight: 800, cursor: 'pointer', fontFamily: "'Cairo', sans-serif", boxShadow: '0 8px 24px rgba(99,102,241,0.35)' }}>
                    🚀 استمر التعلم
                  </button>
                </Link>
              </div>
            )}

            {/* My Courses */}
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span>📚</span> كورساتي
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {ENROLLED_COURSES.map(course => (
                  <div key={course.id} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, padding: '20px', display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 36 }}>{course.icon}</span>
                    <div style={{ flex: 1, minWidth: 200 }}>
                      <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{course.title}</div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#64748b', marginBottom: 6 }}>
                        <span>{course.lessonsDone} / {course.lessonsTotal} دروس مكتملة</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div style={{ height: 6, background: 'rgba(255,255,255,0.05)', borderRadius: 3, overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${course.progress}%`, background: 'linear-gradient(90deg,#6366f1,#a855f7)', borderRadius: 3, transition: 'width 0.5s ease' }} />
                      </div>
                    </div>
                    <Link href={course.lastLessonHref} style={{ textDecoration: 'none', padding: '8px 20px', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 10, color: '#a855f7', fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap' }}>
                      متابعة ←
                    </Link>
                  </div>
                ))}
                <Link href="/courses" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '14px', background: 'rgba(255,255,255,0.02)', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: 14, color: '#64748b', fontSize: 14, transition: 'all 0.2s' }}>
                  + استكشف كورسات جديدة
                </Link>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span>🏆</span> الإنجازات
                <span style={{ fontSize: 12, color: '#64748b', fontWeight: 400, marginRight: 'auto' }}>
                  {ACHIEVEMENTS.filter(a => a.earned).length} / {ACHIEVEMENTS.length} مكتملة
                </span>
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 12 }}>
                {ACHIEVEMENTS.map(ach => (
                  <div key={ach.id} style={{
                    background: ach.earned ? 'rgba(99,102,241,0.1)' : 'rgba(255,255,255,0.02)',
                    border: `1px solid ${ach.earned ? 'rgba(99,102,241,0.3)' : 'rgba(255,255,255,0.05)'}`,
                    borderRadius: 14, padding: '16px 12px', textAlign: 'center',
                    opacity: ach.earned ? 1 : 0.5,
                    filter: ach.earned ? 'none' : 'grayscale(0.8)',
                  }}>
                    <div style={{ fontSize: 28, marginBottom: 8 }}>{ach.icon}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4, color: ach.earned ? '#f1f5f9' : '#64748b' }}>{ach.title}</div>
                    <div style={{ fontSize: 11, color: '#64748b', lineHeight: 1.4 }}>{ach.description}</div>
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
                <span>🏅</span> أفضل الطلاب
              </h3>
              {LEADERBOARD.map((entry, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px',
                  borderRadius: 10, marginBottom: 6,
                  background: entry.isMe ? 'rgba(99,102,241,0.15)' : 'transparent',
                  border: entry.isMe ? '1px solid rgba(99,102,241,0.3)' : '1px solid transparent',
                }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: entry.rank <= 3 ? 'rgba(251,191,36,0.15)' : 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: entry.rank <= 3 ? '#fbbf24' : '#64748b' }}>
                    {entry.rank}
                  </div>
                  <span style={{ fontSize: 20 }}>{entry.avatar}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: entry.isMe ? 700 : 400, color: entry.isMe ? '#a855f7' : '#e2e8f0' }}>{entry.name}</div>
                    <div style={{ fontSize: 11, color: '#64748b' }}>{entry.xp.toLocaleString('ar-EG')} XP</div>
                  </div>
                  {entry.isMe && <span style={{ fontSize: 11, color: '#a855f7', fontWeight: 700 }}>أنت</span>}
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 18, padding: '20px' }}>
              <h3 style={{ fontSize: 17, fontWeight: 800, margin: '0 0 14px' }}>⚡ روابط سريعة</h3>
              {[
                { href: '/learn/python-vars', label: '🐍 درس المتغيرات', desc: 'Python · 25 دقيقة' },
                { href: '/learn/python-if', label: '🔀 الشروط if/else', desc: 'Python · 30 دقيقة' },
                { href: '/courses', label: '📚 كل الكورسات', desc: 'استكشف المزيد' },
              ].map((link, i) => (
                <Link key={i} href={link.href} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 10, marginBottom: 6, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', color: '#f1f5f9', transition: 'all 0.2s' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{link.label}</div>
                    <div style={{ fontSize: 11, color: '#64748b' }}>{link.desc}</div>
                  </div>
                  <span style={{ color: '#a855f7' }}>←</span>
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
