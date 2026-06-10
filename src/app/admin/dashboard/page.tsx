'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface AdminUser {
  id: number;
  email: string;
  name: string;
  role: string;
}

interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  country: string;
  created_at: string;
}

interface LessonRequest {
  id: number;
  student_id: number;
  student_name: string;
  student_email: string;
  lesson_slug: string;
  status: string;
  requested_at: string;
  approved_at: string | null;
}

const LESSON_NAMES: Record<string, string> = {
  'python-vars': 'المتغيرات وأنواع البيانات',
  'python-if': 'الشروط if/elif/else',
  'python-loops': 'الحلقات for و while',
  'python-fns': 'الدوال Functions',
  'python-lists': 'القوائم Lists',
  'python-dicts': 'القواميس Dicts',
};

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'lessons' | 'students'>('dashboard');
  const [students, setStudents] = useState<Student[]>([]);
  const [requests, setRequests] = useState<LessonRequest[]>([]);
  const [loggingOut, setLoggingOut] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Stats
  const [studentCount, setStudentCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);

  useEffect(() => {
    fetchUser();
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (user) {
      loadTabContent();
    }
  }, [user, activeTab]);

  async function fetchUser() {
    try {
      const res = await fetch('/api/auth/me');
      if (res.ok) {
        const data = await res.json();
        if (data.user && data.user.role === 'admin') {
          setUser(data.user);
        } else {
          router.push('/admin/login');
        }
      } else {
        router.push('/admin/login');
      }
    } catch {
      router.push('/admin/login');
    } finally {
      setLoading(false);
    }
  }

  async function loadTabContent() {
    try {
      // Load general stats / updates on active tab
      if (activeTab === 'dashboard') {
        const resS = await fetch('/api/admin/students');
        const resR = await fetch('/api/admin/requests');
        if (resS.ok) {
          const dataS = await resS.json();
          setStudents(dataS.students || []);
          setStudentCount(dataS.students?.length || 0);
        }
        if (resR.ok) {
          const dataR = await resR.json();
          setRequests(dataR.requests || []);
          setPendingCount(dataR.requests?.filter((r: any) => r.status === 'requested').length || 0);
        }
      } else if (activeTab === 'students') {
        const res = await fetch('/api/admin/students');
        if (res.ok) {
          const data = await res.json();
          setStudents(data.students || []);
        }
      } else if (activeTab === 'lessons') {
        const res = await fetch('/api/admin/requests');
        if (res.ok) {
          const data = await res.json();
          setRequests(data.requests || []);
        }
      }
    } catch (e) {
      console.error('Error loading tab content', e);
    }
  }

  async function handleApprove(studentId: number, lessonSlug: string, approve: boolean) {
    try {
      const status = approve ? 'approved' : 'requested';
      const res = await fetch('/api/lessons/access', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentId, lessonSlug, status }),
      });
      if (res.ok) {
        loadTabContent();
      }
    } catch (e) {
      console.error('Error approving request', e);
    }
  }

  async function handleLogout() {
    setLoggingOut(true);
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#050508', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '50px', height: '50px', border: '3px solid rgba(99,102,241,0.3)', borderTopColor: '#6366f1', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 1rem' }} />
          <p style={{ color: 'rgba(148,163,184,0.7)' }}>جاري التحميل...</p>
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  const formatTime = (d: Date) => d.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const formatDate = (d: Date) => d.toLocaleDateString('ar-EG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div style={{ minHeight: '100vh', display: 'flex', background: '#050508', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet" />

      {/* Sidebar */}
      <aside style={{ width: '260px', minHeight: '100vh', background: 'rgba(8,8,20,0.98)', borderLeft: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 50 }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', boxShadow: '0 4px 15px rgba(99,102,241,0.35)' }}>🎓</div>
            <div>
              <div style={{ fontWeight: '700', color: '#f1f5f9', fontSize: '1rem' }}>SVK Academy</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(148,163,184,0.6)' }}>لوحة الإدارة</div>
            </div>
          </div>
        </div>

        <nav style={{ flex: 1, padding: '1rem 0.75rem', overflowY: 'auto' }}>
          <div style={{ fontSize: '0.7rem', color: 'rgba(71,85,105,0.8)', padding: '0 0.5rem', marginBottom: '0.5rem', fontWeight: '600', letterSpacing: '0.05em' }}>القائمة الرئيسية</div>
          
          <button onClick={() => setActiveTab('dashboard')} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.7rem 1rem', marginBottom: '0.2rem', borderRadius: '10px', color: activeTab === 'dashboard' ? 'white' : 'rgba(148,163,184,0.8)', background: activeTab === 'dashboard' ? 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.2))' : 'transparent', border: activeTab === 'dashboard' ? '1px solid rgba(99,102,241,0.25)' : '1px solid transparent', transition: 'all 0.2s ease', cursor: 'pointer', width: '100%', textAlign: 'right', fontFamily: "'Cairo', sans-serif" }}>
            <span style={{ fontSize: '1.05rem' }}>📊</span>
            <span>لوحة التحكم</span>
          </button>

          <button onClick={() => setActiveTab('lessons')} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.7rem 1rem', marginBottom: '0.2rem', borderRadius: '10px', color: activeTab === 'lessons' ? 'white' : 'rgba(148,163,184,0.8)', background: activeTab === 'lessons' ? 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.2))' : 'transparent', border: activeTab === 'lessons' ? '1px solid rgba(99,102,241,0.25)' : '1px solid transparent', transition: 'all 0.2s ease', cursor: 'pointer', width: '100%', textAlign: 'right', fontFamily: "'Cairo', sans-serif" }}>
            <span style={{ fontSize: '1.05rem' }}>🔑</span>
            <span>تفعيل الدروس ({pendingCount})</span>
          </button>

          <button onClick={() => setActiveTab('students')} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.7rem 1rem', marginBottom: '0.2rem', borderRadius: '10px', color: activeTab === 'students' ? 'white' : 'rgba(148,163,184,0.8)', background: activeTab === 'students' ? 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.2))' : 'transparent', border: activeTab === 'students' ? '1px solid rgba(99,102,241,0.25)' : '1px solid transparent', transition: 'all 0.2s ease', cursor: 'pointer', width: '100%', textAlign: 'right', fontFamily: "'Cairo', sans-serif" }}>
            <span style={{ fontSize: '1.05rem' }}>👥</span>
            <span>الطلاب ({studentCount})</span>
          </button>
        </nav>

        {/* Profile */}
        <div style={{ padding: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', background: 'rgba(255,255,255,0.04)', borderRadius: '12px', marginBottom: '0.75rem' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, #f59e0b, #ef4444)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: '700', color: 'white', flexShrink: 0 }}>
              {user?.name?.charAt(0) || 'A'}
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontWeight: '600', color: '#f1f5f9', fontSize: '0.85rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user?.name || 'Admin'}</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(148,163,184,0.6)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user?.email}</div>
            </div>
          </div>
          <button onClick={handleLogout} disabled={loggingOut} style={{ width: '100%', padding: '0.6rem', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '10px', color: '#f87171', fontSize: '0.825rem', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', transition: 'all 0.2s ease', fontFamily: "'Cairo', sans-serif" }}>
            {loggingOut ? '...' : '🚪 تسجيل الخروج'}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, marginRight: '260px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <header style={{ padding: '1rem 2rem', background: 'rgba(8,8,20,0.7)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 40 }}>
          <div>
            <h1 style={{ fontWeight: '700', color: '#f1f5f9', fontSize: '1.25rem' }}>
              {activeTab === 'dashboard' ? 'لوحة التحكم الرئيسية' : activeTab === 'lessons' ? 'طلبات تفعيل الدروس للطلاب' : 'قائمة الطلاب المسجلين'}
            </h1>
            <p style={{ fontSize: '0.8rem', color: 'rgba(148,163,184,0.6)' }}>{formatDate(currentTime)}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '0.4rem 1rem', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '8px', color: '#818cf8', fontSize: '0.85rem', fontWeight: '600', fontVariantNumeric: 'tabular-nums', direction: 'ltr' }}>
              {formatTime(currentTime)}
            </div>
          </div>
        </header>

        <div style={{ padding: '2rem', flex: 1 }}>

          {/* ── Tab 1: Dashboard ── */}
          {activeTab === 'dashboard' && (
            <div>
              <div style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.1) 50%, rgba(6,182,212,0.08) 100%)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '16px', padding: '1.5rem 2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
                <div>
                  <h2 style={{ fontSize: '1.375rem', fontWeight: '800', color: '#f1f5f9', marginBottom: '0.25rem' }}>مرحباً، {user?.name || 'Admin'} 👋</h2>
                  <p style={{ color: 'rgba(148,163,184,0.8)', fontSize: '0.9rem' }}>
                    لديك <strong style={{ color: '#fbbf24' }}>{pendingCount} طلب تفعيل معلق</strong> و <strong style={{ color: '#818cf8' }}>{studentCount} طالب مسجل</strong> في الأكاديمية.
                  </p>
                </div>
                <div style={{ fontSize: '3.5rem' }}>⚙️</div>
              </div>

              {/* Stats Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  { label: 'إجمالي الطلاب', value: studentCount, icon: '👥', color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
                  { label: 'طلبات التفعيل المعلقة', value: pendingCount, icon: '🔑', color: '#fbbf24', bg: 'rgba(251,191,36,0.1)' },
                  { label: 'الكورسات المنشورة', value: '6', icon: '🎓', color: '#6366f1', bg: 'rgba(99,102,241,0.1)' },
                  { label: 'سعر تفعيل الكورس', value: '369 ج.م', icon: '💰', color: '#06b6d4', bg: 'rgba(6,182,212,0.1)' },
                ].map((stat, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: stat.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>{stat.icon}</div>
                    </div>
                    <div style={{ fontSize: '1.875rem', fontWeight: '800', color: '#f1f5f9', marginBottom: '0.25rem' }}>{stat.value}</div>
                    <div style={{ fontSize: '0.825rem', color: 'rgba(148,163,184,0.7)' }}>{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Quick requests table on dashboard */}
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', overflow: 'hidden' }}>
                <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <h3 style={{ fontWeight: '700', color: '#f1f5f9', fontSize: '1rem' }}>🔑 أحدث طلبات التفعيل</h3>
                  <button onClick={() => setActiveTab('lessons')} style={{ fontSize: '0.8rem', color: '#6366f1', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '600', fontFamily: "'Cairo', sans-serif" }}>عرض الكل ←</button>
                </div>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                        {['الطالب', 'البريد الإلكتروني', 'الدرس المطلوب', 'الحالة', 'الإجراء'].map((h) => (
                          <th key={h} style={{ padding: '0.75rem 1.5rem', textAlign: 'right', fontSize: '0.75rem', color: 'rgba(100,116,139,0.8)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {requests.slice(0, 5).map((req) => (
                        <tr key={req.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                          <td style={{ padding: '1rem 1.5rem', color: '#e2e8f0', fontSize: '0.875rem', fontWeight: '500' }}>{req.student_name}</td>
                          <td style={{ padding: '1rem 1.5rem', color: 'rgba(148,163,184,0.8)', fontSize: '0.875rem' }}>{req.student_email}</td>
                          <td style={{ padding: '1rem 1.5rem', color: '#818cf8', fontSize: '0.875rem', fontWeight: '600' }}>{LESSON_NAMES[req.lesson_slug] || req.lesson_slug}</td>
                          <td style={{ padding: '1rem 1.5rem' }}>
                            <span style={{ padding: '3px 10px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '600', background: req.status === 'approved' ? 'rgba(16,185,129,0.15)' : 'rgba(245,158,11,0.15)', border: `1px solid ${req.status === 'approved' ? '#10b981' : '#f59e0b'}40`, color: req.status === 'approved' ? '#10b981' : '#f59e0b' }}>
                              {req.status === 'approved' ? 'مفعل ✓' : 'معلق ⏳'}
                            </span>
                          </td>
                          <td style={{ padding: '1rem 1.5rem' }}>
                            {req.status !== 'approved' ? (
                              <button onClick={() => handleApprove(req.student_id, req.lesson_slug, true)} style={{ background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(16,185,129,0.3)', color: '#34d399', padding: '4px 12px', borderRadius: '6px', fontSize: '0.75rem', cursor: 'pointer', fontFamily: "'Cairo', sans-serif", fontWeight: '700' }}>موافقة وتفعيل</button>
                            ) : (
                              <button onClick={() => handleApprove(req.student_id, req.lesson_slug, false)} style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171', padding: '4px 12px', borderRadius: '6px', fontSize: '0.75rem', cursor: 'pointer', fontFamily: "'Cairo', sans-serif" }}>قفل الدرس</button>
                            )}
                          </td>
                        </tr>
                      ))}
                      {requests.length === 0 && (
                        <tr>
                          <td colSpan={5} style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>لا توجد طلبات تفعيل حالياً.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ── Tab 2: Lesson Requests ── */}
          {activeTab === 'lessons' && (
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', overflow: 'hidden' }}>
              <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <h3 style={{ fontWeight: '700', color: '#f1f5f9', fontSize: '1rem' }}>🔑 إدارة طلبات تفعيل الدروس</h3>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                      {['الطالب', 'البريد الإلكتروني', 'الدرس المطلوب', 'تاريخ الطلب', 'الحالة', 'الإجراء'].map((h) => (
                        <th key={h} style={{ padding: '0.75rem 1.5rem', textAlign: 'right', fontSize: '0.75rem', color: 'rgba(100,116,139,0.8)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {requests.map((req) => (
                      <tr key={req.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                        <td style={{ padding: '1rem 1.5rem', color: '#e2e8f0', fontSize: '0.875rem', fontWeight: '500' }}>{req.student_name}</td>
                        <td style={{ padding: '1rem 1.5rem', color: 'rgba(148,163,184,0.8)', fontSize: '0.875rem' }}>{req.student_email}</td>
                        <td style={{ padding: '1rem 1.5rem', color: '#818cf8', fontSize: '0.875rem', fontWeight: '600' }}>{LESSON_NAMES[req.lesson_slug] || req.lesson_slug}</td>
                        <td style={{ padding: '1rem 1.5rem', color: '#64748b', fontSize: '0.8rem' }}>{new Date(req.requested_at).toLocaleDateString('ar-EG')}</td>
                        <td style={{ padding: '1rem 1.5rem' }}>
                          <span style={{ padding: '3px 10px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '600', background: req.status === 'approved' ? 'rgba(16,185,129,0.15)' : 'rgba(245,158,11,0.15)', border: `1px solid ${req.status === 'approved' ? '#10b981' : '#f59e0b'}40`, color: req.status === 'approved' ? '#10b981' : '#f59e0b' }}>
                            {req.status === 'approved' ? 'مفعل ✓' : 'معلق ⏳'}
                          </span>
                        </td>
                        <td style={{ padding: '1rem 1.5rem' }}>
                          {req.status !== 'approved' ? (
                            <button onClick={() => handleApprove(req.student_id, req.lesson_slug, true)} style={{ background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(16,185,129,0.3)', color: '#34d399', padding: '6px 16px', borderRadius: '8px', fontSize: '0.8rem', cursor: 'pointer', fontFamily: "'Cairo', sans-serif", fontWeight: '700' }}>تفعيل الدرس</button>
                          ) : (
                            <button onClick={() => handleApprove(req.student_id, req.lesson_slug, false)} style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171', padding: '6px 16px', borderRadius: '8px', fontSize: '0.8rem', cursor: 'pointer', fontFamily: "'Cairo', sans-serif" }}>قفل وتأمين</button>
                          )}
                        </td>
                      </tr>
                    ))}
                    {requests.length === 0 && (
                      <tr>
                        <td colSpan={6} style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>لا توجد طلبات تفعيل حالياً.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ── Tab 3: Students Directory ── */}
          {activeTab === 'students' && (
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', overflow: 'hidden' }}>
              <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <h3 style={{ fontWeight: '700', color: '#f1f5f9', fontSize: '1rem' }}>👥 دليل الطلاب المسجلين</h3>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                      {['رقم الطالب', 'الاسم الكامل', 'البريد الإلكتروني', 'رقم الهاتف', 'الدولة', 'تاريخ التسجيل'].map((h) => (
                        <th key={h} style={{ padding: '0.75rem 1.5rem', textAlign: 'right', fontSize: '0.75rem', color: 'rgba(100,116,139,0.8)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr key={student.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                        <td style={{ padding: '1rem 1.5rem', color: '#64748b', fontSize: '0.85rem' }}>#{student.id}</td>
                        <td style={{ padding: '1rem 1.5rem', color: '#e2e8f0', fontSize: '0.875rem', fontWeight: '600' }}>{student.name}</td>
                        <td style={{ padding: '1rem 1.5rem', color: 'rgba(148,163,184,0.8)', fontSize: '0.875rem' }}>{student.email}</td>
                        <td style={{ padding: '1rem 1.5rem', color: '#06b6d4', fontSize: '0.85rem', direction: 'ltr', textAlign: 'right' }}>{student.phone || '—'}</td>
                        <td style={{ padding: '1rem 1.5rem', color: 'rgba(148,163,184,0.7)', fontSize: '0.85rem' }}>{student.country || 'مصر'}</td>
                        <td style={{ padding: '1rem 1.5rem', color: '#64748b', fontSize: '0.8rem' }}>{new Date(student.created_at).toLocaleDateString('ar-EG')}</td>
                      </tr>
                    ))}
                    {students.length === 0 && (
                      <tr>
                        <td colSpan={6} style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>لا يوجد طلاب مسجلون حتى الآن.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </main>

      <style>{`
        * { box-sizing: border-box; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          main { margin-right: 0 !important; }
          aside { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
