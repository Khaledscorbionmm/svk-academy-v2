'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function StudentLoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    // Check if already logged in
    fetch('/api/auth/me', { cache: 'no-store' })
      .then(res => {
        if (res.ok) return res.json();
        throw new Error('Not logged in');
      })
      .then(data => {
        if (data.user) {
          if (data.user.role === 'admin') {
            router.push('/admin/dashboard');
          } else {
            router.push('/dashboard');
          }
        }
      })
      .catch(() => {
        // Not logged in, stay on login page
      });
  }, [router]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!identifier.trim()) { setError('???? ????? ?????? ?????????? ?? ??? ??????'); return; }
    if (!password.trim()) { setError('???? ????? ???? ??????'); return; }
    
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: identifier.trim(), password })
      });
      
      const data = await res.json();

      if (res.ok && data.success) {
        if (data.user?.role === 'admin') {
           router.push('/admin/dashboard');
        } else {
           router.push('/dashboard');
        }
      } else {
        setError(data.error || '???????? ??? ?????');
      }
    } catch {
      setError('??? ??? ?? ???????. ???? ???????? ??? ????');
    } finally {
      setLoading(false);
    }
  }, [identifier, password, router]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8" dir="rtl" style={{
      background: 'radial-gradient(circle at 50% 50%, #0a0a0a 0%, #000000 100%)',
    }}>
      <div className="w-full max-w-md relative">
        <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="bg-[#111]/80 backdrop-blur-2xl p-8 sm:p-10 rounded-3xl border border-white/5 shadow-2xl relative z-10">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-3 tracking-tight">?????? ??????</h1>
            <p className="text-gray-400 text-sm font-medium">??? ????? ??????? ???? ??????</p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-start gap-3">
              <svg className="w-5 h-5 text-red-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-red-200 font-medium leading-relaxed">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 relative">
              <label className={`block text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${focused === 'identifier' ? 'text-blue-400' : 'text-gray-400'}`}>?????? ?? ??????</label>
              <div className="relative group">
                <input
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  onFocus={() => setFocused('identifier')}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300 text-left font-sans"
                  placeholder="name@example.com"
                  dir="ltr"
                />
              </div>
            </div>

            <div className="space-y-2 relative">
              <div className="flex items-center justify-between">
                <label className={`block text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${focused === 'password' ? 'text-blue-400' : 'text-gray-400'}`}>???? ??????</label>
                <Link href="/forgot-password" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">???? ???? ???????</Link>
              </div>
              <div className="relative group">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocused('password')}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300 text-left font-sans"
                  placeholder="••••••••"
                  dir="ltr"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black font-bold text-lg py-4 rounded-2xl hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-4 shadow-xl shadow-white/5 active:scale-[0.98]"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                  <span>???? ??????...</span>
                </div>
              ) : '????? ??????'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              ??? ???? ?????{' '}
              <Link href="/register" className="text-white hover:text-blue-400 font-medium transition-colors">
                ???? ????? ????
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
