import fs from 'fs';

const content = fs.readFileSync('src/context/tracks/pythonData.ts', 'utf8');

const python3Examples = `
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "دمج النصوص وتنسيقها (String formatting)",
        "code": "first_name = 'Ahmed'\\nrole = 'Developer'\\nprofile = f'User: {first_name}, Role: {role}'\\nprint(profile)",
        "expected_output": "User: Ahmed, Role: Developer",
        "explanation": "أفضل طريقة لدمج المتغيرات مع النصوص هي استخدام حرف f قبل علامة التنصيص (f-strings) وكتابة المتغير بين أقواس معقوفة {}."
      },
      {
        "type": "wrong",
        "title": "خطأ في علامات التنصيص المتداخلة",
        "code": "message = 'He said, \\\\'Python is easy!\\\\'\\nprint(message)",
        "error_message": "SyntaxError: invalid syntax",
        "explanation": "لا يمكنك استخدام علامة تنصيص مفردة بداخل تنصيص مفرد دون استخدام \\\\ (Escape character) أو استخدام تنصيص مزدوج بالخارج."
      },
      {
        "type": "mistake",
        "title": "طرح النصوص من بعضها",
        "explanation": "المبتدئون يحاولون إزالة كلمة من نص عبر (word1 - word2). هذا غير ممكن في النصوص. استخدم خاصية replace()."
      },
      {
        "type": "use_case",
        "title": "توليد قوالب الرسائل الآلية (Email Templates)",
        "explanation": "تطبيقات إرسال النشرات البريدية تعتمد على النصوص المنسقة لإدخال اسم كل مستخدم في نص الرسالة أوتوماتيكياً."
      },
      {
        "type": "challenge",
        "title": "إصلاح رسالة الترحيب",
        "code": "# قم بتعديل السطر التالي ليعمل باستخدام علامات تنصيص مختلفة\\nwelcome = 'She said, \\"Welcome to the platform\\" today'\\n",
        "expected_output": "She said, 'Welcome to the platform' today",
        "explanation": "استخدم علامة التنصيص المفردة للخارج أو استخدم علامة الهروب."
      }
    ],`;

// We will find the array for python-3 and replace it.
// To do this reliably, we match from "quick_practical_examples": [ for python-3 up to the end of the array.
// But we already have the generated text.

let updated = content;

// Replace the block.
// Instead of complex regex, let's just use string indexOf to find where python-3's quick_practical_examples starts
const p3Idx = updated.indexOf('"lesson_slug": "python-3"');
if (p3Idx !== -1) {
    const qpeStart = updated.indexOf('"quick_practical_examples": [', p3Idx);
    if (qpeStart !== -1) {
        // find the closing bracket of this array
        let qpeEnd = updated.indexOf('],', qpeStart);
        if (qpeEnd !== -1) {
            updated = updated.substring(0, qpeStart) + python3Examples.trim() + updated.substring(qpeEnd + 2);
        }
    }
}

fs.writeFileSync('src/context/tracks/pythonData.ts', updated);
console.log('Fixed python-3');
