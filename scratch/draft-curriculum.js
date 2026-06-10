const CURRICULA = {
  "أساسيات واحتراف لغة Python": {
    category: "python",
    modules: [
      {
        name: "أساسيات المدخلات والمخرجات",
        topics: [
          { title: "مقدمة إلى لغة بايثون وتثبيت بيئة العمل", func: "install", code: "# Python setup\nprint('بيئة العمل جاهزة!')", expect: "بيئة العمل جاهزة!" },
          { title: "كتابة برنامج Hello World وفهم دالة print", func: "print()", code: "print(\"Hello World\")", expect: "Hello World" },
          { title: "دمج النصوص المتعددة وصنع التحيات التفاعلية", func: "String Concatenation (+)", code: "print(\"مرحباً \" + \"يا مبرمج\")", expect: "مرحباً يا مبرمج" },
          { title: "كتابة الملاحظات والتعليقات البرمجية بالرمز #", func: "Comments (#)", code: "# تعليق توضيحي\nprint(\"الكود يعمل\")", expect: "الكود يعمل" },
          { title: "تعديل سلوك نهاية السطر باستخدام معلم end", func: "print(..., end)", code: "print(\"SVK\", end=\" \")", expect: "SVK " },
          { title: "الفصل بين مخرجات الطباعة باستخدام معلم sep", func: "print(..., sep)", code: "print(\"A\", \"B\", sep=\"-\")", expect: "A-B" },
          { title: "رموز الهروب والنزول لسطر جديد بالرمز n\\", func: "\\n", code: "print(\"سطر1\\nسطر2\")", expect: "سطر1\nسطر2" },
          { title: "إدراج مسافات الجدولة وتنظيم البيانات بالرمز t\\", func: "\\t", code: "print(\"الاسم\\tالسن\")", expect: "الاسم\tالسن" },
          { title: "التعامل مع النصوص الطويلة متعددة الأسطر Triple Quotes", func: "'''...'''", code: "print('''بايثون\\nسهلة''')", expect: "بايثون\nسهلة" },
          { title: "طباعة علامات التنصيص داخل النصوص والهروب منها", func: "\\\"", code: "print(\"قال \\\"مرحباً\\\"\")", expect: "قال \"مرحباً\"" }
        ]
      },
      {
        name: "المتغيرات وأنواع البيانات",
        topics: [
          { title: "مفهوم المتغيرات وحجز المساحات في الذاكرة", func: "=", code: "x = 5\nprint(x)", expect: "5" },
          { title: "النوع النصي String وتخزين الكلمات والعبارات", func: "str", code: "name = \"SVK\"\nprint(name)", expect: "SVK" },
          { title: "النوع الرقمي الصحيح Integer للأرقام الكاملة", func: "int", code: "age = 18\nprint(age)", expect: "18" },
          { title: "النوع الرقمي العشري Float للحسابات الدقيقة", func: "float", code: "price = 9.99\nprint(price)", expect: "9.99" },
          { title: "النوع المنطقي Boolean لاتخاذ القرارات الثنائية", func: "bool", code: "is_active = True\nprint(is_active)", expect: "True" },
          { title: "فحص نوع البيانات برمجياً باستخدام دالة type", func: "type()", code: "print(type(10))", expect: "<class 'int'>" },
          { title: "التحويل الرقمي الصحيح للمدخلات باستخدام int()", func: "int()", code: "print(int(\"50\"))", expect: "50" },
          { title: "التحويل الرقمي العشري للمدخلات باستخدام float()", func: "float()", code: "print(float(\"3.14\"))", expect: "3.14" },
          { title: "تحويل البيانات إلى صيغة نصية باستخدام str()", func: "str()", code: "print(str(2026))", expect: "2026" },
          { title: "تحديث قيم المتغيرات وإعادة تعيين البيانات", func: "Reassignment", code: "x = 1\nx = 2\nprint(x)", expect: "2" }
        ]
      }
      // more modules will be generated programmatically to fill up to 100 lessons
    ]
  }
};

console.log("Curriculum template loaded.");
