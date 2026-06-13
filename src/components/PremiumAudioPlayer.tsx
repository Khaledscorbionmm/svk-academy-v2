'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function PremiumAudioPlayer({ src, title, textContent }: { src: string; title: string; textContent: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [charIndex, setCharIndex] = useState(0);
  const [wordLength, setWordLength] = useState(0);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const isTTS = !src || src.includes('SoundHelix') || src === '';
  
  // Clean HTML or parse JSON from text content
  const getCleanText = () => {
    if (!textContent) return '';
    try {
      const parsed = JSON.parse(textContent);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Flatten object values into a single readable string
        const values = Object.values(parsed[0]).filter(v => typeof v === 'string').join('. ');
        return values;
      }
    } catch(e) {}
    
    return textContent.replace(/<[^>]*>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
  };

  const cleanText = getCleanText();

  useEffect(() => {
    if (isTTS) {
      // Estimate duration based on word count (130 words per minute)
      const words = cleanText.trim().split(/\s+/).length;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDuration(Math.max(10, Math.round((words / 130) * 60)));
      setIsPlaying(false);
      setCurrentTime(0);
      setCharIndex(0);
      setWordLength(0);
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        typeof window !== 'undefined' && window.speechSynthesis && window.speechSynthesis.cancel();
      }
    } else if (audioRef.current) {
      setIsPlaying(false); setCurrentTime(0);
    }
  }, [src, textContent, cleanText, isTTS]);

  // Handle TTS speech boundary updates
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        typeof window !== 'undefined' && window.speechSynthesis && window.speechSynthesis.cancel();
      }
    };
  }, []);

  const togglePlay = () => {
    if (isTTS) {
      if (typeof window === 'undefined' || !window.speechSynthesis) {
        alert('متصفحك لا يدعم ميزة قراءة النصوص صوتياً');
        return;
      }

      if (isPlaying) {
        typeof window !== 'undefined' && window.speechSynthesis && window.speechSynthesis.pause();
        setIsPlaying(false);
      } else {
        if (typeof window !== 'undefined' && window.speechSynthesis && window.speechSynthesis.paused) {
          typeof window !== 'undefined' && window.speechSynthesis && window.speechSynthesis.resume();
          setIsPlaying(true);
        } else {
          typeof window !== 'undefined' && window.speechSynthesis && window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(cleanText);
          const hasArabic = /[\\u0600-\\u06FF]/.test(cleanText);
          utterance.lang = hasArabic ? 'ar-EG' : 'en-US';
          utterance.rate = 0.85 * playbackRate; // base speed adjusted by user rate
          
          const voices = typeof window !== 'undefined' && window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
          const targetLangPrefix = hasArabic ? 'ar' : 'en';
          const voice = voices.find(v => v.lang.startsWith(targetLangPrefix));
          if (voice) utterance.voice = voice;
          
          utterance.onend = () => {
            setIsPlaying(false);
            setCurrentTime(0);
            setCharIndex(0);
            setWordLength(0);
          };
          utterance.onerror = () => {
            setIsPlaying(false);
          };
          
          // Track speech progress roughly
          utterance.onboundary = (event) => {
            if (event.name === 'word') {
              const cIndex = event.charIndex;
              const totalChars = cleanText.length;
              setCharIndex(cIndex);
              setWordLength(event.charLength || 5);
              if (totalChars > 0) {
                const estimatedTime = (cIndex / totalChars) * duration;
                setCurrentTime(Math.min(duration, estimatedTime));
              }
            }
          };
          
          setIsPlaying(true);
          typeof window !== 'undefined' && window.speechSynthesis && window.speechSynthesis.speak(utterance);
        }
      }
    } else {
      if (!audioRef.current) return;
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const changeSpeed = () => {
    const rates = [1, 1.25, 1.5, 2];
    const nextRate = rates[(rates.indexOf(playbackRate) + 1) % rates.length];
    setPlaybackRate(nextRate);
    if (!isTTS && audioRef.current) {
      audioRef.current.playbackRate = nextRate;
    } else if (isTTS && isPlaying) {
      typeof window !== 'undefined' && window.speechSynthesis && window.speechSynthesis.cancel();
      setIsPlaying(false);
      setCharIndex(0);
      setWordLength(0);
      setCurrentTime(0);
    }
  };

  const handleTimeUpdate = () => {
    if (!isTTS && audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (!isTTS && audioRef.current) {
      setDuration(audioRef.current.duration);
      audioRef.current.playbackRate = playbackRate;
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setCurrentTime(val);
    if (!isTTS && audioRef.current) {
      audioRef.current.currentTime = val;
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Highlighting text slices
  const beforeText = cleanText.substring(0, charIndex);
  const highlightedText = cleanText.substring(charIndex, charIndex + wordLength);
  const afterText = cleanText.substring(charIndex + wordLength);

  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(16, 185, 129, 0.2)',
      borderRadius: '16px',
      padding: '16px 20px',
      marginBottom: '20px',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    }}>
      {!isTTS && (
        <audio
          ref={audioRef}
          src={src}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
        />
      )}
      
      {/* Title & Info */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.3rem', animation: isPlaying ? 'pulse 1.5s infinite' : 'none' }}>🎙️</span>
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#10b981' }}>
              {isTTS ? 'القارئ الذكي للدرس (AI Audio)' : 'الشرح الصوتي الأصلي'}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
              {isTTS ? 'تتبع النص المعروض بوضوح أثناء القراءة' : 'صوت عالي الجودة من المهندس'}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={changeSpeed} style={{
            fontSize: '0.7rem', padding: '4px 10px', background: 'rgba(59,130,246,0.15)',
            border: '1px solid rgba(59,130,246,0.3)', borderRadius: '20px', color: '#3b82f6', fontWeight: 800, cursor: 'pointer'
          }}>
            السرعة: {playbackRate}x
          </button>
          <span style={{
            fontSize: '0.7rem', padding: '4px 10px', background: isPlaying ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.05)',
            border: `1px solid ${isPlaying ? '#10b981' : 'rgba(255,255,255,0.1)'}`, borderRadius: '20px', color: isPlaying ? '#10b981' : '#94a3b8', fontWeight: 700
          }}>
            {isPlaying ? 'جاري التشغيل' : 'موقف'}
          </span>
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button
          onClick={togglePlay}
          style={{
            background: isPlaying ? 'rgba(239,68,68,0.15)' : 'rgba(16,185,129,0.15)',
            border: `1px solid ${isPlaying ? '#ef4444' : '#10b981'}`,
            color: isPlaying ? '#ef4444' : '#10b981',
            width: '40px', height: '40px',
            borderRadius: '50%',
            cursor: 'pointer', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1rem', transition: 'all 0.3s'
          }}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>

        {/* Progress Slider */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '10px', direction: 'ltr' }}>
          <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'monospace' }}>{formatTime(currentTime)}</span>
          <input
            type="range" min={0} max={duration || 100} value={currentTime} onChange={handleSeek}
            disabled={isTTS && isPlaying}
            style={{ flex: 1, height: '4px', borderRadius: '2px', background: 'rgba(255,255,255,0.1)', outline: 'none', cursor: isTTS && isPlaying ? 'not-allowed' : 'pointer', accentColor: '#10b981' }}
          />
          <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'monospace' }}>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Teleprompter Text Display */}
      {isTTS && cleanText && (
        <div style={{
          marginTop: '8px', padding: '12px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px',
          maxHeight: '100px', overflowY: 'auto', fontSize: '0.9rem', lineHeight: '1.6', color: '#94a3b8',
          borderLeft: '3px solid rgba(16,185,129,0.5)', scrollBehavior: 'smooth',
          direction: 'rtl', textAlign: 'right'
        }}>
          {isPlaying || charIndex > 0 ? (
            <>
              <span>{beforeText}</span>
              <span style={{ background: 'rgba(16,185,129,0.3)', color: '#fff', borderRadius: '4px', padding: '0 2px', fontWeight: 800, transition: 'all 0.1s' }}>
                {highlightedText}
              </span>
              <span>{afterText}</span>
            </>
          ) : (
            <span>{cleanText.length > 200 ? cleanText.substring(0, 200) + '...' : cleanText}</span>
          )}
        </div>
      )}
    </div>
  );
}
