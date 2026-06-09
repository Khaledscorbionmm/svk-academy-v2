'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AiChatProps {
  context?: {
    page?: string;
    currentLesson?: string;
    currentCode?: string;
    errorMessage?: string;
  };
  position?: 'bottom-right' | 'bottom-left' | 'inline';
}

function MarkdownMessage({ text }: { text: string }) {
  const parts = text.split(/(```[\s\S]*?```|`[^`]+`|\*\*[^*]+\*\*|\n)/g);
  let inCodeBlock = false;
  const elements: React.ReactNode[] = [];

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (part.startsWith('```') && part.endsWith('```')) {
      const code = part.slice(3);
      const firstLine = code.split('\n')[0];
      const lang = /^[a-z]+$/.test(firstLine) ? firstLine : '';
      const codeContent = lang ? code.slice(lang.length + 1) : code;
      elements.push(
        <div key={i} style={{ margin: '8px 0', borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(99,102,241,0.2)' }}>
          {lang && <div style={{ background: 'rgba(99,102,241,0.2)', padding: '4px 10px', fontSize: 11, color: '#6366f1', fontWeight: 700 }}>{lang}</div>}
          <pre style={{ margin: 0, padding: '10px 12px', background: '#050510', color: '#22c55e', fontFamily: 'monospace', fontSize: 12, overflowX: 'auto', direction: 'ltr', textAlign: 'left' }}>
            {codeContent.trim()}
          </pre>
        </div>
      );
    } else if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      elements.push(<code key={i} style={{ background: 'rgba(99,102,241,0.2)', color: '#06b6d4', padding: '1px 5px', borderRadius: 4, fontFamily: 'monospace', fontSize: '0.85em' }}>{part.slice(1, -1)}</code>);
    } else if (part.startsWith('**') && part.endsWith('**')) {
      elements.push(<strong key={i} style={{ color: '#a855f7' }}>{part.slice(2, -2)}</strong>);
    } else if (part === '\n') {
      elements.push(<br key={i} />);
    } else {
      elements.push(<span key={i}>{part}</span>);
    }
  }

  return <div style={{ lineHeight: 1.7 }}>{elements}</div>;
}

export default function AiChat({ context, position = 'bottom-right' }: AiChatProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'مرحباً! 👋 أنا مساعد SVK Academy الذكي.\n\nيمكنني مساعدتك في:\n- 🐍 شرح Python وأخطاء الكود\n- ⚡ JavaScript والـ React\n- 🔍 تحليل الأخطاء وإصلاحها\n- 🤖 AI والخوارزميات\n\nما سؤالك؟ 🚀',
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = useCallback(async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput('');
    
    const newMsg: Message = { role: 'user', content: userMsg, timestamp: new Date() };
    setMessages(prev => [...prev, newMsg]);
    setLoading(true);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, newMsg].map(m => ({ role: m.role, content: m.content })),
          context,
        }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.reply || 'عذراً، لم أستطع الرد. حاول مجدداً.',
        timestamp: new Date(),
      }]);
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: '❌ حدث خطأ في الاتصال. تحقق من اتصالك بالإنترنت وحاول مجدداً.',
        timestamp: new Date(),
      }]);
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [input, loading, messages, context]);

  const quickPrompts = [
    { label: '🐛 اشرح الخطأ', msg: `اشرح لي هذا الخطأ وكيف أصلحه: ${context?.errorMessage || 'Error في كودي'}` },
    { label: '💡 مثال عملي', msg: `أعطني مثال عملي على ${context?.currentLesson || 'المفهوم الحالي'}` },
    { label: '✅ راجع كودي', msg: `راجع هذا الكود وقولي هل هو صح:\n\`\`\`\n${context?.currentCode || 'الصق كودك هنا'}\n\`\`\`` },
    { label: '📚 شرح أعمق', msg: `اشرح لي ${context?.currentLesson || 'الموضوع'} بشكل أعمق مع أمثلة` },
  ];

  const posStyle: React.CSSProperties = position === 'bottom-right'
    ? { position: 'fixed', bottom: 24, left: 24, zIndex: 9999 }
    : position === 'bottom-left'
    ? { position: 'fixed', bottom: 24, right: 24, zIndex: 9999 }
    : { position: 'relative' };

  if (position === 'inline') {
    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#08080f', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(99,102,241,0.2)' }}>
        {/* Header */}
        <div style={{ padding: '12px 16px', background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.15))', borderBottom: '1px solid rgba(99,102,241,0.15)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg,#6366f1,#a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🤖</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 14 }}>مساعد SVK الذكي</div>
            <div style={{ fontSize: 11, color: '#22c55e', display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />متصل الآن</div>
          </div>
        </div>
        {/* Messages */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: 12, minHeight: 200 }}>
          {messages.map((msg, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, flexDirection: msg.role === 'user' ? 'row-reverse' : 'row', alignItems: 'flex-start' }}>
              {msg.role === 'assistant' && (
                <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg,#6366f1,#a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0, marginTop: 2 }}>🤖</div>
              )}
              <div style={{ maxWidth: '85%', background: msg.role === 'user' ? 'linear-gradient(135deg,#6366f1,#a855f7)' : 'rgba(255,255,255,0.05)', border: msg.role === 'user' ? 'none' : '1px solid rgba(255,255,255,0.08)', borderRadius: msg.role === 'user' ? '16px 4px 16px 16px' : '4px 16px 16px 16px', padding: '10px 14px', fontSize: 13, color: '#e2e8f0', lineHeight: 1.6 }}>
                <MarkdownMessage text={msg.content} />
                <div style={{ fontSize: 10, color: msg.role === 'user' ? 'rgba(255,255,255,0.5)' : '#334155', marginTop: 4, textAlign: msg.role === 'user' ? 'left' : 'right', direction: 'ltr' }}>{msg.timestamp.toLocaleTimeString('ar', { hour: '2-digit', minute: '2-digit' })}</div>
              </div>
            </div>
          ))}
          {loading && (
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg,#6366f1,#a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>🤖</div>
              <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px 16px 16px 16px', padding: '14px 18px', display: 'flex', gap: 5 }}>
                {[0, 1, 2].map(i => (
                  <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: '#6366f1', animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite` }} />
                ))}
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        {/* Quick Prompts */}
        {messages.length <= 2 && (
          <div style={{ padding: '8px 12px', display: 'flex', gap: 6, flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
            {quickPrompts.map((p, i) => (
              <button key={i} onClick={() => setInput(p.msg)} style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', color: '#a855f7', padding: '5px 10px', borderRadius: 8, fontSize: 11, cursor: 'pointer', fontFamily: "'Cairo', sans-serif", whiteSpace: 'nowrap' }}>
                {p.label}
              </button>
            ))}
          </div>
        )}
        {/* Input */}
        <div style={{ padding: '10px 12px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: 8, alignItems: 'flex-end' }}>
          <textarea
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
            placeholder="اسألني أي شيء... (Enter للإرسال)"
            rows={1}
            style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#e2e8f0', borderRadius: 10, padding: '8px 12px', fontSize: 13, resize: 'none', outline: 'none', fontFamily: "'Cairo', sans-serif", maxHeight: 100, overflowY: 'auto' }}
          />
          <button onClick={sendMessage} disabled={loading || !input.trim()} style={{ width: 36, height: 36, borderRadius: 10, background: loading || !input.trim() ? 'rgba(99,102,241,0.3)' : 'linear-gradient(135deg,#6366f1,#a855f7)', border: 'none', color: '#fff', cursor: loading || !input.trim() ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>
            {loading ? '⏳' : '↑'}
          </button>
        </div>
        <style>{`@keyframes bounce { 0%,80%,100%{transform:scale(0)} 40%{transform:scale(1)} }`}</style>
      </div>
    );
  }

  return (
    <div style={posStyle} dir="rtl">
      {/* Floating Button */}
      {!open && (
        <button onClick={() => setOpen(true)} style={{
          width: 60, height: 60, borderRadius: '50%',
          background: 'linear-gradient(135deg, #6366f1, #a855f7)',
          border: 'none', color: '#fff', fontSize: 26, cursor: 'pointer',
          boxShadow: '0 0 30px rgba(99,102,241,0.6), 0 4px 20px rgba(0,0,0,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: 'pulse 3s ease-in-out infinite',
          transition: 'all 0.3s',
          fontFamily: "'Cairo', sans-serif",
        }}
          onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.1)'; }}
          onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; }}
          title="افتح المساعد الذكي"
        >
          🤖
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div style={{
          width: 380, height: minimized ? 56 : 540,
          background: '#08080f', borderRadius: 20, overflow: 'hidden',
          border: '1px solid rgba(99,102,241,0.3)',
          boxShadow: '0 20px 80px rgba(0,0,0,0.8), 0 0 40px rgba(99,102,241,0.2)',
          display: 'flex', flexDirection: 'column',
          transition: 'height 0.3s ease', fontFamily: "'Cairo', sans-serif",
        }}>
          {/* Header */}
          <div style={{ padding: '12px 16px', background: 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(168,85,247,0.2))', borderBottom: '1px solid rgba(99,102,241,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', flexShrink: 0 }} onClick={() => setMinimized(m => !m)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg,#6366f1,#a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🤖</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 14 }}>مساعد SVK الذكي</div>
                <div style={{ fontSize: 11, color: '#22c55e', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                  متصل — Gemini 2.0 Flash
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={e => { e.stopPropagation(); setMinimized(m => !m); }} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#94a3b8', width: 26, height: 26, borderRadius: 6, cursor: 'pointer', fontSize: 14 }}>{minimized ? '▲' : '▼'}</button>
              <button onClick={e => { e.stopPropagation(); setOpen(false); }} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#94a3b8', width: 26, height: 26, borderRadius: 6, cursor: 'pointer', fontSize: 14 }}>✕</button>
            </div>
          </div>

          {!minimized && (
            <>
              {/* Messages */}
              <div style={{ flex: 1, overflowY: 'auto', padding: '12px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {messages.map((msg, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, flexDirection: msg.role === 'user' ? 'row-reverse' : 'row', alignItems: 'flex-start' }}>
                    {msg.role === 'assistant' && (
                      <div style={{ width: 24, height: 24, borderRadius: 6, background: 'linear-gradient(135deg,#6366f1,#a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, flexShrink: 0, marginTop: 2 }}>🤖</div>
                    )}
                    <div style={{ maxWidth: '82%', background: msg.role === 'user' ? 'linear-gradient(135deg,#6366f1,#a855f7)' : 'rgba(255,255,255,0.04)', border: msg.role === 'user' ? 'none' : '1px solid rgba(255,255,255,0.07)', borderRadius: msg.role === 'user' ? '14px 4px 14px 14px' : '4px 14px 14px 14px', padding: '9px 12px', fontSize: 13, color: '#e2e8f0' }}>
                      <MarkdownMessage text={msg.content} />
                    </div>
                  </div>
                ))}
                {loading && (
                  <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <div style={{ width: 24, height: 24, borderRadius: 6, background: 'linear-gradient(135deg,#6366f1,#a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>🤖</div>
                    <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '4px 14px 14px 14px', padding: '12px 16px', display: 'flex', gap: 4 }}>
                      {[0,1,2].map(i => <div key={i} style={{ width: 7, height: 7, borderRadius: '50%', background: '#6366f1', animation: `bounce 1.2s ease-in-out ${i*0.2}s infinite` }} />)}
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions */}
              {messages.length <= 2 && (
                <div style={{ padding: '8px 10px', display: 'flex', gap: 5, flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                  {quickPrompts.slice(0, 2).map((p, i) => (
                    <button key={i} onClick={() => { setInput(p.msg); setTimeout(() => inputRef.current?.focus(), 50); }} style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', color: '#a855f7', padding: '4px 8px', borderRadius: 6, fontSize: 11, cursor: 'pointer', fontFamily: "'Cairo', sans-serif" }}>
                      {p.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <div style={{ padding: '10px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: 8, alignItems: 'flex-end' }}>
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
                  placeholder="اسأل أي شيء... (Enter للإرسال)"
                  rows={1}
                  style={{ flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#e2e8f0', borderRadius: 10, padding: '8px 12px', fontSize: 13, resize: 'none', outline: 'none', fontFamily: "'Cairo', sans-serif", maxHeight: 80, overflowY: 'auto', lineHeight: 1.5 }}
                />
                <button onClick={sendMessage} disabled={loading || !input.trim()} style={{ width: 36, height: 36, borderRadius: 10, background: !input.trim() || loading ? 'rgba(99,102,241,0.3)' : 'linear-gradient(135deg,#6366f1,#a855f7)', border: 'none', color: '#fff', cursor: !input.trim() || loading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>
                  {loading ? '⏳' : '↑'}
                </button>
              </div>
              <div style={{ padding: '4px 12px 8px', fontSize: 10, color: '#1e293b', textAlign: 'center' }}>مدعوم بـ Gemini 2.0 Flash • SVK Academy AI</div>
            </>
          )}
        </div>
      )}
      <style>{`
        @keyframes bounce { 0%,80%,100%{transform:scale(0)} 40%{transform:scale(1)} }
        @keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.05)} }
      `}</style>
    </div>
  );
}
