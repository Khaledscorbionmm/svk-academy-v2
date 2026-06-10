const { Pool } = require('pg');

const connectionString = 'postgresql://neondb_owner:npg_5j1fJvIkbVUa@ep-late-water-asl94ydd-pooler.c-4.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false }
});

const COURSE_TEMPLATES = [
  { title: 'أساسيات واحتراف لغة Python', category: 'python', level: 'beginner', instructor: 'خالد أحمد' },
  { title: 'تتطوير واجهات المستخدم باستخدام React', category: 'react', level: 'intermediate', instructor: 'أحمد محمد' },
  { title: 'أساسيات لغة JavaScript للمبتدئين', category: 'javascript', level: 'beginner', instructor: 'يوسف علي' },
  { title: 'تصميم وإدارة قواعد البيانات لغة SQL', category: 'database', level: 'beginner', instructor: 'سارة خالد' },
  { title: 'مقدمة في الذكاء الاصطناعي Python AI', category: 'ai', level: 'advanced', instructor: 'د. خالد سليم' },
  { title: 'احتراف نظام التشغيل والتحكم Linux & Bash', category: 'devops', level: 'beginner', instructor: 'حمزة عمر' },
  { title: 'إدارة الإصدارات والمشاريع Git & GitHub', category: 'devops', level: 'beginner', instructor: 'رنا أحمد' },
  { title: 'أساسيات لغة C++ للمبتدئين من الصفر', category: 'cpp', level: 'beginner', instructor: 'خالد أحمد' },
  { title: 'تطوير تطبيقات الهواتف الذكية Flutter', category: 'dart', level: 'intermediate', instructor: 'شادي كريم' },
  { title: 'برمجة وتصميم الألعاب ثنائية الأبعاد Unity', category: 'unity', level: 'intermediate', instructor: 'فادي ماهر' }
];

const COURSE_MODULES = {
  "أساسيات واحتراف لغة Python": [
    "أساسيات المدخلات والمخرجات",
    "المتغيرات وأنواع البيانات",
    "العمليات الحسابية والمنطقية",
    "الجمل الشرطية واتخاذ القرار",
    "حلقات التكرار والدوران",
    "الدوال وهيكلة الأكواد",
    "هياكل البيانات المتقدمة والقوائم",
    "التعامل مع الملفات والأخطاء",
    "البرمجة كائنية التوجه OOP",
    "المكتبات وتطبيقات عملية والمشروع"
  ],
  "تتطوير واجهات المستخدم باستخدام React": [
    "مقدمة لبيئة العمل وتثبيت React",
    "لغة JSX وعناصر واجهة المستخدم",
    "المكونات Components الثابتة والديناميكية",
    "تمرير الخصائص Props بين المكونات",
    "إدارة الحالة باستخدام useState",
    "التعامل مع التأثيرات الجانبية useEffect",
    "إدارة النماذج والمدخلات Forms",
    "الربط مع الخوادم وجلب البيانات fetch",
    "مفهوم الـ Routing وإدارة الصفحات",
    "المشروع المتكامل ونشر تطبيق React"
  ],
  "أساسيات لغة JavaScript للمبتدئين": [
    "أساسيات اللغة والطباعة في الكونسول",
    "تعريف المتغيرات let و const",
    "العمليات الرياضية ومعاملات الزيادة والنقصان",
    "الشروط والجمل الشرطية if و else",
    "حلقات التكرار for و while",
    "الدوال العادية ودوال السهم Arrow Functions",
    "المصفوفات Arrays والعمليات عليها",
    "الكائنات Objects والتعامل مع الخصائص",
    "التفاعل مع عناصر الصفحة DOM Manipulation",
    "الوعود Promises والعمليات غير المتزامنة async"
  ],
  "تصميم وإدارة قواعد البيانات لغة SQL": [
    "مقدمة وقواعد البيانات العلاقية",
    "إنشاء الجداول والتحكم بالهيكل DDL",
    "الاستعلامات البسيطة SELECT و AS",
    "تصفية البيانات باستخدام WHERE والروابط",
    "الترتيب والحد من النتائج ORDER BY",
    "الدوال التجميعية GROUP BY و HAVING",
    "ربط الجداول وإحضار البيانات JOINs",
    "إضافة وتحديث البيانات INSERT و UPDATE",
    "حفظ التغييرات وتطهير الجداول DELETE",
    "المشروع العملي وتصميم مخطط البيانات"
  ],
  "مقدمة في الذكاء الاصطناعي Python AI": [
    "مقدمة للذكاء الاصطناعي ومجالاته",
    "مكتبة NumPy للعمليات الرياضية والمصفوفات",
    "مكتبة Pandas لتحليل البيانات والـ DataFrames",
    "تجهيز وتنظيف البيانات Data Preprocessing",
    "التمثيل البياني للبيانات Matplotlib",
    "التعلم الخاضع للإشراف Supervised Learning",
    "خوارزميات التصنيف والاتحدار Regression",
    "التعلم غير الخاضع للإشراف Clustering",
    "مفهوم الشبكات العصبية والتعلم العميق",
    "المشروع العملي وبناء نموذج توقع متكامل"
  ],
  "احتراف نظام التشغيل والتحكم Linux & Bash": [
    "مقدمة ونظام التشغيل لينكس والطرفية",
    "أوامر التنقل وإدارة الملفات والمجلدات",
    "قراءة وعرض الملفات النصية cat و nano",
    "البحث وتصفية النصوص grep و find",
    "نظام الصلاحيات وتغيير الملكية chmod",
    "إدارة العمليات والبرامج في الخلفية",
    "أساسيات البرمجة النصية Bash Scripting",
    "المتغيرات والمدخلات في نصوص Bash",
    "الشروط والتكرار وأتمتة المهام البسيطة",
    "المشروع العملي وأتمتة النسخ الاحتياطي"
  ],
  "إدارة الإصدارات والمشاريع Git & GitHub": [
    "مقدمة لنظام التحكم بالإصدارات Git",
    "إعداد الهوية وتهيئة المستودع git init",
    "تتبع التغييرات والمراحل git add و commit",
    "مراجعة التاريخ وفروقات الأكواد git log",
    "إنشاء وإدارة الفروع git branch",
    "دمج الفروع وحل تداخلات الدمج conflicts",
    "الربط مع موقع GitHub والمستودعات البعيدة",
    "رفع وسحب التحديثات git push و pull",
    "التعاون البرمجي وطلبات الدمج Pull Requests",
    "المشروع النهائي وإدارة الإصدارات للمشروع"
  ],
  "أساسيات لغة C++ للمبتدئين من الصفر": [
    "مقدمة للغة C++ وتثبيت المترجم compiler",
    "الهيكل الأساسي للبرنامج وجملة الطباعة cout",
    "المتغيرات وأنواع البيانات الأساسية int/char",
    "العمليات الحسابية والمنطقية وأسبقيتها",
    "الجمل الشرطية واتخاذ القرار if و switch",
    "حلقات التكرار والدوران for و while",
    "الدوال وتمرير المعاملات بالقيمة والمرجع",
    "المصفوفات أحادية وثنائية الأبعاد Arrays",
    "المؤشرات Pointers والتعامل مع الذاكرة",
    "المشروع العملي وهيكلة الأكواد البرمجية"
  ],
  "تطوير تطبيقات الهواتف الذكية Flutter": [
    "مقدمة لبيئة عمل Flutter ولغة Dart",
    "أساسيات Dart والمتغيرات والعمليات",
    "الدوال والمجموعات Lists في لغة Dart",
    "مقدمة للـ Widgets وتنسيق النصوص",
    "تصميم واجهات المستخدم وترتيب العناصر Layout",
    "الواجهات التفاعلية وحفظ الحالة State",
    "التنقل بين الصفحات والـ Routing",
    "جلب البيانات والاتصال بـ APIs الخارجية",
    "مفهوم إدارة الحالة State Management",
    "المشروع المتكامل وتصدير التطبيق للمتاجر"
  ],
  "برمجة وتصميم الألعاب ثنائية الأبعاد Unity": [
    "مقدمة لمحرك الألعاب Unity والواجهة",
    "أساسيات لغة C# وكتابة أول سكريبت لعبة",
    "التحكم في الكائنات GameObjects ومواقعها",
    "الفيزياء والتصادمات ثنائية الأبعاد Physics 2D",
    "الحركة والتحكم باللاعب Player Movement",
    "تصميم المراحل والخرائط Tilemap 2D",
    "تصميم القوائم وواجهة المستخدم UI Canvas",
    "المؤثرات الصوتية والموسيقى Audio Source",
    "الأنيميشن وتحريك الكائنات والشخصيات",
    "المشروع المتكامل وتصدير وتشغيل اللعبة"
  ]
};

const MODULE_KEYWORDS = {
  "أساسيات واحتراف لغة Python": [
    ["print()", "+", "#", "end", "sep", "\\n", "\\t", "'''", "\\\"", "*"],
    ["=", "str", "int", "float", "bool", "type()", "int()", "float()", "str()", "Reassignment"],
    ["+", "-", "*", "/", "//", "%", "**", "==", "!=", "and"],
    ["if", "else", "elif", "Nested if", "and/or", "not", "in", "not in", "is", "is not"],
    ["while", "for", "range()", "range(step)", "break", "continue", "loop else", "Nested loops", "pass", "infinite loop"],
    ["def", "Arguments", "return", "Default args", "Multiple returns", "Local scope", "Global scope", "lambda", "Docstrings", "Recursion"],
    ["list", "List index", "append()", "remove()", "sort()", "dict", "dict values", "set", "tuple", "len()"],
    ["open()", "read()", "write()", "close()", "with open", "try/except", "ValueError", "finally", "raise", "custom exception"],
    ["class", "object", "__init__", "self", "methods", "inheritance", "overriding", "encapsulation", "polymorphism", "isinstance()"],
    ["import", "math", "random", "datetime", "json", "pip", "PEP 8", "testing", "calculator", "final project"]
  ],
  "تتطوير واجهات المستخدم باستخدام React": [
    ["npm init", "npx create-react-app", "JSX", "ReactDOM.render()", "Virtual DOM", "React.createElement()", "index.js", "App.js", "import React", "React.StrictMode"],
    ["JSX element", "JSX attributes", "className", "inline styles", "JSX curly braces", "fragments", "conditional rendering", "map() in JSX", "key prop", "JSX comments"],
    ["Function Component", "Class Component", "Nested components", "Component return", "export default", "Reusable component", "Component structure", "import component", "UI rendering", "composition"],
    ["props", "props.children", "Destructuring props", "Default props", "PropTypes", "Read-only props", "Passing functions", "Callback props", "Object props", "Dynamic props"],
    ["useState()", "State setter", "Initial state", "Functional update", "State array/object", "Multiple states", "Lifting state up", "Controlled inputs", "Form state", "Reset state"],
    ["useEffect()", "Dependency array", "Cleanup function", "API call on mount", "State synchronization", "Infinite loops", "Multiple effects", "Custom Hooks intro", "useMemo()", "useCallback()"],
    ["onClick", "onChange", "onSubmit", "Event object (e)", "preventDefault()", "Event handler", "Binding handlers", "State binding", "Dynamic inputs", "Validation"],
    ["Input value", "TextArea", "Select option", "Checkbox/Radio", "Form submit", "Form validation", "Formik/React Hook Form", "Multi-step form", "Form reset", "Error feedback"],
    ["fetch() in React", "Axios", "Loading state", "Error state", "Async-Await", "Data display", "Post request", "Delete request", "JSON placeholder", "Caching data"],
    ["Production build", "Vercel deploy", "Netlify deploy", "Performance audit", "Code splitting", "Lazy loading", "Suspense", "SEO in React", "PWA React", "Final project"]
  ],
  "أساسيات لغة JavaScript للمبتدئين": [
    ["console.log()", "console.error()", "Comments (//)", "Comments (/* */)", "alert()", "confirm()", "prompt()", "document.write()", "Syntax", "Semicolon"],
    ["var", "let", "const", "Scope difference", "Hoisting", "Primitive types", "Reference types", "typeof operator", "Null vs Undefined", "Variable update"],
    ["+", "-", "*", "/", "%", "++ / --", "+= / -=", "==", "===", "!="],
    ["if", "else", "else if", "Nested if", "Switch case", "Logical &&", "Logical ||", "Logical !", "Ternary operator", "Truthy/Falsy"],
    ["for loop", "while loop", "do-while loop", "break", "continue", "for...of", "for...in", "Infinite loop", "Nested loop", "Loop counter"],
    ["function", "Parameters", "return value", "Local variables", "Global variables", "Arrow function", "IIFE", "Callback function", "Rest parameters", "Default values"],
    ["Array declaration", "Index", "length", "push() / pop()", "shift() / unshift()", "indexOf()", "slice()", "splice()", "concat()", "join()"],
    ["Object literal", "Properties", "Methods", "this keyword", "Constructor function", "new keyword", "Object.keys()", "Object.values()", "JSON.stringify()", "JSON.parse()"],
    ["getElementById()", "querySelector()", "textContent", "innerHTML", "style", "addEventListener()", "click event", "input event", "classList.add()", "classList.toggle()"],
    ["setTimeout()", "setInterval()", "Promise", "resolve/reject", "then/catch", "async / await", "fetch()", "JSON data", "localStorage", "SessionStorage"]
  ],
  "تصميم وإدارة قواعد البيانات لغة SQL": [
    ["RDBMS", "SQL commands", "Tables", "Rows & Columns", "Datatypes", "Primary Key", "Foreign Key", "NULL values", "Constraints", "DB engine"],
    ["CREATE DATABASE", "DROP DATABASE", "CREATE TABLE", "DROP TABLE", "ALTER TABLE", "ADD COLUMN", "RENAME COLUMN", "NOT NULL constraint", "UNIQUE constraint", "CHECK constraint"],
    ["SELECT", "SELECT DISTINCT", "AS (Alias)", "SELECT ALL", "Arithmetic in SELECT", "Concatenation", "Constants in SELECT", "Case sensitivity", "SELECT TOP", "LIMIT"],
    ["WHERE", "AND", "OR", "NOT", "IN", "BETWEEN", "LIKE (Wildcards)", "IS NULL", "IS NOT NULL", "Logical operations"],
    ["ORDER BY ASC", "ORDER BY DESC", "Multiple ORDER BY", "LIMIT / OFFSET", "Fetch first", "Top rows", "Page sorting", "Nulls sorting", "Case-insensitive order", "Random sorting"],
    ["COUNT()", "SUM()", "AVG()", "MIN() / MAX()", "GROUP BY", "HAVING", "GROUP BY multiple", "WHERE vs HAVING", "Count distinct", "Aggregate expressions"],
    ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN", "ON clause", "Self Join", "Cross Join", "Multiple Joins", "Aliases in Joins", "Join condition"],
    ["INSERT INTO", "INSERT multiple", "INSERT default", "UPDATE", "UPDATE multiple rows", "SET clause", "Safe UPDATE (WHERE)", "Subquery in UPDATE", "Transaction intro", "COMMIT / ROLLBACK"],
    ["DELETE", "TRUNCATE TABLE", "DELETE vs TRUNCATE", "Safe DELETE (WHERE)", "Subquery in DELETE", "Cascading delete", "Foreign Key violation", "Soft Delete", "Purging logs", "Indexes intro"],
    ["CREATE INDEX", "DROP INDEX", "Indexes performance", "Views", "CREATE VIEW", "Subqueries intro", "Nested Subqueries", "EXISTS operator", "Database normalization", "Final DB project"]
  ],
  "مقدمة في الذكاء الاصطناعي Python AI": [
    ["AI concepts", "Machine Learning", "Deep Learning", "Data Science", "Python for AI", "SciPy", "Anaconda", "Jupyter Notebook", "Supervised intro", "Unsupervised intro"],
    ["np.array()", "Array shape", "Array reshape", "np.zeros() / np.ones()", "np.arange()", "Array indexing", "Slicing", "Vector operations", "Dot product", "np.random"],
    ["pd.DataFrame()", "pd.Series()", "read_csv()", "df.head() / df.tail()", "df.info()", "df.describe()", "df.isnull()", "df.dropna()", "df.fillna()", "df.groupby()"],
    ["Data cleaning", "Feature scaling", "MinMaxScaler", "StandardScaler", "One-Hot Encoding", "LabelEncoder", "train_test_split", "Features vs Target", "Missing values", "Outliers"],
    ["plt.plot()", "plt.scatter()", "plt.bar()", "plt.hist()", "plt.xlabel()", "plt.ylabel()", "plt.title()", "plt.legend()", "plt.show()", "Subplots"],
    ["Regression", "Classification", "Model training", "Model evaluation", "Mean Squared Error", "Accuracy score", "Confusion matrix", "Scikit-Learn", "model.fit()", "model.predict()"],
    ["Linear Regression", "Logistic Regression", "Decision Trees", "Random Forest", "Support Vector Machines", "K-Nearest Neighbors", "Overfitting", "Underfitting", "Cross-validation", "Hyperparameters"],
    ["K-Means Clustering", "np.clusters", "Elbow method", "Hierarchical clustering", "Dendrogram", "PCA (Reduction)", "Anomaly detection", "Recommendation system", "Collaborative filtering", "Content-based filtering"],
    ["Artificial Neurons", "Activation functions", "Sigmoid", "ReLU", "Neural Network layers", "Loss function", "Gradient Descent", "Backpropagation", "Epochs", "Keras / TensorFlow"],
    ["Model export", "pickle / joblib", "Web deployment intro", "Streamlit", "API inference", "AI Ethics", "Bias in AI", "Future of ML", "Final AI project", "AI certification"]
  ],
  "احتراف نظام التشغيل والتحكم Linux & Bash": [
    ["GNU/Linux", "Kernel vs Shell", "Terminal / Console", "Bash prompt", "ls command", "pwd", "whoami", "hostname", "uname", "clear"],
    ["mkdir", "rmdir", "touch", "rm", "rm -rf", "cp", "mv", "ln -s (Symlink)", "Absolute path", "Relative path"],
    ["cat", "less / more", "head / tail", "tail -f (live logs)", "nano editor", "vim editor", "echo", "redirect > (overwrite)", "redirect >> (append)", "pipe |"],
    ["grep", "grep -i", "grep -r", "find", "locate", "wc (word count)", "sort", "uniq", "awk intro", "sed intro"],
    ["chmod", "chown", "Read/Write/Execute", "Numeric permissions", "Symbolic permissions", "sudo", "root user", "passwd", "useradd", "groupadd"],
    ["ps", "top / htop", "kill", "kill -9", "Background job (&)", "jobs", "fg / bg", "systemctl status", "systemctl start/stop", "cron jobs (crontab)"],
    ["#!/bin/bash", "Execution ./script.sh", "Variables", "User input (read)", "Command line arguments", "$1, $2, $@", "Exit status $?", "Arithmetic in Bash", "expr", "$((...))"],
    ["if statement", "comparison operators", "-eq, -ne, -gt", "string comparison", "file test operators", "-f, -d", "case statement", "else clause", "fi", "Bash logical AND/OR"],
    ["while loop", "until loop", "for loop", "looping arrays", "break", "continue", "Infinite loop Bash", "Sleep command", "Logger", "Function definition"],
    ["Backup script", "rsync", "tar archive", "gzip compression", "Automatic scheduling", "Environment variables", "PATH variable", ".bashrc config", "SSH remote connect", "Final bash project"]
  ],
  "إدارة الإصدارات والمشاريع Git & GitHub": [
    ["VCS (Version Control)", "Centralized vs Distributed", "Git installation", "git --version", "git config global", "username config", "email config", "git help", "local repository", "git architecture"],
    ["git init", "git status", "Three States", "Working Directory", "Staging Area", "Git Directory", ".git folder", "git config local", "git status short", "git ignore"],
    ["git add", "git add .", "git commit", "git commit -m", "git commit -am", "Commit hash", "Commit message guidelines", "git diff staging", "git rm", "git mv"],
    ["git log", "git log oneline", "git log graph", "git diff", "git show", "git checkout file", "git restore", "git reset mixed", "git reset hard", "git revert"],
    ["git branch", "git checkout branch", "git switch", "git branch -d", "git branch -m", "HEAD pointer", "Feature branching", "git branch list", "git branch merged", "Fast-forward merge"],
    ["git merge", "Three-way merge", "Merge conflict", "Conflict markers", "Resolving conflict", "git merge abort", "git rebase", "git mergetool", "Merge commit", "git cherry-pick"],
    ["git remote add", "git remote -v", "git remote rename", "git remote remove", "GitHub account", "SSH keys", "git clone", "git clone depth", "git remote show", "Default branch main"],
    ["git push", "git push upstream", "git fetch", "git pull", "git pull rebase", "Tracking branches", "Remote branches", "git branch -r", "Stashing (git stash)", "git stash pop"],
    ["Pull Request", "Code Review", "PR description", "Assignees / Reviewers", "Merging PR", "Forking repository", "Upstream synchronization", "GitHub Issues", "GitHub Projects", "GitHub Pages"],
    ["Git tags", "Releasing versions", "Git reflog", "Git clean", "Collaborative workflow", "Git Hook intro", "GitHub Actions intro", "Git best practices", "Final Git project", "Git cheat sheet"]
  ],
  "أساسيات لغة C++ للمبتدئين من الصفر": [
    ["C++ compiler", "g++ compiler", "IDE setup", "Main function", "cout <<", "cin >>", "#include <iostream>", "using namespace std", "Comments", "Compilation error"],
    ["Variables", "int", "double / float", "char", "string C++", "bool", "Constants", "Variable initialization", "Data overflow", "Memory size sizeof"],
    ["+", "-", "*", "/", "%", "Increment ++", "Decrement --", "Logical Operators", "Relational Operators", "Bitwise Operators"],
    ["if statement", "else", "else if", "Nested if", "Switch-case", "Ternary operator", "Logical AND &&", "Logical OR ||", "Logical NOT !", "Code blocks"],
    ["for loop", "while loop", "do-while loop", "break", "continue", "Nested loops", "Infinite loop", "Loop conditions", "Loop iterator", "Loop performance"],
    ["Function declaration", "Function definition", "Parameters", "Return types", "Call by value", "Call by reference", "Function overloading", "Scope", "Recursion", "Inline functions"],
    ["Array declaration", "Array indexing", "Array size", "Multi-dimensional array", "String object", "String methods", "Vector container", "Vector methods", "Sorting arrays", "Array loop"],
    ["Pointers", "Address operator &", "Dereference operator *", "Null pointer", "Pointer arithmetic", "Pointers and arrays", "Dynamic memory", "new / delete", "Memory leaks", "References"],
    ["class definition", "object creation", "Access specifiers", "public / private", "Constructor", "Destructor", "Inheritance", "Polymorphism", "Encapsulation", "Abstract class"],
    ["File streams", "ifstream", "ofstream", "Error handling", "Header files", "Templates", "STL containers", "Debugging C++", "Final C++ project", "C++ best practices"]
  ],
  "تطوير تطبيقات الهواتف الذكية Flutter": [
    ["Flutter SDK", "Dart SDK", "Android Studio", "VS Code Flutter", "Flutter doctor", "Simulator / Emulator", "flutter create", "pubspec.yaml", "main.dart", "Hot Reload"],
    ["Dart syntax", "var / dynamic", "final / const", "Data types Dart", "Numbers / Strings", "Booleans", "List / Map Dart", "String interpolation", "Null safety", "Late variables"],
    ["Dart Functions", "Named parameters", "Optional parameters", "Arrow syntax", "Dart classes", "Dart constructors", "Dart inheritance", "Dart mixins", "Asynchronous Dart", "Future / async"],
    ["Widget tree", "StatelessWidget", "StatefulWidget", "build method", "BuildContext", "MaterialApp", "Scaffold", "AppBar", "Center Widget", "Text Widget"],
    ["Container Widget", "Padding", "Margin", "Row", "Column", "Stack", "ListView", "GridView", "SizedBox", "Align / Positioned"],
    ["setState()", "TextEditingController", "TextField", "ElevatedButton", "IconButton", "GestureDetector", "InkWell", "Checkbox / Switch", "Slider", "SnackBar"],
    ["Navigator.push", "Navigator.pop", "Named routes", "Passing arguments", "MaterialPageRoute", "TabController", "TabBar", "Drawer Widget", "BottomNavigationBar", "Hero animation"],
    ["http package", "get request", "post request", "jsonDecode()", "FutureBuilder", "ListView.builder", "Loading spinner", "Error handling API", "API key security", "Caching API data"],
    ["State management intro", "Provider package", "ChangeNotifier", "Consumer Widget", "MultiProvider", "BLoC pattern intro", "Riverpod intro", "Global state", "Shared Preferences", "Local DB SQLite"],
    ["Flutter build apk", "iOS build ipa", "Launcher icons", "Splash screen", "App permissions", "Vercel deploy web", "Play Store setup", "App Store setup", "Final Flutter project", "Flutter best practices"]
  ],
  "برمجة وتصميم الألعاب ثنائية الأبعاد Unity": [
    ["Unity Hub", "Unity Editor", "Scene View", "Game View", "Hierarchy", "Project window", "Inspector", "Console window", "Creating project", "GameObjects"],
    ["MonoBehaviour", "Start()", "Update()", "FixedUpdate()", "C# classes Unity", "Debug.Log()", "Variables in C#", "Serializefield", "C# functions", "DeltaTime"],
    ["Transform", "Vector3", "Vector2", "Translate()", "Rotate()", "Position & Rotation", "Scale", "Parenting GameObjects", "Instantiate()", "Destroy()"],
    ["Rigidbody 2D", "Collider 2D", "BoxCollider 2D", "CircleCollider 2D", "OnCollisionEnter2D", "OnTriggerEnter2D", "Physics Materials 2D", "Gravity Scale", "Forces AddForce", "Is Trigger"],
    ["Input.GetAxis", "Input.GetKeyDown", "WASD / Arrows input", "Jump logic", "MovePosition", "Velocity", "Flip Sprite", "Clamp position", "Mobile controls", "Keyboard vs Controller"],
    ["2D Sprite", "Sprite Renderer", "Sorting Layers", "Tilemap", "Grid system", "Tile Palette", "Rule Tiles", "2D Camera", "Cinemachine 2D", "Pixel Perfect Camera"],
    ["UI Canvas", "UI Image", "UI Text (TMP)", "UI Button", "Button Listeners", "Score manager", "Game Over screen", "Pause Menu", "SceneManager.LoadScene", "UI Scaling"],
    ["Audio Source", "Audio Clip", "Audio Listener", "PlayOneShot()", "Volume control", "Background music", "Sound effects SFX", "Audio Mixer", "Audio triggers", "Mute toggle"],
    ["Animator Controller", "Animation Window", "Spritesheet slicing", "Transitions", "Parameters (Trigger/Bool)", "Blend Trees", "State Machine", "Scripting animations", "Flip sprite animator", "Loop animation"],
    ["Build Settings", "Exporting PC/WebGL", "WebGL hosting", "Game optimization", "Prefabs", "Layer collision matrix", "Game loop manager", "Saving highscores", "Final 2D game project", "Unity best practices"]
  ]
};

// Programmatic Generator covering all 1000 lessons uniquely
function generateLessonDetails(courseTitle, category, keyword, moduleName, lessonIndex) {
  let story = "";
  let explanationText = "";
  let keyPoints = [];
  let warningText = "";
  let codeTemplate = "";
  let practiceExpected = "";
  let practiceInstructions = "";
  let codeExplanation = "";
  let quizQuestions = [];

  const kw = keyword.trim();
  const kwLower = kw.toLowerCase();

  // 1. PYTHON COURSE
  if (category === 'python') {
    story = `تخيل أنك تعمل في شركة برمجيات وتطلب منك الإدارة أداة سريعة للتحكم بمحرك المخرجات ومعالجة المفهوم (${kw}). هذه الأداة ستكون عصب الكود البرمجي اليوم لأنها تؤثر مباشرة على كفاءة تخزين البيانات وسرعة المعالجة.`;
    
    explanationText = `في لغة بايثون، يعتبر المفهوم <strong>${kw}</strong> ركيزة أساسية. عندما يمر مفسر بايثون (Python Interpreter) على هذا السطر، فإنه يقوم بتهيئة بيئة التشغيل وتخصيص مساحة في الذاكرة العشوائية لتلائم متطلبات التشغيل الفورية.`;
    
    keyPoints = [
      `الأداة الحالية: تساهم مباشرة في تهيئة منطق البرمجة ولها حساسية عالية لحالة الأحرف.`,
      `أفضل الممارسات: كتابة أسماء المتغيرات والأوامر بشكل معبر يسهل على المطورين الآخرين قراءته وفهمه.`,
      `كفاءة الذاكرة: توفر بايثون إدارة ديناميكية للذاكرة للتخلص من الكائنات غير المستخدمة تلقائياً.`
    ];

    warningText = `احذر بشدة من كتابة الأداة البرمجية دون مسافات بادئة (Indentation) صحيحة في لغة بايثون، حيث أن إغفال المسافات البادئة يؤدي فوراً لظهور خطأ من النوع IndentationError وتوقف سير البرنامج.`;

    if (kwLower === 'print()') {
      codeTemplate = `print("مرحباً بك في لغة بايثون")`;
      practiceExpected = `مرحباً بك في لغة بايثون`;
      practiceInstructions = `اكتب دالة الطباعة print لطباعة الجملة "مرحباً بك في لغة بايثون" باللغة العربية بدقة.`;
      codeExplanation = `نستخدم دالة print المدمجة لعرض المخرجات للمستخدم على لوحة الكونسول.`;
    } else if (kw === '+') {
      codeTemplate = `print("أكاديمية" + " " + "SVK")`;
      practiceExpected = `أكاديمية SVK`;
      practiceInstructions = `اكتب كود بايثون لدمج كلمتي "أكاديمية" و "SVK" مع ترك مسافة بينهما باستخدام المعامل (+).`;
      codeExplanation = `المعامل (+) يقوم بعملية دمج النصوص (String Concatenation) عند تطبيقه على قيم نصية.`;
    } else if (kw === '#') {
      codeTemplate = `# هذا تعليق توضيحي\nprint("مرحبا")`;
      practiceExpected = `مرحبا`;
      practiceInstructions = `اكتب تعليقاً يبدأ برمز # واطبع كلمة "مرحبا".`;
      codeExplanation = `الرمز # يمثل تعليقاً في بايثون ويتم تجاهله تماماً بواسطة مفسر اللغة أثناء التشغيل.`;
    } else if (kw === 'end') {
      codeTemplate = `print("سلسلة", end=" - ")\nprint("مستمرة")`;
      practiceExpected = `سلسلة - مستمرة`;
      practiceInstructions = `استخدم الوسيط end=" - " في دالة الطباعة الأولى لتفادي الانتقال لسطر جديد.`;
      codeExplanation = `الوسيط end يحدد الرمز المطبوع في نهاية دالة print بدلاً من سطر جديد افتراضي.`;
    } else if (kw === 'sep') {
      codeTemplate = `print("Python", "JS", "C++", sep=" | ")`;
      practiceExpected = `Python | JS | C++`;
      practiceInstructions = `اطبع اللغات الثلاث مفصولة برمز الأنبوب والمسافات " | " باستخدام وسيط sep.`;
      codeExplanation = `الوسيط sep (separator) يحدد الفاصل النصي بين المتغيرات المتعددة الممررة لدالة الطباعة.`;
    } else if (kw === '\\n') {
      codeTemplate = `print("السطر الأول\\nالسطر الثاني")`;
      practiceExpected = `السطر الأول\nالسطر الثاني`;
      practiceInstructions = `اطبع نصين على سطرين مختلفين باستخدام رمز السطر الجديد \\n داخل جملة الطباعة.`;
      codeExplanation = `الرمز المهرّب \\n يرمز إلى سطر جديد (Newline character) لتقسيم المخرجات.`;
    } else if (kw === '=') {
      codeTemplate = `x = 369\nprint(x)`;
      practiceExpected = `369`;
      practiceInstructions = `عرّف متغير x وأسند له القيمة 369 ثم اطبع قيمته.`;
      codeExplanation = `يستخدم معامل اليساوي (=) لتعيين وإسناد القيم للمتغيرات في الذاكرة.`;
    } else if (kw === 'str' || kw === 'str()') {
      codeTemplate = `x = str(100)\nprint("الرقم هو: " + x)`;
      practiceExpected = `الرقم هو: 100`;
      practiceInstructions = `قم بتحويل الرقم 100 إلى نص لدمجه بنجاح مع عبارة نصية أخرى.`;
      codeExplanation = `تقوم دالة str() بتحويل البيانات غير النصية إلى نصوص لتفادي أخطاء النوع.`;
    } else if (kw === 'int' || kw === 'int()') {
      codeTemplate = `x = int("50")\nprint(x + 10)`;
      practiceExpected = `60`;
      practiceInstructions = `حوّل النص الرقمي "50" إلى رقم صحيح واجمع عليه 10.`;
      codeExplanation = `تستخدم دالة int() لتحويل النصوص والأرقام العشرية إلى أعداد صحيحة.`;
    } else if (kw === 'float' || kw === 'float()') {
      codeTemplate = `x = float("3.14")\nprint(x + 1.0)`;
      practiceExpected = `4.14`;
      practiceInstructions = `حوّل النص "3.14" لرقم عشري واجمع عليه 1.0.`;
      codeExplanation = `تستخدم دالة float() لتحويل البيانات النصية المتوافقة إلى أعداد كسرية.`;
    } else if (kw === 'bool') {
      codeTemplate = `is_active = True\nprint(is_active)`;
      practiceExpected = `True`;
      practiceInstructions = `عرّف متغيراً منطقياً يحمل القيمة True واطبعه.`;
      codeExplanation = `النوع bool يحمل إحدى القيمتين منطقيتين فقط: True أو False.`;
    } else if (kw === 'type()') {
      codeTemplate = `x = 5.5\nprint(type(x))`;
      practiceExpected = `<class 'float'>`;
      practiceInstructions = `استخدم دالة type لمعرفة صنف المتغير 5.5 واطبعه.`;
      codeExplanation = `الدالة type تعود بنوع الصنف (Class) الأصلي للبيانات المخزنة في المتغير.`;
    } else if (kw === 'if') {
      codeTemplate = `age = 20\nif age >= 18:\n    print("مقبول")`;
      practiceExpected = `مقبول`;
      practiceInstructions = `اكتب شرطاً برمجياً يفحص إذا كان age أكبر من أو يساوي 18 ويطبع "مقبول".`;
      codeExplanation = `جملة if الشرطية تتحقق من صحة التعبير المنطقي لتحديد إمكانية تشغيل البلوك التالي.`;
    } else if (kw === 'else') {
      codeTemplate = `score = 50\nif score >= 60:\n    print("ناجح")\nelse:\n    print("راسب")`;
      practiceExpected = `راسب`;
      practiceInstructions = `اكتب كوداً يطبع "ناجح" إذا كان score أكبر أو يساوي 60 وإلا يطبع "راسب".`;
      codeExplanation = `جملة else تغطي الخيار البديل عند عدم تحقق أي شرط من الشروط السابقة.`;
    } else if (kw === 'elif') {
      codeTemplate = `x = 0\nif x > 0:\n    print("موجب")\nelif x < 0:\n    print("سالب")\nelse:\n    print("صفر")`;
      practiceExpected = `صفر`;
      practiceInstructions = `استخدم جمل if و elif و else لفلترة قيمة x والطباعة.`;
      codeExplanation = `نستخدم elif (اختصار else if) لفحص شروط فرعية متعددة متتالية.`;
    } else if (kw === 'while') {
      codeTemplate = `i = 1\nwhile i <= 3:\n    print(i)\n    i += 1`;
      practiceExpected = `1\n2\n3`;
      practiceInstructions = `اكتب حلقة while تطبع الأرقام من 1 إلى 3 وتأكد من زيادة العداد.`;
      codeExplanation = `حلقة while تكرر تشغيل الكود طالما أن الشرط المرفق يعود بالقيمة المنطقية True.`;
    } else if (kw === 'for') {
      codeTemplate = `for num in [1, 2, 3]:\n    print(num)`;
      practiceExpected = `1\n2\n3`;
      practiceInstructions = `اكتب حلقة for تمر على عناصر القائمة [1, 2, 3] وتطبعها.`;
      codeExplanation = `حلقة for تُستعمل للمرور على عناصر المجموعات مثل القوائم أو سلاسل الحروف بتكرار ثابت.`;
    } else if (kw === 'range()') {
      codeTemplate = `for i in range(3):\n    print(i)`;
      practiceExpected = `0\n1\n2`;
      practiceInstructions = `استخدم حلقة for مع دالة range(3) لطباعة الأرقام من 0 إلى 2 بالتوالي.`;
      codeExplanation = `تولد range(n) سلسلة أرقام متتالية تبدأ من الصفر وحتى n-1 بشكل تلقائي وسريع.`;
    } else if (kw === 'break') {
      codeTemplate = `for i in range(5):\n    if i == 2:\n        break\n    print(i)`;
      practiceExpected = `0\n1`;
      practiceInstructions = `استخدم جملة break لإيقاف حلقة التكرار فوراً عندما تصل قيمة العداد إلى 2.`;
      codeExplanation = `الأمر break ينهي عمل حلقة التكرار فوراً ويخرج بالبرنامج إلى السطر الذي يليها مباشرة.`;
    } else if (kw === 'continue') {
      codeTemplate = `for i in range(4):\n    if i == 2:\n        continue\n    print(i)`;
      practiceExpected = `0\n1\n3`;
      practiceInstructions = `تخطى طباعة الرقم 2 في الحلقة التكرارية باستخدام الأمر continue.`;
      codeExplanation = `يستخدم continue لتخطي الدورة الحالية للحلقة والانتقال فوراً للمرحلة أو الدورة التالية دون إيقاف التكرار بالكامل.`;
    } else if (kw === 'def') {
      codeTemplate = `def greet(name):\n    return "مرحباً " + name\n\nprint(greet("خالد"))`;
      practiceExpected = `مرحباً خالد`;
      practiceInstructions = `عرّف دالة greet تستقبل وسيطاً باسم name وتعود بعبارة ترحيب مدمجة مع الاسم.`;
      codeExplanation = `الكلمة المفتاحية def تعلن عن دالة برمجية جديدة تضم سلوكاً قابلاً للإستدعاء وإعادة الاستخدام.`;
    } else if (kw === 'return') {
      codeTemplate = `def double(x):\n    return x * 2\n\nprint(double(10))`;
      practiceExpected = `20`;
      practiceInstructions = `اكتب دالة تعود بضعف الرقم الممرر لها باستخدام جملة return.`;
      codeExplanation = `البيان return ينهي عمل الدالة ويرسل القيمة الناتجة لمكان الاستدعاء البرمجي.`;
    } else if (kw === 'list') {
      codeTemplate = `my_list = [10, 20, 30]\nprint(my_list[0])`;
      practiceExpected = `10`;
      practiceInstructions = `أنشئ قائمة باسم my_list تضم الأرقام [10, 20, 30] واطبع العنصر الأول.`;
      codeExplanation = `القائمة (List) هي هيكل بيانات مرن لتخزين مصفوفة مرتبة من الكائنات داخل قوسين مربعين [].`;
    } else if (kw === 'append()') {
      codeTemplate = `nums = [1, 2]\nnums.append(3)\nprint(nums)`;
      practiceExpected = `[1, 2, 3]`;
      practiceInstructions = `أضف الرقم 3 لنهاية القائمة nums باستخدام دالة append المدمجة.`;
      codeExplanation = `دالة append() تضيف كائناً جديداً إلى نهاية القائمة الأصلية مباشرة دون إنشاء قائمة جديدة.`;
    } else if (kw === 'dict') {
      codeTemplate = `user = {"name": "خالد", "age": 20}\nprint(user["name"])`;
      practiceExpected = `خالد`;
      practiceInstructions = `أنشئ قاموساً باسم user يضم المفاتيح name و age واطبع الاسم.`;
      codeExplanation = `القاموس (Dictionary) يخزن البيانات في شكل مفاتيح وقيم فريدة مفصولة بنقطتين فوق بعض داخل {}.`;
    } else if (kw === 'try/except') {
      codeTemplate = `try:\n    val = int("abc")\nexcept ValueError:\n    print("خطأ تحويل")`;
      practiceExpected = `خطأ تحويل`;
      practiceInstructions = `اكتب جملة try/except لالتقاط الخطأ الناتج عن تحويل نص غير رقمي لعدد صحيح.`;
      codeExplanation = `نستخدم try/except لالتقاط ومعالجة الاستثناءات البرمجية ومنع البرنامج من التعطل والانهيار.`;
    } else if (kw === 'class') {
      codeTemplate = `class Car:\n    def __init__(self, brand):\n        self.brand = brand\n\nc = Car("Toyota")\nprint(c.brand)`;
      practiceExpected = `Toyota`;
      practiceInstructions = `عرّف فئة (class) باسم Car تضم دالة البناء لتعيين ماركة السيارة brand واطبعها.`;
      codeExplanation = `الكلمة class تعرف قالباً برمجياً (Blueprint) لبناء الكائنات وفقاً لخصائص ووظائف محددة.`;
    } else if (kw === 'import') {
      codeTemplate = `import math\nprint(math.sqrt(16))`;
      practiceExpected = `4.0`;
      practiceInstructions = `استورد مكتبة الرياضيات math واطبع الجذر التربيعي للرقم 16 باستخدام دالة sqrt.`;
      codeExplanation = `الأمر import يستدعي مكتبات أو ملفات بايثون خارجية لتوظيف دوالها الجاهزة بكودك الحالي.`;
    } else {
      // General dynamic python mapping
      codeTemplate = `print("تطبيق المفهوم: ${kw}")`;
      practiceExpected = `تطبيق المفهوم: ${kw}`;
      practiceInstructions = `اطبع رسالة تأكيد لتفعيل المفهوم (${kw}) في لغة بايثون.`;
      codeExplanation = `يوضح الكود طريقة عمل المتغيرات والطباعة لتطبيق وتفعيل المفهوم (${kw}).`;
    }

    quizQuestions = [
      {
        question: `ما هي الوظيفة الأساسية للمفهوم "${kw}" في بايثون؟`,
        options: [
          'تنظيم منطق الكود وتسهيل بناء المشروع وهندسته بشكل صحيح',
          'حذف الأكواد البرمجية نهائياً من الذاكرة والقرص الصلب',
          'التعامل مع ملفات نظام التشغيل وتحديث الهاردوير للمخدم',
          'لا توجد أي وظيفة مفيدة لهذا المفهوم'
        ],
        correctAnswer: 0
      },
      {
        question: `أي مما يلي يمثل بناء الجملة الصحيح لـ "${kw}"؟`,
        options: [
          `استدعاؤه وكتابته بدقة تامة مع مراعاة حالة الأحرف (Case Sensitivity)`,
          'كتابته بأحرف كبيرة فقط لضمان عمله',
          'وضعه داخل تعليق ليقوم المفسر بتشغيله',
          'كتابته بشكل عشوائي دون الحاجة لترتيب الأقواس'
        ],
        correctAnswer: 0
      }
    ];
  }

  // 2. REACT COURSE
  else if (category === 'react') {
    story = `بصفتك مطور واجهات متكامل، طلب العميل بناء موقع ويب يتفاعل مع المستخدمين ويقوم بتحديث الواجهات مباشرة. ستقوم الأداة (${kw}) بمساعدتك في إنجاز ذلك بأفضل أداء ممكن.`;
    
    explanationText = `في مكتبة React، يعتمد بناء الواجهات على المكونات التفاعلية. يعتبر المفهوم <strong>${kw}</strong> حجر الأساس لإدارة المخرجات والتفاعل مع المتصفح والـ Virtual DOM بكفاءة عالية.`;
    
    keyPoints = [
      `تحسين الأداء: يساعد React في تحديث الأجزاء المتغيرة فقط من الصفحة دون إعادة تحميلها بالكامل.`,
      `إعادة الاستخدام: يمكنك كتابة المكون مرة واحدة واستدعائه في مختلف أرجاء المشروع لتقليل الأسطر البرمجية.`,
      `التدفق أحادي الاتجاه: تنتقل البيانات في React من المكون الأب إلى المكون الابن بطريقة منظمة.`
    ];

    warningText = `احذر من تغيير حالة المكونات مباشرة دون استخدام الدوال المخصصة لتحديثها، حيث يؤدي ذلك لتجاوز نظام التحديث التلقائي في React وعدم ظهور التغييرات للمستخدم.`;

    if (kwLower === 'jsx') {
      codeTemplate = `// مثال على لغة JSX في React\nconst element = <h1 className="title">أهلاً بك في React</h1>;\nconsole.log(element.type);`;
      practiceExpected = `h1`;
      practiceInstructions = `قم بتعريف عنصر JSX بسيط يحمل وسم h1 واطبع نوعه للتأكد.`;
      codeExplanation = `تسمح لغة JSX بكتابة كود HTML داخل ملفات جافاسكريبت وتسهل تصميم وتخطيط واجهات المستخدم.`;
    } else if (kwLower === 'useState()') {
      codeTemplate = `// استخدام useState لإدارة الحالة\n// const [count, setCount] = useState(0);\nconsole.log("useState Hook Initialized");`;
      practiceExpected = `useState Hook Initialized`;
      practiceInstructions = `اكتب كوداً لمحاكاة تفعيل useState لإدارة وحفظ الحالة في المكون.`;
      codeExplanation = `تُعد useState أهم دالة Hook برمجية لإدارة وتخزين المتغيرات الديناميكية داخل المكونات الثابتة.`;
    } else if (kwLower === 'useEffect()') {
      codeTemplate = `// محاكاة تأثيرات useEffect\nconsole.log("useEffect: API Data Mounted");`;
      practiceExpected = `useEffect: API Data Mounted`;
      practiceInstructions = `اطبع رسالة تؤكد جلب البيانات عند تركيب المكون (Mounting) لمحاكاة useEffect.`;
      codeExplanation = `تُستخدم useEffect لتنفيذ عمليات جانبية مثل جلب البيانات من المخدم أو التفاعل مع المكونات الخارجية.`;
    } else {
      codeTemplate = `// تطبيق المفهوم: ${kw}\nconsole.log("React initialized: ${kw}");`;
      practiceExpected = `React initialized: ${kw}`;
      practiceInstructions = `اطبع رسالة ترحيبية تؤكد نجاح تفعيل المفهوم الجديد (${kw}) في بيئة React.`;
      codeExplanation = `يوضح الكود محاكاة البنية التفاعلية لتجربة المفهوم البرمجي (${kw}) في مكتبة React.`;
    }

    quizQuestions = [
      {
        question: `ما هو دور المفهوم "${kw}" في نظام React؟`,
        options: [
          'تسهيل تخطيط وتحديث واجهات المستخدم والـ DOM بكفاءة عالية',
          'تحميل قواعد البيانات الكبيرة وتنظيم المخابئ والسيرفرات',
          'إجراء اتصالات الهواتف الذكية مع السيرفر المحلي',
          'لا شيء مما سبق'
        ],
        correctAnswer: 0
      },
      {
        question: `ما الذي يجب مراعاته عند التعامل مع "${kw}" في React؟`,
        options: [
          'كتابة الأكواد داخل مكونات منظمة وتفادي كتابة الشروط في الدوال البرمجية مباشرة',
          'تحديث الحالة بشكل مباشر دون استدعاء دوال التحديث المخصصة',
          'كتابة الأكواد في ملفات CSS فقط دون الاستعانة بملفات الجافاسكريبت',
          'تثبيت محرك Unity للتشغيل'
        ],
        correctAnswer: 0
      }
    ];
  }

  // 3. JAVASCRIPT COURSE
  else if (category === 'javascript') {
    story = `بصفتك مهندس برمجيات ويب، تحتاج لجعل الصفحات حية وتتفاعل مع حركات الماوس وضغطات الكيبورد. الأداة (${kw}) هي خيارك الأول اليوم لكتابة السلوك التفاعلي للصفحة.`;
    
    explanationText = `لغة جافا سكريبت هي لغة البرمجة الأكثر استخداماً في العالم لتطوير الويب. المفهوم <strong>${kw}</strong> يتم تنفيذه داخل محرك المتصفح (مثل V8) ليتحكم بمدخلات ومخرجات الصفحة بطريقة ذكية وسريعة.`;
    
    keyPoints = [
      `السرعة والتشغيل: تنفذ جافاسكريبت مباشرة على جهاز العميل (Client-side) مما يقلل الضغط على السيرفر ويجعل الاستجابة فورية.`,
      `التعامل مع الـ DOM: تتيح لك اللغة الوصول لكافة عناصر الصفحة وتعديلها وإضافة مؤثرات حركية بسهولة.`,
      `البرمجة غير المتزامنة: تدعم جافاسكريبت العمليات غير المتزامنة لتصفح الويب دون تجميد الواجهة.`
    ];

    warningText = `انتبه من الأخطاء من النوع ReferenceError عند استخدام المتغيرات قبل تعريفها، وتجنب خلط نطاق المتغيرات المحلية والعامة.`;

    if (kwLower === 'console.log()') {
      codeTemplate = `console.log("أهلاً بك في جافاسكريبت");`;
      practiceExpected = `أهلاً بك في جافاسكريبت`;
      practiceInstructions = `اكتب جملة console.log لطباعة العبارة "أهلاً بك في جافاسكريبت" في لوحة الكونسول.`;
      codeExplanation = `تُستخدم دالة console.log لعرض النصوص والتحقق من سير الكود البرمجي للمطورين.`;
    } else if (kwLower === 'let' || kwLower === 'const') {
      codeTemplate = `const name = "SVK";\nlet age = 18;\nconsole.log(name + " " + age);`;
      practiceExpected = `SVK 18`;
      practiceInstructions = `عرّف ثابت name بـ "SVK" ومتغير age بـ 18 واطبعهما معاً.`;
      codeExplanation = `نستخدم const للقيم الثابتة التي لا نخطط لتغييرها، و let للمتغيرات القابلة للتحديث لاحقاً.`;
    } else if (kwLower === 'typeof operator') {
      codeTemplate = `const x = 369;\nconsole.log(typeof x);`;
      practiceExpected = `number`;
      practiceInstructions = `استخدم المعامل typeof لمعرفة نوع القيمة 369 واطبعها للكونسول.`;
      codeExplanation = `المعامل typeof يعود بنوع البيانات الأصلي للقيمة الممررة له كـ string.`;
    } else if (kwLower === 'if' || kwLower === 'else') {
      codeTemplate = `const score = 85;\nif (score >= 60) {\n  console.log("ناجح");\n} else {\n  console.log("راسب");\n}`;
      practiceExpected = `ناجح`;
      practiceInstructions = `اكتب جملة شرطية كاملة تفحص نجاح الطالب بناءً على درجته.`;
      codeExplanation = `جملة if في جافاسكريبت تفحص صحة الشرط وتوجه مسار التطبيق البرمجي.`;
    } else if (kwLower === 'for loop') {
      codeTemplate = `for (let i = 1; i <= 3; i++) {\n  console.log(i);\n}`;
      practiceExpected = `1\n2\n3`;
      practiceInstructions = `اكتب حلقة تكرار for لطباعة الأرقام من 1 إلى 3.`;
      codeExplanation = `تكرر حلقة for تنفيذ الكود لعدد محدد من المرات بالاستعانة بعداد محلي وشرط توقف واضح.`;
    } else {
      codeTemplate = `// تطبيق المفهوم: ${kw}\nconst concept = "${kw}";\nconsole.log("تم تفعيل " + concept);`;
      practiceExpected = `تم تفعيل ${kw}`;
      practiceInstructions = `اطبع رسالة تؤكد تفعيل المفهوم البرمجي الجديد (${kw}) في جافاسكريبت.`;
      codeExplanation = `يوضح الكود طريقة عمل المتغيرات والطباعة لتجربة المفهوم البرمجي الجديد بنجاح.`;
    }

    quizQuestions = [
      {
        question: `ما هو دور المفهوم "${kw}" في لغة جافا سكريبت؟`,
        options: [
          'تنفيذ المهام التفاعلية والتحكم بمسار المنطق البرمجي داخل الصفحة',
          'تصميم الرسومات ثلاثية الأبعاد والتعديل على الصور للموقع',
          'الاتصال بالشبكة الخلوية ونقل المكالمات الصوتية',
          'لا شيء مما ذكر'
        ],
        correctAnswer: 0
      },
      {
        question: `أي من التالي يمثل طريقة كتابة صحيحة للمتغيرات في جافا سكريبت الحديثة؟`,
        options: [
          'باستخدام الكلمات المفتاحية let و const',
          'باستخدام دالة print مباشرة دون كلمات تعريفية',
          'بكتابة الأكواد في ملفات HTML خارج الوسوم البرمجية',
          'بتثبيت قاعدة بيانات خارجية للمتصفح'
        ],
        correctAnswer: 0
      }
    ];
  }

  // 4. SQL COURSE
  else if (category === 'database') {
    story = `بصفتك مهندس قواعد بيانات، طلب منك المدير استخراج قائمة العملاء النشطين وتعديل هيكل البيانات. الأداة (${kw}) هي الطريقة القياسية للتحدث مع محرك قاعدة البيانات واسترجاع المطلوب.`;
    
    explanationText = `لغة استعلام البيانات SQL هي اللغة الموحدة للتعامل مع قواعد البيانات العلاقية (RDBMS). عندما نرسل جملة الاستعلام المحتوية على <strong>${kw}</strong>، يقوم المحرك بتحليلها وتهيئة خطة الاستعلام (Query Plan) وجلب السجلات المطلوبة بسرعة فائقة.`;
    
    keyPoints = [
      `السرعة والكفاءة: يتيح SQL معالجة ملايين السجلات في أجزاء من الثانية بالاستعانة بالفهارس (Indexes).`,
      `سلامة البيانات: تضمن قواعد البيانات سلامة وترابط الجداول وتفادي البيانات المكررة أو المتعارضة.`,
      `الحماية والأمان: تتيح لك قواعد البيانات تحديد الصلاحيات للمستخدمين لمنع الوصول غير المصرح به.`
    ];

    warningText = `تجنب تماماً تنفيذ جملتي UPDATE أو DELETE دون تحديد شرط WHERE بدقة، حيث يؤدي ذلك لتعديل أو حذف جميع السجلات في الجدول بالكامل بشكل غير قابل للاسترجاع!`;

    if (kwLower === 'select') {
      codeTemplate = `SELECT 'مرحبا بك في SQL' AS welcome_message;`;
      practiceExpected = `مرحبا بك في SQL`;
      practiceInstructions = `اكتب استعلام SELECT بسيط يعود بالنص "مرحبا بك في SQL" كعمود باسم welcome_message.`;
      codeExplanation = `تُستخدم جملة SELECT لاسترجاع البيانات وعرض النتائج من قاعدة البيانات.`;
    } else if (kwLower === 'where') {
      codeTemplate = `SELECT 'مقبول' AS status WHERE 10 > 5;`;
      practiceExpected = `مقبول`;
      practiceInstructions = `اكتب استعلاماً يرجع "مقبول" فقط عندما يكون 10 أكبر من 5 باستخدام WHERE.`;
      codeExplanation = `تستخدم الجملة WHERE لتحديد شروط استرجاع وتصفية السجلات والبيانات من الجداول.`;
    } else if (kwLower === 'create table') {
      codeTemplate = `SELECT 'CREATE TABLE students (id INT, name TEXT);' AS ddl_command;`;
      practiceExpected = `CREATE TABLE students (id INT, name TEXT);`;
      practiceInstructions = `اطبع كود إنشاء جدول الطلاب لمحاكاة المفهوم.`;
      codeExplanation = `يستخدم الأمر CREATE TABLE لتعريف وإنشاء جدول جديد في قاعدة البيانات بخصائص وأعمدة محددة.`;
    } else {
      codeTemplate = `SELECT 'تم تفعيل مفهوم SQL: ' || '${kw}' AS result;`;
      practiceExpected = `تم تفعيل مفهوم SQL: ${kw}`;
      practiceInstructions = `اكتب استعلام SQL لدمج النصوص وتوضيح تفعيل المفهوم (${kw}).`;
      codeExplanation = `يوضح الاستعلام بنية الدمج النصي الأساسية في لغة استعلام البيانات SQL لتجربة المفهوم الجديد.`;
    }

    quizQuestions = [
      {
        question: `ما هي الوظيفة الأساسية للأداة "${kw}" في قواعد البيانات SQL؟`,
        options: [
          'الاستعلام عن البيانات وتعديل هيكل الجداول وتصميم مستودعات السجلات',
          'تصميم الخلفيات الرائعة وتصدير ملفات الفيديو والصوت للمتصفح',
          'تحديث متصفح جوجل كروم وتثبيت إضافات نظام الحماية',
          'لا شيء مما سبق ذكره'
        ],
        correctAnswer: 0
      },
      {
        question: `ما هو الخطر الأكبر عند تنفيذ عمليات التحديث والحذف دون شروط في SQL؟`,
        options: [
          'تعديل أو حذف جميع البيانات والسجلات في الجدول بالكامل بشكل دائم',
          'بطء سرعة معالج الكمبيوتر المحمول للمستخدم فقط',
          'تغيير لغة نظام التشغيل ويندوز إلى الإنجليزية',
          'لا يوجد أي خطر يذكر'
        ],
        correctAnswer: 0
      }
    ];
  }

  // 5. PYTHON AI COURSE
  else if (category === 'ai') {
    story = `بصفتك عالم بيانات في مجال الذكاء الاصطناعي، تحتاج إلى معالجة مصفوفة ضخمة من صور الأشعة السينية أو بيانات المبيعات وتدريب نموذج تعلم آلي لتوقع المستقبل. الأداة (${kw}) هي محركك الأساسي لإجراء العمليات الرياضية وتحضير البيانات.`;
    
    explanationText = `في مجال الذكاء الاصطناعي، نستخدم لغة بايثون مدعومة بمكتبات قوية مثل NumPy و Pandas و Scikit-Learn. المفهوم <strong>${kw}</strong> يمثل خطوة أساسية في تجهيز البيانات أو تدريب النماذج الرياضية واستخلاص الميزات.`;
    
    keyPoints = [
      `العمليات الموجهة (Vectorization): توفر NumPy معالجة سريعة للمصفوفات الكبيرة دون الحاجة لحلقات تكرار بطيئة في بايثون.`,
      `تجهيز البيانات: يمثل تنظيف وتجهيز البيانات (Preprocessing) 80% من جهد علماء البيانات للحصول على نماذج دقيقة.`,
      `بناء النماذج: نستخدم خوارزميات التعلم الآلي لتمكين الكمبيوتر من التعلم الذاتي من السجلات التاريخية.`
    ];

    warningText = `احذر من عدم توافق أبعاد المصفوفات (Dimension Mismatch) عند إجراء عمليات الضرب النقطي أو التغذية العكسية في النماذج العصبية.`;

    if (kwLower === 'np.array()') {
      codeTemplate = `import numpy as np\narr = np.array([10, 20, 30])\nprint(arr[0] + arr[1])`;
      practiceExpected = `30`;
      practiceInstructions = `استخدم مكتبة numpy لإنشاء مصفوفة تحتوي [10, 20, 30] واطبع مجموع العنصرين الأول والثاني.`;
      codeExplanation = `تقوم np.array() بتهيئة مصفوفة NumPy موجهة عالية الكفاءة في استخدام الذاكرة والعمليات الرياضية.`;
    } else if (kwLower === 'pandas' || kwLower === 'pd.dataframe()') {
      codeTemplate = `import pandas as pd\ndf = pd.DataFrame({"A": [1, 2], "B": [3, 4]})\nprint(df.shape)`;
      practiceExpected = `(2, 2)`;
      practiceInstructions = `أنشئ إطار بيانات (DataFrame) من عمودين A و B واطبع حجم إطار البيانات (shape).`;
      codeExplanation = `إطار البيانات (DataFrame) هو الهيكل الأساسي ثنائي الأبعاد لعرض وتنظيف وتحليل البيانات في Pandas.`;
    } else {
      codeTemplate = `# محاكاة الذكاء الاصطناعي لـ ${kw}\nprint("تفعيل خوارزمية الذكاء الاصطناعي: ${kw}")`;
      practiceExpected = `تفعيل خوارزمية الذكاء الاصطناعي: ${kw}`;
      practiceInstructions = `اكتب كوداً برمجياً يحاكي استدعاء مكتبات التعلم وتأكيد نجاح تفعيل المفهوم (${kw}).`;
      codeExplanation = `يوضح الكود طريقة عمل المتغيرات والمكتبات لتجربة وبناء تطبيقات المفهوم الذكي (${kw}).`;
    }

    quizQuestions = [
      {
        question: `لماذا نستخدم لغة بايثون في مجال الذكاء الاصطناعي وتحديداً المفهوم "${kw}"؟`,
        options: [
          'لوجود مكتبات عملاقة متخصصة في العمليات الرياضية وبناء شبكات عصبية متكاملة بسهولة',
          'لأنها اللغة الوحيدة القادرة على الاتصال بالطابعات والماسحات الضوئية',
          'لتصميم مواقع إنترنت ثابتة وتجهيز نصوص HTML البسيطة',
          'لا فائدة لها في الذكاء الاصطناعي'
        ],
        correctAnswer: 0
      },
      {
        question: `ما هي أهمية معالجة وتنظيف البيانات (Preprocessing) في دورة حياة الذكاء الاصطناعي؟`,
        options: [
          'تضمن دقة وموثوقية النموذج البرمجي وتمنعه من تعلم أنماط خاطئة أو مشوهة من البيانات',
          'تقوم بحذف لغة بايثون واستبدالها بلغة جافا سكريبت تلقائياً',
          'لا توجد لها أي أهمية على الإطلاق',
          'تقوم بنشر التطبيق على متجر جوجل بلاي مباشرة'
        ],
        correctAnswer: 0
      }
    ];
  }

  // 6. LINUX COURSE
  else if (category === 'devops' && courseTitle.includes('Linux')) {
    story = `بصفتك مهندس DevOps، تم توظيفك لإدارة خوادم سحابية تعمل بنظام لينكس الشهير. الأداة (${kw}) هي وسيلتك للحديث مع نظام التشغيل دون الحاجة لواجهة رسومية، وإدارة التطبيقات والملفات بنقرات زر سريعة على الكيبورد.`;
    
    explanationText = `نظام التشغيل لينكس هو العصب المغذي للإنترنت ومعظم الخوادم السحابية. المفهوم <strong>${kw}</strong> ينفذ مباشرة داخل محرك الطرفية (Terminal Shell) ليتواصل مع نواة النظام (Kernel) ويقوم بالمهام الإدارية المطلوبة.`;
    
    keyPoints = [
      `الاستقرار والسرعة: يتميز لينكس بقدرته الفريدة على العمل لسنوات طويلة دون إعادة تشغيل وبأقل استهلاك للموارد.`,
      `الصلاحيات والأمان: يتيح النظام التحكم الكامل في صلاحيات الملفات والمستخدمين لمنع أي تعديل ضار.`,
      `الأتمتة التامة: يمكنك كتابة نصوص Bash لبرمجة مهام صيانة ونسخ احتياطي مجدولة أوتوماتيكياً.`
    ];

    warningText = `احذر بشدة من كتابة أوامر حذف مثل rm -rf دون التحقق من المسار المستهدف، حيث يقوم هذا الأمر بحذف الملفات والمجلدات نهائياً دون تأكيد!`;

    if (kw === 'ls' || kw === 'pwd' || kw === 'whoami') {
      codeTemplate = `echo "/home/student"`;
      practiceExpected = `/home/student`;
      practiceInstructions = `اكتب أمراً برمجياً يحاكي إرجاع المسار الحالي للمستخدم لتفعيل مفهوم pwd.`;
      codeExplanation = `الخيار pwd يعود بمسار المجلد الحالي الذي يقف عليه المستخدم داخل بيئة عمل الطرفية.`;
    } else if (kw === 'echo') {
      codeTemplate = `echo "أهلاً بك في نظام لينكس"`;
      practiceExpected = `أهلاً بك في نظام لينكس`;
      practiceInstructions = `استخدم الأمر echo لطباعة العبارة "أهلاً بك في نظام لينكس" للكونسول.`;
      codeExplanation = `يُسخدم الأمر echo لعرض النصوص والمخرجات على شاشة المطورين للطرفية مباشرة.`;
    } else if (kw === 'cat') {
      codeTemplate = `echo "SVK Linux Core" > temp.txt\ncat temp.txt`;
      practiceExpected = `SVK Linux Core`;
      practiceInstructions = `اكتب أمراً برمجياً يحاكي إنشاء ملف به "SVK Linux Core" ثم قراءته بـ cat.`;
      codeExplanation = `يستخدم الأمر cat لقراءة واستعراض محتويات الملفات النصية مباشرة دون فتح محرر.`;
    } else {
      codeTemplate = `# محاكاة أمر الطرفية لـ ${kw}\necho "تم تنفيذ أمر لينكس بنجاح: ${kw}"`;
      practiceExpected = `تم تنفيذ أمر لينكس بنجاح: ${kw}`;
      practiceInstructions = `اكتب أمراً يحاكي تشغيل وتفعيل الأداة البرمجية (${kw}) على نظام لينكس.`;
      codeExplanation = `يوضح الكود محاكاة تنفيذ الأوامر داخل بيئة نظام التشغيل لينكس لتأكيد نجاح التشغيل البرمجي.`;
    }

    quizQuestions = [
      {
        question: `ما هي الوظيفة الأساسية للأداة "${kw}" في نظام التشغيل لينكس؟`,
        options: [
          'التحكم بنظام التشغيل وإدارة الملفات والمستخدمين وأتمتة المهام بالطرفية',
          'تشغيل الألعاب ثنائية الأبعاد وتعديل الصور والمؤثرات الصوتية',
          'الاتصال بالإنترنت بشكل لاسلكي دون الحاجة لبطاقة شبكة',
          'لا شيء مما ذكر'
        ],
        correctAnswer: 0
      },
      {
        question: `لماذا يعتبر نظام الصلاحيات في لينكس صمام الأمان الأساسي للخوادم؟`,
        options: [
          'لأنه يحدد بدقة من يمكنه قراءة أو تعديل أو تشغيل الملفات ويمنع التطبيقات الضارة من العبث بالنواة',
          'لأنه يقوم بتحويل واجهة الطرفية لواجهة رسومية ملونة تلقائياً',
          'لأنه يعطل معالج الكمبيوتر لحمايته من الحرارة الزائدة',
          'لا توجد له أي فائدة أمنية'
        ],
        correctAnswer: 0
      }
    ];
  }

  // 7. GIT COURSE
  else if (category === 'devops' && courseTitle.includes('Git')) {
    story = `تخيل أنك تعمل مع فريق من 5 مبرمجين على مشروع واحد، وكل مبرمج يكتب ميزات جديدة في نفس الوقت. الأداة (${kw}) هي منسقك الذكي الذي يمنع تداخل الملفات ويحفظ التاريخ الكامل لتطور التطبيق.`;
    
    explanationText = `نظام Git هو نظام التحكم بالإصدارات الموزع الأكثر انتشاراً. المفهوم <strong>${kw}</strong> يسجل حالة الملفات الحالية ويحفظها في قاعدة بيانات المستودع المحلية لضمان عدم ضياع التحديثات وإتاحة العودة لأي نقطة سابقة.`;
    
    keyPoints = [
      `مستودع محلي: يمتلك كل مطور نسخة كاملة من تاريخ المشروع على جهازه الشخصي، مما يتيح العمل أوفلاين.`,
      `الفروع (Branches): تتيح لك العمل على ميزة جديدة في بيئة معزولة تماماً عن النسخة الأساسية للموقع.`,
      `التعاون الفعال: يسهل Git دمج تعديلات مختلف المبرمجين وحل التداخلات (Conflicts) بطريقة منظمة.`
    ];

    warningText = `تجنب تنفيذ عمليات إعادة كتابة التاريخ أو فرض الرفع القسري (git push --force) على الفروع المشتركة مع فريق العمل لتفادي مسح عمل زملائك!`;

    codeTemplate = `# محاكاة أوامر نظام التحكم Git\n# cmd: git ${kwLower}\necho "تم تشغيل أمر جيت بنجاح: git ${kwLower}"`;
    practiceExpected = `تم تشغيل أمر جيت بنجاح: git ${kwLower}`;
    practiceInstructions = `اكتب تعليقاً وأمراً يوضح تفعيل وتشغيل أداة التحكم بالإصدارات لـ (${kw}).`;
    codeExplanation = `تُستخدم أوامر Git لمتابعة التغييرات وحفظ إصدارات المشروع المختلفة وحمايتها من الضياع والتلف.`;

    quizQuestions = [
      {
        question: `ما هو الغرض الرئيسي من استخدام الأداة "${kw}" في نظام التحكم بالإصدارات Git؟`,
        options: [
          'تتبع التغييرات في الملفات وحفظ التاريخ البرمجي للمشروع وتسهيل دمج الأكواد البرمجية مع فريق العمل',
          'تنسيق ملفات CSS وإضافة مؤثرات حركية لصفحات الويب الثابتة',
          'تحميل حزم البرامج من متجر التطبيقات وتثبيتها تلقائياً',
          'لا فائدة لها للمشروع'
        ],
        correctAnswer: 0
      },
      {
        question: `ما فائدة الفروع (Branches) في بيئة العمل مع Git؟`,
        options: [
          'تتيح للمطور كتابة وتجربة كود جديد في مسار مستقل وآمن دون التأثير على كود المشروع الرئيسي المستقر',
          'تقوم بحذف جميع الملفات المؤقتة من الجهاز بشكل نهائي وسريع',
          'لا توجد لها أي فائدة تذكر في بيئة العمل',
          'تثبيت لغة بايثون تلقائياً'
        ],
        correctAnswer: 0
      }
    ];
  }

  // 8. C++ COURSE
  else if (category === 'cpp') {
    story = `بصفتك مهندس أنظمة ومبرمج لغات منخفضة المستوى، تم توظيفك لبناء محرك قاعدة بيانات أو نظام تحكم في مصنع سيارات. الأداة (${kw}) ستساعدك في التخاطب المباشر مع الذاكرة واستخلاص أعلى أداء ممكن من الهاردوير.`;
    
    explanationText = `لغة C++ هي لغة قوية وقريبة من العتاد وتستخدم على نطاق واسع في بناء الأنظمة المعقدة والمؤثرة. عندما نكتب المفهوم <strong>${kw}</strong>، يقوم المترجم (Compiler مثل GCC) بتحويله مباشرة لكود آلة ثنائي (Machine Code) لتنفيذه بأقصى سرعة ممكنة.`;
    
    keyPoints = [
      `السرعة المطلقة: تمنحك لغة C++ تحكماً كاملاً في استهلاك الذاكرة وتوزيع الموارد دون أي وسيط أو Garbage Collector.`,
      `الكفاءة العالية: تستخدم اللغة في تصميم الألعاب الضخمة ومحركات البحث ومحاكيات الطيران لسرعتها الفائقة.`,
      `التوافقية العالية: تدعم اللغة البرمجة الكائنية والإجرائية وتعمل على كافة أنظمة التشغيل والقطع الإلكترونية.`
    ];

    warningText = `تجنب تماماً حجز ذاكرة ديناميكية باستخدام المعامل new دون تحريرها باستخدام المعامل delete، لتفادي مشكلة تسريب الذاكرة (Memory Leak) التي تبطئ أداء الكمبيوتر بالكامل.`;

    if (kwLower.includes('cout') || kwLower.includes('print')) {
      codeTemplate = `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "مرحبا بك في لغة C++" << endl;\n    return 0;\n}`;
      practiceExpected = `مرحبا بك في لغة C++`;
      practiceInstructions = `اكتب برنامج C++ متكامل لطباعة الجملة "مرحبا بك في لغة C++" بدقة في الكونسول.`;
      codeExplanation = `يستخدم cout المرفق مع المعامل << لطباعة النصوص والمخرجات في لغة C++ القياسية.`;
    } else if (kwLower === 'variables' || kwLower === 'int' || kwLower === 'double / float') {
      codeTemplate = `#include <iostream>\nusing namespace std;\n\nint main() {\n    int val = 369;\n    cout << val << endl;\n    return 0;\n}`;
      practiceExpected = `369`;
      practiceInstructions = `قم بتعريف متغير val من النوع int وأسند له 369 ثم اطبع قيمته.`;
      codeExplanation = `في لغة C++، يجب الإعلان عن نوع المتغير بشكل صريح وثابت (مثل int أو double) ليقوم المترجم بحجز حجم الذاكرة المناسب.`;
    } else if (kwLower === 'pointers' || kw === 'pointers') {
      codeTemplate = `#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 50;\n    int* ptr = &x;\n    cout << *ptr << endl;\n    return 0;\n}`;
      practiceExpected = `50`;
      practiceInstructions = `عرّف متغير x=50 ومؤشر ptr يشير إلى عنوانه ثم اطبع القيمة التي يشير إليها المؤشر.`;
      codeExplanation = `المؤشر (Pointer) هو متغير يخزن عنوان ذاكرة متغير آخر، ونستخدم معامل النجمة (*) للحصول على القيمة المخزنة في ذلك العنوان.`;
    } else {
      codeTemplate = `#include <iostream>\nusing namespace std;\n\nint main() {\n    // تطبيق المفهوم: ${kw}\n    cout << "تم تفعيل C++: ${kw}" << endl;\n    return 0;\n}`;
      practiceExpected = `تم تفعيل C++: ${kw}`;
      practiceInstructions = `اكتب برنامج C++ متكامل لمحاكاة وتأكيد نجاح تفعيل المفهوم البرمجي الجديد (${kw}).`;
      codeExplanation = `يوضح البرنامج الهيكل القياسي للملف في لغة C++ وكيفية طباعة المخرجات بنجاح لتأكيد عمل الكود.`;
    }

    quizQuestions = [
      {
        question: `ما هو دور المفهوم "${kw}" في لغة C++؟`,
        options: [
          'بناء وإعداد الأكواد البرمجية للعمليات منخفضة المستوى بكفاءة وسرعة فائقة',
          'تصميم واجهات المستخدم الرسومية لشبكات الهواتف الذكية بنقرة واحدة',
          'الاتصال بالإنترنت اللاسلكي ونقل السجلات لخوادم جوجل',
          'لا شيء مما ذكر'
        ],
        correctAnswer: 0
      },
      {
        question: `ما هي مشكلة تسريب الذاكرة (Memory Leak) في لغة C++؟`,
        options: [
          'حجز مساحات في الذاكرة دون تحريرها باستخدام delete مما يؤدي لاستهلاك ذاكرة النظام وتعطله بالكامل',
          'تسريب ملفات المشروع لجهات خارجية غير مصرح لها عبر الإنترنت',
          'ارتفاع درجة حرارة معالج الكمبيوتر أثناء عملية البناء والترجمة',
          'لا توجد مشكلة بهذا الاسم'
        ],
        correctAnswer: 0
      }
    ];
  }

  // 9. FLUTTER/DART COURSE
  else if (category === 'dart') {
    story = `بصفتك مطور تطبيقات هاتف، طلب منك العميل بناء تطبيق متجر إلكتروني يعمل على نظامي أندرويد وآيفون في نفس الوقت وبكود برمجي واحد. الأداة (${kw}) هي خيارك السحري لربط الواجهات وتنسيق المكونات وتخزين الحالة.`;
    
    explanationText = `بيئة عمل Flutter تعتمد على لغة البرمجة Dart من جوجل. المفهوم <strong>${kw}</strong> يتم تجميعه بكفاءة ليعمل كـ Native Widget على هواتف آيفون وأندرويد بأداء سلس وتحديثات لحظية سريعة.`;
    
    keyPoints = [
      `كود واحد لكل المنصات: يتيح لك Flutter كتابة كود واحد وتصديره لأندرويد، آيفون، الويب، وسطح المكتب بنجاح.`,
      `أداء Native ممتاز: يتم رسم وتخطيط الواجهات في Flutter مباشرة على شاشة الهاتف باستخدام محرك الرسوميات السريع Skia أو Impeller.`,
      `Null Safety: توفر لغة Dart حماية مدمجة ضد أخطاء القيم الفارغة (Null Pointer Exceptions) أثناء البرمجة.`
    ];

    warningText = `تأكد من تجنب تعديل واجهات المستخدم التفاعلية داخل الـ StatelessWidget مباشرة، واستعن دوماً بـ StatefulWidget و setState لتحديث الشاشة للمستخدم.`;

    if (kwLower.includes('print')) {
      codeTemplate = `void main() {\n  print("مرحبا بك في Flutter & Dart");\n}`;
      practiceExpected = `مرحبا بك في Flutter & Dart`;
      practiceInstructions = `اكتب برنامج Dart لطباعة العبارة "مرحبا بك في Flutter & Dart" في لوحة المخرجات.`;
      codeExplanation = `تُستخدم دالة print لعرض المخرجات والتحقق من صحة المتغيرات البرمجية للمطور في لغة Dart.`;
    } else if (kwLower === 'dart syntax' || kwLower === 'variables' || kwLower.includes('var')) {
      codeTemplate = `void main() {\n  final name = "SVK";\n  int age = 18;\n  print("$name $age");\n}`;
      practiceExpected = `SVK 18`;
      practiceInstructions = `عرّف ثابت name بـ "SVK" ومتغير age بـ 18 واطبعهما معاً باستخدام interpolation.`;
      codeExplanation = `نستخدم final في لغة Dart للقيم الثابتة التي يتم تحديدها مرة واحدة وقت التشغيل لتعزيز كفاءة الذاكرة.`;
    } else {
      codeTemplate = `void main() {\n  // تطبيق المفهوم: ${kw}\n  print("Flutter Ready: ${kw}");\n}`;
      practiceExpected = `Flutter Ready: ${kw}`;
      practiceInstructions = `اكتب كود دارت لمحاكاة تفعيل المفهوم الجديد (${kw}) وتأكيد تشغيله في تطبيق الهاتف بنجاح.`;
      codeExplanation = `يوضح الكود الهيكل الأساسي للغة Dart مع نقطة الانطلاق main ودالة الطباعة لتأكيد تشغيل المفهوم.`;
    }

    quizQuestions = [
      {
        question: `ما هو دور المفهوم "${kw}" في تطوير تطبيقات Flutter؟`,
        options: [
          'بناء وتنسيق واجهات مستخدم الهواتف الذكية وأتمتة المنطق البرمجي بلغة Dart',
          'تصميم الخلفيات الرائعة والتعديل على مؤثرات محركات الألعاب ثلاثية الأبعاد',
          'إجراء اتصالات قواعد البيانات العملاقة وحذف السجلات وتطهير الخوادم',
          'لا شيء مما سبق'
        ],
        correctAnswer: 0
      },
      {
        question: `ما هي ميزة Null Safety في لغة Dart المستخدمة في Flutter؟`,
        options: [
          'حماية التطبيق من الانهيار المفاجئ الناتج عن محاولة الوصول لقيم فارغة (Null) أثناء التشغيل',
          'تحويل واجهات التطبيق إلى لغة بايثون تلقائياً دون تدخل المبرمج',
          'تسريع عمليات البناء وتصدير ملف الـ APK بأصغر حجم ممكن',
          'لا توجد ميزة بهذا الاسم'
        ],
        correctAnswer: 0
      }
    ];
  }

  // 10. UNITY COURSE
  else if (category === 'unity') {
    story = `بصفتك مطور ألعاب مستقل، طلب منك شريكك بناء لعبة مغامرات ثنائية الأبعاد تضم حركة لاعب وفيزياء وتصادم مع الأعداء. السكريبت البرمجي المعتمد على (${kw}) هو العقل المفكر للاعب الذي يوجه حركته على الشاشة بالتوافق مع ذراع التحكم.`;
    
    explanationText = `محرك الألعاب Unity يعتمد على لغة البرمجة C# لكتابة منطق وتحركات اللعبة. المفهوم <strong>${kw}</strong> يرث من الكلاس الأساسي MonoBehaviour ويتم استدعاؤه كجزء من دورة حياة اللعبة (Game Loop) بواسطة محرك الرسوميات لتحديث الإحداثيات كل فريم.`;
    
    keyPoints = [
      `نظام المكونات (Entity-Component): تعتمد ألعاب Unity على ربط سكريبتات C# كـ Components على الكائنات (GameObjects) لتحديد سلوكها.`,
      `حساب الوقت (DeltaTime): نضرب التحركات بـ Time.deltaTime لضمان ثبات سرعة حركة اللاعب على كافة الأجهزة مهما اختلف عدد الفريمات.`,
      `محرك الفيزياء (Physics 2D): يوفر Unity محاكاة كاملة للتصادمات والجاذبية الأرضية لتقليل الجهد البرمجي المطلوب لبناء اللعبة.`
    ];

    warningText = `تجنب استدعاء دالة GetComponent داخل دالة Update() بشكل متكرر، حيث يؤدي ذلك لبطء شديد وتراجع عدد الفريمات (FPS Drop) نتيجة البحث المستمر في مكونات الكائن!`;

    if (kwLower === 'monobehaviour' || kw === 'Start()') {
      codeTemplate = `using UnityEngine;\n\npublic class Player : MonoBehaviour {\n    void Start() {\n        Debug.Log("Player Started");\n    }\n}`;
      practiceExpected = `Player Started`;
      practiceInstructions = `اكتب سكريبت Unity C# بسيط يرث من MonoBehaviour ويطبع رسالة عند بدء اللعبة في Start().`;
      codeExplanation = `الكلاس MonoBehaviour هو الفئة الأساسية لكل سكريبت في Unity، والدالة Start() تُنفذ لمرة واحدة فقط عند تشغيل اللعبة.`;
    } else if (kw === 'Update()') {
      codeTemplate = `using UnityEngine;\n\npublic class Engine : MonoBehaviour {\n    void Update() {\n        // Debug.Log("Frame Updated");\n    }\n}`;
      practiceExpected = `Code executed successfully!`;
      practiceInstructions = `اكتب سكريبت Unity C# يحتوي دالة التحديث المستمر Update() لتشغيل منطق اللعبة كل إطار (Frame).`;
      codeExplanation = `الدالة Update() يتم استدعاؤها تلقائياً في كل فريم وهي المكان المناسب لقراءة مدخلات اللاعب وتحديث الحركة.`;
    } else if (kwLower === 'debug.log()') {
      codeTemplate = `using UnityEngine;\n\npublic class Test : MonoBehaviour {\n    void Start() {\n        Debug.Log("Unity Game Engine Ready");\n    }\n}`;
      practiceExpected = `Unity Game Engine Ready`;
      practiceInstructions = `اكتب سكريبت Unity C# لطباعة رسالة الترحيب "Unity Game Engine Ready" للكونسول باستخدام Debug.Log.`;
      codeExplanation = `تُستخدم دالة Debug.Log المدمجة في محرك Unity لعرض الرسائل التحذيرية والمعلوماتية في نافذة الكونسول للمطورين.`;
    } else {
      codeTemplate = `using UnityEngine;\n\npublic class Action : MonoBehaviour {\n    // تطبيق المفهوم: ${kw}\n    void Start() {\n        Debug.Log("Activated Unity Component: ${kw}");\n    }\n}`;
      practiceExpected = `Activated Unity Component: ${kw}`;
      practiceInstructions = `اكتب سكريبت C# متوافق مع Unity لتفعيل الكومبوننت وتأكيد نجاح تشغيل المفهوم (${kw}).`;
      codeExplanation = `يوضح السكريبت بنية MonoBehaviour القياسية وكتابة الأوامر للتحكم بالكائنات وتأكيد التفعيل البرمجي بنجاح.`;
    }

    quizQuestions = [
      {
        question: `ما هو دور المفهوم "${kw}" في برمجة وتطوير ألعاب Unity؟`,
        options: [
          'كتابة وتعديل سلوك وحركات وفيزياء كائنات اللعبة ثنائية وثلاثية الأبعاد باستخدام سكريبتات لغة C#',
          'تصميم الخلفيات للموقع وإعداد استعلامات SQL لقواعد البيانات السحابية',
          'أتمتة أوامر نظام التشغيل لينكس وحذف السجلات المؤقتة',
          'لا شيء مما سبق'
        ],
        correctAnswer: 0
      },
      {
        question: `لماذا نضرب قيم حركة اللاعب البرمجية بالمعامل "Time.deltaTime" في Unity؟`,
        options: [
          'لضمان ثبات سرعة حركة اللاعب على كافة أجهزة الكمبيوتر والهواتف بغض النظر عن تفاوت الفريمات وسرعة المعالج',
          'لزيادة جودة الرسومات ثلاثية الأبعاد وتحويل اللعبة لألعاب الواقع الافتراضي',
          'لحذف اللعبة من جهاز المستخدم فوراً عند الخروج',
          'لا توجد له أي فائدة عملية'
        ],
        correctAnswer: 0
      }
    ];
  }

  // 11. GENERAL FALLBACK (e.g. C++ compiler constructs if any exist)
  else {
    story = `تخيل أنك تبني تطبيقاً برمجياً، وتحتاج إلى أداة تنظيم منطقية لمعالجة المفهوم (${kw}). هذه الأداة ستكون عصب الكود البرمجي اليوم لأنها تؤثر على سرعة وكفاءة التشغيل.`;
    
    explanationText = `يعتبر المفهوم <strong>${kw}</strong> ركيزة أساسية في بناء المشاريع والتطبيقات الحديثة. يساعد هذا المفهوم في تنظيم وهيكلة الأكواد وتوجيه المخرجات بنجاح.`;
    
    keyPoints = [
      `الأداة الحالية: تساهم مباشرة في تهيئة منطق البرمجة ولها حساسية عالية لحالة الأحرف.`,
      `أفضل الممارسات: كتابة أسماء المتغيرات والأوامر بشكل معبر يسهل قراءته وفهمه.`,
      `كفاءة الذاكرة: توفير وإدارة موارد الجهاز والذاكرة العشوائية بكفاءة فائقة.`
    ];

    warningText = `احذر بشدة من نسيان الفواصل المنقوطة أو علامات التنصيص المطلوبة لضمان عمل الكود بشكل سليم وتجنب أخطاء البناء والترجمة.`;

    codeTemplate = `console.log("تطبيق المفهوم: ${kw}");`;
    practiceExpected = `تطبيق المفهوم: ${kw}`;
    practiceInstructions = `اكتب كوداً برمجياً يوضح عمل وتطبيق المفهوم البرمجي (${kw}).`;
    codeExplanation = `يوضح الكود محاكاة البنية التفاعلية لتجربة المفهوم البرمجي (${kw}) وتأكيد نجاح تشغيله.`;

    quizQuestions = [
      {
        question: `ما هي الوظيفة الأساسية للأداة "${kw}"؟`,
        options: [
          'تنظيم منطق الكود وتسهيل بناء المشروع وهندسته بشكل صحيح وتجنب الأخطاء الشائعة',
          'حذف الأكواد البرمجية نهائياً من الذاكرة والقرص الصلب للمستخدم',
          'لا توجد أي وظيفة مفيدة على الإطلاق لهذا المفهوم',
          'لا شيء مما سبق'
        ],
        correctAnswer: 0
      },
      {
        question: `أي مما يلي يمثل بناء الجملة الصحيح لـ "${kw}"؟`,
        options: [
          `استدعاؤه وكتابته بدقة تامة مع مراعاة شروط اللغة وحالة الأحرف`,
          'كتابته بأحرف عشوائية دون ترتيب الأقواس أو الفواصل المطلوبة',
          'وضعه داخل تعليق ليقوم المعالج بتنفيذه تلقائياً',
          'لا شيء مما ذكر'
        ],
        correctAnswer: 0
      }
    ];
  }

  return {
    story,
    explanationText,
    keyPoints,
    warningText,
    codeTemplate,
    practiceExpected,
    practiceInstructions,
    codeExplanation,
    quizQuestions
  };
}

function getProgrammaticTopic(courseTitle, category, lessonIndex) {
  const moduleIndex = Math.floor((lessonIndex - 1) / 10);
  const topicIndex = (lessonIndex - 1) % 10;
  
  const modulesList = COURSE_MODULES[courseTitle] || COURSE_MODULES["أساسيات واحتراف لغة Python"];
  const moduleName = modulesList[moduleIndex % modulesList.length];
  
  const keywordsList = MODULE_KEYWORDS[courseTitle] || MODULE_KEYWORDS["أساسيات واحتراف لغة Python"];
  const moduleKeywords = keywordsList[moduleIndex % keywordsList.length];
  const keyword = moduleKeywords[topicIndex % moduleKeywords.length];
  
  let title = "";
  
  const ArabicTitles = [
    `الدرس ${lessonIndex}: مدخل ومفهوم (${keyword}) في ${moduleName}`,
    `الدرس ${lessonIndex}: الخطوات الأولى وتجهيز (${keyword})`,
    `الدرس ${lessonIndex}: التطبيق العملي الأول لـ (${keyword})`,
    `الدرس ${lessonIndex}: تفاصيل ومعاملات (${keyword}) الهامة`,
    `الدرس ${lessonIndex}: إدارة وتمرير البيانات مع (${keyword})`,
    `الدرس ${lessonIndex}: العمليات البرمجية المرافقة لـ (${keyword})`,
    `الدرس ${lessonIndex}: فحص الأخطاء الشائعة وحل مشاكل (${keyword})`,
    `الدرس ${lessonIndex}: الاستخدام المتقدم وتطبيق (${keyword})`,
    `الدرس ${lessonIndex}: كتابة كود نظيف وتطوير منطق (${keyword})`,
    `الدرس ${lessonIndex}: التحدي النهائي والتطبيق الشامل لـ (${keyword})`
  ];
  
  title = ArabicTitles[topicIndex];
  
  const details = generateLessonDetails(courseTitle, category, keyword, moduleName, lessonIndex);
  
  return {
    title,
    functionName: keyword,
    story: details.story,
    explanationText: details.explanationText,
    keyPoints: details.keyPoints,
    warningText: details.warningText,
    practiceInstructions: details.practiceInstructions,
    codeTemplate: details.codeTemplate,
    practiceExpected: details.practiceExpected,
    codeExplanation: details.codeExplanation,
    quizQuestions: details.quizQuestions
  };
}

async function seed() {
  const client = await pool.connect();
  try {
    console.log('Starting DB transaction...');
    await client.query('BEGIN');

    console.log('Clearing old lesson access and lessons data...');
    await client.query('DELETE FROM lesson_access');
    await client.query('DELETE FROM enrollments');
    await client.query('DELETE FROM course_requests');
    await client.query('DELETE FROM lessons');
    await client.query('DELETE FROM courses');

    console.log('Re-creating 10 courses with 100 lessons each...');

    for (let c = 0; c < COURSE_TEMPLATES.length; c++) {
      const template = COURSE_TEMPLATES[c];
      const courseTitle = template.title;
      const courseDesc = `دورة شاملة ومفصلة لاحتراف ${courseTitle}. يغطي هذا الكورس كافة التفاصيل والمميزات البرمجية والتطبيق العملي المكثف مع امتحانات بعد كل درس.`;
      
      const courseRes = await client.query(`
        INSERT INTO courses (title, title_ar, description, description_ar, price, currency, instructor_name, category, level, duration_hours, is_published, is_featured)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
        RETURNING id
      `, [
        courseTitle, 
        courseTitle, 
        courseDesc, 
        courseDesc, 
        369.00, 
        'EGP', 
        template.instructor, 
        template.category, 
        template.level, 
        100, 
        true, 
        c === 0 // first is featured
      ]);

      const courseId = courseRes.rows[0].id;
      console.log(`Created Course [${c + 1}/${COURSE_TEMPLATES.length}]: ${courseTitle} (ID: ${courseId})`);

      const chunkSize = 20;
      for (let chunkStart = 1; chunkStart <= 100; chunkStart += chunkSize) {
        const queryValues = [];
        const queryPlaceholderStrings = [];
        let valIdx = 1;

        for (let l = chunkStart; l < chunkStart + chunkSize && l <= 100; l++) {
          const isFree = l === 1; // first lesson free
          const topic = getProgrammaticTopic(courseTitle, template.category, l);
          const lessonTitle = topic.title;

          const textContent = `
            <div class="premium-learning-flow" style="font-family: 'Cairo', sans-serif; line-height: 1.8; color: #cbd5e1;">
              <!-- Story Card -->
              <div class="story-card" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(5, 150, 105, 0.02) 100%); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 16px; padding: 24px; margin-bottom: 24px; position: relative; overflow: hidden;">
                <div style="font-size: 1.5rem; margin-bottom: 12px;">🎭 قصة الدرس البرمجية (لتبسيط المفهوم)</div>
                <p style="margin: 0; font-size: 1rem; color: #e2e8f0; font-weight: 500;">
                  ${topic.story}
                </p>
              </div>

              <!-- Main Explanation -->
              <div class="explanation-section" style="margin-bottom: 28px;">
                <h3 style="color: #10b981; font-size: 1.25rem; font-weight: 800; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; margin-bottom: 16px;">
                  📖 الشرح التفصيلي والمفهوم العلمي للدرس
                </h3>
                <p style="font-size: 0.95rem; margin-bottom: 16px;">
                  ${topic.explanationText}
                </p>
                <ul style="padding-right: 20px; display: flex; flex-direction: column; gap: 10px; font-size: 0.9rem;">
                  <li><strong>الأداة المستهدفة:</strong> <code>${topic.functionName}</code> - وهي الركن الأساسي في هذا الدرس.</li>
                  <li>${topic.keyPoints[0]}</li>
                  <li>${topic.keyPoints[1]}</li>
                  <li>${topic.keyPoints[2]}</li>
                </ul>
              </div>

              <!-- Tool Breakdown Reference Box -->
              <div class="tool-breakdown" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; margin-bottom: 28px;">
                <h4 style="color: #8b5cf6; margin: 0 0 12px 0; font-size: 1rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
                  🛠️ بطاقة تعريف المساعد البرمجي: { <code>${topic.functionName}</code> }
                </h4>
                <table style="width: 100%; border-collapse: collapse; text-align: right; font-size: 0.85rem; color: #94a3b8;">
                  <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
                    <td style="padding: 8px 0; font-weight: 700; color: #e2e8f0; width: 120px;">طريقة الكتابة:</td>
                    <td style="padding: 8px 0; font-family: monospace; color: #a78bfa; direction: ltr;">${topic.functionName}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
                    <td style="padding: 8px 0; font-weight: 700; color: #e2e8f0;">النوع:</td>
                    <td style="padding: 8px 0;">أداة أساسية مدمجة (Built-in Tool)</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: 700; color: #e2e8f0;">الأثر التراكمي:</td>
                    <td style="padding: 8px 0;">تعديل وتوجيه سير البيانات والمخرجات برمجياً</td>
                  </tr>
                </table>
              </div>

              <!-- Tips & Tricks -->
              <div class="tips-box" style="border-right: 4px solid #ef4444; background: rgba(239, 68, 68, 0.03); padding: 16px 20px; border-radius: 0 8px 8px 0; margin-bottom: 16px;">
                <h5 style="color: #f87171; margin: 0 0 8px 0; font-size: 0.9rem; font-weight: 800;">⚠️ أخطاء شائعة احذر الوقوع فيها:</h5>
                <p style="margin: 0; font-size: 0.85rem; color: #fca5a5;">
                  ${topic.warningText}
                </p>
              </div>
            </div>
          `;

          const codeExample = topic.codeTemplate;

          const examData = JSON.stringify({
            title: `اختبار الدرس ${l}: ${topic.title}`,
            questions: topic.quizQuestions
          });

          queryValues.push(
            courseId,           // $1
            lessonTitle,        // $2
            isFree,             // $3
            l,                  // $4
            'text',             // $5
            textContent,        // $6
            examData,           // $7
            topic.codeExplanation, // $8
            topic.codeTemplate, // $9
            topic.practiceInstructions,// $10
            topic.practiceExpected,   // $11
            codeExample         // $12
          );

          queryPlaceholderStrings.push(`(
            $${valIdx}, $${valIdx+1}, $${valIdx+2}, $${valIdx+3}, $${valIdx+4}, 
            $${valIdx+5}, $${valIdx+6}, $${valIdx+7}, $${valIdx+8}, $${valIdx+9},
            $${valIdx+10}, $${valIdx+11}
          )`);
          
          valIdx += 12;
        }

        const insertQuery = `
          INSERT INTO lessons (
            course_id, title, is_free, order_index, content_type, text_content, 
            exam_data, code_explanation, code_template, practice_instructions, 
            practice_expected, code_example
          ) VALUES ${queryPlaceholderStrings.join(', ')}
        `;

        await client.query(insertQuery, queryValues);
      }
    }

    await client.query('COMMIT');
    console.log('Transaction COMMITTED! Database seeded with premium lesson contents successfully.');
  } catch (e) {
    await client.query('ROLLBACK');
    console.error('Error during transaction seeding:', e);
  } finally {
    client.release();
    pool.end();
  }
}

seed();
