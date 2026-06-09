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
    size: Math.random() * 3 + 2,
    opacity: Math.random() * 0.3 + 0.1,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 5,
  }));
}

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [step, setStep] = useState<'form' | 'success'>('form');

  useEffect(() => {
    setMounted(true);
    setParticles(generateParticles(20));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!name.trim()) { setError('يرجى إدخال الاسم الكامل'); return; }
    if (!email.trim()) { setError('يرجى إدخال البريد الإلكتروني'); return; }
    if (!password.trim()) { setError('يرجى إدخال كلمة المرور'); return; }
    if (password.length < 6) { setError('كلمة المرور يجب أن تكون 6 أحرف على الأقل'); return; }
    if (password !== confirmPassword) { setError('كلمتا المرور غير متطابقتان'); return; }

    setLoading(true);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, phone }),
      });
      const data = await res.json();
      if (res.ok || res.status === 201) {
        setStep('success');
        setTimeout(() => { router.push('/courses'); }, 2000);
      } else {
        setError(data.error || 'حدث خطأ في إنشاء الحساب');
      }
    } catch {
      setError('حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى');
    } finally {
      setLoading(false);
    }
  }, [name, email, password, confirmPassword, phone, router]);

  const inputStyle = (field: string) => ({
    width: '100%',
    padding: '0.875rem 3rem 0.875rem 1rem',
    background: focused === field ? 'rgba(168,85,247,0.07)' : 'rgba(255,255,255,0.04)',
    border: `1px solid ${focused === field ? 'rgba(168,85,247,0.5)' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: '12px',
    color: '#f1f5f9',
    fontSize: '0.9rem',
    outline: 'none',
    direction: 'ltr' as const,
    textAlign: 'left' as const,
    fontFamily: "'Cairo', sans-serif",
    boxSizing: 'border-box' as const,
  });

  if (step === 'success') {
    return (
      <div style={{ minHeight: '100vh', background: '#060612', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <div style={{ fontSize: 80, marginBottom: 20 }}>🎉</div>
          <h2 style={{ fontSize: 28, fontWeight: 900, color: '#fff', marginBottom: 8 }}>تم إنشاء حسابك!</h2>
          <p style={{ color: '#94a3b8', fontSize: 16, marginBottom: 20 }}>أهلاً بك في SVK Academy! يتم تحويلك الآن...</p>
          <div style={{ width: 40, height: 40, border: '3px solid rgba(168,85,247,0.3)', borderTopColor: '#a855f7', borderRadius: '50%', animation: 'spin 0.7s linear infinite', margin: '0 auto' }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(135deg, #050508 0%, #0c0718 30%, #080e1f 60%, #0d0a1a 100%)',
      fontFamily: "'Cairo', 'Inter', system-ui, sans-serif", direction: 'rtl',
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet" />

      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)', top: '-150px', right: '-100px', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)', bottom: '-100px', left: '-100px', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(168,85,247,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        {mounted && particles.map(p => (
          <div key={p.id} style={{ position: 'absolute', left: `${p.x}%`, top: `${p.y}%`, width: `${p.size}px`, height: `${p.size}px`, opacity: p.opacity, borderRadius: '50%', background: p.id % 2 === 0 ? 'rgba(168,85,247,0.8)' : 'rgba(99,102,241,0.8)', animation: `floatP ${p.duration}s ease-in-out infinite`, animationDelay: `${p.delay}s` }} />
        ))}
      </div>

      {/* Card */}
      <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '480px', margin: '1rem', padding: '20px 0' }}>
        <div style={{ padding: '1px', borderRadius: '24px', background: 'linear-gradient(135deg, rgba(168,85,247,0.4), rgba(99,102,241,0.3), rgba(6,182,212,0.2))', boxShadow: '0 25px 50px rgba(0,0,0,0.5)' }}>
          <div style={{ background: 'rgba(8, 8, 20, 0.93)', backdropFilter: 'blur(30px)', borderRadius: '23px', padding: '2.5rem' }}>

            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
              <div style={{ width: '72px', height: '72px', borderRadius: '18px', background: 'linear-gradient(135deg, #a855f7, #6366f1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', boxShadow: '0 8px 32px rgba(168,85,247,0.35)' }}>
                <span style={{ fontSize: '1.8rem' }}>✨</span>
              </div>
              <h1 style={{ fontSize: '1.6rem', fontWeight: '800', background: 'linear-gradient(135deg, #ffffff, #d8b4fe, #93c5fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.25rem' }}>
                إنشاء حساب جديد
              </h1>
              <p style={{ fontSize: '0.85rem', color: 'rgba(148,163,184,0.8)' }}>انضم لآلاف الطلاب في SVK Academy</p>
            </div>

            <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent)', marginBottom: '1.5rem' }} />

            {error && (
              <div style={{ padding: '0.75rem 1rem', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '10px', color: '#fca5a5', fontSize: '0.85rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>⚠️</span><span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {/* Name */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'rgba(203,213,225,0.9)', marginBottom: '0.4rem' }}>الاسم الكامل *</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', fontSize: '0.95rem', color: focused === 'name' ? '#a855f7' : 'rgba(100,116,139,0.7)' }}>👤</span>
                  <input type="text" value={name} onChange={e => setName(e.target.value)} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} placeholder="محمد أحمد" disabled={loading} style={{ ...inputStyle('name'), direction: 'rtl', textAlign: 'right' }} />
                </div>
              </div>

              {/* Email */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'rgba(203,213,225,0.9)', marginBottom: '0.4rem' }}>البريد الإلكتروني *</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', fontSize: '0.95rem', color: focused === 'email' ? '#a855f7' : 'rgba(100,116,139,0.7)' }}>✉️</span>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} placeholder="your@email.com" disabled={loading} style={inputStyle('email')} />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'rgba(203,213,225,0.9)', marginBottom: '0.4rem' }}>رقم الهاتف <span style={{ color: '#64748b', fontWeight: 400 }}>(اختياري)</span></label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', fontSize: '0.95rem', color: focused === 'phone' ? '#a855f7' : 'rgba(100,116,139,0.7)' }}>📱</span>
                  <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)} placeholder="+20 1xx xxx xxxx" disabled={loading} style={inputStyle('phone')} />
                </div>
              </div>

              {/* Password */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'rgba(203,213,225,0.9)', marginBottom: '0.4rem' }}>كلمة المرور *</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', fontSize: '0.95rem', color: focused === 'password' ? '#a855f7' : 'rgba(100,116,139,0.7)' }}>🔑</span>
                  <input type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} onFocus={() => setFocused('password')} onBlur={() => setFocused(null)} placeholder="6 أحرف على الأقل" disabled={loading} style={{ ...inputStyle('password'), padding: '0.875rem 3rem 0.875rem 3rem' }} />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.95rem', color: 'rgba(100,116,139,0.7)', padding: 0 }}>
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'rgba(203,213,225,0.9)', marginBottom: '0.4rem' }}>تأكيد كلمة المرور *</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', fontSize: '0.95rem', color: focused === 'confirm' ? '#a855f7' : 'rgba(100,116,139,0.7)' }}>🔐</span>
                  <input type={showPassword ? 'text' : 'password'} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} onFocus={() => setFocused('confirm')} onBlur={() => setFocused(null)} placeholder="أعد كتابة كلمة المرور" disabled={loading} style={inputStyle('confirm')} />
                </div>
              </div>

              {/* Password strength indicator */}
              {password.length > 0 && (
                <div>
                  <div style={{ height: 4, background: 'rgba(255,255,255,0.05)', borderRadius: 2, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${Math.min(100, (password.length / 12) * 100)}%`, background: password.length < 6 ? '#ef4444' : password.length < 10 ? '#fbbf24' : '#22c55e', borderRadius: 2, transition: 'all 0.3s' }} />
                  </div>
                  <div style={{ fontSize: 11, color: password.length < 6 ? '#ef4444' : password.length < 10 ? '#fbbf24' : '#22c55e', marginTop: 4 }}>
                    {password.length < 6 ? '⚠️ ضعيفة جداً' : password.length < 10 ? '👍 مقبولة' : '✅ قوية'}
                  </div>
                </div>
              )}

              <button type="submit" disabled={loading} style={{ width: '100%', padding: '0.95rem', marginTop: '0.5rem', background: loading ? 'rgba(168,85,247,0.4)' : 'linear-gradient(135deg, #a855f7, #6366f1)', border: 'none', borderRadius: '12px', color: 'white', fontSize: '0.95rem', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.625rem', boxShadow: loading ? 'none' : '0 4px 20px rgba(168,85,247,0.35)', fontFamily: "'Cairo', sans-serif" }}>
                {loading ? (
                  <><div style={{ width: '18px', height: '18px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} /><span>جاري الإنشاء...</span></>
                ) : (
                  <><span>✨</span><span>إنشاء الحساب مجاناً</span></>
                )}
              </button>

              <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'rgba(100,116,139,0.6)', margin: '0.5rem 0 0' }}>
                بالتسجيل توافق على{' '}
                <span style={{ color: '#a855f7', cursor: 'pointer' }}>شروط الخدمة</span>
                {' '}و{' '}
                <span style={{ color: '#a855f7', cursor: 'pointer' }}>سياسة الخصوصية</span>
              </p>
            </form>

            <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
              <p style={{ color: 'rgba(100,116,139,0.8)', fontSize: '0.875rem', margin: 0 }}>
                لديك حساب بالفعل؟{' '}
                <Link href="/login" style={{ color: '#a855f7', fontWeight: '700', textDecoration: 'none' }}>سجّل دخولك</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        * { box-sizing: border-box; }
        @keyframes floatP { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-18px); } }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
