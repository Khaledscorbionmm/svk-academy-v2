'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Course {
  id: number;
  title: string;
  title_ar?: string;
  level: string;
  price: number;
  is_published: boolean;
  category: string;
  enrollment_count: number;
}

export default function AdminCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await fetch('/api/courses?limit=100');
        if (res.ok) {
          const json = await res.json();
          setCourses(json.courses || []);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchCourses();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, margin: 0, color: '#10b981' }}>إدارة الكورسات والدروس</h1>
          <p style={{ color: '#94a3b8', margin: '0.5rem 0 0 0' }}>عرض وإدارة المحتوى التعليمي والدروس المتكاملة</p>
        </div>
        <button style={{ background: '#10b981', color: '#000', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>+</span> إضافة كورس جديد
        </button>
      </header>

      {loading ? (
        <div style={{ padding: '4rem', textAlign: 'center', color: '#10b981' }}>جاري تحميل الكورسات...</div>
      ) : (
        <div style={{ background: 'rgba(5,5,10,0.6)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '12px', overflow: 'hidden', backdropFilter: 'blur(10px)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
            <thead>
              <tr style={{ background: 'rgba(16,185,129,0.1)', borderBottom: '1px solid rgba(16,185,129,0.2)' }}>
                <th style={{ padding: '1rem 1.5rem', color: '#10b981', fontWeight: 700 }}>عنوان الكورس</th>
                <th style={{ padding: '1rem 1.5rem', color: '#10b981', fontWeight: 700 }}>التصنيف</th>
                <th style={{ padding: '1rem 1.5rem', color: '#10b981', fontWeight: 700 }}>المستوى</th>
                <th style={{ padding: '1rem 1.5rem', color: '#10b981', fontWeight: 700 }}>الطلاب</th>
                <th style={{ padding: '1rem 1.5rem', color: '#10b981', fontWeight: 700 }}>السعر</th>
                <th style={{ padding: '1rem 1.5rem', color: '#10b981', fontWeight: 700 }}>الحالة</th>
                <th style={{ padding: '1rem 1.5rem', color: '#10b981', fontWeight: 700 }}>إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, idx) => (
                <tr key={course.id} style={{ borderBottom: idx === courses.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.05)', transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>{course.title_ar || course.title}</td>
                  <td style={{ padding: '1rem 1.5rem', color: '#a78bfa' }}>{course.category}</td>
                  <td style={{ padding: '1rem 1.5rem', color: '#94a3b8' }}>{course.level}</td>
                  <td style={{ padding: '1rem 1.5rem', fontFamily: 'monospace' }}>{course.enrollment_count}</td>
                  <td style={{ padding: '1rem 1.5rem', fontFamily: 'monospace' }}>{course.price} EGP</td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <span style={{ background: course.is_published ? 'rgba(16,185,129,0.1)' : 'rgba(148,163,184,0.1)', color: course.is_published ? '#10b981' : '#94a3b8', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.85rem' }}>
                      {course.is_published ? 'منشور' : 'مسودة'}
                    </span>
                  </td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <Link href={`/admin/courses/${course.id}`}>
                      <button style={{ background: 'transparent', border: '1px solid #10b981', color: '#10b981', padding: '0.25rem 0.75rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 700 }}>إدارة الدروس ⚙️</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
