'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface AdminUser {
  id: number;
  email: string;
  name: string;
  role: string;
}

interface StatCard {
  label: string;
  value: string | number;
  icon: string;
  color: string;
  bg: string;
  change?: string;
}

const NAV_ITEMS = [
  { icon: '📊', label: 'لوحة التحكم', href: '/admin/dashboard', active: true },
  { icon: '🎓', label: 'الكورسات', href: '/admin/courses', active: false },
  { icon: '👥', label: 'الطلاب', href: '/admin/students', active: false },
  { icon: '📝', label: 'التسجيلات', href: '/admin/enrollments', active: false },
  { icon: '💰', label: 'المدفوعات', href: '/admin/payments', active: false },
  { icon: '📈', label: 'التقارير', href: '/admin/reports', active: false },
  { icon: '⚙️', label: 'الإعدادات', href: '/admin/settings', active: false },
];

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    fetchUser();
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  async function fetchUser() {
    try {
      const res = await fetch('/api/auth/me');
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      } else {
        router.push('/admin/login');
      }
    } catch {
      router.push('/admin/login');
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    setLoggingOut(true);
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  const stats: StatCard[] = [
    { label: 'إجمالي الكورسات', value: '24', icon: '🎓', color: '#6366f1', bg: 'rgba(99,102,241,0.1)', change: '+3 هذا الشهر' },
    { label: 'الطلاب المسجلون', value: '1,247', icon: '👥', color: '#10b981', bg: 'rgba(16,185,129,0.1)', change: '+128 هذا الشهر' },
    { label: 'الإيرادات (جنيه)', value: '84,320', icon: '💰', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', change: '+12.5%' },
    { label: 'التسجيلات النشطة', value: '892', icon: '📝', color: '#06b6d4', bg: 'rgba(6,182,212,0.1)', change: '+45 هذا الأسبوع' },
  ];

  const recentCourses = [
    { id: 1, title: 'تطوير تطبيقات الويب بـ React', students: 245, revenue: '12,250 ج.م', status: 'منشور', statusColor: '#10b981' },
    { id: 2, title: 'أساسيات الذكاء الاصطناعي', students: 189, revenue: '9,450 ج.م', status: 'منشور', statusColor: '#10b981' },
    { id: 3, title: 'تصميم واجهات المستخدم UI/UX', students: 134, revenue: '6,700 ج.م', status: 'مسودة', statusColor: '#f59e0b' },
    { id: 4, title: 'برمجة Python للمبتدئين', students: 312, revenue: '15,600 ج.م', status: 'منشور', statusColor: '#10b981' },
  ];

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#050508',
        fontFamily: "'Cairo', sans-serif",
        direction: 'rtl',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '50px', height: '50px',
            border: '3px solid rgba(99,102,241,0.3)',
            borderTopColor: '#6366f1',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
            margin: '0 auto 1rem',
          }} />
          <p style={{ color: 'rgba(148,163,184,0.7)' }}>جاري التحميل...</p>
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  const formatTime = (d: Date) =>
    d.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const formatDate = (d: Date) =>
    d.toLocaleDateString('ar-EG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      background: '#050508',
      fontFamily: "'Cairo', 'Inter', sans-serif",
      direction: 'rtl',
    }}>
      {/* Sidebar */}
      <aside style={{
        width: '260px',
        minHeight: '100vh',
        background: 'rgba(8,8,20,0.98)',
        borderLeft: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 50,
        transition: 'transform 0.3s ease',
      }}>
        {/* Sidebar header */}
        <div style={{
          padding: '1.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '42px', height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.25rem',
              boxShadow: '0 4px 15px rgba(99,102,241,0.35)',
            }}>
              🎓
            </div>
            <div>
              <div style={{ fontWeight: '700', color: '#f1f5f9', fontSize: '1rem' }}>SVK Academy</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(148,163,184,0.6)' }}>لوحة الإدارة</div>
            </div>
          </div>
        </div>

        {/* Nav items */}
        <nav style={{ flex: 1, padding: '1rem 0.75rem', overflowY: 'auto' }}>
          <div style={{ fontSize: '0.7rem', color: 'rgba(71,85,105,0.8)', padding: '0 0.5rem', marginBottom: '0.5rem', fontWeight: '600', letterSpacing: '0.05em' }}>
            القائمة الرئيسية
          </div>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.7rem 1rem',
                marginBottom: '0.2rem',
                borderRadius: '10px',
                color: item.active ? 'white' : 'rgba(148,163,184,0.8)',
                textDecoration: 'none',
                fontWeight: item.active ? '600' : '500',
                fontSize: '0.875rem',
                background: item.active
                  ? 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.2))'
                  : 'transparent',
                border: item.active ? '1px solid rgba(99,102,241,0.25)' : '1px solid transparent',
                transition: 'all 0.2s ease',
              }}
            >
              <span style={{ fontSize: '1.05rem' }}>{item.icon}</span>
              <span>{item.label}</span>
              {item.active && (
                <div style={{
                  marginRight: 'auto',
                  width: '6px', height: '6px',
                  borderRadius: '50%',
                  background: '#6366f1',
                  boxShadow: '0 0 6px rgba(99,102,241,0.8)',
                }} />
              )}
            </a>
          ))}
        </nav>

        {/* User profile */}
        <div style={{
          padding: '1rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.75rem',
            background: 'rgba(255,255,255,0.04)',
            borderRadius: '12px',
            marginBottom: '0.75rem',
          }}>
            <div style={{
              width: '36px', height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
              fontWeight: '700',
              color: 'white',
              flexShrink: 0,
            }}>
              {user?.name?.charAt(0) || 'A'}
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontWeight: '600', color: '#f1f5f9', fontSize: '0.85rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {user?.name || 'Admin'}
              </div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(148,163,184,0.6)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {user?.email}
              </div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            style={{
              width: '100%',
              padding: '0.6rem',
              background: 'rgba(239,68,68,0.1)',
              border: '1px solid rgba(239,68,68,0.2)',
              borderRadius: '10px',
              color: '#f87171',
              fontSize: '0.825rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s ease',
              fontFamily: "'Cairo', sans-serif",
            }}
          >
            {loggingOut ? '...' : '🚪 تسجيل الخروج'}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main style={{
        flex: 1,
        marginRight: '260px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Top bar */}
        <header style={{
          padding: '1rem 2rem',
          background: 'rgba(8,8,20,0.7)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 40,
        }}>
          <div>
            <h1 style={{ fontWeight: '700', color: '#f1f5f9', fontSize: '1.25rem' }}>
              لوحة التحكم الرئيسية
            </h1>
            <p style={{ fontSize: '0.8rem', color: 'rgba(148,163,184,0.6)' }}>
              {formatDate(currentTime)}
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Live clock */}
            <div style={{
              padding: '0.4rem 1rem',
              background: 'rgba(99,102,241,0.1)',
              border: '1px solid rgba(99,102,241,0.2)',
              borderRadius: '8px',
              color: '#818cf8',
              fontSize: '0.85rem',
              fontWeight: '600',
              fontVariantNumeric: 'tabular-nums',
              direction: 'ltr',
            }}>
              {formatTime(currentTime)}
            </div>
            {/* Notification bell */}
            <div style={{
              width: '38px', height: '38px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '1.1rem',
              position: 'relative',
            }}>
              🔔
              <div style={{
                position: 'absolute',
                top: '6px', right: '6px',
                width: '8px', height: '8px',
                borderRadius: '50%',
                background: '#ef4444',
                border: '2px solid #050508',
              }} />
            </div>
          </div>
        </header>

        {/* Page body */}
        <div style={{ padding: '2rem', flex: 1 }}>
          {/* Welcome banner */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.1) 50%, rgba(6,182,212,0.08) 100%)',
            border: '1px solid rgba(99,102,241,0.2)',
            borderRadius: '16px',
            padding: '1.5rem 2rem',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            overflow: 'hidden',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              left: '-50px', top: '-50px',
              width: '200px', height: '200px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(99,102,241,0.1), transparent)',
              filter: 'blur(30px)',
            }} />
            <div>
              <h2 style={{
                fontSize: '1.375rem',
                fontWeight: '800',
                color: '#f1f5f9',
                marginBottom: '0.25rem',
              }}>
                مرحباً، {user?.name || 'Admin'} 👋
              </h2>
              <p style={{ color: 'rgba(148,163,184,0.8)', fontSize: '0.9rem' }}>
                لديك <strong style={{ color: '#818cf8' }}>5 تسجيلات جديدة</strong> و<strong style={{ color: '#34d399' }}>3 كورسات</strong> تنتظر المراجعة اليوم
              </p>
            </div>
            <div style={{ fontSize: '4rem', opacity: 0.6 }}>🚀</div>
          </div>

          {/* Stats grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem',
          }}>
            {stats.map((stat, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                padding: '1.5rem',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.06)';
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${stat.color}40`;
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 30px ${stat.color}20`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.03)';
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{
                    width: '44px', height: '44px',
                    borderRadius: '12px',
                    background: stat.bg,
                    border: `1px solid ${stat.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                  }}>
                    {stat.icon}
                  </div>
                </div>
                <div style={{ fontSize: '1.875rem', fontWeight: '800', color: '#f1f5f9', fontVariantNumeric: 'tabular-nums', marginBottom: '0.25rem' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.825rem', color: 'rgba(148,163,184,0.7)', marginBottom: '0.5rem' }}>
                  {stat.label}
                </div>
                {stat.change && (
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                  }}>
                    ↗ {stat.change}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Recent courses table */}
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '16px',
            overflow: 'hidden',
          }}>
            <div style={{
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <h3 style={{ fontWeight: '700', color: '#f1f5f9', fontSize: '1rem' }}>
                🎓 أحدث الكورسات
              </h3>
              <a href="/admin/courses" style={{
                fontSize: '0.8rem',
                color: '#6366f1',
                textDecoration: 'none',
                fontWeight: '600',
              }}>
                عرض الكل ←
              </a>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                    {['الكورس', 'الطلاب', 'الإيراد', 'الحالة'].map((h) => (
                      <th key={h} style={{
                        padding: '0.75rem 1.5rem',
                        textAlign: 'right',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: 'rgba(100,116,139,0.8)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        borderBottom: '1px solid rgba(255,255,255,0.04)',
                      }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {recentCourses.map((course, i) => (
                    <tr
                      key={course.id}
                      style={{
                        borderBottom: i < recentCourses.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                        transition: 'background 0.2s',
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLTableRowElement).style.background = 'rgba(255,255,255,0.03)'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLTableRowElement).style.background = 'transparent'; }}
                    >
                      <td style={{ padding: '1rem 1.5rem', color: '#e2e8f0', fontSize: '0.875rem', fontWeight: '500' }}>
                        {course.title}
                      </td>
                      <td style={{ padding: '1rem 1.5rem', color: 'rgba(148,163,184,0.8)', fontSize: '0.875rem' }}>
                        👥 {course.students}
                      </td>
                      <td style={{ padding: '1rem 1.5rem', color: '#f59e0b', fontSize: '0.875rem', fontWeight: '600', direction: 'ltr', textAlign: 'left' }}>
                        {course.revenue}
                      </td>
                      <td style={{ padding: '1rem 1.5rem' }}>
                        <span style={{
                          padding: '3px 10px',
                          borderRadius: '100px',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          background: `${course.statusColor}15`,
                          border: `1px solid ${course.statusColor}40`,
                          color: course.statusColor,
                        }}>
                          {course.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          main { margin-right: 0 !important; }
          aside { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
