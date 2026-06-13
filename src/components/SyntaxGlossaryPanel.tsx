'use client';

import React from 'react';
import { useTargetGroup } from '@/context/UserTargetGroupContext';

export interface SyntaxItem {
  name: string;
  description: string;
  syntax: string;
  example: string;
}

interface Props {
  dictionary: SyntaxItem[];
}

export default function SyntaxGlossaryPanel({ dictionary }: Props) {
  const { targetGroup } = useTargetGroup();
  const isKids = targetGroup === 'kids';
  
  if (!dictionary || dictionary.length === 0) return null;

  const bgPanel = isKids ? '#ffffff' : 'rgba(9,10,18,0.7)';
  const borderPanel = isKids ? '4px solid #3b82f6' : '1px solid rgba(59, 130, 246, 0.2)';
  const textColor = isKids ? '#1e293b' : '#e2e8f0';

  return (
    <div style={{
      background: bgPanel,
      border: borderPanel,
      borderRadius: '16px',
      padding: '24px',
      marginTop: '24px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, borderBottom: `1px solid ${isKids ? '#e2e8f0' : 'rgba(255,255,255,0.05)'}`, paddingBottom: '16px', marginBottom: '20px' }}>
        <span style={{ fontSize: '1.8rem' }}>📖</span>
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: isKids ? '#3b82f6' : '#60a5fa', margin: 0 }}>
            القاموس الذكي لأدوات الدرس
          </h2>
          <p style={{ fontSize: '0.9rem', color: isKids ? '#64748b' : '#94a3b8', margin: 0, marginTop: '4px' }}>
            مرجع احترافي لكل أداة برمجية ظهرت في هذا الدرس، مصمم لتسهيل الحفظ والتطبيق!
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
        {dictionary.map((item, idx) => (
          <div key={idx} style={{
            background: isKids ? '#f8fafc' : 'rgba(255,255,255,0.02)',
            border: isKids ? '2px solid #e2e8f0' : '1px solid rgba(255,255,255,0.05)',
            borderRadius: '12px',
            padding: '16px',
            transition: 'all 0.3s ease',
            cursor: 'default',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.borderColor = isKids ? '#3b82f6' : 'rgba(59,130,246,0.5)';
            e.currentTarget.style.boxShadow = isKids ? '0 10px 25px rgba(59,130,246,0.15)' : '0 10px 30px rgba(59,130,246,0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.borderColor = isKids ? '#e2e8f0' : 'rgba(255,255,255,0.05)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ 
                background: 'rgba(59,130,246,0.15)', 
                color: '#3b82f6', 
                padding: '4px 8px', 
                borderRadius: '6px', 
                fontFamily: 'monospace', 
                fontWeight: 'bold',
                fontSize: '1.1rem' 
              }}>
                {item.name}
              </span>
            </div>

            {/* Description */}
            <p style={{ color: textColor, margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
              {item.description}
            </p>

            {/* Syntax & Example Box */}
            <div style={{ 
              background: '#0f172a', 
              borderRadius: '8px', 
              padding: '12px', 
              marginTop: 'auto' 
            }}>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '4px', display: 'flex', justifyContent: 'space-between' }}>
                <span>طريقة الكتابة (Syntax):</span>
              </div>
              <code style={{ color: '#a78bfa', fontFamily: 'monospace', fontSize: '0.9rem', display: 'block', marginBottom: '12px', direction: 'ltr', textAlign: 'left' }}>
                {item.syntax}
              </code>
              
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '4px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '8px' }}>
                <span>مثال عملي (Example):</span>
              </div>
              <pre style={{ margin: 0, color: '#34d399', fontFamily: 'monospace', fontSize: '0.9rem', whiteSpace: 'pre-wrap', direction: 'ltr', textAlign: 'left' }}>
                {item.example}
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
