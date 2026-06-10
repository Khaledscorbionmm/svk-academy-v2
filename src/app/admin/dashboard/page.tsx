'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface AdminUser {
  id: number;
  email: string;
  name: string;
  role: string;
}

interface RadarData {
  stats: {
    totalStudents: number;
    totalCourses: number;
    revenue: number;
    pendingRequests: number;
  };
  requests: any[];
  recentSignups: any[];
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
  const [radarData, setRadarData] = useState<RadarData | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    fetchUser();
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (user) {
      fetchRadarData();
      const radarInterval = setInterval(fetchRadarData, 10000); // Live poll every 10s
      return () => clearInterval(radarInterval);
    }
  }, [user]);

  async function fetchUser() {
    try {
      const res = await fetch('/api/auth/me');
      if (res.ok) {
        const data = await res.json();
        if (data.user && data.user.role === 'admin') {
          setUser(data.user);
        } else router.push('/admin/login');
      } else router.push('/admin/login');
    } catch {
      router.push('/admin/login');
    } finally {
      setLoading(false);
    }
  }

  async function fetchRadarData() {
    try {
      const res = await fetch('/api/admin/radar');
      if (res.ok) {
        const data = await res.json();
        setRadarData(data);
      }
    } catch (e) {
      console.error('Failed to fetch radar data', e);
    }
  }

  async function handleApprove(studentId: number, lessonSlug: string, approve: boolean) {
    try {
      const status = approve ? 'approved' : 'rejected';
      await fetch('/api/lessons/access', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentId, lessonSlug, status }),
      });
      fetchRadarData(); // Refresh immediately
    } catch (e) {
      console.error('Error approving request', e);
    }
  }

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#050508' }}>
        <div style={{ width: '60px', height: '60px', border: '3px solid rgba(16,185,129,0.3)', borderTopColor: '#10b981', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      {/* Dynamic Background */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(16,185,129,0.03) 0%, transparent 60%)', borderRadius: '50%', animation: 'pulse 4s infinite' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', border: '1px solid rgba(16,185,129,0.05)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '400px', height: '400px', border: '1px solid rgba(16,185,129,0.1)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '200px', height: '200px', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '50%' }} />
        {/* Radar Scanner Line */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', width: '400px', height: '2px', background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.8))', transformOrigin: 'left center', animation: 'scan 4s linear infinite' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Header bar */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', background: 'rgba(5,5,10,0.6)', border: '1px solid rgba(16,185,129,0.2)', padding: '1rem 2rem', borderRadius: '12px', backdropFilter: 'blur(10px)' }}>
          <div>
            <div style={{ fontSize: '0.8rem', color: '#10b981', fontFamily: 'monospace', marginBottom: '0.2rem' }}>STATUS: ONLINE</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>LIVE MONITORING ACTIVE</div>
          </div>
          <div style={{ textAlign: 'left', fontFamily: 'monospace', color: '#94a3b8' }}>
            <div>SYS.TIME: {currentTime.toLocaleTimeString('en-US', { hour12: false })}</div>
            <div>UPTIME: 99.99%</div>
          </div>
        </header>

        {radarData && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '2rem' }}>
            {/* Left side: Requests & Feed */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Stats HUD */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                {[
                  { label: 'ACTIVE STUDENTS', value: radarData.stats.totalStudents, icon: '👤', color: '#3b82f6' },
                  { label: 'EST. REVENUE', value: `${radarData.stats.revenue} EGP`, icon: '💎', color: '#10b981' },
                  { label: 'PENDING ACCESS', value: radarData.stats.pendingRequests, icon: '⚠️', color: '#ef4444' }
                ].map((stat, i) => (
                  <div key={i} style={{ background: 'rgba(5,5,10,0.8)', border: `1px solid ${stat.color}40`, borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: stat.color }} />
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.5rem', letterSpacing: '1px' }}>{stat.label}</div>
                    <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', fontFamily: 'monospace' }}>{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Action Center: Pending Requests */}
              <div style={{ background: 'rgba(5,5,10,0.8)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ background: 'rgba(239,68,68,0.1)', padding: '1rem 1.5rem', borderBottom: '1px solid rgba(239,68,68,0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h2 style={{ fontSize: '1rem', color: '#ef4444', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '8px', height: '8px', background: '#ef4444', borderRadius: '50%', animation: 'pulse 1s infinite' }} />
                    ACTION REQUIRED: ACCESS REQUESTS
                  </h2>
                </div>
                <div style={{ padding: '1rem' }}>
                  {radarData.requests.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '3rem', color: '#64748b', fontFamily: 'monospace' }}>NO PENDING ALERTS</div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {radarData.requests.map(req => (
                        <div key={req.id} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                              <span style={{ color: '#fff', fontWeight: 700 }}>{req.student_name}</span>
                              <span style={{ color: '#64748b', fontSize: '0.8rem' }}>({req.student_email})</span>
                            </div>
                            <div style={{ color: '#3b82f6', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <span>REQUESTS UNLOCK:</span>
                              <strong>{LESSON_NAMES[req.lesson_slug] || req.lesson_slug}</strong>
                            </div>
                          </div>
                          <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button onClick={() => handleApprove(req.student_id, req.lesson_slug, true)} style={{ background: '#10b981', color: '#000', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s' }}>GRANT ✓</button>
                            <button onClick={() => handleApprove(req.student_id, req.lesson_slug, false)} style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s' }}>DENY ✕</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right side: Live Feed */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ background: 'rgba(5,5,10,0.8)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '12px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(16,185,129,0.1)' }}>
                  <h2 style={{ fontSize: '1rem', color: '#10b981', margin: 0, fontFamily: 'monospace' }}>&gt;_ LIVE ACTIVITY FEED</h2>
                </div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: 'monospace', fontSize: '0.85rem' }}>
                  {radarData.recentSignups.map((user, i) => (
                    <div key={user.id} style={{ display: 'flex', gap: '1rem', animation: `slideIn 0.3s ease ${i * 0.1}s forwards`, opacity: 0 }}>
                      <div style={{ color: '#64748b' }}>{new Date(user.created_at).toLocaleTimeString('en-US', { hour12: false })}</div>
                      <div style={{ flex: 1 }}>
                        <span style={{ color: '#10b981' }}>[NEW_USER]</span> {user.name} registered.
                      </div>
                    </div>
                  ))}
                  {radarData.requests.slice(0, 3).map((req, i) => (
                    <div key={req.id + 'feed'} style={{ display: 'flex', gap: '1rem', animation: `slideIn 0.3s ease ${(i + radarData.recentSignups.length) * 0.1}s forwards`, opacity: 0 }}>
                      <div style={{ color: '#64748b' }}>{new Date(req.requested_at).toLocaleTimeString('en-US', { hour12: false })}</div>
                      <div style={{ flex: 1 }}>
                        <span style={{ color: '#ef4444' }}>[ALERT]</span> {req.student_name} requests access to {req.lesson_slug}.
                      </div>
                    </div>
                  ))}
                  {/* Blinking cursor */}
                  <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                    <div style={{ color: '#64748b' }}>{currentTime.toLocaleTimeString('en-US', { hour12: false })}</div>
                    <div style={{ flex: 1, color: '#10b981' }}>
                      <span style={{ animation: 'pulse 1s infinite' }}>_</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); } 50% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); } }
        @keyframes scan { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes slideIn { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
      `}</style>
    </div>
  );
}
