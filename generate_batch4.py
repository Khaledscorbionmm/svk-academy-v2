import json
import os

data = [
  {
    "lesson_slug": "python-51",
    "content": {
      "context": "لماذا نبني نظام إدارة مستخدمين؟ (تطبيق عملي لربط المفاهيم السابقة مثل القواميس، الدوال، والملفات).",
      "description": "في هذا الدرس، سنقوم ببناء تطبيق عملي مصغر في بايثون يتيح لنا إدارة المستخدمين. سنستخدم القواميس لتخزين بيانات المستخدمين، والدوال لإضافة مستخدم جديد، عرض المستخدمين، أو حذفهم. هذا التطبيق يدمج العديد من الأساسيات التي تعلمناها ويهيئنا للتعامل مع الأنظمة الحقيقية.",
      "prototype": "users = {}\ndef add_user(uid, name):\n    pass",
      "parameters": "المتغيرات مثل قاموس المستخدمين (users) لجمع البيانات، ومعاملات الدوال مثل اسم المستخدم ورقمه التعريفي.",
      "return_value": "التطبيق يعرض رسائل نصية توضح نجاح العمليات (إضافة/حذف) أو يطبع قائمة المستخدمين.",
      "example": "users = {}\n\ndef add_user(user_id, name):\n    users[user_id] = name\n    print(f'تمت إضافة {name}')\n\nadd_user(1, 'أحمد')\nprint(users)"
    },
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "إضافة والبحث عن مستخدم",
        "code": "users = {1: 'Ali', 2: 'Sara'}\ndef get_user(uid):\n    return users.get(uid, 'غير موجود')\n\nprint(get_user(1))\nprint(get_user(3))",
        "expected_output": "Ali\nغير موجود",
        "explanation": "استخدمنا دالة get للبحث في القاموس بأمان دون التسبب في خطأ إذا لم يكن المستخدم موجوداً."
      },
      {
        "type": "wrong",
        "title": "تعديل مستخدم غير موجود",
        "code": "users = {1: 'Ali'}\ndel users[2]",
        "error_message": "KeyError: 2",
        "explanation": "محاولة حذف مفتاح غير موجود في القاموس يسبب خطأ. يجب التحقق من وجود المفتاح أولاً باستخدام if 2 in users: أو استخدام طرق آمنة."
      },
      {
        "type": "mistake",
        "title": "استخدام القوائم بدلاً من القواميس لبيانات فريدة",
        "explanation": "البعض يستخدم القوائم لتخزين بيانات ذات معرفات فريدة، مما يجعل البحث بطيئاً ومعقداً. القواميس هي الأنسب لأنها تستخدم المفاتيح للوصول السريع."
      },
      {
        "type": "use_case",
        "title": "نظام تسجيل الدخول",
        "explanation": "في المواقع الحقيقية، تُستخدم أنظمة إدارة المستخدمين للتحقق من هوية الأشخاص عند تسجيل الدخول وإدارة صلاحياتهم."
      },
      {
        "type": "challenge",
        "title": "تحدي: منع تكرار المستخدمين",
        "code": "users = {1: 'أحمد'}\ndef add_user(uid, name):\n    # أكمل الكود لمنع إضافة مستخدم بنفس المعرف\n    pass",
        "expected_output": "رسالة تفيد بأن المعرف موجود مسبقاً إذا تم إدخال 1.",
        "explanation": "استخدم جملة شرطية if uid in users: قبل إضافة المستخدم الجديد للقاموس."
      }
    ],
    "exam_data": {
      "title": "اختبار إدارة المستخدمين",
      "questions": [
        {
          "question": "ما هو هيكل البيانات الأنسب لتخزين مستخدمين بمعرفات (IDs) فريدة تتيح البحث السريع؟",
          "options": ["القوائم (Lists)", "القواميس (Dictionaries)", "السلاسل النصية (Strings)", "المجموعات (Sets)"],
          "correct_answer": "القواميس (Dictionaries)",
          "explanation": "القواميس تعتمد على أزواج (مفتاح: قيمة) مما يتيح الوصول للبيانات بسرعة فائقة عبر المفتاح الفريد."
        }
      ]
    }
  },
  {
    "lesson_slug": "python-52",
    "content": {
      "context": "لماذا نستخدم قواعد البيانات SQLite مع بايثون؟ (لحفظ البيانات بشكل دائم ومنظم وبناء تطبيقات قوية).",
      "description": "تأتي بايثون بمكتبة مدمجة اسمها sqlite3 تتيح لك إنشاء قواعد بيانات علائقية. بدلاً من حفظ البيانات في ملفات نصية تفقد تنظيمها مع الوقت، تمنحك قواعد البيانات القدرة على تخزين وجلب البيانات بسرعة وموثوقية في ملف واحد محلي (.db).",
      "prototype": "import sqlite3\nconn = sqlite3.connect('test.db')\ncur = conn.cursor()",
      "parameters": "نمرر اسم الملف لدالة connect. إذا لم يكن موجوداً سيتم إنشاؤه.",
      "return_value": "ترجع كائن الاتصال Connection وكائن المؤشر Cursor لتنفيذ الأوامر.",
      "example": "import sqlite3\nconn = sqlite3.connect('store.db')\nc = conn.cursor()\nc.execute('CREATE TABLE IF NOT EXISTS items (name TEXT, price REAL)')\nconn.commit()\nconn.close()"
    },
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "إنشاء جدول جديد",
        "code": "import sqlite3\nconn = sqlite3.connect('test.db')\ncur = conn.cursor()\ncur.execute('CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)')\nconn.commit()\nconn.close()",
        "expected_output": "يتم إنشاء ملف test.db وبداخله جدول users",
        "explanation": "قمنا بالاتصال بالقاعدة وإنشاء جدول بسيط مع التأكيد على حفظ التغييرات باستخدام commit."
      },
      {
        "type": "wrong",
        "title": "نسيان حفظ التغييرات",
        "code": "import sqlite3\nconn = sqlite3.connect('test.db')\nconn.execute('INSERT INTO users VALUES (1, \"Ali\")')\nconn.close()",
        "error_message": "لا يوجد خطأ ولكن البيانات لا تُحفظ",
        "explanation": "البيانات لم تُحفظ لأننا نسينا استدعاء conn.commit() قبل إغلاق الاتصال."
      },
      {
        "type": "mistake",
        "title": "استخدام نصوص بايثون العادية للبحث في قاعدة البيانات بدلاً من SQL",
        "explanation": "البعض يقوم بجلب كل البيانات من القاعدة في قائمة بايثون ثم يبحث فيها بـ for loop، هذا يبطئ البرنامج. يجب استخدام أوامر SQL مثل WHERE."
      },
      {
        "type": "use_case",
        "title": "تطبيقات سطح المكتب والموبايل",
        "explanation": "العديد من تطبيقات الموبايل ومتصفحات الويب (مثل جوجل كروم) تستخدم SQLite محلياً لحفظ سجلات التصفح والإعدادات."
      },
      {
        "type": "challenge",
        "title": "تحدي: إنشاء جدول الطلاب",
        "code": "import sqlite3\nconn = sqlite3.connect('school.db')\n# اكتب أمر SQL لإنشاء جدول students بأعمدة: id و grade",
        "expected_output": "إنشاء جدول للطلاب بنجاح.",
        "explanation": "استخدم الأمر CREATE TABLE مع تحديد نوع البيانات لكل عمود (INTEGER, TEXT)."
      }
    ],
    "exam_data": {
      "title": "اختبار SQLite",
      "questions": [
        {
          "question": "ما هي الدالة المسؤولة عن حفظ التعديلات في قاعدة البيانات بشكل نهائي في sqlite3؟",
          "options": ["conn.close()", "conn.save()", "conn.commit()", "conn.execute()"],
          "correct_answer": "conn.commit()",
          "explanation": "الدالة commit() تقوم بحفظ وإرسال التعديلات التي تم إجراؤها على قاعدة البيانات."
        }
      ]
    }
  },
  {
    "lesson_slug": "python-53",
    "content": {
      "context": "كيف نبحث عن البيانات ونسترجعها من قاعدة البيانات؟ (الاستعلامات الأساسية).",
      "description": "بعد إنشاء قاعدة البيانات، نحتاج إلى استخراج البيانات منها أو تحديثها. الاستعلامات الأساسية (SQL Queries) مثل SELECT لجلب البيانات، و WHERE لتصفية النتائج، و INSERT لإضافة بيانات جديدة هي لغة التخاطب مع قاعدة البيانات.",
      "prototype": "cursor.execute(\"SELECT * FROM table_name WHERE condition\")",
      "parameters": "نص الاستعلام (Query String) الذي يحتوي على أوامر SQL.",
      "return_value": "في حالة SELECT، يمكننا استخدام fetchall() أو fetchone() لاسترجاع النتائج كقوائم.",
      "example": "import sqlite3\nconn = sqlite3.connect('store.db')\ncur = conn.cursor()\ncur.execute('SELECT name FROM items WHERE price > 50')\nfor row in cur.fetchall():\n    print(row[0])"
    },
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "إدخال بيانات آمن",
        "code": "name = 'Lana'\nprice = 90\ncur.execute('INSERT INTO items (name, price) VALUES (?, ?)', (name, price))",
        "expected_output": "إدخال البيانات بأمان",
        "explanation": "استخدام العلامات ؟ يمنع هجمات حقن قواعد البيانات (SQL Injection)."
      },
      {
        "type": "wrong",
        "title": "دمج النصوص بشكل مباشر في SQL",
        "code": "user_id = '1 OR 1=1'\ncur.execute(f'SELECT * FROM users WHERE id = {user_id}')",
        "error_message": "خطر أمني (SQL Injection)",
        "explanation": "هذه الطريقة تتيح للمخترقين تغيير الاستعلام وحذف أو كشف القاعدة. استخدم دائماً Tuple مع علامات ؟."
      },
      {
        "type": "mistake",
        "title": "تحديث البيانات بدون WHERE",
        "explanation": "كتابة UPDATE users SET role='admin' بدون تحديد المستخدم ستجعل جميع المستخدمين مدراء!"
      },
      {
        "type": "use_case",
        "title": "محرك البحث الداخلي",
        "explanation": "عندما تبحث في موقع عن منتج، يقوم الخادم بتنفيذ استعلام SELECT بكلمة البحث لاسترجاع المنتجات المطابقة."
      },
      {
        "type": "challenge",
        "title": "تحدي: حذف منتج معين",
        "code": "item_id = 5\n# اكتب الاستعلام لحذف المنتج رقم 5 باستخدام المعاملات الآمنة\ncur.execute('___')",
        "expected_output": "حذف المنتج ذو المعرف 5 من القاعدة.",
        "explanation": "استخدم الأمر DELETE FROM table WHERE id = ?"
      }
    ],
    "exam_data": {
      "title": "اختبار الاستعلامات",
      "questions": [
        {
          "question": "لماذا نستخدم علامة الاستفهام (?) في استعلامات SQL عبر بايثون بدلاً من دمج النصوص (f-strings)؟",
          "options": ["لأنها أسرع في التنفيذ", "لحماية القاعدة من هجمات حقن SQL", "لأن بايثون لا تدعم السلاسل النصية هنا", "لتقليل مساحة الكود"],
          "correct_answer": "لحماية القاعدة من هجمات حقن SQL",
          "explanation": "استخدام المعاملات (?) يقوم بتنظيف المدخلات برمجياً ويمنع المخترقين من تنفيذ أكواد خبيثة."
        }
      ]
    }
  },
  {
    "lesson_slug": "python-54",
    "content": {
      "context": "كيف نتصل بقاعدة البيانات بشكل آمن ومحترف؟ (إدارة الاتصال).",
      "description": "التوصيل بقاعدة البيانات يجب أن يتم بحذر. من المهم جداً التأكد من إغلاق الاتصال بعد الانتهاء منه لتجنب تلف الملفات أو قفل القاعدة (Database lock). استخدام سياق with يضمن إغلاق الاتصال تلقائياً حتى في حالة حدوث أخطاء برمجية.",
      "prototype": "with sqlite3.connect('db.sqlite') as conn:\n    cur = conn.cursor()",
      "parameters": "كائن الاتصال يمكن استخدامه داخل جملة with كمدير سياق (Context Manager).",
      "return_value": "إدارة تلقائية للاتصال حيث تُنفذ عمليات الإغلاق بدون الحاجة لكتابة close().",
      "example": "import sqlite3\ntry:\n    with sqlite3.connect('app.db') as conn:\n        conn.execute('INSERT INTO users VALUES (?, ?)', (1, 'Omar'))\nexcept sqlite3.Error as e:\n    print('حدث خطأ:', e)"
    },
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاتصال باستخدام with",
        "code": "import sqlite3\nwith sqlite3.connect('test.db') as conn:\n    res = conn.execute('SELECT 1').fetchone()\n    print('متصل:', res[0])",
        "expected_output": "متصل: 1",
        "explanation": "استخدام with يضمن حفظ (commit) التغييرات تلقائياً إذا تمت بدون أخطاء، رغم أنه يفضل عمل close للاتصال عند الانتهاء."
      },
      {
        "type": "wrong",
        "title": "ترك الاتصال مفتوحاً وسط الأخطاء",
        "code": "conn = sqlite3.connect('db.db')\n1 / 0  # خطأ يقاطع البرنامج\nconn.close()",
        "error_message": "ZeroDivisionError",
        "explanation": "البرنامج توقف قبل الوصول لدالة close() مما يترك قاعدة البيانات معلقة. استخدم with أو try/finally."
      },
      {
        "type": "mistake",
        "title": "إنشاء اتصال جديد مع كل عملية صغيرة",
        "explanation": "فتح وإغلاق الاتصال مع القاعدة عدة مرات في الثانية يبطئ التطبيق جداً. يفضل فتح اتصال واحد طوال دورة حياة الطلب."
      },
      {
        "type": "use_case",
        "title": "التعامل مع ملفات ضخمة",
        "explanation": "في التطبيقات الضخمة تُستخدم برك الاتصال (Connection Pools) لإعادة استخدام الاتصالات المفتوحة لتوفير الموارد."
      },
      {
        "type": "challenge",
        "title": "تحدي: استخدم try و finally",
        "code": "conn = sqlite3.connect('my.db')\n# أضف كتلة try و finally لضمان إغلاق الاتصال\nconn.execute('SELECT * FROM users')\nconn.close()",
        "expected_output": "الاتصال يُغلق دائماً.",
        "explanation": "ضع الأمر execute في try، وضع close في finally لتتأكد من تنفيذه في كل الحالات."
      }
    ],
    "exam_data": {
      "title": "اختبار إدارة الاتصال",
      "questions": [
        {
          "question": "ما هي الفائدة الرئيسية لاستخدام with عند التعامل مع قواعد البيانات؟",
          "options": ["تشفير البيانات تلقائياً", "ضمان إدارة الموارد وإغلاق الملفات بأمان", "منع اختراقات SQL تلقائياً", "جعل البرنامج أسرع 10 مرات"],
          "correct_answer": "ضمان إدارة الموارد وإغلاق الملفات بأمان",
          "explanation": "جملة with تعتبر Context Manager وتضمن إغلاق وتنظيف الموارد حتى لو حدث خطأ مفاجئ."
        }
      ]
    }
  },
  {
    "lesson_slug": "python-55",
    "content": {
      "context": "كيف نطبق ما تعلمناه عن القواعد لبناء متجر إلكتروني؟",
      "description": "في هذا التطبيق العملي، سنقوم بتصميم نظام مبسط لمتجر. سيتضمن جداول للمنتجات، وجدول للعملاء، وسنقوم بربطها لكتابة كود بايثون يتيح إضافة منتج للسلة وحساب الإجمالي. هذا يجمع مفاهيم SQL وبايثون.",
      "prototype": "def add_product(name, price):\n    cur.execute('INSERT INTO products (name, price) VALUES (?, ?)', (name, price))",
      "parameters": "بيانات المنتج والعميل التي يتم تمريرها للدوال والتأكد من إدراجها بشكل آمن.",
      "return_value": "النظام يقوم بإجراء التعديلات في الجداول واسترجاع الإجمالي للمستخدم.",
      "example": "def get_total(user_id):\n    cur.execute('SELECT SUM(price) FROM cart WHERE user_id = ?', (user_id,))\n    total = cur.fetchone()[0]\n    return total if total else 0"
    },
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "التحقق من وجود المخزون",
        "code": "cur.execute('SELECT stock FROM products WHERE id=?', (pid,))\nstock = cur.fetchone()[0]\nif stock > 0:\n    print('متاح للبيع')",
        "expected_output": "متاح للبيع",
        "explanation": "نجلب قيمة المخزون الحالية قبل إتمام عملية البيع لمنع بيع منتج نفد."
      },
      {
        "type": "wrong",
        "title": "إرجاع مجموع فارغ",
        "code": "cur.execute('SELECT SUM(price) FROM cart WHERE user_id = 999')\ntotal = cur.fetchone()[0]\nprint(total + 5)",
        "error_message": "TypeError: unsupported operand type(s) for +: 'NoneType' and 'int'",
        "explanation": "إذا كانت السلة فارغة فإن مجموع SQL سيرجع NULL (أي None في بايثون). يجب التحقق من النتيجة أو إرجاع 0."
      },
      {
        "type": "mistake",
        "title": "حفظ كلمات مرور المستخدمين كنصوص واضحة",
        "explanation": "عند إنشاء جداول المستخدمين، يقوم المبتدئون أحياناً بتخزين كلمات المرور كنصوص. في المتجر الحقيقي يجب تشفيرها (Hashing) قبل الحفظ."
      },
      {
        "type": "use_case",
        "title": "عربات التسوق",
        "explanation": "كل ما تضيفه إلى عربة تسوق أمازون أو أي متجر يُخزن فوراً في جداول قواعد بيانات ترتبط بحسابك لعرضها لاحقاً."
      },
      {
        "type": "challenge",
        "title": "تحدي: تطبيق الخصم",
        "code": "def apply_discount(product_id):\n    # قم بتحديث سعر المنتج وتقليله بنسبة 10%\n    pass",
        "expected_output": "السعر يقل بمقدار 10%.",
        "explanation": "استخدم استعلام UPDATE وقم بضرب السعر في 0.90"
      }
    ],
    "exam_data": {
      "title": "تطبيق المتجر",
      "questions": [
        {
          "question": "إذا احتجت لجمع إجمالي أسعار منتجات مستخدم في سلة التسوق، ما هي دالة SQL الأنسب للاستخدام مع بايثون؟",
          "options": ["COUNT()", "TOTAL()", "SUM()", "MAX()"],
          "correct_answer": "SUM()",
          "explanation": "دالة SUM في SQL تقوم بجمع قيم عمود معين مع بعضها لتعطيك المجموع الكلي."
        }
      ]
    }
  },
  {
    "lesson_slug": "python-56",
    "content": {
      "context": "كيف ننتقل من برامج تعمل في الشاشة السوداء إلى مواقع يزورها الناس؟",
      "description": "تطوير الويب باستخدام بايثون يتيح لك بناء الجانب الخلفي (Backend) للمواقع الإلكترونية. وهو الجزء المخفي الذي يعالج طلبات المستخدمين (Requests)، يتصل بقاعدة البيانات، ويُرسل الرد (Response) ليتم عرضه في المتصفح.",
      "prototype": "لا يوجد كود بايثون محدد هنا، بل المفاهيم المعمارية (HTTP, Server, Client).",
      "parameters": "مفاهيم الطلبات (GET, POST) والردود (200 OK, 404 Not Found).",
      "return_value": "المتصفح يتلقى كود HTML والبيانات ويقوم بعرضها للمستخدم بطريقة جذابة.",
      "example": "# مثال لفكرة الطلب والرد:\n# Client (Browser) يرسل: GET /home\n# Server (Python) يستقبل ويعالج\n# Server يرسل: 200 OK مع محتوى HTML"
    },
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "فهم طريقة GET",
        "code": "استخدام GET لجلب بيانات مثل قراءة مقال في الموقع.",
        "expected_output": "تصفح آمن وسريع",
        "explanation": "طلب GET يستخدم لطلب بيانات من الخادم ولا يغير أي شيء في قاعدة البيانات."
      },
      {
        "type": "wrong",
        "title": "استخدام GET لإرسال بيانات حساسة",
        "code": "<form method='GET'>...",
        "error_message": "البيانات تظهر في الرابط",
        "explanation": "الطلبات من نوع GET تضع المتغيرات في الرابط (URL)، مما يكشف كلمات المرور. يجب استخدام POST للبيانات الحساسة."
      },
      {
        "type": "mistake",
        "title": "بايثون يصمم واجهة الموقع",
        "explanation": "بايثون في الويب (Backend) لا ترسم الأزرار ولا تلون الموقع، هذه مهمة HTML و CSS. بايثون تحضر البيانات والمنطق فقط."
      },
      {
        "type": "use_case",
        "title": "منصات التواصل الاجتماعي",
        "explanation": "إنستجرام يستخدم بايثون في الخلفية لمعالجة الصور والتوصيات، بينما ترى أنت واجهة مصممة بتطبيقات أخرى."
      },
      {
        "type": "challenge",
        "title": "تحدي: تحديد نوع الطلب",
        "code": "عندما تقوم بتسجيل حساب جديد، ما هو نوع طلب HTTP الذي يجب أن تستخدمه؟",
        "expected_output": "POST",
        "explanation": "لأنك ترسل بيانات لتغيير حالة القاعدة أو إنشاء شيء جديد."
      }
    ],
    "exam_data": {
      "title": "مقدمة تطوير الويب",
      "questions": [
        {
          "question": "ما هو دور لغة بايثون بشكل عام في تطوير الويب؟",
          "options": ["تلوين وتنسيق الصفحات", "بناء الجانب الخلفي (Backend) والتعامل مع البيانات", "إنشاء التأثيرات الحركية (Animations) في المتصفح", "بناء تطبيقات آيفون"],
          "correct_answer": "بناء الجانب الخلفي (Backend) والتعامل مع البيانات",
          "explanation": "تُستخدم بايثون في الخلفية لإدارة قواعد البيانات، المنطق، وحماية الموقع."
        }
      ]
    }
  },
  {
    "lesson_slug": "python-57",
    "content": {
      "context": "لماذا نتعلم إطار عمل Flask؟ (لبناء تطبيقات ويب بسرعة وسهولة).",
      "description": "Flask هو إطار عمل (Framework) خفيف ومصغر (Microframework) في بايثون لتطوير الويب. يمنحك الأدوات الأساسية لبدء خادم الويب الخاص بك وتلقي الطلبات دون تعقيدات زائدة، مما يجعله مثالياً للمبتدئين وللتطبيقات الصغيرة والمتوسطة.",
      "prototype": "from flask import Flask\napp = Flask(__name__)",
      "parameters": "المتغير __name__ يُمرر لـ Flask ليعرف أين يوجد التطبيق الأساسي للبحث عن الملفات الإضافية والقوالب.",
      "return_value": "كائن app الذي يمثل تطبيق الويب الخاص بنا، ونستخدمه لربط المسارات بالدوال.",
      "example": "from flask import Flask\napp = Flask(__name__)\n\n@app.route('/')\ndef home():\n    return 'مرحباً بك في عالم تطوير الويب!'"
    },
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق Flask الأدنى",
        "code": "from flask import Flask\napp = Flask(__name__)\n@app.route('/')\ndef index(): return 'Hello'",
        "expected_output": "تشغيل الكود يجهز الخادم لتلقي الطلبات",
        "explanation": "هذا هو الحد الأدنى من الكود لإنشاء موقع يحتوي على صفحة واحدة فقط باستخدام فلاسك."
      },
      {
        "type": "wrong",
        "title": "كتابة مسار بدون مزخرف",
        "code": "def my_page():\n    return 'Hello'\n# لم نستخدم @app.route",
        "error_message": "404 Not Found",
        "explanation": "إذا لم نضع @app.route('/') فوق الدالة، فإن Flask لن يعرف متى يشغل هذه الدالة وسيظهر للمستخدم خطأ 404."
      },
      {
        "type": "mistake",
        "title": "فلاسك مخصص للتطبيقات البسيطة جداً فقط",
        "explanation": "رغم أنه يوصف بالـ Microframework، إلا أن شركات كبرى مثل Pinterest استخدمت فلاسك. الميزة أنه يسمح لك باختيار المكتبات التي تريد إضافتها."
      },
      {
        "type": "use_case",
        "title": "واجهات برمجة التطبيقات (APIs)",
        "explanation": "يستخدم المطورون Flask بكثرة لبناء واجهات برمجية APIs تتواصل عبرها تطبيقات الجوال مع قواعد البيانات."
      },
      {
        "type": "challenge",
        "title": "تحدي: إنشاء صفحة 'من نحن'",
        "code": "from flask import Flask\napp = Flask(__name__)\n# أضف مساراً لـ /about يعرض 'عن الشركة'",
        "expected_output": "صفحة جديدة تعمل على مسار /about",
        "explanation": "استخدم المزخرف @app.route('/about') فوق دالة جديدة."
      }
    ],
    "exam_data": {
      "title": "أساسيات Flask",
      "questions": [
        {
          "question": "ما الغرض من استخدام المزخرف (Decorator) @app.route في Flask؟",
          "options": ["تشغيل خادم الويب", "ربط رابط (URL) معين بدالة بايثون لتنفيذها", "إخفاء الدالة عن المستخدمين", "تلوين مخرجات الدالة في المتصفح"],
          "correct_answer": "ربط رابط (URL) معين بدالة بايثون لتنفيذها",
          "explanation": "المزخرف يوجه Flask للرد على الطلب الوارد لرابط معين بتشغيل الدالة التي تليه مباشرة."
        }
      ]
    }
  },
  {
    "lesson_slug": "python-58",
    "content": {
      "context": "كيف نجعل الكود متاحاً على المتصفح؟ (تشغيل الخادم المحلي).",
      "description": "بعد كتابة الكود الأساسي في Flask، نحتاج إلى تشغيل الخادم (Server). دالة app.run() تقوم ببدء تشغيل خادم تطوير محلي على جهازك، مما يتيح لك فتح المتصفح وتجربة موقعك (عبر رابط localhost أو 127.0.0.1) قبل نشره للإنترنت للعامة.",
      "prototype": "app.run(debug=True, port=5000)",
      "parameters": "debug=True يعيد تشغيل الخادم تلقائياً عند تغيير الكود ويظهر الأخطاء بوضوح على المتصفح. port يحدد المنفذ.",
      "return_value": "تطبيق يظل قيد التشغيل (Running State) يستمع للطلبات القادمة إلى المنفذ المحدد.",
      "example": "from flask import Flask\napp = Flask(__name__)\n\n@app.route('/')\ndef home(): return 'يعمل!' \n\nif __name__ == '__main__':\n    app.run(debug=True)"
    },
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "حماية تشغيل الخادم",
        "code": "if __name__ == '__main__':\n    app.run(debug=True)",
        "expected_output": "خادم محلي يعمل",
        "explanation": "نستخدم الشرط if __name__ == '__main__' لضمان عدم تشغيل الخادم إذا قمنا باستيراد هذا الملف كبرنامج فرعي في مكان آخر."
      },
      {
        "type": "wrong",
        "title": "ترك وضع التصحيح فعال في الإنتاج",
        "code": "app.run(debug=True)",
        "error_message": "خطر أمني: يمكن للمخترقين رؤية كودك عند حدوث خطأ.",
        "explanation": "وضع التصحيح (Debug) ممتاز أثناء التطوير لأنه يظهر أخطاء بايثون في المتصفح، لكن عند نشر الموقع الحقيقي يجب أن يكون False."
      },
      {
        "type": "mistake",
        "title": "عدم القدرة على تشغيل موقعين معاً",
        "explanation": "إذا حاولت تشغيل تطبيقين Flask في نفس الوقت ستحصل على خطأ 'Address already in use'. يجب تغيير قيمة الـ port لأحدهما، مثلاً port=5001."
      },
      {
        "type": "use_case",
        "title": "التطوير التجريبي المحلي",
        "explanation": "المطورون دائماً يختبرون التعديلات الجديدة على الخادم المحلي قبل نشرها لآلاف المستخدمين على الخادم الحقيقي."
      },
      {
        "type": "challenge",
        "title": "تحدي: تغيير المنفذ",
        "code": "# قم بتشغيل التطبيق على المنفذ 8080 بدلاً من 5000\napp.run(___)",
        "expected_output": "الموقع يعمل على http://127.0.0.1:8080",
        "explanation": "أضف port=8080 داخل أقواس دالة run."
      }
    ],
    "exam_data": {
      "title": "خادم التطوير المحلي",
      "questions": [
        {
          "question": "ما الفائدة الرئيسية من إضافة الخاصية (debug=True) أثناء تطوير تطبيق Flask؟",
          "options": ["لجعل التطبيق سريعاً جداً", "لإعادة تشغيل الخادم تلقائياً عند أي تعديل وعرض تفاصيل الأخطاء بالمتصفح", "لحماية الموقع من الهجمات والفيروسات", "لتشغيل التطبيق على منصات الجوال"],
          "correct_answer": "لإعادة تشغيل الخادم تلقائياً عند أي تعديل وعرض تفاصيل الأخطاء بالمتصفح",
          "explanation": "وضع التصحيح يسهل بشكل كبير عملية اكتشاف الأخطاء ويوفر الوقت عبر إعادة التحديث التلقائي."
        }
      ]
    }
  },
  {
    "lesson_slug": "python-59",
    "content": {
      "context": "كيف نبني مسارات تفاعلية تتغير بناءً على المستخدم؟ (التعامل مع الـ Routes).",
      "description": "لا يجب أن تكون مسارات الموقع ثابتة دائماً. في Flask يمكننا جعل المسارات ديناميكية (Dynamic Routes) لتلقي معلومات من الرابط، مثل رقم المقال أو اسم المستخدم. كما يمكننا تحديد نوع الطلبات التي يقبلها المسار مثل طلبات الإرسال (POST) لاستقبال البيانات من النماذج.",
      "prototype": "@app.route('/user/<username>', methods=['GET'])\ndef show_user_profile(username):\n    pass",
      "parameters": "في المسار نستخدم أقواس الزاوية < > لتحديد متغير يتم تمريره كمعامل للدالة المرتبطة.",
      "return_value": "محتوى يعتمد على القيمة التي أُدخلت في الرابط المتغير.",
      "example": "@app.route('/post/<int:post_id>')\ndef show_post(post_id):\n    # سيطابق فقط الأرقام الصحيحة\n    return f'المقالة رقم: {post_id}'"
    },
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "مسار يعتمد على نوع الطلب",
        "code": "@app.route('/login', methods=['GET', 'POST'])\ndef login():\n    return 'تسجيل الدخول'",
        "expected_output": "يعمل سواء قمت بزيارة الصفحة أو أرسلت استمارة",
        "explanation": "تحديد methods يسمح للمسار بقبول البيانات المرسلة من الاستمارات (POST) والزيارات العادية (GET)."
      },
      {
        "type": "wrong",
        "title": "إرسال نموذج لمسار غير مدعوم",
        "code": "@app.route('/submit')\ndef submit():\n    pass",
        "error_message": "405 Method Not Allowed",
        "explanation": "بشكل افتراضي المسارات تقبل GET فقط. إذا حاول نموذج إرسال بيانات (POST) إلى هذا المسار سيحدث خطأ 405."
      },
      {
        "type": "mistake",
        "title": "استخدام نفس اسم الدالة لمسارين مختلفين",
        "explanation": "لا يمكنك استخدام دالتين بنفس الاسم في بايثون للمسارات المختلفة (مثلاً def index() مرتين)، لأن Flask سيعتمد على الدالة الأخيرة فقط."
      },
      {
        "type": "use_case",
        "title": "الملفات الشخصية للمستخدمين",
        "explanation": "الروابط مثل twitter.com/ahmed تستخدم الـ Dynamic Routes بدلاً من عمل صفحة لكل مستخدم برمجياً."
      },
      {
        "type": "challenge",
        "title": "تحدي: مسار للترحيب",
        "code": "# اصنع مساراً ديناميكياً يستقبل الاسم ويعيد رسالة الترحيب\n@app.route('/___/___')\ndef welcome(name):\n    return f'أهلاً {name}'",
        "expected_output": "زيارة /hello/Ali تطبع 'أهلاً Ali'",
        "explanation": "استخدم التنسيق '/hello/<name>'"
      }
    ],
    "exam_data": {
      "title": "التعامل مع المسارات",
      "questions": [
        {
          "question": "كيف يمكننا جعل جزء من الرابط (URL) متغيراً ويُمرر للدالة في Flask؟",
          "options": ["بوضعه بين علامتي اقتباس \" \"", "بوضعه بين أقواس مربعة [ ]", "بوضعه بين أقواس زاوية < > مثل <username>", "باستخدام علامة #"],
          "correct_answer": "بوضعه بين أقواس زاوية < > مثل <username>",
          "explanation": "استخدام الأقواس الزاوية يخبر Flask أن هذا الجزء متغير وسيتم تمريره كمتغير للدالة الملحقة."
        }
      ]
    }
  },
  {
    "lesson_slug": "python-60",
    "content": {
      "context": "كيف نرسل صفحات ويب كاملة للمستخدم؟ (نظام القوالب Jinja2).",
      "description": "إرجاع نصوص بسيطة غير كافٍ. يستخدم Flask نظام قوالب يُسمى Jinja2 لفصل كود بايثون عن تصميم الموقع (HTML). القوالب تتيح لنا تصميم واجهات غنية باستخدام HTML مع دمج متغيرات، شروط، وحلقات تكرار من بايثون لتوليد الصفحات ديناميكياً.",
      "prototype": "from flask import render_template\nreturn render_template('file.html', var=value)",
      "parameters": "اسم ملف HTML (يجب أن يوضع في مجلد اسمه templates)، وقائمة المتغيرات التي نريد حقنها في القالب.",
      "return_value": "نص طويل يحتوي على صفحة HTML المجهزة بالبيانات لتُرسل للمتصفح.",
      "example": "from flask import Flask, render_template\napp = Flask(__name__)\n\n@app.route('/hello/<name>')\ndef hello(name):\n    # سيبحث عن القالب داخل مجلد templates/\n    return render_template('greet.html', user=name)"
    },
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تكرار القوائم في القالب",
        "code": "<!-- في ملف HTML -->\n<ul>\n{% for item in items %}\n  <li>{{ item }}</li>\n{% endfor %}\n</ul>",
        "expected_output": "قائمة تعداد نقطي بالمنتجات",
        "explanation": "استخدام الأقواس {% %} مخصص للمنطق البرمجي (مثل حلقات التكرار)، بينما {{ }} مخصص لطباعة المتغيرات."
      },
      {
        "type": "wrong",
        "title": "وضع القوالب في مجلد خاطئ",
        "code": "return render_template('home.html')",
        "error_message": "jinja2.exceptions.TemplateNotFound: home.html",
        "explanation": "يبحث Flask تلقائياً عن ملفات HTML في مجلد اسمه 'templates' حصراً. إذا لم يكن المجلد موجوداً أو اسمه مختلف سيحدث هذا الخطأ."
      },
      {
        "type": "mistake",
        "title": "كتابة HTML كامل داخل بايثون",
        "explanation": "بعض المبتدئين يعيد كود html كـ string ضخم داخل الدالة. هذا سيء ويصعب صيانته، القوالب صُممت لمنع ذلك وفصل التصميم عن المنطق."
      },
      {
        "type": "use_case",
        "title": "لوحات التحكم (Dashboards)",
        "explanation": "تعرض لوحة التحكم بيانات إحصائية وقوائم تتغير يومياً، تُمرر من بايثون إلى القالب ليتم عرضها في الجداول المنمقة."
      },
      {
        "type": "challenge",
        "title": "تحدي: جملة شرطية في القالب",
        "code": "<!-- أكمل الكود لطباعة 'ناجح' إذا كان grade أكبر من 50 -->\n{% ___ grade > 50 %}\n   ناجح\n{% ___ %}",
        "expected_output": "طباعة ناجح بناء على الدرجة",
        "explanation": "استخدم {% if grade > 50 %} وتأكد من إضافة {% endif %} في النهاية."
      }
    ],
    "exam_data": {
      "title": "نظام القوالب Templates",
      "questions": [
        {
          "question": "أين يجب وضع ملفات HTML (القوالب) في مشروع Flask ليتمكن render_template من إيجادها افتراضياً؟",
          "options": ["في المجلد الرئيسي للمشروع", "في مجلد يسمى html_files", "في مجلد يسمى templates بجوار ملف التطبيق", "في مجلد static"],
          "correct_answer": "في مجلد يسمى templates بجوار ملف التطبيق",
          "explanation": "مجلد templates هو المجلد الافتراضي الذي يبحث فيه محرك Jinja2 عن قوالب HTML عند استدعاء الدالة."
        }
      ]
    }
  }
]

with open('batch4.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print('JSON written successfully.')
