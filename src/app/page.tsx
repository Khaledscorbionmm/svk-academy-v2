'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const COURSES = [
  { icon: '🧸', title: 'أساسيات الكمبيوتر للأطفال', level: 'مبتدئ وممتع', hours: 10, price: 199, students: 1240, rating: 5.0, cat: 'مبتدئين', color: '#ec4899', isKid: true },
  { icon: '🌍', title: 'تحدث الإنجليزية بطلاقة', level: 'للجميع', hours: 25, price: 350, students: 2314, rating: 4.9, cat: 'اللغات', color: '#8b5cf6', isKid: true },
  { icon: '🐍', title: 'بايثون الممتعة', level: 'مبتدئ وممتع', hours: 40, price: 299, students: 847, rating: 4.9, cat: 'البرمجة', color: '#06b6d4', isKid: true },
  { icon: '⚡', title: 'JavaScript الحديث', level: 'متوسط', hours: 30, price: 249, students: 612, rating: 4.8, cat: 'تطوير الويب', color: '#f59e0b', isKid: false },
  { icon: '💻', title: 'خوارزميات وهياكل البيانات', level: 'خبير', hours: 60, price: 449, students: 189, rating: 5.0, cat: 'علوم الحاسب', color: '#22c55e', isKid: false },
];

const FEATURES = [
  { icon: '🧩', title: 'تعلم باللعب والمرح', desc: 'للأطفال والمبتدئين: شروحات مبسطة تشبه الألعاب لكتابة أول أكوادك!' },
  { icon: '🔥', title: 'تحديات المحترفين', desc: 'للمتقدمين: مهام معقدة، خوارزميات، وتحديات الهاكرز الحقيقية.' },
  { icon: '🎯', title: 'شرح بالعربي الفصيح', desc: 'كل درس يُشرح بلغة عربية واضحة 100% مع أمثلة من واقعنا.' },
  { icon: '💻', title: 'محرر أكواد ذكي', desc: 'اكتب الكود وجربه مباشرة داخل الموقع، سواء كنت طفلاً أو محترفاً.' },
  { icon: '🏆', title: 'نظام النقاط والشارات', desc: 'اربح الـ XP، اجمع الشارات، وتنافس في لوحة الأبطال!' },
  { icon: '📱', title: 'متاح على كل الأجهزة', desc: 'تعلم من موبايلك، التابلت، أو اللابتوب في أي وقت وأي مكان.' },
];

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [typed, setTyped] = useState('');
  const words = ['للأطفال 🎈', 'للمبتدئين 🌟', 'للمحترفين 💻', 'للجميع ✨'];
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [floatingIcons, setFloatingIcons] = useState<Array<{ icon: string; size: number; top: string; left: string; delay: string; duration: string }>>([]);
  const [siteStats, setSiteStats] = useState({ totalStudents: 0, totalCourses: 0 });

  useEffect(() => {
    setMounted(true);
    
    const iconsList = ['✨', '🚀', '💻', '🎈', '🧩', '🎮', '🌟'];
    const generatedIcons = Array.from({ length: 25 }).map(() => {
      return {
        icon: iconsList[Math.floor(Math.random() * iconsList.length)],
        size: Math.random() * 20 + 15,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${8 + Math.random() * 10}s`
      };
    });
    setFloatingIcons(generatedIcons);

    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);

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
        setTimeout(() => setDeleting(true), 2000);
      } else if (deleting && charIdx > 0) {
        setTyped(word.slice(0, charIdx - 1));
        setCharIdx(c => c - 1);
      } else {
        setDeleting(false);
        setWordIdx(i => (i + 1) % words.length);
      }
    }, deleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx]);

  return (
    <div style={{ fontFamily: "'Cairo', sans-serif", direction: 'rtl', background: '#0B0B1A', color: '#fff', overflowX: 'hidden' }}>

      {/* ── VIBRANT ANIMATED BACKGROUND ── */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', width: '60vw', height: '60vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 60%)', top: '-10%', right: '-10%', animation: 'floatOrb 15s ease-in-out infinite alternate' }} />
        <div style={{ position: 'absolute', width: '70vw', height: '70vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 60%)', bottom: '-20%', left: '-20%', animation: 'floatOrb 20s ease-in-out infinite alternate-reverse' }} />
        <div style={{ position: 'absolute', width: '50vw', height: '50vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 60%)', top: '40%', left: '30%', animation: 'floatOrb 18s ease-in-out infinite alternate' }} />
        
        {mounted && floatingIcons.map((item, i) => (
          <div key={i} style={{
            position: 'absolute',
            fontSize: item.size,
            opacity: 0.15,
            top: item.top,
            left: item.left,
            animationDelay: item.delay,
            animationDuration: item.duration,
            animationName: 'float',
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite'
          }}>{item.icon}</div>
        ))}
      </div>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrollY > 50 ? 'rgba(11,11,26,0.85)' : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none',
        borderBottom: scrollY > 50 ? '1px solid rgba(255,255,255,0.05)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)', padding: '0 2rem',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 80 }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12, transition: 'transform 0.3s' }} onMouseOver={e=>e.currentTarget.style.transform='scale(1.05)'} onMouseOut={e=>e.currentTarget.style.transform='scale(1)'}>
            <div style={{ width: 48, height: 48, borderRadius: 16, background: 'linear-gradient(135deg, #ec4899, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, boxShadow: '0 0 20px rgba(236,72,153,0.4)' }}>✨</div>
            <div>
              <div style={{ fontWeight: 900, fontSize: 20, background: 'linear-gradient(90deg,#ec4899,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SVK Academy</div>
              <div style={{ fontSize: 11, color: '#94a3b8', marginTop: -2, fontWeight: 700 }}>عالم البرمجة للجميع</div>
            </div>
          </Link>
          
          <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <Link href="/courses" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: 15, fontWeight: 800, transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color='#06b6d4'} onMouseOut={e=>e.currentTarget.style.color='#cbd5e1'}>الكورسات 📚</Link>
            <Link href="/login" style={{ color: '#cbd5e1', textDecoration: 'none', padding: '10px 20px', borderRadius: 100, fontSize: 15, fontWeight: 800, transition: 'background 0.2s' }} onMouseOver={e=>e.currentTarget.style.background='rgba(255,255,255,0.05)'} onMouseOut={e=>e.currentTarget.style.background='transparent'}>دخول 🔑</Link>
            <Link href="/register" style={{
              background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
              color: '#fff', textDecoration: 'none', padding: '12px 28px',
              borderRadius: 100, fontSize: 15, fontWeight: 900,
              boxShadow: '0 10px 25px rgba(236,72,153,0.4)', transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
            onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(236,72,153,0.6)'; }}
            onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(236,72,153,0.4)'; }}>ابدأ اللعب مجاناً 🚀</Link>
          </div>
        </div>
      </nav>

      {/* ── HERO SECTION ── */}
      <section style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '140px 2rem 80px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(236,72,153,0.1)', border: '2px solid rgba(236,72,153,0.3)', borderRadius: 100, padding: '8px 24px', fontSize: 15, fontWeight: 800, marginBottom: 40, animation: 'fadeInDown 0.6s ease' }}>
            <span style={{ fontSize: 20 }}>🎈</span>
            <span style={{ color: '#fbcfe8' }}>المنصة التفاعلية الأولى في الشرق الأوسط</span>
          </div>

          <h1 style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 900, lineHeight: 1.1, margin: '0 0 24px', animation: 'fadeInUp 0.8s ease 0.1s both' }}>
            عالم البرمجة <br/>
            <span style={{ display: 'inline-block', minWidth: 280, background: 'linear-gradient(90deg, #ec4899, #06b6d4, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', position: 'relative' }}>
              {typed}<span style={{ opacity: typed.length % 2 === 0 ? 1 : 0, transition: 'opacity 0.1s' }}>|</span>
            </span>
          </h1>

          <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: '#cbd5e1', maxWidth: 750, margin: '0 auto 48px', lineHeight: 1.8, fontWeight: 600, animation: 'fadeInUp 0.8s ease 0.2s both' }}>
            في أكاديمية SVK، حوّلنا التعلم إلى مغامرة ممتعة! سواء كنت شبلاً صغيراً يكتب أول كود، أو محترفاً يخترق الأنظمة المعقدة، مكانك هنا.
          </p>

          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 64, animation: 'fadeInUp 0.8s ease 0.3s both' }}>
            <Link href="/courses" style={{
              background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
              color: '#fff', textDecoration: 'none', padding: '18px 40px',
              borderRadius: 100, fontSize: 18, fontWeight: 900, cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(6,182,212,0.4)', transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              display: 'inline-block',
            }}
              onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(6,182,212,0.6)'; }}
              onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(6,182,212,0.4)'; }}>
              🎮 تصفح الكورسات
            </Link>
          </div>

          <div style={{ display: 'flex', gap: 40, justifyContent: 'center', flexWrap: 'wrap', animation: 'fadeInUp 0.8s ease 0.4s both', background: 'rgba(255,255,255,0.03)', padding: '30px 40px', borderRadius: 36, border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
            {[
              [siteStats.totalStudents > 0 ? `${siteStats.totalStudents}+` : '...', 'طالب سعيد 😊'],
              [siteStats.totalCourses > 0 ? `${siteStats.totalCourses}+` : '...', 'مغامرة برمجية 🚀'],
              ['100%', 'مرح وتحدي 🎯'],
            ].map(([num, label]) => (
              <div key={label} style={{ textAlign: 'center', padding: '0 20px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, background: 'linear-gradient(90deg,#ec4899,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }}>{num}</div>
                <div style={{ fontSize: 15, color: '#cbd5e1', marginTop: 8, fontWeight: 700 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={{ position: 'relative', zIndex: 1, padding: '120px 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <h2 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, margin: '0 0 16px', color: '#fff' }}>لماذا يحبنا <span style={{ color: '#ec4899' }}>الجميع؟</span> 🥰</h2>
            <p style={{ color: '#94a3b8', fontSize: 20, fontWeight: 600 }}>من الصفر وحتى الاحتراف.. بأسلوب لا يُمل!</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.03)', border: '2px solid rgba(255,255,255,0.05)',
                borderRadius: 36, padding: '40px 32px', cursor: 'default',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)', backdropFilter: 'blur(10px)',
              }}
                onMouseOver={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(236,72,153,0.3)'; e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(236,72,153,0.1)'; }}
                onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ fontSize: 60, marginBottom: 24, filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.2))' }}>{f.icon}</div>
                <h3 style={{ fontSize: 22, fontWeight: 900, margin: '0 0 12px', color: '#f8fafc' }}>{f.title}</h3>
                <p style={{ color: '#94a3b8', fontSize: 16, margin: 0, lineHeight: 1.8, fontWeight: 600 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSE TEASER ── */}
      <section style={{ position: 'relative', zIndex: 1, padding: '80px 2rem 140px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 900, margin: '0 0 16px' }}>نظرة سريعة على <span style={{ color: '#06b6d4' }}>مغامراتنا</span> 🚀</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {COURSES.map((c, i) => (
              <div key={i} style={{
                background: c.isKid ? 'rgba(255,255,255,0.04)' : 'rgba(5,5,10,0.8)', 
                border: `2px solid ${c.isKid ? 'rgba(236,72,153,0.2)' : 'rgba(34,197,94,0.3)'}`,
                borderRadius: c.isKid ? 36 : 16, overflow: 'hidden', transition: 'all 0.4s', cursor: 'pointer',
              }}
                onMouseOver={e => { e.currentTarget.style.transform = c.isKid ? 'translateY(-10px) scale(1.03)' : 'translateY(-5px)'; e.currentTarget.style.boxShadow = `0 20px 40px ${c.color}30`; }}
                onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ background: c.isKid ? `linear-gradient(135deg, ${c.color}30, transparent)` : `linear-gradient(135deg, ${c.color}20, #000)`, padding: '30px', display: 'flex', alignItems: 'center', gap: 20 }}>
                  <div style={{ fontSize: 50, filter: c.isKid ? 'drop-shadow(0 5px 10px rgba(0,0,0,0.3))' : 'none' }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize: 12, color: c.color, fontWeight: 900, marginBottom: 4 }}>{c.level}</div>
                    <h3 style={{ margin: 0, fontSize: 18, fontWeight: 900 }}>{c.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 60 }}>
            <Link href="/courses" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '16px 40px', borderRadius: 100, fontSize: 18, fontWeight: 800, textDecoration: 'none', transition: 'background 0.3s' }} onMouseOver={e=>e.currentTarget.style.background='rgba(255,255,255,0.2)'} onMouseOut={e=>e.currentTarget.style.background='rgba(255,255,255,0.1)'}>
              رؤية كل الكورسات ←
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ position: 'relative', zIndex: 1, borderTop: '1px solid rgba(255,255,255,0.06)', padding: '60px 2rem 40px', textAlign: 'center', background: 'rgba(5,5,10,0.8)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
          <div style={{ width: 44, height: 44, borderRadius: 16, background: 'linear-gradient(135deg, #ec4899, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>✨</div>
          <span style={{ fontWeight: 900, fontSize: 24, background: 'linear-gradient(90deg,#ec4899,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SVK Academy</span>
        </div>
        <p style={{ color: '#cbd5e1', fontSize: 16, margin: '0 0 24px', fontWeight: 700 }}>عالم البرمجة، ببساطة ومرح للجميع!</p>
        <p style={{ color: '#475569', fontSize: 14, margin: 0, fontWeight: 600 }}>© 2025 Smart Venom K Academy. جميع الحقوق محفوظة.</p>
      </footer>

      <style>{`
        * { box-sizing: border-box; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        @keyframes float { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-20px) rotate(10deg); } }
        @keyframes floatOrb { 0% { transform: translate(0, 0) scale(1); } 100% { transform: translate(50px, -50px) scale(1.1); } }
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        ::-webkit-scrollbar { width: 10px; height: 10px; }
        ::-webkit-scrollbar-track { background: #0B0B1A; }
        ::-webkit-scrollbar-thumb { background: rgba(236,72,153,0.5); border-radius: 5px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(236,72,153,0.8); }
        a, button { -webkit-tap-highlight-color: transparent; }
      `}</style>
    </div>
  );
}
