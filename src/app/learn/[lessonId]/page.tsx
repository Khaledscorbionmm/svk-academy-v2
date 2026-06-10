'use client';

import React, { useState, useRef, useCallback, use, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
type Lang = 'python' | 'javascript';
type Tab  = 'theory' | 'console' | 'quiz';

interface FnRef   { name: string; syntax: string; desc: string; example: string }
interface TheorySection {
  type: 'intro' | 'concept' | 'functions' | 'table';
  title: string;
  title_en?: string;
  body?: string;
  body_en?: string;
  code?: string;
  rows?: string[][];
  rows_en?: string[][];
  cols?: string[];
  cols_en?: string[];
  fns?: FnRef[];
}
interface QuizQ   { q: string; q_en?: string; opts: string[]; opts_en?: string[]; ans: number; why: string; why_en?: string }
interface Lesson  { id: string; title: string; title_en: string; lang: Lang; xp: number; mins: number; sections: TheorySection[]; starter: string; quiz: QuizQ[] }
interface SideLesson { id: string; title: string; title_en: string; free: boolean }

// ─────────────────────────────────────────────
// Lesson DB
// ─────────────────────────────────────────────
const LESSONS: Record<string, Lesson> = {
  'python-vars': {
    id: 'python-vars', title: 'المتغيرات وأنواع البيانات', title_en: 'Variables & Data Types', lang: 'python', xp: 100, mins: 25,
    sections: [
      {
        type: 'intro', title: 'ما هو المتغير؟', title_en: 'What is a Variable?',
        body: 'المتغير هو **صندوق في ذاكرة الكمبيوتر** نحفظ فيه قيمة ونعطيه اسماً.\nتخيّل أنك كتبت رقم موبايلك على ورقة واسميتها "موبايلي" — هذا بالضبط هو المتغير!\n\nفي Python لا تحتاج لتحديد النوع — Python يعرفه تلقائياً 🎯',
        body_en: 'A variable is a **box in the computer\'s memory** where we save a value and give it a name.\nImagine writing your phone number on a paper and calling it "my_phone" — that\'s exactly a variable!\n\nIn Python, you do not need to specify the type — Python detects it automatically 🎯',
      },
      {
        type: 'concept', title: 'كيف تُنشئ متغيراً؟', title_en: 'How to create a Variable?',
        body: 'الصيغة بسيطة: **اسم_المتغير = القيمة**\n\nقواعد التسمية:\n- يبدأ بحرف أو `_` وليس برقم\n- لا مسافات (استخدم `_` بدلاً منها)\n- حساس لحالة الأحرف: `name` ≠ `Name`',
        body_en: 'Syntax is simple: **variable_name = value**\n\nNaming Rules:\n- Must start with a letter or `_` (not a number)\n- No spaces (use `_` instead)\n- Case-sensitive: `name` ≠ `Name`',
        code: `# ✅ أمثلة صحيحة
name    = "خالد"       # str  - نص
age     = 20            # int  - رقم صحيح
height  = 1.75          # float - رقم عشري
student = True          # bool - صح/خطأ

print(name)        # خالد
print(age)         # 20
print(type(age))   # <class 'int'>`,
      },
      {
        type: 'table', title: 'أنواع البيانات الأربعة الأساسية', title_en: 'Four Basic Data Types',
        cols: ['النوع', 'مثال', 'الوصف'],
        cols_en: ['Type', 'Example', 'Description'],
        rows: [
          ['str', '"مرحبا" / \'Python\'', 'أي نص داخل quotes'],
          ['int', '42 / -10 / 0', 'رقم صحيح بدون فاصلة'],
          ['float', '3.14 / -0.5', 'رقم بفاصلة عشرية'],
          ['bool', 'True / False', 'صح أو خطأ فقط'],
        ],
        rows_en: [
          ['str', '"Hello" / \'Python\'', 'Any text inside quotes'],
          ['int', '42 / -10 / 0', 'Integer number without decimal point'],
          ['float', '3.14 / -0.5', 'Decimal number with decimal point'],
          ['bool', 'True / False', 'True or False only'],
        ]
      },
      {
        type: 'functions', title: 'الدوال المستخدمة في هذا الدرس', title_en: 'Functions used in this lesson',
        fns: [
          { name: 'print()', syntax: 'print(value, ...)', desc: 'تطبع قيمة على الشاشة. يمكن طباعة أكثر من قيمة بفصلها بفاصلة', example: 'print("مرحبا", name, age)' },
          { name: 'type()', syntax: 'type(variable)', desc: 'تعيد نوع المتغير — مفيدة للتحقق من النوع', example: "print(type(42))  # <class 'int'>" },
          { name: 'input()', syntax: 'input(prompt)', desc: 'تطلب إدخالاً من المستخدم — تعيد دائماً str', example: 'name = input("أدخل اسمك: ")' },
          { name: 'int()', syntax: 'int(value)', desc: 'تحول قيمة إلى رقم صحيح', example: 'age = int("25")  # "25" → 25' },
          { name: 'str()', syntax: 'str(value)', desc: 'تحول قيمة إلى نص', example: 'text = str(42)   # 42 → "42"' },
          { name: 'float()', syntax: 'float(value)', desc: 'تحول قيمة إلى رقم عشري', example: 'h = float("1.75")' },
        ],
      },
    ],
    starter: `# 🎯 جرّب! غيّر القيم وشاهد النتيجة
name   = "اسمك هنا"
age    = 0
city   = "مدينتك"

print("مرحباً،", name)
print("عمرك:", age, "سنة")
print("تسكن في:", city)
print("نوع age:", type(age))
`,
    quiz: [
      { q: 'ما ناتج: type(3.14)?', q_en: 'What is the output of: type(3.14)?', opts: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'num'>"], ans: 1, why: '3.14 رقم عشري → float', why_en: '3.14 is a decimal number → float' },
      { q: 'أي تالي اسم متغير صحيح؟', q_en: 'Which of the following is a valid variable name?', opts: ['2name', 'my name', 'my_name', 'my-name'], ans: 2, why: 'my_name يبدأ بحرف ويستخدم _ بدل المسافة', why_en: 'my_name starts with a letter and uses _ instead of spaces' },
      { q: 'ما ناتج: type(True)?', q_en: 'What is the output of: type(True)?', opts: ["<class 'str'>", "<class 'int'>", "<class 'bool'>", "Error"], ans: 2, why: 'True و False من نوع bool', why_en: 'True and False are of type bool' },
    ],
  },
  'python-if': {
    id: 'python-if', title: 'الشروط if / elif / else', title_en: 'Conditions if / elif / else', lang: 'python', xp: 120, mins: 30,
    sections: [
      {
        type: 'intro', title: 'الجمل الشرطية — قرارات البرنامج', title_en: 'Conditional Statements — Decisions',
        body: 'الجمل الشرطية تجعل برنامجك **يتخذ قرارات** مثلما تفعل أنت يومياً!\n\n🌡️ إذا كان الجو حاراً → ارتدِ ملابس خفيفة\n🧥 وإلا → ارتدِ معطفاً\n\nفي Python هذا بالضبط ما يفعله `if` 💡',
        body_en: 'Conditional statements make your program **make decisions** just like you do daily!\n\n🌡️ If the weather is hot → wear light clothes\n🧥 Else → wear a coat\n\nIn Python, this is exactly what `if` does 💡',
      },
      {
        type: 'concept', title: 'صيغة if / elif / else', title_en: 'if / elif / else syntax',
        body: '**if** = "إذا" — ينفذ الكود لو الشرط صحيح\n**elif** = "وإلا إذا" — يفحص شرطاً آخر\n**else** = "وإلا" — ينفذ لو كل الشروط فشلت\n\n⚠️ Python يستخدم **مسافات بادئة** لتحديد الكتلة — إجباري!',
        body_en: '**if** = Executes code if the condition is true\n**elif** = Checks another condition if previous fails\n**else** = Executes if all conditions fail\n\n⚠️ Python uses **indentation** to define blocks — mandatory!',
        code: `age = 20

if age >= 18:
    print("بالغ ✓")
elif age >= 13:
    print("مراهق")
else:
    print("طفل")

# مثال: درجة الامتحان
score = 85
if score >= 90:   grade = "A - ممتاز"
elif score >= 80: grade = "B - جيد جداً"
elif score >= 70: grade = "C - جيد"
else:             grade = "F - راسب"
print("درجتك:", grade)`,
      },
    ],
    starter: `# 🎯 تحدي: تصنيف درجة الحرارة
temp = 35  # جرّب قيم مختلفة: -5, 10, 25, 35, 45

if temp >= 40:
    print("🔥 حار جداً!")
elif temp >= 30:
    print("☀️ حار")
elif temp >= 20:
    print("🌤️ معتدل")
elif temp >= 10:
    print("🌬️ بارد")
else:
    print("❄️ بارد جداً!")
`,
    quiz: [
      { q: 'ما ناتج: 5 > 3 and 2 < 1?', q_en: 'What is: 5 > 3 and 2 < 1?', opts: ['True', 'False', 'Error', 'None'], ans: 1, why: '5>3 هو True، لكن 2<1 هو False → True and False = False', why_en: '5>3 is True, but 2<1 is False → True and False = False' },
      { q: 'كيف نكتب "وإلا إذا" في Python؟', q_en: 'How do you write "else if" in Python?', opts: ['else if', 'elseif', 'elif', 'otherwise'], ans: 2, why: 'Python تستخدم elif (اختصار else if)', why_en: 'Python uses elif (short for else if)' },
    ],
  },
};

const SIDE_LESSONS: SideLesson[] = [
  { id: 'python-vars', title: 'المتغيرات وأنواع البيانات', title_en: 'Variables & Data Types', free: true },
  { id: 'python-if', title: 'الشروط if/elif/else', title_en: 'Conditions if/elif/else', free: false },
  { id: 'python-loops', title: 'الحلقات for و while', title_en: 'Loops for & while', free: false },
  { id: 'python-fns', title: 'الدوال Functions', title_en: 'Functions', free: false },
  { id: 'python-lists', title: 'القوائم Lists', title_en: 'Lists', free: false },
  { id: 'python-dicts', title: 'القواميس Dicts', title_en: 'Dictionaries', free: false },
];

const TRANSLATIONS = {
  ar: {
    sidebar_title: 'Python للمبتدئين',
    sidebar_subtitle: '6 دروس',
    tab_theory: '📖 الشرح المكتوب',
    tab_console: '💻 جرّب الكود',
    tab_quiz: '🧠 الاختبار',
    courses_link: '← الكورسات',
    xp_earned: 'XP نقطة',
    time_mins: 'دقيقة',
    try_code_btn: '💻 جرّب الكود الآن',
    console_title: '💻 المحرر التفاعلي',
    console_subtitle: 'عدّل الكود وشاهد النتيجة — التعلم بالتجربة هو الأقوى!',
    console_run: '▶ تشغيل',
    console_reset: '↺',
    console_helper: '💡 Ctrl+Enter للتشغيل | Tab للإزاحة',
    console_success: '✅ يعمل! جرّب تغيير القيم وشوف الفرق',
    console_error: '❌ في خطأ — اقرأ الرسالة وصلحه!',
    console_empty: 'اضغط "تشغيل" لرؤية النتيجة',
    quiz_title: '🧠 اختبار الدرس',
    quiz_subtitle: 'أسئلة | XP كحد أقصى',
    quiz_next: 'السؤال التالي →',
    quiz_finish: '🏁 إنهاء الاختبار',
    locked_title: '🔒 هذا الدرس مغلق',
    locked_desc: 'أول درس فقط في الكورس متاح مجاناً للجميع لتجربة الشرح. للوصول لباقي الدروس، يرجى إرسال طلب تفعيل الحساب.',
    locked_price_info: 'سعر تفعيل الكورس الواحد هو 369 جنيه مصري فقط مع خصم مميز للحزمة الكاملة!',
    btn_request_access: 'طلب تفعيل الدرس من المشرف 🚀',
    request_pending: '⏳ تم إرسال طلب التفعيل بنجاح وهو قيد المراجعة الآن.',
    login_required: '🔑 يرجى تسجيل الدخول للطلاب لتتمكن من تفعيل الدروس ومتابعة تقدمك.',
    btn_login: 'تسجيل دخول الطلاب ←',
    loading: 'جاري التحقق من صلاحيات الوصول...',
    challenge_title: 'تحدي',
    challenge_1: 'غيّر الاسم لاسمك الحقيقي وشغّل البرنامج',
    challenge_2: 'أضف متغير phone وأطبعه مع الاسم',
    challenge_3: 'استخدم type() لمعرفة نوع كل متغير',
    explanation_title: '💡 الإجابة الصحيحة:',
    explanation_correct: '🎉 صح!',
  },
  en: {
    sidebar_title: 'Python for Beginners',
    sidebar_subtitle: '6 Lessons',
    tab_theory: '📖 Written Lesson',
    tab_console: '💻 Code Sandbox',
    tab_quiz: '🧠 Quiz',
    courses_link: '← Courses',
    xp_earned: 'XP Points',
    time_mins: 'mins',
    try_code_btn: '💻 Try Code Now',
    console_title: '💻 Interactive Sandbox',
    console_subtitle: 'Edit code and see results — learning by doing is key!',
    console_run: '▶ Run Code',
    console_reset: '↺',
    console_helper: '💡 Ctrl+Enter to Run | Tab to Indent',
    console_success: '✅ Code works! Try modifying values to see changes',
    console_error: '❌ Error — read output and fix!',
    console_empty: 'Click "Run Code" to see output',
    quiz_title: '🧠 Lesson Quiz',
    quiz_subtitle: 'questions | max XP',
    quiz_next: 'Next Question →',
    quiz_finish: '🏁 Finish Quiz',
    locked_title: '🔒 Lesson Locked',
    locked_desc: 'Only the first lesson is free to preview. To access the rest, please request activation from the admin.',
    locked_price_info: 'Course activation is only 369 EGP per course with a huge discount on the full bundle!',
    btn_request_access: 'Request Activation from Admin 🚀',
    request_pending: '⏳ Activation request sent successfully. Pending approval.',
    login_required: '🔑 Please login as a student to request access and track your progress.',
    btn_login: 'Student Login ←',
    loading: 'Checking lesson permissions...',
    challenge_title: 'Challenge',
    challenge_1: 'Change the name variable to yours and run the code',
    challenge_2: 'Add a phone variable and print it along with the name',
    challenge_3: 'Use type() function to discover variable types',
    explanation_title: '💡 Correct Answer:',
    explanation_correct: '🎉 Correct!',
  }
};

// ─────────────────────────────────────────────
// Python Interpreter (mock)
// ─────────────────────────────────────────────
function executePython(code: string): { out: string[]; err: string | null } {
  const out: string[] = [];
  const vars: Record<string, string | number | boolean> = {};

  const resolveVal = (raw: string): string | number | boolean => {
    raw = raw.trim();
    if (raw === 'True') return true;
    if (raw === 'False') return false;
    if ((raw.startsWith('"') && raw.endsWith('"')) || (raw.startsWith("'") && raw.endsWith("'"))) return raw.slice(1,-1);
    if (!isNaN(Number(raw))) return Number(raw);
    if (raw in vars) return vars[raw];
    if (raw.startsWith('int(') && raw.endsWith(')')) { const inner = raw.slice(4,-1).trim(); return parseInt(String(resolveVal(inner)), 10); }
    if (raw.startsWith('str(') && raw.endsWith(')')) return String(resolveVal(raw.slice(4,-1).trim()));
    if (raw.startsWith('float(') && raw.endsWith(')')) return parseFloat(String(resolveVal(raw.slice(6,-1).trim())));
    if (raw.startsWith('type(') && raw.endsWith(')')) {
      const v = resolveVal(raw.slice(5,-1).trim());
      if (typeof v === 'boolean') return "<class 'bool'>";
      if (typeof v === 'number' && Number.isInteger(v)) return "<class 'int'>";
      if (typeof v === 'number') return "<class 'float'>";
      return "<class 'str'>";
    }
    return raw;
  };

  try {
    const lines = code.split('\n');
    for (const raw of lines) {
      const line = raw.trim();
      if (!line || line.startsWith('#')) continue;

      if (line.startsWith('print(')) {
        const inner = line.slice(6, line.lastIndexOf(')'));
        const parts: string[] = [];
        let depth = 0, cur = '', inStr = false, strChar = '';
        for (const ch of inner) {
          if (!inStr && (ch === '"' || ch === "'")) { inStr = true; strChar = ch; cur += ch; }
          else if (inStr && ch === strChar) { inStr = false; cur += ch; }
          else if (!inStr && ch === '(') { depth++; cur += ch; }
          else if (!inStr && ch === ')') { depth--; cur += ch; }
          else if (!inStr && ch === ',' && depth === 0) { parts.push(cur.trim()); cur = ''; }
          else { cur += ch; }
        }
        if (cur.trim()) parts.push(cur.trim());
        out.push(parts.map(p => String(resolveVal(p))).join(' '));
        continue;
      }

      const assign = line.match(/^([a-zA-Z_]\w*)\s*=\s*(.+)$/);
      if (assign) { vars[assign[1]] = resolveVal(assign[2]); continue; }
    }
    if (out.length === 0) out.push('💡 Output prints here!');
  } catch (e) {
    return { out, err: e instanceof Error ? e.message : String(e) };
  }
  return { out, err: null };
}

function executeJS(code: string): { out: string[]; err: string | null } {
  const out: string[] = [];
  try {
    const fn = new Function('console', 'print', code);
    fn({
      log: (...a: unknown[]) => out.push(a.map(x => typeof x === 'object' ? JSON.stringify(x, null, 2) : String(x)).join(' ')),
      error: (...a: unknown[]) => out.push('❌ ' + a.join(' ')),
      warn: (...a: unknown[]) => out.push('⚠️ ' + a.join(' ')),
    }, (...a: unknown[]) => out.push(a.join(' ')));
  } catch (e) {
    return { out, err: e instanceof Error ? e.message : String(e) };
  }
  if (out.length === 0) out.push('💡 console.log() output prints here!');
  return { out, err: null };
}

function RichText({ t }: { t: string }) {
  return (
    <>
      {t.split('\n').map((line, li) => {
        const parts = line.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((p, i) => {
          if (p.startsWith('**') && p.endsWith('**'))
            return <strong key={i} style={{ color: '#a855f7' }}>{p.slice(2,-2)}</strong>;
          if (p.startsWith('`') && p.endsWith('`'))
            return <code key={i} style={{ background: 'rgba(99,102,241,.2)', color: '#06b6d4', padding: '1px 5px', borderRadius: 4, fontFamily: 'monospace', fontSize: '.88em' }}>{p.slice(1,-1)}</code>;
          return <span key={i}>{p}</span>;
        });
        return <span key={li}>{parts}{li < t.split('\n').length - 1 && <br />}</span>;
      })}
    </>
  );
}

function CodeBox({ code }: { code: string }) {
  const [cp, setCp] = useState(false);
  return (
    <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(99,102,241,.2)', margin: '14px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#0d0d1a', padding: '7px 14px', borderBottom: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ff5f57','#febc2e','#28c840'].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />)}
        </div>
        <button onClick={() => { navigator.clipboard.writeText(code); setCp(true); setTimeout(() => setCp(false), 1800); }}
          style={{ background: 'none', border: '1px solid rgba(255,255,255,.1)', color: cp ? '#22c55e' : '#64748b', fontSize: 11, borderRadius: 5, padding: '2px 9px', cursor: 'pointer', fontFamily: "'Cairo', sans-serif" }}>
          {cp ? '✓' : '📋'}
        </button>
      </div>
      <pre style={{ margin: 0, padding: '16px', background: '#080812', color: '#e2e8f0', fontFamily: "'Fira Code',monospace", fontSize: 13, lineHeight: 1.75, overflowX: 'auto', direction: 'ltr', textAlign: 'left' }}>
        {code.split('\n').map((ln, i) => (
          <div key={i} style={{ display: 'flex', gap: 14 }}>
            <span style={{ color: '#2d3748', minWidth: 20, textAlign: 'right', userSelect: 'none' }}>{i+1}</span>
            <span style={{ color: ln.trim().startsWith('#') ? '#4a5568' : '#e2e8f0', fontStyle: ln.trim().startsWith('#') ? 'italic' : 'normal' }}>{ln}</span>
          </div>
        ))}
      </pre>
    </div>
  );
}

function Quiz({ qs, xp, onDone, lang }: { qs: QuizQ[]; xp: number; onDone: (score: number) => void; lang: 'ar' | 'en' }) {
  const [idx, setIdx] = useState(0);
  const [sel, setSel] = useState<number | null>(null);
  const [scores, setScores] = useState<boolean[]>([]);
  const [done, setDone] = useState(false);

  const t = TRANSLATIONS[lang];

  if (done) {
    const correct = scores.filter(Boolean).length;
    const pct = Math.round((correct / qs.length) * 100);
    const earned = Math.round(xp * pct / 100);
    return (
      <div style={{ textAlign: 'center', padding: '48px 20px' }}>
        <div style={{ fontSize: 72, marginBottom: 12 }}>{pct >= 80 ? '🏆' : pct >= 60 ? '👍' : '📚'}</div>
        <div style={{ fontSize: 28, fontWeight: 900, color: pct >= 80 ? '#22c55e' : pct >= 60 ? '#fbbf24' : '#ef4444', marginBottom: 8 }}>
          {correct} / {qs.length} {lang === 'ar' ? 'إجابات صحيحة' : 'Correct Answers'}
        </div>
        <div style={{ fontSize: 44, fontWeight: 900, background: 'linear-gradient(90deg,#6366f1,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: '12px 0' }}>+{earned} XP</div>
        <p style={{ color: '#64748b', marginBottom: 32, fontSize: 15 }}>
          {pct >= 80 ? (lang === 'ar' ? '🌟 ممتاز! أنت جاهز للدرس التالي!' : '🌟 Excellent! You are ready for the next lesson!') 
                     : pct >= 60 ? (lang === 'ar' ? '👍 جيد! راجع الدرس مرة أخرى' : '👍 Good! Review the lesson again') 
                                 : (lang === 'ar' ? '📚 راجع الشرح وحاول مجدداً' : '📚 Review the theory and try again')}
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          {pct < 80 && (
            <button onClick={() => { setIdx(0); setSel(null); setScores([]); setDone(false); }}
              style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.15)', color: '#fff', padding: '11px 24px', borderRadius: 10, fontSize: 14, cursor: 'pointer', fontFamily: "'Cairo',sans-serif" }}>
              🔄 {lang === 'ar' ? 'حاول مرة أخرى' : 'Try Again'}
            </button>
          )}
        </div>
      </div>
    );
  }

  const q = qs[idx];
  const answered = sel !== null;

  const choose = (i: number) => {
    if (answered) return;
    setSel(i);
  };

  const next = () => {
    const newScores = [...scores, sel === q.ans];
    setScores(newScores);
    if (idx < qs.length - 1) { setIdx(idx + 1); setSel(null); }
    else { setDone(true); onDone(newScores.filter(Boolean).length); }
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
        <div style={{ flex: 1, height: 5, background: 'rgba(255,255,255,.06)', borderRadius: 3, overflow: 'hidden' }}>
          <div style={{ width: `${(idx / qs.length) * 100}%`, height: '100%', background: 'linear-gradient(90deg,#6366f1,#a855f7)', transition: 'width .3s' }} />
        </div>
        <span style={{ fontSize: 12, color: '#64748b' }}>{idx+1} / {qs.length}</span>
      </div>

      <div style={{ background: 'rgba(99,102,241,.07)', border: '1px solid rgba(99,102,241,.2)', borderRadius: 14, padding: 22, marginBottom: 18 }}>
        <div style={{ fontSize: 11, color: '#6366f1', fontWeight: 700, marginBottom: 10 }}>
          {lang === 'ar' ? `❓ السؤال ${idx+1}` : `❓ Question ${idx+1}`}
        </div>
        <p style={{ fontSize: 17, fontWeight: 700, margin: 0, lineHeight: 1.7, fontFamily: "'Cairo', sans-serif" }}>
          {lang === 'ar' ? q.q : (q.q_en || q.q)}
        </p>
      </div>

      <div style={{ display: 'grid', gap: 10, marginBottom: 18 }}>
        {(lang === 'ar' ? q.opts : (q.opts_en || q.opts)).map((opt, i) => {
          const isCorrect = i === q.ans;
          const isSelected = i === sel;
          let bg = 'rgba(255,255,255,.03)';
          let border = '1px solid rgba(255,255,255,.07)';
          let color = '#e2e8f0';
          if (answered) {
            if (isCorrect) { bg = 'rgba(34,197,94,.1)'; border = '1px solid rgba(34,197,94,.35)'; color = '#22c55e'; }
            else if (isSelected) { bg = 'rgba(239,68,68,.1)'; border = '1px solid rgba(239,68,68,.35)'; color = '#ef4444'; }
          } else if (isSelected) {
            bg = 'rgba(99,102,241,.12)'; border = '1px solid rgba(99,102,241,.4)'; color = '#a855f7';
          }
          return (
            <button key={i} onClick={() => choose(i)}
              style={{ background: bg, border, color, padding: '13px 18px', borderRadius: 11, textAlign: lang === 'ar' ? 'right' : 'left', cursor: answered ? 'default' : 'pointer', fontSize: 14, fontFamily: "'Cairo', sans-serif", display: 'flex', alignItems: 'center', gap: 10, transition: 'all .15s', width: '100%' }}>
              <span style={{ width: 26, height: 26, borderRadius: 7, background: answered && isCorrect ? 'rgba(34,197,94,.2)' : answered && isSelected && !isCorrect ? 'rgba(239,68,68,.2)' : 'rgba(255,255,255,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, flexShrink: 0 }}>
                {answered && isCorrect ? '✓' : answered && isSelected && !isCorrect ? '✗' : ['A','B','C','D'][i]}
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {answered && (
        <div style={{ background: sel === q.ans ? 'rgba(34,197,94,.07)' : 'rgba(239,68,68,.07)', border: `1px solid ${sel === q.ans ? 'rgba(34,197,94,.2)' : 'rgba(239,68,68,.2)'}`, borderRadius: 11, padding: '13px 16px', marginBottom: 16 }}>
          <div style={{ fontWeight: 700, color: sel === q.ans ? '#22c55e' : '#ef4444', marginBottom: 6 }}>
            {sel === q.ans ? t.explanation_correct : t.explanation_title}
          </div>
          <p style={{ margin: 0, color: '#94a3b8', fontSize: 14, lineHeight: 1.7 }}>
            {lang === 'ar' ? q.why : (q.why_en || q.why)}
          </p>
        </div>
      )}

      {answered && (
        <button onClick={next}
          style={{ width: '100%', background: 'linear-gradient(135deg,#6366f1,#a855f7)', border: 'none', color: '#fff', padding: '13px', borderRadius: 11, fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: "'Cairo',sans-serif" }}>
          {idx < qs.length - 1 ? t.quiz_next : t.quiz_finish}
        </button>
      )}
    </div>
  );
}

function Console({ starter, lang, translations }: { starter: string; lang: Lang; translations: any }) {
  const [code, setCode] = useState(starter);
  const [out, setOut] = useState<string[]>([]);
  const [err, setErr] = useState<string | null>(null);
  const [running, setRunning] = useState(false);
  const [view, setView] = useState<'editor' | 'output'>('editor');

  const run = useCallback(() => {
    setRunning(true);
    setTimeout(() => {
      const res = lang === 'python' ? executePython(code) : executeJS(code);
      setOut(res.out); setErr(res.err); setRunning(false); setView('output');
    }, 300);
  }, [code, lang]);

  return (
    <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(99,102,241,.25)', background: '#09090f' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(99,102,241,.1)', borderBottom: '1px solid rgba(99,102,241,.15)', padding: '10px 14px' }}>
        <div style={{ display: 'flex', gap: 7 }}>
          {(['editor','output'] as const).map(t => (
            <button key={t} onClick={() => setView(t)}
              style={{ background: view === t ? 'rgba(99,102,241,.3)' : 'transparent', border: `1px solid ${view === t ? 'rgba(99,102,241,.4)' : 'rgba(255,255,255,.08)'}`, color: view === t ? '#a855f7' : '#64748b', padding: '5px 14px', borderRadius: 7, fontSize: 13, cursor: 'pointer', fontFamily: "'Cairo',sans-serif", fontWeight: view === t ? 700 : 400 }}>
              {t === 'editor' ? translations.tab_theory.replace('📖 ', '📝 ') : translations.console_empty.includes('Result') || translations.academy.includes('Academy') ? '🖥️ Output' : '🖥️ النتيجة'}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 7 }}>
          <button onClick={() => { setCode(starter); setOut([]); setErr(null); setView('editor'); }}
            style={{ background: 'transparent', border: '1px solid rgba(255,255,255,.08)', color: '#64748b', padding: '5px 11px', borderRadius: 7, fontSize: 12, cursor: 'pointer', fontFamily: "'Cairo',sans-serif" }}>
            {translations.console_reset}
          </button>
          <button onClick={run} disabled={running}
            style={{ background: running ? 'rgba(99,102,241,.3)' : 'linear-gradient(135deg,#6366f1,#a855f7)', border: 'none', color: '#fff', padding: '5px 18px', borderRadius: 7, fontSize: 13, cursor: running ? 'not-allowed' : 'pointer', fontWeight: 700, fontFamily: "'Cairo',sans-serif" }}>
            {running ? '⏳' : translations.console_run}
          </button>
        </div>
      </div>

      {view === 'editor' ? (
        <div style={{ position: 'relative' }}>
          <textarea value={code} onChange={e => setCode(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Tab') { e.preventDefault(); const s = e.currentTarget.selectionStart; setCode(c => c.slice(0,s) + '    ' + c.slice(e.currentTarget.selectionEnd)); setTimeout(() => e.currentTarget.setSelectionRange(s+4,s+4)); }
              if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) run();
            }}
            spellCheck={false}
            style={{ width: '100%', minHeight: 260, background: '#080812', color: '#e2e8f0', border: 'none', padding: '14px 14px 14px 14px', fontFamily: "'Fira Code',monospace", fontSize: 14, lineHeight: '24px', resize: 'vertical', outline: 'none', direction: 'ltr', boxSizing: 'border-box' }}
          />
          <div style={{ padding: '5px 14px', background: '#080812', borderTop: '1px solid rgba(255,255,255,.04)', display: 'flex', gap: 16, justifyContent: 'space-between' }}>
            <span style={{ color: '#2d3748', fontSize: 11 }}>{translations.console_helper}</span>
            <span style={{ color: '#2d3748', fontSize: 11 }}>{lang === 'python' ? '🐍 Python' : '⚡ JavaScript'}</span>
          </div>
        </div>
      ) : (
        <div style={{ minHeight: 260, background: '#040410', padding: '16px', fontFamily: "'Fira Code',monospace", fontSize: 13, direction: 'ltr' }}>
          {out.length === 0 && !err ? (
            <div style={{ color: '#1e293b', textAlign: 'center', marginTop: 80, fontFamily: "'Cairo',sans-serif", direction: translations.academy.includes('Academy') ? 'ltr' : 'rtl' }}>
              <div style={{ fontSize: 36, marginBottom: 10 }}>▶</div>
              <div>{translations.console_empty}</div>
            </div>
          ) : (
            <>
              {out.map((line, i) => <div key={i} style={{ color: '#22c55e', marginBottom: 3, display: 'flex', gap: 10 }}><span style={{ color: '#1e293b' }}>›</span>{line}</div>)}
              {err && <div style={{ color: '#ef4444', marginTop: 8, padding: '10px 12px', background: 'rgba(239,68,68,.08)', borderRadius: 7, border: '1px solid rgba(239,68,68,.18)' }}>❌ {err}</div>}
              <div style={{ marginTop: 12, padding: '6px 10px', background: 'rgba(99,102,241,.08)', borderRadius: 7, color: '#6366f1', fontSize: 12, fontFamily: "'Cairo',sans-serif", direction: translations.academy.includes('Academy') ? 'ltr' : 'rtl' }}>
                {err ? translations.console_error : translations.console_success}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────
export default function LearnPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const router = useRouter();
  const { lessonId } = use(params);
  const lesson = LESSONS[lessonId] ?? LESSONS['python-vars'];
  const [tab, setTab] = useState<Tab>('theory');
  const [sidebar, setSidebar] = useState(true);

  // States
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [user, setUser] = useState<{ id: number; email: string; name: string; role: string } | null>(null);
  const [accessStatus, setAccessStatus] = useState<'approved' | 'requested' | 'locked'>('locked');
  const [checkingAccess, setCheckingAccess] = useState(true);
  const [requestLoading, setRequestLoading] = useState(false);
  const [requestMsg, setRequestMsg] = useState('');

  useEffect(() => {
    // Load language preference
    const savedLang = localStorage.getItem('svk_lang');
    if (savedLang === 'en' || savedLang === 'ar') {
      setLang(savedLang);
    }
    checkUserAndAccess();
  }, [lessonId]);

  async function checkUserAndAccess() {
    setCheckingAccess(true);
    setAccessStatus('locked');
    setRequestMsg('');
    
    // First lesson is always free
    if (lessonId === 'python-vars') {
      setAccessStatus('approved');
      setCheckingAccess(false);
      
      try {
        const userRes = await fetch('/api/auth/me');
        if (userRes.ok) {
          const userData = await userRes.json();
          setUser(userData.user);
        }
      } catch (e) {
        console.warn('Failed to fetch user in free lesson', e);
      }
      return;
    }

    try {
      // 1. Fetch user profile
      const userRes = await fetch('/api/auth/me');
      if (!userRes.ok) {
        setAccessStatus('locked');
        setCheckingAccess(false);
        return;
      }
      const userData = await userRes.json();
      setUser(userData.user);

      // Admin has override access
      if (userData.user.role === 'admin') {
        setAccessStatus('approved');
        setCheckingAccess(false);
        return;
      }

      // 2. Fetch lesson approval status
      const accessRes = await fetch(`/api/lessons/access?studentId=${userData.user.id}`);
      if (accessRes.ok) {
        const accessData = await accessRes.json();
        const records = accessData.access || [];
        const match = records.find((r: any) => r.lesson_slug === lessonId);
        if (match) {
          setAccessStatus(match.status); // 'approved' or 'requested'
        } else {
          setAccessStatus('locked');
        }
      }
    } catch (e) {
      console.error('Error checking access', e);
    } finally {
      setCheckingAccess(false);
    }
  }

  async function handleRequestAccess() {
    if (!user) {
      router.push('/login');
      return;
    }
    setRequestLoading(true);
    setRequestMsg('');
    try {
      const res = await fetch('/api/lessons/access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId: 1, lessonSlug: lessonId }),
      });
      if (res.ok) {
        setAccessStatus('requested');
        setRequestMsg(lang === 'ar' ? '✓ تم تقديم الطلب بنجاح وهو قيد المراجعة الآن.' : '✓ Access request submitted successfully.');
      } else {
        const data = await res.json();
        setRequestMsg(data.error || (lang === 'ar' ? 'فشل في تقديم الطلب' : 'Request failed'));
      }
    } catch {
      setRequestMsg(lang === 'ar' ? 'حدث خطأ في الاتصال' : 'Connection error');
    } finally {
      setRequestLoading(false);
    }
  }

  const toggleLanguage = () => {
    const nextLang = lang === 'ar' ? 'en' : 'ar';
    setLang(nextLang);
    localStorage.setItem('svk_lang', nextLang);
  };

  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';
  const dir = isRtl ? 'rtl' : 'ltr';

  const tabBtn = (tId: Tab, label: string) => (
    <button onClick={() => setTab(tId)}
      style={{ padding: '13px 18px', background: 'none', border: 'none', borderBottom: tab === tId ? '2px solid #6366f1' : '2px solid transparent', color: tab === tId ? '#a855f7' : '#64748b', fontSize: 14, fontWeight: tab === tId ? 700 : 400, cursor: 'pointer', fontFamily: "'Cairo',sans-serif", transition: 'all .2s', marginBottom: -1, whiteSpace: 'nowrap' }}>
      {label}
    </button>
  );

  return (
    <div style={{ fontFamily: "'Cairo','Tajawal',sans-serif", direction: dir, background: '#060612', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet" />

      {/* Top Bar */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,.06)', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(6,6,18,.9)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 100, height: 60, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button onClick={() => setSidebar(s => !s)} style={{ background: 'none', border: '1px solid rgba(255,255,255,.08)', color: '#94a3b8', width: 32, height: 32, borderRadius: 8, cursor: 'pointer', fontSize: 14 }}>☰</button>
          <Link href="/courses" style={{ color: '#64748b', textDecoration: 'none', fontSize: 12 }}>{t.courses_link}</Link>
          <span style={{ color: '#1e293b' }}>/</span>
          <span style={{ fontSize: 14, fontWeight: 700 }}>
            {lang === 'ar' ? lesson.title : lesson.title_en}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <button onClick={toggleLanguage} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '4px 12px', borderRadius: 8, fontSize: 12, cursor: 'pointer', fontWeight: 600, fontFamily: "'Cairo', sans-serif" }}>
            {lang === 'ar' ? 'English 🇺🇸' : 'العربية 🇪🇬'}
          </button>
          <div style={{ background: 'rgba(99,102,241,.12)', border: '1px solid rgba(99,102,241,.2)', borderRadius: 20, padding: '3px 12px', fontSize: 13, color: '#a855f7', fontWeight: 700 }}>⚡ {lesson.xp} {t.xp_earned}</div>
          <div style={{ fontSize: 12, color: '#64748b' }}>⏱ {lesson.mins} {t.time_mins}</div>
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Sidebar */}
        {sidebar && (
          <div style={{ width: 270, flexShrink: 0, borderLeft: isRtl ? '1px solid rgba(255,255,255,.05)' : 'none', borderRight: !isRtl ? '1px solid rgba(255,255,255,.05)' : 'none', background: '#08080f', overflowY: 'auto' }}>
            <div style={{ padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid rgba(255,255,255,.05)' }}>
                <span style={{ fontSize: 28 }}>🐍</span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 13 }}>{t.sidebar_title}</div>
                  <div style={{ fontSize: 11, color: '#64748b' }}>{t.sidebar_subtitle}</div>
                </div>
              </div>
              <div style={{ height: 4, background: 'rgba(255,255,255,.04)', borderRadius: 2, overflow: 'hidden', marginBottom: 16 }}>
                <div style={{ width: '33%', height: '100%', background: 'linear-gradient(90deg,#6366f1,#a855f7)' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {SIDE_LESSONS.map((sl, i) => {
                  const isActive = sl.id === lessonId;
                  const isLinkFree = sl.free;
                  const displayTitle = lang === 'ar' ? sl.title : sl.title_en;
                  return (
                    <Link key={sl.id} href={`/learn/${sl.id}`}
                      style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, padding: '9px 10px', borderRadius: 9, background: isActive ? 'rgba(99,102,241,.14)' : 'transparent', border: isActive ? '1px solid rgba(99,102,241,.25)' : '1px solid transparent', color: isActive ? '#a855f7' : isLinkFree ? '#64748b' : '#334155', transition: 'all .2s' }}>
                      <div style={{ width: 22, height: 22, borderRadius: 6, background: isActive ? 'rgba(99,102,241,.3)' : 'rgba(255,255,255,.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, flexShrink: 0, border: isActive ? '1px solid rgba(99,102,241,.3)' : 'none' }}>
                        {isActive ? '▶' : isLinkFree ? i+1 : '🔒'}
                      </div>
                      <span style={{ fontSize: 13, fontWeight: isActive ? 700 : 400 }}>{displayTitle}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Main Area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {checkingAccess ? (
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '30px', height: '30px', border: '2px solid rgba(99,102,241,0.3)', borderTopColor: '#6366f1', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 16px' }} />
                <p style={{ color: '#64748b', fontSize: 14 }}>{t.loading}</p>
              </div>
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
          ) : accessStatus === 'approved' ? (
            <>
              {/* Tabs */}
              <div style={{ borderBottom: '1px solid rgba(255,255,255,.06)', padding: '0 24px', display: 'flex', gap: 0, background: 'rgba(9,9,15,.8)', flexShrink: 0 }}>
                {tabBtn('theory', t.tab_theory)}
                {tabBtn('console', t.tab_console)}
                {tabBtn('quiz', t.tab_quiz)}
              </div>

              <div style={{ flex: 1, overflowY: 'auto', padding: '28px 36px', maxWidth: 820, width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>

                {/* ── Theory ── */}
                {tab === 'theory' && (
                  <div>
                    {lesson.sections.map((sec, si) => (
                      <div key={si} style={{ marginBottom: 40 }}>
                        {sec.type === 'intro' && (
                          <div style={{ background: 'linear-gradient(135deg,rgba(99,102,241,.07),rgba(168,85,247,.05))', border: '1px solid rgba(99,102,241,.15)', borderRadius: 16, padding: 26 }}>
                            <h2 style={{ fontSize: 20, fontWeight: 900, margin: '0 0 14px', color: '#a855f7' }}>
                              {lang === 'ar' ? sec.title : (sec.title_en || sec.title)}
                            </h2>
                            <p style={{ margin: 0, lineHeight: 2, color: '#94a3b8', fontSize: 15 }}>
                              <RichText t={lang === 'ar' ? (sec.body ?? '') : (sec.body_en ?? sec.body ?? '')} />
                            </p>
                          </div>
                        )}

                        {sec.type === 'concept' && (
                          <div>
                            <h3 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
                              <span style={{ width: 30, height: 30, borderRadius: 8, background: 'linear-gradient(135deg,#6366f1,#a855f7)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 13 }}>{si}</span>
                              {lang === 'ar' ? sec.title : (sec.title_en || sec.title)}
                            </h3>
                            <div style={{ background: 'rgba(255,255,255,.02)', border: '1px solid rgba(255,255,255,.05)', borderRadius: 11, padding: '16px 20px', marginBottom: 12 }}>
                              <p style={{ margin: 0, lineHeight: 2, color: '#94a3b8', fontSize: 14 }}>
                                <RichText t={lang === 'ar' ? (sec.body ?? '') : (sec.body_en ?? sec.body ?? '')} />
                              </p>
                            </div>
                            {sec.code && <CodeBox code={sec.code} />}
                          </div>
                        )}

                        {sec.type === 'table' && (
                          <div>
                            <h3 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 16px', color: '#06b6d4' }}>📊 {lang === 'ar' ? sec.title : (sec.title_en || sec.title)}</h3>
                            <div style={{ overflowX: 'auto', borderRadius: 12, border: '1px solid rgba(255,255,255,.06)' }}>
                              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                  <tr style={{ background: 'rgba(99,102,241,.1)' }}>
                                    {(lang === 'ar' ? (sec.cols ?? []) : (sec.cols_en ?? sec.cols ?? [])).map(col => <th key={col} style={{ padding: '11px 16px', textAlign: lang === 'ar' ? 'right' : 'left', fontSize: 12, fontWeight: 700, color: '#64748b', borderBottom: '1px solid rgba(255,255,255,.06)' }}>{col}</th>)}
                                  </tr>
                                </thead>
                                <tbody>
                                  {(lang === 'ar' ? (sec.rows ?? []) : (sec.rows_en ?? sec.rows ?? [])).map((row, ri) => (
                                    <tr key={ri} style={{ background: ri % 2 === 0 ? 'rgba(255,255,255,.01)' : 'transparent', borderBottom: '1px solid rgba(255,255,255,.04)' }}>
                                      {row.map((cell, ci) => <td key={ci} style={{ padding: '11px 16px', fontSize: 13, fontFamily: ci < 2 ? "'Fira Code',monospace" : "'Cairo',sans-serif", color: ci === 0 ? '#a855f7' : ci === 1 ? '#22c55e' : '#94a3b8', direction: ci < 2 ? 'ltr' : (lang === 'ar' ? 'rtl' : 'ltr'), textAlign: ci < 2 ? 'left' : 'inherit' }}>{cell}</td>)}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                        {sec.type === 'functions' && (
                          <div>
                            <h3 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 18px', color: '#06b6d4' }}>📚 {lang === 'ar' ? sec.title : (sec.title_en || sec.title)}</h3>
                            <div style={{ display: 'grid', gap: 14 }}>
                              {(sec.fns ?? []).map((fn, fi) => (
                                <div key={fi} style={{ background: 'rgba(6,182,212,.04)', border: '1px solid rgba(6,182,212,.13)', borderRadius: 13, padding: '16px 20px' }}>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                                    <code style={{ background: 'rgba(6,182,212,.15)', color: '#06b6d4', padding: '2px 10px', borderRadius: 6, fontSize: 14, fontWeight: 700, fontFamily: 'monospace' }}>{fn.name}</code>
                                    <code style={{ color: '#334155', fontSize: 12, fontFamily: 'monospace', direction: 'ltr' }}>{fn.syntax}</code>
                                  </div>
                                  <p style={{ margin: '0 0 10px', color: '#64748b', fontSize: 13, lineHeight: 1.7 }}>{fn.desc}</p>
                                  <div style={{ background: '#030308', borderRadius: 7, padding: '8px 12px', fontFamily: 'monospace', fontSize: 12, color: '#22c55e', direction: 'ltr', border: '1px solid rgba(255,255,255,.04)' }}>
                                    <span style={{ color: '#2d3748' }}># Example: </span>{fn.example}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}

                    <div style={{ textAlign: 'center', padding: '40px 0' }}>
                      <button onClick={() => setTab('console')}
                        style={{ background: 'linear-gradient(135deg,#6366f1,#a855f7)', border: 'none', color: '#fff', padding: '13px 32px', borderRadius: 11, fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: "'Cairo',sans-serif" }}>
                        {t.try_code_btn}
                      </button>
                    </div>
                  </div>
                )}

                {/* ── Console ── */}
                {tab === 'console' && (
                  <div>
                    <div style={{ marginBottom: 20 }}>
                      <h2 style={{ fontSize: 21, fontWeight: 900, margin: '0 0 6px' }}>{t.console_title}</h2>
                      <p style={{ color: '#64748b', margin: 0, fontSize: 14 }}>{t.console_subtitle}</p>
                    </div>
                    <Console starter={lesson.starter} lang={lesson.lang} translations={t} />
                    <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 12 }}>
                      {[
                        { t: `${t.challenge_title} 1`, d: t.challenge_1 },
                        { t: `${t.challenge_title} 2`, d: t.challenge_2 },
                        { t: `${t.challenge_title} 3`, d: t.challenge_3 },
                      ].map((ch, i) => (
                        <div key={i} style={{ background: 'rgba(255,255,255,.02)', border: '1px solid rgba(255,255,255,.05)', borderRadius: 11, padding: 14 }}>
                          <div style={{ fontWeight: 700, marginBottom: 5, color: '#a855f7', fontSize: 13 }}>{ch.t}</div>
                          <div style={{ color: '#64748b', fontSize: 12, lineHeight: 1.6 }}>{ch.d}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: 36 }}>
                      <button onClick={() => setTab('quiz')}
                        style={{ background: 'linear-gradient(135deg,#6366f1,#a855f7)', border: 'none', color: '#fff', padding: '13px 38px', borderRadius: 11, fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: "'Cairo',sans-serif" }}>
                        🧠 {t.quiz_title}
                      </button>
                    </div>
                  </div>
                )}

                {/* ── Quiz ── */}
                {tab === 'quiz' && (
                  <div>
                    <div style={{ marginBottom: 24 }}>
                      <h2 style={{ fontSize: 21, fontWeight: 900, margin: '0 0 6px' }}>{t.quiz_title}</h2>
                      <p style={{ color: '#64748b', margin: 0, fontSize: 14 }}>{lesson.quiz.length} {t.quiz_subtitle} {lesson.xp} XP</p>
                    </div>
                    <Quiz qs={lesson.quiz} xp={lesson.xp} onDone={() => {}} lang={lang} />
                  </div>
                )}
              </div>
            </>
          ) : (
            /* Locked state view */
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
              <div style={{ maxWidth: 500, width: '100%', padding: '2.5rem', borderRadius: 24, border: '1px solid rgba(99,102,241,0.25)', background: 'rgba(8,8,20,0.85)', backdropFilter: 'blur(30px)', textAlign: 'center', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
                <div style={{ fontSize: 64, marginBottom: 20 }}>{accessStatus === 'requested' ? '⏳' : '🔒'}</div>
                <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 12, background: 'linear-gradient(135deg,#fff,#c4b5fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {accessStatus === 'requested' ? (lang === 'ar' ? 'طلب التفعيل معلق' : 'Activation Pending') : t.locked_title}
                </h2>
                <p style={{ color: '#94a3b8', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                  {accessStatus === 'requested' ? (lang === 'ar' ? 'لقد تم تقديم طلب تفعيل هذا الدرس للإدارة وهو قيد المراجعة حالياً. سيتم إخطارك فور الموافقة.' : 'Your activation request for this lesson is currently pending. The administrator will review and unlock it shortly.') : t.locked_desc}
                </p>
                <div style={{ padding: '12px 18px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: 12, color: '#a855f7', fontSize: 13, fontWeight: 600, marginBottom: 24, lineHeight: 1.6 }}>
                  💡 {t.locked_price_info}
                </div>

                {user ? (
                  accessStatus === 'requested' ? (
                    <div style={{ color: '#fbbf24', fontWeight: 600, fontSize: 14 }}>
                      {t.request_pending}
                    </div>
                  ) : (
                    <div>
                      <button onClick={handleRequestAccess} disabled={requestLoading} style={{ background: 'linear-gradient(135deg,#6366f1,#a855f7)', border: 'none', color: '#fff', padding: '14px 28px', borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: "'Cairo',sans-serif", width: '100%', boxShadow: '0 8px 20px rgba(99,102,241,0.3)' }}>
                        {requestLoading ? '...' : t.btn_request_access}
                      </button>
                      {requestMsg && <div style={{ color: '#22c55e', marginTop: 12, fontSize: 13, fontWeight: 600 }}>{requestMsg}</div>}
                    </div>
                  )
                ) : (
                  <div>
                    <p style={{ color: '#ef4444', fontSize: 13, marginBottom: 16 }}>
                      ⚠️ {t.login_required}
                    </p>
                    <button onClick={() => router.push('/login')} style={{ background: 'linear-gradient(135deg,#06b6d4,#6366f1)', border: 'none', color: '#fff', padding: '12px 28px', borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: "'Cairo',sans-serif", width: '100%' }}>
                      {t.btn_login}
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #060612; }
        ::-webkit-scrollbar-thumb { background: rgba(99,102,241,.3); border-radius: 3px; }
      `}</style>
    </div>
  );
}
