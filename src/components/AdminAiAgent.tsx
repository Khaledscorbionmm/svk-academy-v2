'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  type?: 'info' | 'error' | 'success' | 'code';
}

interface SiteStatus {
  site: boolean;
  db: boolean;
  api: boolean;
  deploy: boolean;
}

export default function AdminAiAgent() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `🤖 **مرحباً يا خالد!** أنا وكيل SVK الذكي — مدرّب على إدارة موقعك بالكامل.

**قدراتي:**
- 🔍 فحص حالة الموقع والـ API والـ Database
- 🐛 تحليل الأخطاء وإصلاحها خطوة بخطوة
- 🚀 إطلاق deployments جديدة
- 📊 تحليل الـ logs والـ errors
- ⚙️ إرشادات تقنية لأي مشكلة

**ابدأ بقول:** "افحص الموقع" أو "في مشكلة في..." أو أي سؤال تقني!`,
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [siteStatus, setSiteStatus] = useState<SiteStatus>({ site: false, db: false, api: false, deploy: false });
  const [checking, setChecking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const checkSiteHealth = useCallback(async () => {
    setChecking(true);
    const status: SiteStatus = { site: false, db: false, api: false, deploy: false };

    try {
      const res = await fetch('https://www.smartvenomk.xyz/api/healthz', { signal: AbortSignal.timeout(8000) });
      if (res.ok) {
        const data = await res.json();
        status.site = true;
        status.db = data.services?.database?.status === 'healthy';
        status.api = data.services?.api?.status === 'healthy';
        status.deploy = true;
      }
    } catch {}

    setSiteStatus(status);
    setChecking(false);

    const statusMsg = `✅ **نتيجة الفحص:**

| الخدمة | الحالة |
|--------|--------|
| الموقع | ${status.site ? '✅ يعمل' : '❌ لا يستجيب'} |
| قاعدة البيانات | ${status.db ? '✅ متصلة' : '❌ خطأ'} |
| API | ${status.api ? '✅ صحي' : '❌ مشكلة'} |
| Deploy | ${status.deploy ? '✅ مُنشور' : '❌ غير مُنشور'} |

${!status.site ? '\n⚠️ **الموقع لا يستجيب!** قد يكون هناك مشكلة في الـ deployment. تحقق من Vercel dashboard.' : ''}
${status.site && !status.db ? '\n⚠️ **قاعدة البيانات معطلة!** تحقق من NEON dashboard وتأكد من أن DATABASE_URL صحيح.' : ''}
${status.site && status.db ? '\n🎉 **كل شيء يعمل بشكل مثالي!**' : ''}`;

    setMessages(prev => [...prev, { role: 'system', content: statusMsg, timestamp: new Date(), type: status.site && status.db ? 'success' : 'error' }]);
  }, []);

  const sendMessage = useCallback(async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput('');

    setMessages(prev => [...prev, { role: 'user', content: userMsg, timestamp: new Date() }]);
    setLoading(true);

    // Handle special commands
    if (userMsg.toLowerCase().includes('افحص') || userMsg.toLowerCase().includes('فحص') || userMsg.toLowerCase().includes('check')) {
      await checkSiteHealth();
      setLoading(false);
      return;
    }

    try {
      const context = {
        page: 'admin-control-center',
        currentLesson: 'إدارة موقع SVK Academy',
        errorMessage: messages.filter(m => m.type === 'error').map(m => m.content).slice(-1)[0] || '',
      };

      const adminSystemPrompt = `أنت وكيل ذكي لإدارة موقع SVK Academy على Vercel.

**معلومات الموقع:**
- URL: https://www.smartvenomk.xyz
- Platform: Next.js 16 على Vercel
- DB: Neon PostgreSQL
- Repository: github.com/Khaledscorbionmm/svk-academy-v2
- Admin Email: admin@smartvenom.com

**حالة الموقع الحالية:**
- الموقع: ${siteStatus.site ? 'يعمل ✅' : 'لا يستجيب ❌'}
- قاعدة البيانات: ${siteStatus.db ? 'متصلة ✅' : 'خطأ ❌'}
- API: ${siteStatus.api ? 'صحي ✅' : 'مشكلة ❌'}

**دورك:**
1. تحليل أي مشكلة تقنية وإعطاء خطوات الحل المحددة
2. شرح ما الذي يحدث ولماذا
3. إرشادات Vercel/Neon/Next.js/PostgreSQL
4. أوامر Git وDeploy للتطبيق
5. تشخيص أخطاء الـ logs

**تحدث بالعربي. كن دقيقاً ومحدداً. أعطِ خطوات قابلة للتنفيذ.**`;

      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'user', content: adminSystemPrompt },
            { role: 'assistant', content: 'أنا جاهز لمساعدتك في إدارة موقع SVK Academy. ما هي المشكلة؟' },
            ...messages.filter(m => m.role !== 'system').map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: userMsg },
          ],
          context,
        }),
      });

      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply, timestamp: new Date() }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: '❌ فشل الاتصال بـ Gemini AI. تحقق من GEMINI_API_KEY في إعدادات Vercel.', timestamp: new Date(), type: 'error' }]);
    } finally {
      setLoading(false);
    }
  }, [input, loading, messages, checkSiteHealth, siteStatus]);

  const quickCommands = [
    { label: '🔍 افحص الموقع الآن', action: () => { setInput('افحص حالة الموقع والـ API وقاعدة البيانات'); } },
    { label: '🚀 كيف أعمل deploy؟', action: () => setInput('كيف أعمل deploy جديد للموقع على Vercel؟') },
    { label: '🐛 في خطأ 500', action: () => setInput('الموقع يعطيني خطأ 500. ما السبب وكيف أحله؟') },
    { label: '🗄️ مشكلة في DB', action: () => setInput('قاعدة البيانات لا تتصل. كيف أحل هذه المشكلة؟') },
    { label: '📊 أحتاج logs', action: () => setInput('كيف أرى logs الأخطاء في Vercel؟') },
    { label: '🔐 نسيت كلمة المرور', action: () => setInput('كيف أغير كلمة مرور الادمن في قاعدة البيانات؟') },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 0, fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&family=Fira+Code&display=swap" rel="stylesheet" />

      {/* Status Bar */}
      <div style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.05)', flexWrap: 'wrap', alignItems: 'center' }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: '#94a3b8' }}>حالة الخدمات:</span>
        {[
          { label: 'الموقع', key: 'site' },
          { label: 'DB', key: 'db' },
          { label: 'API', key: 'api' },
        ].map(({ label, key }) => (
          <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 5, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 6, padding: '3px 8px', fontSize: 12 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: siteStatus[key as keyof SiteStatus] ? '#22c55e' : checking ? '#fbbf24' : '#334155', display: 'inline-block', boxShadow: siteStatus[key as keyof SiteStatus] ? '0 0 6px #22c55e' : 'none' }} />
            <span style={{ color: '#64748b' }}>{label}</span>
          </div>
        ))}
        <button onClick={checkSiteHealth} disabled={checking} style={{ marginRight: 'auto', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', color: '#a855f7', padding: '4px 14px', borderRadius: 8, fontSize: 12, cursor: checking ? 'not-allowed' : 'pointer', fontFamily: "'Cairo', sans-serif", opacity: checking ? 0.7 : 1 }}>
          {checking ? '⏳ جاري الفحص...' : '🔍 فحص الآن'}
        </button>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {messages.map((msg, i) => {
          const isSystem = msg.role === 'system';
          const isUser = msg.role === 'user';
          return (
            <div key={i} style={{ display: 'flex', gap: 10, flexDirection: isUser ? 'row-reverse' : 'row', alignItems: 'flex-start' }}>
              {!isUser && (
                <div style={{ width: 32, height: 32, borderRadius: 10, background: isSystem ? (msg.type === 'error' ? 'rgba(239,68,68,0.3)' : 'rgba(34,197,94,0.2)') : 'linear-gradient(135deg,#6366f1,#a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0, marginTop: 2 }}>
                  {isSystem ? (msg.type === 'error' ? '⚠️' : '✅') : '🤖'}
                </div>
              )}
              <div style={{
                maxWidth: '88%',
                background: isUser ? 'linear-gradient(135deg,#6366f1,#a855f7)' : isSystem ? (msg.type === 'error' ? 'rgba(239,68,68,0.05)' : 'rgba(34,197,94,0.05)') : 'rgba(255,255,255,0.04)',
                border: isUser ? 'none' : isSystem ? `1px solid ${msg.type === 'error' ? 'rgba(239,68,68,0.2)' : 'rgba(34,197,94,0.2)'}` : '1px solid rgba(255,255,255,0.07)',
                borderRadius: isUser ? '14px 4px 14px 14px' : '4px 14px 14px 14px',
                padding: '10px 14px', fontSize: 13, color: '#e2e8f0', lineHeight: 1.7,
              }}>
                <AdminMarkdown text={msg.content} />
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)', marginTop: 4, direction: 'ltr', textAlign: isUser ? 'left' : 'right' }}>{msg.timestamp.toLocaleTimeString('ar')}</div>
              </div>
            </div>
          );
        })}
        {loading && (
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: 'linear-gradient(135deg,#6366f1,#a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🤖</div>
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '4px 14px 14px 14px', padding: '14px 18px', display: 'flex', gap: 5 }}>
              {[0,1,2].map(i => <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: '#6366f1', animation: `bounce 1.2s ease-in-out ${i*0.2}s infinite` }} />)}
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Commands */}
      <div style={{ padding: '10px 16px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {quickCommands.map((cmd, i) => (
          <button key={i} onClick={() => { cmd.action(); setTimeout(() => inputRef.current?.focus(), 50); }} style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.15)', color: '#94a3b8', padding: '5px 10px', borderRadius: 8, fontSize: 11, cursor: 'pointer', fontFamily: "'Cairo', sans-serif", transition: 'all 0.2s', whiteSpace: 'nowrap' }}
            onMouseOver={e => { e.currentTarget.style.background = 'rgba(99,102,241,0.15)'; e.currentTarget.style.color = '#a855f7'; }}
            onMouseOut={e => { e.currentTarget.style.background = 'rgba(99,102,241,0.08)'; e.currentTarget.style.color = '#94a3b8'; }}>
            {cmd.label}
          </button>
        ))}
      </div>

      {/* Input */}
      <div style={{ padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: 10, alignItems: 'flex-end' }}>
        <textarea
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
          placeholder="اسأل عن أي مشكلة أو خطأ في الموقع... (Enter للإرسال)"
          rows={2}
          style={{ flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#e2e8f0', borderRadius: 12, padding: '10px 14px', fontSize: 13, resize: 'none', outline: 'none', fontFamily: "'Cairo', sans-serif", lineHeight: 1.6 }}
        />
        <button onClick={sendMessage} disabled={loading || !input.trim()} style={{ padding: '10px 20px', background: loading || !input.trim() ? 'rgba(99,102,241,0.3)' : 'linear-gradient(135deg,#6366f1,#a855f7)', border: 'none', color: '#fff', borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: loading || !input.trim() ? 'not-allowed' : 'pointer', fontFamily: "'Cairo', sans-serif", flexShrink: 0 }}>
          {loading ? '⏳' : '↑ إرسال'}
        </button>
      </div>

      <style>{`@keyframes bounce { 0%,80%,100%{transform:scale(0)} 40%{transform:scale(1)} }`}</style>
    </div>
  );
}

function AdminMarkdown({ text }: { text: string }) {
  const lines = text.split('\n');
  let inCode = false;
  let codeLines: string[] = [];
  let codeLang = '';
  const elements: React.ReactNode[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('```')) {
      if (!inCode) { inCode = true; codeLang = line.slice(3).trim(); codeLines = []; }
      else {
        elements.push(
          <div key={i} style={{ margin: '8px 0', borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(99,102,241,0.2)' }}>
            {codeLang && <div style={{ background: 'rgba(99,102,241,0.2)', padding: '3px 10px', fontSize: 11, color: '#6366f1', fontWeight: 700 }}>{codeLang}</div>}
            <pre style={{ margin: 0, padding: '10px 12px', background: '#020208', color: '#22c55e', fontFamily: 'monospace', fontSize: 12, overflowX: 'auto', direction: 'ltr', textAlign: 'left' }}>{codeLines.join('\n')}</pre>
          </div>
        );
        inCode = false; codeLines = []; codeLang = '';
      }
    } else if (inCode) {
      codeLines.push(line);
    } else if (line.startsWith('| ')) {
      elements.push(<div key={i} style={{ fontFamily: 'monospace', fontSize: 12, color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '3px 0' }}>{line}</div>);
    } else if (line.startsWith('**') || line.startsWith('##') || line.startsWith('# ')) {
      const clean = line.replace(/^#+\s*/, '').replace(/\*\*/g, '');
      elements.push(<div key={i} style={{ fontWeight: 800, color: '#a855f7', fontSize: 14, marginTop: 8 }}>{clean}</div>);
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      elements.push(<div key={i} style={{ paddingRight: 12, color: '#94a3b8' }}>• {line.slice(2)}</div>);
    } else {
      const inlined = line.split(/(`[^`]+`)/g).map((p, j) =>
        p.startsWith('`') && p.endsWith('`')
          ? <code key={j} style={{ background: 'rgba(99,102,241,0.2)', color: '#06b6d4', padding: '1px 4px', borderRadius: 3, fontFamily: 'monospace', fontSize: '0.85em' }}>{p.slice(1,-1)}</code>
          : <span key={j}>{p}</span>
      );
      elements.push(<div key={i}>{inlined}</div>);
    }
  }

  return <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>{elements}</div>;
}
