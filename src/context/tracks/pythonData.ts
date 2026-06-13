export const pythonTrackData = [
  {
    "lesson_slug": "python-1",
    "syntax_dictionary": [
      {
        "name": "print()",
        "description": "دالة تُستخدم لعرض النصوص أو القيم على الشاشة لكي يراها المستخدم بسهولة.",
        "syntax": "print('Hello')",
        "example": "apples = 10\nprint(apples)"
      },
      {
        "name": "int()",
        "description": "تقوم بتحويل النصوص التي تحتوي على أرقام إلى أعداد صحيحة يمكن إجراء العمليات الحسابية عليها.",
        "syntax": "int('5')",
        "example": "age = int('20')\nprint(age + 5)"
      }
    ],
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تعريف وطباعة عدد صحيح",
        "code": "apples = 10\nprint(apples)",
        "explanation": "قمنا بتعريف متغير `apples` وأسندنا له القيمة 10، ثم قمنا بطباعته."
      },
      {
        "type": "wrong",
        "title": "خطأ في التسمية",
        "code": "1st_number = 5",
        "error_message": "SyntaxError: invalid decimal literal",
        "explanation": "لا يمكن أن يبدأ اسم المتغير برقم في بايثون."
      },
      {
        "type": "mistake",
        "title": "خلط النصوص بالأرقام",
        "code": "age = '20'\nprint(age + 5)",
        "explanation": "وضع الرقم داخل علامات تنصيص يحوله إلى نص (String)، مما يؤدي لخطأ عند محاولة جمعه مع رقم حقيقي."
      }
    ],
    "title": "الدرس 1: الأعداد الصحيحة (int) - بداية الرحلة",
    "category": "أساسيات بايثون وبناء المنطق",
    "order_index": 1,
    "is_free": true,
    "content_type": "theory",
    "duration_minutes": 8,
    "content": {
      "context": "الأعداد الصحيحة (Integers) في بايثون هي الأرقام التي لا تحتوي على كسور عشرية، سواء كانت موجبة أو سالبة أو صفراً. تعتبر أساس العمليات الحسابية والعد في البرمجة.",
      "description": "تُستخدم الأعداد الصحيحة لتمثيل الأشياء القابلة للعد، مثل عدد المستخدمين، أو العمر، أو عدد المحاولات في لعبة. بايثون تتعامل مع الأرقام بذكاء ويمكنها استيعاب أرقام ضخمة جداً تلقائياً.",
      "prototype": "age = 25\nscore = -10",
      "parameters": "أرقام صحيحة موجبة أو سالبة",
      "return_value": "كائن من نوع int",
      "example": "user_age = 20\nprint(user_age + 5)  # Output: 25"
    },
    "exercise_instructions": "قم بإنشاء متغيرين يمثلان عدد التفاح وعدد البرتقال، ثم اجمعهما واطبع الناتج.",
    "expected_output": "15",
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار الأعداد الصحيحة",
      "questions": [
        {
          "question": "أي من القيم التالية يمثل عدداً صحيحاً (int) في بايثون؟",
          "options": [
            "'10'",
            "10.5",
            "10",
            "True"
          ],
          "correct_answer": "10",
          "explanation": "العدد الصحيح يكتب بدون فواصل عشرية أو علامات تنصيص."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 1: الأعداد الصحيحة (int) - بداية الرحلة",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 1: الأعداد الصحيحة (int) - بداية الرحلة",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
  },
  {
    "lesson_slug": "python-2",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "استخدام الأعداد العشرية في القسمة",
        "code": "result = 10 / 3\nprint(result)",
        "explanation": "القسمة العادية في بايثون باستخدام (/) تُرجع دائماً عدداً عشرياً (float)."
      },
      {
        "type": "wrong",
        "title": "استخدام الفاصلة العربية",
        "code": "price = 10,50",
        "error_message": "SyntaxError",
        "explanation": "في بايثون يجب استخدام النقطة . للفصل العشري، أما الفاصلة , فتُستخدم لإنشاء قوائم (Tuples)."
      },
      {
        "type": "mistake",
        "title": "الدقة العشرية غير المتوقعة",
        "code": "print(0.1 + 0.2)",
        "explanation": "الناتج سيكون 0.30000000000000004 بسبب طريقة تخزين الحواسيب للأعداد العشرية بنظام الثنائي، ولتفادي ذلك نستخدم دالة round()."
      }
    ],
    "title": "الدرس 2: الأعداد العشرية (float) - الدقة في الحسابات",
    "category": "أساسيات بايثون وبناء المنطق",
    "order_index": 2,
    "is_free": true,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "context": "الأعداد العشرية (Floats) تستخدم لتمثيل الأرقام التي تحتوي على كسور أو فواصل عشرية. تستخدم عادة في الحسابات المالية، القياسات، والنسب المئوية.",
      "description": "في بايثون، يُكتب العدد العشري باستخدام النقطة (.) وليس الفاصلة (,).",
      "prototype": "price = 19.99\nweight = 2.5",
      "parameters": "أرقام مع نقطة عشرية",
      "return_value": "كائن من نوع float",
      "example": "pi = 3.14159\nradius = 5\narea = pi * (radius ** 2)\nprint(area)"
    },
    "exercise_instructions": "اكتب برنامجاً يحسب ضريبة مبيعات بنسبة 15% على منتج سعره 200، واطبع الضريبة (الناتج كعدد عشري).",
    "expected_output": "30.0",
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار الأعداد العشرية",
      "questions": [
        {
          "question": "ما هو ناتج تنفيذ 5 / 2 في بايثون 3؟",
          "options": [
            "2",
            "2.5",
            "2.0",
            "Error"
          ],
          "correct_answer": "2.5",
          "explanation": "علامة القسمة المفرده ترجع دائما float."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 2: الأعداد العشرية (float) - الدقة في الحسابات",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 2: الأعداد العشرية (float) - الدقة في الحسابات",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
  },
  {
    "lesson_slug": "python-3",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "دمج النصوص (Concatenation)",
        "code": "first = 'Python'\nsecond = 'Developer'\nprint(first + ' ' + second)",
        "explanation": "استخدمنا علامة الزائد (+) لدمج نصين مع إضافة مسافة بينهما."
      },
      {
        "type": "wrong",
        "title": "نسيان علامة التنصيص النهائية",
        "code": "greeting = 'Hello",
        "error_message": "SyntaxError: unterminated string literal",
        "explanation": "يجب إغلاق النص بنفس نوع علامة التنصيص التي بدأ بها."
      },
      {
        "type": "mistake",
        "title": "دمج نص مع رقم مباشر",
        "code": "age = 20\nprint('My age is ' + age)",
        "explanation": "لا يمكنك دمج نص مع عدد صحيح مباشرة باستخدام +، يجب تحويل الرقم إلى نص أولاً باستخدام str(age)."
      }
    ],
    "title": "الدرس 3: النصوص (str) - لغة التخاطب",
    "category": "أساسيات بايثون وبناء المنطق",
    "order_index": 3,
    "is_free": true,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "context": "النصوص (Strings) هي تسلسل من الرموز والحروف. تُستخدم لتمثيل الكلمات، الجمل، أو أي بيانات نصية في برامجك.",
      "description": "يمكن وضع النصوص داخل علامات تنصيص مفردة ' ' أو مزدوجة \" \". بايثون توفر دوال كثيرة لتعديل النصوص وتشكيلها.",
      "prototype": "name = 'Ahmad'\nmessage = \"Hello World\"",
      "parameters": "تسلسل حروف بين علامات تنصيص",
      "return_value": "كائن من نوع str",
      "example": "name = 'سارة'\nprint('مرحباً ' + name)"
    },
    "exercise_instructions": "قم بتعريف متغير يحتوي على اسمك الأول، ومتغير آخر لاسم العائلة، واطبعهما معاً بينهما مسافة.",
    "expected_output": "Ali Khaled",
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار النصوص",
      "questions": [
        {
          "question": "كيف تقوم بدمج المتغيرين a و b وطباعتهما؟ (a = 'Hi', b = 'Ali')",
          "options": [
            "print(a b)",
            "print(a + b)",
            "print(a . b)",
            "print(a & b)"
          ],
          "correct_answer": "print(a + b)",
          "explanation": "عملية الدمج في بايثون تتم بواسطة المعامل +."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 3: النصوص (str) - لغة التخاطب",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 3: النصوص (str) - لغة التخاطب",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
  },
  {
    "lesson_slug": "python-4",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "استخدام المقارنة لإنتاج قيمة بوليانية",
        "code": "password_length = 8\nis_valid = password_length >= 8\nprint(is_valid)",
        "explanation": "المقارنة أنتجت قيمة True لأن 8 تساوي أو أكبر من 8."
      },
      {
        "type": "wrong",
        "title": "خطأ في حالة الأحرف",
        "code": "is_ready = true",
        "error_message": "NameError: name 'true' is not defined",
        "explanation": "يجب أن تُكتب True و False بحرف كبير في بدايتها في بايثون، وإلا اعتبرها المتصفح متغيراً غير معرف."
      },
      {
        "type": "mistake",
        "title": "استخدام النص بدلاً من البوليان",
        "code": "is_active = 'False'\nif is_active:\n    print('Active!')",
        "explanation": "هنا المتغير يحمل نصاً 'False' وليس قيمة بوليانية. وأي نص غير فارغ يُعتبر True في بايثون، مما يؤدي لسلوك برمجي غير متوقع."
      }
    ],
    "title": "الدرس 4: المنطق البولياني (bool) - الصح والخطأ",
    "category": "أساسيات بايثون وبناء المنطق",
    "order_index": 4,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 8,
    "content": {
      "context": "القيم البوليانية (Booleans) تمثل حالتين فقط: True (صح) أو False (خطأ). هي حجر الأساس في اتخاذ القرارات برمجياً (الشروط).",
      "description": "تنتج القيم البوليانية عادة من عمليات المقارنة، مثل هل س أكبر من ص؟ وتُكتب في بايثون بأحرف استهلالية كبيرة (Capital).",
      "prototype": "is_active = True\nhas_errors = False",
      "parameters": "True أو False فقط",
      "return_value": "كائن من نوع bool",
      "example": "age = 18\nis_adult = age >= 18\nprint(is_adult) # Output: True"
    },
    "exercise_instructions": "قم بإنشاء متغير `score = 85`، ثم اطبع نتيجة شرط ما إذا كان `score` أكبر من 50.",
    "expected_output": "True",
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار البوليان",
      "questions": [
        {
          "question": "ما هي القيمة الصحيحة للبوليان في بايثون؟",
          "options": [
            "true",
            "TRUE",
            "True",
            "1"
          ],
          "correct_answer": "True",
          "explanation": "في بايثون، يجب كتابة True بحيث يكون الحرف الأول Capital."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 4: المنطق البولياني (bool) - الصح والخطأ",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 4: المنطق البولياني (bool) - الصح والخطأ",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
  },
  {
    "lesson_slug": "python-5",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تحديد الزوجي والفردي",
        "code": "number = 7\nprint(number % 2 == 0) # False",
        "explanation": "إذا كان باقي قسمة العدد على 2 هو صفر، فهو زوجي. وإلا فهو فردي."
      },
      {
        "type": "wrong",
        "title": "القسمة على صفر",
        "code": "result = 10 / 0",
        "error_message": "ZeroDivisionError: division by zero",
        "explanation": "لا يمكن قسمة أي رقم على صفر في الرياضيات أو في البرمجة."
      },
      {
        "type": "mistake",
        "title": "عدم الانتباه لأولويات العمليات الحسابية",
        "code": "print(10 + 5 * 2)",
        "explanation": "الناتج 20 وليس 30. عملية الضرب تُنفذ قبل الجمع. استخدم الأقواس لتغيير الأولوية."
      }
    ],
    "title": "الدرس 5: العمليات الحسابية - الكمبيوتر كآلة حاسبة",
    "category": "أساسيات بايثون وبناء المنطق",
    "order_index": 5,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 10,
    "content": {
      "context": "بايثون تدعم جميع العمليات الحسابية الأساسية والمتقدمة. وتتبع ترتيب العمليات الحسابية الرياضي المتعارف عليه.",
      "description": "الجمع (+)، الطرح (-)، الضرب (*)، القسمة (/)، قسمة صحيحة (//)، الباقي (%)، والأُس (**).",
      "prototype": "result = (10 + 5) * 2\nremainder = 10 % 3",
      "parameters": "أرقام (int أو float)",
      "return_value": "ناتج العملية (رقم)",
      "example": "base = 2\npower = 3\nprint(base ** power) # Output: 8"
    },
    "exercise_instructions": "استخدم عملية الباقي (Modulo) لطباعة باقي قسمة 10 على 3.",
    "expected_output": "1",
    "lesson_type": "project",
    "exam_data": {
      "title": "اختبار الحسابيات",
      "questions": [
        {
          "question": "ما هو ناتج العملية التالية: 15 % 4",
          "options": [
            "3",
            "4",
            "3.75",
            "1"
          ],
          "correct_answer": "3",
          "explanation": "15 قسمة 4 يساوي 3 والباقي 3."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 5: العمليات الحسابية - الكمبيوتر كآلة حاسبة",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 5: العمليات الحسابية - الكمبيوتر كآلة حاسبة",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
    "lesson_type": "concept",
    "concept_context": "??? ????? ???? ??????: الدرس 6: دمج النصوص - بناء الجمل المترابطة",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 6: دمج النصوص - بناء الجمل المترابطة",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
    "lesson_type": "scenario",
    "concept_context": "??? ????? ???? ??????: الدرس 7: أخذ مدخلات المستخدم (input) - التفاعل الأول",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 7: أخذ مدخلات المستخدم (input) - التفاعل الأول",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
    "lesson_type": "concept",
    "concept_context": "??? ????? ???? ??????: الدرس 8: الشروط (if) - جعل الكمبيوتر يتخذ قرارات",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 8: الشروط (if) - جعل الكمبيوتر يتخذ قرارات",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
    "lesson_type": "concept",
    "concept_context": "??? ????? ???? ??????: الدرس 9: الشروط المعاكسة (else) - ماذا لو لم يتحقق الشرط؟",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 9: الشروط المعاكسة (else) - ماذا لو لم يتحقق الشرط؟",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
    "lesson_type": "milestone",
    "concept_context": "??? ????? ???? ??????: الدرس 10: الشروط المتعددة (elif) - خيارات لا نهائية",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 10: الشروط المتعددة (elif) - خيارات لا نهائية",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
    "lesson_type": "concept",
    "concept_context": "??? ????? ???? ??????: الدرس 11: المعاملات المنطقية (and / or) - شروط معقدة",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 11: المعاملات المنطقية (and / or) - شروط معقدة",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
    "lesson_type": "debugging",
    "concept_context": "??? ????? ???? ??????: الدرس 12: القوائم (list) - صناديق التخزين العملاقة",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 12: القوائم (list) - صناديق التخزين العملاقة",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
    "lesson_type": "ai_challenge",
    "concept_context": "??? ????? ???? ??????: الدرس 13: الوصول لعناصر القائمة (Indexing)",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 13: الوصول لعناصر القائمة (Indexing)",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
    "lesson_type": "mini_mission",
    "concept_context": "??? ????? ???? ??????: الدرس 14: تكرار الأوامر بحلقة (for) - المحرك التلقائي",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 14: تكرار الأوامر بحلقة (for) - المحرك التلقائي",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
    "lesson_type": "sandbox",
    "concept_context": "??? ????? ???? ??????: الدرس 15: دالة المدى (range) - توليد الأرقام",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 15: دالة المدى (range) - توليد الأرقام",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
    "lesson_type": "concept",
    "concept_context": "??? ????? ???? ??????: الدرس 16: الحلقات المشروطة (while) - الاستمرار طالما..",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 16: الحلقات المشروطة (while) - الاستمرار طالما..",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
    "lesson_type": "code_reading",
    "concept_context": "??? ????? ???? ??????: الدرس 17: القواميس (dict) - بيانات كالمحترفين",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 17: القواميس (dict) - بيانات كالمحترفين",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
    "lesson_type": "concept",
    "concept_context": "??? ????? ???? ??????: الدرس 18: الدوال (functions) - مصانعك البرمجية الخاصة",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 18: الدوال (functions) - مصانعك البرمجية الخاصة",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
    "lesson_type": "concept",
    "concept_context": "??? ????? ???? ??????: الدرس 19: مدخلات ومخرجات الدوال (Parameters & Return)",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 19: مدخلات ومخرجات الدوال (Parameters & Return)",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
    "lesson_type": "milestone",
    "concept_context": "??? ????? ???? ??????: الدرس 20: مشروع التخرج (الفصل الأول) - حاسبة العمر الذكية",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 20: مشروع التخرج (الفصل الأول) - حاسبة العمر الذكية",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا نحتاج لمراجعة الأساسيات؟ البرمجة تعتمد بشكل كبير على بناء مفاهيم صلبة. قبل الخوض في مواضيع متقدمة، يجب التأكد من فهمنا للمتغيرات، وأنواع البيانات الأساسية، والشروط، والحلقات (Loops). هذه المراجعة تضمن استعدادك للمفاهيم القادمة.",
      "description": "في هذا الدرس، سنقوم بمراجعة سريعة لأهم المفاهيم في بايثون: تعريف المتغيرات، استخدام أنواع البيانات مثل النصوص والأرقام، كيفية اتخاذ القرارات باستخدام if/else، وكيفية تكرار الأوامر باستخدام حلقات for و while.",
      "prototype": "x = 10\nif x > 5:\n    print('كبير')\nfor i in range(3):\n    print(i)",
      "parameters": "لا توجد معاملات محددة هنا، بل مراجعة عامة لبنية اللغة الكلاسيكية.",
      "return_value": "تعتمد النتيجة على الأوامر المنفذة، مثل طباعة نصوص أو إرجاع قيم رياضية.",
      "example": "user_age = 20\nif user_age >= 18:\n    print('مسموح بالدخول')\nelse:\n    print('غير مسموح')"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس مراجعة أساسيات بايثون لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "حلقة التكرار مع شرط",
        "code": "for n in range(1, 6):\n    if n % 2 == 0:\n        print(f'{n} زوجي')",
        "expected_output": "2 زوجي\n4 زوجي",
        "explanation": "استخدمنا حلقة for للمرور على الأرقام من 1 إلى 5، وداخلها شرط if للتحقق مما إذا كان الرقم زوجياً."
      },
      {
        "type": "wrong",
        "title": "نسيان المسافات البادئة (Indentation)",
        "code": "age = 15\nif age < 18:\nprint('قاصر')",
        "error_message": "IndentationError: expected an indented block",
        "explanation": "في بايثون، يجب ترك مسافة بادئة (4 مسافات غالباً) قبل الكود الذي يكون داخل جملة شرطية أو حلقة."
      },
      {
        "type": "mistake",
        "title": "استخدام علامة يساوي واحدة في الشروط",
        "explanation": "يعتقد البعض أن `if x = 5` صحيحة للتحقق من القيمة. هذا خاطئ. يجب استخدام علامة يساوي مزدوجة `==` للمقارنة، بينما `=` تستخدم لإسناد القيم."
      },
      {
        "type": "use_case",
        "title": "التحقق من صحة مدخلات المستخدم",
        "explanation": "تستخدم هذه الأساسيات في كل البرامج تقريباً؛ فمثلاً عند كتابة سكريبت بسيط يطلب من المستخدم إدخال كلمة مرور، تستخدم الحلقات لإعادة الطلب والشروط للتحقق من صحتها."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "count = 0\nwhile count < 3\n    print('مرحبا')\n    count += 1",
        "expected_output": "مرحبا\nمرحبا\nمرحبا",
        "explanation": "لقد نسينا النقطتين الرأسيتين `:` بعد شرط حلقة while. أضفهما لتصحيح الكود."
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار المراجعة",
      "questions": [
        {
          "question": "أي من الأكواد التالية تستخدم للتحقق من أن المتغير `x` لا يساوي المتغير `y`؟",
          "options": [
            "if x not y:",
            "if x <> y:",
            "if x != y:",
            "if x ==! y:"
          ],
          "correct_answer": "if x != y:",
          "explanation": "في بايثون، نستخدم العامل `!=` للدلالة على 'لا يساوي' عند مقارنة القيم."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 21: مراجعة أساسيات بايثون",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 21: مراجعة أساسيات بايثون",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا القوائم المتقدمة؟ بمجرد إتقانك للقوائم الأساسية، ستجد أنك تحتاج لطرق أسرع وأكثر كفاءة لتوليد وتعديل القوائم دون الحاجة لكتابة حلقات تكرار طويلة (Loops). مفهوم List Comprehension وتقطيع القوائم (Slicing) يوفر لك ذلك.",
      "description": "نتعلم في هذا الدرس كيف نستخدم تقنيات متقدمة في القوائم مثل 'List Comprehensions' لإنشاء قوائم بسطر واحد، وتقنية الـ Slicing لجلب أجزاء محددة من القائمة، بالإضافة إلى دوال مثل sort و reverse وتأثيرها.",
      "prototype": "new_list = [expression for item in iterable if condition]\nsub_list = my_list[start:stop:step]",
      "parameters": "expression: القيمة الناتجة. iterable: المجموعة التي نمر عليها. start, stop, step: تحدد بداية ونهاية وخطوات التقطيع.",
      "return_value": "ترجع List Comprehension و Slicing قائمة جديدة تماماً (New List) بناءً على الشروط الموضوعة.",
      "example": "nums = [1, 2, 3, 4, 5]\nsquares = [x**2 for x in nums if x % 2 != 0]\nprint(squares)"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس القوائم (Lists) المتقدمة لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تقطيع القوائم وعكسها",
        "code": "letters = ['A', 'B', 'C', 'D', 'E']\nreversed_sub = letters[3:0:-1]\nprint(reversed_sub)",
        "expected_output": "['D', 'C', 'B']",
        "explanation": "استخدمنا الـ Slicing للبدء من الفهرس 3 (D) والرجوع للخلف حتى ما قبل الفهرس 0، وبخطوة -1 أي بالعكس."
      },
      {
        "type": "wrong",
        "title": "تعديل قائمة أثناء التكرار عليها",
        "code": "nums = [1, 2, 3, 4]\nfor n in nums:\n    if n % 2 == 0:\n        nums.remove(n)",
        "error_message": "سلوك غير متوقع (قد لا يعطي خطأ صريح ولكنه يتخطى عناصر)",
        "explanation": "تعديل القائمة باستخدام `remove` أو `pop` أثناء التكرار عليها باستخدام `for` يؤدي إلى تغيير الفهارس وتخطي بعض العناصر. الحل هو التكرار على نسخة من القائمة أو استخدام List Comprehension."
      },
      {
        "type": "mistake",
        "title": "استخدام sort مقابل sorted",
        "explanation": "يظن المبتدئون أن `my_list.sort()` ترجع القائمة مرتبة، بينما هي تقوم بترتيب القائمة في مكانها وترجع `None`. إذا أردت قائمة جديدة مرتبة، استخدم الدالة `sorted(my_list)`."
      },
      {
        "type": "use_case",
        "title": "تنظيف البيانات",
        "explanation": "في علوم البيانات وتطوير الويب، تُستخدم List Comprehensions بكثرة لتنظيف نصوص قادمة من المستخدم؛ كإزالة المسافات الزائدة من قائمة أسماء بأسطر برمجية أقل بكثير وأسرع من الحلقات العادية."
      },
      {
        "type": "challenge",
        "title": "تحدي: توليد أرقام متتالية",
        "code": "numbers = [x * 2 for x in range(__)]\n# نريد قائمة بالأرقام الزوجية من 0 إلى 8",
        "expected_output": "[0, 2, 4, 6, 8]",
        "explanation": "تحتاج إلى استخدام الدالة `range(5)` لكي تعطي الأرقام من 0 إلى 4، والتي سيتم ضربها في 2 للحصول على النتيجة."
      }
    ],
    "lesson_type": "scenario",
    "exam_data": {
      "title": "اختبار القوائم المتقدمة",
      "questions": [
        {
          "question": "ما هي نتيجة تنفيذ الكود التالي: `[x for x in [1, 2, 3] if x > 1]` ؟",
          "options": [
            "[1, 2, 3]",
            "[2, 3]",
            "[1]",
            "TypeError"
          ],
          "correct_answer": "[2, 3]",
          "explanation": "هذا الكود هو List Comprehension يمر على القائمة ويأخذ فقط العناصر التي قيمتها أكبر من 1، وهما 2 و 3."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 22: القوائم (Lists) المتقدمة",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 22: القوائم (Lists) المتقدمة",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "كيف تبحث عن بيانات داخل ملايين السجلات؟ القوائم تعتبر حاويات قوية، ولكن لكي تكون فعالة يجب أن نعرف كيف نستخرج منها المعلومات أو نتحقق من وجود عنصر معين بسرعة وكفاءة دون الحاجة لكتابة كود معقد.",
      "description": "يغطي هذا الدرس العمليات المتعلقة بالبحث داخل القوائم في بايثون. سنتعلم استخدام الكلمة المفتاحية 'in' للتحقق من الوجود، والدالة 'index()' لمعرفة مكان العنصر، والدالة 'count()' لمعرفة عدد مرات التكرار، وكيفية التعامل مع الأخطاء الناتجة عن عدم العثور على العنصر.",
      "prototype": "item in my_list\nmy_list.index(item)\nmy_list.count(item)",
      "parameters": "item: العنصر المراد البحث عنه. الدالة index تأخذ أيضاً (start, end) اختيارياً لتحديد نطاق البحث.",
      "return_value": "الكلمة in ترجع True/False. الدالة index ترجع رقم الفهرس (Integer). الدالة count ترجع عدد مرات الظهور (Integer).",
      "example": "fruits = ['تفاح', 'موز', 'برتقال', 'موز']\nprint('موز' in fruits)\nprint(fruits.index('برتقال'))\nprint(fruits.count('موز'))"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس عمليات البحث في القوائم لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "البحث الآمن في القائمة",
        "code": "names = ['أحمد', 'سارة', 'علي']\nsearch_for = 'سارة'\nif search_for in names:\n    idx = names.index(search_for)\n    print(f'موجود في الموقع {idx}')",
        "expected_output": "موجود في الموقع 1",
        "explanation": "لكي نتجنب توقف البرنامج بسبب خطأ (Error) إذا لم يكن العنصر موجوداً، استخدمنا `in` للتحقق أولاً قبل استخدام `index`."
      },
      {
        "type": "wrong",
        "title": "استخدام index دون التحقق",
        "code": "colors = ['أحمر', 'أخضر']\npos = colors.index('أزرق')",
        "error_message": "ValueError: 'أزرق' is not in list",
        "explanation": "استخدام `index` للبحث عن عنصر غير موجود يسبب خطأ من نوع `ValueError`. يجب دائماً التحقق باستخدام `in` أو استخدام `try...except`."
      },
      {
        "type": "mistake",
        "title": "حلقة التكرار للبحث البسيط",
        "explanation": "كثيراً ما يقوم المبتدئون بعمل حلقة for للتحقق من وجود عنصر في قائمة، بينما استخدام `if item in my_list` أسرع وأنظف بكثير وأكثر توافقاً مع أسلوب بايثون (Pythonic)."
      },
      {
        "type": "use_case",
        "title": "نظام تسجيل الدخول",
        "explanation": "عند تسجيل الدخول، يمكن استخدام القوائم للتحقق مما إذا كان اسم المستخدم الذي تم إدخاله موجوداً في قائمة المستخدمين المحظورين (Blacklist) باستخدام الكلمة `in`."
      },
      {
        "type": "challenge",
        "title": "تحدي: عد العناصر وحذفها",
        "code": "data = [5, 2, 5, 3, 5]\n# نريد حذف جميع الرقم 5 من القائمة\nwhile 5 __ data:\n    data.remove(5)\nprint(data)",
        "expected_output": "[2, 3]",
        "explanation": "استخدم الكلمة المفتاحية `in` داخل شرط الـ while، بحيث تستمر الحلقة في حذف الرقم 5 طالما أنه 'في' القائمة."
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار عمليات البحث",
      "questions": [
        {
          "question": "إذا كان لدينا القائمة `lst = [10, 20, 30, 20]`، ماذا سترجع الدالة `lst.count(20)`؟",
          "options": [
            "1",
            "2",
            "True",
            "الفهرس 1"
          ],
          "correct_answer": "2",
          "explanation": "الدالة `count` تحسب عدد مرات تكرار العنصر في القائمة. الرقم 20 موجود مرتين، لذا سترجع 2."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 23: عمليات البحث في القوائم",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 23: عمليات البحث في القوائم",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "في الحياة الواقعية، لكل شخص رقم هوية، ولكل كلمة في القاموس معنى. في البرمجة، نحتاج غالباً لربط معلومات ببعضها البعض (مفتاح وقيمة). القواميس (Dictionaries) هي الحل الأمثل والسريع جداً لهذه المشكلة بدلاً من استخدام قائمتين منفصلتين.",
      "description": "نتعلم هنا بنية البيانات 'القاموس' (Dictionary). القواميس تخزن البيانات على شكل أزواج من 'مفتاح: قيمة' (Key-Value pairs). سنتعرف على كيفية إنشائها، جلب البيانات باستخدام المفاتيح، إضافة عناصر جديدة، واستخدام دوال مفيدة مثل keys() و values() و items().",
      "prototype": "my_dict = {'key1': 'value1', 'key2': 100}\nval = my_dict['key1']\nsafe_val = my_dict.get('key3', 'Default')",
      "parameters": "key: يجب أن يكون من نوع غير قابل للتغيير (Immutable) مثل النصوص والأرقام. value: يمكن أن تكون أي نوع بيانات.",
      "return_value": "جلب قيمة عبر مفتاح يرجع تلك القيمة. الدالة items() ترجع الأزواج كمجموعات (Tuples) يمكن التكرار عليها.",
      "example": "student = {'name': 'عمر', 'age': 25}\nstudent['grade'] = 'A'\nfor key, value in student.items():\n    print(f'{key} -> {value}')"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس القواميس (Dictionaries) لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "استخدام get لتجنب الأخطاء",
        "code": "settings = {'theme': 'dark'}\nbg_color = settings.get('color', 'black')\nprint(bg_color)",
        "expected_output": "black",
        "explanation": "استخدمنا الدالة `get()` للبحث عن المفتاح 'color'. وبما أنه غير موجود، أرجعت الدالة القيمة الافتراضية 'black' بدلاً من إيقاف البرنامج بخطأ."
      },
      {
        "type": "wrong",
        "title": "استخدام قائمة كمفتاح",
        "code": "my_dict = {[1, 2]: 'أرقام'}",
        "error_message": "TypeError: unhashable type: 'list'",
        "explanation": "مفاتيح القواميس يجب أن تكون ثابتة لا يمكن تغييرها (مثل النصوص، الأرقام، المجموعات الثابتة Tuples). القوائم قابلة للتعديل لذا لا يمكن استخدامها كمفاتيح."
      },
      {
        "type": "mistake",
        "title": "توقع ترتيب معين (في النسخ القديمة)",
        "explanation": "في الإصدارات القديمة من بايثون، لم تكن القواميس تحفظ ترتيب العناصر عند إضافتها. على الرغم من أن بايثون 3.7+ أصبح يحفظ الترتيب، يُنصح دائماً بعدم الاعتماد بشكل أعمى على الترتيب في القواميس، بل الاعتماد على المفاتيح."
      },
      {
        "type": "use_case",
        "title": "تمثيل بيانات واجهة برمجية (JSON API)",
        "explanation": "القواميس هي التركيبة الأساسية للتعامل مع الـ JSON المستقبَل من الإنترنت في تطبيقات الويب. مثلاً، بيانات الطقس تأتي كقاموس يحتوي مفاتيح مثل 'درجة_الحرارة' و 'الرطوبة'."
      },
      {
        "type": "challenge",
        "title": "تحدي: تحديث القاموس",
        "code": "car = {'brand': 'Ford', 'model': 'Mustang', 'year': 1964}\n# قم بتغيير السنة إلى 2020\ncar[____] = ____\nprint(car['year'])",
        "expected_output": "2020",
        "explanation": "الوصول لقيمة معينة في القاموس وتغييرها يتم عن طريق كتابة اسم القاموس، ثم بين قوسين مربعين اسم المفتاح (وهو 'year')، ثم نساويه بالقيمة الجديدة."
      }
    ],
    "lesson_type": "debugging",
    "exam_data": {
      "title": "اختبار القواميس",
      "questions": [
        {
          "question": "ما هي الطريقة الصحيحة للتحقق مما إذا كان المفتاح 'age' موجوداً في القاموس `user`؟",
          "options": [
            "if 'age' in user:",
            "if user.has_key('age'):",
            "if 'age' in user.values():",
            "if 'age' == user:"
          ],
          "correct_answer": "if 'age' in user:",
          "explanation": "الكلمة `in` مع القواميس تبحث تلقائياً في المفاتيح (Keys)، وهي الطريقة الأفضل والأسرع."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 24: القواميس (Dictionaries)",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 24: القواميس (Dictionaries)",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "كيف تتأكد من أنك لا تملك بيانات مكررة؟ أو كيف تجد الأصدقاء المشتركين بينك وبين شخص آخر؟ للتعامل مع التكرارات والعلاقات (التقاطع والاتحاد)، نستخدم نوع بيانات مخصص يسمى المجموعات (Sets) والذي يستند إلى نظرية المجموعات في الرياضيات.",
      "description": "تُستخدم المجموعات (Sets) في بايثون لتخزين عناصر فريدة وغير مرتبة. لا يمكن إضافة عنصر موجود مسبقاً في المجموعة. نتعلم في هذا الدرس كيفية إنشاء مجموعة، وإجراء العمليات الرياضية عليها مثل الاتحاد (Union)، التقاطع (Intersection)، والفروق (Difference).",
      "prototype": "my_set = {1, 2, 3}\nunion_set = set1 | set2\nintersect_set = set1 & set2",
      "parameters": "عناصر المجموعات يجب أن تكون غير قابلة للتغيير (Immutable). يمكن استخدام الدوال ()union و ()intersection أو الرموز | و &.",
      "return_value": "عمليات المجموعات تُرجع مجموعة جديدة (Set) تحتوي على النتيجة المطلوبة دون تكرار.",
      "example": "a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint('التقاطع:', a & b)\nprint('الاتحاد:', a | b)"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس المجموعات (Sets) لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "إزالة التكرار من قائمة",
        "code": "names_list = ['علي', 'منى', 'علي', 'خالد']\nunique_names = list(set(names_list))\nprint(unique_names)",
        "expected_output": "['خالد', 'منى', 'علي'] (الترتيب قد يختلف)",
        "explanation": "قمنا بتحويل القائمة إلى مجموعة `set` لكي نحذف جميع الأسماء المكررة تلقائياً، ثم أعدناها إلى قائمة `list`."
      },
      {
        "type": "wrong",
        "title": "محاولة الوصول لعنصر بفهرس",
        "code": "my_set = {'أ', 'ب', 'ج'}\nprint(my_set[0])",
        "error_message": "TypeError: 'set' object is not subscriptable",
        "explanation": "المجموعات ليست مرتبة (Unordered) ولا تحفظ ترتيب العناصر، لذلك لا يمكنك الوصول إلى عناصرها عبر الأرقام (الفهارس). للوصول للعناصر يجب التكرار عليها بحلقة for أو تحويلها لقائمة."
      },
      {
        "type": "mistake",
        "title": "إنشاء مجموعة فارغة",
        "explanation": "يعتقد البعض أن `s = {}` تنشئ مجموعة فارغة، وهذا خطأ، فهي تنشئ 'قاموس' فارغ. لإنشاء مجموعة فارغة يجب كتابة `s = set()`."
      },
      {
        "type": "use_case",
        "title": "توصيات الأصدقاء (Friend Recommendations)",
        "explanation": "في شبكات التواصل الاجتماعي، لمعرفة الأصدقاء المشتركين بين شخصين، نضع أصدقاء كل شخص في Set ونستخدم التقاطع `(friend_set_1 & friend_set_2)` للحصول على المشتركين بثوانٍ معدودة."
      },
      {
        "type": "challenge",
        "title": "تحدي: إيجاد الفروق",
        "code": "python_devs = {'أحمد', 'سارة', 'ماجد'}\njava_devs = {'سارة', 'ياسر', 'أحمد'}\n# نريد الأشخاص الذين يبرمجون بايثون فقط ولا يعرفون جافا\nonly_python = python_devs __ java_devs\nprint(only_python)",
        "expected_output": "{'ماجد'}",
        "explanation": "نستخدم علامة الطرح `-` (أو دالة difference) لإيجاد العناصر الموجودة في المجموعة الأولى وغير موجودة في الثانية."
      }
    ],
    "lesson_type": "capstone",
    "exam_data": {
      "title": "اختبار المجموعات",
      "questions": [
        {
          "question": "إذا قمنا بتعريف `s = {1, 2, 2, 3}`، كم سيكون عدد عناصر `s`؟",
          "options": [
            "4",
            "3",
            "2",
            "سيحدث خطأ"
          ],
          "correct_answer": "3",
          "explanation": "المجموعة تحذف العناصر المكررة تلقائياً أثناء إنشائها، لذلك سيتم الاحتفاظ بالرقم 2 مرة واحدة فقط، لتصبح المجموعة {1, 2, 3} وعدد عناصرها 3."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 25: المجموعات (Sets)",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 25: المجموعات (Sets)",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "هل هذا الشيء يشبه هذا الشيء؟ أم أنهما نفس الشيء بالضبط؟ في البرمجة، هنالك فرق كبير بين التطابق في القيمة والتطابق في الهوية (مكان التخزين في الذاكرة). فهم هذا الفارق يجنبك الكثير من الأخطاء المنطقية الخفية.",
      "description": "يركز هذا الدرس على مقارنة البيانات بطريقة متقدمة. نوضح الفرق الجوهري بين استخدام عامل المساواة (==) الذي يتحقق من تساوي القيم، وعامل الهوية (is) الذي يتحقق مما إذا كان المتغيران يشيران لنفس الكائن في الذاكرة. ونتعلم السلاسل في المقارنة.",
      "prototype": "a == b   # يقارن القيم\na is b   # يقارن الهوية (الذاكرة)\n10 < x < 20 # مقارنة مسلسلة",
      "parameters": "يمكن المقارنة بين مختلف أنواع البيانات، ولكن ينصح بمقارنة الأنواع المتطابقة لتجنب النتائج غير المتوقعة.",
      "return_value": "ترجع جميع عمليات المقارنة قيمة منطقية: إما True أو False.",
      "example": "list1 = [1, 2, 3]\nlist2 = [1, 2, 3]\nprint(list1 == list2)  # True\nprint(list1 is list2)  # False"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس مقارنة البيانات لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "المقارنة المتسلسلة (Chained Comparisons)",
        "code": "age = 25\nif 18 <= age < 30:\n    print('شاب بالغ')\nelse:\n    print('فئة أخرى')",
        "expected_output": "شاب بالغ",
        "explanation": "في بايثون، يمكنك دمج أكثر من مقارنة في سطر واحد بطريقة تشبه الرياضيات، وهي أوضح من كتابة `age >= 18 and age < 30`."
      },
      {
        "type": "wrong",
        "title": "استخدام is مع الأرقام الكبيرة",
        "code": "a = 1000\nb = 1000\nprint(a is b)",
        "error_message": "سيعطي False (وليس خطأ برمجي، ولكنه خطأ منطقي)",
        "explanation": "عامل `is` لا ينبغي أن يستخدم لمقارنة القيم لأن بايثون يقوم بتخزين الأرقام الصغيرة فقط في الذاكرة مسبقاً. الأرقام الكبيرة حتى وإن تساوت قيمتها قد يتم تخزينها في أماكن مختلفة. استخدم `==` لمقارنة القيم دائماً."
      },
      {
        "type": "mistake",
        "title": "مقارنة النصوص بالأرقام",
        "explanation": "في بعض اللغات الأخرى مثل جافاسكريبت، قد يتم تحويل النوع تلقائياً (10 == '10' ترجع True)، لكن بايثون لغة صارمة (Strongly typed) لذلك فإن القيمة العددية 10 لن تساوي أبداً النص '10'."
      },
      {
        "type": "use_case",
        "title": "التحقق من القيم الفارغة (None)",
        "explanation": "عند التعامل مع قواعد البيانات أو جلب البيانات من الإنترنت، غالباً ما نتحقق إذا كانت القيمة لم تُحدد بعد. الطريقة القياسية والصحيحة لذلك هي استخدام `if result is None:` وليس عامل `==`."
      },
      {
        "type": "challenge",
        "title": "تحدي: متى تتساوى الهوية؟",
        "code": "x = [5, 10]\ny = x\n# أضف السطر الذي يطبع ما إذا كان x و y هما نفس الكائن في الذاكرة",
        "expected_output": "True",
        "explanation": "قمنا بإسناد المتغير `y` للمتغير `x`، وهذا يعني أن كلاهما يشير لنفس الموقع في الذاكرة. للتحقق من ذلك يجب طباعة `x is y`."
      }
    ],
    "lesson_type": "ai_challenge",
    "exam_data": {
      "title": "اختبار مقارنة البيانات",
      "questions": [
        {
          "question": "متى يجب أن نستخدم العامل `is` بدلاً من العامل `==` ؟",
          "options": [
            "عند مقارنة النصوص الطويلة فقط",
            "عندما نريد التأكد من تطابق قيمتين بغض النظر عن نوعهما",
            "عند التحقق من الهوية في الذاكرة أو التحقق من None",
            "دائماً، لأنه أسرع بكثير"
          ],
          "correct_answer": "عند التحقق من الهوية في الذاكرة أو التحقق من None",
          "explanation": "يستخدم `is` للتحقق من أن المتغيرين يشيران لنفس الكائن الفعلي في الذاكرة (Memory Identity)، وهو الأسلوب الأفضل للتحقق من الثوابت الفردية (Singletons) مثل None."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 26: مقارنة البيانات",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 26: مقارنة البيانات",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "ماذا لو أردت إنشاء دالة تقوم بجمع أي عدد من الأرقام دون أن تحدد عددهم مسبقاً؟ أو دالة تستخدم لمرة واحدة فقط وتختفي؟ في البرامج المتقدمة، نحتاج إلى دوال تتميز بالمرونة العالية والقدرة على التعامل مع عدد غير معروف من البيانات.",
      "description": "ننتقل بالدوال إلى مستوى أعلى. سنشرح كيفية استخدام *args و **kwargs لتمرير عدد غير محدود من المعاملات. كذلك سنتعلم الدوال المجهولة (Lambda Functions) لكتابة دوال سريعة في سطر واحد، وكيفية استخدام دوال قوية مثل map و filter للتلاعب بالقوائم.",
      "prototype": "def func(*args, **kwargs):\n    pass\n\nlmb = lambda x: x * 2\nlist(map(lmb, [1, 2, 3]))",
      "parameters": "*args: تجمع المعاملات العادية كـ Tuple. **kwargs: تجمع المعاملات المسماة كـ Dictionary. الدوال المجهولة (lambda) لا تملك اسماً.",
      "return_value": "دوال map و filter ترجع كائنات قابلة للتكرار (Iterators)، لذا غالباً ما نقوم بتحويلها إلى قائمة عبر ()list.",
      "example": "def super_sum(*args):\n    return sum(args)\n\nprint(super_sum(1, 2, 3, 4, 5))"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس الدوال (Functions) المتقدمة لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "استخدام الدالة Lambda مع Filter",
        "code": "nums = [10, 15, 20, 25]\neven_nums = list(filter(lambda x: x % 2 == 0, nums))\nprint(even_nums)",
        "expected_output": "[10, 20]",
        "explanation": "استخدمنا دالة lambda بسيطة لتعريف شرط (أن يكون الرقم زوجياً)، ومررناها مع القائمة إلى دالة `filter` لفلترة الأرقام."
      },
      {
        "type": "wrong",
        "title": "ترتيب المعاملات الخاطئ",
        "code": "def profile(**kwargs, *args):\n    pass",
        "error_message": "SyntaxError: invalid syntax",
        "explanation": "عند تعريف الدالة، يجب أن تتبع ترتيباً محدداً: أولاً المعاملات العادية، ثم `*args`، ثم المعاملات الافتراضية، وأخيراً `**kwargs`."
      },
      {
        "type": "mistake",
        "title": "تعقيد دوال Lambda",
        "explanation": "يظن البعض أنه يمكن استبدال جميع الدوال بدوال Lambda. هذا غير صحيح ويسيء للمقروئية. دوال Lambda مصممة لتكون بسيطة ومكونة من تعبير (Expression) واحد فقط. إذا احتجت جملاً شرطية معقدة وحلقات، استخدم الدوال العادية `def`."
      },
      {
        "type": "use_case",
        "title": "ترتيب البيانات المعقدة",
        "explanation": "تستخدم دوال Lambda بكثرة مع الدالة `sort()` أو `sorted()`. مثلاً، لترتيب قائمة من القواميس حسب العمر، نمرر `key=lambda x: x['age']` لتحديد معيار الترتيب بمرونة عالية."
      },
      {
        "type": "challenge",
        "title": "تحدي: بناء قاموس من المدخلات",
        "code": "def build_profile(____):\n    return kwargs\n\nuser = build_profile(name='أحمد', job='مطور')\nprint(user)",
        "expected_output": "{'name': 'أحمد', 'job': 'مطور'}",
        "explanation": "لكي تستقبل الدالة عدداً غير محدد من المتغيرات المسماة (Key=Value) وتخزنها كقاموس، عليك استخدام `**kwargs` في تعريف الدالة."
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار الدوال المتقدمة",
      "questions": [
        {
          "question": "ماذا يفعل الكود التالي: `list(map(lambda x: x**2, [1, 2, 3]))` ؟",
          "options": [
            "يجمع الأرقام ويكون الناتج 6",
            "يرجع القائمة الأصلية دون تغيير",
            "يرجع قائمة بمربعات الأرقام [1, 4, 9]",
            "سيؤدي إلى خطأ برمجي"
          ],
          "correct_answer": "يرجع قائمة بمربعات الأرقام [1, 4, 9]",
          "explanation": "دالة `map` تقوم بتنفيذ الدالة الممررة (هنا lambda تقوم بتربيع العدد) على كل عنصر من عناصر القائمة بشكل منفصل."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 27: الدوال (Functions) المتقدمة",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 27: الدوال (Functions) المتقدمة",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "تخيل أن لديك مفتاح لغرفتك (نطاق محلي) ومفتاح رئيسي للمنزل كله (نطاق عام). في البرمجة، المتغيرات التي تعرفها داخل الدالة لا يمكن رؤيتها من الخارج، والعكس ليس صحيحاً دائماً. فهم هذا النطاق يمنع التداخل غير المتوقع بين البيانات.",
      "description": "يناقش هذا الدرس مجال رؤية المتغيرات (Variable Scope). المتغيرات المحلية (Local) يتم إنشاؤها داخل الدالة وتنتهي بانتهاء تنفيذها. أما المتغيرات العامة (Global) فتعرف خارج الدوال ويمكن الوصول إليها من أي مكان. سنتعلم أيضاً كيفية استخدام كلمة 'global' لتعديل متغير عام من داخل الدالة.",
      "prototype": "x = 10  # متغير عام\ndef my_func():\n    global x\n    x = 20  # تعديل المتغير العام",
      "parameters": "كلمة global يتبعها اسم المتغير العام الذي نرغب بتعديله.",
      "return_value": "هذا المفهوم يؤثر على بنية المتغيرات في الذاكرة وليس له قيمة إرجاع مباشرة.",
      "example": "counter = 0\ndef increment():\n    global counter\n    counter += 1\n\nincrement()\nprint(counter)"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس المتغيرات المحلية والعامة لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "قراءة المتغير العام دون تعديله",
        "code": "app_name = 'تطبيقي'\ndef print_welcome():\n    print(f'مرحباً بك في {app_name}')\n\nprint_welcome()",
        "expected_output": "مرحباً بك في تطبيقي",
        "explanation": "يمكن للدالة قراءة (استخدام) المتغير العام بحرية دون الحاجة لاستخدام الكلمة `global`، طالما أننا لا نحاول تغييره أو تعيين قيمة جديدة له."
      },
      {
        "type": "wrong",
        "title": "محاولة التعديل دون تعريف global",
        "code": "score = 10\ndef update_score():\n    score = score + 5\n\nupdate_score()",
        "error_message": "UnboundLocalError: local variable 'score' referenced before assignment",
        "explanation": "عندما نقوم بعملية حسابية وتعيين قيمة جديدة (`score = ...`)، يعتبر بايثون أن `score` متغير محلي جديد، ولأنه لم يعط قيمة مبدئية يظهر خطأ. يجب كتابة `global score` داخل الدالة أولاً."
      },
      {
        "type": "mistake",
        "title": "الإفراط في استخدام المتغيرات العامة",
        "explanation": "من الأخطاء التصميمية الشائعة الاعتماد المفرط على المتغيرات العامة لنقل البيانات بين الدوال. هذا يجعل تتبع الأخطاء صعباً (Spaghetti code). الممارسة الأفضل هي تمرير البيانات كمعاملات (Parameters) وإرجاعها (Return)."
      },
      {
        "type": "use_case",
        "title": "إعدادات التهيئة (Configuration)",
        "explanation": "غالباً ما توضع إعدادات الاتصال بقاعدة البيانات أو روابط الـ API في أعلى الملف كمتغيرات عامة (ثوابت تكتب بحروف كبيرة `DATABASE_URL`) لتستطيع كل الدوال قراءتها."
      },
      {
        "type": "challenge",
        "title": "تحدي: تضارب الأسماء",
        "code": "msg = 'خارجي'\ndef change():\n    msg = 'داخلي'\n    return msg\n\nchange()\nprint(msg)",
        "expected_output": "خارجي",
        "explanation": "الكود سيطبع 'خارجي' لأن الدالة قامت بإنشاء متغير محلي اسمه `msg` ولم تؤثر على المتغير العام. إذا أردت تعديل العام، تحتاج إلى استخدام `global`."
      }
    ],
    "lesson_type": "mini_mission",
    "exam_data": {
      "title": "اختبار النطاق (Scope)",
      "questions": [
        {
          "question": "إذا كان لدينا متغير معرف خارج الدالة، وأردنا تغيير قيمته داخل الدالة، ما الكلمة المفتاحية التي يجب استخدامها؟",
          "options": [
            "local",
            "public",
            "global",
            "static"
          ],
          "correct_answer": "global",
          "explanation": "الكلمة المفتاحية `global` تخبر بايثون أنك لا تريد إنشاء متغير محلي جديد، بل تريد الوصول إلى وتعديل المتغير العام الموجود خارج الدالة."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 28: المتغيرات المحلية والعامة",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 28: المتغيرات المحلية والعامة",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "كل شيء حولنا هو كائن (Object): سيارة، طالب، حساب بنكي. البرمجة الكائنية هي أسلوب برمجي يحاكي هذا المفهوم، حيث يتم تجميع البيانات (الصفات) والأفعال (الدوال) الخاصة بشيء معين في كيان واحد. هذا يجعل كتابة البرامج المعقدة وإدارتها أسهل بكثير.",
      "description": "هذه مقدمة نظرية ومفاهيمية حول البرمجة الشيئية/الكائنية (Object-Oriented Programming). سنقارن بين البرمجة الإجرائية التقليدية (استخدام دوال منفصلة) والبرمجة الكائنية. سنتعرف على المصطلحات الأساسية: الفئة (Class)، الكائن (Object)، الخصائص (Attributes)، والطرق (Methods).",
      "prototype": "# مفهوم عام:\n# الفئة: رسم هندسي لسيارة\n# الكائن: السيارة الحقيقية التي نقودها\n# الخصائص: اللون، السرعة\n# الطرق: تشغيل_المحرك()، الفرملة()",
      "parameters": "لا توجد معاملات هنا، التركيز على فهم النماذج والمفاهيم.",
      "return_value": "النتيجة هي فهم أعمق لهيكلة الكود لبناء أنظمة كبيرة قابلة للتطوير وإعادة الاستخدام.",
      "example": "# مثال نظري بسيط\n# بدلاً من:\n# color = 'Red'; def drive(c): print('Driving')\n# نستخدم كائناً:\n# my_car.color = 'Red'; my_car.drive()"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس البرمجة الكائنية (OOP) مقدمة لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "التفكير بأسلوب الكائنات",
        "code": "# في البرمجة الإجرائية:\nuser_name = 'أحمد'\ndef login(name):\n    print(f'{name} سجل دخوله')\n# في البرمجة الكائنية (تصور مبدئي):\n# user1.name = 'أحمد'\n# user1.login()",
        "expected_output": "كلا الطريقتين ستؤدي لنفس النتيجة الوظيفية.",
        "explanation": "في البرمجة الكائنية، الدالة `login` تكون تابعة للمستخدم نفسه (تسمى Method)، ولا نحتاج لتمرير اسم المستخدم لها، لأن الكائن يعرف بياناته مسبقاً."
      },
      {
        "type": "wrong",
        "title": "الخلط بين الفئة والكائن",
        "code": "# مفهوم خاطئ شائع:",
        "error_message": "ليس خطأ برمجي، بل قصور في الفهم",
        "explanation": "يعتقد البعض أن الفئة (Class) هي الكائن نفسه. تذكر: الفئة هي 'المخطط' أو القالب الذي نصنعه. أما الكائن (Object أو Instance) فهو 'النسخة' المنشأة من هذا المخطط، والتي تحمل بيانات حقيقية."
      },
      {
        "type": "mistake",
        "title": "الاعتقاد بأن OOP معقد بلا داعٍ",
        "explanation": "قد تبدو البرمجة الكائنية طويلة ومعقدة في البرامج الصغيرة جداً. ولكن، عند بناء لعبة أو تطبيق ويب، فإن استخدام الكائنات يجعل الكود منظماً، قابلاً للصيانة، ويسهل تقسيم العمل بين فريق المبرمجين."
      },
      {
        "type": "use_case",
        "title": "ألعاب الفيديو",
        "explanation": "ألعاب الفيديو هي المثال الأوضح. اللاعب هو كائن، له خصائص (نقاط صحة، درع) وطرق (القفز، الهجوم). الأعداء هم كائنات مستنسخة من فئة (Enemy)، لكل منهم موقعه وصحته المستقلة."
      },
      {
        "type": "challenge",
        "title": "تحدي: استخراج الخصائص والطرق",
        "code": "# فكر في 'حساب بنكي'\n# ما هي الخصائص (Attributes) وما هي الطرق (Methods) له؟",
        "expected_output": "الخصائص: رصيد، اسم_المالك | الطرق: إيداع()، سحب()",
        "explanation": "الخصائص هي الأسماء أو المتغيرات التي تصف حالة الكيان. الطرق هي الأفعال أو الدوال التي يمكن للكيان القيام بها لتغيير حالته."
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار مفاهيم OOP",
      "questions": [
        {
          "question": "في مصطلحات البرمجة الكائنية (OOP)، ماذا نطلق على 'الدوال' التي توجد بداخل الفئة (Class)؟",
          "options": [
            "وظائف (Functions)",
            "طرق (Methods)",
            "متغيرات (Variables)",
            "مؤشرات (Pointers)"
          ],
          "correct_answer": "طرق (Methods)",
          "explanation": "الدالة التي يتم تعريفها داخل بيئة الفئة (Class) وتتعامل مع بيانات الكائن تسمى طريقة (Method) لتمييزها عن الدوال المستقلة."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 29: البرمجة الكائنية (OOP) مقدمة",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 29: البرمجة الكائنية (OOP) مقدمة",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "البرمجة كائنية التوجه (OOP) تبدأ بالفئات (Classes). الفئة هي قالب (Blueprint) لصناعة الكائنات، والكائن هو نسخة حية من هذا القالب.",
      "description": "تحتوي الفئة على خصائص (Attributes) ودوال (Methods) تمثل سلوك الكائن. يُستخدم دالة __init__ كمنشئ (Constructor) للخصائص.",
      "prototype": "class Car:\n    def __init__(self, color):\n        self.color = color\n\nmy_car = Car('Red')",
      "parameters": "self ومعاملات الإعداد",
      "return_value": "كائن من نوع الفئة",
      "example": "class Dog:\n    def bark(self):\n        return 'Woof!'\n\nd = Dog()\nprint(d.bark())"
    },
    "exercise_instructions": "قم بإنشاء كلاس اسمه `Cat` يحتوي على دالة `meow` ترجع النص 'Meow'. ثم أنشئ كائناً من هذا الكلاس واطبع ناتج دالة `meow`.",
    "expected_output": "Meow",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "استخدام المُنشئ (Constructor)",
        "code": "class User:\n    def __init__(self, name):\n        self.name = name\n\nu = User('Ali')\nprint(u.name)",
        "explanation": "دالة `__init__` تُستدعى تلقائياً عند إنشاء الكائن لضبط خصائصه الأولية."
      },
      {
        "type": "wrong",
        "title": "نسيان تمرير self",
        "code": "class Math:\n    def add(a, b):\n        return a + b\n\nm = Math()\nm.add(5, 3)",
        "error_message": "TypeError: add() takes 2 positional arguments but 3 were given",
        "explanation": "في دوال الفئة (Methods)، يجب أن يكون `self` هو المعامل الأول دائماً للإشارة إلى الكائن نفسه."
      },
      {
        "type": "mistake",
        "title": "تعديل خصائص الفئة بدلاً من خصائص الكائن",
        "code": "class Box:\n    color = 'red'\n\nb1 = Box()\nb2 = Box()\nBox.color = 'blue'\nprint(b1.color)",
        "explanation": "تعديل متغيرات الفئة العامة (Class Attributes) يؤثر على جميع الكائنات، مما قد يسبب سلوكاً غير متوقع إذا كنت تقصد تعديل كائن واحد فقط."
      }
    ],
    "lesson_type": "milestone",
    "exam_data": {
      "title": "اختبار الفئات",
      "questions": [
        {
          "question": "ما هي الدالة التي تُنفذ تلقائياً عند إنشاء كائن جديد في بايثون؟",
          "options": [
            "__start__",
            "__init__",
            "constructor",
            "create"
          ],
          "correct_answer": "__init__",
          "explanation": "الدالة __init__ هي المعمار (Constructor) في بايثون وتُستدعى أوتوماتيكياً."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 30: الفئات (Classes) والكائنات",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 30: الفئات (Classes) والكائنات",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا نحتاج إلى الوراثة؟ عندما نقوم بكتابة تطبيقات كبيرة، غالباً ما نجد أننا نكرر كتابة نفس الخصائص والوظائف في عدة كائنات. الوراثة تسمح لنا بإنشاء صنف (Class) جديد يرث جميع الخصائص والدوال من صنف آخر، مما يقلل من تكرار الكود ويسهل صيانته.",
      "description": "الوراثة (Inheritance) هي إحدى ركائز البرمجة الكائنية التوجه (OOP). تسمح للصنف الجديد (الابن) بأن يأخذ (يرث) الخصائص والدوال من الصنف الموجود مسبقاً (الأب). يمكن للصنف الابن استخدام هذه الدوال أو تعديلها (Overriding) وكذلك إضافة دوال جديدة خاصة به.",
      "prototype": "class ChildClass(ParentClass):\n    pass",
      "parameters": "ParentClass: اسم الصنف الأب الذي نريد الوراثة منه.",
      "return_value": "الكود لا يُرجع قيمة بحد ذاته، بل يُنشئ بنية هيكلية لتعريف الأصناف.",
      "example": "class Animal:\n    def speak(self):\n        return \"صوت الحيوان\"\n\nclass Dog(Animal):\n    def speak(self):\n        return \"نباح\"\n\nmy_dog = Dog()\nprint(my_dog.speak())"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس الوراثة (Inheritance) لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "class Person:\n    def __init__(self, name):\n        self.name = name\n\nclass Student(Person):\n    def __init__(self, name, grade):\n        super().__init__(name)\n        self.grade = grade\n\ns = Student(\"أحمد\", \"ممتاز\")\nprint(s.name, s.grade)",
        "expected_output": "أحمد ممتاز",
        "explanation": "هنا قمنا بإنشاء صنف Student يرث من صنف Person، واستخدمنا دالة super() لاستدعاء المُنشئ الخاص بالصنف الأب لتمرير الاسم."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "class Bird:\n    def fly(self):\n        print(\"يطير\")\n\nclass Penguin(Bird):\n    def swim(self):\n        print(\"يسبح\")\n\np = Penguin()\np.fly() # لا خطأ برمجي، ولكن البطريق لا يطير!",
        "error_message": "ليس خطأ برمجي صريح (Exception)، ولكنه خطأ منطقي (Logical Error).",
        "explanation": "لإصلاح الخطأ المنطقي، يجب إعادة تعريف الدالة fly في صنف البطريق (Overriding) لتوضح أنه لا يستطيع الطيران."
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "البعض يعتقد أن الوراثة تعني نسخ الكود بالكامل، في حين أنها تعني إعادة الاستخدام وإمكانية التوسع على سلوكيات موجودة مسبقاً بدلاً من نسخها نصياً."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "في تطوير ألعاب الفيديو، يمكن أن يكون لدينا صنف Character (شخصية) يحتوي على الصحة والسرعة، ونرث منه أصناف مثل Player (اللاعب) و Enemy (العدو)."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "class Vehicle:\n    def __init__(self):\n        self.wheels = 4\n\nclass Motorcycle(Vehicle):\n    def __init__(self):\n        # ينقص هنا استدعاء الأب لتعيين عدد العجلات\n        self.wheels = 2\n\nm = Motorcycle()\nprint(m.wheels)",
        "expected_output": "2",
        "explanation": "لا حاجة لاستدعاء الأب إذا كنت تريد استبدال القيمة بالكامل، ولكن إذا أردت جلب خصائص أخرى يجب استخدام super().__init__(). في هذا التحدي، التعيين المباشر صحيح لكن ينقصه استدعاء super() إذا كانت هناك خصائص أخرى."
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "ما هي الكلمة المفتاحية أو الدالة المستخدمة داخل الصنف الابن للوصول إلى دوال الصنف الأب؟",
          "options": [
            "parent()",
            "super()",
            "base()",
            "this()"
          ],
          "correct_answer": "super()",
          "explanation": "دالة super() تستخدم للوصول إلى المتغيرات والدوال الموجودة في الصنف الأب بسهولة دون الحاجة لتكرار اسم الأب."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 31: الوراثة (Inheritance)",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 31: الوراثة (Inheritance)",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا نتعلم التغليف (Encapsulation)؟ في البرامج المعقدة، من الخطر ترك جميع البيانات متاحة للتعديل المباشر من أي مكان، فقد يتم تغييرها بشكل خاطئ. التغليف يتيح لنا إخفاء البيانات الحساسة وحمايتها، وتوفير طرق محددة وآمنة للوصول إليها أو تعديلها.",
      "description": "التغليف هو مبدأ من مبادئ الـ OOP يعتمد على إخفاء التفاصيل الداخلية للكائن (حالة الكائن) ومنع الوصول المباشر إليها من الخارج. في بايثون، نستخدم الشرطة السفلية المزدوجة __ قبل اسم المتغير لجعله خاصاً (Private)، مما يعني أنه لا يمكن الوصول إليه إلا من داخل الصنف نفسه.",
      "prototype": "class MyClass:\n    def __init__(self):\n        self.__private_var = 10",
      "parameters": "__private_var: متغير خاص لا يُمكن الوصول إليه من خارج الصنف.",
      "return_value": "حماية البيانات من التعديل الخارجي العشوائي.",
      "example": "class BankAccount:\n    def __init__(self, balance):\n        self.__balance = balance\n\n    def get_balance(self):\n        return self.__balance\n\naccount = BankAccount(1000)\nprint(account.get_balance())"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس التغليف (Encapsulation) لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "class User:\n    def __init__(self, password):\n        self.__password = password\n\n    def check_password(self, attempt):\n        return self.__password == attempt\n\nu = User(\"secret123\")\nprint(u.check_password(\"secret123\"))",
        "expected_output": "True",
        "explanation": "في هذا المثال، الرقم السري محمي، ولا يمكن معرفته أو قراءته مباشرة، بل نتحقق منه عبر دالة خاصة بذلك."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "class Car:\n    def __init__(self):\n        self.__speed = 200\n\nmy_car = Car()\nprint(my_car.__speed)",
        "error_message": "AttributeError: 'Car' object has no attribute '__speed'",
        "explanation": "المتغير __speed هو متغير خاص ولا يمكن طباعته أو الوصول إليه مباشرة من خارج الصنف. للوصول إليه يجب توفير دالة Getter تعيده."
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "يعتقد البعض أن التغليف في بايثون يقدم أماناً تاماً ولا يمكن اختراقه. الحقيقة أن بايثون تقوم بتبديل الاسم (Name Mangling)، ويمكن الوصول للمتغير عبر _ClassName__variableName."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "يستخدم بكثرة في قواعد البيانات وتطبيقات البنوك لحماية بيانات الحسابات كالأرصدة بحيث يتم تعديلها فقط عبر إيداع وسحب مدروس."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "class Wallet:\n    def __init__(self):\n        self.__money = 0\n    # أضف دالة لزيادة المال هنا\n\nw = Wallet()\n# w.__money += 50",
        "expected_output": "لا شيء يطبع، لكن يجب أن تزيد القيمة 50",
        "explanation": "يجب عليك إنشاء دالة مثل def add_money(self, amount): self.__money += amount واستدعائها بدلاً من الوصول المباشر."
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "كيف يتم تعريف المتغير كمتغير خاص (Private) في بايثون داخل الصنف؟",
          "options": [
            "بوضع كلمة private قبل المتغير",
            "باستخدام علامة #",
            "بوضع شرطتين سفليتين __ قبل اسم المتغير",
            "بوضع علامة $ قبل الاسم"
          ],
          "correct_answer": "بوضع شرطتين سفليتين __ قبل اسم المتغير",
          "explanation": "في بايثون، التغليف يعتمد على البادئة __ لإعلام المترجم بأن هذا المتغير هو للاستخدام الداخلي فقط."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 32: التغليف (Encapsulation)",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 32: التغليف (Encapsulation)",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا نتعلم معالجة الأخطاء؟ في كثير من الأحيان، قد يتوقف البرنامج عن العمل (Crash) بسبب مدخلات خاطئة من المستخدم أو ملف غير موجود. لتجنب توقف البرنامج بالكامل، نستخدم معالجة الأخطاء للتعامل معها بهدوء وإعلام المستخدم بالمشكلة.",
      "description": "يستخدم مصطلح Try/Except في بايثون لاختبار كود قد يحتوي على خطأ. نضع الكود المشكوك فيه داخل كتلة try. إذا حدث خطأ، بدلاً من إيقاف البرنامج، ينتقل التنفيذ إلى كتلة except حيث يمكننا كتابة رسالة توضيحية أو اتخاذ إجراء بديل.",
      "prototype": "try:\n    # كود قد يسبب خطأ\nexcept ExceptionType:\n    # كود يُنفذ عند حدوث الخطأ",
      "parameters": "ExceptionType: نوع الخطأ المتوقع (مثل ValueError, ZeroDivisionError).",
      "return_value": "لا توجد قيمة مرجعة، بل تغيير في مسار تنفيذ البرنامج.",
      "example": "try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print(\"لا يمكن القسمة على صفر!\")"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس معالجة الأخطاء (Try/Except) لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "try:\n    num = int(\"abc\")\nexcept ValueError:\n    print(\"يرجى إدخال أرقام فقط.\")",
        "expected_output": "يرجى إدخال أرقام فقط.",
        "explanation": "حاولنا تحويل نص غير رقمي إلى عدد صحيح، مما تسبب في ValueError. تم التقاط الخطأ بنجاح وطباعة رسالة مناسبة."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "try:\n    print(1 / 0)\nexcept:\n    pass",
        "error_message": "لا تظهر رسالة خطأ، وهذا بحد ذاته مشكلة (صمت الأخطاء).",
        "explanation": "استخدام except بدون تحديد نوع الخطأ يسمى (Bare Except) وهو سيء لأنه يخفي جميع الأخطاء بما في ذلك التي لا تتوقعها. حدد نوع الخطأ دائماً."
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "يعتقد البعض أن try/except تبطئ البرنامج بشكل كبير ويجب تجنبها. الحقيقة أن تأثيرها على الأداء شبه معدوم عند عدم حدوث خطأ، وهي أساسية لبرامج مستقرة."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "التعامل مع طلبات الويب (APIs)؛ إذا انقطع الإنترنت، نتوقع خطأ اتصال ConnectionError ونعرض للمستخدم رسالة 'لا يوجد اتصال' بدلاً من إغلاق التطبيق."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "my_list = [1, 2, 3]\ntry:\n    print(my_list[5])\nexcept ValueError:\n    print(\"حدث خطأ في القيمة\")",
        "expected_output": "IndexError: list index out of range",
        "explanation": "الخطأ في الكود أنه يحاول التقاط ValueError، بينما الوصول لعنصر خارج حدود القائمة يُنتج IndexError. يجب تغيير ValueError إلى IndexError."
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "ما هي الكتلة التي يتم تنفيذها دائماً في نهاية try/except سواء حدث خطأ أم لا؟",
          "options": [
            "finally",
            "else",
            "always",
            "catch"
          ],
          "correct_answer": "finally",
          "explanation": "كتلة finally مفيدة جداً لتنظيف الموارد كإغلاق الملفات أو قواعد البيانات، لأنها تتنفذ في جميع الأحوال."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 33: معالجة الأخطاء (Try/Except)",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 33: معالجة الأخطاء (Try/Except)",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا نتعلم قراءة الملفات؟ البيانات في البرامج تُفقد بمجرد إغلاق البرنامج. لحفظ البيانات والعودة إليها، يتم تخزينها في ملفات خارجية. في هذا الدرس نتعلم كيف نجعل بايثون يقرأ محتوى ملف نصي لاستخراج البيانات منه.",
      "description": "للتعامل مع الملفات في بايثون نستخدم الدالة المدمجة open(). نمرر لها اسم الملف ووضع الفتح (Mode)، حيث نستخدم الوضع 'r' (Read) للقراءة. يُنصح دائماً باستخدام with open(...) لأنها تقوم بإغلاق الملف تلقائياً بعد الانتهاء منه، حتى لو حدث خطأ.",
      "prototype": "with open('filename.txt', 'r') as file:\n    content = file.read()",
      "parameters": "'r': يدل على وضع القراءة (Read). file: هو المتغير الذي يمثل الملف.",
      "return_value": "دالة read() ترجع نص (String) يحتوي على كافة بيانات الملف.",
      "example": "with open('example.txt', 'r') as f:\n    text = f.read()\n    print(text)"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس التعامل مع الملفات (القراءة) لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "with open('data.txt', 'r') as file:\n    for line in file:\n        print(line.strip())",
        "expected_output": "يتم طباعة كل سطر في الملف منسقاً بدون مسافات إضافية.",
        "explanation": "هذه أفضل طريقة لقراءة ملف كبير جداً. بدلاً من قراءة كل شيء مرة واحدة، نقرأ الملف سطراً بسطر في حلقة التكرار for."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "file = open('non_existent.txt', 'r')\nprint(file.read())\nfile.close()",
        "error_message": "FileNotFoundError: [Errno 2] No such file or directory",
        "explanation": "محاولة قراءة ملف غير موجود تؤدي إلى خطأ. يجب وضعها بداخل try/except للتعامل مع هذا الخطأ."
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "يعتقد الكثيرون أنه يجب قراءة محتوى الملف بالكامل بدالة read() دائماً. هذا خطأ فادح مع الملفات الضخمة (جيجابايت) لأنه يستهلك الذاكرة (RAM) بأكملها."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "قراءة ملفات السجلات (Logs) الخاصة بالخوادم للبحث عن أخطاء معينة حدثت في النظام وتحليلها."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "f = open('hello.txt', 'r')\ntext = f.read()\n# ينقص هنا شيء مهم جداً",
        "expected_output": "الملف يجب أن يُغلق",
        "explanation": "إذا لم تستخدم كلمة with، يجب عليك دائماً استدعاء f.close() في النهاية لتحرير الموارد."
      }
    ],
    "lesson_type": "code_reading",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "ما هي الفائدة الأساسية من استخدام كلمة with عند فتح الملفات؟",
          "options": [
            "تجعل قراءة الملف أسرع",
            "تقوم بإغلاق الملف تلقائياً",
            "تسمح بقراءة الملفات المشفرة",
            "تمنع حدوث الأخطاء تماماً"
          ],
          "correct_answer": "تقوم بإغلاق الملف تلقائياً",
          "explanation": "توفر with ما يسمى بـ Context Manager والذي يضمن إغلاق الملف عند الانتهاء من الكتلة البرمجية."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 34: التعامل مع الملفات (القراءة)",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 34: التعامل مع الملفات (القراءة)",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا نحتاج للكتابة على الملفات؟ إذا قمت بإنشاء برنامج يسجل درجات الطلاب، فإنك تريد حفظ هذه البيانات بشكل دائم لتكون موجودة في المرة القادمة التي تفتح فيها البرنامج. الكتابة على الملفات هي الوسيلة لحفظ المخرجات.",
      "description": "للكتابة داخل ملف نستخدم الدالة open() ولكن بوضع 'w' (Write) أو 'a' (Append). الوضع 'w' يمسح كل شيء في الملف القديم ويكتب من جديد، بينما الوضع 'a' يضيف النصوص الجديدة في نهاية الملف دون مسح محتوياته السابقة.",
      "prototype": "with open('file.txt', 'w') as f:\n    f.write('نص')",
      "parameters": "'w' للكتابة ومسح السابق. 'a' للإضافة في نهاية الملف.",
      "return_value": "ترجع عدد الأحرف التي تمت كتابتها في الملف.",
      "example": "with open('log.txt', 'a') as f:\n    f.write('تم تسجيل الدخول بنجاح\\n')"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس التعامل مع الملفات (الكتابة) لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "lines = ['السطر الأول\\n', 'السطر الثاني\\n']\nwith open('notes.txt', 'w') as f:\n    f.writelines(lines)",
        "expected_output": "يتم إنشاء أو تعديل ملف notes.txt وبداخله السطرين المحددين.",
        "explanation": "استخدمنا الدالة writelines لكتابة قائمة من النصوص دفعة واحدة بدلاً من كتابتها سطراً بسطر."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "with open('data.txt', 'r') as f:\n    f.write('أريد إضافة هذا النص')",
        "error_message": "io.UnsupportedOperation: not writable",
        "explanation": "لقد فتحنا الملف في وضع القراءة 'r' ثم حاولنا الكتابة عليه. يجب تغييره إلى 'w' أو 'a'."
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "يظن المبتدئ أن 'w' سيضيف الكلمات إلى نهاية الملف. في الواقع 'w' سيمحو الملف بأكمله ثم يكتب. للإضافة يجب استخدام 'a'."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "حفظ إعدادات المستخدم (Settings) في ملف نصي أو JSON لتطبيق الإعدادات في كل مرة يتم تشغيل التطبيق."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "with open('test.txt', 'w') as f:\n    f.write('مرحبا')\n    f.write('بايثون')",
        "expected_output": "مرحبابايثون",
        "explanation": "الخطأ هنا ليس برمجياً بل تنسيقي، فالكلمتان ستلتصقان ببعضهما. يجب إضافة رمز النزول لسطر جديد '\\n' في نهاية كلمة مرحبا."
      }
    ],
    "lesson_type": "sandbox",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "إذا كان الملف يحتوي مسبقاً على 5 أسطر، واستخدمت الدالة open بوضع 'w' لكتابة سطر واحد، كم سيصبح عدد الأسطر؟",
          "options": [
            "6 أسطر",
            "5 أسطر",
            "سطر واحد",
            "سيحدث خطأ"
          ],
          "correct_answer": "سطر واحد",
          "explanation": "لأن الوضع 'w' يقوم بحذف محتويات الملف السابقة بالكامل وكتابة المحتوى الجديد فقط."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 35: التعامل مع الملفات (الكتابة)",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 35: التعامل مع الملفات (الكتابة)",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا نستورد المكتبات؟ بايثون تحتوي على أوامر أساسية، لكن من المستحيل أن تضم كل شيء بشكل افتراضي وإلا ستصبح ضخمة وبطيئة. لذلك، تم تقسيم الأدوات المتقدمة (مثل الرياضيات، الوقت، الويب) إلى 'مكتبات'. يمكنك استيراد ما تحتاجه فقط متى ما احتجته.",
      "description": "الاستيراد (Import) يسمح لك بجلب أكواد ووظائف كتبها مبرمجون آخرون واستخدامها في برنامجك. المكتبة (Module) هي ببساطة ملف بايثون يحتوي على دوال جاهزة. يمكنك استيراد المكتبة بالكامل، أو استيراد دالة محددة منها.",
      "prototype": "import module_name\nfrom module_name import function_name",
      "parameters": "module_name: اسم المكتبة. function_name: الدالة المحددة المراد استيرادها.",
      "return_value": "لا تُرجع قيمة، ولكنها تجعل الوظائف متاحة في الذاكرة لتنفيذها.",
      "example": "import datetime\ncurrent_time = datetime.datetime.now()\nprint(current_time)"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس استيراد المكتبات لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "import sys\nprint(sys.version)",
        "expected_output": "سيطبع إصدار بايثون المُثبت على جهازك.",
        "explanation": "مكتبة sys هي مكتبة مدمجة توفر وظائف للتعامل مع نظام بايثون نفسه، استوردناها لمعرفة نسخة لغة بايثون المستخدمة."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "import time\ntime.sleep(1)\nsleep(1)",
        "error_message": "NameError: name 'sleep' is not defined",
        "explanation": "عند استيراد المكتبة باستخدام import time، يجب استدعاء الدالة مسبوقة باسم المكتبة time.sleep. إذا أردت كتابة sleep مباشرة يجب استخدام from time import sleep."
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "استخدام from module import * لاستيراد كل شيء مرة واحدة يعتبر ممارسة سيئة جداً لأنه قد يتسبب في تضارب أسماء الدوال مع الدوال الخاصة بك."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "استيراد مكتبة requests (الخارجية) لجلب بيانات من موقع ويب، أو استيراد مكتبة os للتعامل مع ملفات النظام وإنشاء مجلدات."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "import math as m\nprint(math.pi)",
        "expected_output": "NameError: name 'math' is not defined",
        "explanation": "بما أننا استخدمنا اسماً مستعاراً (as m)، لا يمكننا استخدام الاسم القديم math، بل يجب استخدام m.pi."
      }
    ],
    "lesson_type": "debugging",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "كيف نقوم باستيراد دالة معينة فقط تسمى sqrt من مكتبة math؟",
          "options": [
            "import sqrt from math",
            "from math import sqrt",
            "import math.sqrt",
            "load math.sqrt"
          ],
          "correct_answer": "from math import sqrt",
          "explanation": "الصيغة from ... import تستخدم لتحديد جزء معين من المكتبة المراد استيراده فقط بدلاً من المكتبة كاملة."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 36: استيراد المكتبات",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 36: استيراد المكتبات",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا نتعلم مكتبة Math؟ العمليات الحسابية الأساسية (+، -، *، /) مفيدة، لكن ماذا لو أردت حساب الجذور التربيعية، الزوايا، اللوغاريتمات أو التعامل مع ثوابت رياضية مثل Pi؟ هنا يأتي دور المكتبة الرياضية الجاهزة Math.",
      "description": "مكتبة math هي مكتبة مدمجة (Built-in) في بايثون، توفر العشرات من الدوال الرياضية المتقدمة التي تعمل على الأرقام. يجب استيرادها قبل استخدامها. وهي لا تدعم الأرقام المركبة (Complex Numbers).",
      "prototype": "import math\nresult = math.function_name(number)",
      "parameters": "number: الرقم الذي ستُطبق عليه العملية الرياضية.",
      "return_value": "ترجع ناتج العملية الرياضية كعدد صحيح (int) أو عشري (float).",
      "example": "import math\nprint(math.sqrt(16)) # يطبع 4.0\nprint(math.pi) # يطبع 3.14159..."
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس مكتبة Math الرياضية لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "import math\nnum = 4.3\nprint(math.ceil(num)) # التقريب للأعلى\nprint(math.floor(num)) # التقريب للأسفل",
        "expected_output": "5\n4",
        "explanation": "دالة ceil تقرب الرقم العشري إلى أقرب عدد صحيح للأعلى، بينما floor تقربه لأقرب عدد صحيح للأسفل بغض النظر عن قيمة الكسر."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "import math\nprint(math.sqrt(-9))",
        "error_message": "ValueError: math domain error",
        "explanation": "لا يمكن حساب الجذر التربيعي لعدد سالب باستخدام مكتبة math الأساسية. لهذا الغرض، يجب استخدام مكتبة cmath الخاصة بالأعداد المركبة."
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "البعض يستخدم دالة القوة math.pow(2, 3) دائماً. على الرغم من صحتها، إلا أن بايثون يدعم عملية القوة محلياً عبر 2 ** 3 وهي أسرع وأبسط."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "تُستخدم في برمجة الرسوميات والألعاب لحساب الزوايا والمسافات (Trigonometry) باستخدام دوال مثل sin و cos."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "import math\nradius = 5\narea = pi * math.pow(radius, 2)\nprint(area)",
        "expected_output": "NameError: name 'pi' is not defined",
        "explanation": "الثابت pi ينتمي لمكتبة math، لذلك يجب كتابته هكذا: math.pi وليس pi فقط (إلا إذا استخدمت from math import pi)."
      }
    ],
    "lesson_type": "scenario",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "ما هي الدالة المستخدمة في مكتبة math لحساب المضروب (Factorial) لعدد ما؟",
          "options": [
            "math.fact()",
            "math.factorial()",
            "math.multiply()",
            "math.f()"
          ],
          "correct_answer": "math.factorial()",
          "explanation": "دالة factorial تأخذ عدداً صحيحاً وترجع حاصل ضرب جميع الأعداد الصحيحة من 1 وحتى هذا العدد."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 37: مكتبة Math الرياضية",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 37: مكتبة Math الرياضية",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا نتعلم مكتبة Random؟ في الألعاب، نحتاج إلى رمي نرد عشوائي. في المواقع، نحتاج لتوليد كلمة مرور عشوائية أو اختيار فائز بمسابقة. العشوائية جزء مهم من البرمجة وتوفره لنا مكتبة Random.",
      "description": "مكتبة random المدمجة تستخدم لتوليد أرقام واختيارات شبه عشوائية. تسمى شبه عشوائية (Pseudo-random) لأنها تعتمد على خوارزميات رياضية وليست عشوائية فيزيائية 100%. توفر دوال لاختيار عناصر، خلط القوائم، وتوليد الأرقام.",
      "prototype": "import random\nrandom.randint(min, max)",
      "parameters": "min: الحد الأدنى. max: الحد الأقصى (مشمول).",
      "return_value": "تُرجع قيمة عشوائية بحسب الدالة المستخدمة (رقم أو عنصر).",
      "example": "import random\ndice_roll = random.randint(1, 6)\nprint(\"لقد رميت نرد وحصلت على:\", dice_roll)"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس مكتبة Random الممتعة لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "import random\ncolors = [\"أحمر\", \"أخضر\", \"أزرق\", \"أصفر\"]\nwinner = random.choice(colors)\nprint(\"اللون الفائز هو:\", winner)",
        "expected_output": "أحد الألوان الأربعة بشكل عشوائي.",
        "explanation": "الدالة choice تأخذ قائمة وتختار منها عنصراً واحداً عشوائياً، وهي ممتازة للسحوبات والمسابقات."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "import random\nnum = random.randint(10, 5)\nprint(num)",
        "error_message": "ValueError: empty range for randrange()",
        "explanation": "في دالة randint يجب أن يكون الحد الأدنى هو المتغير الأول والحد الأقصى هو الثاني. لا يمكن وضع الأكبر قبل الأصغر."
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "استخدام مكتبة random في توليد رموز الأمان أو التشفير هو خطأ فادح؛ لأنها غير آمنة تشفيرياً ويمكن التنبؤ بها. للتشفير يجب استخدام مكتبة secrets."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "في ألعاب البطاقات الورقية، نستخدم الدالة random.shuffle(cards) لخلط البطاقات عشوائياً قبل توزيعها على اللاعبين."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "import random\nnames = [\"علي\", \"عمر\", \"سارة\"]\nchosen = random.randint(names)\nprint(chosen)",
        "expected_output": "TypeError...",
        "explanation": "دالة randint تتعامل مع الأرقام فقط. لاختيار عنصر من قائمة، يجب استخدام الدالة random.choice() بدلاً منها."
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "أي دالة من مكتبة random تستخدم لترتيب عناصر القائمة عشوائياً (خلطها) بحيث تتغير القائمة الأصلية؟",
          "options": [
            "random.mix()",
            "random.scramble()",
            "random.shuffle()",
            "random.sort()"
          ],
          "correct_answer": "random.shuffle()",
          "explanation": "الدالة shuffle تقوم بتعديل القائمة الممررة لها مباشرة بتغيير ترتيب عناصرها بشكل عشوائي."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 38: مكتبة Random الممتعة",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 38: مكتبة Random الممتعة",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا نتعلم تحليل البيانات؟ في العصر الحديث، البيانات هي 'النفط الجديد'. الشركات تمتلك ملايين السجلات (مبيعات، مستخدمين، درجات طلاب). تحليل البيانات ببايثون يمكننا من استخراج معلومات مفيدة ورؤى استراتيجية من هذه الأرقام المجردة.",
      "description": "مقدمة في تحليل البيانات (Data Analysis). يعتمد تحليل البيانات في بايثون على استيراد البيانات من ملفات (مثل CSV أو Excel)، ثم تنظيفها (إزالة القيم المفقودة)، ثم استكشافها إحصائياً، وأخيراً رسمها لفهمها بشكل أفضل.",
      "prototype": "لا يوجد صيغة واحدة، بل هي عملية (Process). تبدأ بالقراءة، فالتنظيف، ثم التحليل.",
      "parameters": "البيانات المدخلة عادة تكون جداول ثنائية الأبعاد (صفوف وأعمدة).",
      "return_value": "الناتج يكون رؤية تحليلية، رسوم بيانية، أو مقاييس إحصائية (كمتوسط المبيعات).",
      "example": "import csv\nwith open('data.csv', 'r') as file:\n    reader = csv.reader(file)\n    for row in reader:\n        print(row)"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس مقدمة في تحليل البيانات لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "data = [10, 20, 30, 40, 50]\naverage = sum(data) / len(data)\nprint(\"المتوسط الحسابي:\", average)",
        "expected_output": "المتوسط الحسابي: 30.0",
        "explanation": "هذا أبسط مثال لتحليل البيانات: استخراج المتوسط الحسابي لقائمة من الأرقام باستخدام الدوال المدمجة في بايثون."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "data = [\"10\", \"20\", \"30\"]\ntotal = sum(data)\nprint(total)",
        "error_message": "TypeError: unsupported operand type(s) for +: 'int' and 'str'",
        "explanation": "عند قراءة البيانات من ملفات نصية كـ CSV، يتم قراءتها كنصوص. يجب تحويلها إلى أرقام (int أو float) قبل إجراء عمليات رياضية كدالة sum."
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "يظن المبتدئ أن تحليل البيانات يعني الذكاء الاصطناعي (AI). الذكاء الاصطناعي هو مرحلة متقدمة جداً، أما تحليل البيانات فهو الفهم الإحصائي والرياضي للمعلومات الحالية."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "تحليل أداء متجر إلكتروني: قراءة مبيعات عام كامل لمعرفة أكثر الأشهر التي زادت فيها المبيعات لتوجيه الحملات الإعلانية المستقبلية."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "data = [15, 20, None, 30]\n# لا يمكنك جمع القائمة بوجود None\nprint(sum(data))",
        "expected_output": "TypeError",
        "explanation": "في تحليل البيانات، غالباً ما توجد بيانات مفقودة (Missing Data). قبل الجمع يجب عليك تنظيف القائمة أو تصفيتها، مثلاً عبر list comprehension: [x for x in data if x is not None]."
      }
    ],
    "lesson_type": "ai_challenge",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "ما هي الخطوة الأهم والأولى قبل تطبيق العمليات الإحصائية على مجموعة بيانات خام (Raw Data) تم جمعها من الإنترنت؟",
          "options": [
            "طباعتها بالكامل على الشاشة",
            "رسمها كشكل بياني ثلاثي الأبعاد",
            "تنظيف البيانات (Data Cleaning) ومعالجة القيم المفقودة",
            "مشاركتها مع فريق العمل"
          ],
          "correct_answer": "تنظيف البيانات (Data Cleaning) ومعالجة القيم المفقودة",
          "explanation": "البيانات الخام غالباً ما تحتوي أخطاء وقيماً فارغة أو نصوصاً بدلاً من أرقام، لذلك تنظيفها هو الخطوة الأساسية الأولى."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 39: مقدمة في تحليل البيانات",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 39: مقدمة في تحليل البيانات",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا نتعلم مكتبة Pandas؟ بايثون الأساسي يواجه صعوبة وبطئاً في التعامل مع ملفات ضخمة جداً (مئات الآلاف من الصفوف). مكتبة Pandas توفر هيكل بيانات شبيه ببرنامج Excel، سريع جداً وقوي، مما جعلها المعيار الأول لتحليل البيانات في العالم.",
      "description": "مكتبة Pandas (مكتبة خارجية يجب تثبيتها عبر pip install pandas). توفر هياكل بيانات متقدمة أهمها DataFrame وهو عبارة عن جدول مكون من صفوف وأعمدة. تتيح لك قراءة ملفات CSV و Excel بأسطر قليلة، وإجراء عمليات بحث، تصفية، وترتيب بسرعات فائقة.",
      "prototype": "import pandas as pd\ndf = pd.read_csv('filename.csv')\nprint(df.head())",
      "parameters": "df: يرمز لـ DataFrame. read_csv: دالة لقراءة ملفات البيانات.",
      "return_value": "كائن من نوع DataFrame يحتوي على البيانات المهيكلة.",
      "example": "import pandas as pd\ndata = {'Name': ['Ahmad', 'Omar'], 'Age': [20, 22]}\ndf = pd.DataFrame(data)\nprint(df)"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس مكتبة Pandas السريعة لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "import pandas as pd\ndata = {'City': ['Riyadh', 'Jeddah', 'Cairo'], 'Population': [7, 4, 10]}\ndf = pd.DataFrame(data)\nprint(df[df['Population'] > 5])",
        "expected_output": "يُطبع الجدول ولكن فقط للمدن التي يتجاوز عدد سكانها 5.",
        "explanation": "تصفية البيانات (Filtering) في Pandas سهلة جداً. الكود يعرض الصفوف التي يتحقق فيها شرط أن عمود السكان أكبر من 5."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "import pandas\ndf = pandas.read_csv('data.csv')\nprint(df.head)",
        "error_message": "<bound method NDFrame.head of ...>",
        "explanation": "دالة head() تستخدم لعرض أول 5 صفوف. نسيان الأقواس في النهاية () لن يعرض البيانات بل سيطبع معلومات عن الدالة نفسها في الذاكرة."
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "يعتقد البعض أن Pandas هي قاعدة بيانات. Pandas تعمل على الذاكرة العشوائية (RAM) المؤقتة، ولا تصلح لتخزين البيانات بشكل دائم وتحديثها بشكل متزامن مثل SQL."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "قراءة ملف Excel يحتوي على بيانات موظفي شركة مكون من 10 آلاف صف، واستخراج متوسط الرواتب لكل قسم (Group By) في ثوانٍ معدودة."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})\n# كيف تطبع عمود 'A' فقط؟\nprint(df.'A')",
        "expected_output": "SyntaxError",
        "explanation": "للوصول إلى عمود محدد في DataFrame لا نستخدم النقطة مع نص، بل نستخدم الأقواس المربعة كالقواميس: print(df['A']) أو المباشر print(df.A) بدون علامات التنصيص."
      }
    ],
    "lesson_type": "milestone",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "ما هو الاسم المتعارف عليه والمستخدم بشكل شبه دائم لاختصار مكتبة pandas عند استيرادها في مجتمع بايثون؟",
          "options": [
            "import pandas as p",
            "import pandas as pan",
            "import pandas as pd",
            "import pandas as df"
          ],
          "correct_answer": "import pandas as pd",
          "explanation": "الاختصار pd هو المعيار (Standard Convention) لتقليل الكتابة وجعل الكود مقروءاً ومألوفاً للمبرمجين الآخرين."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 40: مكتبة Pandas السريعة",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 40: مكتبة Pandas السريعة",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا نحتاج إلى معالجة النصوص المتقدمة؟ في الكثير من الأحيان، البيانات التي نستقبلها من المستخدمين أو الملفات تكون غير منظمة وبها فراغات أو رموز غير مرغوب فيها، ونحتاج لتنظيفها وتحليلها بكفاءة.",
      "description": "معالجة النصوص في بايثون تتيح لك التلاعب بالسلاسل النصية باستخدام دوال مدمجة مثل `strip()` لإزالة الفراغات، `split()` للتقسيم، و `join()` للتجميع، بالإضافة إلى طرق متقدمة في تنسيق النصوص.",
      "prototype": "cleaned_text = '-'.join(text.strip().split())",
      "parameters": "text: النص الأصلي. المعاملات في دوال مثل split و join تحدد الفاصل المستخدم.",
      "return_value": "ترجع هذه الدوال غالباً نصاً جديداً (String) أو قائمة من النصوص (List of Strings) لأن النصوص غير قابلة للتعديل (Immutable).",
      "example": "text = '  Python   is   Awesome  '\nwords = text.split()\nresult = ' '.join(words)\nprint(result)  # Output: Python is Awesome"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس معالجة النصوص المتقدمة لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
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
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "ما هي نتيجة تنفيذ الكود: '*'.join(['a', 'b', 'c']) ؟",
          "options": [
            "'a b c'",
            "'abc'",
            "'a*b*c'",
            "خطأ برمجي"
          ],
          "correct_answer": "'a*b*c'",
          "explanation": "دالة join تقوم بربط عناصر القائمة باستخدام السلسلة النصية التي استُدعيت منها (وهي هنا النجمة)."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 41: معالجة النصوص المتقدمة",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 41: معالجة النصوص المتقدمة",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "كيف نستخرج جميع أرقام الهواتف أو رسائل البريد الإلكتروني من نص طويل يتكون من آلاف الأسطر؟ هنا تبرز قوة التعبيرات العادية (Regular Expressions).",
      "description": "التعبيرات العادية، أو Regex، هي لغة صغيرة تُستخدم داخل بايثون (عبر مكتبة `re`) للبحث عن أنماط نصية معقدة، ومطابقتها، أو استبدالها بشكل مرن جداً ودقيق.",
      "prototype": "import re\nmatch = re.search(r'pattern', text)",
      "parameters": "pattern: النمط المراد البحث عنه (مثل r'\\d+' للأرقام). text: النص الذي نبحث فيه.",
      "return_value": "ترجع الدوال كائن Match إذا وجدت تطابقاً، أو ترجع None في حال عدم وجود تطابق. دالة findall ترجع قائمة بالتطابقات.",
      "example": "import re\ntext = 'Contact me at admin@example.com or info@test.org'\nemails = re.findall(r'[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}', text)\nprint(emails)  # Output: ['admin@example.com', 'info@test.org']"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس تعبيرات عادية (Regex) لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "import re\nphone = '+966-555-1234'\nis_valid = bool(re.match(r'^\\+966-\\d{3}-\\d{4}$', phone))\nprint(is_valid)",
        "expected_output": "True",
        "explanation": "يتحقق النمط من أن النص يبدأ بـ +966- متبوعاً بثلاثة أرقام، شرطة، ثم أربعة أرقام."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "import re\ntext = 'Price is $50'\nresult = re.search('$', text)\nprint(result.group())",
        "error_message": "AttributeError: 'NoneType' object has no attribute 'group'",
        "explanation": "الرمز $ في التعبيرات العادية يعني 'نهاية السطر'. للبحث عن الرمز الحقيقي يجب استخدام علامة الهروب: r'\\$'"
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
        "code": "import re\ntext = 'Year 2023, Month 10'\n# المطلوب استخراج جميع الأرقام من النص كأعداد\nnumbers = re.search(r'\\d+', text)",
        "expected_output": "['2023', '10']",
        "explanation": "تلميح: دالة search ترجع أول تطابق فقط. استخدم دالة findall للبحث عن جميع التطابقات في النص."
      }
    ],
    "lesson_type": "mini_mission",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "ماذا يمثل التعبير العادي r'\\d+' في مكتبة re؟",
          "options": [
            "حرف واحد فقط",
            "رقم واحد أو أكثر",
            "مسافة فارغة",
            "أحرف وأرقام معاً"
          ],
          "correct_answer": "رقم واحد أو أكثر",
          "explanation": "الرمز \\d يعني أي رقم من 0-9، وعلامة + تعني تكرار العنصر السابق مرة واحدة أو أكثر."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 42: تعبيرات عادية (Regex)",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 42: تعبيرات عادية (Regex)",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "كيف تحسب عمر مستخدم بناءً على تاريخ ميلاده؟ أو كيف تعرف الوقت المستغرق لتنفيذ كود معين؟ هنا تظهر أهمية التعامل مع التواريخ والأوقات.",
      "description": "توفر بايثون وحدة `datetime` المدمجة التي تسمح لك بإنشاء، قراءة، وتعديل التواريخ والأوقات، وكذلك إجراء العمليات الحسابية عليها كجمع وطرح الفترات الزمنية.",
      "prototype": "from datetime import datetime\nnow = datetime.now()",
      "parameters": "الدوال تقبل معاملات مثل السنة، الشهر، واليوم. أو تقبل نصوص مع صيغة محددة (Format string).",
      "return_value": "ترجع كائنات من نوع datetime أو date أو timedelta والتي تحتوي على خصائص ودوال مساعدة.",
      "example": "from datetime import datetime, timedelta\ntoday = datetime.now()\nfuture_date = today + timedelta(days=10)\nprint('Date after 10 days:', future_date.strftime('%Y-%m-%d'))"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس التعامل مع التواريخ (Datetime) لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
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
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "أي الكائنات التالية تُستخدم لتمثيل فرق زمني أو مدة زمنية في بايثون؟",
          "options": [
            "datetime",
            "date",
            "timedelta",
            "time"
          ],
          "correct_answer": "timedelta",
          "explanation": "الكائن timedelta يمثل مدة زمنية مثل '5 أيام و3 ساعات' ويستخدم في العمليات الحسابية على التواريخ."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 43: التعامل مع التواريخ (Datetime)",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 43: التعامل مع التواريخ (Datetime)",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "المستخدم العادي لا يحب التعامل مع الشاشات السوداء وسطر الأوامر (Terminal). الواجهات الرسومية (GUIs) توفر نوافذ، أزراراً، ونصوصاً لتجربة مستخدم أفضل.",
      "description": "مكتبة `tkinter` هي المكتبة القياسية المدمجة في بايثون لإنشاء واجهات المستخدم الرسومية. تعتمد على إنشاء نافذة رئيسية وإضافة 'عناصر' (Widgets) مثل الأزرار ومربعات الإدخال إليها.",
      "prototype": "import tkinter as tk\nwindow = tk.Tk()\nwindow.mainloop()",
      "parameters": "عناصر الواجهة تقبل معاملات مثل النص (text)، اللون (bg, fg)، والدالة المرتبطة بالنقر (command).",
      "return_value": "الدوال الأساسية لا ترجع قيماً عادة، بل تقوم بتعديل حالة النافذة الرسومية المعروضة على الشاشة.",
      "example": "import tkinter as tk\n\ndef greet():\n    print('Hello World!')\n\nroot = tk.Tk()\nroot.title('My First App')\nbtn = tk.Button(root, text='Click Me', command=greet)\nbtn.pack()\n# root.mainloop() # يتم تفعيله لتشغيل النافذة"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس مقدمة للواجهات الرسومية لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
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
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "ما الغرض من دالة ()mainloop في مكتبة tkinter؟",
          "options": [
            "إنهاء البرنامج",
            "إنشاء النافذة الأساسية",
            "تغيير لون النافذة",
            "تشغيل حلقة الأحداث لإبقاء النافذة مفتوحة"
          ],
          "correct_answer": "تشغيل حلقة الأحداث لإبقاء النافذة مفتوحة",
          "explanation": "دالة mainloop تستمر في مراقبة تفاعلات المستخدم (مثل النقر والكتابة) وتحافظ على تشغيل التطبيق."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 44: مقدمة للواجهات الرسومية",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 44: مقدمة للواجهات الرسومية",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "كيف نصنع تفاعلاً حياً على الشاشة كتحريك شخصية أو الاستجابة لضغطات لوحة المفاتيح؟ برمجة الألعاب هي تطبيق رائع للمنطق البرمجي.",
      "description": "استخدام مكتبات مثل `turtle` (للمبتدئين) أو `pygame` يسمح لنا برسم الكائنات على الشاشة، تحديث مواقعها باستمرار، والاستجابة للمدخلات لإنشاء ألعاب بسيطة.",
      "prototype": "import turtle\nplayer = turtle.Turtle()\nplayer.forward(100)",
      "parameters": "دوال الحركة تأخذ قيماً بالبكسل، ودوال الزوايا تأخذ الدرجات. ودوال الأحداث تأخذ أسماء المفاتيح.",
      "return_value": "تقوم الدوال بتغيير الحالة المرئية للكائنات وتحديث الإحداثيات على الشاشة.",
      "example": "import turtle\nt = turtle.Turtle()\nfor _ in range(4):\n    t.forward(100)\n    t.right(90)\nturtle.done()"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس بناء ألعاب بسيطة لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
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
    "lesson_type": "project",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "ما هي الخطوة الأساسية للسماح لنافذة turtle باستقبال ضغطات المفاتيح؟",
          "options": [
            "turtle.start()",
            "window.listen()",
            "turtle.keyboard()",
            "window.update()"
          ],
          "correct_answer": "window.listen()",
          "explanation": "دالة listen() تخبر الشاشة أن تبدأ في التقاط أحداث لوحة المفاتيح."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 45: بناء ألعاب بسيطة",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 45: بناء ألعاب بسيطة",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "بعد تعلم العديد من المفاهيم المتفرقة، كيف نجمعها معاً في برنامج واحد متكامل وقابل للصيانة؟",
      "description": "هذه المراجعة تربط الأساسيات مثل المتغيرات، الدوال، الشروط، الحلقات، ومعالجة الأخطاء (try/except) مع هياكل البيانات (قوائم وقواميس) لبناء سكريبت واقعي متماسك.",
      "prototype": "def main():\n    try:\n        # المنطق الأساسي\n    except Exception as e:\n        # معالجة الخطأ\n\nif __name__ == '__main__':\n    main()",
      "parameters": "التصميم الجيد يقسم المهام إلى دوال تأخذ مدخلات محددة وترجع مخرجات واضحة.",
      "return_value": "برنامج يعمل بكفاءة، قابل للقراءة، ولا يتوقف فجأة عند حدوث أخطاء.",
      "example": "def calculate_average(grades):\n    if not grades: return 0\n    return sum(grades) / len(grades)\n\ndef main():\n    data = {'Ali': [90, 80], 'Sara': []}\n    for student, grades in data.items():\n        avg = calculate_average(grades)\n        print(f'{student}: {avg}')\n\nif __name__ == '__main__':\n    main()"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس مراجعة شاملة للمفاهيم لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
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
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "ما فائدة الشرط if __name__ == '__main__': في نهاية الملفات؟",
          "options": [
            "تسمية الملف الرئيسي",
            "تسريع تنفيذ البرنامج",
            "منع تنفيذ الكود عند استيراد الملف كمكتبة",
            "تشغيل حلقة لا نهائية"
          ],
          "correct_answer": "منع تنفيذ الكود عند استيراد الملف كمكتبة",
          "explanation": "هذا الشرط يضمن أن الدوال والبرنامج الرئيسي يُنفذ فقط إذا تم تشغيل الملف مباشرة وليس إذا تم استيراده (import) في ملف آخر."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 46: مراجعة شاملة للمفاهيم",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 46: مراجعة شاملة للمفاهيم",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "كيف ترتب قائمة طويلة من الأسماء أبجدياً أو أرقام تصاعدياً لسهولة عرضها أو البحث فيها؟",
      "description": "خوارزميات الفرز هي طرق رياضية وبرمجية لإعادة ترتيب العناصر. بايثون تملك دوال فعالة مدمجة مثل `sorted()`، لكن فهم الخوارزميات (كالفرز الفقاعي) يطور التفكير المنطقي.",
      "prototype": "sorted_list = sorted(original_list)\n# أو\noriginal_list.sort()",
      "parameters": "تقبل مفاتيح ترتيب مخصصة (key) وخيار للترتيب العكسي (reverse=True).",
      "return_value": "ترجع sorted() قائمة جديدة مرتبة، بينما sort() تعدل القائمة الأصلية في مكانها (In-place).",
      "example": "words = ['banana', 'apple', 'cherry']\n# الترتيب حسب طول الكلمة\nsorted_words = sorted(words, key=len)\nprint(sorted_words)  # Output: ['apple', 'banana', 'cherry']"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس خوارزميات الفرز (Sorting) لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
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
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "الفرق بين list.sort() و دالة sorted(list) هو:",
          "options": [
            "لا يوجد فرق",
            "sort() ترجع قائمة جديدة، sorted() تعدل القائمة الأصلية",
            "sort() تعدل القائمة الأصلية، sorted() ترجع قائمة جديدة",
            "sorted() تعمل فقط مع الأرقام"
          ],
          "correct_answer": "sort() تعدل القائمة الأصلية، sorted() ترجع قائمة جديدة",
          "explanation": "دائما نستخدم sorted() عندما نريد الاحتفاظ بالنسخة الأصلية من البيانات، ونستخدم sort() لتوفير الذاكرة وتعديل البيانات في مكانها."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 47: خوارزميات الفرز (Sorting)",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 47: خوارزميات الفرز (Sorting)",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "إذا كان لديك دليل هاتف يحتوي على ملايين الأسماء، كيف تعثر على اسم محدد في أجزاء من الثانية؟",
      "description": "خوارزميات البحث تتيح لك العثور على العناصر بكفاءة. تشمل البحث الخطي (المرور على العناصر واحداً تلو الآخر) والبحث الثنائي (Binary Search) الذي يقسم البيانات المنظمة إلى النصف مراراً لتسريع البحث.",
      "prototype": "def binary_search(arr, target):\n    # كود تحديد البداية والنهاية والمنتصف",
      "parameters": "تحتاج الخوارزميات لقائمة البيانات (arr) والعنصر المراد البحث عنه (target). البحث الثنائي يتطلب أن تكون البيانات مرتبة.",
      "return_value": "ترجع موقع (Index) العنصر إذا تم العثور عليه، أو قيمة مثل -1 أو None إذا لم يكن موجوداً.",
      "example": "def linear_search(arr, target):\n    for i in range(len(arr)):\n        if arr[i] == target:\n            return i\n    return -1\n\nprint(linear_search([10, 20, 30], 20))  # Output: 1"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس خوارزميات البحث (Searching) لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
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
    "lesson_type": "debugging",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "كم عدد الخطوات التقريبية التي يحتاجها البحث الثنائي للعثور على عنصر في قائمة مرتبة تحتوي على 100 عنصر؟",
          "options": [
            "حوالي 100 خطوة",
            "حوالي 7 خطوات",
            "خطوة واحدة",
            "50 خطوة"
          ],
          "correct_answer": "حوالي 7 خطوات",
          "explanation": "البحث الثنائي يقلل النطاق للنصف في كل مرة. لوغاريتم 100 للأساس 2 يقارب 7 (2^7 = 128)."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 48: خوارزميات البحث (Searching)",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 48: خوارزميات البحث (Searching)",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا يعمل برنامجك بسرعة عند تجربته على 10 عناصر، ولكنه يتجمد عندما تعطيه مليون عنصر؟ الجواب في تعقيد الخوارزمية.",
      "description": "تعقيد الخوارزميات (Time Complexity) باستخدام رمز Big O، هو معيار لقياس كيف يتزايد وقت تشغيل الكود مع زيادة حجم المدخلات.",
      "prototype": "O(1): وقت ثابت\nO(n): وقت خطي\nO(n^2): وقت تربيعي",
      "parameters": "المتغير n يمثل حجم البيانات (عدد العناصر في القائمة أو السلسلة).",
      "return_value": "مقياس نظري وليس كوداً يعمل، يخبرك بمدى كفاءة البرنامج.",
      "example": "# O(n) Time Complexity\ndef print_all(arr):\n    for item in arr:  # تعتمد على حجم القائمة\n        print(item)"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس تعقيد الخوارزميات (Time Complexity) لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
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
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "أي من التعقيدات الزمنية التالية يُعتبر الأبطأ والأقل كفاءة عند التعامل مع بيانات ضخمة؟",
          "options": [
            "O(1)",
            "O(n)",
            "O(log n)",
            "O(n^2)"
          ],
          "correct_answer": "O(n^2)",
          "explanation": "الوقت التربيعي O(n^2) يتضاعف بشكل هائل، فإذا زادت البيانات 10 أضعاف، زاد الوقت 100 ضعف."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 49: تعقيد الخوارزميات (Time Complexity)",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 49: تعقيد الخوارزميات (Time Complexity)",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "القوائم والقواميس رائعة، لكن ماذا لو أردت إنشاء زر 'تراجع' (Undo) في برنامجك؟ أو معالجة طلبات الطباعة بالترتيب؟ هنا نحتاج هياكل بيانات متقدمة.",
      "description": "تشمل الهياكل المتقدمة المكدسات (Stacks) التي تتبع مبدأ LIFO (الأخير دخولا يخرج أولاً)، والطوابير (Queues) التي تتبع مبدأ FIFO (الأول دخولا يخرج أولاً).",
      "prototype": "from collections import deque\nqueue = deque()\nqueue.append(1)\nqueue.popleft()",
      "parameters": "تقبل عناصر لإضافتها (append) أو إزالتها من اليمين أو اليسار (pop, popleft).",
      "return_value": "كائنات سريعة لتخزين ومعالجة البيانات من الأطراف بكفاءة O(1).",
      "example": "stack = []\nstack.append('page1')\nstack.append('page2')\nlast_visited = stack.pop()  # يعيد 'page2'\nprint('Back to:', stack[-1])  # Output: Back to: page1"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس هياكل البيانات المتقدمة لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
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
    "lesson_type": "capstone",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "أي هيكل بيانات مناسب أكثر لبرمجة خاصية 'التراجع' (Undo) في برامج تحرير النصوص؟",
          "options": [
            "الطابور Queue",
            "المكدس Stack",
            "المجموعة Set",
            "القاموس Dictionary"
          ],
          "correct_answer": "المكدس Stack",
          "explanation": "التراجع يعتمد على التراجع عن أحدث إجراء تم تنفيذه أولاً، وهذا يطابق مبدأ الأخير دخولاً يخرج أولاً (LIFO) في المكدسات."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 50: هياكل البيانات المتقدمة",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 50: هياكل البيانات المتقدمة",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا نبني نظام إدارة مستخدمين؟ (تطبيق عملي لربط المفاهيم السابقة مثل القواميس، الدوال، والملفات).",
      "description": "في هذا الدرس، سنقوم ببناء تطبيق عملي مصغر في بايثون يتيح لنا إدارة المستخدمين. سنستخدم القواميس لتخزين بيانات المستخدمين، والدوال لإضافة مستخدم جديد، عرض المستخدمين، أو حذفهم. هذا التطبيق يدمج العديد من الأساسيات التي تعلمناها ويهيئنا للتعامل مع الأنظمة الحقيقية.",
      "prototype": "users = {}\ndef add_user(uid, name):\n    pass",
      "parameters": "المتغيرات مثل قاموس المستخدمين (users) لجمع البيانات، ومعاملات الدوال مثل اسم المستخدم ورقمه التعريفي.",
      "return_value": "التطبيق يعرض رسائل نصية توضح نجاح العمليات (إضافة/حذف) أو يطبع قائمة المستخدمين.",
      "example": "users = {}\n\ndef add_user(user_id, name):\n    users[user_id] = name\n    print(f'تمت إضافة {name}')\n\nadd_user(1, 'أحمد')\nprint(users)"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس تطبيق عملي: نظام إدارة مستخدمين لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
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
    "lesson_type": "code_reading",
    "exam_data": {
      "title": "اختبار إدارة المستخدمين",
      "questions": [
        {
          "question": "ما هو هيكل البيانات الأنسب لتخزين مستخدمين بمعرفات (IDs) فريدة تتيح البحث السريع؟",
          "options": [
            "القوائم (Lists)",
            "القواميس (Dictionaries)",
            "السلاسل النصية (Strings)",
            "المجموعات (Sets)"
          ],
          "correct_answer": "القواميس (Dictionaries)",
          "explanation": "القواميس تعتمد على أزواج (مفتاح: قيمة) مما يتيح الوصول للبيانات بسرعة فائقة عبر المفتاح الفريد."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 51: تطبيق عملي: نظام إدارة مستخدمين",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 51: تطبيق عملي: نظام إدارة مستخدمين",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا نستخدم قواعد البيانات SQLite مع بايثون؟ (لحفظ البيانات بشكل دائم ومنظم وبناء تطبيقات قوية).",
      "description": "تأتي بايثون بمكتبة مدمجة اسمها sqlite3 تتيح لك إنشاء قواعد بيانات علائقية. بدلاً من حفظ البيانات في ملفات نصية تفقد تنظيمها مع الوقت، تمنحك قواعد البيانات القدرة على تخزين وجلب البيانات بسرعة وموثوقية في ملف واحد محلي (.db).",
      "prototype": "import sqlite3\nconn = sqlite3.connect('test.db')\ncur = conn.cursor()",
      "parameters": "نمرر اسم الملف لدالة connect. إذا لم يكن موجوداً سيتم إنشاؤه.",
      "return_value": "ترجع كائن الاتصال Connection وكائن المؤشر Cursor لتنفيذ الأوامر.",
      "example": "import sqlite3\nconn = sqlite3.connect('store.db')\nc = conn.cursor()\nc.execute('CREATE TABLE IF NOT EXISTS items (name TEXT, price REAL)')\nconn.commit()\nconn.close()"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس التعامل مع قواعد البيانات SQLite لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
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
    "lesson_type": "scenario",
    "exam_data": {
      "title": "اختبار SQLite",
      "questions": [
        {
          "question": "ما هي الدالة المسؤولة عن حفظ التعديلات في قاعدة البيانات بشكل نهائي في sqlite3؟",
          "options": [
            "conn.close()",
            "conn.save()",
            "conn.commit()",
            "conn.execute()"
          ],
          "correct_answer": "conn.commit()",
          "explanation": "الدالة commit() تقوم بحفظ وإرسال التعديلات التي تم إجراؤها على قاعدة البيانات."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 52: التعامل مع قواعد البيانات SQLite",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 52: التعامل مع قواعد البيانات SQLite",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "كيف نبحث عن البيانات ونسترجعها من قاعدة البيانات؟ (الاستعلامات الأساسية).",
      "description": "بعد إنشاء قاعدة البيانات، نحتاج إلى استخراج البيانات منها أو تحديثها. الاستعلامات الأساسية (SQL Queries) مثل SELECT لجلب البيانات، و WHERE لتصفية النتائج، و INSERT لإضافة بيانات جديدة هي لغة التخاطب مع قاعدة البيانات.",
      "prototype": "cursor.execute(\"SELECT * FROM table_name WHERE condition\")",
      "parameters": "نص الاستعلام (Query String) الذي يحتوي على أوامر SQL.",
      "return_value": "في حالة SELECT، يمكننا استخدام fetchall() أو fetchone() لاسترجاع النتائج كقوائم.",
      "example": "import sqlite3\nconn = sqlite3.connect('store.db')\ncur = conn.cursor()\ncur.execute('SELECT name FROM items WHERE price > 50')\nfor row in cur.fetchall():\n    print(row[0])"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس الاستعلامات الأساسية لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
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
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار الاستعلامات",
      "questions": [
        {
          "question": "لماذا نستخدم علامة الاستفهام (?) في استعلامات SQL عبر بايثون بدلاً من دمج النصوص (f-strings)؟",
          "options": [
            "لأنها أسرع في التنفيذ",
            "لحماية القاعدة من هجمات حقن SQL",
            "لأن بايثون لا تدعم السلاسل النصية هنا",
            "لتقليل مساحة الكود"
          ],
          "correct_answer": "لحماية القاعدة من هجمات حقن SQL",
          "explanation": "استخدام المعاملات (?) يقوم بتنظيف المدخلات برمجياً ويمنع المخترقين من تنفيذ أكواد خبيثة."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 53: الاستعلامات الأساسية",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 53: الاستعلامات الأساسية",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "كيف نتصل بقاعدة البيانات بشكل آمن ومحترف؟ (إدارة الاتصال).",
      "description": "التوصيل بقاعدة البيانات يجب أن يتم بحذر. من المهم جداً التأكد من إغلاق الاتصال بعد الانتهاء منه لتجنب تلف الملفات أو قفل القاعدة (Database lock). استخدام سياق with يضمن إغلاق الاتصال تلقائياً حتى في حالة حدوث أخطاء برمجية.",
      "prototype": "with sqlite3.connect('db.sqlite') as conn:\n    cur = conn.cursor()",
      "parameters": "كائن الاتصال يمكن استخدامه داخل جملة with كمدير سياق (Context Manager).",
      "return_value": "إدارة تلقائية للاتصال حيث تُنفذ عمليات الإغلاق بدون الحاجة لكتابة close().",
      "example": "import sqlite3\ntry:\n    with sqlite3.connect('app.db') as conn:\n        conn.execute('INSERT INTO users VALUES (?, ?)', (1, 'Omar'))\nexcept sqlite3.Error as e:\n    print('حدث خطأ:', e)"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس توصيل بايثون بقاعدة بيانات لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
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
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار إدارة الاتصال",
      "questions": [
        {
          "question": "ما هي الفائدة الرئيسية لاستخدام with عند التعامل مع قواعد البيانات؟",
          "options": [
            "تشفير البيانات تلقائياً",
            "ضمان إدارة الموارد وإغلاق الملفات بأمان",
            "منع اختراقات SQL تلقائياً",
            "جعل البرنامج أسرع 10 مرات"
          ],
          "correct_answer": "ضمان إدارة الموارد وإغلاق الملفات بأمان",
          "explanation": "جملة with تعتبر Context Manager وتضمن إغلاق وتنظيف الموارد حتى لو حدث خطأ مفاجئ."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 54: توصيل بايثون بقاعدة بيانات",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 54: توصيل بايثون بقاعدة بيانات",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "كيف نطبق ما تعلمناه عن القواعد لبناء متجر إلكتروني؟",
      "description": "في هذا التطبيق العملي، سنقوم بتصميم نظام مبسط لمتجر. سيتضمن جداول للمنتجات، وجدول للعملاء، وسنقوم بربطها لكتابة كود بايثون يتيح إضافة منتج للسلة وحساب الإجمالي. هذا يجمع مفاهيم SQL وبايثون.",
      "prototype": "def add_product(name, price):\n    cur.execute('INSERT INTO products (name, price) VALUES (?, ?)', (name, price))",
      "parameters": "بيانات المنتج والعميل التي يتم تمريرها للدوال والتأكد من إدراجها بشكل آمن.",
      "return_value": "النظام يقوم بإجراء التعديلات في الجداول واسترجاع الإجمالي للمستخدم.",
      "example": "def get_total(user_id):\n    cur.execute('SELECT SUM(price) FROM cart WHERE user_id = ?', (user_id,))\n    total = cur.fetchone()[0]\n    return total if total else 0"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس تطبيق: متجر إلكتروني صغير لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
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
    "lesson_type": "sandbox",
    "exam_data": {
      "title": "تطبيق المتجر",
      "questions": [
        {
          "question": "إذا احتجت لجمع إجمالي أسعار منتجات مستخدم في سلة التسوق، ما هي دالة SQL الأنسب للاستخدام مع بايثون؟",
          "options": [
            "COUNT()",
            "TOTAL()",
            "SUM()",
            "MAX()"
          ],
          "correct_answer": "SUM()",
          "explanation": "دالة SUM في SQL تقوم بجمع قيم عمود معين مع بعضها لتعطيك المجموع الكلي."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 55: تطبيق: متجر إلكتروني صغير",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 55: تطبيق: متجر إلكتروني صغير",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "كيف ننتقل من برامج تعمل في الشاشة السوداء إلى مواقع يزورها الناس؟",
      "description": "تطوير الويب باستخدام بايثون يتيح لك بناء الجانب الخلفي (Backend) للمواقع الإلكترونية. وهو الجزء المخفي الذي يعالج طلبات المستخدمين (Requests)، يتصل بقاعدة البيانات، ويُرسل الرد (Response) ليتم عرضه في المتصفح.",
      "prototype": "لا يوجد كود بايثون محدد هنا، بل المفاهيم المعمارية (HTTP, Server, Client).",
      "parameters": "مفاهيم الطلبات (GET, POST) والردود (200 OK, 404 Not Found).",
      "return_value": "المتصفح يتلقى كود HTML والبيانات ويقوم بعرضها للمستخدم بطريقة جذابة.",
      "example": "# مثال لفكرة الطلب والرد:\n# Client (Browser) يرسل: GET /home\n# Server (Python) يستقبل ويعالج\n# Server يرسل: 200 OK مع محتوى HTML"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس مقدمة في تطوير الويب لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
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
    "lesson_type": "mini_mission",
    "exam_data": {
      "title": "مقدمة تطوير الويب",
      "questions": [
        {
          "question": "ما هو دور لغة بايثون بشكل عام في تطوير الويب؟",
          "options": [
            "تلوين وتنسيق الصفحات",
            "بناء الجانب الخلفي (Backend) والتعامل مع البيانات",
            "إنشاء التأثيرات الحركية (Animations) في المتصفح",
            "بناء تطبيقات آيفون"
          ],
          "correct_answer": "بناء الجانب الخلفي (Backend) والتعامل مع البيانات",
          "explanation": "تُستخدم بايثون في الخلفية لإدارة قواعد البيانات، المنطق، وحماية الموقع."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 56: مقدمة في تطوير الويب",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 56: مقدمة في تطوير الويب",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا نتعلم إطار عمل Flask؟ (لبناء تطبيقات ويب بسرعة وسهولة).",
      "description": "Flask هو إطار عمل (Framework) خفيف ومصغر (Microframework) في بايثون لتطوير الويب. يمنحك الأدوات الأساسية لبدء خادم الويب الخاص بك وتلقي الطلبات دون تعقيدات زائدة، مما يجعله مثالياً للمبتدئين وللتطبيقات الصغيرة والمتوسطة.",
      "prototype": "from flask import Flask\napp = Flask(__name__)",
      "parameters": "المتغير __name__ يُمرر لـ Flask ليعرف أين يوجد التطبيق الأساسي للبحث عن الملفات الإضافية والقوالب.",
      "return_value": "كائن app الذي يمثل تطبيق الويب الخاص بنا، ونستخدمه لربط المسارات بالدوال.",
      "example": "from flask import Flask\napp = Flask(__name__)\n\n@app.route('/')\ndef home():\n    return 'مرحباً بك في عالم تطوير الويب!'"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس أساسيات Flask لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
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
    "lesson_type": "concept",
    "exam_data": {
      "title": "أساسيات Flask",
      "questions": [
        {
          "question": "ما الغرض من استخدام المزخرف (Decorator) @app.route في Flask؟",
          "options": [
            "تشغيل خادم الويب",
            "ربط رابط (URL) معين بدالة بايثون لتنفيذها",
            "إخفاء الدالة عن المستخدمين",
            "تلوين مخرجات الدالة في المتصفح"
          ],
          "correct_answer": "ربط رابط (URL) معين بدالة بايثون لتنفيذها",
          "explanation": "المزخرف يوجه Flask للرد على الطلب الوارد لرابط معين بتشغيل الدالة التي تليه مباشرة."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 57: أساسيات Flask",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 57: أساسيات Flask",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "كيف نجعل الكود متاحاً على المتصفح؟ (تشغيل الخادم المحلي).",
      "description": "بعد كتابة الكود الأساسي في Flask، نحتاج إلى تشغيل الخادم (Server). دالة app.run() تقوم ببدء تشغيل خادم تطوير محلي على جهازك، مما يتيح لك فتح المتصفح وتجربة موقعك (عبر رابط localhost أو 127.0.0.1) قبل نشره للإنترنت للعامة.",
      "prototype": "app.run(debug=True, port=5000)",
      "parameters": "debug=True يعيد تشغيل الخادم تلقائياً عند تغيير الكود ويظهر الأخطاء بوضوح على المتصفح. port يحدد المنفذ.",
      "return_value": "تطبيق يظل قيد التشغيل (Running State) يستمع للطلبات القادمة إلى المنفذ المحدد.",
      "example": "from flask import Flask\napp = Flask(__name__)\n\n@app.route('/')\ndef home(): return 'يعمل!' \n\nif __name__ == '__main__':\n    app.run(debug=True)"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس بناء أول خادم ويب لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
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
    "lesson_type": "concept",
    "exam_data": {
      "title": "خادم التطوير المحلي",
      "questions": [
        {
          "question": "ما الفائدة الرئيسية من إضافة الخاصية (debug=True) أثناء تطوير تطبيق Flask؟",
          "options": [
            "لجعل التطبيق سريعاً جداً",
            "لإعادة تشغيل الخادم تلقائياً عند أي تعديل وعرض تفاصيل الأخطاء بالمتصفح",
            "لحماية الموقع من الهجمات والفيروسات",
            "لتشغيل التطبيق على منصات الجوال"
          ],
          "correct_answer": "لإعادة تشغيل الخادم تلقائياً عند أي تعديل وعرض تفاصيل الأخطاء بالمتصفح",
          "explanation": "وضع التصحيح يسهل بشكل كبير عملية اكتشاف الأخطاء ويوفر الوقت عبر إعادة التحديث التلقائي."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 58: بناء أول خادم ويب",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 58: بناء أول خادم ويب",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "كيف نبني مسارات تفاعلية تتغير بناءً على المستخدم؟ (التعامل مع الـ Routes).",
      "description": "لا يجب أن تكون مسارات الموقع ثابتة دائماً. في Flask يمكننا جعل المسارات ديناميكية (Dynamic Routes) لتلقي معلومات من الرابط، مثل رقم المقال أو اسم المستخدم. كما يمكننا تحديد نوع الطلبات التي يقبلها المسار مثل طلبات الإرسال (POST) لاستقبال البيانات من النماذج.",
      "prototype": "@app.route('/user/<username>', methods=['GET'])\ndef show_user_profile(username):\n    pass",
      "parameters": "في المسار نستخدم أقواس الزاوية < > لتحديد متغير يتم تمريره كمعامل للدالة المرتبطة.",
      "return_value": "محتوى يعتمد على القيمة التي أُدخلت في الرابط المتغير.",
      "example": "@app.route('/post/<int:post_id>')\ndef show_post(post_id):\n    # سيطابق فقط الأرقام الصحيحة\n    return f'المقالة رقم: {post_id}'"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس التعامل مع الـ Routes لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
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
    "lesson_type": "concept",
    "exam_data": {
      "title": "التعامل مع المسارات",
      "questions": [
        {
          "question": "كيف يمكننا جعل جزء من الرابط (URL) متغيراً ويُمرر للدالة في Flask؟",
          "options": [
            "بوضعه بين علامتي اقتباس \" \"",
            "بوضعه بين أقواس مربعة [ ]",
            "بوضعه بين أقواس زاوية < > مثل <username>",
            "باستخدام علامة #"
          ],
          "correct_answer": "بوضعه بين أقواس زاوية < > مثل <username>",
          "explanation": "استخدام الأقواس الزاوية يخبر Flask أن هذا الجزء متغير وسيتم تمريره كمتغير للدالة الملحقة."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 59: التعامل مع الـ Routes",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 59: التعامل مع الـ Routes",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "كيف نرسل صفحات ويب كاملة للمستخدم؟ (نظام القوالب Jinja2).",
      "description": "إرجاع نصوص بسيطة غير كافٍ. يستخدم Flask نظام قوالب يُسمى Jinja2 لفصل كود بايثون عن تصميم الموقع (HTML). القوالب تتيح لنا تصميم واجهات غنية باستخدام HTML مع دمج متغيرات، شروط، وحلقات تكرار من بايثون لتوليد الصفحات ديناميكياً.",
      "prototype": "from flask import render_template\nreturn render_template('file.html', var=value)",
      "parameters": "اسم ملف HTML (يجب أن يوضع في مجلد اسمه templates)، وقائمة المتغيرات التي نريد حقنها في القالب.",
      "return_value": "نص طويل يحتوي على صفحة HTML المجهزة بالبيانات لتُرسل للمتصفح.",
      "example": "from flask import Flask, render_template\napp = Flask(__name__)\n\n@app.route('/hello/<name>')\ndef hello(name):\n    # سيبحث عن القالب داخل مجلد templates/\n    return render_template('greet.html', user=name)"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس نظام القوالب (Templates) لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
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
    "lesson_type": "milestone",
    "exam_data": {
      "title": "نظام القوالب Templates",
      "questions": [
        {
          "question": "أين يجب وضع ملفات HTML (القوالب) في مشروع Flask ليتمكن render_template من إيجادها افتراضياً؟",
          "options": [
            "في المجلد الرئيسي للمشروع",
            "في مجلد يسمى html_files",
            "في مجلد يسمى templates بجوار ملف التطبيق",
            "في مجلد static"
          ],
          "correct_answer": "في مجلد يسمى templates بجوار ملف التطبيق",
          "explanation": "مجلد templates هو المجلد الافتراضي الذي يبحث فيه محرك Jinja2 عن قوالب HTML عند استدعاء الدالة."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 60: نظام القوالب (Templates)",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 60: نظام القوالب (Templates)",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا نتعلم إطار عمل Django في بايثون؟",
      "description": "جانغو (Django) هو إطار عمل (Framework) مجاني ومفتوح المصدر لتطوير تطبيقات الويب بلغة بايثون. يتبع نمط التصميم MVT (Model-View-Template). صُمم جانغو لمساعدة المطورين على بناء تطبيقات ويب آمنة، سريعة، وقابلة للتوسع بأقل قدر من كتابة الكود.",
      "prototype": "django-admin startproject project_name",
      "parameters": "project_name: اسم المشروع المراد إنشاؤه.",
      "return_value": "ينشئ مجلد المشروع بهيكل الملفات الأساسي لجانغو.",
      "example": "django-admin startproject my_website\ncd my_website\npython manage.py runserver"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس أساسيات Django لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "بدء خادم التطوير",
        "code": "python manage.py runserver",
        "expected_output": "Starting development server at http://127.0.0.1:8000/",
        "explanation": "تشغيل الخادم المحلي لتجربة الموقع."
      },
      {
        "type": "wrong",
        "title": "تشغيل الأمر في مسار خاطئ",
        "code": "python manage.py runserver",
        "error_message": "can't open file 'manage.py': [Errno 2] No such file or directory",
        "explanation": "تأكد من أنك داخل المجلد الذي يحتوي على ملف manage.py."
      },
      {
        "type": "mistake",
        "title": "الخلط بين المشروع والتطبيق",
        "explanation": "المشروع هو الموقع بأكمله، والتطبيق هو وحدة وظيفية صغيرة داخله (مثل المدونة)."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "تطوير أنظمة إدارة محتوى (CMS)، ومنصات تواصل اجتماعي ضخمة كإنستجرام."
      },
      {
        "type": "challenge",
        "title": "تحدي: إنشاء تطبيق",
        "code": "# أمر لإنشاء تطبيق باسم 'blog'\n# اكتب الأمر الصحيح باستخدام manage.py",
        "expected_output": "مجلد جديد باسم 'blog'",
        "explanation": "استخدم الأمر startapp لإنشاء تطبيق."
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار سريع في أساسيات Django",
      "questions": [
        {
          "question": "ما هو نمط التصميم في Django؟",
          "options": [
            "MVC",
            "MVT",
            "MVVM",
            "MVP"
          ],
          "correct_answer": "MVT",
          "explanation": "جانغو يستخدم Model-View-Template."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 61: أساسيات Django",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 61: أساسيات Django",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "كيف يفهم جانغو هيكل الملفات؟",
      "description": "عند إنشاء المشروع، يتكون هيكل أساسي من الملفات. `settings.py` يحتوي على التكوينات الرئيسية، و `urls.py` يدير الروابط (التوجيه). أما `manage.py` فهو الواجهة لأوامر التشغيل.",
      "prototype": "myproject/\n  manage.py\n  myproject/\n    settings.py\n    urls.py\n    wsgi.py",
      "parameters": "لا يوجد متغيرات كودية هنا، بل شرح بنية مجلد.",
      "return_value": "هيكلية جاهزة للعمل وفصل الاهتمامات.",
      "example": "# settings.py\nINSTALLED_APPS = [\n    'django.contrib.admin',\n    # تطبيقات أخرى\n]"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس بنية مشروع Django لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تعديل إعدادات اللغة",
        "code": "LANGUAGE_CODE = 'ar'",
        "expected_output": "واجهة جانغو الإدارية باللغة العربية",
        "explanation": "تغيير إعداد LANGUAGE_CODE في settings.py يؤثر على الترجمة."
      },
      {
        "type": "wrong",
        "title": "خطأ في تسجيل التطبيق",
        "code": "INSTALLED_APPS = ['blog'] # بدون فاصلة إذا كان هناك تطبيقات أسفله",
        "error_message": "SyntaxError: invalid syntax",
        "explanation": "احرص على كتابة الفواصل في نهاية كل عنصر في القائمة."
      },
      {
        "type": "mistake",
        "title": "تجاهل ملف urls.py",
        "explanation": "البعض يحاول إضافة دوال عرض دون ربطها برابط في urls.py، مما يظهر صفحة خطأ 404."
      },
      {
        "type": "use_case",
        "title": "تطبيق فعلي لـ settings.py",
        "explanation": "ضبط إعدادات قواعد بيانات PostgreSQL بدلاً من SQLite لمشاريع الإنتاج الحقيقية."
      },
      {
        "type": "challenge",
        "title": "تحدي: تعديل المنطقة الزمنية",
        "code": "TIME_ZONE = '...' # قم بتعيينها لتوقيت السعودية",
        "expected_output": "TIME_ZONE = 'Asia/Riyadh'",
        "explanation": "ابحث عن صيغة المناطق الزمنية القياسية."
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "أين يتم تسجيل التطبيقات الجديدة في جانغو؟",
          "options": [
            "urls.py",
            "manage.py",
            "settings.py",
            "wsgi.py"
          ],
          "correct_answer": "settings.py",
          "explanation": "يتم تسجيل التطبيقات في قائمة INSTALLED_APPS داخل ملف settings.py."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 62: بنية مشروع Django",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 62: بنية مشروع Django",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "كيف نتعامل مع قواعد البيانات في جانغو دون كتابة SQL؟ (النماذج - Models)",
      "description": "النماذج (Models) تمثل البيانات وشكلها. يقرأ جانغو النموذج وينشئ الجدول المقابل له في قاعدة البيانات باستخدام نظام ORM مما يغنيك عن كتابة استعلامات SQL معقدة.",
      "prototype": "class ModelName(models.Model):\n    field_name = models.FieldType()",
      "parameters": "ModelName: اسم الجدول. FieldType: نوع البيانات (مثل CharField, IntegerField).",
      "return_value": "صنف بايثون يمثل جدولاً في قاعدة البيانات.",
      "example": "from django.db import models\n\nclass Post(models.Model):\n    title = models.CharField(max_length=200)\n    content = models.TextField()"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس النماذج (Models) لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "إنشاء جدول للمستخدمين",
        "code": "class Employee(models.Model):\n    name = models.CharField(max_length=100)\n    salary = models.IntegerField()",
        "expected_output": "جدول Employee بحقلي name و salary.",
        "explanation": "هكذا تُبنى الهياكل الأساسية للبيانات بسهولة."
      },
      {
        "type": "wrong",
        "title": "نسيان تحديد max_length",
        "code": "title = models.CharField()",
        "error_message": "CharFields must define a 'max_length' attribute.",
        "explanation": "يجب دائماً تمرير حد أقصى للحروف مع CharField."
      },
      {
        "type": "mistake",
        "title": "عدم عمل Migrations",
        "explanation": "البعض يظن أن كتابة الكود كافية لإنشاء الجدول، ويجب دائماً تنفيذ python manage.py makemigrations ثم migrate."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "استخدام النماذج لتعريف هياكل الفواتير، الطلبات، المنتجات في متجر إلكتروني."
      },
      {
        "type": "challenge",
        "title": "تحدي: إضافة تاريخ الانضمام",
        "code": "class User(models.Model):\n    name = models.CharField(max_length=50)\n    # اضف حقلاً لتاريخ الانضمام تلقائيا",
        "expected_output": "joined_at = models.DateTimeField(auto_now_add=True)",
        "explanation": "استخدم DateTimeField."
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "ما هو الأمر المستخدم لتطبيق التغييرات على قاعدة البيانات؟",
          "options": [
            "runserver",
            "makemigrations",
            "migrate",
            "startapp"
          ],
          "correct_answer": "migrate",
          "explanation": "الأمر migrate هو الذي يترجم ملفات الهجرة لتغييرات فعلية بقاعدة البيانات."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 63: النماذج (Models)",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 63: النماذج (Models)",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "كيف نعالج طلبات المستخدمين ونرسل الرد؟ (العروض - Views)",
      "description": "العروض (Views) هي الدوال (أو الأصناف) التي تأخذ طلب الويب (Request) وتعيد استجابة (Response). هي المكان الذي يتم فيه معالجة المنطق (Business Logic) وجلب البيانات من النماذج لتمريرها للقوالب.",
      "prototype": "def view_name(request):\n    return HttpResponse('Response')",
      "parameters": "request: كائن يمثل الطلب القادم من متصفح المستخدم.",
      "return_value": "استجابة (مثل صفحة HTML، أو بيانات JSON).",
      "example": "from django.http import HttpResponse\n\ndef hello(request):\n    return HttpResponse('مرحباً بك في موقعي')"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس العروض (Views) لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "عرض رسالة بسيطة",
        "code": "def about(request):\n    return HttpResponse('صفحة من نحن')",
        "expected_output": "تظهر جملة 'صفحة من نحن' على المتصفح.",
        "explanation": "أبسط شكل لدالة عرض في جانغو."
      },
      {
        "type": "wrong",
        "title": "نسيان تمرير request",
        "code": "def home():\n    return HttpResponse('Home')",
        "error_message": "TypeError: home() takes 0 positional arguments but 1 was given",
        "explanation": "يجب دائماً أن تقبل دالة العرض المتغير request كأول معامل."
      },
      {
        "type": "mistake",
        "title": "عكس الأدوار بين النماذج والعروض",
        "explanation": "يعتقد البعض أن الاستعلام من قاعدة البيانات يجب أن يُكتب بالـ SQL يدوياً في العرض، والصحيح استخدام ORM الخاص بالنماذج."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "استخراج معلومات المستخدم من الطلب والتحقق مما إذا كان مسجلاً للدخول قبل عرض الصفحة الحساسة."
      },
      {
        "type": "challenge",
        "title": "تحدي: إرجاع صفحة HTML معقدة (استخدام render)",
        "code": "def my_view(request):\n    # استخدم الدالة render لعرض القالب template.html",
        "expected_output": "return render(request, 'template.html')",
        "explanation": "دالة render هي الأكثر استخداماً لدمج القوالب مع البيانات."
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "ما هو المعامل الأول الأساسي في دالة العرض (View) في جانغو؟",
          "options": [
            "response",
            "context",
            "request",
            "model"
          ],
          "correct_answer": "request",
          "explanation": "كل دالة عرض يجب أن تتلقى طلب HTTP (request)."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 64: العروض (Views)",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 64: العروض (Views)",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "تطبيق عملي: كيف نجمع النماذج والعروض لإنشاء مدونة؟",
      "description": "في هذا التطبيق نربط كل المفاهيم. ننشئ نموذج للمقالة، ثم نكتب دالة عرض (View) تجلب جميع المقالات، ونمررها لصفحة HTML باستخدام قالب (Template).",
      "prototype": "posts = Post.objects.all()\nreturn render(request, 'blog/index.html', {'posts': posts})",
      "parameters": "Post.objects.all(): يجلب كافة السجلات. القاموس {'posts': posts}: يمرر البيانات للقالب.",
      "return_value": "صفحة ويب تحتوي على قائمة بجميع مقالات المدونة.",
      "example": "from django.shortcuts import render\nfrom .models import Post\n\ndef post_list(request):\n    posts = Post.objects.all()\n    return render(request, 'blog/post_list.html', {'posts': posts})"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس تطبيق: مدونة بسيطة لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "جلب البيانات",
        "code": "def get_recent(request):\n    recent = Post.objects.order_by('-id')[:5]\n    return render(request, 'recent.html', {'recent': recent})",
        "expected_output": "صفحة بآخر 5 مقالات مقروءة.",
        "explanation": "استخدام ORM لجلب المقالات مرتبة تنازلياً وتمريرها."
      },
      {
        "type": "wrong",
        "title": "تمرير بيانات بدون قاموس",
        "code": "return render(request, 'template.html', posts)",
        "error_message": "context must be a dict rather than QuerySet.",
        "explanation": "يجب دائماً أن يكون المتغير الثالث (context) في الدالة render عبارة عن قاموس."
      },
      {
        "type": "mistake",
        "title": "الخلط بين مسارات القوالب",
        "explanation": "يحدث خطأ TemplateDoesNotExist عندما يتم وضع ملف HTML في مجلد خاطئ. جانغو يبحث افتراضياً في مجلد templates داخل التطبيق."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "بناء أي تطبيق عرض بيانات فعلي كالمتاجر والمقالات والإعلانات."
      },
      {
        "type": "challenge",
        "title": "تحدي: تصفية المقالات",
        "code": "# قم بجلب المقالات المنشورة فقط، مفترضا وجود حقل is_published\nposts = Post.objects.______(is_published=True)",
        "expected_output": "filter",
        "explanation": "استخدم filter للبحث المشروط في جداول قاعدة البيانات."
      }
    ],
    "lesson_type": "project",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "كيف نقوم بجلب كافة البيانات من جدول Product عبر نموذج جانغو؟",
          "options": [
            "Product.get_all()",
            "Product.objects.all()",
            "Product.select()",
            "Product.all()"
          ],
          "correct_answer": "Product.objects.all()",
          "explanation": "الطريقة الصحيحة في ORM لجانغو هي objects.all()."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 65: تطبيق: مدونة بسيطة",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 65: تطبيق: مدونة بسيطة",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا نستكشف الذكاء الاصطناعي (AI) بلغة بايثون؟",
      "description": "بايثون تعتبر اللغة الأولى عالمياً في مجال الذكاء الاصطناعي. الذكاء الاصطناعي هو فرع من علوم الحاسوب يهدف لإنشاء أنظمة قادرة على محاكاة الذكاء البشري مثل التعرف على الصور، ترجمة النصوص، واتخاذ القرارات.",
      "prototype": "import ai_library\nmodel = ai_library.Model()\nmodel.predict(data)",
      "parameters": "data: البيانات التي نريد للنموذج أن يعمل عليها.",
      "return_value": "تنبؤ (Prediction) مثل تحديد هل الصورة لقطة أو كلب.",
      "example": "# مثال رمزي يوضح المفهوم\n# الذكاء الاصطناعي يعتمد على بيانات ضخمة ومكتبات مثل TensorFlow و PyTorch\nprint('الذكاء الاصطناعي هو محاكاة ذكاء البشر عبر تعلم الآلة والتطوير العميق.')"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس مقدمة في الذكاء الاصطناعي لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "مفهوم استيراد المكتبات الأساسية",
        "code": "import numpy as np\nimport pandas as pd",
        "expected_output": "تهيئة البيئة للعمل مع البيانات",
        "explanation": "أول خطوة في مشاريع الذكاء الاصطناعي هي استدعاء المكتبات المسؤولة عن معالجة البيانات."
      },
      {
        "type": "wrong",
        "title": "الاعتقاد بأن الذكاء الاصطناعي هو سحر",
        "code": "model.think_like_human()",
        "error_message": "AttributeError: 'Model' has no attribute 'think_like_human'",
        "explanation": "الذكاء الاصطناعي يعتمد على الإحصاء والرياضيات وليس سحراً أو وعياً حقيقياً."
      },
      {
        "type": "mistake",
        "title": "الخلط بين AI و Machine Learning",
        "explanation": "الذكاء الاصطناعي هو المظلة الكبيرة، بينما تعلم الآلة (Machine Learning) هو تطبيق محدد داخل الـ AI يعتمد على تعلم الأنماط من البيانات."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "المساعدات الشخصية كـ Siri و Alexa، وأنظمة التوصيات في يوتيوب ونتفليكس."
      },
      {
        "type": "challenge",
        "title": "تحدي: استيراد مكتبة",
        "code": "# استورد مكتبة scikit-learn والتي يشار لها بـ sklearn\n___ sklearn",
        "expected_output": "import",
        "explanation": "استخدم كلمة import."
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "أي من اللغات التالية هي الأكثر شعبية في تطوير الذكاء الاصطناعي؟",
          "options": [
            "Java",
            "C++",
            "Python",
            "Ruby"
          ],
          "correct_answer": "Python",
          "explanation": "بايثون تتصدر بفضل مكتباتها الضخمة والسهلة الاستخدام مثل Scikit-learn و TensorFlow."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 66: مقدمة في الذكاء الاصطناعي",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 66: مقدمة في الذكاء الاصطناعي",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "ما هو تعلم الآلة (Machine Learning) وكيف تفهم الآلة البيانات؟",
      "description": "تعلم الآلة هو تدريب الخوارزميات على مجموعات بيانات تاريخية لاكتشاف الأنماط بدلاً من برمجتها قواعد ثابتة. الخوارزمية تأخذ البيانات والنتائج السابقة، وتستنتج القواعد التي تمكنها من التنبؤ بالحالات الجديدة.",
      "prototype": "from sklearn.model_family import ModelName\nmodel = ModelName()\nmodel.fit(X_train, y_train)",
      "parameters": "X_train: البيانات المدخلة (الميزات). y_train: النتائج (الأهداف). fit: عملية التعلم أو التدريب.",
      "return_value": "نموذج مُدرَّب (Trained Model) قادر على إجراء تنبؤات.",
      "example": "from sklearn.linear_model import LinearRegression\nmodel = LinearRegression()\n# تدريب بسيط (مجرد توضيح للمفهوم)\n# model.fit(X, y)"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس أساسيات تعلم الآلة لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "استدعاء خوارزمية الانحدار الخطي",
        "code": "from sklearn.linear_model import LinearRegression\nmodel = LinearRegression()",
        "expected_output": "نموذج جاهز للتدريب.",
        "explanation": "الانحدار الخطي هي واحدة من أشهر وأبسط خوارزميات تعلم الآلة للتنبؤ بالقيم الرقمية."
      },
      {
        "type": "wrong",
        "title": "توقع التنبؤ بدون تدريب",
        "code": "model = LinearRegression()\nmodel.predict([[1, 2]])",
        "error_message": "NotFittedError: This LinearRegression instance is not fitted yet.",
        "explanation": "لا يمكن للنموذج التنبؤ قبل أن تقوم بتدريبه أولاً باستخدام الدالة fit()."
      },
      {
        "type": "mistake",
        "title": "البيانات القليلة",
        "explanation": "يعتقد البعض أن بضعة أسطر من البيانات كافية لتدريب نموذج. في الواقع، تعلم الآلة يتطلب مئات أو آلاف الأمثلة ليكون دقيقاً."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "توقع أسعار العقارات بناءً على المساحة والموقع وعدد الغرف."
      },
      {
        "type": "challenge",
        "title": "تحدي: دالة التدريب",
        "code": "model = LinearRegression()\n# ما هي الدالة المستخدمة للتدريب؟\nmodel.___(X, y)",
        "expected_output": "fit",
        "explanation": "دالة التدريب الشهيرة هي fit."
      }
    ],
    "lesson_type": "scenario",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "ما هي الوظيفة الأساسية للدالة fit() في مكتبات تعلم الآلة؟",
          "options": [
            "تقييم النموذج",
            "التنبؤ ببيانات جديدة",
            "تدريب النموذج على البيانات",
            "حفظ النموذج"
          ],
          "correct_answer": "تدريب النموذج على البيانات",
          "explanation": "الدالة fit تستخدم لتطبيق عملية التعلم على البيانات المتاحة."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 67: أساسيات تعلم الآلة",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 67: أساسيات تعلم الآلة",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا يجب علينا تنظيف وتجهيز البيانات قبل تدريب النموذج؟",
      "description": "في الواقع، البيانات تكون فوضوية وتحتوي على قيم مفقودة ونصوص غير قابلة للحساب. الآلة تفهم الأرقام فقط! خطوة تجهيز البيانات (Data Preprocessing) تشمل سد الثغرات وتحويل النصوص لأرقام وضبط المقياس لضمان دقة النموذج.",
      "prototype": "df.fillna(value)\ndf.dropna()\nLabelEncoder()",
      "parameters": "fillna: تملأ القيم الفارغة. dropna: تحذف الصفوف الفارغة.",
      "return_value": "بيانات نظيفة ومصفوفات رقمية جاهزة للإدخال في النموذج.",
      "example": "import pandas as pd\n\ndata = {'Age': [25, None, 30], 'City': ['Cairo', 'Riyadh', 'Cairo']}\ndf = pd.DataFrame(data)\n\n# معالجة القيم المفقودة\ndf['Age'].fillna(df['Age'].mean(), inplace=True)"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس تجهيز البيانات لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "ملء القيم المفقودة بالمتوسط",
        "code": "df['salary'].fillna(df['salary'].mean(), inplace=True)",
        "expected_output": "يتم تبديل القيم الفارغة بمتوسط الرواتب.",
        "explanation": "طريقة آمنة لعدم خسارة صفوف كاملة من البيانات."
      },
      {
        "type": "wrong",
        "title": "إدخال نصوص للنموذج مباشرة",
        "code": "model.fit(df[['City']], y)",
        "error_message": "ValueError: could not convert string to float: 'Cairo'",
        "explanation": "النماذج الرياضية لا تتعامل مع النصوص المباشرة. يجب تحويلها باستخدام تقنيات مثل One-Hot Encoding."
      },
      {
        "type": "mistake",
        "title": "حذف جميع القيم المفقودة",
        "explanation": "قد تلجأ لحذف أي صف به قيمة فارغة، وهذا خطأ لأنه قد يؤدي لفقدان كمية هائلة من البيانات. يُفضل التعويض (Imputation) إذا أمكن."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "في السجلات الطبية، قد يتم تسجيل بيانات مريض دون وزنه. يتم تقدير الوزن لتفادي إتلاف السجل كاملًا."
      },
      {
        "type": "challenge",
        "title": "تحدي: حذف الصفوف",
        "code": "# كيف نحذف أي صف به قيمة فارغة تماماً؟\ndf.____()",
        "expected_output": "dropna",
        "explanation": "استخدم dropna للتخلص من الصفوف المفقودة."
      }
    ],
    "lesson_type": "code_reading",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "لماذا يجب تحويل الكلمات إلى أرقام في تجهيز البيانات؟",
          "options": [
            "لتصغير حجم الملف",
            "لأن الخوارزميات عبارة عن عمليات حسابية ورياضية",
            "لأنه شكل جمالي",
            "حتى لا تُسرق البيانات"
          ],
          "correct_answer": "لأن الخوارزميات عبارة عن عمليات حسابية ورياضية",
          "explanation": "تعلم الآلة يعتمد على المعادلات الرياضية، والمعادلات لا تقبل الكلمات مباشرة."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 68: تجهيز البيانات",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 68: تجهيز البيانات",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "كيف نقوم ببناء النموذج الأول لنا وتدريبه؟",
      "description": "بعد تجهيز البيانات، نقوم بتقسيمها إلى قسمين: بيانات للتدريب (Training) ليتعلم منها النموذج، وبيانات للاختبار (Testing) لنرى مدى كفاءته، ثم نمرر بيانات التدريب للنموذج.",
      "prototype": "from sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)",
      "parameters": "X: الخصائص. y: المتغير المستهدف. test_size: نسبة البيانات المخصصة للاختبار (غالبا 20%).",
      "return_value": "4 مجموعات من البيانات مفصولة عشوائيا.",
      "example": "from sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\n\nX = [[1], [2], [3], [4], [5]]\ny = [2, 4, 6, 8, 10]\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\n\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس بناء نموذج تنبؤ بسيط لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "التنبؤ ببيانات جديدة",
        "code": "prediction = model.predict([[6]])\nprint(prediction)",
        "expected_output": "[12.]",
        "explanation": "بما أن النمط هو ضرب الرقم في 2، فالنموذج يتوقع 12 عند إدخال 6."
      },
      {
        "type": "wrong",
        "title": "التنبؤ بشكل خاطئ للمصفوفات",
        "code": "model.predict(6)",
        "error_message": "ValueError: Expected 2D array, got scalar array instead.",
        "explanation": "الدالة predict تتوقع مصفوفة ثنائية الأبعاد (قائمة داخل قائمة) وليس رقماً مفرداً."
      },
      {
        "type": "mistake",
        "title": "التدريب والاختبار على نفس البيانات",
        "explanation": "البعض يختبر النموذج على البيانات التي تدرّب عليها. هذا يعطي نسبة نجاح وهمية (Overfitting) ولا يعكس كفاءة النموذج في العالم الحقيقي."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "تنبؤ مبيعات المتجر للشهر القادم بناءً على أشهر المبيعات السابقة."
      },
      {
        "type": "challenge",
        "title": "تحدي: تحديد حجم الاختبار",
        "code": "# اجعل نسبة الاختبار 30%\ntrain_test_split(X, y, test_size=___)",
        "expected_output": "0.3",
        "explanation": "تُكتب النسبة المئوية ككسر عشري."
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "لماذا نفصل البيانات إلى قسم تدريب وقسم اختبار؟",
          "options": [
            "لتصغير حجم البيانات",
            "للتأكد من أداء النموذج على بيانات لم يرها من قبل",
            "لزيادة سرعة التدريب",
            "لأن الخوارزمية تتطلب ذلك وجوباً"
          ],
          "correct_answer": "للتأكد من أداء النموذج على بيانات لم يرها من قبل",
          "explanation": "اختبار النموذج ببيانات لم يراها من قبل هو المقياس الحقيقي لجودة تعلمه."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 69: بناء نموذج تنبؤ بسيط",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 69: بناء نموذج تنبؤ بسيط",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "كيف نعرف أن نموذجنا دقيق وجيد؟ (تقييم النموذج)",
      "description": "بعد تدريب النموذج التنبئي، يجب قياس مستوى أدائه. للمشاكل الرقمية (الانحدار - Regression) نستخدم مقاييس مثل متوسط الخطأ التربيعي (MSE) أو مقياس R2. أما لمشاكل التصنيف (Classification) نستخدم مقاييس مثل الدقة (Accuracy).",
      "prototype": "from sklearn.metrics import accuracy_score, mean_squared_error\naccuracy = accuracy_score(y_true, y_pred)",
      "parameters": "y_true: النتائج الحقيقية من بيانات الاختبار. y_pred: توقعات النموذج.",
      "return_value": "رقم يعكس مدى جودة أو دقة النموذج.",
      "example": "from sklearn.metrics import mean_squared_error\n\ny_true = [3, -0.5, 2, 7]\ny_pred = [2.5, 0.0, 2, 8]\n\nmse = mean_squared_error(y_true, y_pred)\nprint(f'Mean Squared Error: {mse}')"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس تقييم النموذج لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "قياس الدقة للتصنيف",
        "code": "from sklearn.metrics import accuracy_score\nprint(accuracy_score([1, 0, 1], [1, 1, 1]))",
        "expected_output": "0.666",
        "explanation": "توقع إجابتين صحيحتين من أصل 3، فالدقة 66%."
      },
      {
        "type": "wrong",
        "title": "عكس ترتيب المعاملات",
        "code": "accuracy_score(y_pred, y_true)",
        "error_message": "لا يوجد خطأ برمجي، لكنها ممارسة خاطئة.",
        "explanation": "يفضل وضع النتائج الحقيقية (y_true) كأول معامل لتتوافق مع معايير مكتبة sklearn وضمان دقة بعض الدوال المعقدة."
      },
      {
        "type": "mistake",
        "title": "الاعتماد على Accuracy في البيانات غير المتوازنة",
        "explanation": "إذا كان 99% من البيانات لمرضى أصحاء و1% لمصابين، فالنموذج الذي يتوقع أن الجميع أصحاء سيحقق دقة 99% رغم فشله تماماً! هنا نستخدم مقاييس أخرى كـ F1-Score."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "استخدام المصفوفة المربكة (Confusion Matrix) لمعرفة كم عدد الرسائل السليمة التي تم تصنيفها كـ Spam بالخطأ."
      },
      {
        "type": "challenge",
        "title": "تحدي: مقياس R2",
        "code": "from sklearn.metrics import r2_score\n# ما اسم الدالة لقياس R2؟\nscore = ___(y_test, predictions)",
        "expected_output": "r2_score",
        "explanation": "استخدم الدالة r2_score المحملة من sklearn."
      }
    ],
    "lesson_type": "milestone",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "أي مقياس يستخدم عادة لتقييم خوارزمية تصنيف (مثل تحديد هل الصورة لقطة أم كلب)؟",
          "options": [
            "Mean Squared Error (MSE)",
            "Accuracy (الدقة)",
            "R2 Score",
            "Mean Absolute Error"
          ],
          "correct_answer": "Accuracy (الدقة)",
          "explanation": "في مهام التصنيف نستخدم الدقة و F1 Score، بينما MSE يستخدم لمهام الانحدار (القيم الرقمية)."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 70: تقييم النموذج",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 70: تقييم النموذج",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لنتعلم كيف تبدأ رحلة الذكاء الاصطناعي من خلال فهم الشبكات العصبية (Neural Networks) وكيفية محاكاتها للخلايا العصبية البشرية مبسطاً في بايثون.",
      "description": "الشبكات العصبية هي نموذج حسابي مستوحى من الدماغ البشري، يتكون من عقد مترابطة (الخلايا العصبية). في هذا الدرس المبدئي، سنقوم ببناء خلية عصبية واحدة (Perceptron) لفهم كيف تتخذ الحواسيب قرارات مبنية على المدخلات، الأوزان، والانحياز، قبل الانتقال لمكتبات ضخمة مثل Keras.",
      "prototype": "def neuron(inputs, weights, bias):\n    # 1. حساب المجموع المرجح\n    # 2. تمرير المجموع عبر دالة تنشيط (Activation Function)",
      "parameters": "inputs: قائمة أو مصفوفة من الأرقام تمثل البيانات المدخلة. weights: الأوزان المقابلة لكل مدخل، تحدد أهميته. bias: قيمة الانحياز للمساعدة في ضبط المخرج.",
      "return_value": "ترجع الخلية العصبية رقما نهائيا (غالبا 0 أو 1، أو قيمة مستمرة) يمثل قرارها أو توقعها.",
      "example": "def step_function(x):\n    return 1 if x >= 0 else 0\n\ndef simple_neuron(inputs, weights, bias):\n    total = sum(i * w for i, w in zip(inputs, weights)) + bias\n    return step_function(total)"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس مقدمة في الشبكات العصبية لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر لخلية عصبية بسيطة",
        "code": "print(simple_neuron([1.5, 2.0], [0.8, -0.5], 0.2))",
        "expected_output": "1",
        "explanation": "تم ضرب كل مدخل بوزنه وجمعهما (1.5*0.8 + 2.0*-0.5) ليصبح 0.2، ثم أضيف الانحياز 0.2 ليكون المجموع 0.4. وبما أنه موجب، أرجعت الدالة 1."
      },
      {
        "type": "wrong",
        "title": "اختلاف عدد الأوزان والمدخلات",
        "code": "simple_neuron([1.0], [0.5, 0.5], 0.1)",
        "error_message": "لا يظهر خطأ برمجي واضح ولكن النتيجة غير دقيقة.",
        "explanation": "يجب التأكد من أن أبعاد المدخلات مساوية دائما لأبعاد الأوزان حتى تكون الحسابات دقيقة ولا نفقد بيانات."
      },
      {
        "type": "mistake",
        "title": "نسيان قيمة الانحياز (Bias)",
        "explanation": "يهمل البعض قيمة الانحياز، وهو ما يعادل محاولة رسم خط مستقيم يمر دائما بنقطة الأصل فقط، مما يقلل من قدرة الخلية على التعلم."
      },
      {
        "type": "use_case",
        "title": "حجر الأساس في تعلم الآلة",
        "explanation": "الخلية العصبية التي قمنا ببنائها هي أصغر لبنة في بناء نماذج الذكاء الاصطناعي التي تقود السيارات وتتعرف على الوجوه."
      },
      {
        "type": "challenge",
        "title": "تحدي: استخدام دالة التنشيط ReLU",
        "code": "def relu(x):\n    return max(0, x)\n# استخدم هذه الدالة بدلا من step_function",
        "expected_output": "القيمة نفسها إذا كانت موجبة، أو 0 إذا كانت سالبة.",
        "explanation": "دالة ReLU أسرع وأكثر استخداما في الشبكات العميقة لأنها تتجنب مشاكل اختفاء التدرج (Vanishing Gradient)."
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار أساسيات الشبكات العصبية",
      "questions": [
        {
          "question": "ما هو الهدف الأساسي من استخدام الأوزان (Weights) في الخلية العصبية؟",
          "options": [
            "تحديد مقدار أهمية كل مدخل للتأثير على النتيجة",
            "تخزين البيانات المدخلة لفترة أطول",
            "إيقاف الخلية العصبية عن العمل",
            "تغيير شكل المخرجات لتكون نصوصا"
          ],
          "correct_answer": "تحديد مقدار أهمية كل مدخل للتأثير على النتيجة",
          "explanation": "الأوزان تُضرب في المدخلات لزيادة أو تقليل تأثير مدخلات معينة على النتيجة النهائية."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 71: مقدمة في الشبكات العصبية",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 71: مقدمة في الشبكات العصبية",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لنتعمق في عالم التعلم العميق (Deep Learning) ونفهم كيف تتكامل طبقات متعددة من الشبكات العصبية لحل المشاكل المعقدة.",
      "description": "التعلم العميق هو فرع من التعلم الآلي يعتمد على شبكات عصبية اصطناعية ذات طبقات متعددة (Multi-layer). الطبقات الخفية (Hidden Layers) بين المدخلات والمخرجات تسمح للنموذج باكتشاف الأنماط المعقدة تلقائيا (مثل تمييز الحواف ثم الأشكال ثم الوجوه في الصور).",
      "prototype": "import tensorflow as tf\nmodel = tf.keras.models.Sequential([\n    # الطبقات توضع هنا\n])",
      "parameters": "Dense(units, activation): تستخدم لإضافة طبقة. units: عدد الخلايا، activation: نوع دالة التنشيط.",
      "return_value": "يرجع كائن نموذج جاهز لعمليات التدريب (fit) والتوقع (predict).",
      "example": "import tensorflow as tf\nmodel = tf.keras.Sequential([\n    tf.keras.layers.Dense(16, activation='relu', input_shape=(10,)),\n    tf.keras.layers.Dense(1, activation='sigmoid')\n])\nmodel.compile(optimizer='adam', loss='binary_crossentropy')"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس مفهوم الـ Deep Learning لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "بناء شبكة عصبية بسيطة من طبقتين",
        "code": "print(model.summary())",
        "expected_output": "طباعة ملخص تفصيلي للنموذج يشمل عدد الطبقات وعدد المعلمات.",
        "explanation": "الدالة summary توضح هيكل الشبكة العصبية والأوزان القابلة للتدريب في كل طبقة."
      },
      {
        "type": "wrong",
        "title": "تخطي تحديد شكل المدخلات (input_shape)",
        "code": "tf.keras.layers.Dense(16, activation='relu') # بدون input_shape للطبقة الأولى",
        "error_message": "ValueError: The model needs to know the input shape.",
        "explanation": "الطبقة الأولى في النماذج المتسلسلة تحتاج دائما لمعرفة أبعاد البيانات التي ستستقبلها لتهيئة الأوزان."
      },
      {
        "type": "mistake",
        "title": "استخدام دالة تنشيط خطية في كل الطبقات",
        "explanation": "استخدام دوال خطية فقط يجعل الشبكة العميقة تعمل كأنها طبقة واحدة، مما يفقد التعلم العميق قدرته على حل المشاكل غير الخطية."
      },
      {
        "type": "use_case",
        "title": "التعرف على الصوت والنصوص",
        "explanation": "التعلم العميق هو التقنية الأساسية وراء مساعدات مثل Siri والمترجمات المتقدمة ونماذج الذكاء الاصطناعي التوليدي كـ ChatGPT."
      },
      {
        "type": "challenge",
        "title": "تحدي: إضافة طبقة خفية إضافية",
        "code": "model.add(tf.keras.layers.Dense(32, activation='relu'))",
        "expected_output": "تتوسع الشبكة لتصبح أعمق وتزداد قدرتها الاستيعابية.",
        "explanation": "إضافة طبقات خفية (Hidden Layers) يجعل النموذج أعمق (Deep)، ومن هنا جاءت تسمية التعلم العميق."
      }
    ],
    "lesson_type": "debugging",
    "exam_data": {
      "title": "اختبار مفهوم التعلم العميق",
      "questions": [
        {
          "question": "ما الذي يجعل الشبكة العصبية تُصنف على أنها (عميقة) Deep؟",
          "options": [
            "احتوائها على طبقات خفية متعددة (Multiple Hidden Layers)",
            "أنها تأخذ وقتا طويلا في التدريب",
            "استخدامها للبيانات الكبيرة فقط",
            "كتابتها بأسطر كود طويلة"
          ],
          "correct_answer": "احتوائها على طبقات خفية متعددة (Multiple Hidden Layers)",
          "explanation": "العمق في التعلم العميق يشير حرفيا إلى عدد الطبقات الموجودة بين طبقة الإدخال والإخراج."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 72: مفهوم الـ Deep Learning",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 72: مفهوم الـ Deep Learning",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "سنتعلم كيفية قراءة ومعالجة الصور كبيانات رقمية في بايثون لتهيئتها كنماذج ذكاء اصطناعي.",
      "description": "الصور بالنسبة للحاسوب ليست سوى مصفوفات من الأرقام (Pixels). في بايثون، نستخدم مكتبات مثل OpenCV أو Pillow (PIL) لفتح الصور، تغيير حجمها، وتعديل ألوانها استعدادا لإدخالها إلى خوارزميات تعلم الآلة.",
      "prototype": "import cv2\nimage = cv2.imread(filepath)\nresized = cv2.resize(image, (width, height))",
      "parameters": "filepath: مسار الصورة على الجهاز. (width, height): الأبعاد الجديدة المطلوبة للصورة.",
      "return_value": "مصفوفة (NumPy Array) تمثل قيم الألوان في الصورة (مثلا BGR في مكتبة OpenCV).",
      "example": "import cv2\nimg = cv2.imread('cat.jpg')\nif img is not None:\n    img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\n    cv2.imwrite('cat_gray.jpg', img_gray)"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس التعامل مع الصور لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تحويل صورة إلى تدرج الرمادي (Grayscale)",
        "code": "img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)",
        "expected_output": "تصبح الصورة بلون رمادي.",
        "explanation": "التحويل للون الرمادي يقلل من حجم البيانات ويسرع عملية التدريب في العديد من الخوارزميات."
      },
      {
        "type": "wrong",
        "title": "قراءة صورة غير موجودة",
        "code": "cv2.imread('does_not_exist.jpg')",
        "error_message": "لا يرمي خطأ مباشر بل يعود بـ None",
        "explanation": "دالة imread لا ترمي خطأ إذا لم تجد الصورة بل ترجع None، لذا يجب دائما التحقق من النتيجة قبل التعديل عليها."
      },
      {
        "type": "mistake",
        "title": "اختلاف نظام الألوان بين المكتبات",
        "explanation": "تقرأ OpenCV الصور بنظام BGR، بينما تستخدم Matplotlib و PIL نظام RGB. يجب تغيير الترتيب عند عرض صورة بـ matplotlib."
      },
      {
        "type": "use_case",
        "title": "التجهيز المسبق للذكاء الاصطناعي",
        "explanation": "الشبكات العصبية تتطلب مدخلات بأبعاد ثابتة، لذا خطوة تغيير حجم الصور أساسية قبل التدريب."
      },
      {
        "type": "challenge",
        "title": "تحدي: اقتصاص (Crop) جزء من الصورة",
        "code": "cropped = img[50:200, 100:300]",
        "expected_output": "مصفوفة جزئية تحتوي على الجزء المقطوع من الصورة.",
        "explanation": "بما أن الصورة في النهاية مصفوفة Numpy، فإن تقنيات تقطيع المصفوفات (Slicing) تعمل معها مباشرة."
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار التعامل مع الصور",
      "questions": [
        {
          "question": "ما هو الترتيب الافتراضي للألوان الذي تستخدمه مكتبة OpenCV عند قراءة صورة ملونة؟",
          "options": [
            "RGB (أحمر أخضر أزرق)",
            "BGR (أزرق أخضر أحمر)",
            "Grayscale (رمادي)",
            "CMYK"
          ],
          "correct_answer": "BGR (أزرق أخضر أحمر)",
          "explanation": "OpenCV تستخدم ترتيب الألوان BGR لأسباب تاريخية تعود لتصاميم الكاميرات القديمة."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 73: التعامل مع الصور",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 73: التعامل مع الصور",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "الآن بعد أن فهمنا كيفية التعامل مع الصور، حان الوقت لتدريب الحاسوب على تصنيفها.",
      "description": "تصنيف الصور هو عملية إعطاء اسم للصورة. نستخدم في بايثون النماذج الجاهزة أو الشبكات العصبية الالتفافية (CNNs) عبر مكتبة Keras والتي تعتبر المعيار الذهبي لتحديد السمات تلقائيا في البيانات البصرية.",
      "prototype": "model.predict(image_batch)\n# أو النماذج مسبقة التدريب:\nfrom tensorflow.keras.applications import MobileNetV2",
      "parameters": "image_batch: مجموعة صور تم تجهيزها لتناسب مدخلات النموذج، (عدد الصور، العرض، الطول، الألوان).",
      "return_value": "مصفوفة احتمالات توضح نسبة مطابقة الصورة لكل فئة تدرب عليها النموذج.",
      "example": "import numpy as np\nfrom tensorflow.keras.applications.mobilenet_v2 import MobileNetV2, preprocess_input, decode_predictions\nmodel = MobileNetV2(weights='imagenet')\nimg_array = preprocess_input(np.expand_dims(resized_img, axis=0))\npreds = model.predict(img_array)\nprint(decode_predictions(preds, top=1)[0])"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس تصنيف الصور باستخدام بايثون لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "التصنيف بنموذج مسبق التدريب",
        "code": "preds = model.predict(img_array)\ndecode_predictions(preds, top=3)",
        "expected_output": "طباعة أعلى 3 توقعات للصورة.",
        "explanation": "النماذج الجاهزة مثل MobileNet مُدربة مسبقاً ويمكنها التعرف على الكائنات فوريا."
      },
      {
        "type": "wrong",
        "title": "تمرير صورة واحدة دون تحويلها لـ Batch",
        "code": "model.predict(resized_img)",
        "error_message": "ValueError: expected shape (None, 224, 224, 3)",
        "explanation": "النماذج تتوقع حزمة من الصور، يجب استخدام np.expand_dims لإضافة بُعد العدد."
      },
      {
        "type": "mistake",
        "title": "إهمال دالة التجهيز (preprocess_input)",
        "explanation": "كل نموذج جاهز يملك طريقته الخاصة لتجهيز الأرقام. إهمال هذه الدالة يعطي تنبؤات عشوائية."
      },
      {
        "type": "use_case",
        "title": "التعرف على المنتجات والمحاصيل",
        "explanation": "يستخدم تصنيف الصور في الطب لتصنيف صور الأشعة، وفي الزراعة لمعرفة المحاصيل."
      },
      {
        "type": "challenge",
        "title": "تحدي: بناء طبقات CNN من الصفر",
        "code": "tf.keras.layers.Conv2D(32, (3, 3), activation='relu')",
        "expected_output": "طبقة التفافية لاستخراج سمات الصورة.",
        "explanation": "طبقات Conv2D تتعرف على الحواف والأنماط المكانية في الصور."
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار تصنيف الصور",
      "questions": [
        {
          "question": "ما الهدف من عملية np.expand_dims عند إدخال صورة لنموذج Keras؟",
          "options": [
            "تغيير ألوان الصورة",
            "إضافة بُعد جديد لتمثيل حزمة (Batch)",
            "تكبير الصورة",
            "خطوة اختيارية للسرعة"
          ],
          "correct_answer": "إضافة بُعد جديد لتمثيل حزمة (Batch)",
          "explanation": "النماذج تقبل البيانات في شكل (Batch Size, Height, Width, Channels)."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 74: تصنيف الصور باستخدام بايثون",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 74: تصنيف الصور باستخدام بايثون",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "سنتوج خبراتنا ببناء تطبيق مدهش للتعرف على الوجوه (Face Recognition).",
      "description": "التعرف على الوجوه يحدد من هو صاحب الوجه. مكتبة face_recognition هي من أسهل المكتبات في بايثون والمبنية على Dlib لتقديم دقة عالية بأقل عدد من الأسطر.",
      "prototype": "import face_recognition\nencodings = face_recognition.face_encodings(image)\nmatches = face_recognition.compare_faces(known_encodings, unknown_encoding)",
      "parameters": "image: صورة كـ مصفوفة، known_encodings: بصمات معروفة، unknown_encoding: البصمة المجهولة.",
      "return_value": "قائمة منطقية تحتوي True أو False.",
      "example": "import face_recognition\nknown_img = face_recognition.load_image_file('me.jpg')\nknown_enc = face_recognition.face_encodings(known_img)[0]\nunk_img = face_recognition.load_image_file('test.jpg')\nunk_enc = face_recognition.face_encodings(unk_img)[0]\nresult = face_recognition.compare_faces([known_enc], unk_enc)\nprint('Match?', result[0])"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس تطبيق ذكاء اصطناعي: التعرف على الوجوه لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تحديد أماكن الوجوه",
        "code": "face_locations = face_recognition.face_locations(image)",
        "expected_output": "إحداثيات الصناديق المحيطة بالوجوه.",
        "explanation": "قبل التعرف على الشخص، يجب إيجاد موقع الوجوه في الصورة."
      },
      {
        "type": "wrong",
        "title": "استخراج بصمة من صورة بلا وجوه",
        "code": "encodings = face_recognition.face_encodings(empty_image)[0]",
        "error_message": "IndexError: list index out of range",
        "explanation": "محاولة الوصول للعنصر الأول لقائمة فارغة (لا وجوه) سيسبب خطأ."
      },
      {
        "type": "mistake",
        "title": "عدم تقليل حجم صورة الفيديو",
        "explanation": "معالجة الفيديو بالحجم الكامل بطيء، تصغير الإطار يزيد سرعة المعالجة المباشرة."
      },
      {
        "type": "use_case",
        "title": "الحضور والانصراف الذكي",
        "explanation": "تسجيل حضور الموظفين بالتعرف على الوجه عبر الكاميرا."
      },
      {
        "type": "challenge",
        "title": "تحدي: تعديل التسامح (Tolerance)",
        "code": "matches = face_recognition.compare_faces([known], unknown, tolerance=0.5)",
        "expected_output": "تطابق أكثر صرامة.",
        "explanation": "تقليل نسبة التسامح يقلل الخطأ، مفيد للأنظمة الأمنية."
      }
    ],
    "lesson_type": "capstone",
    "exam_data": {
      "title": "اختبار التعرف على الوجوه",
      "questions": [
        {
          "question": "ما الناتج من دالة face_encodings() لوجه واحد؟",
          "options": [
            "صورة مقصوصة للوجه",
            "مصفوفة من 128 رقماً تمثل الخصائص (البصمة)",
            "اسم الشخص",
            "متغير True/False"
          ],
          "correct_answer": "مصفوفة من 128 رقماً تمثل الخصائص (البصمة)",
          "explanation": "الدالة تحول الوجه لمتجه رياضي ليسهل مقارنته."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 75: تطبيق ذكاء اصطناعي: التعرف على الوجوه",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 75: تطبيق ذكاء اصطناعي: التعرف على الوجوه",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "ننتقل لمجال حيوي آخر: أمن المعلومات (Cybersecurity)، ونستكشف دور بايثون فيه.",
      "description": "أمن المعلومات يعنى بحماية الأنظمة. بايثون هي اللغة المفضلة للخبراء والقراصنة الأخلاقيين بفضل مكتباتها القوية للشبكات وتشفير البيانات وأتمتة المهام.",
      "prototype": "import hashlib\nimport socket",
      "parameters": "مدخلات مثل البورتات أو النصوص، وتتنوع المخرجات حسب الأداة الأمنية.",
      "return_value": "بيانات حالة الشبكة أو نصوص مشفرة.",
      "example": "import hashlib\npwd = 'my_secure_password'.encode()\nhashed = hashlib.sha256(pwd).hexdigest()\nprint('Hash:', hashed)"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس أساسيات أمن المعلومات في بايثون لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "توليد بصمة نصية (Hash)",
        "code": "hashlib.md5(b'hello').hexdigest()",
        "expected_output": "سلسلة الهاش للحرفين.",
        "explanation": "تستخدم الهاش للتحقق من سلامة البيانات كونه لا يعكس للنص الأصلي."
      },
      {
        "type": "wrong",
        "title": "إرسال نصوص للهاش بلا تحويل",
        "code": "hashlib.sha256('hello')",
        "error_message": "TypeError: Unicode-objects must be encoded",
        "explanation": "خوارزميات الهاش تتعامل مع البايتات (Bytes)، فيجب استخدام encode()."
      },
      {
        "type": "mistake",
        "title": "استخدام MD5 لحفظ كلمات المرور",
        "explanation": "خوارزمية MD5 ضعيفة، وينصح بـ SHA-256 أو bcrypt لزيادة الأمان."
      },
      {
        "type": "use_case",
        "title": "التحقق من سلامة الملفات",
        "explanation": "مواقع التحميل توفر كود Hash للتأكد أن الملف لم يتم التلاعب به."
      },
      {
        "type": "challenge",
        "title": "تحدي: أداة تحقق لكلمة المرور",
        "code": "if hashlib.sha256(pwd.encode()).hexdigest() == stored_hash:\n    print('مسموح')",
        "expected_output": "تحقق آمن.",
        "explanation": "يتم فحص الهاش المدخل مع الهاش المخزن بدلا من مقارنة النص الصريح."
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار أساسيات أمن المعلومات",
      "questions": [
        {
          "question": "لماذا بايثون شائعة في الأمن السيبراني؟",
          "options": [
            "لا تتعرض للاختراق",
            "تسهل أتمتة السكريبتات وتوفر مكتبات ضخمة",
            "تعمل فقط على لينكس",
            "كودها مشفر دائما"
          ],
          "correct_answer": "تسهل أتمتة السكريبتات وتوفر مكتبات ضخمة",
          "explanation": "بايثون تمكن المحترفين من أتمتة الفحوصات الأمنية بسرعة."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 76: أساسيات أمن المعلومات في بايثون",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 76: أساسيات أمن المعلومات في بايثون",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "سنتعلم فن التشفير (Cryptography) لإخفاء المعلومات الحساسة.",
      "description": "التشفير هو تحويل نص مقروء لغير مفهوم. مكتبة cryptography قوية لاستخدام التشفير المتماثل.",
      "prototype": "from cryptography.fernet import Fernet\nkey = Fernet.generate_key()\ncipher_suite = Fernet(key)",
      "parameters": "key: المفتاح السري كبايتات. data: البايتات المراد تشفيرها.",
      "return_value": "نص مشفر غير مقروء.",
      "example": "from cryptography.fernet import Fernet\nkey = Fernet.generate_key()\nfernet = Fernet(key)\nmsg = 'سر خطير'.encode()\nencrypted = fernet.encrypt(msg)\nprint(encrypted)"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس تشفير النصوص (Cryptography) لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "توليد مفتاح تشفير",
        "code": "key = Fernet.generate_key()",
        "expected_output": "سلسلة عشوائية طويلة كبايتات.",
        "explanation": "المفتاح هو السر، بدونه لا يمكن فك التشفير."
      },
      {
        "type": "wrong",
        "title": "تشفير نص بدون Bytes",
        "code": "fernet.encrypt('secret')",
        "error_message": "TypeError: data must be bytes.",
        "explanation": "يجب تحويل النص بـ encode() قبل التشفير."
      },
      {
        "type": "mistake",
        "title": "توليد مفتاح جديد دائماً",
        "explanation": "توليد مفتاح جديد يمنعك من قراءة بياناتك المشفرة بالمفتاح القديم."
      },
      {
        "type": "use_case",
        "title": "تأمين الرسائل",
        "explanation": "التشفير يضمن عدم قراءة البيانات إلا للمرسل والمستقبل المتفقين."
      },
      {
        "type": "challenge",
        "title": "تحدي: حفظ المفتاح في ملف",
        "code": "with open('key.key', 'wb') as f:\n    f.write(key)",
        "expected_output": "إنشاء ملف آمن.",
        "explanation": "تخزن المفاتيح غالباً في ملفات لتستخدم لاحقاً."
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار التشفير",
      "questions": [
        {
          "question": "ما الذي يمثله المتغير Key في نظام Fernet؟",
          "options": [
            "النص المشفر النهائي",
            "كلمة مرور نصية",
            "مفتاح عشوائي لتشفير وفك البيانات",
            "دالة التشفير"
          ],
          "correct_answer": "مفتاح عشوائي لتشفير وفك البيانات",
          "explanation": "يستخدم للعمليتين، التشفير وفك التشفير."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 77: تشفير النصوص (Cryptography)",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 77: تشفير النصوص (Cryptography)",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "بعد التشفير، نتعلم فك التشفير لاستعادة النص.",
      "description": "استرجاع النص باستخدام المفتاح ذاته الذي تم استخدامه في التشفير.",
      "prototype": "fernet = Fernet(key)\ndata = fernet.decrypt(token)\ntext = data.decode()",
      "parameters": "key: المفتاح الأصلي. token: النص المشفر.",
      "return_value": "النص المقروء الأصلي.",
      "example": "fernet = Fernet(key)\ndecrypted = fernet.decrypt(encrypted)\nprint('Original:', decrypted.decode())"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس فك التشفير لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "فك التشفير وإظهار النص",
        "code": "plain = fernet.decrypt(token).decode()",
        "expected_output": "النص الأصلي.",
        "explanation": "بالمفتاح الصحيح نعود للنص المفهوم."
      },
      {
        "type": "wrong",
        "title": "استخدام مفتاح خاطئ",
        "code": "wrong_fernet.decrypt(encrypted)",
        "error_message": "InvalidToken",
        "explanation": "يرمي هذا الخطأ ليدل على تلاعب أو مفتاح خطأ."
      },
      {
        "type": "mistake",
        "title": "نسيان decode()",
        "explanation": "البيانات تفك كـ Bytes ويجب تحويلها لنص بنهاية المطاف."
      },
      {
        "type": "use_case",
        "title": "قواعد البيانات الآمنة",
        "explanation": "تفك تشفير البيانات بالذاكرة لبرهة لاستخدامها ثم تحذف."
      },
      {
        "type": "challenge",
        "title": "تحدي: التقاط محاولة الفشل",
        "code": "try:\n    fernet.decrypt(token)\nexcept InvalidToken:\n    print('خطأ بالمفتاح')",
        "expected_output": "تنبيه بدلاً من انهيار البرنامج.",
        "explanation": "التطبيقات تستخدم try-except لتجنب توقف البرنامج عند فشل المفتاح."
      }
    ],
    "lesson_type": "ai_challenge",
    "exam_data": {
      "title": "اختبار فك التشفير",
      "questions": [
        {
          "question": "ما الخطأ الذي يعود إذا فشل التشفير بمفتاح Fernet؟",
          "options": [
            "ValueError",
            "InvalidToken",
            "TypeError",
            "DecryptionError"
          ],
          "correct_answer": "InvalidToken",
          "explanation": "للتأكيد على عدم موثوقية المفتاح أو النص."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 78: فك التشفير",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 78: فك التشفير",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "سندخل إلى عالم الشبكات، لنتعلم كيفية فحص المنافذ والتعرف على الخدمات المفتوحة.",
      "description": "فحص المنافذ هو تقنية لمعرفة المنافذ المفتوحة بخادم معين. نستخدم مكتبة socket لمحاولة الاتصال، إن نجح الاتصال فالمنفذ مفتوح.",
      "prototype": "import socket\ns = socket.socket()\nres = s.connect_ex((ip, port))",
      "parameters": "ip: الهدف، port: المنفذ. AF_INET: للـ IPv4. SOCK_STREAM: للـ TCP.",
      "return_value": "الرقم 0 للنجاح (مفتوح)، أو رقم آخر للخطأ (مغلق).",
      "example": "import socket\ndef scan(ip, port):\n    s = socket.socket()\n    s.settimeout(1)\n    res = s.connect_ex((ip, port))\n    s.close()\n    return res == 0\nprint('Port 80 open?', scan('google.com', 80))"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس فحص المنافذ (Port Scanning) لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "فحص منفذ ويب",
        "code": "scan('google.com', 80)",
        "expected_output": "True",
        "explanation": "منفذ الويب 80 دائماً مفتوح بمواقع الإنترنت."
      },
      {
        "type": "wrong",
        "title": "استخدام connect بدلاً من connect_ex",
        "code": "s.connect((ip, port))",
        "error_message": "ConnectionRefusedError",
        "explanation": "connect_ex تعود برمز صامت بينما connect ترمي خطأ وتنهي البرنامج."
      },
      {
        "type": "mistake",
        "title": "نسيان s.close()",
        "explanation": "عدم إغلاق المنافذ يستهلك النظام ويسبب حظراً من المستهدف."
      },
      {
        "type": "use_case",
        "title": "اكتشاف الثغرات",
        "explanation": "البداية للمخترق أو الخبير الأمني هي إيجاد المنافذ واستغلالها."
      },
      {
        "type": "challenge",
        "title": "تحدي: تحديد Timeout",
        "code": "s.settimeout(0.5)",
        "expected_output": "فحص أسرع بكثير.",
        "explanation": "مهلة الانتظار تسرّع الفحص لئلا يعلق طويلاً بمنافذ مسدودة."
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار فحص المنافذ",
      "questions": [
        {
          "question": "ما معنى إرجاع 0 من connect_ex؟",
          "options": [
            "فشل الاتصال",
            "الاتصال تم بنجاح والمنفذ مفتوح",
            "الآي بي غير موجود",
            "خطأ برمجي"
          ],
          "correct_answer": "الاتصال تم بنجاح والمنفذ مفتوح",
          "explanation": "الرقم الصفر يعبر عن النتيجة الإيجابية بدون أخطاء بالأنظمة الشبيهة بـ C."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 79: فحص المنافذ (Port Scanning)",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 79: فحص المنافذ (Port Scanning)",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "تحويل مفهوم فحص المنافذ إلى أداة متكاملة وسريعة باستخدام البرمجة المتزامنة.",
      "description": "سنبني Port Scanner. فحص 65535 منفذ بالترتيب بطيء، لذا نستخدم الخيوط (Threading) والطوابير لفحص المنافذ بالتزامن كأداة Nmap.",
      "prototype": "import threading\nimport queue\nq = queue.Queue()",
      "parameters": "Queue للطابور، و Threads للعمال المنفذين.",
      "return_value": "تقرير بالمنافذ المفتوحة بفترة زمنية قصيرة.",
      "example": "import socket, threading, queue\nq = queue.Queue()\nfor p in range(1, 100): q.put(p)\n\ndef worker():\n    while not q.empty():\n        port = q.get()\n        s = socket.socket()\n        s.settimeout(0.5)\n        if s.connect_ex(('127.0.0.1', port)) == 0:\n            print(f'Port {port} Open')\n        s.close()\n        q.task_done()\n\nfor i in range(10):\n    threading.Thread(target=worker, daemon=True).start()\nq.join()"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس تطبيق: أداة فحص الشبكات لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "توزيع العمل عبر الطابور",
        "code": "port = q.get()",
        "expected_output": "كل عامل يأخذ مهمته بسلام دون التداخل.",
        "explanation": "الطابور آمن للمتعدد ليضمن عدم تكرار الفحص."
      },
      {
        "type": "wrong",
        "title": "إنشاء Thread لكل منفذ",
        "code": "for i in range(65535): Thread(target=scan).start()",
        "error_message": "RuntimeError",
        "explanation": "إنشاء آلاف الخيوط يرهق النظام."
      },
      {
        "type": "mistake",
        "title": "نسيان q.join()",
        "explanation": "سينتهي البرنامج فوراً دون انتظار إنهاء الفحص من قبل العمال."
      },
      {
        "type": "use_case",
        "title": "تدقيق الخوادم",
        "explanation": "تشغيل يومي للتأكد من أمن شبكة الشركة."
      },
      {
        "type": "challenge",
        "title": "تحدي: جلب اسم الخدمة",
        "code": "print(socket.getservbyport(80))",
        "expected_output": "http",
        "explanation": "إعطاء اسم الخدمة للمنفذ لزيادة فائدة الأداة."
      }
    ],
    "lesson_type": "milestone",
    "exam_data": {
      "title": "اختبار فحص الشبكات والأدوات",
      "questions": [
        {
          "question": "لماذا نستخدم Threading بدلا من حلقة For للمنافذ؟",
          "options": [
            "لأن For ممنوعة في الشبكات",
            "لجعل فحص مئات المنافذ أسرع بالتعامل معها بالتزامن",
            "لأنها طلب مكتبة Socket الأساسي",
            "لإخفاء الاتصال"
          ],
          "correct_answer": "لجعل فحص مئات المنافذ أسرع بالتعامل معها بالتزامن",
          "explanation": "يقلص الوقت من ساعات لثوانٍ بموازاة فترة الانتظار."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 80: تطبيق: أداة فحص الشبكات",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 80: تطبيق: أداة فحص الشبكات",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا نتعلم المكتبات المتقدمة في بايثون؟ لكي لا نعيد اختراع العجلة. بايثون تحتوي على مكتبات مدمجة قوية مثل collections و itertools توفر هياكل بيانات متقدمة وطرق سريعة للتعامل مع المجموعات بطرق احترافية.",
      "description": "المكتبات المتقدمة تتيح لك كتابة كود أكثر كفاءة وقابلية للقراءة. توفر وحدة collections أدوات مثل Counter و defaultdict، بينما تقدم itertools أدوات قوية للتعامل مع التكرار وتوليد التباديل والتوافيق.",
      "prototype": "import collections\nimport itertools\n\n# مثال:\ncounter_obj = collections.Counter(iterable)",
      "parameters": "iterable: أي كائن يمكن التكرار عليه (مثل قائمة أو نص). يمكن تمريره لأدوات مثل Counter لتحليله.",
      "return_value": "تختلف النتيجة حسب الأداة المستخدمة؛ فمثلاً Counter يرجع هيكلاً شبيهاً بالقاموس يحتوي على العناصر وتكراراتها.",
      "example": "from collections import Counter\n\nwords = ['apple', 'banana', 'apple']\nword_counts = Counter(words)\nprint(word_counts['apple'])  # يطبع: 2"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس المكتبات المتقدمة لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "استخدام defaultdict",
        "code": "from collections import defaultdict\n\nd = defaultdict(int)\nd['a'] += 1\nprint(d['a'], d['b'])",
        "expected_output": "1 0",
        "explanation": "defaultdict(int) يجعل القيمة الافتراضية لأي مفتاح غير موجود 0، مما يبسط عمليات العد والجمع بدون التحقق من وجود المفتاح أولاً."
      },
      {
        "type": "wrong",
        "title": "محاولة تعديل مفتاح غير موجود",
        "code": "d = {}\nd['a'] += 1",
        "error_message": "KeyError: 'a'",
        "explanation": "القاموس العادي يرمي خطأ KeyError عند استدعاء مفتاح غير مسجل، استخدم defaultdict أو تابع get() لتفادي ذلك."
      },
      {
        "type": "mistake",
        "title": "استخدام حلقات التكرار للعد",
        "explanation": "المبرمجون المبتدئون يكتبون حلقات for معقدة لحساب عدد مرات تكرار العناصر، بينما Counter صُمم خصيصاً لإنجاز هذه المهمة بسطر واحد وبكفاءة أعلى."
      },
      {
        "type": "use_case",
        "title": "تحليل البيانات النصية",
        "explanation": "تستخدم هذه المكتبات في استخراج أكثر الكلمات شيوعاً في مقالات الأخبار أو تحليل ردود الأفعال بناءً على تكرار الكلمات."
      },
      {
        "type": "challenge",
        "title": "استخراج أكثر عنصر تكراراً",
        "code": "from collections import Counter\ndata = ['x', 'y', 'x', 'z', 'x', 'y']\n# أكمل الكود للحصول على العنصر الأكثر تكراراً مع عدده\ntop_item = ___\nprint(top_item)",
        "expected_output": "[('x', 3)]",
        "explanation": "استخدم التابع Counter(data).most_common(1) للحصول على أكثر عنصر تكراراً كقائمة من الـ tuples."
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار المكتبات المتقدمة",
      "questions": [
        {
          "question": "أي وحدة مدمجة تستخدم بشكل أساسي للتعامل المتقدم مع التكرارات الرياضية مثل التباديل؟",
          "options": [
            "collections",
            "itertools",
            "math",
            "functools"
          ],
          "correct_answer": "itertools",
          "explanation": "وحدة itertools تحتوي على دوال مثل permutations و combinations التي تنشئ التباديل الرياضية بكفاءة."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 81: المكتبات المتقدمة",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 81: المكتبات المتقدمة",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا نحتاج التوازي (Threading)؟ عندما يكون لدينا مهام تتطلب انتظاراً طويلاً (مثل تحميل ملفات من الإنترنت)، يمكن للتوازي أن ينفذ هذه المهام في وقت واحد تقريباً دون تجميد البرنامج الأساسي.",
      "description": "التوازي (Threading) يسمح بتشغيل عدة أجزاء من الكود بشكل متزامن داخل نفس العملية (Process). هو مفيد جداً للمهام المعتمدة على المدخلات والمخرجات (I/O-bound) مثل الشبكات أو قراءة الملفات.",
      "prototype": "import threading\n\nthread = threading.Thread(target=my_function, args=(arg1,))\nthread.start()\nthread.join()",
      "parameters": "target: الدالة المراد تشغيلها في المسار المستقل.\nargs: القيم الممررة للدالة كـ tuple.",
      "return_value": "تابع start() يبدأ التشغيل فوراً، وتابع join() يجبر البرنامج الأساسي على الانتظار حتى ينتهي المسار (Thread) من عمله.",
      "example": "import threading\nimport time\n\ndef print_numbers():\n    time.sleep(1)\n    print('تم التنفيذ')\n\nt = threading.Thread(target=print_numbers)\nt.start()\nprint('في الانتظار...')\nt.join()"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس التوازي (Threading) لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تشغيل مسارين معاً",
        "code": "import threading\ndef task(name): print(f'Hello {name}')\n\nt1 = threading.Thread(target=task, args=('A',))\nt2 = threading.Thread(target=task, args=('B',))\nt1.start(); t2.start()\nt1.join(); t2.join()",
        "expected_output": "Hello A\nHello B",
        "explanation": "تم تشغيل المسارين في وقت متقارب جداً، ثم استخدمنا join للتأكد من انتهائهما قبل استكمال البرنامج."
      },
      {
        "type": "wrong",
        "title": "نسيان استدعاء الدالة بشكل خاطئ",
        "code": "t = threading.Thread(target=task()) # خطأ",
        "error_message": "يتم تنفيذ الدالة فورا في المسار الرئيسي",
        "explanation": "يجب تمرير اسم الدالة بدون الأقواس المزدوجة target=task، وإلا سيتم استدعاؤها في المسار الأساسي (Main thread) قبل إنشاء المسار الجديد."
      },
      {
        "type": "mistake",
        "title": "استخدام Threading لتسريع العمليات الحسابية",
        "explanation": "يعتقد البعض أن Threading يسرّع العمليات الحسابية الثقيلة، ولكن بسبب قفل المترجم العالمي (GIL) في بايثون، لا تستفيد العمليات الحسابية (CPU-bound) منه، ويفضل استخدام Multiprocessing."
      },
      {
        "type": "use_case",
        "title": "تطبيقات الويب وسحب البيانات",
        "explanation": "عند بناء أداة Web Scraper لجلب بيانات من 100 موقع، يمكن استخدام Threading لتحميل الصفحات بالتزامن بدلاً من انتظار كل صفحة على حدة."
      },
      {
        "type": "challenge",
        "title": "تشغيل المسار",
        "code": "import threading\ndef work(): print('Working')\nt = threading.Thread(target=work)\n# ابدأ تشغيل المسار هنا\n___",
        "expected_output": "Working",
        "explanation": "يجب استخدام التابع start() لبدء عمل الكائن t."
      }
    ],
    "lesson_type": "scenario",
    "exam_data": {
      "title": "اختبار Threading",
      "questions": [
        {
          "question": "أي نوع من المهام يكون فيه استخدام Threading أكثر فاعلية في بايثون؟",
          "options": [
            "العمليات الحسابية المعقدة",
            "مهام الإدخال والإخراج (I/O) كالشبكات",
            "تشفير البيانات",
            "التعامل مع المصفوفات الضخمة"
          ],
          "correct_answer": "مهام الإدخال والإخراج (I/O) كالشبكات",
          "explanation": "بسبب قفل GIL، يعد الـ Threading مناسباً للمهام المعتمدة على الانتظار (I/O-bound) مثل طلبات الشبكة، وليس العمليات الحسابية."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 82: التوازي (Threading)",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 82: التوازي (Threading)",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا نتعلم المعالجة المتعددة (Multiprocessing)؟ لتجاوز قيود بايثون مع الـ GIL وتشغيل العمليات الحسابية الثقيلة في نفس الوقت باستخدام جميع أنوية المعالج المتاحة.",
      "description": "تسمح وحدة multiprocessing بإنشاء عمليات (Processes) منفصلة بالكامل، لكل منها مساحة ذاكرة خاصة وقفل GIL منفصل. هذا يجعلها الخيار المثالي للبرامج التي تتطلب استخداماً كثيفاً للمعالج (CPU-bound) مثل معالجة الصور وتحليل البيانات.",
      "prototype": "import multiprocessing\n\np = multiprocessing.Process(target=my_func, args=(arg1,))\np.start()\np.join()",
      "parameters": "target: الدالة المستهدفة للتنفيذ.\nargs: المعاملات المرسلة إليها كـ tuple.",
      "return_value": "تُنفذ العملية في معالج منفصل، ولا تعيد قيم مباشرة للعملية الأم إلا باستخدام أدوات مشاركة مثل Queue أو Pipe.",
      "example": "import multiprocessing\n\ndef calc_square(n):\n    print(n * n)\n\nif __name__ == '__main__':\n    p = multiprocessing.Process(target=calc_square, args=(5,))\n    p.start()\n    p.join()"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس المعالجة المتعددة (Multiprocessing) لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "استخدام Pool للمعالجة",
        "code": "import multiprocessing\ndef square(x): return x * x\nif __name__ == '__main__':\n    with multiprocessing.Pool(processes=2) as pool:\n        res = pool.map(square, [1, 2, 3])\n        print(res)",
        "expected_output": "[1, 4, 9]",
        "explanation": "استخدام Pool يسهل توزيع قائمة من البيانات على مجموعة محددة من العمليات (Workers) وجمع نتائجها في قائمة."
      },
      {
        "type": "wrong",
        "title": "عدم استخدام كتلة الحماية __main__",
        "code": "import multiprocessing\np = multiprocessing.Process(target=print)\np.start()",
        "error_message": "RuntimeError: An attempt has been made to start a new process...",
        "explanation": "في نظام ويندوز خصوصاً، يجب دائماً وضع كود إنشاء العمليات داخل if __name__ == '__main__': لتفادي الاستدعاء اللانهائي عند إنشاء عمليات جديدة."
      },
      {
        "type": "mistake",
        "title": "مشاركة المتغيرات العامة",
        "explanation": "يعتقد البعض أن تغيير متغير عام داخل العملية سينعكس على باقي العمليات، ولكن كل عملية لها مساحة ذاكرة مستقلة؛ يجب استخدام Shared Memory أو Queues."
      },
      {
        "type": "use_case",
        "title": "معالجة الفيديو والصور",
        "explanation": "عند تحويل آلاف الصور إلى صيغة أخرى، يمكن توزيع الصور على أنوية المعالج المختلفة لتسريع العملية بشكل هائل."
      },
      {
        "type": "challenge",
        "title": "إنشاء Process",
        "code": "import multiprocessing\ndef say_hi(name):\n    print('Hi', name)\n\nif __name__ == '__main__':\n    # مرر المتغير كـ tuple بفاصلة في النهاية\n    p = multiprocessing.Process(target=say_hi, args=___)\n    p.start()\n    p.join()",
        "expected_output": "Hi Ali",
        "explanation": "تذكر أن المعامل args يجب أن يكون tuple، وبالتالي لتمرير عنصر واحد يجب كتابته هكذا: ('Ali',)"
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار Multiprocessing",
      "questions": [
        {
          "question": "لماذا يُفضل استخدام Multiprocessing بدلاً من Threading في العمليات الحسابية المعقدة؟",
          "options": [
            "لأنه يتخطى مشكلة قفل المترجم GIL بإنشاء عملية مستقلة تماماً",
            "لأنه أسهل في كتابة الكود",
            "لأنه يستهلك ذاكرة أقل بكثير",
            "لأنه يعمل على متصفح الويب"
          ],
          "correct_answer": "لأنه يتخطى مشكلة قفل المترجم GIL بإنشاء عملية مستقلة تماماً",
          "explanation": "قفل GIL يمنع تشغيل أكثر من خيط برمجي (Thread) واحد لتعليمات بايثون بنفس الوقت، بينما الـ Process الجديد يملك GIL خاصاً به ومعالجاً منفرداً."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 83: المعالجة المتعددة (Multiprocessing)",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 83: المعالجة المتعددة (Multiprocessing)",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا البرمجة غير المتزامنة (Asyncio)؟ تخيل أن طاهياً ينتظر نضج الكعكة ولا يفعل شيئاً! Asyncio يسمح للكود بالانتقال للعمل على مهام أخرى أثناء فترات الانتظار بدلاً من تجميد البرنامج.",
      "description": "وحدة asyncio هي مكتبة مبنية لكتابة كود متزامن باستخدام التركيبات اللغوية async و await. تدير حلقة الأحداث (Event Loop) المهام وتقوم بالتبديل بينها بكفاءة عالية، مما يجعلها مثالية لتطبيقات الشبكات وواجهات برمجة التطبيقات (APIs) العالية الأداء.",
      "prototype": "import asyncio\n\nasync def my_task():\n    await asyncio.sleep(1)\n    return 'Done'\n\nasyncio.run(my_task())",
      "parameters": "async def: لتعريف دالة غير متزامنة (Coroutine).\nawait: تعليق التنفيذ حتى تنتهي العملية المنتظرة.",
      "return_value": "الدالة المعرفة بـ async ترجع كائن Coroutine لا يتم تنفيذه فعلياً حتى يتم انتظاره بـ await أو إدخاله في الـ Event loop بـ asyncio.run.",
      "example": "import asyncio\n\nasync def greet():\n    print('Hello')\n    await asyncio.sleep(1)\n    print('World')\n\nasyncio.run(greet())"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس البرمجة غير المتزامنة (Asyncio) لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تشغيل مهام بالتوازي",
        "code": "import asyncio\nasync def delay(n):\n    await asyncio.sleep(n)\n    return n\n\nasync def main():\n    res = await asyncio.gather(delay(2), delay(1))\n    print(res)\nasyncio.run(main())",
        "expected_output": "[2, 1]",
        "explanation": "باستخدام asyncio.gather يمكننا تشغيل عدة مهام (Coroutines) في نفس الوقت والانتظار حتى تنتهي جميعها."
      },
      {
        "type": "wrong",
        "title": "استدعاء Coroutine مباشرة",
        "code": "async def say_hi(): print('Hi')\nsay_hi()",
        "error_message": "RuntimeWarning: coroutine 'say_hi' was never awaited",
        "explanation": "الدوال غير المتزامنة لا يمكن تنفيذها باستدعاء عادي، بل يجب استخدام await داخل دالة async أخرى، أو تمريرها إلى asyncio.run()."
      },
      {
        "type": "mistake",
        "title": "استخدام time.sleep مع async",
        "explanation": "استخدام time.sleep() العادي سيجمد حلقة الأحداث بأكملها ويوقف باقي المهام. يجب استخدام asyncio.sleep() لكي تتنازل المهمة عن التحكم وتسمح لغيرها بالعمل."
      },
      {
        "type": "use_case",
        "title": "خوادم الويب (Web Servers)",
        "explanation": "أطر العمل الحديثة مثل FastAPI تستخدم asyncio للرد على آلاف الطلبات في نفس الوقت دون حجز موارد النظام."
      },
      {
        "type": "challenge",
        "title": "تطبيق الدالة بشكل غير متزامن",
        "code": "import asyncio\nasync def task():\n    # انتظر ثانية واحدة بطريقة صحيحة\n    ___ asyncio.sleep(1)\n    print('Done')\nasyncio.run(task())",
        "expected_output": "Done",
        "explanation": "تحتاج الكلمة المفتاحية await للانتظار على الدالة غير المتزامنة."
      }
    ],
    "lesson_type": "debugging",
    "exam_data": {
      "title": "اختبار Asyncio",
      "questions": [
        {
          "question": "ما هي الكلمة المفتاحية المستخدمة لإيقاف تنفيذ كوروتين مؤقتاً حتى تكتمل مهمة أخرى غير متزامنة؟",
          "options": [
            "yield",
            "await",
            "wait",
            "pause"
          ],
          "correct_answer": "await",
          "explanation": "الكلمة المفتاحية await تُستخدم لتعليق الكوروتين الحالي والسماح لحلقة الأحداث بالانتقال لمهمة أخرى حتى تكتمل العملية المطلوبة."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 84: البرمجة غير المتزامنة (Asyncio)",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 84: البرمجة غير المتزامنة (Asyncio)",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا يجب علينا اختبار الكود (Unit Testing)؟ لضمان أن الدوال الخاصة بنا تعمل كما هو متوقع، وتجنب ظهور أخطاء غير مرغوبة عند إضافة ميزات جديدة لاحقاً في المشروع.",
      "description": "مكتبة unittest هي مكتبة مدمجة توفر إطار عمل لتنظيم وكتابة وتشغيل اختبارات الوحدة. تمكنك من وضع افتراضات (Assertions) للتأكد من أن مخرجات الكود تطابق المخرجات المتوقعة في حالات الاستخدام المختلفة، مما يبني الثقة في متانة التطبيق.",
      "prototype": "import unittest\n\nclass TestMyFunction(unittest.TestCase):\n    def test_case(self):\n        self.assertEqual(my_func(), expected_result)",
      "parameters": "unittest.TestCase: الفئة الأساسية التي ترث منها لإنشاء حالات اختبار.\nassertEqual(a, b): أداة تأكيد تتحقق من أن القيمة a تساوي القيمة b.",
      "return_value": "عند تشغيل الاختبارات عبر unittest.main()، يظهر تقرير يوضح الاختبارات الناجحة بحرف (OK) أو النقاط (.) والراسية بكلمة (FAIL).",
      "example": "import unittest\n\ndef add(a, b): return a + b\n\nclass TestMath(unittest.TestCase):\n    def test_add(self):\n        self.assertEqual(add(2, 3), 5)\n\n# لتشغيل الاختبارات\n# unittest.main()"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس اختبار الكود (Unit Testing) لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "اختبار القيم المنطقية والاستثناءات",
        "code": "import unittest\nclass TestLogic(unittest.TestCase):\n    def test_bool(self):\n        self.assertTrue('a' in 'abc')\n    def test_error(self):\n        with self.assertRaises(ZeroDivisionError):\n            x = 1 / 0",
        "expected_output": "OK",
        "explanation": "توفر مكتبة unittest أدوات متعددة مثل assertTrue للتحقق من القيم المنطقية و assertRaises للتحقق من إطلاق الأخطاء."
      },
      {
        "type": "wrong",
        "title": "نسيان كلمة test_ في اسم الدالة",
        "code": "class MyTest(unittest.TestCase):\n    def check_value(self):\n        self.assertEqual(1, 1)",
        "error_message": "لا يتم تنفيذ هذا الاختبار بتاتاً.",
        "explanation": "إطار عمل unittest يبحث تلقائياً عن الدوال التي يبدأ اسمها بكلمة test_ فقط لتشغيلها. الدالة check_value سيتم تجاهلها."
      },
      {
        "type": "mistake",
        "title": "كتابة اختبار معتمد على بيانات حية",
        "explanation": "من الأخطاء الشائعة استدعاء API أو قاعدة بيانات حقيقية داخل الـ Unit test. يجب أن تكون اختبارات الوحدة سريعة ومستقلة، وعادة ما نستخدم تقنية Mocking للبيانات الخارجية."
      },
      {
        "type": "use_case",
        "title": "تطوير التطبيقات المدفوع بالاختبار (TDD)",
        "explanation": "في بيئات العمل الاحترافية، تُكتب اختبارات unittest قبل كتابة الكود الفعلي نفسه لضمان أن كل سطر برمجي يُلبي متطلبات المشروع بدقة."
      },
      {
        "type": "challenge",
        "title": "تأكيد النتيجة",
        "code": "import unittest\ndef mul(x, y): return x * y\nclass TestMul(unittest.TestCase):\n    def test_mul(self):\n        # تأكد أن حاصل ضرب 3 و 4 هو 12\n        ___.assertEqual(mul(3, 4), 12)",
        "expected_output": "OK",
        "explanation": "يجب استخدام self لاستدعاء التابع assertEqual من الكلاس الموروث TestCase."
      }
    ],
    "lesson_type": "project",
    "exam_data": {
      "title": "اختبار Unit Testing",
      "questions": [
        {
          "question": "ما هو التابع المستخدم في unittest للتحقق من أن استدعاء دالة معينة سيؤدي إلى حدوث خطأ (Exception) محدد؟",
          "options": [
            "assertError",
            "assertRaises",
            "assertException",
            "catchError"
          ],
          "correct_answer": "assertRaises",
          "explanation": "التابع self.assertRaises يستخدم مع كتلة with للتحقق من رفع استثناء معين من الكود المختبر."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 85: اختبار الكود (Unit Testing)",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 85: اختبار الكود (Unit Testing)",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا نستكشف البرمجة الدالة (Functional)؟ لأنها تساعدنا في كتابة كود نظيف (Clean Code) خالٍ من الآثار الجانبية، مما يجعله أسهل في الفهم والاختبار والتطوير.",
      "description": "البرمجة الدالة هي أسلوب (Paradigm) يعتمد على استخدام الدوال النقية (Pure Functions) وتجنب تغيير حالة المتغيرات (Mutability). يوفر بايثون أدوات لدعم هذا الأسلوب عبر مكتبات مثل functools وتقديم مفاهيم الدوال ذات المراتب العليا (Higher-Order Functions) التي تقبل أو ترجع دوالاً أخرى.",
      "prototype": "from functools import reduce\n\n# دالة ذات مرتبة عليا تقبل دالة كمُعامل\ndef apply_func(func, value):\n    return func(value)",
      "parameters": "func: مرجع لدالة أخرى يتم تمريره.\nreduce: أداة تطبق دالة تراكمية على عناصر القائمة لترجع قيمة وحيدة.",
      "return_value": "تُرجع الدوال النقية دائماً نفس النتيجة عند إعطائها نفس المدخلات ولا تؤثر على أي متغيرات خارج نطاقها.",
      "example": "from functools import reduce\n\nnumbers = [1, 2, 3, 4]\nresult = reduce(lambda x, y: x * y, numbers)\nprint(result)  # حاصل ضرب جميع الأعداد: 24"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس مفاهيم متقدمة في البرمجة الدالة (Functional) لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الدوال ذات المراتب العليا (Higher-Order)",
        "code": "def shout(text): return text.upper()\n\ndef process_text(func, text):\n    return func(text)\n\nprint(process_text(shout, 'hello'))",
        "expected_output": "HELLO",
        "explanation": "مررنا الدالة shout كمُعامل (Argument) لدالة process_text بدون الأقواس المزدوجة، فتم استدعاؤها في الداخل بنجاح."
      },
      {
        "type": "wrong",
        "title": "تغيير حالة كائن خارجي (Side Effects)",
        "code": "total = 0\ndef add_to_total(x):\n    global total\n    total += x\n    return total",
        "error_message": "ليس خطأ برمجيا، لكنه خطأ تصميمي.",
        "explanation": "البرمجة الدالة تتجنب الاعتماد على المتغيرات العامة وتغييرها (Global State). يجب أن تعتمد الدالة حصراً على مدخلاتها وترجع قيمة جديدة دون التأثير بالخارج."
      },
      {
        "type": "mistake",
        "title": "الخلط بين reduce و map",
        "explanation": "البعض يحاول استخدام reduce لتحويل كل عنصر في القائمة إلى شيء آخر. الصحيح أن map مخصصة لتحويل كل عنصر، بينما reduce تستخدم لدمج وتقليص القائمة إلى نتيجة تراكمية واحدة."
      },
      {
        "type": "use_case",
        "title": "معالجة تدفقات البيانات (Data Pipelines)",
        "explanation": "في إطارات عمل البيانات الكبيرة مثل PySpark، الاعتماد الكلي يكون على البرمجة الدالة (Map-Reduce) لتوزيع المهام واستخراج النتائج بأمان وسرعة."
      },
      {
        "type": "challenge",
        "title": "تطبيق دالة تقليص",
        "code": "from functools import reduce\n# استخدم reduce لجمع الأعداد\nres = reduce(lambda x, y: ___, [10, 20, 30])\nprint(res)",
        "expected_output": "60",
        "explanation": "الدالة التراكمية في reduce يجب أن ترجع ناتج العملية بين العنصرين لكي يُمرر للخطوة التالية. الجواب هو x + y."
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار مفاهيم Functional",
      "questions": [
        {
          "question": "ما هي الميزة الأساسية للدالة النقية (Pure Function)؟",
          "options": [
            "تعمل بسرعة أكبر في كل الحالات",
            "دائما ترجع نفس النتيجة للمدخلات ذاتها ولا تُحدث أثراً جانبياً",
            "تُخزن في الذاكرة الدائمة",
            "تسمح بتعديل المتغيرات العامة بحرية"
          ],
          "correct_answer": "دائما ترجع نفس النتيجة للمدخلات ذاتها ولا تُحدث أثراً جانبياً",
          "explanation": "غياب الآثار الجانبية واستقرار المخرجات هو ما يجعل الدالة نقية ومناسبة لمفاهيم البرمجة الدالة التجريدية."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 86: مفاهيم متقدمة في البرمجة الدالة (Functional)",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 86: مفاهيم متقدمة في البرمجة الدالة (Functional)",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا نستخدم Map و Filter؟ بدلاً من كتابة حلقات for طويلة لتحويل عناصر مصفوفة أو فلترتها، يوفران طريقة أنيقة ومدمجة لتنفيذ هذه العمليات بسطر واحد وتحسين الأداء.",
      "description": "تعد دالة map() وسيلة لتطبيق دالة محددة على كل عنصر من عناصر مجموعة (كالقائمة) وإرجاع مجموعة جديدة. أما دالة filter() فتُستخدم للتحقق من شرط معين وتصفية العناصر التي ترجع True فقط عند تطبيق الدالة عليها.",
      "prototype": "map(function, iterable)\nfilter(function, iterable)",
      "parameters": "function: الدالة المراد تطبيقها.\niterable: القائمة أو السلسلة النصية المراد التكرار عليها.",
      "return_value": "ترجع هاتان الدالتان كائنات تكرارية (Iterators) في بايثون 3 لتقليل استهلاك الذاكرة. للحصول على قائمة يجب تمرير النتيجة إلى list().",
      "example": "nums = [1, 2, 3, 4]\n\n# استخدام map\nsquares = list(map(lambda x: x**2, nums))\nprint(squares)  # [1, 4, 9, 16]\n\n# استخدام filter\nevens = list(filter(lambda x: x % 2 == 0, nums))\nprint(evens)  # [2, 4]"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس دوال Map و Filter لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "استخدام دوال مدمجة مع Map",
        "code": "words = ['10', '20', '30']\nnumbers = list(map(int, words))\nprint(numbers)",
        "expected_output": "[10, 20, 30]",
        "explanation": "قمنا بتمرير الدالة المدمجة int كمعامل لدالة map لتحويل كل النصوص في القائمة إلى أرقام صحيحة بفعالية."
      },
      {
        "type": "wrong",
        "title": "نسيان تحويل النتيجة إلى List",
        "code": "res = map(str.upper, ['a', 'b'])\nprint(res)",
        "error_message": "<map object at 0x...>",
        "explanation": "دالة map في بايثون 3 ترجع كائن Map Object وليس قائمة جاهزة وذلك لاستهلاك ذاكرة أقل (Lazy evaluation). لرؤية العناصر يجب تحويله باستخدام list(res)."
      },
      {
        "type": "mistake",
        "title": "استخدام Map عندما يكون For Loop أوضح",
        "explanation": "في حال كانت العملية داخل Map معقدة جداً ومتعددة الأسطر، يصبح استخدام Map سيئاً لقابلية القراءة. List Comprehension أو For loop تكون أفضل في تلك الحالات."
      },
      {
        "type": "use_case",
        "title": "تنظيف البيانات",
        "explanation": "عند جلب بيانات من واجهة برمجية وتكون فيها مسافات زائدة وقيم فارغة، يمكن دمج map(str.strip, data) مع filter(None, data) لتنظيف القائمة بالكامل بصورة مبسطة."
      },
      {
        "type": "challenge",
        "title": "تصفية الأطوال",
        "code": "names = ['Ali', 'Abdullah', 'Mona', 'Omar']\n# فلترة الأسماء المكونة من 4 حروف أو أقل\nshort_names = list(___(lambda x: len(x) <= 4, names))\nprint(short_names)",
        "expected_output": "['Ali', 'Mona', 'Omar']",
        "explanation": "نحتاج إلى التصفية بناء على شرط، لذلك فإن الأداة المناسبة هنا هي دالة filter."
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار Map و Filter",
      "questions": [
        {
          "question": "إذا كان لدينا قائمة [1, 2, 3] وأردنا تحويلها إلى [2, 4, 6]، ما هي الدالة الأنسب؟",
          "options": [
            "filter",
            "map",
            "reduce",
            "sort"
          ],
          "correct_answer": "map",
          "explanation": "دالة map تستخدم لتحويل أو تعديل كل عنصر في القائمة بإجراء عملية رياضية معينة عليه وإرجاع العناصر محولة بنفس الترتيب."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 87: دوال Map و Filter",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 87: دوال Map و Filter",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا نتعلم دالة Lambda؟ في أحيان كثيرة نحتاج لدالة صغيرة جداً نستخدمها لمرة واحدة فقط كمعامل تمرير. كتابة دالة كاملة بكلمة def لهذه المهمة يعتبر إهداراً للوقت والمساحة.",
      "description": "دالة Lambda في بايثون هي دالة غير مسماة (Anonymous Function) يتم كتابتها في سطر واحد. تحتوي دائماً على تعبير (Expression) واحد فقط يتم إرجاع نتيجته تلقائياً، وتُستخدم بكثرة بجوار map، filter، والترتيب.",
      "prototype": "lambda arguments: expression",
      "parameters": "arguments: معامل أو أكثر مفصولة بفواصل (يمكن أن تكون بدون معاملات أيضاً).\nexpression: عملية برمجية بسيطة يتم إرجاع قيمتها كـ return ضمني.",
      "return_value": "ترجع كائن دالة يمكن استدعاؤه فوراً أو حفظه في متغير، أو تمريره كمدخل لدالة أخرى.",
      "example": "multiply = lambda x, y: x * y\nprint(multiply(3, 4))  # 12\n\n# الاستخدام الشائع مع Sort\npoints = [(1, 2), (3, 1), (5, 0)]\npoints.sort(key=lambda item: item[1])\nprint(points)  # الفرز عبر العنصر الثاني"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس دالة Lambda السريعة لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "استخدام Lambda في الفلترة",
        "code": "nums = [10, -5, 2, -1]\npositives = list(filter(lambda x: x > 0, nums))\nprint(positives)",
        "expected_output": "[10, 2]",
        "explanation": "دالة lambda هنا تعمل كشرط سريع للتحقق من كل عنصر بدون الحاجة لتعريف دالة مستقلة كاملة خارج السياق."
      },
      {
        "type": "wrong",
        "title": "محاولة إضافة أوامر متعددة",
        "code": "f = lambda x: print(x); return x * 2",
        "error_message": "SyntaxError",
        "explanation": "لا يمكن لـ Lambda أن تحتوي على أوامر (Statements) متعددة أو حلقات تكرار صريحة. يجب أن تكون تعبيراً وحيداً (Expression)."
      },
      {
        "type": "mistake",
        "title": "إسناد Lambda لمتغير بشكل دائم",
        "explanation": "بحسب الدليل القياسي لبايثون (PEP 8)، إذا أردت إعطاء الدالة اسماً فاستخدم def. الهدف من lambda هو استخدامها كدالة مجهولة ورميها فورا."
      },
      {
        "type": "use_case",
        "title": "الفرز المخصص (Custom Sorting)",
        "explanation": "عند استخدام الواجهات لترتيب قوائم المستخدمين بناء على العمر أو الرصيد الموجود بداخل قاموس، تمرير lambda كـ parameter للـ key في دالة sorted هو الحل النموذجي."
      },
      {
        "type": "challenge",
        "title": "كتابة Lambda لحساب التربيع",
        "code": "# قم بتعريف lambda تستقبل x وتعيد x تربيع\nsquare = ___\nprint(square(5))",
        "expected_output": "25",
        "explanation": "استخدم كلمة lambda تليها x، ثم النقطتين : ثم عملية التربيع x ** 2."
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار Lambda",
      "questions": [
        {
          "question": "ما هو القيد الأساسي عند كتابة دالة Lambda في بايثون؟",
          "options": [
            "لا تستطيع استقبال أكثر من معامل واحد",
            "تسمح بكتابة تعبير برمجي (Expression) واحد فقط",
            "لا يمكنها إرجاع قيم",
            "يجب تسميتها بأحرف إنجليزية كبيرة"
          ],
          "correct_answer": "تسمح بكتابة تعبير برمجي (Expression) واحد فقط",
          "explanation": "صممت Lambda لتبقى بسيطة وسطراً واحداً، لذا تمنع بايثون وضع شروط معقدة أو أوامر متعددة أو عبارات العودة (return) بشكل صريح داخلها."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 88: دالة Lambda السريعة",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 88: دالة Lambda السريعة",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا تعد تعابير List Comprehensions مهمة؟ تعكس هذه الميزة روح بايثون. إنها توفر طريقة واضحة جداً، ومقروءة، وأسرع من الحلقات التقليدية لبناء القوائم.",
      "description": "تعابير استيعاب القوائم (List Comprehensions) هي طريقة مختصرة لإنشاء قائمة جديدة بناءً على قائمة موجودة بسطر واحد. تدمج هذه الطريقة حلقة for مع الجمل الشرطية if لتكون بديلاً ممتازاً ومحسناً برمجياً لعمليات append العادية.",
      "prototype": "[expression for item in iterable if condition]",
      "parameters": "expression: ما سيتم إضافته للقائمة الجديدة (مثلاً ضرب العنصر بـ 2).\niterable: المجموعة التي يتم الدوران حولها.\ncondition: (اختياري) شرط لتصفية العناصر.",
      "return_value": "ترجع دائماً قائمة (List) جديدة محتوية على ناتج التعبير الذي وافق الشرط.",
      "example": "nums = [1, 2, 3, 4, 5]\n\n# تربيع الأعداد الزوجية فقط باستخدام List Comprehension\nresult = [x**2 for x in nums if x % 2 == 0]\nprint(result)  # [4, 16]"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس تعابير List Comprehensions لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تحويل نصوص في قائمة",
        "code": "words = ['hello', 'world', 'python']\nupper_words = [w.upper() for w in words]\nprint(upper_words)",
        "expected_output": "['HELLO', 'WORLD', 'PYTHON']",
        "explanation": "قمنا بالمرور على كل كلمة، وحولناها للأحرف الكبيرة، ووضعنا الناتج في قائمة جديدة بسطر واحد بديهي."
      },
      {
        "type": "wrong",
        "title": "تركيب شروط معقدة تضر القراءة",
        "code": "res = [x if x % 2 == 0 else y for x in a for y in b if x > 5 if y < 2]",
        "error_message": "ليس خطأ قواعدي ولكنه 'كود سيء'.",
        "explanation": "بالرغم من صحته برمجياً، التعقيد الشديد في List Comprehension يجعله غير مفهوم. في هذه الحالات، العودة للـ for loops التقليدية أفضل بكثير."
      },
      {
        "type": "mistake",
        "title": "وضع if و else بشكل خاطئ",
        "explanation": "البعض يحاول كتابة شرط if في النهاية مع else وهذا يسبب خطأ قواعدي. إذا أردت if/else للتحويل توضع قبل حلقة الـ for، أما إذا كان للفلترة فقط فتوضع في النهاية (بدون else)."
      },
      {
        "type": "use_case",
        "title": "استخراج البيانات من القواميس",
        "explanation": "عند امتلاك قائمة من القواميس (مثال: موظفين)، يمكن بسهولة إنشاء قائمة بجميع أسماء الموظفين النشطين `[emp['name'] for emp in employees if emp['is_active']]`."
      },
      {
        "type": "challenge",
        "title": "تكوين قائمة زوجية",
        "code": "numbers = [1, 2, 3, 4, 5, 6]\n# قم بإنشاء قائمة جديدة تحتوي فقط على الأعداد الأكبر من 3\nres = [x ___ x in numbers ___ x > 3]\nprint(res)",
        "expected_output": "[4, 5, 6]",
        "explanation": "الهيكل هو for متبوعة بالمجموعة، ثم if للشرط."
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار List Comprehensions",
      "questions": [
        {
          "question": "ما هي ميزة استخدام List Comprehensions مقارنة بإنشاء قائمة فارغة ثم استخدام حلقة for ودالة append()؟",
          "options": [
            "تمتلك أداء أسرع وكوداً أكثر نظافة",
            "تسمح بإيقاف التنفيذ باستخدام break",
            "لا تتطلب استهلاك ذاكرة إطلاقاً",
            "تُعتبر أسهل للمكتبات الخارجية للتعرف عليها"
          ],
          "correct_answer": "تمتلك أداء أسرع وكوداً أكثر نظافة",
          "explanation": "عملية الاستيعاب أسرع داخلياً في لغة C-Python مقارنة باستدعاء دالة append() في كل لفة، وهي تعتبر الطريقة الأكثر شيوعاً في مجتمع بايثون."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 89: تعابير List Comprehensions",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 89: تعابير List Comprehensions",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا يجب أن نتعلم استكشاف الأخطاء المتقدم (Debugging)؟ لأن الطباعة باستخدام print() غير كافية عندما يكبر المشروع. يجب أن نتعلم كيف نوقف البرنامج، ونفحص المتغيرات، ونكتشف الخطأ بسرعة.",
      "description": "يوفر بايثون طرقاً متقدمة للـ Debugging. الأداة المدمجة pdb (Python Debugger) تتيح وضع نقاط توقف للبرنامج وتتبع سطر تلو الآخر. حديثاً في بايثون 3.7+ تم إضافة دالة breakpoint() المدمجة التي تفعل نفس الشيء بمرونة أكبر.",
      "prototype": "import pdb\npdb.set_trace()\n\n# أو بشكل أحدث:\nbreakpoint()",
      "parameters": "لا تستقبل دالة breakpoint معاملات بشكل عام. عند استدعائها، يتوقف البرنامج وتظهر واجهة الأوامر التفاعلية.",
      "return_value": "لا تُرجع قيم بل تنقل التحكم للواجهة الطرفية (Console) لتبدأ بكتابة أوامر التصحيح مثل c للاستمرار أو n للسطر التالي.",
      "example": "def calculate_price(price, discount):\n    final_price = price - discount\n    breakpoint()  # يتوقف البرنامج هنا لكي تفحص المتغيرات\n    return final_price\n\ncalculate_price(100, 20)"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس استكشاف أخطاء متقدمة (Debugging) لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "التتبع خطوة بخطوة باستخدام logging",
        "code": "import logging\nlogging.basicConfig(level=logging.DEBUG)\n\nx = 10\nlogging.debug(f'القيمة الحالية هي {x}')",
        "expected_output": "DEBUG:root:القيمة الحالية هي 10",
        "explanation": "مكتبة logging هي البديل الاحترافي لطباعة print، حيث يمكن تفعيلها أو تعطيلها وتوجيه مخرجاتها لملف بدلاً من الشاشة."
      },
      {
        "type": "wrong",
        "title": "ترك breakpoint في كود الإنتاج (Production)",
        "code": "def process_payment():\n    breakpoint()\n    # ...",
        "error_message": "سيتوقف الخادم عند انتظار تدخل بشري",
        "explanation": "نسيان إزالة نقطة التوقف سيجعل التطبيق معلقاً عند تشغيله الحقيقي. يجب التأكد من إزالتها أو تشغيل سكريبت بايثون بمتغير البيئة PYTHONBREAKPOINT=0 لتخطيها."
      },
      {
        "type": "mistake",
        "title": "الاعتماد المفرط على Print",
        "explanation": "استخدام print() بكثرة يخلق كوداً فوضوياً وصعب الحذف لاحقاً، بينما أوامر التصحيح (Debuggers) توفر تحكماً دقيقاً برؤية كل جزء في الذاكرة دون تلويث الكود."
      },
      {
        "type": "use_case",
        "title": "فحص بيانات واجهات برمجة التطبيقات API",
        "explanation": "عند استلام استجابة JSON معقدة وغير مفهومة من API، وضع نقطة توقف breakpoint() يتيح لك فحص القاموس والتنقل فيه قبل استكمال كود الاستخراج."
      },
      {
        "type": "challenge",
        "title": "أمر الاستمرار في واجهة التنقيح",
        "code": "# عندما تتوقف الشاشة عند واجهة PDB وتريد استكمال البرنامج للنهاية، أي حرف تكتب؟\n# الخيارات: (n, s, c, q)\nanswer = '___'",
        "expected_output": "c",
        "explanation": "الحرف c اختصار لـ continue والذي يأمر المنقح بمواصلة تشغيل البرنامج حتى النهاية أو نقطة التوقف التالية."
      }
    ],
    "lesson_type": "milestone",
    "exam_data": {
      "title": "اختبار Debugging",
      "questions": [
        {
          "question": "ما هي الميزة الرئيسية لاستخدام مكتبة logging بدلاً من دالة print()؟",
          "options": [
            "أنها تطبع الخط بلون أحمر",
            "إمكانية إيقاف ظهور رسائل التتبع بسهولة وحفظها في ملف سجلات",
            "أنها أسرع بحوالي 100 مرة في التنفيذ",
            "أنها تنشئ واجهة رسومية لإصلاح الخطأ"
          ],
          "correct_answer": "إمكانية إيقاف ظهور رسائل التتبع بسهولة وحفظها في ملف سجلات",
          "explanation": "الـ Logging يسمح بتعريف مستويات للرسائل (مثل INFO, DEBUG, ERROR) وتوجيهها للملفات أو إخفائها في بيئة الإنتاج بسطر كود واحد، بينما print تطبع دائماً."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 90: استكشاف أخطاء متقدمة (Debugging)",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 90: استكشاف أخطاء متقدمة (Debugging)",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "لماذا نحتاج لكتابة كود نظيف؟ كتابة كود يعمل ليست كافية؛ الأهم هو كتابة كود يمكن قراءته، تعديله، وصيانته بسهولة من قبلك ومن قبل فريق عملك في المستقبل.",
      "description": "كتابة كود نظيف (Clean Code) تعني اتباع أفضل الممارسات البرمجية، مثل اختيار أسماء واضحة للمتغيرات والدوال، الالتزام بقواعد PEP 8 في بايثون، وتجنب تكرار الكود (DRY - Don't Repeat Yourself). الكود النظيف يقلل الأخطاء ويوفر الوقت.",
      "prototype": "# اسم دالة واضح بدلاً من اسم مبهم\ndef calculate_total_price(items):\n    ...\n\n# اتباع التنسيق المناسب",
      "parameters": "items: قائمة من العناصر (List) تحتوي على أسعار أو تفاصيل المنتجات لحساب الإجمالي.",
      "return_value": "ترجع الدالة إجمالي السعر، وهو قيمة رقمية (Float أو Integer) واضحة ومباشرة.",
      "example": "def calculate_discounted_price(price, discount_rate):\n    \"\"\"يحسب السعر بعد الخصم\"\"\"\n    if discount_rate < 0 or discount_rate > 1:\n        raise ValueError(\"نسبة الخصم يجب أن تكون بين 0 و 1\")\n    return price - (price * discount_rate)"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس كتابة كود نظيف (Clean Code) لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "def get_active_users(users):\n    return [user for user in users if user.get('is_active')]",
        "expected_output": "قائمة بالمستخدمين النشطين فقط.",
        "explanation": "استخدام List Comprehension وأسماء واضحة (get_active_users) يجعل الكود مقروءاً بلمحة."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "def f(u):\n    a = []\n    for i in u:\n        if i['a'] == True:\n            a.append(i)\n    return a",
        "error_message": "لا يوجد خطأ تنفيذي، ولكن الكود سيء جداً وقراءته صعبة.",
        "explanation": "الأسماء المبهمة (f, u, a, i) تجعل فهم الكود مستحيلاً دون تعليقات. يجب اختيار أسماء تعكس وظيفة الكود."
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "يعتقد البعض أن الكود الأقصر دائماً أفضل، لكن الحقيقة أن الكود الأوضح هو الأفضل حتى لو كان أطول قليلاً."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "في بيئات العمل، يقضي المبرمج وقتاً في قراءة الكود أكثر بكثير من كتابته. الكود النظيف ضروري لنجاح المشاريع المشتركة وتسهيل الـ Code Review."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "def calc(a, b):\n    return a * b",
        "expected_output": "دالة واضحة تحسب مساحة مستطيل.",
        "explanation": "أعد تسمية الدالة إلى calculate_area والمتغيرات إلى width و height."
      }
    ],
    "lesson_type": "ai_challenge",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "ما هو المبدأ الأساسي للكود النظيف (Clean Code)؟",
          "options": [
            "كتابة أقل عدد ممكن من الأسطر",
            "استخدام أسماء متغيرات مكونة من حرف واحد للسرعة",
            "أن يكون الكود مقروءاً وقابلاً للصيانة كأنه نثر مكتوب",
            "إضافة تعليق على كل سطر في الكود"
          ],
          "correct_answer": "أن يكون الكود مقروءاً وقابلاً للصيانة كأنه نثر مكتوب",
          "explanation": "الهدف الرئيسي هو قابلية القراءة والصيانة، فالكود يقرأ أضعاف ما يكتب."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 91: كتابة كود نظيف (Clean Code)",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 91: كتابة كود نظيف (Clean Code)",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "كيف تصمم أنظمة معقدة مرنة وقابلة للتوسع؟ نستخدم مبادئ SOLID لضمان عدم انهيار المشروع عند إضافة ميزات جديدة.",
      "description": "مبادئ SOLID هي خمسة مبادئ لتصميم البرمجيات الموجهة بالكائنات (OOP): SRP (مسؤولية واحدة)، OCP (مفتوح للتمديد مغلق للتعديل)، LSP (استبدال ليسكوف)، ISP (فصل الواجهات)، DIP (عكس الاعتمادية). في بايثون، نطبق هذه المبادئ لكتابة فئات (Classes) مستقلة وقابلة لإعادة الاستخدام.",
      "prototype": "class ReportGenerator:\n    def generate(self, data):\n        pass\n\nclass ReportSaver:\n    def save(self, report):\n        pass",
      "parameters": "الفئات والدوال يجب أن تستقبل المعاملات التي تحتاجها فقط للقيام بمسؤوليتها الوحيدة.",
      "return_value": "فصل المهام يجعل كل فئة ترجع نتيجة محددة بدقة، مما يسهل اختبارها (Unit Testing).",
      "example": "class EmailSender:\n    def send_email(self, message):\n        print(f\"Sending: {message}\")\n\n# بدلاً من وضع إرسال البريد داخل فئة المستخدم، فصلناه لتطبيق مبدأ المسؤولية الواحدة (SRP)"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس مبادئ SOLID لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "class Shape:\n    def area(self): pass\n\nclass Circle(Shape):\n    def area(self): return 3.14 * r * r\n\nclass Square(Shape):\n    def area(self): return side * side",
        "expected_output": "حساب المساحة باختلاف الأشكال دون تعديل الكود الأساسي.",
        "explanation": "هذا تطبيق لمبدأ Open-Closed Principle (OCP). الكود مفتوح لإضافة أشكال جديدة، ومغلق أمام التعديل على منطق الشيب الأساسي."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "class User:\n    def save_to_db(self):\n        pass\n    def send_welcome_email(self):\n        pass\n    def calculate_tax(self):\n        pass",
        "error_message": "كود يصعب صيانته.",
        "explanation": "هذا الفئة تخرق مبدأ المسؤولية الواحدة (SRP). يجب فصل قواعد البيانات، الإيميلات، والعمليات الحسابية في فئات منفصلة."
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "البعض يظن أن مبادئ SOLID تطبق فقط في جافا و C#. الحقيقة أن هذه المبادئ مفهومة وتطبق بقوة في بايثون لضمان بنية قوية للمشاريع."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "في تطبيقات الويب مثل Django أو Flask، تطبيق SOLID يجعل فصل طبقة البيانات عن واجهة المستخدم والمنطق أمراً يسهل إضافة ميزات جديدة بلا أخطاء."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "class Printer:\n    def print_doc(self): pass\n    def scan_doc(self): pass",
        "expected_output": "واجهات منفصلة للطباعة والمسح الضوئي.",
        "explanation": "طبق مبدأ فصل الواجهات (ISP) بتقسيم الكلاس إلى Printer و Scanner لكي لا تجبر كلاسات أخرى على تنفيذ ميثودز لا تحتاجها."
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "ماذا يعني مبدأ SRP في قواعد SOLID؟",
          "options": [
            "أن الكلاس يجب أن يحتوي على طريقة (Method) واحدة فقط",
            "أن الكلاس يجب أن يكون له سبب واحد فقط للتغيير (مسؤولية واحدة)",
            "الوراثة المتعددة ممنوعة",
            "استخدام المتغيرات الخاصة (Private) دائماً"
          ],
          "correct_answer": "أن الكلاس يجب أن يكون له سبب واحد فقط للتغيير (مسؤولية واحدة)",
          "explanation": "مبدأ المسؤولية الواحدة ينص على أن الوحدة البرمجية يجب أن تهتم بمهمة واحدة محددة."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 92: مبادئ SOLID",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 92: مبادئ SOLID",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "كيف ندمج ما تعلمناه لبناء تطبيق حقيقي؟",
      "description": "في هذا التطبيق الشامل، سنقوم بدمج المفاهيم المتقدمة: الـ OOP، الكود النظيف، التعامل مع الملفات وقواعد البيانات، ومبادئ SOLID لبناء نظام إدارة مكتبة مبسط. سنتعلم كيف نقسم المشروع إلى وحدات (Modules) ونتعامل مع الأخطاء.",
      "prototype": "project/\n|-- models.py\n|-- database.py\n|-- services.py\n|-- main.py",
      "parameters": "كل ملف (Module) سيكون له مدخلات ومخرجات محددة. مثلاً خدمات الإعارة ستستقبل كائن Book وكائن User.",
      "return_value": "البرنامج ككل سيعمل بتناغم ليرجع استجابات صحيحة للمستخدم كإتمام الاستعارة أو إرجاع خطأ إذا كان الكتاب غير متوفر.",
      "example": "from models import Book\nfrom services import LibraryService\n\nbook = Book(\"Python Basics\")\nservice = LibraryService()\nservice.borrow_book(user, book)"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس تطبيق شامل للبرمجة المتقدمة لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "def process_data(data_source):\n    data = data_source.read()\n    # معالجة البيانات\n    return data",
        "expected_output": "البيانات المعالجة بنجاح.",
        "explanation": "استخدام Dependency Injection بتمرير مصدر البيانات كمعامل مما يسهل اختبار الكود مع مصادر وهمية (Mock)."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "import sqlite3\n\n# كود في ملف واحد يحتوي على 1000 سطر\n# يتعامل مع الـ UI، و Database، والمنطق معاً",
        "error_message": "صعوبة رهيبة في الصيانة (Spaghetti Code).",
        "explanation": "عدم تقسيم التطبيق المتقدم إلى ملفات ووحدات منفصلة يؤدي إلى كود غير قابل للقراءة والصيانة."
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "يعتقد المبرمج المبتدئ أنه يجب كتابة الكود من البداية للنهاية. المحترف يبني الكود بشكل تدريجي ويختبر كل جزء (Unit Testing) أثناء البناء."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "كل البرمجيات الحقيقية مثل تطبيقات إدارة الموارد (ERP) تبنى بهذه الطريقة المعيارية."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "# قم بتجزئة الكود المعقد إلى دالتين منفصلتين",
        "expected_output": "دالتان كل منهما تؤدي غرضاً واحداً.",
        "explanation": "ابحث عن الدوال التي تقوم بأكثر من مهمة وافصلها."
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "ما الفائدة الرئيسية من تقسيم المشروع إلى ملفات (Modules)؟",
          "options": [
            "تقليل حجم الملف الواحد فقط",
            "منع حدوث الأخطاء تماماً",
            "تنظيم الكود وتسهيل إعادة الاستخدام والصيانة",
            "زيادة سرعة تنفيذ لغة بايثون"
          ],
          "correct_answer": "تنظيم الكود وتسهيل إعادة الاستخدام والصيانة",
          "explanation": "التقسيم المعماري يساعد المبرمجين على فهم أجزاء النظام والعمل عليه بشكل تعاوني."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 93: تطبيق شامل للبرمجة المتقدمة",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 93: تطبيق شامل للبرمجة المتقدمة",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "أكملت كتابة الكود، ولكن كيف تجعله متاحاً للمستخدمين؟ النشر (Deployment) هو الجواب.",
      "description": "عملية النشر (Deployment) هي نقل التطبيق من بيئة التطوير (جهازك الشخصي) إلى بيئة الإنتاج (خادم / سيرفر) ليكون متاحاً للمستخدمين النهائيين. تتضمن العملية إعداد الخوادم، تثبيت المتطلبات (requirements.txt)، تشغيل التطبيق في الخلفية وإعداد خادم الويب (مثل Nginx و Gunicorn).",
      "prototype": "pip freeze > requirements.txt\n# في السيرفر:\npip install -r requirements.txt\ngunicorn app:app",
      "parameters": "app:app يمثل اسم الملف (app.py) واسم كائن التطبيق داخل الملف لتشغيله عبر Gunicorn.",
      "return_value": "بعد النشر، يستجيب السيرفر لطلبات الـ HTTP من المستخدمين ويرجع محتوى التطبيق (HTML أو JSON).",
      "example": "# إعداد ملف requirements.txt\nFlask==2.0.1\ngunicorn==20.1.0\n\n# تشغيل التطبيق في السيرفر\ngunicorn -w 4 -b 0.0.0.0:8000 main:app"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس نشر التطبيقات (Deployment) لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "import os\n\nDEBUG_MODE = os.environ.get('DEBUG') == 'True'\n# نستخدم متغيرات البيئة لعدم كشف الأسرار",
        "expected_output": "ضبط الإعدادات حسب بيئة السيرفر.",
        "explanation": "يجب دائماً استخدام متغيرات البيئة (Environment Variables) لحفظ البيانات الحساسة مثل كلمات مرور قاعدة البيانات عند النشر."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "app.run(debug=True, host='0.0.0.0', port=80)",
        "error_message": "خطر أمني كبير وعدم استقرار.",
        "explanation": "تشغيل التطبيق في السيرفر باستخدام خادم التطوير (app.run) بدلاً من خادم إنتاج (WSGI مثل Gunicorn) يعتبر كارثة أمنية ويؤدي لبطء شديد."
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "الكثيرون يظنون أن الكود الذي يعمل على أجهزتهم سيعمل فوراً على السيرفر، وهذا خاطئ، فغالباً تختلف أنظمة التشغيل والاعتمادات مما يبرز أهمية Docker لاحقاً."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "جميع تطبيقات الويب (مثل منصات التواصل والمتاجر الإلكترونية) يتم نشرها على سيرفرات سحابية قوية لتتحمل ملايين الزيارات."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "DB_PASSWORD = 'my_super_secret_password'",
        "expected_output": "إخفاء كلمة المرور.",
        "explanation": "استخدم مكتبة os أو dotenv لجلب كلمة المرور من متغيرات البيئة بدلاً من كتابتها في الكود."
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "لماذا نستخدم Gunicorn (أو أي خادم WSGI) عند نشر تطبيقات بايثون بدلاً من خادم التطوير المدمج؟",
          "options": [
            "لأن خادم التطوير يستهلك مساحة تخزين أكبر",
            "لأن خادم التطوير غير مصمم لتحمل الزيارات المتزامنة وهو مخصص للتجربة فقط",
            "لأن بايثون تتطلب ذلك كقاعدة لغوية",
            "لتغيير لغة البرمجة إلى لغة أخرى"
          ],
          "correct_answer": "لأن خادم التطوير غير مصمم لتحمل الزيارات المتزامنة وهو مخصص للتجربة فقط",
          "explanation": "خوادم الـ WSGI مثل Gunicorn تدير العمليات بشكل متزامن ومتعدد لتتحمل ضغط المستخدمين الحقيقيين."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 94: نشر التطبيقات (Deployment)",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 94: نشر التطبيقات (Deployment)",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "كيف تتجنب مشكلة 'التطبيق يعمل على حاسوبي لكنه لا يعمل على السيرفر'؟ الجواب هو Docker.",
      "description": "دوكر (Docker) هو أداة تقوم بوضع تطبيقك وكل المتطلبات الخاصة به (مكتبات، إصدار بايثون، نظام تشغيل مبسط) في حاوية (Container) معزولة. هذه الحاوية تضمن لك أن التطبيق سيعمل بنفس الطريقة في أي مكان (على جهازك، أو جهاز زميلك، أو السيرفر).",
      "prototype": "# Dockerfile\nFROM python:3.9-slim\nWORKDIR /app\nCOPY . .\nRUN pip install -r requirements.txt\nCMD [\"python\", \"main.py\"]",
      "parameters": "في ملف الـ Dockerfile نمرر تعليمات بناء الصورة (Image)، مثل FROM (إصدار بايثون) و CMD (الأمر الذي يشغل التطبيق).",
      "return_value": "نتيجة تنفيذ Dockerfile هي صورة (Docker Image) يمكن تشغيلها كحاوية لترجع مخرجات تطبيقك.",
      "example": "# أمر بناء الصورة\n# docker build -t my-python-app .\n\n# أمر تشغيل الحاوية\n# docker run -d -p 8000:8000 my-python-app"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس استخدام Docker لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "FROM python:3.10-alpine\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\nCOPY . .\nCMD [\"python\", \"app.py\"]",
        "expected_output": "صورة دوكر خفيفة وسريعة.",
        "explanation": "استخدام نسخة alpine أو slim يقلل من حجم الحاوية، ونسخ الـ requirements أولاً يسرع عملية البناء بفضل الكاش."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "# حفظ بيانات حساسة داخل الصورة\nENV DB_PASS=\"secret123\"",
        "error_message": "تسريب معلومات حساسة.",
        "explanation": "لا يجب أبداً كتابة كلمات المرور داخل ملف Dockerfile لأن أي شخص يمتلك الصورة سيعرفها. يجب تمريرها أثناء التشغيل عبر (-e)."
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "البعض يعتقد أن Docker هو آلة افتراضية (Virtual Machine). في الحقيقة الحاويات أخف بكثير وتتشارك نواة نظام التشغيل مع المضيف بدلاً من تشغيل نظام كامل."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "كل الشركات الحديثة تستخدم Docker لتسهيل بيئة التطوير، وتسريع وتيرة إطلاق التحديثات، واستخدام تقنيات مثل Kubernetes."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "# أمر غير مكتمل\ndocker run my-app",
        "expected_output": "تشغيل الحاوية مع فتح المنفذ 5000",
        "explanation": "استخدم العلم -p لربط المنفذ الخارجي بالداخلي: docker run -p 5000:5000 my-app."
      }
    ],
    "lesson_type": "sandbox",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "ما هي الفائدة الأساسية من استخدام Docker لتطبيقات بايثون؟",
          "options": [
            "تحويل كود بايثون إلى كود آلة مباشرة",
            "توفير بيئة معزولة ومتطابقة في التطوير والإنتاج تمنع مشاكل اختلاف الأنظمة",
            "تغيير محرر الأكواد الذي نستخدمه",
            "زيادة سرعة كتابة الكود"
          ],
          "correct_answer": "توفير بيئة معزولة ومتطابقة في التطوير والإنتاج تمنع مشاكل اختلاف الأنظمة",
          "explanation": "دوكر يحل مشكلة \"يعمل في جهازي فقط\" من خلال توحيد بيئة التشغيل كحاوية معزولة."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 95: استخدام Docker",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 95: استخدام Docker",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "كيف تجعل تطبيقك يعمل على الإنترنت ومتاحاً للجميع 24 ساعة يومياً؟",
      "description": "الاستضافة السحابية (Cloud Hosting) تعني استئجار مساحة وموارد (CPU, RAM) من شركات كبرى مثل AWS، Google Cloud، أو Heroku لتشغيل تطبيقك، بدلاً من تشغيله على جهازك الذي قد ينطفئ. توفر السحابة خدمات متقدمة مثل قواعد البيانات المُدارة وخدمات التخزين مما يجعل التطبيق قابلاً للتوسع (Scalability).",
      "prototype": "# منصات مثل Heroku تستخدم ملف Procfile\nweb: gunicorn app:app",
      "parameters": "في الاستضافة نحدد الموارد المطلوبة: عدد المعالجات والذاكرة وحجم قواعد البيانات.",
      "return_value": "ينتج عن الاستضافة رابط (URL / IP) عام يمكن لأي شخص الدخول إليه لرؤية المشروع.",
      "example": "تخيل أنك ترفع كود بايثون إلى GitHub، ثم تقوم بربط المستودع بـ Heroku أو Render، المنصة ستقوم بتثبيت المكاتب تلقائياً وتشغيل التطبيق وإعطائك رابطاً."
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس الاستضافة على السحاب لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "# مثال على ملف Procfile لـ Heroku\nweb: gunicorn app:app\nworker: celery -A app.celery_worker",
        "expected_output": "التطبيق يفتح على رابط حقيقي.",
        "explanation": "ملف الـ Procfile يخبر منصة الاستضافة بالتعليمات والأوامر اللازمة لتشغيل التطبيق والمهام الخلفية."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "# حفظ الصور والملفات المرفوعة مباشرة في سيرفر الاستضافة (Heroku Ephemeral Filesystem)",
        "error_message": "ضياع الملفات بعد كل تحديث للسيرفر.",
        "explanation": "العديد من خدمات السحابة تعيد تشغيل الحاويات بانتظام فتمسح الملفات المؤقتة. يجب استخدام خدمات التخزين السحابي مثل AWS S3 لحفظ الملفات المرفوعة."
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "يعتقد البعض أن الاستضافة السحابية معقدة جداً، ولكن مع ظهور خدمات الـ PaaS (مثل Render أو Railway)، أصبح النشر سهلاً وبضغطة زر تقريباً."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "بناء بوت تيليجرام يعمل طوال الوقت أو نشر موقع تجاري مبرمج بـ Django ليراه ملايين الأشخاص حول العالم."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "# تطبيق بايثون يقرأ من قاعدة بيانات SQLite محلية في السحابة",
        "expected_output": "قاعدة بيانات سحابية (PostgreSQL).",
        "explanation": "غير الاتصال من SQLite إلى رابط قاعدة بيانات حقيقي موفر من الاستضافة (مثل DATABASE_URL)."
      }
    ],
    "lesson_type": "debugging",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "لماذا لا يُنصح باستخدام قاعدة بيانات SQLite الافتراضية عند نشر تطبيقات على منصات الاستضافة مثل Heroku؟",
          "options": [
            "لأنها بطيئة جداً ولا تعمل في السحابة",
            "لأن ملف قاعدة البيانات سيمسح كلما أعادت المنصة تشغيل التطبيق (Ephemeral Storage)",
            "لأن بايثون تمنع استخدامها في السحابة",
            "بسبب مشاكل الترخيص"
          ],
          "correct_answer": "لأن ملف قاعدة البيانات سيمسح كلما أعادت المنصة تشغيل التطبيق (Ephemeral Storage)",
          "explanation": "في بيئات مثل Heroku، النظام يعاد بناءه بشكل مستمر، مما يؤدي لحذف أي ملفات محلية تم إنشاؤها (ومنها SQLite)، فيجب استخدام قاعدة بيانات خارجية كالـ Postgres."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 96: الاستضافة على السحاب",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 96: الاستضافة على السحاب",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "قبل الدخول في مشاريع التخرج، نحتاج لمراجعة شاملة لربط كل المفاهيم في ذهنك.",
      "description": "هذه المراجعة النهائية تشمل ربط أساسيات لغة بايثون، المجموعات والقواميس، الدوال المتطورة، الكائنات والـ OOP، التعاون وإدارة الاستثناءات، قواعد البيانات، الكود النظيف، والنشر على السحابة مع Docker. هذا هو الحجر الأساس الذي ستعتمد عليه لبناء مشاريع قوية.",
      "prototype": "# دمج للمفاهيم الأساسية والمتقدمة في كود واحد\ndef process_data(data: list) -> dict:\n    try:\n        return {k: v for k, v in data}\n    except ValueError:\n        return {}",
      "parameters": "مراجعة كيفية عمل الـ Parameters والـ Type Hinting لتوضيح أنواع المدخلات.",
      "return_value": "المخرجات يجب أن تكون محددة ومعالجة بداخل كتلة Try-Except لتجنب توقف البرنامج.",
      "example": "class SystemMonitor:\n    def __init__(self, target):\n        self.target = target\n    \n    def ping(self):\n        # كود محاكى للتعامل مع الشبكة والدوال والأخطاء\n        pass"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس مراجعة نهائية لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "import json\n\nwith open('data.json', 'r') as file:\n    data = json.load(file)\n    print(data.get('status', 'not found'))",
        "expected_output": "قراءة البيانات بأمان وتجنب الأخطاء.",
        "explanation": "هنا ربطنا بين التعامل مع الملفات واستخدام قواميس بايثون مع الدالة get() الآمنة."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "file = open('data.txt', 'w')\nfile.write('hello')\n# نسيان إغلاق الملف file.close()",
        "error_message": "تسرب في موارد النظام (Memory/Resource Leak).",
        "explanation": "عدم استخدام `with open()` قد يؤدي لعدم إغلاق الملف في حال حدوث خطأ، وهو ما تعلمناه في الدروس السابقة."
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "البعض ينسى كتابة الـ Return في نهاية الدوال التي من المفترض أن تعيد قيمة، فيحصلون على مخرجات None بشكل غير متوقع."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "المراجعة المستمرة وإجراء المقابلات التقنية تعتمد على فهمك العميق لكيفية تكامل كل مفاهيم بايثون التي تعلمتها."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "def divide(a, b):\n    return a / b",
        "expected_output": "التعامل مع خطأ القسمة على صفر.",
        "explanation": "قم بإضافة try-except للتعامل مع ZeroDivisionError."
      }
    ],
    "lesson_type": "scenario",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "كيف نحقق أقصى أمان واستقرار للكود المتقدم؟",
          "options": [
            "الاعتماد على التعليقات فقط لتوضيح الكود",
            "استخدام معالجة الاستثناءات (Try-Except) واتباع الـ Clean Code واختبار الكود باستمرار",
            "إزالة كل الدوال وكتابة كل شيء في ملف واحد",
            "استخدام إصدارات بايثون القديمة"
          ],
          "correct_answer": "استخدام معالجة الاستثناءات (Try-Except) واتباع الـ Clean Code واختبار الكود باستمرار",
          "explanation": "هذه هي الأركان الثلاثة لكتابة برمجيات مستقرة وقابلة للاعتماد."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 97: مراجعة نهائية",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 97: مراجعة نهائية",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "حان الوقت لإثبات جدارتك. المشروع الأول سيكون بناء أداة تفاعلية سطرية أو تطبيق ويب أساسي لمعالجة البيانات.",
      "description": "في هذا المشروع الأول، ستبني 'مدير مهام ذكي' (Smart Task Manager) يستخدم الـ OOP، ويتصل بقاعدة بيانات (SQLite/PostgreSQL)، ويحتوي على ميزات إضافية وتصدير البيانات. الهدف هو قياس قدرتك على تحليل المتطلبات، هندسة الكود، وكتابته بشكل احترافي.",
      "prototype": "class TaskManager:\n    def add_task(self):\n        pass\n    def export_csv(self):\n        pass",
      "parameters": "ستتعامل مع مدخلات المستخدم من سطر الأوامر أو واجهة بسيطة وتتأكد من صحتها (Validation).",
      "return_value": "يعود التطبيق بنتيجة واضحة للمستخدم بعد إتمام المهام (مثلاً: تم إضافة المهمة بنجاح، أو تصدير التقرير).",
      "example": "# جزء من المشروع\ndef main():\n    db = Database()\n    manager = TaskManager(db)\n    manager.run_cli()\n\nif __name__ == \"__main__\":\n    main()"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس مشروع التخرج الأول لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "import argparse\n\nparser = argparse.ArgumentParser(description='إدارة المهام')\nparser.add_argument('--add', help='إضافة مهمة جديدة')",
        "expected_output": "تفاعل ذكي مع المستخدم.",
        "explanation": "استخدام مكتبة argparse لبناء واجهة سطر أوامر احترافية (CLI) تقبل مدخلات من المستخدم مباشرة."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "input_val = input('أدخل الرقم: ')\nresult = 10 / input_val",
        "error_message": "TypeError: unsupported operand type(s) for /: 'int' and 'str'",
        "explanation": "يجب دائماً تحويل وتنقية مدخلات المستخدم (Type Casting) إلى Integer قبل إجراء العمليات الحسابية."
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "البعض يبدأ بكتابة الكود المعقد فوراً بدون تخطيط. المهندس الناجح يرسم الهيكلية ويفهم المتطلبات قبل كتابة سطر كود واحد."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "المشاريع التخرجية في هذا الكورس مطابقة لما يُطلب منك في اختبارات التوظيف ومقابلات العمل الفنية (Technical Tasks)."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "def get_db():\n    conn = sqlite3.connect('tasks.db')\n    return conn",
        "expected_output": "إغلاق الاتصال بأمان بعد الاستخدام.",
        "explanation": "استخدم context manager لضمان إغلاق قاعدة البيانات."
      }
    ],
    "lesson_type": "mini_mission",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "ما هي أول خطوة يجب القيام بها عند البدء في مشروع برمجي كبير؟",
          "options": [
            "البدء في كتابة الأكواد المعقدة فوراً",
            "تخطيط هندسة البرنامج وتحليل المتطلبات (System Design)",
            "تصميم واجهة المستخدم النهائية بالألوان",
            "نشر التطبيق على السحابة"
          ],
          "correct_answer": "تخطيط هندسة البرنامج وتحليل المتطلبات (System Design)",
          "explanation": "بدون تخطيط وهندسة سليمة، سيكون المشروع عرضة للفشل وصعوبة التوسع في المستقبل."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 98: مشروع التخرج الأول",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 98: مشروع التخرج الأول",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "مشروعك الثاني سيكون احترافياً بامتياز، وسيشمل النشر (Deployment) وواجهة برمجة تطبيقات (API).",
      "description": "في مشروع التخرج الثاني والأخير، ستبني 'نظام واجهة برمجة تطبيقات كامل' (RESTful API) باستخدام إطار عمل مثل FastAPI أو Flask. ستطبق فيها التوثيق الآلي، اتصال قاعدة بيانات متقدمة (ORM مثل SQLAlchemy)، حماية الروابط (Authentication)، ثم تقوم بوضع التطبيق في Docker ونشره على منصة سحابية.",
      "prototype": "from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get('/api/v1/resource')\ndef get_resource():\n    return {\"status\": \"success\"}",
      "parameters": "ستستقبل الـ API طلبات (Requests) من العميل على هيئة JSON وتتحقق منها.",
      "return_value": "ترجع الـ API استجابات قياسية (JSON Responses) مع رموز الحالة المناسبة (200 OK, 404 Not Found).",
      "example": "from pydantic import BaseModel\n\nclass Item(BaseModel):\n    name: str\n    price: float\n\n@app.post(\"/items/\")\ndef create_item(item: Item):\n    return {\"message\": \"Item created\", \"data\": item.dict()}"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس مشروع التخرج الثاني لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "from sqlalchemy.orm import Session\n\ndef get_db():\n    db = SessionLocal()\n    try:\n        yield db\n    finally:\n        db.close()",
        "expected_output": "اتصال آمن ومستمر بقاعدة البيانات.",
        "explanation": "استخدام Yield لإدارة جلسات الـ ORM بحيث تضمن أن الاتصال يتم إغلاقه بشكل سليم بعد انتهاء طلب الـ API."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "return {\"error\": \"Not Found\"} # بدون تغيير الـ status_code",
        "error_message": "يرجع للعميل رمز حالة 200 (نجاح) رغم وجود خطأ.",
        "explanation": "في الـ APIs، يجب إرجاع كود الحالة الصحيح للـ HTTP، مثل 404 في حال عدم العثور، أو 500 في حال خطأ السيرفر الداخلي."
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "البعض يظن أن إرجاع HTML من الـ API ممارسة صحيحة. الصحيح أن الـ REST API ترجع بيانات نقية كـ JSON وتترك عرضها لتطبيق الواجهة (الفرونت إند)."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "هذا المشروع هو تماماً ما يقوم به مطورو الـ Back-End يومياً لإنشاء تطبيقات موبايل أو ويب حديثة تستهلك البيانات."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "# إضافة حماية لـ Endpoint",
        "expected_output": "لا يمكن الدخول للرابط إلا بـ Token.",
        "explanation": "استخدم JWT (JSON Web Tokens) أو OAuth2 لحماية المسارات الهامة للمستخدمين."
      }
    ],
    "lesson_type": "concept",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "في الـ REST API، ما هو كود حالة الـ HTTP المناسب عند إنشاء مورد جديد (مثل إضافة مستخدم جديد)؟",
          "options": [
            "200 OK",
            "201 Created",
            "404 Not Found",
            "500 Internal Server Error"
          ],
          "correct_answer": "201 Created",
          "explanation": "الرمز 201 يوضح للعميل صراحة بأنه تم بنجاح إنشاء المورد الذي طلبه."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 99: مشروع التخرج الثاني",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 99: مشروع التخرج الثاني",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
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
      "context": "وصلت إلى نهاية الرحلة الممتعة. ماذا بعد تعلم بايثون وكيف تستثمر هذا العلم؟",
      "description": "الخاتمة ومبروك التخرج! في هذا الدرس الأخير نناقش مساراتك المستقبلية كمطور بايثون، سواء كنت تتجه نحو تطوير الويب، الذكاء الاصطناعي، أتمتة الأنظمة، أو تحليل البيانات. سنستعرض كيفية تسويق نفسك، رفع مشاريعك على Github، وكيفية التحضير للمقابلات الشخصية واستلام الشهادة.",
      "prototype": "print('Congratulations! You are now a Python Developer.')\n\n# مسارات المستقبل\npaths = ['Web Dev', 'AI/ML', 'Data Science', 'Automation']",
      "parameters": "المدخلات في هذه المرحلة هي طموحك ووقتك.",
      "return_value": "مستقبل مهني مشرق إن شاء الله في مجالات التقنية العالية.",
      "example": "# خطتك القادمة\nplan = {\n  'Step 1': 'تحديث السيرة الذاتية (CV)',\n  'Step 2': 'رفع مشاريع التخرج على Github',\n  'Step 3': 'التقديم على وظائف أو عمل حر (Freelance)'\n}"
    },
    "exercise_instructions": "قم بتطبيق ما تعلمته في درس الخاتمة والشهادة لإنشاء برنامجك الخاص.",
    "expected_output": "Success",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق مباشر",
        "code": "# مثال على سيرة ذاتية تقنية\n# Skills: Python, Docker, SQL, REST APIs\n# Projects: Task Manager, Library System",
        "expected_output": "سيرة ذاتية جذابة للمنظمات.",
        "explanation": "تسويق نفسك كمطور لا يقل أهمية عن كتابة الكود. مشاريعك المرفوعة كافية كدليل على خبرتك."
      },
      {
        "type": "wrong",
        "title": "خطأ برمجي شائع",
        "code": "# التوقف عن التعلم بعد الكورس",
        "error_message": "الجمود التقني وضعف فرص المنافسة.",
        "explanation": "التكنولوجيا تتطور يومياً. بايثون لغة حية تصدر لها مكاتب وتحديثات باستمرار (مثل الذكاء الاصطناعي). يجب أن تبقى مطلعاً (Life-long learning)."
      },
      {
        "type": "mistake",
        "title": "مفهوم خاطئ",
        "explanation": "البعض يعتقد أن شهادة الإتمام هي الأهم في التوظيف. الحقيقة أن معرض الأعمال (Portfolio) وحسابك على Github يثقلانك أضعاف الشهادة."
      },
      {
        "type": "use_case",
        "title": "الاستخدام في الواقع",
        "explanation": "كتابة سكريبت بايثون بسيط لحل مشكلة في عملك الحالي قد تكون نقطة التحول وتفتح لك آفاقاً جديدة في الشركة."
      },
      {
        "type": "challenge",
        "title": "تحدي: إصلاح الكود",
        "code": "commit_msg = 'added files'",
        "expected_output": "رسالة توضيحية احترافية في Git.",
        "explanation": "رسائل הCommit يجب أن تكون واضحة مثل 'feat: build authentication API endpoint'."
      }
    ],
    "lesson_type": "capstone",
    "exam_data": {
      "title": "اختبار سريع",
      "questions": [
        {
          "question": "ما هو العامل الأهم الذي تنظر إليه الشركات التقنية عند توظيف مبرمج بايثون مبتدئ (Junior)؟",
          "options": [
            "حفظ الكود عن ظهر قلب والسرعة في الكتابة",
            "مشاريع فعلية مرفوعة على GitHub تظهر جودة الكود والتفكير المنطقي",
            "عدد الشهادات الورقية",
            "القدرة على إصلاح الحواسيب"
          ],
          "correct_answer": "مشاريع فعلية مرفوعة على GitHub تظهر جودة الكود والتفكير المنطقي",
          "explanation": "المشاريع العملية هي الدليل الأكبر على قدرة المبرمج على حل المشاكل وتقديم قيمة للشركة."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 100: الخاتمة والشهادة",
    "correct_example": {
      "code": "print('Correct')",
      "explanation": "??? ???? ???? ???? ???????."
    },
    "wrong_example": {
      "code": "print(Wrong)",
      "explanation": "??? ???? ???? ???? ??????? ???????."
    },
    "common_mistake": "????? ?????? ??? ?? ??? ??? ??????? ???? ????.",
    "practical_challenge": {
      "title": "????: الدرس 100: الخاتمة والشهادة",
      "description": "?? ?????? ?? ?????? ?? ??? ?????? ??????.",
      "initial_code": "# ???? ????? ???",
      "expected_output": "Success",
      "hints": [
        "??? ??? ??????? ???????",
        "?????? ?????? ?????? ?????"
      ]
    },
    "interactive_quiz": {
      "question": "?? ?? ??????? ??????? ?? ??? ??????",
      "options": [
        "?????? ?????",
        "?????? ??????",
        "?????? ??????",
        "?????? ??????"
      ],
      "correct_index": 0,
      "explanation": "?????? ????? ?? ?????? ???? ???? ??????? ???????."
    }
  }
];
