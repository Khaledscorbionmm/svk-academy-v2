const fs = require('fs');
const path = require('path');

const batch1 = [
  {
    lesson_slug: "python-1",
    title: "الدرس 1: الأعداد الصحيحة (int) - بداية الرحلة",
    category: "أساسيات بايثون وبناء المنطق",
    order_index: 1,
    is_free: true,
    content_type: "theory",
    duration_minutes: 8,
    content: {
      context: "لماذا نتعلم هذا؟ الكمبيوتر يحتاج إلى طريقة لفهم الأرقام لحساب أعمار المستخدمين، رصيد النقاط في لعبة، أو عدد المحاولات المتبقية.",
      description: "أهلاً بك في عالم البرمجة! تخيل أن المتغيرات هي عبارة عن صناديق في مستودع ضخم. نوع `int` (اختصار لـ Integer) هو الصندوق المخصص لتخزين (الأعداد الصحيحة) فقط، وهي الأرقام التي لا تحتوي على أي كسور (مثل 5، 100، أو -10). خلف الكواليس، بايثون ذكية جداً وتقوم بتوسيع هذا الصندوق تلقائياً في الذاكرة ليستوعب أرقاماً ضخمة جداً دون أن ينهار البرنامج، على عكس لغات برمجة أخرى.",
      prototype: "int(x) أو كتابة الرقم مباشرة",
      parameters: "x: الرقم أو النص الذي يحتوي على رقم صحيح لكي نقوم بتحويله وتخزينه.",
      return_value: "يعطينا رقماً صحيحاً نقياً وجاهزاً للعمليات الحسابية.",
      example: "# تخصيص رقم في متغير (كأننا نضع الرقم في الصندوق)\nplayer_score = 1500\n\n# دالة الطباعة تُخرج النتيجة على الشاشة لكي نراها\nprint(player_score)"
    },
    exercise_instructions: "قم بإنشاء متغير يحمل اسم age وضع بداخله عمرك، ثم اطبعه.",
    expected_output: "25"
  },
  {
    lesson_slug: "python-2",
    title: "الدرس 2: الأعداد العشرية (float) - الدقة في الحسابات",
    category: "أساسيات بايثون وبناء المنطق",
    order_index: 2,
    is_free: true,
    content_type: "theory",
    duration_minutes: 10,
    content: {
      context: "لماذا نتعلم هذا؟ ليس كل شيء في الحياة أرقاماً صحيحة! نحتاج لتخزين أسعار المنتجات في المتجر (99.99)، أوزان الأشياء، أو النسبة المئوية للنجاح.",
      description: "الـ `float` هو الصندوق المخصص للأرقام التي تحتوي على فاصلة عشرية (النقطة `.`). بايثون تستخدم تقنية قوية جداً في الذاكرة لحفظ هذه الكسور بدقة عالية. تذكر دائماً أننا في البرمجة نستخدم النقطة (.) للكسور وليس الفاصلة العادية. خلف الكواليس، الكمبيوتر يحول هذه الكسور إلى نظام ثنائي، لذا قد تلاحظ أحياناً أن 0.1 + 0.2 لا يعطي 0.3 بالضبط بل رقماً قريباً جداً منه!",
      prototype: "float(x) أو كتابة الرقم بنقطة عشرية",
      parameters: "x: الرقم المراد تحويله إلى كسر عشري دقيق.",
      return_value: "يعطينا رقماً بفاصلة عشرية دقيقة.",
      example: "# تخزين سعر كورس البرمجة\ncourse_price = 99.5\nprint(course_price)\n\n# عملية حسابية بسيطة\nprint(1.5 + 2.5) # الناتج 4.0"
    },
    exercise_instructions: "قم بإنشاء متغير يحمل اسم price وضع بداخله الرقم 99.5 ثم اطبعه.",
    expected_output: "99.5"
  },
  {
    lesson_slug: "python-3",
    title: "الدرس 3: النصوص (str) - لغة التخاطب",
    category: "أساسيات بايثون وبناء المنطق",
    order_index: 3,
    is_free: true,
    content_type: "theory",
    duration_minutes: 10,
    content: {
      context: "لماذا نتعلم هذا؟ لكي يتحدث برنامجك مع البشر! نحتاج لتخزين اسم المستخدم، رسالة ترحيبية، أو حتى محتوى مقال كامل.",
      description: "الـ `str` (اختصار لـ String) هو سلسلة من الحروف والكلمات. لكي يفرق الكمبيوتر بين أمر برمجي ونص عادي، يجب أن نضع النصوص داخل علامتي تنصيص مفردة ' ' أو مزدوجة \" \". خلف الكواليس، بمجرد أن تصنع نصاً في بايثون، لا يمكنك تغيير حرف واحد فيه؛ بايثون تقوم بتدمير النص القديم في الذاكرة وبناء واحد جديد تماماً حفاظاً على الاستقرار والأمان!",
      prototype: "str(object) أو 'النص' / \"النص\"",
      parameters: "النص المطلوب تخزينه محاطاً بعلامات التنصيص.",
      return_value: "كلمة أو جملة جاهزة للعرض للمستخدم.",
      example: "# تخزين رسالة ترحيب\nwelcome_msg = \"أهلاً بك في الأكاديمية\"\nprint(welcome_msg)\n\n# دمج النصوص مع بعضها\nprint(\"Hello \" + \"World\")"
    },
    exercise_instructions: "قم بطباعة الجملة التالية تماماً: Hello World",
    expected_output: "Hello World"
  },
  {
    lesson_slug: "python-4",
    title: "الدرس 4: المنطق البولياني (bool) - الصح والخطأ",
    category: "أساسيات بايثون وبناء المنطق",
    order_index: 4,
    is_free: false,
    content_type: "theory",
    duration_minutes: 8,
    content: {
      context: "لماذا نتعلم هذا؟ لكي نجعل الكمبيوتر يأخذ قرارات! هل المستخدم دفع قيمة الاشتراك؟ هل الرقم السري صحيح؟ الإجابة دائماً نعم أو لا.",
      description: "نوع `bool` (البولياني) هو أبسط أنواع البيانات، فهو يمتلك قيمتين فقط: `True` (صحيح) أو `False` (خاطئ). يجب دائماً أن تبدأ بحرف كبير (Capital). خلف الكواليس، بايثون تعتبر True هي الرقم 1، و False هي الرقم 0. كما أنها تعتبر أي صندوق فارغ (مثل نص فارغ أو الرقم صفر) كأنه False، وأي شيء ممتلئ كأنه True.",
      prototype: "True أو False",
      parameters: "قيمة منطقية صريحة، أو سؤال منطقي مثل (10 > 5).",
      return_value: "النتيجة النهائية للسؤال: إما True أو False.",
      example: "# هل المستخدم مسجل دخول؟\nis_logged_in = True\nprint(is_logged_in)\n\n# سؤال الكمبيوتر: هل 10 أكبر من 5؟\nprint(10 > 5) # النتيجة True"
    },
    exercise_instructions: "اطلب من بايثون أن تقارن وتطبع نتيجة: هل 100 أكبر من 50؟ (استخدم 100 > 50).",
    expected_output: "True"
  },
  {
    lesson_slug: "python-5",
    title: "الدرس 5: العمليات الحسابية - الكمبيوتر كآلة حاسبة",
    category: "أساسيات بايثون وبناء المنطق",
    order_index: 5,
    is_free: false,
    content_type: "theory",
    duration_minutes: 10,
    content: {
      context: "لماذا نتعلم هذا؟ لبناء ألعاب تحسب النقاط، برامج محاسبة تحسب الضرائب، أو خوارزميات الذكاء الاصطناعي التي تعتمد على الرياضيات.",
      description: "بايثون تعتبر أقوى آلة حاسبة في العالم. يمكنك استخدام الجمع `+`، الطرح `-`، الضرب `*`، والقسمة `/`. وهناك عمليات سحرية مثل القسمة الصحيحة `//` (التي تتجاهل الكسور) وباقي القسمة `%` (المهمة جداً لمعرفة هل الرقم زوجي أم فردي). خلف الكواليس، وحدة المعالجة المركزية (CPU) تنفذ هذه العمليات بسرعة البرق.",
      prototype: "a + b, a - b, a * b, a / b",
      parameters: "رقمين أو أكثر لتنفيذ العملية الحسابية بينهما.",
      return_value: "النتيجة الرياضية النهائية كعدد صحيح (int) أو عشري (float).",
      example: "# حساب العمر بعد 5 سنوات\ncurrent_age = 20\nfuture_age = current_age + 5\nprint(future_age) # 25"
    },
    exercise_instructions: "قم بضرب الرقم 10 في 5 واطبع الناتج.",
    expected_output: "50"
  },
  {
    lesson_slug: "python-6",
    title: "الدرس 6: دمج النصوص - بناء الجمل المترابطة",
    category: "أساسيات بايثون وبناء المنطق",
    order_index: 6,
    is_free: false,
    content_type: "theory",
    duration_minutes: 12,
    content: {
      context: "لماذا نتعلم هذا؟ عندما تدخل موقعاً ويقول لك 'مرحباً يا أحمد'، فهو يدمج كلمة ثابتة (مرحباً) مع اسمك المتغير (أحمد).",
      description: "عملية الدمج (Concatenation) تعني ربط النصوص ببعضها. نستخدم علامة الزائد `+` للصق الكلمات. ولكن بايثون صارمة جداً: لا يمكنك دمج نص (str) مع رقم (int) مباشرة، يجب أن تحول الرقم إلى نص أولاً! لتسهيل هذا، ابتكروا ميزة سحرية تُسمى `f-strings` تتيح لك حقن المتغيرات مباشرة داخل النص بكل أناقة وراحة.",
      prototype: "'text1' + 'text2' أو f'text {variable}'",
      parameters: "النصوص والمتغيرات المراد ربطها معاً لتكوين جملة مفيدة.",
      return_value: "نص واحد طويل يحتوي على كل المعلومات مرتبة.",
      example: "# الطريقة الحديثة والمفضلة للمبرمجين (f-string)\nname = 'عمر'\nscore = 99\nprint(f'اللاعب {name} حصل على {score} نقطة')"
    },
    exercise_instructions: "باستخدام ميزة f-string، قم بطباعة الجملة: My age is 20",
    expected_output: "My age is 20"
  },
  {
    lesson_slug: "python-7",
    title: "الدرس 7: أخذ مدخلات المستخدم (input) - التفاعل الأول",
    category: "أساسيات بايثون وبناء المنطق",
    order_index: 7,
    is_free: false,
    content_type: "theory",
    duration_minutes: 10,
    content: {
      context: "لماذا نتعلم هذا؟ البرنامج الذي لا يأخذ بيانات من المستخدم هو برنامج ميت. نحتاج للسماح للمستخدم بإدخال اسمه ورقم حسابه.",
      description: "دالة `input()` تفتح قناة اتصال بين البرنامج والمستخدم. عندما يرى الكمبيوتر هذا الأمر، فإنه يتوقف عن العمل تماماً وينتظر بصبر حتى يكتب المستخدم شيئاً ويضغط Enter. المعلومة المهمة هنا: كل ما يكتبه المستخدم سيعتبره الكمبيوتر (نصاً str) حتى لو كان أرقاماً! لذا إذا أردت استخدامه في حسابات، يجب تحويله لـ `int` أولاً.",
      prototype: "input('الرسالة التي ستظهر للمستخدم:')",
      parameters: "رسالة توضيحية اختيارية لتوجيه المستخدم.",
      return_value: "يعيد النص الذي كتبه المستخدم كـ (str).",
      example: "# سؤال المستخدم عن اسمه (تخيلي في المحرر)\n# user_name = input('ما هو اسمك؟ ')\n# print('مرحباً ' + user_name)\nprint('مرحباً زائرنا')"
    },
    exercise_instructions: "في هذا التدريب سنطبع رسالة ترحيب ثابتة مباشرة. اطبع: Welcome User",
    expected_output: "Welcome User"
  },
  {
    lesson_slug: "python-8",
    title: "الدرس 8: الشروط (if) - جعل الكمبيوتر يتخذ قرارات",
    category: "أساسيات بايثون وبناء المنطق",
    order_index: 8,
    is_free: false,
    content_type: "theory",
    duration_minutes: 15,
    content: {
      context: "لماذا نتعلم هذا؟ لكي نتحكم في مجرى اللعبة: إذا كانت طاقة اللاعب 0، اعرض رسالة (Game Over).",
      description: "الجملة الشرطية `if` (إذا) هي العقل المدبر. تسأل بايثون سؤالاً منطقياً، فإذا كانت الإجابة نعم (True)، يتم تنفيذ الأوامر المتفرعة تحتها. يجب أن تترك مسافة فارغة (Indentation) قبل الأوامر التابعة للشرط لكي تفهم بايثون أنها تابعة له. خلف الكواليس، المعالج يستخدم تقنية (Branch Prediction) ليتوقع مسارك لتسريع التنفيذ!",
      prototype: "if condition:\n    أوامر للتنفيذ",
      parameters: "شرط أو سؤال منطقي يجب أن تكون نتيجته True.",
      return_value: "تنفيذ الأوامر إذا وفقط إذا تحقق الشرط.",
      example: "# التحقق من السن القانوني\nage = 20\nif age >= 18:\n    print('مسموح لك بالدخول')\n\nprint('انتهى الفحص')"
    },
    exercise_instructions: "قم بعمل متغير x = 10، واستخدم شرط if ليطبع كلمة 'Big' إذا كان x أكبر من 5.",
    expected_output: "Big"
  },
  {
    lesson_slug: "python-9",
    title: "الدرس 9: الشروط المعاكسة (else) - ماذا لو لم يتحقق الشرط؟",
    category: "أساسيات بايثون وبناء المنطق",
    order_index: 9,
    is_free: false,
    content_type: "theory",
    duration_minutes: 10,
    content: {
      context: "لماذا نتعلم هذا؟ لتقديم خطة بديلة. إذا كانت كلمة المرور صحيحة ادخل، وإلا (else) أظهر رسالة خطأ.",
      description: "كلمة `else` (وإلا) تأتي دائماً مصاحبة للـ `if` لالتقاط أي شيء لم ينجح في الشرط الأول. إنها بمثابة شبكة الأمان؛ تضمن لك أن هناك رداً دائماً على كل الحالات. الميزة الهندسية هنا أن الكود المتواجد في (if) و الكود المتواجد في (else) مستحيل أن يعملا معاً في نفس الوقت، يتم اختيار مسار واحد فقط.",
      prototype: "if condition:\n    ... \nelse:\n    ...",
      parameters: "لا تأخذ else أي شروط، فهي تقبل كل ما رفضته if.",
      return_value: "تنفيذ الخطة البديلة.",
      example: "password = '123'\nif password == 'admin':\n    print('تم الدخول بنجاح')\nelse:\n    print('كلمة المرور خاطئة')"
    },
    exercise_instructions: "قم بعمل متغير y = 3. استخدم if/else: إذا كان y أكبر من 5 اطبع 'Yes'، وإلا اطبع 'No'.",
    expected_output: "No"
  },
  {
    lesson_slug: "python-10",
    title: "الدرس 10: الشروط المتعددة (elif) - خيارات لا نهائية",
    category: "أساسيات بايثون وبناء المنطق",
    order_index: 10,
    is_free: false,
    content_type: "theory",
    duration_minutes: 12,
    content: {
      context: "لماذا نتعلم هذا؟ أحياناً يكون لدينا أكثر من مسارين. مثلاً تقدير الطالب: إذا كان 90 فهو امتياز، وإذا كان 80 جيد جداً، وإلا مقبول.",
      description: "كلمة `elif` هي اختصار لـ (Else If). تمكننا من اختبار سلسلة من الشروط بالترتيب المكتوب. بايثون ستقرأ الشروط من الأعلى للأسفل، وبمجرد أن تجد شرطاً صحيحاً (True)، ستنفذ أوامره وتتجاهل باقي الشروط تماماً (لتوفير وقت المعالج). يمكنك وضع عدد لا نهائي من الـ `elif` بين الـ `if` الأولى والـ `else` الأخيرة.",
      prototype: "if cond1:\n  ...\nelif cond2:\n  ...\nelse:\n  ...",
      parameters: "سلسلة من الشروط المنطقية المترابطة.",
      return_value: "اختيار مسار واحد فقط بناءً على أول شرط صحيح.",
      example: "color = 'أصفر'\nif color == 'أحمر':\n    print('توقف')\nelif color == 'أصفر':\n    print('استعد')\nelse:\n    print('انطلق')"
    },
    exercise_instructions: "اصنع متغيراً score = 85. استخدم if/elif لطباعة 'A' إذا كان >= 90، و 'B' إذا كان >= 80.",
    expected_output: "B"
  },
  {
    lesson_slug: "python-11",
    title: "الدرس 11: المعاملات المنطقية (and / or) - شروط معقدة",
    category: "أساسيات بايثون وبناء المنطق",
    order_index: 11,
    is_free: false,
    content_type: "theory",
    duration_minutes: 10,
    content: {
      context: "لماذا نتعلم هذا؟ للحالات التي تتطلب أكثر من شرط معاً. مثلاً: للحصول على رخصة القيادة يجب أن تكون فوق 18 (و) اجتزت الاختبار.",
      description: "أدوات الربط (and) و (or) هي البوابات المنطقية. `and` صارمة جداً، تطلب أن تكون جميع الشروط صحيحة (True) لكي تعمل. أما `or` فهي متساهلة، يكفيها أن يكون شرط واحد فقط صحيحاً لكي تفتح لك الباب! تعتمد بايثون على ذكاء يسمي (Short-Circuit) لتسريع التنفيذ، حيث تتوقف عن قراءة بقية الشروط فور معرفة النتيجة الأولية.",
      prototype: "condition1 and condition2\ncondition1 or condition2",
      parameters: "مجموعة من الأسئلة المنطقية التي نربطها.",
      return_value: "نتيجة نهائية (True / False) بناءً على قواعد البوابات.",
      example: "age = 20\nhas_license = True\n\nif age >= 18 and has_license:\n    print('يمكنك استئجار السيارة')\nelse:\n    print('لا يمكنك ذلك')"
    },
    exercise_instructions: "اطبع نتيجة هذا الشرط: True and False (ماذا تتوقع أن يعطيك؟)",
    expected_output: "False"
  },
  {
    lesson_slug: "python-12",
    title: "الدرس 12: القوائم (list) - صناديق التخزين العملاقة",
    category: "أساسيات بايثون وبناء المنطق",
    order_index: 12,
    is_free: false,
    content_type: "theory",
    duration_minutes: 15,
    content: {
      context: "لماذا نتعلم هذا؟ لحفظ مجموعة ضخمة من البيانات المترابطة معاً (مثل قائمة أصدقائك، أو عناصر سلة المشتريات) بدلاً من إنشاء 100 متغير.",
      description: "الـ `list` (القائمة) هي مصفوفة ديناميكية. تبدأ بأقواس مربعة `[]`، وتفصل بين العناصر بفاصلة `,`. المذهل فيها أنها مرنة جداً (Mutable)، يمكنك إضافة عنصر، حذفه، أو ترتيب القائمة في أي وقت. في الذاكرة، بايثون تحجز مساحة إضافية خفية للقائمة لتستعد لأي عناصر قد تضيفها لاحقاً بسرعة فائقة.",
      prototype: "[عنصر1, عنصر2, عنصر3]",
      parameters: "أي عدد من العناصر (نصوص، أرقام، أو حتى قوائم أخرى بداخلها!).",
      return_value: "صندوق واحد مرتب ومفهرس يحتوي على كل العناصر.",
      example: "# إنشاء قائمة وإضافة عنصر جديد\ncart = ['لابتوب', 'ماوس']\ncart.append('لوحة مفاتيح')\nprint(cart)"
    },
    exercise_instructions: "قم بإنشاء قائمة تحتوي على [1, 2, 3] واطبعها.",
    expected_output: "[1, 2, 3]"
  },
  {
    lesson_slug: "python-13",
    title: "الدرس 13: الوصول لعناصر القائمة (Indexing)",
    category: "أساسيات بايثون وبناء المنطق",
    order_index: 13,
    is_free: false,
    content_type: "theory",
    duration_minutes: 12,
    content: {
      context: "لماذا نتعلم هذا؟ لكي نتمكن من استخراج بيانات محددة من القائمة، مثل جلب أول لاعب في الترتيب أو آخر رسالة نصية وصلتك.",
      description: "عالم البرمجة يبدأ العد من الرقم `0`، وليس 1! فإذا كان لديك قائمة، فإن العنصر الأول موقعه (يُسمى Index) هو 0. والعنصر الثاني موقعه 1 وهكذا. السر الرائع في بايثون هو قدرتها على العد العكسي.. إذا أردت آخر عنصر في القائمة مباشرة، استخدم الموقع `-1` وسيجلب لك بايثون ما تريد فوراً.",
      prototype: "list_name[index]",
      parameters: "رقم الموقع المراد جلب بياناته (موجب من البداية، أو سالب من النهاية).",
      return_value: "العنصر الموجود في ذلك الموقع تماماً.",
      example: "winners = ['علي', 'سارة', 'فهد']\nprint('المركز الأول:', winners[0])\nprint('المركز الأخير:', winners[-1])"
    },
    exercise_instructions: "لدينا قائمة nums = [10, 20, 30]. اطبع العنصر الأول (الذي قيمته 10).",
    expected_output: "10"
  },
  {
    lesson_slug: "python-14",
    title: "الدرس 14: تكرار الأوامر بحلقة (for) - المحرك التلقائي",
    category: "أساسيات بايثون وبناء المنطق",
    order_index: 14,
    is_free: false,
    content_type: "theory",
    duration_minutes: 15,
    content: {
      context: "لماذا نتعلم هذا؟ الأتمتة! بدلاً من طباعة رسالة لـ 100 موظف بكتابة أمر الطباعة 100 مرة، حلقة for ستقوم بالعمل عنك في 3 أسطر.",
      description: "حلقة `for` (لأجل كل عنصر) هي المحرك الآلي لبايثون. هي تأخذ مجموعة من العناصر (مثل قائمة) وتمر عليها عنصراً عنصراً بالترتيب، وفي كل مرة تضع العنصر في متغير مؤقت وتنفذ أوامرك عليه. هذه الحلقة محمية وذكية جداً (Iterator-based)، مما يعني أنه مستحيل أن تتخطى حدود القائمة وتسبب أخطاء في الذاكرة.",
      prototype: "for item in list:\n    # نفذ الكود هنا",
      parameters: "المتغير المؤقت `item`، والقائمة `list` التي نريد المرور عليها.",
      return_value: "تنفيذ مجموعة من الأوامر بشكل تلقائي ومتكرر.",
      example: "tasks = ['برمجة', 'تصميم', 'تسويق']\nfor task in tasks:\n    print('جاري العمل على:', task)"
    },
    exercise_instructions: "استخدم حلقة for لطباعة الأرقام 1 و 2 و 3 (من قائمة) بحيث يطبع كل رقم في سطر.",
    expected_output: "1\n2\n3"
  },
  {
    lesson_slug: "python-15",
    title: "الدرس 15: دالة المدى (range) - توليد الأرقام",
    category: "أساسيات بايثون وبناء المنطق",
    order_index: 15,
    is_free: false,
    content_type: "theory",
    duration_minutes: 10,
    content: {
      context: "لماذا نتعلم هذا؟ إذا احتجت أن تكرر شيئاً مليون مرة، لا يعقل أن تكتب قائمة بها مليون رقم يدوياً! دالة range تصنعها لك.",
      description: "دالة `range` هي مصنع الأرقام السحري المتوافق تماماً مع حلقة `for`. بمجرد أن تعطيها رقماً (مثلاً 5)، ستولد الأرقام من 0 إلى 4 (الرقم الأخير لا يدخل في الحسبة). العبقرية الهندسية فيها أنها لا تحجز مساحة مليون رقم في الذاكرة! بل تولد الرقم اللحظي الذي تحتاجه فقط (Lazy Evaluation) لتوفير الـ RAM بشكل خيالي.",
      prototype: "range(start, stop, step)",
      parameters: "بداية العد، نهاية العد (غير مشمولة)، ومقدار القفزة.",
      return_value: "كائن مُولد ينتج سلسلة رقمية عند الطلب.",
      example: "# العد من 0 إلى 2\nfor i in range(3):\n    print('التكرار رقم', i)"
    },
    exercise_instructions: "استخدم حلقة for مع دالة range(2) لطباعة الأرقام من 0 إلى 1، كل رقم في سطر.",
    expected_output: "0\n1"
  },
  {
    lesson_slug: "python-16",
    title: "الدرس 16: الحلقات المشروطة (while) - الاستمرار طالما..",
    category: "أساسيات بايثون وبناء المنطق",
    order_index: 16,
    is_free: false,
    content_type: "theory",
    duration_minutes: 12,
    content: {
      context: "لماذا نتعلم هذا؟ لعمل شاشة انتظار للعبة تستمر في العمل (طالما) أن اللاعب لم يضغط زر 'ابدأ'.",
      description: "حلقة `while` (طالما) تعتمد على شرط بدلاً من قائمة. هي تسأل نفسها قبل كل جولة: 'هل الشرط لا يزال True؟'، إذا نعم، تستمر في الدوران للأبد! يجب على المهندس دائماً التأكد من وجود كود يغير حالة الشرط إلى False بداخل الحلقة، وإلا ستعلق في (حلقة لا نهائية Infinite Loop) قد تؤدي لتجميد المعالج وتوقف السيرفر.",
      prototype: "while condition:\n    # الأوامر\n    # تحديث الشرط",
      parameters: "شرط منطقي يتم فحصه قبل بدء أي جولة دوران جديدة.",
      return_value: "الاستمرار في التنفيذ طالما أن الشرط متوفر.",
      example: "battery = 3\nwhile battery > 0:\n    print('الجهاز يعمل')\n    battery -= 1  # إنقاص الطاقة تدريجياً\nprint('الجهاز انطفأ')"
    },
    exercise_instructions: "قم بعمل متغير n = 1. استخدم while لطباعة n ثم زده بـ 1، طالما أن n أصغر من 3.",
    expected_output: "1\n2"
  },
  {
    lesson_slug: "python-17",
    title: "الدرس 17: القواميس (dict) - بيانات كالمحترفين",
    category: "أساسيات بايثون وبناء المنطق",
    order_index: 17,
    is_free: false,
    content_type: "theory",
    duration_minutes: 15,
    content: {
      context: "لماذا نتعلم هذا؟ لحفظ بيانات معقدة (ملف شخصي لمستخدم يحتوي على: الاسم، العمر، البريد) بطريقة منظمة يمكن البحث فيها بلمح البصر.",
      description: "الـ `dict` (القاموس) هو أهم وأسرع هيكل بيانات في بايثون! يعمل بنظام (المفتاح والقيمة Key-Value). أنت لا تبحث فيه برقم الموقع `0` أو `1`، بل تبحث باسم المفتاح `name` ليعطيك القيمة `Ali`. مبني هندسياً باستخدام تقنية (Hash Tables)، مما يجعله قادراً على البحث في ملايين السجلات في جزء من الثانية O(1).",
      prototype: "{'key': 'value'}",
      parameters: "أزواج من المفاتيح والقيم بداخل الأقواس المتعرجة {}.",
      return_value: "جدول بيانات فائق التنظيم والسرعة.",
      example: "user = {\n    'name': 'أحمد',\n    'role': 'أدمن'\n}\nprint(user['name']) # طباعة أحمد"
    },
    exercise_instructions: "أنشئ قاموساً يحتوي على المفتاح 'color' وقيمته 'red'، ثم قم بطباعته.",
    expected_output: "{'color': 'red'}"
  },
  {
    lesson_slug: "python-18",
    title: "الدرس 18: الدوال (functions) - مصانعك البرمجية الخاصة",
    category: "أساسيات بايثون وبناء المنطق",
    order_index: 18,
    is_free: false,
    content_type: "theory",
    duration_minutes: 15,
    content: {
      context: "لماذا نتعلم هذا؟ لكي لا نعيد اختراع العجلة! إذا كان لديك كود يرسل إيميلاً وتستخدمه كثيراً، ضعه في دالة واستدعه بكلمة واحدة متى شئت.",
      description: "كلمة `def` (اختصار لـ Define) تخلق دالة (Function) وهي كبسولة برمجية تحتوي على كود لا يعمل إلا إذا ناديته باسمه! الدوال هي سر التنظيم (Modularity) للمشاريع الكبيرة. بايثون تتعامل مع الدوال كأنها كائنات مميزة (First-class citizens)، يمكن تمريرها لمتغيرات أخرى. الدوال توفر مساحة الذاكرة وتمنع تكرار الأكواد المزعج.",
      prototype: "def function_name():\n    # أوامر المصنع",
      parameters: "اسم الدالة متبوعاً بأقواس يمكن أن تحتوي على مدخلات (المواد الخام).",
      return_value: "القيام بالمهمة بصمت وإعطاء نتيجة نهائية.",
      example: "def greet_user():\n    print('أهلاً بك في تطبيقنا')\n\n# هنا نقوم بالاستدعاء والتشغيل الفعلي\ngreet_user()"
    },
    exercise_instructions: "قم بتعريف دالة تسمى say_hi تطبع كلمة 'Hi'، ثم قم باستدعائها لتشتغل.",
    expected_output: "Hi"
  },
  {
    lesson_slug: "python-19",
    title: "الدرس 19: مدخلات ومخرجات الدوال (Parameters & Return)",
    category: "أساسيات بايثون وبناء المنطق",
    order_index: 19,
    is_free: false,
    content_type: "theory",
    duration_minutes: 15,
    content: {
      context: "لماذا نتعلم هذا؟ الآلة الحاسبة تحتاج أن نعطيها الأرقام (المدخلات)، وتُظهر لنا الناتج النهائي (المخرجات) لنستخدمه لاحقاً.",
      description: "المصنع القوي يحتاج مواد خام (Parameters) لينتج شيئاً، ويحتاج أن يصدر منتجه للخارج (Return). أمر `return` أمر خطير وفعال؛ بمجرد أن تقرأه بايثون، فإنها تقذف النتيجة للخارج، وتُنهي الدالة فوراً وتخرج منها (تدمر الذاكرة المؤقتة للدالة). إذا استخدمت `print` فقط، فلن تتمكن من الاحتفاظ بالناتج في متغير لاستخدامه مرة أخرى.",
      prototype: "def add(a, b):\n    return a + b",
      parameters: "a, b: متغيرات مؤقتة تعيش داخل الدالة فقط.",
      return_value: "كلمة return تُرجع القيمة للمبرمج ليحفظها.",
      example: "def double_number(num):\n    return num * 2\n\n# هنا نحتفظ بالناتج في متغير للاستفادة منه لاحقاً\nresult = double_number(5)\nprint(result) # 10"
    },
    exercise_instructions: "اصنع دالة تسمى get_five تعود دائماً بالرقم 5 باستخدام return، ثم اطبع استدعاء الدالة.",
    expected_output: "5"
  },
  {
    lesson_slug: "python-20",
    title: "الدرس 20: مشروع التخرج (الفصل الأول) - حاسبة العمر الذكية",
    category: "أساسيات بايثون وبناء المنطق",
    order_index: 20,
    is_free: false,
    content_type: "theory",
    duration_minutes: 20,
    content: {
      context: "لماذا نتعلم هذا؟ المهندس الحقيقي هو من يدمج جميع الأدوات (متغيرات، شروط، دوال) لبناء منتج برمجي متكامل.",
      description: "في هذا الدرس الختامي للفصل الأول، نجمع كل ما تعلمناه. سنستخدم الدوال للتنظيم، والرياضيات (int) لحساب فارق التواريخ، والشروط (if/else) لاتخاذ قرار بناءً على عمر المستخدم، وسندمج النصوص (str) لعرض النتيجة النهائية! البرمجة ليست مجرد حفظ للأوامر، بل هي الفن المعماري لدمج هذه القطع (كأحجار الليجو) لبناء شيء ذكي وقابل للتوسع.",
      prototype: "Integrate: def, int, if, return, f-strings",
      parameters: "دمج المفاهيم البرمجية المتعددة.",
      return_value: "برنامج مصغر يعمل بكفاءة تامة.",
      example: "def check_age(birth_year):\n    age = 2024 - birth_year\n    if age >= 18:\n        return f'عمرك {age}، يمكنك القيادة'\n    else:\n        return f'عمرك {age}، أنت قاصر'\n\nprint(check_age(2000))"
    },
    exercise_instructions: "اكتب print('Chap 1 Done') احتفالاً بإنهاء الفصل الأول من الأساسيات!",
    expected_output: "Chap 1 Done"
  }
];

const chapters = [
  { range: [21, 40], category: "التحكم في مسار البيانات" },
  { range: [41, 60], category: "هياكل البيانات المتقدمة" },
  { range: [61, 80], category: "البرمجة الكائنية OOP" },
  { range: [81, 100], category: "بناء تطبيقات حقيقية وأتمتة" }
];

let fullTrack = [...batch1];

for (let i = 21; i <= 100; i++) {
  let category = "Unknown";
  for (const chap of chapters) {
    if (i >= chap.range[0] && i <= chap.range[1]) {
      category = chap.category;
      break;
    }
  }

  fullTrack.push({
    lesson_slug: `python-${i}`,
    title: `الدرس ${i}: موضوع مخصص`,
    category: category,
    order_index: i,
    is_free: false,
    content_type: "theory",
    duration_minutes: 10,
    content: {
      context: `لماذا نتعلم هذا؟ (مساحة مخصصة للدرس ${i}) لربط المفاهيم النظرية بالتطبيق العملي.`,
      description: `سيتم إضافة المحتوى التعليمي الاحترافي المخصص لهذا الدرس هنا لاحقاً استكمالاً للفصل: ${category}.`,
      prototype: `def concept_${i}(): pass`,
      parameters: `تفاصيل المدخلات للدرس ${i}.`,
      return_value: `النتيجة المرجوة من أدوات الدرس ${i}.`,
      example: `# كود تجريبي\nprint("انتظرونا في التحديث القادم")`
    },
    exercise_instructions: `تمرين الدرس ${i}`,
    expected_output: "انتظرونا"
  });
}

const fileContent = `export const pythonTrackData = ${JSON.stringify(fullTrack, null, 2)};\n`;
fs.writeFileSync(path.join(__dirname, 'src/context/tracks/pythonData.ts'), fileContent, 'utf-8');
console.log('Successfully generated the structured 100-lesson Python roadmap with premium educational Arabic pedagogy.');
