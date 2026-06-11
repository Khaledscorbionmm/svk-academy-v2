export const pythonTrackData = [
  {
    "lesson_slug": "python-1",
    "title": "int (الأعداد الصحيحة)",
    "category": "Core Primitives & Memory",
    "order_index": 1,
    "is_free": true,
    "content_type": "theory",
    "duration_minutes": 8,
    "content": {
      "prototype": "int(x=0, base=10)",
      "description": "أهلاً بك في عالم هندسة البرمجيات! الـ `int` في بايثون 3 ليس مجرد رقم، بل هو كائن (Object) ذكي يتعامل مع الذاكرة الديناميكية ببراعة فائقة. على عكس لغات أخرى مقيدة بـ 32-bit أو 64-bit، بايثون تدعم أرقاماً صحيحة ضخمة جداً (Arbitrary-precision) وتتوسع في الذاكرة تلقائياً لاستيعابها. نستخدمها للحسابات الدقيقة، التحويل بين الأنظمة العددية (الثنائي، السداسي عشر)، وإدارة الفهارس.",
      "parameters": "x (اختياري): القيمة المراد تحويلها لرقم صحيح. base (اختياري): النظام العددي (مثل 2 للثنائي، 16 للسداسي عشر).",
      "return_value": "يعيد كائناً من نوع Integer نقي وجاهز للعمليات الحسابية أو المنطقية المعقدة.",
      "example": "# تخصيص رقم في الذاكرة\nusers_count = 104500\n\n# تحويل رقم ثنائي (Binary) إلى عشري\nbinary_str = '1010'\ndecimal_val = int(binary_str, 2) # الناتج: 10\nprint('Decimal:', decimal_val)"
    }
  },
  {
    "lesson_slug": "python-2",
    "title": "float (الأعداد العائمة)",
    "category": "Core Primitives & Memory",
    "order_index": 2,
    "is_free": true,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "float(x=0.0)",
      "description": "الأرقام العشرية (Floats) في بايثون تعتمد على معيار IEEE 754 (Double-precision) المخزن في 64-bit. هذا المعيار يجعل الحسابات سريعة جداً، ولكنه يسبب دقة تقريبية (Precision limits). لذلك، عملياً 0.1 + 0.2 لا يساوي 0.3 تماماً بل 0.30000000000000004! يستخدم الـ `float` في الذكاء الاصطناعي، الرسوم البيانية، ومقاييس الأداء. كما يتيح تعريف اللانهاية `float('inf')`.",
      "parameters": "x (اختياري): القيمة النصية أو العددية المراد تحويلها لنظام النقطة العائمة.",
      "return_value": "يعيد كائناً عشرياً بدقة تصل إلى 15-17 خانة عشرية.",
      "example": "# مشكلة الدقة الكلاسيكية\nprint(0.1 + 0.2 == 0.3) # False!\n\n# استخدام اللانهاية في خوارزميات البحث\nmin_score = float('-inf')\nmax_score = float('inf')"
    }
  },
  {
    "lesson_slug": "python-3",
    "title": "str (النصوص والسلاسل)",
    "category": "Core Primitives & Memory",
    "order_index": 3,
    "is_free": true,
    "content_type": "theory",
    "duration_minutes": 12,
    "content": {
      "prototype": "str(object='')",
      "description": "النصوص `str` في بايثون هي كائنات غير قابلة للتعديل (Immutable). عند تغيير حرف، بايثون تصنع نسخة جديدة كلياً في الذاكرة! لتحسين الأداء، بايثون تستخدم تقنية (String Interning) لتخزين الكلمات القصيرة الشائعة مرة واحدة في الذاكرة لتوفير المساحة. النصوص تدعم ترميز UTF-8 لتشغيل أي لغة عالمية مع تقطيع متقدم (Slicing) فعال جداً.",
      "parameters": "object (اختياري): الكائن أو البيانات المراد تحويلها وتمثيلها في صيغة نصية.",
      "return_value": "كائن نصي مشفر بنظام Unicode.",
      "example": "# تقنية التقطيع المتقدم (Slicing)\ntext = 'SVK Academy'\nprint(text[::-1]) # يعكس النص بالكامل\n\n# الاستفادة من التنسيق الذكي\nuser = 'Ahmed'\nprint(f'Welcome {user} to the system!')"
    }
  },
  {
    "lesson_slug": "python-4",
    "title": "bool (المنطق البولياني)",
    "category": "Core Primitives & Memory",
    "order_index": 4,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 8,
    "content": {
      "prototype": "bool(x=False)",
      "description": "النوع `bool` يمثل المنطق الثنائي (True/False). داخلياً، بايثون تعتبر True كأنها الرقم 1 و False كأنها 0، مما يسمح بعمليات حسابية مباشرة عليها! وتعتمد بايثون على مبدأ (Truthiness) حيث كل كائن فارغ (قائمة فارغة، نص فارغ، 0) يعتبر False. كما تستخدم بايثون تقنية (Short-circuit evaluation) لتسريع الشروط المعقدة بحيث تتوقف بمجرد معرفة النتيجة.",
      "parameters": "x: الكائن المراد تقييم حالته المنطقية (فارغ أم ممتلئ).",
      "return_value": "True أو False بناءً على ما إذا كان الكائن يحتوي على بيانات صالحة.",
      "example": "# تقييم الكائنات الفارغة\nempty_list = []\nif not empty_list:\n    print('القائمة فارغة، لن يتم الاستعلام من قاعدة البيانات')\n\n# Short-circuit\nresult = True or some_heavy_function()"
    }
  },
  {
    "lesson_slug": "python-5",
    "title": "list (القوائم الديناميكية)",
    "category": "Collections & Data Structures",
    "order_index": 5,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "prototype": "list(iterable=())",
      "description": "القوائم `list` هي مصفوفات ديناميكية (Dynamic Arrays). في الذاكرة، بايثون لا تحجز مساحة لعنصر واحد فقط، بل تقوم بـ (Over-allocation)؛ تحجز مساحة إضافية مسبقاً لتسريع عمليات إضافة العناصر (append). القوائم قابلة للتعديل (Mutable)، ويمكنها احتواء أنواع بيانات مختلطة، مما يجعلها مرنة وقوية لبناء الأنظمة، ولكن بطيئة نسبياً عند البحث مقارنة بالقاموس.",
      "parameters": "iterable (اختياري): تسلسل بيانات كالنصوص أو المجموعات لتحويلها إلى قائمة.",
      "return_value": "مصفوفة ديناميكية قابلة للتعديل بالكامل.",
      "example": "# الـ List Comprehension (طريقة احترافية وسريعة)\nsquares = [x**2 for x in range(1, 6)]\nprint(squares) # [1, 4, 9, 16, 25]\n\n# دمج قائمتين\nusers = ['Ali'] + ['Mona']"
    }
  },
  {
    "lesson_slug": "python-6",
    "title": "dict (القواميس وجداول الهاش)",
    "category": "Collections & Data Structures",
    "order_index": 6,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "prototype": "dict(**kwargs) أو dict(mapping)",
      "description": "القاموس `dict` هو أقوى هيكل بيانات في بايثون! مبني هندسياً على تقنية (Hash Tables). هذا يعني أن سرعة البحث، إضافة، أو حذف عنصر هي O(1) ثابتة تقريباً، مهما كان القاموس ضخماً. يُستخدم بكثافة في التعامل مع قواعد البيانات (JSON)، إعدادات الأنظمة، وإنشاء فهارس بحث فائقة السرعة للمستخدمين. المفاتيح يجب أن تكون من نوع غير قابل للتعديل (Hashable).",
      "parameters": "kwargs أو mapping: بيانات مزدوجة (مفتاح وقيمة) لبناء القاموس.",
      "return_value": "جدول هاش فائق السرعة يعتمد على أزواج المفتاح والقيمة.",
      "example": "# إنشاء معمارية بيانات مستخدم\nuser_profile = {'id': 101, 'role': 'admin', 'active': True}\n\n# الاستعلام السريع والآمن\nuser_role = user_profile.get('role', 'guest')\nprint(f'Role: {user_role}')"
    }
  },
  {
    "lesson_slug": "python-7",
    "title": "tuple (الصفوف الثابتة)",
    "category": "Collections & Data Structures",
    "order_index": 7,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "tuple(iterable=())",
      "description": "الـ `tuple` تشبه القائمة، لكنها محصنة وغير قابلة للتعديل (Immutable). هندسياً، نظراً لثبات حجمها، بايثون تخزن الـ Tuples بشكل متلاصق في الذاكرة (Contiguous Memory)، مما يجعلها أسرع من الـ Lists وتستهلك مساحة أقل. تُستخدم الـ Tuples لإرجاع أكثر من قيمة من دالة، أو لتمثيل بيانات محمية يجب ألا يتم العبث بها كالأسماء وإحداثيات الخريطة.",
      "parameters": "iterable (اختياري): تسلسل عناصر لتجميعه في Tuple.",
      "return_value": "هيكل بيانات متلاصق وثابت للقراءة فقط.",
      "example": "# دالة ترجع قيمتين معاً عبر Tuple\ndef get_server_status():\n    return ('192.168.1.1', 'Online')\n\n# تفكيك القيم (Unpacking)\nip, status = get_server_status()\nprint(ip, status)"
    }
  },
  {
    "lesson_slug": "python-8",
    "title": "set (المجموعات الرياضية)",
    "category": "Collections & Data Structures",
    "order_index": 8,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 12,
    "content": {
      "prototype": "set(iterable=())",
      "description": "الـ `set` عبارة عن تجميعة فريدة لا تقبل التكرار، مبنية داخلياً باستخدام جداول الهاش (Hash Tables) مثل القاموس تماماً، ولكن للمفاتيح فقط. هذا يجعل عمليات التحقق `in` صاروخية وسرعتها O(1). تُستخدم هندسياً لتنظيف البيانات من التكرار، أو حساب التقاطع والاختلاف (Intersection/Difference) بين المجموعات الضخمة بكفاءة عالية.",
      "parameters": "iterable (اختياري): بيانات سيتم تفريغها واختيار العناصر غير المكررة فقط.",
      "return_value": "مجموعة رياضية متقدمة لا تدعم الترتيب أو الفهرسة.",
      "example": "# إزالة التكرار من قاعدة بيانات مصغرة\nemails = ['a@a.com', 'b@b.com', 'a@a.com']\nunique_emails = set(emails)\n\n# التقاطع: إيجاد أصدقاء مشتركين\nmutual = {'Ali', 'Sara'} & {'Sara', 'Omar'} # {'Sara'}"
    }
  },
  {
    "lesson_slug": "python-9",
    "title": "if/elif/else (التفرع المنطقي)",
    "category": "Control Flow",
    "order_index": 9,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "if condition:\n  ...\nelif condition:\n  ...\nelse:\n  ...",
      "description": "جملة الشرط `if` هي العقل المدبر لتوجيه معمارية الكود (Branching). وحدة المعالجة المركزية (CPU) تستخدم تقنية التنبؤ بالتفرع (Branch Prediction) لتسريع الشروط، لذلك يجب وضع الحالات الأكثر احتمالاً في البداية. في الأنظمة المتقدمة، بايثون الحديثة تدعم هيكل الشروط الجديد `match/case` لمعالجة الأنماط المعقدة بأسلوب أكثر فخامة من `if/elif` المتسلسلة.",
      "parameters": "condition: أي تعبير منطقي أو متغير يعطي Truthy أو Falsy.",
      "return_value": "تنفيذ كتلة الكود (Block) الخاصة بأول شرط صحيح يتطابق.",
      "example": "# التحقق من صلاحيات الأمان\nuser_role = 'admin'\nif user_role == 'admin':\n    print('Full Access Granted')\nelif user_role == 'moderator':\n    print('Partial Access')\nelse:\n    print('Read Only')"
    }
  },
  {
    "lesson_slug": "python-10",
    "title": "for loop (تكرار العناصر)",
    "category": "Control Flow",
    "order_index": 10,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 12,
    "content": {
      "prototype": "for item in iterable:\n    ...",
      "description": "حلقة `for` في بايثون ليست مجرد حلقة عد (Counting loop) مثل C++، بل هي `Iterator-based loop`. داخلياً، بايثون تطلب من الهيكل (كالقائمة أو القاموس) استدعاء الدالة السحرية `__iter__()` و `__next__()` لجلب العنصر التالي في الذاكرة. هذا يجعلها آمنة تماماً ضد أخطاء تجاوز الحدود (Index Out of Bounds) وقوية جداً في التصفح.",
      "parameters": "iterable: الهيكل أو مولد البيانات الذي سيتم السير عبر عناصره واحداً تلو الآخر.",
      "return_value": "لا يرجع قيمة، بل ينفذ تعليمات مكررة على كل عنصر.",
      "example": "# السير على قاموس مهندس بيانات\nserver_ports = {'HTTP': 80, 'HTTPS': 443}\nfor protocol, port in server_ports.items():\n    print(f'Service {protocol} runs on port {port}')"
    }
  },
  {
    "lesson_slug": "python-11",
    "title": "while loop (الحلقات الشرطية)",
    "category": "Control Flow",
    "order_index": 11,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "while condition:\n    ...",
      "description": "حلقة `while` تعمل باستمرار طالما أن الشرط صحيح (True). في الهندسة البرمجية للـ Backend، نستخدم حلقة `while True:` لإنشاء خوادم تستمع للطلبات بلا توقف (Event Loops). لكن يجب التعامل بحذر وإضافة نقطة توقف `break` أو تأخير (sleep) لتجنب حجز طاقة المعالج (CPU Spikes) بالكامل في حلقة لا نهائية.",
      "parameters": "condition: الشرط الذي يجب أن يظل صحيحاً لكي يستمر التكرار.",
      "return_value": "لا توجد، يتم تنفيذ البلوك طالما الشرط محقق.",
      "example": "# نظام محاكاة انتظار استجابة السيرفر\nretries = 3\nwhile retries > 0:\n    print('Trying to connect...')\n    # if success: break\n    retries -= 1\nelse:\n    print('Connection Failed.')"
    }
  },
  {
    "lesson_slug": "python-12",
    "title": "functions (الدوال الأساسية)",
    "category": "Functions & Scope",
    "order_index": 12,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 14,
    "content": {
      "prototype": "def function_name(args) -> return_type:\n    ...",
      "description": "الدوال `def` هي حجر الأساس للتنظيم (Modularity). في بايثون، الدوال تعتبر كائنات من الدرجة الأولى (First-class citizens)، مما يعني أنه يمكنك تخزينها في متغيرات أو تمريرها كمعاملات لدوال أخرى. داخلياً، بايثون تنشئ إطار ذاكرة جديد (Stack Frame) لكل استدعاء، ليحفظ المتغيرات المحلية (Local Variables) التي تنتهي بمجرد عمل `return`.",
      "parameters": "args: متغيرات الدالة، وتدعم الأنواع التوضيحية (Type Hints) للمشاريع الضخمة.",
      "return_value": "إرجاع أي كائن (بايثون تعيد None تلقائياً إذا لم تكتب return).",
      "example": "# دالة هندسية لحساب ضرائب مع Type Hints\ndef calculate_tax(amount: float, tax_rate: float = 0.15) -> float:\n    return amount + (amount * tax_rate)\n\nprint(calculate_tax(100)) # 115.0"
    }
  },
  {
    "lesson_slug": "python-13",
    "title": "*args & **kwargs (المعاملات المرنة)",
    "category": "Functions & Scope",
    "order_index": 13,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "prototype": "def func(*args, **kwargs):\n    ...",
      "description": "المعاملات المرنة تجعل كودك كمرونة السحر! `*args` تقوم بتجميع أي عدد غير محدود من القيم العادية داخل `Tuple`. بينما `**kwargs` تقوم بتجميع القيم ذات الأسماء (Keyword arguments) داخل قاموس `dict`. تستخدم هذه الميزة بكثافة شديدة في تطوير إطارات العمل (Frameworks) مثل Django ليسمحوا للمبرمج بتمرير خصائص بلا حدود للدوال.",
      "parameters": "args: مصفوفة المتغيرات اللامحدودة. kwargs: قاموس المتغيرات اللامحدودة المسمّاة.",
      "return_value": "مجموعة ديناميكية معبأة في كائنات Python جاهزة للوصول.",
      "example": "# نظام تسجيل بيانات متقدم\ndef create_user(name, *roles, **details):\n    print(f'User: {name}, Roles: {roles}')\n    for key, val in details.items():\n        print(f'{key} = {val}')\n\ncreate_user('Ali', 'Admin', 'HR', age=30, active=True)"
    }
  },
  {
    "lesson_slug": "python-14",
    "title": "Lambda (الدوال المجهولة السريعة)",
    "category": "Functions & Scope",
    "order_index": 14,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 8,
    "content": {
      "prototype": "lambda arguments: expression",
      "description": "دالة `lambda` هي دالة مجهولة الاسم تُكتب في سطر واحد فقط! تُستخدم للمهام اللحظية والصغيرة، خاصة كعامل فلترة (Filters) أو فرز (Sorting) مخصص. داخلياً، تصبح كائناً من نوع Function لكن بدون اسم رمزي في الذاكرة. مسموح بوضع تعبير برمجي واحد فقط (Expression) بدون استخدام كلمات مفتاحية مثل `return` أو حلقات.",
      "parameters": "arguments: المدخلات التي تتلقاها الدالة المجهولة.",
      "return_value": "تقوم الدالة بتقييم التعبير (Expression) وإرجاع نتيجته فورا.",
      "example": "# ترتيب قاموس مستخدمين حسب العمر باستخدام Lambda\nusers = [{'name': 'A', 'age': 25}, {'name': 'B', 'age': 20}]\nusers.sort(key=lambda u: u['age'])\nprint(users) # سيتم ترتيب B قبل A"
    }
  },
  {
    "lesson_slug": "python-15",
    "title": "Scope & LEGB Rule (مجال المتغيرات)",
    "category": "Functions & Scope",
    "order_index": 15,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "prototype": "LEGB: Local, Enclosing, Global, Built-in",
      "description": "كيف تعرف بايثون المتغير المقصود؟ قاعدة (LEGB) هي القانون الهندسي لذلك! أولاً تبحث في الذاكرة المحلية (Local)، ثم المحيطة (Enclosing) للدوال المتداخلة، ثم العالمية (Global)، وأخيراً أوامر بايثون المدمجة (Built-ins). استخدام كلمة `global` داخل دالة يكسر الجدار ويسمح بتعديل متغير خارجي، رغم أن المهندسين يتجنبون ذلك للحفاظ على نظافة الذاكرة وحمايتها.",
      "parameters": "Local Variables و Global Namespace.",
      "return_value": "ترابط وتحديد أولوية الوصول للمتغير المسمى.",
      "example": "# تحديث إحصائيات النظام باستخدام global\ntotal_requests = 0\n\ndef add_request():\n    global total_requests\n    total_requests += 1\n\nadd_request()\nprint(total_requests) # 1"
    }
  },
  {
    "lesson_slug": "python-16",
    "title": "Map, Filter, Reduce (البرمجة الوظيفية)",
    "category": "Functional Programming",
    "order_index": 16,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "prototype": "map(func, iter), filter(func, iter), reduce(func, iter)",
      "description": "هذه الأدوات من قلب (البرمجة الوظيفية - Functional Programming). دالة `map` تطبق تعديلاً على كل عنصر بضربة واحدة. دالة `filter` تصفي القوائم بسرعة هائلة محركةً بيانات ضخمة في ثوانٍ. أما `reduce` فتضغط القائمة لقيمة واحدة (مثل الجمع التراكمي). في بايثون 3، تُرجع هذه الدوال كائنات من نوع (Iterator) بدلاً من القوائم لتقليل حرق مساحة الذاكرة.",
      "parameters": "func: الدالة المراد تطبيقها. iter: مصفوفة البيانات.",
      "return_value": "كائن مُولد (Iterator) أو القيمة النهائية المدمجة في حالة Reduce.",
      "example": "from functools import reduce\nnums = [1, 2, 3, 4]\n\n# Map: مضاعفة الأرقام\ndoubled = list(map(lambda x: x*2, nums))\n\n# Filter: الأرقام الزوجية فقط\nevens = list(filter(lambda x: x%2 == 0, nums))\n\n# Reduce: مجموع الأرقام\ntotal = reduce(lambda a, b: a+b, nums)"
    }
  },
  {
    "lesson_slug": "python-17",
    "title": "Comprehensions (قوائم المولدات الخاطفة)",
    "category": "Functional Programming",
    "order_index": 17,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 12,
    "content": {
      "prototype": "[expr for item in iter if condition]",
      "description": "الـ `Comprehensions` هي الطريقة الأكثر أناقة (Pythonic) والأسرع لتوليد المصفوفات! بدلاً من استخدام `for` و `append` في عدة أسطر، يتم بناء الهيكل داخلياً بلغة C المحسنة في سطر واحد، ما يجعله أسرع في الأداء وأقل استهلاكاً للمعالج. يمكن استخدامها لإنشاء القوائم (Lists)، القواميس (Dicts)، والمجموعات (Sets).",
      "parameters": "تعبير الجلب، حلقة الدوران، والشروط المفلترة الاختيارية.",
      "return_value": "هيكل بيانات جديد مهيأ وممتلئ بالعناصر المحسوبة فوراً.",
      "example": "# توليد قاموس لمعالجة البيانات\nnames = ['Ali', 'Omar']\nuser_lengths = {name: len(name) for name in names}\nprint(user_lengths) # {'Ali': 3, 'Omar': 4}\n\n# List comprehension مع شرط\nevens = [x for x in range(10) if x % 2 == 0]"
    }
  },
  {
    "lesson_slug": "python-18",
    "title": "Decorators (المزخرفات والرقابة الفائقة)",
    "category": "Functional Programming",
    "order_index": 18,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 18,
    "content": {
      "prototype": "@decorator_name\ndef func(): ...",
      "description": "الـ `Decorators` هي كبسولات سحرية تغلف دوالك لتغيير سلوكها دون لمس الكود الأصلي المكتوب بداخلها! تُستعمل بكثرة في عالم الشركات لاختبار الصلاحيات (مثل `@login_required`) أو قياس سرعة أداء المعالج. تعمل بمبدأ إرجاع الدوال (Higher-Order Functions)، بحيث تلف الدالة المستهدفة بدالة أخرى تحيط بها من الأعلى والأسفل.",
      "parameters": "دالة تستقبل دالة أخرى كمعامل لتقوم بالالتفاف حولها.",
      "return_value": "الدالة المغلفة المطورة الجاهزة للتنفيذ.",
      "example": "import time\ndef timer(func):\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        print(f'Execution Time: {time.time() - start}s')\n        return result\n    return wrapper\n\n@timer\ndef slow_task():\n    time.sleep(1)\n    print('Task Finished!')\nslow_task()"
    }
  },
  {
    "lesson_slug": "python-19",
    "title": "Generators & Yield (توليد البيانات الموفر)",
    "category": "Functional Programming",
    "order_index": 19,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "prototype": "def gen(): yield x",
      "description": "تخيل أن لديك ملف بيانات يحتوي على 10 مليار سطر.. إذا قرأته في قائمة عادية ستنفجر ذاكرة الـ RAM! الحل العبقري هو المولدات `Generators` والكلمة المفتاحية `yield`. المولد لا يحجز المصفوفة بالكامل، بل يصنع آلة تحتفظ بحالتها الحالية في الذاكرة وتولد النتيجة واحدة تلو الأخرى عند الطلب فقط (Lazy Evaluation)، مما يقلل الاستهلاك لنسبة تقارب الصفر.",
      "parameters": "تُستخدم yield داخل الدالة لإيقاف التنفيذ مؤقتاً وإخراج القيمة.",
      "return_value": "كائن مُولد (Generator object) يمكنك استدعاء next() عليه.",
      "example": "# مولد لتدفق البيانات اللانهائي\ndef infinite_numbers():\n    num = 0\n    while True:\n        yield num\n        num += 1\n\ngen = infinite_numbers()\nprint(next(gen)) # 0\nprint(next(gen)) # 1"
    }
  },
  {
    "lesson_slug": "python-20",
    "title": "try/except (اقتناص الأخطاء الهندسي)",
    "category": "Error Handling",
    "order_index": 20,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 12,
    "content": {
      "prototype": "try:\n  ...\nexcept Exception as e:\n  ...\nfinally:\n  ...",
      "description": "النظام الذي ينهار عند أول مشكلة هو نظام ضعيف! `try/except` هي آلية الدروع (Exception Handling). بدلاً من تعطل البرنامج (Crash) عند انقطاع الاتصال بقاعدة البيانات أو قسمة رقم على الصفر، نقوم بالتقاط الخطأ ومعالجته برمجياً. بلوك `finally` ينفذ دائماً، وهو إلزامي هندسياً لإغلاق الاتصالات المفتوحة وإرجاع الموارد المحجوزة للذاكرة مهما حدث.",
      "parameters": "Exception: نوع الخطأ المراد صيده.",
      "return_value": "تحويل مسار التدفق إلى كتلة Except في حالة الانهيار.",
      "example": "try:\n    file = open('data.txt', 'r')\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print('خطأ أمني: لا يمكن القسمة على صفر!')\nexcept FileNotFoundError:\n    print('الملف غير موجود')\nfinally:\n    print('تنظيف الذاكرة وإغلاق الموارد...')\n    # file.close()"
    }
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
