import fs from 'fs';

const content = fs.readFileSync('src/context/tracks/pythonData.ts', 'utf8');

const python1Examples = `
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تعريف واستخدام المتغيرات الصحيحة (int)",
        "code": "player_health = 100\\ndamage_taken = 15\\ncurrent_health = player_health - damage_taken\\nprint(current_health)",
        "expected_output": "85",
        "explanation": "الأعداد الصحيحة (int) تستخدم لتخزين القيم الرقمية التي لا تحتوي على كسور. قمنا هنا بتخزين صحة اللاعب وطرح مقدار الضرر المأخوذ."
      },
      {
        "type": "wrong",
        "title": "دمج الأعداد مع النصوص برمجياً بدون تحويل",
        "code": "age = 20\\nmessage = \\"I am \\" + age + \\" years old\\"\\nprint(message)",
        "error_message": "TypeError: can only concatenate str (not \\"int\\") to str",
        "explanation": "بايثون لغة قوية التنصيص (Strongly Typed). لا يمكنك دمج رقم مباشر مع نص. يجب تحويل الرقم لنص أولاً عبر str(age)."
      },
      {
        "type": "mistake",
        "title": "تسمية المتغيرات برموز أو مسافات",
        "explanation": "خطأ مفاهيمي شائع: المبتدئون يكتبون (my age = 20) أو (1st_place = 10). في بايثون، اسم المتغير لا يجب أن يحتوي على مسافات ولا يمكن أن يبدأ برقم."
      },
      {
        "type": "use_case",
        "title": "نظام تتبع النقاط (Score Tracking)",
        "explanation": "في الألعاب الحقيقية وتطبيقات الولاء، نستخدم الأعداد الصحيحة int لزيادة ونقصان النقاط بشكل مستمر عند إتمام مهام معينة."
      },
      {
        "type": "challenge",
        "title": "حساب عدد الأيام المتبقية للإجازة",
        "code": "# لديك 30 يوماً في الشهر، وقد مر منها 12 يوماً.\\n# احسب الأيام المتبقية واطبع النتيجة.\\ntotal_days = 30\\npassed_days = 12\\n",
        "expected_output": "18",
        "explanation": "قم بطرح الأيام المنقضية من الإجمالي باستخدام عملية الطرح (-)."
      }
    ],`;

const python2Examples = `
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "التعامل مع الكسور العشرية (float)",
        "code": "item_price = 49.99\\ntax_rate = 0.15\\ntotal_price = item_price + (item_price * tax_rate)\\nprint(total_price)",
        "expected_output": "57.4885",
        "explanation": "الأعداد العشرية (float) تستخدم لحساب القيم الدقيقة كالأسعار والضرائب."
      },
      {
        "type": "wrong",
        "title": "القسمة على الصفر في المعادلات الحسابية",
        "code": "total_apples = 50\\nnumber_of_baskets = 0\\napples_per_basket = total_apples / number_of_baskets\\nprint(apples_per_basket)",
        "error_message": "ZeroDivisionError: division by zero",
        "explanation": "مثل الرياضيات، بايثون تمنع القسمة على صفر. سيؤدي هذا لتوقف التطبيق بالكامل إذا لم تقم باختبار المتغيرات مسبقاً."
      },
      {
        "type": "mistake",
        "title": "استخدام الفاصلة (,) بدلاً من النقطة (.)",
        "explanation": "المبتدئون غالباً يكتبون 10,5 بدلاً من 10.5. الفاصلة في بايثون تستخدم لفصل المتغيرات والعناصر، وليس للكسور."
      },
      {
        "type": "use_case",
        "title": "تطبيقات المحاسبة والمالية (FinTech)",
        "explanation": "في تطبيقات المتاجر والبنوك يتم استخدام float لحساب نسبة الخصم والضرائب وأسعار الصرف بدقة شديدة."
      },
      {
        "type": "challenge",
        "title": "تحويل درجات الحرارة",
        "code": "# قم بتحويل درجة 100 فهرنهايت إلى مئوية (Celsius)\\n# المعادلة: (F - 32) * 5/9\\nfahrenheit = 100.0\\n",
        "expected_output": "37.77777777777778",
        "explanation": "استخدم الأقواس لضمان تنفيذ الطرح قبل القسمة والضرب."
      }
    ],`;

const python3Examples = `
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "دمج النصوص وتنسيقها (String formatting)",
        "code": "first_name = \\"Ahmed\\"\\nrole = \\"Developer\\"\\nprofile = f\\"User: {first_name}, Role: {role}\\"\\nprint(profile)",
        "expected_output": "User: Ahmed, Role: Developer",
        "explanation": "أفضل طريقة لدمج المتغيرات مع النصوص هي استخدام حرف f قبل علامة التنصيص (f-strings) وكتابة المتغير بين أقواس معقوفة {}."
      },
      {
        "type": "wrong",
        "title": "خطأ في علامات التنصيص المتداخلة",
        "code": "message = 'He said, 'Python is easy!''\\nprint(message)",
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
        "code": "# قم بتعديل السطر التالي ليعمل باستخدام علامات تنصيص مختلفة\\nwelcome = \\"She said, \\"Welcome to the platform\\" today\\"\\n",
        "expected_output": "She said, \\"Welcome to the platform\\" today",
        "explanation": "استخدم علامة التنصيص المفردة ' من الخارج أو علامة \\\\" في الداخل."
      }
    ],`;

const python4Examples = `
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "العمليات المنطقية (Booleans)",
        "code": "is_admin = True\\nis_active = False\\ncan_access = is_admin and not is_active\\nprint(can_access)",
        "expected_output": "True",
        "explanation": "المتغيرات المنطقية تأخذ قيمتين فقط: True أو False. نستخدم and و or و not لدمج الشروط ببعضها."
      },
      {
        "type": "wrong",
        "title": "كتابة True/False بأحرف صغيرة",
        "code": "has_premium = true\\nprint(has_premium)",
        "error_message": "NameError: name 'true' is not defined",
        "explanation": "في بايثون، القيم المنطقية حساسة لحالة الأحرف. يجب أن تبدأ بحرف كبير: True أو False."
      },
      {
        "type": "mistake",
        "title": "الخلط بين التعيين والمقارنة",
        "explanation": "في الشروط، المبتدئ يكتب (if is_admin = True) وهذا خطأ فادح. التساوي للمقارنة يستخدم مرتين == (if is_admin == True)."
      },
      {
        "type": "use_case",
        "title": "بوابات الصلاحيات (Authorization Gates)",
        "explanation": "في المشاريع الاحترافية كمنصة SVK Academy، نستخدم Booleans للتحقق مما إذا كان الطالب مشترکاً في الكورس (has_access = True)."
      },
      {
        "type": "challenge",
        "title": "بوابة المرور",
        "code": "# قم بإنشاء متغير منطقي evaluates to True إذا كان العمر 18 أو أكبر\\nage = 20\\ncan_enter = \\n",
        "expected_output": "True",
        "explanation": "استخدم عامل المقارنة >= لمعرفة ما إذا كانت القيمة أكبر من أو تساوي 18."
      }
    ],`;

const python5Examples = `
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الشرط البسيط (if-else)",
        "code": "score = 85\\nif score >= 90:\\n    print(\\"Grade: A\\")\\nelse:\\n    print(\\"Grade: B or lower\\")",
        "expected_output": "Grade: B or lower",
        "explanation": "جملة if تختبر شرطاً محدداً، إذا تحقق ينفذ الكود التابع لها، وإلا يتم تنفيذ الكود بداخل else."
      },
      {
        "type": "wrong",
        "title": "نسيان النقطتين الرأسيتين (:) وتجاهل المسافات",
        "code": "weather = \\"rainy\\"\\nif weather == \\"rainy\\"\\nprint(\\"Take an umbrella\\")",
        "error_message": "IndentationError: expected an indented block after 'if' statement",
        "explanation": "القواعد الأساسية لجملة if في بايثون هي النقطتين (:) نهاية السطر والمسافات البادئة (Indentation) في السطر التالي مباشرة."
      },
      {
        "type": "mistake",
        "title": "عدم استخدام elif",
        "explanation": "المبتدئ يكتب عدة جمل if متتالية. الأفضل والاحترافي استخدام elif للتحقق من شروط متسلسلة تتوقف عند أول شرط صحيح لتوفير الموارد."
      },
      {
        "type": "use_case",
        "title": "محركات التسعير الديناميكية (Dynamic Pricing)",
        "explanation": "في أوبر وبرامج التوصيل، يتم استخدام if-else برمجياً للتحقق من وقت الذروة ومضاعفة السعر تلقائياً."
      },
      {
        "type": "challenge",
        "title": "نظام نجاح ورسوب",
        "code": "# استخدم if و else لطباعة \\"Pass\\" إذا كانت الدرجة فوق 50 و \\"Fail\\" إذا كانت أقل\\ngrade = 45\\n",
        "expected_output": "Fail",
        "explanation": "تذكر وضع النقطتين (:) ومسافة البادئة للأسطر التي تطبع القيم."
      }
    ],`;

// We use regex to replace the array or just replace the slug line with slug + array.
// Because the previous script added it, we might need to remove old quick_practical_examples if they exist.
// A simpler way: split by lesson_slug and insert right after.

let updated = content;

// Replace any existing quick_practical_examples arrays to avoid duplicates
updated = updated.replace(/"quick_practical_examples": \[[^\]]*\],/g, '');

updated = updated.replace(/"lesson_slug": "python-1",/g, '"lesson_slug": "python-1",\n' + python1Examples);
updated = updated.replace(/"lesson_slug": "python-2",/g, '"lesson_slug": "python-2",\n' + python2Examples);
updated = updated.replace(/"lesson_slug": "python-3",/g, '"lesson_slug": "python-3",\n' + python3Examples);
updated = updated.replace(/"lesson_slug": "python-4",/g, '"lesson_slug": "python-4",\n' + python4Examples);
updated = updated.replace(/"lesson_slug": "python-5",/g, '"lesson_slug": "python-5",\n' + python5Examples);

fs.writeFileSync('src/context/tracks/pythonData.ts', updated);
console.log('Pilot lessons generated.');
