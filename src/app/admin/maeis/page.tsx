'use client';

import { useState, useEffect } from 'react';

export default function MaeisDashboard() {
  const [reports, setReports] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('python');
  const [lessonIndex, setLessonIndex] = useState(0);

  const fetchReports = async () => {
    try {
      const res = await fetch('/api/admin/maeis/reports');
      if (res.ok) {
        const data = await res.json();
        setReports(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  const handleRunSimulation = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/maeis/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ track: selectedTrack, lessonIndex: Number(lessonIndex) })
      });
      if (res.ok) {
        await fetchReports();
        alert('MAEIS Simulation completed successfully!');
      } else {
        alert('Simulation failed.');
      }
    } catch (e) {
      console.error(e);
      alert('Simulation error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', direction: 'rtl', minHeight: '100vh', background: '#0f172a', color: '#fff', fontFamily: "'Cairo', sans-serif" }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span>🤖</span> لوحة تحكم الذكاء التعليمي متعدد الوكلاء (MAEIS)
      </h1>
      <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
        قم بتشغيل 10 وكلاء ذكاء اصطناعي (طلاب وخبراء) لتقييم درس معين واستخراج نقاط الضعف والمقترحات.
      </p>

      <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>تشغيل المحاكاة الحية (Live Simulation)</h2>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end', flexWrap: 'wrap' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>المسار</label>
            <select 
              value={selectedTrack} 
              onChange={e => setSelectedTrack(e.target.value)}
              style={{ padding: '0.8rem', borderRadius: '8px', background: '#1e293b', color: '#fff', border: '1px solid #334155', outline: 'none' }}
            >
              <option value="python">بايثون</option>
              <option value="cyber">أمن سيبراني</option>
              <option value="languages">لغات</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>رقم الدرس (Index)</label>
            <input 
              type="number" 
              value={lessonIndex} 
              onChange={e => setLessonIndex(parseInt(e.target.value))}
              min={0}
              style={{ padding: '0.8rem', borderRadius: '8px', background: '#1e293b', color: '#fff', border: '1px solid #334155', outline: 'none', width: '100px' }}
            />
          </div>
          <button 
            onClick={handleRunSimulation}
            disabled={loading}
            style={{ padding: '0.8rem 2rem', borderRadius: '8px', background: loading ? '#475569' : '#3b82f6', color: '#fff', border: 'none', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer' }}
          >
            {loading ? 'الوكلاء يقومون بالتحليل...' : 'بدء محاكاة الوكلاء 🚀'}
          </button>
        </div>
      </div>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>تقارير الجودة (MAEIS Reports)</h2>
      
      {reports.length === 0 && <p style={{ color: '#94a3b8' }}>لا يوجد تقارير حالياً. قم بتشغيل محاكاة جديدة.</p>}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {reports.map((r, i) => (
          <div 
            key={i} 
            style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#38bdf8' }}>المسار: {r.track} | الدرس: {r.lessonId}</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{new Date(r.timestamp).toLocaleString('ar-EG')}</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <ScoreCard title="الوضوح" score={r.scores.clarity} />
              <ScoreCard title="التفاعل" score={r.scores.engagement} />
              <ScoreCard title="الصعوبة" score={r.scores.difficulty} />
              <ScoreCard title="تثبيت المعلومات" score={r.scores.retention} />
              <ScoreCard title="ملائمة المبتدئين" score={r.scores.beginnerFriendliness} />
              <ScoreCard title="القيمة الاحترافية" score={r.scores.professionalValue} />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fbbf24', marginBottom: '0.5rem' }}>ملخص مناظرة الخبراء:</h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px' }}>
                {r.debateSummary}
              </p>
            </div>

            {r.issues && r.issues.length > 0 && (
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#f87171', marginBottom: '0.5rem' }}>المشاكل والمقترحات:</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {r.issues.map((iss: any, j: number) => (
                    <div key={j} style={{ background: 'rgba(239,68,68,0.1)', borderLeft: '4px solid #ef4444', padding: '1rem', borderRadius: '4px' }}>
                      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span style={{ fontWeight: 800, color: '#fca5a5' }}>[{iss.severity}]</span>
                        <strong style={{ color: '#fff' }}>{iss.problem}</strong>
                      </div>
                      <p style={{ color: '#fca5a5', fontSize: '0.9rem', marginBottom: '0.5rem' }}>السبب: {iss.reason}</p>
                      <p style={{ color: '#86efac', fontSize: '0.9rem' }}>💡 الحل المقترح: {iss.recommendedFix}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ScoreCard({ title, score }: { title: string; score: number }) {
  const color = score >= 80 ? '#4ade80' : score >= 50 ? '#fbbf24' : '#f87171';
  return (
    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '12px', minWidth: '120px', textAlign: 'center' }}>
      <h4 style={{ color: '#cbd5e1', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{title}</h4>
      <div style={{ color, fontSize: '1.5rem', fontWeight: 900 }}>{score}%</div>
    </div>
  );
}
