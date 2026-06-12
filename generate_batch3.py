import json

data = [
  {
    "lesson_slug": "python-41",
    "content": {
      "context": "لماذا نحتاج إلى معالجة النصوص المتقدمة؟ في الكثير من الأحيان، البيانات التي نستقبلها من المستخدمين أو الملفات تكون غير منظمة وبها فراغات أو رموز غير مرغوب فيها، ونحتاج لتنظيفها وتحليلها بكفاءة.",
      "description": "معالجة النصوص في بايثون تتيح لك التلاعب بالسلاسل النصية باستخدام دوال مدمجة مثل `strip()` لإزالة الفراغات، `split()` للتقسيم، و `join()` للتجميع، بالإضافة إلى طرق متقدمة في تنسيق النصوص.",
      "prototype": "cleaned_text = '-'.join(text.strip().split())",
      "parameters": "text: النص الأصلي. المعاملات في دوال مثل split و join تحدد الفاصل المستخدم.",
      "return_value": "ترجع هذه الدوال غالباً نصاً جديداً (String) أو قائمة من النصوص (List of Strings) لأن النصوص غير قابلة للتعديل (Immutable).",
      "example": "text = '  Python   is   Awesome  '\nwords = text.split()\nresult = ' '.join(words)\nprint(result)  # Output: Python is Awesome"
    },
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "csv_line = 'apple, banana, cherry'\nfruits = [f.strip() for f in csv_line.split(',')]\nprint(fruits)",
        "expected_output": "['apple', 'banana', 'cherry']",
        "explanation": "تم تقسيم النص عند الفاصلة، ثم استخدمنا list comprehension لإزالة الفراغات الزائدة من كل فاكهة."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "text = 'Hello World'\ntext[0] = 'h'\nprint(text)",
        "error_message": "TypeError: 'str' object does not support item assignment",
        "explanation": "النصوص في بايثون لا يمكن تعديل حروفها مباشرة (Immutable). لحل المشكلة يجب إنشاء نص جديد: text = 'h' + text[1:]"
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "الكثيرون يعتقدون أن دالة replace تعدل النص الأصلي، لكنها في الواقع تُرجع نسخة جديدة من النص بالتعديلات، ويجب تخزينها في متغير."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "تنظيف بيانات العملاء القادمة من نماذج الويب (Web Forms)، كإزالة الفراغات الإضافية من الأسماء أو توحيد حالة الأحرف (حروف كبيرة/صغيرة)."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "data = '  User1; User2 ; User3  '\nusers = data.split(';')\n# نريد قائمة بأسماء المستخدمين بدون فراغات",
        "expected_output": "['User1', 'User2', 'User3']",
        "explanation": "تلميح: استخدم حلقة أو List Comprehension مع تطبيق دالة strip() على كل عنصر."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "ما هي نتيجة تنفيذ الكود: '*'.join(['a', 'b', 'c']) ؟",
          "options": ["'a b c'", "'abc'", "'a*b*c'", "خطأ برمجي"],
          "correct_answer": "'a*b*c'",
          "explanation": "دالة join تقوم بربط عناصر القائمة باستخدام السلسلة النصية التي استُدعيت منها (وهي هنا النجمة)."
        }
      ]
    }
  },
  {
    "lesson_slug": "python-42",
    "content": {
      "context": "كيف نستخرج جميع أرقام الهواتف أو رسائل البريد الإلكتروني من نص طويل يتكون من آلاف الأسطر؟ هنا تبرز قوة التعبيرات العادية (Regular Expressions).",
      "description": "التعبيرات العادية، أو Regex، هي لغة صغيرة تُستخدم داخل بايثون (عبر مكتبة `re`) للبحث عن أنماط نصية معقدة، ومطابقتها، أو استبدالها بشكل مرن جداً ودقيق.",
      "prototype": "import re\nmatch = re.search(r'pattern', text)",
      "parameters": "pattern: النمط المراد البحث عنه (مثل r'\d+' للأرقام). text: النص الذي نبحث فيه.",
      "return_value": "ترجع الدوال كائن Match إذا وجدت تطابقاً، أو ترجع None في حال عدم وجود تطابق. دالة findall ترجع قائمة بالتطابقات.",
      "example": "import re\ntext = 'Contact me at admin@example.com or info@test.org'\nemails = re.findall(r'[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}', text)\nprint(emails)  # Output: ['admin@example.com', 'info@test.org']"
    },
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "import re\nphone = '+966-555-1234'\nis_valid = bool(re.match(r'^\+966-\d{3}-\d{4}$', phone))\nprint(is_valid)",
        "expected_output": "True",
        "explanation": "يتحقق النمط من أن النص يبدأ بـ +966- متبوعاً بثلاثة أرقام، شرطة، ثم أربعة أرقام."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "import re\ntext = 'Price is $50'\nresult = re.search('$', text)\nprint(result.group())",
        "error_message": "AttributeError: 'NoneType' object has no attribute 'group'",
        "explanation": "الرمز $ في التعبيرات العادية يعني 'نهاية السطر'. للبحث عن الرمز الحقيقي يجب استخدام علامة الهروب: r'\$'"
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "الاعتقاد بأن دوال النصوص العادية (مثل find أو replace) أفضل دائماً. بينما التعبيرات العادية قوية للأنماط المعقدة، إلا أن دوال النصوص العادية أسرع وأفضل للبحث عن نصوص ثابتة بسيطة."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "التحقق من صحة مدخلات المستخدم مثل قوة كلمات المرور، صيغة البريد الإلكتروني، أو استخراج روابط (URLs) من صفحات الويب."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "import re\ntext = 'Year 2023, Month 10'\n# المطلوب استخراج جميع الأرقام من النص كأعداد\nnumbers = re.search(r'\d+', text)",
        "expected_output": "['2023', '10']",
        "explanation": "تلميح: دالة search ترجع أول تطابق فقط. استخدم دالة findall للبحث عن جميع التطابقات في النص."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "ماذا يمثل التعبير العادي r'\\d+' في مكتبة re؟",
          "options": ["حرف واحد فقط", "رقم واحد أو أكثر", "مسافة فارغة", "أحرف وأرقام معاً"],
          "correct_answer": "رقم واحد أو أكثر",
          "explanation": "الرمز \\d يعني أي رقم من 0-9، وعلامة + تعني تكرار العنصر السابق مرة واحدة أو أكثر."
        }
      ]
    }
  },
  {
    "lesson_slug": "python-43",
    "content": {
      "context": "كيف تحسب عمر مستخدم بناءً على تاريخ ميلاده؟ أو كيف تعرف الوقت المستغرق لتنفيذ كود معين؟ هنا تظهر أهمية التعامل مع التواريخ والأوقات.",
      "description": "توفر بايثون وحدة `datetime` المدمجة التي تسمح لك بإنشاء، قراءة، وتعديل التواريخ والأوقات، وكذلك إجراء العمليات الحسابية عليها كجمع وطرح الفترات الزمنية.",
      "prototype": "from datetime import datetime\nnow = datetime.now()",
      "parameters": "الدوال تقبل معاملات مثل السنة، الشهر، واليوم. أو تقبل نصوص مع صيغة محددة (Format string).",
      "return_value": "ترجع كائنات من نوع datetime أو date أو timedelta والتي تحتوي على خصائص ودوال مساعدة.",
      "example": "from datetime import datetime, timedelta\ntoday = datetime.now()\nfuture_date = today + timedelta(days=10)\nprint('Date after 10 days:', future_date.strftime('%Y-%m-%d'))"
    },
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "from datetime import datetime\ndate_string = '2023-01-15'\ndate_obj = datetime.strptime(date_string, '%Y-%m-%d')\nprint(date_obj.year)",
        "expected_output": "2023",
        "explanation": "استخدمنا strptime لتحويل نص (String) يمثل تاريخاً إلى كائن datetime حقيقي يمكن التفاعل معه."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "from datetime import datetime\ndate1 = datetime(2023, 5, 20)\ndate2 = datetime(2023, 6, 1)\nresult = date1 + date2\nprint(result)",
        "error_message": "TypeError: unsupported operand type(s) for +: 'datetime.datetime' and 'datetime.datetime'",
        "explanation": "لا يمكنك جمع تاريخين معاً! يمكن فقط طرح تاريخين لمعرفة الفرق بينهما، أو جمع تاريخ مع مدة زمنية (timedelta)."
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "الاعتقاد بأن تنسيق التاريخ الأمريكي (الشهر/اليوم/السنة) هو الافتراضي عالمياً. برمجياً، يُفضل دائماً استخدام معيار ISO 8601 وهو YYYY-MM-DD لتجنب اللبس."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "جدولة المهام اليومية، أرشفة الملفات بناءً على تاريخ الإنشاء، أو حساب انتهاء صلاحية اشتراكات المستخدمين في تطبيقات الويب."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "from datetime import datetime\n# نريد طباعة الوقت الحالي بصيغة: ساعات:دقائق (نظام 24 ساعة)\nnow = datetime.now()\nprint(now.strftime('%H-%M'))",
        "expected_output": "14:30 (مثال على النتيجة المطلوبة)",
        "explanation": "تلميح: لقد استخدمت علامة الطرح (-) بين الساعات والدقائق بدلاً من النقطتين الرأسيتين (:)."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "أي الكائنات التالية تُستخدم لتمثيل فرق زمني أو مدة زمنية في بايثون؟",
          "options": ["datetime", "date", "timedelta", "time"],
          "correct_answer": "timedelta",
          "explanation": "الكائن timedelta يمثل مدة زمنية مثل '5 أيام و3 ساعات' ويستخدم في العمليات الحسابية على التواريخ."
        }
      ]
    }
  },
  {
    "lesson_slug": "python-44",
    "content": {
      "context": "المستخدم العادي لا يحب التعامل مع الشاشات السوداء وسطر الأوامر (Terminal). الواجهات الرسومية (GUIs) توفر نوافذ، أزراراً، ونصوصاً لتجربة مستخدم أفضل.",
      "description": "مكتبة `tkinter` هي المكتبة القياسية المدمجة في بايثون لإنشاء واجهات المستخدم الرسومية. تعتمد على إنشاء نافذة رئيسية وإضافة 'عناصر' (Widgets) مثل الأزرار ومربعات الإدخال إليها.",
      "prototype": "import tkinter as tk\nwindow = tk.Tk()\nwindow.mainloop()",
      "parameters": "عناصر الواجهة تقبل معاملات مثل النص (text)، اللون (bg, fg)، والدالة المرتبطة بالنقر (command).",
      "return_value": "الدوال الأساسية لا ترجع قيماً عادة، بل تقوم بتعديل حالة النافذة الرسومية المعروضة على الشاشة.",
      "example": "import tkinter as tk\n\ndef greet():\n    print('Hello World!')\n\nroot = tk.Tk()\nroot.title('My First App')\nbtn = tk.Button(root, text='Click Me', command=greet)\nbtn.pack()\n# root.mainloop() # يتم تفعيله لتشغيل النافذة"
    },
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "import tkinter as tk\nroot = tk.Tk()\nlabel = tk.Label(root, text='Welcome to Python GUI')\nlabel.pack()\n# root.mainloop()",
        "expected_output": "ظهور نافذة تحتوي على النص الترحيبي.",
        "explanation": "قمنا بإنشاء نافذة أساسية Tk()، أضفنا لها عنصر Label لعرض النص، واستخدمنا pack() لترتيبه داخل النافذة."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "import tkinter as tk\n\ndef my_action():\n    pass\n\nroot = tk.Tk()\nbtn = tk.Button(root, text='OK', command=my_action())\nbtn.pack()",
        "error_message": "يتم تنفيذ الدالة فورا عند إنشاء الزر، ولا تعمل عند النقر.",
        "explanation": "لا تستخدم الأقواس `()` عند تمرير الدالة لخاصية command. يجب تمرير اسم الدالة فقط لكي يتم استدعاؤها عند النقر: `command=my_action`."
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "الاعتقاد بأن الكود الرسومي يتم تنفيذه سطراً بسطر وينتهي. في الواقع، الواجهات الرسومية تعتمد على 'حلقة الأحداث' (Event Loop) عبر `mainloop()` والتي تبقي البرنامج قيد التشغيل منتظراً تفاعل المستخدم."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "بناء أدوات صغيرة للاستخدام المكتبي (Desktop Apps) مثل آلة حاسبة، برامج تحويل الصيغ، أو لوحات تحكم مبسطة للنظام."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "import tkinter as tk\nroot = tk.Tk()\nentry = tk.Entry(root)\nentry.pack()\n# نريد عرض النافذة وجعلها تعمل باستمرار",
        "expected_output": "البرنامج يظل يعمل والنافذة ظاهرة وتستقبل مدخلات.",
        "explanation": "تلميح: النافذة تظهر وتختفي فوراً، لقد نسيت استدعاء الحلقة الرئيسية التي تبقي البرنامج يعمل."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "ما الغرض من دالة ()mainloop في مكتبة tkinter؟",
          "options": ["إنهاء البرنامج", "إنشاء النافذة الأساسية", "تغيير لون النافذة", "تشغيل حلقة الأحداث لإبقاء النافذة مفتوحة"],
          "correct_answer": "تشغيل حلقة الأحداث لإبقاء النافذة مفتوحة",
          "explanation": "دالة mainloop تستمر في مراقبة تفاعلات المستخدم (مثل النقر والكتابة) وتحافظ على تشغيل التطبيق."
        }
      ]
    }
  },
  {
    "lesson_slug": "python-45",
    "content": {
      "context": "كيف نصنع تفاعلاً حياً على الشاشة كتحريك شخصية أو الاستجابة لضغطات لوحة المفاتيح؟ برمجة الألعاب هي تطبيق رائع للمنطق البرمجي.",
      "description": "استخدام مكتبات مثل `turtle` (للمبتدئين) أو `pygame` يسمح لنا برسم الكائنات على الشاشة، تحديث مواقعها باستمرار، والاستجابة للمدخلات لإنشاء ألعاب بسيطة.",
      "prototype": "import turtle\nplayer = turtle.Turtle()\nplayer.forward(100)",
      "parameters": "دوال الحركة تأخذ قيماً بالبكسل، ودوال الزوايا تأخذ الدرجات. ودوال الأحداث تأخذ أسماء المفاتيح.",
      "return_value": "تقوم الدوال بتغيير الحالة المرئية للكائنات وتحديث الإحداثيات على الشاشة.",
      "example": "import turtle\nt = turtle.Turtle()\nfor _ in range(4):\n    t.forward(100)\n    t.right(90)\nturtle.done()"
    },
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "import turtle\nwn = turtle.Screen()\nt = turtle.Turtle()\ndef move_up():\n    t.sety(t.ycor() + 10)\nwn.listen()\nwn.onkeypress(move_up, 'Up')\n# wn.mainloop()",
        "expected_output": "تتحرك السلحفاة للأعلى عند الضغط على السهم العلوي.",
        "explanation": "استخدمنا `wn.listen()` لتفعيل استقبال المدخلات، و `onkeypress` لربط زر السهم العلوي بدالة تحرك الكائن."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "import turtle\nwn = turtle.Screen()\nwn.onkeypress(print('Pressed'), 'space')\nwn.listen()",
        "error_message": "يتم الطباعة فوراً ولا تحدث عند الضغط على المسافة.",
        "explanation": "كما في `tkinter`، يجب تمرير اسم الدالة دون استدعائها بأقواس عند ربطها بالأحداث."
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "الاعتقاد بأن تحريك كائن في الألعاب يعني تغييره بسلاسة. فعلياً، الحركة هي مجرد مسح الكائن من مكانه القديم ورسمه في مكان جديد بسرعة عالية (إطارات في الثانية)."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "تصميم ألعاب 2D بسيطة مثل لعبة الثعبان (Snake)، بونج (Pong)، أو تطبيقات تعليمية تفاعلية للأطفال."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "import turtle\nt = turtle.Turtle()\n# نريد رسم دائرة بنصف قطر 50\nt.draw_circle(50)\nturtle.done()",
        "expected_output": "رسم دائرة على الشاشة.",
        "explanation": "تلميح: الدالة الصحيحة في مكتبة السلحفاة لرسم الدائرة لها اسم أبسط، وهي t.circle()."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "ما هي الخطوة الأساسية للسماح لنافذة turtle باستقبال ضغطات المفاتيح؟",
          "options": ["turtle.start()", "window.listen()", "turtle.keyboard()", "window.update()"],
          "correct_answer": "window.listen()",
          "explanation": "دالة listen() تخبر الشاشة أن تبدأ في التقاط أحداث لوحة المفاتيح."
        }
      ]
    }
  },
  {
    "lesson_slug": "python-46",
    "content": {
      "context": "بعد تعلم العديد من المفاهيم المتفرقة، كيف نجمعها معاً في برنامج واحد متكامل وقابل للصيانة؟",
      "description": "هذه المراجعة تربط الأساسيات مثل المتغيرات، الدوال، الشروط، الحلقات، ومعالجة الأخطاء (try/except) مع هياكل البيانات (قوائم وقواميس) لبناء سكريبت واقعي متماسك.",
      "prototype": "def main():\n    try:\n        # المنطق الأساسي\n    except Exception as e:\n        # معالجة الخطأ\n\nif __name__ == '__main__':\n    main()",
      "parameters": "التصميم الجيد يقسم المهام إلى دوال تأخذ مدخلات محددة وترجع مخرجات واضحة.",
      "return_value": "برنامج يعمل بكفاءة، قابل للقراءة، ولا يتوقف فجأة عند حدوث أخطاء.",
      "example": "def calculate_average(grades):\n    if not grades: return 0\n    return sum(grades) / len(grades)\n\ndef main():\n    data = {'Ali': [90, 80], 'Sara': []}\n    for student, grades in data.items():\n        avg = calculate_average(grades)\n        print(f'{student}: {avg}')\n\nif __name__ == '__main__':\n    main()"
    },
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "def process_data(items):\n    return [item.upper() for item in items if isinstance(item, str)]\n\nprint(process_data(['apple', 42, 'banana']))",
        "expected_output": "['APPLE', 'BANANA']",
        "explanation": "دمجنا دالة، شروط (للتحقق من نوع البيانات)، وقائمة مضغوطة (List Comprehension) في سطر واحد نظيف."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "data = [1, 2, 3]\nfor i in range(len(data)):\n    print(data[i])",
        "error_message": "ليس خطأً تقنياً بل خطأ في الأسلوب (Un-Pythonic).",
        "explanation": "في بايثون، لا حاجة لاستخدام range(len()) للمرور على القوائم. الطريقة الصحيحة والمراجعة هي المرور المباشر: for item in data: print(item)."
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "الاعتقاد بأن الكود الطويل أو المعقد يجعلك مبرمجاً أفضل. في بايثون، يُفضل الكود البسيط، القابل للقراءة، والمقسم لدوال صغيرة واضحة (مبدأ DRY)."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "بناء برامج سطر الأوامر (CLI Tools) المتكاملة التي تقرأ مدخلات من ملف، تعالجها باستخدام الدوال، وتعرض النتائج أو تسجلها في ملف آخر مع معالجة الأخطاء."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "def divide_numbers(a, b):\n    return a / b\n\nprint(divide_numbers(10, 0))",
        "expected_output": "يجب ألا يتوقف البرنامج بخطأ بل يطبع رسالة توضيحية.",
        "explanation": "تلميح: استخدم كتلة try و except ZeroDivisionError لالتقاط خطأ القسمة على صفر."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "ما فائدة الشرط if __name__ == '__main__': في نهاية الملفات؟",
          "options": ["تسمية الملف الرئيسي", "تسريع تنفيذ البرنامج", "منع تنفيذ الكود عند استيراد الملف كمكتبة", "تشغيل حلقة لا نهائية"],
          "correct_answer": "منع تنفيذ الكود عند استيراد الملف كمكتبة",
          "explanation": "هذا الشرط يضمن أن الدوال والبرنامج الرئيسي يُنفذ فقط إذا تم تشغيل الملف مباشرة وليس إذا تم استيراده (import) في ملف آخر."
        }
      ]
    }
  },
  {
    "lesson_slug": "python-47",
    "content": {
      "context": "كيف ترتب قائمة طويلة من الأسماء أبجدياً أو أرقام تصاعدياً لسهولة عرضها أو البحث فيها؟",
      "description": "خوارزميات الفرز هي طرق رياضية وبرمجية لإعادة ترتيب العناصر. بايثون تملك دوال فعالة مدمجة مثل `sorted()`، لكن فهم الخوارزميات (كالفرز الفقاعي) يطور التفكير المنطقي.",
      "prototype": "sorted_list = sorted(original_list)\n# أو\noriginal_list.sort()",
      "parameters": "تقبل مفاتيح ترتيب مخصصة (key) وخيار للترتيب العكسي (reverse=True).",
      "return_value": "ترجع sorted() قائمة جديدة مرتبة، بينما sort() تعدل القائمة الأصلية في مكانها (In-place).",
      "example": "words = ['banana', 'apple', 'cherry']\n# الترتيب حسب طول الكلمة\nsorted_words = sorted(words, key=len)\nprint(sorted_words)  # Output: ['apple', 'banana', 'cherry']"
    },
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "numbers = [5, 2, 9, 1]\nfor i in range(len(numbers)):\n    for j in range(len(numbers) - 1 - i):\n        if numbers[j] > numbers[j + 1]:\n            numbers[j], numbers[j + 1] = numbers[j + 1], numbers[j]\nprint(numbers)",
        "expected_output": "[1, 2, 5, 9]",
        "explanation": "هذا تطبيق لخوارزمية الفرز الفقاعي (Bubble Sort). نقوم بمقارنة كل عنصرين متتاليين ونبدلهما إذا كان الأول أكبر."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "nums = [3, 1, 4]\nresult = nums.sort()\nprint(result)",
        "error_message": "سيطبع None",
        "explanation": "دالة list.sort() لا ترجع القائمة بل ترجع None لأنها تعدل القائمة الأصلية مباشرة. الطريقة الصحيحة هي تنفيذ `nums.sort()` ثم طباعة `nums`."
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "الاعتقاد بأن عليك كتابة خوارزميات الفرز يدوياً في المشاريع الحقيقية. في الواقع، خوارزمية Timsort المستخدمة داخلياً في دالة sorted() في بايثون أسرع وأكفأ بكثير."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "ترتيب نتائج البحث في متجر إلكتروني بناءً على السعر (من الأقل للأعلى) أو حسب التقييم."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "users = [{'name': 'Ali', 'age': 25}, {'name': 'Sara', 'age': 20}]\n# نريد ترتيب القائمة بناءً على العمر\nusers.sort()",
        "expected_output": "ترتيب القائمة بحيث تظهر Sara أولاً.",
        "explanation": "تلميح: لا يمكن فرز قواميس مباشرة. استخدم المعامل `key=lambda x: x['age']`."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "الفرق بين list.sort() و دالة sorted(list) هو:",
          "options": ["لا يوجد فرق", "sort() ترجع قائمة جديدة، sorted() تعدل القائمة الأصلية", "sort() تعدل القائمة الأصلية، sorted() ترجع قائمة جديدة", "sorted() تعمل فقط مع الأرقام"],
          "correct_answer": "sort() تعدل القائمة الأصلية، sorted() ترجع قائمة جديدة",
          "explanation": "دائما نستخدم sorted() عندما نريد الاحتفاظ بالنسخة الأصلية من البيانات، ونستخدم sort() لتوفير الذاكرة وتعديل البيانات في مكانها."
        }
      ]
    }
  },
  {
    "lesson_slug": "python-48",
    "content": {
      "context": "إذا كان لديك دليل هاتف يحتوي على ملايين الأسماء، كيف تعثر على اسم محدد في أجزاء من الثانية؟",
      "description": "خوارزميات البحث تتيح لك العثور على العناصر بكفاءة. تشمل البحث الخطي (المرور على العناصر واحداً تلو الآخر) والبحث الثنائي (Binary Search) الذي يقسم البيانات المنظمة إلى النصف مراراً لتسريع البحث.",
      "prototype": "def binary_search(arr, target):\n    # كود تحديد البداية والنهاية والمنتصف",
      "parameters": "تحتاج الخوارزميات لقائمة البيانات (arr) والعنصر المراد البحث عنه (target). البحث الثنائي يتطلب أن تكون البيانات مرتبة.",
      "return_value": "ترجع موقع (Index) العنصر إذا تم العثور عليه، أو قيمة مثل -1 أو None إذا لم يكن موجوداً.",
      "example": "def linear_search(arr, target):\n    for i in range(len(arr)):\n        if arr[i] == target:\n            return i\n    return -1\n\nprint(linear_search([10, 20, 30], 20))  # Output: 1"
    },
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "def binary_search(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] == target: return mid\n        elif arr[mid] < target: low = mid + 1\n        else: high = mid - 1\n    return -1\n\nprint(binary_search([1, 3, 5, 7, 9], 7))",
        "expected_output": "3",
        "explanation": "بما أن القائمة مرتبة، فحصنا الرقم الأوسط. بما أن 7 أكبر من 5، قمنا بتقليص نطاق البحث للنصف الأيمن فقط."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "data = [9, 2, 7, 4]\nidx = binary_search(data, 7)",
        "error_message": "قد يعطي نتيجة خاطئة أو لا يجد العنصر.",
        "explanation": "البحث الثنائي يعمل **فقط** على البيانات المرتبة. يجب فرز القائمة `data.sort()` قبل تمريرها للخوارزمية."
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "الاعتقاد بأننا يجب دائماً استخدام البحث الثنائي لأنه أسرع. إذا كانت البيانات غير مرتبة وحجمها صغيراً، فالبحث الخطي أبسط وأكثر كفاءة، لأن عملية الفرز تستهلك وقتاً."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "البحث السريع في قواعد البيانات المفهرسة، أو إيجاد الكلمات في القواميس الرقمية."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "names = ['Ali', 'Omar', 'Sara']\nif names.find('Omar'):\n    print('Found')\nelse:\n    print('Not Found')",
        "expected_output": "رسالة خطأ.",
        "explanation": "تلميح: القوائم لا تمتلك دالة find() (هي مخصصة للنصوص). استخدم الكلمة المفتاحية `in` للبحث السهل: `if 'Omar' in names:`."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "كم عدد الخطوات التقريبية التي يحتاجها البحث الثنائي للعثور على عنصر في قائمة مرتبة تحتوي على 100 عنصر؟",
          "options": ["حوالي 100 خطوة", "حوالي 7 خطوات", "خطوة واحدة", "50 خطوة"],
          "correct_answer": "حوالي 7 خطوات",
          "explanation": "البحث الثنائي يقلل النطاق للنصف في كل مرة. لوغاريتم 100 للأساس 2 يقارب 7 (2^7 = 128)."
        }
      ]
    }
  },
  {
    "lesson_slug": "python-49",
    "content": {
      "context": "لماذا يعمل برنامجك بسرعة عند تجربته على 10 عناصر، ولكنه يتجمد عندما تعطيه مليون عنصر؟ الجواب في تعقيد الخوارزمية.",
      "description": "تعقيد الخوارزميات (Time Complexity) باستخدام رمز Big O، هو معيار لقياس كيف يتزايد وقت تشغيل الكود مع زيادة حجم المدخلات.",
      "prototype": "O(1): وقت ثابت\nO(n): وقت خطي\nO(n^2): وقت تربيعي",
      "parameters": "المتغير n يمثل حجم البيانات (عدد العناصر في القائمة أو السلسلة).",
      "return_value": "مقياس نظري وليس كوداً يعمل، يخبرك بمدى كفاءة البرنامج.",
      "example": "# O(n) Time Complexity\ndef print_all(arr):\n    for item in arr:  # تعتمد على حجم القائمة\n        print(item)"
    },
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "def get_first_item(arr):\n    return arr[0]  # O(1)\n\ndef contains_duplicates(arr):\n    return len(arr) != len(set(arr))  # O(n)",
        "expected_output": "شرح نظري في الكود",
        "explanation": "دالة get_first_item تستغرق نفس الوقت بغض النظر عن حجم القائمة O(1). بينما استخدام set() يمر على العناصر كلها مرة واحدة O(n)."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "def check_duplicates(arr):\n    for i in arr:\n        for j in arr:\n            if i == j: return True\n    return False",
        "error_message": "بطء شديد مع البيانات الكبيرة.",
        "explanation": "هذا الكود يحتوي على حلقتين متداخلتين (Nested Loops)، مما يجعل تعقيده O(n^2). لو كان هناك 10,000 عنصر، سيقوم بـ 100,000,000 عملية فحص!"
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "الاعتقاد بأن الكود الأقصر هو الأسرع دائماً. على سبيل المثال `if x in my_list:` قصير جداً لكنه يستغرق O(n)، بينما `if x in my_set:` يستغرق O(1) رغم أنهما نفس الطول تقريباً."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "تحسين أداء خوادم الويب والمواقع للتأكد من قدرتها على التعامل مع ملايين الطلبات دون استهلاك كامل موارد الخادم."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "# كيف تجعل البحث عن مستخدم في قائمة ضخمة أسرع؟\nusers_list = ['user1', 'user2', 'user3'] # ... ملايين المستخدمين\nprint('user9999' in users_list)",
        "expected_output": "تحويل هيكل البيانات لتحقيق سرعة O(1).",
        "explanation": "تلميح: استخدم المجموعات (Sets) لأن البحث فيها فوري O(1) بدلاً من القوائم (Lists)."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "أي من التعقيدات الزمنية التالية يُعتبر الأبطأ والأقل كفاءة عند التعامل مع بيانات ضخمة؟",
          "options": ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
          "correct_answer": "O(n^2)",
          "explanation": "الوقت التربيعي O(n^2) يتضاعف بشكل هائل، فإذا زادت البيانات 10 أضعاف، زاد الوقت 100 ضعف."
        }
      ]
    }
  },
  {
    "lesson_slug": "python-50",
    "content": {
      "context": "القوائم والقواميس رائعة، لكن ماذا لو أردت إنشاء زر 'تراجع' (Undo) في برنامجك؟ أو معالجة طلبات الطباعة بالترتيب؟ هنا نحتاج هياكل بيانات متقدمة.",
      "description": "تشمل الهياكل المتقدمة المكدسات (Stacks) التي تتبع مبدأ LIFO (الأخير دخولا يخرج أولاً)، والطوابير (Queues) التي تتبع مبدأ FIFO (الأول دخولا يخرج أولاً).",
      "prototype": "from collections import deque\nqueue = deque()\nqueue.append(1)\nqueue.popleft()",
      "parameters": "تقبل عناصر لإضافتها (append) أو إزالتها من اليمين أو اليسار (pop, popleft).",
      "return_value": "كائنات سريعة لتخزين ومعالجة البيانات من الأطراف بكفاءة O(1).",
      "example": "stack = []\nstack.append('page1')\nstack.append('page2')\nlast_visited = stack.pop()  # يعيد 'page2'\nprint('Back to:', stack[-1])  # Output: Back to: page1"
    },
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "from collections import deque\nprint_queue = deque(['Document1.pdf'])\nprint_queue.append('Document2.pdf')\nwhile print_queue:\n    current_doc = print_queue.popleft()\n    print('Printing:', current_doc)",
        "expected_output": "Printing: Document1.pdf\nPrinting: Document2.pdf",
        "explanation": "استخدمنا الطابور (Queue) لمعالجة المهام بالترتيب الذي وصلت به باستخدام `popleft()` من مكتبة deque المدمجة."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "my_queue = [1, 2, 3]\nmy_queue.insert(0, 4) # محاولة إضافة للطابور",
        "error_message": "بطء شديد",
        "explanation": "إضافة أو حذف عنصر من بداية القائمة العادية (List) في بايثون بطيء جداً O(n). الطريقة الصحيحة لعمل طابور هي استخدام `collections.deque`."
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "الاعتقاد بأن القواميس (Dictionaries) عشوائية الترتيب. في إصدارات بايثون 3.7 وما فوق، القواميس أصبحت تحتفظ بترتيب إضافة العناصر إليها بشكل دائم."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "استخدام المكدسات (Stacks) لتتبع سجل المتصفح (زر الخلف والأمام)، والطوابير لمعالجة طلبات العملاء في خوادم التطبيقات."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "stack = []\nstack.pop()",
        "expected_output": "تفادي توقف البرنامج بخطأ IndexError",
        "explanation": "تلميح: لا يمكنك حذف عنصر من مكدس فارغ. استخدم شرطاً للتحقق أولاً `if stack:` قبل تنفيذ عملية pop()."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "أي هيكل بيانات مناسب أكثر لبرمجة خاصية 'التراجع' (Undo) في برامج تحرير النصوص؟",
          "options": ["الطابور Queue", "المكدس Stack", "المجموعة Set", "القاموس Dictionary"],
          "correct_answer": "المكدس Stack",
          "explanation": "التراجع يعتمد على التراجع عن أحدث إجراء تم تنفيذه أولاً، وهذا يطابق مبدأ الأخير دخولاً يخرج أولاً (LIFO) في المكدسات."
        }
      ]
    }
  }
]

with open('C:\\Users\\khaled scorbion\\.gemini\\antigravity\\scratch\\svk-academy-nextjs\\batch3.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print("done")
