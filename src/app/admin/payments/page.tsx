'use client';

import { useState } from 'react';

const mockPayments = [
  { id: 'PAY-1001', student: 'أحمد محمود', amount: 500, date: '2026-06-08', method: 'Vodafone Cash', status: 'Completed' },
  { id: 'PAY-1002', student: 'سارة خالد', amount: 800, date: '2026-06-09', method: 'InstaPay', status: 'Pending' },
  { id: 'PAY-1003', student: 'نور حسن', amount: 600, date: '2026-06-10', method: 'Credit Card', status: 'Completed' },
  { id: 'PAY-1004', student: 'محمد علي', amount: 500, date: '2026-06-10', method: 'Vodafone Cash', status: 'Failed' },
];

export default function AdminPayments() {
  const [payments] = useState(mockPayments);

  return (
    <div style={{ padding: '2rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, margin: 0, color: '#f59e0b' }}>المدفوعات</h1>
          <p style={{ color: '#94a3b8', margin: '0.5rem 0 0 0' }}>متابعة المعاملات المالية والاشتراكات</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ background: 'rgba(5,5,10,0.6)', border: '1px solid rgba(245,158,11,0.2)', padding: '0.5rem 1rem', borderRadius: '8px', color: '#e2e8f0', display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>إجمالي الإيرادات</span>
            <span style={{ fontWeight: 700, color: '#f59e0b' }}>1,900 EGP</span>
          </div>
        </div>
      </header>

      <div style={{ background: 'rgba(5,5,10,0.6)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '12px', overflow: 'hidden', backdropFilter: 'blur(10px)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
          <thead>
            <tr style={{ background: 'rgba(245,158,11,0.1)', borderBottom: '1px solid rgba(245,158,11,0.2)' }}>
              <th style={{ padding: '1rem 1.5rem', color: '#f59e0b', fontWeight: 700 }}>رقم العملية</th>
              <th style={{ padding: '1rem 1.5rem', color: '#f59e0b', fontWeight: 700 }}>الطالب</th>
              <th style={{ padding: '1rem 1.5rem', color: '#f59e0b', fontWeight: 700 }}>المبلغ</th>
              <th style={{ padding: '1rem 1.5rem', color: '#f59e0b', fontWeight: 700 }}>تاريخ الدفع</th>
              <th style={{ padding: '1rem 1.5rem', color: '#f59e0b', fontWeight: 700 }}>وسيلة الدفع</th>
              <th style={{ padding: '1rem 1.5rem', color: '#f59e0b', fontWeight: 700 }}>الحالة</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((pay, idx) => (
              <tr key={pay.id} style={{ borderBottom: idx === payments.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.05)', transition: 'background 0.2s', cursor: 'pointer' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                <td style={{ padding: '1rem 1.5rem', fontFamily: 'monospace', color: '#94a3b8' }}>{pay.id}</td>
                <td style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>{pay.student}</td>
                <td style={{ padding: '1rem 1.5rem', fontFamily: 'monospace', fontWeight: 700 }}>{pay.amount} EGP</td>
                <td style={{ padding: '1rem 1.5rem', fontFamily: 'monospace' }}>{pay.date}</td>
                <td style={{ padding: '1rem 1.5rem' }}>{pay.method}</td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <span style={{ 
                    background: pay.status === 'Completed' ? 'rgba(16,185,129,0.1)' : pay.status === 'Pending' ? 'rgba(245,158,11,0.1)' : 'rgba(239,68,68,0.1)', 
                    color: pay.status === 'Completed' ? '#10b981' : pay.status === 'Pending' ? '#f59e0b' : '#ef4444', 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '999px', 
                    fontSize: '0.85rem' 
                  }}>
                    {pay.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
