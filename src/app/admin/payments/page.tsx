'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Payment {
  student_id: number;
  name: string;
  email: string;
  course_title: string;
  enrolled_at: string;
  price: number | null;
}

export default function AdminPayments() {
  const router = useRouter();
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/auth/me', { cache: 'no-store' }).then(r => r.json()).then(d => {
      if (!d.user || d.user.role !== 'admin') router.push('/admin/login');
    }).catch(() => router.push('/admin/login'));

    fetch('/api/admin/payments')
      .then(r => r.json())
      .then(d => {
        setPayments(d.payments || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, margin: 0, color: '#f59e0b' }}>💳 المدفوعات</h1>
          <p style={{ color: '#94a3b8', margin: '0.5rem 0 0 0' }}>
            {loading ? 'جاري التحميل...' : `${payments.length} تسجيل إجمالي`}
          </p>
        </div>
      </header>

      <div style={{ background: 'rgba(5,5,10,0.6)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '12px', overflow: 'hidden', backdropFilter: 'blur(10px)' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#64748b' }}>جاري التحميل...</div>
        ) : payments.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#64748b' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📋</div>
            <p style={{ margin: 0 }}>لا توجد تسجيلات مفعّلة حتى الآن</p>
            <p style={{ fontSize: '0.85rem', color: '#475569', marginTop: '0.5rem' }}>بمجرد موافقتك على طلبات الطلاب ستظهر هنا</p>
          </div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
            <thead>
              <tr style={{ background: 'rgba(245,158,11,0.1)', borderBottom: '1px solid rgba(245,158,11,0.2)' }}>
                <th style={{ padding: '1rem 1.5rem', color: '#f59e0b', fontWeight: 700 }}>الطالب</th>
                <th style={{ padding: '1rem 1.5rem', color: '#f59e0b', fontWeight: 700 }}>البريد الإلكتروني</th>
                <th style={{ padding: '1rem 1.5rem', color: '#f59e0b', fontWeight: 700 }}>الكورس</th>
                <th style={{ padding: '1rem 1.5rem', color: '#f59e0b', fontWeight: 700 }}>تاريخ التسجيل</th>
                <th style={{ padding: '1rem 1.5rem', color: '#f59e0b', fontWeight: 700 }}>الحالة</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((pay, idx) => (
                <tr
                  key={`${pay.student_id}-${pay.course_title}-${idx}`}
                  style={{ borderBottom: idx === payments.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.05)', transition: 'background 0.2s', cursor: 'pointer' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <td style={{ padding: '1rem 1.5rem', fontWeight: 600, color: '#f1f5f9' }}>{pay.name}</td>
                  <td style={{ padding: '1rem 1.5rem', color: '#94a3b8', fontSize: '0.85rem' }}>{pay.email}</td>
                  <td style={{ padding: '1rem 1.5rem', color: '#f59e0b' }}>{pay.course_title}</td>
                  <td style={{ padding: '1rem 1.5rem', fontFamily: 'monospace', color: '#64748b', fontSize: '0.85rem' }}>
                    {pay.enrolled_at ? new Date(pay.enrolled_at).toLocaleDateString('ar-EG') : '—'}
                  </td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <span style={{
                      background: 'rgba(16,185,129,0.1)',
                      color: '#10b981',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '999px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                    }}>
                      ✓ مفعّل
                    </span>
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
