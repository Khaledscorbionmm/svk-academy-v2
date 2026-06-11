const fs = require('fs');
const path = require('path');

const batch1 = [
  {
    lesson_slug: "python-1",
    title: "int (الأعداد الصحيحة)",
    category: "Core Primitives & Memory",
    order_index: 1,
    is_free: true,
    content_type: "theory",
    duration_minutes: 8,
    content: {
      prototype: "int(x=0, base=10)",
      description: "أهلاً بك في عالم هندسة البرمجيات! الـ `int` في بايثون 3 ليس مجرد رقم، بل هو كائن (Object) ذكي يتعامل مع الذاكرة الديناميكية ببراعة فائقة. على عكس لغات أخرى مقيدة بـ 32-bit أو 64-bit، بايثون تدعم أرقاماً صحيحة ضخمة جداً (Arbitrary-precision) وتتوسع في الذاكرة تلقائياً لاستيعابها. نستخدمها للحسابات الدقيقة، التحويل بين الأنظمة العددية (الثنائي، السداسي عشر)، وإدارة الفهارس.",
      parameters: "x (اختياري): القيمة المراد تحويلها لرقم صحيح. base (اختياري): النظام العددي (مثل 2 للثنائي، 16 للسداسي عشر).",
      return_value: "يعيد كائناً من نوع Integer نقي وجاهز للعمليات الحسابية أو المنطقية المعقدة.",
      example: "# تخصيص رقم في الذاكرة\nusers_count = 104500\n\n# تحويل رقم ثنائي (Binary) إلى عشري\nbinary_str = '1010'\ndecimal_val = int(binary_str, 2) # الناتج: 10\nprint('Decimal:', decimal_val)"
    }
  },
  {
    lesson_slug: "python-2",
    title: "float (الأعداد العائمة)",
    category: "Core Primitives & Memory",
    order_index: 2,
    is_free: true,
    content_type: "theory",
    duration_minutes: 10,
    content: {
      prototype: "float(x=0.0)",
      description: "الأرقام العشرية (Floats) في بايثون تعتمد على معيار IEEE 754 (Double-precision) المخزن في 64-bit. هذا المعيار يجعل الحسابات سريعة جداً، ولكنه يسبب دقة تقريبية (Precision limits). لذلك، عملياً 0.1 + 0.2 لا يساوي 0.3 تماماً بل 0.30000000000000004! يستخدم الـ `float` في الذكاء الاصطناعي، الرسوم البيانية، ومقاييس الأداء. كما يتيح تعريف اللانهاية `float('inf')`.",
      parameters: "x (اختياري): القيمة النصية أو العددية المراد تحويلها لنظام النقطة العائمة.",
      return_value: "يعيد كائناً عشرياً بدقة تصل إلى 15-17 خانة عشرية.",
      example: "# مشكلة الدقة الكلاسيكية\nprint(0.1 + 0.2 == 0.3) # False!\n\n# استخدام اللانهاية في خوارزميات البحث\nmin_score = float('-inf')\nmax_score = float('inf')"
    }
  },
  {
    lesson_slug: "python-3",
    title: "str (النصوص والسلاسل)",
    category: "Core Primitives & Memory",
    order_index: 3,
    is_free: true,
    content_type: "theory",
    duration_minutes: 12,
    content: {
      prototype: "str(object='')",
      description: "النصوص `str` في بايثون هي كائنات غير قابلة للتعديل (Immutable). عند تغيير حرف، بايثون تصنع نسخة جديدة كلياً في الذاكرة! لتحسين الأداء، بايثون تستخدم تقنية (String Interning) لتخزين الكلمات القصيرة الشائعة مرة واحدة في الذاكرة لتوفير المساحة. النصوص تدعم ترميز UTF-8 لتشغيل أي لغة عالمية مع تقطيع متقدم (Slicing) فعال جداً.",
      parameters: "object (اختياري): الكائن أو البيانات المراد تحويلها وتمثيلها في صيغة نصية.",
      return_value: "كائن نصي مشفر بنظام Unicode.",
      example: "# تقنية التقطيع المتقدم (Slicing)\ntext = 'SVK Academy'\nprint(text[::-1]) # يعكس النص بالكامل\n\n# الاستفادة من التنسيق الذكي\nuser = 'Ahmed'\nprint(f'Welcome {user} to the system!')"
    }
  },
  {
    lesson_slug: "python-4",
    title: "bool (المنطق البولياني)",
    category: "Core Primitives & Memory",
    order_index: 4,
    is_free: false,
    content_type: "theory",
    duration_minutes: 8,
    content: {
      prototype: "bool(x=False)",
      description: "النوع `bool` يمثل المنطق الثنائي (True/False). داخلياً، بايثون تعتبر True كأنها الرقم 1 و False كأنها 0، مما يسمح بعمليات حسابية مباشرة عليها! وتعتمد بايثون على مبدأ (Truthiness) حيث كل كائن فارغ (قائمة فارغة، نص فارغ، 0) يعتبر False. كما تستخدم بايثون تقنية (Short-circuit evaluation) لتسريع الشروط المعقدة بحيث تتوقف بمجرد معرفة النتيجة.",
      parameters: "x: الكائن المراد تقييم حالته المنطقية (فارغ أم ممتلئ).",
      return_value: "True أو False بناءً على ما إذا كان الكائن يحتوي على بيانات صالحة.",
      example: "# تقييم الكائنات الفارغة\nempty_list = []\nif not empty_list:\n    print('القائمة فارغة، لن يتم الاستعلام من قاعدة البيانات')\n\n# Short-circuit\nresult = True or some_heavy_function()"
    }
  },
  {
    lesson_slug: "python-5",
    title: "list (القوائم الديناميكية)",
    category: "Collections & Data Structures",
    order_index: 5,
    is_free: false,
    content_type: "theory",
    duration_minutes: 15,
    content: {
      prototype: "list(iterable=())",
      description: "القوائم `list` هي مصفوفات ديناميكية (Dynamic Arrays). في الذاكرة، بايثون لا تحجز مساحة لعنصر واحد فقط، بل تقوم بـ (Over-allocation)؛ تحجز مساحة إضافية مسبقاً لتسريع عمليات إضافة العناصر (append). القوائم قابلة للتعديل (Mutable)، ويمكنها احتواء أنواع بيانات مختلطة، مما يجعلها مرنة وقوية لبناء الأنظمة، ولكن بطيئة نسبياً عند البحث مقارنة بالقاموس.",
      parameters: "iterable (اختياري): تسلسل بيانات كالنصوص أو المجموعات لتحويلها إلى قائمة.",
      return_value: "مصفوفة ديناميكية قابلة للتعديل بالكامل.",
      example: "# الـ List Comprehension (طريقة احترافية وسريعة)\nsquares = [x**2 for x in range(1, 6)]\nprint(squares) # [1, 4, 9, 16, 25]\n\n# دمج قائمتين\nusers = ['Ali'] + ['Mona']"
    }
  },
  {
    lesson_slug: "python-6",
    title: "dict (القواميس وجداول الهاش)",
    category: "Collections & Data Structures",
    order_index: 6,
    is_free: false,
    content_type: "theory",
    duration_minutes: 15,
    content: {
      prototype: "dict(**kwargs) أو dict(mapping)",
      description: "القاموس `dict` هو أقوى هيكل بيانات في بايثون! مبني هندسياً على تقنية (Hash Tables). هذا يعني أن سرعة البحث، إضافة، أو حذف عنصر هي O(1) ثابتة تقريباً، مهما كان القاموس ضخماً. يُستخدم بكثافة في التعامل مع قواعد البيانات (JSON)، إعدادات الأنظمة، وإنشاء فهارس بحث فائقة السرعة للمستخدمين. المفاتيح يجب أن تكون من نوع غير قابل للتعديل (Hashable).",
      parameters: "kwargs أو mapping: بيانات مزدوجة (مفتاح وقيمة) لبناء القاموس.",
      return_value: "جدول هاش فائق السرعة يعتمد على أزواج المفتاح والقيمة.",
      example: "# إنشاء معمارية بيانات مستخدم\nuser_profile = {'id': 101, 'role': 'admin', 'active': True}\n\n# الاستعلام السريع والآمن\nuser_role = user_profile.get('role', 'guest')\nprint(f'Role: {user_role}')"
    }
  },
  {
    lesson_slug: "python-7",
    title: "tuple (الصفوف الثابتة)",
    category: "Collections & Data Structures",
    order_index: 7,
    is_free: false,
    content_type: "theory",
    duration_minutes: 10,
    content: {
      prototype: "tuple(iterable=())",
      description: "الـ `tuple` تشبه القائمة، لكنها محصنة وغير قابلة للتعديل (Immutable). هندسياً، نظراً لثبات حجمها، بايثون تخزن الـ Tuples بشكل متلاصق في الذاكرة (Contiguous Memory)، مما يجعلها أسرع من الـ Lists وتستهلك مساحة أقل. تُستخدم الـ Tuples لإرجاع أكثر من قيمة من دالة، أو لتمثيل بيانات محمية يجب ألا يتم العبث بها كالأسماء وإحداثيات الخريطة.",
      parameters: "iterable (اختياري): تسلسل عناصر لتجميعه في Tuple.",
      return_value: "هيكل بيانات متلاصق وثابت للقراءة فقط.",
      example: "# دالة ترجع قيمتين معاً عبر Tuple\ndef get_server_status():\n    return ('192.168.1.1', 'Online')\n\n# تفكيك القيم (Unpacking)\nip, status = get_server_status()\nprint(ip, status)"
    }
  },
  {
    lesson_slug: "python-8",
    title: "set (المجموعات الرياضية)",
    category: "Collections & Data Structures",
    order_index: 8,
    is_free: false,
    content_type: "theory",
    duration_minutes: 12,
    content: {
      prototype: "set(iterable=())",
      description: "الـ `set` عبارة عن تجميعة فريدة لا تقبل التكرار، مبنية داخلياً باستخدام جداول الهاش (Hash Tables) مثل القاموس تماماً، ولكن للمفاتيح فقط. هذا يجعل عمليات التحقق `in` صاروخية وسرعتها O(1). تُستخدم هندسياً لتنظيف البيانات من التكرار، أو حساب التقاطع والاختلاف (Intersection/Difference) بين المجموعات الضخمة بكفاءة عالية.",
      parameters: "iterable (اختياري): بيانات سيتم تفريغها واختيار العناصر غير المكررة فقط.",
      return_value: "مجموعة رياضية متقدمة لا تدعم الترتيب أو الفهرسة.",
      example: "# إزالة التكرار من قاعدة بيانات مصغرة\nemails = ['a@a.com', 'b@b.com', 'a@a.com']\nunique_emails = set(emails)\n\n# التقاطع: إيجاد أصدقاء مشتركين\nmutual = {'Ali', 'Sara'} & {'Sara', 'Omar'} # {'Sara'}"
    }
  },
  {
    lesson_slug: "python-9",
    title: "if/elif/else (التفرع المنطقي)",
    category: "Control Flow",
    order_index: 9,
    is_free: false,
    content_type: "theory",
    duration_minutes: 10,
    content: {
      prototype: "if condition:\n  ...\nelif condition:\n  ...\nelse:\n  ...",
      description: "جملة الشرط `if` هي العقل المدبر لتوجيه معمارية الكود (Branching). وحدة المعالجة المركزية (CPU) تستخدم تقنية التنبؤ بالتفرع (Branch Prediction) لتسريع الشروط، لذلك يجب وضع الحالات الأكثر احتمالاً في البداية. في الأنظمة المتقدمة، بايثون الحديثة تدعم هيكل الشروط الجديد `match/case` لمعالجة الأنماط المعقدة بأسلوب أكثر فخامة من `if/elif` المتسلسلة.",
      parameters: "condition: أي تعبير منطقي أو متغير يعطي Truthy أو Falsy.",
      return_value: "تنفيذ كتلة الكود (Block) الخاصة بأول شرط صحيح يتطابق.",
      example: "# التحقق من صلاحيات الأمان\nuser_role = 'admin'\nif user_role == 'admin':\n    print('Full Access Granted')\nelif user_role == 'moderator':\n    print('Partial Access')\nelse:\n    print('Read Only')"
    }
  },
  {
    lesson_slug: "python-10",
    title: "for loop (تكرار العناصر)",
    category: "Control Flow",
    order_index: 10,
    is_free: false,
    content_type: "theory",
    duration_minutes: 12,
    content: {
      prototype: "for item in iterable:\n    ...",
      description: "حلقة `for` في بايثون ليست مجرد حلقة عد (Counting loop) مثل C++، بل هي `Iterator-based loop`. داخلياً، بايثون تطلب من الهيكل (كالقائمة أو القاموس) استدعاء الدالة السحرية `__iter__()` و `__next__()` لجلب العنصر التالي في الذاكرة. هذا يجعلها آمنة تماماً ضد أخطاء تجاوز الحدود (Index Out of Bounds) وقوية جداً في التصفح.",
      parameters: "iterable: الهيكل أو مولد البيانات الذي سيتم السير عبر عناصره واحداً تلو الآخر.",
      return_value: "لا يرجع قيمة، بل ينفذ تعليمات مكررة على كل عنصر.",
      example: "# السير على قاموس مهندس بيانات\nserver_ports = {'HTTP': 80, 'HTTPS': 443}\nfor protocol, port in server_ports.items():\n    print(f'Service {protocol} runs on port {port}')"
    }
  },
  {
    lesson_slug: "python-11",
    title: "while loop (الحلقات الشرطية)",
    category: "Control Flow",
    order_index: 11,
    is_free: false,
    content_type: "theory",
    duration_minutes: 10,
    content: {
      prototype: "while condition:\n    ...",
      description: "حلقة `while` تعمل باستمرار طالما أن الشرط صحيح (True). في الهندسة البرمجية للـ Backend، نستخدم حلقة `while True:` لإنشاء خوادم تستمع للطلبات بلا توقف (Event Loops). لكن يجب التعامل بحذر وإضافة نقطة توقف `break` أو تأخير (sleep) لتجنب حجز طاقة المعالج (CPU Spikes) بالكامل في حلقة لا نهائية.",
      parameters: "condition: الشرط الذي يجب أن يظل صحيحاً لكي يستمر التكرار.",
      return_value: "لا توجد، يتم تنفيذ البلوك طالما الشرط محقق.",
      example: "# نظام محاكاة انتظار استجابة السيرفر\nretries = 3\nwhile retries > 0:\n    print('Trying to connect...')\n    # if success: break\n    retries -= 1\nelse:\n    print('Connection Failed.')"
    }
  },
  {
    lesson_slug: "python-12",
    title: "functions (الدوال الأساسية)",
    category: "Functions & Scope",
    order_index: 12,
    is_free: false,
    content_type: "theory",
    duration_minutes: 14,
    content: {
      prototype: "def function_name(args) -> return_type:\n    ...",
      description: "الدوال `def` هي حجر الأساس للتنظيم (Modularity). في بايثون، الدوال تعتبر كائنات من الدرجة الأولى (First-class citizens)، مما يعني أنه يمكنك تخزينها في متغيرات أو تمريرها كمعاملات لدوال أخرى. داخلياً، بايثون تنشئ إطار ذاكرة جديد (Stack Frame) لكل استدعاء، ليحفظ المتغيرات المحلية (Local Variables) التي تنتهي بمجرد عمل `return`.",
      parameters: "args: متغيرات الدالة، وتدعم الأنواع التوضيحية (Type Hints) للمشاريع الضخمة.",
      return_value: "إرجاع أي كائن (بايثون تعيد None تلقائياً إذا لم تكتب return).",
      example: "# دالة هندسية لحساب ضرائب مع Type Hints\ndef calculate_tax(amount: float, tax_rate: float = 0.15) -> float:\n    return amount + (amount * tax_rate)\n\nprint(calculate_tax(100)) # 115.0"
    }
  },
  {
    lesson_slug: "python-13",
    title: "*args & **kwargs (المعاملات المرنة)",
    category: "Functions & Scope",
    order_index: 13,
    is_free: false,
    content_type: "theory",
    duration_minutes: 10,
    content: {
      prototype: "def func(*args, **kwargs):\n    ...",
      description: "المعاملات المرنة تجعل كودك كمرونة السحر! `*args` تقوم بتجميع أي عدد غير محدود من القيم العادية داخل `Tuple`. بينما `**kwargs` تقوم بتجميع القيم ذات الأسماء (Keyword arguments) داخل قاموس `dict`. تستخدم هذه الميزة بكثافة شديدة في تطوير إطارات العمل (Frameworks) مثل Django ليسمحوا للمبرمج بتمرير خصائص بلا حدود للدوال.",
      parameters: "args: مصفوفة المتغيرات اللامحدودة. kwargs: قاموس المتغيرات اللامحدودة المسمّاة.",
      return_value: "مجموعة ديناميكية معبأة في كائنات Python جاهزة للوصول.",
      example: "# نظام تسجيل بيانات متقدم\ndef create_user(name, *roles, **details):\n    print(f'User: {name}, Roles: {roles}')\n    for key, val in details.items():\n        print(f'{key} = {val}')\n\ncreate_user('Ali', 'Admin', 'HR', age=30, active=True)"
    }
  },
  {
    lesson_slug: "python-14",
    title: "Lambda (الدوال المجهولة السريعة)",
    category: "Functions & Scope",
    order_index: 14,
    is_free: false,
    content_type: "theory",
    duration_minutes: 8,
    content: {
      prototype: "lambda arguments: expression",
      description: "دالة `lambda` هي دالة مجهولة الاسم تُكتب في سطر واحد فقط! تُستخدم للمهام اللحظية والصغيرة، خاصة كعامل فلترة (Filters) أو فرز (Sorting) مخصص. داخلياً، تصبح كائناً من نوع Function لكن بدون اسم رمزي في الذاكرة. مسموح بوضع تعبير برمجي واحد فقط (Expression) بدون استخدام كلمات مفتاحية مثل `return` أو حلقات.",
      parameters: "arguments: المدخلات التي تتلقاها الدالة المجهولة.",
      return_value: "تقوم الدالة بتقييم التعبير (Expression) وإرجاع نتيجته فورا.",
      example: "# ترتيب قاموس مستخدمين حسب العمر باستخدام Lambda\nusers = [{'name': 'A', 'age': 25}, {'name': 'B', 'age': 20}]\nusers.sort(key=lambda u: u['age'])\nprint(users) # سيتم ترتيب B قبل A"
    }
  },
  {
    lesson_slug: "python-15",
    title: "Scope & LEGB Rule (مجال المتغيرات)",
    category: "Functions & Scope",
    order_index: 15,
    is_free: false,
    content_type: "theory",
    duration_minutes: 15,
    content: {
      prototype: "LEGB: Local, Enclosing, Global, Built-in",
      description: "كيف تعرف بايثون المتغير المقصود؟ قاعدة (LEGB) هي القانون الهندسي لذلك! أولاً تبحث في الذاكرة المحلية (Local)، ثم المحيطة (Enclosing) للدوال المتداخلة، ثم العالمية (Global)، وأخيراً أوامر بايثون المدمجة (Built-ins). استخدام كلمة `global` داخل دالة يكسر الجدار ويسمح بتعديل متغير خارجي، رغم أن المهندسين يتجنبون ذلك للحفاظ على نظافة الذاكرة وحمايتها.",
      parameters: "Local Variables و Global Namespace.",
      return_value: "ترابط وتحديد أولوية الوصول للمتغير المسمى.",
      example: "# تحديث إحصائيات النظام باستخدام global\ntotal_requests = 0\n\ndef add_request():\n    global total_requests\n    total_requests += 1\n\nadd_request()\nprint(total_requests) # 1"
    }
  },
  {
    lesson_slug: "python-16",
    title: "Map, Filter, Reduce (البرمجة الوظيفية)",
    category: "Functional Programming",
    order_index: 16,
    is_free: false,
    content_type: "theory",
    duration_minutes: 15,
    content: {
      prototype: "map(func, iter), filter(func, iter), reduce(func, iter)",
      description: "هذه الأدوات من قلب (البرمجة الوظيفية - Functional Programming). دالة `map` تطبق تعديلاً على كل عنصر بضربة واحدة. دالة `filter` تصفي القوائم بسرعة هائلة محركةً بيانات ضخمة في ثوانٍ. أما `reduce` فتضغط القائمة لقيمة واحدة (مثل الجمع التراكمي). في بايثون 3، تُرجع هذه الدوال كائنات من نوع (Iterator) بدلاً من القوائم لتقليل حرق مساحة الذاكرة.",
      parameters: "func: الدالة المراد تطبيقها. iter: مصفوفة البيانات.",
      return_value: "كائن مُولد (Iterator) أو القيمة النهائية المدمجة في حالة Reduce.",
      example: "from functools import reduce\nnums = [1, 2, 3, 4]\n\n# Map: مضاعفة الأرقام\ndoubled = list(map(lambda x: x*2, nums))\n\n# Filter: الأرقام الزوجية فقط\nevens = list(filter(lambda x: x%2 == 0, nums))\n\n# Reduce: مجموع الأرقام\ntotal = reduce(lambda a, b: a+b, nums)"
    }
  },
  {
    lesson_slug: "python-17",
    title: "Comprehensions (قوائم المولدات الخاطفة)",
    category: "Functional Programming",
    order_index: 17,
    is_free: false,
    content_type: "theory",
    duration_minutes: 12,
    content: {
      prototype: "[expr for item in iter if condition]",
      description: "الـ `Comprehensions` هي الطريقة الأكثر أناقة (Pythonic) والأسرع لتوليد المصفوفات! بدلاً من استخدام `for` و `append` في عدة أسطر، يتم بناء الهيكل داخلياً بلغة C المحسنة في سطر واحد، ما يجعله أسرع في الأداء وأقل استهلاكاً للمعالج. يمكن استخدامها لإنشاء القوائم (Lists)، القواميس (Dicts)، والمجموعات (Sets).",
      parameters: "تعبير الجلب، حلقة الدوران، والشروط المفلترة الاختيارية.",
      return_value: "هيكل بيانات جديد مهيأ وممتلئ بالعناصر المحسوبة فوراً.",
      example: "# توليد قاموس لمعالجة البيانات\nnames = ['Ali', 'Omar']\nuser_lengths = {name: len(name) for name in names}\nprint(user_lengths) # {'Ali': 3, 'Omar': 4}\n\n# List comprehension مع شرط\nevens = [x for x in range(10) if x % 2 == 0]"
    }
  },
  {
    lesson_slug: "python-18",
    title: "Decorators (المزخرفات والرقابة الفائقة)",
    category: "Functional Programming",
    order_index: 18,
    is_free: false,
    content_type: "theory",
    duration_minutes: 18,
    content: {
      prototype: "@decorator_name\ndef func(): ...",
      description: "الـ `Decorators` هي كبسولات سحرية تغلف دوالك لتغيير سلوكها دون لمس الكود الأصلي المكتوب بداخلها! تُستعمل بكثرة في عالم الشركات لاختبار الصلاحيات (مثل `@login_required`) أو قياس سرعة أداء المعالج. تعمل بمبدأ إرجاع الدوال (Higher-Order Functions)، بحيث تلف الدالة المستهدفة بدالة أخرى تحيط بها من الأعلى والأسفل.",
      parameters: "دالة تستقبل دالة أخرى كمعامل لتقوم بالالتفاف حولها.",
      return_value: "الدالة المغلفة المطورة الجاهزة للتنفيذ.",
      example: "import time\ndef timer(func):\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        print(f'Execution Time: {time.time() - start}s')\n        return result\n    return wrapper\n\n@timer\ndef slow_task():\n    time.sleep(1)\n    print('Task Finished!')\nslow_task()"
    }
  },
  {
    lesson_slug: "python-19",
    title: "Generators & Yield (توليد البيانات الموفر)",
    category: "Functional Programming",
    order_index: 19,
    is_free: false,
    content_type: "theory",
    duration_minutes: 15,
    content: {
      prototype: "def gen(): yield x",
      description: "تخيل أن لديك ملف بيانات يحتوي على 10 مليار سطر.. إذا قرأته في قائمة عادية ستنفجر ذاكرة الـ RAM! الحل العبقري هو المولدات `Generators` والكلمة المفتاحية `yield`. المولد لا يحجز المصفوفة بالكامل، بل يصنع آلة تحتفظ بحالتها الحالية في الذاكرة وتولد النتيجة واحدة تلو الأخرى عند الطلب فقط (Lazy Evaluation)، مما يقلل الاستهلاك لنسبة تقارب الصفر.",
      parameters: "تُستخدم yield داخل الدالة لإيقاف التنفيذ مؤقتاً وإخراج القيمة.",
      return_value: "كائن مُولد (Generator object) يمكنك استدعاء next() عليه.",
      example: "# مولد لتدفق البيانات اللانهائي\ndef infinite_numbers():\n    num = 0\n    while True:\n        yield num\n        num += 1\n\ngen = infinite_numbers()\nprint(next(gen)) # 0\nprint(next(gen)) # 1"
    }
  },
  {
    lesson_slug: "python-20",
    title: "try/except (اقتناص الأخطاء الهندسي)",
    category: "Error Handling",
    order_index: 20,
    is_free: false,
    content_type: "theory",
    duration_minutes: 12,
    content: {
      prototype: "try:\n  ...\nexcept Exception as e:\n  ...\nfinally:\n  ...",
      description: "النظام الذي ينهار عند أول مشكلة هو نظام ضعيف! `try/except` هي آلية الدروع (Exception Handling). بدلاً من تعطل البرنامج (Crash) عند انقطاع الاتصال بقاعدة البيانات أو قسمة رقم على الصفر، نقوم بالتقاط الخطأ ومعالجته برمجياً. بلوك `finally` ينفذ دائماً، وهو إلزامي هندسياً لإغلاق الاتصالات المفتوحة وإرجاع الموارد المحجوزة للذاكرة مهما حدث.",
      parameters: "Exception: نوع الخطأ المراد صيده.",
      return_value: "تحويل مسار التدفق إلى كتلة Except في حالة الانهيار.",
      example: "try:\n    file = open('data.txt', 'r')\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print('خطأ أمني: لا يمكن القسمة على صفر!')\nexcept FileNotFoundError:\n    print('الملف غير موجود')\nfinally:\n    print('تنظيف الذاكرة وإغلاق الموارد...')\n    # file.close()"
    }
  }
];

const tiers = [
  { range: [21, 40], category: "Advanced Patterns & Closures" },
  { range: [41, 60], category: "OOP & Metaprogramming" },
  { range: [61, 80], category: "High-Performance & Concurrency" },
  { range: [81, 100], category: "AI Agents & Real-World Engineering" }
];

let fullTrack = [...batch1];

for (let i = 21; i <= 100; i++) {
  let category = "Unknown";
  for (const tier of tiers) {
    if (i >= tier.range[0] && i <= tier.range[1]) {
      category = tier.category;
      break;
    }
  }

  fullTrack.push({
    lesson_slug: `python-${i}`,
    title: `Lesson ${i} Placeholder`,
    category: category,
    order_index: i,
    is_free: false,
    content_type: "theory",
    duration_minutes: 10,
    content: {
      prototype: `module.function() // Lesson ${i}`,
      description: `Placeholder content for Lesson ${i} regarding ${category}. This will be fully hydrated in subsequent batches.`,
      parameters: `Placeholder parameters for Lesson ${i}.`,
      return_value: `Placeholder return value for Lesson ${i}.`,
      example: `# Example placeholder ${i}\nprint("Will be hydrated")`
    }
  });
}

const fileContent = `export const pythonTrackData = ${JSON.stringify(fullTrack, null, 2)};\n`;
fs.writeFileSync(path.join(__dirname, 'src/context/tracks/pythonData.ts'), fileContent, 'utf-8');
console.log('Successfully generated 100 items array in pythonData.ts');
