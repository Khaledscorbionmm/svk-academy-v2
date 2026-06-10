'use client';

import { useState } from 'react';

const mockCourses = [
  { id: 1, title: 'Python Basics', level: 'Beginner', students: 120, status: 'Active', price: 500 },
  { id: 2, title: 'Advanced React', level: 'Advanced', students: 85, status: 'Active', price: 800 },
  { id: 3, title: 'UI/UX Masterclass', level: 'Intermediate', students: 45, status: 'Draft', price: 600 },
];

export default function AdminCourses() {
  const [courses] = useState(mockCourses);

  return (
    <div style={{ padding: '2rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, margin: 0, color: '#10b981' }}>الكورسات والدروس</h1>
          <p style={{ color: '#94a3b8', margin: '0.5rem 0 0 0' }}>إدارة المحتوى التعليمي والدروس</p>
        </div>
        <button style={{ background: '#10b981', color: '#000', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>+</span> إضافة كورس جديد
        </button>
      </header>

      <div style={{ background: 'rgba(5,5,10,0.6)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '12px', overflow: 'hidden', backdropFilter: 'blur(10px)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
          <thead>
            <tr style={{ background: 'rgba(16,185,129,0.1)', borderBottom: '1px solid rgba(16,185,129,0.2)' }}>
              <th style={{ padding: '1rem 1.5rem', color: '#10b981', fontWeight: 700 }}>عنوان الكورس</th>
              <th style={{ padding: '1rem 1.5rem', color: '#10b981', fontWeight: 700 }}>المستوى</th>
              <th style={{ padding: '1rem 1.5rem', color: '#10b981', fontWeight: 700 }}>الطلاب</th>
              <th style={{ padding: '1rem 1.5rem', color: '#10b981', fontWeight: 700 }}>السعر</th>
              <th style={{ padding: '1rem 1.5rem', color: '#10b981', fontWeight: 700 }}>الحالة</th>
              <th style={{ padding: '1rem 1.5rem', color: '#10b981', fontWeight: 700 }}>إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, idx) => (
              <tr key={course.id} style={{ borderBottom: idx === courses.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.05)', transition: 'background 0.2s', cursor: 'pointer' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                <td style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>{course.title}</td>
                <td style={{ padding: '1rem 1.5rem', color: '#94a3b8' }}>{course.level}</td>
                <td style={{ padding: '1rem 1.5rem', fontFamily: 'monospace' }}>{course.students}</td>
                <td style={{ padding: '1rem 1.5rem', fontFamily: 'monospace' }}>{course.price} EGP</td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <span style={{ background: course.status === 'Active' ? 'rgba(16,185,129,0.1)' : 'rgba(148,163,184,0.1)', color: course.status === 'Active' ? '#10b981' : '#94a3b8', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.85rem' }}>
                    {course.status}
                  </span>
                </td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <button style={{ background: 'transparent', border: '1px solid #3b82f6', color: '#3b82f6', padding: '0.25rem 0.75rem', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}>تعديل</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
