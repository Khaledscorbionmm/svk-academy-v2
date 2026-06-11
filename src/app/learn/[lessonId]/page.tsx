'use client';

import { useState, useEffect, use, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LanguageLearningLayout from '@/components/LanguageLearningLayout';
import SimplifyExplanation from '@/components/SimplifyExplanation';
import { useTargetGroup } from '@/context/UserTargetGroupContext';
import SmartExamView from '@/components/SmartExamView';
import QuickExamplesPanel from '@/components/QuickExamplesPanel';
import LessonModeHeader from '@/components/lesson-types/LessonModeHeader';

function PremiumAudioPlayer({ src, title, textContent }: { src: string; title: string; textContent: string }) {
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
      setDuration(Math.max(10, Math.round((words / 130) * 60)));
      setIsPlaying(false);
      setCurrentTime(0);
      setCharIndex(0);
      setWordLength(0);
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    } else if (audioRef.current) {
      audioRef.current.src = src;
      setIsPlaying(false);
      setCurrentTime(0);
    }
  }, [src, textContent, cleanText]);

  // Handle TTS speech boundary updates
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
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
        window.speechSynthesis.pause();
        setIsPlaying(false);
      } else {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
          setIsPlaying(true);
        } else {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(cleanText);
          const hasArabic = /[\u0600-\u06FF]/.test(cleanText);
          utterance.lang = hasArabic ? 'ar-EG' : 'en-US';
          utterance.rate = 0.85 * playbackRate; // base speed adjusted by user rate
          
          const voices = window.speechSynthesis.getVoices();
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
          window.speechSynthesis.speak(utterance);
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
      // Re-trigger TTS with new rate from current position if possible, 
      // but standard Web Speech API doesn't allow changing rate on the fly easily without restarting.
      // So we just restart from beginning for simplicity, or just apply for next play.
      window.speechSynthesis.cancel();
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
          borderLeft: '3px solid rgba(16,185,129,0.5)', scrollBehavior: 'smooth'
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

function PremiumVideoPlayer({ src }: { src: string }) {
  return null;
}


function getCodeExample(cat: string, idx: any) {
  if (cat === 'python') return `print("مثال عملي للدرس ${idx}")`;
  return `console.log("مثال عملي للدرس ${idx}");`;
}

interface SyntaxItem {
  nameAr: string;
  nameEn: string;
  descAr: string;
  descEn: string;
  howAr: string;
  howEn: string;
  emoji: string;
  color: string;
  prototype?: string;
  parameters?: string;
  returnValue?: string;
  blueprint?: string;
}

const SYNTAX_DICTIONARY: Record<string, SyntaxItem> = {
  'print': {
    nameAr: 'أمر الطباعة (print)',
    nameEn: 'Print Function',
    descAr: 'دالة تُستخدم لعرض النصوص أو القيم على الشاشة لكي يراها المستخدم.',
    descEn: 'A function used to display text or values on the screen for the user to see.',
    howAr: 'نكتب الكلمة متبوعة بقوسين وبداخلهم النص بين علامتي تنصيص، مثل print("أهلاً بك").',
    howEn: 'Write the keyword followed by parentheses containing the text inside quotes, like print("Hello").',
    emoji: '📢',
    color: '#10b981',
    prototype: 'print(*objects, sep=\' \', end=\'\\n\', file=sys.stdout, flush=False)',
    parameters: '*objects (any): values to print; sep (str): separator; end (str): trailing end sequence',
    returnValue: 'None',
    blueprint: 'print("Hello", "World", sep=" - ")'
  },
  'def': {
    nameAr: 'تعريف الدالة (def)',
    nameEn: 'Define Function',
    descAr: 'كلمة برمجية نخبر بها الكمبيوتر أننا نريد إنشاء "دالة" (وهي مثل مصنع صغير يقوم بمهمة معينة عند استدعائه).',
    descEn: 'A keyword used to declare or create a custom function (like a small factory that performs a task when called).',
    howAr: 'نكتب def ثم اسم الدالة وقوسين ونقطتين فوق بعض، مثل def main():.',
    howEn: 'Write def followed by the function name, parentheses, and a colon, like def main():.',
    emoji: '🛠️',
    color: '#8b5cf6'
  },
  'if': {
    nameAr: 'الشرط (if)',
    nameEn: 'If Condition',
    descAr: 'أداة اتخاذ القرار! تُستخدم لتنفيذ كود معين فقط إذا تحقق شرط محدد.',
    descEn: 'The decision maker! Used to run a block of code only if a specific condition is true.',
    howAr: 'نكتب if يليها الشرط ثم نقطتين رأسيتين، مثل: if age > 10:.',
    howEn: 'Write if followed by the condition and a colon, like: if age > 10:.',
    emoji: '🚦',
    color: '#3b82f6'
  },
  'elif': {
    nameAr: 'شرط إضافي (elif)',
    nameEn: 'Else If Condition',
    descAr: 'اختصار لـ (Else If). تُستخدم لتحديد شرط آخر إذا لم يتحقق الشرط الأول (if).',
    descEn: 'Short for "Else If". Used to check another condition if the previous conditions were not met.',
    howAr: 'نكتب elif بعد الـ if لتجربة احتمال آخر، مثل elif score >= 50:.',
    howEn: 'Write elif after the first if to test another possibility, like elif score >= 50:.',
    emoji: '🔀',
    color: '#f59e0b'
  },
  'else': {
    nameAr: 'الخيار البديل (else)',
    nameEn: 'Else Case',
    descAr: 'الحالة البديلة والأخيرة. تُنفذ إذا لم يتحقق أي شرط من الشروط السابقة.',
    descEn: 'The fallback case. It runs if none of the previous if/elif conditions were true.',
    howAr: 'تأتي دائماً في نهاية الشروط بدون أي شرط خاص بها، مثل: else:.',
    howEn: 'Always comes at the end of conditions without any specific condition of its own, like: else:.',
    emoji: '🔄',
    color: '#ec4899'
  },
  'in': {
    nameAr: 'التحقق أو الدوران (in)',
    nameEn: 'Membership/Iteration Operator',
    descAr: 'تُستخدم للتحقق مما إذا كانت قيمة موجودة داخل قائمة/نص، أو للمرور على عناصر معينة.',
    descEn: 'Used to check if a value is inside a list/string, or to loop through a sequence of items.',
    howAr: 'نكتب القيمة ثم in ثم الشيء الذي نبحث داخله، مثل: char in "python".',
    howEn: 'Write the value followed by "in" and the container, like: char in "python".',
    emoji: '🔍',
    color: '#06b6d4'
  },
  'let': {
    nameAr: 'إنشاء متغير (let)',
    nameEn: 'Let Declaration',
    descAr: 'تُستخدم في جافا سكريبت لحجز مكان في الذاكرة لتخزين قيمة يمكن تغييرها لاحقاً.',
    descEn: 'Used in JavaScript to declare a variable whose value can be changed or updated later.',
    howAr: 'نكتب let ثم اسم المتغير وعلامة يساوي والقيمة، مثل: let x = 5;.',
    howEn: 'Write let followed by the variable name, equals sign, and value, like: let x = 5;.',
    emoji: '📦',
    color: '#f59e0b'
  },
  'const': {
    nameAr: 'إنشاء ثابت (const)',
    nameEn: 'Constant Declaration',
    descAr: 'تُستخدم لتعريف "ثابت"؛ أي مكان في الذاكرة يحفظ قيمة لا تتغير أبداً طوال البرنامج.',
    descEn: 'Used to declare a constant variable; a block in memory holding a value that cannot be reassigned.',
    howAr: 'نكتب const تليها القيمة المحددة، مثل: const PI = 3.14;.',
    howEn: 'Write const followed by the constant name and value, like: const PI = 3.14;.',
    emoji: '🔒',
    color: '#ef4444'
  },
  'function': {
    nameAr: 'تعريف الدالة (function)',
    nameEn: 'Function Declaration',
    descAr: 'الكلمة المستخدمة في جافا سكريبت لإنشاء دالة برمجية تقوم بوظيفة محددة.',
    descEn: 'The keyword used in JavaScript to declare a block of reusable code that performs a specific task.',
    howAr: 'نكتب function ثم اسم الدالة وقوسين، مثل: function greet() { }.',
    howEn: 'Write function followed by the name and parentheses, like: function greet() { }.',
    emoji: '⚙️',
    color: '#8b5cf6'
  },
  'console.log': {
    nameAr: 'طباعة للكونسول (console.log)',
    nameEn: 'Console Log Function',
    descAr: 'دالة الطباعة وعرض البيانات في بيئة جافا سكريبت على شاشة المطورين.',
    descEn: 'The function used to print and output information to the console in JavaScript for testing/debugging.',
    howAr: 'نكتب console.log وبداخل القوسين نضع ما نريد طباعته، مثل: console.log("مرحباً");.',
    howEn: 'Write console.log and pass the value you want to print inside parentheses, like: console.log("Hello");.',
    emoji: '🖥️',
    color: '#10b981'
  },
  'return': {
    nameAr: 'إرجاع القيمة (return)',
    nameEn: 'Return Statement',
    descAr: 'تُستخدم لإنهاء عمل الدالة وإرجاع النتيجة النهائية إلى المكان الذي تم استدعاؤها منه.',
    descEn: 'Used to exit a function and pass the final result back to the code that called the function.',
    howAr: 'نكتب return وتليها القيمة التي نريد إرسالها للخارج، مثل: return x + y;.',
    howEn: 'Write return followed by the value or expression you want to send back, like: return x + y;.',
    emoji: '🎁',
    color: '#a855f7'
  },
  'for': {
    nameAr: 'حلقة التكرار (for)',
    nameEn: 'For Loop',
    descAr: 'تُستخدم لتكرار تنفيذ كود معين لعدد محدد من المرات أو للمرور على عناصر معينة بالتوالي.',
    descEn: 'Used to repeat a block of code a specific number of times or iterate over elements in a list.',
    howAr: 'نكتب for ونحدد المتغير والمجموعة، مثل: for i in range(5):.',
    howEn: 'Write for followed by the loop variable and the sequence, like: for i in range(5):.',
    emoji: '🔁',
    color: '#3b82f6'
  },
  'while': {
    nameAr: 'التكرار الشرطي (while)',
    nameEn: 'While Loop',
    descAr: 'حلقة تكرار تستمر في العمل طالما أن الشرط المحدد أمامها صحيح (True).',
    descEn: 'A loop that keeps executing a block of code as long as a specified condition remains true.',
    howAr: 'نكتب while ويليها الشرط ثم الكود، مثل: while x < 10:.',
    howEn: 'Write while followed by the condition, like: while x < 10:.',
    emoji: '🔄',
    color: '#14b8a6'
  },
  'import': {
    nameAr: 'استيراد مكتبة (import)',
    nameEn: 'Import Module',
    descAr: 'تُستخدم لاستدعاء مكتبات أو ملفات برمجية خارجية تحتوي على أدوات جاهزة لتسهيل عملنا.',
    descEn: 'Used to bring in external libraries, packages, or modules that contain pre-written code/tools.',
    howAr: 'نكتب import متبوعة باسم المكتبة، مثل: import math.',
    howEn: 'Write import followed by the library or module name, like: import math.',
    emoji: '📥',
    color: '#6366f1'
  },
  'from': {
    nameAr: 'الاستيراد من (from)',
    nameEn: 'Import From Source',
    descAr: 'تُستخدم لتحديد مكتبة معينة نريد استيراد جزء أو أداة محددة منها فقط.',
    descEn: 'Used to specify the library source from which we want to import a specific function or class.',
    howAr: 'نكتب from ثم اسم المكتبة ثم import والأداة، مثل: from datetime import date.',
    howEn: 'Write from followed by the library, then import and the specific item, like: from datetime import date.',
    emoji: '📍',
    color: '#8b5cf6'
  },
  '__name__': {
    nameAr: 'متغير اسم الملف (__name__)',
    nameEn: 'Module Name Variable',
    descAr: 'متغير خاص في بايثون يُحدد تلقائياً اسم الملف الحالي أو إذا كان الملف يتم تشغيله كملف رئيسي.',
    descEn: 'A special built-in variable in Python that evaluates to the name of the current module or "__main__" if run directly.',
    howAr: 'تُستخدم مع الجمل الشرطية لتنظيم الكود ومنع تشغيله عند الاستيراد، مثل: if __name__ == "__main__":.',
    howEn: 'Used within conditions to organize execution and prevent code running on imports, like: if __name__ == "__main__":.',
    emoji: '🏷️',
    color: '#fb7185'
  },
  '__main__': {
    nameAr: 'النطاق الرئيسي (__main__)',
    nameEn: 'Main Scope',
    descAr: 'الاسم الافتراضي الذي يُطلق على الملف البرمجي عندما تقوم بتشغيله بنفسك بشكل مباشر.',
    descEn: 'The default string value assigned to __name__ when the script is executed directly by the user.',
    howAr: 'نكتبها داخل شرط التحقق من تشغيل الملف، مثل: if __name__ == "__main__":.',
    howEn: 'We write it inside the script entry point condition, like: if __name__ == "__main__":.',
    emoji: '🎯',
    color: '#f43f5e'
  },
  'main': {
    nameAr: 'الدالة الرئيسية (main)',
    nameEn: 'Main Function',
    descAr: 'الاسم الشائع والافتراضي لأول دالة نريد أن يبدأ برنامجنا بتنفيذها.',
    descEn: 'The conventional name used for the primary function where program execution begins.',
    howAr: 'نكتب def main(): لإنشاء نقطة الانطلاق لبرنامجنا.',
    howEn: 'We write def main(): to establish the starting point of our program.',
    emoji: '🚀',
    color: '#10b981'
  },
  'and': {
    nameAr: 'الرابط منطقي (and)',
    nameEn: 'Logical AND',
    descAr: 'أداة ربط تتطلب أن تكون جميع الشروط صحيحة معاً لكي تعطي نتيجة صحيحة (True).',
    descEn: 'A logical operator that requires all conditions to be true for the whole expression to evaluate to True.',
    howAr: 'نضعها بين شرطين، مثل: if age > 10 and age < 20:.',
    howEn: 'Place it between two conditions, like: if age > 10 and age < 20:.',
    emoji: '🔗',
    color: '#0ea5e9'
  },
  'or': {
    nameAr: 'الرابط منطقي (or)',
    nameEn: 'Logical OR',
    descAr: 'أداة ربط يكفي فيها أن يكون شرط واحد فقط صحيحاً لتعطي نتيجة صحيحة (True).',
    descEn: 'A logical operator that returns True if at least one of the conditions is true.',
    howAr: 'نضعها بين الخيارات، مثل: if role == "admin" or role == "editor":.',
    howEn: 'Place it between choices, like: if role == "admin" or role == "editor":.',
    emoji: '⚖️',
    color: '#a855f7'
  },
  'not': {
    nameAr: 'العاكس المنطقي (not)',
    nameEn: 'Logical NOT',
    descAr: 'تُستخدم لعكس حالة الشرط؛ تجعل الصحيح خاطئاً والخاطئ صحيحاً.',
    descEn: 'A logical operator used to reverse the boolean value of an expression (True becomes False, and vice versa).',
    howAr: 'نكتبها قبل الشرط المراد عكسه، مثل: if not isLoggedIn:.',
    howEn: 'Write it before the condition you want to invert, like: if not isLoggedIn:.',
    emoji: '🔄',
    color: '#f43f5e'
  },
  'True': {
    nameAr: 'القيمة صحيحة (True)',
    nameEn: 'Boolean True',
    descAr: 'تمثل القيمة المنطقية "صح" أو "متحقق" في لغة بايثون.',
    descEn: 'Represents the boolean value of true (or active/met condition) in Python.',
    howAr: 'تبدأ بحرف كبير وتُستخدم في المقارنات أو كحالة افتراضية، مثل: isActive = True.',
    howEn: 'Starts with a capital T and is used in conditions or flags, like: isActive = True.',
    emoji: '✅',
    color: '#10b981'
  },
  'False': {
    nameAr: 'القيمة خاطئة (False)',
    nameEn: 'Boolean False',
    descAr: 'تمثل القيمة المنطقية "خطأ" أو "غير متحقق" في لغة بايثون.',
    descEn: 'Represents the boolean value of false (or inactive/unmet condition) in Python.',
    howAr: 'تبدأ بحرف كبير وتُستخدم للإيقاف أو الحظر، مثل: isOpen = False.',
    howEn: 'Starts with a capital F and is used to reset states, like: isOpen = False.',
    emoji: '❌',
    color: '#ef4444'
  },
  'true': {
    nameAr: 'القيمة صحيحة (true)',
    nameEn: 'Boolean True',
    descAr: 'تمثل القيمة المنطقية "صح" أو "متحقق" في لغة جافا سكريبت.',
    descEn: 'Represents the boolean value of true in JavaScript.',
    howAr: 'تُكتب بأحرف صغيرة وتُستخدم في الشروط والمنطق، مثل: let active = true;.',
    howEn: 'Written in lowercase and used for logical comparisons, like: let active = true;.',
    emoji: '✅',
    color: '#10b981'
  },
  'false': {
    nameAr: 'القيمة خاطئة (false)',
    nameEn: 'Boolean False',
    descAr: 'تمثل القيمة المنطقية "خطأ" أو "غير متحقق" في لغة جافا سكريبت.',
    descEn: 'Represents the boolean value of false in JavaScript.',
    howAr: 'تُكتب بأحرف صغيرة وتُستخدم كحالة افتراضية للنفي، مثل: let loading = false;.',
    howEn: 'Written in lowercase and used for state verification, like: let loading = false;.',
    emoji: '❌',
    color: '#ef4444'
  },
  'class': {
    nameAr: 'الفئة أو الصنف (class)',
    nameEn: 'Class Declaration',
    descAr: 'القالب أو المخطط الهندسي الذي نستخدمه لإنشاء كائنات (Objects) تحتوي على خصائص وأفعال معينة.',
    descEn: 'The blueprint or template used to create objects that bundle data (properties) and methods.',
    howAr: 'نكتب class تليها الاسم ثم نقطتين أو قوسين، مثل: class Student:.',
    howEn: 'Write class followed by the class name, like: class Student:.',
    emoji: '🏛️',
    color: '#ec4899'
  },
  'input': {
    nameAr: 'إدخال المستخدم (input)',
    nameEn: 'Input Function',
    descAr: 'دالة تطلب من المستخدم إدخال نص أو قيمة من لوحة المفاتيح وتنتظر استجابته.',
    descEn: 'A function that prompts the user to enter input or text from the keyboard and returns it.',
    howAr: 'نكتبها مع رسالة توضيحية اختيارية، مثل: name = input("اكتب اسمك: ").',
    howEn: 'Write it with an optional prompt message, like: name = input("Enter name: ").',
    emoji: '⌨️',
    color: '#eab308',
    prototype: 'input(prompt=\'\')',
    parameters: 'prompt (str, optional): string to display on the terminal before reading input',
    returnValue: 'str: the string entered by the user',
    blueprint: 'user_response = input("Please enter your age: ")'
  },
  'int': {
    nameAr: 'العدد الصحيح (int)',
    nameEn: 'Integer Function',
    descAr: 'تُستخدم لتمثيل الأعداد الصحيحة (بدون فاصلة عشرية) أو لتحويل نص يحتوي على رقم إلى عدد صحيح.',
    descEn: 'Represents integer numbers (without decimals) or casts/converts a string containing digits into an integer.',
    howAr: 'نضع القيمة المراد تحويلها بين قوسين، مثل: age = int("15").',
    howEn: 'Place the value to be converted inside parentheses, like: age = int("15").',
    emoji: '🔢',
    color: '#3b82f6',
    prototype: 'int(x=0, base=10)',
    parameters: 'x (str/number): number or string to convert; base (int): base representation of the number',
    returnValue: 'int: integer representation of the given input value',
    blueprint: 'number = int("100")'
  },
  'str': {
    nameAr: 'النص أو السلسلة (str)',
    nameEn: 'String Function',
    descAr: 'تمثل النصوص وسلاسل الحروف، أو تُستخدم لتحويل أي قيمة (مثل رقم) إلى صيغة نصية لطباعتها.',
    descEn: 'Represents textual data, or converts other types (like numbers) into string format.',
    howAr: 'نمرر القيمة للدالة str، مثل: text_age = str(18).',
    howEn: 'Pass the value to the str function, like: text_age = str(18).',
    emoji: '🔤',
    color: '#10b981',
    prototype: 'str(object=\'\')',
    parameters: 'object (any): object whose string representation is to be returned',
    returnValue: 'str: string representation of the object',
    blueprint: 'message = "Age is " + str(25)'
  },
  'float': {
    nameAr: 'العدد العشري (float)',
    nameEn: 'Float Function',
    descAr: 'تمثل الأعداد العشرية (التي تحتوي على فاصلة عشرية) أو تُستخدم لتحويل الأرقام والنصوص إليها.',
    descEn: 'Represents floating-point numbers (with decimals) or converts other types to decimal numbers.',
    howAr: 'نستخدمها عند التعامل مع القياسات الدقيقة والأسعار، مثل: price = float("19.99").',
    howEn: 'Use it when dealing with precise measurements and prices, like: price = float("19.99").',
    emoji: '🎯',
    color: '#06b6d4',
    prototype: 'float(x=0.0)',
    parameters: 'x (str/number): value to convert to a floating point number',
    returnValue: 'float: floating point representation of the input value',
    blueprint: 'price = float("9.99")'
  },
  'len': {
    nameAr: 'طول الشيء (len)',
    nameEn: 'Length Function',
    descAr: 'دالة سريعة تُعطيك عدد الحروف في كلمة معينة، أو عدد العناصر داخل قائمة.',
    descEn: 'A utility function that returns the number of characters in a string, or the number of items in a list.',
    howAr: 'نضع القائمة أو النص بين قوسين، مثل: count = len("SVK"). سيعود بـ 3.',
    howEn: 'Pass the list or string, like: count = len("SVK"). It evaluates to 3.',
    emoji: '📏',
    color: '#ec4899',
    prototype: 'len(s)',
    parameters: 's (str/list/tuple/dict): container or sequence whose size is measured',
    returnValue: 'int: number of elements/characters in the container',
    blueprint: 'count = len([1, 2, 3, 4])'
  },
  'range': {
    nameAr: 'نطاق الأرقام (range)',
    nameEn: 'Range Function',
    descAr: 'دالة تُنشئ سلسلة متتالية من الأرقام، وتُستخدم بكثرة مع حلقات التكرار (for).',
    descEn: 'A function that generates a sequence of numbers, commonly used in loops.',
    howAr: 'نحدد الرقم الأخير غير الشامل، مثل: range(5) يعطي الأرقام من 0 إلى 4.',
    howEn: 'Pass the end boundary (exclusive), like: range(5) which yields numbers from 0 to 4.',
    emoji: '📈',
    color: '#6366f1',
    prototype: 'range(stop) or range(start, stop[, step])',
    parameters: 'start (int, optional): starting value (default 0); stop (int): end boundary (exclusive); step (int, optional): value increment/decrement steps (default 1)',
    returnValue: 'range: an immutable sequence object of integers',
    blueprint: 'for item in range(0, 10, 2):'
  },
  'try': {
    nameAr: 'محاولة التشغيل (try)',
    nameEn: 'Try Block',
    descAr: 'تُستخدم لبدء حماية جزء من الكود نتوقع أنه قد يسبب خطأً يوقف البرنامج، لكي نجرب تشغيله بأمان.',
    descEn: 'Used to write code that might throw an error. It lets the program "try" running it without crashing.',
    howAr: 'نكتب try: ويليها الكود المحمي بمسافة بادئة.',
    howEn: 'Write try: followed by the protected code indented.',
    emoji: '🛡️',
    color: '#10b981'
  },
  'except': {
    nameAr: 'معالجة الخطأ (except)',
    nameEn: 'Except Block',
    descAr: 'تأتي بعد (try) وتُحدد ما الذي يجب على البرنامج فعله في حال حدوث خطأ لمنع توقفه المفاجئ.',
    descEn: 'Used in Python after try. It catches any error and specifies how the program should handle it.',
    howAr: 'نكتب except Exception as e: لعرض رسالة خطأ لطيفة بدلاً من تعطل البرنامج.',
    howEn: 'Write except Exception as e: to display a nice error message instead of crashing.',
    emoji: '🩹',
    color: '#f43f5e'
  },
  'catch': {
    nameAr: 'التقاط الخطأ (catch)',
    nameEn: 'Catch Block',
    descAr: 'المقابل لـ (except) في جافا سكريبت، تُستخدم لالتقاط الأخطاء بعد تجربة كود معين.',
    descEn: 'Used in JavaScript alongside try. It catches any errors thrown inside the try block.',
    howAr: 'نكتبها بعد try مباشرة لتلقي الخطأ والتعامل معه، مثل: catch(error) { }.',
    howEn: 'Write it directly after try to receive and handle the error, like: catch(error) { }.',
    emoji: '🥅',
    color: '#ef4444'
  }
};

export default function LessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const router = useRouter();
  const { lessonId } = use(params);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [sidebar, setSidebar] = useState(true);
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState<'explanation' | 'syntax' | 'editor'>('explanation');
  
  // Target group state from context
  const { targetGroup, toggleTargetGroup } = useTargetGroup();
  const isKids = targetGroup === 'kids';

  // Macro exam state
  const [macroExamPassed, setMacroExamPassed] = useState(false);

  // Interactive Code Playground States
  const [code, setCode] = useState('');
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [practiceStatus, setPracticeStatus] = useState<'idle' | 'success' | 'fail'>('idle');

  // Micro Quiz & progression states
  const [microQuizPassed, setMicroQuizPassed] = useState(false);
  const [selectedMicroAnswer, setSelectedMicroAnswer] = useState<number | null>(null);
  const [microQuizAnswered, setMicroQuizAnswered] = useState(false);
  const [microQuizError, setMicroQuizError] = useState(false);
  const [microQuizQuestion, setMicroQuizQuestion] = useState<any>(null);

  // Exam States
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [activeTab, setActiveTab] = useState<'workspace' | 'quiz'>('workspace');

  // Activation Request States
  const [requested, setRequested] = useState(false);
  const [requesting, setRequesting] = useState(false);


  const [activeSpeech, setActiveSpeech] = useState<{ keyword: string; lang: 'ar' | 'en' } | null>(null);

  const speakSyntax = (keyword: string, text: string, lang: 'ar' | 'en') => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      alert('متصفحك لا يدعم ميزة قراءة النصوص صوتياً');
      return;
    }

    if (activeSpeech?.keyword === keyword && activeSpeech?.lang === lang) {
      window.speechSynthesis.cancel();
      setActiveSpeech(null);
      return;
    }

    window.speechSynthesis.cancel();
    
    const langTag = lang === 'ar' ? 'ar-EG' : 'en-US';
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langTag;
    utterance.rate = 0.9;

    const voices = window.speechSynthesis.getVoices();
    const targetVoice = voices.find(v => v.lang.startsWith(lang === 'ar' ? 'ar' : 'en'));
    if (targetVoice) {
      utterance.voice = targetVoice;
    }

    utterance.onend = () => {
      setActiveSpeech(null);
    };

    utterance.onerror = () => {
      setActiveSpeech(null);
    };

    setActiveSpeech({ keyword, lang });
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setSidebar(false);
    }
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  useEffect(() => {
    async function fetchLesson() {
      try {
        const res = await fetch(`/api/lessons/${lessonId}`, { cache: 'no-store' });
        if (res.ok) {
          const json = await res.json();
          setData(json);
          setCode(json.lesson.code_template || '');
          setConsoleOutput([]);
          setPracticeStatus('idle');
          setShowResults(false);
          setAnswers({});
          setActiveTab('workspace');
          setActiveWorkspaceTab('explanation');
          setRequested(json.hasRequested || false);

          // Micro quiz reset and generation
          const previouslyQuizPassed = localStorage.getItem(`svk_quiz_passed_${json.lesson.id}`) === 'true';
          setMicroQuizPassed(previouslyQuizPassed);
          setSelectedMicroAnswer(null);
          setMicroQuizAnswered(false);
          setMicroQuizError(false);

          let questions = [];
          if (json.lesson.exam_data) {
            try {
              const parsed = typeof json.lesson.exam_data === 'string' ? JSON.parse(json.lesson.exam_data) : json.lesson.exam_data;
              if (parsed && parsed.questions) {
                questions = parsed.questions;
              }
            } catch (e) {
              console.error(e);
            }
          }

          if (questions.length > 0) {
            setMicroQuizQuestion(questions[0]);
          } else {
            const isCyber = json.course?.category?.toLowerCase() === 'cybersecurity';
            setMicroQuizQuestion({
              question: isCyber 
                ? `ما هو الهدف الأساسي من الإجراء الأمني المشروح في هذا الدرس؟`
                : `ما هي الوظيفة الأساسية للأداة/التعليمة البرمجية المشروحة في هذا الدرس؟`,
              options: [
                "تنفيذ الإجراء الأمني البرمجي الصحيح وحماية النظام وتطبيقه بكفاءة.",
                "تسريع استهلاك موارد الجهاز وإبطاء الشبكة بلا مبرر.",
                "إلغاء تفعيل بروتوكولات الحماية بالكامل والسماح بالاختراقات.",
                "تكرار كتابة المتغيرات يدوياً بدون وظيفة محددة."
              ],
              correctAnswer: 0,
              explanation: "الهدف الرئيسي هو تحقيق الوظيفة البرمجية أو الأمنية المطلوبة لحماية وبناء الأنظمة بكفاءة."
            });
          }
        } else {
          router.push('/courses');
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchLesson();
  }, [lessonId]);

  // Find index of current lesson in sidebar
  const currentIdx = data ? data.sidebar.findIndex((l: any) => String(l.id) === String(lessonId)) : -1;
  const isMacroExamDue = data && currentIdx > 0 && (currentIdx + 1) % 20 === 0;
  const milestone = data ? Math.ceil((currentIdx + 1) / 20) * 20 : 0;
  const track = data ? (data.course?.category?.toLowerCase() === 'languages' ? 'languages' : (data.course?.category?.toLowerCase() === 'cybersecurity' ? 'cybersecurity' : 'programming')) : 'programming';

  useEffect(() => {
    if (data && currentIdx !== -1) {
      const passed = localStorage.getItem(`svk_macro_exam_${track}_${milestone}`) === 'passed';
      setMacroExamPassed(passed);
    }
  }, [data, currentIdx, track, milestone]);

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: '#020205', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '60px', height: '60px', border: '3px solid rgba(16,185,129,0.1)', borderTopColor: '#10b981', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (!data) return null;

  const { lesson, course, sidebar: sideLessons } = data;
  const isLanguage = course?.category?.toLowerCase() === 'languages';

  let examObj = null;
  if (lesson.exam_data) {
    examObj = typeof lesson.exam_data === 'string' ? JSON.parse(lesson.exam_data) : lesson.exam_data;
  }

  const prevLesson = currentIdx > 0 ? sideLessons[currentIdx - 1] : null;
  const nextLesson = currentIdx < sideLessons.length - 1 ? sideLessons[currentIdx + 1] : null;

  // Run Code Logic
  const handleRunCode = () => {
    setIsRunning(true);
    setConsoleOutput([]);
    
    setTimeout(() => {
      try {
        const outputs: string[] = [];
        
        if (course.category?.toLowerCase() === 'cybersecurity') {
          const cmd = code.trim();
          if (cmd === 'nmap -sS target') {
            outputs.push("Starting Nmap 7.92 ( https://nmap.org )");
            outputs.push("Nmap scan report for target (192.168.1.100)");
            outputs.push("PORT    STATE SERVICE");
            outputs.push("22/tcp  open  ssh");
            outputs.push("80/tcp  open  http");
            outputs.push("443/tcp open  https");
            outputs.push("Nmap done: 1 IP address scanned in 2.10 seconds");
          } else if (cmd.startsWith('ssh ')) {
            outputs.push("ssh: Connecting to " + cmd.replace('ssh ', '') + "...");
            outputs.push("Warning: Permanently added to list of known hosts.");
            outputs.push("admin@sandbox:~$ Welcome to Linux Defense Terminal!");
          } else if (cmd === 'iptables -L' || cmd.startsWith('iptables ')) {
            outputs.push("Chain INPUT (policy ACCEPT)");
            outputs.push("target     prot opt source               destination");
            if (cmd.includes('-A INPUT -p tcp --dport 22 -j DROP')) {
              outputs.push("DROP       tcp  --  anywhere             anywhere             tcp dpt:ssh");
            }
          } else if (cmd.startsWith('encrypt ') || cmd.startsWith('decrypt ')) {
            outputs.push("Applying Cryptography Primitives...");
            outputs.push("Result: " + Buffer.from(cmd.split(' ')[1] || '').toString('base64'));
          } else {
            outputs.push("Linux Shell Sandbox: Command not recognized.");
            outputs.push("Try security commands like: 'nmap -sS target', 'iptables -L', or 'ssh admin@target'.");
          }
        } else if (course.category === 'javascript') {
          // Safe eval capturing console.log
          const originalLog = console.log;
          console.log = (...args) => {
            outputs.push(args.join(' '));
          };
          
          try {
            // Run JS code
            const fn = new Function(code);
            fn();
          } catch (err: any) {
            outputs.push(`Error: ${err.message}`);
          } finally {
            console.log = originalLog;
          }
        } else if (course.category === 'python' || course.category === 'ai') {
          try {
            const outputsList: string[] = [];
            const sandbox = {
              _mul: (a: any, b: any) => {
                if (typeof a === 'string') return a.repeat(b);
                if (typeof b === 'string') return b.repeat(a);
                return a * b;
              },
              print: (...args: any[]) => {
                outputsList.push(args.map(arg => {
                  if (typeof arg === 'object') return JSON.stringify(arg);
                  return String(arg);
                }).join(' '));
              },
              str: (v: any) => String(v),
              int: (v: any) => parseInt(v),
              float: (v: any) => parseFloat(v),
              type: (v: any) => {
                if (typeof v === 'number') {
                  return Number.isInteger(v) ? "<class 'int'>" : "<class 'float'>";
                }
                if (typeof v === 'string') return "<class 'str'>";
                if (typeof v === 'boolean') return "<class 'bool'>";
                if (Array.isArray(v)) return "<class 'list'>";
                return `<class '${typeof v}'>`;
              },
              len: (v: any) => v ? v.length : 0,
              range: (start: number, end?: number, step?: number) => {
                let s = start;
                let e = end;
                let st = step || 1;
                if (e === undefined) {
                  e = start;
                  s = 0;
                }
                const res = [];
                for (let i = s; st > 0 ? i < e : i > e; i += st) {
                  res.push(i);
                }
                return res;
              },
              math: {
                sqrt: (v: number) => Math.sqrt(v),
                floor: (v: number) => Math.floor(v),
              },
              random: {
                randint: (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min,
              },
              datetime: {
                date: {
                  today: () => ({ year: new Date().getFullYear() })
                }
              },
              json: {
                loads: (v: string) => JSON.parse(v)
              }
            };

            const lines = code.split('\n');
            const jsLines: string[] = [];
            const indentStack: number[] = [];

            for (let i = 0; i < lines.length; i++) {
              const line = lines[i];
              const trimmed = line.trim();
              if (!trimmed) {
                jsLines.push(line);
                continue;
              }

              const indentMatch = line.match(/^(\s*)/);
              const indent = indentMatch ? indentMatch[1].length : 0;

              while (indentStack.length > 0 && indent <= indentStack[indentStack.length - 1]) {
                const closedIndent = indentStack.pop() || 0;
                jsLines.push(' '.repeat(closedIndent) + '}');
              }

              // Parse line to extract inline comments
              let cleanLine = '';
              let inString = false;
              let stringChar = '';
              let charIdx = 0;
              while (charIdx < line.length) {
                const char = line[charIdx];
                if ((char === '"' || char === "'") && (charIdx === 0 || line[charIdx - 1] !== '\\')) {
                  if (!inString) {
                    inString = true;
                    stringChar = char;
                  } else if (char === stringChar) {
                    inString = false;
                  }
                  cleanLine += char;
                  charIdx++;
                  continue;
                }
                if (inString) {
                  cleanLine += char;
                  charIdx++;
                  continue;
                }
                if (char === '#') {
                  cleanLine += '//' + line.substring(charIdx + 1);
                  break;
                }
                cleanLine += char;
                charIdx++;
              }

              let processed = cleanLine;

              // If it's a full comment line now, just push and skip
              if (processed.trim().startsWith('//')) {
                jsLines.push(processed);
                continue;
              }

              // Booleans
              processed = processed.replace(/\bTrue\b/g, 'true').replace(/\bFalse\b/g, 'false');

              // String and variable multiplications using helper _mul
              processed = processed.replace(/(["'])(.*?)\1\s*\*\s*(\d+)/g, '_mul("$2", $3)');
              processed = processed.replace(/(\d+)\s*\*\s*(["'])(.*?)\2/g, '_mul($1, "$3")');
              processed = processed.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\*\s*(\d+)/g, '_mul($1, $2)');
              processed = processed.replace(/\b(\d+)\s*\*\s*([a-zA-Z_][a-zA-Z0-9_]*)\b/g, '_mul($1, $2)');
              processed = processed.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\*\s*([a-zA-Z_][a-zA-Z0-9_]*)\b/g, '_mul($1, $2)');

              // Convert print
              processed = processed.replace(/\bprint\s*\(/g, 'print(');

              // Assignments x = y to let x = y
              const assignmentMatch = processed.match(/^(\s*)([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.*)$/);
              if (assignmentMatch && !processed.includes('==') && !processed.includes('!=') && !processed.includes('>=') && !processed.includes('<=')) {
                const ind = assignmentMatch[1];
                const varName = assignmentMatch[2];
                const valExpr = assignmentMatch[3];
                processed = `${ind}let ${varName} = ${valExpr};`;
              }

              // Functions
              if (trimmed.startsWith('def ')) {
                processed = processed.replace(/\bdef\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\((.*?)\)\s*:/g, 'function $1($2) {');
                indentStack.push(indent);
              }
              // Classes
              else if (trimmed.startsWith('class ')) {
                processed = processed.replace(/\bclass\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*:/g, 'class $1 {');
                indentStack.push(indent);
              }
              else if (trimmed.startsWith('def __init__')) {
                processed = processed.replace(/\bdef\s+__init__\s*\(\s*self\s*,?\s*(.*?)\)\s*:/g, 'constructor($1) {');
                indentStack.push(indent);
              }
              else if (trimmed.startsWith('def ') && indentStack.length > 0) {
                processed = processed.replace(/\bdef\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(\s*self\s*,?\s*(.*?)\)\s*:/g, '$1($2) {');
                indentStack.push(indent);
              }
              // Statements if, elif, else, while, for
              else if (trimmed.startsWith('if ') && trimmed.endsWith(':')) {
                processed = processed.replace(/\bif\s+(.*?)\s*:/g, 'if ($1) {');
                indentStack.push(indent);
              }
              else if (trimmed.startsWith('elif ') && trimmed.endsWith(':')) {
                processed = processed.replace(/\belif\s+(.*?)\s*:/g, 'else if ($1) {');
                indentStack.push(indent);
              }
              else if (trimmed === 'else:') {
                processed = 'else {';
                indentStack.push(indent);
              }
              else if (trimmed.startsWith('while ') && trimmed.endsWith(':')) {
                processed = processed.replace(/\bwhile\s+(.*?)\s*:/g, 'while ($1) {');
                indentStack.push(indent);
              }
              else if (trimmed.startsWith('for ') && trimmed.includes('range(') && trimmed.endsWith(':')) {
                const forMatch = trimmed.match(/for\s+([a-zA-Z_][a-zA-Z0-9_]*)\s+in\s+range\(\s*(.*?)\s*\)\s*:/);
                if (forMatch) {
                  processed = ' '.repeat(indent) + `for (let ${forMatch[1]} of range(${forMatch[2]})) {`;
                  indentStack.push(indent);
                }
              }
              else if (trimmed.startsWith('for ') && trimmed.includes(' in ') && trimmed.endsWith(':')) {
                const forMatch = trimmed.match(/for\s+([a-zA-Z_][a-zA-Z0-9_]*)\s+in\s+(.*?)\s*:/);
                if (forMatch) {
                  processed = ' '.repeat(indent) + `for (let ${forMatch[1]} of ${forMatch[2]}) {`;
                  indentStack.push(indent);
                }
              }

              // self. to this.
              processed = processed.replace(/\bself\./g, 'this.');
              // Logical and/or/not
              processed = processed.replace(/\band\b/g, '&&').replace(/\bor\b/g, '||').replace(/\bnot\b/g, '!');

              jsLines.push(processed);
            }

            while (indentStack.length > 0) {
              const closedIndent = indentStack.pop() || 0;
              jsLines.push(' '.repeat(closedIndent) + '}');
            }

            const finalJsCode = jsLines.join('\n');

            const sandboxKeys = Object.keys(sandbox);
            const sandboxVals = Object.values(sandbox);
            const runnerFn = new Function(...sandboxKeys, finalJsCode);
            runnerFn(...sandboxVals);

            outputs.push(...outputsList);
            if (outputs.length === 0) {
              outputs.push('Code executed successfully. No output returned.');
            }
          } catch (err: any) {
            outputs.push(`Error: ${err.message}`);
          }
        } else {
          // Fallback static output
          outputs.push(lesson.practice_expected || 'Code executed successfully!');
        }


        setConsoleOutput(outputs);

        // Verify output via SandboxTestCases validation matrix
        const expected = (lesson.practice_expected || '').trim();
        
        // Matrix of automated validation conditions mapping input syntax requirements to output evaluations
        const SandboxTestCases: Record<string, (codeContent: string, terminalOutputs: string[]) => boolean> = {
          'python': (codeContent, terminalOutputs) => {
            const hasExpectedOutput = expected ? terminalOutputs.some(out => out.trim().toLowerCase().includes(expected.toLowerCase())) : true;
            // Ensure student didn't just print the result, but actually used logic if required
            if (expected.includes('15') || expected.includes('int')) {
              return hasExpectedOutput && codeContent.includes('=');
            }
            return hasExpectedOutput;
          },
          'cybersecurity': (codeContent, terminalOutputs) => {
            return expected ? terminalOutputs.some(out => out.trim().toLowerCase().includes(expected.toLowerCase())) : true;
          },
          'javascript': (codeContent, terminalOutputs) => {
            return expected ? terminalOutputs.some(out => out.trim().toLowerCase().includes(expected.toLowerCase())) : true;
          }
        };

        const categoryKey = course.category?.toLowerCase() || '';
        let matched = false;
        if (SandboxTestCases[categoryKey]) {
          matched = SandboxTestCases[categoryKey](code, outputs);
        } else {
          matched = expected ? outputs.some(out => out.trim().toLowerCase().includes(expected.toLowerCase())) : true;
        }
        
        if (matched) {
          setPracticeStatus('success');
        } else {
          setPracticeStatus('fail');
        }

      } catch (e: any) {
        setConsoleOutput([`Error: ${e.message}`]);
        setPracticeStatus('fail');
      } finally {
        setIsRunning(false);
      }
    }, 600);
  };

  const handleExamSubmit = async () => {
    let correct = 0;
    examObj.questions.forEach((q: any, i: number) => {
      if (answers[i] === q.correctAnswer) correct++;
    });
    setScore(correct);
    setShowResults(true);

    try {
      await fetch('/api/lessons/complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lessonSlug: String(lesson.id),
          score: correct,
          totalQuestions: examObj.questions.length
        })
      });
    } catch (e) {
      console.error('Failed to submit lesson completion score:', e);
    }
  };

  const handleRequestActivation = async () => {
    if (!data || requesting) return;
    setRequesting(true);
    try {
      const res = await fetch('/api/courses/request-activation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId: course.id })
      });
      if (res.ok) {
        setRequested(true);
      } else {
        const err = await res.json();
        alert(err.error || 'فشل في إرسال طلب التفعيل');
      }
    } catch (e) {
      console.error(e);
      alert('حدث خطأ في الاتصال بالخادم');
    } finally {
      setRequesting(false);
    }
  };

  // Lock logic: Check if any previous milestones are not passed
  let lockedMilestone = 0;
  if (data && currentIdx !== -1) {
    const maxMilestoneToCheck = Math.floor(currentIdx / 20) * 20;
    for (let m = 20; m <= maxMilestoneToCheck; m += 20) {
      if (typeof window !== 'undefined' && localStorage.getItem(`svk_macro_exam_${track}_${m}`) !== 'passed') {
        lockedMilestone = m;
        break;
      }
    }
  }

  if (lockedMilestone > 0) {
    return (
      <SmartExamView 
        track={track} 
        milestone={lockedMilestone} 
        onPass={() => {
          if (typeof window !== 'undefined') {
            localStorage.setItem(`svk_macro_exam_${track}_${lockedMilestone}`, 'passed');
            window.location.reload();
          }
        }} 
        onExit={() => router.push('/courses')} 
      />
    );
  }

  if (isMacroExamDue && !macroExamPassed) {
    return (
      <SmartExamView 
        track={track} 
        milestone={milestone} 
        onPass={() => {
          if (typeof window !== 'undefined') {
            localStorage.setItem(`svk_macro_exam_${track}_${milestone}`, 'passed');
          }
          setMacroExamPassed(true);
        }} 
        onExit={() => router.push('/courses')} 
      />
    );
  }

  if (isLanguage) {
    return (
      <>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet" />
        <LanguageLearningLayout data={data} />
      </>
    );
  }


  return (
    <div style={{ fontFamily: "'Cairo', sans-serif", direction: 'rtl', background: isKids ? '#fef08a' : '#020205', color: isKids ? '#1e293b' : '#e2e8f0', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet" />

      {/* Header */}
      <header className="learning-header" style={{ borderBottom: isKids ? '4px solid #f43f5e' : '1px solid rgba(16,185,129,0.1)', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: isKids ? '#ffffff' : 'rgba(5,5,10,0.95)', backdropFilter: 'blur(20px)', height: 70, flexShrink: 0, zIndex: 100, flexWrap: 'nowrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
          <button onClick={() => setSidebar(!sidebar)} style={{ background: isKids ? '#ffe4e6' : 'rgba(16,185,129,0.1)', border: `1px solid ${isKids ? '#fb7185' : 'rgba(16,185,129,0.2)'}`, color: isKids ? '#e11d48' : '#10b981', width: 40, height: 40, borderRadius: '10px', cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>☰</button>
          <div className="lesson-header-title">
            <span className="desktop-text" style={{ fontSize: '0.75rem', color: isKids ? '#fb7185' : '#64748b' }}>{course.title_ar || course.title}</span>
            <span className="lesson-title" style={{ fontSize: '1rem', fontWeight: 900, color: isKids ? '#e11d48' : '#fff' }}>{lesson.title}</span>
          </div>
        </div>


        {/* Tab Controls */}
        <div style={{ display: 'flex', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '10px', padding: '4px', flexShrink: 0 }}>
          <button 
            className="header-tab-btn"
            onClick={() => setActiveTab('workspace')} 
            style={{ 
              background: activeTab === 'workspace' ? 'rgba(16,185,129,0.15)' : 'transparent', 
              border: 'none', 
              color: activeTab === 'workspace' ? '#10b981' : '#94a3b8', 
              padding: '8px 20px', 
              borderRadius: '8px', 
              cursor: 'pointer', 
              fontFamily: "'Cairo', sans-serif", 
              fontSize: '0.9rem', 
              fontWeight: 700, 
              transition: 'all 0.2s',
              whiteSpace: 'nowrap'
            }}
          >
            <span className="desktop-text">{isLanguage ? '📖 مساحة الدرس والتعلم' : '💻 مساحة التطبيق العملي (4 لوحات)'}</span>
            <span className="mobile-text">{isLanguage ? '📖 الدرس' : '💻 التطبيق'}</span>
          </button>
          {examObj && (
            <button 
              className="header-tab-btn"
              onClick={() => setActiveTab('quiz')} 
              style={{ 
                background: activeTab === 'quiz' ? 'rgba(16,185,129,0.15)' : 'transparent', 
                border: 'none', 
                color: activeTab === 'quiz' ? '#10b981' : '#94a3b8', 
                padding: '8px 20px', 
                borderRadius: '8px', 
                cursor: 'pointer', 
                fontFamily: "'Cairo', sans-serif", 
                fontSize: '0.9rem', 
                fontWeight: 700, 
                transition: 'all 0.2s', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                whiteSpace: 'nowrap'
              }}
            >
              <span className="desktop-text">🧠 اختبار الدرس 📝</span>
              <span className="mobile-text">🧠 الاختبار</span>
            </button>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
          {/* Kids/Adults mode Switcher toggle */}
          <button 
            onClick={toggleTargetGroup}
            style={{
              background: isKids ? '#fb7185' : 'rgba(255,255,255,0.08)',
              border: `1px solid ${isKids ? '#e11d48' : 'rgba(255,255,255,0.1)'}`,
              color: '#fff',
              padding: '8px 16px',
              borderRadius: '20px',
              fontWeight: 800,
              cursor: 'pointer',
              fontSize: '0.85rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              fontFamily: "'Cairo', sans-serif"
            }}
          >
            {isKids ? '🧑‍💼 وضع الكبار' : '👶 وضع الأطفال'}
          </button>

          <Link href={`/courses/${lesson.course_id}`} style={{ textDecoration: 'none' }}>
            <button 
              className="exit-button"
              style={{ 
                background: 'rgba(239, 68, 68, 0.1)', 
                border: '1px solid rgba(239, 68, 68, 0.2)', 
                color: '#f87171', 
                padding: '8px 16px', 
                borderRadius: '10px', 
                fontSize: '0.85rem', 
                fontWeight: 600, 
                cursor: 'pointer', 
                fontFamily: "'Cairo', sans-serif", 
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap'
              }}
            >
              <span className="desktop-text">خروج من الدرس</span>
              <span className="mobile-text" style={{ fontSize: '1rem', fontWeight: 'bold' }}>✕</span>
            </button>
          </Link>
        </div>
      </header>


      {/* Main Container */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden', position: 'relative' }}>
        {/* Mobile Sidebar Backdrop */}
        {sidebar && (
          <div 
            className="sidebar-backdrop"
            onClick={() => setSidebar(false)}
            style={{
              display: 'none',
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(4px)',
              zIndex: 85,
              transition: 'opacity 0.3s ease'
            }}
          />
        )}

        {/* Navigation Sidebar */}
        {sidebar && (
          <aside className="navigation-sidebar" style={{ width: 320, background: isKids ? '#ffffff' : 'rgba(5,5,10,0.85)', borderLeft: isKids ? '4px solid #fb7185' : '1px solid rgba(16,185,129,0.1)', overflowY: 'auto', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
            <div style={{ padding: '24px 20px', borderBottom: `1px solid ${isKids ? '#ffe4e6' : 'rgba(16,185,129,0.1)'}`, background: isKids ? '#fff9fa' : 'rgba(16,185,129,0.02)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ fontSize: '0.85rem', color: isKids ? '#e11d48' : '#10b981', fontWeight: 800 }}>{isKids ? '🗺️ طريق البطل' : 'التقدم الدراسي'}</span>
                <span style={{ fontSize: '0.85rem', color: isKids ? '#475569' : '#64748b', fontFamily: 'monospace', fontWeight: 'bold' }}>{currentIdx + 1} / {sideLessons.length}</span>
              </div>
              <div style={{ width: '100%', height: 8, background: isKids ? '#cbd5e1' : 'rgba(255,255,255,0.05)', borderRadius: 4, overflow: 'hidden' }}>
                <div style={{ width: `${((currentIdx + 1) / sideLessons.length) * 100}%`, height: '100%', background: isKids ? 'linear-gradient(90deg, #fb7185, #e11d48)' : 'linear-gradient(90deg, #10b981, #059669)', borderRadius: 4 }} />
              </div>
            </div>
            
            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: 6 }}>
              {sideLessons.map((l: any, idx: number) => {
                const isActive = Number(l.id) === Number(lessonId);
                return (
                  <Link key={l.id} href={`/learn/${l.id}`} style={{ textDecoration: 'none' }}>
                    <div style={{
                      padding: '12px 16px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: 12,
                      background: isActive ? (isKids ? '#ffe4e6' : 'rgba(16,185,129,0.1)') : 'transparent',
                      border: isActive ? `1px solid ${isKids ? '#fb7185' : 'rgba(16,185,129,0.2)'}` : '1px solid transparent',
                      color: isActive ? (isKids ? '#e11d48' : '#10b981') : (isKids ? '#475569' : '#94a3b8'), transition: 'all 0.2s', cursor: 'pointer'
                    }}>
                      <div style={{ width: 24, height: 24, borderRadius: 6, background: isActive ? (isKids ? '#e11d48' : '#10b981') : 'rgba(255,255,255,0.05)', color: isActive ? (isKids ? '#fff' : '#000') : '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800 }}>
                        {idx + 1}
                      </div>
                      <span style={{ fontSize: '0.9rem', fontWeight: isActive ? 800 : 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>{l.title.replace(/الدرس \d+:\s*/, '')}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </aside>
        )}


        {/* Content Workspace */}
        <main className="main-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
          {data.accessStatus === 'locked' ? (
            /* Locked Course Access Screen with WhatsApp Button */
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', background: 'radial-gradient(circle, rgba(16,185,129,0.03) 0%, transparent 70%)', overflowY: 'auto' }}>
              <div style={{
                maxWidth: '600px', width: '100%', background: 'rgba(5,5,10,0.7)', border: '1px solid rgba(16,185,129,0.2)',
                borderRadius: '24px', padding: '40px', textAlign: 'center', backdropFilter: 'blur(20px)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
              }}>
                <div style={{
                  width: '90px', height: '90px', borderRadius: '50%', background: 'rgba(239,68,68,0.1)',
                  border: '1px solid rgba(239,68,68,0.3)', color: '#f87171', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', fontSize: '3rem', margin: '0 auto 24px',
                  boxShadow: '0 0 30px rgba(239,68,68,0.2)', animation: 'pulse 2s infinite'
                }}>
                  🔒
                </div>
                
                <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: '16px' }}>هذا الدرس مدفوع ومحمي 🔒</h2>
                <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.8, marginBottom: '32px' }}>
                  عذراً، هذا المحتوى مخصص للطلاب المشتركين فقط. يرجى التواصل مع إدارة الأكاديمية لحجز الكورس وتفعيله على حسابك للبدء في التعلم فوراً.
                </p>

                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '20px', marginBottom: '32px', textAlign: 'right' }}>
                  <h4 style={{ margin: '0 0 12px', color: '#10b981', fontSize: '0.95rem', fontWeight: 800 }}>ميزات الاشتراك في الكورس الكامل:</h4>
                  <ul style={{ margin: 0, paddingRight: '20px', color: '#cbd5e1', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li>🔓 فتح جميع الدروس (100 درس كامل) مدى الحياة.</li>
                    <li>💻 إمكانية استخدام المحرر البرمجي التفاعلي وتشغيل الأكواد.</li>
                    <li>🧠 إجراء الاختبارات بعد كل درس والحصول على تصحيح فوري.</li>
                    <li>🏆 شهادة إتمام معتمدة عند إنهاء الكورس بنسبة 100%.</li>
                  </ul>
                </div>

                {requested ? (
                  <div style={{
                    background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)',
                    color: '#10b981', padding: '16px', borderRadius: '14px', marginBottom: '16px',
                    fontSize: '0.95rem', fontWeight: 700
                  }}>
                    ✓ تم إرسال طلب تفعيل الكورس للمسؤول بنجاح! سيتم تفعيله قريباً.
                  </div>
                ) : (
                  <button 
                    onClick={handleRequestActivation}
                    disabled={requesting}
                    style={{
                      width: '100%', padding: '16px', borderRadius: '14px', border: '1px solid rgba(16,185,129,0.4)',
                      background: 'rgba(16,185,129,0.15)', color: '#10b981',
                      fontSize: '1.1rem', fontWeight: 800, cursor: requesting ? 'not-allowed' : 'pointer',
                      fontFamily: "'Cairo', sans-serif", marginBottom: '16px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                      transition: 'all 0.3s'
                    }}
                  >
                    {requesting ? 'جاري إرسال الطلب...' : '🔑 طلب تفعيل هذا الكورس من داخل الأكاديمية'}
                  </button>
                )}

                <a 
                  href={`https://wa.me/201034009418?text=${encodeURIComponent(
                    `مرحباً يا هندسة، أريد تفعيل كورس: "${course.title_ar || course.title}".\nبيانات حسابي المسجل بها:\n- الاسم: ${data.studentInfo?.name || ''}\n- الهاتف: ${data.studentInfo?.phone || ''}\n- البريد الإلكتروني: ${data.studentInfo?.email || ''}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <button style={{
                    width: '100%', padding: '16px', borderRadius: '14px', border: 'none',
                    background: 'linear-gradient(135deg, #25d366, #128c7e)', color: '#fff',
                    fontSize: '1.1rem', fontWeight: 800, cursor: 'pointer', fontFamily: "'Cairo', sans-serif",
                    boxShadow: '0 10px 25px rgba(37,211,102,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                    transition: 'all 0.3s'
                  }}>
                    💬 تواصل عبر الواتساب لحجز الكورس وتفعيله
                  </button>
                </a>
              </div>
            </div>
          ) : activeTab === 'workspace' ? (
            /* Workspace Container containing stepper and active panel */
            <div className="workspace-container" style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden', padding: '20px' }}>
              
              {/* Stepper Progress bar */}
              <div style={{
                background: isKids ? '#ffffff' : 'rgba(5, 5, 10, 0.85)',
                borderRadius: '20px',
                padding: '20px',
                border: isKids ? '4px solid #fb7185' : '1px solid rgba(16, 185, 129, 0.1)',
                marginBottom: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '10%', right: '10%', top: '50%', height: '4px', background: isKids ? '#cbd5e1' : 'rgba(255,255,255,0.05)', zIndex: 1 }} />
                  <div style={{ position: 'absolute', left: '10%', right: '10%', top: '50%', height: '4px', background: '#10b981', zIndex: 1, width: activeWorkspaceTab === 'explanation' ? '0%' : activeWorkspaceTab === 'syntax' ? '50%' : '100%', transition: 'width 0.3s' }} />
                  
                  <button onClick={() => setActiveWorkspaceTab('explanation')} style={{ zIndex: 2, background: activeWorkspaceTab === 'explanation' ? '#10b981' : (isKids ? '#e2e8f0' : 'rgba(255,255,255,0.05)'), color: activeWorkspaceTab === 'explanation' ? '#000' : (isKids ? '#475569' : '#cbd5e1'), border: 'none', borderRadius: '50%', width: '40px', height: '40px', fontWeight: 800, cursor: 'pointer', fontFamily: 'monospace' }}>١</button>
                  <button onClick={() => setActiveWorkspaceTab('syntax')} style={{ zIndex: 2, background: activeWorkspaceTab === 'syntax' ? '#10b981' : (isKids ? '#e2e8f0' : 'rgba(255,255,255,0.05)'), color: activeWorkspaceTab === 'syntax' ? '#000' : (isKids ? '#475569' : '#cbd5e1'), border: 'none', borderRadius: '50%', width: '40px', height: '40px', fontWeight: 800, cursor: 'pointer', fontFamily: 'monospace' }}>٢</button>
                  <button onClick={() => setActiveWorkspaceTab('editor')} style={{ zIndex: 2, background: activeWorkspaceTab === 'editor' ? '#10b981' : (isKids ? '#e2e8f0' : 'rgba(255,255,255,0.05)'), color: activeWorkspaceTab === 'editor' ? '#000' : (isKids ? '#475569' : '#cbd5e1'), border: 'none', borderRadius: '50%', width: '40px', height: '40px', fontWeight: 800, cursor: 'pointer', fontFamily: 'monospace' }}>٣</button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 800, color: isKids ? '#1e293b' : '#94a3b8' }}>
                  <span style={{ color: activeWorkspaceTab === 'explanation' ? '#10b981' : 'inherit' }}>📖 الخطوة ١: الشرح المفاهيمي</span>
                  <span style={{ color: activeWorkspaceTab === 'syntax' ? '#10b981' : 'inherit' }}>💡 الخطوة ٢: الفهم التفاعلي</span>
                  <span style={{ color: activeWorkspaceTab === 'editor' ? '#10b981' : 'inherit' }}>💻 الخطوة ٣: التطبيق العملي</span>
                </div>
              </div>

              {/* Viewport for sequenced steps */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto', gap: '20px' }}>
                
                {/* STEP 1: Conceptual Explanation */}
                {activeWorkspaceTab === 'explanation' && (
                  <section style={{ background: isKids ? '#ffffff' : 'rgba(9,10,18,0.7)', border: isKids ? '4px solid #3b82f6' : '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)' }}>
                    <div className="panel-lesson-title" style={{ marginBottom: '20px', padding: '16px', background: isKids ? '#eff6ff' : 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, transparent 100%)', borderRadius: '12px', borderRight: `4px solid ${isKids ? '#3b82f6' : '#10b981'}` }}>
                      <div style={{ fontSize: '0.8rem', color: isKids ? '#3b82f6' : '#64748b', fontWeight: 800, marginBottom: '4px' }}>{course.title_ar || course.title}</div>
                      <h2 style={{ fontSize: '1.25rem', fontWeight: 900, color: isKids ? '#1e3a8a' : '#fff', margin: 0 }}>{lesson.title}</h2>
                    </div>

                    <LessonModeHeader lessonType={(lesson as any).lesson_type} isKids={isKids} />

                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, borderBottom: `1px solid ${isKids ? '#e2e8f0' : 'rgba(255,255,255,0.05)'}`, paddingBottom: '12px', marginBottom: '16px' }}>
                      <span style={{ fontSize: '1.25rem' }}>📖</span>
                      <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 900, color: isKids ? '#1e3a8a' : '#10b981' }}>الخطوة الأولى: اقرأ واستمع للشرح الممتع</h3>
                    </div>

                    {isKids && (
                      <div style={{ background: '#eff6ff', border: '2px dashed #3b82f6', borderRadius: '12px', padding: '16px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontSize: '2.5rem', animation: 'bounce 2s infinite' }}>🤖</span>
                        <div>
                          <h4 style={{ margin: '0 0 4px', color: '#1d4ed8', fontWeight: 900 }}>مساعدك الروبوت الذكي SVK يقول:</h4>
                          <p style={{ margin: 0, fontSize: '0.9rem', color: '#1e3a8a', fontWeight: 700 }}>أهلاً يا بطل! اليوم سنتعلم شيئاً رائعاً جداً! اسمع الشرح الصوتي وسوف تصبح مبرمجاً أسطورياً! ⭐</p>
                        </div>
                      </div>
                    )}

                    {/* Dedicated Audio Player at the top of explanation block */}
                    <div style={{ marginBottom: '24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <span style={{ fontSize: '1.1rem' }}>💡</span>
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f59e0b' }}>نصيحة ذكية للأبطال: استمع إلى الشرح الصوتي للدرس لتسريع الحفظ والفهم! 🎧</span>
                      </div>
                      <PremiumAudioPlayer
                        src={lesson.audio_url || ''}
                        title={lesson.title}
                        textContent={lesson.text_content || ''}
                      />
                      <SimplifyExplanation textContent={lesson.text_content || ''} isKids={isKids} />
                    </div>

                    {/* TOTAL VIDEO BAN: NO VIDEO RENDERED HERE AT ALL */}

                    <QuickExamplesPanel 
                      examples={lesson.quick_practical_examples || []}
                      onRunCode={(c) => {
                        setCode(c);
                        setActiveWorkspaceTab('editor');
                        setTimeout(() => handleRunCode(), 200);
                      }}
                      onFixError={(c) => {
                        setCode(c);
                        setActiveWorkspaceTab('editor');
                      }}
                    />

                    <div style={{ marginTop: '8px' }}>
                      {(() => {
                        try {
                          // Attempt to parse JSON content from static tracks
                          const parsedContent = JSON.parse(lesson.text_content);
                          const premiumData = Array.isArray(parsedContent) ? parsedContent[0] : parsedContent;
                          
                          if (premiumData && premiumData.prototype) {
                            const { context, prototype, description, parameters, return_value, example } = premiumData;
                            return (
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                {context && (
                                  <div style={{ background: isKids ? '#fef3c7' : 'rgba(245, 158, 11, 0.1)', borderRight: isKids ? '4px solid #f59e0b' : '4px solid #fbbf24', padding: '20px', borderRadius: '12px' }}>
                                    <h4 style={{ margin: '0 0 10px', color: isKids ? '#b45309' : '#fcd34d', fontSize: '1rem', fontWeight: 900 }}>💡 السياق التعليمي (Context)</h4>
                                    <p style={{ margin: 0, color: isKids ? '#451a03' : '#fef3c7', lineHeight: 1.8, fontSize: '1.05rem' }}>{context}</p>
                                  </div>
                                )}
                                <div style={{ background: isKids ? '#f0fdf4' : 'rgba(59, 130, 246, 0.1)', borderRight: isKids ? '4px solid #10b981' : '4px solid #3b82f6', padding: '20px', borderRadius: '12px' }}>
                                  <h4 style={{ margin: '0 0 10px', color: isKids ? '#047857' : '#60a5fa', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 900 }}>البنية الأساسية (Prototype)</h4>
                                  <code style={{ fontSize: '1.25rem', color: isKids ? '#1e293b' : '#e2e8f0', fontFamily: 'monospace', fontWeight: 700 }}>{prototype}</code>
                                </div>
                                
                                <div>
                                  <h4 style={{ margin: '0 0 12px', color: isKids ? '#1e3a8a' : '#10b981', fontSize: '1.15rem', fontWeight: 900 }}>الشرح والتفاصيل</h4>
                                  <p style={{ margin: 0, color: isKids ? '#334155' : '#cbd5e1', lineHeight: 1.9, fontSize: '1.05rem' }}>{description}</p>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                                  <div style={{ background: isKids ? '#fffbeb' : 'rgba(255, 255, 255, 0.03)', padding: '20px', borderRadius: '12px', border: isKids ? '2px solid #fcd34d' : '1px solid rgba(255,255,255,0.05)' }}>
                                    <h4 style={{ margin: '0 0 10px', color: isKids ? '#b45309' : '#f59e0b', fontSize: '1rem', fontWeight: 800 }}>المعاملات (Parameters)</h4>
                                    <p style={{ margin: 0, color: isKids ? '#475569' : '#94a3b8', fontSize: '1rem', lineHeight: 1.8 }}>{parameters}</p>
                                  </div>
                                  <div style={{ background: isKids ? '#faf5ff' : 'rgba(255, 255, 255, 0.03)', padding: '20px', borderRadius: '12px', border: isKids ? '2px solid #d8b4fe' : '1px solid rgba(255,255,255,0.05)' }}>
                                    <h4 style={{ margin: '0 0 10px', color: isKids ? '#7e22ce' : '#a855f7', fontSize: '1rem', fontWeight: 800 }}>القيمة المرجعة (Return Value)</h4>
                                    <p style={{ margin: 0, color: isKids ? '#475569' : '#94a3b8', fontSize: '1rem', lineHeight: 1.8 }}>{return_value}</p>
                                  </div>
                                </div>

                                <div style={{ background: isKids ? '#f8fafc' : '#0f172a', padding: '20px', borderRadius: '12px', border: isKids ? '2px solid #cbd5e1' : '1px solid #1e293b' }}>
                                  <h4 style={{ margin: '0 0 16px', color: isKids ? '#334155' : '#e2e8f0', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 900 }}>
                                    <span>💻</span> مثال عملي (Example)
                                  </h4>
                                  <div style={{ margin: 0, padding: '20px', background: isKids ? '#fff' : '#000', borderRadius: '8px', overflowX: 'auto', border: isKids ? '1px solid #e2e8f0' : 'none' }}>
                                    <pre style={{ margin: 0, color: isKids ? '#1d4ed8' : '#a5b4fc', fontSize: '1.05rem', fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
                                      {example}
                                    </pre>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        } catch (e) {
                          // Fallback to raw HTML parsing if it's not JSON
                        }
                        
                        return <div dangerouslySetInnerHTML={{ __html: lesson.text_content }} style={{ lineHeight: 1.9, fontSize: '1.05rem' }} />;
                      })()}
                    </div>

                    <div style={{ marginTop: '30px', textAlign: 'center' }}>
                      <button onClick={() => setActiveWorkspaceTab('syntax')} style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', color: '#fff', border: 'none', padding: '12px 32px', borderRadius: '10px', fontWeight: 900, cursor: 'pointer', fontFamily: "'Cairo', sans-serif" }}>
                        انتقال للخطوة ٢: الفهم التفاعلي وقاموس الأكواد ➡️
                      </button>
                    </div>
                  </section>
                )}

                {/* STEP 2: Guided Learning (Syntax / Dictionary) */}
                {activeWorkspaceTab === 'syntax' && (
                  <section style={{ background: isKids ? '#ffffff' : 'rgba(9,10,18,0.7)', border: isKids ? '4px solid #10b981' : '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, borderBottom: `1px solid ${isKids ? '#e2e8f0' : 'rgba(255,255,255,0.05)'}`, paddingBottom: '12px', marginBottom: '16px' }}>
                      <span style={{ fontSize: '1.25rem' }}>💡</span>
                      <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 900, color: isKids ? '#047857' : '#10b981' }}>الخطوة الثانية: بنية الكود البرمجي وشرحه</h3>
                    </div>

                    {(() => {
                      const referenceCode = lesson.code_example || getCodeExample(course.category, lessonId);
                      const keywordsFound = Object.keys(SYNTAX_DICTIONARY).filter(keyword => {
                        if (keyword.includes('.') || keyword.includes('_')) {
                          return referenceCode.includes(keyword);
                        }
                        const regex = new RegExp(`\\b${keyword}\\b`);
                        return regex.test(referenceCode);
                      });

                      return (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                          <pre style={{ margin: 0, background: 'rgba(0,0,0,0.4)', padding: '16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.03)', fontFamily: 'monospace', fontSize: '0.9rem', color: '#a78bfa', direction: 'ltr', textAlign: 'left', overflowX: 'auto' }}>
                            {referenceCode}
                          </pre>
                          <p style={{ margin: 0, color: isKids ? '#475569' : '#94a3b8', fontSize: '0.95rem', lineHeight: 1.7 }}>
                            {lesson.code_explanation || 'يوضح النموذج بالأعلى البنية الأساسية وكيفية استخدام التعليمات البرمجية لتنفيذ المفهوم بنجاح.'}
                          </p>

                          {/* Dictionary helper */}
                          {keywordsFound.length > 0 && (
                            <div style={{ marginTop: '24px', borderTop: '1px solid rgba(16, 185, 129, 0.15)', paddingTop: '20px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                  <span style={{ fontSize: '1.4rem' }}>📖</span>
                                  <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 900, color: isKids ? '#0f172a' : '#fff' }}>
                                    قاموس الأكواد التفاعلي المساعد
                                  </h4>
                                </div>
                              </div>
                              
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {keywordsFound.map(kw => {
                                  const item = SYNTAX_DICTIONARY[kw];
                                  const isSpeakingAr = activeSpeech?.keyword === kw && activeSpeech?.lang === 'ar';
                                  const isSpeakingEn = activeSpeech?.keyword === kw && activeSpeech?.lang === 'en';
                                  const isAnySpeaking = isSpeakingAr || isSpeakingEn;
                                  
                                  return (
                                    <div 
                                      key={kw}
                                      style={{
                                        background: isKids ? '#f9fafb' : 'rgba(255, 255, 255, 0.01)',
                                        border: isKids ? '2px solid #cbd5e1' : '1px solid rgba(255, 255, 255, 0.04)',
                                        borderRadius: '16px',
                                        padding: '20px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '14px',
                                        color: isKids ? '#1e293b' : '#cbd5e1'
                                      }}
                                    >
                                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '10px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                          <span style={{ fontSize: '1.4rem' }}>{item.emoji}</span>
                                          <span style={{ fontFamily: 'monospace', fontSize: '1rem', fontWeight: 'bold', background: 'rgba(0,0,0,0.2)', padding: '4px 10px', borderRadius: '8px' }}>
                                            {kw}
                                          </span>
                                        </div>
                                        <div style={{ textAlign: 'left' }}>
                                          <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#10b981' }}>{item.nameAr}</div>
                                          <div style={{ fontSize: '0.7rem', color: '#64748b' }}>{item.nameEn}</div>
                                        </div>
                                      </div>

                                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="syntax-grid">
                                        <div style={{ borderLeft: '1px solid rgba(255,255,255,0.05)', paddingLeft: '10px' }}>
                                          <div style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>{item.descAr}</div>
                                          <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '4px' }}>طريقة الاستخدام: {item.howAr}</div>
                                          <button onClick={() => speakSyntax(kw, `${item.nameAr}. ${item.descAr}. طريقة الاستخدام: ${item.howAr}`, 'ar')} style={{ marginTop: '10px', background: 'transparent', border: '1px solid #10b981', borderRadius: '20px', padding: '4px 12px', color: '#10b981', fontSize: '0.75rem', cursor: 'pointer' }}>
                                            {isSpeakingAr ? '🔊 جاري التحدث...' : '🔊 استمع بالعربية'}
                                          </button>
                                        </div>
                                        <div style={{ direction: 'ltr', textAlign: 'left' }}>
                                          <div style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>{item.descEn}</div>
                                          <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '4px' }}>Usage: {item.howEn}</div>
                                          <button onClick={() => speakSyntax(kw, `${item.nameEn}. ${item.descEn}. How to use: ${item.howEn}`, 'en')} style={{ marginTop: '10px', background: 'transparent', border: '1px solid #8b5cf6', borderRadius: '20px', padding: '4px 12px', color: '#8b5cf6', fontSize: '0.75rem', cursor: 'pointer' }}>
                                            {isSpeakingEn ? '🔊 Speaking...' : '🔊 Listen in English'}
                                          </button>
                                        </div>
                                      </div>

                                      {/* Technical Anatomy Details */}
                                      <div style={{
                                        marginTop: '12px',
                                        padding: '16px',
                                        background: 'rgba(0, 0, 0, 0.2)',
                                        border: '1px solid rgba(16, 185, 129, 0.15)',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '10px',
                                        fontSize: '0.85rem',
                                        fontFamily: 'monospace'
                                      }}>
                                        <div>
                                          <span style={{ color: '#10b981', fontWeight: 'bold' }}>⚙️ Prototype:</span>{' '}
                                          <code style={{ background: 'rgba(0,0,0,0.3)', padding: '2px 6px', borderRadius: '4px', color: '#34d399' }}>
                                            {item.prototype || `${kw}(...)`}
                                          </code>
                                        </div>
                                        <div>
                                          <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>📥 Parameters & Types:</span>{' '}
                                          <span style={{ color: '#93c5fd' }}>{item.parameters || 'Accepts arguments matching context.'}</span>
                                        </div>
                                        <div>
                                          <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>📤 Return Value Specification:</span>{' '}
                                          <span style={{ color: '#fde047' }}>{item.returnValue || 'None or value based on logic.'}</span>
                                        </div>
                                        <div style={{ marginTop: '4px' }}>
                                          <div style={{ color: '#ec4899', fontWeight: 'bold', marginBottom: '4px' }}>💻 Core Syntax Blueprint:</div>
                                          <pre style={{ margin: 0, padding: '10px', background: 'rgba(0,0,0,0.4)', borderRadius: '6px', overflowX: 'auto', color: '#e2e8f0', direction: 'ltr', textAlign: 'left' }}>
                                            {item.blueprint || `${kw}()`}
                                          </pre>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })()}

                    <div style={{ marginTop: '30px', textAlign: 'center' }}>
                      <button onClick={() => setActiveWorkspaceTab('editor')} style={{ background: 'linear-gradient(135deg, #10b981, #059669)', color: '#fff', border: 'none', padding: '12px 32px', borderRadius: '10px', fontWeight: 900, cursor: 'pointer', fontFamily: "'Cairo', sans-serif" }}>
                        انتقال للخطوة ٣: التجربة والتطبيق العملي ➡️
                      </button>
                    </div>
                  </section>
                )}

                {/* STEP 3: Sandbox Terminal & Instructions */}
                {activeWorkspaceTab === 'editor' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    
                    {/* Instructions card */}
                    <div style={{
                      background: isKids ? '#eff6ff' : 'rgba(9,10,18,0.7)',
                      border: isKids ? '4px solid #3b82f6' : '1px solid rgba(255,255,255,0.05)',
                      borderRadius: '16px',
                      padding: '20px',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px', marginBottom: '12px' }}>
                        <span style={{ fontSize: '1.2rem' }}>🎯</span>
                        <h4 style={{ margin: 0, fontWeight: 900, color: isKids ? '#1e3a8a' : '#10b981' }}>إرشادات الهدف والمخرجات المتوقعة</h4>
                      </div>
                      <p style={{ margin: '0 0 12px', fontSize: '0.9rem', color: isKids ? '#1e293b' : '#94a3b8', lineHeight: 1.6 }}>
                        {lesson.exercise_instructions || lesson.practice_instructions || 'يرجى كتابة وتعديل الكود البرمجي ليعطي المخرج المطلوب بدقة.'}
                      </p>
                      <div style={{ background: 'rgba(0,0,0,0.4)', borderRadius: '8px', padding: '10px 14px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '4px' }}>المخرجات المتوقعة (Expected Output):</div>
                        <pre style={{ margin: 0, fontFamily: 'monospace', color: '#cbd5e1', fontSize: '0.85rem', direction: 'ltr', textAlign: 'left' }}>
                          {lesson.expected_output || lesson.practice_expected || 'Hello World'}
                        </pre>
                      </div>
                    </div>

                    {/* Sandbox code editor & terminal */}
                    <section style={{
                      background: isKids ? '#ffffff' : 'rgba(9,10,18,0.7)',
                      border: isKids ? '4px solid #fb7185' : '1px solid rgba(16,185,129,0.2)',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '420px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px', borderBottom: '1px solid rgba(16,185,129,0.1)', background: 'rgba(16,185,129,0.02)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span style={{ fontSize: '1.25rem' }}>💻</span>
                          <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: isKids ? '#e11d48' : '#10b981' }}>بيئة تشغيل الأكواد (Sandbox Editor)</h3>
                        </div>
                        <button onClick={handleRunCode} disabled={isRunning} style={{ background: 'linear-gradient(135deg, #10b981, #059669)', border: 'none', color: '#000', padding: '6px 16px', borderRadius: '6px', fontWeight: 700, cursor: 'pointer', fontFamily: "'Cairo', sans-serif", fontSize: '0.85rem' }}>
                          {isRunning ? 'جاري التشغيل...' : 'تشغيل الكود ▶'}
                        </button>
                      </div>

                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
                        <textarea
                          value={code}
                          onChange={e => setCode(e.target.value)}
                          className="font-mono w-full focus:outline-none"
                          style={{
                            flex: 1, backgroundColor: '#0f172a', color: '#34d399', border: '1px solid #1e293b', 
                            padding: '16px', resize: 'none', direction: 'ltr', textAlign: 'left', lineHeight: 1.5,
                            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)'
                          }}
                        />
                        
                        <div style={{ height: '120px', background: '#020205', borderTop: '1px solid rgba(16,185,129,0.1)', display: 'flex', flexDirection: 'column' }}>
                          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '4px 16px', fontSize: '0.75rem', color: '#64748b' }}>
                            شاشة المخرجات (Sandbox Terminal Output)
                          </div>
                          <div style={{ flex: 1, padding: '10px 16px', overflowY: 'auto', fontFamily: 'monospace', fontSize: '0.85rem', color: '#e2e8f0', direction: 'ltr', textAlign: 'left' }}>
                            {consoleOutput.length > 0 ? (
                              consoleOutput.map((out, idx) => (
                                <div key={idx} style={{ color: out.startsWith('Error') ? '#ef4444' : '#10b981' }}>{out}</div>
                              ))
                            ) : (
                              <div style={{ color: '#475569' }}>اكتب الكود واضغط تشغيل لمقارنة مخرجاتك...</div>
                            )}
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* Practice Feedback Status & Micro Quiz */}
                    {practiceStatus !== 'idle' && (
                      <div style={{
                        padding: '12px 16px', borderRadius: '10px', border: '1px solid',
                        background: practiceStatus === 'success' ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)',
                        color: practiceStatus === 'success' ? '#10b981' : '#f87171',
                        borderColor: practiceStatus === 'success' ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)',
                        fontSize: '0.9rem', fontWeight: 700
                      }}>
                        {practiceStatus === 'success' ? '✅ ممتاز! لقد تطابقت مخرجات الكود مع المطلوب.' : '❌ لم تتطابق المخرجات تماماً مع المتوقع. راجع المطلوب وحاول ثانيةً.'}
                      </div>
                    )}

                    {/* MICRO-QUIZ: Strict client-side single question blocking quiz */}
                    {practiceStatus === 'success' && microQuizQuestion && (
                      <div style={{
                        background: isKids ? '#ffffff' : 'rgba(15,15,25,0.85)',
                        border: isKids ? '4px solid #3b82f6' : '1px solid rgba(16, 185, 129, 0.3)',
                        borderRadius: '16px',
                        padding: '24px',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                      }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 900, color: isKids ? '#1d4ed8' : '#10b981', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span>🧠</span> الاختبار السريع المكمل للدرس (Micro-Quiz) - اختر الإجابة لفتح الدرس القادم!
                        </h3>
                        <p style={{ fontWeight: 800, fontSize: '0.95rem', marginBottom: '16px', color: isKids ? '#1e3a8a' : '#fff' }}>
                          {microQuizQuestion.question}
                        </p>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                          {microQuizQuestion.options.map((opt: string, i: number) => {
                            const isSelected = selectedMicroAnswer === i;
                            const isCorrect = i === microQuizQuestion.correctAnswer;
                            
                            let btnBg = isKids ? '#f9fafb' : 'rgba(255,255,255,0.02)';
                            let btnBorder = isKids ? '1px solid #cbd5e1' : '1px solid rgba(255,255,255,0.1)';
                            let btnColor = isKids ? '#1f2937' : '#e2e8f0';

                            if (microQuizAnswered) {
                              if (isCorrect) {
                                btnBg = '#d1fae5';
                                btnBorder = '2px solid #10b981';
                                btnColor = '#065f46';
                              } else if (isSelected) {
                                btnBg = '#fee2e2';
                                btnBorder = '2px solid #ef4444';
                                btnColor = '#991b1b';
                              }
                            } else if (isSelected) {
                              btnBg = isKids ? '#eff6ff' : 'rgba(59, 130, 246, 0.1)';
                              btnBorder = '2px solid #3b82f6';
                              btnColor = '#1d4ed8';
                            }

                            return (
                              <button
                                key={i}
                                onClick={() => {
                                  if (microQuizAnswered) return;
                                  setSelectedMicroAnswer(i);
                                  setMicroQuizAnswered(true);
                                  if (i === microQuizQuestion.correctAnswer) {
                                    setMicroQuizPassed(true);
                                    setMicroQuizError(false);
                                    localStorage.setItem(`svk_quiz_passed_${lesson.id}`, 'true');
                                    
                                    // complete API call
                                    fetch('/api/lessons/complete', {
                                      method: 'POST',
                                      headers: { 'Content-Type': 'application/json' },
                                      body: JSON.stringify({
                                        lessonSlug: String(lesson.id),
                                        score: 1,
                                        totalQuestions: 1
                                      })
                                    }).catch(e => console.error(e));
                                  } else {
                                    setMicroQuizError(true);
                                  }
                                }}
                                disabled={microQuizAnswered}
                                style={{
                                  textAlign: 'right', padding: '12px 16px', borderRadius: '10px',
                                  background: btnBg, border: btnBorder, color: btnColor,
                                  fontWeight: 700, cursor: microQuizAnswered ? 'default' : 'pointer',
                                  fontFamily: "'Cairo', sans-serif", fontSize: '0.9rem'
                                }}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>

                        {microQuizAnswered && (
                          <div style={{ marginTop: '16px', padding: '12px 16px', background: isKids ? '#f3f4f6' : 'rgba(255,255,255,0.03)', borderRadius: '10px', fontSize: '0.9rem' }}>
                            <div style={{ fontWeight: 800, color: microQuizPassed ? '#10b981' : '#ef4444', marginBottom: '4px' }}>
                              {microQuizPassed ? '🎉 إجابة صحيحة! تم تفعيل تقدمك وفتح الباب للدرس التالي.' : '❌ إجابة خاطئة. حاول التركيز والمحاولة ثانيةً!'}
                            </div>
                            <p style={{ margin: 0, color: isKids ? '#4b5563' : '#94a3b8' }}>{microQuizQuestion.explanation}</p>
                            {!microQuizPassed && (
                              <button
                                onClick={() => {
                                  setSelectedMicroAnswer(null);
                                  setMicroQuizAnswered(false);
                                  setMicroQuizError(false);
                                }}
                                style={{
                                  marginTop: '10px', background: '#3b82f6', color: '#fff', border: 'none',
                                  padding: '6px 16px', borderRadius: '6px', cursor: 'pointer',
                                  fontFamily: "'Cairo', sans-serif", fontWeight: 700
                                }}
                              >
                                إعادة المحاولة 🔄
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Interactive Quiz Panel (Legacy Full Exam) */
            <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', width: '100%', height: '100%', overflowY: 'auto' }}>
              <div style={{ background: isKids ? '#ffffff' : 'rgba(15,15,25,0.8)', padding: '40px', borderRadius: '20px', border: isKids ? '4px solid #fb7185' : '1px solid rgba(16,185,129,0.2)', backdropFilter: 'blur(20px)' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#10b981', marginBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '16px' }}>
                  🧠 {examObj.title}
                </h2>

                {showResults ? (
                  <div style={{ textAlign: 'center', padding: '40px' }}>
                    <div style={{ fontSize: '60px', marginBottom: '20px' }}>{score === examObj.questions.length ? '🏆' : '📚'}</div>
                    <h3 style={{ fontSize: '1.8rem', color: score >= examObj.questions.length / 2 ? '#10b981' : '#f59e0b', marginBottom: '10px', fontWeight: 800 }}>
                      نتيجة الاختبار: {score} من {examObj.questions.length}
                    </h3>
                    <p style={{ color: '#94a3b8', fontSize: '1rem', marginBottom: '30px' }}>
                      {score === examObj.questions.length ? 'تهانينا! لقد حصلت على الدرجة النهائية.' : 'أداء جيد! استمر في التعلم والتحسن.'}
                    </p>
                    <button onClick={() => { setShowResults(false); setAnswers({}); }} style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', color: '#10b981', padding: '12px 30px', borderRadius: '10px', fontSize: '1rem', fontWeight: 700, cursor: 'pointer', fontFamily: "'Cairo', sans-serif" }}>
                      إعادة الاختبار 🔄
                    </button>
                  </div>
                ) : (
                  <div>
                    {examObj.questions.map((q: any, qi: number) => (
                      <div key={qi} style={{ marginBottom: '40px' }}>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', color: isKids ? '#1e293b' : '#fff' }}>{qi + 1}. {q.question}</h4>
                        <div style={{ display: 'grid', gap: '12px' }}>
                          {q.options.map((opt: string, oi: number) => {
                            const isSelected = answers[qi] === oi;
                            return (
                              <button key={oi} onClick={() => setAnswers(prev => ({ ...prev, [qi]: oi }))} style={{
                                textAlign: 'right', padding: '16px 20px', borderRadius: '12px', cursor: 'pointer',
                                background: isSelected ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.02)',
                                border: isSelected ? '1px solid rgba(16,185,129,0.4)' : '1px solid rgba(255,255,255,0.05)',
                                color: isSelected ? '#10b981' : (isKids ? '#1e293b' : '#e2e8f0'), fontFamily: "'Cairo', sans-serif", fontSize: '0.95rem', transition: 'all 0.2s'
                              }}>
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px', textAlign: 'center' }}>
                      <button onClick={handleExamSubmit} disabled={Object.keys(answers).length < examObj.questions.length} style={{
                        background: Object.keys(answers).length < examObj.questions.length ? 'rgba(255,255,255,0.05)' : 'linear-gradient(135deg, #10b981, #059669)',
                        border: 'none', color: '#000', padding: '16px 40px', borderRadius: '14px', fontSize: '1rem', fontWeight: 700, cursor: Object.keys(answers).length < examObj.questions.length ? 'not-allowed' : 'pointer', fontFamily: "'Cairo', sans-serif"
                      }}>
                        تسليم الإجابات وإنهاء الاختبار 🏁
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Footer Controls with client side verified unlock */}
          <footer style={{ borderTop: isKids ? '4px solid #f43f5e' : '1px solid rgba(255,255,255,0.05)', padding: '12px 20px', display: 'flex', justifyContent: 'space-between', background: isKids ? '#ffffff' : 'rgba(5,5,10,0.95)', flexShrink: 0 }}>
            {prevLesson ? (
              <Link href={`/learn/${prevLesson.id}`} style={{ textDecoration: 'none' }}>
                <button style={{ background: isKids ? '#f3f4f6' : 'rgba(255,255,255,0.03)', color: isKids ? '#1e293b' : '#cbd5e1', border: '1px solid #cbd5e1', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontFamily: "'Cairo', sans-serif", fontSize: '0.85rem' }}>
                  ← الدرس السابق: {prevLesson.title.replace(/الدرس \d+:\s*/, '')}
                </button>
              </Link>
            ) : <div />}

            {nextLesson ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {!microQuizPassed && (
                  <span style={{ fontSize: '0.8rem', color: '#fb7185', fontWeight: 800 }}>⚠️ يرجى اجتياز تمرين واختبار الدرس لفتح التالي</span>
                )}
                <Link 
                  href={microQuizPassed ? `/learn/${nextLesson.id}` : '#'} 
                  onClick={(e) => {
                    if (!microQuizPassed) {
                      e.preventDefault();
                      alert('يرجى حل تمرين الكود واجتياز الاختبار السريع أولاً لفتح الدرس التالي! 🔒');
                    }
                  }}
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
                      fontSize: '0.85rem', 
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    {!microQuizPassed && '🔒'} الدرس التالي: {nextLesson.title.replace(/الدرس \d+:\s*/, '')} →
                  </button>
                </Link>
              </div>
            ) : <div />}
          </footer>
        </main>
      </div>

      <style>{`
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: #020205; }
        ::-webkit-scrollbar-thumb { background: rgba(16, 185, 129, 0.2); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(16, 185, 129, 0.4); }
        
        .lesson-header-title {
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 1024px) {
          .lesson-header-title {
            display: none !important;
          }
        }

        @keyframes soundwave {
          0%, 100% { height: 4px; }
          50% { height: 14px; }
        }
        @keyframes rainbow-border {
          0% { border-color: rgba(16, 185, 129, 0.2); }
          50% { border-color: rgba(139, 92, 246, 0.4); }
          100% { border-color: rgba(16, 185, 129, 0.2); }
        }
        @keyframes card-pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.01); }
          100% { transform: scale(1); }
        }
        .audio-wave {
          display: inline-flex;
          align-items: flex-end;
          gap: 2px;
          height: 14px;
          margin-left: 6px;
          margin-right: 6px;
        }
        .audio-wave div {
          width: 2px;
          height: 4px;
          background: currentColor;
          border-radius: 1px;
          animation: soundwave 0.8s ease-in-out infinite;
        }
        .syntax-card:hover {
          background: rgba(255, 255, 255, 0.03) !important;
          border-color: rgba(16, 185, 129, 0.2) !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.4), 0 0 20px rgba(16, 185, 129, 0.05);
        }

        /* Responsive Learning Layout */
        .workspace-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          height: 100%;
          overflow: hidden;
          flex: 1;
        }
        .desktop-text { display: inline; }
        .mobile-text { display: none; }
        .navigation-sidebar {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 90;
        }

        @media (max-width: 1024px) {
          .mobile-workspace-tabs {
            display: flex !important;
          }
          .workspace-grid {
            display: flex !important;
            flex-direction: column !important;
            height: 100% !important;
            flex: 1 !important;
            padding: 8px !important;
            overflow: hidden !important;
          }
          .workspace-panel.hidden-panel {
            display: none !important;
          }
          .workspace-panel.active-panel {
            display: flex !important;
            flex-direction: column !important;
            flex: 1 !important;
            height: 100% !important;
            overflow-y: auto !important;
          }
          .main-content {
            overflow: hidden !important;
            height: 100% !important;
          }
          .desktop-text { display: none !important; }
          .mobile-text { display: inline !important; }
          .navigation-sidebar {
            position: fixed !important;
            top: 70px !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 280px !important;
            box-shadow: -10px 0 30px rgba(0,0,0,0.5);
            background: rgba(5,5,10,0.98) !important;
            z-index: 200 !important;
          }
          .sidebar-backdrop {
            display: block !important;
          }
          .syntax-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .syntax-grid > div:first-child {
            border-left: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.03);
            padding-left: 0 !important;
            padding-bottom: 12px;
          }
        }

        @media (max-width: 768px) {
          .header-tab-btn {
            padding: 8px 12px !important;
            font-size: 0.8rem !important;
          }
          .exit-button {
            width: 40px !important;
            height: 40px !important;
            border-radius: 50% !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
