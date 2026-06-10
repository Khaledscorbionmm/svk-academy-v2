'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface AdminUser {
  id: number;
  email: string;
  name: string;
  role: string;
}

interface DashboardData {
  stats: {
    totalStudents: number;
    totalCourses: number;
    activeEnrollments: number;
    completedLessons: number;
    pendingRequests: number;
    newStudentsThisMonth: number;
  };
  topCourses: { title_ar: string; title: string; enrolled_count: number; category: string }[];
  topStudents: { name: string; email: string; xp: number; created_at: string }[];
  pendingLessons: { student_name: string; email: string; lesson_slug: string; requested_at: string; course_title: string }[];
}

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DashboardData | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    fetchUser();
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (user) {
      fetchDashboardData();
      const interval = setInterval(fetchDashboardData, 15000);
      return () => clearInterval(interval);
    }
  }, [user]);

  async function fetchUser() {
    try {
      const res = await fetch('/api/auth/me');
      if (res.ok) {
        const d = await res.json();
        if (d.user && d.user.role === 'admin') {
          setUser(d.user);
        } else router.push('/admin/login');
      } else router.push('/admin/login');
    } catch {
      router.push('/admin/login');
    } finally {
      setLoading(false);
    }
  }

  async function fetchDashboardData() {
    try {
      const res = await fetch('/api/admin/radar');
      if (res.ok) {
        const d = await res.json();
        setData(d);
      }
    } catch (e) {
      console.error('Failed to fetch dashboard data', e);
    }
  }

  async function handleApproveLesson(studentEmail: string, lessonSlug: string, approve: boolean) {
    try {
      // Find student id by email in pending list
      const req = data?.pendingLessons.find(r => r.email === studentEmail && r.lesson_slug === lessonSlug);
      if (!req) return;
      await fetch('/api/lessons/access', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentEmail, lessonSlug, status: approve ? 'approved' : 'rejected' }),
      });
      fetchDashboardData();
    } catch (e) {
      console.error('Error handling lesson approval', e);
    }
  }

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#050508' }}>
        <div style={{ textAlign: 'center', color: '#10b981', fontFamily: 'Cairo, sans-serif' }}>
          <div style={{ width: '60px', height: '60px', border: '3px solid rgba(16,185,129,0.3)', borderTopColor: '#10b981', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 1rem' }} />
          <p>جاري التحميل...</p>
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  const stats = data?.stats;

  const statCards = [
    { label: 'إجمالي الطلاب', value: stats?.totalStudents ?? 0, icon: '👥', color: '#3b82f6', sub: `${stats?.newStudentsThisMonth ?? 0} هذا الشهر` },
    { label: 'إجمالي الكورسات', value: stats?.totalCourses ?? 0, icon: '📚', color: '#10b981', sub: 'كورس منشور' },
    { label: 'الطلاب المنضمون', value: stats?.activeEnrollments ?? 0, icon: '🎓', color: '#8b5cf6', sub: 'لديهم درس مفعّل' },
    { label: 'الدروس المنجزة', value: stats?.completedLessons ?? 0, icon: '✅', color: '#f59e0b', sub: 'إجمالي إنجازات' },
    { label: 'طلبات معلقة', value: stats?.pendingRequests ?? 0, icon: '⏳', color: '#ef4444', sub: 'تحتاج موافقة' },
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: "'Cairo', sans-serif", direction: 'rtl', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
            لوحة التحكم الرئيسية
          </h1>
          <p style={{ color: '#64748b', margin: '0.25rem 0 0', fontSize: '0.9rem' }}>
            مرحباً، {user?.name} 👋 — {currentTime.toLocaleDateString('ar-EG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
        <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', padding: '0.75rem 1.5rem', borderRadius: '10px', fontFamily: 'monospace', color: '#10b981', fontSize: '0.9rem' }}>
          🟢 {currentTime.toLocaleTimeString('ar-EG')}
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
        {statCards.map((card, i) => (
          <div key={i} style={{
            background: 'rgba(15,23,42,0.8)',
            border: `1px solid ${card.color}30`,
            borderRadius: '14px',
            padding: '1.5rem',
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.2s, border-color 0.2s',
          }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '100%', background: card.color, borderRadius: '0 14px 14px 0' }} />
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{card.icon}</div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.25rem' }}>{card.label}</div>
            <div style={{ fontSize: '2.25rem', fontWeight: 900, color: card.color, lineHeight: 1, fontFamily: 'monospace' }}>
              {card.value.toLocaleString('ar-EG')}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#475569', marginTop: '0.5rem' }}>{card.sub}</div>
          </div>
        ))}
      </div>

      {/* Main Grid: Pending Lessons + Top Courses + Top Students */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '1.5rem' }}>

        {/* Left: Pending lesson requests */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{
            background: 'rgba(15,23,42,0.8)',
            border: '1px solid rgba(239,68,68,0.3)',
            borderRadius: '14px',
            overflow: 'hidden',
          }}>
            <div style={{ background: 'rgba(239,68,68,0.08)', padding: '1rem 1.5rem', borderBottom: '1px solid rgba(239,68,68,0.15)' }}>
              <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#ef4444', margin: 0 }}>
                ⏳ طلبات تفعيل الدروس المعلقة
              </h2>
            </div>
            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {!data || data.pendingLessons.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '2.5rem', color: '#475569' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>✅</div>
                  <p style={{ margin: 0 }}>لا توجد طلبات معلقة</p>
                </div>
              ) : (
                data.pendingLessons.map((req, i) => (
                  <div key={i} style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '10px',
                    padding: '1rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                  }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, color: '#f1f5f9', marginBottom: '0.2rem' }}>
                        {req.student_name}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.3rem' }}>{req.email}</div>
                      <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                        📖 الكورس: <span style={{ color: '#f59e0b' }}>{req.course_title}</span>
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.2rem' }}>
                        🔑 الدرس: {req.lesson_slug}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                      <button
                        onClick={() => handleApproveLesson(req.email, req.lesson_slug, true)}
                        style={{ background: 'linear-gradient(135deg, #10b981, #059669)', color: '#000', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem', fontFamily: 'Cairo, sans-serif' }}
                      >
                        ✓ موافقة
                      </button>
                      <button
                        onClick={() => handleApproveLesson(req.email, req.lesson_slug, false)}
                        style={{ background: 'rgba(239,68,68,0.15)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.3)', padding: '0.6rem 1.2rem', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem', fontFamily: 'Cairo, sans-serif' }}
                      >
                        ✕ رفض
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Top Courses */}
          <div style={{
            background: 'rgba(15,23,42,0.8)',
            border: '1px solid rgba(16,185,129,0.2)',
            borderRadius: '14px',
            overflow: 'hidden',
          }}>
            <div style={{ background: 'rgba(16,185,129,0.08)', padding: '1rem 1.5rem', borderBottom: '1px solid rgba(16,185,129,0.15)' }}>
              <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#10b981', margin: 0 }}>
                📊 الكورسات حسب التسجيلات
              </h2>
            </div>
            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {!data || data.topCourses.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '2rem', color: '#475569' }}>لا توجد كورسات بعد</div>
              ) : (
                data.topCourses.map((course, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.75rem',
                    background: 'rgba(255,255,255,0.02)',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.04)',
                  }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      background: 'rgba(16,185,129,0.15)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#10b981',
                      fontWeight: 800,
                      fontFamily: 'monospace',
                      flexShrink: 0,
                    }}>
                      {i + 1}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ color: '#f1f5f9', fontWeight: 600, fontSize: '0.9rem' }}>
                        {course.title_ar || course.title}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{course.category}</div>
                    </div>
                    <div style={{
                      background: 'rgba(16,185,129,0.1)',
                      color: '#10b981',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      fontFamily: 'monospace',
                    }}>
                      {course.enrolled_count} طالب
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Right: Top Students */}
        <div style={{
          background: 'rgba(15,23,42,0.8)',
          border: '1px solid rgba(139,92,246,0.2)',
          borderRadius: '14px',
          overflow: 'hidden',
          height: 'fit-content',
        }}>
          <div style={{ background: 'rgba(139,92,246,0.08)', padding: '1rem 1.5rem', borderBottom: '1px solid rgba(139,92,246,0.15)' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#a78bfa', margin: 0 }}>
              🏆 أفضل الطلاب — المتصدرون
            </h2>
          </div>
          <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {!data || data.topStudents.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#475569' }}>لا يوجد طلاب بعد</div>
            ) : (
              data.topStudents.map((student, i) => {
                const medals = ['🥇', '🥈', '🥉'];
                const bgColors = ['rgba(251,191,36,0.08)', 'rgba(148,163,184,0.06)', 'rgba(180,83,9,0.06)'];
                return (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    background: bgColors[i] || 'rgba(255,255,255,0.02)',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}>
                    <div style={{ fontSize: '1.5rem', flexShrink: 0 }}>{medals[i] || `#${i + 1}`}</div>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      color: '#fff',
                      fontSize: '1rem',
                      flexShrink: 0,
                    }}>
                      {(student.name || '?').charAt(0)}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 700, color: '#f1f5f9', fontSize: '0.9rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {student.name}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {student.email}
                      </div>
                    </div>
                    <div style={{
                      background: 'rgba(139,92,246,0.15)',
                      color: '#a78bfa',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      fontFamily: 'monospace',
                      flexShrink: 0,
                    }}>
                      {(student.xp || 0)} XP
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Quick note */}
          <div style={{ padding: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#475569', textAlign: 'center' }}>
              * الأرقام مباشرة من قاعدة البيانات — بدون أرقام وهمية
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
}
