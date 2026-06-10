'use client';

import { useState, useEffect, use, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function PremiumAudioPlayer({ src, title, textContent }: { src: string; title: string; textContent: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const isTTS = !src || src.includes('SoundHelix') || src === '';
  
  // Clean HTML from text content
  const getCleanText = () => {
    if (!textContent) return '';
    return textContent.replace(/<[^>]*>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
  };

  useEffect(() => {
    if (isTTS) {
      // Estimate duration based on word count (130 words per minute)
      const clean = getCleanText();
      const words = clean.trim().split(/\s+/).length;
      setDuration(Math.max(10, Math.round((words / 130) * 60)));
      setIsPlaying(false);
      setCurrentTime(0);
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    } else if (audioRef.current) {
      audioRef.current.src = src;
      setIsPlaying(false);
      setCurrentTime(0);
    }
  }, [src, textContent]);

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
          const cleanText = getCleanText();
          const utterance = new SpeechSynthesisUtterance(cleanText);
          utterance.lang = 'ar-EG';
          utterance.rate = 0.95;
          
          // Try to select an Arabic voice
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
          
          // Track speech progress roughly
          utterance.onboundary = (event) => {
            if (event.name === 'word') {
              const charIndex = event.charIndex;
              const totalChars = cleanText.length;
              if (totalChars > 0) {
                const estimatedTime = (charIndex / totalChars) * duration;
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

  const handleTimeUpdate = () => {
    if (!isTTS && audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (!isTTS && audioRef.current) {
      setDuration(audioRef.current.duration);
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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.3rem', animation: isPlaying ? 'pulse 1.5s infinite' : 'none' }}>🎙️</span>
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#10b981' }}>
              {isTTS ? 'قارئ النص الذكي (AI Text-to-Speech)' : 'الشرح الصوتي المرفق للدرس'}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
              {isTTS ? 'قراءة آلية للدرس باللغة العربية' : 'بصوت المهندس خالد (جودة عالية)'}
            </div>
          </div>
        </div>
        <span style={{
          fontSize: '0.7rem',
          padding: '2px 8px',
          background: isPlaying ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.05)',
          border: `1px solid ${isPlaying ? '#10b981' : 'rgba(255,255,255,0.1)'}`,
          borderRadius: '20px',
          color: isPlaying ? '#10b981' : '#94a3b8',
          fontWeight: 700
        }}>
          {isPlaying ? 'جاري التشغيل' : 'موقف'}
        </span>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          style={{
            background: isPlaying ? 'rgba(239,68,68,0.15)' : 'rgba(16,185,129,0.15)',
            border: `1px solid ${isPlaying ? '#ef4444' : '#10b981'}`,
            color: isPlaying ? '#ef4444' : '#10b981',
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

        {/* Progress Slider */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '10px', direction: 'ltr' }}>
          <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'monospace' }}>{formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={duration || 100}
            value={currentTime}
            onChange={handleSeek}
            disabled={isTTS && isPlaying}
            style={{
              flex: 1,
              height: '4px',
              borderRadius: '2px',
              background: 'rgba(255,255,255,0.1)',
              outline: 'none',
              cursor: isTTS && isPlaying ? 'not-allowed' : 'pointer',
              accentColor: '#10b981'
            }}
          />
          <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'monospace' }}>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}

function PremiumVideoPlayer({ src }: { src: string }) {
  if (!src) return null;

  // Helper to extract YouTube ID
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const ytId = getYouTubeId(src);
  let embedUrl = src;
  const isYouTube = !!ytId;

  if (isYouTube) {
    embedUrl = `https://www.youtube.com/embed/${ytId}`;
  } else if (src.includes('drive.google.com')) {
    embedUrl = src.replace('/view', '/preview').replace('/edit', '/preview');
  }

  return (
    <div style={{
      width: '100%',
      position: 'relative',
      borderRadius: '16px',
      overflow: 'hidden',
      border: '1px solid rgba(139, 92, 246, 0.25)',
      boxShadow: '0 0 25px rgba(139, 92, 246, 0.15), 0 10px 30px rgba(0,0,0,0.5)',
      background: '#000',
      marginBottom: '20px',
      aspectRatio: '16/9'
    }}>
      {isYouTube || src.includes('drive.google.com') ? (
        <iframe
          src={embedUrl}
          title="شرح الدرس فيديو"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
          }}
        />
      ) : (
        <video
          src={src}
          controls
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      )}
    </div>
  );
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
    color: '#10b981'
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
    color: '#eab308'
  },
  'int': {
    nameAr: 'العدد الصحيح (int)',
    nameEn: 'Integer Function',
    descAr: 'تُستخدم لتمثيل الأعداد الصحيحة (بدون فاصلة عشرية) أو لتحويل نص يحتوي على رقم إلى عدد صحيح.',
    descEn: 'Represents integer numbers (without decimals) or casts/converts a string containing digits into an integer.',
    howAr: 'نضع القيمة المراد تحويلها بين قوسين، مثل: age = int("15").',
    howEn: 'Place the value to be converted inside parentheses, like: age = int("15").',
    emoji: '🔢',
    color: '#3b82f6'
  },
  'str': {
    nameAr: 'النص أو السلسلة (str)',
    nameEn: 'String Function',
    descAr: 'تمثل النصوص وسلاسل الحروف، أو تُستخدم لتحويل أي قيمة (مثل رقم) إلى صيغة نصية لطباعتها.',
    descEn: 'Represents textual data, or converts other types (like numbers) into string format.',
    howAr: 'نمرر القيمة للدالة str، مثل: text_age = str(18).',
    howEn: 'Pass the value to the str function, like: text_age = str(18).',
    emoji: '🔤',
    color: '#10b981'
  },
  'float': {
    nameAr: 'العدد العشري (float)',
    nameEn: 'Float Function',
    descAr: 'تمثل الأعداد العشرية (التي تحتوي على فاصلة عشرية) أو تُستخدم لتحويل الأرقام والنصوص إليها.',
    descEn: 'Represents floating-point numbers (with decimals) or converts other types to decimal numbers.',
    howAr: 'نستخدمها عند التعامل مع القياسات الدقيقة والأسعار، مثل: price = float("19.99").',
    howEn: 'Use it when dealing with precise measurements and prices, like: price = float("19.99").',
    emoji: '🎯',
    color: '#06b6d4'
  },
  'len': {
    nameAr: 'طول الشيء (len)',
    nameEn: 'Length Function',
    descAr: 'دالة سريعة تُعطيك عدد الحروف في كلمة معينة، أو عدد العناصر داخل قائمة.',
    descEn: 'A utility function that returns the number of characters in a string, or the number of items in a list.',
    howAr: 'نضع القائمة أو النص بين قوسين، مثل: count = len("SVK"). سيعود بـ 3.',
    howEn: 'Pass the list or string, like: count = len("SVK"). It evaluates to 3.',
    emoji: '📏',
    color: '#ec4899'
  },
  'range': {
    nameAr: 'نطاق الأرقام (range)',
    nameEn: 'Range Function',
    descAr: 'دالة تُنشئ سلسلة متتالية من الأرقام، وتُستخدم بكثرة مع حلقات التكرار (for).',
    descEn: 'A function that generates a sequence of numbers, commonly used in loops.',
    howAr: 'نحدد الرقم الأخير غير الشامل، مثل: range(5) يعطي الأرقام من 0 إلى 4.',
    howEn: 'Pass the end boundary (exclusive), like: range(5) which yields numbers from 0 to 4.',
    emoji: '📈',
    color: '#6366f1'
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

export default function LearnPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const router = useRouter();
  const { lessonId } = use(params);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [sidebar, setSidebar] = useState(true);
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState<'explanation' | 'syntax' | 'editor' | 'instructions'>('explanation');
  
  // Interactive Code Playground States
  const [code, setCode] = useState('');
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [practiceStatus, setPracticeStatus] = useState<'idle' | 'success' | 'fail'>('idle');

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
        const res = await fetch(`/api/lessons/${lessonId}`);
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

  let examObj = null;
  if (lesson.exam_data) {
    examObj = typeof lesson.exam_data === 'string' ? JSON.parse(lesson.exam_data) : lesson.exam_data;
  }

  // Find index of current lesson in sidebar
  const currentIdx = sideLessons.findIndex((l: any) => Number(l.id) === Number(lessonId));
  const prevLesson = currentIdx > 0 ? sideLessons[currentIdx - 1] : null;
  const nextLesson = currentIdx < sideLessons.length - 1 ? sideLessons[currentIdx + 1] : null;

  // Run Code Logic
  const handleRunCode = () => {
    setIsRunning(true);
    setConsoleOutput([]);
    
    setTimeout(() => {
      try {
        const outputs: string[] = [];
        
        if (course.category === 'javascript') {
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
              if (!trimmed || trimmed.startsWith('#')) {
                jsLines.push(line);
                continue;
              }

              const indentMatch = line.match(/^(\s*)/);
              const indent = indentMatch ? indentMatch[1].length : 0;

              while (indentStack.length > 0 && indent <= indentStack[indentStack.length - 1]) {
                const closedIndent = indentStack.pop() || 0;
                jsLines.push(' '.repeat(closedIndent) + '}');
              }

              let processed = line;

              // Booleans
              processed = processed.replace(/\bTrue\b/g, 'true').replace(/\bFalse\b/g, 'false');

              // String multiplication
              processed = processed.replace(/(["'])(.*?)\1\s*\*\s*(\d+)/g, '"$2".repeat($3)');
              processed = processed.replace(/(["'])(.*?)\1\s*\*\s*([a-zA-Z_][a-zA-Z0-9_]*)/g, '"$2".repeat($3)');

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

        // Verify output
        const expected = (lesson.practice_expected || '').trim();
        const matched = outputs.some(out => out.trim().includes(expected));
        
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

  return (
    <div style={{ fontFamily: "'Cairo', sans-serif", direction: 'rtl', background: '#020205', color: '#e2e8f0', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet" />

      {/* Header */}
      <header className="learning-header" style={{ borderBottom: '1px solid rgba(16,185,129,0.1)', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(5,5,10,0.95)', backdropFilter: 'blur(20px)', height: 70, flexShrink: 0, zIndex: 100, flexWrap: 'nowrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
          <button onClick={() => setSidebar(!sidebar)} style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', color: '#10b981', width: 40, height: 40, borderRadius: '10px', cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>☰</button>
          <div className="lesson-header-title">
            <span className="desktop-text" style={{ fontSize: '0.75rem', color: '#64748b' }}>{course.title_ar || course.title}</span>
            <span className="lesson-title" style={{ fontSize: '1rem', fontWeight: 800, color: '#fff' }}>{lesson.title}</span>
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
            <span className="desktop-text">💻 مساحة التطبيق العملي (4 لوحات)</span>
            <span className="mobile-text">💻 التطبيق</span>
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
          <aside className="navigation-sidebar" style={{ width: 320, background: 'rgba(5,5,10,0.85)', borderLeft: '1px solid rgba(16,185,129,0.1)', overflowY: 'auto', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
            <div style={{ padding: '24px 20px', borderBottom: '1px solid rgba(16,185,129,0.1)', background: 'rgba(16,185,129,0.02)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: 700 }}>التقدم الدراسي</span>
                <span style={{ fontSize: '0.85rem', color: '#64748b', fontFamily: 'monospace' }}>{currentIdx + 1} / {sideLessons.length}</span>
              </div>
              <div style={{ width: '100%', height: 6, background: 'rgba(255,255,255,0.05)', borderRadius: 3, overflow: 'hidden' }}>
                <div style={{ width: `${((currentIdx + 1) / sideLessons.length) * 100}%`, height: '100%', background: 'linear-gradient(90deg, #10b981, #059669)', borderRadius: 3 }} />
              </div>
            </div>
            
            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: 6 }}>
              {sideLessons.map((l: any, idx: number) => {
                const isActive = Number(l.id) === Number(lessonId);
                return (
                  <Link key={l.id} href={`/learn/${l.id}`} style={{ textDecoration: 'none' }}>
                    <div style={{
                      padding: '12px 16px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: 12,
                      background: isActive ? 'rgba(16,185,129,0.1)' : 'transparent',
                      border: isActive ? '1px solid rgba(16,185,129,0.2)' : '1px solid transparent',
                      color: isActive ? '#10b981' : '#94a3b8', transition: 'all 0.2s', cursor: 'pointer'
                    }}>
                      <div style={{ width: 24, height: 24, borderRadius: 6, background: isActive ? '#10b981' : 'rgba(255,255,255,0.05)', color: isActive ? '#000' : '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800 }}>
                        {idx + 1}
                      </div>
                      <span style={{ fontSize: '0.9rem', fontWeight: isActive ? 700 : 400, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>{l.title.replace(/الدرس \d+:\s*/, '')}</span>
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
            /* Workspace Container containing switcher and grid */
            <div className="workspace-container" style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
              
              {/* Mobile Workspace Tabs Switcher */}
              <div className="mobile-workspace-tabs" style={{ display: 'none', background: 'rgba(5,5,10,0.95)', borderBottom: '1px solid rgba(16,185,129,0.1)', padding: '6px', gap: '4px', overflowX: 'auto', flexShrink: 0 }}>
                <button 
                  onClick={() => setActiveWorkspaceTab('explanation')} 
                  style={{
                    background: activeWorkspaceTab === 'explanation' ? 'rgba(16,185,129,0.15)' : 'transparent',
                    border: 'none',
                    color: activeWorkspaceTab === 'explanation' ? '#10b981' : '#94a3b8',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontFamily: "'Cairo', sans-serif",
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    flex: 1,
                    textAlign: 'center',
                    transition: 'all 0.2s'
                  }}
                >
                  📖 الدرس
                </button>
                <button 
                  onClick={() => setActiveWorkspaceTab('syntax')} 
                  style={{
                    background: activeWorkspaceTab === 'syntax' ? 'rgba(16,185,129,0.15)' : 'transparent',
                    border: 'none',
                    color: activeWorkspaceTab === 'syntax' ? '#10b981' : '#94a3b8',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontFamily: "'Cairo', sans-serif",
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    flex: 1,
                    textAlign: 'center',
                    transition: 'all 0.2s'
                  }}
                >
                  💡 القاموس
                </button>
                <button 
                  onClick={() => setActiveWorkspaceTab('editor')} 
                  style={{
                    background: activeWorkspaceTab === 'editor' ? 'rgba(16,185,129,0.15)' : 'transparent',
                    border: 'none',
                    color: activeWorkspaceTab === 'editor' ? '#10b981' : '#94a3b8',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontFamily: "'Cairo', sans-serif",
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    flex: 1,
                    textAlign: 'center',
                    transition: 'all 0.2s'
                  }}
                >
                  💻 التجربة
                </button>
                <button 
                  onClick={() => setActiveWorkspaceTab('instructions')} 
                  style={{
                    background: activeWorkspaceTab === 'instructions' ? 'rgba(16,185,129,0.15)' : 'transparent',
                    border: 'none',
                    color: activeWorkspaceTab === 'instructions' ? '#10b981' : '#94a3b8',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontFamily: "'Cairo', sans-serif",
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    flex: 1,
                    textAlign: 'center',
                    transition: 'all 0.2s'
                  }}
                >
                  🎯 الهدف
                </button>
              </div>

              {/* 4-Panel Grid Workspace */}
              <div className="workspace-grid" style={{ gap: '12px', padding: '12px', background: '#020205', flex: 1, overflow: 'hidden' }}>
                
                {/* Panel 1: Written Explanation (الشرح النظري) */}
                <section className={`workspace-panel ${activeWorkspaceTab === 'explanation' ? 'active-panel' : 'hidden-panel'}`} style={{ background: 'rgba(9,10,18,0.7)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)' }}>
                  
                  {/* Lesson title header for mobile/desktop reading anchor */}
                  <div className="panel-lesson-title" style={{ marginBottom: '20px', padding: '16px', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, transparent 100%)', borderRadius: '12px', borderRight: '4px solid #10b981' }}>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700, marginBottom: '4px' }}>{course.title_ar || course.title}</div>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#fff', margin: 0 }}>{lesson.title}</h2>
                  </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '1.25rem' }}>📖</span>
                  <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#10b981' }}>الشرح الصوتي والكتابي والعملي للدرس</h3>
                </div>
                
                {/* 1. Audio Player at the top */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '1.1rem' }}>💡</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f59e0b' }}>نصيحة ذكية للأبطال: استمع إلى الشرح الصوتي للدرس أولاً لتسهيل الحفظ والفهم السريع! 🎧</span>
                  </div>
                  <PremiumAudioPlayer
                    src={lesson.audio_url || ''}
                    title={lesson.title}
                    textContent={lesson.text_content || ''}
                  />
                </div>

                {/* 2. Practical Video Player below audio */}
                {lesson.video_url && (
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <span style={{ fontSize: '1.1rem' }}>📺</span>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#3b82f6' }}>فيديو الشرح العملي: شاهد كيف نطبق الدرس خطوة بخطوة بالصوت والصورة! 🚀</span>
                    </div>
                    <PremiumVideoPlayer src={lesson.video_url} />
                  </div>
                )}

                {/* 3. Written Explanations below video */}
                <div style={{ marginTop: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '8px' }}>
                    <span style={{ fontSize: '1.1rem' }}>📝</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#e2e8f0' }}>قراءة الدرس والشرح بالتفصيل:</span>
                  </div>
                  <div 
                    className="explanation-content" 
                    style={{ 
                      lineHeight: 1.9, 
                      fontSize: '1.05rem', 
                      color: '#cbd5e1',
                      background: 'rgba(255,255,255,0.01)',
                      border: '1px solid rgba(255,255,255,0.02)',
                      padding: '20px',
                      borderRadius: '12px'
                    }} 
                    dangerouslySetInnerHTML={{ __html: lesson.text_content }} 
                  />
                </div>
              </section>

              {/* Panel 2: Code & Syntax Explanation (الكود البرمجي وشرحه) */}
              <section className={`workspace-panel ${activeWorkspaceTab === 'syntax' ? 'active-panel' : 'hidden-panel'}`} style={{ background: 'rgba(9,10,18,0.7)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '1.25rem' }}>💡</span>
                  <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#10b981' }}>بنية الكود البرمجي وشرحه</h3>
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
                      <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7 }}>
                        {lesson.code_explanation || 'يوضح النموذج بالأعلى البنية الأساسية وكيفية استخدام المتغيرات والتعليمات البرمجية لتنفيذ هذا المفهوم بنجاح.'}
                      </p>

                      {/* Qamos Al-Akoad (Interactive Bilingual Syntax Dictionary) */}
                      {keywordsFound.length > 0 && (
                        <div style={{ marginTop: '24px', borderTop: '1px solid rgba(16, 185, 129, 0.15)', paddingTop: '20px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span style={{ fontSize: '1.4rem' }}>📖</span>
                              <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 900, color: '#fff' }}>
                                قاموس الأكواد التفاعلي (مساعدك الذكي)
                              </h4>
                            </div>
                            <span style={{ fontSize: '0.75rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', color: '#10b981', padding: '2px 8px', borderRadius: '20px', fontWeight: 700 }}>
                              تم العثور على {keywordsFound.length} كلمات برمجية
                            </span>
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
                                    background: 'rgba(255, 255, 255, 0.01)',
                                    border: '1px solid rgba(255, 255, 255, 0.04)',
                                    borderRadius: '16px',
                                    padding: '20px',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '14px',
                                    animation: isAnySpeaking ? 'card-pulse 3s infinite, rainbow-border 3s infinite' : 'none',
                                    boxShadow: isAnySpeaking 
                                      ? `0 8px 32px 0 rgba(${isSpeakingAr ? '16, 185, 129' : '139, 92, 246'}, 0.15), 0 0 15px rgba(${isSpeakingAr ? '16, 185, 129' : '139, 92, 246'}, 0.1)` 
                                      : 'none',
                                  }}
                                  className="syntax-card"
                                >
                                  {/* Glowing Accent */}
                                  <div style={{
                                    position: 'absolute',
                                    top: 0, right: 0, width: '120px', height: '120px',
                                    background: `radial-gradient(circle, ${item.color}15 0%, transparent 70%)`,
                                    pointerEvents: 'none',
                                    zIndex: 0
                                  }} />

                                  {/* Card Header */}
                                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '10px', zIndex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                      <span style={{ fontSize: '1.4rem' }}>{item.emoji}</span>
                                      <span style={{ 
                                        fontFamily: 'monospace', 
                                        fontSize: '1rem', 
                                        fontWeight: 'bold', 
                                        color: '#fff', 
                                        background: 'rgba(255,255,255,0.05)',
                                        padding: '4px 10px',
                                        borderRadius: '8px',
                                        border: `1px solid ${item.color}40`,
                                        boxShadow: `0 0 10px ${item.color}20`
                                      }}>
                                        {kw}
                                      </span>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '2px' }}>
                                      <span style={{ fontSize: '0.85rem', fontWeight: 800, color: item.color }}>{item.nameAr}</span>
                                      <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600 }}>{item.nameEn}</span>
                                    </div>
                                  </div>

                                  {/* Explanations Grid */}
                                  <div className="syntax-grid" style={{ gap: '20px', zIndex: 1 }}>
                                    {/* Arabic side */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderLeft: '1px solid rgba(255,255,255,0.03)', paddingLeft: '10px' }}>
                                      <div>
                                        <div style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 800, marginBottom: '4px' }}>📋 المعنى والشرح:</div>
                                        <div style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.6 }}>{item.descAr}</div>
                                      </div>
                                      <div>
                                        <div style={{ fontSize: '0.75rem', color: '#3b82f6', fontWeight: 800, marginBottom: '4px' }}>💡 طريقة الاستخدام:</div>
                                        <div style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.6 }}>{item.howAr}</div>
                                      </div>
                                      
                                      {/* Audio Button */}
                                      <button
                                        onClick={() => speakSyntax(kw, `${item.nameAr}. ${item.descAr}. طريقة الاستخدام: ${item.howAr}`, 'ar')}
                                        style={{
                                          marginTop: 'auto',
                                          alignSelf: 'flex-start',
                                          background: isSpeakingAr ? 'rgba(239,68,68,0.1)' : 'rgba(16,185,129,0.05)',
                                          border: `1px solid ${isSpeakingAr ? '#ef4444' : '#10b981'}`,
                                          borderRadius: '30px',
                                          padding: '6px 14px',
                                          color: isSpeakingAr ? '#ef4444' : '#10b981',
                                          fontSize: '0.75rem',
                                          fontWeight: 800,
                                          cursor: 'pointer',
                                          display: 'flex',
                                          alignItems: 'center',
                                          gap: '6px',
                                          transition: 'all 0.2s',
                                          fontFamily: "'Cairo', sans-serif"
                                        }}
                                      >
                                        {isSpeakingAr ? (
                                          <>
                                            <div className="audio-wave">
                                              <div style={{ animationDelay: '0.1s' }} />
                                              <div style={{ animationDelay: '0.3s' }} />
                                              <div style={{ animationDelay: '0.5s' }} />
                                            </div>
                                            إيقاف الشرح
                                          </>
                                        ) : (
                                          <>🔊 استمع للشرح بالعربية</>
                                        )}
                                      </button>
                                    </div>

                                    {/* English side */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', direction: 'ltr', textAlign: 'left' }}>
                                      <div>
                                        <div style={{ fontSize: '0.75rem', color: '#a78bfa', fontWeight: 800, marginBottom: '4px' }}>📋 Meaning & Concept:</div>
                                        <div style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.6 }}>{item.descEn}</div>
                                      </div>
                                      <div>
                                        <div style={{ fontSize: '0.75rem', color: '#60a5fa', fontWeight: 800, marginBottom: '4px' }}>💡 How to use:</div>
                                        <div style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.6 }}>{item.howEn}</div>
                                      </div>

                                      {/* Audio Button */}
                                      <button
                                        onClick={() => speakSyntax(kw, `${item.nameEn}. ${item.descEn}. How to use: ${item.howEn}`, 'en')}
                                        style={{
                                          marginTop: 'auto',
                                          alignSelf: 'flex-start',
                                          background: isSpeakingEn ? 'rgba(239,68,68,0.1)' : 'rgba(139,92,246,0.05)',
                                          border: `1px solid ${isSpeakingEn ? '#ef4444' : '#8b5cf6'}`,
                                          borderRadius: '30px',
                                          padding: '6px 14px',
                                          color: isSpeakingEn ? '#ef4444' : '#8b5cf6',
                                          fontSize: '0.75rem',
                                          fontWeight: 800,
                                          cursor: 'pointer',
                                          display: 'flex',
                                          alignItems: 'center',
                                          gap: '6px',
                                          transition: 'all 0.2s',
                                          fontFamily: "'Cairo', sans-serif"
                                        }}
                                      >
                                        {isSpeakingEn ? (
                                          <>
                                            <div className="audio-wave" style={{ borderColor: '#8b5cf6' }}>
                                              <div style={{ background: '#8b5cf6', animationDelay: '0.1s' }} />
                                              <div style={{ background: '#8b5cf6', animationDelay: '0.3s' }} />
                                              <div style={{ background: '#8b5cf6', animationDelay: '0.5s' }} />
                                            </div>
                                            Stop Explanation
                                          </>
                                        ) : (
                                          <>🔊 Listen in English</>
                                        )}
                                      </button>
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
              </section>

              {/* Panel 3: Interactive Practice Playground (بيئة التطبيق التفاعلية) */}
              <section className={`workspace-panel ${activeWorkspaceTab === 'editor' ? 'active-panel' : 'hidden-panel'}`} style={{ background: 'rgba(9,10,18,0.7)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px', borderBottom: '1px solid rgba(16,185,129,0.1)', background: 'rgba(16,185,129,0.02)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: '1.25rem' }}>💻</span>
                    <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#10b981' }}>محرر الأكواد التفاعلي</h3>
                  </div>
                  <button onClick={handleRunCode} disabled={isRunning} style={{ background: 'linear-gradient(135deg, #10b981, #059669)', border: 'none', color: '#000', padding: '6px 16px', borderRadius: '6px', fontWeight: 700, cursor: 'pointer', fontFamily: "'Cairo', sans-serif", fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                    {isRunning ? 'جاري التشغيل...' : 'تشغيل الكود ▶'}
                  </button>
                </div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
                  <textarea
                    value={code}
                    onChange={e => setCode(e.target.value)}
                    style={{
                      flex: 1, width: '100%', background: 'rgba(0,0,0,0.3)', border: 'none', resize: 'none',
                      outline: 'none', color: '#10b981', padding: '16px', fontFamily: 'monospace', fontSize: '0.95rem',
                      direction: 'ltr', textAlign: 'left', lineHeight: 1.5
                    }}
                  />
                  
                  {/* Console output inside editor */}
                  <div style={{ height: '110px', background: 'rgba(0,0,0,0.6)', borderTop: '1px solid rgba(16,185,129,0.1)', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ background: 'rgba(255,255,255,0.02)', padding: '4px 16px', fontSize: '0.75rem', color: '#64748b', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      شاشة المخرجات (Console)
                    </div>
                    <div style={{ flex: 1, padding: '10px 16px', overflowY: 'auto', fontFamily: 'monospace', fontSize: '0.85rem', color: '#e2e8f0', direction: 'ltr', textAlign: 'left' }}>
                      {consoleOutput.length > 0 ? (
                        consoleOutput.map((out, idx) => (
                          <div key={idx} style={{ color: out.startsWith('Error') ? '#ef4444' : '#10b981' }}>{out}</div>
                        ))
                      ) : (
                        <div style={{ color: '#475569' }}>اضغط على "تشغيل الكود" لعرض النتيجة هنا...</div>
                      )}
                    </div>
                  </div>
                </div>
              </section>

              {/* Panel 4: Ready Example & Instructions (إرشادات التطبيق) */}
              <section className={`workspace-panel ${activeWorkspaceTab === 'instructions' ? 'active-panel' : 'hidden-panel'}`} style={{ background: 'rgba(9,10,18,0.7)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '1.25rem' }}>🎯</span>
                  <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#10b981' }}>إرشادات التطبيق والمخرجات</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '10px', padding: '16px' }}>
                    <h5 style={{ margin: '0 0 8px', fontSize: '0.9rem', color: '#fff' }}>المطلوب منك:</h5>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.6 }}>{lesson.practice_instructions || 'يرجى كتابة وتعديل الكود البرمجي ليعطي المخرج المطلوب بدقة.'}</p>
                  </div>
                  
                  <div style={{ background: 'rgba(16,185,129,0.03)', border: '1px solid rgba(16,185,129,0.1)', borderRadius: '10px', padding: '16px' }}>
                    <h5 style={{ margin: '0 0 8px', fontSize: '0.9rem', color: '#10b981' }}>المخرجات المتوقعة (Expected Output):</h5>
                    <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: '0.85rem', color: '#cbd5e1', direction: 'ltr', textAlign: 'left' }}>
                      {lesson.practice_expected || 'Hello World'}
                    </pre>
                  </div>

                  {/* Practice Feedback Status */}
                  {practiceStatus !== 'idle' && (
                    <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid', background: practiceStatus === 'success' ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)', color: practiceStatus === 'success' ? '#10b981' : '#f87171', borderColor: practiceStatus === 'success' ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)', display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.9rem', fontWeight: 700 }}>
                      {practiceStatus === 'success' ? '✅ عمل رائع! النتيجة مطابقة للمطلوب.' : '❌ النتيجة غير مطابقة. حاول مجدداً.'}
                    </div>
                  )}
                </div>
              </section>

            </div>
          </div>
          ) : (
            /* Interactive Quiz Panel */
            <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', width: '100%', height: '100%', overflowY: 'auto' }}>
              <div style={{ background: 'rgba(15,15,25,0.8)', padding: '40px', borderRadius: '20px', border: '1px solid rgba(16,185,129,0.2)', backdropFilter: 'blur(20px)' }}>
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
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', color: '#fff' }}>{qi + 1}. {q.question}</h4>
                        <div style={{ display: 'grid', gap: '12px' }}>
                          {q.options.map((opt: string, oi: number) => {
                            const isSelected = answers[qi] === oi;
                            return (
                              <button key={oi} onClick={() => setAnswers(prev => ({ ...prev, [qi]: oi }))} style={{
                                textAlign: 'right', padding: '16px 20px', borderRadius: '12px', cursor: 'pointer',
                                background: isSelected ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.02)',
                                border: isSelected ? '1px solid rgba(16,185,129,0.4)' : '1px solid rgba(255,255,255,0.05)',
                                color: isSelected ? '#10b981' : '#e2e8f0', fontFamily: "'Cairo', sans-serif", fontSize: '0.95rem', transition: 'all 0.2s'
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

          {/* Footer Controls */}
          <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '12px 20px', display: 'flex', justifyContent: 'space-between', background: 'rgba(5,5,10,0.95)', flexShrink: 0 }}>
            {prevLesson ? (
              <Link href={`/learn/${prevLesson.id}`} style={{ textDecoration: 'none' }}>
                <button style={{ background: 'rgba(255,255,255,0.03)', color: '#cbd5e1', border: '1px solid rgba(255,255,255,0.05)', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontFamily: "'Cairo', sans-serif", fontSize: '0.85rem' }}>
                  ← الدرس السابق: {prevLesson.title.replace(/الدرس \d+:\s*/, '')}
                </button>
              </Link>
            ) : <div />}

            {nextLesson ? (
              <Link href={`/learn/${nextLesson.id}`} style={{ textDecoration: 'none' }}>
                <button style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981', border: '1px solid rgba(16,185,129,0.2)', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontFamily: "'Cairo', sans-serif", fontSize: '0.85rem', fontWeight: 700 }}>
                  الدرس التالي: {nextLesson.title.replace(/الدرس \d+:\s*/, '')} →
                </button>
              </Link>
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
