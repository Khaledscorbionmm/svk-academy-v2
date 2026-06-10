'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', age: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [error, setError] = useState('');
  const [focused, setFocused] = useState<string | null>(null);

  // OTP Verification States
  const [step, setStep] = useState(1); // 1 = Details, 2 = Verify OTP
  const [otpCode, setOtpCode] = useState('');
  const [countdown, setCountdown] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  // Countdown timer for resending OTP
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerActive && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setTimerActive(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive, countdown]);

  const handleSendOtp = useCallback(async (e: React.MouseEvent | React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!formData.name.trim() || !formData.password.trim() || !formData.age.trim() || !formData.email.trim()) {
      setError('يرجى إدخال كافة الحقول المطلوبة (الاسم، العمر، البريد الإلكتروني، وكلمة المرور)');
      return;
    }

    setSendingOtp(true);
    try {
      const res = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email }),
      });
      const data = await res.json();
      
      if (res.ok) {
        setStep(2);
        setCountdown(60);
        setTimerActive(true);
      } else {
        setError(data.error || 'حدث خطأ أثناء إرسال كود التحقق');
      }
    } catch {
      setError('حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى');
    } finally {
      setSendingOtp(false);
    }
  }, [formData.name, formData.password, formData.age, formData.email]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (step === 1) {
      handleSendOtp(e);
      return;
    }

    if (!otpCode.trim() || otpCode.length !== 6) {
      setError('يرجى إدخال كود التحقق المكون من 6 أرقام');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, code: otpCode }),
      });
      const data = await res.json();
      
      if (res.ok) {
        router.push('/login');
        router.refresh();
      } else {
        setError(data.error || 'حدث خطأ أثناء التسجيل');
      }
    } catch {
      setError('حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى');
    } finally {
      setLoading(false);
    }
  }, [formData, otpCode, step, router, handleSendOtp]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex',
      background: '#020205', fontFamily: "'Cairo', sans-serif", direction: 'rtl', color: '#e2e8f0', overflow: 'hidden'
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet" />

      {/* Left Side: Animated Brand Area */}
      <div className="brand-side" style={{
        flex: 1, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        background: 'linear-gradient(135deg, #050508 0%, #0a0718 100%)', borderLeft: '1px solid rgba(99,102,241,0.2)'
      }}>
        <div style={{ position: 'absolute', width: '800px', height: '800px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 60%)', filter: 'blur(50px)', animation: 'pulse 8s infinite alternate' }} />
        <div style={{ position: 'absolute', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 60%)', filter: 'blur(50px)', animation: 'pulse 10s infinite alternate-reverse' }} />
        
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '2rem' }}>
          <div style={{ width: '100px', height: '100px', borderRadius: '24px', background: 'linear-gradient(135deg, #a855f7, #6366f1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', boxShadow: '0 0 40px rgba(168,85,247,0.4)', fontSize: '3rem' }}>🎓</div>
          <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem', background: 'linear-gradient(135deg, #fff, #c4b5fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SVK Academy</h1>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '400px', margin: '0 auto', lineHeight: 1.6 }}>أكاديمية البرمجة الأولى التي تأخذ بيدك من الصفر حتى الاحتراف الكامل.</p>
        </div>
      </div>

      {/* Right Side: Form Area */}
      <div className="form-side" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', position: 'relative' }}>
        <div style={{ width: '100%', maxWidth: '480px', position: 'relative', zIndex: 10 }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>إنشاء حساب جديد ✨</h2>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>ابدأ رحلتك في عالم البرمجة اليوم!</p>
          </div>

          {error && (
            <div style={{ padding: '1rem', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '12px', color: '#fca5a5', fontSize: '0.9rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span>⚠️</span><span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* Name */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.5rem' }}>الاسم الكامل</label>
              <input name="name" type="text" value={formData.name} onChange={handleChange} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} placeholder="الاسم الكامل" disabled={step === 2}
                style={{ width: '100%', padding: '1rem', background: focused === 'name' ? 'rgba(99,102,241,0.08)' : 'rgba(255,255,255,0.03)', border: `1px solid ${focused === 'name' ? '#6366f1' : 'rgba(255,255,255,0.1)'}`, borderRadius: '12px', color: '#fff', fontSize: '0.95rem', outline: 'none', transition: 'all 0.3s', fontFamily: "'Cairo', sans-serif", opacity: step === 2 ? 0.6 : 1 }} />
            </div>

            {/* Split row for Phone & Age */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.5rem' }}>رقم الهاتف (اختياري)</label>
                <input name="phone" type="tel" value={formData.phone} onChange={handleChange} onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)} placeholder="01xxxxxxxxx" disabled={step === 2}
                  style={{ width: '100%', padding: '1rem', background: focused === 'phone' ? 'rgba(99,102,241,0.08)' : 'rgba(255,255,255,0.03)', border: `1px solid ${focused === 'phone' ? '#6366f1' : 'rgba(255,255,255,0.1)'}`, borderRadius: '12px', color: '#fff', fontSize: '0.95rem', outline: 'none', transition: 'all 0.3s', fontFamily: "'Cairo', sans-serif", direction: 'ltr', opacity: step === 2 ? 0.6 : 1 }} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.5rem' }}>السن</label>
                <input name="age" type="number" value={formData.age} onChange={handleChange} onFocus={() => setFocused('age')} onBlur={() => setFocused(null)} placeholder="العمر" disabled={step === 2}
                  style={{ width: '100%', padding: '1rem', background: focused === 'age' ? 'rgba(99,102,241,0.08)' : 'rgba(255,255,255,0.03)', border: `1px solid ${focused === 'age' ? '#6366f1' : 'rgba(255,255,255,0.1)'}`, borderRadius: '12px', color: '#fff', fontSize: '0.95rem', outline: 'none', transition: 'all 0.3s', fontFamily: "'Cairo', sans-serif", opacity: step === 2 ? 0.6 : 1 }} />
              </div>
            </div>

            {/* Email */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.5rem' }}>البريد الإلكتروني</label>
              <input name="email" type="email" value={formData.email} onChange={handleChange} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} placeholder="your@email.com" required disabled={step === 2}
                style={{ width: '100%', padding: '1rem', background: focused === 'email' ? 'rgba(99,102,241,0.08)' : 'rgba(255,255,255,0.03)', border: `1px solid ${focused === 'email' ? '#6366f1' : 'rgba(255,255,255,0.1)'}`, borderRadius: '12px', color: '#fff', fontSize: '0.95rem', outline: 'none', transition: 'all 0.3s', fontFamily: "'Cairo', sans-serif", direction: 'ltr', opacity: step === 2 ? 0.6 : 1 }} />
            </div>

            {/* Password */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.5rem' }}>كلمة المرور</label>
              <input name="password" type="password" value={formData.password} onChange={handleChange} onFocus={() => setFocused('password')} onBlur={() => setFocused(null)} placeholder="••••••••" disabled={step === 2}
                style={{ width: '100%', padding: '1rem', background: focused === 'password' ? 'rgba(99,102,241,0.08)' : 'rgba(255,255,255,0.03)', border: `1px solid ${focused === 'password' ? '#6366f1' : 'rgba(255,255,255,0.1)'}`, borderRadius: '12px', color: '#fff', fontSize: '0.95rem', outline: 'none', transition: 'all 0.3s', fontFamily: "'Cairo', sans-serif", direction: 'ltr', opacity: step === 2 ? 0.6 : 1 }} />
            </div>

            {/* OTP Verification Code Section */}
            {step === 2 && (
              <div style={{ background: 'rgba(168,85,247,0.05)', border: '1px solid rgba(168,85,247,0.25)', borderRadius: '16px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 800, color: '#c4b5fd', textAlign: 'center' }}>
                  كود التحقق (تم إرساله لبريدك الإلكتروني)
                </label>
                <input
                  name="otp"
                  type="text"
                  maxLength={6}
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ''))}
                  placeholder="------"
                  style={{
                    width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)',
                    border: '1px solid #a855f7', borderRadius: '12px', color: '#fff',
                    fontSize: '1.8rem', fontWeight: 'bold', letterSpacing: '8px', textAlign: 'center',
                    outline: 'none', transition: 'all 0.3s', fontFamily: 'monospace'
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginTop: '0.25rem' }}>
                  {countdown > 0 ? (
                    <span style={{ color: '#94a3b8' }}>إعادة إرسال الكود بعد {countdown} ثانية</span>
                  ) : (
                    <button type="button" onClick={handleSendOtp} style={{ background: 'none', border: 'none', color: '#a855f7', fontWeight: 700, cursor: 'pointer', fontFamily: "'Cairo', sans-serif" }}>
                      إعادة إرسال الكود 🔄
                    </button>
                  )}
                  <button type="button" onClick={() => setStep(1)} style={{ background: 'none', border: 'none', color: '#fca5a5', fontWeight: 700, cursor: 'pointer', fontFamily: "'Cairo', sans-serif" }}>
                    تعديل البيانات ✏️
                  </button>
                </div>
              </div>
            )}

            <button type="submit" disabled={loading || sendingOtp} style={{
              width: '100%', padding: '1.2rem', marginTop: '1rem',
              background: (loading || sendingOtp) ? 'rgba(168,85,247,0.4)' : 'linear-gradient(135deg, #a855f7, #6366f1)',
              border: 'none', borderRadius: '12px', color: '#fff', fontSize: '1.1rem', fontWeight: 800,
              cursor: (loading || sendingOtp) ? 'not-allowed' : 'pointer', transition: 'all 0.3s',
              boxShadow: (loading || sendingOtp) ? 'none' : '0 10px 25px rgba(168,85,247,0.3)', fontFamily: "'Cairo', sans-serif"
            }}>
              {sendingOtp ? 'جاري إرسال كود التحقق...' : (loading ? 'جاري التحقق وإنشاء الحساب...' : (step === 1 ? 'أرسل كود التحقق ✉️' : 'تأكيد وإنشاء الحساب 🚀'))}
            </button>
          </form>

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
              لديك حساب بالفعل؟{' '}
              <Link href="/login" style={{ color: '#a855f7', fontWeight: 800, textDecoration: 'none' }}>تسجيل الدخول</Link>
            </p>
          </div>
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
