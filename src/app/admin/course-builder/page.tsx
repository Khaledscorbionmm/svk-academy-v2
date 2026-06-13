'use client';

import React, { useState } from 'react';

export default function CourseBuilderPage() {
  // --- STATE ---
  const [config, setConfig] = useState({
    title: '',
    slug: '',
    description: '',
    lessonCount: 20,
    difficulty: 'beginner',
    language: 'arabic',
    provider: 'openai',
    topics: '',
    apiKey: ''
  });

  const [generatedLessons, setGeneratedLessons] = useState<any[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [qualityScore, setQualityScore] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  // --- HANDLERS ---
  const handleGenerate = async () => {
    if (!config.title || !config.topics) {
      alert('الرجاء إدخال عنوان الكورس وقائمة المواضيع أولاً.');
      return;
    }
    
    setIsGenerating(true);
    setProgress(0);
    setGeneratedLessons([]);
    setQualityScore(null);

    const topicList = config.topics.split('\n').filter(t => t.trim() !== '');
    if (topicList.length === 0) {
      setIsGenerating(false);
      return;
    }

    const newLessons: any[] = [];
    
    for (let i = 0; i < topicList.length; i++) {
      try {
        const res = await fetch('/api/admin/generate-lesson', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            topic: topicList[i],
            index: i + 1,
            config
          })
        });

        if (!res.ok) throw new Error('Generation failed');
        const data = await res.json();
        
        newLessons.push(data.lesson);
        setGeneratedLessons([...newLessons]);
        setProgress(Math.round(((i + 1) / topicList.length) * 100));

      } catch (err) {
        console.error('Error generating lesson:', topicList[i], err);
        // Add a placeholder to not break the flow entirely
        newLessons.push({
          title: topicList[i],
          lesson_slug: `${config.slug || 'course'}-${i+1}`,
          lesson_type: 'error',
          error: true
        });
        setGeneratedLessons([...newLessons]);
      }
    }

    setIsGenerating(false);
  };

  const handleAudit = () => {
    if (generatedLessons.length === 0) return;
    
    let totalScore = 0;
    
    generatedLessons.forEach(lesson => {
      let lessonScore = 100;
      
      // Check structural schema elements
      if (!lesson.content?.context || lesson.content.context.length < 20) lessonScore -= 20;
      if (!lesson.exercise_instructions) lessonScore -= 10;
      if (!lesson.expected_output) lessonScore -= 10;
      
      // Check practical examples array
      const examples = lesson.quick_practical_examples || [];
      if (examples.length < 3) lessonScore -= 20;
      
      // Check exam data
      if (!lesson.exam_data?.questions || lesson.exam_data.questions.length === 0) lessonScore -= 10;
      
      // Check for generic placeholders
      const jsonStr = JSON.stringify(lesson);
      if (jsonStr.includes('محتوى تجريبي') || jsonStr.includes('TODO')) lessonScore -= 30;

      totalScore += Math.max(0, lessonScore);
    });

    const finalScore = Math.round(totalScore / generatedLessons.length);
    setQualityScore(finalScore);
    
    if (finalScore >= 90) {
      alert(`✅ اجتاز الفحص! نسبة الجودة: ${finalScore}%\nالكورس جاهز للنشر.`);
    } else {
      alert(`⚠️ يحتاج مراجعة! نسبة الجودة: ${finalScore}%\nهناك بيانات ناقصة أو محتوى تجريبي.`);
    }
  };

  const handlePublish = async () => {
    if (!config.slug) {
      alert('الرجاء إدخال معرف المسار (Slug) أولاً.');
      return;
    }

    try {
      const res = await fetch('/api/admin/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug: config.slug,
          lessons: generatedLessons
        })
      });

      const data = await res.json();
      if (res.ok) {
        alert(`✅ تم نشر الكورس بنجاح!\nالملف: ${config.slug}Data.ts`);
      } else {
        alert(`❌ فشل النشر: ${data.error}`);
      }
    } catch (error) {
      alert('حدث خطأ أثناء الاتصال بخادم النشر.');
      console.error(error);
    }
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1400px', margin: '0 auto', fontFamily: "'Cairo', sans-serif" }}>
      
      {/* Header Actions */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: 0, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '2.5rem' }}>🤖</span> مصنع الكورسات الذكي
          </h1>
          <p style={{ color: '#94a3b8', marginTop: '8px' }}>توليد دورات برمجية احترافية مدعومة بالذكاء الاصطناعي بنقرة واحدة</p>
        </div>
        
        <div style={{ display: 'flex', gap: '12px' }}>
          <button 
            onClick={handleAudit}
            disabled={generatedLessons.length === 0}
            style={{
              background: 'rgba(59, 130, 246, 0.1)', border: '1px solid #3b82f6', color: '#60a5fa',
              padding: '10px 20px', borderRadius: '8px', fontWeight: 700, cursor: generatedLessons.length === 0 ? 'not-allowed' : 'pointer', transition: 'all 0.2s'
            }}>
            🕵️‍♂️ فحص الجودة والتكرار {qualityScore && `(${qualityScore}%)`}
          </button>
          
          <button 
            disabled={generatedLessons.length === 0}
            style={{
              background: 'rgba(245, 158, 11, 0.1)', border: '1px solid #f59e0b', color: '#fbbf24',
              padding: '10px 20px', borderRadius: '8px', fontWeight: 700, cursor: generatedLessons.length === 0 ? 'not-allowed' : 'pointer', transition: 'all 0.2s'
            }}>
            📥 تصدير JSON
          </button>

          <button 
            onClick={handlePublish}
            disabled={generatedLessons.length === 0 || qualityScore !== 100}
            style={{
              background: generatedLessons.length === 0 || qualityScore !== 100 ? 'rgba(255,255,255,0.05)' : 'linear-gradient(135deg, #10b981, #059669)',
              border: 'none', color: generatedLessons.length === 0 || qualityScore !== 100 ? '#64748b' : '#fff',
              padding: '10px 24px', borderRadius: '8px', fontWeight: 800, cursor: generatedLessons.length === 0 || qualityScore !== 100 ? 'not-allowed' : 'pointer', transition: 'all 0.2s'
            }}>
            🚀 نشر الكورس مباشرة
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '24px' }}>
        
        {/* Left/Right Sidebar: Configuration Panel */}
        <div style={{ background: 'rgba(15,15,20,0.6)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px', backdropFilter: 'blur(10px)' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#10b981', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            ⚙️ إعدادات الكورس
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: '#cbd5e1' }}>اسم الكورس</label>
              <input type="text" value={config.title} onChange={e => setConfig({...config, title: e.target.value})} placeholder="مثال: احتراف JavaScript" style={inputStyle} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: '#cbd5e1' }}>معرف المسار (Slug)</label>
                <input type="text" value={config.slug} onChange={e => setConfig({...config, slug: e.target.value})} placeholder="javascript-pro" style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: '#cbd5e1' }}>عدد الدروس</label>
                <input type="number" value={config.lessonCount} onChange={e => setConfig({...config, lessonCount: Number(e.target.value)})} style={inputStyle} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: '#cbd5e1' }}>المستوى</label>
                <select value={config.difficulty} onChange={e => setConfig({...config, difficulty: e.target.value})} style={inputStyle}>
                  <option value="beginner">مبتدئ</option>
                  <option value="intermediate">متوسط</option>
                  <option value="advanced">متقدم</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: '#cbd5e1' }}>لغة المحتوى</label>
                <select value={config.language} onChange={e => setConfig({...config, language: e.target.value})} style={inputStyle}>
                  <option value="arabic">العربية (Arabic)</option>
                  <option value="english">English</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: '#cbd5e1' }}>مزود الذكاء الاصطناعي</label>
              <select value={config.provider} onChange={e => setConfig({...config, provider: e.target.value})} style={{...inputStyle, border: '1px solid rgba(139, 92, 246, 0.5)', background: 'rgba(139, 92, 246, 0.05)'}}>
                <option value="openai">OpenAI (GPT-4o) - الموصى به</option>
                <option value="gemini">Google Gemini (1.5 Pro)</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: '#cbd5e1' }}>وصف قصير (Context Prompt)</label>
              <textarea value={config.description} onChange={e => setConfig({...config, description: e.target.value})} placeholder="ركز على بناء مشاريع حقيقية وتطبيقات ويب ديناميكية..." style={{...inputStyle, minHeight: '80px', resize: 'vertical'}} />
            </div>

            <div>
              <label style={{ marginBottom: '6px', fontSize: '0.9rem', color: '#cbd5e1', display: 'flex', justifyContent: 'space-between' }}>
                <span>مواضيع الدروس (موضوع لكل سطر)</span>
                <span style={{ color: '#10b981', fontSize: '0.8rem' }}>{config.topics.split('\n').filter(t => t.trim() !== '').length} موضوع</span>
              </label>
              <textarea 
                value={config.topics} 
                onChange={e => setConfig({...config, topics: e.target.value})} 
                placeholder="الدرس 1: المتغيرات\nالدرس 2: الدوال\n..." 
                style={{...inputStyle, minHeight: '200px', resize: 'vertical', fontFamily: 'monospace', lineHeight: 1.6}} 
              />
            </div>

            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              style={{
                background: isGenerating ? 'rgba(255,255,255,0.1)' : 'linear-gradient(135deg, #3b82f6, #2563eb)',
                color: '#fff', border: 'none', padding: '16px', borderRadius: '12px', fontWeight: 800,
                fontSize: '1.1rem', cursor: isGenerating ? 'wait' : 'pointer', marginTop: '10px',
                boxShadow: isGenerating ? 'none' : '0 10px 20px rgba(37, 99, 235, 0.3)',
                transition: 'all 0.3s'
              }}>
              {isGenerating ? `جاري التوليد... ${progress}%` : '✨ بدء توليد الكورس الكامل ✨'}
            </button>
            
            {isGenerating && (
              <div style={{ width: '100%', background: 'rgba(255,255,255,0.1)', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ height: '100%', background: '#10b981', width: `${progress}%`, transition: 'width 0.3s ease' }} />
              </div>
            )}
          </div>
        </div>

        {/* Generated Lessons Grid */}
        <div style={{ background: 'rgba(15,15,20,0.6)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px', backdropFilter: 'blur(10px)', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            📚 محتوى الكورس المولد
          </h2>

          <div style={{ flex: 1, overflowY: 'auto', paddingRight: '10px' }}>
            {generatedLessons.length === 0 ? (
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
                <div style={{ fontSize: '4rem', marginBottom: '16px', opacity: 0.5 }}>📝</div>
                <h3 style={{ margin: 0, fontWeight: 700 }}>لم يتم توليد أي دروس بعد</h3>
                <p style={{ fontSize: '0.9rem', marginTop: '8px' }}>قم بتعبئة المواضيع واضغط على بدء التوليد لبناء كورس متكامل.</p>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
                {generatedLessons.map((lesson, idx) => (
                  <div key={idx} style={{ 
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', 
                    borderRadius: '12px', padding: '16px', transition: 'all 0.2s',
                    display: 'flex', flexDirection: 'column', gap: '12px'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <h4 style={{ margin: 0, color: '#f1f5f9', fontSize: '1rem', fontWeight: 700, lineHeight: 1.4 }}>{lesson.title}</h4>
                      <span style={{ 
                        background: lesson.lesson_type === 'concept' ? 'rgba(59, 130, 246, 0.2)' : lesson.lesson_type === 'sandbox' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(139, 92, 246, 0.2)',
                        color: lesson.lesson_type === 'concept' ? '#60a5fa' : lesson.lesson_type === 'sandbox' ? '#34d399' : '#a78bfa',
                        padding: '4px 8px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 800
                      }}>
                        {lesson.lesson_type.toUpperCase()}
                      </span>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
                      <button style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: 'none', color: '#cbd5e1', padding: '8px', borderRadius: '6px', fontSize: '0.8rem', cursor: 'pointer', fontFamily: "'Cairo', sans-serif" }}>
                        👁️ معاينة وتعديل
                      </button>
                      <button style={{ background: 'rgba(239, 68, 68, 0.1)', border: 'none', color: '#f87171', padding: '8px 12px', borderRadius: '6px', fontSize: '0.8rem', cursor: 'pointer', fontFamily: "'Cairo', sans-serif" }} title="إعادة توليد هذا الدرس">
                        🔄
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>

      <style>{`
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }
      `}</style>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  background: 'rgba(0,0,0,0.3)',
  border: '1px solid rgba(255,255,255,0.1)',
  color: '#f8fafc',
  padding: '12px 16px',
  borderRadius: '8px',
  fontFamily: "'Cairo', sans-serif",
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'border-color 0.2s'
};
