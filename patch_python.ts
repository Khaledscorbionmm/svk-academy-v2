import fs from 'fs';
import { pythonTrackData } from './src/context/tracks/pythonData';

const updates = {
  'python-1': {
    title: "الدرس 1: الأعداد الصحيحة (int) - بداية الرحلة",
    content: {
      context: "الأعداد الصحيحة (Integers) في بايثون هي الأرقام التي لا تحتوي على كسور عشرية، سواء كانت موجبة أو سالبة أو صفراً. تعتبر أساس العمليات الحسابية والعد في البرمجة.",
      description: "تُستخدم الأعداد الصحيحة لتمثيل الأشياء القابلة للعد، مثل عدد المستخدمين، أو العمر، أو عدد المحاولات في لعبة. بايثون تتعامل مع الأرقام بذكاء ويمكنها استيعاب أرقام ضخمة جداً تلقائياً.",
      prototype: "age = 25\nscore = -10",
      parameters: "أرقام صحيحة موجبة أو سالبة",
      return_value: "كائن من نوع int",
      example: "user_age = 20\nprint(user_age + 5)  # Output: 25"
    },
    exercise_instructions: "قم بإنشاء متغيرين يمثلان عدد التفاح وعدد البرتقال، ثم اجمعهما واطبع الناتج.",
    expected_output: "15",
    quick_practical_examples: [
      {
        type: "correct",
        title: "تعريف وطباعة عدد صحيح",
        code: "apples = 10\nprint(apples)",
        explanation: "قمنا بتعريف متغير `apples` وأسندنا له القيمة 10، ثم قمنا بطباعته."
      },
      {
        type: "wrong",
        title: "خطأ في التسمية",
        code: "1st_number = 5",
        error_message: "SyntaxError: invalid decimal literal",
        explanation: "لا يمكن أن يبدأ اسم المتغير برقم في بايثون."
      },
      {
        type: "mistake",
        title: "خلط النصوص بالأرقام",
        code: "age = '20'\nprint(age + 5)",
        explanation: "وضع الرقم داخل علامات تنصيص يحوله إلى نص (String)، مما يؤدي لخطأ عند محاولة جمعه مع رقم حقيقي."
      }
    ],
    exam_data: {
      title: "اختبار الأعداد الصحيحة",
      questions: [
        {
          question: "أي من القيم التالية يمثل عدداً صحيحاً (int) في بايثون؟",
          options: ["'10'", "10.5", "10", "True"],
          correct_answer: "10",
          explanation: "العدد الصحيح يكتب بدون فواصل عشرية أو علامات تنصيص."
        }
      ]
    }
  },
  'python-2': {
    title: "الدرس 2: الأعداد العشرية (float) - الدقة في الحسابات",
    content: {
      context: "الأعداد العشرية (Floats) تستخدم لتمثيل الأرقام التي تحتوي على كسور أو فواصل عشرية. تستخدم عادة في الحسابات المالية، القياسات، والنسب المئوية.",
      description: "في بايثون، يُكتب العدد العشري باستخدام النقطة (.) وليس الفاصلة (,).",
      prototype: "price = 19.99\nweight = 2.5",
      parameters: "أرقام مع نقطة عشرية",
      return_value: "كائن من نوع float",
      example: "pi = 3.14159\nradius = 5\narea = pi * (radius ** 2)\nprint(area)"
    },
    exercise_instructions: "اكتب برنامجاً يحسب ضريبة مبيعات بنسبة 15% على منتج سعره 200، واطبع الضريبة (الناتج كعدد عشري).",
    expected_output: "30.0",
    quick_practical_examples: [
      {
        type: "correct",
        title: "استخدام الأعداد العشرية في القسمة",
        code: "result = 10 / 3\nprint(result)",
        explanation: "القسمة العادية في بايثون باستخدام (/) تُرجع دائماً عدداً عشرياً (float)."
      },
      {
        type: "wrong",
        title: "استخدام الفاصلة العربية",
        code: "price = 10,50",
        error_message: "SyntaxError",
        explanation: "في بايثون يجب استخدام النقطة . للفصل العشري، أما الفاصلة , فتُستخدم لإنشاء قوائم (Tuples)."
      },
      {
        type: "mistake",
        title: "الدقة العشرية غير المتوقعة",
        code: "print(0.1 + 0.2)",
        explanation: "الناتج سيكون 0.30000000000000004 بسبب طريقة تخزين الحواسيب للأعداد العشرية بنظام الثنائي، ولتفادي ذلك نستخدم دالة round()."
      }
    ],
    exam_data: {
      title: "اختبار الأعداد العشرية",
      questions: [
        {
          question: "ما هو ناتج تنفيذ 5 / 2 في بايثون 3؟",
          options: ["2", "2.5", "2.0", "Error"],
          correct_answer: "2.5",
          explanation: "علامة القسمة المفرده ترجع دائما float."
        }
      ]
    }
  },
  'python-3': {
    title: "الدرس 3: النصوص (str) - لغة التخاطب",
    content: {
      context: "النصوص (Strings) هي تسلسل من الرموز والحروف. تُستخدم لتمثيل الكلمات، الجمل، أو أي بيانات نصية في برامجك.",
      description: "يمكن وضع النصوص داخل علامات تنصيص مفردة ' ' أو مزدوجة \" \". بايثون توفر دوال كثيرة لتعديل النصوص وتشكيلها.",
      prototype: "name = 'Ahmad'\nmessage = \"Hello World\"",
      parameters: "تسلسل حروف بين علامات تنصيص",
      return_value: "كائن من نوع str",
      example: "name = 'سارة'\nprint('مرحباً ' + name)"
    },
    exercise_instructions: "قم بتعريف متغير يحتوي على اسمك الأول، ومتغير آخر لاسم العائلة، واطبعهما معاً بينهما مسافة.",
    expected_output: "Ali Khaled",
    quick_practical_examples: [
      {
        type: "correct",
        title: "دمج النصوص (Concatenation)",
        code: "first = 'Python'\nsecond = 'Developer'\nprint(first + ' ' + second)",
        explanation: "استخدمنا علامة الزائد (+) لدمج نصين مع إضافة مسافة بينهما."
      },
      {
        type: "wrong",
        title: "نسيان علامة التنصيص النهائية",
        code: "greeting = 'Hello",
        error_message: "SyntaxError: unterminated string literal",
        explanation: "يجب إغلاق النص بنفس نوع علامة التنصيص التي بدأ بها."
      },
      {
        type: "mistake",
        title: "دمج نص مع رقم مباشر",
        code: "age = 20\nprint('My age is ' + age)",
        explanation: "لا يمكنك دمج نص مع عدد صحيح مباشرة باستخدام +، يجب تحويل الرقم إلى نص أولاً باستخدام str(age)."
      }
    ],
    exam_data: {
      title: "اختبار النصوص",
      questions: [
        {
          question: "كيف تقوم بدمج المتغيرين a و b وطباعتهما؟ (a = 'Hi', b = 'Ali')",
          options: ["print(a b)", "print(a + b)", "print(a . b)", "print(a & b)"],
          correct_answer: "print(a + b)",
          explanation: "عملية الدمج في بايثون تتم بواسطة المعامل +."
        }
      ]
    }
  },
  'python-4': {
    title: "الدرس 4: المنطق البولياني (bool) - الصح والخطأ",
    content: {
      context: "القيم البوليانية (Booleans) تمثل حالتين فقط: True (صح) أو False (خطأ). هي حجر الأساس في اتخاذ القرارات برمجياً (الشروط).",
      description: "تنتج القيم البوليانية عادة من عمليات المقارنة، مثل هل س أكبر من ص؟ وتُكتب في بايثون بأحرف استهلالية كبيرة (Capital).",
      prototype: "is_active = True\nhas_errors = False",
      parameters: "True أو False فقط",
      return_value: "كائن من نوع bool",
      example: "age = 18\nis_adult = age >= 18\nprint(is_adult) # Output: True"
    },
    exercise_instructions: "قم بإنشاء متغير `score = 85`، ثم اطبع نتيجة شرط ما إذا كان `score` أكبر من 50.",
    expected_output: "True",
    quick_practical_examples: [
      {
        type: "correct",
        title: "استخدام المقارنة لإنتاج قيمة بوليانية",
        code: "password_length = 8\nis_valid = password_length >= 8\nprint(is_valid)",
        explanation: "المقارنة أنتجت قيمة True لأن 8 تساوي أو أكبر من 8."
      },
      {
        type: "wrong",
        title: "خطأ في حالة الأحرف",
        code: "is_ready = true",
        error_message: "NameError: name 'true' is not defined",
        explanation: "يجب أن تُكتب True و False بحرف كبير في بدايتها في بايثون، وإلا اعتبرها المتصفح متغيراً غير معرف."
      },
      {
        type: "mistake",
        title: "استخدام النص بدلاً من البوليان",
        code: "is_active = 'False'\nif is_active:\n    print('Active!')",
        explanation: "هنا المتغير يحمل نصاً 'False' وليس قيمة بوليانية. وأي نص غير فارغ يُعتبر True في بايثون، مما يؤدي لسلوك برمجي غير متوقع."
      }
    ],
    exam_data: {
      title: "اختبار البوليان",
      questions: [
        {
          question: "ما هي القيمة الصحيحة للبوليان في بايثون؟",
          options: ["true", "TRUE", "True", "1"],
          correct_answer: "True",
          explanation: "في بايثون، يجب كتابة True بحيث يكون الحرف الأول Capital."
        }
      ]
    }
  },
  'python-5': {
    title: "الدرس 5: العمليات الحسابية - الكمبيوتر كآلة حاسبة",
    content: {
      context: "بايثون تدعم جميع العمليات الحسابية الأساسية والمتقدمة. وتتبع ترتيب العمليات الحسابية الرياضي المتعارف عليه.",
      description: "الجمع (+)، الطرح (-)، الضرب (*)، القسمة (/)، قسمة صحيحة (//)، الباقي (%)، والأُس (**).",
      prototype: "result = (10 + 5) * 2\nremainder = 10 % 3",
      parameters: "أرقام (int أو float)",
      return_value: "ناتج العملية (رقم)",
      example: "base = 2\npower = 3\nprint(base ** power) # Output: 8"
    },
    exercise_instructions: "استخدم عملية الباقي (Modulo) لطباعة باقي قسمة 10 على 3.",
    expected_output: "1",
    quick_practical_examples: [
      {
        type: "correct",
        title: "تحديد الزوجي والفردي",
        code: "number = 7\nprint(number % 2 == 0) # False",
        explanation: "إذا كان باقي قسمة العدد على 2 هو صفر، فهو زوجي. وإلا فهو فردي."
      },
      {
        type: "wrong",
        title: "القسمة على صفر",
        code: "result = 10 / 0",
        error_message: "ZeroDivisionError: division by zero",
        explanation: "لا يمكن قسمة أي رقم على صفر في الرياضيات أو في البرمجة."
      },
      {
        type: "mistake",
        title: "عدم الانتباه لأولويات العمليات الحسابية",
        code: "print(10 + 5 * 2)",
        explanation: "الناتج 20 وليس 30. عملية الضرب تُنفذ قبل الجمع. استخدم الأقواس لتغيير الأولوية."
      }
    ],
    exam_data: {
      title: "اختبار الحسابيات",
      questions: [
        {
          question: "ما هو ناتج العملية التالية: 15 % 4",
          options: ["3", "4", "3.75", "1"],
          correct_answer: "3",
          explanation: "15 قسمة 4 يساوي 3 والباقي 3."
        }
      ]
    }
  },
  'python-30': {
    title: "الدرس 30: الفئات (Classes) والكائنات",
    content: {
      context: "البرمجة كائنية التوجه (OOP) تبدأ بالفئات (Classes). الفئة هي قالب (Blueprint) لصناعة الكائنات، والكائن هو نسخة حية من هذا القالب.",
      description: "تحتوي الفئة على خصائص (Attributes) ودوال (Methods) تمثل سلوك الكائن. يُستخدم دالة __init__ كمنشئ (Constructor) للخصائص.",
      prototype: "class Car:\n    def __init__(self, color):\n        self.color = color\n\nmy_car = Car('Red')",
      parameters: "self ومعاملات الإعداد",
      return_value: "كائن من نوع الفئة",
      example: "class Dog:\n    def bark(self):\n        return 'Woof!'\n\nd = Dog()\nprint(d.bark())"
    },
    exercise_instructions: "قم بإنشاء كلاس اسمه `Cat` يحتوي على دالة `meow` ترجع النص 'Meow'. ثم أنشئ كائناً من هذا الكلاس واطبع ناتج دالة `meow`.",
    expected_output: "Meow",
    quick_practical_examples: [
      {
        type: "correct",
        title: "استخدام المُنشئ (Constructor)",
        code: "class User:\n    def __init__(self, name):\n        self.name = name\n\nu = User('Ali')\nprint(u.name)",
        explanation: "دالة `__init__` تُستدعى تلقائياً عند إنشاء الكائن لضبط خصائصه الأولية."
      },
      {
        type: "wrong",
        title: "نسيان تمرير self",
        code: "class Math:\n    def add(a, b):\n        return a + b\n\nm = Math()\nm.add(5, 3)",
        error_message: "TypeError: add() takes 2 positional arguments but 3 were given",
        explanation: "في دوال الفئة (Methods)، يجب أن يكون `self` هو المعامل الأول دائماً للإشارة إلى الكائن نفسه."
      },
      {
        type: "mistake",
        title: "تعديل خصائص الفئة بدلاً من خصائص الكائن",
        code: "class Box:\n    color = 'red'\n\nb1 = Box()\nb2 = Box()\nBox.color = 'blue'\nprint(b1.color)",
        explanation: "تعديل متغيرات الفئة العامة (Class Attributes) يؤثر على جميع الكائنات، مما قد يسبب سلوكاً غير متوقع إذا كنت تقصد تعديل كائن واحد فقط."
      }
    ],
    exam_data: {
      title: "اختبار الفئات",
      questions: [
        {
          question: "ما هي الدالة التي تُنفذ تلقائياً عند إنشاء كائن جديد في بايثون؟",
          options: ["__start__", "__init__", "constructor", "create"],
          correct_answer: "__init__",
          explanation: "الدالة __init__ هي المعمار (Constructor) في بايثون وتُستدعى أوتوماتيكياً."
        }
      ]
    }
  }
};

const updatedData = pythonTrackData.map(lesson => {
  if (updates[lesson.lesson_slug]) {
    return { ...lesson, ...updates[lesson.lesson_slug] };
  }
  return lesson;
});

fs.writeFileSync(
  './src/context/tracks/pythonData.ts',
  "export const pythonTrackData = " + JSON.stringify(updatedData, null, 2) + ";\n",
  'utf8'
);
console.log('Python placeholders patched successfully!');
