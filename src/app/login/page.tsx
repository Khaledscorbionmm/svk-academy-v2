'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    opacity: Math.random() * 0.35 + 0.1,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 5,
  }));
}

export default function StudentLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    setParticles(generateParticles(25));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email.trim()) { setError('يرجى إدخال البريد الإلكتروني'); return; }
    if (!password.trim()) { setError('يرجى إدخال كلمة المرور'); return; }
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        router.push('/dashboard');
        router.refresh();
      } else {
        setError(data.error || 'البريد الإلكتروني أو كلمة المرور غير صحيحة');
      }
    } catch {
      setError('حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى');
    } finally {
      setLoading(false);
    }
  }, [email, password, router]);

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(135deg, #050508 0%, #0a0718 25%, #080e1f 50%, #0d0a1a 75%, #050508 100%)',
      fontFamily: "'Cairo', 'Inter', system-ui, sans-serif", direction: 'rtl',
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet" />

      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)', top: '-100px', right: '-100px', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)', bottom: '-100px', left: '-100px', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        {mounted && particles.map(p => (
          <div key={p.id} style={{
            position: 'absolute', left: `${p.x}%`, top: `${p.y}%`,
            width: `${p.size}px`, height: `${p.size}px`, opacity: p.opacity,
            borderRadius: '50%',
            background: p.id % 2 === 0 ? 'rgba(6,182,212,0.8)' : 'rgba(99,102,241,0.8)',
            animation: `floatP ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }} />
        ))}
      </div>

      {/* Card */}
      <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '440px', margin: '1rem' }}>
        <div style={{ padding: '1px', borderRadius: '24px', background: 'linear-gradient(135deg, rgba(6,182,212,0.4), rgba(99,102,241,0.3), rgba(168,85,247,0.3))', boxShadow: '0 25px 50px rgba(0,0,0,0.5), 0 0 80px rgba(6,182,212,0.06)' }}>
          <div style={{ background: 'rgba(8, 8, 20, 0.93)', backdropFilter: 'blur(30px)', borderRadius: '23px', padding: '2.5rem' }}>
            
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '20px', background: 'linear-gradient(135deg, #06b6d4, #6366f1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', boxShadow: '0 8px 32px rgba(6,182,212,0.35)' }}>
                <span style={{ fontSize: '2rem' }}>🎓</span>
              </div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: '800', background: 'linear-gradient(135deg, #ffffff, #a5f3fc, #c4b5fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.375rem' }}>
                SVK Academy
              </h1>
              <p style={{ fontSize: '0.875rem', color: 'rgba(148,163,184,0.8)', marginBottom: '1rem' }}>
                تسجيل دخول الطلاب
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                <span style={{ padding: '3px 12px', background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.25)', borderRadius: '100px', fontSize: '0.7rem', color: '#06b6d4', fontWeight: '500' }}>
                  🎓 منصة التعلم
                </span>
                <span style={{ padding: '3px 12px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', borderRadius: '100px', fontSize: '0.7rem', color: '#818cf8', fontWeight: '500' }}>
                  ⚡ تعلّم بسرعة
                </span>
              </div>
            </div>

            <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent)', marginBottom: '1.75rem' }} />

            <div style={{ marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#f1f5f9', marginBottom: '0.25rem' }}>أهلاً بك! 👋</h2>
              <p style={{ fontSize: '0.825rem', color: 'rgba(148,163,184,0.7)' }}>أدخل بياناتك للوصول لكورساتك</p>
            </div>

            {error && (
              <div style={{ padding: '0.75rem 1rem', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '10px', color: '#fca5a5', fontSize: '0.85rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>⚠️</span><span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Email */}
              <div>
                <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: '600', color: 'rgba(203,213,225,0.9)', marginBottom: '0.5rem' }}>البريد الإلكتروني</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', fontSize: '1rem', color: focused === 'email' ? '#06b6d4' : 'rgba(100,116,139,0.8)' }}>✉️</span>
                  <input
                    type="email" value={email} onChange={e => setEmail(e.target.value)}
                    onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                    placeholder="your@email.com" autoComplete="email" disabled={loading}
                    style={{ width: '100%', padding: '0.875rem 3rem 0.875rem 1rem', background: focused === 'email' ? 'rgba(6,182,212,0.07)' : 'rgba(255,255,255,0.04)', border: `1px solid ${focused === 'email' ? 'rgba(6,182,212,0.5)' : 'rgba(255,255,255,0.08)'}`, borderRadius: '12px', color: '#f1f5f9', fontSize: '0.9rem', outline: 'none', direction: 'ltr', textAlign: 'left', fontFamily: "'Cairo', sans-serif" }}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: '600', color: 'rgba(203,213,225,0.9)', marginBottom: '0.5rem' }}>كلمة المرور</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', fontSize: '1rem', color: focused === 'password' ? '#06b6d4' : 'rgba(100,116,139,0.8)' }}>🔑</span>
                  <input
                    type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)}
                    onFocus={() => setFocused('password')} onBlur={() => setFocused(null)}
                    placeholder="••••••••••••" autoComplete="current-password" disabled={loading}
                    style={{ width: '100%', padding: '0.875rem 3rem 0.875rem 3rem', background: focused === 'password' ? 'rgba(6,182,212,0.07)' : 'rgba(255,255,255,0.04)', border: `1px solid ${focused === 'password' ? 'rgba(6,182,212,0.5)' : 'rgba(255,255,255,0.08)'}`, borderRadius: '12px', color: '#f1f5f9', fontSize: '0.9rem', outline: 'none', direction: 'ltr', textAlign: 'left', fontFamily: "'Cairo', sans-serif" }}
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', color: 'rgba(100,116,139,0.8)', padding: 0 }}>
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>

              <button type="submit" disabled={loading} style={{ width: '100%', padding: '0.9rem', marginTop: '0.5rem', background: loading ? 'rgba(6,182,212,0.4)' : 'linear-gradient(135deg, #06b6d4, #6366f1)', border: 'none', borderRadius: '12px', color: 'white', fontSize: '0.95rem', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.625rem', boxShadow: loading ? 'none' : '0 4px 20px rgba(6,182,212,0.35)', fontFamily: "'Cairo', sans-serif" }}>
                {loading ? (
                  <><div style={{ width: '18px', height: '18px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} /><span>جاري الدخول...</span></>
                ) : (
                  <><span>🚀</span><span>دخول</span></>
                )}
              </button>
            </form>

            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <p style={{ color: 'rgba(100,116,139,0.8)', fontSize: '0.875rem', margin: 0 }}>
                ليس لديك حساب؟{' '}
                <Link href="/register" style={{ color: '#06b6d4', fontWeight: '700', textDecoration: 'none' }}>سجّل الآن مجاناً</Link>
              </p>
              <div style={{ marginTop: '0.75rem' }}>
                <Link href="/admin/login" style={{ color: 'rgba(71,85,105,0.6)', fontSize: '0.75rem', textDecoration: 'none' }}>
                  دخول المشرفين ←
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        * { box-sizing: border-box; }
        @keyframes floatP { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
