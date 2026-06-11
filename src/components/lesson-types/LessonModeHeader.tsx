'use client';

import React from 'react';

type LessonType = 
  | 'concept' 
  | 'sandbox' 
  | 'project' 
  | 'debugging' 
  | 'ai_challenge' 
  | 'code_reading' 
  | 'mini_mission' 
  | 'milestone' 
  | 'scenario'
  | 'capstone';

interface Props {
  lessonType?: LessonType | string;
  isKids: boolean;
}

export default function LessonModeHeader({ lessonType = 'concept', isKids }: Props) {
  if (lessonType === 'concept') return null; // Default view

  const modeConfig: Record<string, { title: string; icon: string; color: string; desc: string }> = {
    sandbox: {
      title: 'Interactive Sandbox',
      icon: '🧪',
      color: '#8b5cf6',
      desc: 'حاول التجربة وتغيير الأكواد لترى ما سيحدث. لا يوجد خطأ هنا!'
    },
    project: {
      title: 'Real Project',
      icon: '🚀',
      color: '#f59e0b',
      desc: 'في هذا الدرس سنقوم ببناء تطبيق مصغر متكامل.'
    },
    debugging: {
      title: 'Debugging Mission',
      icon: '🐛',
      color: '#ef4444',
      desc: 'الكود المعطى يحتوي على أخطاء (Bugs). مهمتك هي العثور عليها وإصلاحها!'
    },
    ai_challenge: {
      title: 'AI Challenge',
      icon: '🤖',
      color: '#06b6d4',
      desc: 'الذكاء الاصطناعي كتب كوداً غير دقيق. هل يمكنك أن تكون أذكى منه وتصلحه؟'
    },
    code_reading: {
      title: 'Code Reading',
      icon: '📖',
      color: '#10b981',
      desc: 'لا تكتب كوداً اليوم! اقرأ الكود التالي وحاول فهم النتيجة قبل تشغيله.'
    },
    mini_mission: {
      title: 'Mini Mission',
      icon: '⚡',
      color: '#eab308',
      desc: 'مهمة سريعة! نفذ المطلوب في أسرع وقت ممكن لتجاوز التحدي.'
    },
    milestone: {
      title: 'Milestone Assessment',
      icon: '🏆',
      color: '#3b82f6',
      desc: 'اختبار شامل لكل ما تعلمته في الدروس السابقة. ركز جيداً!'
    },
    scenario: {
      title: 'Real World Scenario',
      icon: '🌍',
      color: '#14b8a6',
      desc: 'لديك متطلبات من عميل (Client). حول هذه المتطلبات إلى كود حقيقي.'
    },
    capstone: {
      title: 'Capstone Project',
      icon: '👑',
      color: '#f43f5e',
      desc: 'مشروع التخرج لهذه المرحلة! اجمع كل مهاراتك لبناء هذا المشروع الضخم.'
    }
  };

  const config = modeConfig[lessonType as string] || modeConfig['sandbox'];

  return (
    <div style={{
      background: isKids ? '#ffffff' : `rgba(0,0,0,0.2)`,
      border: `2px solid ${config.color}`,
      borderLeft: `8px solid ${config.color}`,
      borderRadius: '12px',
      padding: '20px',
      marginBottom: '24px',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      boxShadow: `0 4px 20px ${config.color}20`
    }}>
      <div style={{ fontSize: '3rem', animation: 'pulse 2s infinite' }}>{config.icon}</div>
      <div>
        <div style={{ 
          display: 'inline-block',
          background: `${config.color}20`,
          color: config.color,
          padding: '4px 12px',
          borderRadius: '20px',
          fontSize: '0.8rem',
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: '8px'
        }}>
          {config.title} Mode
        </div>
        <p style={{ margin: 0, fontSize: '1.05rem', color: isKids ? '#1e293b' : '#e2e8f0', fontWeight: 600 }}>
          {config.desc}
        </p>
      </div>
    </div>
  );
}
