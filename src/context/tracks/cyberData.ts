export const cyberTrackData = [
  {
    "lesson_slug": "cyber-1",
    "title": "الدرس 1: استعراض الملفات (ls)",
    "category": "File & Directory",
    "order_index": 1,
    "is_free": true,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "context": "الأمر `ls` (List) يُستخدم لعرض محتويات الدليل (المجلد) الحالي في أنظمة لينكس. وهو من أكثر الأوامر استخداماً.",
      "description": "يمكن استخدامه مع خيارات (Flags) مثل `-l` لعرض التفاصيل الكاملة (الصلاحيات، المالك، الحجم) أو `-a` لعرض الملفات المخفية.",
      "prototype": "ls [options] [directory]",
      "parameters": "خيارات ومسار الدليل",
      "return_value": "قائمة بالملفات والمجلدات",
      "example": "ls -la /var/log"
    },
    "exercise_instructions": "استخدم الأمر `ls` مع الخيارات اللازمة لعرض جميع الملفات (بما فيها المخفية) بتفاصيلها الكاملة.",
    "expected_output": "ls -la",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "عرض تفصيلي",
        "code": "ls -l",
        "explanation": "يعرض الملفات مع الصلاحيات وحجمها وتاريخ التعديل."
      },
      {
        "type": "wrong",
        "title": "مسار خاطئ",
        "code": "ls /nonexistent",
        "error_message": "ls: cannot access '/nonexistent': No such file or directory",
        "explanation": "حاولت استعراض مجلد لا وجود له."
      },
      {
        "type": "mistake",
        "title": "نسيان عرض المخفي",
        "code": "ls",
        "explanation": "هذا الأمر لن يعرض الملفات التي تبدأ بنقطة (مثل .env). استخدم ls -a."
      }
    ],
    "exam_data": {
      "title": "اختبار ls",
      "questions": [
        {
          "question": "أي خيار يستخدم لعرض الملفات المخفية؟",
          "options": [
            "-l",
            "-a",
            "-h",
            "-R"
          ],
          "correct_answer": "-a",
          "explanation": "الخيار -a يعني all (الكل)."
        }
      ]
    },
    "lesson_type": "concept",
    "concept_context": "??? ????? ???? ??????: الدرس 1: استعراض الملفات (ls)",
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
      "title": "????: الدرس 1: استعراض الملفات (ls)",
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
    "lesson_slug": "cyber-2",
    "title": "الدرس 2: التنقل بين المجلدات (cd)",
    "category": "File & Directory",
    "order_index": 2,
    "is_free": true,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "context": "الأمر `cd` (Change Directory) يُستخدم للانتقال من مجلد إلى آخر داخل نظام الملفات.",
      "description": "يمكنك استخدام المسار المطلق (يبدأ من /) أو المسار النسبي. الرمز `..` يعني المجلد الأب، و `~` يعني المجلد الرئيسي للمستخدم.",
      "prototype": "cd [directory]",
      "parameters": "مسار المجلد الوجهة",
      "return_value": "تغيير مسار العمل الحالي",
      "example": "cd /etc/ssh"
    },
    "exercise_instructions": "اكتب الأمر اللازم للرجوع خطوة واحدة للخلف (إلى المجلد الأب).",
    "expected_output": "cd ..",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الذهاب لمجلد المستخدم",
        "code": "cd ~",
        "explanation": "ينقلك فوراً إلى المجلد الرئيسي الخاص بك."
      },
      {
        "type": "wrong",
        "title": "عدم وجود صلاحيات",
        "code": "cd /root",
        "error_message": "bash: cd: /root: Permission denied",
        "explanation": "لا تملك صلاحية الدخول لمجلد الجذر كمسخدم عادي."
      },
      {
        "type": "mistake",
        "title": "كتابة المسار بمسافات",
        "code": "cd my folder",
        "explanation": "يجب وضع المسار بين علامتي تنصيص 'my folder' أو استخدام الشرطة المائلة my\\ folder."
      }
    ],
    "exam_data": {
      "title": "اختبار cd",
      "questions": [
        {
          "question": "كيف ترجع للمجلد السابق مباشرة؟",
          "options": [
            "cd .",
            "cd ..",
            "cd ~",
            "cd -"
          ],
          "correct_answer": "cd -",
          "explanation": "الخيار cd - يعيدك لآخر مجلد كنت فيه."
        }
      ]
    },
    "lesson_type": "concept",
    "concept_context": "??? ????? ???? ??????: الدرس 2: التنقل بين المجلدات (cd)",
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
      "title": "????: الدرس 2: التنقل بين المجلدات (cd)",
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
    "lesson_slug": "cyber-3",
    "title": "الدرس 3: معرفة المسار الحالي (pwd)",
    "category": "File & Directory",
    "order_index": 3,
    "is_free": true,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "context": "الأمر `pwd` (Print Working Directory) يعرض المسار المطلق للمجلد الذي تتواجد فيه حالياً.",
      "description": "مفيد جداً عندما تضيع في نظام الملفات المعقد وتريد معرفة مكانك بالضبط قبل تنفيذ أوامر الحذف أو النقل.",
      "prototype": "pwd",
      "parameters": "لا يحتاج لمعاملات",
      "return_value": "نص يمثل المسار المطلق",
      "example": "pwd\n# Output: /home/user/documents"
    },
    "exercise_instructions": "اكتب الأمر الذي يعرض المسار الكامل لمجلدك الحالي.",
    "expected_output": "pwd",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "استخدام قياسي",
        "code": "pwd",
        "explanation": "يطبع مسارك الحالي."
      },
      {
        "type": "wrong",
        "title": "إضافة معاملات غير مدعومة",
        "code": "pwd -x",
        "error_message": "pwd: invalid option -- 'x'",
        "explanation": "pwd لا يحتاج عادة لأي خيارات."
      },
      {
        "type": "mistake",
        "title": "الخلط بين pwd والأوامر الأخرى",
        "code": "cd pwd",
        "explanation": "لا تفعل ذلك، pwd ليس مجلداً بل أمر تنفيذي."
      }
    ],
    "exam_data": {
      "title": "اختبار pwd",
      "questions": [
        {
          "question": "ما هي وظيفة pwd؟",
          "options": [
            "تغيير كلمة المرور",
            "طباعة المسار الحالي",
            "إنشاء ملف",
            "حذف مجلد"
          ],
          "correct_answer": "طباعة المسار الحالي",
          "explanation": "اختصار لـ Print Working Directory."
        }
      ]
    },
    "lesson_type": "concept",
    "concept_context": "??? ????? ???? ??????: الدرس 3: معرفة المسار الحالي (pwd)",
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
      "title": "????: الدرس 3: معرفة المسار الحالي (pwd)",
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
    "lesson_slug": "cyber-4",
    "title": "الدرس 4: إنشاء مجلدات (mkdir)",
    "category": "File & Directory",
    "order_index": 4,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "context": "الأمر `mkdir` (Make Directory) يُستخدم لإنشاء مجلد أو مجلدات جديدة.",
      "description": "يمكنك إنشاء مجلد واحد، أو عدة مجلدات، أو حتى شجرة مجلدات متداخلة باستخدام الخيار `-p`.",
      "prototype": "mkdir [options] directory_name",
      "parameters": "اسم المجلد المراد إنشاؤه",
      "return_value": "مجلد جديد في النظام",
      "example": "mkdir -p project/src/components"
    },
    "exercise_instructions": "قم بإنشاء مجلد باسم `backup`.",
    "expected_output": "mkdir backup",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "إنشاء مسار متكامل",
        "code": "mkdir -p app/views/home",
        "explanation": "الخيار -p ينشئ المجلدات الأب إذا لم تكن موجودة."
      },
      {
        "type": "wrong",
        "title": "المجلد موجود مسبقاً",
        "code": "mkdir backup",
        "error_message": "mkdir: cannot create directory ‘backup’: File exists",
        "explanation": "لا يمكن إنشاء مجلد باسم موجود بالفعل."
      },
      {
        "type": "mistake",
        "title": "إنشاء مجلدات بمسافات بالخطأ",
        "code": "mkdir my new folder",
        "explanation": "هذا سينشئ 3 مجلدات منفصلة (my, new, folder). استخدم علامات التنصيص."
      }
    ],
    "exam_data": {
      "title": "اختبار mkdir",
      "questions": [
        {
          "question": "أي خيار يسمح بإنشاء مجلدات متداخلة دفعة واحدة؟",
          "options": [
            "-r",
            "-f",
            "-p",
            "-a"
          ],
          "correct_answer": "-p",
          "explanation": "الخيار -p (parents) ينشئ المجلدات المطلوبة لتكوين المسار."
        }
      ]
    },
    "lesson_type": "concept",
    "concept_context": "??? ????? ???? ??????: الدرس 4: إنشاء مجلدات (mkdir)",
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
      "title": "????: الدرس 4: إنشاء مجلدات (mkdir)",
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
    "lesson_slug": "cyber-5",
    "title": "الدرس 5: حذف الملفات (rm)",
    "category": "File & Directory",
    "order_index": 5,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "context": "الأمر `rm` (Remove) يستخدم لحذف الملفات والمجلدات.",
      "description": "الحذف في لينكس نهائي عادة (لا توجد سلة مهملات). لحذف مجلد بمحتوياته استخدم `-r`، ولفرض الحذف استخدم `-f`.",
      "prototype": "rm [options] file_name",
      "parameters": "اسم الملف أو المجلد المراد حذفه",
      "return_value": "حذف العنصر نهائياً",
      "example": "rm -rf old_project/"
    },
    "exercise_instructions": "احذف الملف المسمى `temp.txt`.",
    "expected_output": "rm temp.txt",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "حذف مجلد بمحتوياته",
        "code": "rm -r folder_name",
        "explanation": "الخيار -r ضروري لحذف المجلدات (recursive)."
      },
      {
        "type": "wrong",
        "title": "محاولة حذف مجلد بدون -r",
        "code": "rm folder_name",
        "error_message": "rm: cannot remove 'folder_name': Is a directory",
        "explanation": "الأمر rm لوحده مخصص للملفات فقط."
      },
      {
        "type": "mistake",
        "title": "الكارثة المطلقة",
        "code": "rm -rf /",
        "explanation": "هذا الأمر يقوم بمسح نظام التشغيل بالكامل! كن حذراً جداً مع -rf."
      }
    ],
    "exam_data": {
      "title": "اختبار rm",
      "questions": [
        {
          "question": "أي خيار يستخدم لفرض الحذف بدون طلب تأكيد؟",
          "options": [
            "-i",
            "-r",
            "-f",
            "-d"
          ],
          "correct_answer": "-f",
          "explanation": "الخيار -f يعني force."
        }
      ]
    },
    "lesson_type": "concept",
    "concept_context": "??? ????? ???? ??????: الدرس 5: حذف الملفات (rm)",
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
      "title": "????: الدرس 5: حذف الملفات (rm)",
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
    "lesson_slug": "cyber-6",
    "title": "الدرس 6: نسخ الملفات (cp)",
    "category": "File & Directory",
    "order_index": 6,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "context": "الأمر `cp` (Copy) يُستخدم لنسخ الملفات والمجلدات من مكان إلى آخر.",
      "description": "يحتاج الأمر إلى مصدر ووجهة. لنسخ المجلدات بمحتوياتها نستخدم الخيار `-r`.",
      "prototype": "cp [options] source destination",
      "parameters": "مسار المصدر ومسار الوجهة",
      "return_value": "نسخة مطابقة في الوجهة",
      "example": "cp config.yml config.backup.yml"
    },
    "exercise_instructions": "قم بنسخ ملف `data.txt` إلى مجلد `backup/`.",
    "expected_output": "cp data.txt backup/",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "نسخ مجلد",
        "code": "cp -r /var/www /backup/www",
        "explanation": "تم استخدام -r لنسخ المجلد بالكامل."
      },
      {
        "type": "wrong",
        "title": "نسخ مجلد بدون -r",
        "code": "cp /var/www /backup/",
        "error_message": "cp: -r not specified; omitting directory '/var/www'",
        "explanation": "يجب تحديد الخيار -r للتعامل مع المجلدات."
      },
      {
        "type": "mistake",
        "title": "الكتابة فوق ملف مهم",
        "code": "cp new.txt important.txt",
        "explanation": "إذا كان important.txt موجوداً، سيتم مسحه واستبداله فوراً. استخدم -i للتأكيد قبل الاستبدال."
      }
    ],
    "exam_data": {
      "title": "اختبار cp",
      "questions": [
        {
          "question": "كيف تنسخ مجلداً بالكامل؟",
          "options": [
            "cp -d",
            "cp -r",
            "cp -f",
            "copy"
          ],
          "correct_answer": "cp -r",
          "explanation": "الخيار -r يعني النقل المتكرر Recursive."
        }
      ]
    },
    "lesson_type": "concept",
    "concept_context": "??? ????? ???? ??????: الدرس 6: نسخ الملفات (cp)",
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
      "title": "????: الدرس 6: نسخ الملفات (cp)",
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
    "lesson_slug": "cyber-7",
    "title": "الدرس 7: نقل وإعادة تسمية (mv)",
    "category": "File & Directory",
    "order_index": 7,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "context": "الأمر `mv` (Move) يقوم بمهمتين: نقل الملفات من مكان لآخر، أو إعادة تسميتها إذا كان النقل في نفس المجلد.",
      "description": "لا يترك نسخة في المكان الأصلي كالأمر cp. عملية النقل سريعة جداً لأنها تعدل فقط الفهرس.",
      "prototype": "mv source destination",
      "parameters": "المصدر والوجهة",
      "return_value": "تغيير المسار أو الاسم",
      "example": "mv old_name.txt new_name.txt"
    },
    "exercise_instructions": "قم بإعادة تسمية الملف `test.txt` إلى `final.txt`.",
    "expected_output": "mv test.txt final.txt",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "نقل ملف لمجلد آخر",
        "code": "mv config.json /etc/app/",
        "explanation": "ينقل الملف إلى المجلد المحدد."
      },
      {
        "type": "wrong",
        "title": "نقل لملف لا تملك صلاحيته",
        "code": "mv my_file /etc/",
        "error_message": "mv: cannot move to '/etc/my_file': Permission denied",
        "explanation": "تحتاج صلاحيات sudo للكتابة في مجلدات النظام."
      },
      {
        "type": "mistake",
        "title": "دمج عدة ملفات بالخطأ",
        "code": "mv file1 file2",
        "explanation": "هذا لا يدمج، بل يمسح file2 ويضع مكانه file1!"
      }
    ],
    "exam_data": {
      "title": "اختبار mv",
      "questions": [
        {
          "question": "ماذا يفعل الأمر: mv a.txt b.txt (في حال عدم وجود مجلد بـ b.txt)؟",
          "options": [
            "ينسخ الملف",
            "يعيد تسمية الملف",
            "يحذف الملفين",
            "يُظهر خطأ"
          ],
          "correct_answer": "يعيد تسمية الملف",
          "explanation": "إذا كانت الوجهة ليست مجلداً، يتم اعتبارها إعادة تسمية."
        }
      ]
    },
    "lesson_type": "concept",
    "concept_context": "??? ????? ???? ??????: الدرس 7: نقل وإعادة تسمية (mv)",
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
      "title": "????: الدرس 7: نقل وإعادة تسمية (mv)",
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
    "lesson_slug": "cyber-8",
    "title": "الدرس 8: إنشاء ملف فارغ وتحديث الوقت (touch)",
    "category": "File & Directory",
    "order_index": 8,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "context": "الأمر `touch` يُستخدم أساساً لتحديث وقت آخر تعديل لملف، ولكن الاستخدام الأشهر له هو إنشاء ملفات فارغة جديدة.",
      "description": "طريقة سريعة لإنشاء ملف نصي أو أي امتداد آخر بدون فتح محرر نصوص.",
      "prototype": "touch file_name",
      "parameters": "اسم الملف",
      "return_value": "ملف فارغ أو تحديث للوقت",
      "example": "touch index.html"
    },
    "exercise_instructions": "قم بإنشاء ملف فارغ باسم `app.log`.",
    "expected_output": "touch app.log",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "إنشاء عدة ملفات",
        "code": "touch file1.txt file2.txt",
        "explanation": "ينشئ الملفين معاً في نفس اللحظة."
      },
      {
        "type": "wrong",
        "title": "مسار غير موجود",
        "code": "touch /fake_dir/file.txt",
        "error_message": "touch: cannot touch '/fake_dir/file.txt': No such file or directory",
        "explanation": "المجلد الحاوي للملف غير موجود مسبقاً."
      },
      {
        "type": "mistake",
        "title": "مسح المحتوى؟",
        "code": "touch existing_file.txt",
        "explanation": "لا تقلق، touch لا يمسح محتوى الملفات الموجودة، فقط يحدّث وقت تعديلها (Timestamp)."
      }
    ],
    "exam_data": {
      "title": "اختبار touch",
      "questions": [
        {
          "question": "هل يمسح touch محتوى الملف إذا كان موجوداً؟",
          "options": [
            "نعم",
            "لا، يحدّث وقته فقط",
            "يُظهر خطأ",
            "يحذفه"
          ],
          "correct_answer": "لا، يحدّث وقته فقط",
          "explanation": "هذه ميزة مهمة لاستخدامه كأداة تحديث للطوابع الزمنية."
        }
      ]
    },
    "lesson_type": "concept",
    "concept_context": "??? ????? ???? ??????: الدرس 8: إنشاء ملف فارغ وتحديث الوقت (touch)",
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
      "title": "????: الدرس 8: إنشاء ملف فارغ وتحديث الوقت (touch)",
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
    "lesson_slug": "cyber-9",
    "title": "الدرس 9: قراءة الملفات (cat)",
    "category": "File & Directory",
    "order_index": 9,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "context": "الأمر `cat` (Concatenate) يقرأ محتوى الملفات ويعرضه بالكامل على الشاشة (Terminal).",
      "description": "مفيد للملفات النصية القصيرة، ويمكن استخدامه لدمج عدة ملفات في ملف واحد.",
      "prototype": "cat file_name",
      "parameters": "اسم الملف",
      "return_value": "طباعة المحتوى النصي",
      "example": "cat /etc/passwd"
    },
    "exercise_instructions": "اعرض محتوى الملف المسمى `notes.txt`.",
    "expected_output": "cat notes.txt",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "دمج ملفين",
        "code": "cat file1 file2 > combined",
        "explanation": "يقرأ الملفين ويحفظ الناتج في ملف جديد."
      },
      {
        "type": "wrong",
        "title": "قراءة مجلد",
        "code": "cat /etc",
        "error_message": "cat: /etc: Is a directory",
        "explanation": "لا يمكن قراءة المجلدات باستخدام cat."
      },
      {
        "type": "mistake",
        "title": "قراءة ملفات ضخمة جداً",
        "code": "cat large_log.txt",
        "explanation": "سيطبع الملايين من الأسطر ولن تتمكن من القراءة أو التوقف بسهولة. استخدم less للملفات الكبيرة."
      }
    ],
    "exam_data": {
      "title": "اختبار cat",
      "questions": [
        {
          "question": "كيف ندمج ملفين a و b في ملف c؟",
          "options": [
            "cat a b c",
            "cat a b > c",
            "cat c < a b",
            "cat a + b = c"
          ],
          "correct_answer": "cat a b > c",
          "explanation": "نستخدم التوجيه (>) لإرسال المخرجات إلى الملف c."
        }
      ]
    },
    "lesson_type": "concept",
    "concept_context": "??? ????? ???? ??????: الدرس 9: قراءة الملفات (cat)",
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
      "title": "????: الدرس 9: قراءة الملفات (cat)",
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
    "lesson_slug": "cyber-10",
    "title": "الدرس 10: التصفح المتقدم (less)",
    "category": "File & Directory",
    "order_index": 10,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "context": "الأمر `less` يُستخدم لقراءة الملفات النصية الطويلة صفحة بصفحة، بدلاً من طباعتها دفعة واحدة مثل cat.",
      "description": "يمكنك البحث داخل الملف باستخدام `/`، والخروج بالضغط على حرف `q`.",
      "prototype": "less file_name",
      "parameters": "اسم الملف",
      "return_value": "واجهة تصفح تفاعلية",
      "example": "less /var/log/syslog"
    },
    "exercise_instructions": "افتح الملف `large_file.txt` للتصفح بوضع less.",
    "expected_output": "less large_file.txt",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "التصفح والبحث",
        "code": "less config.ini",
        "explanation": "داخل less، اضغط / للبحث عن كلمة، واضغط n للنتيجة التالية."
      },
      {
        "type": "wrong",
        "title": "عدم وجود الملف",
        "code": "less missing.txt",
        "error_message": "missing.txt: No such file or directory",
        "explanation": "يجب أن يكون الملف موجوداً للقراءة."
      },
      {
        "type": "mistake",
        "title": "عدم معرفة كيفية الخروج",
        "code": "CTRL+C",
        "explanation": "الكثير يضغطون CTRL+C للخروج من less. الطريقة الصحيحة هي الضغط على زر q (Quit)."
      }
    ],
    "exam_data": {
      "title": "اختبار less",
      "questions": [
        {
          "question": "ما هو الزر المستخدم للخروج من واجهة less؟",
          "options": [
            "ESC",
            "q",
            "CTRL+X",
            "CTRL+C"
          ],
          "correct_answer": "q",
          "explanation": "حرف q يرمز إلى Quit (خروج)."
        }
      ]
    },
    "lesson_type": "concept",
    "concept_context": "??? ????? ???? ??????: الدرس 10: التصفح المتقدم (less)",
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
      "title": "????: الدرس 10: التصفح المتقدم (less)",
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
    "lesson_slug": "cyber-11",
    "title": "الدرس 11: تعديل الصلاحيات (chmod)",
    "category": "Permissions & Ownership",
    "order_index": 11,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "context": "الأمر `chmod` (Change Mode) يُستخدم لتغيير صلاحيات (قراءة، كتابة، تنفيذ) الملفات والمجلدات.",
      "description": "يمكن استخدام الأرقام (Octal) مثل 777 أو الحروف (u, g, o) مع (+, -, =). القراءة=4، الكتابة=2، التنفيذ=1.",
      "prototype": "chmod [permissions] file",
      "parameters": "رمز الصلاحيات والملف",
      "return_value": "تغيير صلاحيات الوصول",
      "example": "chmod 755 script.sh"
    },
    "exercise_instructions": "أعطِ صلاحية التنفيذ (Execute) لملف `run.sh` باستخدام نظام الحروف للمستخدم المالك (u).",
    "expected_output": "chmod u+x run.sh",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "إعطاء كل الصلاحيات للمالك",
        "code": "chmod 700 secret.txt",
        "explanation": "7 تعني قراءة+كتابة+تنفيذ للمالك، و 0 للآخرين."
      },
      {
        "type": "wrong",
        "title": "تعديل ملف لا تملكه",
        "code": "chmod 777 /etc/passwd",
        "error_message": "chmod: changing permissions of '/etc/passwd': Operation not permitted",
        "explanation": "لا تملك صلاحية تعديل ملفات النظام."
      },
      {
        "type": "mistake",
        "title": "إعطاء 777 لكل شيء",
        "code": "chmod -r 777 /var/www",
        "explanation": "إعطاء صلاحية 777 يمثل خطراً أمنياً هائلاً (الجميع يمكنهم قراءة وكتابة وتنفيذ كل شيء)."
      }
    ],
    "exam_data": {
      "title": "اختبار chmod",
      "questions": [
        {
          "question": "ما هو الرقم المقابل لصلاحية (القراءة + التنفيذ) معاً؟",
          "options": [
            "3",
            "5",
            "6",
            "7"
          ],
          "correct_answer": "5",
          "explanation": "القراءة 4 والتنفيذ 1، إذن المجموع 5."
        }
      ]
    },
    "lesson_type": "concept",
    "concept_context": "??? ????? ???? ??????: الدرس 11: تعديل الصلاحيات (chmod)",
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
      "title": "????: الدرس 11: تعديل الصلاحيات (chmod)",
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
    "lesson_slug": "cyber-12",
    "title": "الدرس 12: تغيير المالك (chown)",
    "category": "Permissions & Ownership",
    "order_index": 12,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "context": "الأمر `chown` (Change Owner) يتيح لك تغيير المستخدم (والمجموعة) المالك للملف أو المجلد.",
      "description": "غالباً يحتاج هذا الأمر إلى صلاحيات الجذر (root/sudo) لأن نقل الملكية عملية أمنية حساسة.",
      "prototype": "chown [user]:[group] file",
      "parameters": "المستخدم والمجموعة والملف",
      "return_value": "تغيير الملكية",
      "example": "sudo chown root:www-data config.php"
    },
    "exercise_instructions": "غيّر مالك الملف `data.txt` إلى المستخدم `admin`.",
    "expected_output": "sudo chown admin data.txt",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تغيير المالك والمجموعة",
        "code": "chown user:group file.txt",
        "explanation": "الاسم الأول للمستخدم والثاني للمجموعة."
      },
      {
        "type": "wrong",
        "title": "مستخدم غير موجود",
        "code": "chown fakeuser file.txt",
        "error_message": "chown: invalid user: 'fakeuser'",
        "explanation": "يجب أن يكون المستخدم مسجلاً في النظام."
      },
      {
        "type": "mistake",
        "title": "تغيير ملكية مجلد بدون محتوياته",
        "code": "chown user folder",
        "explanation": "هذا يغير ملكية المجلد فقط. لتغيير المحتويات استخدم chown -R."
      }
    ],
    "exam_data": {
      "title": "اختبار chown",
      "questions": [
        {
          "question": "ماذا يمثل الجزء الثاني بعد النقطتين في user:group؟",
          "options": [
            "المجموعة",
            "الصلاحية",
            "كلمة المرور",
            "لا شيء"
          ],
          "correct_answer": "المجموعة",
          "explanation": "يشير إلى Group (المجموعة)."
        }
      ]
    },
    "lesson_type": "concept",
    "concept_context": "??? ????? ???? ??????: الدرس 12: تغيير المالك (chown)",
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
      "title": "????: الدرس 12: تغيير المالك (chown)",
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
    "lesson_slug": "cyber-13",
    "title": "الدرس 13: تغيير المجموعة (chgrp)",
    "category": "Permissions & Ownership",
    "order_index": 13,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "context": "الأمر `chgrp` (Change Group) مخصص لتغيير المجموعة المالكة للملف، بدون الحاجة لاستخدام chown.",
      "description": "مفيد في بيئات العمل التي تتشارك فيها مجموعات من المستخدمين (مثل المطورين) في نفس الملفات.",
      "prototype": "chgrp group_name file",
      "parameters": "اسم المجموعة والملف",
      "return_value": "تغيير المجموعة",
      "example": "chgrp developers shared_folder/"
    },
    "exercise_instructions": "غيّر مجموعة الملف `team.doc` إلى مجموعة `staff`.",
    "expected_output": "chgrp staff team.doc",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تغيير متكرر للمجلد",
        "code": "chgrp -R www-data html/",
        "explanation": "يتم تغيير مجموعة المجلد وكل ما بداخله."
      },
      {
        "type": "wrong",
        "title": "مجموعة وهمية",
        "code": "chgrp ghost file",
        "error_message": "chgrp: invalid group: 'ghost'",
        "explanation": "المجموعة غير موجودة في /etc/group."
      },
      {
        "type": "mistake",
        "title": "لست عضواً",
        "code": "chgrp admin my_file",
        "explanation": "كمستخدم عادي، لا يمكنك تعيين مجموعة لست عضواً فيها."
      }
    ],
    "exam_data": {
      "title": "اختبار chgrp",
      "questions": [
        {
          "question": "هل chgrp يغير المستخدم المالك للملف؟",
          "options": [
            "نعم",
            "لا",
            "فقط إذا كان الجذر",
            "أحياناً"
          ],
          "correct_answer": "لا",
          "explanation": "يغير المجموعة فقط."
        }
      ]
    },
    "lesson_type": "concept",
    "concept_context": "??? ????? ???? ??????: الدرس 13: تغيير المجموعة (chgrp)",
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
      "title": "????: الدرس 13: تغيير المجموعة (chgrp)",
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
    "lesson_slug": "cyber-14",
    "title": "الدرس 14: قناع الصلاحيات (umask)",
    "category": "Permissions & Ownership",
    "order_index": 14,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "context": "الأمر `umask` يُحدد قناع الصلاحيات الافتراضي للملفات والمجلدات الجديدة التي تنشئها.",
      "description": "الصلاحية الافتراضية للملف 666 والمجلد 777، ويتم طرح قيمة umask منها. مثلاً umask 022 يعني (666 - 022 = 644 للملفات).",
      "prototype": "umask [value]",
      "parameters": "القيمة الثمانية للقناع",
      "return_value": "تغيير القناع الافتراضي",
      "example": "umask 027"
    },
    "exercise_instructions": "اكتب الأمر لعرض قيمة umask الحالية.",
    "expected_output": "umask",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تعيين قناع آمن",
        "code": "umask 077",
        "explanation": "يجعل الملفات الجديدة متاحة للمالك فقط (يمنع الآخرين)."
      },
      {
        "type": "wrong",
        "title": "قيمة غير صالحة",
        "code": "umask 999",
        "error_message": "bash: umask: 999: octal number out of range",
        "explanation": "نظام الصلاحيات يعتمد على الأرقام الثمانية (0-7)."
      },
      {
        "type": "mistake",
        "title": "الخلط بين umask و chmod",
        "code": "umask 777",
        "explanation": "هذا سيجعل ملفاتك الجديدة بصلاحية 000 (لا أحد يمكنه القراءة/الكتابة)! umask يعمل بالطرح."
      }
    ],
    "exam_data": {
      "title": "اختبار umask",
      "questions": [
        {
          "question": "إذا كان umask 022، فما هي صلاحية المجلد الجديد؟",
          "options": [
            "777",
            "755",
            "644",
            "022"
          ],
          "correct_answer": "755",
          "explanation": "777 - 022 = 755."
        }
      ]
    },
    "lesson_type": "concept",
    "concept_context": "??? ????? ???? ??????: الدرس 14: قناع الصلاحيات (umask)",
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
      "title": "????: الدرس 14: قناع الصلاحيات (umask)",
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
    "lesson_slug": "cyber-15",
    "title": "الدرس 15: تغيير كلمة المرور (passwd)",
    "category": "Permissions & Ownership",
    "order_index": 15,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "context": "الأمر `passwd` يُستخدم لتغيير كلمة مرور المستخدم.",
      "description": "المستخدم العادي يمكنه تغيير كلمة مروره فقط. مستخدم الجذر (root) يمكنه تغيير كلمة مرور أي مستخدم آخر في النظام.",
      "prototype": "passwd [username]",
      "parameters": "اسم المستخدم (اختياري لكلمتك)",
      "return_value": "تحديث قاعدة بيانات كلمات المرور",
      "example": "passwd"
    },
    "exercise_instructions": "اكتب الأمر اللازم لتغيير كلمة مرور المستخدم `guest` (بافتراض أنك root).",
    "expected_output": "passwd guest",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تغيير كلمتك الخاصة",
        "code": "passwd",
        "explanation": "سيطلب منك الكلمة القديمة ثم الجديدة مرتين."
      },
      {
        "type": "wrong",
        "title": "تغيير كلمة غيرك بدون صلاحية",
        "code": "passwd root",
        "error_message": "passwd: You may not view or modify password information for root.",
        "explanation": "تحتاج إلى sudo لفعل ذلك."
      },
      {
        "type": "mistake",
        "title": "اختيار كلمة مرور ضعيفة",
        "code": "New password: 123",
        "explanation": "النظام غالباً سيرفضها بعبارة 'BAD PASSWORD: is too simple'."
      }
    ],
    "exam_data": {
      "title": "اختبار passwd",
      "questions": [
        {
          "question": "من يمكنه تغيير كلمة مرور أي مستخدم على النظام؟",
          "options": [
            "أي مستخدم",
            "المستخدم الجذر (root)",
            "مجموعة users",
            "لا أحد"
          ],
          "correct_answer": "المستخدم الجذر (root)",
          "explanation": "الـ root يملك الصلاحيات الكاملة."
        }
      ]
    },
    "lesson_type": "concept",
    "concept_context": "??? ????? ???? ??????: الدرس 15: تغيير كلمة المرور (passwd)",
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
      "title": "????: الدرس 15: تغيير كلمة المرور (passwd)",
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
    "lesson_slug": "cyber-16",
    "title": "الدرس 16: تبديل المستخدم (su)",
    "category": "Permissions & Ownership",
    "order_index": 16,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "context": "الأمر `su` (Substitute User) يسمح لك بفتح جلسة باسم مستخدم آخر دون تسجيل الخروج.",
      "description": "الاستخدام الأكثر شيوعاً هو التبديل إلى المستخدم الجذر (root).",
      "prototype": "su [options] [username]",
      "parameters": "اسم المستخدم",
      "return_value": "قشرة (Shell) باسم المستخدم الجديد",
      "example": "su - admin"
    },
    "exercise_instructions": "قم بالتبديل للمستخدم الجذر (root).",
    "expected_output": "su -",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "التبديل مع بيئة المستخدم",
        "code": "su - root",
        "explanation": "الرمز (-) مهم لأنه يحمل متغيرات البيئة الخاصة بالمستخدم الجديد."
      },
      {
        "type": "wrong",
        "title": "كلمة مرور خاطئة",
        "code": "su root\nPassword: ***",
        "error_message": "su: Authentication failure",
        "explanation": "أدخلت كلمة المرور بشكل غير صحيح."
      },
      {
        "type": "mistake",
        "title": "عدم معرفة كيفية الرجوع",
        "code": "exit",
        "explanation": "للعودة لمستخدمك الأصلي، ببساطة اكتب exit."
      }
    ],
    "exam_data": {
      "title": "اختبار su",
      "questions": [
        {
          "question": "ما فائدة الرمز (-) في الأمر: su -",
          "options": [
            "تقليل الصلاحيات",
            "تحميل بيئة المستخدم الجديد",
            "تسريع التبديل",
            "لا شيء"
          ],
          "correct_answer": "تحميل بيئة المستخدم الجديد",
          "explanation": "يقوم بتحميل المتغيرات مثل مسارات PATH وغيرها."
        }
      ]
    },
    "lesson_type": "concept",
    "concept_context": "??? ????? ???? ??????: الدرس 16: تبديل المستخدم (su)",
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
      "title": "????: الدرس 16: تبديل المستخدم (su)",
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
    "lesson_slug": "cyber-17",
    "title": "الدرس 17: التنفيذ كجذر (sudo)",
    "category": "Permissions & Ownership",
    "order_index": 17,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "context": "الأمر `sudo` (SuperUser DO) ينفذ أمراً واحداً بصلاحيات الجذر (root) ثم يعود فوراً لمستخدمك العادي.",
      "description": "يعتبر أكثر أماناً من فتح جلسة كاملة بـ su لأنه يسجل الأوامر المنفذة ويقلل من الأخطاء الكارثية.",
      "prototype": "sudo command",
      "parameters": "الأمر المراد تنفيذه",
      "return_value": "تنفيذ بصلاحية root",
      "example": "sudo apt update"
    },
    "exercise_instructions": "استخدم `sudo` لإنشاء مجلد باسم `system_logs` داخل مجلد `/var/log`.",
    "expected_output": "sudo mkdir /var/log/system_logs",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تحديث النظام",
        "code": "sudo apt upgrade",
        "explanation": "يتطلب صلاحيات واسعة لذا نستخدم sudo."
      },
      {
        "type": "wrong",
        "title": "المستخدم غير مسجل في sudoers",
        "code": "sudo ls",
        "error_message": "user is not in the sudoers file. This incident will be reported.",
        "explanation": "مدير النظام لم يمنحك صلاحية استخدام sudo."
      },
      {
        "type": "mistake",
        "title": "استخدام sudo مع أوامر لا تحتاجه",
        "code": "sudo pwd",
        "explanation": "لا حاجة لـ sudo هنا، إنه مجرد هدر للوقت ويعرض النظام لمخاطر غير ضرورية."
      }
    ],
    "exam_data": {
      "title": "اختبار sudo",
      "questions": [
        {
          "question": "أيهما يعتبر أكثر أماناً في الاستخدام اليومي؟",
          "options": [
            "su root",
            "تسجيل الدخول كـ root",
            "sudo",
            "إعطاء 777 لكل شيء"
          ],
          "correct_answer": "sudo",
          "explanation": "يطبق الصلاحية على أمر واحد فقط ويحتفظ بالسجل."
        }
      ]
    },
    "lesson_type": "concept",
    "concept_context": "??? ????? ???? ??????: الدرس 17: التنفيذ كجذر (sudo)",
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
      "title": "????: الدرس 17: التنفيذ كجذر (sudo)",
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
    "lesson_slug": "cyber-18",
    "title": "الدرس 18: تعديل ملف sudoers بـ (visudo)",
    "category": "Permissions & Ownership",
    "order_index": 18,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "context": "الأمر `visudo` يُستخدم لتحرير ملف إعدادات الصلاحيات `/etc/sudoers` بشكل آمن.",
      "description": "يقوم هذا الأمر بفحص الأخطاء الإملائية والمنطقية (Syntax) قبل حفظ الملف، لمنع قفل النظام بالكامل في حال خطأ التكوين.",
      "prototype": "sudo visudo",
      "parameters": "لا يوجد",
      "return_value": "فتح محرر آمن لملف sudoers",
      "example": "sudo visudo"
    },
    "exercise_instructions": "افتح ملف sudoers للتعديل بشكل آمن.",
    "expected_output": "sudo visudo",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "منح صلاحيات بدون باسورد",
        "code": "john ALL=(ALL) NOPASSWD: ALL",
        "explanation": "يُضاف هذا السطر لملف sudoers لتخويل john بتنفيذ أي شيء بدون طلب كلمة مرور."
      },
      {
        "type": "wrong",
        "title": "تعديل الملف بـ nano العادي",
        "code": "sudo nano /etc/sudoers",
        "error_message": "No specific error, but DANGEROUS",
        "explanation": "إذا أخطأت في الكتابة، لن يخبرك nano وسيحرم الجميع من استخدام sudo!"
      },
      {
        "type": "mistake",
        "title": "تعديل بصلاحية مستخدم عادي",
        "code": "visudo",
        "explanation": "يجب تشغيل visudo بصلاحية الجذر (sudo visudo)."
      }
    ],
    "exam_data": {
      "title": "اختبار visudo",
      "questions": [
        {
          "question": "ما هي ميزة visudo الأساسية؟",
          "options": [
            "تلوين النصوص",
            "فحص بناء الجملة (Syntax checking) قبل الحفظ",
            "السرعة",
            "لا شيء"
          ],
          "correct_answer": "فحص بناء الجملة (Syntax checking) قبل الحفظ",
          "explanation": "ليحمي النظام من فقدان صلاحيات sudo بسبب خطأ مطبعي."
        }
      ]
    },
    "lesson_type": "concept",
    "concept_context": "??? ????? ???? ??????: الدرس 18: تعديل ملف sudoers بـ (visudo)",
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
      "title": "????: الدرس 18: تعديل ملف sudoers بـ (visudo)",
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
    "lesson_slug": "cyber-19",
    "title": "الدرس 19: بت المستخدم المؤقت (SetUID)",
    "category": "Permissions & Ownership",
    "order_index": 19,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "context": "الـ `SetUID` هي صلاحية خاصة تُمنح للملفات التنفيذية. تجعل الملف يعمل بصلاحيات 'المالك' بدلاً من صلاحيات 'المستخدم الذي نفذه'.",
      "description": "مثال شهير هو أمر `passwd`. المالك هو root، لذلك عندما تستخدمه يتصرف كأنك root لثوانٍ لتغيير كلمتك في قاعدة البيانات المحمية.",
      "prototype": "chmod u+s file_name\nأو\nchmod 4755 file",
      "parameters": "الملف التنفيذي",
      "return_value": "الملف يظهر بحرف 's' في الصلاحيات",
      "example": "chmod u+s my_script.sh"
    },
    "exercise_instructions": "أضف صلاحية SetUID للملف التنفيذي `app`.",
    "expected_output": "chmod u+s app",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "معاينة الملف",
        "code": "ls -l /usr/bin/passwd",
        "explanation": "ستلاحظ أن صلاحية المالك تحتوي على الحرف 's' بدلاً من 'x'."
      },
      {
        "type": "wrong",
        "title": "استخدامه على سكريبتات (Bash)",
        "code": "chmod u+s script.sh",
        "error_message": "Ignored by Linux kernels",
        "explanation": "نواة لينكس الحديثة تتجاهل SetUID لسكريبتات النصوص لدواعي أمنية."
      },
      {
        "type": "mistake",
        "title": "تطبيقه على ملفات عادية",
        "code": "chmod u+s text.txt",
        "explanation": "لا فائدة من تطبيقه على ملف نصي لا يمكن تنفيذه."
      }
    ],
    "exam_data": {
      "title": "اختبار SetUID",
      "questions": [
        {
          "question": "ما هو الحرف الذي يمثل SetUID في ناتج ls -l؟",
          "options": [
            "r",
            "w",
            "s",
            "t"
          ],
          "correct_answer": "s",
          "explanation": "يظهر حرف s مكان حرف x."
        }
      ]
    },
    "lesson_type": "concept",
    "concept_context": "??? ????? ???? ??????: الدرس 19: بت المستخدم المؤقت (SetUID)",
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
      "title": "????: الدرس 19: بت المستخدم المؤقت (SetUID)",
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
    "lesson_slug": "cyber-20",
    "title": "الدرس 20: بت المجموعة المؤقت (SetGID)",
    "category": "Permissions & Ownership",
    "order_index": 20,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "context": "الـ `SetGID` يشبه SetUID ولكن للمجموعات. إذا تم تطبيقه على مجلد، أي ملف يُنشأ بداخله سيرث 'مجموعة المجلد' بدلاً من 'مجموعة المستخدم المنشئ'.",
      "description": "مهم جداً للمجلدات المشتركة بين عدة موظفين لضمان بقاء ملكية المجموعة ثابتة وسهولة تبادل الملفات.",
      "prototype": "chmod g+s directory_name\nأو\nchmod 2755 directory",
      "parameters": "المجلد المشترك",
      "return_value": "إرث المجموعة للملفات الجديدة",
      "example": "chmod g+s shared_folder/"
    },
    "exercise_instructions": "ضع علامة SetGID على مجلد `team_data/`.",
    "expected_output": "chmod g+s team_data/",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "تطبيق للمجلدات التعاونية",
        "code": "chmod 2770 /var/www/html",
        "explanation": "يضمن أن كل ملف جديد سيرث مجموعة www-data."
      },
      {
        "type": "wrong",
        "title": "تجاهل مالك المجموعة",
        "code": "chown user:wrong_group dir; chmod g+s dir",
        "error_message": "Logical error",
        "explanation": "يجب التأكد أن مجموعة المجلد صحيحة قبل تطبيق SetGID."
      },
      {
        "type": "mistake",
        "title": "الاعتماد عليه للصلاحيات",
        "code": "chmod g+s dir",
        "explanation": "هذا لا يعطي أحداً صلاحية القراءة! هو فقط يورّث المجموعة. يجب ضبط الصلاحيات معاً."
      }
    ],
    "exam_data": {
      "title": "اختبار SetGID",
      "questions": [
        {
          "question": "ما هي الفائدة الرئيسية من SetGID على المجلدات؟",
          "options": [
            "منع الحذف",
            "تسريع النظام",
            "إرث المجموعة للملفات الجديدة",
            "إخفاء الملفات"
          ],
          "correct_answer": "إرث المجموعة للملفات الجديدة",
          "explanation": "يساعد في إدارة الملفات المشتركة لفرق العمل."
        }
      ]
    },
    "lesson_type": "concept",
    "concept_context": "??? ????? ???? ??????: الدرس 20: بت المجموعة المؤقت (SetGID)",
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
      "title": "????: الدرس 20: بت المجموعة المؤقت (SetGID)",
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
    "lesson_slug": "cyber-21",
    "title": "الدرس 21: أساسيات الشبكات",
    "category": "المستوى المتوسط",
    "order_index": 21,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"أساسيات الشبكات\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن أساسيات الشبكات. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_21() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ أساسيات الشبكات",
      "return_value": "احتراف وفهم أساسيات الشبكات وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: أساسيات الشبكات\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 21: أساسيات الشبكات: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 21: أساسيات الشبكات بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 21: أساسيات الشبكات\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 21: أساسيات الشبكات\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 21: أساسيات الشبكات",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 21: أساسيات الشبكات؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 21: أساسيات الشبكات هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 21: أساسيات الشبكات",
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
      "title": "????: الدرس 21: أساسيات الشبكات",
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
    "lesson_slug": "cyber-22",
    "title": "الدرس 22: نموذج OSI",
    "category": "المستوى المتوسط",
    "order_index": 22,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"نموذج OSI\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن نموذج OSI. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_22() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ نموذج OSI",
      "return_value": "احتراف وفهم نموذج OSI وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: نموذج OSI\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 22: نموذج OSI: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 22: نموذج OSI بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 22: نموذج OSI\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 22: نموذج OSI\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 22: نموذج OSI",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 22: نموذج OSI؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 22: نموذج OSI هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 22: نموذج OSI",
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
      "title": "????: الدرس 22: نموذج OSI",
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
    "lesson_slug": "cyber-23",
    "title": "الدرس 23: بروتوكول TCP/IP",
    "category": "المستوى المتوسط",
    "order_index": 23,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"بروتوكول TCP/IP\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن بروتوكول TCP/IP. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_23() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ بروتوكول TCP/IP",
      "return_value": "احتراف وفهم بروتوكول TCP/IP وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: بروتوكول TCP/IP\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 23: بروتوكول TCP/IP: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 23: بروتوكول TCP/IP بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 23: بروتوكول TCP/IP\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 23: بروتوكول TCP/IP\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 23: بروتوكول TCP/IP",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 23: بروتوكول TCP/IP؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 23: بروتوكول TCP/IP هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 23: بروتوكول TCP/IP",
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
      "title": "????: الدرس 23: بروتوكول TCP/IP",
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
    "lesson_slug": "cyber-24",
    "title": "الدرس 24: مقدمة للينكس",
    "category": "المستوى المتوسط",
    "order_index": 24,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"مقدمة للينكس\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن مقدمة للينكس. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_24() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ مقدمة للينكس",
      "return_value": "احتراف وفهم مقدمة للينكس وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: مقدمة للينكس\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 24: مقدمة للينكس: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 24: مقدمة للينكس بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 24: مقدمة للينكس\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 24: مقدمة للينكس\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 24: مقدمة للينكس",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 24: مقدمة للينكس؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 24: مقدمة للينكس هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 24: مقدمة للينكس",
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
      "title": "????: الدرس 24: مقدمة للينكس",
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
    "lesson_slug": "cyber-25",
    "title": "الدرس 25: صلاحيات الملفات",
    "category": "المستوى المتوسط",
    "order_index": 25,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"صلاحيات الملفات\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن صلاحيات الملفات. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_25() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ صلاحيات الملفات",
      "return_value": "احتراف وفهم صلاحيات الملفات وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: صلاحيات الملفات\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 25: صلاحيات الملفات: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 25: صلاحيات الملفات بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 25: صلاحيات الملفات\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 25: صلاحيات الملفات\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 25: صلاحيات الملفات",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 25: صلاحيات الملفات؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 25: صلاحيات الملفات هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 25: صلاحيات الملفات",
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
      "title": "????: الدرس 25: صلاحيات الملفات",
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
    "lesson_slug": "cyber-26",
    "title": "الدرس 26: الشبكات اللاسلكية",
    "category": "المستوى المتوسط",
    "order_index": 26,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"الشبكات اللاسلكية\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن الشبكات اللاسلكية. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_26() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ الشبكات اللاسلكية",
      "return_value": "احتراف وفهم الشبكات اللاسلكية وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: الشبكات اللاسلكية\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 26: الشبكات اللاسلكية: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 26: الشبكات اللاسلكية بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 26: الشبكات اللاسلكية\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 26: الشبكات اللاسلكية\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 26: الشبكات اللاسلكية",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 26: الشبكات اللاسلكية؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 26: الشبكات اللاسلكية هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 26: الشبكات اللاسلكية",
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
      "title": "????: الدرس 26: الشبكات اللاسلكية",
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
    "lesson_slug": "cyber-27",
    "title": "الدرس 27: مفهوم التشفير",
    "category": "المستوى المتوسط",
    "order_index": 27,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"مفهوم التشفير\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن مفهوم التشفير. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_27() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ مفهوم التشفير",
      "return_value": "احتراف وفهم مفهوم التشفير وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: مفهوم التشفير\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 27: مفهوم التشفير: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 27: مفهوم التشفير بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 27: مفهوم التشفير\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 27: مفهوم التشفير\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 27: مفهوم التشفير",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 27: مفهوم التشفير؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 27: مفهوم التشفير هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 27: مفهوم التشفير",
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
      "title": "????: الدرس 27: مفهوم التشفير",
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
    "lesson_slug": "cyber-28",
    "title": "الدرس 28: الهندسة الاجتماعية",
    "category": "المستوى المتوسط",
    "order_index": 28,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"الهندسة الاجتماعية\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن الهندسة الاجتماعية. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_28() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ الهندسة الاجتماعية",
      "return_value": "احتراف وفهم الهندسة الاجتماعية وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: الهندسة الاجتماعية\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 28: الهندسة الاجتماعية: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 28: الهندسة الاجتماعية بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 28: الهندسة الاجتماعية\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 28: الهندسة الاجتماعية\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 28: الهندسة الاجتماعية",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 28: الهندسة الاجتماعية؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 28: الهندسة الاجتماعية هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 28: الهندسة الاجتماعية",
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
      "title": "????: الدرس 28: الهندسة الاجتماعية",
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
    "lesson_slug": "cyber-29",
    "title": "الدرس 29: جمع المعلومات (Reconnaissance)",
    "category": "المستوى المتوسط",
    "order_index": 29,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"جمع المعلومات (Reconnaissance)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن جمع المعلومات (Reconnaissance). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_29() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ جمع المعلومات (Reconnaissance)",
      "return_value": "احتراف وفهم جمع المعلومات (Reconnaissance) وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: جمع المعلومات (Reconnaissance)\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 29: جمع المعلومات (Reconnaissance): قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 29: جمع المعلومات (Reconnaissance) بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 29: جمع المعلومات (Reconnaissance)\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 29: جمع المعلومات (Reconnaissance)\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 29: جمع المعلومات (Reconnaissance)",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 29: جمع المعلومات (Reconnaissance)؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 29: جمع المعلومات (Reconnaissance) هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 29: جمع المعلومات (Reconnaissance)",
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
      "title": "????: الدرس 29: جمع المعلومات (Reconnaissance)",
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
    "lesson_slug": "cyber-30",
    "title": "الدرس 30: فحص الثغرات (Scanning)",
    "category": "المستوى المتوسط",
    "order_index": 30,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"فحص الثغرات (Scanning)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن فحص الثغرات (Scanning). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_30() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ فحص الثغرات (Scanning)",
      "return_value": "احتراف وفهم فحص الثغرات (Scanning) وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: فحص الثغرات (Scanning)\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 30: فحص الثغرات (Scanning): قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 30: فحص الثغرات (Scanning) بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 30: فحص الثغرات (Scanning)\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 30: فحص الثغرات (Scanning)\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 30: فحص الثغرات (Scanning)",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 30: فحص الثغرات (Scanning)؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 30: فحص الثغرات (Scanning) هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 30: فحص الثغرات (Scanning)",
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
      "title": "????: الدرس 30: فحص الثغرات (Scanning)",
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
    "lesson_slug": "cyber-31",
    "title": "الدرس 31: نظام Kali Linux",
    "category": "المستوى المتوسط",
    "order_index": 31,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"نظام Kali Linux\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن نظام Kali Linux. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_31() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ نظام Kali Linux",
      "return_value": "احتراف وفهم نظام Kali Linux وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: نظام Kali Linux\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 31: نظام Kali Linux: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 31: نظام Kali Linux بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 31: نظام Kali Linux\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 31: نظام Kali Linux\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 31: نظام Kali Linux",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 31: نظام Kali Linux؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 31: نظام Kali Linux هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 31: نظام Kali Linux",
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
      "title": "????: الدرس 31: نظام Kali Linux",
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
    "lesson_slug": "cyber-32",
    "title": "الدرس 32: أدوات الشبكة (Nmap)",
    "category": "المستوى المتوسط",
    "order_index": 32,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"أدوات الشبكة (Nmap)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن أدوات الشبكة (Nmap). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_32() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ أدوات الشبكة (Nmap)",
      "return_value": "احتراف وفهم أدوات الشبكة (Nmap) وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: أدوات الشبكة (Nmap)\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 32: أدوات الشبكة (Nmap): قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 32: أدوات الشبكة (Nmap) بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 32: أدوات الشبكة (Nmap)\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 32: أدوات الشبكة (Nmap)\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 32: أدوات الشبكة (Nmap)",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 32: أدوات الشبكة (Nmap)؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 32: أدوات الشبكة (Nmap) هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 32: أدوات الشبكة (Nmap)",
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
      "title": "????: الدرس 32: أدوات الشبكة (Nmap)",
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
    "lesson_slug": "cyber-33",
    "title": "الدرس 33: تحليل الحزم (Wireshark)",
    "category": "المستوى المتوسط",
    "order_index": 33,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"تحليل الحزم (Wireshark)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن تحليل الحزم (Wireshark). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_33() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ تحليل الحزم (Wireshark)",
      "return_value": "احتراف وفهم تحليل الحزم (Wireshark) وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: تحليل الحزم (Wireshark)\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 33: تحليل الحزم (Wireshark): قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 33: تحليل الحزم (Wireshark) بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 33: تحليل الحزم (Wireshark)\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 33: تحليل الحزم (Wireshark)\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 33: تحليل الحزم (Wireshark)",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 33: تحليل الحزم (Wireshark)؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 33: تحليل الحزم (Wireshark) هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 33: تحليل الحزم (Wireshark)",
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
      "title": "????: الدرس 33: تحليل الحزم (Wireshark)",
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
    "lesson_slug": "cyber-34",
    "title": "الدرس 34: مقدمة لاختراق الويب",
    "category": "المستوى المتوسط",
    "order_index": 34,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"مقدمة لاختراق الويب\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن مقدمة لاختراق الويب. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_34() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ مقدمة لاختراق الويب",
      "return_value": "احتراف وفهم مقدمة لاختراق الويب وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: مقدمة لاختراق الويب\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 34: مقدمة لاختراق الويب: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 34: مقدمة لاختراق الويب بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 34: مقدمة لاختراق الويب\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 34: مقدمة لاختراق الويب\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 34: مقدمة لاختراق الويب",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 34: مقدمة لاختراق الويب؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 34: مقدمة لاختراق الويب هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 34: مقدمة لاختراق الويب",
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
      "title": "????: الدرس 34: مقدمة لاختراق الويب",
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
    "lesson_slug": "cyber-35",
    "title": "الدرس 35: ثغرة XSS",
    "category": "المستوى المتوسط",
    "order_index": 35,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"ثغرة XSS\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن ثغرة XSS. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_35() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ ثغرة XSS",
      "return_value": "احتراف وفهم ثغرة XSS وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: ثغرة XSS\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 35: ثغرة XSS: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 35: ثغرة XSS بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 35: ثغرة XSS\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 35: ثغرة XSS\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 35: ثغرة XSS",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 35: ثغرة XSS؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 35: ثغرة XSS هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 35: ثغرة XSS",
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
      "title": "????: الدرس 35: ثغرة XSS",
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
    "lesson_slug": "cyber-36",
    "title": "الدرس 36: ثغرة SQL Injection",
    "category": "المستوى المتوسط",
    "order_index": 36,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"ثغرة SQL Injection\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن ثغرة SQL Injection. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_36() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ ثغرة SQL Injection",
      "return_value": "احتراف وفهم ثغرة SQL Injection وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: ثغرة SQL Injection\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 36: ثغرة SQL Injection: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 36: ثغرة SQL Injection بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 36: ثغرة SQL Injection\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 36: ثغرة SQL Injection\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 36: ثغرة SQL Injection",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 36: ثغرة SQL Injection؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 36: ثغرة SQL Injection هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 36: ثغرة SQL Injection",
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
      "title": "????: الدرس 36: ثغرة SQL Injection",
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
    "lesson_slug": "cyber-37",
    "title": "الدرس 37: تخطي أنظمة الحماية",
    "category": "المستوى المتوسط",
    "order_index": 37,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"تخطي أنظمة الحماية\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن تخطي أنظمة الحماية. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_37() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ تخطي أنظمة الحماية",
      "return_value": "احتراف وفهم تخطي أنظمة الحماية وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: تخطي أنظمة الحماية\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 37: تخطي أنظمة الحماية: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 37: تخطي أنظمة الحماية بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 37: تخطي أنظمة الحماية\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 37: تخطي أنظمة الحماية\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 37: تخطي أنظمة الحماية",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 37: تخطي أنظمة الحماية؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 37: تخطي أنظمة الحماية هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 37: تخطي أنظمة الحماية",
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
      "title": "????: الدرس 37: تخطي أنظمة الحماية",
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
    "lesson_slug": "cyber-38",
    "title": "الدرس 38: صلاحيات الوصول (Privilege Escalation)",
    "category": "المستوى المتوسط",
    "order_index": 38,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"صلاحيات الوصول (Privilege Escalation)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن صلاحيات الوصول (Privilege Escalation). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_38() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ صلاحيات الوصول (Privilege Escalation)",
      "return_value": "احتراف وفهم صلاحيات الوصول (Privilege Escalation) وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: صلاحيات الوصول (Privilege Escalation)\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 38: صلاحيات الوصول (Privilege Escalation): قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 38: صلاحيات الوصول (Privilege Escalation) بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 38: صلاحيات الوصول (Privilege Escalation)\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 38: صلاحيات الوصول (Privilege Escalation)\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 38: صلاحيات الوصول (Privilege Escalation)",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 38: صلاحيات الوصول (Privilege Escalation)؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 38: صلاحيات الوصول (Privilege Escalation) هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 38: صلاحيات الوصول (Privilege Escalation)",
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
      "title": "????: الدرس 38: صلاحيات الوصول (Privilege Escalation)",
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
    "lesson_slug": "cyber-39",
    "title": "الدرس 39: التشفير المتناظر",
    "category": "المستوى المتوسط",
    "order_index": 39,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"التشفير المتناظر\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن التشفير المتناظر. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_39() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ التشفير المتناظر",
      "return_value": "احتراف وفهم التشفير المتناظر وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: التشفير المتناظر\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 39: التشفير المتناظر: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 39: التشفير المتناظر بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 39: التشفير المتناظر\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 39: التشفير المتناظر\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 39: التشفير المتناظر",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 39: التشفير المتناظر؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 39: التشفير المتناظر هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 39: التشفير المتناظر",
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
      "title": "????: الدرس 39: التشفير المتناظر",
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
    "lesson_slug": "cyber-40",
    "title": "الدرس 40: التشفير غير المتناظر",
    "category": "المستوى المتقدم",
    "order_index": 40,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"التشفير غير المتناظر\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن التشفير غير المتناظر. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_40() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ التشفير غير المتناظر",
      "return_value": "احتراف وفهم التشفير غير المتناظر وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: التشفير غير المتناظر\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 40: التشفير غير المتناظر: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 40: التشفير غير المتناظر بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 40: التشفير غير المتناظر\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 40: التشفير غير المتناظر\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 40: التشفير غير المتناظر",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 40: التشفير غير المتناظر؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 40: التشفير غير المتناظر هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 40: التشفير غير المتناظر",
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
      "title": "????: الدرس 40: التشفير غير المتناظر",
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
    "lesson_slug": "cyber-41",
    "title": "الدرس 41: شهادات SSL/TLS",
    "category": "المستوى المتقدم",
    "order_index": 41,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"شهادات SSL/TLS\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن شهادات SSL/TLS. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_41() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ شهادات SSL/TLS",
      "return_value": "احتراف وفهم شهادات SSL/TLS وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: شهادات SSL/TLS\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 41: شهادات SSL/TLS: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 41: شهادات SSL/TLS بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 41: شهادات SSL/TLS\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 41: شهادات SSL/TLS\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 41: شهادات SSL/TLS",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 41: شهادات SSL/TLS؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 41: شهادات SSL/TLS هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 41: شهادات SSL/TLS",
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
      "title": "????: الدرس 41: شهادات SSL/TLS",
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
    "lesson_slug": "cyber-42",
    "title": "الدرس 42: الجدران النارية (Firewalls)",
    "category": "المستوى المتقدم",
    "order_index": 42,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"الجدران النارية (Firewalls)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن الجدران النارية (Firewalls). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_42() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ الجدران النارية (Firewalls)",
      "return_value": "احتراف وفهم الجدران النارية (Firewalls) وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: الجدران النارية (Firewalls)\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 42: الجدران النارية (Firewalls): قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 42: الجدران النارية (Firewalls) بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 42: الجدران النارية (Firewalls)\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 42: الجدران النارية (Firewalls)\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 42: الجدران النارية (Firewalls)",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 42: الجدران النارية (Firewalls)؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 42: الجدران النارية (Firewalls) هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 42: الجدران النارية (Firewalls)",
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
      "title": "????: الدرس 42: الجدران النارية (Firewalls)",
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
    "lesson_slug": "cyber-43",
    "title": "الدرس 43: نظم كشف التسلل (IDS)",
    "category": "المستوى المتقدم",
    "order_index": 43,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"نظم كشف التسلل (IDS)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن نظم كشف التسلل (IDS). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_43() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ نظم كشف التسلل (IDS)",
      "return_value": "احتراف وفهم نظم كشف التسلل (IDS) وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: نظم كشف التسلل (IDS)\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 43: نظم كشف التسلل (IDS): قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 43: نظم كشف التسلل (IDS) بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 43: نظم كشف التسلل (IDS)\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 43: نظم كشف التسلل (IDS)\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 43: نظم كشف التسلل (IDS)",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 43: نظم كشف التسلل (IDS)؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 43: نظم كشف التسلل (IDS) هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 43: نظم كشف التسلل (IDS)",
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
      "title": "????: الدرس 43: نظم كشف التسلل (IDS)",
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
    "lesson_slug": "cyber-44",
    "title": "الدرس 44: أنظمة الحماية المتقدمة",
    "category": "المستوى المتقدم",
    "order_index": 44,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"أنظمة الحماية المتقدمة\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن أنظمة الحماية المتقدمة. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_44() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ أنظمة الحماية المتقدمة",
      "return_value": "احتراف وفهم أنظمة الحماية المتقدمة وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: أنظمة الحماية المتقدمة\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 44: أنظمة الحماية المتقدمة: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 44: أنظمة الحماية المتقدمة بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 44: أنظمة الحماية المتقدمة\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 44: أنظمة الحماية المتقدمة\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 44: أنظمة الحماية المتقدمة",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 44: أنظمة الحماية المتقدمة؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 44: أنظمة الحماية المتقدمة هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 44: أنظمة الحماية المتقدمة",
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
      "title": "????: الدرس 44: أنظمة الحماية المتقدمة",
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
    "lesson_slug": "cyber-45",
    "title": "الدرس 45: البرمجيات الخبيثة (Malware)",
    "category": "المستوى المتقدم",
    "order_index": 45,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"البرمجيات الخبيثة (Malware)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن البرمجيات الخبيثة (Malware). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_45() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ البرمجيات الخبيثة (Malware)",
      "return_value": "احتراف وفهم البرمجيات الخبيثة (Malware) وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: البرمجيات الخبيثة (Malware)\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 45: البرمجيات الخبيثة (Malware): قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 45: البرمجيات الخبيثة (Malware) بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 45: البرمجيات الخبيثة (Malware)\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 45: البرمجيات الخبيثة (Malware)\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 45: البرمجيات الخبيثة (Malware)",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 45: البرمجيات الخبيثة (Malware)؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 45: البرمجيات الخبيثة (Malware) هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 45: البرمجيات الخبيثة (Malware)",
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
      "title": "????: الدرس 45: البرمجيات الخبيثة (Malware)",
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
    "lesson_slug": "cyber-46",
    "title": "الدرس 46: الفيروسات والديدان",
    "category": "المستوى المتقدم",
    "order_index": 46,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"الفيروسات والديدان\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن الفيروسات والديدان. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_46() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ الفيروسات والديدان",
      "return_value": "احتراف وفهم الفيروسات والديدان وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: الفيروسات والديدان\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 46: الفيروسات والديدان: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 46: الفيروسات والديدان بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 46: الفيروسات والديدان\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 46: الفيروسات والديدان\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 46: الفيروسات والديدان",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 46: الفيروسات والديدان؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 46: الفيروسات والديدان هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 46: الفيروسات والديدان",
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
      "title": "????: الدرس 46: الفيروسات والديدان",
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
    "lesson_slug": "cyber-47",
    "title": "الدرس 47: برامج الفدية (Ransomware)",
    "category": "المستوى المتقدم",
    "order_index": 47,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"برامج الفدية (Ransomware)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن برامج الفدية (Ransomware). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_47() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ برامج الفدية (Ransomware)",
      "return_value": "احتراف وفهم برامج الفدية (Ransomware) وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: برامج الفدية (Ransomware)\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 47: برامج الفدية (Ransomware): قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 47: برامج الفدية (Ransomware) بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 47: برامج الفدية (Ransomware)\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 47: برامج الفدية (Ransomware)\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 47: برامج الفدية (Ransomware)",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 47: برامج الفدية (Ransomware)؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 47: برامج الفدية (Ransomware) هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 47: برامج الفدية (Ransomware)",
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
      "title": "????: الدرس 47: برامج الفدية (Ransomware)",
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
    "lesson_slug": "cyber-48",
    "title": "الدرس 48: تحليل البرمجيات",
    "category": "المستوى المتقدم",
    "order_index": 48,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"تحليل البرمجيات\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن تحليل البرمجيات. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_48() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ تحليل البرمجيات",
      "return_value": "احتراف وفهم تحليل البرمجيات وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: تحليل البرمجيات\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 48: تحليل البرمجيات: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 48: تحليل البرمجيات بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 48: تحليل البرمجيات\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 48: تحليل البرمجيات\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 48: تحليل البرمجيات",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 48: تحليل البرمجيات؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 48: تحليل البرمجيات هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 48: تحليل البرمجيات",
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
      "title": "????: الدرس 48: تحليل البرمجيات",
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
    "lesson_slug": "cyber-49",
    "title": "الدرس 49: الأمن في السحابة (Cloud Security)",
    "category": "المستوى المتقدم",
    "order_index": 49,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"الأمن في السحابة (Cloud Security)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن الأمن في السحابة (Cloud Security). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_49() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ الأمن في السحابة (Cloud Security)",
      "return_value": "احتراف وفهم الأمن في السحابة (Cloud Security) وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: الأمن في السحابة (Cloud Security)\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 49: الأمن في السحابة (Cloud Security): قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 49: الأمن في السحابة (Cloud Security) بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 49: الأمن في السحابة (Cloud Security)\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 49: الأمن في السحابة (Cloud Security)\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 49: الأمن في السحابة (Cloud Security)",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 49: الأمن في السحابة (Cloud Security)؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 49: الأمن في السحابة (Cloud Security) هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 49: الأمن في السحابة (Cloud Security)",
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
      "title": "????: الدرس 49: الأمن في السحابة (Cloud Security)",
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
    "lesson_slug": "cyber-50",
    "title": "الدرس 50: أمن الموبايل",
    "category": "المستوى المتقدم",
    "order_index": 50,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"أمن الموبايل\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن أمن الموبايل. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_50() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ أمن الموبايل",
      "return_value": "احتراف وفهم أمن الموبايل وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: أمن الموبايل\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 50: أمن الموبايل: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 50: أمن الموبايل بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 50: أمن الموبايل\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 50: أمن الموبايل\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 50: أمن الموبايل",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 50: أمن الموبايل؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 50: أمن الموبايل هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 50: أمن الموبايل",
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
      "title": "????: الدرس 50: أمن الموبايل",
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
    "lesson_slug": "cyber-51",
    "title": "الدرس 51: استغلال ثغرات أندرويد",
    "category": "المستوى المتقدم",
    "order_index": 51,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"استغلال ثغرات أندرويد\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن استغلال ثغرات أندرويد. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_51() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ استغلال ثغرات أندرويد",
      "return_value": "احتراف وفهم استغلال ثغرات أندرويد وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: استغلال ثغرات أندرويد\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 51: استغلال ثغرات أندرويد: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 51: استغلال ثغرات أندرويد بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 51: استغلال ثغرات أندرويد\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 51: استغلال ثغرات أندرويد\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 51: استغلال ثغرات أندرويد",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 51: استغلال ثغرات أندرويد؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 51: استغلال ثغرات أندرويد هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 51: استغلال ثغرات أندرويد",
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
      "title": "????: الدرس 51: استغلال ثغرات أندرويد",
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
    "lesson_slug": "cyber-52",
    "title": "الدرس 52: تشفير الهواتف",
    "category": "المستوى المتقدم",
    "order_index": 52,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"تشفير الهواتف\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن تشفير الهواتف. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_52() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ تشفير الهواتف",
      "return_value": "احتراف وفهم تشفير الهواتف وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: تشفير الهواتف\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 52: تشفير الهواتف: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 52: تشفير الهواتف بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 52: تشفير الهواتف\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 52: تشفير الهواتف\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 52: تشفير الهواتف",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 52: تشفير الهواتف؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 52: تشفير الهواتف هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 52: تشفير الهواتف",
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
      "title": "????: الدرس 52: تشفير الهواتف",
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
    "lesson_slug": "cyber-53",
    "title": "الدرس 53: اختبار اختراق الشبكات",
    "category": "المستوى المتقدم",
    "order_index": 53,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"اختبار اختراق الشبكات\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن اختبار اختراق الشبكات. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_53() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ اختبار اختراق الشبكات",
      "return_value": "احتراف وفهم اختبار اختراق الشبكات وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: اختبار اختراق الشبكات\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 53: اختبار اختراق الشبكات: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 53: اختبار اختراق الشبكات بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 53: اختبار اختراق الشبكات\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 53: اختبار اختراق الشبكات\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 53: اختبار اختراق الشبكات",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 53: اختبار اختراق الشبكات؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 53: اختبار اختراق الشبكات هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 53: اختبار اختراق الشبكات",
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
      "title": "????: الدرس 53: اختبار اختراق الشبكات",
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
    "lesson_slug": "cyber-54",
    "title": "الدرس 54: هجمات حجب الخدمة (DDoS)",
    "category": "المستوى المتقدم",
    "order_index": 54,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"هجمات حجب الخدمة (DDoS)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن هجمات حجب الخدمة (DDoS). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_54() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ هجمات حجب الخدمة (DDoS)",
      "return_value": "احتراف وفهم هجمات حجب الخدمة (DDoS) وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: هجمات حجب الخدمة (DDoS)\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 54: هجمات حجب الخدمة (DDoS): قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 54: هجمات حجب الخدمة (DDoS) بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 54: هجمات حجب الخدمة (DDoS)\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 54: هجمات حجب الخدمة (DDoS)\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 54: هجمات حجب الخدمة (DDoS)",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 54: هجمات حجب الخدمة (DDoS)؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 54: هجمات حجب الخدمة (DDoS) هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 54: هجمات حجب الخدمة (DDoS)",
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
      "title": "????: الدرس 54: هجمات حجب الخدمة (DDoS)",
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
    "lesson_slug": "cyber-55",
    "title": "الدرس 55: اختطاف الجلسات (Session Hijacking)",
    "category": "المستوى المتقدم",
    "order_index": 55,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"اختطاف الجلسات (Session Hijacking)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن اختطاف الجلسات (Session Hijacking). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_55() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ اختطاف الجلسات (Session Hijacking)",
      "return_value": "احتراف وفهم اختطاف الجلسات (Session Hijacking) وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: اختطاف الجلسات (Session Hijacking)\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 55: اختطاف الجلسات (Session Hijacking): قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 55: اختطاف الجلسات (Session Hijacking) بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 55: اختطاف الجلسات (Session Hijacking)\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 55: اختطاف الجلسات (Session Hijacking)\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 55: اختطاف الجلسات (Session Hijacking)",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 55: اختطاف الجلسات (Session Hijacking)؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 55: اختطاف الجلسات (Session Hijacking) هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 55: اختطاف الجلسات (Session Hijacking)",
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
      "title": "????: الدرس 55: اختطاف الجلسات (Session Hijacking)",
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
    "lesson_slug": "cyber-56",
    "title": "الدرس 56: الرد على الحوادث (Incident Response)",
    "category": "المستوى المتقدم",
    "order_index": 56,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"الرد على الحوادث (Incident Response)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن الرد على الحوادث (Incident Response). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_56() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ الرد على الحوادث (Incident Response)",
      "return_value": "احتراف وفهم الرد على الحوادث (Incident Response) وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: الرد على الحوادث (Incident Response)\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 56: الرد على الحوادث (Incident Response): قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 56: الرد على الحوادث (Incident Response) بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 56: الرد على الحوادث (Incident Response)\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 56: الرد على الحوادث (Incident Response)\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 56: الرد على الحوادث (Incident Response)",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 56: الرد على الحوادث (Incident Response)؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 56: الرد على الحوادث (Incident Response) هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 56: الرد على الحوادث (Incident Response)",
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
      "title": "????: الدرس 56: الرد على الحوادث (Incident Response)",
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
    "lesson_slug": "cyber-57",
    "title": "الدرس 57: التحليل الجنائي الرقمي (Forensics)",
    "category": "المستوى المتقدم",
    "order_index": 57,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"التحليل الجنائي الرقمي (Forensics)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن التحليل الجنائي الرقمي (Forensics). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_57() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ التحليل الجنائي الرقمي (Forensics)",
      "return_value": "احتراف وفهم التحليل الجنائي الرقمي (Forensics) وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: التحليل الجنائي الرقمي (Forensics)\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 57: التحليل الجنائي الرقمي (Forensics): قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 57: التحليل الجنائي الرقمي (Forensics) بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 57: التحليل الجنائي الرقمي (Forensics)\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 57: التحليل الجنائي الرقمي (Forensics)\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 57: التحليل الجنائي الرقمي (Forensics)",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 57: التحليل الجنائي الرقمي (Forensics)؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 57: التحليل الجنائي الرقمي (Forensics) هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 57: التحليل الجنائي الرقمي (Forensics)",
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
      "title": "????: الدرس 57: التحليل الجنائي الرقمي (Forensics)",
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
    "lesson_slug": "cyber-58",
    "title": "الدرس 58: استعادة البيانات",
    "category": "المستوى المتقدم",
    "order_index": 58,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"استعادة البيانات\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن استعادة البيانات. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_58() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ استعادة البيانات",
      "return_value": "احتراف وفهم استعادة البيانات وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: استعادة البيانات\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 58: استعادة البيانات: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 58: استعادة البيانات بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 58: استعادة البيانات\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 58: استعادة البيانات\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 58: استعادة البيانات",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 58: استعادة البيانات؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 58: استعادة البيانات هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 58: استعادة البيانات",
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
      "title": "????: الدرس 58: استعادة البيانات",
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
    "lesson_slug": "cyber-59",
    "title": "الدرس 59: الأدلة الرقمية",
    "category": "المستوى المتقدم",
    "order_index": 59,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"الأدلة الرقمية\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن الأدلة الرقمية. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_59() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ الأدلة الرقمية",
      "return_value": "احتراف وفهم الأدلة الرقمية وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: الأدلة الرقمية\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 59: الأدلة الرقمية: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 59: الأدلة الرقمية بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 59: الأدلة الرقمية\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 59: الأدلة الرقمية\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 59: الأدلة الرقمية",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 59: الأدلة الرقمية؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 59: الأدلة الرقمية هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 59: الأدلة الرقمية",
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
      "title": "????: الدرس 59: الأدلة الرقمية",
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
    "lesson_slug": "cyber-60",
    "title": "الدرس 60: الأمن المادي",
    "category": "المستوى المتقدم",
    "order_index": 60,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"الأمن المادي\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن الأمن المادي. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_60() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ الأمن المادي",
      "return_value": "احتراف وفهم الأمن المادي وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: الأمن المادي\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 60: الأمن المادي: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 60: الأمن المادي بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 60: الأمن المادي\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 60: الأمن المادي\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 60: الأمن المادي",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 60: الأمن المادي؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 60: الأمن المادي هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 60: الأمن المادي",
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
      "title": "????: الدرس 60: الأمن المادي",
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
    "lesson_slug": "cyber-61",
    "title": "الدرس 61: أمن البيانات",
    "category": "المستوى المتقدم",
    "order_index": 61,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"أمن البيانات\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن أمن البيانات. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_61() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ أمن البيانات",
      "return_value": "احتراف وفهم أمن البيانات وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: أمن البيانات\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 61: أمن البيانات: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 61: أمن البيانات بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 61: أمن البيانات\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 61: أمن البيانات\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 61: أمن البيانات",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 61: أمن البيانات؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 61: أمن البيانات هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 61: أمن البيانات",
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
      "title": "????: الدرس 61: أمن البيانات",
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
    "lesson_slug": "cyber-62",
    "title": "الدرس 62: معيار ISO 27001",
    "category": "المستوى المتقدم",
    "order_index": 62,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"معيار ISO 27001\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن معيار ISO 27001. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_62() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ معيار ISO 27001",
      "return_value": "احتراف وفهم معيار ISO 27001 وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: معيار ISO 27001\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 62: معيار ISO 27001: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 62: معيار ISO 27001 بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 62: معيار ISO 27001\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 62: معيار ISO 27001\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 62: معيار ISO 27001",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 62: معيار ISO 27001؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 62: معيار ISO 27001 هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 62: معيار ISO 27001",
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
      "title": "????: الدرس 62: معيار ISO 27001",
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
    "lesson_slug": "cyber-63",
    "title": "الدرس 63: أمن إنترنت الأشياء (IoT)",
    "category": "المستوى المتقدم",
    "order_index": 63,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"أمن إنترنت الأشياء (IoT)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن أمن إنترنت الأشياء (IoT). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_63() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ أمن إنترنت الأشياء (IoT)",
      "return_value": "احتراف وفهم أمن إنترنت الأشياء (IoT) وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: أمن إنترنت الأشياء (IoT)\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 63: أمن إنترنت الأشياء (IoT): قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 63: أمن إنترنت الأشياء (IoT) بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 63: أمن إنترنت الأشياء (IoT)\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 63: أمن إنترنت الأشياء (IoT)\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 63: أمن إنترنت الأشياء (IoT)",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 63: أمن إنترنت الأشياء (IoT)؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 63: أمن إنترنت الأشياء (IoT) هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 63: أمن إنترنت الأشياء (IoT)",
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
      "title": "????: الدرس 63: أمن إنترنت الأشياء (IoT)",
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
    "lesson_slug": "cyber-64",
    "title": "الدرس 64: التهديدات المتقدمة (APT)",
    "category": "المستوى المتقدم",
    "order_index": 64,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"التهديدات المتقدمة (APT)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن التهديدات المتقدمة (APT). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_64() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ التهديدات المتقدمة (APT)",
      "return_value": "احتراف وفهم التهديدات المتقدمة (APT) وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: التهديدات المتقدمة (APT)\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 64: التهديدات المتقدمة (APT): قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 64: التهديدات المتقدمة (APT) بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 64: التهديدات المتقدمة (APT)\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 64: التهديدات المتقدمة (APT)\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 64: التهديدات المتقدمة (APT)",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 64: التهديدات المتقدمة (APT)؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 64: التهديدات المتقدمة (APT) هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 64: التهديدات المتقدمة (APT)",
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
      "title": "????: الدرس 64: التهديدات المتقدمة (APT)",
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
    "lesson_slug": "cyber-65",
    "title": "الدرس 65: تأمين الشبكات المنزلية",
    "category": "المستوى المتقدم",
    "order_index": 65,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"تأمين الشبكات المنزلية\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن تأمين الشبكات المنزلية. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_65() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ تأمين الشبكات المنزلية",
      "return_value": "احتراف وفهم تأمين الشبكات المنزلية وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: تأمين الشبكات المنزلية\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 65: تأمين الشبكات المنزلية: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 65: تأمين الشبكات المنزلية بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 65: تأمين الشبكات المنزلية\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 65: تأمين الشبكات المنزلية\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 65: تأمين الشبكات المنزلية",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 65: تأمين الشبكات المنزلية؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 65: تأمين الشبكات المنزلية هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 65: تأمين الشبكات المنزلية",
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
      "title": "????: الدرس 65: تأمين الشبكات المنزلية",
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
    "lesson_slug": "cyber-66",
    "title": "الدرس 66: تطبيق: جدار ناري صغير",
    "category": "المستوى المتقدم",
    "order_index": 66,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"تطبيق: جدار ناري صغير\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن تطبيق: جدار ناري صغير. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_66() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ تطبيق: جدار ناري صغير",
      "return_value": "احتراف وفهم تطبيق: جدار ناري صغير وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: تطبيق: جدار ناري صغير\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 66: تطبيق: جدار ناري صغير: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 66: تطبيق: جدار ناري صغير بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 66: تطبيق: جدار ناري صغير\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 66: تطبيق: جدار ناري صغير\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 66: تطبيق: جدار ناري صغير",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 66: تطبيق: جدار ناري صغير؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 66: تطبيق: جدار ناري صغير هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 66: تطبيق: جدار ناري صغير",
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
      "title": "????: الدرس 66: تطبيق: جدار ناري صغير",
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
    "lesson_slug": "cyber-67",
    "title": "الدرس 67: تطبيق: أداة فحص ثغرات",
    "category": "المستوى المتقدم",
    "order_index": 67,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"تطبيق: أداة فحص ثغرات\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن تطبيق: أداة فحص ثغرات. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_67() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ تطبيق: أداة فحص ثغرات",
      "return_value": "احتراف وفهم تطبيق: أداة فحص ثغرات وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: تطبيق: أداة فحص ثغرات\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 67: تطبيق: أداة فحص ثغرات: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 67: تطبيق: أداة فحص ثغرات بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 67: تطبيق: أداة فحص ثغرات\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 67: تطبيق: أداة فحص ثغرات\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 67: تطبيق: أداة فحص ثغرات",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 67: تطبيق: أداة فحص ثغرات؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 67: تطبيق: أداة فحص ثغرات هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 67: تطبيق: أداة فحص ثغرات",
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
      "title": "????: الدرس 67: تطبيق: أداة فحص ثغرات",
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
    "lesson_slug": "cyber-68",
    "title": "الدرس 68: القرصنة الأخلاقية (Ethical Hacking)",
    "category": "المستوى المتقدم",
    "order_index": 68,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"القرصنة الأخلاقية (Ethical Hacking)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن القرصنة الأخلاقية (Ethical Hacking). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_68() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ القرصنة الأخلاقية (Ethical Hacking)",
      "return_value": "احتراف وفهم القرصنة الأخلاقية (Ethical Hacking) وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: القرصنة الأخلاقية (Ethical Hacking)\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 68: القرصنة الأخلاقية (Ethical Hacking): قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 68: القرصنة الأخلاقية (Ethical Hacking) بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 68: القرصنة الأخلاقية (Ethical Hacking)\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 68: القرصنة الأخلاقية (Ethical Hacking)\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 68: القرصنة الأخلاقية (Ethical Hacking)",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 68: القرصنة الأخلاقية (Ethical Hacking)؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 68: القرصنة الأخلاقية (Ethical Hacking) هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 68: القرصنة الأخلاقية (Ethical Hacking)",
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
      "title": "????: الدرس 68: القرصنة الأخلاقية (Ethical Hacking)",
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
    "lesson_slug": "cyber-69",
    "title": "الدرس 69: تجاوز الـ Antivirus",
    "category": "المستوى المتقدم",
    "order_index": 69,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"تجاوز الـ Antivirus\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن تجاوز الـ Antivirus. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_69() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ تجاوز الـ Antivirus",
      "return_value": "احتراف وفهم تجاوز الـ Antivirus وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: تجاوز الـ Antivirus\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 69: تجاوز الـ Antivirus: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 69: تجاوز الـ Antivirus بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 69: تجاوز الـ Antivirus\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 69: تجاوز الـ Antivirus\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 69: تجاوز الـ Antivirus",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 69: تجاوز الـ Antivirus؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 69: تجاوز الـ Antivirus هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 69: تجاوز الـ Antivirus",
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
      "title": "????: الدرس 69: تجاوز الـ Antivirus",
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
    "lesson_slug": "cyber-70",
    "title": "الدرس 70: مفاهيم الهندسة العكسية",
    "category": "المستوى المتقدم",
    "order_index": 70,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"مفاهيم الهندسة العكسية\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن مفاهيم الهندسة العكسية. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_70() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ مفاهيم الهندسة العكسية",
      "return_value": "احتراف وفهم مفاهيم الهندسة العكسية وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: مفاهيم الهندسة العكسية\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 70: مفاهيم الهندسة العكسية: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 70: مفاهيم الهندسة العكسية بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 70: مفاهيم الهندسة العكسية\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 70: مفاهيم الهندسة العكسية\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 70: مفاهيم الهندسة العكسية",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 70: مفاهيم الهندسة العكسية؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 70: مفاهيم الهندسة العكسية هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 70: مفاهيم الهندسة العكسية",
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
      "title": "????: الدرس 70: مفاهيم الهندسة العكسية",
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
    "lesson_slug": "cyber-71",
    "title": "الدرس 71: استغلال الذاكرة (Buffer Overflow)",
    "category": "المستوى المتقدم",
    "order_index": 71,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"استغلال الذاكرة (Buffer Overflow)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن استغلال الذاكرة (Buffer Overflow). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_71() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ استغلال الذاكرة (Buffer Overflow)",
      "return_value": "احتراف وفهم استغلال الذاكرة (Buffer Overflow) وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: استغلال الذاكرة (Buffer Overflow)\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 71: استغلال الذاكرة (Buffer Overflow): قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 71: استغلال الذاكرة (Buffer Overflow) بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 71: استغلال الذاكرة (Buffer Overflow)\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 71: استغلال الذاكرة (Buffer Overflow)\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 71: استغلال الذاكرة (Buffer Overflow)",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 71: استغلال الذاكرة (Buffer Overflow)؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 71: استغلال الذاكرة (Buffer Overflow) هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 71: استغلال الذاكرة (Buffer Overflow)",
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
      "title": "????: الدرس 71: استغلال الذاكرة (Buffer Overflow)",
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
    "lesson_slug": "cyber-72",
    "title": "الدرس 72: أمن قواعد البيانات",
    "category": "المستوى المتقدم",
    "order_index": 72,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"أمن قواعد البيانات\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن أمن قواعد البيانات. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_72() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ أمن قواعد البيانات",
      "return_value": "احتراف وفهم أمن قواعد البيانات وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: أمن قواعد البيانات\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 72: أمن قواعد البيانات: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 72: أمن قواعد البيانات بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 72: أمن قواعد البيانات\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 72: أمن قواعد البيانات\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 72: أمن قواعد البيانات",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 72: أمن قواعد البيانات؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 72: أمن قواعد البيانات هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 72: أمن قواعد البيانات",
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
      "title": "????: الدرس 72: أمن قواعد البيانات",
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
    "lesson_slug": "cyber-73",
    "title": "الدرس 73: تأمين الخوادم",
    "category": "المستوى المتقدم",
    "order_index": 73,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"تأمين الخوادم\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن تأمين الخوادم. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_73() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ تأمين الخوادم",
      "return_value": "احتراف وفهم تأمين الخوادم وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: تأمين الخوادم\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 73: تأمين الخوادم: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 73: تأمين الخوادم بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 73: تأمين الخوادم\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 73: تأمين الخوادم\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 73: تأمين الخوادم",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 73: تأمين الخوادم؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 73: تأمين الخوادم هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 73: تأمين الخوادم",
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
      "title": "????: الدرس 73: تأمين الخوادم",
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
    "lesson_slug": "cyber-74",
    "title": "الدرس 74: بروتوكولات الأمان",
    "category": "المستوى المتقدم",
    "order_index": 74,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"بروتوكولات الأمان\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن بروتوكولات الأمان. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_74() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ بروتوكولات الأمان",
      "return_value": "احتراف وفهم بروتوكولات الأمان وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: بروتوكولات الأمان\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 74: بروتوكولات الأمان: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 74: بروتوكولات الأمان بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 74: بروتوكولات الأمان\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 74: بروتوكولات الأمان\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 74: بروتوكولات الأمان",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 74: بروتوكولات الأمان؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 74: بروتوكولات الأمان هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 74: بروتوكولات الأمان",
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
      "title": "????: الدرس 74: بروتوكولات الأمان",
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
    "lesson_slug": "cyber-75",
    "title": "الدرس 75: VPN و Proxy",
    "category": "المستوى المتقدم",
    "order_index": 75,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"VPN و Proxy\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن VPN و Proxy. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_75() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ VPN و Proxy",
      "return_value": "احتراف وفهم VPN و Proxy وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: VPN و Proxy\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 75: VPN و Proxy: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 75: VPN و Proxy بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 75: VPN و Proxy\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 75: VPN و Proxy\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 75: VPN و Proxy",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 75: VPN و Proxy؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 75: VPN و Proxy هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 75: VPN و Proxy",
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
      "title": "????: الدرس 75: VPN و Proxy",
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
    "lesson_slug": "cyber-76",
    "title": "الدرس 76: الهوية وإدارة الوصول (IAM)",
    "category": "المستوى المتقدم",
    "order_index": 76,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"الهوية وإدارة الوصول (IAM)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن الهوية وإدارة الوصول (IAM). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_76() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ الهوية وإدارة الوصول (IAM)",
      "return_value": "احتراف وفهم الهوية وإدارة الوصول (IAM) وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: الهوية وإدارة الوصول (IAM)\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 76: الهوية وإدارة الوصول (IAM): قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 76: الهوية وإدارة الوصول (IAM) بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 76: الهوية وإدارة الوصول (IAM)\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 76: الهوية وإدارة الوصول (IAM)\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 76: الهوية وإدارة الوصول (IAM)",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 76: الهوية وإدارة الوصول (IAM)؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 76: الهوية وإدارة الوصول (IAM) هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 76: الهوية وإدارة الوصول (IAM)",
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
      "title": "????: الدرس 76: الهوية وإدارة الوصول (IAM)",
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
    "lesson_slug": "cyber-77",
    "title": "الدرس 77: التحقق الثنائي (2FA)",
    "category": "المستوى المتقدم",
    "order_index": 77,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"التحقق الثنائي (2FA)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن التحقق الثنائي (2FA). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_77() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ التحقق الثنائي (2FA)",
      "return_value": "احتراف وفهم التحقق الثنائي (2FA) وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: التحقق الثنائي (2FA)\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 77: التحقق الثنائي (2FA): قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 77: التحقق الثنائي (2FA) بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 77: التحقق الثنائي (2FA)\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 77: التحقق الثنائي (2FA)\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 77: التحقق الثنائي (2FA)",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 77: التحقق الثنائي (2FA)؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 77: التحقق الثنائي (2FA) هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 77: التحقق الثنائي (2FA)",
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
      "title": "????: الدرس 77: التحقق الثنائي (2FA)",
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
    "lesson_slug": "cyber-78",
    "title": "الدرس 78: البصمة الرقمية",
    "category": "المستوى المتقدم",
    "order_index": 78,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"البصمة الرقمية\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن البصمة الرقمية. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_78() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ البصمة الرقمية",
      "return_value": "احتراف وفهم البصمة الرقمية وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: البصمة الرقمية\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 78: البصمة الرقمية: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 78: البصمة الرقمية بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 78: البصمة الرقمية\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 78: البصمة الرقمية\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 78: البصمة الرقمية",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 78: البصمة الرقمية؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 78: البصمة الرقمية هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 78: البصمة الرقمية",
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
      "title": "????: الدرس 78: البصمة الرقمية",
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
    "lesson_slug": "cyber-79",
    "title": "الدرس 79: أمن التطبيقات",
    "category": "المستوى المتقدم",
    "order_index": 79,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"أمن التطبيقات\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن أمن التطبيقات. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_79() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ أمن التطبيقات",
      "return_value": "احتراف وفهم أمن التطبيقات وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: أمن التطبيقات\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 79: أمن التطبيقات: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 79: أمن التطبيقات بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 79: أمن التطبيقات\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 79: أمن التطبيقات\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 79: أمن التطبيقات",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 79: أمن التطبيقات؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 79: أمن التطبيقات هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 79: أمن التطبيقات",
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
      "title": "????: الدرس 79: أمن التطبيقات",
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
    "lesson_slug": "cyber-80",
    "title": "الدرس 80: ممارسات الكود الآمن",
    "category": "مشاريع وتطبيقات",
    "order_index": 80,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"ممارسات الكود الآمن\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن ممارسات الكود الآمن. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_80() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ ممارسات الكود الآمن",
      "return_value": "احتراف وفهم ممارسات الكود الآمن وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: ممارسات الكود الآمن\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 80: ممارسات الكود الآمن: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 80: ممارسات الكود الآمن بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 80: ممارسات الكود الآمن\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 80: ممارسات الكود الآمن\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 80: ممارسات الكود الآمن",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 80: ممارسات الكود الآمن؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 80: ممارسات الكود الآمن هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 80: ممارسات الكود الآمن",
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
      "title": "????: الدرس 80: ممارسات الكود الآمن",
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
    "lesson_slug": "cyber-81",
    "title": "الدرس 81: إدارة كلمات المرور",
    "category": "مشاريع وتطبيقات",
    "order_index": 81,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"إدارة كلمات المرور\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن إدارة كلمات المرور. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_81() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ إدارة كلمات المرور",
      "return_value": "احتراف وفهم إدارة كلمات المرور وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: إدارة كلمات المرور\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 81: إدارة كلمات المرور: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 81: إدارة كلمات المرور بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 81: إدارة كلمات المرور\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 81: إدارة كلمات المرور\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 81: إدارة كلمات المرور",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 81: إدارة كلمات المرور؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 81: إدارة كلمات المرور هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 81: إدارة كلمات المرور",
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
      "title": "????: الدرس 81: إدارة كلمات المرور",
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
    "lesson_slug": "cyber-82",
    "title": "الدرس 82: التشفير بـ PGP",
    "category": "مشاريع وتطبيقات",
    "order_index": 82,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"التشفير بـ PGP\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن التشفير بـ PGP. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_82() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ التشفير بـ PGP",
      "return_value": "احتراف وفهم التشفير بـ PGP وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: التشفير بـ PGP\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 82: التشفير بـ PGP: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 82: التشفير بـ PGP بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 82: التشفير بـ PGP\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 82: التشفير بـ PGP\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 82: التشفير بـ PGP",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 82: التشفير بـ PGP؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 82: التشفير بـ PGP هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 82: التشفير بـ PGP",
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
      "title": "????: الدرس 82: التشفير بـ PGP",
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
    "lesson_slug": "cyber-83",
    "title": "الدرس 83: الأمن في بيئة العمل",
    "category": "مشاريع وتطبيقات",
    "order_index": 83,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"الأمن في بيئة العمل\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن الأمن في بيئة العمل. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_83() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ الأمن في بيئة العمل",
      "return_value": "احتراف وفهم الأمن في بيئة العمل وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: الأمن في بيئة العمل\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 83: الأمن في بيئة العمل: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 83: الأمن في بيئة العمل بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 83: الأمن في بيئة العمل\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 83: الأمن في بيئة العمل\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 83: الأمن في بيئة العمل",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 83: الأمن في بيئة العمل؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 83: الأمن في بيئة العمل هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 83: الأمن في بيئة العمل",
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
      "title": "????: الدرس 83: الأمن في بيئة العمل",
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
    "lesson_slug": "cyber-84",
    "title": "الدرس 84: سياسات الأمان",
    "category": "مشاريع وتطبيقات",
    "order_index": 84,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"سياسات الأمان\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن سياسات الأمان. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_84() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ سياسات الأمان",
      "return_value": "احتراف وفهم سياسات الأمان وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: سياسات الأمان\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 84: سياسات الأمان: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 84: سياسات الأمان بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 84: سياسات الأمان\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 84: سياسات الأمان\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 84: سياسات الأمان",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 84: سياسات الأمان؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 84: سياسات الأمان هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 84: سياسات الأمان",
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
      "title": "????: الدرس 84: سياسات الأمان",
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
    "lesson_slug": "cyber-85",
    "title": "الدرس 85: تدريب العاملين",
    "category": "مشاريع وتطبيقات",
    "order_index": 85,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"تدريب العاملين\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن تدريب العاملين. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_85() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ تدريب العاملين",
      "return_value": "احتراف وفهم تدريب العاملين وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: تدريب العاملين\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 85: تدريب العاملين: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 85: تدريب العاملين بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 85: تدريب العاملين\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 85: تدريب العاملين\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 85: تدريب العاملين",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 85: تدريب العاملين؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 85: تدريب العاملين هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 85: تدريب العاملين",
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
      "title": "????: الدرس 85: تدريب العاملين",
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
    "lesson_slug": "cyber-86",
    "title": "الدرس 86: أمن البريد الإلكتروني",
    "category": "مشاريع وتطبيقات",
    "order_index": 86,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"أمن البريد الإلكتروني\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن أمن البريد الإلكتروني. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_86() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ أمن البريد الإلكتروني",
      "return_value": "احتراف وفهم أمن البريد الإلكتروني وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: أمن البريد الإلكتروني\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 86: أمن البريد الإلكتروني: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 86: أمن البريد الإلكتروني بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 86: أمن البريد الإلكتروني\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 86: أمن البريد الإلكتروني\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 86: أمن البريد الإلكتروني",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 86: أمن البريد الإلكتروني؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 86: أمن البريد الإلكتروني هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 86: أمن البريد الإلكتروني",
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
      "title": "????: الدرس 86: أمن البريد الإلكتروني",
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
    "lesson_slug": "cyber-87",
    "title": "الدرس 87: هجمات Phishing",
    "category": "مشاريع وتطبيقات",
    "order_index": 87,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"هجمات Phishing\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن هجمات Phishing. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_87() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ هجمات Phishing",
      "return_value": "احتراف وفهم هجمات Phishing وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: هجمات Phishing\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 87: هجمات Phishing: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 87: هجمات Phishing بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 87: هجمات Phishing\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 87: هجمات Phishing\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 87: هجمات Phishing",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 87: هجمات Phishing؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 87: هجمات Phishing هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 87: هجمات Phishing",
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
      "title": "????: الدرس 87: هجمات Phishing",
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
    "lesson_slug": "cyber-88",
    "title": "الدرس 88: استخبارات التهديدات",
    "category": "مشاريع وتطبيقات",
    "order_index": 88,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"استخبارات التهديدات\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن استخبارات التهديدات. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_88() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ استخبارات التهديدات",
      "return_value": "احتراف وفهم استخبارات التهديدات وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: استخبارات التهديدات\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 88: استخبارات التهديدات: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 88: استخبارات التهديدات بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 88: استخبارات التهديدات\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 88: استخبارات التهديدات\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 88: استخبارات التهديدات",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 88: استخبارات التهديدات؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 88: استخبارات التهديدات هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 88: استخبارات التهديدات",
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
      "title": "????: الدرس 88: استخبارات التهديدات",
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
    "lesson_slug": "cyber-89",
    "title": "الدرس 89: أمان المتصفحات",
    "category": "مشاريع وتطبيقات",
    "order_index": 89,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"أمان المتصفحات\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن أمان المتصفحات. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_89() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ أمان المتصفحات",
      "return_value": "احتراف وفهم أمان المتصفحات وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: أمان المتصفحات\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 89: أمان المتصفحات: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 89: أمان المتصفحات بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 89: أمان المتصفحات\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 89: أمان المتصفحات\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 89: أمان المتصفحات",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 89: أمان المتصفحات؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 89: أمان المتصفحات هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 89: أمان المتصفحات",
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
      "title": "????: الدرس 89: أمان المتصفحات",
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
    "lesson_slug": "cyber-90",
    "title": "الدرس 90: الخصوصية على الإنترنت",
    "category": "مشاريع وتطبيقات",
    "order_index": 90,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"الخصوصية على الإنترنت\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن الخصوصية على الإنترنت. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_90() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ الخصوصية على الإنترنت",
      "return_value": "احتراف وفهم الخصوصية على الإنترنت وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: الخصوصية على الإنترنت\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 90: الخصوصية على الإنترنت: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 90: الخصوصية على الإنترنت بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 90: الخصوصية على الإنترنت\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 90: الخصوصية على الإنترنت\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 90: الخصوصية على الإنترنت",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 90: الخصوصية على الإنترنت؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 90: الخصوصية على الإنترنت هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 90: الخصوصية على الإنترنت",
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
      "title": "????: الدرس 90: الخصوصية على الإنترنت",
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
    "lesson_slug": "cyber-91",
    "title": "الدرس 91: أدوات التخفي",
    "category": "مشاريع وتطبيقات",
    "order_index": 91,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"أدوات التخفي\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن أدوات التخفي. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_91() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ أدوات التخفي",
      "return_value": "احتراف وفهم أدوات التخفي وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: أدوات التخفي\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 91: أدوات التخفي: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 91: أدوات التخفي بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 91: أدوات التخفي\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 91: أدوات التخفي\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 91: أدوات التخفي",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 91: أدوات التخفي؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 91: أدوات التخفي هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 91: أدوات التخفي",
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
      "title": "????: الدرس 91: أدوات التخفي",
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
    "lesson_slug": "cyber-92",
    "title": "الدرس 92: شبكة Tor",
    "category": "مشاريع وتطبيقات",
    "order_index": 92,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"شبكة Tor\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن شبكة Tor. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_92() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ شبكة Tor",
      "return_value": "احتراف وفهم شبكة Tor وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: شبكة Tor\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 92: شبكة Tor: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 92: شبكة Tor بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 92: شبكة Tor\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 92: شبكة Tor\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 92: شبكة Tor",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 92: شبكة Tor؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 92: شبكة Tor هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 92: شبكة Tor",
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
      "title": "????: الدرس 92: شبكة Tor",
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
    "lesson_slug": "cyber-93",
    "title": "الدرس 93: تطبيق عملي: حماية جهازك",
    "category": "مشاريع وتطبيقات",
    "order_index": 93,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"تطبيق عملي: حماية جهازك\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن تطبيق عملي: حماية جهازك. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_93() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ تطبيق عملي: حماية جهازك",
      "return_value": "احتراف وفهم تطبيق عملي: حماية جهازك وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: تطبيق عملي: حماية جهازك\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 93: تطبيق عملي: حماية جهازك: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 93: تطبيق عملي: حماية جهازك بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 93: تطبيق عملي: حماية جهازك\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 93: تطبيق عملي: حماية جهازك\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 93: تطبيق عملي: حماية جهازك",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 93: تطبيق عملي: حماية جهازك؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 93: تطبيق عملي: حماية جهازك هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 93: تطبيق عملي: حماية جهازك",
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
      "title": "????: الدرس 93: تطبيق عملي: حماية جهازك",
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
    "lesson_slug": "cyber-94",
    "title": "الدرس 94: تشفير الملفات الحساسة",
    "category": "مشاريع وتطبيقات",
    "order_index": 94,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"تشفير الملفات الحساسة\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن تشفير الملفات الحساسة. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_94() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ تشفير الملفات الحساسة",
      "return_value": "احتراف وفهم تشفير الملفات الحساسة وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: تشفير الملفات الحساسة\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 94: تشفير الملفات الحساسة: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 94: تشفير الملفات الحساسة بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 94: تشفير الملفات الحساسة\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 94: تشفير الملفات الحساسة\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 94: تشفير الملفات الحساسة",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 94: تشفير الملفات الحساسة؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 94: تشفير الملفات الحساسة هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 94: تشفير الملفات الحساسة",
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
      "title": "????: الدرس 94: تشفير الملفات الحساسة",
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
    "lesson_slug": "cyber-95",
    "title": "الدرس 95: المستقبل والأمن السيبراني",
    "category": "مشاريع وتطبيقات",
    "order_index": 95,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"المستقبل والأمن السيبراني\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن المستقبل والأمن السيبراني. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_95() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ المستقبل والأمن السيبراني",
      "return_value": "احتراف وفهم المستقبل والأمن السيبراني وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: المستقبل والأمن السيبراني\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 95: المستقبل والأمن السيبراني: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 95: المستقبل والأمن السيبراني بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 95: المستقبل والأمن السيبراني\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 95: المستقبل والأمن السيبراني\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 95: المستقبل والأمن السيبراني",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 95: المستقبل والأمن السيبراني؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 95: المستقبل والأمن السيبراني هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 95: المستقبل والأمن السيبراني",
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
      "title": "????: الدرس 95: المستقبل والأمن السيبراني",
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
    "lesson_slug": "cyber-96",
    "title": "الدرس 96: الذكاء الاصطناعي في الأمن",
    "category": "مشاريع وتطبيقات",
    "order_index": 96,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"الذكاء الاصطناعي في الأمن\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن الذكاء الاصطناعي في الأمن. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_96() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ الذكاء الاصطناعي في الأمن",
      "return_value": "احتراف وفهم الذكاء الاصطناعي في الأمن وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: الذكاء الاصطناعي في الأمن\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 96: الذكاء الاصطناعي في الأمن: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 96: الذكاء الاصطناعي في الأمن بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 96: الذكاء الاصطناعي في الأمن\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 96: الذكاء الاصطناعي في الأمن\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 96: الذكاء الاصطناعي في الأمن",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 96: الذكاء الاصطناعي في الأمن؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 96: الذكاء الاصطناعي في الأمن هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 96: الذكاء الاصطناعي في الأمن",
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
      "title": "????: الدرس 96: الذكاء الاصطناعي في الأمن",
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
    "lesson_slug": "cyber-97",
    "title": "الدرس 97: تحديات الاختراق (CTF)",
    "category": "مشاريع وتطبيقات",
    "order_index": 97,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"تحديات الاختراق (CTF)\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن تحديات الاختراق (CTF). سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_97() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ تحديات الاختراق (CTF)",
      "return_value": "احتراف وفهم تحديات الاختراق (CTF) وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: تحديات الاختراق (CTF)\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 97: تحديات الاختراق (CTF): قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 97: تحديات الاختراق (CTF) بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 97: تحديات الاختراق (CTF)\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 97: تحديات الاختراق (CTF)\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 97: تحديات الاختراق (CTF)",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 97: تحديات الاختراق (CTF)؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 97: تحديات الاختراق (CTF) هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 97: تحديات الاختراق (CTF)",
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
      "title": "????: الدرس 97: تحديات الاختراق (CTF)",
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
    "lesson_slug": "cyber-98",
    "title": "الدرس 98: مراجعة شاملة للمفاهيم",
    "category": "مشاريع وتطبيقات",
    "order_index": 98,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"مراجعة شاملة للمفاهيم\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن مراجعة شاملة للمفاهيم. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_98() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ مراجعة شاملة للمفاهيم",
      "return_value": "احتراف وفهم مراجعة شاملة للمفاهيم وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: مراجعة شاملة للمفاهيم\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 98: مراجعة شاملة للمفاهيم: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 98: مراجعة شاملة للمفاهيم بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 98: مراجعة شاملة للمفاهيم\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 98: مراجعة شاملة للمفاهيم\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 98: مراجعة شاملة للمفاهيم",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 98: مراجعة شاملة للمفاهيم؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 98: مراجعة شاملة للمفاهيم هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 98: مراجعة شاملة للمفاهيم",
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
      "title": "????: الدرس 98: مراجعة شاملة للمفاهيم",
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
    "lesson_slug": "cyber-99",
    "title": "الدرس 99: مشروع التخرج",
    "category": "مشاريع وتطبيقات",
    "order_index": 99,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"مشروع التخرج\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن مشروع التخرج. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_99() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ مشروع التخرج",
      "return_value": "احتراف وفهم مشروع التخرج وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: مشروع التخرج\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 99: مشروع التخرج: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 99: مشروع التخرج بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 99: مشروع التخرج\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 99: مشروع التخرج\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 99: مشروع التخرج",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 99: مشروع التخرج؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 99: مشروع التخرج هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 99: مشروع التخرج",
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
      "title": "????: الدرس 99: مشروع التخرج",
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
    "lesson_slug": "cyber-100",
    "title": "الدرس 100: الخاتمة",
    "category": "مشاريع وتطبيقات",
    "order_index": 100,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 15,
    "content": {
      "context": "في هذا الدرس سنناقش \"الخاتمة\" بشكل مفصل واحترافي. يعتبر هذا الدرس أساسياً لبناء مهارتك وصقل معرفتك.",
      "description": "شرح متكامل ومبسط عن الخاتمة. سنتعرف على أفضل الممارسات وطرق التطبيق العملية خطوة بخطوة لضمان استيعابك الكامل.",
      "prototype": "Concept_100() -> Completed",
      "parameters": "المتغيرات والأدوات الأساسية المرتبطة بـ الخاتمة",
      "return_value": "احتراف وفهم الخاتمة وتطبيقه في مشاريعك.",
      "example": "// Security snippet\\n  console.log(\"Analyzing: الخاتمة\");"
    },
    "exercise_instructions": "تمرين تفاعلي حول الدرس 100: الخاتمة: قم بتطبيق المفاهيم المشروحة في بيئة العمل.",
    "expected_output": "مخرجات تطبيق الدرس 100: الخاتمة بنجاح.",
    "lesson_type": "concept",
    "quick_practical_examples": [
      {
        "type": "correct",
        "title": "الاستخدام الصحيح",
        "code": "// كود تطبيقي صحيح لـ الدرس 100: الخاتمة\nexecuteCorrectStrategy();",
        "explanation": "هذا المثال يوضح الطريقة القياسية والآمنة لتنفيذ العملية."
      },
      {
        "type": "wrong",
        "title": "الاستخدام الخاطئ",
        "code": "// كود خاطئ لـ الدرس 100: الخاتمة\nexecuteVulnerableStrategy();",
        "error_message": "Error: Security / Syntax violation",
        "explanation": "تجنب هذه الطريقة لأنها تسبب ثغرات أو أخطاء برمجية."
      },
      {
        "type": "mistake",
        "title": "خطأ شائع",
        "code": "// محاولة غير مكتملة\npartialExecution();",
        "explanation": "كثيراً ما يتم نسيان تأمين المدخلات في هذه الخطوة."
      }
    ],
    "exam_data": {
      "title": "اختبار سريع: الدرس 100: الخاتمة",
      "questions": [
        {
          "question": "ما هو الغرض الأساسي من الدرس 100: الخاتمة؟",
          "options": [
            "الاستخدام الآمن والفعال",
            "تجاهل الأخطاء",
            "إيقاف النظام",
            "لا شيء مما سبق"
          ],
          "correct_answer": "الاستخدام الآمن والفعال",
          "explanation": "كما ذكرنا في الشرح، فإن الهدف الرئيسي من الدرس 100: الخاتمة هو تحقيق الكفاءة والأمان."
        }
      ]
    },
    "concept_context": "??? ????? ???? ??????: الدرس 100: الخاتمة",
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
      "title": "????: الدرس 100: الخاتمة",
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
