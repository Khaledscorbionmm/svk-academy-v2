'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface QAData {
  courseName: string;
  totalLessons: number;
  validLessons: number;
  incompleteLessons: number;
  readinessScore: number;
  qualityScore: number;
  status: string;
}

interface QAResponse {
  qaData: QAData[];
  topCourses: QAData[];
  weakestCourses: QAData[];
}

export default function QADashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<QAResponse | null>(null);

  async function fetchQAData() {
    try {
      const res = await fetch('/api/admin/qa');
      if (res.ok) {
        const d = await res.json();
        setData(d);
      } else if (res.status === 403 || res.status === 401) {
        router.push('/admin/login');
      }
    } catch (e) {
      console.error('Failed to fetch QA data', e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchQAData();
  }, []);



  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#050508' }}>
        <div style={{ textAlign: 'center', color: '#10b981', fontFamily: 'Cairo, sans-serif' }}>
          <div style={{ width: '60px', height: '60px', border: '3px solid rgba(16,185,129,0.3)', borderTopColor: '#10b981', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 1rem' }} />
          <p>جاري فحص الجودة...</p>
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', fontFamily: "'Cairo', sans-serif", direction: 'rtl', minHeight: '100vh', background: '#050508' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#f8fafc', margin: 0 }}>
          مراقبة جودة الكورسات (QA Dashboard) 🕵️‍♂️
        </h1>
        <p style={{ color: '#64748b', margin: '0.25rem 0 0', fontSize: '0.9rem' }}>
          تحليل مباشر لمدى اكتمال وجودة المناهج التعليمية في SVK Academy.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
        
        {/* Top Courses */}
        <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '14px', overflow: 'hidden' }}>
          <div style={{ background: 'rgba(16,185,129,0.08)', padding: '1rem 1.5rem', borderBottom: '1px solid rgba(16,185,129,0.15)' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#10b981', margin: 0 }}>
              🏆 أفضل الكورسات جودةً (جاهزة للنشر)
            </h2>
          </div>
          <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {data?.topCourses.map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.04)' }}>
                <div>
                  <div style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '0.95rem' }}>{c.courseName}</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{c.validLessons} درس جاهز من أصل {c.totalLessons}</div>
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ color: '#10b981', fontWeight: 900, fontSize: '1.2rem' }}>{c.readinessScore}%</div>
                  <div style={{ color: '#64748b', fontSize: '0.75rem' }}>صلاحية للتعلم</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weakest Courses */}
        <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '14px', overflow: 'hidden' }}>
          <div style={{ background: 'rgba(239,68,68,0.08)', padding: '1rem 1.5rem', borderBottom: '1px solid rgba(239,68,68,0.15)' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#ef4444', margin: 0 }}>
              ⚠️ كورسات تحتاج اهتماماً عاجلاً
            </h2>
          </div>
          <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {data?.weakestCourses.map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.04)' }}>
                <div>
                  <div style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '0.95rem' }}>{c.courseName}</div>
                  <div style={{ color: '#ef4444', fontSize: '0.8rem' }}>{c.incompleteLessons} درس غير مكتمل!</div>
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ color: '#ef4444', fontWeight: 900, fontSize: '1.2rem' }}>{c.readinessScore}%</div>
                  <div style={{ color: '#64748b', fontSize: '0.75rem' }}>صلاحية للتعلم</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full QA Table */}
      <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ background: 'rgba(139,92,246,0.08)', padding: '1rem 1.5rem', borderBottom: '1px solid rgba(139,92,246,0.15)' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#a78bfa', margin: 0 }}>
            📋 التقرير التفصيلي لجميع المناهج
          </h2>
        </div>
        <div style={{ padding: '1rem', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
            <thead>
              <tr style={{ color: '#94a3b8', fontSize: '0.85rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <th style={{ padding: '1rem' }}>اسم الكورس</th>
                <th style={{ padding: '1rem' }}>إجمالي الدروس</th>
                <th style={{ padding: '1rem' }}>دروس صالحة</th>
                <th style={{ padding: '1rem' }}>دروس مسودة</th>
                <th style={{ padding: '1rem' }}>جودة المحتوى</th>
                <th style={{ padding: '1rem' }}>الحالة</th>
              </tr>
            </thead>
            <tbody>
              {data?.qaData.map((c, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.02)', color: '#f1f5f9', fontSize: '0.9rem' }}>
                  <td style={{ padding: '1rem', fontWeight: 700 }}>{c.courseName}</td>
                  <td style={{ padding: '1rem' }}>{c.totalLessons}</td>
                  <td style={{ padding: '1rem', color: '#10b981' }}>{c.validLessons}</td>
                  <td style={{ padding: '1rem', color: c.incompleteLessons > 0 ? '#ef4444' : '#64748b' }}>{c.incompleteLessons}</td>
                  <td style={{ padding: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '100px', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
                        <div style={{ width: `${c.qualityScore}%`, height: '100%', background: c.qualityScore >= 90 ? '#10b981' : c.qualityScore >= 50 ? '#f59e0b' : '#ef4444', borderRadius: '3px' }} />
                      </div>
                      <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{c.qualityScore}%</span>
                    </div>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{
                      padding: '4px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800,
                      background: c.status === 'ممتاز' ? 'rgba(16,185,129,0.15)' : c.status === 'يحتاج مراجعة' ? 'rgba(245,158,11,0.15)' : 'rgba(239,68,68,0.15)',
                      color: c.status === 'ممتاز' ? '#10b981' : c.status === 'يحتاج مراجعة' ? '#f59e0b' : '#ef4444',
                      border: `1px solid ${c.status === 'ممتاز' ? 'rgba(16,185,129,0.3)' : c.status === 'يحتاج مراجعة' ? 'rgba(245,158,11,0.3)' : 'rgba(239,68,68,0.3)'}`
                    }}>
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
