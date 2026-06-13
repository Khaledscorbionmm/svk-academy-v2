'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { COMING_SOON_COURSE_IDS } from '@/lib/courseConfig';

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
  python: '🐍', 'البرمجة': '💻', 'Programming': '💻',
  javascript: '⚡', 'تطوير الويب': '🌐', 'Web Development': '🌐',
  react: '⚛️',
  ai: '🤖', 'الذكاء الاصطناعي': '🤖',
  database: '🗄️', 'قواعد البيانات': '🗄️',
  devops: '🛠️',
  security: '🛡️', 'الأمن السيبراني': '🛡️', 'Security': '🛡️',
  languages: '🌍', 'اللغات': '🌍', 'Languages': '🌍',
  default: '📚',
};

const LEVEL_LABELS: Record<string, { label: string; color: string; badgeIcon: string }> = {
  beginner: { label: 'مبتدئ وممتع', color: '#ec4899', badgeIcon: '🧸' },
  all_levels: { label: 'للجميع', color: '#06b6d4', badgeIcon: '🌟' },
  intermediate: { label: 'متوسط', color: '#f59e0b', badgeIcon: '🚀' },
  advanced: { label: 'متقدم واحترافي', color: '#22c55e', badgeIcon: '💻' },
  professional: { label: 'خبير', color: '#ef4444', badgeIcon: '🔥' }
};

const CAT_MAP: Record<string, string> = {
  'البرمجة': 'python', 'python': 'python', 'Programming': 'python',
  'تطوير الويب': 'javascript', 'javascript': 'javascript', 'Web Development': 'javascript',
  'react': 'react',
  'الذكاء الاصطناعي': 'ai', 'ai': 'ai',
  'قواعد البيانات': 'database', 'database': 'database',
  'devops': 'devops', 'DevOps': 'devops',
  'الأمن السيبراني': 'security', 'security': 'security', 'Security': 'security',
  'اللغات': 'languages', 'Languages': 'languages', 'languages': 'languages',
};

const CATEGORIES = [
  { id: 'all', label: 'كل الكورسات', icon: '🌟' },
  { id: 'languages', label: 'اللغات', icon: '🌍' },
  { id: 'python', label: 'البرمجة', icon: '💻' },
  { id: 'javascript', label: 'تطوير الويب', icon: '🌐' },
  { id: 'react', label: 'React', icon: '⚛️' },
  { id: 'ai', label: 'الذكاء الاصطناعي', icon: '🤖' },
  { id: 'security', label: 'الأمن السيبراني', icon: '🛡️' },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} style={{ color: i <= Math.round(rating) ? '#fbbf24' : '#334155', fontSize: 14, textShadow: i <= Math.round(rating) ? '0 0 10px rgba(251,191,36,0.5)' : 'none' }}>★</span>
      ))}
      <span style={{ color: '#fbbf24', fontSize: 13, fontWeight: 800, marginRight: 6 }}>{rating.toFixed(1)}</span>
    </div>
  );
}

function CourseCard({ course }: { course: Course }) {
  const icon = CATEGORY_ICONS[course.category || 'default'] || CATEGORY_ICONS.default;
  const levelInfo = (course.level && LEVEL_LABELS[course.level]) ? LEVEL_LABELS[course.level] : LEVEL_LABELS.beginner;
  
  const isBeginner = course.level === 'beginner' || course.level === 'all_levels' || !course.level;
  const isAdvanced = course.level === 'advanced' || course.level === 'professional';
  const isComingSoon = COMING_SOON_COURSE_IDS.includes(course.id);

  // Dynamic styling based on level
  const cardStyle = isBeginner ? {
    background: 'rgba(255,255,255,0.03)',
    border: '2px solid rgba(236,72,153,0.15)', // Pinkish soft border
    borderRadius: 36, // Extremely rounded for kids/beginners
    boxShadow: '0 10px 40px rgba(236,72,153,0.05)',
  } : isAdvanced ? {
    background: 'rgba(5,5,10,0.95)',
    border: '1px solid rgba(34,197,94,0.3)', // Hacker green border
    borderRadius: 12, // Sharp for pros
    boxShadow: '0 10px 30px rgba(34,197,94,0.05)',
  } : {
    // Intermediate
    background: 'rgba(15,15,30,0.8)',
    border: '1px solid rgba(99,102,241,0.2)',
    borderRadius: 24,
    boxShadow: '0 10px 30px rgba(99,102,241,0.05)',
  };

  const headerGradient = isBeginner 
    ? 'linear-gradient(135deg, rgba(236,72,153,0.25), rgba(6,182,212,0.25))' // Vibrant Pink to Cyan
    : isAdvanced
    ? 'linear-gradient(135deg, rgba(5,20,10,0.8), rgba(0,0,0,0.9))' // Dark matrix
    : 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.2))'; // Default purple

  return (
    <Link href={`/courses/${course.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <div
      style={{
        ...cardStyle,
        overflow: 'hidden',
        transition: isBeginner ? 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'all 0.3s ease', // Bouncy for beginners, smooth for pros
        cursor: 'pointer',
        backdropFilter: 'blur(15px)',
        position: 'relative'
      }}
      onMouseEnter={e => {
        if (isBeginner) {
          (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-12px) scale(1.02)';
          (e.currentTarget as HTMLDivElement).style.border = '2px solid rgba(236,72,153,0.5)';
          (e.currentTarget as HTMLDivElement).style.boxShadow = '0 30px 60px rgba(6,182,212,0.2)';
        } else if (isAdvanced) {
          (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-5px)';
          (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(34,197,94,0.8)';
          (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 30px rgba(34,197,94,0.2)';
        } else {
          (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-8px)';
          (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(99,102,241,0.5)';
          (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 50px rgba(99,102,241,0.2)';
        }
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0) scale(1)';
        (e.currentTarget as HTMLDivElement).style.border = cardStyle.border;
        (e.currentTarget as HTMLDivElement).style.boxShadow = cardStyle.boxShadow;
      }}
    >
      {/* Decorative Orbs for beginners */}
      {isBeginner && (
        <>
          <div style={{ position: 'absolute', top: -30, right: -30, width: 100, height: 100, background: 'rgba(236,72,153,0.3)', filter: 'blur(30px)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: -30, left: -30, width: 100, height: 100, background: 'rgba(6,182,212,0.3)', filter: 'blur(30px)', borderRadius: '50%' }} />
        </>
      )}

      {/* Card Header */}
      <div style={{ background: headerGradient, padding: '32px 24px 24px', position: 'relative', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ 
            fontSize: isBeginner ? 60 : 45, 
            lineHeight: 1, 
            filter: isBeginner ? 'drop-shadow(0 10px 10px rgba(0,0,0,0.2))' : 'none',
            transition: 'transform 0.3s'
          }} className="course-icon">
            {icon}
          </div>
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-end' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 4, padding: '4px 12px', borderRadius: isBeginner ? 20 : 6,
              background: `rgba(${levelInfo.color.replace('#','').match(/.{2}/g)?.map(c=>parseInt(c,16)).join(',')},0.15)`,
              border: `1px solid ${levelInfo.color}40`,
              color: levelInfo.color, fontSize: 11, fontWeight: 800,
            }}>
              <span>{levelInfo.badgeIcon}</span> {levelInfo.label}
            </span>
            {course.is_featured && (
              <div style={{ padding: '2px 10px', background: 'rgba(251,191,36,0.2)', border: '1px solid rgba(251,191,36,0.4)', borderRadius: 20, color: '#fbbf24', fontSize: 10, fontWeight: 900, textAlign: 'center', boxShadow: '0 0 10px rgba(251,191,36,0.2)' }}>
                ⭐ كورس مميز
              </div>
            )}
          </div>
        </div>
      </div>

      {isComingSoon && (
        <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 10, background: 'rgba(239, 68, 68, 0.9)', padding: '6px 16px', borderRadius: 20, color: 'white', fontWeight: 900, fontSize: 14, boxShadow: '0 4px 15px rgba(239, 68, 68, 0.4)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.2)' }}>
          🚧 قريباً
        </div>
      )}

      {/* Card Body */}
      <div style={{ padding: '24px', position: 'relative', zIndex: 1 }}>
        <h3 style={{ fontSize: isBeginner ? 20 : 18, fontWeight: 900, margin: '0 0 10px', lineHeight: 1.4, color: isAdvanced ? '#4ade80' : '#fff', textShadow: isAdvanced ? '0 0 10px rgba(74,222,128,0.2)' : 'none' }}>
          {course.title_ar || course.title}
        </h3>
        <p style={{ color: '#94a3b8', fontSize: 14, margin: '0 0 20px', lineHeight: 1.6, minHeight: 44 }}>
          {(course.description_ar || course.description || '').slice(0, 90)}{(course.description_ar || course.description || '').length > 90 ? '...' : ''}
        </p>

        <StarRating rating={Number(course.rating) || 4.5} />

        <div style={{ display: 'flex', gap: 16, marginTop: 16, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#64748b', fontSize: 12, fontWeight: 600 }}>
            <span style={{ fontSize: 16 }}>⏱</span>
            <span>{course.duration_hours || 0} ساعة ممتعة</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#64748b', fontSize: 12, fontWeight: 600 }}>
            <span style={{ fontSize: 16 }}>👩‍🎓</span>
            <span>{(course.enrollment_count || 0).toLocaleString('ar-EG')} بطل</span>
          </div>
        </div>

        {/* Price + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 24 }}>
          {isComingSoon ? (
            <div style={{ color: '#ef4444', fontWeight: 800, fontSize: 14 }}>
              في مرحلة التطوير
            </div>
          ) : (
            <div>
              <div>
                <span style={{ fontSize: 24, fontWeight: 900, color: isBeginner ? '#ec4899' : isAdvanced ? '#22c55e' : '#a855f7' }}>369</span>
                <span style={{ color: '#64748b', fontSize: 12, marginRight: 4, fontWeight: 700 }}>EGP</span>
              </div>
              <div style={{ fontSize: 11, color: '#22c55e', fontWeight: 800, marginTop: 4 }}>🎁 الدرس الأول مجاني</div>
            </div>
          )}
          <span style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            background: isBeginner ? 'linear-gradient(135deg, #ec4899, #8b5cf6)' : isAdvanced ? 'transparent' : 'linear-gradient(135deg, #6366f1, #a855f7)',
            border: isAdvanced ? '1px solid #22c55e' : 'none',
            color: isAdvanced ? '#22c55e' : '#fff',
            padding: isBeginner ? '12px 24px' : '10px 20px', 
            borderRadius: isBeginner ? 100 : 8,
            fontSize: isBeginner ? 15 : 13, 
            fontWeight: 800,
            boxShadow: isBeginner ? '0 10px 20px rgba(236,72,153,0.3)' : 'none',
          }}>
            {isComingSoon ? 'تفاصيل المسار' : isBeginner ? '🚀 ابدأ المغامرة' : isAdvanced ? '⚡ بدء التحدي' : 'عرض الكورس ←'}
          </span>
        </div>
      </div>
    </div>
    </Link>
  );
}

function SkeletonCard() {
  return (
    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 24, overflow: 'hidden' }}>
      <div style={{ height: 140, background: 'rgba(255,255,255,0.03)', animation: 'pulse 1.5s ease infinite' }} />
      <div style={{ padding: '24px' }}>
        <div style={{ height: 24, background: 'rgba(255,255,255,0.05)', borderRadius: 8, marginBottom: 16, animation: 'pulse 1.5s ease infinite' }} />
        <div style={{ height: 14, background: 'rgba(255,255,255,0.03)', borderRadius: 6, marginBottom: 8, animation: 'pulse 1.5s ease infinite' }} />
        <div style={{ height: 14, background: 'rgba(255,255,255,0.03)', borderRadius: 6, width: '70%', animation: 'pulse 1.5s ease infinite' }} />
        <div style={{ height: 45, background: 'rgba(255,255,255,0.05)', borderRadius: 100, marginTop: 24, animation: 'pulse 1.5s ease infinite' }} />
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
  const [user, setUser] = useState<any>(null);

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

  async function fetchCourses() {
    try {
      const res = await fetch('/api/courses', { cache: 'no-store' });
      if (!res.ok) throw new Error('فشل في جلب الكورسات');
      const data = await res.json();
      setCourses(data.courses || []);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setMounted(true);
    fetchCourses();
    checkUser();
  }, []);



  const filtered = courses.filter(c => {
    // Hide empty courses like 89
    if (c.id === 89) return false;
    
    const normalizedCat = CAT_MAP[c.category || ''] || c.category || '';
    const matchCat = activeCategory === 'all' || normalizedCat === activeCategory || c.category === activeCategory;
    const matchSearch = !search || (c.title_ar || c.title || '').toLowerCase().includes(search.toLowerCase()) || (c.description_ar || c.description || '').includes(search);
    return matchCat && matchSearch;
  });

  if (!mounted) {
    return <div style={{ minHeight: '100vh', background: '#0B0B1A' }} />;
  }

  return (
    <div style={{ fontFamily: "'Cairo', sans-serif", direction: 'rtl', background: '#0B0B1A', color: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet" />

      {/* Animated Background Orbs */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 60%)', filter: 'blur(60px)', animation: 'floatOrb 10s infinite alternate' }} />
        <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 60%)', filter: 'blur(80px)', animation: 'floatOrb 15s infinite alternate-reverse' }} />
      </div>

      {/* Navbar */}
      <nav style={{ position: 'relative', zIndex: 10, borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '16px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(11,11,26,0.7)', backdropFilter: 'blur(20px)' }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: 14, background: 'linear-gradient(135deg, #ec4899, #8b5cf6, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, boxShadow: '0 0 20px rgba(236,72,153,0.4)' }}>✨</div>
          <span style={{ fontSize: 22, fontWeight: 900, background: 'linear-gradient(90deg,#ec4899,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SVK Academy</span>
        </Link>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          {user ? (
            <Link href={user.role === 'admin' ? '/admin/dashboard' : '/dashboard'} style={{ textDecoration: 'none', background: 'linear-gradient(135deg,#8b5cf6,#06b6d4)', color: '#fff', padding: '10px 24px', borderRadius: 100, fontSize: 14, fontWeight: 800, boxShadow: '0 4px 15px rgba(6,182,212,0.3)' }}>
              لوحة التحكم 🎮
            </Link>
          ) : (
            <>
              <Link href="/login" style={{ textDecoration: 'none', color: '#cbd5e1', padding: '10px 20px', borderRadius: 100, fontSize: 14, fontWeight: 700, transition: 'background 0.2s' }} onMouseOver={e=>e.currentTarget.style.background='rgba(255,255,255,0.05)'} onMouseOut={e=>e.currentTarget.style.background='transparent'}>تسجيل الدخول</Link>
              <Link href="/register" style={{ textDecoration: 'none', background: 'linear-gradient(135deg,#ec4899,#8b5cf6)', color: '#fff', padding: '10px 28px', borderRadius: 100, fontSize: 14, fontWeight: 800, boxShadow: '0 4px 20px rgba(236,72,153,0.4)', transition: 'transform 0.2s' }} onMouseOver={e=>e.currentTarget.style.transform='scale(1.05)'} onMouseOut={e=>e.currentTarget.style.transform='scale(1)'}>ابدأ اللعب مجاناً 🚀</Link>
            </>
          )}
        </div>
      </nav>

      {/* Header */}
      <div style={{ position: 'relative', zIndex: 1, padding: '80px 20px 40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 900, margin: '0 0 20px', background: 'linear-gradient(to right, #fff, #f8fafc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.5))' }}>
          اختر <span style={{ color: '#ec4899', WebkitTextFillColor: 'initial' }}>مغامرتك</span> القادمة! 🎮
        </h1>
        <p style={{ color: '#94a3b8', fontSize: 'clamp(16px, 2vw, 20px)', margin: '0 auto 40px', maxWidth: 700, lineHeight: 1.8, fontWeight: 600 }}>
          سواء كنت شبلاً صغيراً يبدأ أولى خطواته، أو محترفاً يبحث عن تحديات الهاكرز العميقة... لدينا المسار المثالي لك!
        </p>

        {/* Search Bar */}
        <div style={{ maxWidth: 600, margin: '0 auto', position: 'relative' }}>
          <div style={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', fontSize: 24, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}>🔍</div>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="ابحث عن كورس، لغة برمجة، أو مهارة..."
            style={{
              width: '100%', padding: '20px 60px 20px 24px', borderRadius: 100,
              background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(255,255,255,0.1)',
              color: '#fff', fontSize: 18, outline: 'none', boxSizing: 'border-box',
              fontFamily: "'Cairo', sans-serif", fontWeight: 600,
              boxShadow: '0 10px 30px rgba(0,0,0,0.2), inset 0 2px 5px rgba(255,255,255,0.02)',
              transition: 'border 0.3s'
            }}
            onFocus={e => e.currentTarget.style.borderColor = 'rgba(236,72,153,0.5)'}
            onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
          />
        </div>
      </div>

      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1400, margin: '0 auto', padding: '20px 24px 80px' }}>
        
        {/* Playful Category Tabs */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 50, overflowX: 'auto', paddingBottom: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '12px 28px', borderRadius: 100,
                background: activeCategory === cat.id ? 'linear-gradient(135deg, #ec4899, #8b5cf6)' : 'rgba(255,255,255,0.05)',
                color: activeCategory === cat.id ? '#fff' : '#cbd5e1',
                fontSize: 16, fontWeight: 800,
                cursor: 'pointer', fontFamily: "'Cairo', sans-serif",
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                boxShadow: activeCategory === cat.id ? '0 10px 25px rgba(236,72,153,0.4)' : '0 4px 10px rgba(0,0,0,0.2)',
                transform: activeCategory === cat.id ? 'scale(1.05) translateY(-4px)' : 'scale(1)',
                border: activeCategory !== cat.id ? '1px solid rgba(255,255,255,0.05)' : 'none',
              }}
              onMouseOver={e => { if (activeCategory !== cat.id) e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
              onMouseOut={e => { if (activeCategory !== cat.id) e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
            >
              <span style={{ fontSize: 20, marginRight: 8, verticalAlign: 'middle' }}>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results Info */}
        {!loading && (
          <div style={{ marginBottom: 30, color: '#94a3b8', fontSize: 16, fontWeight: 700, textAlign: 'center' }}>
            وجدت لك <span style={{ color: '#ec4899', fontSize: 20 }}>{filtered.length}</span> {filtered.length >= 3 && filtered.length <= 10 ? 'مغامرات جاهزة' : 'مغامرة جاهزة'}! {search && `عن "${search}"`}
          </div>
        )}

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 32 }}>
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          ) : filtered.length === 0 ? (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '100px 20px', background: 'rgba(255,255,255,0.02)', borderRadius: 40, border: '2px dashed rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: 80, marginBottom: 20, animation: 'floatOrb 4s infinite alternate' }}>🕵️‍♂️</div>
              <h3 style={{ fontSize: 28, fontWeight: 900, margin: '0 0 12px' }}>لم نعثر على هذا الكنز!</h3>
              <p style={{ color: '#94a3b8', fontSize: 18 }}>حاول البحث بكلمات مختلفة أو اختر مساراً آخر من الأعلى.</p>
              <button onClick={() => { setSearch(''); setActiveCategory('all'); }} style={{ marginTop: 24, background: '#fff', color: '#0B0B1A', border: 'none', padding: '14px 32px', borderRadius: 100, fontSize: 16, fontWeight: 900, cursor: 'pointer', boxShadow: '0 10px 20px rgba(255,255,255,0.2)' }}>
                إلغاء البحث 🔄
              </button>
            </div>
          ) : (
            filtered.map(course => <CourseCard key={course.id} course={course} />)
          )}
        </div>
      </div>

      <style>{`
        * { box-sizing: border-box; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        @keyframes floatOrb { 0% { transform: translate(0, 0) scale(1); } 100% { transform: translate(30px, -50px) scale(1.1); } }
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: #0B0B1A; }
        ::-webkit-scrollbar-thumb { background: rgba(236,72,153,0.5); border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(236,72,153,0.8); }
        .course-icon { display: inline-block; }
        a, button { -webkit-tap-highlight-color: transparent; }
      `}</style>
    </div>
  );
}
