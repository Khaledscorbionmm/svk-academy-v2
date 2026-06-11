'use client';

import React, { useState } from 'react';
import { useTargetGroup } from '@/context/UserTargetGroupContext';

export interface PracticalExample {
  type: 'correct' | 'wrong' | 'mistake' | 'use_case' | 'challenge';
  title: string;
  code?: string; // Optional for conceptual mistakes or use cases
  expected_output?: string;
  error_message?: string;
  explanation: string;
}

interface Props {
  examples: PracticalExample[];
  onRunCode: (code: string) => void;
  onFixError: (code: string) => void;
}

export default function QuickExamplesPanel({ examples, onRunCode, onFixError }: Props) {
  const { targetGroup } = useTargetGroup();
  const isKids = targetGroup === 'kids';
  const [revealedExplanations, setRevealedExplanations] = useState<Record<number, boolean>>({});

  if (!examples || examples.length === 0) return null;

  const bgPanel = isKids ? '#ffffff' : 'rgba(9,10,18,0.7)';
  const borderPanel = isKids ? '4px solid #8b5cf6' : '1px solid rgba(139, 92, 246, 0.2)';
  const textColor = isKids ? '#1e293b' : '#e2e8f0';

  const toggleExplanation = (idx: number) => {
    setRevealedExplanations(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div style={{
      background: bgPanel,
      border: borderPanel,
      borderRadius: '16px',
      padding: '24px',
      marginBottom: '24px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, borderBottom: `1px solid ${isKids ? '#e2e8f0' : 'rgba(255,255,255,0.05)'}`, paddingBottom: '12px', marginBottom: '20px' }}>
        <span style={{ fontSize: '1.5rem' }}>⚡</span>
        <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 900, color: isKids ? '#6d28d9' : '#a78bfa' }}>
          أمثلة وتطبيقات عملية سريعة (Quick Practical Examples)
        </h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {examples.map((ex, idx) => {
          let bgColor = '';
          let borderColor = '';
          let icon = '';
          let label = '';
          let labelColor = '';

          switch (ex.type) {
            case 'correct':
              bgColor = isKids ? '#f0fdf4' : 'rgba(16, 185, 129, 0.05)';
              borderColor = '#10b981';
              icon = '✅';
              label = 'Correct Example (مثال صحيح)';
              labelColor = isKids ? '#15803d' : '#34d399';
              break;
            case 'wrong':
              bgColor = isKids ? '#fef2f2' : 'rgba(239, 68, 68, 0.05)';
              borderColor = '#ef4444';
              icon = '❌';
              label = 'Wrong Example (كود خاطئ)';
              labelColor = isKids ? '#b91c1c' : '#f87171';
              break;
            case 'mistake':
              bgColor = isKids ? '#fff7ed' : 'rgba(249, 115, 22, 0.05)';
              borderColor = '#f97316';
              icon = '⚠';
              label = 'Common Mistake (خطأ مفاهيمي شائع)';
              labelColor = isKids ? '#c2410c' : '#fdba74';
              break;
            case 'use_case':
              bgColor = isKids ? '#f0f9ff' : 'rgba(14, 165, 233, 0.05)';
              borderColor = '#0ea5e9';
              icon = '💡';
              label = 'Real World Use Case (استخدام حقيقي)';
              labelColor = isKids ? '#0369a1' : '#7dd3fc';
              break;
            case 'challenge':
              bgColor = isKids ? '#faf5ff' : 'rgba(168, 85, 247, 0.05)';
              borderColor = '#a855f7';
              icon = '🎯';
              label = 'Mini Challenge (تحدي سريع)';
              labelColor = isKids ? '#7e22ce' : '#d8b4fe';
              break;
          }

          const isRevealed = revealedExplanations[idx] || ex.type === 'correct' || ex.type === 'use_case' || ex.type === 'mistake';

          return (
            <div key={idx} style={{
              border: `2px solid ${borderColor}`,
              borderRadius: '12px',
              padding: '16px',
              background: bgColor
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '1.2rem' }}>{icon}</span>
                  <span style={{ fontWeight: 800, color: labelColor }}>{label}</span>
                  <span style={{ fontWeight: 700, color: textColor }}>- {ex.title}</span>
                </div>
              </div>

              {ex.code && (
                <div style={{ background: '#000', padding: '12px', borderRadius: '8px', marginBottom: '12px', overflowX: 'auto' }}>
                  <pre style={{ margin: 0, color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', direction: 'ltr', textAlign: 'left' }}>
                    {ex.code}
                  </pre>
                </div>
              )}

              {ex.type === 'correct' && ex.expected_output && (
                <div style={{ marginBottom: '12px', fontSize: '0.9rem', color: textColor }}>
                  <span style={{ fontWeight: 800, color: '#10b981' }}>المخرجات المتوقعة (Expected Output):</span> {ex.expected_output}
                </div>
              )}

              {ex.type === 'wrong' && ex.error_message && (
                <div style={{ marginBottom: '12px', fontSize: '0.9rem', color: textColor, background: 'rgba(239,68,68,0.1)', padding: '8px', borderRadius: '6px', borderLeft: '4px solid #ef4444' }}>
                  <span style={{ fontWeight: 800, color: '#ef4444' }}>رسالة الخطأ:</span> <span style={{ fontFamily: 'monospace' }}>{ex.error_message}</span>
                </div>
              )}

              {isRevealed && (
                <div style={{ marginBottom: '12px', fontSize: '0.95rem', lineHeight: 1.6, color: textColor, animation: 'fadeIn 0.3s ease-in' }}>
                  <strong>الشرح (Explanation):</strong> {ex.explanation}
                </div>
              )}

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '16px' }}>
                {ex.type === 'correct' && ex.code && (
                  <button onClick={() => onRunCode(ex.code!)} style={{ background: '#10b981', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                    ▶️ Run Correct Example
                  </button>
                )}
                {ex.type === 'wrong' && ex.code && (
                  <>
                    <button onClick={() => onRunCode(ex.code!)} style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                      ▶️ Run Wrong Example
                    </button>
                    <button onClick={() => toggleExplanation(idx)} style={{ background: 'rgba(255,255,255,0.1)', color: textColor, border: `1px solid ${borderColor}`, padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                      {isRevealed ? '🫣 Hide Explanation' : '🤖 Explain This Error'}
                    </button>
                    <button onClick={() => onFixError(ex.code!)} style={{ background: '#f59e0b', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                      🔥 Fix It Yourself
                    </button>
                  </>
                )}
                {ex.type === 'challenge' && ex.code && (
                  <>
                    <button onClick={() => onFixError(ex.code!)} style={{ background: '#a855f7', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                      ✍️ Start Challenge
                    </button>
                    <button onClick={() => toggleExplanation(idx)} style={{ background: 'rgba(255,255,255,0.1)', color: textColor, border: `1px solid ${borderColor}`, padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                      {isRevealed ? '🫣 Hide Hint' : '💡 Show Hint'}
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
