'use client';

import { useState, useEffect, useRef } from 'react';

export default function AmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  
  // Web Audio nodes refs
  const audioCtxRef = useRef<AudioContext | null>(null);
  const silentAudioRef = useRef<HTMLAudioElement | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodesRef = useRef<GainNode[]>([]);
  const masterGainRef = useRef<GainNode | null>(null);
  const lfoRef = useRef<OscillatorNode | null>(null);
  const lfoGainRef = useRef<GainNode | null>(null);
  const filterRef = useRef<BiquadFilterNode | null>(null);
  
  // Track explicit user pause to avoid auto-resuming
  const isExplicitlyPausedRef = useRef<boolean>(false);

  const startAmbient = () => {
    try {
      // Unmute iOS silent switch by playing a silent WAV in HTML5 audio (switches to media channel)
      if (!silentAudioRef.current) {
        const audio = new Audio();
        audio.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAAAD';
        audio.loop = true;
        audio.setAttribute('x-webkit-airplay', 'deny');
        audio.setAttribute('playsinline', 'true');
        silentAudioRef.current = audio;
      }
      silentAudioRef.current.play().catch(err => {
        console.warn('Silent audio play blocked:', err);
      });

      if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
        setIsPlaying(true);
        try {
          localStorage.setItem('svk_music_enabled', 'true');
        } catch (e) {}
        return;
      }

      if (audioCtxRef.current) return;

      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      // Low pass filter to make the sound warm and soft
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, ctx.currentTime);
      filter.Q.setValueAtTime(1, ctx.currentTime);
      filterRef.current = filter;

      // Master gain node
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.0, ctx.currentTime); // Start silent for fade-in
      masterGainRef.current = masterGain;

      // Connections
      filter.connect(masterGain);
      masterGain.connect(ctx.destination);

      // Frequencies for a lush 369Hz pad chord
      const baseFreq = 369;
      const voices = [
        { freq: baseFreq, type: 'sine' as const, gain: 0.15 },       // Root 369Hz
        { freq: baseFreq / 2, type: 'triangle' as const, gain: 0.2 }, // Sub-octave 184.5Hz for depth
        { freq: baseFreq * 1.5, type: 'sine' as const, gain: 0.08 },  // Perfect fifth 553.5Hz for harmony
        { freq: baseFreq + 4, type: 'sine' as const, gain: 0.04 }     // 4Hz offset in other channel for binaural beat
      ];

      oscillatorsRef.current = [];
      gainNodesRef.current = [];

      voices.forEach(voice => {
        const osc = ctx.createOscillator();
        osc.type = voice.type;
        osc.frequency.setValueAtTime(voice.freq, ctx.currentTime);

        const vGain = ctx.createGain();
        vGain.gain.setValueAtTime(voice.gain, ctx.currentTime);

        osc.connect(vGain);
        vGain.connect(filter);

        osc.start();

        oscillatorsRef.current.push(osc);
        gainNodesRef.current.push(vGain);
      });

      // LFO for slow swelling/breathing effect
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.07, ctx.currentTime); // Slow cycle: ~14 seconds

      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(0.04, ctx.currentTime); // Modulate MasterGain by +/- 0.04

      lfo.connect(lfoGain);
      lfoGain.connect(masterGain.gain);

      lfo.start();

      lfoRef.current = lfo;
      lfoGainRef.current = lfoGain;

      // Fade-in master volume slowly to avoid clicks
      masterGain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 3.0); // 3 seconds fade-in

      setIsPlaying(true);
      try {
        localStorage.setItem('svk_music_enabled', 'true');
      } catch (e) {}
    } catch (e) {
      console.error('Failed to start ambient audio:', e);
    }
  };

  const stopAmbient = () => {
    if (!audioCtxRef.current) return;

    // Fade-out master gain
    if (masterGainRef.current) {
      try {
        masterGainRef.current.gain.setValueAtTime(masterGainRef.current.gain.value, audioCtxRef.current.currentTime);
        masterGainRef.current.gain.linearRampToValueAtTime(0.0, audioCtxRef.current.currentTime + 1.5); // 1.5s fade-out
      } catch (e) {
        console.error(e);
      }
    }

    // Terminate nodes after fade-out completes
    setTimeout(() => {
      stopAmbientImmediate();
    }, 1600);
  };

  const stopAmbientImmediate = () => {
    try {
      if (silentAudioRef.current) {
        try { silentAudioRef.current.pause(); } catch {}
      }
      if (oscillatorsRef.current) {
        oscillatorsRef.current.forEach(osc => {
          try { osc.stop(); } catch {}
        });
      }
      if (lfoRef.current) {
        try { lfoRef.current.stop(); } catch {}
      }
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close();
      }
    } catch (e) {
      console.error(e);
    }

    audioCtxRef.current = null;
    oscillatorsRef.current = [];
    gainNodesRef.current = [];
    masterGainRef.current = null;
    lfoRef.current = null;
    lfoGainRef.current = null;
    filterRef.current = null;
    setIsPlaying(false);
  };

  const handleToggle = () => {
    if (isPlaying) {
      isExplicitlyPausedRef.current = true;
      try {
        localStorage.setItem('svk_music_explicitly_paused', 'true');
      } catch (e) {}
      stopAmbient();
    } else {
      isExplicitlyPausedRef.current = false;
      try {
        localStorage.setItem('svk_music_explicitly_paused', 'false');
      } catch (e) {}
      startAmbient();
    }
  };

  useEffect(() => {
    // Check localStorage for prior preference
    let explicitlyPaused = null;
    try {
      const saved = localStorage.getItem('svk_music_enabled');
      explicitlyPaused = localStorage.getItem('svk_music_explicitly_paused');
    } catch (e) {
      console.warn('LocalStorage not supported:', e);
    }
    
    if (explicitlyPaused === 'true') {
      isExplicitlyPausedRef.current = true;
    }

    // Try to auto-start on first click/touchstart if not explicitly paused
    const handleAutoPlay = () => {
      setHasInteracted(true);
      if (!isExplicitlyPausedRef.current && !isPlaying) {
        startAmbient();
      }
      // Clean up listeners
      window.removeEventListener('click', handleAutoPlay);
      window.removeEventListener('touchstart', handleAutoPlay);
    };

    window.addEventListener('click', handleAutoPlay);
    window.addEventListener('touchstart', handleAutoPlay);

    return () => {
      window.removeEventListener('click', handleAutoPlay);
      window.removeEventListener('touchstart', handleAutoPlay);
      stopAmbientImmediate();
    };
  }, []);

  // Resume audio context on tab visibility change if it was active
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && isPlaying) {
        if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
          audioCtxRef.current.resume().catch(e => console.log('Auto-resume failed:', e));
        }
        if (silentAudioRef.current) {
          silentAudioRef.current.play().catch(e => console.log('Silent audio resume failed:', e));
        }
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPlaying]);

  return (
    <>
      <div 
        onClick={handleToggle}
        title="موسيقى مهدئة لزيادة التركيز (تردد 369 هرتز)"
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: isPlaying ? 'rgba(16, 185, 129, 0.15)' : 'rgba(15, 23, 42, 0.6)',
          border: `1px solid ${isPlaying ? '#10b981' : 'rgba(255, 255, 255, 0.1)'}`,
          backdropFilter: 'blur(12px)',
          boxShadow: isPlaying ? '0 0 15px rgba(16, 185, 129, 0.4)' : '0 10px 25px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 9999,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          userSelect: 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08)';
          if (isPlaying) {
            e.currentTarget.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.6)';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          if (isPlaying) {
            e.currentTarget.style.boxShadow = '0 0 15px rgba(16, 185, 129, 0.4)';
          }
        }}
      >
        {isPlaying ? (
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '18px' }}>
            <div className="bar" style={{ width: '3px', height: '18px', background: '#10b981', borderRadius: '2px', animation: 'eq-bounce 0.8s ease infinite alternate' }} />
            <div className="bar" style={{ width: '3px', height: '18px', background: '#10b981', borderRadius: '2px', animation: 'eq-bounce 0.6s ease infinite alternate', animationDelay: '0.2s' }} />
            <div className="bar" style={{ width: '3px', height: '18px', background: '#10b981', borderRadius: '2px', animation: 'eq-bounce 0.9s ease infinite alternate', animationDelay: '0.4s' }} />
          </div>
        ) : (
          <span style={{ fontSize: '1.2rem', color: '#94a3b8' }}>🔇</span>
        )}

        {/* Small floating text tag */}
        <span style={{
          position: 'absolute',
          top: '-15px',
          fontSize: '0.65rem',
          background: isPlaying ? '#10b981' : '#475569',
          color: isPlaying ? '#000' : '#e2e8f0',
          padding: '1px 6px',
          borderRadius: '10px',
          fontWeight: 'bold',
          fontFamily: 'monospace',
          boxShadow: isPlaying ? '0 0 8px rgba(16,185,129,0.3)' : 'none'
        }}>
          369Hz
        </span>
      </div>

      <style>{`
        @keyframes eq-bounce {
          from { height: 4px; }
          to { height: 18px; }
        }
      `}</style>
    </>
  );
}
