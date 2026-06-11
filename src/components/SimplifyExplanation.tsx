'use client';

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function SimplifyExplanation({ textContent, isKids }: { textContent: string; isKids?: boolean }) {
  const [simplified, setSimplified] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const handleSimplify = async (isRetry = false) => {
    if (simplified && !isRetry) return; // already fetched

    setLoading(true);
    setError(null);
    if (!isRetry) setRetryCount(0);

    // Clean text before sending
    let cleanText = textContent;
    try {
      const parsed = JSON.parse(textContent);
      if (Array.isArray(parsed) && parsed.length > 0) {
        cleanText = Object.values(parsed[0]).filter(v => typeof v === 'string').join('\n\n');
      }
    } catch (e) {
      cleanText = textContent.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ');
    }

    try {
      const res = await fetch('/api/ai/simplify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: cleanText })
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'حدث خطأ غير متوقع أثناء التبسيط.');
      }

      setSimplified(data.simplified);
      setRetryCount(0); // Reset on success
    } catch (err: any) {
      if (!isRetry && retryCount === 0) {
        // Auto-retry once on client side before showing error
        setRetryCount(1);
        setTimeout(() => handleSimplify(true), 1500);
        return;
      }
      setError(err.message || 'حدث خطأ في الاتصال بالخادم. حاول مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
      {!simplified && !loading && (
        <button
          onClick={() => handleSimplify(false)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, #f59e0b, #d97706)',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: 800,
            fontSize: '1rem',
            boxShadow: '0 4px 14px rgba(245, 158, 11, 0.3)',
            transition: 'all 0.2s ease',
            fontFamily: "'Cairo', sans-serif"
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <span>💡</span>
          اشرحها بطريقة أبسط
        </button>
      )}

      {loading && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f59e0b', fontWeight: 700, padding: '10px' }}>
          <div className="spinner" style={{ width: '20px', height: '20px', border: '3px solid rgba(245, 158, 11, 0.3)', borderTop: '3px solid #f59e0b', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
          {retryCount > 0 ? 'جاري المحاولة مرة أخرى...' : 'جاري تبسيط الشرح باستخدام الذكاء الاصطناعي...'}
          <style>{`
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          `}</style>
        </div>
      )}

      {error && !loading && (
        <div style={{ color: '#ef4444', fontWeight: 700, padding: '10px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', display: 'inline-block' }}>
          ⚠️ {error}
          <button onClick={() => handleSimplify(true)} style={{ marginLeft: '10px', background: 'none', border: 'none', color: '#ef4444', textDecoration: 'underline', cursor: 'pointer' }}>إعادة المحاولة</button>
        </div>
      )}

      {simplified && (
        <div style={{
          background: isKids ? '#fef3c7' : 'rgba(245, 158, 11, 0.05)',
          border: `2px solid ${isKids ? '#fbbf24' : 'rgba(245, 158, 11, 0.3)'}`,
          borderRadius: '16px',
          padding: '24px',
          color: isKids ? '#92400e' : '#fcd34d',
          direction: 'rtl',
          fontFamily: "'Cairo', sans-serif",
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: `1px solid ${isKids ? '#fde68a' : 'rgba(245, 158, 11, 0.2)'}`, paddingBottom: '12px' }}>
            <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.2rem', fontWeight: 900, color: isKids ? '#d97706' : '#fbbf24' }}>
              <span>💡</span> الشرح المبسط (الخلاصة)
            </h3>
            <button 
              onClick={() => setSimplified(null)}
              style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '1.2rem' }}
            >
              ✖
            </button>
          </div>
          <div className="markdown-simplified" style={{ lineHeight: '1.8', fontSize: '0.95rem', color: isKids ? '#451a03' : '#e2e8f0' }}>
            <ReactMarkdown>{simplified}</ReactMarkdown>
          </div>
          <style>{`
            .markdown-simplified h1, .markdown-simplified h2, .markdown-simplified h3 {
              color: ${isKids ? '#b45309' : '#f59e0b'};
              margin-top: 1em;
              margin-bottom: 0.5em;
            }
            .markdown-simplified p {
              margin-bottom: 1em;
            }
            .markdown-simplified ul, .markdown-simplified ol {
              padding-inline-start: 20px;
              margin-bottom: 1em;
            }
            .markdown-simplified li {
              margin-bottom: 0.5em;
            }
            .markdown-simplified strong {
              color: ${isKids ? '#92400e' : '#fbbf24'};
            }
            .markdown-simplified code {
              background: ${isKids ? '#fde68a' : 'rgba(255,255,255,0.1)'};
              padding: 2px 6px;
              border-radius: 4px;
              font-family: monospace;
              direction: ltr;
              display: inline-block;
            }
            .markdown-simplified pre {
              background: #0f172a;
              padding: 16px;
              border-radius: 8px;
              overflow-x: auto;
              direction: ltr;
              text-align: left;
            }
            .markdown-simplified pre code {
              background: transparent;
              padding: 0;
              color: #38bdf8;
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
