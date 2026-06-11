'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTargetGroup } from '@/context/UserTargetGroupContext';

// Helper to clean HTML tags from text
const cleanHtmlText = (text: string) => {
  if (!text) return '';
  return text.replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
};

// Core dictionary metadata for high-fidelity fallbacks and details
const COMMON_METADATA: Record<string, { phonetic: string; context: string }> = {
  "hello, how are you?": {
    phonetic: "هيلو، هاو آر يو؟",
    context: "التحية الأساسية للسلام والسؤال عن الحال والأحوال بأسلوب مهذب عند مقابلة أي شخص."
  },
  "nice to meet you": {
    phonetic: "نايس تو ميت يو",
    context: "تُقال للتعبير عن اللطف والاحترام عند مقابلة شخص ما لأول مرة لإشعاره بالترحاب."
  },
  "please help me": {
    phonetic: "بليز هيلب مي",
    context: "تُستخدم لطلب المساعدة أو الدعم من الآخرين بأسلوب مهذب ومحترم."
  },
  "thank you very much": {
    phonetic: "ثانك يو فيري ماتش",
    context: "لتقديم خالص الشكر والامتنان لشخص قدم لك صنيعاً أو معروفاً."
  },
  "see you later": {
    phonetic: "سي يو ليتر",
    context: "عبارة وداع ودية وشائعة بين الأصدقاء والزملاء تعني التطلع للقاء قريب."
  },
  "bonjour": {
    phonetic: "بونجور",
    context: "التحية الصباحية والنهارية الأساسية في فرنسا للترحيب اليومي."
  },
  "merci beaucoup": {
    phonetic: "ميرسي بوكو",
    context: "للتعبير عن الشكر الجزيل والامتنان العالي في مختلف المواقف بالفرنسية."
  },
  "s'il vous plaît": {
    phonetic: "سيل فو بليه",
    context: "صيغة الطلب المهذب والرسمي للأشخاص أو مجموعات التقدير بالفرنسية."
  },
  "comment ça va?": {
    phonetic: "كومون سا فا؟",
    context: "السؤال الودي والبسيط عن الأحوال بين الأصدقاء والمقربين."
  },
  "au revoir": {
    phonetic: "أو روفوار",
    context: "عبارة الوداع الرسمية المعتادة عند إنهاء اللقاء والمغادرة بالفرنسية."
  },
  "hallo": {
    phonetic: "هالو",
    context: "تحية يومية بسيطة وشائعة جداً لبدء الحديث مع الأصدقاء بالألمانية."
  },
  "guten morgen": {
    phonetic: "جوتن مورجن",
    context: "التحية الصباحية الرسمية المعتادة في ألمانيا حتى فترة الظهر."
  },
  "danke schön": {
    phonetic: "دانكه شون",
    context: "لتقديم الشكر اللطيف والتقدير لمن قدم لك مساعدة أو معروفاً بالألمانية."
  },
  "wie geht es dir?": {
    phonetic: "في جيت إس دير؟",
    context: "السؤال المباشر والودي عن الأحوال والصحة للشخص المقابل بالألمانية."
  },
  "tschüss": {
    phonetic: "تشوز",
    context: "كلمة الوداع غير الرسمية الأكثر تداولاً في ألمانيا عند الانفصال والذهاب."
  }
};

const getMetadata = (foreign: string) => {
  const key = foreign.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").trim();
  if (COMMON_METADATA[key]) {
    return COMMON_METADATA[key];
  }
  return {
    phonetic: "لفظ صوتي تقريبي متوفر بالصوت",
    context: "تُستخدم هذه العبارة لتبادل الحديث والممارسة اللغوية العملية في المواقف اليومية المتنوعة."
  };
};

// Parser to extract vocabulary pairs from the Markdown text content
const parseFlashcards = (textContent: string, courseTitle: string): Flashcard[] => {
  if (!textContent) return [];
  
  const clean = textContent.replace(/<[^>]*>/g, '\n').replace(/&nbsp;/g, ' ');
  // Flexible regex to capture English (Arabic) [Phonetics] {Context}
  const regex = /(?:^|\n)[-*+]\s*([a-zA-ZÀ-ÿ\s',!?./~:-]+)\s*\(([\u0600-\u06FF\s،؛؟()]+)\)(?:\s*\[([^\]]+)\])?(?:\s*\{([^\}]+)\})?/g;
  const cards: Flashcard[] = [];
  let match;
  let index = 1;
  
  while ((match = regex.exec(clean)) !== null) {
    const foreign = match[1].trim();
    const arabic = match[2].trim();
    const meta = getMetadata(foreign);
    const phonetic = match[3] ? match[3].trim() : meta.phonetic;
    const context = match[4] ? match[4].trim() : meta.context;
    
    if (foreign && arabic) {
      cards.push({
        id: `fc_${index++}`,
        text_english: foreign,
        translation_arabic: arabic,
        phonetic_guide: phonetic,
        situational_context: context
      });
    }
  }

  if (cards.length === 0) {
    const isFrench = courseTitle.toLowerCase().includes('french') || courseTitle.toLowerCase().includes('français');
    const isGerman = courseTitle.toLowerCase().includes('german') || courseTitle.toLowerCase().includes('deutsch');
    
    if (isFrench) {
      return [
        { id: "fc_fr_1", text_english: "Bonjour", translation_arabic: "صباح الخير / مرحباً", phonetic_guide: "بونجور", situational_context: "التحية الصباحية والنهارية الأساسية للترحيب اليومي." },
        { id: "fc_fr_2", text_english: "Merci beaucoup", translation_arabic: "شكراً جزيلاً", phonetic_guide: "ميرسي بوكو", situational_context: "للتعبير عن الشكر الجزيل والامتنان العالي." },
        { id: "fc_fr_3", text_english: "S'il vous plaît", translation_arabic: "من فضلك", phonetic_guide: "سيل فو بليه", situational_context: "صيغة الطلب المهذب والرسمي للأشخاص والجمع." },
        { id: "fc_fr_4", text_english: "Comment ça va?", translation_arabic: "كيف حالك؟", phonetic_guide: "كومون سا فا؟", situational_context: "السؤال الودي والبسيط عن الأحوال بين الأصدقاء." },
        { id: "fc_fr_5", text_english: "Au revoir", translation_arabic: "إلى اللقاء", phonetic_guide: "أو روفوار", situational_context: "عبارة الوداع الرسمية المعتادة عند إنهاء الحوار والمغادرة." }
      ];
    } else if (isGerman) {
      return [
        { id: "fc_de_1", text_english: "Hallo", translation_arabic: "مرحباً", phonetic_guide: "هالو", situational_context: "تحية يومية بسيطة وشائعة جداً لبدء الحديث بالألمانية." },
        { id: "fc_de_2", text_english: "Guten Morgen", translation_arabic: "صباح الخير", phonetic_guide: "جوتن مورجن", situational_context: "التحية الصباحية الرسمية المعتادة حتى فترة الظهر." },
        { id: "fc_de_3", text_english: "Danke schön", translation_arabic: "شكراً جزيلًا", phonetic_guide: "دانكه شون", situational_context: "لتقديم الشكر اللطيف والتقدير لمن قدم لك مساعدة." },
        { id: "fc_de_4", text_english: "Wie geht es dir?", translation_arabic: "كيف حالك؟", phonetic_guide: "في جيت إس دير؟", situational_context: "السؤال المباشر والودي عن الأحوال للشخص المقابل." },
        { id: "fc_de_5", text_english: "Tschüss", translation_arabic: "وداعاً", phonetic_guide: "تشوز", situational_context: "كلمة الوداع غير الرسمية الأكثر تداولاً عند الذهاب." }
      ];
    } else {
      return [
        { id: "fc_en_1", text_english: "Hello, how are you?", translation_arabic: "مرحباً، كيف حالك؟", phonetic_guide: "هيلو، هاو آر يو؟", situational_context: "التحية الأساسية للسلام والسؤال عن الحال والأحوال بأسلوب مهذب." },
        { id: "fc_en_2", text_english: "Nice to meet you", translation_arabic: "سعدت بلقائك", phonetic_guide: "نايس تو ميت يو", situational_context: "تُقال للتعبير عن اللطف والاحترام عند مقابلة شخص ما لأول مرة." },
        { id: "fc_en_3", text_english: "Please help me", translation_arabic: "من فضلك ساعدني", phonetic_guide: "بليز هيلب مي", situational_context: "تُستخدم لطلب المساعدة أو الدعم من الآخرين بأسلوب مهذب ومحترم." },
        { id: "fc_en_4", text_english: "Thank you very much", translation_arabic: "شكراً جزيلاً لك", phonetic_guide: "ثانك يو فيري ماتش", situational_context: "لتقديم خالص الشكر والامتنان لشخص قدم لك صنيعاً أو معروفاً." },
        { id: "fc_en_5", text_english: "See you later", translation_arabic: "أراك لاحقاً", phonetic_guide: "سي يو ليتر", situational_context: "عبارة وداع ودية وشائعة بين الأصدقاء والزملاء تعني التطلع للقاء قريب." }
      ];
    }
  }
  return cards;
};

// Custom premium audio narration player
function AudioNarrationPlayer({ textContent, isKids }: { textContent: string; isKids: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const cleanText = cleanHtmlText(textContent);

  useEffect(() => {
    const words = cleanText.trim().split(/\s+/).length;
    setDuration(Math.max(10, Math.round((words / 130) * 60)));
    setIsPlaying(false);
    setCurrentTime(0);
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }, [textContent]);

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const togglePlay = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      alert('متصفحك لا يدعم قراءة النصوص صوتياً.');
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.pause();
      setIsPlaying(false);
    } else {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        setIsPlaying(true);
      } else {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'ar-EG';
        utterance.rate = 0.95;

        const voices = window.speechSynthesis.getVoices();
        const arVoice = voices.find(v => v.lang.startsWith('ar'));
        if (arVoice) utterance.voice = arVoice;

        utterance.onend = () => {
          setIsPlaying(false);
          setCurrentTime(0);
        };
        utterance.onerror = () => {
          setIsPlaying(false);
        };
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
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div style={{
      background: isKids ? '#f3f4f6' : 'rgba(255, 255, 255, 0.03)',
      border: `2px solid ${isKids ? '#fb7185' : 'rgba(59, 130, 246, 0.2)'}`,
      borderRadius: '16px',
      padding: '16px 20px',
      marginBottom: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.3rem', animation: isPlaying ? 'pulse 1.5s infinite' : 'none' }}>🎙️</span>
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: isKids ? '#e11d48' : '#3b82f6' }}>
              قارئ الشرح الذكي بالذكاء الاصطناعي (Narration)
            </div>
            <div style={{ fontSize: '0.75rem', color: isKids ? '#4b5563' : '#94a3b8' }}>
              استمع لقراءة آلية تفاعلية للشرح اللغوي
            </div>
          </div>
        </div>
        {isPlaying && (
          <span style={{
            fontSize: '0.7rem',
            padding: '2px 8px',
            background: 'rgba(59, 130, 246, 0.15)',
            border: '1px solid #3b82f6',
            borderRadius: '20px',
            color: '#3b82f6',
            fontWeight: 700
          }}>
            جاري القراءة
          </span>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button
          onClick={togglePlay}
          style={{
            background: isPlaying ? '#ef4444' : '#3b82f6',
            border: 'none',
            color: '#fff',
            width: '40px', height: '40px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1rem',
            transition: 'all 0.3s'
          }}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>

        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '10px', direction: 'ltr' }}>
          <span style={{ fontSize: '0.75rem', color: isKids ? '#4b5563' : '#94a3b8', fontFamily: 'monospace' }}>{formatTime(currentTime)}</span>
          <div style={{ flex: 1, height: '6px', background: isKids ? '#e5e7eb' : 'rgba(255,255,255,0.1)', borderRadius: '3px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', background: '#3b82f6', width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }} />
          </div>
          <span style={{ fontSize: '0.75rem', color: isKids ? '#4b5563' : '#94a3b8', fontFamily: 'monospace' }}>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}

// 3D Flip Flashcards Component
function FlashcardHub({ flashcards, courseTitle, isKids, isDarkMode }: { flashcards: Flashcard[]; courseTitle: string; isKids: boolean; isDarkMode: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentCard = flashcards[currentIndex] || { id: "empty", text_english: "No words found", translation_arabic: "لا توجد كلمات", phonetic_guide: "", situational_context: "" };

  const playPronunciation = (e: React.MouseEvent, text: string, lang: string) => {
    e.stopPropagation();
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.8;
    
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(v => v.lang.startsWith(lang.split('-')[0]));
    if (voice) utterance.voice = voice;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  };

  const getLanguageTag = () => {
    const title = courseTitle.toLowerCase();
    if (title.includes('french') || title.includes('français')) return 'fr-FR';
    if (title.includes('german') || title.includes('deutsch')) return 'de-DE';
    return 'en-US';
  };

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(prev => prev + 1), 150);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(prev => prev - 1), 150);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', width: '100%' }}>
      <style>{`
        .flashcard-wrapper {
          perspective: 1000px;
          width: 100%;
          max-width: 500px;
          height: 300px;
          cursor: pointer;
        }
        .flashcard-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        .flashcard-inner.flipped {
          transform: rotateY(180deg);
        }
        .flashcard-front, .flashcard-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }
        .flashcard-front {
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: ${isKids ? '#ffffff' : (isDarkMode ? '#1e293b' : '#ffffff')};
          color: ${isKids ? '#0f172a' : (isDarkMode ? '#f8fafc' : '#1e293b')};
          border: ${isKids ? '4px solid #3b82f6' : (isDarkMode ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #cbd5e1')};
        }
        .flashcard-back {
          align-items: flex-start;
          justify-content: flex-start;
          padding: 24px;
          overflow-y: auto;
          background: ${isKids ? '#def7ec' : (isDarkMode ? '#0f172a' : '#f8fafc')};
          color: ${isKids ? '#047857' : (isDarkMode ? '#e2e8f0' : '#1e293b')};
          transform: rotateY(180deg);
          border: ${isKids ? '4px solid #10b981' : (isDarkMode ? '1px solid rgba(16, 185, 129, 0.2)' : '1px solid #a7f3d0')};
        }
        @media (max-width: 1024px) {
          .learning-dashboard-container {
            flex-direction: column !important;
            padding: 16px !important;
            gap: 16px !important;
            overflow-y: auto !important;
          }
          .learning-dashboard-sidebar {
            width: 100% !important;
            height: 250px !important;
          }
          .learning-dashboard-aside-right {
            width: 100% !important;
          }
        }
        @media (max-width: 480px) {
          .flashcard-wrapper {
            height: 250px;
          }
          .flashcard-front {
            padding: 16px;
          }
          .flashcard-back {
            padding: 16px;
          }
        }
      `}</style>

      <div className="flashcard-wrapper" onClick={() => setIsFlipped(!isFlipped)}>
        <div className={`flashcard-inner ${isFlipped ? 'flipped' : ''}`}>
          
          {/* FRONT */}
          <div className="flashcard-front" style={{ zIndex: isFlipped ? 1 : 2 }}>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '16px', fontWeight: 800 }}>الكلمة الأجنبية (انقر للترجمة 🔄)</div>
            
            {/* LTR container to avoid Bi-directional punctuation flip */}
            <div 
              dir="ltr"
              style={{ 
                fontSize: '2.4rem', 
                fontWeight: 900, 
                marginBottom: '20px', 
                fontFamily: "'Outfit', 'Inter', sans-serif",
                textAlign: 'center',
                unicodeBidi: 'isolate'
              }}
            >
              <bdi>{currentCard.text_english}</bdi>
            </div>
            
            <button
              onClick={(e) => playPronunciation(e, currentCard.text_english, getLanguageTag())}
              style={{
                width: '52px', height: '52px', borderRadius: '50%',
                background: '#3b82f6', border: 'none', color: '#fff',
                fontSize: '1.3rem', cursor: 'pointer', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
              }}
            >
              {isPlaying ? '🔊' : '▶'}
            </button>
          </div>

          {/* BACK */}
          <div className="flashcard-back" style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'right' }}>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 800, alignSelf: 'flex-start' }}>الترجمة والتفاصيل اللغوية</div>
            
            {/* Contextual translation */}
            <div style={{ width: '100%', borderBottom: '1px solid rgba(128,128,128,0.1)', paddingBottom: '6px' }}>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>الترجمة العربية:</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#10b981', fontFamily: "'Cairo', sans-serif" }}>
                {currentCard.translation_arabic}
              </div>
            </div>

            {/* Phonetic guide */}
            <div style={{ width: '100%', borderBottom: '1px solid rgba(128,128,128,0.1)', paddingBottom: '6px' }}>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>دليل النطق الصوتي التقريبي:</div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#3b82f6' }}>
                🎙️ {currentCard.phonetic_guide}
              </div>
            </div>

            {/* Situational context */}
            <div style={{ width: '100%' }}>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>سياق الاستخدام العملي:</div>
              <div style={{ fontSize: '0.85rem', color: isKids ? '#1e293b' : (isDarkMode ? '#cbd5e1' : '#475569'), lineHeight: 1.5, fontWeight: 700 }}>
                💡 {currentCard.situational_context}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '10px' }}>
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          style={{
            padding: '8px 20px', borderRadius: '10px',
            border: isKids ? '2px solid #3b82f6' : '1px solid #cbd5e1',
            background: isKids ? '#eff6ff' : 'transparent',
            color: '#3b82f6', fontWeight: 800, cursor: 'pointer',
            opacity: currentIndex === 0 ? 0.4 : 1
          }}
        >
          السابق
        </button>
        <span style={{ fontWeight: 800 }}>{currentIndex + 1} / {flashcards.length}</span>
        <button
          onClick={handleNext}
          disabled={currentIndex === flashcards.length - 1}
          style={{
            padding: '8px 20px', borderRadius: '10px',
            border: 'none', background: '#3b82f6',
            color: '#fff', fontWeight: 800, cursor: 'pointer',
            opacity: currentIndex === flashcards.length - 1 ? 0.4 : 1
          }}
        >
          التالي
        </button>
      </div>
    </div>
  );
}

// Language Application Sandbox Component
function LanguageSandbox({ flashcards, isKids, isDarkMode, onComplete }: { flashcards: Flashcard[]; isKids: boolean; isDarkMode: boolean; onComplete: () => void }) {
  const [userInput, setUserInput] = useState('');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'success' | 'fail'>('idle');

  const card = flashcards[currentIdx] || { text_english: "Hello", translation_arabic: "مرحباً" };

  const checkAnswer = () => {
    const input = userInput.trim().toLowerCase();
    const target = card.translation_arabic.trim().toLowerCase();
    const targetEn = card.text_english.trim().toLowerCase();

    // Check if matching English or Arabic correctly
    const isCorrect = input.includes(target) || target.includes(input) || input.includes(targetEn) || targetEn.includes(input);

    if (isCorrect && input.length >= 2) {
      setStatus('success');
      setLogs(prev => [
        ...prev,
        `sandbox-terminal:~$ verify "${userInput}"`,
        `[SUCCESS] Translation matched successfully!`,
        `✓ "${card.text_english}" = "${card.translation_arabic}"`
      ]);
      onComplete();
    } else {
      setStatus('fail');
      setLogs(prev => [
        ...prev,
        `sandbox-terminal:~$ verify "${userInput}"`,
        `[ERROR] Validation failed. Incorrect translation match.`
      ]);
    }
  };

  const handleNextChallenge = () => {
    setUserInput('');
    setStatus('idle');
    setCurrentIdx((currentIdx + 1) % flashcards.length);
  };

  return (
    <div style={{
      background: isKids ? '#ffffff' : 'rgba(9, 10, 18, 0.75)',
      border: isKids ? '4px solid #e11d48' : '1px solid rgba(59, 130, 246, 0.2)',
      borderRadius: '20px',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
      <div style={{ borderBottom: `1px solid ${isKids ? '#e5e7eb' : 'rgba(255,255,255,0.08)'}`, paddingBottom: '12px' }}>
        <h4 style={{ margin: 0, color: isKids ? '#e11d48' : '#3b82f6', fontWeight: 900, fontSize: '1.05rem' }}>
          💻 محاكي التطبيق اللغوي العملي (Language Sandbox Terminal)
        </h4>
        <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: '#94a3b8' }}>
          قم بترجمة أو مطابقة الجملة المطلوبة لتشغيل كود المحاكي بنجاح.
        </p>
      </div>

      <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '16px', border: '1px solid rgba(255,255,255,0.03)' }}>
        <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '6px', fontWeight: 700 }}>العبارة المستهدفة للتطبيق:</div>
        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#10b981', direction: 'ltr', textAlign: 'center' }}>
          {card.text_english}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="اكتب الترجمة العربية الصحيحة هنا..."
          style={{
            flex: 1,
            padding: '12px 16px',
            borderRadius: '10px',
            border: isKids ? '2px solid #cbd5e1' : '1px solid rgba(255,255,255,0.1)',
            background: isKids ? '#f9fafb' : '#0b0c16',
            color: isKids ? '#1f2937' : '#fff',
            fontFamily: "'Cairo', sans-serif",
            outline: 'none'
          }}
          onKeyDown={(e) => e.key === 'Enter' && checkAnswer()}
        />
        <button
          onClick={checkAnswer}
          style={{
            background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
            color: '#fff',
            border: 'none',
            padding: '0 24px',
            borderRadius: '10px',
            fontWeight: 800,
            cursor: 'pointer',
            fontFamily: "'Cairo', sans-serif"
          }}
        >
          تحقق وتشغيل ▶
        </button>
      </div>

      {/* Terminal logs */}
      <div style={{
        background: '#020205',
        borderRadius: '10px',
        padding: '12px',
        height: '120px',
        overflowY: 'auto',
        fontFamily: 'monospace',
        fontSize: '0.85rem',
        color: '#3b82f6',
        direction: 'ltr',
        textAlign: 'left'
      }}>
        <div style={{ color: '#475569', marginBottom: '4px' }}>// Sandbox Terminal Logs:</div>
        {logs.map((log, idx) => {
          let logColor = '#60a5fa';
          if (log.startsWith('[SUCCESS]')) logColor = '#10b981';
          if (log.startsWith('[ERROR]')) logColor = '#f87171';
          return <div key={idx} style={{ color: logColor, marginBottom: '2px' }}>{log}</div>;
        })}
        {logs.length === 0 && <div style={{ color: '#334155' }}>Waiting for verification inputs...</div>}
      </div>

      {status === 'success' && (
        <div style={{
          background: 'rgba(16, 185, 129, 0.1)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: '10px',
          padding: '12px',
          color: '#10b981',
          fontWeight: 700,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span>✅ أحسنت! إجابة صحيحة وتم تفعيل التطبيق بنجاح.</span>
          <button
            onClick={handleNextChallenge}
            style={{
              background: '#10b981', color: '#000', border: 'none',
              padding: '6px 12px', borderRadius: '6px', fontWeight: 800,
              cursor: 'pointer', fontFamily: "'Cairo', sans-serif"
            }}
          >
            التحدي التالي ➡️
          </button>
        </div>
      )}

      {status === 'fail' && (
        <div style={{
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '10px',
          padding: '12px',
          color: '#ef4444',
          fontWeight: 700
        }}>
          ❌ ترجمة غير مطابقة. حاول مراجعة كارت الحفظ ثانيةً!
        </div>
      )}
    </div>
  );
}

// Language Learning Layout Main View
export default function LanguageLearningLayout({ data }: { data: any }) {
  const { lesson, course, sidebar: sideLessons } = data;
  
  const { targetGroup, toggleTargetGroup } = useTargetGroup();
  const isKids = targetGroup === 'kids';
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState<'explanation' | 'guided' | 'sandbox'>('explanation');
  
  // Flashcards state
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  
  // Progress unlocks
  const [sandboxPassed, setSandboxPassed] = useState(false);
  const [microQuizPassed, setMicroQuizPassed] = useState(false);
  
  // Micro Quiz state
  const [quizQuestion, setQuizQuestion] = useState<any>(null);
  const [selectedAns, setSelectedAns] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizError, setQuizError] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('svk_theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
    
    const parsed = parseFlashcards(lesson.text_content || '', course.title || '');
    setFlashcards(parsed);
    
    // Check if lesson was already completed previously
    const previouslyQuizPassed = localStorage.getItem(`svk_quiz_passed_${lesson.id}`) === 'true';
    setMicroQuizPassed(previouslyQuizPassed);
    setSandboxPassed(previouslyQuizPassed);

    // Generate single question micro quiz
    if (parsed.length > 0) {
      const targetCard = parsed[0];
      const wrongOptions = parsed.slice(1).map(c => c.translation_arabic);
      while (wrongOptions.length < 3) {
        wrongOptions.push("ترجمة عشوائية بديلة " + (wrongOptions.length + 1));
      }
      const shuffledOptions = [targetCard.translation_arabic, ...wrongOptions.slice(0, 3)].sort(() => 0.5 - Math.random());
      
      setQuizQuestion({
        question: `ما هو المعنى الدقيق للكلمة أو الجملة اللغوية: "${targetCard.text_english}"؟`,
        options: shuffledOptions,
        correctIndex: shuffledOptions.indexOf(targetCard.translation_arabic),
        explanation: `المعنى الصحيح هو: ${targetCard.translation_arabic}`
      });
    }

    // Reset current lesson states
    setSelectedAns(null);
    setIsAnswered(false);
    setQuizError(false);
    setActiveTab('explanation');
  }, [lesson, course]);

  const toggleTheme = () => {
    const nextDark = !isDarkMode;
    setIsDarkMode(nextDark);
    localStorage.setItem('svk_theme', nextDark ? 'dark' : 'light');
  };

  const handleQuizAnswer = (idx: number) => {
    if (isAnswered) return;
    setSelectedAns(idx);
    setIsAnswered(true);
    
    if (idx === quizQuestion.correctIndex) {
      setMicroQuizPassed(true);
      setQuizError(false);
      localStorage.setItem(`svk_quiz_passed_${lesson.id}`, 'true');
      
      // Post progress completion to API
      fetch('/api/lessons/complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lessonSlug: String(lesson.id),
          score: 1,
          totalQuestions: 1
        })
      }).catch(e => console.error('Error auto-completing:', e));

    } else {
      setQuizError(true);
    }
  };

  const resetQuiz = () => {
    setSelectedAns(null);
    setIsAnswered(false);
    setQuizError(false);
  };

  const currentIdx = sideLessons.findIndex((l: any) => Number(l.id) === Number(lesson.id));
  const progressPercent = Math.round(((currentIdx + 1) / sideLessons.length) * 100);
  
  const prevLesson = currentIdx > 0 ? sideLessons[currentIdx - 1] : null;
  const nextLesson = currentIdx < sideLessons.length - 1 ? sideLessons[currentIdx + 1] : null;

  // Theme object variables based on targetGroup and mode
  const theme = isKids ? {
    bg: '#fef08a',
    cardBg: '#ffffff',
    cardBorder: '3px solid #f43f5e',
    textColor: '#1e293b',
    titleColor: '#e11d48',
    subTextColor: '#475569',
    headerBg: '#ffffff',
    sidebarBg: '#ffffff',
  } : {
    bg: isDarkMode ? '#090a15' : '#f8fafc',
    cardBg: isDarkMode ? 'rgba(255, 255, 255, 0.02)' : '#ffffff',
    cardBorder: isDarkMode ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid #e2e8f0',
    textColor: isDarkMode ? '#e2e8f0' : '#0f172a',
    titleColor: isDarkMode ? '#ffffff' : '#1e293b',
    subTextColor: isDarkMode ? '#94a3b8' : '#64748b',
    headerBg: isDarkMode ? 'rgba(9, 10, 21, 0.95)' : '#ffffff',
    sidebarBg: isDarkMode ? 'rgba(15, 17, 34, 0.9)' : '#ffffff',
  };

  return (
    <div style={{ fontFamily: "'Cairo', sans-serif", direction: 'rtl', background: theme.bg, minHeight: '100vh', display: 'flex', flexDirection: 'column', color: theme.textColor, transition: 'background-color 0.3s ease, color 0.3s ease' }}>
      
      {/* HEADER */}
      <header style={{ background: theme.headerBg, borderBottom: isKids ? '4px solid #f43f5e' : (isDarkMode ? '1px solid rgba(255,255,255,0.06)' : '1px solid #e2e8f0'), padding: '0 24px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(20px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ fontWeight: 900, fontSize: '1.2rem', color: isKids ? '#e11d48' : '#3b82f6', letterSpacing: '0.5px' }}>
            SVK Academy <span style={{ color: '#10b981' }}>{isKids ? '🎈 للأطفال' : 'Languages'}</span>
          </div>
        </div>
        
        <div style={{ fontWeight: 800, fontSize: '1rem', color: theme.textColor }}>
          {course.title_ar || course.title}
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Toggle */}
          <button 
            onClick={toggleTargetGroup}
            style={{
              background: isKids ? '#fb7185' : '#1e293b',
              border: 'none',
              color: '#fff',
              padding: '8px 16px',
              borderRadius: '20px',
              fontWeight: 800,
              cursor: 'pointer',
              fontSize: '0.85rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          >
            {isKids ? '🧑‍💼 الكبار' : '👶 الأطفال'}
          </button>

          {!isKids && (
            <button 
              onClick={toggleTheme}
              style={{ 
                background: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : '#f1f5f9', 
                border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#cbd5e1'}`, 
                color: isDarkMode ? '#f59e0b' : '#475569', 
                padding: '8px 12px', 
                borderRadius: '8px', 
                fontWeight: 700, 
                cursor: 'pointer', 
                fontSize: '0.9rem'
              }}
            >
              {isDarkMode ? '☀️ المضيء' : '🌙 الداكن'}
            </button>
          )}
          
          <Link href={`/courses/${course.id}`} style={{ textDecoration: 'none' }}>
            <button style={{ background: isKids ? '#3b82f6' : (isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#f1f5f9'), border: isKids ? 'none' : `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`, color: isKids ? '#fff' : theme.textColor, padding: '8px 16px', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem' }}>
              خروج
            </button>
          </Link>
        </div>
      </header>

      {/* DASHBOARD LAYOUT */}
      <div className="learning-dashboard-container" style={{ display: 'flex', flex: 1, overflow: 'hidden', padding: '24px', gap: '24px', maxWidth: '1600px', margin: '0 auto', width: '100%' }}>
        
        {/* LEFT: PROGRESS TIMELINE */}
        <aside className="learning-dashboard-sidebar" style={{ width: '280px', background: theme.sidebarBg, borderRadius: '20px', border: theme.cardBorder, display: 'flex', flexDirection: 'column', overflow: 'hidden', flexShrink: 0 }}>
          <div style={{ background: isKids ? '#fb7185' : '#1e3a8a', padding: '16px', color: '#fff', textAlign: 'center', fontWeight: 800 }}>
            {isKids ? '🗺️ طريق البطل' : 'منهج الكورس'}
          </div>
          <div style={{ padding: '20px', overflowY: 'auto', flex: 1, position: 'relative' }}>
            <div style={{ position: 'absolute', right: '35px', top: '24px', bottom: '24px', width: '2px', background: '#e2e8f0', zIndex: 1 }} />
            {sideLessons.map((l: any, idx: number) => {
              const isActive = Number(l.id) === Number(lesson.id);
              const isPast = idx < currentIdx;
              
              return (
                <Link key={l.id} href={`/learn/${l.id}`} style={{ textDecoration: 'none', display: 'block', position: 'relative', zIndex: 2, marginBottom: '20px' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ 
                      width: '28px', height: '28px', borderRadius: '50%', background: isActive ? '#3b82f6' : (isPast ? '#10b981' : '#fff'), 
                      border: `2px solid ${isActive ? '#3b82f6' : (isPast ? '#10b981' : '#cbd5e1')}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', color: isActive || isPast ? '#fff' : '#475569', fontWeight: 'bold', fontSize: '0.8rem',
                    }}>
                      {isPast ? '⭐' : idx + 1}
                    </div>
                    <div style={{ flex: 1, padding: '4px 0' }}>
                      <div style={{ fontWeight: isActive ? 800 : 600, color: isActive ? theme.textColor : theme.subTextColor, fontSize: '0.9rem' }}>
                        {l.title}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </aside>

        {/* CENTER: STEP-DRIVEN WORKSPACE */}
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px', overflowY: 'auto' }}>
          
          {/* Stepper progress indicator */}
          <div style={{ background: theme.cardBg, borderRadius: '20px', padding: '20px', border: theme.cardBorder }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', left: '10%', right: '10%', top: '50%', height: '4px', background: '#e5e7eb', zIndex: 1 }} />
              <div style={{ position: 'absolute', left: '10%', right: '10%', top: '50%', height: '4px', background: '#3b82f6', zIndex: 1, width: activeTab === 'explanation' ? '0%' : activeTab === 'guided' ? '50%' : '100%', transition: 'width 0.3s' }} />
              
              <button onClick={() => setActiveTab('explanation')} style={{ zIndex: 2, background: activeTab === 'explanation' ? '#3b82f6' : '#fff', color: activeTab === 'explanation' ? '#fff' : '#3b82f6', border: '2px solid #3b82f6', borderRadius: '50%', width: '40px', height: '40px', fontWeight: 800, cursor: 'pointer' }}>١</button>
              <button onClick={() => setActiveTab('guided')} style={{ zIndex: 2, background: activeTab === 'guided' ? '#3b82f6' : '#fff', color: activeTab === 'guided' ? '#fff' : '#3b82f6', border: '2px solid #3b82f6', borderRadius: '50%', width: '40px', height: '40px', fontWeight: 800, cursor: 'pointer' }}>٢</button>
              <button onClick={() => setActiveTab('sandbox')} style={{ zIndex: 2, background: activeTab === 'sandbox' ? '#3b82f6' : '#fff', color: activeTab === 'sandbox' ? '#fff' : '#3b82f6', border: '2px solid #3b82f6', borderRadius: '50%', width: '40px', height: '40px', fontWeight: 800, cursor: 'pointer' }}>٣</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '0.85rem', fontWeight: 800 }}>
              <span style={{ color: activeTab === 'explanation' ? '#3b82f6' : 'inherit' }}>📖 الخطوة ١: شرح المفاهيم</span>
              <span style={{ color: activeTab === 'guided' ? '#3b82f6' : 'inherit' }}>💡 الخطوة ٢: كروت الحفظ</span>
              <span style={{ color: activeTab === 'sandbox' ? '#3b82f6' : 'inherit' }}>💻 الخطوة ٣: التطبيق اللغوي</span>
            </div>
          </div>

          {/* Tab Viewport */}
          {activeTab === 'explanation' && (
            <div style={{ background: theme.cardBg, borderRadius: '20px', padding: '32px', border: theme.cardBorder }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 900, color: theme.titleColor, marginBottom: '20px' }}>
                📖 الخطوة الأولى: شرح الدرس ومفاهيم اللغة الممتعة
              </h2>
              
              {/* Dedicated Audio Player narration block at the top */}
              <AudioNarrationPlayer textContent={lesson.text_content || ''} isKids={isKids} />

              <div dangerouslySetInnerHTML={{ __html: lesson.text_content }} style={{ lineHeight: 2, fontSize: '1.05rem' }} />
              
              <div style={{ marginTop: '30px', textAlign: 'center' }}>
                <button
                  onClick={() => setActiveTab('guided')}
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                    color: '#fff', border: 'none', padding: '12px 32px',
                    borderRadius: '10px', fontWeight: 900, cursor: 'pointer',
                    fontSize: '1rem'
                  }}
                >
                  انتقال للخطوة ٢: كروت النطق والحفظ التفاعلية ➡️
                </button>
              </div>
            </div>
          )}

          {activeTab === 'guided' && (
            <div style={{ background: theme.cardBg, borderRadius: '20px', padding: '32px', border: theme.cardBorder }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 900, color: theme.titleColor, marginBottom: '20px', textAlign: 'center' }}>
                💡 الخطوة الثانية: كروت الحفظ التفاعلية ونطق الكلمات
              </h2>
              <FlashcardHub flashcards={flashcards} courseTitle={course.title || ''} isKids={isKids} isDarkMode={isDarkMode} />
              
              <div style={{ marginTop: '30px', textAlign: 'center' }}>
                <button
                  onClick={() => setActiveTab('sandbox')}
                  style={{
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    color: '#fff', border: 'none', padding: '12px 32px',
                    borderRadius: '10px', fontWeight: 900, cursor: 'pointer',
                    fontSize: '1rem'
                  }}
                >
                  انتقال للخطوة ٣: اختبار التطبيق اللغوي العملي ➡️
                </button>
              </div>
            </div>
          )}

          {activeTab === 'sandbox' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <LanguageSandbox 
                flashcards={flashcards} 
                isKids={isKids} 
                isDarkMode={isDarkMode} 
                onComplete={() => setSandboxPassed(true)} 
              />
              
              {/* MICRO-QUIZ: Embed a strict, client-side verified single-question quiz component directly after sandbox */}
              {sandboxPassed && quizQuestion && (
                <div style={{ background: theme.cardBg, borderRadius: '20px', padding: '32px', border: '3px solid #10b981', boxShadow: '0 10px 25px rgba(16, 185, 129, 0.15)' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#10b981', marginBottom: '16px' }}>
                    🧠 الاختبار السريع للدرس (Micro-Quiz) - اجتياز السؤال يفتح الدرس التالي!
                  </h3>
                  <p style={{ fontWeight: 700, marginBottom: '20px' }}>{quizQuestion.question}</p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    {quizQuestion.options.map((opt: string, i: number) => {
                      const isSelected = selectedAns === i;
                      const isCorrect = i === quizQuestion.correctIndex;
                      
                      let btnBg = isDarkMode ? 'rgba(255,255,255,0.02)' : '#f3f4f6';
                      let btnBorder = '1px solid #cbd5e1';
                      
                      if (isAnswered) {
                        if (isCorrect) {
                          btnBg = '#d1fae5';
                          btnBorder = '2px solid #10b981';
                        } else if (isSelected) {
                          btnBg = '#fee2e2';
                          btnBorder = '2px solid #ef4444';
                        }
                      } else if (isSelected) {
                        btnBg = '#eff6ff';
                        btnBorder = '2px solid #3b82f6';
                      }

                      return (
                        <button
                          key={i}
                          onClick={() => handleQuizAnswer(i)}
                          disabled={isAnswered}
                          style={{
                            padding: '14px', borderRadius: '10px',
                            background: btnBg, border: btnBorder,
                            color: theme.textColor, fontWeight: 700,
                            cursor: isAnswered ? 'default' : 'pointer',
                            textAlign: 'right'
                          }}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {isAnswered && (
                    <div style={{ marginTop: '20px', padding: '12px 16px', background: '#f8fafc', borderRadius: '10px', color: '#000' }}>
                      <div style={{ fontWeight: 800, color: microQuizPassed ? '#10b981' : '#ef4444', marginBottom: '4px' }}>
                        {microQuizPassed ? '🎉 أحسنت! إجابة صحيحة وتم فتح الدرس التالي بنجاح.' : '❌ إجابة خاطئة. يرجى المراجعة والمحاولة مرة أخرى.'}
                      </div>
                      <p style={{ margin: 0, fontSize: '0.9rem', color: '#4b5563' }}>{quizQuestion.explanation}</p>
                      
                      {!microQuizPassed && (
                        <button onClick={resetQuiz} style={{ marginTop: '10px', background: '#3b82f6', color: '#fff', border: 'none', padding: '6px 16px', borderRadius: '6px', cursor: 'pointer', fontFamily: "'Cairo', sans-serif" }}>
                          إعادة المحاولة 🔄
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

        </main>

        {/* RIGHT SIDEBAR: DOWNLOADS & GENERAL INFOS */}
        <aside className="learning-dashboard-aside-right" style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '24px', flexShrink: 0 }}>
          <div style={{ background: theme.cardBg, borderRadius: '20px', padding: '24px', border: theme.cardBorder }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: theme.textColor, marginBottom: '16px' }}>التقدم الإجمالي</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: `conic-gradient(#10b981 ${progressPercent}%, #e2e8f0 0)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: isDarkMode ? '#131428' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900 }}>
                  {progressPercent}%
                </div>
              </div>
              <div>
                <div style={{ fontWeight: 800, color: '#10b981' }}>{isKids ? 'بطل اللغات' : 'مستوى ممتاز'}</div>
                <div style={{ fontSize: '0.8rem', color: theme.subTextColor }}>أكملت {currentIdx} من {sideLessons.length} دروس.</div>
              </div>
            </div>
          </div>

          <div style={{ background: theme.cardBg, borderRadius: '20px', padding: '24px', border: theme.cardBorder }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: theme.textColor, marginBottom: '12px' }}>مرفقات الدرس</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', padding: '10px 14px', borderRadius: '10px', border: theme.cardBorder, color: '#000' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>ملخص المفردات PDF</span>
                <button style={{ background: 'transparent', border: 'none', color: '#3b82f6', fontSize: '1.2rem', cursor: 'pointer' }}>⬇</button>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* FOOTER NAVIGATION */}
      <footer style={{ borderTop: isKids ? '4px solid #f43f5e' : (isDarkMode ? '1px solid rgba(255,255,255,0.06)' : '1px solid #e2e8f0'), padding: '16px 24px', display: 'flex', justifyContent: 'space-between', background: theme.headerBg }}>
        {prevLesson ? (
          <Link href={`/learn/${prevLesson.id}`} style={{ textDecoration: 'none' }}>
            <button style={{ background: isKids ? '#f3f4f6' : 'transparent', color: theme.textColor, border: '1px solid #cbd5e1', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>
              ← الدرس السابق
            </button>
          </Link>
        ) : <div />}

        {nextLesson ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {!microQuizPassed && (
              <span style={{ fontSize: '0.8rem', color: '#f43f5e', fontWeight: 800 }}>⚠️ يرجى اجتياز اختبار الدرس لفتح التالي</span>
            )}
            <Link 
              href={microQuizPassed ? `/learn/${nextLesson.id}` : '#'} 
              onClick={(e) => !microQuizPassed && e.preventDefault()}
              style={{ textDecoration: 'none' }}
            >
              <button 
                disabled={!microQuizPassed}
                style={{ 
                  background: microQuizPassed ? '#10b981' : '#e5e7eb', 
                  color: microQuizPassed ? '#fff' : '#9ca3af', 
                  border: 'none', 
                  padding: '10px 24px', 
                  borderRadius: '8px', 
                  cursor: microQuizPassed ? 'pointer' : 'not-allowed', 
                  fontFamily: "'Cairo', sans-serif", 
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                {!microQuizPassed && '🔒'} الدرس التالي →
              </button>
            </Link>
          </div>
        ) : <div />}
      </footer>

    </div>
  );
}
