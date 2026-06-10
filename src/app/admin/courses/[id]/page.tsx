'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';

interface Course {
  id: number;
  title: string;
  title_ar?: string;
  description_ar?: string;
  price: number;
}

interface Lesson {
  id: number;
  title: string;
  order_index: number;
  is_free: boolean;
  duration_minutes: number;
  audio_url?: string;
}

export default function AdminCourseDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [course, setCourse] = useState<Course | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch(`/api/courses/${id}`);
        if (res.ok) {
          const json = await res.json();
          setCourse(json.course);
          setLessons(json.lessons || []);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [id]);

  const toggleFree = async (lessonId: number, currentFree: boolean) => {
    try {
      setLessons(prev => prev.map(l => l.id === lessonId ? { ...l, is_free: !currentFree } : l));
      
      await fetch(`/api/admin/lessons/${lessonId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ is_free: !currentFree })
      });
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center', color: '#10b981' }}>جاري تحميل تفاصيل الكورس والدروس...</div>
    );
  }

  if (!course) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center', color: '#f87171' }}>الكورس غير موجود.</div>
    );
  }

  return (
    <div style={{ padding: '2rem', direction: 'rtl' }}>
      <header style={{ marginBottom: '2rem' }}>
        <Link href="/admin/courses" style={{ color: '#10b981', textDecoration: 'none', fontSize: '0.9rem', display: 'inline-block', marginBottom: '1rem' }}>← العودة للكورسات</Link>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800, margin: 0, color: '#fff' }}>{course.title_ar || course.title}</h1>
        <p style={{ color: '#94a3b8', margin: '0.5rem 0 0 0' }}>إدارة الدروس والامتحانات المشمولة بالكورس (إجمالي: {lessons.length} درس)</p>
      </header>

      {/* Course Info Card */}
      <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
        <h3 style={{ margin: '0 0 10px', color: '#10b981', fontSize: '1.1rem' }}>معلومات الكورس</h3>
        <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>{course.description_ar}</p>
        <div style={{ marginTop: '1rem', display: 'flex', gap: '2rem' }}>
          <div>
            <span style={{ color: '#64748b', fontSize: '0.85rem' }}>سعر الكورس: </span>
            <span style={{ color: '#fff', fontWeight: 700 }}>{course.price} EGP</span>
          </div>
          <div>
            <span style={{ color: '#64748b', fontSize: '0.85rem' }}>عدد الدروس: </span>
            <span style={{ color: '#fff', fontWeight: 700 }}>{lessons.length} درس</span>
          </div>
        </div>
      </div>

      {/* Lessons List */}
      <div style={{ background: 'rgba(5,5,10,0.6)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '12px', overflow: 'hidden' }}>
        <div style={{ padding: '1.25rem 1.5rem', background: 'rgba(16,185,129,0.05)', borderBottom: '1px solid rgba(16,185,129,0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h4 style={{ margin: 0, color: '#10b981', fontWeight: 700 }}>قائمة الدروس (تعديل صلاحية الوصول)</h4>
          <span style={{ fontSize: '0.8rem', color: '#64748b' }}>الدرس الأول مجاني تلقائياً للترويج</span>
        </div>

        <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
          {lessons.map((lesson, idx) => (
            <div key={lesson.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.5rem', borderBottom: idx === lessons.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.05)', transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div>
                  <span style={{ color: '#64748b', marginLeft: '10px', fontSize: '0.9rem', fontFamily: 'monospace' }}>#{lesson.order_index}</span>
                  <span style={{ color: '#fff', fontWeight: 600 }}>{lesson.title}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>🎙️ رابط المقطع الصوتي:</span>
                  <input
                    type="text"
                    defaultValue={lesson.audio_url || ''}
                    placeholder="ضع رابط MP3 للشرح هنا..."
                    onBlur={async (e) => {
                      const url = e.target.value;
                      try {
                        await fetch(`/api/admin/lessons/${lesson.id}`, {
                          method: 'PUT',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ audio_url: url })
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '6px',
                      padding: '4px 10px',
                      color: '#cbd5e1',
                      fontSize: '0.8rem',
                      width: '320px',
                      outline: 'none',
                      direction: 'ltr',
                      fontFamily: 'monospace'
                    }}
                  />
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <span style={{ color: '#64748b', fontSize: '0.85rem' }}>⏱ {lesson.duration_minutes || 30} دقيقة</span>
                
                {/* Toggle Free Button */}
                <button
                  onClick={() => toggleFree(lesson.id, lesson.is_free)}
                  style={{
                    background: lesson.is_free ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)',
                    border: `1px solid ${lesson.is_free ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}`,
                    color: lesson.is_free ? '#10b981' : '#f87171',
                    padding: '0.5rem 1rem', borderRadius: '6px', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem', width: '120px'
                  }}
                >
                  {lesson.is_free ? '🔓 مجاني' : '🔒 مدفوع'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
