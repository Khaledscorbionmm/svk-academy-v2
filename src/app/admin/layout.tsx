'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  const links = [
    { href: '/admin/dashboard', label: '📡 نظام الرادار' },
    { href: '/admin/courses', label: '📚 الكورسات والدروس' },
    { href: '/admin/students', label: '👥 الطلاب' },
    { href: '/admin/payments', label: '💳 المدفوعات' },
  ];

  async function handleLogout() {
    setLoggingOut(true);
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  }

  // Hide sidebar on login page
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', background: '#020205', fontFamily: "'Cairo', sans-serif", direction: 'rtl', color: '#e2e8f0', overflow: 'hidden' }}>
      {/* Sidebar */}
      <aside style={{ width: '260px', background: 'rgba(5,5,10,0.8)', backdropFilter: 'blur(20px)', borderLeft: '1px solid rgba(16,185,129,0.1)', display: 'flex', flexDirection: 'column', zIndex: 10 }}>
        <div style={{ padding: '2rem 1.5rem', borderBottom: '1px solid rgba(16,185,129,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '12px', height: '12px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 10px #10b981' }} />
            <h1 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#10b981', margin: 0, letterSpacing: '2px' }}>SVK.ADMIN</h1>
          </div>
          <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.5rem', fontFamily: 'monospace' }}>LMS CONTROL PANEL</p>
        </div>

        <nav style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {links.map(link => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: isActive ? 'rgba(16,185,129,0.1)' : 'transparent',
                  border: `1px solid ${isActive ? 'rgba(16,185,129,0.3)' : 'transparent'}`,
                  color: isActive ? '#10b981' : '#94a3b8',
                  padding: '1rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  textAlign: 'right',
                  transition: 'all 0.2s',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span>{link.label}</span>
                </div>
              </Link>
            );
          })}
        </nav>

        <div style={{ padding: '1.5rem', borderTop: '1px solid rgba(16,185,129,0.1)' }}>
          <button onClick={handleLogout} disabled={loggingOut} style={{ width: '100%', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171', padding: '1rem', borderRadius: '8px', cursor: 'pointer', textAlign: 'center', transition: 'all 0.2s' }}>
            {loggingOut ? 'جاري الخروج...' : 'إغلاق النظام 🛑'}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, position: 'relative', zIndex: 10, overflowY: 'auto' }}>
        {children}
      </main>

      <style>{`
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #050508; }
        ::-webkit-scrollbar-thumb { background: #1f2937; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #374151; }
      `}</style>
    </div>
  );
}
