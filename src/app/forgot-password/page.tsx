'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email.trim() || !email.includes('@')) { 
      setError('يرجى إدخال بريد إلكتروني صالح'); 
      return; 
    }
    
    setLoading(true);
    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      
      if (res.ok) {
        setSuccess(true);
        setTimeout(() => {
          router.push(`/reset-password?email=${encodeURIComponent(email)}`);
        }, 3000);
      } else {
        setError(data.error || 'حدث خطأ. حاول مرة أخرى.');
      }
    } catch {
      setError('حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex',
      background: '#020205', fontFamily: "'Cairo', sans-serif", direction: 'rtl', color: '#e2e8f0', overflow: 'hidden'
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet" />

      <div className="form-side" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', position: 'relative' }}>
        <div style={{ width: '100%', maxWidth: '440px', position: 'relative', zIndex: 10 }}>
          
          <Link href="/login" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', textDecoration: 'none', marginBottom: '2rem', fontSize: '0.9rem', fontWeight: 600 }}>
            <span>←</span> الرجوع لتسجيل الدخول
          </Link>

          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#fff', marginBottom: '0.5rem' }}>نسيت كلمة المرور؟ 🔒</h2>
            <p style={{ color: '#94a3b8', fontSize: '1rem' }}>لا تقلق! أدخل بريدك الإلكتروني المسجل وسنرسل لك رمز تحقق آمن.</p>
          </div>

          {error && (
            <div style={{ padding: '1rem', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '12px', color: '#fca5a5', fontSize: '0.9rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span>⚠️</span><span>{error}</span>
            </div>
          )}

          {success && (
            <div style={{ padding: '1rem', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '12px', color: '#86efac', fontSize: '0.9rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span>✅</span><span>تم إرسال كود التحقق بنجاح! سيتم تحويلك...</span>
            </div>
          )}

          {!success && (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.5rem' }}>البريد الإلكتروني</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', fontSize: '1.1rem', color: focused === 'email' ? '#06b6d4' : '#64748b' }}>📧</span>
                  <input
                    type="email" value={email} onChange={e => setEmail(e.target.value)}
                    onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                    placeholder="example@gmail.com" disabled={loading}
                    style={{ width: '100%', padding: '1.2rem 3rem 1.2rem 1.2rem', background: focused === 'email' ? 'rgba(6,182,212,0.08)' : 'rgba(255,255,255,0.03)', border: `1px solid ${focused === 'email' ? '#06b6d4' : 'rgba(255,255,255,0.1)'}`, borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none', transition: 'all 0.3s', fontFamily: "'Cairo', sans-serif", direction: 'ltr', textAlign: 'left' }}
                  />
                </div>
              </div>

              <button type="submit" disabled={loading} style={{
                width: '100%', padding: '1.2rem', marginTop: '0.5rem',
                background: loading ? 'rgba(6,182,212,0.4)' : 'linear-gradient(135deg, #06b6d4, #6366f1)',
                border: 'none', borderRadius: '12px', color: '#fff', fontSize: '1.1rem', fontWeight: 800,
                cursor: loading ? 'not-allowed' : 'pointer', transition: 'all 0.3s',
                boxShadow: loading ? 'none' : '0 10px 25px rgba(6,182,212,0.3)', fontFamily: "'Cairo', sans-serif"
              }}>
                {loading ? 'جاري الإرسال...' : 'إرسال كود التحقق 🚀'}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Left Side: Animated Brand Area */}
      <div className="brand-side" style={{
        flex: 1, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        background: 'linear-gradient(135deg, #050508 0%, #0a0718 100%)', borderRight: '1px solid rgba(6,182,212,0.2)'
      }}>
        <div style={{ position: 'absolute', width: '800px', height: '800px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 60%)', filter: 'blur(50px)', animation: 'pulse 8s infinite alternate' }} />
        <div style={{ position: 'absolute', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 60%)', filter: 'blur(50px)', animation: 'pulse 10s infinite alternate-reverse' }} />
        
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '2rem' }}>
          <div style={{ width: '100px', height: '100px', borderRadius: '24px', background: 'linear-gradient(135deg, #06b6d4, #6366f1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', boxShadow: '0 0 40px rgba(6,182,212,0.4)', fontSize: '3rem' }}>📩</div>
          <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem', background: 'linear-gradient(135deg, #fff, #a5f3fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>استعادة الوصول</h1>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '400px', margin: '0 auto', lineHeight: 1.6 }}>خطوة واحدة تفصلك عن استعادة حسابك واستكمال رحلة التعلم معنا.</p>
        </div>
      </div>

      <style>{`
        * { box-sizing: border-box; }
        @keyframes pulse { 0%, 100% { opacity: 0.5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.1); } }
        @media (max-width: 900px) {
          .brand-side { display: none !important; }
        }
      `}</style>
    </div>
  );
}
