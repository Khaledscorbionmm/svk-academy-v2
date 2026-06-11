export const pythonTrackData = [
  {
    "lesson_slug": "python-1",
    "title": "int (الأعداد الصحيحة)",
    "category": "الأساسيات الأولى",
    "order_index": 1,
    "is_free": true,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "int() أو كتابة الرقم مباشرة",
      "description": "أهلاً بك في أول خطوة في البرمجة! جهاز الكمبيوتر يحتاج طريقة واضحة لفهم البيانات. الـ `int` هي اختصار لـ Integer، وتعني (الأعداد الصحيحة)، وهي ببساطة الأرقام التي لا تحتوي على أي كسور أو فواصل، مثل: 1، 5، 100، أو حتى الأرقام السالبة مثل -5. نستخدمها لما نحب نعد أشياء كاملة زي: عدد الطلاب، عمرك، أو عدد المحاولات في لعبة. دالة `print()` الموضحة في المثال هي الأداة التي تخبر الكمبيوتر أن يعرض النتيجة على الشاشة لكي نراها.",
      "parameters": "القيمة: الرقم الصحيح الذي تريد تخزينه أو طباعته.",
      "return_value": "رقم صحيح نقي يمكننا استخدامه في عمليات الجمع والطرح وغيرها.",
      "example": "# لطباعة رقم مباشر على الشاشة نستخدم print\nprint(10)\n\n# تخزين عمرك في متغير (كأنه صندوق) ثم طباعته\nage = 25\nprint(age)\n\n# عملية جمع بسيطة\nprint(10 + 5)"
    },
    "exercise_instructions": "قم بإنشاء متغير age وضع بداخله عمرك، ثم استخدم print لطباعته.",
    "expected_output": "25"
  },
  {
    "lesson_slug": "python-2",
    "title": "float (الأعداد العشرية)",
    "category": "الأساسيات الأولى",
    "order_index": 2,
    "is_free": true,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "float() أو كتابة الرقم بفاصلة",
      "description": "بعد ما عرفنا الأرقام الصحيحة، تفتكر إزاي بنخزن أسعار المنتجات أو درجات الامتحان التي فيها كسور؟ هنا يأتي دور الـ `float` (الأرقام العشرية). هو أي رقم يحتوي على فاصلة (نقطة `.`). بنستخدمه في حسابات دقيقة زي: أسعار الكورسات في المتجر، النسبة المئوية للنجاح، أو وزن الأشياء. تذكر أن بايثون تستخدم النقطة `.` للكسور وليس الفاصلة العادية `,`.",
      "parameters": "القيمة: الرقم الذي يحتوي على نقطة عشرية.",
      "return_value": "رقم عشري دقيق جداً.",
      "example": "# طباعة رقم عشري\nprint(99.5)\n\n# تخزين سعر منتج\nprice = 19.99\nprint(price)\n\n# عملية حسابية بأرقام عشرية\nprint(1.5 + 2.5)"
    },
    "exercise_instructions": "قم بإنشاء متغير باسم price وضع فيه سعر الكورس (99.9) ثم اطبعه باستخدام أمر print.",
    "expected_output": "99.9"
  },
  {
    "lesson_slug": "python-3",
    "title": "str (النصوص والكلمات)",
    "category": "الأساسيات الأولى",
    "order_index": 3,
    "is_free": true,
    "content_type": "theory",
    "duration_minutes": 8,
    "content": {
      "prototype": "str() أو وضع النص بين علامات التنصيص",
      "description": "هل يمكن للكمبيوتر فهم الكلمات والأسماء؟ نعم! عن طريق الـ `str` وهي اختصار لـ String (سلسلة نصية). لكي تفهم بايثون أنك تكتب نصاً وليس أمراً برمجياً، يجب أن تضع الكلمات بين علامتي تنصيص مفردة `' '` أو مزدوجة `\" \"`. نستخدمها لتخزين اسمك، رسائل الترحيب، أو أي كلمة تريد عرضها للمستخدم.",
      "parameters": "النص: يجب أن يكون محاطاً بعلامات التنصيص.",
      "return_value": "سلسلة من الحروف والكلمات المقروءة.",
      "example": "# طباعة رسالة ترحيبية\nprint('أهلاً بك في الأكاديمية')\n\n# تخزين اسمك في متغير\nmy_name = \"أحمد\"\nprint(my_name)"
    },
    "exercise_instructions": "قم بطباعة الجملة التالية تماماً كما هي: Hello Python",
    "expected_output": "Hello Python"
  },
  {
    "lesson_slug": "python-4",
    "title": "bool (الصح والخطأ)",
    "category": "الأساسيات الأولى",
    "order_index": 4,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "True أو False",
      "description": "في الحياة أحياناً الإجابة تكون نعم أو لا فقط. في البرمجة نسمي هذا `bool` (المنطق البولياني). وهو ببساطة يخزن قيمة من اثنتين: `True` (صحيح) أو `False` (خاطئ). يجب أن تكتب الحرف الأول كبيراً (Capital). نستخدمها كثيراً لنسأل الكمبيوتر أسئلة، مثل: هل المستخدم سجل دخوله؟ هل عمره أكبر من 18؟",
      "parameters": "قيمة صحيحة (True) أو خاطئة (False).",
      "return_value": "النتيجة المنطقية للسؤال أو القيمة.",
      "example": "# تخزين حالة المستخدم\nis_logged_in = True\nprint(is_logged_in)\n\n# سؤال الكمبيوتر هل 10 أكبر من 5؟\nprint(10 > 5)  # النتيجة ستكون True"
    },
    "exercise_instructions": "اطلب من بايثون طباعة نتيجة هذا السؤال المنطقي: 50 > 10 (هل 50 أكبر من 10؟)",
    "expected_output": "True"
  },
  {
    "lesson_slug": "python-5",
    "title": "list (القوائم لحفظ أشياء كثيرة)",
    "category": "هياكل البيانات",
    "order_index": 5,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "[عنصر1, عنصر2, عنصر3]",
      "description": "تخيل أنك تريد تخزين أسماء 100 طالب.. هل ستنشئ 100 متغير؟ طبعاً لا! هنا نستخدم القائمة `list`. القائمة هي صندوق كبير يمكنه حمل عدد لا نهائي من الأشياء بداخل الأقواس المربعة `[]`، وبينهما فاصلة `,`. الأجمل في القوائم أنه يمكنك إضافة عناصر جديدة لها أو حذف عناصر منها في أي وقت.",
      "parameters": "الأشياء التي تريد حفظها بداخل القائمة.",
      "return_value": "مجموعة مرتبة من العناصر.",
      "example": "# إنشاء قائمة بأسماء الفواكه\nfruits = ['تفاح', 'موز', 'برتقال']\nprint(fruits)\n\n# إضافة عنصر جديد للقائمة\nfruits.append('فراولة')\nprint(fruits)"
    },
    "exercise_instructions": "قم بإنشاء قائمة تحتوي على الأرقام 1 و 2 و 3 واطبعها.",
    "expected_output": "[1, 2, 3]"
  },
  {
    "lesson_slug": "python-6",
    "title": "dict (القواميس والمعلومات)",
    "category": "هياكل البيانات",
    "order_index": 6,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 12,
    "content": {
      "prototype": "{'المفتاح': 'القيمة'}",
      "description": "إذا أردت تخزين معلومات كاملة عن شخص (اسمه، عمره، وظيفته)، فالقائمة العادية قد تخلط الأمور. هنا نستخدم القاموس `dict`. يعمل القاموس بنظام (المفتاح والقيمة)، تماماً مثل قاموس الكلمات؛ تبحث عن الكلمة (المفتاح) لتجد معناها (القيمة). نستخدم الأقواس المتعرجة `{}` لإنشائه.",
      "parameters": "أزواج من المفاتيح والقيم بداخل الأقواس المتعرجة.",
      "return_value": "مجموعة من البيانات المنظمة جداً يسهل البحث فيها.",
      "example": "# تخزين بيانات طالب\nstudent = {'name': 'عمر', 'age': 20}\nprint(student)\n\n# طباعة اسم الطالب فقط\nprint(student['name'])"
    },
    "exercise_instructions": "قم بإنشاء قاموس يحتوي على مفتاح 'color' وقيمته 'red'، ثم اطبعه.",
    "expected_output": "{'color': 'red'}"
  },
  {
    "lesson_slug": "python-7",
    "title": "tuple (البيانات الثابتة)",
    "category": "هياكل البيانات",
    "order_index": 7,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 8,
    "content": {
      "prototype": "(عنصر1, عنصر2)",
      "description": "الـ `tuple` (الصف) هو الأخ التوأم للقائمة `list`، ولكنه عنيد جداً! بمجرد أن تضع فيه العناصر، لا يمكنك أبداً تغييرها، أو حذفها، أو إضافة شيء جديد لها (ثابتة). نستخدمه عندما يكون لدينا معلومات حساسة لا نريد أن تتغير بالخطأ أثناء تشغيل البرنامج، مثل أيام الأسبوع أو إحداثيات الخريطة. نستخدم الأقواس الدائرية `()` لإنشائه.",
      "parameters": "عناصر ثابتة مفصول بينها بفاصلة بداخل أقواس دائرية.",
      "return_value": "مجموعة من العناصر المحمية ضد التعديل.",
      "example": "# أيام الأسبوع لا تتغير\ndays = ('السبت', 'الأحد', 'الإثنين')\nprint(days)\n\n# طباعة اليوم الأول\nprint(days[0])"
    },
    "exercise_instructions": "قم بإنشاء Tuple يحتوي على الرقمين 10 و 20 بين أقواس دائرية، ثم اطبعه.",
    "expected_output": "(10, 20)"
  },
  {
    "lesson_slug": "python-8",
    "title": "set (المجموعات بدون تكرار)",
    "category": "هياكل البيانات",
    "order_index": 8,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 8,
    "content": {
      "prototype": "{عنصر1, عنصر2}",
      "description": "الـ `set` (المجموعة) تشبه كيساً سحرياً تضع فيه الأشياء، ولكن السحر هنا أنها لا تقبل التكرار أبداً! إذا وضعت نفس الرقم مرتين، ستحتفظ بواحد فقط وتحذف الباقي تلقائياً. كما أنها لا تهتم بترتيب العناصر. نستخدم الأقواس المتعرجة `{}` لإنشائها ولكن بدون (مفتاح وقيمة) كحال القاموس.",
      "parameters": "عناصر تريد تجميعها بدون أي تكرار.",
      "return_value": "مجموعة فريدة من العناصر لا تحتوي على تكرار.",
      "example": "# مجموعة أرقام بها تكرار\nnumbers = {1, 2, 2, 3, 3, 3}\nprint(numbers) # النتيجة ستكون {1, 2, 3} فقط!"
    },
    "exercise_instructions": "قم بطباعة مجموعة تحتوي على {1, 1, 5, 5}. لاحظ أن بايثون ستحذف التكرار.",
    "expected_output": "{1, 5}"
  },
  {
    "lesson_slug": "python-9",
    "title": "if/else (صنع القرارات)",
    "category": "التحكم والقرارات",
    "order_index": 9,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "if شرط:\n  افعل كذا",
      "description": "برنامجك يجب أن يكون ذكياً ويأخذ قرارات. جملة `if` تعني (إذا كان). وهي تسأل سؤالاً، فإذا كان صحيحاً تنفذ الأوامر، وإلا فتتجاهلها وتذهب لقسم `else` (وإلا). من المهم جداً ترك مسافة (Indentation) قبل الكود الذي بداخل الشرط لكي تعرف بايثون أنه تابع له.",
      "parameters": "شرط منطقي يعطي نتيجة True أو False.",
      "return_value": "تنفيذ الأوامر الخاصة بالشرط الصحيح فقط.",
      "example": "score = 90\n\nif score >= 50:\n    print('مبروك، لقد نجحت!')\nelse:\n    print('للأسف، رسبت.')"
    },
    "exercise_instructions": "قم بطباعة كلمة 'Yes' إذا كان 10 > 5، وإلا اطبع 'No'.",
    "expected_output": "Yes"
  },
  {
    "lesson_slug": "python-10",
    "title": "for loop (تكرار الأوامر)",
    "category": "التحكم والقرارات",
    "order_index": 10,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "for item in قائمة:",
      "description": "ماذا لو أردت طباعة كلمة 100 مرة؟ هل ستكتب `print` مائة مرة؟ هنا نستخدم الحلقات التكرارية `for`. هذه الحلقة تقوم بالمرور على كل عنصر داخل قائمة أو نص، وتنفذ عليه الكود الذي تريده بشكل أوتوماتيكي ومريح جداً.",
      "parameters": "متغير مؤقت (item) ليمسك بكل عنصر داخل القائمة بالدور.",
      "return_value": "تنفيذ الكود بشكل متكرر حتى تنتهي القائمة.",
      "example": "# المرور على قائمة الأسماء وطباعتها\nnames = ['أحمد', 'سارة', 'علي']\nfor name in names:\n    print('مرحباً ' + name)"
    },
    "exercise_instructions": "استخدم حلقة for لطباعة الأرقام 1 و 2 و 3 من القائمة [1, 2, 3] كل واحد في سطر.",
    "expected_output": "1\n2\n3"
  },
  {
    "lesson_slug": "python-11",
    "title": "while loop (التكرار المشروط)",
    "category": "التحكم والقرارات",
    "order_index": 11,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 8,
    "content": {
      "prototype": "while شرط:",
      "description": "حلقة `while` (طالما) هي نوع آخر من التكرار. إنها تستمر في إعادة تنفيذ الأوامر إلى ما لا نهاية (طالما) أن الشرط ما زال صحيحاً! يجب أن تنتبه وتضع طريقة لإنهاء الشرط لكي لا يعلق البرنامج في حلقة لا تنتهي (Infinite loop).",
      "parameters": "شرط منطقي يتم التحقق منه قبل كل دورة جديدة.",
      "return_value": "الاستمرار في التنفيذ حتى يصبح الشرط خاطئاً.",
      "example": "# العد التنازلي\ncounter = 3\nwhile counter > 0:\n    print(counter)\n    counter = counter - 1\nprint('انتهى!')"
    },
    "exercise_instructions": "قم بعمل متغير x = 1 وحلقة while تطبع x ثم تزيد قيمته بـ 1، طالما أن x أقل من 3.",
    "expected_output": "1\n2"
  },
  {
    "lesson_slug": "python-12",
    "title": "functions (الدوال والأوامر الخاصة)",
    "category": "تنظيم الكود",
    "order_index": 12,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 12,
    "content": {
      "prototype": "def اسم_الدالة():",
      "description": "الدالة `def` هي مصنع صغير تصنعه بنفسك لكي يقوم بمهمة معينة متى احتجته. بدلاً من إعادة كتابة نفس الكود مرات كثيرة، تضعه داخل دالة وتسميها، ثم تستدعيها باسمها في أي وقت. الدوال تساعدنا على ترتيب الكود وجعله نظيفاً ومقروءاً.",
      "parameters": "اسم الدالة والمدخلات (إن وجدت) بين الأقواس.",
      "return_value": "القيام بالمهمة، ويمكنها إرجاع نتيجة باستخدام كلمة return.",
      "example": "# تعريف دالة تقوم بإلقاء التحية\ndef say_hello(name):\n    print('أهلاً ' + name)\n\n# استدعاء الدالة\nsay_hello('أحمد')\nsay_hello('عمر')"
    },
    "exercise_instructions": "قم بإنشاء دالة اسمها greet تطبع 'Hello'، ثم قم باستدعائها.",
    "expected_output": "Hello"
  },
  {
    "lesson_slug": "python-13",
    "title": "args & kwargs (المدخلات الكثيرة)",
    "category": "تنظيم الكود",
    "order_index": 13,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "def func(*args):",
      "description": "أحياناً نصنع دالة ولكن لا نعرف كم عدد المدخلات التي سيعطيها لنا المستخدم! هنا نستخدم النجمة `*` قبل اسم المتغير (مثل `*args`) لكي نخبر بايثون: 'اجمع كل المدخلات الإضافية وضعها في قائمة واحدة لنا'. هذا يجعل الدالة مرنة جداً.",
      "parameters": "نجمة واحدة * للقيم العادية، ونجمتان ** للقيم التي لها أسماء.",
      "return_value": "تجميع كل المدخلات وتسهيل التعامل معها.",
      "example": "# دالة تجمع أي عدد من الأرقام\ndef add_numbers(*numbers):\n    total = sum(numbers)\n    print('المجموع:', total)\n\nadd_numbers(5, 10, 15) # المجموع: 30"
    },
    "exercise_instructions": "اصنع دالة تقبل *args وتقوم بطباعة طول عدد المدخلات باستخدام len(args). مرر لها 3 قيم واطبع الناتج.",
    "expected_output": "3"
  },
  {
    "lesson_slug": "python-14",
    "title": "Lambda (الدوال السريعة المجهولة)",
    "category": "تنظيم الكود",
    "order_index": 14,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 8,
    "content": {
      "prototype": "lambda المدخلات: المخرجات",
      "description": "دالة `lambda` هي دالة صغيرة وسريعة جداً تُكتب في سطر واحد ولا تحتاج لاسم. نستخدمها للمهام اللحظية السريعة التي لا تتطلب كوداً كبيراً، مثل إجراء عملية حسابية بسيطة جداً وتخزينها في متغير مؤقت.",
      "parameters": "المدخلات ثم نقطتين ثم التعبير البرمجي الذي سيتم تنفيذه.",
      "return_value": "ترجع نتيجة التعبير فوراً.",
      "example": "# دالة سريعة لضرب الرقم في نفسه\nsquare = lambda x: x * x\n\nprint(square(5)) # النتيجة 25"
    },
    "exercise_instructions": "استخدم lambda لعمل دالة تجمع رقمين a و b. مرر لها 5 و 5 واطبع النتيجة.",
    "expected_output": "10"
  },
  {
    "lesson_slug": "python-15",
    "title": "Scope (من أين يقرأ الكود المتغيرات؟)",
    "category": "تنظيم الكود",
    "order_index": 15,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "متغيرات محلية وعالمية",
      "description": "المتغيرات مثل الأسرار؛ المتغير الذي تنشئه (خارج) أي دالة يراه الجميع ويسمى (متغير عالمي Global)، ولكن المتغير الذي تنشئه (داخل) دالة معينة يخص هذه الدالة فقط ولا يمكن لمن في الخارج رؤيته، ويسمى (متغير محلي Local).",
      "parameters": "أماكن كتابة المتغير تحدد من يستطيع الوصول إليه.",
      "return_value": "القدرة على قراءة قيمة المتغير أو خطأ إذا كان مخفياً.",
      "example": "message = 'أنا متغير عالمي'\n\ndef test_scope():\n    secret = 'أنا متغير محلي مخفي'\n    print(message) # الدالة تستطيع قراءة الخارجي\n\ntest_scope()\n# print(secret) # هذا السطر سيسبب خطأ لأن السر مخفي داخل الدالة!"
    },
    "exercise_instructions": "اصنع متغيراً خارج الدالة x = 10 ومتغيراً داخل دالة x = 5 واطبع المتغير الداخلي فقط من خلال الدالة.",
    "expected_output": "5"
  },
  {
    "lesson_slug": "python-16",
    "title": "map & filter (البرمجة الذكية)",
    "category": "أدوات قوية",
    "order_index": 16,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 12,
    "content": {
      "prototype": "map(الدالة, القائمة)",
      "description": "هذه أدوات سحرية! أداة `map` تأخذ كل عنصر في قائمة وتنفذ عليه وظيفة معينة (مثل إضافة 1 لكل رقم) وترجع القائمة الجديدة في ثوانٍ. أما `filter` فهي مصفاة ذكية، تترك فقط العناصر التي تنطبق عليها شروطك (مثل الأرقام الزوجية فقط) وتحذف الباقي.",
      "parameters": "اسم الوظيفة أو الدالة المطلوبة، والقائمة التي سنطبق عليها.",
      "return_value": "قائمة جديدة بعد التعديل أو التصفية.",
      "example": "# التصفية: إبقاء الأرقام الأكبر من 5 فقط\nnums = [2, 5, 8, 10]\nbig_nums = list(filter(lambda x: x > 5, nums))\nprint(big_nums) # [8, 10]"
    },
    "exercise_instructions": "استخدم filter لإيجاد الأرقام الزوجية فقط من القائمة [1, 2, 3, 4] واطبع الناتج كـ list.",
    "expected_output": "[2, 4]"
  },
  {
    "lesson_slug": "python-17",
    "title": "Comprehensions (قوائم في سطر واحد)",
    "category": "أدوات قوية",
    "order_index": 17,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "[x for x in قائمة]",
      "description": "بايثون لغة أنيقة تحب اختصار الأكواد الطويلة. بدلاً من إنشاء قائمة فارغة ثم استخدام حلقة `for` لإضافة العناصر إليها في 4 أسطر، يمكنك إنشاء القائمة وتعبئتها في سطر واحد فقط! هذه الطريقة تسمى (Comprehensions) وهي المفضلة لدى المبرمجين المحترفين للسرعة والشياكة.",
      "parameters": "تكتب العملية، ثم حلقة الدوران بداخل القوسين المربعين [].",
      "return_value": "قائمة مبنية بالكامل في خطوة واحدة.",
      "example": "# طريقة عادية\n# nums = []\n# for i in range(3): nums.append(i)\n\n# طريقة المحترفين (سطر واحد)\nnums = [i for i in range(3)]\nprint(nums) # [0, 1, 2]"
    },
    "exercise_instructions": "أنشئ قائمة للأرقام المربعة من 1 إلى 3 باستخدام List Comprehension، ثم اطبعها.",
    "expected_output": "[1, 4, 9]"
  },
  {
    "lesson_slug": "python-18",
    "title": "Classes (البرمجة الكائنية OOP)",
    "category": "مفاهيم متقدمة",
    "order_index": 18,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "prototype": "class اسم_الشيء:",
      "description": "البرمجة الموجهة للكائنات (OOP) هي طريقة لتنظيم الكود كأنه أشياء حقيقية. الـ `class` (الفئة) هو بمثابة (قالب أو رسم هندسي). مثلاً، تصنع قالباً اسمه (سيارة)، تحدد أن لها لوناً وسرعة. ثم تستخدم هذا القالب لإنشاء سيارات حقيقية كثيرة جداً، لكل منها لون مختلف، وبدون إعادة كتابة الكود لكل سيارة!",
      "parameters": "خصائص (Variables) وأفعال (Functions) يمتلكها الكائن.",
      "return_value": "قالب جاهز لإنشاء نسخ منه (Objects).",
      "example": "class Dog:\n    def bark(self):\n        print('Woof!')\n\n# إنشاء نسخة حقيقية من القالب\nmy_dog = Dog()\nmy_dog.bark()"
    },
    "exercise_instructions": "قم بإنشاء كلاس اسمه Car بداخله دالة run تطبع 'Vroom'. أنشئ نسخة منه ونفذ הדالة.",
    "expected_output": "Vroom"
  },
  {
    "lesson_slug": "python-19",
    "title": "Modules (استيراد المكتبات)",
    "category": "مفاهيم متقدمة",
    "order_index": 19,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "import اسم_المكتبة",
      "description": "أنت لست وحدك! بايثون تمتلك مجتمعاً ضخماً برمج لك آلاف الأدوات الجاهزة (مكتبات). بدلاً من أن تبرمج آلة حاسبة من الصفر، يمكنك (استيراد) مكتبة الرياضيات الجاهزة. الأمر `import` يفتح لك كنزاً من الأكواد التي كتبها مهندسون آخرون لكي تستخدمها في برنامجك فوراً بكلمة واحدة.",
      "parameters": "اسم الملف أو المكتبة التي تريد جلب أدواتها.",
      "return_value": "القدرة على استخدام الأوامر الجاهزة داخل تلك المكتبة.",
      "example": "# استيراد مكتبة الرياضيات الجاهزة\nimport math\n\n# استخدام دالة الجذر التربيعي\nprint(math.sqrt(25)) # النتيجة 5.0"
    },
    "exercise_instructions": "استورد مكتبة math واطبع ناتج الجذر التربيعي للرقم 100 باستخدام math.sqrt.",
    "expected_output": "10.0"
  },
  {
    "lesson_slug": "python-20",
    "title": "try/except (التعامل مع الأخطاء)",
    "category": "التعامل مع الأخطاء",
    "order_index": 20,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "try:\n  كود\nexcept:\n  في حال الخطأ",
      "description": "البرنامج القوي لا ينهار عندما يخطئ المستخدم! جملة `try` (حاول) تقول للكمبيوتر: جرب تنفيذ هذا الكود. فإذا حدث خطأ كارثي (مثل محاولة القسمة على صفر أو قراءة ملف غير موجود)، لا تتوقف وتنهار، بل اذهب فوراً إلى جملة `except` (استثناء) لطباعة رسالة توجيهية لطيفة للمستخدم بدلاً من الرسائل الحمراء المرعبة.",
      "parameters": "أكواد للتجربة، وأكواد للإنقاذ في حالة الفشل.",
      "return_value": "حماية البرنامج من الانهيار (Crash).",
      "example": "try:\n    # الكمبيوتر لا يقبل القسمة على صفر\n    result = 10 / 0\nexcept:\n    print('عفواً، حدث خطأ رياضي!')"
    },
    "exercise_instructions": "استخدم try و except للتعامل مع قسمة 5 / 0 واطبع 'Error' بدلاً من تعطل البرنامج.",
    "expected_output": "Error"
  },
  {
    "lesson_slug": "python-21",
    "title": "Lesson 21 Placeholder",
    "category": "Advanced Patterns & Closures",
    "order_index": 21,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 21",
      "description": "Placeholder content for Lesson 21 regarding Advanced Patterns & Closures. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 21.",
      "return_value": "Placeholder return value for Lesson 21.",
      "example": "# Example placeholder 21\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-22",
    "title": "Lesson 22 Placeholder",
    "category": "Advanced Patterns & Closures",
    "order_index": 22,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 22",
      "description": "Placeholder content for Lesson 22 regarding Advanced Patterns & Closures. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 22.",
      "return_value": "Placeholder return value for Lesson 22.",
      "example": "# Example placeholder 22\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-23",
    "title": "Lesson 23 Placeholder",
    "category": "Advanced Patterns & Closures",
    "order_index": 23,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 23",
      "description": "Placeholder content for Lesson 23 regarding Advanced Patterns & Closures. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 23.",
      "return_value": "Placeholder return value for Lesson 23.",
      "example": "# Example placeholder 23\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-24",
    "title": "Lesson 24 Placeholder",
    "category": "Advanced Patterns & Closures",
    "order_index": 24,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 24",
      "description": "Placeholder content for Lesson 24 regarding Advanced Patterns & Closures. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 24.",
      "return_value": "Placeholder return value for Lesson 24.",
      "example": "# Example placeholder 24\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-25",
    "title": "Lesson 25 Placeholder",
    "category": "Advanced Patterns & Closures",
    "order_index": 25,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 25",
      "description": "Placeholder content for Lesson 25 regarding Advanced Patterns & Closures. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 25.",
      "return_value": "Placeholder return value for Lesson 25.",
      "example": "# Example placeholder 25\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-26",
    "title": "Lesson 26 Placeholder",
    "category": "Advanced Patterns & Closures",
    "order_index": 26,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 26",
      "description": "Placeholder content for Lesson 26 regarding Advanced Patterns & Closures. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 26.",
      "return_value": "Placeholder return value for Lesson 26.",
      "example": "# Example placeholder 26\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-27",
    "title": "Lesson 27 Placeholder",
    "category": "Advanced Patterns & Closures",
    "order_index": 27,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 27",
      "description": "Placeholder content for Lesson 27 regarding Advanced Patterns & Closures. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 27.",
      "return_value": "Placeholder return value for Lesson 27.",
      "example": "# Example placeholder 27\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-28",
    "title": "Lesson 28 Placeholder",
    "category": "Advanced Patterns & Closures",
    "order_index": 28,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 28",
      "description": "Placeholder content for Lesson 28 regarding Advanced Patterns & Closures. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 28.",
      "return_value": "Placeholder return value for Lesson 28.",
      "example": "# Example placeholder 28\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-29",
    "title": "Lesson 29 Placeholder",
    "category": "Advanced Patterns & Closures",
    "order_index": 29,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 29",
      "description": "Placeholder content for Lesson 29 regarding Advanced Patterns & Closures. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 29.",
      "return_value": "Placeholder return value for Lesson 29.",
      "example": "# Example placeholder 29\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-30",
    "title": "Lesson 30 Placeholder",
    "category": "Advanced Patterns & Closures",
    "order_index": 30,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 30",
      "description": "Placeholder content for Lesson 30 regarding Advanced Patterns & Closures. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 30.",
      "return_value": "Placeholder return value for Lesson 30.",
      "example": "# Example placeholder 30\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-31",
    "title": "Lesson 31 Placeholder",
    "category": "Advanced Patterns & Closures",
    "order_index": 31,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 31",
      "description": "Placeholder content for Lesson 31 regarding Advanced Patterns & Closures. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 31.",
      "return_value": "Placeholder return value for Lesson 31.",
      "example": "# Example placeholder 31\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-32",
    "title": "Lesson 32 Placeholder",
    "category": "Advanced Patterns & Closures",
    "order_index": 32,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 32",
      "description": "Placeholder content for Lesson 32 regarding Advanced Patterns & Closures. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 32.",
      "return_value": "Placeholder return value for Lesson 32.",
      "example": "# Example placeholder 32\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-33",
    "title": "Lesson 33 Placeholder",
    "category": "Advanced Patterns & Closures",
    "order_index": 33,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 33",
      "description": "Placeholder content for Lesson 33 regarding Advanced Patterns & Closures. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 33.",
      "return_value": "Placeholder return value for Lesson 33.",
      "example": "# Example placeholder 33\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-34",
    "title": "Lesson 34 Placeholder",
    "category": "Advanced Patterns & Closures",
    "order_index": 34,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 34",
      "description": "Placeholder content for Lesson 34 regarding Advanced Patterns & Closures. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 34.",
      "return_value": "Placeholder return value for Lesson 34.",
      "example": "# Example placeholder 34\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-35",
    "title": "Lesson 35 Placeholder",
    "category": "Advanced Patterns & Closures",
    "order_index": 35,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 35",
      "description": "Placeholder content for Lesson 35 regarding Advanced Patterns & Closures. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 35.",
      "return_value": "Placeholder return value for Lesson 35.",
      "example": "# Example placeholder 35\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-36",
    "title": "Lesson 36 Placeholder",
    "category": "Advanced Patterns & Closures",
    "order_index": 36,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 36",
      "description": "Placeholder content for Lesson 36 regarding Advanced Patterns & Closures. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 36.",
      "return_value": "Placeholder return value for Lesson 36.",
      "example": "# Example placeholder 36\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-37",
    "title": "Lesson 37 Placeholder",
    "category": "Advanced Patterns & Closures",
    "order_index": 37,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 37",
      "description": "Placeholder content for Lesson 37 regarding Advanced Patterns & Closures. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 37.",
      "return_value": "Placeholder return value for Lesson 37.",
      "example": "# Example placeholder 37\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-38",
    "title": "Lesson 38 Placeholder",
    "category": "Advanced Patterns & Closures",
    "order_index": 38,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 38",
      "description": "Placeholder content for Lesson 38 regarding Advanced Patterns & Closures. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 38.",
      "return_value": "Placeholder return value for Lesson 38.",
      "example": "# Example placeholder 38\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-39",
    "title": "Lesson 39 Placeholder",
    "category": "Advanced Patterns & Closures",
    "order_index": 39,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 39",
      "description": "Placeholder content for Lesson 39 regarding Advanced Patterns & Closures. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 39.",
      "return_value": "Placeholder return value for Lesson 39.",
      "example": "# Example placeholder 39\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-40",
    "title": "Lesson 40 Placeholder",
    "category": "Advanced Patterns & Closures",
    "order_index": 40,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 40",
      "description": "Placeholder content for Lesson 40 regarding Advanced Patterns & Closures. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 40.",
      "return_value": "Placeholder return value for Lesson 40.",
      "example": "# Example placeholder 40\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-41",
    "title": "Lesson 41 Placeholder",
    "category": "OOP & Metaprogramming",
    "order_index": 41,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 41",
      "description": "Placeholder content for Lesson 41 regarding OOP & Metaprogramming. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 41.",
      "return_value": "Placeholder return value for Lesson 41.",
      "example": "# Example placeholder 41\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-42",
    "title": "Lesson 42 Placeholder",
    "category": "OOP & Metaprogramming",
    "order_index": 42,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 42",
      "description": "Placeholder content for Lesson 42 regarding OOP & Metaprogramming. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 42.",
      "return_value": "Placeholder return value for Lesson 42.",
      "example": "# Example placeholder 42\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-43",
    "title": "Lesson 43 Placeholder",
    "category": "OOP & Metaprogramming",
    "order_index": 43,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 43",
      "description": "Placeholder content for Lesson 43 regarding OOP & Metaprogramming. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 43.",
      "return_value": "Placeholder return value for Lesson 43.",
      "example": "# Example placeholder 43\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-44",
    "title": "Lesson 44 Placeholder",
    "category": "OOP & Metaprogramming",
    "order_index": 44,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 44",
      "description": "Placeholder content for Lesson 44 regarding OOP & Metaprogramming. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 44.",
      "return_value": "Placeholder return value for Lesson 44.",
      "example": "# Example placeholder 44\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-45",
    "title": "Lesson 45 Placeholder",
    "category": "OOP & Metaprogramming",
    "order_index": 45,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 45",
      "description": "Placeholder content for Lesson 45 regarding OOP & Metaprogramming. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 45.",
      "return_value": "Placeholder return value for Lesson 45.",
      "example": "# Example placeholder 45\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-46",
    "title": "Lesson 46 Placeholder",
    "category": "OOP & Metaprogramming",
    "order_index": 46,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 46",
      "description": "Placeholder content for Lesson 46 regarding OOP & Metaprogramming. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 46.",
      "return_value": "Placeholder return value for Lesson 46.",
      "example": "# Example placeholder 46\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-47",
    "title": "Lesson 47 Placeholder",
    "category": "OOP & Metaprogramming",
    "order_index": 47,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 47",
      "description": "Placeholder content for Lesson 47 regarding OOP & Metaprogramming. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 47.",
      "return_value": "Placeholder return value for Lesson 47.",
      "example": "# Example placeholder 47\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-48",
    "title": "Lesson 48 Placeholder",
    "category": "OOP & Metaprogramming",
    "order_index": 48,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 48",
      "description": "Placeholder content for Lesson 48 regarding OOP & Metaprogramming. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 48.",
      "return_value": "Placeholder return value for Lesson 48.",
      "example": "# Example placeholder 48\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-49",
    "title": "Lesson 49 Placeholder",
    "category": "OOP & Metaprogramming",
    "order_index": 49,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 49",
      "description": "Placeholder content for Lesson 49 regarding OOP & Metaprogramming. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 49.",
      "return_value": "Placeholder return value for Lesson 49.",
      "example": "# Example placeholder 49\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-50",
    "title": "Lesson 50 Placeholder",
    "category": "OOP & Metaprogramming",
    "order_index": 50,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 50",
      "description": "Placeholder content for Lesson 50 regarding OOP & Metaprogramming. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 50.",
      "return_value": "Placeholder return value for Lesson 50.",
      "example": "# Example placeholder 50\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-51",
    "title": "Lesson 51 Placeholder",
    "category": "OOP & Metaprogramming",
    "order_index": 51,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 51",
      "description": "Placeholder content for Lesson 51 regarding OOP & Metaprogramming. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 51.",
      "return_value": "Placeholder return value for Lesson 51.",
      "example": "# Example placeholder 51\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-52",
    "title": "Lesson 52 Placeholder",
    "category": "OOP & Metaprogramming",
    "order_index": 52,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 52",
      "description": "Placeholder content for Lesson 52 regarding OOP & Metaprogramming. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 52.",
      "return_value": "Placeholder return value for Lesson 52.",
      "example": "# Example placeholder 52\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-53",
    "title": "Lesson 53 Placeholder",
    "category": "OOP & Metaprogramming",
    "order_index": 53,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 53",
      "description": "Placeholder content for Lesson 53 regarding OOP & Metaprogramming. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 53.",
      "return_value": "Placeholder return value for Lesson 53.",
      "example": "# Example placeholder 53\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-54",
    "title": "Lesson 54 Placeholder",
    "category": "OOP & Metaprogramming",
    "order_index": 54,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 54",
      "description": "Placeholder content for Lesson 54 regarding OOP & Metaprogramming. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 54.",
      "return_value": "Placeholder return value for Lesson 54.",
      "example": "# Example placeholder 54\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-55",
    "title": "Lesson 55 Placeholder",
    "category": "OOP & Metaprogramming",
    "order_index": 55,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 55",
      "description": "Placeholder content for Lesson 55 regarding OOP & Metaprogramming. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 55.",
      "return_value": "Placeholder return value for Lesson 55.",
      "example": "# Example placeholder 55\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-56",
    "title": "Lesson 56 Placeholder",
    "category": "OOP & Metaprogramming",
    "order_index": 56,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 56",
      "description": "Placeholder content for Lesson 56 regarding OOP & Metaprogramming. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 56.",
      "return_value": "Placeholder return value for Lesson 56.",
      "example": "# Example placeholder 56\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-57",
    "title": "Lesson 57 Placeholder",
    "category": "OOP & Metaprogramming",
    "order_index": 57,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 57",
      "description": "Placeholder content for Lesson 57 regarding OOP & Metaprogramming. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 57.",
      "return_value": "Placeholder return value for Lesson 57.",
      "example": "# Example placeholder 57\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-58",
    "title": "Lesson 58 Placeholder",
    "category": "OOP & Metaprogramming",
    "order_index": 58,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 58",
      "description": "Placeholder content for Lesson 58 regarding OOP & Metaprogramming. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 58.",
      "return_value": "Placeholder return value for Lesson 58.",
      "example": "# Example placeholder 58\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-59",
    "title": "Lesson 59 Placeholder",
    "category": "OOP & Metaprogramming",
    "order_index": 59,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 59",
      "description": "Placeholder content for Lesson 59 regarding OOP & Metaprogramming. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 59.",
      "return_value": "Placeholder return value for Lesson 59.",
      "example": "# Example placeholder 59\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-60",
    "title": "Lesson 60 Placeholder",
    "category": "OOP & Metaprogramming",
    "order_index": 60,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 60",
      "description": "Placeholder content for Lesson 60 regarding OOP & Metaprogramming. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 60.",
      "return_value": "Placeholder return value for Lesson 60.",
      "example": "# Example placeholder 60\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-61",
    "title": "Lesson 61 Placeholder",
    "category": "High-Performance & Concurrency",
    "order_index": 61,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 61",
      "description": "Placeholder content for Lesson 61 regarding High-Performance & Concurrency. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 61.",
      "return_value": "Placeholder return value for Lesson 61.",
      "example": "# Example placeholder 61\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-62",
    "title": "Lesson 62 Placeholder",
    "category": "High-Performance & Concurrency",
    "order_index": 62,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 62",
      "description": "Placeholder content for Lesson 62 regarding High-Performance & Concurrency. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 62.",
      "return_value": "Placeholder return value for Lesson 62.",
      "example": "# Example placeholder 62\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-63",
    "title": "Lesson 63 Placeholder",
    "category": "High-Performance & Concurrency",
    "order_index": 63,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 63",
      "description": "Placeholder content for Lesson 63 regarding High-Performance & Concurrency. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 63.",
      "return_value": "Placeholder return value for Lesson 63.",
      "example": "# Example placeholder 63\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-64",
    "title": "Lesson 64 Placeholder",
    "category": "High-Performance & Concurrency",
    "order_index": 64,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 64",
      "description": "Placeholder content for Lesson 64 regarding High-Performance & Concurrency. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 64.",
      "return_value": "Placeholder return value for Lesson 64.",
      "example": "# Example placeholder 64\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-65",
    "title": "Lesson 65 Placeholder",
    "category": "High-Performance & Concurrency",
    "order_index": 65,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 65",
      "description": "Placeholder content for Lesson 65 regarding High-Performance & Concurrency. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 65.",
      "return_value": "Placeholder return value for Lesson 65.",
      "example": "# Example placeholder 65\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-66",
    "title": "Lesson 66 Placeholder",
    "category": "High-Performance & Concurrency",
    "order_index": 66,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 66",
      "description": "Placeholder content for Lesson 66 regarding High-Performance & Concurrency. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 66.",
      "return_value": "Placeholder return value for Lesson 66.",
      "example": "# Example placeholder 66\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-67",
    "title": "Lesson 67 Placeholder",
    "category": "High-Performance & Concurrency",
    "order_index": 67,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 67",
      "description": "Placeholder content for Lesson 67 regarding High-Performance & Concurrency. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 67.",
      "return_value": "Placeholder return value for Lesson 67.",
      "example": "# Example placeholder 67\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-68",
    "title": "Lesson 68 Placeholder",
    "category": "High-Performance & Concurrency",
    "order_index": 68,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 68",
      "description": "Placeholder content for Lesson 68 regarding High-Performance & Concurrency. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 68.",
      "return_value": "Placeholder return value for Lesson 68.",
      "example": "# Example placeholder 68\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-69",
    "title": "Lesson 69 Placeholder",
    "category": "High-Performance & Concurrency",
    "order_index": 69,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 69",
      "description": "Placeholder content for Lesson 69 regarding High-Performance & Concurrency. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 69.",
      "return_value": "Placeholder return value for Lesson 69.",
      "example": "# Example placeholder 69\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-70",
    "title": "Lesson 70 Placeholder",
    "category": "High-Performance & Concurrency",
    "order_index": 70,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 70",
      "description": "Placeholder content for Lesson 70 regarding High-Performance & Concurrency. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 70.",
      "return_value": "Placeholder return value for Lesson 70.",
      "example": "# Example placeholder 70\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-71",
    "title": "Lesson 71 Placeholder",
    "category": "High-Performance & Concurrency",
    "order_index": 71,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 71",
      "description": "Placeholder content for Lesson 71 regarding High-Performance & Concurrency. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 71.",
      "return_value": "Placeholder return value for Lesson 71.",
      "example": "# Example placeholder 71\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-72",
    "title": "Lesson 72 Placeholder",
    "category": "High-Performance & Concurrency",
    "order_index": 72,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 72",
      "description": "Placeholder content for Lesson 72 regarding High-Performance & Concurrency. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 72.",
      "return_value": "Placeholder return value for Lesson 72.",
      "example": "# Example placeholder 72\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-73",
    "title": "Lesson 73 Placeholder",
    "category": "High-Performance & Concurrency",
    "order_index": 73,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 73",
      "description": "Placeholder content for Lesson 73 regarding High-Performance & Concurrency. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 73.",
      "return_value": "Placeholder return value for Lesson 73.",
      "example": "# Example placeholder 73\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-74",
    "title": "Lesson 74 Placeholder",
    "category": "High-Performance & Concurrency",
    "order_index": 74,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 74",
      "description": "Placeholder content for Lesson 74 regarding High-Performance & Concurrency. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 74.",
      "return_value": "Placeholder return value for Lesson 74.",
      "example": "# Example placeholder 74\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-75",
    "title": "Lesson 75 Placeholder",
    "category": "High-Performance & Concurrency",
    "order_index": 75,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 75",
      "description": "Placeholder content for Lesson 75 regarding High-Performance & Concurrency. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 75.",
      "return_value": "Placeholder return value for Lesson 75.",
      "example": "# Example placeholder 75\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-76",
    "title": "Lesson 76 Placeholder",
    "category": "High-Performance & Concurrency",
    "order_index": 76,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 76",
      "description": "Placeholder content for Lesson 76 regarding High-Performance & Concurrency. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 76.",
      "return_value": "Placeholder return value for Lesson 76.",
      "example": "# Example placeholder 76\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-77",
    "title": "Lesson 77 Placeholder",
    "category": "High-Performance & Concurrency",
    "order_index": 77,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 77",
      "description": "Placeholder content for Lesson 77 regarding High-Performance & Concurrency. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 77.",
      "return_value": "Placeholder return value for Lesson 77.",
      "example": "# Example placeholder 77\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-78",
    "title": "Lesson 78 Placeholder",
    "category": "High-Performance & Concurrency",
    "order_index": 78,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 78",
      "description": "Placeholder content for Lesson 78 regarding High-Performance & Concurrency. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 78.",
      "return_value": "Placeholder return value for Lesson 78.",
      "example": "# Example placeholder 78\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-79",
    "title": "Lesson 79 Placeholder",
    "category": "High-Performance & Concurrency",
    "order_index": 79,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 79",
      "description": "Placeholder content for Lesson 79 regarding High-Performance & Concurrency. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 79.",
      "return_value": "Placeholder return value for Lesson 79.",
      "example": "# Example placeholder 79\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-80",
    "title": "Lesson 80 Placeholder",
    "category": "High-Performance & Concurrency",
    "order_index": 80,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 80",
      "description": "Placeholder content for Lesson 80 regarding High-Performance & Concurrency. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 80.",
      "return_value": "Placeholder return value for Lesson 80.",
      "example": "# Example placeholder 80\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-81",
    "title": "Lesson 81 Placeholder",
    "category": "AI Agents & Real-World Engineering",
    "order_index": 81,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 81",
      "description": "Placeholder content for Lesson 81 regarding AI Agents & Real-World Engineering. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 81.",
      "return_value": "Placeholder return value for Lesson 81.",
      "example": "# Example placeholder 81\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-82",
    "title": "Lesson 82 Placeholder",
    "category": "AI Agents & Real-World Engineering",
    "order_index": 82,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 82",
      "description": "Placeholder content for Lesson 82 regarding AI Agents & Real-World Engineering. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 82.",
      "return_value": "Placeholder return value for Lesson 82.",
      "example": "# Example placeholder 82\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-83",
    "title": "Lesson 83 Placeholder",
    "category": "AI Agents & Real-World Engineering",
    "order_index": 83,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 83",
      "description": "Placeholder content for Lesson 83 regarding AI Agents & Real-World Engineering. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 83.",
      "return_value": "Placeholder return value for Lesson 83.",
      "example": "# Example placeholder 83\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-84",
    "title": "Lesson 84 Placeholder",
    "category": "AI Agents & Real-World Engineering",
    "order_index": 84,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 84",
      "description": "Placeholder content for Lesson 84 regarding AI Agents & Real-World Engineering. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 84.",
      "return_value": "Placeholder return value for Lesson 84.",
      "example": "# Example placeholder 84\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-85",
    "title": "Lesson 85 Placeholder",
    "category": "AI Agents & Real-World Engineering",
    "order_index": 85,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 85",
      "description": "Placeholder content for Lesson 85 regarding AI Agents & Real-World Engineering. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 85.",
      "return_value": "Placeholder return value for Lesson 85.",
      "example": "# Example placeholder 85\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-86",
    "title": "Lesson 86 Placeholder",
    "category": "AI Agents & Real-World Engineering",
    "order_index": 86,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 86",
      "description": "Placeholder content for Lesson 86 regarding AI Agents & Real-World Engineering. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 86.",
      "return_value": "Placeholder return value for Lesson 86.",
      "example": "# Example placeholder 86\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-87",
    "title": "Lesson 87 Placeholder",
    "category": "AI Agents & Real-World Engineering",
    "order_index": 87,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 87",
      "description": "Placeholder content for Lesson 87 regarding AI Agents & Real-World Engineering. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 87.",
      "return_value": "Placeholder return value for Lesson 87.",
      "example": "# Example placeholder 87\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-88",
    "title": "Lesson 88 Placeholder",
    "category": "AI Agents & Real-World Engineering",
    "order_index": 88,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 88",
      "description": "Placeholder content for Lesson 88 regarding AI Agents & Real-World Engineering. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 88.",
      "return_value": "Placeholder return value for Lesson 88.",
      "example": "# Example placeholder 88\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-89",
    "title": "Lesson 89 Placeholder",
    "category": "AI Agents & Real-World Engineering",
    "order_index": 89,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 89",
      "description": "Placeholder content for Lesson 89 regarding AI Agents & Real-World Engineering. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 89.",
      "return_value": "Placeholder return value for Lesson 89.",
      "example": "# Example placeholder 89\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-90",
    "title": "Lesson 90 Placeholder",
    "category": "AI Agents & Real-World Engineering",
    "order_index": 90,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 90",
      "description": "Placeholder content for Lesson 90 regarding AI Agents & Real-World Engineering. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 90.",
      "return_value": "Placeholder return value for Lesson 90.",
      "example": "# Example placeholder 90\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-91",
    "title": "Lesson 91 Placeholder",
    "category": "AI Agents & Real-World Engineering",
    "order_index": 91,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 91",
      "description": "Placeholder content for Lesson 91 regarding AI Agents & Real-World Engineering. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 91.",
      "return_value": "Placeholder return value for Lesson 91.",
      "example": "# Example placeholder 91\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-92",
    "title": "Lesson 92 Placeholder",
    "category": "AI Agents & Real-World Engineering",
    "order_index": 92,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 92",
      "description": "Placeholder content for Lesson 92 regarding AI Agents & Real-World Engineering. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 92.",
      "return_value": "Placeholder return value for Lesson 92.",
      "example": "# Example placeholder 92\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-93",
    "title": "Lesson 93 Placeholder",
    "category": "AI Agents & Real-World Engineering",
    "order_index": 93,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 93",
      "description": "Placeholder content for Lesson 93 regarding AI Agents & Real-World Engineering. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 93.",
      "return_value": "Placeholder return value for Lesson 93.",
      "example": "# Example placeholder 93\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-94",
    "title": "Lesson 94 Placeholder",
    "category": "AI Agents & Real-World Engineering",
    "order_index": 94,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 94",
      "description": "Placeholder content for Lesson 94 regarding AI Agents & Real-World Engineering. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 94.",
      "return_value": "Placeholder return value for Lesson 94.",
      "example": "# Example placeholder 94\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-95",
    "title": "Lesson 95 Placeholder",
    "category": "AI Agents & Real-World Engineering",
    "order_index": 95,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 95",
      "description": "Placeholder content for Lesson 95 regarding AI Agents & Real-World Engineering. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 95.",
      "return_value": "Placeholder return value for Lesson 95.",
      "example": "# Example placeholder 95\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-96",
    "title": "Lesson 96 Placeholder",
    "category": "AI Agents & Real-World Engineering",
    "order_index": 96,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 96",
      "description": "Placeholder content for Lesson 96 regarding AI Agents & Real-World Engineering. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 96.",
      "return_value": "Placeholder return value for Lesson 96.",
      "example": "# Example placeholder 96\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-97",
    "title": "Lesson 97 Placeholder",
    "category": "AI Agents & Real-World Engineering",
    "order_index": 97,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 97",
      "description": "Placeholder content for Lesson 97 regarding AI Agents & Real-World Engineering. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 97.",
      "return_value": "Placeholder return value for Lesson 97.",
      "example": "# Example placeholder 97\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-98",
    "title": "Lesson 98 Placeholder",
    "category": "AI Agents & Real-World Engineering",
    "order_index": 98,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 98",
      "description": "Placeholder content for Lesson 98 regarding AI Agents & Real-World Engineering. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 98.",
      "return_value": "Placeholder return value for Lesson 98.",
      "example": "# Example placeholder 98\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-99",
    "title": "Lesson 99 Placeholder",
    "category": "AI Agents & Real-World Engineering",
    "order_index": 99,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 99",
      "description": "Placeholder content for Lesson 99 regarding AI Agents & Real-World Engineering. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 99.",
      "return_value": "Placeholder return value for Lesson 99.",
      "example": "# Example placeholder 99\nprint(\"Will be hydrated\")"
    }
  },
  {
    "lesson_slug": "python-100",
    "title": "Lesson 100 Placeholder",
    "category": "AI Agents & Real-World Engineering",
    "order_index": 100,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "module.function() // Lesson 100",
      "description": "Placeholder content for Lesson 100 regarding AI Agents & Real-World Engineering. This will be fully hydrated in subsequent batches.",
      "parameters": "Placeholder parameters for Lesson 100.",
      "return_value": "Placeholder return value for Lesson 100.",
      "example": "# Example placeholder 100\nprint(\"Will be hydrated\")"
    }
  }
];
