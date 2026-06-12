import json
import os

lessons = [
    {
        "lesson_slug": "python-91",
        "content": {
            "context": "لماذا نحتاج لكتابة كود نظيف؟ كتابة كود يعمل ليست كافية؛ الأهم هو كتابة كود يمكن قراءته، تعديله، وصيانته بسهولة من قبلك ومن قبل فريق عملك في المستقبل.",
            "description": "كتابة كود نظيف (Clean Code) تعني اتباع أفضل الممارسات البرمجية، مثل اختيار أسماء واضحة للمتغيرات والدوال، الالتزام بقواعد PEP 8 في بايثون، وتجنب تكرار الكود (DRY - Don't Repeat Yourself). الكود النظيف يقلل الأخطاء ويوفر الوقت.",
            "prototype": "# اسم دالة واضح بدلاً من اسم مبهم\ndef calculate_total_price(items):\n    ...\n\n# اتباع التنسيق المناسب",
            "parameters": "items: قائمة من العناصر (List) تحتوي على أسعار أو تفاصيل المنتجات لحساب الإجمالي.",
            "return_value": "ترجع الدالة إجمالي السعر، وهو قيمة رقمية (Float أو Integer) واضحة ومباشرة.",
            "example": "def calculate_discounted_price(price, discount_rate):\n    \"\"\"يحسب السعر بعد الخصم\"\"\"\n    if discount_rate < 0 or discount_rate > 1:\n        raise ValueError(\"نسبة الخصم يجب أن تكون بين 0 و 1\")\n    return price - (price * discount_rate)"
        },
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
        }
    },
    {
        "lesson_slug": "python-92",
        "content": {
            "context": "كيف تصمم أنظمة معقدة مرنة وقابلة للتوسع؟ نستخدم مبادئ SOLID لضمان عدم انهيار المشروع عند إضافة ميزات جديدة.",
            "description": "مبادئ SOLID هي خمسة مبادئ لتصميم البرمجيات الموجهة بالكائنات (OOP): SRP (مسؤولية واحدة)، OCP (مفتوح للتمديد مغلق للتعديل)، LSP (استبدال ليسكوف)، ISP (فصل الواجهات)، DIP (عكس الاعتمادية). في بايثون، نطبق هذه المبادئ لكتابة فئات (Classes) مستقلة وقابلة لإعادة الاستخدام.",
            "prototype": "class ReportGenerator:\n    def generate(self, data):\n        pass\n\nclass ReportSaver:\n    def save(self, report):\n        pass",
            "parameters": "الفئات والدوال يجب أن تستقبل المعاملات التي تحتاجها فقط للقيام بمسؤوليتها الوحيدة.",
            "return_value": "فصل المهام يجعل كل فئة ترجع نتيجة محددة بدقة، مما يسهل اختبارها (Unit Testing).",
            "example": "class EmailSender:\n    def send_email(self, message):\n        print(f\"Sending: {message}\")\n\n# بدلاً من وضع إرسال البريد داخل فئة المستخدم، فصلناه لتطبيق مبدأ المسؤولية الواحدة (SRP)"
        },
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
        }
    },
    {
        "lesson_slug": "python-93",
        "content": {
            "context": "كيف ندمج ما تعلمناه لبناء تطبيق حقيقي؟",
            "description": "في هذا التطبيق الشامل، سنقوم بدمج المفاهيم المتقدمة: الـ OOP، الكود النظيف، التعامل مع الملفات وقواعد البيانات، ومبادئ SOLID لبناء نظام إدارة مكتبة مبسط. سنتعلم كيف نقسم المشروع إلى وحدات (Modules) ونتعامل مع الأخطاء.",
            "prototype": "project/\n|-- models.py\n|-- database.py\n|-- services.py\n|-- main.py",
            "parameters": "كل ملف (Module) سيكون له مدخلات ومخرجات محددة. مثلاً خدمات الإعارة ستستقبل كائن Book وكائن User.",
            "return_value": "البرنامج ككل سيعمل بتناغم ليرجع استجابات صحيحة للمستخدم كإتمام الاستعارة أو إرجاع خطأ إذا كان الكتاب غير متوفر.",
            "example": "from models import Book\nfrom services import LibraryService\n\nbook = Book(\"Python Basics\")\nservice = LibraryService()\nservice.borrow_book(user, book)"
        },
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
        }
    },
    {
        "lesson_slug": "python-94",
        "content": {
            "context": "أكملت كتابة الكود، ولكن كيف تجعله متاحاً للمستخدمين؟ النشر (Deployment) هو الجواب.",
            "description": "عملية النشر (Deployment) هي نقل التطبيق من بيئة التطوير (جهازك الشخصي) إلى بيئة الإنتاج (خادم / سيرفر) ليكون متاحاً للمستخدمين النهائيين. تتضمن العملية إعداد الخوادم، تثبيت المتطلبات (requirements.txt)، تشغيل التطبيق في الخلفية وإعداد خادم الويب (مثل Nginx و Gunicorn).",
            "prototype": "pip freeze > requirements.txt\n# في السيرفر:\npip install -r requirements.txt\ngunicorn app:app",
            "parameters": "app:app يمثل اسم الملف (app.py) واسم كائن التطبيق داخل الملف لتشغيله عبر Gunicorn.",
            "return_value": "بعد النشر، يستجيب السيرفر لطلبات الـ HTTP من المستخدمين ويرجع محتوى التطبيق (HTML أو JSON).",
            "example": "# إعداد ملف requirements.txt\nFlask==2.0.1\ngunicorn==20.1.0\n\n# تشغيل التطبيق في السيرفر\ngunicorn -w 4 -b 0.0.0.0:8000 main:app"
        },
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
        }
    },
    {
        "lesson_slug": "python-95",
        "content": {
            "context": "كيف تتجنب مشكلة 'التطبيق يعمل على حاسوبي لكنه لا يعمل على السيرفر'؟ الجواب هو Docker.",
            "description": "دوكر (Docker) هو أداة تقوم بوضع تطبيقك وكل المتطلبات الخاصة به (مكتبات، إصدار بايثون، نظام تشغيل مبسط) في حاوية (Container) معزولة. هذه الحاوية تضمن لك أن التطبيق سيعمل بنفس الطريقة في أي مكان (على جهازك، أو جهاز زميلك، أو السيرفر).",
            "prototype": "# Dockerfile\nFROM python:3.9-slim\nWORKDIR /app\nCOPY . .\nRUN pip install -r requirements.txt\nCMD [\"python\", \"main.py\"]",
            "parameters": "في ملف الـ Dockerfile نمرر تعليمات بناء الصورة (Image)، مثل FROM (إصدار بايثون) و CMD (الأمر الذي يشغل التطبيق).",
            "return_value": "نتيجة تنفيذ Dockerfile هي صورة (Docker Image) يمكن تشغيلها كحاوية لترجع مخرجات تطبيقك.",
            "example": "# أمر بناء الصورة\n# docker build -t my-python-app .\n\n# أمر تشغيل الحاوية\n# docker run -d -p 8000:8000 my-python-app"
        },
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
        }
    },
    {
        "lesson_slug": "python-96",
        "content": {
            "context": "كيف تجعل تطبيقك يعمل على الإنترنت ومتاحاً للجميع 24 ساعة يومياً؟",
            "description": "الاستضافة السحابية (Cloud Hosting) تعني استئجار مساحة وموارد (CPU, RAM) من شركات كبرى مثل AWS، Google Cloud، أو Heroku لتشغيل تطبيقك، بدلاً من تشغيله على جهازك الذي قد ينطفئ. توفر السحابة خدمات متقدمة مثل قواعد البيانات المُدارة وخدمات التخزين مما يجعل التطبيق قابلاً للتوسع (Scalability).",
            "prototype": "# منصات مثل Heroku تستخدم ملف Procfile\nweb: gunicorn app:app",
            "parameters": "في الاستضافة نحدد الموارد المطلوبة: عدد المعالجات والذاكرة وحجم قواعد البيانات.",
            "return_value": "ينتج عن الاستضافة رابط (URL / IP) عام يمكن لأي شخص الدخول إليه لرؤية المشروع.",
            "example": "تخيل أنك ترفع كود بايثون إلى GitHub، ثم تقوم بربط المستودع بـ Heroku أو Render، المنصة ستقوم بتثبيت المكاتب تلقائياً وتشغيل التطبيق وإعطائك رابطاً."
        },
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
        }
    },
    {
        "lesson_slug": "python-97",
        "content": {
            "context": "قبل الدخول في مشاريع التخرج، نحتاج لمراجعة شاملة لربط كل المفاهيم في ذهنك.",
            "description": "هذه المراجعة النهائية تشمل ربط أساسيات لغة بايثون، المجموعات والقواميس، الدوال المتطورة، الكائنات والـ OOP، التعاون وإدارة الاستثناءات، قواعد البيانات، الكود النظيف، والنشر على السحابة مع Docker. هذا هو الحجر الأساس الذي ستعتمد عليه لبناء مشاريع قوية.",
            "prototype": "# دمج للمفاهيم الأساسية والمتقدمة في كود واحد\ndef process_data(data: list) -> dict:\n    try:\n        return {k: v for k, v in data}\n    except ValueError:\n        return {}",
            "parameters": "مراجعة كيفية عمل الـ Parameters والـ Type Hinting لتوضيح أنواع المدخلات.",
            "return_value": "المخرجات يجب أن تكون محددة ومعالجة بداخل كتلة Try-Except لتجنب توقف البرنامج.",
            "example": "class SystemMonitor:\n    def __init__(self, target):\n        self.target = target\n    \n    def ping(self):\n        # كود محاكى للتعامل مع الشبكة والدوال والأخطاء\n        pass"
        },
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
        }
    },
    {
        "lesson_slug": "python-98",
        "content": {
            "context": "حان الوقت لإثبات جدارتك. المشروع الأول سيكون بناء أداة تفاعلية سطرية أو تطبيق ويب أساسي لمعالجة البيانات.",
            "description": "في هذا المشروع الأول، ستبني 'مدير مهام ذكي' (Smart Task Manager) يستخدم الـ OOP، ويتصل بقاعدة بيانات (SQLite/PostgreSQL)، ويحتوي على ميزات إضافية وتصدير البيانات. الهدف هو قياس قدرتك على تحليل المتطلبات، هندسة الكود، وكتابته بشكل احترافي.",
            "prototype": "class TaskManager:\n    def add_task(self):\n        pass\n    def export_csv(self):\n        pass",
            "parameters": "ستتعامل مع مدخلات المستخدم من سطر الأوامر أو واجهة بسيطة وتتأكد من صحتها (Validation).",
            "return_value": "يعود التطبيق بنتيجة واضحة للمستخدم بعد إتمام المهام (مثلاً: تم إضافة المهمة بنجاح، أو تصدير التقرير).",
            "example": "# جزء من المشروع\ndef main():\n    db = Database()\n    manager = TaskManager(db)\n    manager.run_cli()\n\nif __name__ == \"__main__\":\n    main()"
        },
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
        }
    },
    {
        "lesson_slug": "python-99",
        "content": {
            "context": "مشروعك الثاني سيكون احترافياً بامتياز، وسيشمل النشر (Deployment) وواجهة برمجة تطبيقات (API).",
            "description": "في مشروع التخرج الثاني والأخير، ستبني 'نظام واجهة برمجة تطبيقات كامل' (RESTful API) باستخدام إطار عمل مثل FastAPI أو Flask. ستطبق فيها التوثيق الآلي، اتصال قاعدة بيانات متقدمة (ORM مثل SQLAlchemy)، حماية الروابط (Authentication)، ثم تقوم بوضع التطبيق في Docker ونشره على منصة سحابية.",
            "prototype": "from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get('/api/v1/resource')\ndef get_resource():\n    return {\"status\": \"success\"}",
            "parameters": "ستستقبل الـ API طلبات (Requests) من العميل على هيئة JSON وتتحقق منها.",
            "return_value": "ترجع الـ API استجابات قياسية (JSON Responses) مع رموز الحالة المناسبة (200 OK, 404 Not Found).",
            "example": "from pydantic import BaseModel\n\nclass Item(BaseModel):\n    name: str\n    price: float\n\n@app.post(\"/items/\")\ndef create_item(item: Item):\n    return {\"message\": \"Item created\", \"data\": item.dict()}"
        },
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
        }
    },
    {
        "lesson_slug": "python-100",
        "content": {
            "context": "وصلت إلى نهاية الرحلة الممتعة. ماذا بعد تعلم بايثون وكيف تستثمر هذا العلم؟",
            "description": "الخاتمة ومبروك التخرج! في هذا الدرس الأخير نناقش مساراتك المستقبلية كمطور بايثون، سواء كنت تتجه نحو تطوير الويب، الذكاء الاصطناعي، أتمتة الأنظمة، أو تحليل البيانات. سنستعرض كيفية تسويق نفسك، رفع مشاريعك على Github، وكيفية التحضير للمقابلات الشخصية واستلام الشهادة.",
            "prototype": "print('Congratulations! You are now a Python Developer.')\n\n# مسارات المستقبل\npaths = ['Web Dev', 'AI/ML', 'Data Science', 'Automation']",
            "parameters": "المدخلات في هذه المرحلة هي طموحك ووقتك.",
            "return_value": "مستقبل مهني مشرق إن شاء الله في مجالات التقنية العالية.",
            "example": "# خطتك القادمة\nplan = {\n  'Step 1': 'تحديث السيرة الذاتية (CV)',\n  'Step 2': 'رفع مشاريع التخرج على Github',\n  'Step 3': 'التقديم على وظائف أو عمل حر (Freelance)'\n}"
        },
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
        }
    }
]

file_path = r'C:\\Users\\khaled scorbion\\.gemini\\antigravity\\scratch\\svk-academy-nextjs\\batch8.json'
with open(file_path, 'w', encoding='utf-8') as f:
    json.dump(lessons, f, ensure_ascii=False, indent=2)
print("done")
