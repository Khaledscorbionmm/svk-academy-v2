const { Pool } = require('pg');

const connectionString = 'postgresql://neondb_owner:npg_5j1fJvIkbVUa@ep-late-water-asl94ydd-pooler.c-4.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false }
});

const COURSE_TEMPLATES = [
  { title: 'أساسيات واحتراف لغة Python', category: 'python', level: 'beginner', instructor: 'خالد أحمد' },
  { title: 'تطوير واجهات المستخدم باستخدام React', category: 'react', level: 'intermediate', instructor: 'أحمد محمد' },
  { title: 'أساسيات لغة JavaScript للمبتدئين', category: 'javascript', level: 'beginner', instructor: 'يوسف علي' },
  { title: 'تصميم وإدارة قواعد البيانات لغة SQL', category: 'database', level: 'beginner', instructor: 'سارة خالد' },
  { title: 'مقدمة في الذكاء الاصطناعي Python AI', category: 'ai', level: 'advanced', instructor: 'د. خالد سليم' },
  { title: 'احتراف نظام التشغيل والتحكم Linux & Bash', category: 'devops', level: 'beginner', instructor: 'حمزة عمر' },
  { title: 'إدارة الإصدارات والمشاريع Git & GitHub', category: 'devops', level: 'beginner', instructor: 'رنا أحمد' },
  { title: 'أساسيات لغة C++ للمبتدئين من الصفر', category: 'python', level: 'beginner', instructor: 'خالد أحمد' },
  { title: 'تطوير تطبيقات الهواتف الذكية Flutter', category: 'react', level: 'intermediate', instructor: 'شادي كريم' },
  { title: 'برمجة وتصميم الألعاب ثنائية الأبعاد Unity', category: 'python', level: 'intermediate', instructor: 'فادي ماهر' }
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
  "تطوير واجهات المستخدم باستخدام React": [
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
  "تطوير واجهات المستخدم باستخدام React": [
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

function getProgrammaticTopic(courseTitle, category, lessonIndex) {
  const moduleIndex = Math.floor((lessonIndex - 1) / 10);
  const topicIndex = (lessonIndex - 1) % 10;
  
  // Find modules for this course, fallback to python
  const modulesList = COURSE_MODULES[courseTitle] || COURSE_MODULES["أساسيات واحتراف لغة Python"];
  const moduleName = modulesList[moduleIndex % modulesList.length];
  
  // Find keywords for this course, fallback to python
  const keywordsList = MODULE_KEYWORDS[courseTitle] || MODULE_KEYWORDS["أساسيات واحتراف لغة Python"];
  const moduleKeywords = keywordsList[moduleIndex % keywordsList.length];
  const keyword = moduleKeywords[topicIndex % moduleKeywords.length];
  
  // Create beautiful, descriptive and unique titles based on topicIndex
  let title = "";
  let story = "";
  let practiceInstructions = "";
  let codeTemplate = "";
  let practiceExpected = "";
  
  // Custom templates based on topicIndex (0 to 9) to generate a realistic progression
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
  
  // Story details - customized
  story = `في هذا الدرس، سنقوم برحلة ممتعة لفهم واستكشاف الأداة <strong>${keyword}</strong> وهي جزء أساسي من محور <em>${moduleName}</em> في كورس ${courseTitle}. تخيل أنك تبني مشروعاً ضخماً، وتحتاج إلى تنظيم عملك بدقة. الأداة ${keyword} تعمل كمساعد ذكي ينجز لك هذه المهمة بأسرع وقت وأقل جهد برميجي!`;
  
  // Instructions
  practiceInstructions = `مطلوب منك كتابة وتعديل الكود البرمجي التالي لتجربة الأداة (${keyword}) والتأكد من ظهور المخرجات بالشكل الصحيح لمطابقة النتيجة المطلوبة.`;
  
  // Generate codeTemplate and practiceExpected depending on language
  const lowerTitle = courseTitle.toLowerCase();
  const isJS = category === 'javascript' || category === 'react' || lowerTitle.includes('javascript') || lowerTitle.includes('react');
  const isCPP = lowerTitle.includes('c++') || lowerTitle.includes('cpp');
  const isDart = lowerTitle.includes('flutter') || lowerTitle.includes('dart');
  const isSQL = lowerTitle.includes('sql') || lowerTitle.includes('database') || category === 'database';
  
  if (isJS) {
    codeTemplate = `// تطبيق عملي لـ ${keyword}\nconsole.log("تطبيق عملي: " + "${keyword}");`;
    practiceExpected = `تطبيق عملي: ${keyword}`;
  } else if (isCPP) {
    codeTemplate = `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "تطبيق عملي: " << "${keyword}" << endl;\n    return 0;\n}`;
    practiceExpected = `تطبيق عملي: ${keyword}`;
  } else if (isDart) {
    codeTemplate = `void main() {\n  print("تطبيق عملي: " + "${keyword}");\n}`;
    practiceExpected = `تطبيق عملي: ${keyword}`;
  } else if (isSQL) {
    codeTemplate = `SELECT 'تطبيق عملي: ' || '${keyword}' AS result;`;
    practiceExpected = `تطبيق عملي: ${keyword}`;
  } else {
    // Default Python syntax
    codeTemplate = `# تطبيق عملي لـ ${keyword}\nprint("تطبيق عملي: " + "${keyword}")`;
    practiceExpected = `تطبيق عملي: ${keyword}`;
  }
  
  return {
    title,
    functionName: keyword,
    story,
    practiceInstructions,
    codeTemplate,
    practiceExpected
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

      // We will batch insert lessons in chunks of 20 to prevent query parameter size limit errors
      const chunkSize = 20;
      for (let chunkStart = 1; chunkStart <= 100; chunkStart += chunkSize) {
        const queryValues = [];
        const queryPlaceholderStrings = [];
        let valIdx = 1;

        for (let l = chunkStart; l < chunkStart + chunkSize && l <= 100; l++) {
          const isFree = l === 1; // first lesson free
          const topic = getProgrammaticTopic(courseTitle, template.category, l);
          
          const lessonTitle = topic.title;

          // HTML content structured beautifully (Premium learning flow)
          const textContent = `
            <div class="premium-learning-flow" style="font-family: 'Cairo', sans-serif; line-height: 1.8; color: #cbd5e1;">
              <!-- Story Card -->
              <div class="story-card" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(5, 150, 105, 0.02) 100%); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 16px; padding: 24px; margin-bottom: 24px; position: relative; overflow: hidden;">
                <div style="font-size: 1.8rem; margin-bottom: 12px;">🎭 قصة الدرس البرمجية (لتبسيط المفهوم)</div>
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
                  في البرمجة، لا يكفي كتابة الكود بل يجب فهم آليته وعمله داخل الذاكرة والمعالج. عند استخدام الأداة أو الدالة <strong>${topic.functionName}</strong>، يتم تنفيذ مجموعة من الخطوات المنظمة تحت غطاء المحرك.
                </p>
                <ul style="padding-right: 20px; display: flex; flex-direction: column; gap: 10px; font-size: 0.9rem;">
                  <li><strong>الأداة المستهدفة:</strong> <code>${topic.functionName}</code> - وهي الركن الأساسي في هذا الدرس.</li>
                  <li><strong>طريقة التخاطب:</strong> نكتبها بدقة مع مراعاة الحروف الكبيرة والصغيرة الحساسة (Case Sensitivity).</li>
                  <li><strong>فائدة الأداة:</strong> تمنحنا التحكم الكامل وتوفر ساعات من كتابة الأكواد المكررة وتسهل صيانة المشروع.</li>
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
                  تأكد من عدم نسيان علامات التنصيص أو نسيان الفواصل البرمجية عند استدعاء <code>${topic.functionName}</code>، حيث إن غيابها يسبب توقف البرنامج بالكامل وظهور خطأ في بناء الجملة (SyntaxError).
                </p>
              </div>
            </div>
          `;

          const codeExplanation = `يوضح المثال البرمجي المرفق كيفية استدعاء الأداة البرمجية ${topic.functionName} بشكل عملي وسليم في لغة ${template.category}.`;
          const codeExample = topic.codeTemplate; // Working example is identical to starter template

          // Custom Quiz
          const examData = JSON.stringify({
            title: `اختبار الدرس ${l}: ${topic.title}`,
            questions: [
              {
                question: `ما هي الوظيفة الأساسية للأداة البرمجية "${topic.functionName}" التي درسناها اليوم؟`,
                options: [
                  'معالجة البيانات والتحكم بمخرجات الكود بشكل صحيح',
                  'حذف الملفات من جهاز الكمبيوتر تلقائياً',
                  'إيقاف وتجميد سير البرنامج دون أي مخرجات',
                  'لا شيء مما سبق ذكره'
                ],
                correctAnswer: 0
              },
              {
                question: `أي من الخيارات التالية يعتبر خطأ برمجياً يمنع الكود من العمل بنجاح؟`,
                options: [
                  'كتابة تعليقات توضيحية للمبرمجين',
                  `كتابة اسم الأداة ${topic.functionName} بشكل خاطئ أو نسيان الأقواس المطلوبة`,
                  'ترك مسافة فارغة في نهاية السطر البرمجي',
                  'استخدام لغة بايثون أو جافاسكريبت حديثة'
                ],
                correctAnswer: 1
              }
            ]
          });

          // Push values
          queryValues.push(
            courseId,           // $1
            lessonTitle,        // $2
            isFree,             // $3
            l,                  // $4
            'text',             // $5
            textContent,        // $6
            examData,           // $7
            codeExplanation,    // $8
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
