const fs = require('fs');
const path = require('path');

const batch1 = [
  {
    lesson_slug: "python-1",
    title: "int (الأعداد الصحيحة)",
    category: "الأساسيات الأولى",
    order_index: 1,
    is_free: true,
    content_type: "theory",
    duration_minutes: 5,
    content: {
      prototype: "int() أو كتابة الرقم مباشرة",
      description: "أهلاً بك في أول خطوة في البرمجة! جهاز الكمبيوتر يحتاج طريقة واضحة لفهم البيانات. الـ `int` هي اختصار لـ Integer، وتعني (الأعداد الصحيحة)، وهي ببساطة الأرقام التي لا تحتوي على أي كسور أو فواصل، مثل: 1، 5، 100، أو حتى الأرقام السالبة مثل -5. نستخدمها لما نحب نعد أشياء كاملة زي: عدد الطلاب، عمرك، أو عدد المحاولات في لعبة. دالة `print()` الموضحة في المثال هي الأداة التي تخبر الكمبيوتر أن يعرض النتيجة على الشاشة لكي نراها.",
      parameters: "القيمة: الرقم الصحيح الذي تريد تخزينه أو طباعته.",
      return_value: "رقم صحيح نقي يمكننا استخدامه في عمليات الجمع والطرح وغيرها.",
      example: "# لطباعة رقم مباشر على الشاشة نستخدم print\nprint(10)\n\n# تخزين عمرك في متغير (كأنه صندوق) ثم طباعته\nage = 25\nprint(age)\n\n# عملية جمع بسيطة\nprint(10 + 5)"
    },
    exercise_instructions: "استخدم أمر الطباعة print لتعرض الرقم 100 على الشاشة. تذكر أن تكتب الرقم داخل الأقواس.",
    expected_output: "100"
  },
  {
    lesson_slug: "python-2",
    title: "float (الأعداد العشرية)",
    category: "الأساسيات الأولى",
    order_index: 2,
    is_free: true,
    content_type: "theory",
    duration_minutes: 5,
    content: {
      prototype: "float() أو كتابة الرقم بفاصلة",
      description: "بعد ما عرفنا الأرقام الصحيحة، تفتكر إزاي بنخزن أسعار المنتجات أو درجات الامتحان التي فيها كسور؟ هنا يأتي دور الـ `float` (الأرقام العشرية). هو أي رقم يحتوي على فاصلة (نقطة `.`). بنستخدمه في حسابات دقيقة زي: أسعار الكورسات في المتجر، النسبة المئوية للنجاح، أو وزن الأشياء. تذكر أن بايثون تستخدم النقطة `.` للكسور وليس الفاصلة العادية `,`.",
      parameters: "القيمة: الرقم الذي يحتوي على نقطة عشرية.",
      return_value: "رقم عشري دقيق جداً.",
      example: "# طباعة رقم عشري\nprint(99.5)\n\n# تخزين سعر منتج\nprice = 19.99\nprint(price)\n\n# عملية حسابية بأرقام عشرية\nprint(1.5 + 2.5)"
    },
    exercise_instructions: "قم بإنشاء متغير باسم price وضع فيه سعر الكورس (99.9) ثم اطبعه باستخدام أمر print.",
    expected_output: "99.9"
  },
  {
    lesson_slug: "python-3",
    title: "str (النصوص والكلمات)",
    category: "الأساسيات الأولى",
    order_index: 3,
    is_free: true,
    content_type: "theory",
    duration_minutes: 8,
    content: {
      prototype: "str() أو وضع النص بين علامات التنصيص",
      description: "هل يمكن للكمبيوتر فهم الكلمات والأسماء؟ نعم! عن طريق الـ `str` وهي اختصار لـ String (سلسلة نصية). لكي تفهم بايثون أنك تكتب نصاً وليس أمراً برمجياً، يجب أن تضع الكلمات بين علامتي تنصيص مفردة `' '` أو مزدوجة `\" \"`. نستخدمها لتخزين اسمك، رسائل الترحيب، أو أي كلمة تريد عرضها للمستخدم.",
      parameters: "النص: يجب أن يكون محاطاً بعلامات التنصيص.",
      return_value: "سلسلة من الحروف والكلمات المقروءة.",
      example: "# طباعة رسالة ترحيبية\nprint('أهلاً بك في الأكاديمية')\n\n# تخزين اسمك في متغير\nmy_name = \"أحمد\"\nprint(my_name)"
    },
    exercise_instructions: "قم بطباعة الجملة التالية تماماً كما هي: Hello Python",
    expected_output: "Hello Python"
  },
  {
    lesson_slug: "python-4",
    title: "bool (الصح والخطأ)",
    category: "الأساسيات الأولى",
    order_index: 4,
    is_free: false,
    content_type: "theory",
    duration_minutes: 5,
    content: {
      prototype: "True أو False",
      description: "في الحياة أحياناً الإجابة تكون نعم أو لا فقط. في البرمجة نسمي هذا `bool` (المنطق البولياني). وهو ببساطة يخزن قيمة من اثنتين: `True` (صحيح) أو `False` (خاطئ). يجب أن تكتب الحرف الأول كبيراً (Capital). نستخدمها كثيراً لنسأل الكمبيوتر أسئلة، مثل: هل المستخدم سجل دخوله؟ هل عمره أكبر من 18؟",
      parameters: "قيمة صحيحة (True) أو خاطئة (False).",
      return_value: "النتيجة المنطقية للسؤال أو القيمة.",
      example: "# تخزين حالة المستخدم\nis_logged_in = True\nprint(is_logged_in)\n\n# سؤال الكمبيوتر هل 10 أكبر من 5؟\nprint(10 > 5)  # النتيجة ستكون True"
    },
    exercise_instructions: "اطلب من بايثون طباعة نتيجة هذا السؤال المنطقي: 50 > 10 (هل 50 أكبر من 10؟)",
    expected_output: "True"
  },
  {
    lesson_slug: "python-5",
    title: "list (القوائم لحفظ أشياء كثيرة)",
    category: "هياكل البيانات",
    order_index: 5,
    is_free: false,
    content_type: "theory",
    duration_minutes: 10,
    content: {
      prototype: "[عنصر1, عنصر2, عنصر3]",
      description: "تخيل أنك تريد تخزين أسماء 100 طالب.. هل ستنشئ 100 متغير؟ طبعاً لا! هنا نستخدم القائمة `list`. القائمة هي صندوق كبير يمكنه حمل عدد لا نهائي من الأشياء بداخل الأقواس المربعة `[]`، وبينهما فاصلة `,`. الأجمل في القوائم أنه يمكنك إضافة عناصر جديدة لها أو حذف عناصر منها في أي وقت.",
      parameters: "الأشياء التي تريد حفظها بداخل القائمة.",
      return_value: "مجموعة مرتبة من العناصر.",
      example: "# إنشاء قائمة بأسماء الفواكه\nfruits = ['تفاح', 'موز', 'برتقال']\nprint(fruits)\n\n# إضافة عنصر جديد للقائمة\nfruits.append('فراولة')\nprint(fruits)"
    },
    exercise_instructions: "قم بإنشاء قائمة تحتوي على الأرقام 1 و 2 و 3 واطبعها.",
    expected_output: "[1, 2, 3]"
  },
  {
    lesson_slug: "python-6",
    title: "dict (القواميس والمعلومات)",
    category: "هياكل البيانات",
    order_index: 6,
    is_free: false,
    content_type: "theory",
    duration_minutes: 12,
    content: {
      prototype: "{'المفتاح': 'القيمة'}",
      description: "إذا أردت تخزين معلومات كاملة عن شخص (اسمه، عمره، وظيفته)، فالقائمة العادية قد تخلط الأمور. هنا نستخدم القاموس `dict`. يعمل القاموس بنظام (المفتاح والقيمة)، تماماً مثل قاموس الكلمات؛ تبحث عن الكلمة (المفتاح) لتجد معناها (القيمة). نستخدم الأقواس المتعرجة `{}` لإنشائه.",
      parameters: "أزواج من المفاتيح والقيم بداخل الأقواس المتعرجة.",
      return_value: "مجموعة من البيانات المنظمة جداً يسهل البحث فيها.",
      example: "# تخزين بيانات طالب\nstudent = {'name': 'عمر', 'age': 20}\nprint(student)\n\n# طباعة اسم الطالب فقط\nprint(student['name'])"
    },
    exercise_instructions: "قم بإنشاء قاموس يحتوي على مفتاح 'color' وقيمته 'red'، ثم اطبعه.",
    expected_output: "{'color': 'red'}"
  },
  {
    lesson_slug: "python-7",
    title: "tuple (البيانات الثابتة)",
    category: "هياكل البيانات",
    order_index: 7,
    is_free: false,
    content_type: "theory",
    duration_minutes: 8,
    content: {
      prototype: "(عنصر1, عنصر2)",
      description: "الـ `tuple` (الصف) هو الأخ التوأم للقائمة `list`، ولكنه عنيد جداً! بمجرد أن تضع فيه العناصر، لا يمكنك أبداً تغييرها، أو حذفها، أو إضافة شيء جديد لها (ثابتة). نستخدمه عندما يكون لدينا معلومات حساسة لا نريد أن تتغير بالخطأ أثناء تشغيل البرنامج، مثل أيام الأسبوع أو إحداثيات الخريطة. نستخدم الأقواس الدائرية `()` لإنشائه.",
      parameters: "عناصر ثابتة مفصول بينها بفاصلة بداخل أقواس دائرية.",
      return_value: "مجموعة من العناصر المحمية ضد التعديل.",
      example: "# أيام الأسبوع لا تتغير\ndays = ('السبت', 'الأحد', 'الإثنين')\nprint(days)\n\n# طباعة اليوم الأول\nprint(days[0])"
    },
    exercise_instructions: "قم بإنشاء Tuple يحتوي على الرقمين 10 و 20 بين أقواس دائرية، ثم اطبعه.",
    expected_output: "(10, 20)"
  },
  {
    lesson_slug: "python-8",
    title: "set (المجموعات بدون تكرار)",
    category: "هياكل البيانات",
    order_index: 8,
    is_free: false,
    content_type: "theory",
    duration_minutes: 8,
    content: {
      prototype: "{عنصر1, عنصر2}",
      description: "الـ `set` (المجموعة) تشبه كيساً سحرياً تضع فيه الأشياء، ولكن السحر هنا أنها لا تقبل التكرار أبداً! إذا وضعت نفس الرقم مرتين، ستحتفظ بواحد فقط وتحذف الباقي تلقائياً. كما أنها لا تهتم بترتيب العناصر. نستخدم الأقواس المتعرجة `{}` لإنشائها ولكن بدون (مفتاح وقيمة) كحال القاموس.",
      parameters: "عناصر تريد تجميعها بدون أي تكرار.",
      return_value: "مجموعة فريدة من العناصر لا تحتوي على تكرار.",
      example: "# مجموعة أرقام بها تكرار\nnumbers = {1, 2, 2, 3, 3, 3}\nprint(numbers) # النتيجة ستكون {1, 2, 3} فقط!"
    },
    exercise_instructions: "قم بطباعة مجموعة تحتوي على {1, 1, 5, 5}. لاحظ أن بايثون ستحذف التكرار.",
    expected_output: "{1, 5}"
  },
  {
    lesson_slug: "python-9",
    title: "if/else (صنع القرارات)",
    category: "التحكم والقرارات",
    order_index: 9,
    is_free: false,
    content_type: "theory",
    duration_minutes: 10,
    content: {
      prototype: "if شرط:\n  افعل كذا",
      description: "برنامجك يجب أن يكون ذكياً ويأخذ قرارات. جملة `if` تعني (إذا كان). وهي تسأل سؤالاً، فإذا كان صحيحاً تنفذ الأوامر، وإلا فتتجاهلها وتذهب لقسم `else` (وإلا). من المهم جداً ترك مسافة (Indentation) قبل الكود الذي بداخل الشرط لكي تعرف بايثون أنه تابع له.",
      parameters: "شرط منطقي يعطي نتيجة True أو False.",
      return_value: "تنفيذ الأوامر الخاصة بالشرط الصحيح فقط.",
      example: "score = 90\n\nif score >= 50:\n    print('مبروك، لقد نجحت!')\nelse:\n    print('للأسف، رسبت.')"
    },
    exercise_instructions: "قم بطباعة كلمة 'Yes' إذا كان 10 > 5، وإلا اطبع 'No'.",
    expected_output: "Yes"
  },
  {
    lesson_slug: "python-10",
    title: "for loop (تكرار الأوامر)",
    category: "التحكم والقرارات",
    order_index: 10,
    is_free: false,
    content_type: "theory",
    duration_minutes: 10,
    content: {
      prototype: "for item in قائمة:",
      description: "ماذا لو أردت طباعة كلمة 100 مرة؟ هل ستكتب `print` مائة مرة؟ هنا نستخدم الحلقات التكرارية `for`. هذه الحلقة تقوم بالمرور على كل عنصر داخل قائمة أو نص، وتنفذ عليه الكود الذي تريده بشكل أوتوماتيكي ومريح جداً.",
      parameters: "متغير مؤقت (item) ليمسك بكل عنصر داخل القائمة بالدور.",
      return_value: "تنفيذ الكود بشكل متكرر حتى تنتهي القائمة.",
      example: "# المرور على قائمة الأسماء وطباعتها\nnames = ['أحمد', 'سارة', 'علي']\nfor name in names:\n    print('مرحباً ' + name)"
    },
    exercise_instructions: "استخدم حلقة for لطباعة الأرقام 1 و 2 و 3 من القائمة [1, 2, 3] كل واحد في سطر.",
    expected_output: "1\n2\n3"
  },
  {
    lesson_slug: "python-11",
    title: "while loop (التكرار المشروط)",
    category: "التحكم والقرارات",
    order_index: 11,
    is_free: false,
    content_type: "theory",
    duration_minutes: 8,
    content: {
      prototype: "while شرط:",
      description: "حلقة `while` (طالما) هي نوع آخر من التكرار. إنها تستمر في إعادة تنفيذ الأوامر إلى ما لا نهاية (طالما) أن الشرط ما زال صحيحاً! يجب أن تنتبه وتضع طريقة لإنهاء الشرط لكي لا يعلق البرنامج في حلقة لا تنتهي (Infinite loop).",
      parameters: "شرط منطقي يتم التحقق منه قبل كل دورة جديدة.",
      return_value: "الاستمرار في التنفيذ حتى يصبح الشرط خاطئاً.",
      example: "# العد التنازلي\ncounter = 3\nwhile counter > 0:\n    print(counter)\n    counter = counter - 1\nprint('انتهى!')"
    },
    exercise_instructions: "قم بعمل متغير x = 1 وحلقة while تطبع x ثم تزيد قيمته بـ 1، طالما أن x أقل من 3.",
    expected_output: "1\n2"
  },
  {
    lesson_slug: "python-12",
    title: "functions (الدوال والأوامر الخاصة)",
    category: "تنظيم الكود",
    order_index: 12,
    is_free: false,
    content_type: "theory",
    duration_minutes: 12,
    content: {
      prototype: "def اسم_الدالة():",
      description: "الدالة `def` هي مصنع صغير تصنعه بنفسك لكي يقوم بمهمة معينة متى احتجته. بدلاً من إعادة كتابة نفس الكود مرات كثيرة، تضعه داخل دالة وتسميها، ثم تستدعيها باسمها في أي وقت. الدوال تساعدنا على ترتيب الكود وجعله نظيفاً ومقروءاً.",
      parameters: "اسم الدالة والمدخلات (إن وجدت) بين الأقواس.",
      return_value: "القيام بالمهمة، ويمكنها إرجاع نتيجة باستخدام كلمة return.",
      example: "# تعريف دالة تقوم بإلقاء التحية\ndef say_hello(name):\n    print('أهلاً ' + name)\n\n# استدعاء الدالة\nsay_hello('أحمد')\nsay_hello('عمر')"
    },
    exercise_instructions: "قم بإنشاء دالة اسمها greet تطبع 'Hello'، ثم قم باستدعائها.",
    expected_output: "Hello"
  },
  {
    lesson_slug: "python-13",
    title: "args & kwargs (المدخلات الكثيرة)",
    category: "تنظيم الكود",
    order_index: 13,
    is_free: false,
    content_type: "theory",
    duration_minutes: 10,
    content: {
      prototype: "def func(*args):",
      description: "أحياناً نصنع دالة ولكن لا نعرف كم عدد المدخلات التي سيعطيها لنا المستخدم! هنا نستخدم النجمة `*` قبل اسم المتغير (مثل `*args`) لكي نخبر بايثون: 'اجمع كل المدخلات الإضافية وضعها في قائمة واحدة لنا'. هذا يجعل الدالة مرنة جداً.",
      parameters: "نجمة واحدة * للقيم العادية، ونجمتان ** للقيم التي لها أسماء.",
      return_value: "تجميع كل المدخلات وتسهيل التعامل معها.",
      example: "# دالة تجمع أي عدد من الأرقام\ndef add_numbers(*numbers):\n    total = sum(numbers)\n    print('المجموع:', total)\n\nadd_numbers(5, 10, 15) # المجموع: 30"
    },
    exercise_instructions: "اصنع دالة تقبل *args وتقوم بطباعة طول عدد المدخلات باستخدام len(args). مرر لها 3 قيم واطبع الناتج.",
    expected_output: "3"
  },
  {
    lesson_slug: "python-14",
    title: "Lambda (الدوال السريعة المجهولة)",
    category: "تنظيم الكود",
    order_index: 14,
    is_free: false,
    content_type: "theory",
    duration_minutes: 8,
    content: {
      prototype: "lambda المدخلات: المخرجات",
      description: "دالة `lambda` هي دالة صغيرة وسريعة جداً تُكتب في سطر واحد ولا تحتاج لاسم. نستخدمها للمهام اللحظية السريعة التي لا تتطلب كوداً كبيراً، مثل إجراء عملية حسابية بسيطة جداً وتخزينها في متغير مؤقت.",
      parameters: "المدخلات ثم نقطتين ثم التعبير البرمجي الذي سيتم تنفيذه.",
      return_value: "ترجع نتيجة التعبير فوراً.",
      example: "# دالة سريعة لضرب الرقم في نفسه\nsquare = lambda x: x * x\n\nprint(square(5)) # النتيجة 25"
    },
    exercise_instructions: "استخدم lambda لعمل دالة تجمع رقمين a و b. مرر لها 5 و 5 واطبع النتيجة.",
    expected_output: "10"
  },
  {
    lesson_slug: "python-15",
    title: "Scope (من أين يقرأ الكود المتغيرات؟)",
    category: "تنظيم الكود",
    order_index: 15,
    is_free: false,
    content_type: "theory",
    duration_minutes: 10,
    content: {
      prototype: "متغيرات محلية وعالمية",
      description: "المتغيرات مثل الأسرار؛ المتغير الذي تنشئه (خارج) أي دالة يراه الجميع ويسمى (متغير عالمي Global)، ولكن المتغير الذي تنشئه (داخل) دالة معينة يخص هذه الدالة فقط ولا يمكن لمن في الخارج رؤيته، ويسمى (متغير محلي Local).",
      parameters: "أماكن كتابة المتغير تحدد من يستطيع الوصول إليه.",
      return_value: "القدرة على قراءة قيمة المتغير أو خطأ إذا كان مخفياً.",
      example: "message = 'أنا متغير عالمي'\n\ndef test_scope():\n    secret = 'أنا متغير محلي مخفي'\n    print(message) # الدالة تستطيع قراءة الخارجي\n\ntest_scope()\n# print(secret) # هذا السطر سيسبب خطأ لأن السر مخفي داخل الدالة!"
    },
    exercise_instructions: "اصنع متغيراً خارج الدالة x = 10 ومتغيراً داخل دالة x = 5 واطبع المتغير الداخلي فقط من خلال الدالة.",
    expected_output: "5"
  },
  {
    lesson_slug: "python-16",
    title: "map & filter (البرمجة الذكية)",
    category: "أدوات قوية",
    order_index: 16,
    is_free: false,
    content_type: "theory",
    duration_minutes: 12,
    content: {
      prototype: "map(الدالة, القائمة)",
      description: "هذه أدوات سحرية! أداة `map` تأخذ كل عنصر في قائمة وتنفذ عليه وظيفة معينة (مثل إضافة 1 لكل رقم) وترجع القائمة الجديدة في ثوانٍ. أما `filter` فهي مصفاة ذكية، تترك فقط العناصر التي تنطبق عليها شروطك (مثل الأرقام الزوجية فقط) وتحذف الباقي.",
      parameters: "اسم الوظيفة أو الدالة المطلوبة، والقائمة التي سنطبق عليها.",
      return_value: "قائمة جديدة بعد التعديل أو التصفية.",
      example: "# التصفية: إبقاء الأرقام الأكبر من 5 فقط\nnums = [2, 5, 8, 10]\nbig_nums = list(filter(lambda x: x > 5, nums))\nprint(big_nums) # [8, 10]"
    },
    exercise_instructions: "استخدم filter لإيجاد الأرقام الزوجية فقط من القائمة [1, 2, 3, 4] واطبع الناتج كـ list.",
    expected_output: "[2, 4]"
  },
  {
    lesson_slug: "python-17",
    title: "Comprehensions (قوائم في سطر واحد)",
    category: "أدوات قوية",
    order_index: 17,
    is_free: false,
    content_type: "theory",
    duration_minutes: 10,
    content: {
      prototype: "[x for x in قائمة]",
      description: "بايثون لغة أنيقة تحب اختصار الأكواد الطويلة. بدلاً من إنشاء قائمة فارغة ثم استخدام حلقة `for` لإضافة العناصر إليها في 4 أسطر، يمكنك إنشاء القائمة وتعبئتها في سطر واحد فقط! هذه الطريقة تسمى (Comprehensions) وهي المفضلة لدى المبرمجين المحترفين للسرعة والشياكة.",
      parameters: "تكتب العملية، ثم حلقة الدوران بداخل القوسين المربعين [].",
      return_value: "قائمة مبنية بالكامل في خطوة واحدة.",
      example: "# طريقة عادية\n# nums = []\n# for i in range(3): nums.append(i)\n\n# طريقة المحترفين (سطر واحد)\nnums = [i for i in range(3)]\nprint(nums) # [0, 1, 2]"
    },
    exercise_instructions: "أنشئ قائمة للأرقام المربعة من 1 إلى 3 باستخدام List Comprehension، ثم اطبعها.",
    expected_output: "[1, 4, 9]"
  },
  {
    lesson_slug: "python-18",
    title: "Classes (البرمجة الكائنية OOP)",
    category: "مفاهيم متقدمة",
    order_index: 18,
    is_free: false,
    content_type: "theory",
    duration_minutes: 15,
    content: {
      prototype: "class اسم_الشيء:",
      description: "البرمجة الموجهة للكائنات (OOP) هي طريقة لتنظيم الكود كأنه أشياء حقيقية. الـ `class` (الفئة) هو بمثابة (قالب أو رسم هندسي). مثلاً، تصنع قالباً اسمه (سيارة)، تحدد أن لها لوناً وسرعة. ثم تستخدم هذا القالب لإنشاء سيارات حقيقية كثيرة جداً، لكل منها لون مختلف، وبدون إعادة كتابة الكود لكل سيارة!",
      parameters: "خصائص (Variables) وأفعال (Functions) يمتلكها الكائن.",
      return_value: "قالب جاهز لإنشاء نسخ منه (Objects).",
      example: "class Dog:\n    def bark(self):\n        print('Woof!')\n\n# إنشاء نسخة حقيقية من القالب\nmy_dog = Dog()\nmy_dog.bark()"
    },
    exercise_instructions: "قم بإنشاء كلاس اسمه Car بداخله دالة run تطبع 'Vroom'. أنشئ نسخة منه ونفذ הדالة.",
    expected_output: "Vroom"
  },
  {
    lesson_slug: "python-19",
    title: "Modules (استيراد المكتبات)",
    category: "مفاهيم متقدمة",
    order_index: 19,
    is_free: false,
    content_type: "theory",
    duration_minutes: 10,
    content: {
      prototype: "import اسم_المكتبة",
      description: "أنت لست وحدك! بايثون تمتلك مجتمعاً ضخماً برمج لك آلاف الأدوات الجاهزة (مكتبات). بدلاً من أن تبرمج آلة حاسبة من الصفر، يمكنك (استيراد) مكتبة الرياضيات الجاهزة. الأمر `import` يفتح لك كنزاً من الأكواد التي كتبها مهندسون آخرون لكي تستخدمها في برنامجك فوراً بكلمة واحدة.",
      parameters: "اسم الملف أو المكتبة التي تريد جلب أدواتها.",
      return_value: "القدرة على استخدام الأوامر الجاهزة داخل تلك المكتبة.",
      example: "# استيراد مكتبة الرياضيات الجاهزة\nimport math\n\n# استخدام دالة الجذر التربيعي\nprint(math.sqrt(25)) # النتيجة 5.0"
    },
    exercise_instructions: "استورد مكتبة math واطبع ناتج الجذر التربيعي للرقم 100 باستخدام math.sqrt.",
    expected_output: "10.0"
  },
  {
    lesson_slug: "python-20",
    title: "try/except (التعامل مع الأخطاء)",
    category: "التعامل مع الأخطاء",
    order_index: 20,
    is_free: false,
    content_type: "theory",
    duration_minutes: 10,
    content: {
      prototype: "try:\n  كود\nexcept:\n  في حال الخطأ",
      description: "البرنامج القوي لا ينهار عندما يخطئ المستخدم! جملة `try` (حاول) تقول للكمبيوتر: جرب تنفيذ هذا الكود. فإذا حدث خطأ كارثي (مثل محاولة القسمة على صفر أو قراءة ملف غير موجود)، لا تتوقف وتنهار، بل اذهب فوراً إلى جملة `except` (استثناء) لطباعة رسالة توجيهية لطيفة للمستخدم بدلاً من الرسائل الحمراء المرعبة.",
      parameters: "أكواد للتجربة، وأكواد للإنقاذ في حالة الفشل.",
      return_value: "حماية البرنامج من الانهيار (Crash).",
      example: "try:\n    # الكمبيوتر لا يقبل القسمة على صفر\n    result = 10 / 0\nexcept:\n    print('عفواً، حدث خطأ رياضي!')"
    },
    exercise_instructions: "استخدم try و except للتعامل مع قسمة 5 / 0 واطبع 'Error' بدلاً من تعطل البرنامج.",
    expected_output: "Error"
  }
];

let fileContent = fs.readFileSync(path.join(__dirname, 'src/context/tracks/pythonData.ts'), 'utf-8');
const match = fileContent.match(/export const pythonTrackData = (\[[\s\S]*\]);/);

if (match) {
    let data = JSON.parse(match[1]);
    for (let i = 0; i < 20; i++) {
        data[i] = batch1[i];
    }
    const newContent = `export const pythonTrackData = ${JSON.stringify(data, null, 2)};\n`;
    fs.writeFileSync(path.join(__dirname, 'src/context/tracks/pythonData.ts'), newContent, 'utf-8');
    console.log('Successfully updated pythonData.ts with beginner friendly content');
} else {
    console.log('Failed to parse pythonData.ts');
}
