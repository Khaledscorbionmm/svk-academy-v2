'use client';

import { useState, useEffect } from 'react';

const CURRENT_VERSION = '1.4.0';

export default function VersionNotifier() {
  const [newVersion, setNewVersion] = useState<string | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // 1. Set current version on mount if not present
    try {
      const savedVersion = localStorage.getItem('svk_app_version');
      if (!savedVersion) {
        localStorage.setItem('svk_app_version', CURRENT_VERSION);
      }
    } catch (e) {
      console.error(e);
    }

    // 2. Poll the healthz API for version updates
    const checkVersion = async () => {
      try {
        const res = await fetch('/api/healthz');
        if (res.ok) {
          const data = await res.json();
          const serverVersion = data?.services?.api?.version;
          
          if (serverVersion && serverVersion !== CURRENT_VERSION) {
            setNewVersion(serverVersion);
          }
        }
      } catch (e) {
        console.error('Failed to query app version status:', e);
      }
    };

    // Check on mount and then every 3 minutes
    checkVersion();
    const interval = setInterval(checkVersion, 180000);

    // 3. Catch ChunkLoadError globally and trigger auto-reload
    const handleGlobalError = (event: ErrorEvent) => {
      const message = event.message || '';
      if (message.includes('ChunkLoadError') || message.includes('Loading chunk')) {
        console.warn('ChunkLoadError caught. Performing forced reload...');
        window.location.reload();
      }
    };

    window.addEventListener('error', handleGlobalError);

    return () => {
      clearInterval(interval);
      window.removeEventListener('error', handleGlobalError);
    };
  }, []);

  const handleUpdate = () => {
    try {
      // Clear cache and storages
      if ('caches' in window) {
        caches.keys().then(names => {
          names.forEach(name => { caches.delete(name); });
        });
      }
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(registrations => {
          registrations.forEach(r => { r.unregister(); });
        });
      }
      localStorage.clear();
      sessionStorage.clear();

      // Clear svk_ cookies
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        if (name.indexOf('svk_') === 0) {
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        }
      }

      // Save new version and reload
      localStorage.setItem('svk_app_version', newVersion || CURRENT_VERSION);
      window.location.reload();
    } catch (e) {
      window.location.reload();
    }
  };

  if (!newVersion || dismissed) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '90px',
      left: '24px',
      background: 'rgba(10, 10, 25, 0.85)',
      border: '1px solid rgba(139, 92, 246, 0.3)',
      boxShadow: '0 0 20px rgba(139, 92, 246, 0.2), 0 10px 30px rgba(0,0,0,0.5)',
      backdropFilter: 'blur(16px)',
      borderRadius: '16px',
      padding: '16px 20px',
      color: '#e2e8f0',
      zIndex: 10000,
      maxWidth: '380px',
      width: 'calc(100% - 48px)',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      fontFamily: "'Cairo', sans-serif",
      direction: 'rtl',
      animation: 'slideUpNotifier 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <span style={{ fontSize: '1.3rem', animation: 'bounce 2s infinite' }}>✨</span>
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#a855f7' }}>يتوفر تحديث جديد للمنصة!</div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '2px', lineHeight: 1.5 }}>
              قمنا بتحديث الأكاديمية للنسخة (v{newVersion}) لحل بعض المشاكل وتحسين سرعة التصفح.
            </div>
          </div>
        </div>
        <button 
          onClick={() => setDismissed(true)} 
          style={{
            background: 'transparent',
            border: 'none',
            color: '#64748b',
            cursor: 'pointer',
            fontSize: '1.2rem',
            padding: 0,
            lineHeight: 1
          }}
        >
          ×
        </button>
      </div>

      <button
        onClick={handleUpdate}
        style={{
          width: '100%',
          background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
          border: 'none',
          color: '#fff',
          padding: '10px',
          borderRadius: '10px',
          fontWeight: 'bold',
          fontSize: '0.85rem',
          cursor: 'pointer',
          fontFamily: "'Cairo', sans-serif",
          boxShadow: '0 4px 12px rgba(139,92,246,0.3)',
          transition: 'all 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-1px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        تحديث فوري للمنصة 🔄
      </button>

      <style>{`
        @keyframes slideUpNotifier {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </div>
  );
}
