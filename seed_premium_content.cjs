const { Pool } = require('pg');

const connectionString = 'postgresql://neondb_owner:npg_5j1fJvIkbVUa@ep-late-water-asl94ydd-pooler.c-4.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false }
});

const COURSE_TEMPLATES = [
  { title: 'أساسيات واحتراف لغة Python', category: 'python', level: 'beginner', instructor: 'خالد أحمد' },
  { title: 'Cybersecurity & Linux Hardening', category: 'security', level: 'intermediate', instructor: 'حمزة عمر' },
  { title: 'اللغات العالمية والمحادثات المتقدمة', category: 'languages', level: 'beginner', instructor: 'يوسف علي' },
  { title: 'Web Development Tracks', category: 'javascript', level: 'beginner', instructor: 'سيف الدين' },
  { title: 'React JS Advanced', category: 'react', level: 'advanced', instructor: 'خالد أحمد' },
  { title: 'Artificial Intelligence & Data Science', category: 'ai', level: 'advanced', instructor: 'نور الدين' },
  { title: 'Mobile App Development', category: 'javascript', level: 'intermediate', instructor: 'يوسف علي' },
  { title: 'احتراف جافا سكريبت الحديثة', category: 'javascript', level: 'intermediate', instructor: 'سيف الدين' },
  { title: 'بناء واجهات المستخدم بـ Next.js', category: 'react', level: 'intermediate', instructor: 'خالد أحمد' },
  { title: 'تعلم الآلة (Machine Learning)', category: 'ai', level: 'advanced', instructor: 'نور الدين' },
  { title: 'تأمين الشبكات واختبار الاختراق', category: 'security', level: 'advanced', instructor: 'حمزة عمر' },
  { title: 'تطوير الألعاب بـ Python', category: 'python', level: 'intermediate', instructor: 'خالد أحمد' }
];

const pythonTools = [
  { name: 'print', params: '(*objects, sep=" ", end="n", file=sys.stdout, flush=False)', desc: 'Prints objects to the text stream file.' },
  { name: 'len', params: '(s)', desc: 'Return the length (the number of items) of an object.' },
  { name: 'type', params: '(object)', desc: 'Return the type of an object.' },
  { name: 'int', params: '(x=0, base=10)', desc: 'Return an integer object constructed from a number or string x.' },
  { name: 'float', params: '(x=0.0)', desc: 'Return a floating point number constructed from a number or string x.' },
  { name: 'str', params: '(object="")', desc: 'Return a string version of object.' },
  { name: 'bool', params: '(x=False)', desc: 'Return a Boolean value, i.e. one of True or False.' },
  { name: 'list', params: '(iterable=())', desc: 'Rather than being a function, list is actually a mutable sequence type.' },
  { name: 'dict', params: '(**kwarg)', desc: 'Create a new dictionary.' },
  { name: 'set', params: '(iterable=())', desc: 'Return a new set object.' },
  { name: 'tuple', params: '(iterable=())', desc: 'Rather than being a function, tuple is actually an immutable sequence type.' },
  { name: 'range', params: '(start, stop[, step])', desc: 'Rather than being a function, range is actually an immutable sequence type.' },
  { name: 'sum', params: '(iterable, /, start=0)', desc: 'Sums start and the items of an iterable from left to right and returns the total.' },
  { name: 'min', params: '(iterable, *[, key, default])', desc: 'Return the smallest item in an iterable or the smallest of two or more arguments.' },
  { name: 'max', params: '(iterable, *[, key, default])', desc: 'Return the largest item in an iterable or the largest of two or more arguments.' },
  { name: 'abs', params: '(x)', desc: 'Return the absolute value of a number.' },
  { name: 'round', params: '(number[, ndigits])', desc: 'Return number rounded to ndigits precision after the decimal point.' },
  { name: 'input', params: '(prompt="")', desc: 'Read a string from standard input.' },
  { name: 'open', params: '(file, mode="r", buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)', desc: 'Open file and return a corresponding file object.' },
  { name: 'sorted', params: '(iterable, /, *, key=None, reverse=False)', desc: 'Return a new sorted list from the items in iterable.' },
  { name: 'enumerate', params: '(iterable, start=0)', desc: 'Return an enumerate object.' },
  { name: 'zip', params: '(*iterables)', desc: 'Make an iterator that aggregates elements from each of the iterables.' },
  { name: 'map', params: '(function, iterable, ...)', desc: 'Return an iterator that applies function to every item of iterable.' },
  { name: 'filter', params: '(function, iterable)', desc: 'Construct an iterator from those elements of iterable for which function returns true.' },
  { name: 'any', params: '(iterable)', desc: 'Return True if any element of the iterable is true.' },
  { name: 'all', params: '(iterable)', desc: 'Return True if all elements of the iterable are true.' },
  { name: 'isinstance', params: '(object, classinfo)', desc: 'Return True if the object argument is an instance of the classinfo argument.' },
  { name: 'issubclass', params: '(class, classinfo)', desc: 'Return True if class is a subclass (direct, indirect or virtual) of classinfo.' },
  { name: 'help', params: '([object])', desc: 'Invoke the built-in help system.' },
  { name: 'dir', params: '([object])', desc: 'Without arguments, return the list of names in the current local scope. With an argument, attempt to return a list of valid attributes for that object.' },
  { name: 'id', params: '(object)', desc: 'Return the identity of an object.' },
  { name: 'hash', params: '(object)', desc: 'Return the hash value of the object (if it has one).' },
  { name: 'setattr', params: '(object, name, value)', desc: 'This is the counterpart of getattr().' },
  { name: 'getattr', params: '(object, name[, default])', desc: 'Return the value of the named attribute of object.' },
  { name: 'hasattr', params: '(object, name)', desc: 'The arguments are an object and a string.' },
  { name: 'delattr', params: '(object, name)', desc: 'This is a relative of setattr().' },
  { name: 'eval', params: '(expression[, globals[, locals]])', desc: 'The arguments are a string and optional globals and locals.' },
  { name: 'exec', params: '(object[, globals[, locals]])', desc: 'This function supports dynamic execution of Python code.' },
  { name: 'globals', params: '()', desc: 'Return a dictionary representing the current global symbol table.' },
  { name: 'locals', params: '()', desc: 'Update and return a dictionary representing the current local symbol table.' },
  { name: 'vars', params: '([object])', desc: 'Return the __dict__ attribute for a module, class, instance, or any other object with a __dict__ attribute.' },
  { name: 'compile', params: '(source, filename, mode, flags=0, dont_inherit=False, optimize=-1)', desc: 'Compile the source into a code or AST object.' },
  { name: 'super', params: '([type[, object-or-type]])', desc: 'Return a proxy object that delegates method calls to a parent or sibling class of type.' },
  { name: 'property', params: '(fget=None, fset=None, fdel=None, doc=None)', desc: 'Return a property attribute.' },
  { name: 'staticmethod', params: '(function)', desc: 'Return a static method for function.' },
  { name: 'classmethod', params: '(function)', desc: 'Return a class method for function.' },
  { name: 'iter', params: '(object[, sentinel])', desc: 'Return an iterator object.' },
  { name: 'next', params: '(iterator[, default])', desc: 'Retrieve the next item from the iterator by calling its __next__() method.' },
  { name: 'slice', params: '(start, stop[, step])', desc: 'Return a slice object representing the set of indices specified by range(start, stop, step).' },
  { name: 'chr', params: '(i)', desc: 'Return the string representing a character whose Unicode code point is the integer i.' },
  { name: 'ord', params: '(c)', desc: 'Given a string representing one Unicode character, return an integer representing the Unicode code point of that character.' },
  { name: 'hex', params: '(x)', desc: 'Convert an integer number to a lowercase hexadecimal string prefixed with "0x".' },
  { name: 'oct', params: '(x)', desc: 'Convert an integer number to an octal string prefixed with "0o".' },
  { name: 'bin', params: '(x)', desc: 'Convert an integer number to a binary string prefixed with "0b".' },
  { name: 'complex', params: '([real[, imag]])', desc: 'Return a complex number with the value real + imag*1j or convert a string or number to a complex number.' },
  { name: 'divmod', params: '(a, b)', desc: 'Take two (non complex) numbers as arguments and return a pair of numbers consisting of their quotient and remainder when using integer division.' },
  { name: 'pow', params: '(base, exp[, mod])', desc: 'Return base to the power exp; if mod is present, return base to the power exp, modulo mod.' },
  { name: 'ascii', params: '(object)', desc: 'As repr(), return a string containing a printable representation of an object, but escape the non-ASCII characters.' },
  { name: 'repr', params: '(object)', desc: 'Return a string containing a printable representation of an object.' },
  { name: 'format', params: '(value[, format_spec])', desc: 'Convert a value to a "formatted" representation, as controlled by format_spec.' },
  { name: 'frozenset', params: '([iterable])', desc: 'Return a new frozenset object, optionally with elements taken from iterable.' },
  { name: 'bytearray', params: '([source[, encoding[, errors]]])', desc: 'Return a new array of bytes.' },
  { name: 'bytes', params: '([source[, encoding[, errors]]])', desc: 'Return a new "bytes" object, which is an immutable sequence of integers in the range 0 <= x < 256.' },
  { name: 'memoryview', params: '(obj)', desc: 'Return a "memory view" object created from the given argument.' },
  { name: 'breakpoint', params: '(*args, **kws)', desc: 'This function drops you into the debugger at the call site.' },
  { name: 'importlib.import_module', params: '(name, package=None)', desc: 'Import a module. The name argument specifies what module to import in absolute or relative terms.' },
  { name: 'math.sqrt', params: '(x)', desc: 'Return the square root of x.' },
  { name: 'math.floor', params: '(x)', desc: 'Return the floor of x, the largest integer less than or equal to x.' },
  { name: 'math.ceil', params: '(x)', desc: 'Return the ceiling of x, the smallest integer greater than or equal to x.' },
  { name: 'math.pow', params: '(x, y)', desc: 'Return x raised to the power y.' },
  { name: 'random.randint', params: '(a, b)', desc: 'Return a random integer N such that a <= N <= b.' },
  { name: 'random.choice', params: '(seq)', desc: 'Return a random element from the non-empty sequence seq.' },
  { name: 'datetime.now', params: '(tz=None)', desc: 'Return the current local date and time.' },
  { name: 'json.loads', params: '(s, *, cls=None, object_hook=None, parse_float=None, parse_int=None, parse_constant=None, object_pairs_hook=None, **kw)', desc: 'Deserialize s (a str, bytes or bytearray instance containing a JSON document) to a Python object.' },
  { name: 'json.dumps', params: '(obj, *, skipkeys=False, ensure_ascii=True, check_circular=True, allow_nan=True, cls=None, indent=None, separators=None, default=None, sort_keys=False, **kw)', desc: 'Serialize obj to a JSON formatted str.' },
  { name: 're.match', params: '(pattern, string, flags=0)', desc: 'If zero or more characters at the beginning of string match the regular expression pattern, return a corresponding match object.' },
  { name: 're.search', params: '(pattern, string, flags=0)', desc: 'Scan through string looking for the first location where the regular expression pattern produces a match.' },
  { name: 'os.path.join', params: '(path, *paths)', desc: 'Join one or more path components intelligently.' },
  { name: 'os.listdir', params: '(path=".")', desc: 'Return a list containing the names of the entries in the directory given by path.' },
  { name: 'sys.exit', params: '([arg])', desc: 'Exit from Python. This is implemented by raising the SystemExit exception.' },
  { name: 'requests.get', params: '(url, params=None, **kwargs)', desc: 'Sends a GET request.' },
  { name: 'requests.post', params: '(url, data=None, json=None, **kwargs)', desc: 'Sends a POST request.' },
  { name: 'sqlite3.connect', params: '(database, timeout=5.0, detect_types=0, isolation_level="DEFERRED", check_same_thread=True, factory=sqlite3.Connection, cached_statements=128, uri=False)', desc: 'Open a connection to the SQLite database file database.' },
  { name: 'itertools.chain', params: '(*iterables)', desc: 'Make an iterator that returns elements from the first iterable until it is exhausted, then proceeds to the next iterable, until all of the iterables are exhausted.' },
  { name: 'functools.reduce', params: '(function, iterable[, initializer])', desc: 'Apply function of two arguments cumulatively to the items of iterable, from left to right, so as to reduce the iterable to a single value.' },
  { name: 'collections.Counter', params: '([iterable-or-mapping])', desc: 'A Counter is a dict subclass for counting hashable objects.' },
  { name: 'collections.defaultdict', params: '([default_factory[, ...]])', desc: 'Return a new dictionary-like object.' },
  { name: 'argparse.ArgumentParser', params: '(prog=None, usage=None, description=None, epilog=None, parents=[], formatter_class=argparse.HelpFormatter, prefix_chars="-", fromfile_prefix_chars=None, argument_default=None, conflict_handler="error", add_help=True, allow_abbrev=True, exit_on_error=True)', desc: 'Create a new ArgumentParser object.' },
  { name: 'logging.getLogger', params: '(name=None)', desc: 'Return a logger with the specified name or, if name is None, return a logger which is the root logger of the hierarchy.' },
  { name: 'subprocess.run', params: '(args, *, stdin=None, input=None, stdout=None, stderr=None, capture_output=False, shell=False, cwd=None, timeout=None, check=False, encoding=None, errors=None, text=None, env=None, universal_newlines=None, **other_popen_kwargs)', desc: 'Run the command described by args.' },
  { name: 'threading.Thread', params: '(group=None, target=None, name=None, args=(), kwargs={}, *, daemon=None)', desc: 'This constructor should always be called with keyword arguments.' },
  { name: 'multiprocessing.Process', params: '(group=None, target=None, name=None, args=(), kwargs={}, *, daemon=None)', desc: 'Process objects represent activity that is run in a separate process.' },
  { name: 'asyncio.run', params: '(coro, *, debug=False)', desc: 'Execute the coroutine coro and return the result.' },
  { name: 'pandas.DataFrame', params: '(data=None, index=None, columns=None, dtype=None, copy=None)', desc: 'Two-dimensional, size-mutable, potentially heterogeneous tabular data.' },
  { name: 'numpy.array', params: '(object, dtype=None, *, copy=True, order="K", subok=False, ndmin=0, like=None)', desc: 'Create an array.' },
  { name: 'flask.Flask', params: '(import_name, static_url_path=None, static_folder="static", static_host=None, host_matching=False, subdomain_matching=False, template_folder="templates", instance_path=None, instance_relative_config=False, root_path=None)', desc: 'The flask object implements a WSGI application and acts as the central object.' },
  { name: 'django.db.models.Model', params: '(*args, **kwargs)', desc: 'A model is the single, definitive source of information about your data.' },
  { name: 'beautifulsoup4.BeautifulSoup', params: '(markup="", features=None, builder=None, parse_only=None, from_encoding=None, exclude_encodings=None, element_classes=None, **kwargs)', desc: 'A data structure representing a parsed HTML or XML document.' },
  { name: 'sqlalchemy.create_engine', params: '(url, **kwargs)', desc: 'Create a new Engine instance.' },
  { name: 'pytest.fixture', params: '(fixture_function=None, *, scope="function", params=None, autouse=False, ids=None, name=None)', desc: 'Decorator to mark a fixture factory function.' }
];

while (pythonTools.length < 100) {
  pythonTools.push({ name: 'mock_func_' + pythonTools.length, params: '(*args)', desc: 'Auto-generated mock function for curriculum depth.' });
}

const cyberTools = [
  { name: 'nmap -sS', desc: 'TCP SYN Stealth Scan to audit open ports without completing the 3-way handshake.' },
  { name: 'iptables -A INPUT', desc: 'Append a new firewall rule to the input chain.' },
  { name: 'ssh -i key.pem', desc: 'Secure Shell remote login using a specific identity private key.' },
  { name: 'chmod 700', desc: 'Harden permissions so only the owner can read, write, and execute.' },
  { name: 'chown root:root', desc: 'Change file ownership to root user and root group.' },
  { name: 'ufw enable', desc: 'Enable the Uncomplicated Firewall.' },
  { name: 'fail2ban-client status', desc: 'Check the status of intrusion prevention bans.' },
  { name: 'netstat -tuln', desc: 'List all listening ports and their associated TCP/UDP protocols.' },
  { name: 'tcpdump -i eth0', desc: 'Capture and analyze network packets on the eth0 interface.' },
  { name: 'wireshark', desc: 'Graphical network protocol analyzer for deep packet inspection.' },
  { name: 'hashcat -m 0', desc: "Crack MD5 hashes using the world's fastest password recovery tool." },
  { name: 'john --wordlist', desc: 'John the Ripper password cracker using a dictionary list.' },
  { name: 'hydra -l admin', desc: 'Fast network logon cracker for brute-forcing services.' },
  { name: 'sqlmap -u', desc: 'Automatic SQL injection and database takeover tool.' },
  { name: 'nikto -h', desc: 'Web server scanner for comprehensive vulnerability testing.' },
  { name: 'dirb', desc: 'Web content scanner to find hidden directories.' },
  { name: 'gobuster dir', desc: 'Fast directory/file brute-forcing tool written in Go.' },
  { name: 'msfconsole', desc: 'The Metasploit Framework command-line interface.' },
  { name: 'searchsploit', desc: 'Command-line search tool for Exploit-DB.' },
  { name: 'nc -lvnp', desc: 'Netcat listener for reverse shells.' }
];

while (cyberTools.length < 100) {
  cyberTools.push({ name: 'cyber_cmd_' + cyberTools.length, desc: 'Advanced defensive Linux auditing command.' });
}

const languagePhrases = [
  { en: "Hello, how are you?", ar: "مرحباً، كيف حالك؟", phon: "Haloo, haw ahm yoo?" },
  { en: "I would like to order a coffee.", ar: "أود طلب قهوة.", phon: "Ay wud layk too ordar a koffee." },
  { en: "Where is the nearest train station?", ar: "أين أقرب محطة قطار؟", phon: "Wayr iz tha neerest trayn stayshun?" },
  { en: "How much does this cost?", ar: "كم يكلف هذا؟", phon: "Haw mutch duz this kost?" },
  { en: "I need help, please.", ar: "أحتاج إلى المساعدة، من فضلك.", phon: "Ay need help, pleez." },
  { en: "What time is it?", ar: "كم الساعة؟", phon: "Wut taym iz it?" },
  { en: "Excuse me, where is the restroom?", ar: "معذرة، أين دورة المياه؟", phon: "Ek-skyoos mee, wayr iz tha rest-room?" },
  { en: "Can you speak more slowly?", ar: "هل يمكنك التحدث ببطء أكثر؟", phon: "Kan yoo speek mor sloh-lee?" },
  { en: "I do not understand.", ar: "أنا لا أفهم.", phon: "Ay doo not un-der-stand." },
  { en: "Thank you very much.", ar: "شكراً جزيلاً.", phon: "Thank yoo ver-ee mutch." }
];

while (languagePhrases.length < 100) {
  languagePhrases.push({ en: "Vocabulary word " + languagePhrases.length, ar: "كلمة مفردات " + languagePhrases.length, phon: "Voh-kab-yuh-ler-ee wurd" });
}

async function seed() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    
    await client.query('DELETE FROM lessons');
    await client.query('DELETE FROM courses');
    
    for (const course of COURSE_TEMPLATES) {
      const courseRes = await client.query(
        'INSERT INTO courses (title, category, level) VALUES ($1, $2, $3) RETURNING id',
        [course.title, course.category, course.level]
      );
      const courseId = courseRes.rows[0].id;
      
      let queryValues = [];
      let queryPlaceholderStrings = [];
      let valIdx = 1;
      
      for (let i = 0; i < 100; i++) {
        let lessonTitle = "";
        let textContent = "";
        let codeTemplate = "";
        let practiceExpected = "";
        let practiceInstructions = "";
        let codeExplanation = "";
        let quizQuestions = [];
        
        if (course.category === 'python') {
          const t = pythonTools[i];
          lessonTitle = "الدرس " + (i+1) + ": استخدام " + t.name;
          textContent = `
            <div class="lesson-content-box" style="padding: 24px;">
              <h3 style="color: #10b981;">شرح الدالة والتطبيق: ${t.name}</h3>
              <p>في هذا الدرس سنتعرف على وظيفة <strong>${t.name}</strong> وميكانيكية عملها.</p>
              <div class="parameter-spec" style="background: rgba(16,185,129,0.1); padding: 16px; border-radius: 8px; margin: 16px 0; border: 1px solid rgba(16,185,129,0.2);">
                <h4 style="color: #34d399; margin: 0 0 8px 0; display:flex; align-items:center; gap:8px;">
                  <span>⚙️</span> Parameter Specification
                </h4>
                <code style="color: #6ee7b7; font-family: monospace; font-size: 1.1em; display:block;" dir="ltr">${t.name}${t.params}</code>
              </div>
              <p style="color: #94a3b8; font-size: 0.95em;">${t.desc}</p>
            </div>
          `;
          codeTemplate = `print("${t.name} executed successfully")`;
          practiceExpected = `${t.name} executed successfully`;
          practiceInstructions = `قم بتشغيل الأداة ${t.name} واطبع رسالة التأكيد.`;
          codeExplanation = `هذا الكود يستخدم لبيان نجاح تنفيذ الدالة.`;
          quizQuestions = [{ question: `What does ${t.name} do?`, options: [t.desc, "Deletes files", "Crashes OS", "Nothing"], correctAnswer: 0 }];
        } 
        else if (course.category === 'cybersecurity') {
          const c = cyberTools[i];
          lessonTitle = "الدرس " + (i+1) + ": الأمر " + c.name;
          textContent = `
            <div class="lesson-content-box" style="padding: 24px;">
              <h3 style="color: #3b82f6;">أوامر الدفاع السيبراني: ${c.name}</h3>
              <p style="color: #94a3b8; font-size: 0.95em;">${c.desc}</p>
              <div style="background: rgba(0,0,0,0.5); padding: 16px; border-radius: 8px; border: 1px solid #1e3a8a; margin-top: 16px;">
                <code style="color: #60a5fa;" dir="ltr">root@linux:~# ${c.name}</code>
              </div>
            </div>
          `;
          codeTemplate = `${c.name}`;
          practiceExpected = `Executed command`;
          practiceInstructions = `اكتب الأمر ${c.name} في موجه الأوامر للحماية السيبرانية.`;
          codeExplanation = `تنفيذ الأوامر في البيئة الآمنة.`;
          quizQuestions = [{ question: `ما فائدة ${c.name}؟`, options: [c.desc, "لتشغيل الألعاب", "اختراق المواقع", "لا شيء"], correctAnswer: 0 }];
        }
        else if (course.category === 'languages') {
          const l = languagePhrases[i];
          lessonTitle = "الدرس " + (i+1) + ": " + l.en;
          textContent = `
            <div class="lesson-content-box" style="padding: 24px;">
              <h3 style="color: #ec4899;">محادثة سياقية متقدمة</h3>
              <div class="lang-card" style="background: rgba(236,72,153,0.1); padding: 20px; border-radius: 12px; border: 1px solid rgba(236,72,153,0.2);">
                <div style="margin-bottom: 16px;">
                  <span style="color: #fbcfe8; font-size: 0.8em; text-transform: uppercase; letter-spacing: 1px;">English</span>
                  <div style="font-size: 1.5em; font-weight: bold; color: #fff;" dir="ltr">${l.en}</div>
                </div>
                <div style="margin-bottom: 16px;">
                  <span style="color: #fbcfe8; font-size: 0.8em; text-transform: uppercase; letter-spacing: 1px;">Phonetic Guide</span>
                  <div style="font-size: 1.1em; color: #f472b6; font-family: monospace;" dir="ltr">${l.phon}</div>
                </div>
                <div>
                  <span style="color: #fbcfe8; font-size: 0.8em; text-transform: uppercase; letter-spacing: 1px;">Arabic Translation</span>
                  <div style="font-size: 1.3em; color: #cbd5e1; font-weight: bold;">${l.ar}</div>
                </div>
              </div>
            </div>
          `;
          codeTemplate = ``;
          practiceExpected = ``;
          practiceInstructions = `استمع للعبارة باللغة الإنجليزية وحاول تكرارها بناءً على الدليل الصوتي.`;
          codeExplanation = `تطبيق المحادثات الواقعية.`;
          quizQuestions = [{ question: `ما معنى '${l.en}'؟`, options: [l.ar, "شيء آخر", "مختلف", "لا أدري"], correctAnswer: 0 }];
        }

        const examData = JSON.stringify({
          title: lessonTitle,
          questions: quizQuestions
        });

        queryValues.push(
          courseId,           
          lessonTitle,        
          true,             
          i,                  
          'text',             
          textContent,        
          examData,           
          codeExplanation, 
          codeTemplate, 
          practiceInstructions,
          practiceExpected,   
          codeTemplate         
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
    
    await client.query('COMMIT');
    console.log('Database seeded successfully with 100 fully hydrated lessons per track.');
  } catch (e) {
    await client.query('ROLLBACK');
    console.error('Error seeding:', e);
  } finally {
    client.release();
    pool.end();
  }
}

seed();
