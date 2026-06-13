'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

export default function CertificatePage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { id: courseId } = use(params);

  // Extract names from query parameters
  const nameAr = searchParams.get('nameAr') || '';
  const nameEn = searchParams.get('nameEn') || '';

  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [course, setCourse] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [certDate, setCertDate] = useState('');

  useEffect(() => {
    // Format date in Arabic and English
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateAr = today.toLocaleDateString('ar-EG', options);
    const dateEn = today.toLocaleDateString('en-US', options);
    setCertDate(`${dateAr} - ${dateEn}`);

    async function verifyCompletion() {
      try {
        const res = await fetch('/api/student/dashboard');
        if (!res.ok) {
          setErrorMsg('يرجى تسجيل الدخول أولاً للوصول للشهادة');
          setLoading(false);
          return;
        }

        const data = await res.json();
        const targetCourse = data.courses?.find((c: any) => Number(c.id) === Number(courseId));

        if (!targetCourse) {
          setErrorMsg('لم يتم العثور على هذا الكورس في اشتراكاتك');
        } else if (targetCourse.progress !== 100) {
          setErrorMsg(`يجب إكمال الكورس بنسبة 100% أولاً للحصول على الشهادة. تقدمك الحالي هو ${targetCourse.progress || 0}%`);
        } else {
          setAuthorized(true);
          setCourse(targetCourse);
        }
      } catch (err) {
        console.error('Failed to verify certificate authorization:', err);
        setErrorMsg('حدث خطأ أثناء التحقق من صلاحية الشهادة');
      } finally {
        setLoading(false);
      }
    }

    verifyCompletion();
  }, [courseId]);

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: '#020205', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cairo', sans-serif" }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '50px', height: '50px', border: '3px solid rgba(16,185,129,0.1)', borderTopColor: '#10b981', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 16px' }} />
          <p style={{ color: '#94a3b8' }}>جاري تجهيز شهادتك الرسمية وتأكيد البيانات...</p>
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (errorMsg || !authorized) {
    return (
      <div style={{ minHeight: '100vh', background: '#020205', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', direction: 'rtl', fontFamily: "'Cairo', sans-serif" }}>
        <div style={{ maxWidth: '500px', width: '100%', background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '20px', padding: '30px', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>⚠️</div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f87171', marginBottom: '12px' }}>غير مصرح بالدخول للشهادة</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>{errorMsg}</p>
          <Link href="/dashboard" style={{ textDecoration: 'none' }}>
            <button style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '10px 24px', borderRadius: '10px', fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer', fontFamily: "'Cairo', sans-serif" }}>
              العودة للوحة التحكم
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // Generate a mock verification code based on course and name length
  const verificationCode = `SVK-${courseId}-${(nameAr.length + nameEn.length) * 7}-${(Number(courseId) * 11) % 9999}`;

  return (
    <div style={{ minHeight: '100vh', background: '#080810', padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cairo', system-ui, sans-serif" }} className="cert-page-container">
      {/* Action Buttons (Hidden during print) */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '30px', zIndex: 10 }} className="no-print">
        <button
          onClick={handlePrint}
          style={{
            background: 'linear-gradient(135deg, #fbbf24, #d97706)', border: 'none', color: '#000',
            padding: '12px 28px', borderRadius: '12px', fontSize: '0.95rem', fontWeight: 800,
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px',
            boxShadow: '0 8px 24px rgba(251,191,36,0.3)', transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          <span>🖨️</span>
          <span>طباعة الشهادة / حفظ كـ PDF</span>
        </button>

        <Link href="/dashboard" style={{ textDecoration: 'none' }}>
          <button
            style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff',
              padding: '12px 24px', borderRadius: '12px', fontSize: '0.95rem', fontWeight: 700,
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <span>🔙</span>
            <span>العودة للوحة التحكم</span>
          </button>
        </Link>
      </div>

      {/* Printable Certificate Frame */}
      <div 
        className="certificate-frame"
        style={{
          width: '100%',
          maxWidth: '1000px',
          aspectRatio: '1.414', // Standard landscape A4 ratio
          background: '#faf6eb', // Elegant ivory background
          border: '18px double #d4af37', // Large double gold border
          padding: '40px',
          boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
          position: 'relative',
          color: '#2a2415', // Deep rich charcoal/bronze text
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxSizing: 'border-box',
          backgroundImage: `
            radial-gradient(circle at 10% 10%, rgba(212, 175, 55, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 90% 90%, rgba(212, 175, 55, 0.05) 0%, transparent 50%)
          `
        }}
      >
        {/* Decorative Corner Borders */}
        <div style={{ position: 'absolute', top: '10px', left: '10px', width: '30px', height: '30px', borderTop: '3px solid #d4af37', borderLeft: '3px solid #d4af37' }} />
        <div style={{ position: 'absolute', top: '10px', right: '10px', width: '30px', height: '30px', borderTop: '3px solid #d4af37', borderRight: '3px solid #d4af37' }} />
        <div style={{ position: 'absolute', bottom: '10px', left: '10px', width: '30px', height: '30px', borderBottom: '3px solid #d4af37', borderLeft: '3px solid #d4af37' }} />
        <div style={{ position: 'absolute', bottom: '10px', right: '10px', width: '30px', height: '30px', borderBottom: '3px solid #d4af37', borderRight: '3px solid #d4af37' }} />

        {/* Certificate Header */}
        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid rgba(212, 175, 55, 0.15)', paddingBottom: '16px' }}>
          {/* Right Header: Arabic */}
          <div style={{ textAlign: 'right' }}>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#1e1b18', margin: '0 0 4px', letterSpacing: '1px' }}>أكاديمية SVK للبرمجة</h1>
            <p style={{ fontSize: '0.7rem', color: '#7a7060', margin: 0, fontWeight: 700 }}>التعليم التفاعلي الأول للشباب والأطفال</p>
          </div>
          
          {/* Logo Center */}
          <div style={{ fontSize: '2.5rem', width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, #d4af37, #aa7c11)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
            🎓
          </div>

          {/* Left Header: English */}
          <div style={{ textAlign: 'left', direction: 'ltr' }}>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#1e1b18', margin: '0 0 4px', letterSpacing: '1px', fontFamily: 'serif' }}>SVK ACADEMY</h1>
            <p style={{ fontSize: '0.65rem', color: '#7a7060', margin: 0, fontWeight: 700, fontFamily: 'sans-serif' }}>LEADER IN INTERACTIVE CODING EDUCATION</p>
          </div>
        </div>

        {/* Certificate Title */}
        <div style={{ textAlign: 'center', margin: '14px 0' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#aa7c11', margin: '0 0 4px', letterSpacing: '2px' }}>شهادة إتمام كورس تدريبي</h2>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#7a7060', margin: 0, letterSpacing: '1px', fontFamily: 'serif' }}>CERTIFICATE OF COMPLETION</h3>
        </div>

        {/* Award Statement */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ fontSize: '0.9rem', color: '#5c5446', fontWeight: 600 }}>
            تمنح الأكاديمية هذه الشهادة تقديراً واعتزازاً بالطالب / الطالبة:
          </div>
          
          {/* Student Name Arabic */}
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#1a1005', borderBottom: '1px dashed rgba(212,175,55,0.4)', width: 'fit-content', margin: '0 auto', padding: '0 20px', letterSpacing: '1px' }}>
            {nameAr}
          </div>

          <div style={{ fontSize: '0.8rem', color: '#7a7060', fontWeight: 700, fontFamily: 'serif' }}>
            This certificate is proudly presented to:
          </div>
          
          {/* Student Name English */}
          <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1a1005', fontFamily: 'serif', borderBottom: '1px dashed rgba(212,175,55,0.4)', width: 'fit-content', margin: '0 auto', padding: '0 20px' }}>
            {nameEn}
          </div>

          <div style={{ fontSize: '0.9rem', color: '#5c5446', fontWeight: 600, marginTop: '8px' }}>
            لاجتيازه بنجاح وتفوق الكورس التدريبي التفاعلي:
          </div>
          
          {/* Course Title (Arabic & English) */}
          <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#aa7c11', margin: '4px 0' }}>
            {course?.title_ar || course?.title}
          </div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#2a2415', fontFamily: 'serif', margin: '0 0 4px' }}>
            {course?.title}
          </div>
        </div>

        {/* Bottom Section: Signatures & Seal */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '16px' }}>
          {/* Right: Signature */}
          <div style={{ textAlign: 'center', width: '220px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: '1.6rem', fontFamily: "'Brush Script MT', 'Courier New', cursive", color: '#3d301b', marginBottom: '2px', borderBottom: '1px solid #7a7060', width: '100%', paddingBottom: '4px' }}>
              Khaled Ahmed
            </div>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#1e1b18' }}>م. خالد أحمد</div>
            <div style={{ fontSize: '0.65rem', color: '#7a7060', fontWeight: 700 }}>مؤسس ومشرف أكاديمية SVK</div>
          </div>

          {/* Center: Gold Badge Seal */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '90px', height: '90px' }}>
            {/* Ribbon 1 */}
            <div style={{ position: 'absolute', width: '24px', height: '60px', background: '#d4af37', transform: 'rotate(25deg)', bottom: '-15px', right: '15px', borderRadius: '0 0 4px 4px', clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 80%, 0% 100%)' }} />
            {/* Ribbon 2 */}
            <div style={{ position: 'absolute', width: '24px', height: '60px', background: '#aa7c11', transform: 'rotate(-25deg)', bottom: '-15px', left: '15px', borderRadius: '0 0 4px 4px', clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 80%, 0% 100%)' }} />
            {/* Gold Circle Seal */}
            <div style={{
              width: '75px', height: '75px', borderRadius: '50%',
              background: 'radial-gradient(circle, #f9f5eb 10%, #d4af37 40%, #aa7c11 100%)',
              border: '4px dotted #f9f5eb',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 2, position: 'relative'
            }}>
              <span style={{ fontSize: '1.4rem' }}>🏆</span>
            </div>
          </div>

          {/* Left: Date & Verification */}
          <div style={{ textAlign: 'left', width: '240px', direction: 'ltr' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1e1b18', borderBottom: '1px solid #7a7060', paddingBottom: '6px', marginBottom: '4px' }}>
              {certDate}
            </div>
            <div style={{ fontSize: '0.65rem', color: '#7a7060', fontWeight: 700 }}>تاريخ الإصدار / Date of Issue</div>
            <div style={{ fontSize: '0.6rem', color: '#9d8e78', marginTop: '6px', fontFamily: 'monospace', fontWeight: 'bold' }}>
              ID: {verificationCode}
            </div>
          </div>
        </div>
      </div>

      {/* Global CSS for Screen and Print styling */}
      <style>{`
        /* Print Styles */
        @media print {
          body, html {
            background: #fff !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .no-print {
            display: none !important;
          }
          .cert-page-container {
            background: #fff !important;
            padding: 0 !important;
            margin: 0 !important;
            min-height: auto !important;
            display: block !important;
          }
          .certificate-frame {
            box-shadow: none !important;
            border-color: #d4af37 !important;
            margin: 0 auto !important;
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
          }
          @page {
            size: A4 landscape;
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
}
