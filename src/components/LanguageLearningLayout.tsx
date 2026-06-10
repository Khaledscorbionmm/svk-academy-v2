'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

function LightAudioPlayer({ src, title, textContent }: { src: string; title: string; textContent: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const isTTS = !src || src.includes('SoundHelix') || src === '';

  const getCleanText = () => {
    if (!textContent) return '';
    return textContent.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  };

  useEffect(() => {
    if (isTTS) {
      const clean = getCleanText();
      const words = clean.trim().split(/\s+/).length;
      setDuration(Math.max(10, Math.round((words / 130) * 60)));
      setIsPlaying(false);
      setCurrentTime(0);
    } else if (audioRef.current) {
      audioRef.current.src = src;
      setIsPlaying(false);
      setCurrentTime(0);
    }
  }, [src, textContent]);

  const togglePlay = () => {
    if (isTTS) {
      if (typeof window === 'undefined' || !window.speechSynthesis) return;
      if (isPlaying) {
        window.speechSynthesis.pause();
        setIsPlaying(false);
      } else {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
          setIsPlaying(true);
        } else {
          window.speechSynthesis.cancel();
          const cleanText = getCleanText();
          const utterance = new SpeechSynthesisUtterance(cleanText);
          utterance.lang = 'ar-EG';
          utterance.rate = 0.95;
          const voices = window.speechSynthesis.getVoices();
          const arVoice = voices.find(v => v.lang.startsWith('ar'));
          if (arVoice) utterance.voice = arVoice;

          utterance.onend = () => { setIsPlaying(false); setCurrentTime(0); };
          utterance.onerror = () => { setIsPlaying(false); };
          
          utterance.onboundary = (event) => {
            if (event.name === 'word') {
              const charIndex = event.charIndex;
              const totalChars = cleanText.length;
              if (totalChars > 0) {
                setCurrentTime(Math.min(duration, (charIndex / totalChars) * duration));
              }
            }
          };
          
          setIsPlaying(true);
          window.speechSynthesis.speak(utterance);
        }
      }
    } else {
      if (!audioRef.current) return;
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (!isTTS && audioRef.current) setCurrentTime(audioRef.current.currentTime);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div style={{ background: '#f1f5f9', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', border: '1px solid #e2e8f0' }}>
      {!isTTS && <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)} onEnded={() => setIsPlaying(false)} />}
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1e293b' }}>
          {isTTS ? 'النطق الذكي (AI Reader)' : 'التسجيل الصوتي للدرس'}
        </div>
        {isPlaying && <div style={{ display: 'flex', gap: '3px' }}>
          {[1,2,3,4].map(i => (
            <div key={i} style={{ width: '3px', height: '12px', background: '#3b82f6', borderRadius: '2px', animation: `bounce 1s infinite ${i*0.1}s` }} />
          ))}
        </div>}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button onClick={togglePlay} style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#3b82f6', border: 'none', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0, boxShadow: '0 4px 10px rgba(59, 130, 246, 0.3)' }}>
          {isPlaying ? '⏸' : '▶'}
        </button>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px', direction: 'ltr' }}>
          <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>{formatTime(currentTime)}</span>
          <div style={{ flex: 1, height: '6px', background: '#cbd5e1', borderRadius: '3px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', background: '#3b82f6', width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`, borderRadius: '3px' }} />
          </div>
          <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}

function LightVideoPlayer({ src }: { src: string }) {
  if (!src) return (
    <div style={{ aspectRatio: '16/9', background: '#e2e8f0', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', fontWeight: 600 }}>
      الفيديو غير متاح
    </div>
  );

  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const ytId = getYouTubeId(src);
  let embedUrl = src;
  if (ytId) embedUrl = `https://www.youtube.com/embed/${ytId}`;

  return (
    <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', background: '#000', position: 'relative' }}>
      {ytId ? (
        <iframe src={embedUrl} style={{ width: '100%', height: '100%', border: 'none' }} allowFullScreen />
      ) : (
        <video src={src} controls style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      )}
      <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(239, 68, 68, 0.9)', color: '#fff', padding: '4px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1px' }}>
        LIVE 🔴
      </div>
    </div>
  );
}

export default function LanguageLearningLayout({ data }: { data: any }) {
  const { lesson, course, sidebar: sideLessons, accessStatus, studentInfo, hasRequested } = data;
  const [requesting, setRequesting] = useState(false);
  const [requestedLocal, setRequestedLocal] = useState(hasRequested);

  const currentIdx = sideLessons.findIndex((l: any) => Number(l.id) === Number(lesson.id));
  const progressPercent = Math.round(((currentIdx + 1) / sideLessons.length) * 100);

  const handleRequest = async () => {
    setRequesting(true);
    try {
      const res = await fetch('/api/courses/request-activation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId: course.id })
      });
      if (res.ok) setRequestedLocal(true);
    } catch (e) {
      console.error(e);
    } finally {
      setRequesting(false);
    }
  };

  // Multiple Choice Quiz State (Sample extracted from text_content or default)
  const [selectedAns, setSelectedAns] = useState<number | null>(null);

  // If Locked
  if (accessStatus === 'locked') {
    return (
      <div style={{ fontFamily: "'Cairo', sans-serif", background: '#f8fafc', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', direction: 'rtl' }}>
        <div style={{ background: '#fff', borderRadius: '24px', padding: '40px', maxWidth: '600px', width: '100%', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.08)', textAlign: 'center', border: '1px solid #e2e8f0' }}>
          <div style={{ width: '80px', height: '80px', background: '#fef2f2', color: '#ef4444', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', margin: '0 auto 24px' }}>🔒</div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#0f172a', marginBottom: '16px' }}>الفصل محمي ومخصص للمشتركين</h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '32px' }}>
            لقد أنهيت الجزء المجاني بنجاح! لمتابعة طريقك نحو إتقان اللغة وفتح جميع الدروس والاختبارات، يرجى تفعيل اشتراكك في الكورس.
          </p>
          
          {requestedLocal ? (
            <div style={{ background: '#ecfdf5', color: '#10b981', padding: '16px', borderRadius: '12px', fontWeight: 700, marginBottom: '20px' }}>
              ✓ تم إرسال طلب التفعيل بنجاح!
            </div>
          ) : (
            <button onClick={handleRequest} disabled={requesting} style={{ width: '100%', background: '#f1f5f9', color: '#0f172a', padding: '16px', borderRadius: '12px', border: '1px solid #cbd5e1', fontWeight: 800, fontSize: '1.1rem', cursor: 'pointer', marginBottom: '16px', transition: 'all 0.2s' }}>
              {requesting ? 'جاري الإرسال...' : '🔑 طلب التفعيل من الأكاديمية'}
            </button>
          )}

          <a href={`https://wa.me/201034009418?text=${encodeURIComponent(`مرحباً أريد تفعيل كورس اللغات: ${course.title_ar || course.title}`)}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <button style={{ width: '100%', background: '#25d366', color: '#fff', padding: '16px', borderRadius: '12px', border: 'none', fontWeight: 800, fontSize: '1.1rem', cursor: 'pointer', boxShadow: '0 10px 15px -3px rgba(37, 211, 102, 0.3)' }}>
              💬 تواصل عبر الواتساب للتفعيل الفوري
            </button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Cairo', sans-serif", direction: 'rtl', background: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column', color: '#0f172a' }}>
      
      {/* HEADER */}
      <header style={{ background: '#fff', borderBottom: '1px solid #e2e8f0', padding: '0 24px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ fontWeight: 900, fontSize: '1.2rem', color: '#1e3a8a', letterSpacing: '0.5px' }}>
            SVK Academy <span style={{ color: '#3b82f6' }}>Languages</span>
          </div>
        </div>
        <div style={{ fontWeight: 800, fontSize: '1rem', color: '#334155' }}>
          {course.title_ar || course.title}
        </div>
        <Link href={`/courses/${course.id}`} style={{ textDecoration: 'none' }}>
          <button style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', color: '#475569', padding: '8px 16px', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem' }}>
            عودة للكورس
          </button>
        </Link>
      </header>

      {/* MAIN DASHBOARD */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden', padding: '24px', gap: '24px', maxWidth: '1600px', margin: '0 auto', width: '100%' }}>
        
        {/* LEFT: TIMELINE (OUR INTEGRATED APPROACH) */}
        <aside style={{ width: '300px', background: '#fff', borderRadius: '20px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', overflow: 'hidden', flexShrink: 0, boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
          <div style={{ background: '#1e3a8a', padding: '16px', color: '#fff', textAlign: 'center', fontWeight: 800, fontSize: '1.1rem' }}>
            COURSE SYLLABUS
          </div>
          <div style={{ padding: '24px 20px', overflowY: 'auto', flex: 1, position: 'relative' }}>
            {/* Vertical Line */}
            <div style={{ position: 'absolute', right: '35px', top: '24px', bottom: '24px', width: '2px', background: '#e2e8f0', zIndex: 1 }} />
            
            {sideLessons.map((l: any, idx: number) => {
              const isActive = Number(l.id) === Number(lesson.id);
              const isPast = idx < currentIdx;
              
              return (
                <Link key={l.id} href={`/learn/${l.id}`} style={{ textDecoration: 'none', display: 'block', position: 'relative', zIndex: 2, marginBottom: '24px' }}>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    {/* Circle */}
                    <div style={{ 
                      width: '32px', height: '32px', borderRadius: '50%', background: isActive ? '#3b82f6' : (isPast ? '#10b981' : '#fff'), 
                      border: `2px solid ${isActive ? '#3b82f6' : (isPast ? '#10b981' : '#cbd5e1')}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold', fontSize: '0.8rem',
                      boxShadow: isActive ? '0 0 0 4px rgba(59, 130, 246, 0.2)' : 'none', flexShrink: 0, marginTop: '4px'
                    }}>
                      {isPast ? '✓' : idx + 1}
                    </div>
                    {/* Content */}
                    <div style={{ 
                      background: isActive ? '#f8fafc' : 'transparent', border: isActive ? '1px solid #e2e8f0' : 'none', 
                      padding: isActive ? '12px 16px' : '8px 0', borderRadius: '12px', flex: 1,
                      boxShadow: isActive ? '0 4px 6px -1px rgba(0,0,0,0.05)' : 'none'
                    }}>
                      <div style={{ fontWeight: isActive ? 800 : 600, color: isActive ? '#0f172a' : '#64748b', fontSize: '0.95rem', lineHeight: 1.4 }}>
                        {l.title}
                      </div>
                      {isActive && <div style={{ fontSize: '0.75rem', color: '#3b82f6', marginTop: '6px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span>▶</span> جاري التعلم
                      </div>}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </aside>

        {/* CENTER: MAIN LEARNING AREA */}
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px', overflowY: 'auto', paddingRight: '4px' }}>
          
          {/* Header Title inside Content */}
          <div style={{ background: '#fff', borderRadius: '20px', padding: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#1e293b', margin: '0 0 8px' }}>
              الدرس الحالي: {lesson.title}
            </h1>
            <p style={{ color: '#64748b', fontSize: '0.95rem', margin: 0 }}>شاهد الشرح بتركيز، ثم انتقل للتطبيقات العملية بالأسفل.</p>
          </div>

          {/* Video Player */}
          {lesson.video_url && (
            <LightVideoPlayer src={lesson.video_url} />
          )}

          {/* Explanation Text */}
          <div style={{ background: '#fff', borderRadius: '20px', padding: '32px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1e3a8a', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>📖</span> القراءة والمفردات
            </h2>
            <div dangerouslySetInnerHTML={{ __html: lesson.text_content }} style={{ lineHeight: 1.9, fontSize: '1.05rem', color: '#334155' }} />
          </div>

          {/* Interactive Quiz / Practice */}
          <div style={{ background: '#fff', borderRadius: '20px', padding: '32px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#10b981', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>🎯</span> اختبر فهمك (Vocabulary Practice)
            </h2>
            <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <p style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0f172a', marginBottom: '20px' }}>
                1. بناءً على ما تعلمته اليوم، أي من هذه الكلمات تعبر بشكل صحيح عن الموضوع؟
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {['الخيار الأول: ممتاز', 'الخيار الثاني: جيد', 'الخيار الثالث: صحيح', 'الخيار الرابع: خطأ'].map((opt, i) => (
                  <button 
                    key={i} 
                    onClick={() => setSelectedAns(i)}
                    style={{ 
                      padding: '16px', borderRadius: '12px', border: selectedAns === i ? '2px solid #3b82f6' : '1px solid #cbd5e1', 
                      background: selectedAns === i ? '#eff6ff' : '#fff', color: '#334155', fontWeight: 600, 
                      textAlign: 'right', cursor: 'pointer', transition: 'all 0.2s', fontSize: '1rem'
                    }}
                  >
                    <span style={{ display: 'inline-block', width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #cbd5e1', background: selectedAns === i ? '#3b82f6' : '#fff', verticalAlign: 'middle', marginLeft: '10px' }} />
                    {opt}
                  </button>
                ))}
              </div>
              <div style={{ marginTop: '24px', textAlign: 'center' }}>
                <button style={{ background: '#10b981', color: '#fff', border: 'none', padding: '12px 32px', borderRadius: '10px', fontWeight: 800, fontSize: '1rem', cursor: 'pointer', boxShadow: '0 4px 6px rgba(16, 185, 129, 0.3)' }}>
                  التحقق من الإجابة
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* RIGHT: RESOURCES HUB */}
        <aside style={{ width: '340px', display: 'flex', flexDirection: 'column', gap: '24px', flexShrink: 0, overflowY: 'auto', paddingRight: '4px' }}>
          
          {/* Progress Chart Card */}
          <div style={{ background: '#fff', borderRadius: '20px', padding: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#1e293b', marginBottom: '16px' }}>التقدم العام (My Progress)</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: `conic-gradient(#10b981 ${progressPercent}%, #e2e8f0 0)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.2rem', color: '#0f172a' }}>
                  {progressPercent}%
                </div>
              </div>
              <div>
                <div style={{ fontWeight: 800, color: '#10b981' }}>مستوى ممتاز</div>
                <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '4px' }}>لقد أكملت {currentIdx} من {sideLessons.length} دروس.</div>
              </div>
            </div>
          </div>

          {/* Listening Practice Hub */}
          <div style={{ background: '#fff', borderRadius: '20px', padding: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#1e293b', marginBottom: '16px', textTransform: 'uppercase' }}>Listening Practice Hub</h3>
            <LightAudioPlayer src={lesson.audio_url || ''} title={lesson.title} textContent={lesson.text_content || ''} />
          </div>

          {/* Downloadables */}
          <div style={{ background: '#fff', borderRadius: '20px', padding: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#1e293b', marginBottom: '16px', textTransform: 'uppercase' }}>Downloadables</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[1, 2].map(i => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f8fafc', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '1.2rem' }}>📄</span>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>ملخص الدرس {i}</div>
                      <div style={{ fontSize: '0.7rem', color: '#64748b' }}>PDF Document</div>
                    </div>
                  </div>
                  <button style={{ background: 'transparent', border: 'none', color: '#3b82f6', fontSize: '1.2rem', cursor: 'pointer' }}>⬇</button>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div style={{ background: '#fff', borderRadius: '20px', padding: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#1e293b', marginBottom: '16px', textTransform: 'uppercase' }}>Achievements</h3>
            <button style={{ width: '100%', background: '#1e3a8a', color: '#fff', border: 'none', padding: '12px', borderRadius: '10px', fontWeight: 700, marginBottom: '16px', cursor: 'pointer' }}>
              تحميل الشهادة (عند الإتمام)
            </button>
            <div style={{ height: '120px', background: '#f1f5f9', borderRadius: '12px', border: '2px dashed #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', fontSize: '0.85rem', fontWeight: 600 }}>
              معاينة الشهادة غير متاحة
            </div>
          </div>

        </aside>
      </div>

    </div>
  );
}
