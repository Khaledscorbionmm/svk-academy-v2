'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const COURSES = [
  { icon: '🐍', title: 'Python للمبتدئين', level: 'مبتدئ', hours: 40, price: 299, students: 487, rating: 4.9, cat: 'البرمجة' },
  { icon: '⚡', title: 'JavaScript الحديث', level: 'مبتدئ', hours: 30, price: 249, students: 612, rating: 4.8, cat: 'تطوير الويب' },
  { icon: '⚛️', title: 'React.js احترافي', level: 'متوسط', hours: 50, price: 399, students: 341, rating: 4.9, cat: 'تطوير الويب' },
  { icon: '🗄️', title: 'SQL وقواعد البيانات', level: 'مبتدئ', hours: 25, price: 199, students: 523, rating: 4.8, cat: 'قواعد البيانات' },
  { icon: '🧠', title: 'خوارزميات وهياكل البيانات', level: 'متقدم', hours: 60, price: 449, students: 189, rating: 5.0, cat: 'علوم الحاسب' },
  { icon: '🤖', title: 'الذكاء الاصطناعي', level: 'متوسط', hours: 55, price: 499, students: 276, rating: 4.9, cat: 'AI' },
];

const FEATURES = [
  { icon: '🎯', title: 'شرح بالعربي الفصيح', desc: 'كل درس يُشرح بلغة عربية واضحة 100% مع أمثلة من واقعنا' },
  { icon: '💻', title: 'Code Editor مدمج', desc: 'جرب الكود مباشرة في المتصفح بدون تثبيت أي شيء' },
  { icon: '🏆', title: 'نظام النقاط والشارات', desc: 'اكسب XP وارتقِ في الليدربورد مع كل درس تُكمله' },
  { icon: '📊', title: 'تصور المعادلات', desc: 'رسوم بيانية تفاعلية لكل خوارزمية ومفهوم برمجي' },
  { icon: '🌍', title: 'مجتمع المبرمجين', desc: 'انضم لآلاف المبرمجين العرب وشارك في المشاريع' },
  { icon: '📱', title: 'متاح على كل الأجهزة', desc: 'تعلم من موبايلك أو لابتوبك في أي وقت وأي مكان' },
];

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(false);
  const [typed, setTyped] = useState('');
  const words = ['Python', 'JavaScript', 'React', 'AI', 'SQL', 'DevOps'];
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [stars, setStars] = useState<Array<{ width: number; height: number; bg: string; top: string; left: string; delay: string; duration: string }>>([]);
  const [siteStats, setSiteStats] = useState({ totalStudents: 0, totalCourses: 0 });

  useEffect(() => {
    setMounted(true);
    
    // Safely generate stars client-side to prevent hydration mismatch or spread crashes
    const generatedStars = Array.from({ length: 40 }).map((_, i) => {
      const size = Math.random() * 3 + 1;
      const duration = 4 + Math.random() * 6;
      const delay = Math.random() * 5;
      const bgColors = ['rgba(99,102,241,0.6)', 'rgba(168,85,247,0.6)', 'rgba(6,182,212,0.6)'];
      return {
        width: size,
        height: size,
        bg: bgColors[i % 3],
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${delay}s`,
        duration: `${duration}s`
      };
    });
    setStars(generatedStars);

    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);

    // Fetch real counts from DB
    fetch('/api/stats')
      .then(r => r.json())
      .then(d => setSiteStats({ totalStudents: d.totalStudents ?? 0, totalCourses: d.totalCourses ?? 0 }))
      .catch(() => {});

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const word = words[wordIdx];
      if (!deleting && charIdx < word.length) {
        setTyped(word.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      } else if (!deleting && charIdx === word.length) {
        setTimeout(() => setDeleting(true), 1500);
      } else if (deleting && charIdx > 0) {
        setTyped(word.slice(0, charIdx - 1));
        setCharIdx(c => c - 1);
      } else {
        setDeleting(false);
        setWordIdx(i => (i + 1) % words.length);
      }
    }, deleting ? 60 : 100);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx]);

  return (
    <div style={{ fontFamily: "'Cairo', 'Tajawal', sans-serif", direction: 'rtl', background: '#060612', color: '#fff', overflowX: 'hidden' }}>

      {/* ── ANIMATED BACKGROUND ── */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', width: 900, height: 900, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', top: -300, right: -200, animation: 'pulse 8s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)', bottom: -200, left: -100, animation: 'pulse 10s ease-in-out infinite 3s' }} />
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 70%)', top: '40%', left: '40%', animation: 'pulse 12s ease-in-out infinite 5s' }} />
        {mounted && stars.map((star, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: star.width,
            height: star.height,
            borderRadius: '50%',
            background: star.bg,
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            animationDuration: star.duration,
            animationName: 'float',
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite'
          }} />
        ))}
      </div>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrollY > 50 ? 'rgba(6,6,18,0.95)' : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none',
        borderBottom: scrollY > 50 ? '1px solid rgba(99,102,241,0.2)' : 'none',
        transition: 'all 0.3s ease', padding: '0 2rem',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 42, height: 42, borderRadius: 12, background: 'linear-gradient(135deg, #6366f1, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, boxShadow: '0 0 20px rgba(99,102,241,0.5)' }}>🎓</div>
            <div>
              <div style={{ fontWeight: 900, fontSize: 16, background: 'linear-gradient(90deg,#6366f1,#a855f7,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SVK Academy</div>
              <div style={{ fontSize: 10, color: '#94a3b8', marginTop: -2 }}>الأكاديمية الأولى عربياً</div>
            </div>
          </div>
          
          {/* Hamburger Icon */}
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer', display: 'none' }}>
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>

          {/* Nav Links */}
          <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {[['#courses', 'الكورسات'], ['#features', 'المميزات'], ['#stats', 'إحصائيات']].map(([href, label]) => (
              <a key={href} href={href} onClick={() => setIsMobileMenuOpen(false)} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: 14, fontWeight: 600, transition: 'color 0.2s', cursor: 'pointer' }}
                onMouseOver={e => (e.currentTarget.style.color = '#a855f7')}
                onMouseOut={e => (e.currentTarget.style.color = '#94a3b8')}>{label}</a>
            ))}
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} style={{
              color: '#94a3b8', textDecoration: 'none', padding: '8px 16px',
              borderRadius: 8, fontSize: 13, fontWeight: 600, border: '1px solid rgba(255,255,255,0.1)',
              transition: 'all 0.2s',
            }}>تسجيل الدخول</Link>
            <Link href="/register" onClick={() => setIsMobileMenuOpen(false)} style={{
              background: 'linear-gradient(135deg, #6366f1, #a855f7)',
              color: '#fff', textDecoration: 'none', padding: '8px 20px',
              borderRadius: 8, fontSize: 13, fontWeight: 700,
              boxShadow: '0 0 20px rgba(99,102,241,0.3)', transition: 'all 0.2s',
            }}>سجّل مجاناً 🚀</Link>
          </div>
        </div>
      </nav>

      {/* ── HERO SECTION ── */}
      <section style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 2rem 80px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 100, padding: '6px 16px', fontSize: 13, marginBottom: 32, animation: 'fadeInDown 0.6s ease' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            <span>🚀 الأكاديمية الأولى عربياً للبرمجة والتكنولوجيا</span>
          </div>

          {/* Main Heading */}
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.2, margin: '0 0 16px', animation: 'fadeInUp 0.8s ease 0.1s both' }}>
            تعلّم
            <span style={{ display: 'inline-block', minWidth: 220, background: 'linear-gradient(90deg, #6366f1, #a855f7, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', position: 'relative' }}>
              {' '}{typed}<span style={{ opacity: typed.length % 2 === 0 ? 1 : 0, transition: 'opacity 0.1s' }}>|</span>{' '}
            </span>
            <br />من الصفر للاحتراف
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#94a3b8', maxWidth: 650, margin: '0 auto 48px', lineHeight: 1.8, animation: 'fadeInUp 0.8s ease 0.2s both' }}>
            أكاديمية سمارت فينوم K — كل درس مفتاح سحري يفتح قواعك! تصعد من صفر لمليون في عالم البرمجة بالإنجازات والمجتمع والشرح الأعمق في الشرق الأوسط.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 64, animation: 'fadeInUp 0.8s ease 0.3s both' }}>
            <a href="#courses" style={{
              background: 'linear-gradient(135deg, #6366f1, #a855f7)',
              color: '#fff', textDecoration: 'none', padding: '16px 36px',
              borderRadius: 12, fontSize: 16, fontWeight: 700, cursor: 'pointer',
              boxShadow: '0 0 40px rgba(99,102,241,0.4)', transition: 'all 0.3s',
              border: 'none', display: 'inline-block',
            }}
              onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 0 60px rgba(99,102,241,0.6)'; }}
              onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(99,102,241,0.4)'; }}>
              ⚡ ابدأ رحلتك مجاناً
            </a>
            <a href="#features" style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff', textDecoration: 'none', padding: '16px 36px',
              borderRadius: 12, fontSize: 16, fontWeight: 700, cursor: 'pointer',
              backdropFilter: 'blur(10px)', transition: 'all 0.3s', display: 'inline-block',
            }}
              onMouseOver={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              🎬 اكتشف المميزات
            </a>
          </div>

          {/* Stats Row — real counts from DB */}
          <div style={{ display: 'flex', gap: 40, justifyContent: 'center', flexWrap: 'wrap', animation: 'fadeInUp 0.8s ease 0.4s both' }}>
            {[
              [siteStats.totalStudents > 0 ? `${siteStats.totalStudents}+` : '...', 'طالب مسجل'],
              [siteStats.totalCourses > 0 ? `${siteStats.totalCourses}+` : '...', 'كورس متخصص'],
              ['98%', 'رضا الطلاب'],
              ['∞', 'مجاناً للبدء'],
            ].map(([num, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 900, background: 'linear-gradient(90deg,#6366f1,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{num}</div>
                <div style={{ fontSize: 12, color: '#64748b', marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', animation: 'bounce 2s infinite' }}>
          <div style={{ width: 24, height: 40, border: '2px solid rgba(99,102,241,0.4)', borderRadius: 12, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 4 }}>
            <div style={{ width: 4, height: 8, background: '#6366f1', borderRadius: 2, animation: 'scrollDown 2s infinite' }} />
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={{ position: 'relative', zIndex: 1, padding: '100px 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ display: 'inline-block', background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: 100, padding: '4px 16px', fontSize: 12, color: '#a855f7', marginBottom: 16 }}>✨ لماذا SVK Academy؟</div>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 900, margin: 0 }}>الفريد من نوعه في مصر والشرق الأوسط</h2>
            <p style={{ color: '#64748b', marginTop: 12, fontSize: 16 }}>تجربة تعلم لم تراها من قبل</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20, padding: 32, cursor: 'default',
                transition: 'all 0.3s', backdropFilter: 'blur(10px)',
              }}
                onMouseOver={e => { e.currentTarget.style.background = 'rgba(99,102,241,0.08)'; e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)'; e.currentTarget.style.transform = 'translateY(-8px)'; }}
                onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>{f.title}</h3>
                <p style={{ color: '#64748b', fontSize: 14, margin: 0, lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section id="courses" style={{ position: 'relative', zIndex: 1, padding: '100px 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ display: 'inline-block', background: 'rgba(6,182,212,0.15)', border: '1px solid rgba(6,182,212,0.3)', borderRadius: 100, padding: '4px 16px', fontSize: 12, color: '#06b6d4', marginBottom: 16 }}>📚 الكورسات</div>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 900, margin: 0 }}>ابدأ رحلتك مع أفضل الكورسات</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
            {COURSES.map((c, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20, overflow: 'hidden', transition: 'all 0.3s', cursor: 'pointer',
              }}
                onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(99,102,241,0.2)'; e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)'; }}
                onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}>
                {/* Course Header */}
                <div style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.2))', padding: '28px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ fontSize: 48 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize: 11, color: '#6366f1', fontWeight: 700, marginBottom: 4 }}>{c.cat}</div>
                    <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800 }}>{c.title}</h3>
                  </div>
                </div>
                {/* Course Info */}
                <div style={{ padding: 24 }}>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
                    <span style={{ background: 'rgba(99,102,241,0.15)', color: '#6366f1', padding: '4px 10px', borderRadius: 6, fontSize: 12, fontWeight: 600 }}>{c.level}</span>
                    <span style={{ background: 'rgba(255,255,255,0.05)', color: '#94a3b8', padding: '4px 10px', borderRadius: 6, fontSize: 12 }}>⏱ {c.hours} ساعة</span>
                    <span style={{ background: 'rgba(255,255,255,0.05)', color: '#94a3b8', padding: '4px 10px', borderRadius: 6, fontSize: 12 }}>👥 {c.students}+ طالب</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ color: '#fbbf24', fontSize: 14 }}>{'★★★★★'.slice(0, Math.floor(c.rating))}</span>
                      <span style={{ color: '#64748b', fontSize: 12, marginRight: 4 }}>{c.rating}</span>
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 900, background: 'linear-gradient(90deg,#6366f1,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{c.price} ج.م</div>
                  </div>
                  <button style={{
                    width: '100%', marginTop: 16,
                    background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                    color: '#fff', border: 'none', padding: '12px', borderRadius: 10,
                    fontSize: 14, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s',
                  }}
                    onMouseOver={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'scale(0.98)'; }}
                    onMouseOut={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}>
                    سجّل الآن →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section id="stats" style={{ position: 'relative', zIndex: 1, padding: '80px 2rem', background: 'rgba(99,102,241,0.05)', borderTop: '1px solid rgba(99,102,241,0.1)', borderBottom: '1px solid rgba(99,102,241,0.1)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, textAlign: 'center' }}>
          {[
            { num: siteStats.totalStudents > 0 ? `${siteStats.totalStudents}+` : '...', label: 'طالب نشط', icon: '👨‍🎓' },
            { num: siteStats.totalCourses > 0 ? `${siteStats.totalCourses}+` : '...', label: 'كورس متخصص', icon: '📚' },
            { num: '98%', label: 'معدل الرضا', icon: '⭐' },
            { num: '24/7', label: 'دعم فوري', icon: '💬' },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>{s.icon}</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, background: 'linear-gradient(90deg,#6366f1,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.num}</div>
              <div style={{ color: '#64748b', marginTop: 8, fontWeight: 600 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section style={{ position: 'relative', zIndex: 1, padding: '120px 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(168,85,247,0.1))',
            border: '1px solid rgba(99,102,241,0.2)', borderRadius: 32, padding: '64px 48px',
            backdropFilter: 'blur(20px)', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: -80, right: -80, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.3), transparent)' }} />
            <div style={{ position: 'absolute', bottom: -80, left: -80, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.3), transparent)' }} />
            <div style={{ position: 'relative' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🚀</div>
              <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.5rem)', fontWeight: 900, margin: '0 0 16px' }}>ابدأ رحلتك اليوم!</h2>
              <p style={{ color: '#94a3b8', fontSize: 16, margin: '0 0 32px', lineHeight: 1.8 }}>انضم لأكثر من 3,000 طالب يتعلمون البرمجة بالعربي مع SVK Academy — الأولى في مصر والشرق الأوسط</p>
              <a href="#courses" style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                color: '#fff', textDecoration: 'none', padding: '16px 48px',
                borderRadius: 12, fontSize: 18, fontWeight: 900,
                boxShadow: '0 0 40px rgba(99,102,241,0.5)', transition: 'all 0.3s',
              }}
                onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)'; e.currentTarget.style.boxShadow = '0 0 60px rgba(99,102,241,0.7)'; }}
                onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(99,102,241,0.5)'; }}>
                ⚡ سجّل مجاناً الآن
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ position: 'relative', zIndex: 1, borderTop: '1px solid rgba(255,255,255,0.06)', padding: '40px 2rem', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #6366f1, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🎓</div>
          <span style={{ fontWeight: 900, fontSize: 18, background: 'linear-gradient(90deg,#6366f1,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SVK Academy</span>
        </div>
        <p style={{ color: '#334155', fontSize: 14, margin: '0 0 8px' }}>الأكاديمية الأولى عربياً للبرمجة والتكنولوجيا</p>
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', marginTop: 16, marginBottom: 16 }}>
          <Link href="/courses" style={{ color: '#64748b', fontSize: 13, textDecoration: 'none' }}>الكورسات</Link>
          <Link href="/login" style={{ color: '#64748b', fontSize: 13, textDecoration: 'none' }}>تسجيل الدخول</Link>
          <Link href="/register" style={{ color: '#64748b', fontSize: 13, textDecoration: 'none' }}>حساب جديد</Link>
        </div>
        <p style={{ color: '#1e293b', fontSize: 12, margin: 0 }}>© 2025 Smart Venom K Academy. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
}
