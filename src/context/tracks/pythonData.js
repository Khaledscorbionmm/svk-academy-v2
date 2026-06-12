"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pythonTrackData = void 0;
exports.pythonTrackData = [
    {
        "lesson_slug": "python-1",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تعريف واستخدام المتغيرات الصحيحة (int)",
                "code": "# تخصيص رقم في متغير (كأننا نضع الرقم في الصندوق)\nplayer_score = 1500\n\n# دالة الطباعة تُخرج النتيجة على الشاشة لكي نراها\nprint(player_score)",
                "expected_output": "(Output specific to الدرس 1: الأعداد الصحيحة (int) - بداية الرحلة)",
                "explanation": "هذا مثال عملي يوضح كيفية استخدام (الدرس 1: الأعداد الصحيحة (int) - بداية الرحلة) برمجياً."
            },
            {
                "type": "wrong",
                "title": "دمج الأعداد مع النصوص برمجياً بدون تحويل",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 1: الأعداد الصحيحة (int) - بداية الرحلة context",
                "error_message": "TypeError: can only concatenate str (not \"int\") to str",
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
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\n# تخصيص رقم في متغير (كأننا نضع الرقم في الصندوق)\nplayer_score == 1500\n\n# دالة الطباعة تُخرج النتيجة على الشاشة لكي نراها\nprint(player_score)",
                "expected_output": "Correct execution output",
                "explanation": "تحدي خاص بدرس: الدرس 1: الأعداد الصحيحة (int) - بداية الرحلة"
            }
        ],
        "title": "الدرس 1: الأعداد الصحيحة (int) - بداية الرحلة",
        "category": "أساسيات بايثون وبناء المنطق",
        "order_index": 1,
        "is_free": true,
        "content_type": "theory",
        "duration_minutes": 8,
        "content": {
            "context": "لماذا نتعلم هذا؟ الكمبيوتر يحتاج إلى طريقة لفهم الأرقام لحساب أعمار المستخدمين، رصيد النقاط في لعبة، أو عدد المحاولات المتبقية.",
            "description": "أهلاً بك في عالم البرمجة! تخيل أن المتغيرات هي عبارة عن صناديق في مستودع ضخم. نوع `int` (اختصار لـ Integer) هو الصندوق المخصص لتخزين (الأعداد الصحيحة) فقط، وهي الأرقام التي لا تحتوي على أي كسور (مثل 5، 100، أو -10). خلف الكواليس، بايثون ذكية جداً وتقوم بتوسيع هذا الصندوق تلقائياً في الذاكرة ليستوعب أرقاماً ضخمة جداً دون أن ينهار البرنامج، على عكس لغات برمجة أخرى.",
            "prototype": "int(x) أو كتابة الرقم مباشرة",
            "parameters": "x: الرقم أو النص الذي يحتوي على رقم صحيح لكي نقوم بتحويله وتخزينه.",
            "return_value": "يعطينا رقماً صحيحاً نقياً وجاهزاً للعمليات الحسابية.",
            "example": "# تخصيص رقم في متغير (كأننا نضع الرقم في الصندوق)\nplayer_score = 1500\n\n# دالة الطباعة تُخرج النتيجة على الشاشة لكي نراها\nprint(player_score)"
        },
        "exercise_instructions": "قم بإنشاء متغير يحمل اسم age وضع بداخله عمرك، ثم اطبعه.",
        "expected_output": "25",
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-2",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "التعامل مع الكسور العشرية (float)",
                "code": "# تخزين سعر كورس البرمجة\ncourse_price = 99.5\nprint(course_price)\n\n# عملية حسابية بسيطة\nprint(1.5 + 2.5) # الناتج 4.0",
                "expected_output": "(Output specific to الدرس 2: الأعداد العشرية (float) - الدقة في الحسابات)",
                "explanation": "هذا مثال عملي يوضح كيفية استخدام (الدرس 2: الأعداد العشرية (float) - الدقة في الحسابات) برمجياً."
            },
            {
                "type": "wrong",
                "title": "القسمة على الصفر في المعادلات الحسابية",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 2: الأعداد العشرية (float) - الدقة في الحسابات context",
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
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\n# تخزين سعر كورس البرمجة\ncourse_price == 99.5\nprint(course_price)\n\n# عملية حسابية بسيطة\nprint(1.5 + 2.5) # الناتج 4.0",
                "expected_output": "Correct execution output",
                "explanation": "تحدي خاص بدرس: الدرس 2: الأعداد العشرية (float) - الدقة في الحسابات"
            }
        ],
        "title": "الدرس 2: الأعداد العشرية (float) - الدقة في الحسابات",
        "category": "أساسيات بايثون وبناء المنطق",
        "order_index": 2,
        "is_free": true,
        "content_type": "theory",
        "duration_minutes": 10,
        "content": {
            "context": "لماذا نتعلم هذا؟ ليس كل شيء في الحياة أرقاماً صحيحة! نحتاج لتخزين أسعار المنتجات في المتجر (99.99)، أوزان الأشياء، أو النسبة المئوية للنجاح.",
            "description": "الـ `float` هو الصندوق المخصص للأرقام التي تحتوي على فاصلة عشرية (النقطة `.`). بايثون تستخدم تقنية قوية جداً في الذاكرة لحفظ هذه الكسور بدقة عالية. تذكر دائماً أننا في البرمجة نستخدم النقطة (.) للكسور وليس الفاصلة العادية. خلف الكواليس، الكمبيوتر يحول هذه الكسور إلى نظام ثنائي، لذا قد تلاحظ أحياناً أن 0.1 + 0.2 لا يعطي 0.3 بالضبط بل رقماً قريباً جداً منه!",
            "prototype": "float(x) أو كتابة الرقم بنقطة عشرية",
            "parameters": "x: الرقم المراد تحويله إلى كسر عشري دقيق.",
            "return_value": "يعطينا رقماً بفاصلة عشرية دقيقة.",
            "example": "# تخزين سعر كورس البرمجة\ncourse_price = 99.5\nprint(course_price)\n\n# عملية حسابية بسيطة\nprint(1.5 + 2.5) # الناتج 4.0"
        },
        "exercise_instructions": "قم بإنشاء متغير يحمل اسم price وضع بداخله الرقم 99.5 ثم اطبعه.",
        "expected_output": "99.5",
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-3",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "دمج النصوص وتنسيقها (String formatting)",
                "code": "# تخزين رسالة ترحيب\nwelcome_msg = \"أهلاً بك في الأكاديمية\"\nprint(welcome_msg)\n\n# دمج النصوص مع بعضها\nprint(\"Hello \" + \"World\")",
                "expected_output": "(Output specific to الدرس 3: النصوص (str) - لغة التخاطب)",
                "explanation": "هذا مثال عملي يوضح كيفية استخدام (الدرس 3: النصوص (str) - لغة التخاطب) برمجياً."
            },
            {
                "type": "wrong",
                "title": "خطأ في علامات التنصيص المتداخلة",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 3: النصوص (str) - لغة التخاطب context",
                "error_message": "SyntaxError: invalid syntax",
                "explanation": "لا يمكنك استخدام علامة تنصيص مفردة بداخل تنصيص مفرد دون استخدام \\ (Escape character) أو استخدام تنصيص مزدوج بالخارج."
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
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\n# تخزين رسالة ترحيب\nwelcome_msg == \"أهلاً بك في الأكاديمية\"\nprint(welcome_msg)\n\n# دمج النصوص مع بعضها\nprint(\"Hello \" + \"World\")",
                "expected_output": "Correct execution output",
                "explanation": "تحدي خاص بدرس: الدرس 3: النصوص (str) - لغة التخاطب"
            }
        ],
        "title": "الدرس 3: النصوص (str) - لغة التخاطب",
        "category": "أساسيات بايثون وبناء المنطق",
        "order_index": 3,
        "is_free": true,
        "content_type": "theory",
        "duration_minutes": 10,
        "content": {
            "context": "لماذا نتعلم هذا؟ لكي يتحدث برنامجك مع البشر! نحتاج لتخزين اسم المستخدم، رسالة ترحيبية، أو حتى محتوى مقال كامل.",
            "description": "الـ `str` (اختصار لـ String) هو سلسلة من الحروف والكلمات. لكي يفرق الكمبيوتر بين أمر برمجي ونص عادي، يجب أن نضع النصوص داخل علامتي تنصيص مفردة ' ' أو مزدوجة \" \". خلف الكواليس، بمجرد أن تصنع نصاً في بايثون، لا يمكنك تغيير حرف واحد فيه؛ بايثون تقوم بتدمير النص القديم في الذاكرة وبناء واحد جديد تماماً حفاظاً على الاستقرار والأمان!",
            "prototype": "str(object) أو 'النص' / \"النص\"",
            "parameters": "النص المطلوب تخزينه محاطاً بعلامات التنصيص.",
            "return_value": "كلمة أو جملة جاهزة للعرض للمستخدم.",
            "example": "# تخزين رسالة ترحيب\nwelcome_msg = \"أهلاً بك في الأكاديمية\"\nprint(welcome_msg)\n\n# دمج النصوص مع بعضها\nprint(\"Hello \" + \"World\")"
        },
        "exercise_instructions": "قم بطباعة الجملة التالية تماماً: Hello World",
        "expected_output": "Hello World",
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-4",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "العمليات المنطقية (Booleans)",
                "code": "# هل المستخدم مسجل دخول؟\nis_logged_in = True\nprint(is_logged_in)\n\n# سؤال الكمبيوتر: هل 10 أكبر من 5؟\nprint(10 > 5) # النتيجة True",
                "expected_output": "(Output specific to الدرس 4: المنطق البولياني (bool) - الصح والخطأ)",
                "explanation": "هذا مثال عملي يوضح كيفية استخدام (الدرس 4: المنطق البولياني (bool) - الصح والخطأ) برمجياً."
            },
            {
                "type": "wrong",
                "title": "كتابة True/False بأحرف صغيرة",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 4: المنطق البولياني (bool) - الصح والخطأ context",
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
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\n# هل المستخدم مسجل دخول؟\nis_logged_in == True\nprint(is_logged_in)\n\n# سؤال الكمبيوتر: هل 10 أكبر من 5؟\nprint(10 > 5) # النتيجة True",
                "expected_output": "Correct execution output",
                "explanation": "تحدي خاص بدرس: الدرس 4: المنطق البولياني (bool) - الصح والخطأ"
            }
        ],
        "title": "الدرس 4: المنطق البولياني (bool) - الصح والخطأ",
        "category": "أساسيات بايثون وبناء المنطق",
        "order_index": 4,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 8,
        "content": {
            "context": "لماذا نتعلم هذا؟ لكي نجعل الكمبيوتر يأخذ قرارات! هل المستخدم دفع قيمة الاشتراك؟ هل الرقم السري صحيح؟ الإجابة دائماً نعم أو لا.",
            "description": "نوع `bool` (البولياني) هو أبسط أنواع البيانات، فهو يمتلك قيمتين فقط: `True` (صحيح) أو `False` (خاطئ). يجب دائماً أن تبدأ بحرف كبير (Capital). خلف الكواليس، بايثون تعتبر True هي الرقم 1، و False هي الرقم 0. كما أنها تعتبر أي صندوق فارغ (مثل نص فارغ أو الرقم صفر) كأنه False، وأي شيء ممتلئ كأنه True.",
            "prototype": "True أو False",
            "parameters": "قيمة منطقية صريحة، أو سؤال منطقي مثل (10 > 5).",
            "return_value": "النتيجة النهائية للسؤال: إما True أو False.",
            "example": "# هل المستخدم مسجل دخول؟\nis_logged_in = True\nprint(is_logged_in)\n\n# سؤال الكمبيوتر: هل 10 أكبر من 5؟\nprint(10 > 5) # النتيجة True"
        },
        "exercise_instructions": "اطلب من بايثون أن تقارن وتطبع نتيجة: هل 100 أكبر من 50؟ (استخدم 100 > 50).",
        "expected_output": "True",
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-5",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "الشرط البسيط (if-else)",
                "code": "# حساب العمر بعد 5 سنوات\ncurrent_age = 20\nfuture_age = current_age + 5\nprint(future_age) # 25",
                "expected_output": "(Output specific to الدرس 5: العمليات الحسابية - الكمبيوتر كآلة حاسبة)",
                "explanation": "هذا مثال عملي يوضح كيفية استخدام (الدرس 5: العمليات الحسابية - الكمبيوتر كآلة حاسبة) برمجياً."
            },
            {
                "type": "wrong",
                "title": "نسيان النقطتين الرأسيتين (:) وتجاهل المسافات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 5: العمليات الحسابية - الكمبيوتر كآلة حاسبة context",
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
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\n# حساب العمر بعد 5 سنوات\ncurrent_age == 20\nfuture_age = current_age + 5\nprint(future_age) # 25",
                "expected_output": "Correct execution output",
                "explanation": "تحدي خاص بدرس: الدرس 5: العمليات الحسابية - الكمبيوتر كآلة حاسبة"
            }
        ],
        "title": "الدرس 5: العمليات الحسابية - الكمبيوتر كآلة حاسبة",
        "category": "أساسيات بايثون وبناء المنطق",
        "order_index": 5,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 10,
        "content": {
            "context": "لماذا نتعلم هذا؟ لبناء ألعاب تحسب النقاط، برامج محاسبة تحسب الضرائب، أو خوارزميات الذكاء الاصطناعي التي تعتمد على الرياضيات.",
            "description": "بايثون تعتبر أقوى آلة حاسبة في العالم. يمكنك استخدام الجمع `+`، الطرح `-`، الضرب `*`، والقسمة `/`. وهناك عمليات سحرية مثل القسمة الصحيحة `//` (التي تتجاهل الكسور) وباقي القسمة `%` (المهمة جداً لمعرفة هل الرقم زوجي أم فردي). خلف الكواليس، وحدة المعالجة المركزية (CPU) تنفذ هذه العمليات بسرعة البرق.",
            "prototype": "a + b, a - b, a * b, a / b",
            "parameters": "رقمين أو أكثر لتنفيذ العملية الحسابية بينهما.",
            "return_value": "النتيجة الرياضية النهائية كعدد صحيح (int) أو عشري (float).",
            "example": "# حساب العمر بعد 5 سنوات\ncurrent_age = 20\nfuture_age = current_age + 5\nprint(future_age) # 25"
        },
        "exercise_instructions": "قم بضرب الرقم 10 في 5 واطبع الناتج.",
        "expected_output": "50",
        "lesson_type": "project"
    },
    {
        "lesson_slug": "python-6",
        "title": "الدرس 6: دمج النصوص - بناء الجمل المترابطة",
        "category": "أساسيات بايثون وبناء المنطق",
        "order_index": 6,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 12,
        "content": {
            "context": "لماذا نتعلم هذا؟ عندما تدخل موقعاً ويقول لك 'مرحباً يا أحمد'، فهو يدمج كلمة ثابتة (مرحباً) مع اسمك المتغير (أحمد).",
            "description": "عملية الدمج (Concatenation) تعني ربط النصوص ببعضها. نستخدم علامة الزائد `+` للصق الكلمات. ولكن بايثون صارمة جداً: لا يمكنك دمج نص (str) مع رقم (int) مباشرة، يجب أن تحول الرقم إلى نص أولاً! لتسهيل هذا، ابتكروا ميزة سحرية تُسمى `f-strings` تتيح لك حقن المتغيرات مباشرة داخل النص بكل أناقة وراحة.",
            "prototype": "'text1' + 'text2' أو f'text {variable}'",
            "parameters": "النصوص والمتغيرات المراد ربطها معاً لتكوين جملة مفيدة.",
            "return_value": "نص واحد طويل يحتوي على كل المعلومات مرتبة.",
            "example": "# الطريقة الحديثة والمفضلة للمبرمجين (f-string)\nname = 'عمر'\nscore = 99\nprint(f'اللاعب {name} حصل على {score} نقطة')"
        },
        "exercise_instructions": "باستخدام ميزة f-string، قم بطباعة الجملة: My age is 20",
        "expected_output": "My age is 20",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 6: دمج النصوص - بناء الجمل المترابطة",
                "code": "# الطريقة الحديثة والمفضلة للمبرمجين (f-string)\nname = 'عمر'\nscore = 99\nprint(f'اللاعب {name} حصل على {score} نقطة')",
                "expected_output": "(Output specific to الدرس 6: دمج النصوص - بناء الجمل المترابطة)",
                "explanation": "في هذا المثال، قمنا بالتعامل مع النصوص (Strings) في بايثون، وهي الأساس لأي تطبيق يتعامل مع البيانات النصية والرسائل."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "# الطريقة الحديثة والمفضلة للمبرمجين (f-string\nname = 'عمر'\nscore = 99\nprint(f'اللاعب {name} حصل على {score} نقطة')",
                "error_message": "SyntaxError in الدرس 6: دمج النصوص - بناء الجمل المترابطة",
                "explanation": "خطأ شائع جداً: نسيان إغلاق علامات التنصيص (\" أو ') مما يؤدي إلى ظهور SyntaxError وانهيار البرنامج."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 6: دمج النصوص - بناء الجمل المترابطة context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "خطأ شائع جداً: نسيان إغلاق علامات التنصيص (\" أو ') مما يؤدي إلى ظهور SyntaxError وانهيار البرنامج."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\n# الطريقة الحديثة والمفضلة للمبرمجين (f-string)\nname == 'عمر'\nscore = 99\nprint(f'اللاعب {name} حصل على {score} نقطة')",
                "expected_output": "Correct execution output",
                "explanation": "تحدي: حاول إضافة كلمة \"مرحباً\" قبل النص المطبوع باستخدام أسلوب دمج النصوص (Concatenation) أو (f-strings)."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-7",
        "title": "الدرس 7: أخذ مدخلات المستخدم (input) - التفاعل الأول",
        "category": "أساسيات بايثون وبناء المنطق",
        "order_index": 7,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 10,
        "content": {
            "context": "لماذا نتعلم هذا؟ البرنامج الذي لا يأخذ بيانات من المستخدم هو برنامج ميت. نحتاج للسماح للمستخدم بإدخال اسمه ورقم حسابه.",
            "description": "دالة `input()` تفتح قناة اتصال بين البرنامج والمستخدم. عندما يرى الكمبيوتر هذا الأمر، فإنه يتوقف عن العمل تماماً وينتظر بصبر حتى يكتب المستخدم شيئاً ويضغط Enter. المعلومة المهمة هنا: كل ما يكتبه المستخدم سيعتبره الكمبيوتر (نصاً str) حتى لو كان أرقاماً! لذا إذا أردت استخدامه في حسابات، يجب تحويله لـ `int` أولاً.",
            "prototype": "input('الرسالة التي ستظهر للمستخدم:')",
            "parameters": "رسالة توضيحية اختيارية لتوجيه المستخدم.",
            "return_value": "يعيد النص الذي كتبه المستخدم كـ (str).",
            "example": "# سؤال المستخدم عن اسمه (تخيلي في المحرر)\n# user_name = input('ما هو اسمك؟ ')\n# print('مرحباً ' + user_name)\nprint('مرحباً زائرنا')"
        },
        "exercise_instructions": "في هذا التدريب سنطبع رسالة ترحيب ثابتة مباشرة. اطبع: Welcome User",
        "expected_output": "Welcome User",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 7: أخذ مدخلات المستخدم (input) - التفاعل الأول",
                "code": "# سؤال المستخدم عن اسمه (تخيلي في المحرر)\n# user_name = input('ما هو اسمك؟ ')\n# print('مرحباً ' + user_name)\nprint('مرحباً زائرنا')",
                "expected_output": "(Output specific to الدرس 7: أخذ مدخلات المستخدم (input) - التفاعل الأول)",
                "explanation": "في هذا الدرس (الدرس 7: أخذ مدخلات المستخدم (input) - التفاعل الأول)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "# سؤال المستخدم عن اسمه (تخيلي في المحرر\n# user_name = input('ما هو اسمك؟ ')\n# print('مرحباً ' + user_name)\nprint('مرحباً زائرنا')",
                "error_message": "SyntaxError in الدرس 7: أخذ مدخلات المستخدم (input) - التفاعل الأول",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 7: أخذ مدخلات المستخدم (input) - التفاعل الأول context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\n# سؤال المستخدم عن اسمه (تخيلي في المحرر)\n# user_name == input('ما هو اسمك؟ ')\n# print('مرحباً ' + user_name)\nprint('مرحباً زائرنا')",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "scenario"
    },
    {
        "lesson_slug": "python-8",
        "title": "الدرس 8: الشروط (if) - جعل الكمبيوتر يتخذ قرارات",
        "category": "أساسيات بايثون وبناء المنطق",
        "order_index": 8,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "لماذا نتعلم هذا؟ لكي نتحكم في مجرى اللعبة: إذا كانت طاقة اللاعب 0، اعرض رسالة (Game Over).",
            "description": "الجملة الشرطية `if` (إذا) هي العقل المدبر. تسأل بايثون سؤالاً منطقياً، فإذا كانت الإجابة نعم (True)، يتم تنفيذ الأوامر المتفرعة تحتها. يجب أن تترك مسافة فارغة (Indentation) قبل الأوامر التابعة للشرط لكي تفهم بايثون أنها تابعة له. خلف الكواليس، المعالج يستخدم تقنية (Branch Prediction) ليتوقع مسارك لتسريع التنفيذ!",
            "prototype": "if condition:\n    أوامر للتنفيذ",
            "parameters": "شرط أو سؤال منطقي يجب أن تكون نتيجته True.",
            "return_value": "تنفيذ الأوامر إذا وفقط إذا تحقق الشرط.",
            "example": "# التحقق من السن القانوني\nage = 20\nif age >= 18:\n    print('مسموح لك بالدخول')\n\nprint('انتهى الفحص')"
        },
        "exercise_instructions": "قم بعمل متغير x = 10، واستخدم شرط if ليطبع كلمة 'Big' إذا كان x أكبر من 5.",
        "expected_output": "Big",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 8: الشروط (if) - جعل الكمبيوتر يتخذ قرارات",
                "code": "# التحقق من السن القانوني\nage = 20\nif age >= 18:\n    print('مسموح لك بالدخول')\n\nprint('انتهى الفحص')",
                "expected_output": "(Output specific to الدرس 8: الشروط (if) - جعل الكمبيوتر يتخذ قرارات)",
                "explanation": "هذا الكود يستخدم الجمل الشرطية (If/Else) لاتخاذ قرارات ديناميكية بناءً على المعطيات، وهو العقل المدبر لأي برنامج ذكي."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "# التحقق من السن القانوني\nage = 20\nif age >= 18:\n    print('مسموح لك بالدخول'\n\nprint('انتهى الفحص')",
                "error_message": "SyntaxError in الدرس 8: الشروط (if) - جعل الكمبيوتر يتخذ قرارات",
                "explanation": "أغلب المبتدئين ينسون النقطتين الرأسيتين (:) في نهاية السطر الشرطي، أو يخطئون في المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 8: الشروط (if) - جعل الكمبيوتر يتخذ قرارات context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أغلب المبتدئين ينسون النقطتين الرأسيتين (:) في نهاية السطر الشرطي، أو يخطئون في المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\n# التحقق من السن القانوني\nage == 20\nif age >= 18:\n    print('مسموح لك بالدخول')\n\nprint('انتهى الفحص')",
                "expected_output": "Correct execution output",
                "explanation": "تحدي منطقي: أضف شرطاً إضافياً (elif) للتحقق مما إذا كانت القيمة تساوي صفراً بالتحديد."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-9",
        "title": "الدرس 9: الشروط المعاكسة (else) - ماذا لو لم يتحقق الشرط؟",
        "category": "أساسيات بايثون وبناء المنطق",
        "order_index": 9,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 10,
        "content": {
            "context": "لماذا نتعلم هذا؟ لتقديم خطة بديلة. إذا كانت كلمة المرور صحيحة ادخل، وإلا (else) أظهر رسالة خطأ.",
            "description": "كلمة `else` (وإلا) تأتي دائماً مصاحبة للـ `if` لالتقاط أي شيء لم ينجح في الشرط الأول. إنها بمثابة شبكة الأمان؛ تضمن لك أن هناك رداً دائماً على كل الحالات. الميزة الهندسية هنا أن الكود المتواجد في (if) و الكود المتواجد في (else) مستحيل أن يعملا معاً في نفس الوقت، يتم اختيار مسار واحد فقط.",
            "prototype": "if condition:\n    ... \nelse:\n    ...",
            "parameters": "لا تأخذ else أي شروط، فهي تقبل كل ما رفضته if.",
            "return_value": "تنفيذ الخطة البديلة.",
            "example": "password = '123'\nif password == 'admin':\n    print('تم الدخول بنجاح')\nelse:\n    print('كلمة المرور خاطئة')"
        },
        "exercise_instructions": "قم بعمل متغير y = 3. استخدم if/else: إذا كان y أكبر من 5 اطبع 'Yes'، وإلا اطبع 'No'.",
        "expected_output": "No",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 9: الشروط المعاكسة (else) - ماذا لو لم يتحقق الشرط؟",
                "code": "password = '123'\nif password == 'admin':\n    print('تم الدخول بنجاح')\nelse:\n    print('كلمة المرور خاطئة')",
                "expected_output": "(Output specific to الدرس 9: الشروط المعاكسة (else) - ماذا لو لم يتحقق الشرط؟)",
                "explanation": "هذا الكود يستخدم الجمل الشرطية (If/Else) لاتخاذ قرارات ديناميكية بناءً على المعطيات، وهو العقل المدبر لأي برنامج ذكي."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "password = '123'\nif password == 'admin':\n    print('تم الدخول بنجاح'\nelse:\n    print('كلمة المرور خاطئة')",
                "error_message": "SyntaxError in الدرس 9: الشروط المعاكسة (else) - ماذا لو لم يتحقق الشرط؟",
                "explanation": "أغلب المبتدئين ينسون النقطتين الرأسيتين (:) في نهاية السطر الشرطي، أو يخطئون في المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 9: الشروط المعاكسة (else) - ماذا لو لم يتحقق الشرط؟ context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أغلب المبتدئين ينسون النقطتين الرأسيتين (:) في نهاية السطر الشرطي، أو يخطئون في المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\npassword == '123'\nif password == 'admin':\n    print('تم الدخول بنجاح')\nelse:\n    print('كلمة المرور خاطئة')",
                "expected_output": "Correct execution output",
                "explanation": "تحدي منطقي: أضف شرطاً إضافياً (elif) للتحقق مما إذا كانت القيمة تساوي صفراً بالتحديد."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-10",
        "title": "الدرس 10: الشروط المتعددة (elif) - خيارات لا نهائية",
        "category": "أساسيات بايثون وبناء المنطق",
        "order_index": 10,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 12,
        "content": {
            "context": "لماذا نتعلم هذا؟ أحياناً يكون لدينا أكثر من مسارين. مثلاً تقدير الطالب: إذا كان 90 فهو امتياز، وإذا كان 80 جيد جداً، وإلا مقبول.",
            "description": "كلمة `elif` هي اختصار لـ (Else If). تمكننا من اختبار سلسلة من الشروط بالترتيب المكتوب. بايثون ستقرأ الشروط من الأعلى للأسفل، وبمجرد أن تجد شرطاً صحيحاً (True)، ستنفذ أوامره وتتجاهل باقي الشروط تماماً (لتوفير وقت المعالج). يمكنك وضع عدد لا نهائي من الـ `elif` بين الـ `if` الأولى والـ `else` الأخيرة.",
            "prototype": "if cond1:\n  ...\nelif cond2:\n  ...\nelse:\n  ...",
            "parameters": "سلسلة من الشروط المنطقية المترابطة.",
            "return_value": "اختيار مسار واحد فقط بناءً على أول شرط صحيح.",
            "example": "color = 'أصفر'\nif color == 'أحمر':\n    print('توقف')\nelif color == 'أصفر':\n    print('استعد')\nelse:\n    print('انطلق')"
        },
        "exercise_instructions": "اصنع متغيراً score = 85. استخدم if/elif لطباعة 'A' إذا كان >= 90، و 'B' إذا كان >= 80.",
        "expected_output": "B",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 10: الشروط المتعددة (elif) - خيارات لا نهائية",
                "code": "color = 'أصفر'\nif color == 'أحمر':\n    print('توقف')\nelif color == 'أصفر':\n    print('استعد')\nelse:\n    print('انطلق')",
                "expected_output": "(Output specific to الدرس 10: الشروط المتعددة (elif) - خيارات لا نهائية)",
                "explanation": "هذا الكود يستخدم الجمل الشرطية (If/Else) لاتخاذ قرارات ديناميكية بناءً على المعطيات، وهو العقل المدبر لأي برنامج ذكي."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "color = 'أصفر'\nif color == 'أحمر':\n    print('توقف'\nelif color == 'أصفر':\n    print('استعد')\nelse:\n    print('انطلق')",
                "error_message": "SyntaxError in الدرس 10: الشروط المتعددة (elif) - خيارات لا نهائية",
                "explanation": "أغلب المبتدئين ينسون النقطتين الرأسيتين (:) في نهاية السطر الشرطي، أو يخطئون في المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 10: الشروط المتعددة (elif) - خيارات لا نهائية context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أغلب المبتدئين ينسون النقطتين الرأسيتين (:) في نهاية السطر الشرطي، أو يخطئون في المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ncolor == 'أصفر'\nif color == 'أحمر':\n    print('توقف')\nelif color == 'أصفر':\n    print('استعد')\nelse:\n    print('انطلق')",
                "expected_output": "Correct execution output",
                "explanation": "تحدي منطقي: أضف شرطاً إضافياً (elif) للتحقق مما إذا كانت القيمة تساوي صفراً بالتحديد."
            }
        ],
        "lesson_type": "milestone"
    },
    {
        "lesson_slug": "python-11",
        "title": "الدرس 11: المعاملات المنطقية (and / or) - شروط معقدة",
        "category": "أساسيات بايثون وبناء المنطق",
        "order_index": 11,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 10,
        "content": {
            "context": "لماذا نتعلم هذا؟ للحالات التي تتطلب أكثر من شرط معاً. مثلاً: للحصول على رخصة القيادة يجب أن تكون فوق 18 (و) اجتزت الاختبار.",
            "description": "أدوات الربط (and) و (or) هي البوابات المنطقية. `and` صارمة جداً، تطلب أن تكون جميع الشروط صحيحة (True) لكي تعمل. أما `or` فهي متساهلة، يكفيها أن يكون شرط واحد فقط صحيحاً لكي تفتح لك الباب! تعتمد بايثون على ذكاء يسمي (Short-Circuit) لتسريع التنفيذ، حيث تتوقف عن قراءة بقية الشروط فور معرفة النتيجة الأولية.",
            "prototype": "condition1 and condition2\ncondition1 or condition2",
            "parameters": "مجموعة من الأسئلة المنطقية التي نربطها.",
            "return_value": "نتيجة نهائية (True / False) بناءً على قواعد البوابات.",
            "example": "age = 20\nhas_license = True\n\nif age >= 18 and has_license:\n    print('يمكنك استئجار السيارة')\nelse:\n    print('لا يمكنك ذلك')"
        },
        "exercise_instructions": "اطبع نتيجة هذا الشرط: True and False (ماذا تتوقع أن يعطيك؟)",
        "expected_output": "False",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 11: المعاملات المنطقية (and / or) - شروط معقدة",
                "code": "age = 20\nhas_license = True\n\nif age >= 18 and has_license:\n    print('يمكنك استئجار السيارة')\nelse:\n    print('لا يمكنك ذلك')",
                "expected_output": "(Output specific to الدرس 11: المعاملات المنطقية (and / or) - شروط معقدة)",
                "explanation": "في هذا الدرس (الدرس 11: المعاملات المنطقية (and / or) - شروط معقدة)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "age = 20\nhas_license = True\n\nif age >= 18 and has_license:\n    print('يمكنك استئجار السيارة'\nelse:\n    print('لا يمكنك ذلك')",
                "error_message": "SyntaxError in الدرس 11: المعاملات المنطقية (and / or) - شروط معقدة",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 11: المعاملات المنطقية (and / or) - شروط معقدة context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\nage == 20\nhas_license = True\n\nif age >= 18 and has_license:\n    print('يمكنك استئجار السيارة')\nelse:\n    print('لا يمكنك ذلك')",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-12",
        "title": "الدرس 12: القوائم (list) - صناديق التخزين العملاقة",
        "category": "أساسيات بايثون وبناء المنطق",
        "order_index": 12,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "لماذا نتعلم هذا؟ لحفظ مجموعة ضخمة من البيانات المترابطة معاً (مثل قائمة أصدقائك، أو عناصر سلة المشتريات) بدلاً من إنشاء 100 متغير.",
            "description": "الـ `list` (القائمة) هي مصفوفة ديناميكية. تبدأ بأقواس مربعة `[]`، وتفصل بين العناصر بفاصلة `,`. المذهل فيها أنها مرنة جداً (Mutable)، يمكنك إضافة عنصر، حذفه، أو ترتيب القائمة في أي وقت. في الذاكرة، بايثون تحجز مساحة إضافية خفية للقائمة لتستعد لأي عناصر قد تضيفها لاحقاً بسرعة فائقة.",
            "prototype": "[عنصر1, عنصر2, عنصر3]",
            "parameters": "أي عدد من العناصر (نصوص، أرقام، أو حتى قوائم أخرى بداخلها!).",
            "return_value": "صندوق واحد مرتب ومفهرس يحتوي على كل العناصر.",
            "example": "# إنشاء قائمة وإضافة عنصر جديد\ncart = ['لابتوب', 'ماوس']\ncart.append('لوحة مفاتيح')\nprint(cart)"
        },
        "exercise_instructions": "قم بإنشاء قائمة تحتوي على [1, 2, 3] واطبعها.",
        "expected_output": "[1, 2, 3]",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 12: القوائم (list) - صناديق التخزين العملاقة",
                "code": "# إنشاء قائمة وإضافة عنصر جديد\ncart = ['لابتوب', 'ماوس']\ncart.append('لوحة مفاتيح')\nprint(cart)",
                "expected_output": "(Output specific to الدرس 12: القوائم (list) - صناديق التخزين العملاقة)",
                "explanation": "المثال أعلاه يوضح قوة القوائم (Lists) في تخزين عدة عناصر متسلسلة في متغير واحد بدل إنشاء عشرات المتغيرات المستقلة."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "# إنشاء قائمة وإضافة عنصر جديد\ncart = ['لابتوب', 'ماوس'\ncart.append('لوحة مفاتيح'\nprint(cart)",
                "error_message": "SyntaxError in الدرس 12: القوائم (list) - صناديق التخزين العملاقة",
                "explanation": "أكثر الأخطاء شيوعاً هو محاولة الوصول لعنصر غير موجود في القائمة (IndexError)، تذكر دائماً أن العد يبدأ من الصفر (0)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 12: القوائم (list) - صناديق التخزين العملاقة context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر الأخطاء شيوعاً هو محاولة الوصول لعنصر غير موجود في القائمة (IndexError)، تذكر دائماً أن العد يبدأ من الصفر (0)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\n# إنشاء قائمة وإضافة عنصر جديد\ncart == ['لابتوب', 'ماوس']\ncart.append('لوحة مفاتيح')\nprint(cart)",
                "expected_output": "Correct execution output",
                "explanation": "تحدي القوائم: استخدم دالة append() لإضافة عنصر جديد في نهاية القائمة ثم قم بطباعة القائمة بالكامل."
            }
        ],
        "lesson_type": "debugging"
    },
    {
        "lesson_slug": "python-13",
        "title": "الدرس 13: الوصول لعناصر القائمة (Indexing)",
        "category": "أساسيات بايثون وبناء المنطق",
        "order_index": 13,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 12,
        "content": {
            "context": "لماذا نتعلم هذا؟ لكي نتمكن من استخراج بيانات محددة من القائمة، مثل جلب أول لاعب في الترتيب أو آخر رسالة نصية وصلتك.",
            "description": "عالم البرمجة يبدأ العد من الرقم `0`، وليس 1! فإذا كان لديك قائمة، فإن العنصر الأول موقعه (يُسمى Index) هو 0. والعنصر الثاني موقعه 1 وهكذا. السر الرائع في بايثون هو قدرتها على العد العكسي.. إذا أردت آخر عنصر في القائمة مباشرة، استخدم الموقع `-1` وسيجلب لك بايثون ما تريد فوراً.",
            "prototype": "list_name[index]",
            "parameters": "رقم الموقع المراد جلب بياناته (موجب من البداية، أو سالب من النهاية).",
            "return_value": "العنصر الموجود في ذلك الموقع تماماً.",
            "example": "winners = ['علي', 'سارة', 'فهد']\nprint('المركز الأول:', winners[0])\nprint('المركز الأخير:', winners[-1])"
        },
        "exercise_instructions": "لدينا قائمة nums = [10, 20, 30]. اطبع العنصر الأول (الذي قيمته 10).",
        "expected_output": "10",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 13: الوصول لعناصر القائمة (Indexing)",
                "code": "winners = ['علي', 'سارة', 'فهد']\nprint('المركز الأول:', winners[0])\nprint('المركز الأخير:', winners[-1])",
                "expected_output": "(Output specific to الدرس 13: الوصول لعناصر القائمة (Indexing))",
                "explanation": "في هذا الدرس (الدرس 13: الوصول لعناصر القائمة (Indexing))، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "winners = ['علي', 'سارة', 'فهد'\nprint('المركز الأول:', winners[0]\nprint('المركز الأخير:', winners[-1])",
                "error_message": "SyntaxError in الدرس 13: الوصول لعناصر القائمة (Indexing)",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 13: الوصول لعناصر القائمة (Indexing) context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\nwinners == ['علي', 'سارة', 'فهد']\nprint('المركز الأول:', winners[0])\nprint('المركز الأخير:', winners[-1])",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "ai_challenge"
    },
    {
        "lesson_slug": "python-14",
        "title": "الدرس 14: تكرار الأوامر بحلقة (for) - المحرك التلقائي",
        "category": "أساسيات بايثون وبناء المنطق",
        "order_index": 14,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "لماذا نتعلم هذا؟ الأتمتة! بدلاً من طباعة رسالة لـ 100 موظف بكتابة أمر الطباعة 100 مرة، حلقة for ستقوم بالعمل عنك في 3 أسطر.",
            "description": "حلقة `for` (لأجل كل عنصر) هي المحرك الآلي لبايثون. هي تأخذ مجموعة من العناصر (مثل قائمة) وتمر عليها عنصراً عنصراً بالترتيب، وفي كل مرة تضع العنصر في متغير مؤقت وتنفذ أوامرك عليه. هذه الحلقة محمية وذكية جداً (Iterator-based)، مما يعني أنه مستحيل أن تتخطى حدود القائمة وتسبب أخطاء في الذاكرة.",
            "prototype": "for item in list:\n    # نفذ الكود هنا",
            "parameters": "المتغير المؤقت `item`، والقائمة `list` التي نريد المرور عليها.",
            "return_value": "تنفيذ مجموعة من الأوامر بشكل تلقائي ومتكرر.",
            "example": "tasks = ['برمجة', 'تصميم', 'تسويق']\nfor task in tasks:\n    print('جاري العمل على:', task)"
        },
        "exercise_instructions": "استخدم حلقة for لطباعة الأرقام 1 و 2 و 3 (من قائمة) بحيث يطبع كل رقم في سطر.",
        "expected_output": "1\n2\n3",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 14: تكرار الأوامر بحلقة (for) - المحرك التلقائي",
                "code": "tasks = ['برمجة', 'تصميم', 'تسويق']\nfor task in tasks:\n    print('جاري العمل على:', task)",
                "expected_output": "(Output specific to الدرس 14: تكرار الأوامر بحلقة (for) - المحرك التلقائي)",
                "explanation": "حلقات التكرار (Loops) توفر عليك كتابة مئات الأسطر! هنا نستخدمها لتنفيذ أمر معين عدة مرات بشكل آلي."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "tasks = ['برمجة', 'تصميم', 'تسويق'\nfor task in tasks:\n    print('جاري العمل على:', task",
                "error_message": "SyntaxError in الدرس 14: تكرار الأوامر بحلقة (for) - المحرك التلقائي",
                "explanation": "في حلقة (while)، من أخطر الأخطاء هو نسيان تحديث العداد، مما يؤدي إلى الدخول في \"حلقة لا نهائية\" (Infinite Loop) وتوقف الجهاز."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 14: تكرار الأوامر بحلقة (for) - المحرك التلقائي context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "في حلقة (while)، من أخطر الأخطاء هو نسيان تحديث العداد، مما يؤدي إلى الدخول في \"حلقة لا نهائية\" (Infinite Loop) وتوقف الجهاز."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ntasks == ['برمجة', 'تصميم', 'تسويق']\nfor task in tasks:\n    print('جاري العمل على:', task)",
                "expected_output": "Correct execution output",
                "explanation": "تحدي التكرار: قم بتعديل الحلقة بحيث تتخطى (continue) التنفيذ إذا كان الرقم قابلاً للقسمة على 2."
            }
        ],
        "lesson_type": "mini_mission"
    },
    {
        "lesson_slug": "python-15",
        "title": "الدرس 15: دالة المدى (range) - توليد الأرقام",
        "category": "أساسيات بايثون وبناء المنطق",
        "order_index": 15,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 10,
        "content": {
            "context": "لماذا نتعلم هذا؟ إذا احتجت أن تكرر شيئاً مليون مرة، لا يعقل أن تكتب قائمة بها مليون رقم يدوياً! دالة range تصنعها لك.",
            "description": "دالة `range` هي مصنع الأرقام السحري المتوافق تماماً مع حلقة `for`. بمجرد أن تعطيها رقماً (مثلاً 5)، ستولد الأرقام من 0 إلى 4 (الرقم الأخير لا يدخل في الحسبة). العبقرية الهندسية فيها أنها لا تحجز مساحة مليون رقم في الذاكرة! بل تولد الرقم اللحظي الذي تحتاجه فقط (Lazy Evaluation) لتوفير الـ RAM بشكل خيالي.",
            "prototype": "range(start, stop, step)",
            "parameters": "بداية العد، نهاية العد (غير مشمولة)، ومقدار القفزة.",
            "return_value": "كائن مُولد ينتج سلسلة رقمية عند الطلب.",
            "example": "# العد من 0 إلى 2\nfor i in range(3):\n    print('التكرار رقم', i)"
        },
        "exercise_instructions": "استخدم حلقة for مع دالة range(2) لطباعة الأرقام من 0 إلى 1، كل رقم في سطر.",
        "expected_output": "0\n1",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 15: دالة المدى (range) - توليد الأرقام",
                "code": "# العد من 0 إلى 2\nfor i in range(3):\n    print('التكرار رقم', i)",
                "expected_output": "(Output specific to الدرس 15: دالة المدى (range) - توليد الأرقام)",
                "explanation": "في هذا الدرس (الدرس 15: دالة المدى (range) - توليد الأرقام)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "# العد من 0 إلى 2\nfor i in range(3:\n    print('التكرار رقم', i)",
                "error_message": "SyntaxError in الدرس 15: دالة المدى (range) - توليد الأرقام",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 15: دالة المدى (range) - توليد الأرقام context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\n# العد من 0 إلى 2\nfor i in range(3):\n    print('التكرار رقم', i)",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "sandbox"
    },
    {
        "lesson_slug": "python-16",
        "title": "الدرس 16: الحلقات المشروطة (while) - الاستمرار طالما..",
        "category": "أساسيات بايثون وبناء المنطق",
        "order_index": 16,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 12,
        "content": {
            "context": "لماذا نتعلم هذا؟ لعمل شاشة انتظار للعبة تستمر في العمل (طالما) أن اللاعب لم يضغط زر 'ابدأ'.",
            "description": "حلقة `while` (طالما) تعتمد على شرط بدلاً من قائمة. هي تسأل نفسها قبل كل جولة: 'هل الشرط لا يزال True؟'، إذا نعم، تستمر في الدوران للأبد! يجب على المهندس دائماً التأكد من وجود كود يغير حالة الشرط إلى False بداخل الحلقة، وإلا ستعلق في (حلقة لا نهائية Infinite Loop) قد تؤدي لتجميد المعالج وتوقف السيرفر.",
            "prototype": "while condition:\n    # الأوامر\n    # تحديث الشرط",
            "parameters": "شرط منطقي يتم فحصه قبل بدء أي جولة دوران جديدة.",
            "return_value": "الاستمرار في التنفيذ طالما أن الشرط متوفر.",
            "example": "battery = 3\nwhile battery > 0:\n    print('الجهاز يعمل')\n    battery -= 1  # إنقاص الطاقة تدريجياً\nprint('الجهاز انطفأ')"
        },
        "exercise_instructions": "قم بعمل متغير n = 1. استخدم while لطباعة n ثم زده بـ 1، طالما أن n أصغر من 3.",
        "expected_output": "1\n2",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 16: الحلقات المشروطة (while) - الاستمرار طالما..",
                "code": "battery = 3\nwhile battery > 0:\n    print('الجهاز يعمل')\n    battery -= 1  # إنقاص الطاقة تدريجياً\nprint('الجهاز انطفأ')",
                "expected_output": "(Output specific to الدرس 16: الحلقات المشروطة (while) - الاستمرار طالما..)",
                "explanation": "حلقات التكرار (Loops) توفر عليك كتابة مئات الأسطر! هنا نستخدمها لتنفيذ أمر معين عدة مرات بشكل آلي."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "battery = 3\nwhile battery > 0:\n    print('الجهاز يعمل'\n    battery -= 1  # إنقاص الطاقة تدريجياً\nprint('الجهاز انطفأ')",
                "error_message": "SyntaxError in الدرس 16: الحلقات المشروطة (while) - الاستمرار طالما..",
                "explanation": "في حلقة (while)، من أخطر الأخطاء هو نسيان تحديث العداد، مما يؤدي إلى الدخول في \"حلقة لا نهائية\" (Infinite Loop) وتوقف الجهاز."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 16: الحلقات المشروطة (while) - الاستمرار طالما.. context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "في حلقة (while)، من أخطر الأخطاء هو نسيان تحديث العداد، مما يؤدي إلى الدخول في \"حلقة لا نهائية\" (Infinite Loop) وتوقف الجهاز."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\nbattery == 3\nwhile battery > 0:\n    print('الجهاز يعمل')\n    battery -= 1  # إنقاص الطاقة تدريجياً\nprint('الجهاز انطفأ')",
                "expected_output": "Correct execution output",
                "explanation": "تحدي التكرار: قم بتعديل الحلقة بحيث تتخطى (continue) التنفيذ إذا كان الرقم قابلاً للقسمة على 2."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-17",
        "title": "الدرس 17: القواميس (dict) - بيانات كالمحترفين",
        "category": "أساسيات بايثون وبناء المنطق",
        "order_index": 17,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "لماذا نتعلم هذا؟ لحفظ بيانات معقدة (ملف شخصي لمستخدم يحتوي على: الاسم، العمر، البريد) بطريقة منظمة يمكن البحث فيها بلمح البصر.",
            "description": "الـ `dict` (القاموس) هو أهم وأسرع هيكل بيانات في بايثون! يعمل بنظام (المفتاح والقيمة Key-Value). أنت لا تبحث فيه برقم الموقع `0` أو `1`، بل تبحث باسم المفتاح `name` ليعطيك القيمة `Ali`. مبني هندسياً باستخدام تقنية (Hash Tables)، مما يجعله قادراً على البحث في ملايين السجلات في جزء من الثانية O(1).",
            "prototype": "{'key': 'value'}",
            "parameters": "أزواج من المفاتيح والقيم بداخل الأقواس المتعرجة {}.",
            "return_value": "جدول بيانات فائق التنظيم والسرعة.",
            "example": "user = {\n    'name': 'أحمد',\n    'role': 'أدمن'\n}\nprint(user['name']) # طباعة أحمد"
        },
        "exercise_instructions": "أنشئ قاموساً يحتوي على المفتاح 'color' وقيمته 'red'، ثم قم بطباعته.",
        "expected_output": "{'color': 'red'}",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 17: القواميس (dict) - بيانات كالمحترفين",
                "code": "user = {\n    'name': 'أحمد',\n    'role': 'أدمن'\n}\nprint(user['name']) # طباعة أحمد",
                "expected_output": "(Output specific to الدرس 17: القواميس (dict) - بيانات كالمحترفين)",
                "explanation": "القاموس (Dictionary) يسمح لك بربط البيانات بمفاتيح (Keys) واضحة بدلاً من مجرد ترتيب رقمي، وهذا أساسي في بناء قواعد البيانات."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "user = {\n    'name': 'أحمد',\n    'role': 'أدمن'\n}\nprint(user['name' # طباعة أحمد",
                "error_message": "SyntaxError in الدرس 17: القواميس (dict) - بيانات كالمحترفين",
                "explanation": "الخطأ الشائع هو محاولة الوصول لمفتاح (Key) غير موجود في القاموس (KeyError). استخدم طريقة .get() لتجنب ذلك."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 17: القواميس (dict) - بيانات كالمحترفين context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "الخطأ الشائع هو محاولة الوصول لمفتاح (Key) غير موجود في القاموس (KeyError). استخدم طريقة .get() لتجنب ذلك."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\nuser == {\n    'name': 'أحمد',\n    'role': 'أدمن'\n}\nprint(user['name']) # طباعة أحمد",
                "expected_output": "Correct execution output",
                "explanation": "تحدي القواميس: أضف مفتاحاً جديداً يسمى \"status\" واعطه القيمة \"active\" ثم اطبعه."
            }
        ],
        "lesson_type": "code_reading"
    },
    {
        "lesson_slug": "python-18",
        "title": "الدرس 18: الدوال (functions) - مصانعك البرمجية الخاصة",
        "category": "أساسيات بايثون وبناء المنطق",
        "order_index": 18,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "لماذا نتعلم هذا؟ لكي لا نعيد اختراع العجلة! إذا كان لديك كود يرسل إيميلاً وتستخدمه كثيراً، ضعه في دالة واستدعه بكلمة واحدة متى شئت.",
            "description": "كلمة `def` (اختصار لـ Define) تخلق دالة (Function) وهي كبسولة برمجية تحتوي على كود لا يعمل إلا إذا ناديته باسمه! الدوال هي سر التنظيم (Modularity) للمشاريع الكبيرة. بايثون تتعامل مع الدوال كأنها كائنات مميزة (First-class citizens)، يمكن تمريرها لمتغيرات أخرى. الدوال توفر مساحة الذاكرة وتمنع تكرار الأكواد المزعج.",
            "prototype": "def function_name():\n    # أوامر المصنع",
            "parameters": "اسم الدالة متبوعاً بأقواس يمكن أن تحتوي على مدخلات (المواد الخام).",
            "return_value": "القيام بالمهمة بصمت وإعطاء نتيجة نهائية.",
            "example": "def greet_user():\n    print('أهلاً بك في تطبيقنا')\n\n# هنا نقوم بالاستدعاء والتشغيل الفعلي\ngreet_user()"
        },
        "exercise_instructions": "قم بتعريف دالة تسمى say_hi تطبع كلمة 'Hi'، ثم قم باستدعائها لتشتغل.",
        "expected_output": "Hi",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 18: الدوال (functions) - مصانعك البرمجية الخاصة",
                "code": "def greet_user():\n    print('أهلاً بك في تطبيقنا')\n\n# هنا نقوم بالاستدعاء والتشغيل الفعلي\ngreet_user()",
                "expected_output": "(Output specific to الدرس 18: الدوال (functions) - مصانعك البرمجية الخاصة)",
                "explanation": "الدوال (Functions) تساعدنا في تغليف مجموعة من الأوامر تحت اسم واحد، لنتمكن من إعادة استخدامها لاحقاً وتجنب التكرار."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def greet_user(:\n    print('أهلاً بك في تطبيقنا')\n\n# هنا نقوم بالاستدعاء والتشغيل الفعلي\ngreet_user()",
                "error_message": "SyntaxError in الدرس 18: الدوال (functions) - مصانعك البرمجية الخاصة",
                "explanation": "تذكر دائماً أن الدالة لا تعمل بمجرد كتابتها! يجب عليك \"استدعاء\" الدالة بكتابة اسمها مع الأقواس () لكي يتم تشغيلها."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 18: الدوال (functions) - مصانعك البرمجية الخاصة context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "تذكر دائماً أن الدالة لا تعمل بمجرد كتابتها! يجب عليك \"استدعاء\" الدالة بكتابة اسمها مع الأقواس () لكي يتم تشغيلها."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef greet_user():\n    print('أهلاً بك في تطبيقنا')\n\n# هنا نقوم بالاستدعاء والتشغيل الفعلي\ngreet_user()",
                "expected_output": "Correct execution output",
                "explanation": "تحدي الدوال: أضف مدخلاً جديداً (Parameter) للدالة وقم باستخدامه داخل الأوامر."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-19",
        "title": "الدرس 19: مدخلات ومخرجات الدوال (Parameters & Return)",
        "category": "أساسيات بايثون وبناء المنطق",
        "order_index": 19,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "لماذا نتعلم هذا؟ الآلة الحاسبة تحتاج أن نعطيها الأرقام (المدخلات)، وتُظهر لنا الناتج النهائي (المخرجات) لنستخدمه لاحقاً.",
            "description": "المصنع القوي يحتاج مواد خام (Parameters) لينتج شيئاً، ويحتاج أن يصدر منتجه للخارج (Return). أمر `return` أمر خطير وفعال؛ بمجرد أن تقرأه بايثون، فإنها تقذف النتيجة للخارج، وتُنهي الدالة فوراً وتخرج منها (تدمر الذاكرة المؤقتة للدالة). إذا استخدمت `print` فقط، فلن تتمكن من الاحتفاظ بالناتج في متغير لاستخدامه مرة أخرى.",
            "prototype": "def add(a, b):\n    return a + b",
            "parameters": "a, b: متغيرات مؤقتة تعيش داخل الدالة فقط.",
            "return_value": "كلمة return تُرجع القيمة للمبرمج ليحفظها.",
            "example": "def double_number(num):\n    return num * 2\n\n# هنا نحتفظ بالناتج في متغير للاستفادة منه لاحقاً\nresult = double_number(5)\nprint(result) # 10"
        },
        "exercise_instructions": "اصنع دالة تسمى get_five تعود دائماً بالرقم 5 باستخدام return، ثم اطبع استدعاء الدالة.",
        "expected_output": "5",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 19: مدخلات ومخرجات الدوال (Parameters & Return)",
                "code": "def double_number(num):\n    return num * 2\n\n# هنا نحتفظ بالناتج في متغير للاستفادة منه لاحقاً\nresult = double_number(5)\nprint(result) # 10",
                "expected_output": "(Output specific to الدرس 19: مدخلات ومخرجات الدوال (Parameters & Return))",
                "explanation": "الدوال (Functions) تساعدنا في تغليف مجموعة من الأوامر تحت اسم واحد، لنتمكن من إعادة استخدامها لاحقاً وتجنب التكرار."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def double_number(num:\n    return num * 2\n\n# هنا نحتفظ بالناتج في متغير للاستفادة منه لاحقاً\nresult = double_number(5)\nprint(result) # 10",
                "error_message": "SyntaxError in الدرس 19: مدخلات ومخرجات الدوال (Parameters & Return)",
                "explanation": "تذكر دائماً أن الدالة لا تعمل بمجرد كتابتها! يجب عليك \"استدعاء\" الدالة بكتابة اسمها مع الأقواس () لكي يتم تشغيلها."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 19: مدخلات ومخرجات الدوال (Parameters & Return) context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "تذكر دائماً أن الدالة لا تعمل بمجرد كتابتها! يجب عليك \"استدعاء\" الدالة بكتابة اسمها مع الأقواس () لكي يتم تشغيلها."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef double_number(num):\n    return num * 2\n\n# هنا نحتفظ بالناتج في متغير للاستفادة منه لاحقاً\nresult == double_number(5)\nprint(result) # 10",
                "expected_output": "Correct execution output",
                "explanation": "تحدي الدوال: أضف مدخلاً جديداً (Parameter) للدالة وقم باستخدامه داخل الأوامر."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-20",
        "title": "الدرس 20: مشروع التخرج (الفصل الأول) - حاسبة العمر الذكية",
        "category": "أساسيات بايثون وبناء المنطق",
        "order_index": 20,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 20,
        "content": {
            "context": "لماذا نتعلم هذا؟ المهندس الحقيقي هو من يدمج جميع الأدوات (متغيرات، شروط، دوال) لبناء منتج برمجي متكامل.",
            "description": "في هذا الدرس الختامي للفصل الأول، نجمع كل ما تعلمناه. سنستخدم الدوال للتنظيم، والرياضيات (int) لحساب فارق التواريخ، والشروط (if/else) لاتخاذ قرار بناءً على عمر المستخدم، وسندمج النصوص (str) لعرض النتيجة النهائية! البرمجة ليست مجرد حفظ للأوامر، بل هي الفن المعماري لدمج هذه القطع (كأحجار الليجو) لبناء شيء ذكي وقابل للتوسع.",
            "prototype": "Integrate: def, int, if, return, f-strings",
            "parameters": "دمج المفاهيم البرمجية المتعددة.",
            "return_value": "برنامج مصغر يعمل بكفاءة تامة.",
            "example": "def check_age(birth_year):\n    age = 2024 - birth_year\n    if age >= 18:\n        return f'عمرك {age}، يمكنك القيادة'\n    else:\n        return f'عمرك {age}، أنت قاصر'\n\nprint(check_age(2000))"
        },
        "exercise_instructions": "اكتب print('Chap 1 Done') احتفالاً بإنهاء الفصل الأول من الأساسيات!",
        "expected_output": "Chap 1 Done",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 20: مشروع التخرج (الفصل الأول) - حاسبة العمر الذكية",
                "code": "def check_age(birth_year):\n    age = 2024 - birth_year\n    if age >= 18:\n        return f'عمرك {age}، يمكنك القيادة'\n    else:\n        return f'عمرك {age}، أنت قاصر'\n\nprint(check_age(2000))",
                "expected_output": "(Output specific to الدرس 20: مشروع التخرج (الفصل الأول) - حاسبة العمر الذكية)",
                "explanation": "في هذا الدرس (الدرس 20: مشروع التخرج (الفصل الأول) - حاسبة العمر الذكية)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def check_age(birth_year:\n    age = 2024 - birth_year\n    if age >= 18:\n        return f'عمرك {age}، يمكنك القيادة'\n    else:\n        return f'عمرك {age}، أنت قاصر'\n\nprint(check_age(2000))",
                "error_message": "SyntaxError in الدرس 20: مشروع التخرج (الفصل الأول) - حاسبة العمر الذكية",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 20: مشروع التخرج (الفصل الأول) - حاسبة العمر الذكية context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef check_age(birth_year):\n    age == 2024 - birth_year\n    if age >= 18:\n        return f'عمرك {age}، يمكنك القيادة'\n    else:\n        return f'عمرك {age}، أنت قاصر'\n\nprint(check_age(2000))",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "milestone"
    },
    {
        "lesson_slug": "python-21",
        "title": "الدرس 21: مراجعة أساسيات بايثون",
        "category": "المستوى المتوسط",
        "order_index": 21,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"مراجعة أساسيات بايثون\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن مراجعة أساسيات بايثون. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_21() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ مراجعة أساسيات بايثون",
            "return_value": "احتراف وفهم مراجعة أساسيات بايثون وتطبيقه في مشاريعك.",
            "example": "def practice_21():\\n      print(\"Welcome to مراجعة أساسيات بايثون\")\\n  \\n  practice_21()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس مراجعة أساسيات بايثون لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 21: مراجعة أساسيات بايثون",
                "code": "def practice_21():\\n      print(\"Welcome to مراجعة أساسيات بايثون\")\\n  \\n  practice_21()",
                "expected_output": "(Output specific to الدرس 21: مراجعة أساسيات بايثون)",
                "explanation": "في هذا الدرس (الدرس 21: مراجعة أساسيات بايثون)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_21(:\\n      print(Welcome to مراجعة أساسيات بايثون\")\\n  \\n  practice_21()",
                "error_message": "SyntaxError in الدرس 21: مراجعة أساسيات بايثون",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 21: مراجعة أساسيات بايثون context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_21():\\n      print(\"Welcome to مراجعة أساسيات بايثون\")\\n  \\n  practice_21()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-22",
        "title": "الدرس 22: القوائم (Lists) المتقدمة",
        "category": "المستوى المتوسط",
        "order_index": 22,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"القوائم (Lists) المتقدمة\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن القوائم (Lists) المتقدمة. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_22() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ القوائم (Lists) المتقدمة",
            "return_value": "احتراف وفهم القوائم (Lists) المتقدمة وتطبيقه في مشاريعك.",
            "example": "def practice_22():\\n      print(\"Welcome to القوائم (Lists) المتقدمة\")\\n  \\n  practice_22()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس القوائم (Lists) المتقدمة لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 22: القوائم (Lists) المتقدمة",
                "code": "def practice_22():\\n      print(\"Welcome to القوائم (Lists) المتقدمة\")\\n  \\n  practice_22()",
                "expected_output": "(Output specific to الدرس 22: القوائم (Lists) المتقدمة)",
                "explanation": "المثال أعلاه يوضح قوة القوائم (Lists) في تخزين عدة عناصر متسلسلة في متغير واحد بدل إنشاء عشرات المتغيرات المستقلة."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_22(:\\n      print(Welcome to القوائم (Lists) المتقدمة\")\\n  \\n  practice_22()",
                "error_message": "SyntaxError in الدرس 22: القوائم (Lists) المتقدمة",
                "explanation": "أكثر الأخطاء شيوعاً هو محاولة الوصول لعنصر غير موجود في القائمة (IndexError)، تذكر دائماً أن العد يبدأ من الصفر (0)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 22: القوائم (Lists) المتقدمة context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر الأخطاء شيوعاً هو محاولة الوصول لعنصر غير موجود في القائمة (IndexError)، تذكر دائماً أن العد يبدأ من الصفر (0)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_22():\\n      print(\"Welcome to القوائم (Lists) المتقدمة\")\\n  \\n  practice_22()",
                "expected_output": "Correct execution output",
                "explanation": "تحدي القوائم: استخدم دالة append() لإضافة عنصر جديد في نهاية القائمة ثم قم بطباعة القائمة بالكامل."
            }
        ],
        "lesson_type": "scenario"
    },
    {
        "lesson_slug": "python-23",
        "title": "الدرس 23: عمليات البحث في القوائم",
        "category": "المستوى المتوسط",
        "order_index": 23,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"عمليات البحث في القوائم\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن عمليات البحث في القوائم. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_23() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ عمليات البحث في القوائم",
            "return_value": "احتراف وفهم عمليات البحث في القوائم وتطبيقه في مشاريعك.",
            "example": "def practice_23():\\n      print(\"Welcome to عمليات البحث في القوائم\")\\n  \\n  practice_23()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس عمليات البحث في القوائم لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 23: عمليات البحث في القوائم",
                "code": "def practice_23():\\n      print(\"Welcome to عمليات البحث في القوائم\")\\n  \\n  practice_23()",
                "expected_output": "(Output specific to الدرس 23: عمليات البحث في القوائم)",
                "explanation": "المثال أعلاه يوضح قوة القوائم (Lists) في تخزين عدة عناصر متسلسلة في متغير واحد بدل إنشاء عشرات المتغيرات المستقلة."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_23(:\\n      print(Welcome to عمليات البحث في القوائم\")\\n  \\n  practice_23()",
                "error_message": "SyntaxError in الدرس 23: عمليات البحث في القوائم",
                "explanation": "أكثر الأخطاء شيوعاً هو محاولة الوصول لعنصر غير موجود في القائمة (IndexError)، تذكر دائماً أن العد يبدأ من الصفر (0)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 23: عمليات البحث في القوائم context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر الأخطاء شيوعاً هو محاولة الوصول لعنصر غير موجود في القائمة (IndexError)، تذكر دائماً أن العد يبدأ من الصفر (0)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_23():\\n      print(\"Welcome to عمليات البحث في القوائم\")\\n  \\n  practice_23()",
                "expected_output": "Correct execution output",
                "explanation": "تحدي القوائم: استخدم دالة append() لإضافة عنصر جديد في نهاية القائمة ثم قم بطباعة القائمة بالكامل."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-24",
        "title": "الدرس 24: القواميس (Dictionaries)",
        "category": "المستوى المتوسط",
        "order_index": 24,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"القواميس (Dictionaries)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن القواميس (Dictionaries). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_24() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ القواميس (Dictionaries)",
            "return_value": "احتراف وفهم القواميس (Dictionaries) وتطبيقه في مشاريعك.",
            "example": "def practice_24():\\n      print(\"Welcome to القواميس (Dictionaries)\")\\n  \\n  practice_24()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس القواميس (Dictionaries) لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 24: القواميس (Dictionaries)",
                "code": "def practice_24():\\n      print(\"Welcome to القواميس (Dictionaries)\")\\n  \\n  practice_24()",
                "expected_output": "(Output specific to الدرس 24: القواميس (Dictionaries))",
                "explanation": "القاموس (Dictionary) يسمح لك بربط البيانات بمفاتيح (Keys) واضحة بدلاً من مجرد ترتيب رقمي، وهذا أساسي في بناء قواعد البيانات."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_24(:\\n      print(Welcome to القواميس (Dictionaries)\")\\n  \\n  practice_24()",
                "error_message": "SyntaxError in الدرس 24: القواميس (Dictionaries)",
                "explanation": "الخطأ الشائع هو محاولة الوصول لمفتاح (Key) غير موجود في القاموس (KeyError). استخدم طريقة .get() لتجنب ذلك."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 24: القواميس (Dictionaries) context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "الخطأ الشائع هو محاولة الوصول لمفتاح (Key) غير موجود في القاموس (KeyError). استخدم طريقة .get() لتجنب ذلك."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_24():\\n      print(\"Welcome to القواميس (Dictionaries)\")\\n  \\n  practice_24()",
                "expected_output": "Correct execution output",
                "explanation": "تحدي القواميس: أضف مفتاحاً جديداً يسمى \"status\" واعطه القيمة \"active\" ثم اطبعه."
            }
        ],
        "lesson_type": "debugging"
    },
    {
        "lesson_slug": "python-25",
        "title": "الدرس 25: المجموعات (Sets)",
        "category": "المستوى المتوسط",
        "order_index": 25,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"المجموعات (Sets)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن المجموعات (Sets). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_25() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ المجموعات (Sets)",
            "return_value": "احتراف وفهم المجموعات (Sets) وتطبيقه في مشاريعك.",
            "example": "def practice_25():\\n      print(\"Welcome to المجموعات (Sets)\")\\n  \\n  practice_25()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس المجموعات (Sets) لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 25: المجموعات (Sets)",
                "code": "def practice_25():\\n      print(\"Welcome to المجموعات (Sets)\")\\n  \\n  practice_25()",
                "expected_output": "(Output specific to الدرس 25: المجموعات (Sets))",
                "explanation": "في هذا الدرس (الدرس 25: المجموعات (Sets))، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_25(:\\n      print(Welcome to المجموعات (Sets)\")\\n  \\n  practice_25()",
                "error_message": "SyntaxError in الدرس 25: المجموعات (Sets)",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 25: المجموعات (Sets) context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_25():\\n      print(\"Welcome to المجموعات (Sets)\")\\n  \\n  practice_25()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "capstone"
    },
    {
        "lesson_slug": "python-26",
        "title": "الدرس 26: مقارنة البيانات",
        "category": "المستوى المتوسط",
        "order_index": 26,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"مقارنة البيانات\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن مقارنة البيانات. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_26() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ مقارنة البيانات",
            "return_value": "احتراف وفهم مقارنة البيانات وتطبيقه في مشاريعك.",
            "example": "def practice_26():\\n      print(\"Welcome to مقارنة البيانات\")\\n  \\n  practice_26()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس مقارنة البيانات لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 26: مقارنة البيانات",
                "code": "def practice_26():\\n      print(\"Welcome to مقارنة البيانات\")\\n  \\n  practice_26()",
                "expected_output": "(Output specific to الدرس 26: مقارنة البيانات)",
                "explanation": "في هذا الدرس (الدرس 26: مقارنة البيانات)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_26(:\\n      print(Welcome to مقارنة البيانات\")\\n  \\n  practice_26()",
                "error_message": "SyntaxError in الدرس 26: مقارنة البيانات",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 26: مقارنة البيانات context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_26():\\n      print(\"Welcome to مقارنة البيانات\")\\n  \\n  practice_26()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "ai_challenge"
    },
    {
        "lesson_slug": "python-27",
        "title": "الدرس 27: الدوال (Functions) المتقدمة",
        "category": "المستوى المتوسط",
        "order_index": 27,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"الدوال (Functions) المتقدمة\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن الدوال (Functions) المتقدمة. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_27() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ الدوال (Functions) المتقدمة",
            "return_value": "احتراف وفهم الدوال (Functions) المتقدمة وتطبيقه في مشاريعك.",
            "example": "def practice_27():\\n      print(\"Welcome to الدوال (Functions) المتقدمة\")\\n  \\n  practice_27()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس الدوال (Functions) المتقدمة لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 27: الدوال (Functions) المتقدمة",
                "code": "def practice_27():\\n      print(\"Welcome to الدوال (Functions) المتقدمة\")\\n  \\n  practice_27()",
                "expected_output": "(Output specific to الدرس 27: الدوال (Functions) المتقدمة)",
                "explanation": "الدوال (Functions) تساعدنا في تغليف مجموعة من الأوامر تحت اسم واحد، لنتمكن من إعادة استخدامها لاحقاً وتجنب التكرار."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_27(:\\n      print(Welcome to الدوال (Functions) المتقدمة\")\\n  \\n  practice_27()",
                "error_message": "SyntaxError in الدرس 27: الدوال (Functions) المتقدمة",
                "explanation": "تذكر دائماً أن الدالة لا تعمل بمجرد كتابتها! يجب عليك \"استدعاء\" الدالة بكتابة اسمها مع الأقواس () لكي يتم تشغيلها."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 27: الدوال (Functions) المتقدمة context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "تذكر دائماً أن الدالة لا تعمل بمجرد كتابتها! يجب عليك \"استدعاء\" الدالة بكتابة اسمها مع الأقواس () لكي يتم تشغيلها."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_27():\\n      print(\"Welcome to الدوال (Functions) المتقدمة\")\\n  \\n  practice_27()",
                "expected_output": "Correct execution output",
                "explanation": "تحدي الدوال: أضف مدخلاً جديداً (Parameter) للدالة وقم باستخدامه داخل الأوامر."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-28",
        "title": "الدرس 28: المتغيرات المحلية والعامة",
        "category": "المستوى المتوسط",
        "order_index": 28,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"المتغيرات المحلية والعامة\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن المتغيرات المحلية والعامة. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_28() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ المتغيرات المحلية والعامة",
            "return_value": "احتراف وفهم المتغيرات المحلية والعامة وتطبيقه في مشاريعك.",
            "example": "def practice_28():\\n      print(\"Welcome to المتغيرات المحلية والعامة\")\\n  \\n  practice_28()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس المتغيرات المحلية والعامة لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 28: المتغيرات المحلية والعامة",
                "code": "def practice_28():\\n      print(\"Welcome to المتغيرات المحلية والعامة\")\\n  \\n  practice_28()",
                "expected_output": "(Output specific to الدرس 28: المتغيرات المحلية والعامة)",
                "explanation": "في هذا الدرس (الدرس 28: المتغيرات المحلية والعامة)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_28(:\\n      print(Welcome to المتغيرات المحلية والعامة\")\\n  \\n  practice_28()",
                "error_message": "SyntaxError in الدرس 28: المتغيرات المحلية والعامة",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 28: المتغيرات المحلية والعامة context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_28():\\n      print(\"Welcome to المتغيرات المحلية والعامة\")\\n  \\n  practice_28()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "mini_mission"
    },
    {
        "lesson_slug": "python-29",
        "title": "الدرس 29: البرمجة الكائنية (OOP) مقدمة",
        "category": "المستوى المتوسط",
        "order_index": 29,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"البرمجة الكائنية (OOP) مقدمة\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن البرمجة الكائنية (OOP) مقدمة. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_29() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ البرمجة الكائنية (OOP) مقدمة",
            "return_value": "احتراف وفهم البرمجة الكائنية (OOP) مقدمة وتطبيقه في مشاريعك.",
            "example": "def practice_29():\\n      print(\"Welcome to البرمجة الكائنية (OOP) مقدمة\")\\n  \\n  practice_29()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس البرمجة الكائنية (OOP) مقدمة لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 29: البرمجة الكائنية (OOP) مقدمة",
                "code": "def practice_29():\\n      print(\"Welcome to البرمجة الكائنية (OOP) مقدمة\")\\n  \\n  practice_29()",
                "expected_output": "(Output specific to الدرس 29: البرمجة الكائنية (OOP) مقدمة)",
                "explanation": "هذا الكود هو تطبيق مباشر لمفهوم (Object Oriented Programming)، حيث ننشئ مخططاً (Class) ثم نصنع منه كائنات (Objects)."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_29(:\\n      print(Welcome to البرمجة الكائنية (OOP) مقدمة\")\\n  \\n  practice_29()",
                "error_message": "SyntaxError in الدرس 29: البرمجة الكائنية (OOP) مقدمة",
                "explanation": "نسيان كتابة (self) كأول مدخل في دوال الكلاس هو خطأ يومي للمبتدئين! (self) هو ما يربط الدالة بالكائن نفسه."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 29: البرمجة الكائنية (OOP) مقدمة context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "نسيان كتابة (self) كأول مدخل في دوال الكلاس هو خطأ يومي للمبتدئين! (self) هو ما يربط الدالة بالكائن نفسه."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_29():\\n      print(\"Welcome to البرمجة الكائنية (OOP) مقدمة\")\\n  \\n  practice_29()",
                "expected_output": "Correct execution output",
                "explanation": "تحدي OOP: قم بإنشاء كائن (Object) ثانٍ من هذا الكلاس مع إعطائه بيانات مختلفة، ثم اطبع خصائصه."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-30",
        "title": "الدرس 30: الفئات (Classes) والكائنات",
        "category": "المستوى المتوسط",
        "order_index": 30,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"الفئات (Classes) والكائنات\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن الفئات (Classes) والكائنات. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_30() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ الفئات (Classes) والكائنات",
            "return_value": "احتراف وفهم الفئات (Classes) والكائنات وتطبيقه في مشاريعك.",
            "example": "def practice_30():\\n      print(\"Welcome to الفئات (Classes) والكائنات\")\\n  \\n  practice_30()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس الفئات (Classes) والكائنات لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 30: الفئات (Classes) والكائنات",
                "code": "def practice_30():\\n      print(\"Welcome to الفئات (Classes) والكائنات\")\\n  \\n  practice_30()",
                "expected_output": "(Output specific to الدرس 30: الفئات (Classes) والكائنات)",
                "explanation": "هذا الكود هو تطبيق مباشر لمفهوم (Object Oriented Programming)، حيث ننشئ مخططاً (Class) ثم نصنع منه كائنات (Objects)."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_30(:\\n      print(Welcome to الفئات (Classes) والكائنات\")\\n  \\n  practice_30()",
                "error_message": "SyntaxError in الدرس 30: الفئات (Classes) والكائنات",
                "explanation": "نسيان كتابة (self) كأول مدخل في دوال الكلاس هو خطأ يومي للمبتدئين! (self) هو ما يربط الدالة بالكائن نفسه."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 30: الفئات (Classes) والكائنات context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "نسيان كتابة (self) كأول مدخل في دوال الكلاس هو خطأ يومي للمبتدئين! (self) هو ما يربط الدالة بالكائن نفسه."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_30():\\n      print(\"Welcome to الفئات (Classes) والكائنات\")\\n  \\n  practice_30()",
                "expected_output": "Correct execution output",
                "explanation": "تحدي OOP: قم بإنشاء كائن (Object) ثانٍ من هذا الكلاس مع إعطائه بيانات مختلفة، ثم اطبع خصائصه."
            }
        ],
        "lesson_type": "milestone"
    },
    {
        "lesson_slug": "python-31",
        "title": "الدرس 31: الوراثة (Inheritance)",
        "category": "المستوى المتوسط",
        "order_index": 31,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"الوراثة (Inheritance)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن الوراثة (Inheritance). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_31() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ الوراثة (Inheritance)",
            "return_value": "احتراف وفهم الوراثة (Inheritance) وتطبيقه في مشاريعك.",
            "example": "def practice_31():\\n      print(\"Welcome to الوراثة (Inheritance)\")\\n  \\n  practice_31()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس الوراثة (Inheritance) لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 31: الوراثة (Inheritance)",
                "code": "def practice_31():\\n      print(\"Welcome to الوراثة (Inheritance)\")\\n  \\n  practice_31()",
                "expected_output": "(Output specific to الدرس 31: الوراثة (Inheritance))",
                "explanation": "في هذا الدرس (الدرس 31: الوراثة (Inheritance))، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_31(:\\n      print(Welcome to الوراثة (Inheritance)\")\\n  \\n  practice_31()",
                "error_message": "SyntaxError in الدرس 31: الوراثة (Inheritance)",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 31: الوراثة (Inheritance) context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_31():\\n      print(\"Welcome to الوراثة (Inheritance)\")\\n  \\n  practice_31()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-32",
        "title": "الدرس 32: التغليف (Encapsulation)",
        "category": "المستوى المتوسط",
        "order_index": 32,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"التغليف (Encapsulation)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن التغليف (Encapsulation). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_32() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ التغليف (Encapsulation)",
            "return_value": "احتراف وفهم التغليف (Encapsulation) وتطبيقه في مشاريعك.",
            "example": "def practice_32():\\n      print(\"Welcome to التغليف (Encapsulation)\")\\n  \\n  practice_32()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس التغليف (Encapsulation) لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 32: التغليف (Encapsulation)",
                "code": "def practice_32():\\n      print(\"Welcome to التغليف (Encapsulation)\")\\n  \\n  practice_32()",
                "expected_output": "(Output specific to الدرس 32: التغليف (Encapsulation))",
                "explanation": "في هذا الدرس (الدرس 32: التغليف (Encapsulation))، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_32(:\\n      print(Welcome to التغليف (Encapsulation)\")\\n  \\n  practice_32()",
                "error_message": "SyntaxError in الدرس 32: التغليف (Encapsulation)",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 32: التغليف (Encapsulation) context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_32():\\n      print(\"Welcome to التغليف (Encapsulation)\")\\n  \\n  practice_32()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-33",
        "title": "الدرس 33: معالجة الأخطاء (Try/Except)",
        "category": "المستوى المتوسط",
        "order_index": 33,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"معالجة الأخطاء (Try/Except)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن معالجة الأخطاء (Try/Except). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_33() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ معالجة الأخطاء (Try/Except)",
            "return_value": "احتراف وفهم معالجة الأخطاء (Try/Except) وتطبيقه في مشاريعك.",
            "example": "def practice_33():\\n      print(\"Welcome to معالجة الأخطاء (Try/Except)\")\\n  \\n  practice_33()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس معالجة الأخطاء (Try/Except) لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 33: معالجة الأخطاء (Try/Except)",
                "code": "def practice_33():\\n      print(\"Welcome to معالجة الأخطاء (Try/Except)\")\\n  \\n  practice_33()",
                "expected_output": "(Output specific to الدرس 33: معالجة الأخطاء (Try/Except))",
                "explanation": "استخدام Try/Except هو الجدار الواقي لبرنامجك. هذا الكود سيلتقط الخطأ بدلاً من السماح للبرنامج بالانهيار في وجه المستخدم."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_33(:\\n      print(Welcome to معالجة الأخطاء (Try/Except)\")\\n  \\n  practice_33()",
                "error_message": "SyntaxError in الدرس 33: معالجة الأخطاء (Try/Except)",
                "explanation": "استخدام except فارغة (Bare except) هو ممارسة سيئة، حيث سيتم إخفاء جميع الأخطاء حتى تلك التي لم تتوقعها! حدد نوع الخطأ دائماً."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 33: معالجة الأخطاء (Try/Except) context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "استخدام except فارغة (Bare except) هو ممارسة سيئة، حيث سيتم إخفاء جميع الأخطاء حتى تلك التي لم تتوقعها! حدد نوع الخطأ دائماً."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_33():\\n      print(\"Welcome to معالجة الأخطاء (Try/Except)\")\\n  \\n  practice_33()",
                "expected_output": "Correct execution output",
                "explanation": "تحدي الأمان: أضف قسم (finally) في نهاية الكود لطباعة رسالة \"انتهت العملية\" سواء حدث خطأ أم لا."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-34",
        "title": "الدرس 34: التعامل مع الملفات (القراءة)",
        "category": "المستوى المتوسط",
        "order_index": 34,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"التعامل مع الملفات (القراءة)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن التعامل مع الملفات (القراءة). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_34() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ التعامل مع الملفات (القراءة)",
            "return_value": "احتراف وفهم التعامل مع الملفات (القراءة) وتطبيقه في مشاريعك.",
            "example": "def practice_34():\\n      print(\"Welcome to التعامل مع الملفات (القراءة)\")\\n  \\n  practice_34()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس التعامل مع الملفات (القراءة) لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 34: التعامل مع الملفات (القراءة)",
                "code": "def practice_34():\\n      print(\"Welcome to التعامل مع الملفات (القراءة)\")\\n  \\n  practice_34()",
                "expected_output": "(Output specific to الدرس 34: التعامل مع الملفات (القراءة))",
                "explanation": "في هذا الدرس (الدرس 34: التعامل مع الملفات (القراءة))، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_34(:\\n      print(Welcome to التعامل مع الملفات (القراءة)\")\\n  \\n  practice_34()",
                "error_message": "SyntaxError in الدرس 34: التعامل مع الملفات (القراءة)",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 34: التعامل مع الملفات (القراءة) context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_34():\\n      print(\"Welcome to التعامل مع الملفات (القراءة)\")\\n  \\n  practice_34()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "code_reading"
    },
    {
        "lesson_slug": "python-35",
        "title": "الدرس 35: التعامل مع الملفات (الكتابة)",
        "category": "المستوى المتوسط",
        "order_index": 35,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"التعامل مع الملفات (الكتابة)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن التعامل مع الملفات (الكتابة). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_35() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ التعامل مع الملفات (الكتابة)",
            "return_value": "احتراف وفهم التعامل مع الملفات (الكتابة) وتطبيقه في مشاريعك.",
            "example": "def practice_35():\\n      print(\"Welcome to التعامل مع الملفات (الكتابة)\")\\n  \\n  practice_35()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس التعامل مع الملفات (الكتابة) لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 35: التعامل مع الملفات (الكتابة)",
                "code": "def practice_35():\\n      print(\"Welcome to التعامل مع الملفات (الكتابة)\")\\n  \\n  practice_35()",
                "expected_output": "(Output specific to الدرس 35: التعامل مع الملفات (الكتابة))",
                "explanation": "في هذا الدرس (الدرس 35: التعامل مع الملفات (الكتابة))، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_35(:\\n      print(Welcome to التعامل مع الملفات (الكتابة)\")\\n  \\n  practice_35()",
                "error_message": "SyntaxError in الدرس 35: التعامل مع الملفات (الكتابة)",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 35: التعامل مع الملفات (الكتابة) context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_35():\\n      print(\"Welcome to التعامل مع الملفات (الكتابة)\")\\n  \\n  practice_35()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "sandbox"
    },
    {
        "lesson_slug": "python-36",
        "title": "الدرس 36: استيراد المكتبات",
        "category": "المستوى المتوسط",
        "order_index": 36,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"استيراد المكتبات\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن استيراد المكتبات. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_36() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ استيراد المكتبات",
            "return_value": "احتراف وفهم استيراد المكتبات وتطبيقه في مشاريعك.",
            "example": "def practice_36():\\n      print(\"Welcome to استيراد المكتبات\")\\n  \\n  practice_36()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس استيراد المكتبات لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 36: استيراد المكتبات",
                "code": "def practice_36():\\n      print(\"Welcome to استيراد المكتبات\")\\n  \\n  practice_36()",
                "expected_output": "(Output specific to الدرس 36: استيراد المكتبات)",
                "explanation": "في هذا الدرس (الدرس 36: استيراد المكتبات)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_36(:\\n      print(Welcome to استيراد المكتبات\")\\n  \\n  practice_36()",
                "error_message": "SyntaxError in الدرس 36: استيراد المكتبات",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 36: استيراد المكتبات context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_36():\\n      print(\"Welcome to استيراد المكتبات\")\\n  \\n  practice_36()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "debugging"
    },
    {
        "lesson_slug": "python-37",
        "title": "الدرس 37: مكتبة Math الرياضية",
        "category": "المستوى المتوسط",
        "order_index": 37,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"مكتبة Math الرياضية\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن مكتبة Math الرياضية. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_37() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ مكتبة Math الرياضية",
            "return_value": "احتراف وفهم مكتبة Math الرياضية وتطبيقه في مشاريعك.",
            "example": "def practice_37():\\n      print(\"Welcome to مكتبة Math الرياضية\")\\n  \\n  practice_37()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس مكتبة Math الرياضية لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 37: مكتبة Math الرياضية",
                "code": "def practice_37():\\n      print(\"Welcome to مكتبة Math الرياضية\")\\n  \\n  practice_37()",
                "expected_output": "(Output specific to الدرس 37: مكتبة Math الرياضية)",
                "explanation": "هذا الكود يستعرض كيفية إجراء العمليات الحسابية أو التعامل مع الأرقام، وهو ما تحتاجه في برمجة الألعاب وحساب النقاط."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_37(:\\n      print(Welcome to مكتبة Math الرياضية\")\\n  \\n  practice_37()",
                "error_message": "SyntaxError in الدرس 37: مكتبة Math الرياضية",
                "explanation": "الخطأ الشائع هنا هو محاولة دمج نص مع رقم مباشرة (مثلاً طباعة \"Score: \" + 10) دون تحويل الرقم إلى نص عبر ()str."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 37: مكتبة Math الرياضية context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "الخطأ الشائع هنا هو محاولة دمج نص مع رقم مباشرة (مثلاً طباعة \"Score: \" + 10) دون تحويل الرقم إلى نص عبر ()str."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_37():\\n      print(\"Welcome to مكتبة Math الرياضية\")\\n  \\n  practice_37()",
                "expected_output": "Correct execution output",
                "explanation": "تحدي رياضي: قم بتعديل الكود ليقوم بضرب الناتج النهائي في 5 ثم قم بطباعته."
            }
        ],
        "lesson_type": "scenario"
    },
    {
        "lesson_slug": "python-38",
        "title": "الدرس 38: مكتبة Random الممتعة",
        "category": "المستوى المتوسط",
        "order_index": 38,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"مكتبة Random الممتعة\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن مكتبة Random الممتعة. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_38() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ مكتبة Random الممتعة",
            "return_value": "احتراف وفهم مكتبة Random الممتعة وتطبيقه في مشاريعك.",
            "example": "def practice_38():\\n      print(\"Welcome to مكتبة Random الممتعة\")\\n  \\n  practice_38()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس مكتبة Random الممتعة لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 38: مكتبة Random الممتعة",
                "code": "def practice_38():\\n      print(\"Welcome to مكتبة Random الممتعة\")\\n  \\n  practice_38()",
                "expected_output": "(Output specific to الدرس 38: مكتبة Random الممتعة)",
                "explanation": "في هذا الدرس (الدرس 38: مكتبة Random الممتعة)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_38(:\\n      print(Welcome to مكتبة Random الممتعة\")\\n  \\n  practice_38()",
                "error_message": "SyntaxError in الدرس 38: مكتبة Random الممتعة",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 38: مكتبة Random الممتعة context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_38():\\n      print(\"Welcome to مكتبة Random الممتعة\")\\n  \\n  practice_38()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-39",
        "title": "الدرس 39: مقدمة في تحليل البيانات",
        "category": "المستوى المتوسط",
        "order_index": 39,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"مقدمة في تحليل البيانات\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن مقدمة في تحليل البيانات. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_39() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ مقدمة في تحليل البيانات",
            "return_value": "احتراف وفهم مقدمة في تحليل البيانات وتطبيقه في مشاريعك.",
            "example": "def practice_39():\\n      print(\"Welcome to مقدمة في تحليل البيانات\")\\n  \\n  practice_39()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس مقدمة في تحليل البيانات لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 39: مقدمة في تحليل البيانات",
                "code": "def practice_39():\\n      print(\"Welcome to مقدمة في تحليل البيانات\")\\n  \\n  practice_39()",
                "expected_output": "(Output specific to الدرس 39: مقدمة في تحليل البيانات)",
                "explanation": "في هذا الدرس (الدرس 39: مقدمة في تحليل البيانات)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_39(:\\n      print(Welcome to مقدمة في تحليل البيانات\")\\n  \\n  practice_39()",
                "error_message": "SyntaxError in الدرس 39: مقدمة في تحليل البيانات",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 39: مقدمة في تحليل البيانات context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_39():\\n      print(\"Welcome to مقدمة في تحليل البيانات\")\\n  \\n  practice_39()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "ai_challenge"
    },
    {
        "lesson_slug": "python-40",
        "title": "الدرس 40: مكتبة Pandas السريعة",
        "category": "المستوى المتقدم",
        "order_index": 40,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"مكتبة Pandas السريعة\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن مكتبة Pandas السريعة. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_40() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ مكتبة Pandas السريعة",
            "return_value": "احتراف وفهم مكتبة Pandas السريعة وتطبيقه في مشاريعك.",
            "example": "def practice_40():\\n      print(\"Welcome to مكتبة Pandas السريعة\")\\n  \\n  practice_40()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس مكتبة Pandas السريعة لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 40: مكتبة Pandas السريعة",
                "code": "def practice_40():\\n      print(\"Welcome to مكتبة Pandas السريعة\")\\n  \\n  practice_40()",
                "expected_output": "(Output specific to الدرس 40: مكتبة Pandas السريعة)",
                "explanation": "في هذا الدرس (الدرس 40: مكتبة Pandas السريعة)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_40(:\\n      print(Welcome to مكتبة Pandas السريعة\")\\n  \\n  practice_40()",
                "error_message": "SyntaxError in الدرس 40: مكتبة Pandas السريعة",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 40: مكتبة Pandas السريعة context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_40():\\n      print(\"Welcome to مكتبة Pandas السريعة\")\\n  \\n  practice_40()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "milestone"
    },
    {
        "lesson_slug": "python-41",
        "title": "الدرس 41: معالجة النصوص المتقدمة",
        "category": "المستوى المتقدم",
        "order_index": 41,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"معالجة النصوص المتقدمة\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن معالجة النصوص المتقدمة. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_41() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ معالجة النصوص المتقدمة",
            "return_value": "احتراف وفهم معالجة النصوص المتقدمة وتطبيقه في مشاريعك.",
            "example": "def practice_41():\\n      print(\"Welcome to معالجة النصوص المتقدمة\")\\n  \\n  practice_41()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس معالجة النصوص المتقدمة لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 41: معالجة النصوص المتقدمة",
                "code": "def practice_41():\\n      print(\"Welcome to معالجة النصوص المتقدمة\")\\n  \\n  practice_41()",
                "expected_output": "(Output specific to الدرس 41: معالجة النصوص المتقدمة)",
                "explanation": "في هذا المثال، قمنا بالتعامل مع النصوص (Strings) في بايثون، وهي الأساس لأي تطبيق يتعامل مع البيانات النصية والرسائل."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_41(:\\n      print(Welcome to معالجة النصوص المتقدمة\")\\n  \\n  practice_41()",
                "error_message": "SyntaxError in الدرس 41: معالجة النصوص المتقدمة",
                "explanation": "خطأ شائع جداً: نسيان إغلاق علامات التنصيص (\" أو ') مما يؤدي إلى ظهور SyntaxError وانهيار البرنامج."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 41: معالجة النصوص المتقدمة context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "خطأ شائع جداً: نسيان إغلاق علامات التنصيص (\" أو ') مما يؤدي إلى ظهور SyntaxError وانهيار البرنامج."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_41():\\n      print(\"Welcome to معالجة النصوص المتقدمة\")\\n  \\n  practice_41()",
                "expected_output": "Correct execution output",
                "explanation": "تحدي: حاول إضافة كلمة \"مرحباً\" قبل النص المطبوع باستخدام أسلوب دمج النصوص (Concatenation) أو (f-strings)."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-42",
        "title": "الدرس 42: تعبيرات عادية (Regex)",
        "category": "المستوى المتقدم",
        "order_index": 42,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"تعبيرات عادية (Regex)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن تعبيرات عادية (Regex). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_42() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ تعبيرات عادية (Regex)",
            "return_value": "احتراف وفهم تعبيرات عادية (Regex) وتطبيقه في مشاريعك.",
            "example": "def practice_42():\\n      print(\"Welcome to تعبيرات عادية (Regex)\")\\n  \\n  practice_42()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس تعبيرات عادية (Regex) لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 42: تعبيرات عادية (Regex)",
                "code": "def practice_42():\\n      print(\"Welcome to تعبيرات عادية (Regex)\")\\n  \\n  practice_42()",
                "expected_output": "(Output specific to الدرس 42: تعبيرات عادية (Regex))",
                "explanation": "في هذا الدرس (الدرس 42: تعبيرات عادية (Regex))، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_42(:\\n      print(Welcome to تعبيرات عادية (Regex)\")\\n  \\n  practice_42()",
                "error_message": "SyntaxError in الدرس 42: تعبيرات عادية (Regex)",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 42: تعبيرات عادية (Regex) context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_42():\\n      print(\"Welcome to تعبيرات عادية (Regex)\")\\n  \\n  practice_42()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "mini_mission"
    },
    {
        "lesson_slug": "python-43",
        "title": "الدرس 43: التعامل مع التواريخ (Datetime)",
        "category": "المستوى المتقدم",
        "order_index": 43,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"التعامل مع التواريخ (Datetime)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن التعامل مع التواريخ (Datetime). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_43() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ التعامل مع التواريخ (Datetime)",
            "return_value": "احتراف وفهم التعامل مع التواريخ (Datetime) وتطبيقه في مشاريعك.",
            "example": "def practice_43():\\n      print(\"Welcome to التعامل مع التواريخ (Datetime)\")\\n  \\n  practice_43()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس التعامل مع التواريخ (Datetime) لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 43: التعامل مع التواريخ (Datetime)",
                "code": "def practice_43():\\n      print(\"Welcome to التعامل مع التواريخ (Datetime)\")\\n  \\n  practice_43()",
                "expected_output": "(Output specific to الدرس 43: التعامل مع التواريخ (Datetime))",
                "explanation": "في هذا الدرس (الدرس 43: التعامل مع التواريخ (Datetime))، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_43(:\\n      print(Welcome to التعامل مع التواريخ (Datetime)\")\\n  \\n  practice_43()",
                "error_message": "SyntaxError in الدرس 43: التعامل مع التواريخ (Datetime)",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 43: التعامل مع التواريخ (Datetime) context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_43():\\n      print(\"Welcome to التعامل مع التواريخ (Datetime)\")\\n  \\n  practice_43()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-44",
        "title": "الدرس 44: مقدمة للواجهات الرسومية",
        "category": "المستوى المتقدم",
        "order_index": 44,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"مقدمة للواجهات الرسومية\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن مقدمة للواجهات الرسومية. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_44() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ مقدمة للواجهات الرسومية",
            "return_value": "احتراف وفهم مقدمة للواجهات الرسومية وتطبيقه في مشاريعك.",
            "example": "def practice_44():\\n      print(\"Welcome to مقدمة للواجهات الرسومية\")\\n  \\n  practice_44()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس مقدمة للواجهات الرسومية لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 44: مقدمة للواجهات الرسومية",
                "code": "def practice_44():\\n      print(\"Welcome to مقدمة للواجهات الرسومية\")\\n  \\n  practice_44()",
                "expected_output": "(Output specific to الدرس 44: مقدمة للواجهات الرسومية)",
                "explanation": "في هذا الدرس (الدرس 44: مقدمة للواجهات الرسومية)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_44(:\\n      print(Welcome to مقدمة للواجهات الرسومية\")\\n  \\n  practice_44()",
                "error_message": "SyntaxError in الدرس 44: مقدمة للواجهات الرسومية",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 44: مقدمة للواجهات الرسومية context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_44():\\n      print(\"Welcome to مقدمة للواجهات الرسومية\")\\n  \\n  practice_44()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-45",
        "title": "الدرس 45: بناء ألعاب بسيطة",
        "category": "المستوى المتقدم",
        "order_index": 45,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"بناء ألعاب بسيطة\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن بناء ألعاب بسيطة. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_45() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ بناء ألعاب بسيطة",
            "return_value": "احتراف وفهم بناء ألعاب بسيطة وتطبيقه في مشاريعك.",
            "example": "def practice_45():\\n      print(\"Welcome to بناء ألعاب بسيطة\")\\n  \\n  practice_45()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس بناء ألعاب بسيطة لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 45: بناء ألعاب بسيطة",
                "code": "def practice_45():\\n      print(\"Welcome to بناء ألعاب بسيطة\")\\n  \\n  practice_45()",
                "expected_output": "(Output specific to الدرس 45: بناء ألعاب بسيطة)",
                "explanation": "في هذا الدرس (الدرس 45: بناء ألعاب بسيطة)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_45(:\\n      print(Welcome to بناء ألعاب بسيطة\")\\n  \\n  practice_45()",
                "error_message": "SyntaxError in الدرس 45: بناء ألعاب بسيطة",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 45: بناء ألعاب بسيطة context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_45():\\n      print(\"Welcome to بناء ألعاب بسيطة\")\\n  \\n  practice_45()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "project"
    },
    {
        "lesson_slug": "python-46",
        "title": "الدرس 46: مراجعة شاملة للمفاهيم",
        "category": "المستوى المتقدم",
        "order_index": 46,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"مراجعة شاملة للمفاهيم\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن مراجعة شاملة للمفاهيم. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_46() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ مراجعة شاملة للمفاهيم",
            "return_value": "احتراف وفهم مراجعة شاملة للمفاهيم وتطبيقه في مشاريعك.",
            "example": "def practice_46():\\n      print(\"Welcome to مراجعة شاملة للمفاهيم\")\\n  \\n  practice_46()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس مراجعة شاملة للمفاهيم لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 46: مراجعة شاملة للمفاهيم",
                "code": "def practice_46():\\n      print(\"Welcome to مراجعة شاملة للمفاهيم\")\\n  \\n  practice_46()",
                "expected_output": "(Output specific to الدرس 46: مراجعة شاملة للمفاهيم)",
                "explanation": "في هذا الدرس (الدرس 46: مراجعة شاملة للمفاهيم)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_46(:\\n      print(Welcome to مراجعة شاملة للمفاهيم\")\\n  \\n  practice_46()",
                "error_message": "SyntaxError in الدرس 46: مراجعة شاملة للمفاهيم",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 46: مراجعة شاملة للمفاهيم context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_46():\\n      print(\"Welcome to مراجعة شاملة للمفاهيم\")\\n  \\n  practice_46()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-47",
        "title": "الدرس 47: خوارزميات الفرز (Sorting)",
        "category": "المستوى المتقدم",
        "order_index": 47,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"خوارزميات الفرز (Sorting)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن خوارزميات الفرز (Sorting). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_47() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ خوارزميات الفرز (Sorting)",
            "return_value": "احتراف وفهم خوارزميات الفرز (Sorting) وتطبيقه في مشاريعك.",
            "example": "def practice_47():\\n      print(\"Welcome to خوارزميات الفرز (Sorting)\")\\n  \\n  practice_47()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس خوارزميات الفرز (Sorting) لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 47: خوارزميات الفرز (Sorting)",
                "code": "def practice_47():\\n      print(\"Welcome to خوارزميات الفرز (Sorting)\")\\n  \\n  practice_47()",
                "expected_output": "(Output specific to الدرس 47: خوارزميات الفرز (Sorting))",
                "explanation": "في هذا الدرس (الدرس 47: خوارزميات الفرز (Sorting))، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_47(:\\n      print(Welcome to خوارزميات الفرز (Sorting)\")\\n  \\n  practice_47()",
                "error_message": "SyntaxError in الدرس 47: خوارزميات الفرز (Sorting)",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 47: خوارزميات الفرز (Sorting) context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_47():\\n      print(\"Welcome to خوارزميات الفرز (Sorting)\")\\n  \\n  practice_47()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-48",
        "title": "الدرس 48: خوارزميات البحث (Searching)",
        "category": "المستوى المتقدم",
        "order_index": 48,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"خوارزميات البحث (Searching)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن خوارزميات البحث (Searching). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_48() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ خوارزميات البحث (Searching)",
            "return_value": "احتراف وفهم خوارزميات البحث (Searching) وتطبيقه في مشاريعك.",
            "example": "def practice_48():\\n      print(\"Welcome to خوارزميات البحث (Searching)\")\\n  \\n  practice_48()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس خوارزميات البحث (Searching) لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 48: خوارزميات البحث (Searching)",
                "code": "def practice_48():\\n      print(\"Welcome to خوارزميات البحث (Searching)\")\\n  \\n  practice_48()",
                "expected_output": "(Output specific to الدرس 48: خوارزميات البحث (Searching))",
                "explanation": "في هذا الدرس (الدرس 48: خوارزميات البحث (Searching))، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_48(:\\n      print(Welcome to خوارزميات البحث (Searching)\")\\n  \\n  practice_48()",
                "error_message": "SyntaxError in الدرس 48: خوارزميات البحث (Searching)",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 48: خوارزميات البحث (Searching) context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_48():\\n      print(\"Welcome to خوارزميات البحث (Searching)\")\\n  \\n  practice_48()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "debugging"
    },
    {
        "lesson_slug": "python-49",
        "title": "الدرس 49: تعقيد الخوارزميات (Time Complexity)",
        "category": "المستوى المتقدم",
        "order_index": 49,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"تعقيد الخوارزميات (Time Complexity)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن تعقيد الخوارزميات (Time Complexity). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_49() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ تعقيد الخوارزميات (Time Complexity)",
            "return_value": "احتراف وفهم تعقيد الخوارزميات (Time Complexity) وتطبيقه في مشاريعك.",
            "example": "def practice_49():\\n      print(\"Welcome to تعقيد الخوارزميات (Time Complexity)\")\\n  \\n  practice_49()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس تعقيد الخوارزميات (Time Complexity) لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 49: تعقيد الخوارزميات (Time Complexity)",
                "code": "def practice_49():\\n      print(\"Welcome to تعقيد الخوارزميات (Time Complexity)\")\\n  \\n  practice_49()",
                "expected_output": "(Output specific to الدرس 49: تعقيد الخوارزميات (Time Complexity))",
                "explanation": "في هذا الدرس (الدرس 49: تعقيد الخوارزميات (Time Complexity))، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_49(:\\n      print(Welcome to تعقيد الخوارزميات (Time Complexity)\")\\n  \\n  practice_49()",
                "error_message": "SyntaxError in الدرس 49: تعقيد الخوارزميات (Time Complexity)",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 49: تعقيد الخوارزميات (Time Complexity) context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_49():\\n      print(\"Welcome to تعقيد الخوارزميات (Time Complexity)\")\\n  \\n  practice_49()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-50",
        "title": "الدرس 50: هياكل البيانات المتقدمة",
        "category": "المستوى المتقدم",
        "order_index": 50,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"هياكل البيانات المتقدمة\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن هياكل البيانات المتقدمة. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_50() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ هياكل البيانات المتقدمة",
            "return_value": "احتراف وفهم هياكل البيانات المتقدمة وتطبيقه في مشاريعك.",
            "example": "def practice_50():\\n      print(\"Welcome to هياكل البيانات المتقدمة\")\\n  \\n  practice_50()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس هياكل البيانات المتقدمة لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 50: هياكل البيانات المتقدمة",
                "code": "def practice_50():\\n      print(\"Welcome to هياكل البيانات المتقدمة\")\\n  \\n  practice_50()",
                "expected_output": "(Output specific to الدرس 50: هياكل البيانات المتقدمة)",
                "explanation": "في هذا الدرس (الدرس 50: هياكل البيانات المتقدمة)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_50(:\\n      print(Welcome to هياكل البيانات المتقدمة\")\\n  \\n  practice_50()",
                "error_message": "SyntaxError in الدرس 50: هياكل البيانات المتقدمة",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 50: هياكل البيانات المتقدمة context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_50():\\n      print(\"Welcome to هياكل البيانات المتقدمة\")\\n  \\n  practice_50()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "capstone"
    },
    {
        "lesson_slug": "python-51",
        "title": "الدرس 51: تطبيق عملي: نظام إدارة مستخدمين",
        "category": "المستوى المتقدم",
        "order_index": 51,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"تطبيق عملي: نظام إدارة مستخدمين\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن تطبيق عملي: نظام إدارة مستخدمين. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_51() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ تطبيق عملي: نظام إدارة مستخدمين",
            "return_value": "احتراف وفهم تطبيق عملي: نظام إدارة مستخدمين وتطبيقه في مشاريعك.",
            "example": "def practice_51():\\n      print(\"Welcome to تطبيق عملي: نظام إدارة مستخدمين\")\\n  \\n  practice_51()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس تطبيق عملي: نظام إدارة مستخدمين لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 51: تطبيق عملي: نظام إدارة مستخدمين",
                "code": "def practice_51():\\n      print(\"Welcome to تطبيق عملي: نظام إدارة مستخدمين\")\\n  \\n  practice_51()",
                "expected_output": "(Output specific to الدرس 51: تطبيق عملي: نظام إدارة مستخدمين)",
                "explanation": "في هذا الدرس (الدرس 51: تطبيق عملي: نظام إدارة مستخدمين)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_51(:\\n      print(Welcome to تطبيق عملي: نظام إدارة مستخدمين\")\\n  \\n  practice_51()",
                "error_message": "SyntaxError in الدرس 51: تطبيق عملي: نظام إدارة مستخدمين",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 51: تطبيق عملي: نظام إدارة مستخدمين context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_51():\\n      print(\"Welcome to تطبيق عملي: نظام إدارة مستخدمين\")\\n  \\n  practice_51()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "code_reading"
    },
    {
        "lesson_slug": "python-52",
        "title": "الدرس 52: التعامل مع قواعد البيانات SQLite",
        "category": "المستوى المتقدم",
        "order_index": 52,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"التعامل مع قواعد البيانات SQLite\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن التعامل مع قواعد البيانات SQLite. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_52() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ التعامل مع قواعد البيانات SQLite",
            "return_value": "احتراف وفهم التعامل مع قواعد البيانات SQLite وتطبيقه في مشاريعك.",
            "example": "def practice_52():\\n      print(\"Welcome to التعامل مع قواعد البيانات SQLite\")\\n  \\n  practice_52()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس التعامل مع قواعد البيانات SQLite لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 52: التعامل مع قواعد البيانات SQLite",
                "code": "def practice_52():\\n      print(\"Welcome to التعامل مع قواعد البيانات SQLite\")\\n  \\n  practice_52()",
                "expected_output": "(Output specific to الدرس 52: التعامل مع قواعد البيانات SQLite)",
                "explanation": "في هذا الدرس (الدرس 52: التعامل مع قواعد البيانات SQLite)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_52(:\\n      print(Welcome to التعامل مع قواعد البيانات SQLite\")\\n  \\n  practice_52()",
                "error_message": "SyntaxError in الدرس 52: التعامل مع قواعد البيانات SQLite",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 52: التعامل مع قواعد البيانات SQLite context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_52():\\n      print(\"Welcome to التعامل مع قواعد البيانات SQLite\")\\n  \\n  practice_52()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "scenario"
    },
    {
        "lesson_slug": "python-53",
        "title": "الدرس 53: الاستعلامات الأساسية",
        "category": "المستوى المتقدم",
        "order_index": 53,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"الاستعلامات الأساسية\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن الاستعلامات الأساسية. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_53() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ الاستعلامات الأساسية",
            "return_value": "احتراف وفهم الاستعلامات الأساسية وتطبيقه في مشاريعك.",
            "example": "def practice_53():\\n      print(\"Welcome to الاستعلامات الأساسية\")\\n  \\n  practice_53()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس الاستعلامات الأساسية لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 53: الاستعلامات الأساسية",
                "code": "def practice_53():\\n      print(\"Welcome to الاستعلامات الأساسية\")\\n  \\n  practice_53()",
                "expected_output": "(Output specific to الدرس 53: الاستعلامات الأساسية)",
                "explanation": "في هذا الدرس (الدرس 53: الاستعلامات الأساسية)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_53(:\\n      print(Welcome to الاستعلامات الأساسية\")\\n  \\n  practice_53()",
                "error_message": "SyntaxError in الدرس 53: الاستعلامات الأساسية",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 53: الاستعلامات الأساسية context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_53():\\n      print(\"Welcome to الاستعلامات الأساسية\")\\n  \\n  practice_53()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-54",
        "title": "الدرس 54: توصيل بايثون بقاعدة بيانات",
        "category": "المستوى المتقدم",
        "order_index": 54,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"توصيل بايثون بقاعدة بيانات\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن توصيل بايثون بقاعدة بيانات. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_54() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ توصيل بايثون بقاعدة بيانات",
            "return_value": "احتراف وفهم توصيل بايثون بقاعدة بيانات وتطبيقه في مشاريعك.",
            "example": "def practice_54():\\n      print(\"Welcome to توصيل بايثون بقاعدة بيانات\")\\n  \\n  practice_54()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس توصيل بايثون بقاعدة بيانات لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 54: توصيل بايثون بقاعدة بيانات",
                "code": "def practice_54():\\n      print(\"Welcome to توصيل بايثون بقاعدة بيانات\")\\n  \\n  practice_54()",
                "expected_output": "(Output specific to الدرس 54: توصيل بايثون بقاعدة بيانات)",
                "explanation": "في هذا الدرس (الدرس 54: توصيل بايثون بقاعدة بيانات)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_54(:\\n      print(Welcome to توصيل بايثون بقاعدة بيانات\")\\n  \\n  practice_54()",
                "error_message": "SyntaxError in الدرس 54: توصيل بايثون بقاعدة بيانات",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 54: توصيل بايثون بقاعدة بيانات context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_54():\\n      print(\"Welcome to توصيل بايثون بقاعدة بيانات\")\\n  \\n  practice_54()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-55",
        "title": "الدرس 55: تطبيق: متجر إلكتروني صغير",
        "category": "المستوى المتقدم",
        "order_index": 55,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"تطبيق: متجر إلكتروني صغير\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن تطبيق: متجر إلكتروني صغير. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_55() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ تطبيق: متجر إلكتروني صغير",
            "return_value": "احتراف وفهم تطبيق: متجر إلكتروني صغير وتطبيقه في مشاريعك.",
            "example": "def practice_55():\\n      print(\"Welcome to تطبيق: متجر إلكتروني صغير\")\\n  \\n  practice_55()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس تطبيق: متجر إلكتروني صغير لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 55: تطبيق: متجر إلكتروني صغير",
                "code": "def practice_55():\\n      print(\"Welcome to تطبيق: متجر إلكتروني صغير\")\\n  \\n  practice_55()",
                "expected_output": "(Output specific to الدرس 55: تطبيق: متجر إلكتروني صغير)",
                "explanation": "في هذا الدرس (الدرس 55: تطبيق: متجر إلكتروني صغير)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_55(:\\n      print(Welcome to تطبيق: متجر إلكتروني صغير\")\\n  \\n  practice_55()",
                "error_message": "SyntaxError in الدرس 55: تطبيق: متجر إلكتروني صغير",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 55: تطبيق: متجر إلكتروني صغير context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_55():\\n      print(\"Welcome to تطبيق: متجر إلكتروني صغير\")\\n  \\n  practice_55()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "sandbox"
    },
    {
        "lesson_slug": "python-56",
        "title": "الدرس 56: مقدمة في تطوير الويب",
        "category": "المستوى المتقدم",
        "order_index": 56,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"مقدمة في تطوير الويب\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن مقدمة في تطوير الويب. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_56() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ مقدمة في تطوير الويب",
            "return_value": "احتراف وفهم مقدمة في تطوير الويب وتطبيقه في مشاريعك.",
            "example": "def practice_56():\\n      print(\"Welcome to مقدمة في تطوير الويب\")\\n  \\n  practice_56()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس مقدمة في تطوير الويب لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 56: مقدمة في تطوير الويب",
                "code": "def practice_56():\\n      print(\"Welcome to مقدمة في تطوير الويب\")\\n  \\n  practice_56()",
                "expected_output": "(Output specific to الدرس 56: مقدمة في تطوير الويب)",
                "explanation": "في هذا الدرس (الدرس 56: مقدمة في تطوير الويب)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_56(:\\n      print(Welcome to مقدمة في تطوير الويب\")\\n  \\n  practice_56()",
                "error_message": "SyntaxError in الدرس 56: مقدمة في تطوير الويب",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 56: مقدمة في تطوير الويب context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_56():\\n      print(\"Welcome to مقدمة في تطوير الويب\")\\n  \\n  practice_56()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "mini_mission"
    },
    {
        "lesson_slug": "python-57",
        "title": "الدرس 57: أساسيات Flask",
        "category": "المستوى المتقدم",
        "order_index": 57,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"أساسيات Flask\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن أساسيات Flask. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_57() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ أساسيات Flask",
            "return_value": "احتراف وفهم أساسيات Flask وتطبيقه في مشاريعك.",
            "example": "def practice_57():\\n      print(\"Welcome to أساسيات Flask\")\\n  \\n  practice_57()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس أساسيات Flask لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 57: أساسيات Flask",
                "code": "def practice_57():\\n      print(\"Welcome to أساسيات Flask\")\\n  \\n  practice_57()",
                "expected_output": "(Output specific to الدرس 57: أساسيات Flask)",
                "explanation": "في هذا الدرس (الدرس 57: أساسيات Flask)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_57(:\\n      print(Welcome to أساسيات Flask\")\\n  \\n  practice_57()",
                "error_message": "SyntaxError in الدرس 57: أساسيات Flask",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 57: أساسيات Flask context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_57():\\n      print(\"Welcome to أساسيات Flask\")\\n  \\n  practice_57()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-58",
        "title": "الدرس 58: بناء أول خادم ويب",
        "category": "المستوى المتقدم",
        "order_index": 58,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"بناء أول خادم ويب\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن بناء أول خادم ويب. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_58() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ بناء أول خادم ويب",
            "return_value": "احتراف وفهم بناء أول خادم ويب وتطبيقه في مشاريعك.",
            "example": "def practice_58():\\n      print(\"Welcome to بناء أول خادم ويب\")\\n  \\n  practice_58()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس بناء أول خادم ويب لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 58: بناء أول خادم ويب",
                "code": "def practice_58():\\n      print(\"Welcome to بناء أول خادم ويب\")\\n  \\n  practice_58()",
                "expected_output": "(Output specific to الدرس 58: بناء أول خادم ويب)",
                "explanation": "في هذا الدرس (الدرس 58: بناء أول خادم ويب)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_58(:\\n      print(Welcome to بناء أول خادم ويب\")\\n  \\n  practice_58()",
                "error_message": "SyntaxError in الدرس 58: بناء أول خادم ويب",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 58: بناء أول خادم ويب context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_58():\\n      print(\"Welcome to بناء أول خادم ويب\")\\n  \\n  practice_58()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-59",
        "title": "الدرس 59: التعامل مع الـ Routes",
        "category": "المستوى المتقدم",
        "order_index": 59,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"التعامل مع الـ Routes\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن التعامل مع الـ Routes. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_59() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ التعامل مع الـ Routes",
            "return_value": "احتراف وفهم التعامل مع الـ Routes وتطبيقه في مشاريعك.",
            "example": "def practice_59():\\n      print(\"Welcome to التعامل مع الـ Routes\")\\n  \\n  practice_59()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس التعامل مع الـ Routes لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 59: التعامل مع الـ Routes",
                "code": "def practice_59():\\n      print(\"Welcome to التعامل مع الـ Routes\")\\n  \\n  practice_59()",
                "expected_output": "(Output specific to الدرس 59: التعامل مع الـ Routes)",
                "explanation": "في هذا الدرس (الدرس 59: التعامل مع الـ Routes)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_59(:\\n      print(Welcome to التعامل مع الـ Routes\")\\n  \\n  practice_59()",
                "error_message": "SyntaxError in الدرس 59: التعامل مع الـ Routes",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 59: التعامل مع الـ Routes context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_59():\\n      print(\"Welcome to التعامل مع الـ Routes\")\\n  \\n  practice_59()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-60",
        "title": "الدرس 60: نظام القوالب (Templates)",
        "category": "المستوى المتقدم",
        "order_index": 60,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"نظام القوالب (Templates)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن نظام القوالب (Templates). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_60() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ نظام القوالب (Templates)",
            "return_value": "احتراف وفهم نظام القوالب (Templates) وتطبيقه في مشاريعك.",
            "example": "def practice_60():\\n      print(\"Welcome to نظام القوالب (Templates)\")\\n  \\n  practice_60()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس نظام القوالب (Templates) لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 60: نظام القوالب (Templates)",
                "code": "def practice_60():\\n      print(\"Welcome to نظام القوالب (Templates)\")\\n  \\n  practice_60()",
                "expected_output": "(Output specific to الدرس 60: نظام القوالب (Templates))",
                "explanation": "في هذا الدرس (الدرس 60: نظام القوالب (Templates))، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_60(:\\n      print(Welcome to نظام القوالب (Templates)\")\\n  \\n  practice_60()",
                "error_message": "SyntaxError in الدرس 60: نظام القوالب (Templates)",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 60: نظام القوالب (Templates) context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_60():\\n      print(\"Welcome to نظام القوالب (Templates)\")\\n  \\n  practice_60()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "milestone"
    },
    {
        "lesson_slug": "python-61",
        "title": "الدرس 61: أساسيات Django",
        "category": "المستوى المتقدم",
        "order_index": 61,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"أساسيات Django\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن أساسيات Django. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_61() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ أساسيات Django",
            "return_value": "احتراف وفهم أساسيات Django وتطبيقه في مشاريعك.",
            "example": "def practice_61():\\n      print(\"Welcome to أساسيات Django\")\\n  \\n  practice_61()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس أساسيات Django لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 61: أساسيات Django",
                "code": "def practice_61():\\n      print(\"Welcome to أساسيات Django\")\\n  \\n  practice_61()",
                "expected_output": "(Output specific to الدرس 61: أساسيات Django)",
                "explanation": "في هذا الدرس (الدرس 61: أساسيات Django)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_61(:\\n      print(Welcome to أساسيات Django\")\\n  \\n  practice_61()",
                "error_message": "SyntaxError in الدرس 61: أساسيات Django",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 61: أساسيات Django context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_61():\\n      print(\"Welcome to أساسيات Django\")\\n  \\n  practice_61()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-62",
        "title": "الدرس 62: بنية مشروع Django",
        "category": "المستوى المتقدم",
        "order_index": 62,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"بنية مشروع Django\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن بنية مشروع Django. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_62() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ بنية مشروع Django",
            "return_value": "احتراف وفهم بنية مشروع Django وتطبيقه في مشاريعك.",
            "example": "def practice_62():\\n      print(\"Welcome to بنية مشروع Django\")\\n  \\n  practice_62()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس بنية مشروع Django لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 62: بنية مشروع Django",
                "code": "def practice_62():\\n      print(\"Welcome to بنية مشروع Django\")\\n  \\n  practice_62()",
                "expected_output": "(Output specific to الدرس 62: بنية مشروع Django)",
                "explanation": "في هذا الدرس (الدرس 62: بنية مشروع Django)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_62(:\\n      print(Welcome to بنية مشروع Django\")\\n  \\n  practice_62()",
                "error_message": "SyntaxError in الدرس 62: بنية مشروع Django",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 62: بنية مشروع Django context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_62():\\n      print(\"Welcome to بنية مشروع Django\")\\n  \\n  practice_62()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-63",
        "title": "الدرس 63: النماذج (Models)",
        "category": "المستوى المتقدم",
        "order_index": 63,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"النماذج (Models)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن النماذج (Models). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_63() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ النماذج (Models)",
            "return_value": "احتراف وفهم النماذج (Models) وتطبيقه في مشاريعك.",
            "example": "def practice_63():\\n      print(\"Welcome to النماذج (Models)\")\\n  \\n  practice_63()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس النماذج (Models) لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 63: النماذج (Models)",
                "code": "def practice_63():\\n      print(\"Welcome to النماذج (Models)\")\\n  \\n  practice_63()",
                "expected_output": "(Output specific to الدرس 63: النماذج (Models))",
                "explanation": "في هذا الدرس (الدرس 63: النماذج (Models))، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_63(:\\n      print(Welcome to النماذج (Models)\")\\n  \\n  practice_63()",
                "error_message": "SyntaxError in الدرس 63: النماذج (Models)",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 63: النماذج (Models) context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_63():\\n      print(\"Welcome to النماذج (Models)\")\\n  \\n  practice_63()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-64",
        "title": "الدرس 64: العروض (Views)",
        "category": "المستوى المتقدم",
        "order_index": 64,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"العروض (Views)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن العروض (Views). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_64() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ العروض (Views)",
            "return_value": "احتراف وفهم العروض (Views) وتطبيقه في مشاريعك.",
            "example": "def practice_64():\\n      print(\"Welcome to العروض (Views)\")\\n  \\n  practice_64()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس العروض (Views) لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 64: العروض (Views)",
                "code": "def practice_64():\\n      print(\"Welcome to العروض (Views)\")\\n  \\n  practice_64()",
                "expected_output": "(Output specific to الدرس 64: العروض (Views))",
                "explanation": "في هذا الدرس (الدرس 64: العروض (Views))، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_64(:\\n      print(Welcome to العروض (Views)\")\\n  \\n  practice_64()",
                "error_message": "SyntaxError in الدرس 64: العروض (Views)",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 64: العروض (Views) context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_64():\\n      print(\"Welcome to العروض (Views)\")\\n  \\n  practice_64()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-65",
        "title": "الدرس 65: تطبيق: مدونة بسيطة",
        "category": "المستوى المتقدم",
        "order_index": 65,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"تطبيق: مدونة بسيطة\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن تطبيق: مدونة بسيطة. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_65() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ تطبيق: مدونة بسيطة",
            "return_value": "احتراف وفهم تطبيق: مدونة بسيطة وتطبيقه في مشاريعك.",
            "example": "def practice_65():\\n      print(\"Welcome to تطبيق: مدونة بسيطة\")\\n  \\n  practice_65()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس تطبيق: مدونة بسيطة لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 65: تطبيق: مدونة بسيطة",
                "code": "def practice_65():\\n      print(\"Welcome to تطبيق: مدونة بسيطة\")\\n  \\n  practice_65()",
                "expected_output": "(Output specific to الدرس 65: تطبيق: مدونة بسيطة)",
                "explanation": "في هذا الدرس (الدرس 65: تطبيق: مدونة بسيطة)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_65(:\\n      print(Welcome to تطبيق: مدونة بسيطة\")\\n  \\n  practice_65()",
                "error_message": "SyntaxError in الدرس 65: تطبيق: مدونة بسيطة",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 65: تطبيق: مدونة بسيطة context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_65():\\n      print(\"Welcome to تطبيق: مدونة بسيطة\")\\n  \\n  practice_65()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "project"
    },
    {
        "lesson_slug": "python-66",
        "title": "الدرس 66: مقدمة في الذكاء الاصطناعي",
        "category": "المستوى المتقدم",
        "order_index": 66,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"مقدمة في الذكاء الاصطناعي\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن مقدمة في الذكاء الاصطناعي. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_66() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ مقدمة في الذكاء الاصطناعي",
            "return_value": "احتراف وفهم مقدمة في الذكاء الاصطناعي وتطبيقه في مشاريعك.",
            "example": "def practice_66():\\n      print(\"Welcome to مقدمة في الذكاء الاصطناعي\")\\n  \\n  practice_66()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس مقدمة في الذكاء الاصطناعي لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 66: مقدمة في الذكاء الاصطناعي",
                "code": "def practice_66():\\n      print(\"Welcome to مقدمة في الذكاء الاصطناعي\")\\n  \\n  practice_66()",
                "expected_output": "(Output specific to الدرس 66: مقدمة في الذكاء الاصطناعي)",
                "explanation": "في هذا الدرس (الدرس 66: مقدمة في الذكاء الاصطناعي)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_66(:\\n      print(Welcome to مقدمة في الذكاء الاصطناعي\")\\n  \\n  practice_66()",
                "error_message": "SyntaxError in الدرس 66: مقدمة في الذكاء الاصطناعي",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 66: مقدمة في الذكاء الاصطناعي context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_66():\\n      print(\"Welcome to مقدمة في الذكاء الاصطناعي\")\\n  \\n  practice_66()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-67",
        "title": "الدرس 67: أساسيات تعلم الآلة",
        "category": "المستوى المتقدم",
        "order_index": 67,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"أساسيات تعلم الآلة\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن أساسيات تعلم الآلة. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_67() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ أساسيات تعلم الآلة",
            "return_value": "احتراف وفهم أساسيات تعلم الآلة وتطبيقه في مشاريعك.",
            "example": "def practice_67():\\n      print(\"Welcome to أساسيات تعلم الآلة\")\\n  \\n  practice_67()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس أساسيات تعلم الآلة لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 67: أساسيات تعلم الآلة",
                "code": "def practice_67():\\n      print(\"Welcome to أساسيات تعلم الآلة\")\\n  \\n  practice_67()",
                "expected_output": "(Output specific to الدرس 67: أساسيات تعلم الآلة)",
                "explanation": "في هذا الدرس (الدرس 67: أساسيات تعلم الآلة)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_67(:\\n      print(Welcome to أساسيات تعلم الآلة\")\\n  \\n  practice_67()",
                "error_message": "SyntaxError in الدرس 67: أساسيات تعلم الآلة",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 67: أساسيات تعلم الآلة context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_67():\\n      print(\"Welcome to أساسيات تعلم الآلة\")\\n  \\n  practice_67()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "scenario"
    },
    {
        "lesson_slug": "python-68",
        "title": "الدرس 68: تجهيز البيانات",
        "category": "المستوى المتقدم",
        "order_index": 68,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"تجهيز البيانات\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن تجهيز البيانات. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_68() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ تجهيز البيانات",
            "return_value": "احتراف وفهم تجهيز البيانات وتطبيقه في مشاريعك.",
            "example": "def practice_68():\\n      print(\"Welcome to تجهيز البيانات\")\\n  \\n  practice_68()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس تجهيز البيانات لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 68: تجهيز البيانات",
                "code": "def practice_68():\\n      print(\"Welcome to تجهيز البيانات\")\\n  \\n  practice_68()",
                "expected_output": "(Output specific to الدرس 68: تجهيز البيانات)",
                "explanation": "في هذا الدرس (الدرس 68: تجهيز البيانات)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_68(:\\n      print(Welcome to تجهيز البيانات\")\\n  \\n  practice_68()",
                "error_message": "SyntaxError in الدرس 68: تجهيز البيانات",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 68: تجهيز البيانات context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_68():\\n      print(\"Welcome to تجهيز البيانات\")\\n  \\n  practice_68()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "code_reading"
    },
    {
        "lesson_slug": "python-69",
        "title": "الدرس 69: بناء نموذج تنبؤ بسيط",
        "category": "المستوى المتقدم",
        "order_index": 69,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"بناء نموذج تنبؤ بسيط\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن بناء نموذج تنبؤ بسيط. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_69() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ بناء نموذج تنبؤ بسيط",
            "return_value": "احتراف وفهم بناء نموذج تنبؤ بسيط وتطبيقه في مشاريعك.",
            "example": "def practice_69():\\n      print(\"Welcome to بناء نموذج تنبؤ بسيط\")\\n  \\n  practice_69()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس بناء نموذج تنبؤ بسيط لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 69: بناء نموذج تنبؤ بسيط",
                "code": "def practice_69():\\n      print(\"Welcome to بناء نموذج تنبؤ بسيط\")\\n  \\n  practice_69()",
                "expected_output": "(Output specific to الدرس 69: بناء نموذج تنبؤ بسيط)",
                "explanation": "في هذا الدرس (الدرس 69: بناء نموذج تنبؤ بسيط)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_69(:\\n      print(Welcome to بناء نموذج تنبؤ بسيط\")\\n  \\n  practice_69()",
                "error_message": "SyntaxError in الدرس 69: بناء نموذج تنبؤ بسيط",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 69: بناء نموذج تنبؤ بسيط context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_69():\\n      print(\"Welcome to بناء نموذج تنبؤ بسيط\")\\n  \\n  practice_69()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-70",
        "title": "الدرس 70: تقييم النموذج",
        "category": "المستوى المتقدم",
        "order_index": 70,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"تقييم النموذج\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن تقييم النموذج. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_70() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ تقييم النموذج",
            "return_value": "احتراف وفهم تقييم النموذج وتطبيقه في مشاريعك.",
            "example": "def practice_70():\\n      print(\"Welcome to تقييم النموذج\")\\n  \\n  practice_70()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس تقييم النموذج لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 70: تقييم النموذج",
                "code": "def practice_70():\\n      print(\"Welcome to تقييم النموذج\")\\n  \\n  practice_70()",
                "expected_output": "(Output specific to الدرس 70: تقييم النموذج)",
                "explanation": "في هذا الدرس (الدرس 70: تقييم النموذج)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_70(:\\n      print(Welcome to تقييم النموذج\")\\n  \\n  practice_70()",
                "error_message": "SyntaxError in الدرس 70: تقييم النموذج",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 70: تقييم النموذج context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_70():\\n      print(\"Welcome to تقييم النموذج\")\\n  \\n  practice_70()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "milestone"
    },
    {
        "lesson_slug": "python-71",
        "title": "الدرس 71: مقدمة في الشبكات العصبية",
        "category": "المستوى المتقدم",
        "order_index": 71,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"مقدمة في الشبكات العصبية\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن مقدمة في الشبكات العصبية. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_71() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ مقدمة في الشبكات العصبية",
            "return_value": "احتراف وفهم مقدمة في الشبكات العصبية وتطبيقه في مشاريعك.",
            "example": "def practice_71():\\n      print(\"Welcome to مقدمة في الشبكات العصبية\")\\n  \\n  practice_71()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس مقدمة في الشبكات العصبية لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 71: مقدمة في الشبكات العصبية",
                "code": "def practice_71():\\n      print(\"Welcome to مقدمة في الشبكات العصبية\")\\n  \\n  practice_71()",
                "expected_output": "(Output specific to الدرس 71: مقدمة في الشبكات العصبية)",
                "explanation": "في هذا الدرس (الدرس 71: مقدمة في الشبكات العصبية)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_71(:\\n      print(Welcome to مقدمة في الشبكات العصبية\")\\n  \\n  practice_71()",
                "error_message": "SyntaxError in الدرس 71: مقدمة في الشبكات العصبية",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 71: مقدمة في الشبكات العصبية context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_71():\\n      print(\"Welcome to مقدمة في الشبكات العصبية\")\\n  \\n  practice_71()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-72",
        "title": "الدرس 72: مفهوم الـ Deep Learning",
        "category": "المستوى المتقدم",
        "order_index": 72,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"مفهوم الـ Deep Learning\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن مفهوم الـ Deep Learning. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_72() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ مفهوم الـ Deep Learning",
            "return_value": "احتراف وفهم مفهوم الـ Deep Learning وتطبيقه في مشاريعك.",
            "example": "def practice_72():\\n      print(\"Welcome to مفهوم الـ Deep Learning\")\\n  \\n  practice_72()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس مفهوم الـ Deep Learning لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 72: مفهوم الـ Deep Learning",
                "code": "def practice_72():\\n      print(\"Welcome to مفهوم الـ Deep Learning\")\\n  \\n  practice_72()",
                "expected_output": "(Output specific to الدرس 72: مفهوم الـ Deep Learning)",
                "explanation": "في هذا الدرس (الدرس 72: مفهوم الـ Deep Learning)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_72(:\\n      print(Welcome to مفهوم الـ Deep Learning\")\\n  \\n  practice_72()",
                "error_message": "SyntaxError in الدرس 72: مفهوم الـ Deep Learning",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 72: مفهوم الـ Deep Learning context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_72():\\n      print(\"Welcome to مفهوم الـ Deep Learning\")\\n  \\n  practice_72()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "debugging"
    },
    {
        "lesson_slug": "python-73",
        "title": "الدرس 73: التعامل مع الصور",
        "category": "المستوى المتقدم",
        "order_index": 73,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"التعامل مع الصور\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن التعامل مع الصور. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_73() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ التعامل مع الصور",
            "return_value": "احتراف وفهم التعامل مع الصور وتطبيقه في مشاريعك.",
            "example": "def practice_73():\\n      print(\"Welcome to التعامل مع الصور\")\\n  \\n  practice_73()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس التعامل مع الصور لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 73: التعامل مع الصور",
                "code": "def practice_73():\\n      print(\"Welcome to التعامل مع الصور\")\\n  \\n  practice_73()",
                "expected_output": "(Output specific to الدرس 73: التعامل مع الصور)",
                "explanation": "في هذا الدرس (الدرس 73: التعامل مع الصور)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_73(:\\n      print(Welcome to التعامل مع الصور\")\\n  \\n  practice_73()",
                "error_message": "SyntaxError in الدرس 73: التعامل مع الصور",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 73: التعامل مع الصور context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_73():\\n      print(\"Welcome to التعامل مع الصور\")\\n  \\n  practice_73()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-74",
        "title": "الدرس 74: تصنيف الصور باستخدام بايثون",
        "category": "المستوى المتقدم",
        "order_index": 74,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"تصنيف الصور باستخدام بايثون\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن تصنيف الصور باستخدام بايثون. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_74() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ تصنيف الصور باستخدام بايثون",
            "return_value": "احتراف وفهم تصنيف الصور باستخدام بايثون وتطبيقه في مشاريعك.",
            "example": "def practice_74():\\n      print(\"Welcome to تصنيف الصور باستخدام بايثون\")\\n  \\n  practice_74()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس تصنيف الصور باستخدام بايثون لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 74: تصنيف الصور باستخدام بايثون",
                "code": "def practice_74():\\n      print(\"Welcome to تصنيف الصور باستخدام بايثون\")\\n  \\n  practice_74()",
                "expected_output": "(Output specific to الدرس 74: تصنيف الصور باستخدام بايثون)",
                "explanation": "في هذا الدرس (الدرس 74: تصنيف الصور باستخدام بايثون)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_74(:\\n      print(Welcome to تصنيف الصور باستخدام بايثون\")\\n  \\n  practice_74()",
                "error_message": "SyntaxError in الدرس 74: تصنيف الصور باستخدام بايثون",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 74: تصنيف الصور باستخدام بايثون context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_74():\\n      print(\"Welcome to تصنيف الصور باستخدام بايثون\")\\n  \\n  practice_74()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-75",
        "title": "الدرس 75: تطبيق ذكاء اصطناعي: التعرف على الوجوه",
        "category": "المستوى المتقدم",
        "order_index": 75,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"تطبيق ذكاء اصطناعي: التعرف على الوجوه\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن تطبيق ذكاء اصطناعي: التعرف على الوجوه. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_75() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ تطبيق ذكاء اصطناعي: التعرف على الوجوه",
            "return_value": "احتراف وفهم تطبيق ذكاء اصطناعي: التعرف على الوجوه وتطبيقه في مشاريعك.",
            "example": "def practice_75():\\n      print(\"Welcome to تطبيق ذكاء اصطناعي: التعرف على الوجوه\")\\n  \\n  practice_75()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس تطبيق ذكاء اصطناعي: التعرف على الوجوه لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 75: تطبيق ذكاء اصطناعي: التعرف على الوجوه",
                "code": "def practice_75():\\n      print(\"Welcome to تطبيق ذكاء اصطناعي: التعرف على الوجوه\")\\n  \\n  practice_75()",
                "expected_output": "(Output specific to الدرس 75: تطبيق ذكاء اصطناعي: التعرف على الوجوه)",
                "explanation": "في هذا الدرس (الدرس 75: تطبيق ذكاء اصطناعي: التعرف على الوجوه)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_75(:\\n      print(Welcome to تطبيق ذكاء اصطناعي: التعرف على الوجوه\")\\n  \\n  practice_75()",
                "error_message": "SyntaxError in الدرس 75: تطبيق ذكاء اصطناعي: التعرف على الوجوه",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 75: تطبيق ذكاء اصطناعي: التعرف على الوجوه context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_75():\\n      print(\"Welcome to تطبيق ذكاء اصطناعي: التعرف على الوجوه\")\\n  \\n  practice_75()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "capstone"
    },
    {
        "lesson_slug": "python-76",
        "title": "الدرس 76: أساسيات أمن المعلومات في بايثون",
        "category": "المستوى المتقدم",
        "order_index": 76,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"أساسيات أمن المعلومات في بايثون\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن أساسيات أمن المعلومات في بايثون. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_76() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ أساسيات أمن المعلومات في بايثون",
            "return_value": "احتراف وفهم أساسيات أمن المعلومات في بايثون وتطبيقه في مشاريعك.",
            "example": "def practice_76():\\n      print(\"Welcome to أساسيات أمن المعلومات في بايثون\")\\n  \\n  practice_76()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس أساسيات أمن المعلومات في بايثون لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 76: أساسيات أمن المعلومات في بايثون",
                "code": "def practice_76():\\n      print(\"Welcome to أساسيات أمن المعلومات في بايثون\")\\n  \\n  practice_76()",
                "expected_output": "(Output specific to الدرس 76: أساسيات أمن المعلومات في بايثون)",
                "explanation": "في هذا الدرس (الدرس 76: أساسيات أمن المعلومات في بايثون)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_76(:\\n      print(Welcome to أساسيات أمن المعلومات في بايثون\")\\n  \\n  practice_76()",
                "error_message": "SyntaxError in الدرس 76: أساسيات أمن المعلومات في بايثون",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 76: أساسيات أمن المعلومات في بايثون context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_76():\\n      print(\"Welcome to أساسيات أمن المعلومات في بايثون\")\\n  \\n  practice_76()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-77",
        "title": "الدرس 77: تشفير النصوص (Cryptography)",
        "category": "المستوى المتقدم",
        "order_index": 77,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"تشفير النصوص (Cryptography)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن تشفير النصوص (Cryptography). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_77() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ تشفير النصوص (Cryptography)",
            "return_value": "احتراف وفهم تشفير النصوص (Cryptography) وتطبيقه في مشاريعك.",
            "example": "def practice_77():\\n      print(\"Welcome to تشفير النصوص (Cryptography)\")\\n  \\n  practice_77()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس تشفير النصوص (Cryptography) لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 77: تشفير النصوص (Cryptography)",
                "code": "def practice_77():\\n      print(\"Welcome to تشفير النصوص (Cryptography)\")\\n  \\n  practice_77()",
                "expected_output": "(Output specific to الدرس 77: تشفير النصوص (Cryptography))",
                "explanation": "في هذا المثال، قمنا بالتعامل مع النصوص (Strings) في بايثون، وهي الأساس لأي تطبيق يتعامل مع البيانات النصية والرسائل."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_77(:\\n      print(Welcome to تشفير النصوص (Cryptography)\")\\n  \\n  practice_77()",
                "error_message": "SyntaxError in الدرس 77: تشفير النصوص (Cryptography)",
                "explanation": "خطأ شائع جداً: نسيان إغلاق علامات التنصيص (\" أو ') مما يؤدي إلى ظهور SyntaxError وانهيار البرنامج."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 77: تشفير النصوص (Cryptography) context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "خطأ شائع جداً: نسيان إغلاق علامات التنصيص (\" أو ') مما يؤدي إلى ظهور SyntaxError وانهيار البرنامج."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_77():\\n      print(\"Welcome to تشفير النصوص (Cryptography)\")\\n  \\n  practice_77()",
                "expected_output": "Correct execution output",
                "explanation": "تحدي: حاول إضافة كلمة \"مرحباً\" قبل النص المطبوع باستخدام أسلوب دمج النصوص (Concatenation) أو (f-strings)."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-78",
        "title": "الدرس 78: فك التشفير",
        "category": "المستوى المتقدم",
        "order_index": 78,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"فك التشفير\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن فك التشفير. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_78() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ فك التشفير",
            "return_value": "احتراف وفهم فك التشفير وتطبيقه في مشاريعك.",
            "example": "def practice_78():\\n      print(\"Welcome to فك التشفير\")\\n  \\n  practice_78()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس فك التشفير لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 78: فك التشفير",
                "code": "def practice_78():\\n      print(\"Welcome to فك التشفير\")\\n  \\n  practice_78()",
                "expected_output": "(Output specific to الدرس 78: فك التشفير)",
                "explanation": "في هذا الدرس (الدرس 78: فك التشفير)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_78(:\\n      print(Welcome to فك التشفير\")\\n  \\n  practice_78()",
                "error_message": "SyntaxError in الدرس 78: فك التشفير",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 78: فك التشفير context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_78():\\n      print(\"Welcome to فك التشفير\")\\n  \\n  practice_78()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "ai_challenge"
    },
    {
        "lesson_slug": "python-79",
        "title": "الدرس 79: فحص المنافذ (Port Scanning)",
        "category": "المستوى المتقدم",
        "order_index": 79,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"فحص المنافذ (Port Scanning)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن فحص المنافذ (Port Scanning). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_79() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ فحص المنافذ (Port Scanning)",
            "return_value": "احتراف وفهم فحص المنافذ (Port Scanning) وتطبيقه في مشاريعك.",
            "example": "def practice_79():\\n      print(\"Welcome to فحص المنافذ (Port Scanning)\")\\n  \\n  practice_79()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس فحص المنافذ (Port Scanning) لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 79: فحص المنافذ (Port Scanning)",
                "code": "def practice_79():\\n      print(\"Welcome to فحص المنافذ (Port Scanning)\")\\n  \\n  practice_79()",
                "expected_output": "(Output specific to الدرس 79: فحص المنافذ (Port Scanning))",
                "explanation": "في هذا الدرس (الدرس 79: فحص المنافذ (Port Scanning))، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_79(:\\n      print(Welcome to فحص المنافذ (Port Scanning)\")\\n  \\n  practice_79()",
                "error_message": "SyntaxError in الدرس 79: فحص المنافذ (Port Scanning)",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 79: فحص المنافذ (Port Scanning) context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_79():\\n      print(\"Welcome to فحص المنافذ (Port Scanning)\")\\n  \\n  practice_79()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-80",
        "title": "الدرس 80: تطبيق: أداة فحص الشبكات",
        "category": "مشاريع وتطبيقات",
        "order_index": 80,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"تطبيق: أداة فحص الشبكات\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن تطبيق: أداة فحص الشبكات. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_80() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ تطبيق: أداة فحص الشبكات",
            "return_value": "احتراف وفهم تطبيق: أداة فحص الشبكات وتطبيقه في مشاريعك.",
            "example": "def practice_80():\\n      print(\"Welcome to تطبيق: أداة فحص الشبكات\")\\n  \\n  practice_80()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس تطبيق: أداة فحص الشبكات لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 80: تطبيق: أداة فحص الشبكات",
                "code": "def practice_80():\\n      print(\"Welcome to تطبيق: أداة فحص الشبكات\")\\n  \\n  practice_80()",
                "expected_output": "(Output specific to الدرس 80: تطبيق: أداة فحص الشبكات)",
                "explanation": "في هذا الدرس (الدرس 80: تطبيق: أداة فحص الشبكات)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_80(:\\n      print(Welcome to تطبيق: أداة فحص الشبكات\")\\n  \\n  practice_80()",
                "error_message": "SyntaxError in الدرس 80: تطبيق: أداة فحص الشبكات",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 80: تطبيق: أداة فحص الشبكات context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_80():\\n      print(\"Welcome to تطبيق: أداة فحص الشبكات\")\\n  \\n  practice_80()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "milestone"
    },
    {
        "lesson_slug": "python-81",
        "title": "الدرس 81: المكتبات المتقدمة",
        "category": "مشاريع وتطبيقات",
        "order_index": 81,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"المكتبات المتقدمة\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن المكتبات المتقدمة. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_81() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ المكتبات المتقدمة",
            "return_value": "احتراف وفهم المكتبات المتقدمة وتطبيقه في مشاريعك.",
            "example": "def practice_81():\\n      print(\"Welcome to المكتبات المتقدمة\")\\n  \\n  practice_81()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس المكتبات المتقدمة لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 81: المكتبات المتقدمة",
                "code": "def practice_81():\\n      print(\"Welcome to المكتبات المتقدمة\")\\n  \\n  practice_81()",
                "expected_output": "(Output specific to الدرس 81: المكتبات المتقدمة)",
                "explanation": "في هذا الدرس (الدرس 81: المكتبات المتقدمة)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_81(:\\n      print(Welcome to المكتبات المتقدمة\")\\n  \\n  practice_81()",
                "error_message": "SyntaxError in الدرس 81: المكتبات المتقدمة",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 81: المكتبات المتقدمة context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_81():\\n      print(\"Welcome to المكتبات المتقدمة\")\\n  \\n  practice_81()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-82",
        "title": "الدرس 82: التوازي (Threading)",
        "category": "مشاريع وتطبيقات",
        "order_index": 82,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"التوازي (Threading)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن التوازي (Threading). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_82() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ التوازي (Threading)",
            "return_value": "احتراف وفهم التوازي (Threading) وتطبيقه في مشاريعك.",
            "example": "def practice_82():\\n      print(\"Welcome to التوازي (Threading)\")\\n  \\n  practice_82()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس التوازي (Threading) لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 82: التوازي (Threading)",
                "code": "def practice_82():\\n      print(\"Welcome to التوازي (Threading)\")\\n  \\n  practice_82()",
                "expected_output": "(Output specific to الدرس 82: التوازي (Threading))",
                "explanation": "في هذا الدرس (الدرس 82: التوازي (Threading))، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_82(:\\n      print(Welcome to التوازي (Threading)\")\\n  \\n  practice_82()",
                "error_message": "SyntaxError in الدرس 82: التوازي (Threading)",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 82: التوازي (Threading) context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_82():\\n      print(\"Welcome to التوازي (Threading)\")\\n  \\n  practice_82()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "scenario"
    },
    {
        "lesson_slug": "python-83",
        "title": "الدرس 83: المعالجة المتعددة (Multiprocessing)",
        "category": "مشاريع وتطبيقات",
        "order_index": 83,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"المعالجة المتعددة (Multiprocessing)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن المعالجة المتعددة (Multiprocessing). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_83() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ المعالجة المتعددة (Multiprocessing)",
            "return_value": "احتراف وفهم المعالجة المتعددة (Multiprocessing) وتطبيقه في مشاريعك.",
            "example": "def practice_83():\\n      print(\"Welcome to المعالجة المتعددة (Multiprocessing)\")\\n  \\n  practice_83()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس المعالجة المتعددة (Multiprocessing) لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 83: المعالجة المتعددة (Multiprocessing)",
                "code": "def practice_83():\\n      print(\"Welcome to المعالجة المتعددة (Multiprocessing)\")\\n  \\n  practice_83()",
                "expected_output": "(Output specific to الدرس 83: المعالجة المتعددة (Multiprocessing))",
                "explanation": "في هذا الدرس (الدرس 83: المعالجة المتعددة (Multiprocessing))، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_83(:\\n      print(Welcome to المعالجة المتعددة (Multiprocessing)\")\\n  \\n  practice_83()",
                "error_message": "SyntaxError in الدرس 83: المعالجة المتعددة (Multiprocessing)",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 83: المعالجة المتعددة (Multiprocessing) context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_83():\\n      print(\"Welcome to المعالجة المتعددة (Multiprocessing)\")\\n  \\n  practice_83()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-84",
        "title": "الدرس 84: البرمجة غير المتزامنة (Asyncio)",
        "category": "مشاريع وتطبيقات",
        "order_index": 84,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"البرمجة غير المتزامنة (Asyncio)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن البرمجة غير المتزامنة (Asyncio). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_84() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ البرمجة غير المتزامنة (Asyncio)",
            "return_value": "احتراف وفهم البرمجة غير المتزامنة (Asyncio) وتطبيقه في مشاريعك.",
            "example": "def practice_84():\\n      print(\"Welcome to البرمجة غير المتزامنة (Asyncio)\")\\n  \\n  practice_84()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس البرمجة غير المتزامنة (Asyncio) لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 84: البرمجة غير المتزامنة (Asyncio)",
                "code": "def practice_84():\\n      print(\"Welcome to البرمجة غير المتزامنة (Asyncio)\")\\n  \\n  practice_84()",
                "expected_output": "(Output specific to الدرس 84: البرمجة غير المتزامنة (Asyncio))",
                "explanation": "في هذا الدرس (الدرس 84: البرمجة غير المتزامنة (Asyncio))، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_84(:\\n      print(Welcome to البرمجة غير المتزامنة (Asyncio)\")\\n  \\n  practice_84()",
                "error_message": "SyntaxError in الدرس 84: البرمجة غير المتزامنة (Asyncio)",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 84: البرمجة غير المتزامنة (Asyncio) context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_84():\\n      print(\"Welcome to البرمجة غير المتزامنة (Asyncio)\")\\n  \\n  practice_84()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "debugging"
    },
    {
        "lesson_slug": "python-85",
        "title": "الدرس 85: اختبار الكود (Unit Testing)",
        "category": "مشاريع وتطبيقات",
        "order_index": 85,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"اختبار الكود (Unit Testing)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن اختبار الكود (Unit Testing). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_85() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ اختبار الكود (Unit Testing)",
            "return_value": "احتراف وفهم اختبار الكود (Unit Testing) وتطبيقه في مشاريعك.",
            "example": "def practice_85():\\n      print(\"Welcome to اختبار الكود (Unit Testing)\")\\n  \\n  practice_85()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس اختبار الكود (Unit Testing) لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 85: اختبار الكود (Unit Testing)",
                "code": "def practice_85():\\n      print(\"Welcome to اختبار الكود (Unit Testing)\")\\n  \\n  practice_85()",
                "expected_output": "(Output specific to الدرس 85: اختبار الكود (Unit Testing))",
                "explanation": "في هذا الدرس (الدرس 85: اختبار الكود (Unit Testing))، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_85(:\\n      print(Welcome to اختبار الكود (Unit Testing)\")\\n  \\n  practice_85()",
                "error_message": "SyntaxError in الدرس 85: اختبار الكود (Unit Testing)",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 85: اختبار الكود (Unit Testing) context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_85():\\n      print(\"Welcome to اختبار الكود (Unit Testing)\")\\n  \\n  practice_85()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "project"
    },
    {
        "lesson_slug": "python-86",
        "title": "الدرس 86: مفاهيم متقدمة في البرمجة الدالة (Functional)",
        "category": "مشاريع وتطبيقات",
        "order_index": 86,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"مفاهيم متقدمة في البرمجة الدالة (Functional)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن مفاهيم متقدمة في البرمجة الدالة (Functional). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_86() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ مفاهيم متقدمة في البرمجة الدالة (Functional)",
            "return_value": "احتراف وفهم مفاهيم متقدمة في البرمجة الدالة (Functional) وتطبيقه في مشاريعك.",
            "example": "def practice_86():\\n      print(\"Welcome to مفاهيم متقدمة في البرمجة الدالة (Functional)\")\\n  \\n  practice_86()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس مفاهيم متقدمة في البرمجة الدالة (Functional) لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 86: مفاهيم متقدمة في البرمجة الدالة (Functional)",
                "code": "def practice_86():\\n      print(\"Welcome to مفاهيم متقدمة في البرمجة الدالة (Functional)\")\\n  \\n  practice_86()",
                "expected_output": "(Output specific to الدرس 86: مفاهيم متقدمة في البرمجة الدالة (Functional))",
                "explanation": "الدوال (Functions) تساعدنا في تغليف مجموعة من الأوامر تحت اسم واحد، لنتمكن من إعادة استخدامها لاحقاً وتجنب التكرار."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_86(:\\n      print(Welcome to مفاهيم متقدمة في البرمجة الدالة (Functional)\")\\n  \\n  practice_86()",
                "error_message": "SyntaxError in الدرس 86: مفاهيم متقدمة في البرمجة الدالة (Functional)",
                "explanation": "تذكر دائماً أن الدالة لا تعمل بمجرد كتابتها! يجب عليك \"استدعاء\" الدالة بكتابة اسمها مع الأقواس () لكي يتم تشغيلها."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 86: مفاهيم متقدمة في البرمجة الدالة (Functional) context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "تذكر دائماً أن الدالة لا تعمل بمجرد كتابتها! يجب عليك \"استدعاء\" الدالة بكتابة اسمها مع الأقواس () لكي يتم تشغيلها."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_86():\\n      print(\"Welcome to مفاهيم متقدمة في البرمجة الدالة (Functional)\")\\n  \\n  practice_86()",
                "expected_output": "Correct execution output",
                "explanation": "تحدي الدوال: أضف مدخلاً جديداً (Parameter) للدالة وقم باستخدامه داخل الأوامر."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-87",
        "title": "الدرس 87: دوال Map و Filter",
        "category": "مشاريع وتطبيقات",
        "order_index": 87,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"دوال Map و Filter\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن دوال Map و Filter. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_87() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ دوال Map و Filter",
            "return_value": "احتراف وفهم دوال Map و Filter وتطبيقه في مشاريعك.",
            "example": "def practice_87():\\n      print(\"Welcome to دوال Map و Filter\")\\n  \\n  practice_87()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس دوال Map و Filter لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 87: دوال Map و Filter",
                "code": "def practice_87():\\n      print(\"Welcome to دوال Map و Filter\")\\n  \\n  practice_87()",
                "expected_output": "(Output specific to الدرس 87: دوال Map و Filter)",
                "explanation": "الدوال (Functions) تساعدنا في تغليف مجموعة من الأوامر تحت اسم واحد، لنتمكن من إعادة استخدامها لاحقاً وتجنب التكرار."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_87(:\\n      print(Welcome to دوال Map و Filter\")\\n  \\n  practice_87()",
                "error_message": "SyntaxError in الدرس 87: دوال Map و Filter",
                "explanation": "تذكر دائماً أن الدالة لا تعمل بمجرد كتابتها! يجب عليك \"استدعاء\" الدالة بكتابة اسمها مع الأقواس () لكي يتم تشغيلها."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 87: دوال Map و Filter context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "تذكر دائماً أن الدالة لا تعمل بمجرد كتابتها! يجب عليك \"استدعاء\" الدالة بكتابة اسمها مع الأقواس () لكي يتم تشغيلها."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_87():\\n      print(\"Welcome to دوال Map و Filter\")\\n  \\n  practice_87()",
                "expected_output": "Correct execution output",
                "explanation": "تحدي الدوال: أضف مدخلاً جديداً (Parameter) للدالة وقم باستخدامه داخل الأوامر."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-88",
        "title": "الدرس 88: دالة Lambda السريعة",
        "category": "مشاريع وتطبيقات",
        "order_index": 88,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"دالة Lambda السريعة\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن دالة Lambda السريعة. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_88() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ دالة Lambda السريعة",
            "return_value": "احتراف وفهم دالة Lambda السريعة وتطبيقه في مشاريعك.",
            "example": "def practice_88():\\n      print(\"Welcome to دالة Lambda السريعة\")\\n  \\n  practice_88()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس دالة Lambda السريعة لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 88: دالة Lambda السريعة",
                "code": "def practice_88():\\n      print(\"Welcome to دالة Lambda السريعة\")\\n  \\n  practice_88()",
                "expected_output": "(Output specific to الدرس 88: دالة Lambda السريعة)",
                "explanation": "في هذا الدرس (الدرس 88: دالة Lambda السريعة)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_88(:\\n      print(Welcome to دالة Lambda السريعة\")\\n  \\n  practice_88()",
                "error_message": "SyntaxError in الدرس 88: دالة Lambda السريعة",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 88: دالة Lambda السريعة context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_88():\\n      print(\"Welcome to دالة Lambda السريعة\")\\n  \\n  practice_88()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-89",
        "title": "الدرس 89: تعابير List Comprehensions",
        "category": "مشاريع وتطبيقات",
        "order_index": 89,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"تعابير List Comprehensions\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن تعابير List Comprehensions. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_89() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ تعابير List Comprehensions",
            "return_value": "احتراف وفهم تعابير List Comprehensions وتطبيقه في مشاريعك.",
            "example": "def practice_89():\\n      print(\"Welcome to تعابير List Comprehensions\")\\n  \\n  practice_89()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس تعابير List Comprehensions لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 89: تعابير List Comprehensions",
                "code": "def practice_89():\\n      print(\"Welcome to تعابير List Comprehensions\")\\n  \\n  practice_89()",
                "expected_output": "(Output specific to الدرس 89: تعابير List Comprehensions)",
                "explanation": "المثال أعلاه يوضح قوة القوائم (Lists) في تخزين عدة عناصر متسلسلة في متغير واحد بدل إنشاء عشرات المتغيرات المستقلة."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_89(:\\n      print(Welcome to تعابير List Comprehensions\")\\n  \\n  practice_89()",
                "error_message": "SyntaxError in الدرس 89: تعابير List Comprehensions",
                "explanation": "أكثر الأخطاء شيوعاً هو محاولة الوصول لعنصر غير موجود في القائمة (IndexError)، تذكر دائماً أن العد يبدأ من الصفر (0)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 89: تعابير List Comprehensions context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر الأخطاء شيوعاً هو محاولة الوصول لعنصر غير موجود في القائمة (IndexError)، تذكر دائماً أن العد يبدأ من الصفر (0)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_89():\\n      print(\"Welcome to تعابير List Comprehensions\")\\n  \\n  practice_89()",
                "expected_output": "Correct execution output",
                "explanation": "تحدي القوائم: استخدم دالة append() لإضافة عنصر جديد في نهاية القائمة ثم قم بطباعة القائمة بالكامل."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-90",
        "title": "الدرس 90: استكشاف أخطاء متقدمة (Debugging)",
        "category": "مشاريع وتطبيقات",
        "order_index": 90,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"استكشاف أخطاء متقدمة (Debugging)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن استكشاف أخطاء متقدمة (Debugging). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_90() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ استكشاف أخطاء متقدمة (Debugging)",
            "return_value": "احتراف وفهم استكشاف أخطاء متقدمة (Debugging) وتطبيقه في مشاريعك.",
            "example": "def practice_90():\\n      print(\"Welcome to استكشاف أخطاء متقدمة (Debugging)\")\\n  \\n  practice_90()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس استكشاف أخطاء متقدمة (Debugging) لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 90: استكشاف أخطاء متقدمة (Debugging)",
                "code": "def practice_90():\\n      print(\"Welcome to استكشاف أخطاء متقدمة (Debugging)\")\\n  \\n  practice_90()",
                "expected_output": "(Output specific to الدرس 90: استكشاف أخطاء متقدمة (Debugging))",
                "explanation": "في هذا الدرس (الدرس 90: استكشاف أخطاء متقدمة (Debugging))، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_90(:\\n      print(Welcome to استكشاف أخطاء متقدمة (Debugging)\")\\n  \\n  practice_90()",
                "error_message": "SyntaxError in الدرس 90: استكشاف أخطاء متقدمة (Debugging)",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 90: استكشاف أخطاء متقدمة (Debugging) context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_90():\\n      print(\"Welcome to استكشاف أخطاء متقدمة (Debugging)\")\\n  \\n  practice_90()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "milestone"
    },
    {
        "lesson_slug": "python-91",
        "title": "الدرس 91: كتابة كود نظيف (Clean Code)",
        "category": "مشاريع وتطبيقات",
        "order_index": 91,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"كتابة كود نظيف (Clean Code)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن كتابة كود نظيف (Clean Code). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_91() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ كتابة كود نظيف (Clean Code)",
            "return_value": "احتراف وفهم كتابة كود نظيف (Clean Code) وتطبيقه في مشاريعك.",
            "example": "def practice_91():\\n      print(\"Welcome to كتابة كود نظيف (Clean Code)\")\\n  \\n  practice_91()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس كتابة كود نظيف (Clean Code) لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 91: كتابة كود نظيف (Clean Code)",
                "code": "def practice_91():\\n      print(\"Welcome to كتابة كود نظيف (Clean Code)\")\\n  \\n  practice_91()",
                "expected_output": "(Output specific to الدرس 91: كتابة كود نظيف (Clean Code))",
                "explanation": "في هذا الدرس (الدرس 91: كتابة كود نظيف (Clean Code))، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_91(:\\n      print(Welcome to كتابة كود نظيف (Clean Code)\")\\n  \\n  practice_91()",
                "error_message": "SyntaxError in الدرس 91: كتابة كود نظيف (Clean Code)",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 91: كتابة كود نظيف (Clean Code) context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_91():\\n      print(\"Welcome to كتابة كود نظيف (Clean Code)\")\\n  \\n  practice_91()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "ai_challenge"
    },
    {
        "lesson_slug": "python-92",
        "title": "الدرس 92: مبادئ SOLID",
        "category": "مشاريع وتطبيقات",
        "order_index": 92,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"مبادئ SOLID\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن مبادئ SOLID. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_92() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ مبادئ SOLID",
            "return_value": "احتراف وفهم مبادئ SOLID وتطبيقه في مشاريعك.",
            "example": "def practice_92():\\n      print(\"Welcome to مبادئ SOLID\")\\n  \\n  practice_92()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس مبادئ SOLID لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 92: مبادئ SOLID",
                "code": "def practice_92():\\n      print(\"Welcome to مبادئ SOLID\")\\n  \\n  practice_92()",
                "expected_output": "(Output specific to الدرس 92: مبادئ SOLID)",
                "explanation": "في هذا الدرس (الدرس 92: مبادئ SOLID)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_92(:\\n      print(Welcome to مبادئ SOLID\")\\n  \\n  practice_92()",
                "error_message": "SyntaxError in الدرس 92: مبادئ SOLID",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 92: مبادئ SOLID context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_92():\\n      print(\"Welcome to مبادئ SOLID\")\\n  \\n  practice_92()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-93",
        "title": "الدرس 93: تطبيق شامل للبرمجة المتقدمة",
        "category": "مشاريع وتطبيقات",
        "order_index": 93,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"تطبيق شامل للبرمجة المتقدمة\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن تطبيق شامل للبرمجة المتقدمة. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_93() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ تطبيق شامل للبرمجة المتقدمة",
            "return_value": "احتراف وفهم تطبيق شامل للبرمجة المتقدمة وتطبيقه في مشاريعك.",
            "example": "def practice_93():\\n      print(\"Welcome to تطبيق شامل للبرمجة المتقدمة\")\\n  \\n  practice_93()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس تطبيق شامل للبرمجة المتقدمة لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 93: تطبيق شامل للبرمجة المتقدمة",
                "code": "def practice_93():\\n      print(\"Welcome to تطبيق شامل للبرمجة المتقدمة\")\\n  \\n  practice_93()",
                "expected_output": "(Output specific to الدرس 93: تطبيق شامل للبرمجة المتقدمة)",
                "explanation": "في هذا الدرس (الدرس 93: تطبيق شامل للبرمجة المتقدمة)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_93(:\\n      print(Welcome to تطبيق شامل للبرمجة المتقدمة\")\\n  \\n  practice_93()",
                "error_message": "SyntaxError in الدرس 93: تطبيق شامل للبرمجة المتقدمة",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 93: تطبيق شامل للبرمجة المتقدمة context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_93():\\n      print(\"Welcome to تطبيق شامل للبرمجة المتقدمة\")\\n  \\n  practice_93()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-94",
        "title": "الدرس 94: نشر التطبيقات (Deployment)",
        "category": "مشاريع وتطبيقات",
        "order_index": 94,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"نشر التطبيقات (Deployment)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن نشر التطبيقات (Deployment). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_94() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ نشر التطبيقات (Deployment)",
            "return_value": "احتراف وفهم نشر التطبيقات (Deployment) وتطبيقه في مشاريعك.",
            "example": "def practice_94():\\n      print(\"Welcome to نشر التطبيقات (Deployment)\")\\n  \\n  practice_94()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس نشر التطبيقات (Deployment) لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 94: نشر التطبيقات (Deployment)",
                "code": "def practice_94():\\n      print(\"Welcome to نشر التطبيقات (Deployment)\")\\n  \\n  practice_94()",
                "expected_output": "(Output specific to الدرس 94: نشر التطبيقات (Deployment))",
                "explanation": "في هذا الدرس (الدرس 94: نشر التطبيقات (Deployment))، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_94(:\\n      print(Welcome to نشر التطبيقات (Deployment)\")\\n  \\n  practice_94()",
                "error_message": "SyntaxError in الدرس 94: نشر التطبيقات (Deployment)",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 94: نشر التطبيقات (Deployment) context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_94():\\n      print(\"Welcome to نشر التطبيقات (Deployment)\")\\n  \\n  practice_94()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-95",
        "title": "الدرس 95: استخدام Docker",
        "category": "مشاريع وتطبيقات",
        "order_index": 95,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"استخدام Docker\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن استخدام Docker. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_95() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ استخدام Docker",
            "return_value": "احتراف وفهم استخدام Docker وتطبيقه في مشاريعك.",
            "example": "def practice_95():\\n      print(\"Welcome to استخدام Docker\")\\n  \\n  practice_95()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس استخدام Docker لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 95: استخدام Docker",
                "code": "def practice_95():\\n      print(\"Welcome to استخدام Docker\")\\n  \\n  practice_95()",
                "expected_output": "(Output specific to الدرس 95: استخدام Docker)",
                "explanation": "في هذا الدرس (الدرس 95: استخدام Docker)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_95(:\\n      print(Welcome to استخدام Docker\")\\n  \\n  practice_95()",
                "error_message": "SyntaxError in الدرس 95: استخدام Docker",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 95: استخدام Docker context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_95():\\n      print(\"Welcome to استخدام Docker\")\\n  \\n  practice_95()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "sandbox"
    },
    {
        "lesson_slug": "python-96",
        "title": "الدرس 96: الاستضافة على السحاب",
        "category": "مشاريع وتطبيقات",
        "order_index": 96,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"الاستضافة على السحاب\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن الاستضافة على السحاب. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_96() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ الاستضافة على السحاب",
            "return_value": "احتراف وفهم الاستضافة على السحاب وتطبيقه في مشاريعك.",
            "example": "def practice_96():\\n      print(\"Welcome to الاستضافة على السحاب\")\\n  \\n  practice_96()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس الاستضافة على السحاب لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 96: الاستضافة على السحاب",
                "code": "def practice_96():\\n      print(\"Welcome to الاستضافة على السحاب\")\\n  \\n  practice_96()",
                "expected_output": "(Output specific to الدرس 96: الاستضافة على السحاب)",
                "explanation": "في هذا الدرس (الدرس 96: الاستضافة على السحاب)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_96(:\\n      print(Welcome to الاستضافة على السحاب\")\\n  \\n  practice_96()",
                "error_message": "SyntaxError in الدرس 96: الاستضافة على السحاب",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 96: الاستضافة على السحاب context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_96():\\n      print(\"Welcome to الاستضافة على السحاب\")\\n  \\n  practice_96()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "debugging"
    },
    {
        "lesson_slug": "python-97",
        "title": "الدرس 97: مراجعة نهائية",
        "category": "مشاريع وتطبيقات",
        "order_index": 97,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"مراجعة نهائية\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن مراجعة نهائية. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_97() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ مراجعة نهائية",
            "return_value": "احتراف وفهم مراجعة نهائية وتطبيقه في مشاريعك.",
            "example": "def practice_97():\\n      print(\"Welcome to مراجعة نهائية\")\\n  \\n  practice_97()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس مراجعة نهائية لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 97: مراجعة نهائية",
                "code": "def practice_97():\\n      print(\"Welcome to مراجعة نهائية\")\\n  \\n  practice_97()",
                "expected_output": "(Output specific to الدرس 97: مراجعة نهائية)",
                "explanation": "في هذا الدرس (الدرس 97: مراجعة نهائية)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_97(:\\n      print(Welcome to مراجعة نهائية\")\\n  \\n  practice_97()",
                "error_message": "SyntaxError in الدرس 97: مراجعة نهائية",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 97: مراجعة نهائية context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_97():\\n      print(\"Welcome to مراجعة نهائية\")\\n  \\n  practice_97()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "scenario"
    },
    {
        "lesson_slug": "python-98",
        "title": "الدرس 98: مشروع التخرج الأول",
        "category": "مشاريع وتطبيقات",
        "order_index": 98,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"مشروع التخرج الأول\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن مشروع التخرج الأول. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_98() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ مشروع التخرج الأول",
            "return_value": "احتراف وفهم مشروع التخرج الأول وتطبيقه في مشاريعك.",
            "example": "def practice_98():\\n      print(\"Welcome to مشروع التخرج الأول\")\\n  \\n  practice_98()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس مشروع التخرج الأول لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 98: مشروع التخرج الأول",
                "code": "def practice_98():\\n      print(\"Welcome to مشروع التخرج الأول\")\\n  \\n  practice_98()",
                "expected_output": "(Output specific to الدرس 98: مشروع التخرج الأول)",
                "explanation": "في هذا الدرس (الدرس 98: مشروع التخرج الأول)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_98(:\\n      print(Welcome to مشروع التخرج الأول\")\\n  \\n  practice_98()",
                "error_message": "SyntaxError in الدرس 98: مشروع التخرج الأول",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 98: مشروع التخرج الأول context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_98():\\n      print(\"Welcome to مشروع التخرج الأول\")\\n  \\n  practice_98()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "mini_mission"
    },
    {
        "lesson_slug": "python-99",
        "title": "الدرس 99: مشروع التخرج الثاني",
        "category": "مشاريع وتطبيقات",
        "order_index": 99,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"مشروع التخرج الثاني\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن مشروع التخرج الثاني. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_99() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ مشروع التخرج الثاني",
            "return_value": "احتراف وفهم مشروع التخرج الثاني وتطبيقه في مشاريعك.",
            "example": "def practice_99():\\n      print(\"Welcome to مشروع التخرج الثاني\")\\n  \\n  practice_99()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس مشروع التخرج الثاني لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 99: مشروع التخرج الثاني",
                "code": "def practice_99():\\n      print(\"Welcome to مشروع التخرج الثاني\")\\n  \\n  practice_99()",
                "expected_output": "(Output specific to الدرس 99: مشروع التخرج الثاني)",
                "explanation": "في هذا الدرس (الدرس 99: مشروع التخرج الثاني)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_99(:\\n      print(Welcome to مشروع التخرج الثاني\")\\n  \\n  practice_99()",
                "error_message": "SyntaxError in الدرس 99: مشروع التخرج الثاني",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 99: مشروع التخرج الثاني context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_99():\\n      print(\"Welcome to مشروع التخرج الثاني\")\\n  \\n  practice_99()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "concept"
    },
    {
        "lesson_slug": "python-100",
        "title": "الدرس 100: الخاتمة والشهادة",
        "category": "مشاريع وتطبيقات",
        "order_index": 100,
        "is_free": false,
        "content_type": "theory",
        "duration_minutes": 15,
        "content": {
            "context": "في هذا الدرس سنناقش \"الخاتمة والشهادة\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
            "description": "شرح متكامل ومبسط عن الخاتمة والشهادة. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
            "prototype": "Concept_100() -> Completed",
            "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ الخاتمة والشهادة",
            "return_value": "احتراف وفهم الخاتمة والشهادة وتطبيقه في مشاريعك.",
            "example": "def practice_100():\\n      print(\"Welcome to الخاتمة والشهادة\")\\n  \\n  practice_100()"
        },
        "exercise_instructions": "قم بتطبيق ما تعلمته في درس الخاتمة والشهادة لإنشاء برنامجك الخاص.",
        "expected_output": "Success",
        "quick_practical_examples": [
            {
                "type": "correct",
                "title": "تطبيق مباشر: الدرس 100: الخاتمة والشهادة",
                "code": "def practice_100():\\n      print(\"Welcome to الخاتمة والشهادة\")\\n  \\n  practice_100()",
                "expected_output": "(Output specific to الدرس 100: الخاتمة والشهادة)",
                "explanation": "في هذا الدرس (الدرس 100: الخاتمة والشهادة)، نتعرف على واحدة من تقنيات بايثون الرائعة التي تسهل عليك تنظيم بياناتك وعملياتك البرمجية بفعالية."
            },
            {
                "type": "wrong",
                "title": "خطأ صياغة شائع",
                "code": "def practice_100(:\\n      print(Welcome to الخاتمة والشهادة\")\\n  \\n  practice_100()",
                "error_message": "SyntaxError in الدرس 100: الخاتمة والشهادة",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "wrong",
                "title": "استخدام خاطئ للمتغيرات",
                "code": "invalid_var = 10\nprint(Invalid_Var) # الدرس 100: الخاتمة والشهادة context",
                "error_message": "NameError: name 'Invalid_Var' is not defined",
                "explanation": "أكثر مشكلة تواجه المتعلمين في هذا الدرس هي عدم الانتباه للأخطاء الإملائية الدقيقة أو نسيان المسافات البادئة (Indentation)."
            },
            {
                "type": "mistake",
                "title": "مفهوم خاطئ للمبتدئين",
                "explanation": "كثيراً ما يعتقد المبتدئون أن هذه الأوامر تنفذ بشكل غير متسلسل، لكن بايثون تقرأ وتنفذ الكود سطراً بسطر من الأعلى للأسفل."
            },
            {
                "type": "use_case",
                "title": "متى نستخدم هذا في الواقع؟",
                "explanation": "يُستخدم هذا المفهوم بشكل يومي عند بناء الواجهات الخلفية (Back-end) للمواقع، أو عند تحليل البيانات في تطبيقات الذكاء الاصطناعي لتنظيم المعلومات."
            },
            {
                "type": "challenge",
                "title": "تحدي: إصلاح الكود",
                "code": "# قم بتصحيح هذا الكود ليعمل بشكل سليم\ndef practice_100():\\n      print(\"Welcome to الخاتمة والشهادة\")\\n  \\n  practice_100()",
                "expected_output": "Correct execution output",
                "explanation": "التحدي المطلوب: حاول دمج ما تعلمته هنا مع درس (المتغيرات) لإنشاء كود أكثر ديناميكية وتفاعلية."
            }
        ],
        "lesson_type": "capstone"
    }
];
