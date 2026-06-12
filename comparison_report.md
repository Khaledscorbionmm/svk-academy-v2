# Lesson Comparison (Current vs Proposed)

## Lesson 20: الدرس 20: مشروع التخرج (الفصل الأول) - حاسبة العمر الذكية
**Type**: `milestone`

### 🔴 Current Version
```json
{
  "content": {
    "context": "لماذا نتعلم هذا؟ المهندس الحقيقي هو من يدمج جميع الأدوات (متغيرات، شروط، دوال) لبناء منتج برمجي متكامل.",
    "description": "في هذا الدرس الختامي للفصل الأول، نجمع كل ما تعلمناه. سنستخدم الدوال للتنظيم، والرياضيات (int) لحساب فارق التواريخ، والشروط (if/else) لاتخاذ قرار بناءً على عمر المستخدم، وسندمج النصوص (str) لعرض النتيجة النهائية! البرمجة ليست مجرد حفظ للأوامر، بل هي الفن المعماري لدمج هذه القطع (كأحجار الليجو) لبناء شيء ذكي وقابل للتوسع.",
    "prototype": "Integrate: def, int, if, return, f-strings",
    "parameters": "دمج المفاهيم البرمجية المتعددة.",
    "return_value": "برنامج مصغر يعمل بكفاءة تامة.",
    "example": "def check_age(birth_year):\n    age = 2024 - birth_year\n    if age >= 18:\n        return f'عمرك {age}، يمكنك القيادة'\n    else:\n        return f'عمرك {age}، أنت قاصر'\n\nprint(check_age(2000))"
  },
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
  ]
}
```

---

## Lesson 40: الدرس 40: مكتبة Pandas السريعة
**Type**: `milestone`

### 🔴 Current Version
```json
{
  "content": {
    "context": "في هذا الدرس سنناقش \"مكتبة Pandas السريعة\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
    "description": "شرح متكامل ومبسط عن مكتبة Pandas السريعة. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
    "prototype": "Concept_40() -> Completed",
    "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ مكتبة Pandas السريعة",
    "return_value": "احتراف وفهم مكتبة Pandas السريعة وتطبيقه في مشاريعك.",
    "example": "def practice_40():\\n      print(\"Welcome to مكتبة Pandas السريعة\")\\n  \\n  practice_40()"
  },
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
  ]
}
```

---

## Lesson 60: الدرس 60: نظام القوالب (Templates)
**Type**: `milestone`

### 🔴 Current Version
```json
{
  "content": {
    "context": "في هذا الدرس سنناقش \"نظام القوالب (Templates)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
    "description": "شرح متكامل ومبسط عن نظام القوالب (Templates). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
    "prototype": "Concept_60() -> Completed",
    "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ نظام القوالب (Templates)",
    "return_value": "احتراف وفهم نظام القوالب (Templates) وتطبيقه في مشاريعك.",
    "example": "def practice_60():\\n      print(\"Welcome to نظام القوالب (Templates)\")\\n  \\n  practice_60()"
  },
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
  ]
}
```

---

## Lesson 80: الدرس 80: تطبيق: أداة فحص الشبكات
**Type**: `milestone`

### 🔴 Current Version
```json
{
  "content": {
    "context": "في هذا الدرس سنناقش \"تطبيق: أداة فحص الشبكات\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
    "description": "شرح متكامل ومبسط عن تطبيق: أداة فحص الشبكات. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
    "prototype": "Concept_80() -> Completed",
    "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ تطبيق: أداة فحص الشبكات",
    "return_value": "احتراف وفهم تطبيق: أداة فحص الشبكات وتطبيقه في مشاريعك.",
    "example": "def practice_80():\\n      print(\"Welcome to تطبيق: أداة فحص الشبكات\")\\n  \\n  practice_80()"
  },
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
  ]
}
```

---

## Lesson 100: الدرس 100: الخاتمة والشهادة
**Type**: `capstone`

### 🔴 Current Version
```json
{
  "content": {
    "context": "في هذا الدرس سنناقش \"الخاتمة والشهادة\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
    "description": "شرح متكامل ومبسط عن الخاتمة والشهادة. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
    "prototype": "Concept_100() -> Completed",
    "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ الخاتمة والشهادة",
    "return_value": "احتراف وفهم الخاتمة والشهادة وتطبيقه في مشاريعك.",
    "example": "def practice_100():\\n      print(\"Welcome to الخاتمة والشهادة\")\\n  \\n  practice_100()"
  },
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
  ]
}
```

---

