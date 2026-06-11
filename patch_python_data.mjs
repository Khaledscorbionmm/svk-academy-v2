import fs from 'fs';

const content = fs.readFileSync('src/context/tracks/pythonData.ts', 'utf8');

const python1Examples = `
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تعريف متغير صحيح وطباعته",
        "code": "age = 25\\nprint(age)",
        "expected_output": "25",
        "explanation": "استخدمنا علامة التساوي = لإسناد القيمة 25 إلى المتغير age، ثم طبعناه.",
        "real_world_use_case": "تخزين عمر المستخدم في نظام تسجيل الدخول."
      },
      {
        "type": "correct",
        "title": "عمليات حسابية على الأرقام",
        "code": "score = 100\\nbonus = 50\\ntotal = score + bonus\\nprint(total)",
        "expected_output": "150",
        "explanation": "بايثون تقوم بجمع الأعداد الصحيحة بسهولة باستخدام علامة الجمع +."
      },
      {
        "type": "correct",
        "title": "الأعداد السالبة",
        "code": "temperature = -5\\nprint(temperature)",
        "expected_output": "-5",
        "explanation": "الأعداد الصحيحة (int) يمكن أن تكون سالبة لتمثيل القيم تحت الصفر.",
        "real_world_use_case": "تطبيقات الطقس التي تعرض درجات حرارة سالبة."
      },
      {
        "type": "wrong",
        "title": "خطأ: وضع مسافة في اسم المتغير",
        "code": "my age = 25\\nprint(my age)",
        "error_message": "SyntaxError: invalid syntax",
        "explanation": "لا يمكن أن يحتوي اسم المتغير على مسافة فارغة (Space). استخدم الشرطة السفلية (_) بدلاً من ذلك: my_age"
      },
      {
        "type": "wrong",
        "title": "خطأ: جمع نص مع رقم",
        "code": "age = 25 + \\"years\\"\\nprint(age)",
        "error_message": "TypeError: unsupported operand type(s) for +: 'int' and 'str'",
        "explanation": "هذا خطأ تشغيل (Runtime Error). بايثون لا تسمح بجمع عدد صحيح مع نص مباشرة."
      },
      {
        "type": "challenge",
        "title": "تحدي الأعداد",
        "code": "# قم بإنشاء متغير يحمل سنة ميلادك (مثال: 2005)\\n# اطبع عمرك اليوم عبر طرح السنة الحالية من سنة ميلادك\\nbirth_year = \\n",
        "expected_output": "21",
        "explanation": "العمليات الحسابية تنفذ من اليسار لليمين. اطرح السنة القديمة من الحالية."
      }
    ],`;

const python2Examples = `
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تعريف عدد عشري (float)",
        "code": "price = 19.99\\nprint(price)",
        "expected_output": "19.99",
        "explanation": "الأعداد العشرية تكتب باستخدام النقطة (.) بدلاً من الفاصلة.",
        "real_world_use_case": "تخزين أسعار المنتجات في متجر إلكتروني."
      },
      {
        "type": "correct",
        "title": "الجمع بين float و int",
        "code": "a = 5\\nb = 2.5\\nprint(a + b)",
        "expected_output": "7.5",
        "explanation": "عند جمع int مع float، يكون الناتج دائماً float."
      },
      {
        "type": "correct",
        "title": "القسمة تعطي float",
        "code": "result = 10 / 2\\nprint(result)",
        "expected_output": "5.0",
        "explanation": "عملية القسمة الواحدة / في بايثون ترجع دائماً عدد عشري حتى لو كانت القسمة بدون باقٍ."
      },
      {
        "type": "wrong",
        "title": "خطأ: استخدام الفاصلة العادية",
        "code": "price = 19,99\\nprint(price)",
        "error_message": "(19, 99)",
        "explanation": "بايثون تعتبر الفاصلة (,) كإنشاء قائمة (Tuple)، وليس كعلامة عشرية. استخدم النقطة (.) دائماً."
      },
      {
        "type": "wrong",
        "title": "خطأ: قسمة على الصفر",
        "code": "a = 10.5\\nprint(a / 0)",
        "error_message": "ZeroDivisionError: float division by zero",
        "explanation": "في الرياضيات والبرمجة معاً، القسمة على الصفر مستحيلة وتسبب انهيار البرنامج (Runtime Error)."
      },
      {
        "type": "challenge",
        "title": "حساب المتوسط",
        "code": "# لديك درجتان. قم بجمعهما واقسم الناتج على 2 لطباعة المتوسط\\nscore1 = 85.5\\nscore2 = 90.0\\n",
        "expected_output": "87.75",
        "explanation": "تذكر استخدام الأقواس () حول عملية الجمع قبل القسمة ليتم تنفيذها أولاً."
      }
    ],`;

const python3Examples = `
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "النصوص (String)",
        "code": "message = \\"Hello, SVK Academy!\\"\\nprint(message)",
        "expected_output": "Hello, SVK Academy!",
        "explanation": "النصوص يجب أن توضع داخل علامتي تنصيص مفردة أو مزدوجة.",
        "real_world_use_case": "إظهار رسالة الترحيب للمستخدم."
      },
      {
        "type": "correct",
        "title": "دمج النصوص (Concatenation)",
        "code": "first = \\"Ali\\"\\nlast = \\"Ahmed\\"\\nprint(first + \\" \\" + last)",
        "expected_output": "Ali Ahmed",
        "explanation": "يمكننا استخدام علامة الزائد + لدمج (لصق) نصين معاً."
      },
      {
        "type": "correct",
        "title": "تكرار النصوص",
        "code": "word = \\"Ha\\"\\nprint(word * 3)",
        "expected_output": "HaHaHa",
        "explanation": "علامة الضرب * مع النصوص تقوم بتكرار النص بناءً على الرقم المكتوب."
      },
      {
        "type": "wrong",
        "title": "خطأ: نسيان إغلاق التنصيص",
        "code": "name = \\"Ahmed\\nprint(name)",
        "error_message": "SyntaxError: unterminated string literal",
        "explanation": "يجب دائماً أن تقفل النص بنفس علامة التنصيص التي بدأته بها."
      },
      {
        "type": "wrong",
        "title": "خطأ: طرح النصوص",
        "code": "word = \\"HelloWorld\\" - \\"World\\"\\nprint(word)",
        "error_message": "TypeError: unsupported operand type(s) for -: 'str' and 'str'",
        "explanation": "لا يمكن طرح نص من نص في بايثون! استبدل النص برمجياً باستخدام الدوال المخصصة مثل replace()"
      },
      {
        "type": "challenge",
        "title": "رسالة مخصصة",
        "code": "# قم بدمج اسمك مع الجملة Welcome لطباعة رسالة كاملة\\nname = \\"Omar\\"\\n",
        "expected_output": "Welcome Omar",
        "explanation": "لا تنسَ إضافة مسافة فارغة \\" \\" بين الكلمتين لتبدو الجملة مقروءة."
      }
    ],`;

let newContent = content.replace(/"lesson_slug": "python-1",/g, '"lesson_slug": "python-1",\n' + python1Examples);
newContent = newContent.replace(/"lesson_slug": "python-2",/g, '"lesson_slug": "python-2",\n' + python2Examples);
newContent = newContent.replace(/"lesson_slug": "python-3",/g, '"lesson_slug": "python-3",\n' + python3Examples);

fs.writeFileSync('src/context/tracks/pythonData.ts', newContent);
console.log('Patched pythonData.ts');
