'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminRequests() {
  const router = useRouter();
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/auth/me', { cache: 'no-store' }).then(r => r.json()).then(d => {
      if (!d.user || d.user.role !== 'admin') router.push('/admin/login');
    }).catch(() => router.push('/admin/login'));

    fetchRequests();
  }, []);

  async function fetchRequests() {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/requests');
      if (res.ok) {
        const d = await res.json();
        // Merge courseRequests and lessonRequests for a unified inbox
        const combined = [
          ...(d.courseRequests || []).map((r: any) => ({ ...r, type: 'course' })),
          ...(d.lessonRequests || []).map((r: any) => ({ ...r, type: 'lesson' }))
        ].sort((a, b) => new Date(b.requested_at).getTime() - new Date(a.requested_at).getTime());
        setRequests(combined);
      }
    } catch (e) {
      console.error('Failed to fetch requests', e);
    } finally {
      setLoading(false);
    }
  }

  async function handleApprove(req: any) {
    setActionLoading(`${req.student_id}-${req.course_id}`);
    try {
      if (req.type === 'course') {
        const res = await fetch('/api/admin/requests/approve', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ studentId: req.student_id, courseId: req.course_id, action: 'approve' }),
        });
        if (res.ok) fetchRequests();
        else alert('حدث خطأ');
      } else {
        // Handle individual lesson request via /api/lessons/access PUT
        const res = await fetch('/api/lessons/access', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ studentEmail: req.student_email, lessonSlug: req.lesson_slug, status: 'approved' }),
        });
        if (res.ok) fetchRequests();
        else alert('حدث خطأ');
      }
    } catch (e) {
      console.error(e);
      alert('خطأ في الشبكة');
    } finally {
      setActionLoading(null);
    }
  }

  return (
    <div style={{ padding: '2rem', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, margin: 0, color: '#10b981' }}>📥 طلبات التفعيل والإشتراكات</h1>
          <p style={{ color: '#94a3b8', margin: '0.5rem 0 0 0' }}>
            {loading ? 'جاري التحميل...' : `${requests.length} طلبات معلقة (فودافون كاش / انستا باي)`}
          </p>
        </div>
      </header>

      <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '12px', overflow: 'hidden', backdropFilter: 'blur(10px)' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#64748b' }}>جاري التحميل...</div>
        ) : requests.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#64748b' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
            <p style={{ margin: 0 }}>صندوق الطلبات فارغ، لقد قمت بمراجعة كل شيء.</p>
          </div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
            <thead>
              <tr style={{ background: 'rgba(16,185,129,0.1)', borderBottom: '1px solid rgba(16,185,129,0.2)' }}>
                <th style={{ padding: '1rem 1.5rem', color: '#10b981', fontWeight: 700 }}>النوع</th>
                <th style={{ padding: '1rem 1.5rem', color: '#10b981', fontWeight: 700 }}>الطالب</th>
                <th style={{ padding: '1rem 1.5rem', color: '#10b981', fontWeight: 700 }}>الكورس / الدرس</th>
                <th style={{ padding: '1rem 1.5rem', color: '#10b981', fontWeight: 700 }}>تاريخ الطلب</th>
                <th style={{ padding: '1rem 1.5rem', color: '#10b981', fontWeight: 700 }}>التحويل المتوقع</th>
                <th style={{ padding: '1rem 1.5rem', color: '#10b981', fontWeight: 700, textAlign: 'center' }}>إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req, idx) => (
                <tr
                  key={`${req.student_id}-${req.course_id}-${idx}`}
                  style={{ borderBottom: idx === requests.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.05)', transition: 'background 0.2s', background: req.type === 'course' ? 'rgba(168,85,247,0.03)' : 'transparent' }}
                >
                  <td style={{ padding: '1rem 1.5rem' }}>
                    {req.type === 'course' ? (
                      <span style={{ background: 'rgba(168,85,247,0.2)', color: '#c084fc', padding: '4px 10px', borderRadius: 20, fontSize: '0.8rem', fontWeight: 700 }}>كورس كامل</span>
                    ) : (
                      <span style={{ background: 'rgba(59,130,246,0.2)', color: '#60a5fa', padding: '4px 10px', borderRadius: 20, fontSize: '0.8rem', fontWeight: 700 }}>درس فردي</span>
                    )}
                  </td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ fontWeight: 700, color: '#f8fafc' }}>{req.student_name}</div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{req.student_email}</div>
                  </td>
                  <td style={{ padding: '1rem 1.5rem', color: '#f1f5f9' }}>
                    <div style={{ fontWeight: 600 }}>{req.course_title}</div>
                    {req.type === 'lesson' && <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{req.lesson_slug}</div>}
                  </td>
                  <td style={{ padding: '1rem 1.5rem', color: '#94a3b8', fontSize: '0.85rem' }}>
                    {new Date(req.requested_at).toLocaleString('ar-EG')}
                  </td>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: 900, color: '#10b981' }}>
                    {req.type === 'course' ? `${req.course_price || 0} EGP` : '—'}
                  </td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}>
                    <button 
                      onClick={() => handleApprove(req)}
                      disabled={actionLoading === `${req.student_id}-${req.course_id}`}
                      style={{
                        background: 'linear-gradient(135deg, #10b981, #059669)',
                        color: '#fff',
                        border: 'none',
                        padding: '8px 20px',
                        borderRadius: '8px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        fontFamily: "'Cairo', sans-serif",
                        opacity: actionLoading === `${req.student_id}-${req.course_id}` ? 0.6 : 1
                      }}>
                      {actionLoading === `${req.student_id}-${req.course_id}` ? 'جاري...' : 'موافقة وتفعيل ✓'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
