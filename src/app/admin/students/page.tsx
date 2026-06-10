'use client';

import { useState } from 'react';

const mockStudents = [
  { id: 101, name: 'أحمد محمود', email: 'ahmed@example.com', joined: '2026-05-12', courses: 2, status: 'Active' },
  { id: 102, name: 'سارة خالد', email: 'sara@example.com', joined: '2026-05-20', courses: 1, status: 'Active' },
  { id: 103, name: 'محمد علي', email: 'mohamed@example.com', joined: '2026-06-01', courses: 0, status: 'Inactive' },
  { id: 104, name: 'نور حسن', email: 'nour@example.com', joined: '2026-06-05', courses: 3, status: 'Active' },
];

export default function AdminStudents() {
  const [students] = useState(mockStudents);

  return (
    <div style={{ padding: '2rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, margin: 0, color: '#3b82f6' }}>الطلاب</h1>
          <p style={{ color: '#94a3b8', margin: '0.5rem 0 0 0' }}>إدارة بيانات وحسابات الطلاب</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input type="text" placeholder="بحث عن طالب..." style={{ background: 'rgba(5,5,10,0.6)', border: '1px solid rgba(59,130,246,0.3)', padding: '0.75rem 1rem', borderRadius: '8px', color: '#e2e8f0', outline: 'none' }} />
          <button style={{ background: '#3b82f6', color: '#fff', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}>بحث</button>
        </div>
      </header>

      <div style={{ background: 'rgba(5,5,10,0.6)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '12px', overflow: 'hidden', backdropFilter: 'blur(10px)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
          <thead>
            <tr style={{ background: 'rgba(59,130,246,0.1)', borderBottom: '1px solid rgba(59,130,246,0.2)' }}>
              <th style={{ padding: '1rem 1.5rem', color: '#3b82f6', fontWeight: 700 }}>اسم الطالب</th>
              <th style={{ padding: '1rem 1.5rem', color: '#3b82f6', fontWeight: 700 }}>البريد الإلكتروني</th>
              <th style={{ padding: '1rem 1.5rem', color: '#3b82f6', fontWeight: 700 }}>تاريخ الانضمام</th>
              <th style={{ padding: '1rem 1.5rem', color: '#3b82f6', fontWeight: 700 }}>الكورسات</th>
              <th style={{ padding: '1rem 1.5rem', color: '#3b82f6', fontWeight: 700 }}>الحالة</th>
              <th style={{ padding: '1rem 1.5rem', color: '#3b82f6', fontWeight: 700 }}>إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, idx) => (
              <tr key={student.id} style={{ borderBottom: idx === students.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.05)', transition: 'background 0.2s', cursor: 'pointer' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                <td style={{ padding: '1rem 1.5rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(59,130,246,0.2)', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                    {student.name.charAt(0)}
                  </div>
                  {student.name}
                </td>
                <td style={{ padding: '1rem 1.5rem', color: '#94a3b8', fontFamily: 'monospace' }}>{student.email}</td>
                <td style={{ padding: '1rem 1.5rem', fontFamily: 'monospace' }}>{student.joined}</td>
                <td style={{ padding: '1rem 1.5rem', fontFamily: 'monospace' }}>{student.courses}</td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <span style={{ background: student.status === 'Active' ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)', color: student.status === 'Active' ? '#10b981' : '#ef4444', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.85rem' }}>
                    {student.status}
                  </span>
                </td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <button style={{ background: 'transparent', border: '1px solid #94a3b8', color: '#94a3b8', padding: '0.25rem 0.75rem', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}>عرض</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
