'use client';

import { useState, useEffect } from 'react';

interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  age: number;
  created_at: string;
  is_active: boolean;
  course_count: number;
  requested_courses?: { course_id: number; title: string }[];
}

interface Course {
  id: number;
  title: string;
  title_ar?: string;
}

const formatStudentName = (name: string) => {
  if (!name) return '';
  return name.length > 2 ? name.slice(0, 2) + '..' : name;
};

export default function AdminStudents() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Modal states for managing enrollments
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [activeCourseIds, setActiveCourseIds] = useState<number[]>([]);
  const [requestedCourseIds, setRequestedCourseIds] = useState<number[]>([]);
  const [modalLoading, setModalLoading] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await fetch('/api/admin/students');
      if (res.ok) {
        const json = await res.json();
        setStudents(json.students || []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const toggleStudentActive = async (studentId: number, currentActive: boolean) => {
    try {
      // Optmistic UI
      setStudents(prev => prev.map(s => s.id === studentId ? { ...s, is_active: !currentActive } : s));
      
      await fetch('/api/admin/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentId, is_active: !currentActive })
      });
    } catch (e) {
      console.error(e);
    }
  };

  const openEnrollmentModal = async (student: Student) => {
    setSelectedStudent(student);
    setModalLoading(true);
    try {
      const res = await fetch(`/api/admin/students/enroll?studentId=${student.id}`);
      if (res.ok) {
        const json = await res.json();
        setCourses(json.courses || []);
        setActiveCourseIds(json.activeCourseIds || []);
        setRequestedCourseIds(json.requestedCourseIds || []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setModalLoading(false);
    }
  };

  const toggleCourseActivation = async (courseId: number, isActive: boolean) => {
    if (!selectedStudent) return;
    try {
      // Optimistic UI
      if (isActive) {
        // Deactivate
        setActiveCourseIds(prev => prev.filter(id => id !== courseId));
        setStudents(prev => prev.map(s => s.id === selectedStudent.id ? { ...s, course_count: Math.max(0, s.course_count - 1) } : s));
      } else {
        // Activate
        setActiveCourseIds(prev => [...prev, courseId]);
        setRequestedCourseIds(prev => prev.filter(id => id !== courseId));
        setStudents(prev => prev.map(s => s.id === selectedStudent.id ? { ...s, course_count: s.course_count + 1 } : s));
      }

      await fetch('/api/admin/students/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentId: selectedStudent.id,
          courseId,
          activate: !isActive
        })
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleDirectActivate = async (studentId: number, courseId: number) => {
    try {
      // Optimistic UI update for the table
      setStudents(prev => prev.map(s => {
        if (s.id === studentId) {
          return {
            ...s,
            course_count: s.course_count + 1,
            requested_courses: s.requested_courses?.filter(rc => rc.course_id !== courseId) || []
          };
        }
        return s;
      }));

      await fetch('/api/admin/students/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentId,
          courseId,
          activate: true
        })
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleResetPassword = async (student: Student) => {
    const newPassword = prompt(`أدخل كلمة المرور الجديدة للطالب (${student.name}):`, '123456');
    if (newPassword === null) return;
    if (!newPassword.trim()) {
      alert('كلمة المرور لا يمكن أن تكون فارغة');
      return;
    }

    try {
      const res = await fetch('/api/admin/students', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentId: student.id, newPassword: newPassword.trim() })
      });
      const data = await res.json();
      if (res.ok) {
        alert(`تم إعادة تعيين كلمة مرور الطالب (${student.name}) بنجاح إلى: ${newPassword.trim()}`);
      } else {
        alert(data.error || 'حدث خطأ في إعادة تعيين كلمة المرور');
      }
    } catch (err) {
      console.error(err);
      alert('حدث خطأ في الاتصال بالسيرفر');
    }
  };

  return (
    <div style={{ padding: '2rem', direction: 'rtl' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, margin: 0, color: '#3b82f6' }}>إدارة حسابات الطلاب وتفعيل الكورسات</h1>
          <p style={{ color: '#94a3b8', margin: '0.5rem 0 0 0' }}>متابعة الحسابات الجديدة وتفعيل اشتراكاتهم وتراخيص الدورات البرمجية</p>
        </div>
      </header>

      {loading ? (
        <div style={{ padding: '4rem', textAlign: 'center', color: '#3b82f6' }}>جاري تحميل الحسابات والطلاب...</div>
      ) : (
        <div style={{ background: 'rgba(5,5,10,0.6)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '12px', overflowX: 'auto', backdropFilter: 'blur(10px)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right', minWidth: '900px' }}>
            <thead>
              <tr style={{ background: 'rgba(59,130,246,0.1)', borderBottom: '1px solid rgba(59,130,246,0.2)' }}>
                <th style={{ padding: '1rem 1.5rem', color: '#3b82f6', fontWeight: 700 }}>اسم الطالب</th>
                <th style={{ padding: '1rem 1.5rem', color: '#3b82f6', fontWeight: 700 }}>رقم الهاتف / الإيميل</th>
                <th style={{ padding: '1rem 1.5rem', color: '#3b82f6', fontWeight: 700 }}>السن</th>
                <th style={{ padding: '1rem 1.5rem', color: '#3b82f6', fontWeight: 700 }}>تاريخ الانضمام</th>
                <th style={{ padding: '1rem 1.5rem', color: '#3b82f6', fontWeight: 700 }}>الكورسات المفعلة</th>
                <th style={{ padding: '1rem 1.5rem', color: '#3b82f6', fontWeight: 700 }}>حالة الحساب</th>
                <th style={{ padding: '1rem 1.5rem', color: '#3b82f6', fontWeight: 700 }}>التحكم بالاشتراك</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, idx) => (
                <tr key={student.id} style={{ borderBottom: idx === students.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.05)', transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(59,130,246,0.2)', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>
                      {student.name.charAt(0)}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span>{formatStudentName(student.name)}</span>
                      {student.requested_courses && student.requested_courses.length > 0 && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                          {student.requested_courses.map(rc => (
                            <div key={rc.course_id} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem' }}>
                              <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>طلب تفعيل: {rc.title}</span>
                              <button
                                onClick={() => handleDirectActivate(student.id, rc.course_id)}
                                style={{
                                  background: '#10b981', color: '#000', border: 'none', padding: '2px 6px', borderRadius: '3px', cursor: 'pointer', fontSize: '0.7rem', fontWeight: 'bold'
                                }}
                              >
                                تفعيل 🔑
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </td>
                  <td style={{ padding: '1rem 1.5rem', color: '#e2e8f0', fontFamily: 'monospace' }}>
                    <div>{student.phone || '—'}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{student.email || ''}</div>
                  </td>
                  <td style={{ padding: '1rem 1.5rem', color: '#cbd5e1' }}>{student.age || '—'} سنة</td>
                  <td style={{ padding: '1rem 1.5rem', fontFamily: 'monospace', color: '#94a3b8' }}>{new Date(student.created_at).toLocaleDateString('ar-EG')}</td>
                  <td style={{ padding: '1rem 1.5rem', fontFamily: 'monospace', fontWeight: 'bold', color: '#10b981' }}>{student.course_count} كورسات</td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    {/* Toggle Switch student active/inactive */}
                    <button 
                      onClick={() => toggleStudentActive(student.id, student.is_active)}
                      style={{ 
                        background: student.is_active ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)', 
                        border: `1px solid ${student.is_active ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}`,
                        color: student.is_active ? '#10b981' : '#ef4444', 
                        padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer' 
                      }}
                    >
                      {student.is_active ? 'مفعل (نشط)' : 'معطل'}
                    </button>
                  </td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center', minWidth: '240px' }}>
                      <button 
                        onClick={() => openEnrollmentModal(student)}
                        style={{ background: '#3b82f6', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 700, whiteSpace: 'nowrap' }}
                      >
                        تفعيل كورس 🔑
                      </button>
                      <button 
                        onClick={() => handleResetPassword(student)}
                        style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', color: '#fbbf24', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 700, whiteSpace: 'nowrap' }}
                      >
                        🔐 كلمة السر
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Enrollment Management Modal Popup */}
      {selectedStudent && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: '#0a0a16', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '20px', padding: '30px', maxWidth: '600px', width: '90%', maxHeight: '80%', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '16px', marginBottom: '20px' }}>
              <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800, color: '#3b82f6' }}>تفعيل تراخيص الكورسات لـ: {formatStudentName(selectedStudent.name)}</h3>
              <button onClick={() => setSelectedStudent(null)} style={{ background: 'transparent', border: 'none', color: '#94a3b8', fontSize: '1.5rem', cursor: 'pointer' }}>×</button>
            </div>

            {modalLoading ? (
              <div style={{ padding: '30px', textAlign: 'center', color: '#3b82f6' }}>جاري التحميل...</div>
            ) : (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <p style={{ margin: '0 0 16px', color: '#94a3b8', fontSize: '0.9rem' }}>
                  رقم الهاتف: {selectedStudent.phone || 'لا يوجد'} | البريد الإلكتروني: {selectedStudent.email || 'لا يوجد'}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {courses.map(course => {
                    const isEnrolled = activeCourseIds.includes(course.id);
                    const isRequested = requestedCourseIds.includes(course.id);
                    return (
                      <div key={course.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: isRequested && !isEnrolled ? 'rgba(245,158,11,0.05)' : 'rgba(255,255,255,0.02)', border: isRequested && !isEnrolled ? '1px solid rgba(245,158,11,0.3)' : '1px solid rgba(255,255,255,0.05)', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>{course.title_ar || course.title}</span>
                          {isRequested && !isEnrolled && (
                            <span style={{ fontSize: '0.75rem', background: 'rgba(245,158,11,0.2)', color: '#f59e0b', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold' }}>⚠️ مطلوب تفعيله</span>
                          )}
                        </div>
                        <button
                          onClick={() => toggleCourseActivation(course.id, isEnrolled)}
                          style={{
                            background: isEnrolled ? 'rgba(16,185,129,0.1)' : 'rgba(255,255,255,0.05)',
                            border: `1px solid ${isEnrolled ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.1)'}`,
                            color: isEnrolled ? '#10b981' : '#94a3b8',
                            padding: '6px 16px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 700, width: '120px'
                          }}
                        >
                          {isEnrolled ? '🔑 مفعل' : '🔒 غير مفعل'}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px', marginTop: '20px', textAlign: 'left' }}>
              <button onClick={() => setSelectedStudent(null)} style={{ background: '#3b82f6', color: '#fff', border: 'none', padding: '10px 24px', borderRadius: '8px', cursor: 'pointer', fontWeight: 700, fontFamily: "'Cairo', sans-serif" }}>إغلاق</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
