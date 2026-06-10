'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Course {
  id: number;
  title: string;
  title_ar?: string;
  description?: string;
  description_ar?: string;
  thumbnail_url?: string;
  price: number;
  currency: string;
  instructor_name?: string;
  category?: string;
  level?: string;
  duration_hours?: number;
  is_published?: boolean;
  is_featured?: boolean;
  enrollment_count?: number;
  rating?: number;
}

const CATEGORY_ICONS: Record<string, string> = {
  python: '🐍', 'البرمجة': '🐍',
  javascript: '⚡', 'تطوير الويب': '⚡',
  react: '⚛️',
  ai: '🤖', 'الذكاء الاصطناعي': '🤖',
  database: '🗄️', 'قواعد البيانات': '🗄️',
  devops: '🛠️',
  security: '🔒', 'الأمن السيبراني': '🔒',
  default: '📚',
};

const LEVEL_LABELS: Record<string, { label: string; color: string }> = {
  beginner: { label: 'مبتدئ', color: '#22c55e' },
  intermediate: { label: 'متوسط', color: '#f59e0b' },
  advanced: { label: 'متقدم', color: '#ef4444' },
};

// Map Arabic DB categories to filter IDs
const CAT_MAP: Record<string, string> = {
  'البرمجة': 'python', 'python': 'python',
  'تطوير الويب': 'javascript', 'javascript': 'javascript',
  'react': 'react',
  'الذكاء الاصطناعي': 'ai', 'ai': 'ai',
  'قواعد البيانات': 'database', 'database': 'database',
  'devops': 'devops', 'DevOps': 'devops',
  'الأمن السيبراني': 'security', 'security': 'security',
};

const CATEGORIES = [
  { id: 'all', label: 'كل الكورسات', icon: '🌟' },
  { id: 'python', label: 'Python', icon: '🐍' },
  { id: 'javascript', label: 'JavaScript', icon: '⚡' },
  { id: 'react', label: 'React', icon: '⚛️' },
  { id: 'ai', label: 'الذكاء الاصطناعي', icon: '🤖' },
  { id: 'database', label: 'قواعد البيانات', icon: '🗄️' },
  { id: 'devops', label: 'DevOps', icon: '🛠️' },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} style={{ color: i <= Math.round(rating) ? '#fbbf24' : '#334155', fontSize: 13 }}>★</span>
      ))}
      <span style={{ color: '#fbbf24', fontSize: 13, fontWeight: 700, marginRight: 4 }}>{rating.toFixed(1)}</span>
    </div>
  );
}

function CourseCard({ course }: { course: Course }) {
  const icon = CATEGORY_ICONS[course.category || 'default'] || CATEGORY_ICONS.default;
  const level = LEVEL_LABELS[course.level || 'beginner'] || LEVEL_LABELS.beginner;
  const gradients: Record<string, string> = {
    python: 'linear-gradient(135deg, #1e3a5f, #0a2440)',
    javascript: 'linear-gradient(135deg, #3b2a00, #1a1000)',
    react: 'linear-gradient(135deg, #0a2a3a, #001525)',
    ai: 'linear-gradient(135deg, #2a0a3a, #150025)',
    database: 'linear-gradient(135deg, #1a2a1a, #001500)',
    devops: 'linear-gradient(135deg, #2a1a0a, #150800)',
    default: 'linear-gradient(135deg, #1a1040, #0a0820)',
  };
  const gradient = gradients[course.category || 'default'] || gradients.default;

  return (
    <Link href={`/courses/${course.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <div
      style={{
        background: 'rgba(15,15,30,0.8)',
        border: '1px solid rgba(99,102,241,0.15)',
        borderRadius: 20,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        backdropFilter: 'blur(10px)',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-8px)';
        (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(99,102,241,0.4)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 60px rgba(99,102,241,0.15)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(99,102,241,0.15)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
      }}
    >
      {/* Card Header */}
      <div style={{ background: gradient, padding: '32px 24px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -20, left: -20, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.03)' }} />
        <div style={{ position: 'absolute', bottom: -30, right: -10, width: 100, height: 100, borderRadius: '50%', background: 'rgba(255,255,255,0.02)' }} />

        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <span style={{ fontSize: 52, lineHeight: 1 }}>{icon}</span>
          <div style={{ textAlign: 'left' }}>
            <span style={{
              display: 'inline-block', padding: '3px 12px', borderRadius: 20,
              background: `rgba(${level.color === '#22c55e' ? '34,197,94' : level.color === '#f59e0b' ? '245,158,11' : '239,68,68'},0.15)`,
              border: `1px solid ${level.color}40`,
              color: level.color, fontSize: 11, fontWeight: 700,
            }}>
              {level.label}
            </span>
            {course.is_featured && (
              <div style={{ marginTop: 6, padding: '2px 10px', background: 'rgba(168,85,247,0.2)', border: '1px solid rgba(168,85,247,0.4)', borderRadius: 20, color: '#a855f7', fontSize: 10, fontWeight: 700, textAlign: 'center' }}>
                ⭐ مميز
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div style={{ padding: '20px 24px 24px' }}>
        <h3 style={{ fontSize: 17, fontWeight: 800, margin: '0 0 8px', lineHeight: 1.4, color: '#f1f5f9' }}>
          {course.title_ar || course.title}
        </h3>
        <p style={{ color: '#64748b', fontSize: 13, margin: '0 0 16px', lineHeight: 1.6 }}>
          {(course.description_ar || course.description || '').slice(0, 90)}{(course.description_ar || course.description || '').length > 90 ? '...' : ''}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 20 }}>👨‍🏫</span>
          <span style={{ color: '#94a3b8', fontSize: 13 }}>{course.instructor_name || 'مدرب SVK'}</span>
        </div>

        <StarRating rating={course.rating || 0} />

        <div style={{ display: 'flex', gap: 16, marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#64748b', fontSize: 12 }}>
            <span>⏱</span>
            <span>{course.duration_hours || 0} ساعة</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#64748b', fontSize: 12 }}>
            <span>👥</span>
            <span>{(course.enrollment_count || 0).toLocaleString('ar-EG')} طالب</span>
          </div>
        </div>

        {/* Price + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 16 }}>
          <div>
            {Number(course.price) === 0 ? (
              <span style={{ fontSize: 18, fontWeight: 900, color: '#22c55e' }}>مجاني 🎁</span>
            ) : (
              <div>
                <span style={{ fontSize: 20, fontWeight: 900, color: '#a855f7' }}>{course.price}</span>
                <span style={{ color: '#64748b', fontSize: 12, marginRight: 4 }}>{course.currency}</span>
              </div>
            )}
          </div>
          <span style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
            color: '#fff',
            padding: '10px 20px', borderRadius: 10,
            fontSize: 13, fontWeight: 700,
            transition: 'all 0.2s',
          }}>
            عرض الكورس ←
          </span>
        </div>
      </div>
    </div>
    </Link>
  );
}

function SkeletonCard() {
  return (
    <div style={{ background: 'rgba(15,15,30,0.8)', border: '1px solid rgba(99,102,241,0.1)', borderRadius: 20, overflow: 'hidden' }}>
      <div style={{ height: 130, background: 'rgba(255,255,255,0.03)', animation: 'pulse 1.5s ease infinite' }} />
      <div style={{ padding: '20px 24px' }}>
        <div style={{ height: 20, background: 'rgba(255,255,255,0.05)', borderRadius: 6, marginBottom: 10, animation: 'pulse 1.5s ease infinite' }} />
        <div style={{ height: 14, background: 'rgba(255,255,255,0.03)', borderRadius: 6, marginBottom: 6, animation: 'pulse 1.5s ease infinite' }} />
        <div style={{ height: 14, background: 'rgba(255,255,255,0.03)', borderRadius: 6, width: '70%', animation: 'pulse 1.5s ease infinite' }} />
        <div style={{ height: 36, background: 'rgba(99,102,241,0.1)', borderRadius: 10, marginTop: 20, animation: 'pulse 1.5s ease infinite' }} />
      </div>
    </div>
  );
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetchCourses();
  }, []);

  async function fetchCourses() {
    try {
      const res = await fetch('/api/courses');
      if (!res.ok) throw new Error('فشل في جلب الكورسات');
      const data = await res.json();
      setCourses(data.courses || []);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  }

  const filtered = courses.filter(c => {
    const normalizedCat = CAT_MAP[c.category || ''] || c.category || '';
    const matchCat = activeCategory === 'all' || normalizedCat === activeCategory || c.category === activeCategory;
    const matchSearch = !search || (c.title_ar || c.title || '').toLowerCase().includes(search.toLowerCase()) || (c.description_ar || c.description || '').includes(search);
    return matchCat && matchSearch;
  });

  const totalStudents = courses.reduce((s, c) => s + (c.enrollment_count || 0), 0);

  return (
    <div style={{ fontFamily: "'Cairo', sans-serif", direction: 'rtl', background: '#060612', color: '#fff', minHeight: '100vh' }}>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet" />

      {/* Navbar */}
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '16px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100, background: 'rgba(6,6,18,0.9)', backdropFilter: 'blur(20px)' }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 28 }}>🎓</span>
          <span style={{ fontSize: 20, fontWeight: 900, background: 'linear-gradient(135deg,#6366f1,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SVK Academy</span>
        </Link>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Link href="/login" style={{ textDecoration: 'none', color: '#94a3b8', padding: '8px 16px', borderRadius: 10, fontSize: 14 }}>تسجيل الدخول</Link>
          <Link href="/register" style={{ textDecoration: 'none', background: 'linear-gradient(135deg,#6366f1,#a855f7)', color: '#fff', padding: '8px 20px', borderRadius: 10, fontSize: 14, fontWeight: 700 }}>سجّل مجاناً</Link>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ position: 'relative', padding: '80px 40px 60px', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', bottom: -50, left: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'inline-block', padding: '6px 20px', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 100, fontSize: 13, color: '#a855f7', fontWeight: 700, marginBottom: 20 }}>
            🚀 كورسات تقنية بالعربي
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, margin: '0 0 16px', background: 'linear-gradient(135deg, #fff, #c4b5fd, #93c5fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            استكشف كورساتنا
          </h1>
          <p style={{ color: '#94a3b8', fontSize: 18, margin: '0 0 40px', maxWidth: 600, marginInline: 'auto', lineHeight: 1.8 }}>
            كورسات شاملة بالعربي من مدربين متخصصين — تعلّم من الصفر للاحتراف
          </p>

          {/* Search */}
          <div style={{ maxWidth: 500, margin: '0 auto', position: 'relative' }}>
            <span style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', fontSize: 18, color: '#64748b' }}>🔍</span>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="ابحث عن كورس..."
              style={{
                width: '100%', padding: '16px 48px 16px 20px', borderRadius: 14,
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(99,102,241,0.3)',
                color: '#fff', fontSize: 16, outline: 'none', boxSizing: 'border-box',
                fontFamily: "'Cairo', sans-serif",
              }}
            />
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(20px, 4vw, 60px)', padding: '20px 40px', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.01)', flexWrap: 'wrap' }}>
        {[
          { label: 'كورس متاح', value: courses.length || 6, icon: '📚' },
          { label: 'طالب مسجل', value: totalStudents || 7503, icon: '👥' },
          { label: 'مدرب متخصص', value: 12, icon: '👨‍🏫' },
          { label: 'ساعة محتوى', value: 200, icon: '⏱' },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 24, marginBottom: 4 }}>{s.icon}</div>
            <div style={{ fontSize: 28, fontWeight: 900, background: 'linear-gradient(135deg,#6366f1,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {s.value.toLocaleString('ar-EG')}+
            </div>
            <div style={{ color: '#64748b', fontSize: 13 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '40px 24px' }}>
        {/* Category Tabs */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 40, overflowX: 'auto', paddingBottom: 8, flexWrap: 'wrap' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '10px 20px', borderRadius: 12, border: 'none',
                background: activeCategory === cat.id ? 'linear-gradient(135deg,#6366f1,#a855f7)' : 'rgba(255,255,255,0.05)',
                color: activeCategory === cat.id ? '#fff' : '#94a3b8',
                fontSize: 14, fontWeight: activeCategory === cat.id ? 700 : 400,
                cursor: 'pointer', fontFamily: "'Cairo', sans-serif",
                transition: 'all 0.2s', whiteSpace: 'nowrap',
                boxShadow: activeCategory === cat.id ? '0 4px 20px rgba(99,102,241,0.3)' : 'none',
              }}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        {/* Results count */}
        {!loading && (
          <div style={{ marginBottom: 24, color: '#64748b', fontSize: 14 }}>
            عرض {filtered.length} كورس{search && ` - نتائج البحث عن "${search}"`}
          </div>
        )}

        {/* Error State */}
        {error && (
          <div style={{ textAlign: 'center', padding: '40px 20px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 16, marginBottom: 24 }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>⚠️</div>
            <div style={{ color: '#ef4444', fontSize: 16, marginBottom: 8 }}>{error}</div>
            <button onClick={fetchCourses} style={{ background: 'rgba(239,68,68,0.2)', border: '1px solid rgba(239,68,68,0.3)', color: '#ef4444', padding: '8px 20px', borderRadius: 8, cursor: 'pointer', fontFamily: "'Cairo', sans-serif" }}>
              إعادة المحاولة
            </button>
          </div>
        )}

        {/* Courses Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          ) : filtered.length === 0 ? (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '80px 20px' }}>
              <div style={{ fontSize: 60, marginBottom: 16 }}>🔍</div>
              <h3 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 8px' }}>لا توجد كورسات</h3>
              <p style={{ color: '#64748b' }}>جرب كلمة بحث مختلفة أو اختر تصنيفاً آخر</p>
              <button onClick={() => { setSearch(''); setActiveCategory('all'); }} style={{ marginTop: 16, background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.3)', color: '#a855f7', padding: '10px 24px', borderRadius: 10, cursor: 'pointer', fontFamily: "'Cairo', sans-serif" }}>
                إعادة الضبط
              </button>
            </div>
          ) : (
            filtered.map(course => <CourseCard key={course.id} course={course} />)
          )}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '40px', textAlign: 'center', color: '#334155', marginTop: 60 }}>
        <p style={{ margin: 0, fontSize: 14 }}>© 2025 SVK Academy — SmartVenom Technologies · جميع الحقوق محفوظة</p>
      </footer>

      <style>{`
        * { box-sizing: border-box; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: #060612; }
        ::-webkit-scrollbar-thumb { background: rgba(99,102,241,0.3); border-radius: 3px; }
      `}</style>
    </div>
  );
}
