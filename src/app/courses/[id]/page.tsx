'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { use } from 'react';
import { COMING_SOON_COURSE_IDS } from '@/lib/courseConfig';

interface Lesson {
  id: number;
  title: string;
  order_index: number;
  is_free?: boolean;
  duration_minutes?: number;
}

interface Course {
  id: number;
  title: string;
  title_ar?: string;
  description?: string;
  description_ar?: string;
  instructor_name?: string;
  category?: string;
  level?: string;
  duration_hours?: number;
  enrollment_count?: number;
  rating?: number;
  price?: number;
  currency?: string;
  is_featured?: boolean;
}

const LESSON_SLUGS: Record<string, string> = {
  'المتغيرات': 'python-vars',
  'الشروط': 'python-if',
  'الحلقات': 'python-loops',
  'الدوال': 'python-fns',
  'القوائم': 'python-lists',
  'القواميس': 'python-dicts',
  'Variables': 'python-vars',
  'Conditions': 'python-if',
};

const LEVEL_LABELS: Record<string, string> = {
  beginner: 'مبتدئ',
  intermediate: 'متوسط',
  advanced: 'متقدم',
};

const CATEGORY_ICONS: Record<string, string> = {
  python: '🐍', javascript: '⚡', react: '⚛️', ai: '🤖', database: '🗄️', devops: '🛠️', default: '📚',
};

// Fallback course data
const FALLBACK_COURSES: Record<string, { course: Course; lessons: Lesson[] }> = {
  '1': {
    course: {
      id: 1, title: 'Python للمبتدئين من الصفر', title_ar: 'Python للمبتدئين من الصفر',
      description: 'تعلم البرمجة بالبايثون من الصفر حتى الاحتراف. يغطي الكورس المتغيرات، الشروط، الحلقات، الدوال، القوائم، والمشاريع العملية.',
      description_ar: 'تعلم البرمجة بالبايثون من الصفر حتى الاحتراف. يغطي الكورس المتغيرات، الشروط، الحلقات، الدوال، القوائم، والمشاريع العملية.',
      instructor_name: 'خالد أحمد', category: 'python', level: 'beginner',
      duration_hours: 20, enrollment_count: 2847, rating: 4.9, price: 0, currency: 'EGP', is_featured: true,
    },
    lessons: [
      { id: 1, title: 'المتغيرات وأنواع البيانات', order_index: 1, is_free: true, duration_minutes: 25 },
      { id: 2, title: 'الشروط if / elif / else', order_index: 2, is_free: true, duration_minutes: 30 },
      { id: 3, title: 'الحلقات for و while', order_index: 3, is_free: false, duration_minutes: 35 },
      { id: 4, title: 'الدوال (Functions)', order_index: 4, is_free: false, duration_minutes: 40 },
      { id: 5, title: 'القوائم (Lists)', order_index: 5, is_free: false, duration_minutes: 30 },
      { id: 6, title: 'القواميس (Dicts)', order_index: 6, is_free: false, duration_minutes: 30 },
    ],
  },
};

function getLessonHref(lesson: Lesson): string {
  return `/learn/${lesson.id}`;
}

export default function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [course, setCourse] = useState<Course | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'instructor' | 'reviews'>('overview');
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [activationRequested, setActivationRequested] = useState(false);
  const [activationLoading, setActivationLoading] = useState(false);

  const isComingSoon = course ? COMING_SOON_COURSE_IDS.includes(course.id) : false;

  async function checkUser() {
    try {
      const res = await fetch('/api/auth/me', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        if (data.user) {
          setUser(data.user);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    setMounted(true);
    async function load() {
      try {
        const res = await fetch(`/api/courses/${id}`, { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          setCourse(data.course);
          setLessons(data.lessons || []);
          setIsEnrolled(data.isEnrolled || false);
        } else {
          const fallback = FALLBACK_COURSES[id];
          if (fallback) { setCourse(fallback.course); setLessons(fallback.lessons); }
        }
      } catch {
        const fallback = FALLBACK_COURSES[id];
        if (fallback) { setCourse(fallback.course); setLessons(fallback.lessons); }
      } finally {
        setLoading(false);
      }
    }
    load();
    checkUser();
  }, [id]);

  async function handleRequestActivation() {
    if (!user) {
      alert('يرجى تسجيل الدخول أولاً');
      return;
    }
    setActivationLoading(true);
    try {
      const res = await fetch('/api/courses/request-activation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId: course?.id }),
      });
      if (res.ok) {
        setActivationRequested(true);
      } else {
        const err = await res.json();
        alert(err.error || 'حدث خطأ');
      }
    } catch (e) {
      alert('حدث خطأ');
    } finally {
      setActivationLoading(false);
    }
  }

  const TABS = [
    { id: 'overview' as const, label: 'نظرة عامة', icon: '📋' },
    { id: 'curriculum' as const, label: 'المنهج', icon: '📚' },
    { id: 'instructor' as const, label: 'المدرب', icon: '👨‍🏫' },
    { id: 'reviews' as const, label: 'مراجعات', icon: '⭐' },
  ];

  const icon = CATEGORY_ICONS[course?.category || 'default'] || CATEGORY_ICONS.default;
  const firstFreeLesson = lessons.find(l => l.is_free);
  const firstLessonHref = firstFreeLesson ? getLessonHref(firstFreeLesson) : '/learn/1';

  if (!mounted) {
    return <div style={{ minHeight: '100vh', background: '#060612' }} />;
  }

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: '#060612', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 60, marginBottom: 20, animation: 'spin 1s linear infinite', display: 'inline-block' }}>⏳</div>
          <div style={{ color: '#64748b', fontSize: 16 }}>جاري تحميل الكورس...</div>
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (!course) {
    return (
      <div style={{ minHeight: '100vh', background: '#060612', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cairo', sans-serif", direction: 'rtl', color: '#fff' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 60, marginBottom: 16 }}>😕</div>
          <h2 style={{ margin: '0 0 8px' }}>الكورس غير موجود</h2>
          <Link href="/courses" style={{ color: '#a855f7', textDecoration: 'none' }}>← العودة للكورسات</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Cairo', sans-serif", direction: 'rtl', background: '#060612', color: '#fff', minHeight: '100vh' }}>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet" />

      {/* Navbar */}
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '16px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100, background: 'rgba(6,6,18,0.9)', backdropFilter: 'blur(20px)' }}>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <Link href="/courses" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, color: '#94a3b8', fontSize: 14 }}>
            ← الكورسات
          </Link>
          {user && (
            <Link href={user.role === 'admin' ? '/admin/dashboard' : '/dashboard'} style={{ textDecoration: 'none', color: '#c4b5fd', fontSize: 14, fontWeight: 700 }}>
              لوحة التحكم 🖥️
            </Link>
          )}
        </div>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 22 }}>🎓</span>
          <span style={{ fontSize: 18, fontWeight: 900, background: 'linear-gradient(135deg,#6366f1,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SVK Academy</span>
        </Link>
      </nav>

      {/* Hero Section */}
      <div style={{ background: 'linear-gradient(135deg, #0a0718 0%, #080e1f 50%, #0a0520 100%)', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="hero-grid-container" style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 40px', alignItems: 'start' }}>
          <div>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, color: '#64748b', fontSize: 13 }}>
              <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>الرئيسية</Link>
              <span>/</span>
              <Link href="/courses" style={{ color: '#64748b', textDecoration: 'none' }}>الكورسات</Link>
              <span>/</span>
              <span style={{ color: '#a855f7' }}>{course.title_ar || course.title}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <span style={{ fontSize: 48 }}>{icon}</span>
              {course.is_featured && (
                <span style={{ padding: '4px 14px', background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: 100, color: '#a855f7', fontSize: 12, fontWeight: 700 }}>⭐ كورس مميز</span>
              )}
            </div>

            <h1 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.3 }}>
              {course.title_ar || course.title}
            </h1>

            <p style={{ color: '#94a3b8', fontSize: 16, margin: '0 0 24px', lineHeight: 1.8, maxWidth: 650 }}>
              {course.description_ar || course.description}
            </p>

            {/* Meta */}
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: '#fbbf24' }}>{'★★★★★'.slice(0, Math.round(Number(course.rating) || 0))}</span>
                <span style={{ fontWeight: 700, color: '#fbbf24' }}>{(Number(course.rating) || 0).toFixed(1)}</span>
                <span style={{ color: '#64748b', fontSize: 13 }}>({(course.enrollment_count || 0).toLocaleString('ar-EG')} طالب)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#94a3b8', fontSize: 14 }}>
                <span>👨‍🏫</span>
                <span>{course.instructor_name}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#94a3b8', fontSize: 14 }}>
                <span>⏱</span>
                <span>{course.duration_hours} ساعة</span>
              </div>
              <div>
                <span style={{
                  padding: '4px 12px', borderRadius: 20,
                  background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)',
                  color: '#818cf8', fontSize: 12, fontWeight: 700,
                }}>
                  {LEVEL_LABELS[course.level || 'beginner']}
                </span>
              </div>
            </div>

            <Link href={firstLessonHref} style={{ textDecoration: 'none' }}>
              <button style={{
                background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                border: 'none', color: '#fff',
                padding: '16px 40px', borderRadius: 14,
                fontSize: 17, fontWeight: 900, cursor: 'pointer',
                fontFamily: "'Cairo', sans-serif",
                boxShadow: '0 8px 30px rgba(99,102,241,0.4)',
                transition: 'all 0.3s',
              }}>
                🚀 ابدأ التعلم مجاناً
              </button>
            </Link>
          </div>

          {/* Price Card */}
          <div className="price-card" style={{ background: 'rgba(15,15,30,0.9)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: 20, padding: 28, backdropFilter: 'blur(20px)' }}>
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <div>
                <div style={{ fontSize: 36, fontWeight: 900, color: '#a855f7' }}>{course.price}</div>
                <div style={{ color: '#64748b', fontSize: 14 }}>{course.currency || 'EGP'}</div>
              </div>
              <div style={{ fontSize: 14, color: '#22c55e', fontWeight: 800, marginTop: 8 }}>🎁 الدرس الأول مجاني</div>
            </div>
            {[
              { icon: '📚', label: `${lessons.length} درس` },
              { icon: '⏱', label: `${course.duration_hours} ساعة محتوى` },
              { icon: '📱', label: 'متاح على الجوال والكمبيوتر' },
              { icon: '🏆', label: 'شهادة إتمام' },
              { icon: '🔄', label: 'وصول مدى الحياة' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.04)' : 'none', color: '#94a3b8', fontSize: 14 }}>
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
            {isEnrolled ? (
              <Link href={firstLessonHref} style={{ textDecoration: 'none', display: 'block', marginTop: 20 }}>
                <button style={{ width: '100%', background: 'linear-gradient(135deg,#6366f1,#a855f7)', border: 'none', color: '#fff', padding: '14px', borderRadius: 12, fontSize: 16, fontWeight: 800, cursor: 'pointer', fontFamily: "'Cairo', sans-serif" }}>
                  استكمال الكورس ←
                </button>
              </Link>
            ) : isComingSoon ? (
              <div style={{ marginTop: 20, background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: 12, padding: 16, textAlign: 'center' }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>🚧</div>
                <div style={{ color: '#ef4444', fontWeight: 800, fontSize: 16, marginBottom: 4 }}>مسار قيد التطوير</div>
                <div style={{ color: '#fca5a5', fontSize: 13 }}>هذا المسار قيد التطوير حالياً وسيتم إطلاقه قريباً.</div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20 }}>
                <Link href={firstLessonHref} style={{ textDecoration: 'none', display: 'block' }}>
                  <button style={{ width: '100%', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', color: '#22c55e', padding: '14px', borderRadius: 12, fontSize: 16, fontWeight: 800, cursor: 'pointer', fontFamily: "'Cairo', sans-serif", transition: 'all 0.3s' }} onMouseOver={e=>e.currentTarget.style.background='rgba(34,197,94,0.2)'} onMouseOut={e=>e.currentTarget.style.background='rgba(34,197,94,0.1)'}>
                    ▶ ابدأ الدرس الأول مجاناً
                  </button>
                </Link>
                <button 
                  onClick={() => setShowPaymentModal(true)}
                  style={{ width: '100%', background: 'linear-gradient(135deg,#6366f1,#a855f7)', border: 'none', color: '#fff', padding: '14px', borderRadius: 12, fontSize: 16, fontWeight: 800, cursor: 'pointer', fontFamily: "'Cairo', sans-serif", boxShadow: '0 4px 15px rgba(99,102,241,0.3)' }}>
                  اشترك لفتح كامل الكورس 🔓
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {showPaymentModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(5px)', padding: 20 }}>
          <div style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 20, padding: 30, maxWidth: 500, width: '100%', position: 'relative' }}>
            <button onClick={() => setShowPaymentModal(false)} style={{ position: 'absolute', top: 15, right: 15, background: 'none', border: 'none', color: '#64748b', fontSize: 24, cursor: 'pointer' }}>×</button>
            <h2 style={{ fontSize: 24, margin: '0 0 16px', color: '#fff' }}>تأكيد الاشتراك والدفع</h2>
            <p style={{ color: '#94a3b8', fontSize: 15, marginBottom: 20 }}>
              لإتمام اشتراكك في هذا الكورس، يرجى تحويل مبلغ <strong style={{color: '#a855f7'}}>{course.price} {course.currency}</strong> عبر إحدى الطرق التالية:
            </p>
            
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: 16, borderRadius: 12, marginBottom: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <span style={{ fontSize: 24 }}>🔴</span>
                <span style={{ fontWeight: 700, fontSize: 16, color: '#fff' }}>فودافون كاش</span>
              </div>
              <div style={{ fontSize: 20, color: '#a855f7', fontWeight: 900, direction: 'ltr', textAlign: 'right' }}>01069593097</div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: 16, borderRadius: 12, marginBottom: 24, border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <span style={{ fontSize: 24 }}>🟣</span>
                <span style={{ fontWeight: 700, fontSize: 16, color: '#fff' }}>انستا باي (InstaPay)</span>
              </div>
              <div style={{ fontSize: 20, color: '#a855f7', fontWeight: 900, direction: 'ltr', textAlign: 'right' }}>01069593097</div>
            </div>

            {activationRequested ? (
              <div style={{ background: 'rgba(34,197,94,0.1)', color: '#22c55e', padding: 16, borderRadius: 12, textAlign: 'center', fontWeight: 700 }}>
                تم إرسال طلب التفعيل للإدارة. سيتم تفعيل الكورس فور مراجعة التحويل.
              </div>
            ) : (
              <div>
                <p style={{ color: '#f87171', fontSize: 13, marginBottom: 16 }}>* بعد إجراء التحويل، اضغط على الزر أدناه لإرسال طلب التفعيل للإدارة.</p>
                <button 
                  onClick={handleRequestActivation}
                  disabled={activationLoading}
                  style={{ width: '100%', background: '#a855f7', color: '#fff', border: 'none', padding: 16, borderRadius: 12, fontSize: 16, fontWeight: 700, cursor: activationLoading ? 'not-allowed' : 'pointer', opacity: activationLoading ? 0.7 : 1 }}>
                  {activationLoading ? 'جاري الإرسال...' : 'قمت بالتحويل، أرسل طلب التفعيل'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="tabs-container" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 40px', display: 'flex', gap: 0, position: 'sticky', top: 61, zIndex: 99, background: 'rgba(6,6,18,0.95)', backdropFilter: 'blur(20px)' }}>
        {TABS.map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
            padding: '18px 24px', background: 'none', border: 'none',
            borderBottom: activeTab === tab.id ? '2px solid #6366f1' : '2px solid transparent',
            color: activeTab === tab.id ? '#a855f7' : '#64748b',
            fontSize: 14, fontWeight: activeTab === tab.id ? 700 : 400,
            cursor: 'pointer', fontFamily: "'Cairo', sans-serif",
            transition: 'all 0.2s', marginBottom: -1,
          }}>
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content-container" style={{ maxWidth: 1000, margin: '0 auto', padding: '40px 40px' }}>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            <h2 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 20px' }}>ماذا ستتعلم؟</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 12, marginBottom: 40 }}>
              {[
                'أساسيات البرمجة من الصفر',
                'المتغيرات وأنواع البيانات',
                'الجمل الشرطية والحلقات',
                'الدوال والبرمجة الكائنية',
                'التعامل مع الملفات والبيانات',
                'مشاريع عملية حقيقية',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 10 }}>
                  <span style={{ color: '#22c55e', fontSize: 16 }}>✓</span>
                  <span style={{ color: '#cbd5e1', fontSize: 14 }}>{item}</span>
                </div>
              ))}
            </div>

            <h2 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 20px' }}>متطلبات الكورس</h2>
            <div style={{ marginBottom: 40 }}>
              {['لا يوجد خبرة مسبقة مطلوبة', 'جهاز كمبيوتر أو لابتوب', 'اتصال بالإنترنت', 'رغبة في التعلم والتطبيق'].map((req, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', color: '#94a3b8', fontSize: 14 }}>
                  <span>•</span>
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Curriculum Tab */}
        {activeTab === 'curriculum' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, margin: 0 }}>محتوى الكورس</h2>
              <span style={{ color: '#64748b', fontSize: 13 }}>{lessons.length} درس · {course.duration_hours} ساعة</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {lessons.length > 0 ? lessons.map((lesson, i) => {
                const href = getLessonHref(lesson);
                const canAccess = isEnrolled || (lesson.is_free && !isComingSoon);
                return (
                  <div key={lesson.id} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '16px 20px',
                    background: canAccess ? 'rgba(99,102,241,0.05)' : 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 12, transition: 'all 0.2s',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <div style={{
                        width: 36, height: 36, borderRadius: 10,
                        background: canAccess ? 'rgba(99,102,241,0.2)' : 'rgba(255,255,255,0.05)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14, color: canAccess ? '#a855f7' : '#334155',
                        flexShrink: 0,
                      }}>
                        {canAccess ? '▶' : '🔒'}
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 15, color: canAccess ? '#f1f5f9' : '#64748b' }}>
                          {i + 1}. {lesson.title}
                        </div>
                        {canAccess && (
                          <span style={{ fontSize: 11, color: '#22c55e', fontWeight: 700 }}>✓ متاح لك</span>
                        )}
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ color: '#64748b', fontSize: 13 }}>⏱ {lesson.duration_minutes || 30} د</span>
                      {canAccess ? (
                        <Link href={href} style={{ textDecoration: 'none', padding: '6px 16px', background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 8, color: '#a855f7', fontSize: 13, fontWeight: 700 }}>
                          ابدأ
                        </Link>
                      ) : isComingSoon ? (
                        <span style={{ padding: '6px 16px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: 8, color: '#ef4444', fontSize: 13, fontWeight: 700 }}>
                          قريباً
                        </span>
                      ) : null}
                    </div>
                  </div>
                );
              }) : (
                <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>
                  <div style={{ fontSize: 40, marginBottom: 12 }}>📚</div>
                  <div>الدروس قيد الإعداد</div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Instructor Tab */}
        {activeTab === 'instructor' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, marginBottom: 32 }}>
              <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg,#6366f1,#a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, flexShrink: 0 }}>
                👨‍💻
              </div>
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 8px' }}>{course.instructor_name}</h3>
                <div style={{ color: '#a855f7', fontSize: 14, marginBottom: 12 }}>مدرب SVK Academy · خبير برمجة</div>
                <div style={{ display: 'flex', gap: 20, color: '#64748b', fontSize: 13 }}>
                  <span>⭐ {(course.rating || 0).toFixed(1)} تقييم</span>
                  <span>👥 {(course.enrollment_count || 0).toLocaleString('ar-EG')} طالب</span>
                  <span>📚 3 كورسات</span>
                </div>
              </div>
            </div>
            <p style={{ color: '#94a3b8', fontSize: 15, lineHeight: 1.9 }}>
              مدرب متخصص في مجال البرمجة وتطوير البرمجيات مع خبرة تزيد عن 8 سنوات. يؤمن بأن التعليم بالعربية حق لكل شاب يريد تعلم البرمجة. حرص دائماً على تبسيط المفاهيم المعقدة وتقديمها بطريقة سهلة وممتعة مع التطبيق العملي المستمر.
            </p>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div>
            <div className="reviews-summary-grid" style={{ marginBottom: 40 }}>
              <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.02)', borderRadius: 16, padding: '24px 16px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: 64, fontWeight: 900, background: 'linear-gradient(135deg,#fbbf24,#f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {(course.rating || 0).toFixed(1)}
                </div>
                <div style={{ color: '#fbbf24', fontSize: 24, margin: '8px 0' }}>{'★★★★★'.slice(0, Math.round(course.rating || 0))}</div>
                <div style={{ color: '#64748b', fontSize: 13 }}>من 5 نجوم</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'center' }}>
                {[5, 4, 3, 2, 1].map(star => (
                  <div key={star} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ color: '#fbbf24', minWidth: 20 }}>{star}★</span>
                    <div style={{ flex: 1, height: 8, background: 'rgba(255,255,255,0.08)', borderRadius: 4, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 7 : star === 2 ? 2 : 1}%`, background: '#fbbf24', borderRadius: 4 }} />
                    </div>
                    <span style={{ color: '#64748b', fontSize: 12, minWidth: 30 }}>{star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 7 : star === 2 ? 2 : 1}%</span>
                  </div>
                ))}
              </div>
            </div>
            {[
              { name: 'أحمد محمد', avatar: '👨', rating: 5, text: 'كورس ممتاز جداً! الشرح واضح وبسيط ومفهوم. استفدت كثيراً من الأمثلة العملية.' },
              { name: 'فاطمة علي', avatar: '👩', rating: 5, text: 'أفضل كورس Python بالعربي على الإطلاق. المدرب صبور ويشرح بطريقة رائعة.' },
              { name: 'محمد سالم', avatar: '🧑', rating: 4, text: 'محتوى قيّم وشامل. أتمنى لو كان فيه مزيد من المشاريع العملية لكن بشكل عام ممتاز.' },
            ].map((review, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, padding: 20, marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 32 }}>{review.avatar}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15 }}>{review.name}</div>
                    <div style={{ color: '#fbbf24', fontSize: 14 }}>{'★★★★★'.slice(0, review.rating)}</div>
                  </div>
                </div>
                <p style={{ margin: 0, color: '#94a3b8', fontSize: 14, lineHeight: 1.7 }}>{review.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        * { box-sizing: border-box; }
        @keyframes spin { to { transform: rotate(360deg); } }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #060612; }
        ::-webkit-scrollbar-thumb { background: rgba(99,102,241,0.3); border-radius: 3px; }
        
        .hero-grid-container {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 40px;
        }
        .price-card {
          min-width: 320px;
        }
        .reviews-summary-grid {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 40px;
        }
        
        @media (max-width: 991px) {
          .hero-grid-container {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
            padding: 30px 20px !important;
          }
          .price-card {
            width: 100% !important;
            min-width: 100% !important;
          }
        }
        
        @media (max-width: 768px) {
          .reviews-summary-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          nav {
            padding: 16px 20px !important;
          }
          .tabs-container {
            padding: 0 20px !important;
            overflow-x: auto !important;
            white-space: nowrap !important;
          }
          .tab-content-container {
            padding: 30px 20px !important;
          }
        }
      `}</style>
    </div>
  );
}
