'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

// Particle type
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  shape: 'circle' | 'square' | 'triangle';
}

// Generate random particles
function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    opacity: Math.random() * 0.4 + 0.1,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 5,
    shape: (['circle', 'square', 'triangle'] as const)[Math.floor(Math.random() * 3)],
  }));
}

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    setParticles(generateParticles(30));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('يرجى إدخال البريد الإلكتروني');
      return;
    }
    if (!password.trim()) {
      setError('يرجى إدخال كلمة المرور');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push('/admin/dashboard');
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
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #050508 0%, #0a0718 25%, #080e1f 50%, #0d0a1a 75%, #050508 100%)',
        fontFamily: "'Cairo', 'Inter', system-ui, sans-serif",
        direction: 'rtl',
      }}
    >
      {/* Animated mesh gradient orbs */}
      <div style={{
        position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0,
      }}>
        {/* Orb 1 */}
        <div style={{
          position: 'absolute',
          width: '600px', height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
          top: '-100px', right: '-100px',
          animation: 'float 12s ease-in-out infinite',
          filter: 'blur(40px)',
        }} />
        {/* Orb 2 */}
        <div style={{
          position: 'absolute',
          width: '500px', height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
          bottom: '-100px', left: '-100px',
          animation: 'floatReverse 15s ease-in-out infinite',
          filter: 'blur(40px)',
        }} />
        {/* Orb 3 */}
        <div style={{
          position: 'absolute',
          width: '400px', height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          animation: 'float 18s ease-in-out infinite reverse',
          filter: 'blur(50px)',
        }} />

        {/* Grid lines */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        }} />

        {/* Floating particles */}
        {mounted && particles.map((p) => (
          <div
            key={p.id}
            style={{
              position: 'absolute',
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              borderRadius: p.shape === 'circle' ? '50%' : p.shape === 'square' ? '2px' : '0',
              background: p.id % 3 === 0 ? 'rgba(99,102,241,0.8)' : p.id % 3 === 1 ? 'rgba(139,92,246,0.8)' : 'rgba(6,182,212,0.8)',
              animation: `float ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
              boxShadow: `0 0 ${p.size * 2}px currentColor`,
            }}
          />
        ))}
      </div>

      {/* Main glass card */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '440px',
          margin: '1rem',
          animation: mounted ? 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
          opacity: mounted ? 1 : 0,
        }}
      >
        {/* Gradient border wrapper */}
        <div style={{
          padding: '1px',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, rgba(99,102,241,0.5), rgba(139,92,246,0.3), rgba(6,182,212,0.3), rgba(99,102,241,0.5))',
          boxShadow: '0 25px 50px rgba(0,0,0,0.5), 0 0 80px rgba(99,102,241,0.08)',
        }}>
          <div style={{
            background: 'rgba(8, 8, 20, 0.92)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            borderRadius: '23px',
            padding: '2.5rem',
          }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              {/* Logo circle */}
              <div style={{
                width: '80px', height: '80px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem',
                boxShadow: '0 8px 32px rgba(99,102,241,0.4)',
                position: 'relative',
              }}>
                <span style={{ fontSize: '2rem' }}>🎓</span>
                {/* Pulse ring */}
                <div style={{
                  position: 'absolute', inset: '-4px',
                  borderRadius: '24px',
                  border: '2px solid rgba(99,102,241,0.4)',
                  animation: 'ping 2s cubic-bezier(0,0,0.2,1) infinite',
                }} />
              </div>

              {/* Brand name */}
              <h1 style={{
                fontSize: '1.875rem',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #ffffff, #c4b5fd, #93c5fd)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.375rem',
                letterSpacing: '-0.02em',
              }}>
                SVK Academy
              </h1>
              <p style={{
                fontSize: '0.875rem',
                color: 'rgba(148,163,184,0.8)',
                marginBottom: '1rem',
              }}>
                لوحة تحكم المشرف
              </p>

              {/* Security badges */}
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '4px',
                  padding: '3px 10px',
                  background: 'rgba(16,185,129,0.1)',
                  border: '1px solid rgba(16,185,129,0.25)',
                  borderRadius: '100px',
                  fontSize: '0.7rem',
                  color: '#10b981',
                  fontWeight: '500',
                }}>
                  🔒 اتصال آمن
                </span>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '4px',
                  padding: '3px 10px',
                  background: 'rgba(99,102,241,0.1)',
                  border: '1px solid rgba(99,102,241,0.25)',
                  borderRadius: '100px',
                  fontSize: '0.7rem',
                  color: '#818cf8',
                  fontWeight: '500',
                }}>
                  🛡️ محمي بـ SSL
                </span>
              </div>
            </div>

            {/* Divider */}
            <div style={{
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)',
              marginBottom: '1.75rem',
            }} />

            {/* Welcome text */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h2 style={{
                fontSize: '1.125rem',
                fontWeight: '700',
                color: '#f1f5f9',
                marginBottom: '0.25rem',
              }}>
                مرحباً بعودتك! 👋
              </h2>
              <p style={{ fontSize: '0.825rem', color: 'rgba(148,163,184,0.7)' }}>
                أدخل بيانات تسجيل الدخول للوصول إلى لوحة التحكم
              </p>
            </div>

            {/* Error message */}
            {error && (
              <div style={{
                padding: '0.75rem 1rem',
                background: 'rgba(239,68,68,0.1)',
                border: '1px solid rgba(239,68,68,0.3)',
                borderRadius: '10px',
                color: '#fca5a5',
                fontSize: '0.85rem',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                animation: 'slideIn 0.3s ease forwards',
              }}>
                <span>⚠️</span>
                <span>{error}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Email field */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.825rem',
                  fontWeight: '600',
                  color: 'rgba(203,213,225,0.9)',
                  marginBottom: '0.5rem',
                }}>
                  البريد الإلكتروني
                </label>
                <div style={{ position: 'relative' }}>
                  <span style={{
                    position: 'absolute',
                    right: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '1rem',
                    zIndex: 1,
                    color: focusedField === 'email' ? '#6366f1' : 'rgba(100,116,139,0.8)',
                    transition: 'color 0.2s',
                  }}>
                    ✉️
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="admin@smartvenom.com"
                    autoComplete="email"
                    disabled={loading}
                    style={{
                      width: '100%',
                      padding: '0.875rem 3rem 0.875rem 1rem',
                      background: focusedField === 'email' ? 'rgba(99,102,241,0.07)' : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${focusedField === 'email' ? 'rgba(99,102,241,0.5)' : 'rgba(255,255,255,0.08)'}`,
                      borderRadius: '12px',
                      color: '#f1f5f9',
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      boxShadow: focusedField === 'email' ? '0 0 0 3px rgba(99,102,241,0.12)' : 'none',
                      direction: 'ltr',
                      textAlign: 'left',
                    }}
                  />
                </div>
              </div>

              {/* Password field */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.825rem',
                  fontWeight: '600',
                  color: 'rgba(203,213,225,0.9)',
                  marginBottom: '0.5rem',
                }}>
                  كلمة المرور
                </label>
                <div style={{ position: 'relative' }}>
                  <span style={{
                    position: 'absolute',
                    right: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '1rem',
                    zIndex: 1,
                    color: focusedField === 'password' ? '#6366f1' : 'rgba(100,116,139,0.8)',
                    transition: 'color 0.2s',
                  }}>
                    🔑
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="••••••••••••"
                    autoComplete="current-password"
                    disabled={loading}
                    style={{
                      width: '100%',
                      padding: '0.875rem 3rem 0.875rem 3rem',
                      background: focusedField === 'password' ? 'rgba(99,102,241,0.07)' : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${focusedField === 'password' ? 'rgba(99,102,241,0.5)' : 'rgba(255,255,255,0.08)'}`,
                      borderRadius: '12px',
                      color: '#f1f5f9',
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      boxShadow: focusedField === 'password' ? '0 0 0 3px rgba(99,102,241,0.12)' : 'none',
                      direction: 'ltr',
                      textAlign: 'left',
                    }}
                  />
                  {/* Show/hide password button */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute',
                      left: '1rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      color: 'rgba(100,116,139,0.8)',
                      padding: 0,
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.color = '#6366f1'; }}
                    onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.color = 'rgba(100,116,139,0.8)'; }}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '0.9rem',
                  marginTop: '0.5rem',
                  background: loading
                    ? 'rgba(99,102,241,0.5)'
                    : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  border: 'none',
                  borderRadius: '12px',
                  color: 'white',
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.625rem',
                  transition: 'all 0.3s ease',
                  boxShadow: loading ? 'none' : '0 4px 20px rgba(99,102,241,0.4)',
                  fontFamily: "'Cairo', sans-serif",
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 30px rgba(99,102,241,0.5)';
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(99,102,241,0.4)';
                }}
              >
                {loading ? (
                  <>
                    <div style={{
                      width: '18px', height: '18px',
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderTopColor: 'white',
                      borderRadius: '50%',
                      animation: 'spin 0.7s linear infinite',
                    }} />
                    <span>جاري تسجيل الدخول...</span>
                  </>
                ) : (
                  <>
                    <span>🔐</span>
                    <span>تسجيل الدخول</span>
                  </>
                )}
              </button>
            </form>

            {/* Footer */}
            <div style={{
              marginTop: '1.75rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'rgba(100,116,139,0.7)',
                fontSize: '0.75rem',
              }}>
                <div style={{
                  width: '6px', height: '6px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 6px rgba(16,185,129,0.6)',
                  animation: 'ping 2s ease infinite',
                }} />
                <span>نظام آمن ومحمي | © 2025 SVK Academy</span>
              </div>
              <p style={{
                fontSize: '0.7rem',
                color: 'rgba(71,85,105,0.6)',
                textAlign: 'center',
              }}>
                SmartVenom Technologies • جميع الحقوق محفوظة
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Global keyframe styles injected */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-25px) rotate(5deg); }
          66% { transform: translateY(-10px) rotate(-3deg); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(20px) rotate(-5deg); }
          66% { transform: translateY(8px) rotate(3deg); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes ping {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
        input:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 100px rgba(8,8,20,0.95) inset !important;
          -webkit-text-fill-color: #f1f5f9 !important;
        }
      `}</style>
    </div>
  );
}
