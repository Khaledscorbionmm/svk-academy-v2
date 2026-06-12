import fs from 'fs';
import { cyberTrackData } from './src/context/tracks/cyberData';

const updates = {
  'cyber-1': {
    title: "الدرس 1: استعراض الملفات (ls)",
    content: {
      context: "الأمر `ls` (List) يُستخدم لعرض محتويات الدليل (المجلد) الحالي في أنظمة لينكس. وهو من أكثر الأوامر استخداماً.",
      description: "يمكن استخدامه مع خيارات (Flags) مثل `-l` لعرض التفاصيل الكاملة (الصلاحيات، المالك، الحجم) أو `-a` لعرض الملفات المخفية.",
      prototype: "ls [options] [directory]",
      parameters: "خيارات ومسار الدليل",
      return_value: "قائمة بالملفات والمجلدات",
      example: "ls -la /var/log"
    },
    exercise_instructions: "استخدم الأمر `ls` مع الخيارات اللازمة لعرض جميع الملفات (بما فيها المخفية) بتفاصيلها الكاملة.",
    expected_output: "ls -la",
    quick_practical_examples: [
      { type: "correct", title: "عرض تفصيلي", code: "ls -l", explanation: "يعرض الملفات مع الصلاحيات وحجمها وتاريخ التعديل." },
      { type: "wrong", title: "مسار خاطئ", code: "ls /nonexistent", error_message: "ls: cannot access '/nonexistent': No such file or directory", explanation: "حاولت استعراض مجلد لا وجود له." },
      { type: "mistake", title: "نسيان عرض المخفي", code: "ls", explanation: "هذا الأمر لن يعرض الملفات التي تبدأ بنقطة (مثل .env). استخدم ls -a." }
    ],
    exam_data: {
      title: "اختبار ls",
      questions: [{ question: "أي خيار يستخدم لعرض الملفات المخفية؟", options: ["-l", "-a", "-h", "-R"], correct_answer: "-a", explanation: "الخيار -a يعني all (الكل)." }]
    }
  },
  'cyber-2': {
    title: "الدرس 2: التنقل بين المجلدات (cd)",
    content: {
      context: "الأمر `cd` (Change Directory) يُستخدم للانتقال من مجلد إلى آخر داخل نظام الملفات.",
      description: "يمكنك استخدام المسار المطلق (يبدأ من /) أو المسار النسبي. الرمز `..` يعني المجلد الأب، و `~` يعني المجلد الرئيسي للمستخدم.",
      prototype: "cd [directory]",
      parameters: "مسار المجلد الوجهة",
      return_value: "تغيير مسار العمل الحالي",
      example: "cd /etc/ssh"
    },
    exercise_instructions: "اكتب الأمر اللازم للرجوع خطوة واحدة للخلف (إلى المجلد الأب).",
    expected_output: "cd ..",
    quick_practical_examples: [
      { type: "correct", title: "الذهاب لمجلد المستخدم", code: "cd ~", explanation: "ينقلك فوراً إلى المجلد الرئيسي الخاص بك." },
      { type: "wrong", title: "عدم وجود صلاحيات", code: "cd /root", error_message: "bash: cd: /root: Permission denied", explanation: "لا تملك صلاحية الدخول لمجلد الجذر كمسخدم عادي." },
      { type: "mistake", title: "كتابة المسار بمسافات", code: "cd my folder", explanation: "يجب وضع المسار بين علامتي تنصيص 'my folder' أو استخدام الشرطة المائلة my\\ folder." }
    ],
    exam_data: {
      title: "اختبار cd",
      questions: [{ question: "كيف ترجع للمجلد السابق مباشرة؟", options: ["cd .", "cd ..", "cd ~", "cd -"], correct_answer: "cd -", explanation: "الخيار cd - يعيدك لآخر مجلد كنت فيه." }]
    }
  },
  'cyber-3': {
    title: "الدرس 3: معرفة المسار الحالي (pwd)",
    content: {
      context: "الأمر `pwd` (Print Working Directory) يعرض المسار المطلق للمجلد الذي تتواجد فيه حالياً.",
      description: "مفيد جداً عندما تضيع في نظام الملفات المعقد وتريد معرفة مكانك بالضبط قبل تنفيذ أوامر الحذف أو النقل.",
      prototype: "pwd",
      parameters: "لا يحتاج لمعاملات",
      return_value: "نص يمثل المسار المطلق",
      example: "pwd\n# Output: /home/user/documents"
    },
    exercise_instructions: "اكتب الأمر الذي يعرض المسار الكامل لمجلدك الحالي.",
    expected_output: "pwd",
    quick_practical_examples: [
      { type: "correct", title: "استخدام قياسي", code: "pwd", explanation: "يطبع مسارك الحالي." },
      { type: "wrong", title: "إضافة معاملات غير مدعومة", code: "pwd -x", error_message: "pwd: invalid option -- 'x'", explanation: "pwd لا يحتاج عادة لأي خيارات." },
      { type: "mistake", title: "الخلط بين pwd والأوامر الأخرى", code: "cd pwd", explanation: "لا تفعل ذلك، pwd ليس مجلداً بل أمر تنفيذي." }
    ],
    exam_data: {
      title: "اختبار pwd",
      questions: [{ question: "ما هي وظيفة pwd؟", options: ["تغيير كلمة المرور", "طباعة المسار الحالي", "إنشاء ملف", "حذف مجلد"], correct_answer: "طباعة المسار الحالي", explanation: "اختصار لـ Print Working Directory." }]
    }
  },
  'cyber-4': {
    title: "الدرس 4: إنشاء مجلدات (mkdir)",
    content: {
      context: "الأمر `mkdir` (Make Directory) يُستخدم لإنشاء مجلد أو مجلدات جديدة.",
      description: "يمكنك إنشاء مجلد واحد، أو عدة مجلدات، أو حتى شجرة مجلدات متداخلة باستخدام الخيار `-p`.",
      prototype: "mkdir [options] directory_name",
      parameters: "اسم المجلد المراد إنشاؤه",
      return_value: "مجلد جديد في النظام",
      example: "mkdir -p project/src/components"
    },
    exercise_instructions: "قم بإنشاء مجلد باسم `backup`.",
    expected_output: "mkdir backup",
    quick_practical_examples: [
      { type: "correct", title: "إنشاء مسار متكامل", code: "mkdir -p app/views/home", explanation: "الخيار -p ينشئ المجلدات الأب إذا لم تكن موجودة." },
      { type: "wrong", title: "المجلد موجود مسبقاً", code: "mkdir backup", error_message: "mkdir: cannot create directory ‘backup’: File exists", explanation: "لا يمكن إنشاء مجلد باسم موجود بالفعل." },
      { type: "mistake", title: "إنشاء مجلدات بمسافات بالخطأ", code: "mkdir my new folder", explanation: "هذا سينشئ 3 مجلدات منفصلة (my, new, folder). استخدم علامات التنصيص." }
    ],
    exam_data: {
      title: "اختبار mkdir",
      questions: [{ question: "أي خيار يسمح بإنشاء مجلدات متداخلة دفعة واحدة؟", options: ["-r", "-f", "-p", "-a"], correct_answer: "-p", explanation: "الخيار -p (parents) ينشئ المجلدات المطلوبة لتكوين المسار." }]
    }
  },
  'cyber-5': {
    title: "الدرس 5: حذف الملفات (rm)",
    content: {
      context: "الأمر `rm` (Remove) يستخدم لحذف الملفات والمجلدات.",
      description: "الحذف في لينكس نهائي عادة (لا توجد سلة مهملات). لحذف مجلد بمحتوياته استخدم `-r`، ولفرض الحذف استخدم `-f`.",
      prototype: "rm [options] file_name",
      parameters: "اسم الملف أو المجلد المراد حذفه",
      return_value: "حذف العنصر نهائياً",
      example: "rm -rf old_project/"
    },
    exercise_instructions: "احذف الملف المسمى `temp.txt`.",
    expected_output: "rm temp.txt",
    quick_practical_examples: [
      { type: "correct", title: "حذف مجلد بمحتوياته", code: "rm -r folder_name", explanation: "الخيار -r ضروري لحذف المجلدات (recursive)." },
      { type: "wrong", title: "محاولة حذف مجلد بدون -r", code: "rm folder_name", error_message: "rm: cannot remove 'folder_name': Is a directory", explanation: "الأمر rm لوحده مخصص للملفات فقط." },
      { type: "mistake", title: "الكارثة المطلقة", code: "rm -rf /", explanation: "هذا الأمر يقوم بمسح نظام التشغيل بالكامل! كن حذراً جداً مع -rf." }
    ],
    exam_data: {
      title: "اختبار rm",
      questions: [{ question: "أي خيار يستخدم لفرض الحذف بدون طلب تأكيد؟", options: ["-i", "-r", "-f", "-d"], correct_answer: "-f", explanation: "الخيار -f يعني force." }]
    }
  },
  'cyber-6': {
    title: "الدرس 6: نسخ الملفات (cp)",
    content: {
      context: "الأمر `cp` (Copy) يُستخدم لنسخ الملفات والمجلدات من مكان إلى آخر.",
      description: "يحتاج الأمر إلى مصدر ووجهة. لنسخ المجلدات بمحتوياتها نستخدم الخيار `-r`.",
      prototype: "cp [options] source destination",
      parameters: "مسار المصدر ومسار الوجهة",
      return_value: "نسخة مطابقة في الوجهة",
      example: "cp config.yml config.backup.yml"
    },
    exercise_instructions: "قم بنسخ ملف `data.txt` إلى مجلد `backup/`.",
    expected_output: "cp data.txt backup/",
    quick_practical_examples: [
      { type: "correct", title: "نسخ مجلد", code: "cp -r /var/www /backup/www", explanation: "تم استخدام -r لنسخ المجلد بالكامل." },
      { type: "wrong", title: "نسخ مجلد بدون -r", code: "cp /var/www /backup/", error_message: "cp: -r not specified; omitting directory '/var/www'", explanation: "يجب تحديد الخيار -r للتعامل مع المجلدات." },
      { type: "mistake", title: "الكتابة فوق ملف مهم", code: "cp new.txt important.txt", explanation: "إذا كان important.txt موجوداً، سيتم مسحه واستبداله فوراً. استخدم -i للتأكيد قبل الاستبدال." }
    ],
    exam_data: {
      title: "اختبار cp",
      questions: [{ question: "كيف تنسخ مجلداً بالكامل؟", options: ["cp -d", "cp -r", "cp -f", "copy"], correct_answer: "cp -r", explanation: "الخيار -r يعني النقل المتكرر Recursive." }]
    }
  },
  'cyber-7': {
    title: "الدرس 7: نقل وإعادة تسمية (mv)",
    content: {
      context: "الأمر `mv` (Move) يقوم بمهمتين: نقل الملفات من مكان لآخر، أو إعادة تسميتها إذا كان النقل في نفس المجلد.",
      description: "لا يترك نسخة في المكان الأصلي كالأمر cp. عملية النقل سريعة جداً لأنها تعدل فقط الفهرس.",
      prototype: "mv source destination",
      parameters: "المصدر والوجهة",
      return_value: "تغيير المسار أو الاسم",
      example: "mv old_name.txt new_name.txt"
    },
    exercise_instructions: "قم بإعادة تسمية الملف `test.txt` إلى `final.txt`.",
    expected_output: "mv test.txt final.txt",
    quick_practical_examples: [
      { type: "correct", title: "نقل ملف لمجلد آخر", code: "mv config.json /etc/app/", explanation: "ينقل الملف إلى المجلد المحدد." },
      { type: "wrong", title: "نقل لملف لا تملك صلاحيته", code: "mv my_file /etc/", error_message: "mv: cannot move to '/etc/my_file': Permission denied", explanation: "تحتاج صلاحيات sudo للكتابة في مجلدات النظام." },
      { type: "mistake", title: "دمج عدة ملفات بالخطأ", code: "mv file1 file2", explanation: "هذا لا يدمج، بل يمسح file2 ويضع مكانه file1!" }
    ],
    exam_data: {
      title: "اختبار mv",
      questions: [{ question: "ماذا يفعل الأمر: mv a.txt b.txt (في حال عدم وجود مجلد بـ b.txt)؟", options: ["ينسخ الملف", "يعيد تسمية الملف", "يحذف الملفين", "يُظهر خطأ"], correct_answer: "يعيد تسمية الملف", explanation: "إذا كانت الوجهة ليست مجلداً، يتم اعتبارها إعادة تسمية." }]
    }
  },
  'cyber-8': {
    title: "الدرس 8: إنشاء ملف فارغ وتحديث الوقت (touch)",
    content: {
      context: "الأمر `touch` يُستخدم أساساً لتحديث وقت آخر تعديل لملف، ولكن الاستخدام الأشهر له هو إنشاء ملفات فارغة جديدة.",
      description: "طريقة سريعة لإنشاء ملف نصي أو أي امتداد آخر بدون فتح محرر نصوص.",
      prototype: "touch file_name",
      parameters: "اسم الملف",
      return_value: "ملف فارغ أو تحديث للوقت",
      example: "touch index.html"
    },
    exercise_instructions: "قم بإنشاء ملف فارغ باسم `app.log`.",
    expected_output: "touch app.log",
    quick_practical_examples: [
      { type: "correct", title: "إنشاء عدة ملفات", code: "touch file1.txt file2.txt", explanation: "ينشئ الملفين معاً في نفس اللحظة." },
      { type: "wrong", title: "مسار غير موجود", code: "touch /fake_dir/file.txt", error_message: "touch: cannot touch '/fake_dir/file.txt': No such file or directory", explanation: "المجلد الحاوي للملف غير موجود مسبقاً." },
      { type: "mistake", title: "مسح المحتوى؟", code: "touch existing_file.txt", explanation: "لا تقلق، touch لا يمسح محتوى الملفات الموجودة، فقط يحدّث وقت تعديلها (Timestamp)." }
    ],
    exam_data: {
      title: "اختبار touch",
      questions: [{ question: "هل يمسح touch محتوى الملف إذا كان موجوداً؟", options: ["نعم", "لا، يحدّث وقته فقط", "يُظهر خطأ", "يحذفه"], correct_answer: "لا، يحدّث وقته فقط", explanation: "هذه ميزة مهمة لاستخدامه كأداة تحديث للطوابع الزمنية." }]
    }
  },
  'cyber-9': {
    title: "الدرس 9: قراءة الملفات (cat)",
    content: {
      context: "الأمر `cat` (Concatenate) يقرأ محتوى الملفات ويعرضه بالكامل على الشاشة (Terminal).",
      description: "مفيد للملفات النصية القصيرة، ويمكن استخدامه لدمج عدة ملفات في ملف واحد.",
      prototype: "cat file_name",
      parameters: "اسم الملف",
      return_value: "طباعة المحتوى النصي",
      example: "cat /etc/passwd"
    },
    exercise_instructions: "اعرض محتوى الملف المسمى `notes.txt`.",
    expected_output: "cat notes.txt",
    quick_practical_examples: [
      { type: "correct", title: "دمج ملفين", code: "cat file1 file2 > combined", explanation: "يقرأ الملفين ويحفظ الناتج في ملف جديد." },
      { type: "wrong", title: "قراءة مجلد", code: "cat /etc", error_message: "cat: /etc: Is a directory", explanation: "لا يمكن قراءة المجلدات باستخدام cat." },
      { type: "mistake", title: "قراءة ملفات ضخمة جداً", code: "cat large_log.txt", explanation: "سيطبع الملايين من الأسطر ولن تتمكن من القراءة أو التوقف بسهولة. استخدم less للملفات الكبيرة." }
    ],
    exam_data: {
      title: "اختبار cat",
      questions: [{ question: "كيف ندمج ملفين a و b في ملف c؟", options: ["cat a b c", "cat a b > c", "cat c < a b", "cat a + b = c"], correct_answer: "cat a b > c", explanation: "نستخدم التوجيه (>) لإرسال المخرجات إلى الملف c." }]
    }
  },
  'cyber-10': {
    title: "الدرس 10: التصفح المتقدم (less)",
    content: {
      context: "الأمر `less` يُستخدم لقراءة الملفات النصية الطويلة صفحة بصفحة، بدلاً من طباعتها دفعة واحدة مثل cat.",
      description: "يمكنك البحث داخل الملف باستخدام `/`، والخروج بالضغط على حرف `q`.",
      prototype: "less file_name",
      parameters: "اسم الملف",
      return_value: "واجهة تصفح تفاعلية",
      example: "less /var/log/syslog"
    },
    exercise_instructions: "افتح الملف `large_file.txt` للتصفح بوضع less.",
    expected_output: "less large_file.txt",
    quick_practical_examples: [
      { type: "correct", title: "التصفح والبحث", code: "less config.ini", explanation: "داخل less، اضغط / للبحث عن كلمة، واضغط n للنتيجة التالية." },
      { type: "wrong", title: "عدم وجود الملف", code: "less missing.txt", error_message: "missing.txt: No such file or directory", explanation: "يجب أن يكون الملف موجوداً للقراءة." },
      { type: "mistake", title: "عدم معرفة كيفية الخروج", code: "CTRL+C", explanation: "الكثير يضغطون CTRL+C للخروج من less. الطريقة الصحيحة هي الضغط على زر q (Quit)." }
    ],
    exam_data: {
      title: "اختبار less",
      questions: [{ question: "ما هو الزر المستخدم للخروج من واجهة less؟", options: ["ESC", "q", "CTRL+X", "CTRL+C"], correct_answer: "q", explanation: "حرف q يرمز إلى Quit (خروج)." }]
    }
  },
  'cyber-11': {
    title: "الدرس 11: تعديل الصلاحيات (chmod)",
    content: {
      context: "الأمر `chmod` (Change Mode) يُستخدم لتغيير صلاحيات (قراءة، كتابة، تنفيذ) الملفات والمجلدات.",
      description: "يمكن استخدام الأرقام (Octal) مثل 777 أو الحروف (u, g, o) مع (+, -, =). القراءة=4، الكتابة=2، التنفيذ=1.",
      prototype: "chmod [permissions] file",
      parameters: "رمز الصلاحيات والملف",
      return_value: "تغيير صلاحيات الوصول",
      example: "chmod 755 script.sh"
    },
    exercise_instructions: "أعطِ صلاحية التنفيذ (Execute) لملف `run.sh` باستخدام نظام الحروف للمستخدم المالك (u).",
    expected_output: "chmod u+x run.sh",
    quick_practical_examples: [
      { type: "correct", title: "إعطاء كل الصلاحيات للمالك", code: "chmod 700 secret.txt", explanation: "7 تعني قراءة+كتابة+تنفيذ للمالك، و 0 للآخرين." },
      { type: "wrong", title: "تعديل ملف لا تملكه", code: "chmod 777 /etc/passwd", error_message: "chmod: changing permissions of '/etc/passwd': Operation not permitted", explanation: "لا تملك صلاحية تعديل ملفات النظام." },
      { type: "mistake", title: "إعطاء 777 لكل شيء", code: "chmod -r 777 /var/www", explanation: "إعطاء صلاحية 777 يمثل خطراً أمنياً هائلاً (الجميع يمكنهم قراءة وكتابة وتنفيذ كل شيء)." }
    ],
    exam_data: {
      title: "اختبار chmod",
      questions: [{ question: "ما هو الرقم المقابل لصلاحية (القراءة + التنفيذ) معاً؟", options: ["3", "5", "6", "7"], correct_answer: "5", explanation: "القراءة 4 والتنفيذ 1، إذن المجموع 5." }]
    }
  },
  'cyber-12': {
    title: "الدرس 12: تغيير المالك (chown)",
    content: {
      context: "الأمر `chown` (Change Owner) يتيح لك تغيير المستخدم (والمجموعة) المالك للملف أو المجلد.",
      description: "غالباً يحتاج هذا الأمر إلى صلاحيات الجذر (root/sudo) لأن نقل الملكية عملية أمنية حساسة.",
      prototype: "chown [user]:[group] file",
      parameters: "المستخدم والمجموعة والملف",
      return_value: "تغيير الملكية",
      example: "sudo chown root:www-data config.php"
    },
    exercise_instructions: "غيّر مالك الملف `data.txt` إلى المستخدم `admin`.",
    expected_output: "sudo chown admin data.txt",
    quick_practical_examples: [
      { type: "correct", title: "تغيير المالك والمجموعة", code: "chown user:group file.txt", explanation: "الاسم الأول للمستخدم والثاني للمجموعة." },
      { type: "wrong", title: "مستخدم غير موجود", code: "chown fakeuser file.txt", error_message: "chown: invalid user: 'fakeuser'", explanation: "يجب أن يكون المستخدم مسجلاً في النظام." },
      { type: "mistake", title: "تغيير ملكية مجلد بدون محتوياته", code: "chown user folder", explanation: "هذا يغير ملكية المجلد فقط. لتغيير المحتويات استخدم chown -R." }
    ],
    exam_data: {
      title: "اختبار chown",
      questions: [{ question: "ماذا يمثل الجزء الثاني بعد النقطتين في user:group؟", options: ["المجموعة", "الصلاحية", "كلمة المرور", "لا شيء"], correct_answer: "المجموعة", explanation: "يشير إلى Group (المجموعة)." }]
    }
  },
  'cyber-13': {
    title: "الدرس 13: تغيير المجموعة (chgrp)",
    content: {
      context: "الأمر `chgrp` (Change Group) مخصص لتغيير المجموعة المالكة للملف، بدون الحاجة لاستخدام chown.",
      description: "مفيد في بيئات العمل التي تتشارك فيها مجموعات من المستخدمين (مثل المطورين) في نفس الملفات.",
      prototype: "chgrp group_name file",
      parameters: "اسم المجموعة والملف",
      return_value: "تغيير المجموعة",
      example: "chgrp developers shared_folder/"
    },
    exercise_instructions: "غيّر مجموعة الملف `team.doc` إلى مجموعة `staff`.",
    expected_output: "chgrp staff team.doc",
    quick_practical_examples: [
      { type: "correct", title: "تغيير متكرر للمجلد", code: "chgrp -R www-data html/", explanation: "يتم تغيير مجموعة المجلد وكل ما بداخله." },
      { type: "wrong", title: "مجموعة وهمية", code: "chgrp ghost file", error_message: "chgrp: invalid group: 'ghost'", explanation: "المجموعة غير موجودة في /etc/group." },
      { type: "mistake", title: "لست عضواً", code: "chgrp admin my_file", explanation: "كمستخدم عادي، لا يمكنك تعيين مجموعة لست عضواً فيها." }
    ],
    exam_data: {
      title: "اختبار chgrp",
      questions: [{ question: "هل chgrp يغير المستخدم المالك للملف؟", options: ["نعم", "لا", "فقط إذا كان الجذر", "أحياناً"], correct_answer: "لا", explanation: "يغير المجموعة فقط." }]
    }
  },
  'cyber-14': {
    title: "الدرس 14: قناع الصلاحيات (umask)",
    content: {
      context: "الأمر `umask` يُحدد قناع الصلاحيات الافتراضي للملفات والمجلدات الجديدة التي تنشئها.",
      description: "الصلاحية الافتراضية للملف 666 والمجلد 777، ويتم طرح قيمة umask منها. مثلاً umask 022 يعني (666 - 022 = 644 للملفات).",
      prototype: "umask [value]",
      parameters: "القيمة الثمانية للقناع",
      return_value: "تغيير القناع الافتراضي",
      example: "umask 027"
    },
    exercise_instructions: "اكتب الأمر لعرض قيمة umask الحالية.",
    expected_output: "umask",
    quick_practical_examples: [
      { type: "correct", title: "تعيين قناع آمن", code: "umask 077", explanation: "يجعل الملفات الجديدة متاحة للمالك فقط (يمنع الآخرين)." },
      { type: "wrong", title: "قيمة غير صالحة", code: "umask 999", error_message: "bash: umask: 999: octal number out of range", explanation: "نظام الصلاحيات يعتمد على الأرقام الثمانية (0-7)." },
      { type: "mistake", title: "الخلط بين umask و chmod", code: "umask 777", explanation: "هذا سيجعل ملفاتك الجديدة بصلاحية 000 (لا أحد يمكنه القراءة/الكتابة)! umask يعمل بالطرح." }
    ],
    exam_data: {
      title: "اختبار umask",
      questions: [{ question: "إذا كان umask 022، فما هي صلاحية المجلد الجديد؟", options: ["777", "755", "644", "022"], correct_answer: "755", explanation: "777 - 022 = 755." }]
    }
  },
  'cyber-15': {
    title: "الدرس 15: تغيير كلمة المرور (passwd)",
    content: {
      context: "الأمر `passwd` يُستخدم لتغيير كلمة مرور المستخدم.",
      description: "المستخدم العادي يمكنه تغيير كلمة مروره فقط. مستخدم الجذر (root) يمكنه تغيير كلمة مرور أي مستخدم آخر في النظام.",
      prototype: "passwd [username]",
      parameters: "اسم المستخدم (اختياري لكلمتك)",
      return_value: "تحديث قاعدة بيانات كلمات المرور",
      example: "passwd"
    },
    exercise_instructions: "اكتب الأمر اللازم لتغيير كلمة مرور المستخدم `guest` (بافتراض أنك root).",
    expected_output: "passwd guest",
    quick_practical_examples: [
      { type: "correct", title: "تغيير كلمتك الخاصة", code: "passwd", explanation: "سيطلب منك الكلمة القديمة ثم الجديدة مرتين." },
      { type: "wrong", title: "تغيير كلمة غيرك بدون صلاحية", code: "passwd root", error_message: "passwd: You may not view or modify password information for root.", explanation: "تحتاج إلى sudo لفعل ذلك." },
      { type: "mistake", title: "اختيار كلمة مرور ضعيفة", code: "New password: 123", explanation: "النظام غالباً سيرفضها بعبارة 'BAD PASSWORD: is too simple'." }
    ],
    exam_data: {
      title: "اختبار passwd",
      questions: [{ question: "من يمكنه تغيير كلمة مرور أي مستخدم على النظام؟", options: ["أي مستخدم", "المستخدم الجذر (root)", "مجموعة users", "لا أحد"], correct_answer: "المستخدم الجذر (root)", explanation: "الـ root يملك الصلاحيات الكاملة." }]
    }
  },
  'cyber-16': {
    title: "الدرس 16: تبديل المستخدم (su)",
    content: {
      context: "الأمر `su` (Substitute User) يسمح لك بفتح جلسة باسم مستخدم آخر دون تسجيل الخروج.",
      description: "الاستخدام الأكثر شيوعاً هو التبديل إلى المستخدم الجذر (root).",
      prototype: "su [options] [username]",
      parameters: "اسم المستخدم",
      return_value: "قشرة (Shell) باسم المستخدم الجديد",
      example: "su - admin"
    },
    exercise_instructions: "قم بالتبديل للمستخدم الجذر (root).",
    expected_output: "su -",
    quick_practical_examples: [
      { type: "correct", title: "التبديل مع بيئة المستخدم", code: "su - root", explanation: "الرمز (-) مهم لأنه يحمل متغيرات البيئة الخاصة بالمستخدم الجديد." },
      { type: "wrong", title: "كلمة مرور خاطئة", code: "su root\nPassword: ***", error_message: "su: Authentication failure", explanation: "أدخلت كلمة المرور بشكل غير صحيح." },
      { type: "mistake", title: "عدم معرفة كيفية الرجوع", code: "exit", explanation: "للعودة لمستخدمك الأصلي، ببساطة اكتب exit." }
    ],
    exam_data: {
      title: "اختبار su",
      questions: [{ question: "ما فائدة الرمز (-) في الأمر: su -", options: ["تقليل الصلاحيات", "تحميل بيئة المستخدم الجديد", "تسريع التبديل", "لا شيء"], correct_answer: "تحميل بيئة المستخدم الجديد", explanation: "يقوم بتحميل المتغيرات مثل مسارات PATH وغيرها." }]
    }
  },
  'cyber-17': {
    title: "الدرس 17: التنفيذ كجذر (sudo)",
    content: {
      context: "الأمر `sudo` (SuperUser DO) ينفذ أمراً واحداً بصلاحيات الجذر (root) ثم يعود فوراً لمستخدمك العادي.",
      description: "يعتبر أكثر أماناً من فتح جلسة كاملة بـ su لأنه يسجل الأوامر المنفذة ويقلل من الأخطاء الكارثية.",
      prototype: "sudo command",
      parameters: "الأمر المراد تنفيذه",
      return_value: "تنفيذ بصلاحية root",
      example: "sudo apt update"
    },
    exercise_instructions: "استخدم `sudo` لإنشاء مجلد باسم `system_logs` داخل مجلد `/var/log`.",
    expected_output: "sudo mkdir /var/log/system_logs",
    quick_practical_examples: [
      { type: "correct", title: "تحديث النظام", code: "sudo apt upgrade", explanation: "يتطلب صلاحيات واسعة لذا نستخدم sudo." },
      { type: "wrong", title: "المستخدم غير مسجل في sudoers", code: "sudo ls", error_message: "user is not in the sudoers file. This incident will be reported.", explanation: "مدير النظام لم يمنحك صلاحية استخدام sudo." },
      { type: "mistake", title: "استخدام sudo مع أوامر لا تحتاجه", code: "sudo pwd", explanation: "لا حاجة لـ sudo هنا، إنه مجرد هدر للوقت ويعرض النظام لمخاطر غير ضرورية." }
    ],
    exam_data: {
      title: "اختبار sudo",
      questions: [{ question: "أيهما يعتبر أكثر أماناً في الاستخدام اليومي؟", options: ["su root", "تسجيل الدخول كـ root", "sudo", "إعطاء 777 لكل شيء"], correct_answer: "sudo", explanation: "يطبق الصلاحية على أمر واحد فقط ويحتفظ بالسجل." }]
    }
  },
  'cyber-18': {
    title: "الدرس 18: تعديل ملف sudoers بـ (visudo)",
    content: {
      context: "الأمر `visudo` يُستخدم لتحرير ملف إعدادات الصلاحيات `/etc/sudoers` بشكل آمن.",
      description: "يقوم هذا الأمر بفحص الأخطاء الإملائية والمنطقية (Syntax) قبل حفظ الملف، لمنع قفل النظام بالكامل في حال خطأ التكوين.",
      prototype: "sudo visudo",
      parameters: "لا يوجد",
      return_value: "فتح محرر آمن لملف sudoers",
      example: "sudo visudo"
    },
    exercise_instructions: "افتح ملف sudoers للتعديل بشكل آمن.",
    expected_output: "sudo visudo",
    quick_practical_examples: [
      { type: "correct", title: "منح صلاحيات بدون باسورد", code: "john ALL=(ALL) NOPASSWD: ALL", explanation: "يُضاف هذا السطر لملف sudoers لتخويل john بتنفيذ أي شيء بدون طلب كلمة مرور." },
      { type: "wrong", title: "تعديل الملف بـ nano العادي", code: "sudo nano /etc/sudoers", error_message: "No specific error, but DANGEROUS", explanation: "إذا أخطأت في الكتابة، لن يخبرك nano وسيحرم الجميع من استخدام sudo!" },
      { type: "mistake", title: "تعديل بصلاحية مستخدم عادي", code: "visudo", explanation: "يجب تشغيل visudo بصلاحية الجذر (sudo visudo)." }
    ],
    exam_data: {
      title: "اختبار visudo",
      questions: [{ question: "ما هي ميزة visudo الأساسية؟", options: ["تلوين النصوص", "فحص بناء الجملة (Syntax checking) قبل الحفظ", "السرعة", "لا شيء"], correct_answer: "فحص بناء الجملة (Syntax checking) قبل الحفظ", explanation: "ليحمي النظام من فقدان صلاحيات sudo بسبب خطأ مطبعي." }]
    }
  },
  'cyber-19': {
    title: "الدرس 19: بت المستخدم المؤقت (SetUID)",
    content: {
      context: "الـ `SetUID` هي صلاحية خاصة تُمنح للملفات التنفيذية. تجعل الملف يعمل بصلاحيات 'المالك' بدلاً من صلاحيات 'المستخدم الذي نفذه'.",
      description: "مثال شهير هو أمر `passwd`. المالك هو root، لذلك عندما تستخدمه يتصرف كأنك root لثوانٍ لتغيير كلمتك في قاعدة البيانات المحمية.",
      prototype: "chmod u+s file_name\nأو\nchmod 4755 file",
      parameters: "الملف التنفيذي",
      return_value: "الملف يظهر بحرف 's' في الصلاحيات",
      example: "chmod u+s my_script.sh"
    },
    exercise_instructions: "أضف صلاحية SetUID للملف التنفيذي `app`.",
    expected_output: "chmod u+s app",
    quick_practical_examples: [
      { type: "correct", title: "معاينة الملف", code: "ls -l /usr/bin/passwd", explanation: "ستلاحظ أن صلاحية المالك تحتوي على الحرف 's' بدلاً من 'x'." },
      { type: "wrong", title: "استخدامه على سكريبتات (Bash)", code: "chmod u+s script.sh", error_message: "Ignored by Linux kernels", explanation: "نواة لينكس الحديثة تتجاهل SetUID لسكريبتات النصوص لدواعي أمنية." },
      { type: "mistake", title: "تطبيقه على ملفات عادية", code: "chmod u+s text.txt", explanation: "لا فائدة من تطبيقه على ملف نصي لا يمكن تنفيذه." }
    ],
    exam_data: {
      title: "اختبار SetUID",
      questions: [{ question: "ما هو الحرف الذي يمثل SetUID في ناتج ls -l؟", options: ["r", "w", "s", "t"], correct_answer: "s", explanation: "يظهر حرف s مكان حرف x." }]
    }
  },
  'cyber-20': {
    title: "الدرس 20: بت المجموعة المؤقت (SetGID)",
    content: {
      context: "الـ `SetGID` يشبه SetUID ولكن للمجموعات. إذا تم تطبيقه على مجلد، أي ملف يُنشأ بداخله سيرث 'مجموعة المجلد' بدلاً من 'مجموعة المستخدم المنشئ'.",
      description: "مهم جداً للمجلدات المشتركة بين عدة موظفين لضمان بقاء ملكية المجموعة ثابتة وسهولة تبادل الملفات.",
      prototype: "chmod g+s directory_name\nأو\nchmod 2755 directory",
      parameters: "المجلد المشترك",
      return_value: "إرث المجموعة للملفات الجديدة",
      example: "chmod g+s shared_folder/"
    },
    exercise_instructions: "ضع علامة SetGID على مجلد `team_data/`.",
    expected_output: "chmod g+s team_data/",
    quick_practical_examples: [
      { type: "correct", title: "تطبيق للمجلدات التعاونية", code: "chmod 2770 /var/www/html", explanation: "يضمن أن كل ملف جديد سيرث مجموعة www-data." },
      { type: "wrong", title: "تجاهل مالك المجموعة", code: "chown user:wrong_group dir; chmod g+s dir", error_message: "Logical error", explanation: "يجب التأكد أن مجموعة المجلد صحيحة قبل تطبيق SetGID." },
      { type: "mistake", title: "الاعتماد عليه للصلاحيات", code: "chmod g+s dir", explanation: "هذا لا يعطي أحداً صلاحية القراءة! هو فقط يورّث المجموعة. يجب ضبط الصلاحيات معاً." }
    ],
    exam_data: {
      title: "اختبار SetGID",
      questions: [{ question: "ما هي الفائدة الرئيسية من SetGID على المجلدات؟", options: ["منع الحذف", "تسريع النظام", "إرث المجموعة للملفات الجديدة", "إخفاء الملفات"], correct_answer: "إرث المجموعة للملفات الجديدة", explanation: "يساعد في إدارة الملفات المشتركة لفرق العمل." }]
    }
  }
};

const updatedData = cyberTrackData.map(lesson => {
  if (updates[lesson.lesson_slug]) {
    return { ...lesson, ...updates[lesson.lesson_slug], lesson_type: 'concept' };
  }
  return lesson;
});

fs.writeFileSync(
  './src/context/tracks/cyberData.ts',
  "export const cyberTrackData = " + JSON.stringify(updatedData, null, 2) + ";\n",
  'utf8'
);
console.log('Cyber Security Phase 1 & 2 (20 lessons) patched successfully!');
