export const pythonTrackData = [
  {
    "lesson_slug": "python-1",
    "title": "int",
    "category": "Basic Types",
    "order_index": 1,
    "is_free": true,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "int(value=0)",
      "description": "أهلاً بك في عالم البرمجة! أول حاجة لازم تعرفها إن الكمبيوتر بيحتاج يخزن الأرقام عشان يتعامل معاها. الـ `int` اختصار لـ Integer، وده معناه (الأعداد الصحيحة) اللي مفيهاش أي كسور أو فاصلة عشرية. بنستخدمه لما نحب نعد حاجات كاملة، زي: عمرك، عدد الطلاب في الأكاديمية، أو عدد الجوائز اللي هتكسبها معنا! بايثون ذكية جداً، بمجرد ما تكتب رقم صحيح، هي بتعرف لوحدها إنه `int` وبتحفظه في الذاكرة فوراً.",
      "parameters": "value (اختياري): القيمة أو النص اللي عاوز تحوله لرقم صحيح. لو سبته فاضي، بايثون هتديك 0 تلقائياً.",
      "return_value": "بترجع لك رقم صحيح نقي (Integer) جاهز للعمليات الحسابية.",
      "example": "# تعال نجرب نخزن عمر الطالب ونطبعه\nstudent_age = 15\nprint(student_age)\n\n# وتحويل نص جوه علامات تنصيص لرقم حقيقي\nconverted_number = int('20')\nprint(converted_number + 5) # الناتج هيكون 25"
    }
  },
  {
    "lesson_slug": "python-2",
    "title": "float",
    "category": "Basic Types",
    "order_index": 2,
    "is_free": true,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "float(value=0.0)",
      "description": "بعد ما عرفنا الأرقام الصحيحة، تفتكر إزاي بنخزن أسعار المنتجات أو درجات الامتحان اللي فيها كسور؟ هنا بييجي دور الـ `float` (الأرقام العائمة أو العشرية). الـ `float` هو أي رقم بيحتوي على فاصلة عشرية (نقطة `.`). بنستخدمه في حسابات دقيقة جداً زي: طاقة الروبوت، أسعار الكورسات، أو النِسب المئوية.",
      "parameters": "value (اختياري): القيمة أو الرقم اللي عاوز تحوله لرقم عشري فيه فاصلة.",
      "return_value": "بترجع لك رقم عشري واخد صيغة (Float) عشان تقدر تعمل حسابات دقيقة جداً.",
      "example": "# تخزين سعر الكورس بالكسور\ncourse_price = 199.99\nprint(course_price)\n\n# تحويل رقم صحيح لـ float\nscore = float(50)\nprint(score) # الناتج هيطلع 50.0"
    }
  },
  {
    "lesson_slug": "python-3",
    "title": "str",
    "category": "Basic Types",
    "order_index": 3,
    "is_free": true,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "str(...)",
      "description": "Deep dive into str in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for str arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of str\nresult = str()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-4",
    "title": "bool",
    "category": "Basic Types",
    "order_index": 4,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "bool(...)",
      "description": "Deep dive into bool in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for bool arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of bool\nresult = bool()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-5",
    "title": "list",
    "category": "Basic Types",
    "order_index": 5,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "list(...)",
      "description": "Deep dive into list in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for list arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of list\nresult = list()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-6",
    "title": "dict",
    "category": "Basic Types",
    "order_index": 6,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "dict(...)",
      "description": "Deep dive into dict in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for dict arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of dict\nresult = dict()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-7",
    "title": "tuple",
    "category": "Basic Types",
    "order_index": 7,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "tuple(...)",
      "description": "Deep dive into tuple in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for tuple arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of tuple\nresult = tuple()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-8",
    "title": "set",
    "category": "Basic Types",
    "order_index": 8,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "set(...)",
      "description": "Deep dive into set in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for set arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of set\nresult = set()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-9",
    "title": "bytes",
    "category": "Basic Types",
    "order_index": 9,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "bytes(...)",
      "description": "Deep dive into bytes in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for bytes arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of bytes\nresult = bytes()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-10",
    "title": "frozenset",
    "category": "Basic Types",
    "order_index": 10,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "frozenset(...)",
      "description": "Deep dive into frozenset in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for frozenset arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of frozenset\nresult = frozenset()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-11",
    "title": "print",
    "category": "Built-in Functions I",
    "order_index": 11,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "print(...)",
      "description": "Deep dive into print in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for print arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of print\nresult = print()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-12",
    "title": "len",
    "category": "Built-in Functions I",
    "order_index": 12,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "len(...)",
      "description": "Deep dive into len in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for len arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of len\nresult = len()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-13",
    "title": "type",
    "category": "Built-in Functions I",
    "order_index": 13,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "type(...)",
      "description": "Deep dive into type in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for type arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of type\nresult = type()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-14",
    "title": "range",
    "category": "Built-in Functions I",
    "order_index": 14,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "range(...)",
      "description": "Deep dive into range in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for range arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of range\nresult = range()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-15",
    "title": "enumerate",
    "category": "Built-in Functions I",
    "order_index": 15,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "enumerate(...)",
      "description": "Deep dive into enumerate in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for enumerate arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of enumerate\nresult = enumerate()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-16",
    "title": "zip",
    "category": "Built-in Functions I",
    "order_index": 16,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "zip(...)",
      "description": "Deep dive into zip in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for zip arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of zip\nresult = zip()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-17",
    "title": "map",
    "category": "Built-in Functions I",
    "order_index": 17,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "map(...)",
      "description": "Deep dive into map in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for map arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of map\nresult = map()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-18",
    "title": "filter",
    "category": "Built-in Functions I",
    "order_index": 18,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "filter(...)",
      "description": "Deep dive into filter in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for filter arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of filter\nresult = filter()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-19",
    "title": "sum",
    "category": "Built-in Functions I",
    "order_index": 19,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "sum(...)",
      "description": "Deep dive into sum in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for sum arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of sum\nresult = sum()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-20",
    "title": "abs",
    "category": "Built-in Functions I",
    "order_index": 20,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "abs(...)",
      "description": "Deep dive into abs in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for abs arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of abs\nresult = abs()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-21",
    "title": "min",
    "category": "Built-in Functions II",
    "order_index": 21,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "min(...)",
      "description": "Deep dive into min in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for min arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of min\nresult = min()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-22",
    "title": "max",
    "category": "Built-in Functions II",
    "order_index": 22,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "max(...)",
      "description": "Deep dive into max in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for max arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of max\nresult = max()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-23",
    "title": "round",
    "category": "Built-in Functions II",
    "order_index": 23,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "round(...)",
      "description": "Deep dive into round in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for round arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of round\nresult = round()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-24",
    "title": "sorted",
    "category": "Built-in Functions II",
    "order_index": 24,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "sorted(...)",
      "description": "Deep dive into sorted in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for sorted arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of sorted\nresult = sorted()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-25",
    "title": "reversed",
    "category": "Built-in Functions II",
    "order_index": 25,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "reversed(...)",
      "description": "Deep dive into reversed in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for reversed arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of reversed\nresult = reversed()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-26",
    "title": "input",
    "category": "Built-in Functions II",
    "order_index": 26,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "input(...)",
      "description": "Deep dive into input in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for input arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of input\nresult = input()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-27",
    "title": "open",
    "category": "Built-in Functions II",
    "order_index": 27,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "open(...)",
      "description": "Deep dive into open in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for open arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of open\nresult = open()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-28",
    "title": "hasattr",
    "category": "Built-in Functions II",
    "order_index": 28,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "hasattr(...)",
      "description": "Deep dive into hasattr in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for hasattr arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of hasattr\nresult = hasattr()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-29",
    "title": "getattr",
    "category": "Built-in Functions II",
    "order_index": 29,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "getattr(...)",
      "description": "Deep dive into getattr in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for getattr arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of getattr\nresult = getattr()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-30",
    "title": "setattr",
    "category": "Built-in Functions II",
    "order_index": 30,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "setattr(...)",
      "description": "Deep dive into setattr in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for setattr arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of setattr\nresult = setattr()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-31",
    "title": "math.pi",
    "category": "Math & Random",
    "order_index": 31,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "math.pi(...)",
      "description": "Deep dive into math.pi in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for math.pi arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of math.pi\nresult = math.pi()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-32",
    "title": "math.sqrt",
    "category": "Math & Random",
    "order_index": 32,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "math.sqrt(...)",
      "description": "Deep dive into math.sqrt in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for math.sqrt arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of math.sqrt\nresult = math.sqrt()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-33",
    "title": "math.floor",
    "category": "Math & Random",
    "order_index": 33,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "math.floor(...)",
      "description": "Deep dive into math.floor in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for math.floor arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of math.floor\nresult = math.floor()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-34",
    "title": "math.ceil",
    "category": "Math & Random",
    "order_index": 34,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "math.ceil(...)",
      "description": "Deep dive into math.ceil in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for math.ceil arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of math.ceil\nresult = math.ceil()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-35",
    "title": "math.pow",
    "category": "Math & Random",
    "order_index": 35,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "math.pow(...)",
      "description": "Deep dive into math.pow in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for math.pow arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of math.pow\nresult = math.pow()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-36",
    "title": "random.randint",
    "category": "Math & Random",
    "order_index": 36,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "random.randint(...)",
      "description": "Deep dive into random.randint in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for random.randint arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of random.randint\nresult = random.randint()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-37",
    "title": "random.choice",
    "category": "Math & Random",
    "order_index": 37,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "random.choice(...)",
      "description": "Deep dive into random.choice in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for random.choice arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of random.choice\nresult = random.choice()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-38",
    "title": "decimal.Decimal",
    "category": "Math & Random",
    "order_index": 38,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "decimal.Decimal(...)",
      "description": "Deep dive into decimal.Decimal in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for decimal.Decimal arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of decimal.Decimal\nresult = decimal.Decimal()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-39",
    "title": "fractions.Fraction",
    "category": "Math & Random",
    "order_index": 39,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "fractions.Fraction(...)",
      "description": "Deep dive into fractions.Fraction in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for fractions.Fraction arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of fractions.Fraction\nresult = fractions.Fraction()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-40",
    "title": "statistics.mean",
    "category": "Math & Random",
    "order_index": 40,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "statistics.mean(...)",
      "description": "Deep dive into statistics.mean in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for statistics.mean arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of statistics.mean\nresult = statistics.mean()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-41",
    "title": "collections.Counter",
    "category": "Collections & Itertools",
    "order_index": 41,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "collections.Counter(...)",
      "description": "Deep dive into collections.Counter in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for collections.Counter arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of collections.Counter\nresult = collections.Counter()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-42",
    "title": "collections.defaultdict",
    "category": "Collections & Itertools",
    "order_index": 42,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "collections.defaultdict(...)",
      "description": "Deep dive into collections.defaultdict in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for collections.defaultdict arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of collections.defaultdict\nresult = collections.defaultdict()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-43",
    "title": "collections.deque",
    "category": "Collections & Itertools",
    "order_index": 43,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "collections.deque(...)",
      "description": "Deep dive into collections.deque in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for collections.deque arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of collections.deque\nresult = collections.deque()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-44",
    "title": "itertools.chain",
    "category": "Collections & Itertools",
    "order_index": 44,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "itertools.chain(...)",
      "description": "Deep dive into itertools.chain in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for itertools.chain arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of itertools.chain\nresult = itertools.chain()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-45",
    "title": "itertools.cycle",
    "category": "Collections & Itertools",
    "order_index": 45,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "itertools.cycle(...)",
      "description": "Deep dive into itertools.cycle in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for itertools.cycle arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of itertools.cycle\nresult = itertools.cycle()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-46",
    "title": "itertools.permutations",
    "category": "Collections & Itertools",
    "order_index": 46,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "itertools.permutations(...)",
      "description": "Deep dive into itertools.permutations in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for itertools.permutations arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of itertools.permutations\nresult = itertools.permutations()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-47",
    "title": "itertools.combinations",
    "category": "Collections & Itertools",
    "order_index": 47,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "itertools.combinations(...)",
      "description": "Deep dive into itertools.combinations in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for itertools.combinations arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of itertools.combinations\nresult = itertools.combinations()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-48",
    "title": "itertools.groupby",
    "category": "Collections & Itertools",
    "order_index": 48,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "itertools.groupby(...)",
      "description": "Deep dive into itertools.groupby in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for itertools.groupby arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of itertools.groupby\nresult = itertools.groupby()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-49",
    "title": "itertools.accumulate",
    "category": "Collections & Itertools",
    "order_index": 49,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "itertools.accumulate(...)",
      "description": "Deep dive into itertools.accumulate in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for itertools.accumulate arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of itertools.accumulate\nresult = itertools.accumulate()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-50",
    "title": "collections.namedtuple",
    "category": "Collections & Itertools",
    "order_index": 50,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "collections.namedtuple(...)",
      "description": "Deep dive into collections.namedtuple in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for collections.namedtuple arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of collections.namedtuple\nresult = collections.namedtuple()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-51",
    "title": "os.path.join",
    "category": "OS & System",
    "order_index": 51,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "os.path.join(...)",
      "description": "Deep dive into os.path.join in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for os.path.join arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of os.path.join\nresult = os.path.join()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-52",
    "title": "os.listdir",
    "category": "OS & System",
    "order_index": 52,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "os.listdir(...)",
      "description": "Deep dive into os.listdir in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for os.listdir arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of os.listdir\nresult = os.listdir()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-53",
    "title": "os.mkdir",
    "category": "OS & System",
    "order_index": 53,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "os.mkdir(...)",
      "description": "Deep dive into os.mkdir in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for os.mkdir arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of os.mkdir\nresult = os.mkdir()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-54",
    "title": "sys.argv",
    "category": "OS & System",
    "order_index": 54,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "sys.argv(...)",
      "description": "Deep dive into sys.argv in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for sys.argv arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of sys.argv\nresult = sys.argv()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-55",
    "title": "sys.exit",
    "category": "OS & System",
    "order_index": 55,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "sys.exit(...)",
      "description": "Deep dive into sys.exit in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for sys.exit arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of sys.exit\nresult = sys.exit()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-56",
    "title": "sys.path",
    "category": "OS & System",
    "order_index": 56,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "sys.path(...)",
      "description": "Deep dive into sys.path in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for sys.path arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of sys.path\nresult = sys.path()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-57",
    "title": "subprocess.run",
    "category": "OS & System",
    "order_index": 57,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "subprocess.run(...)",
      "description": "Deep dive into subprocess.run in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for subprocess.run arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of subprocess.run\nresult = subprocess.run()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-58",
    "title": "os.environ",
    "category": "OS & System",
    "order_index": 58,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "os.environ(...)",
      "description": "Deep dive into os.environ in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for os.environ arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of os.environ\nresult = os.environ()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-59",
    "title": "os.getcwd",
    "category": "OS & System",
    "order_index": 59,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "os.getcwd(...)",
      "description": "Deep dive into os.getcwd in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for os.getcwd arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of os.getcwd\nresult = os.getcwd()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-60",
    "title": "os.remove",
    "category": "OS & System",
    "order_index": 60,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "os.remove(...)",
      "description": "Deep dive into os.remove in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for os.remove arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of os.remove\nresult = os.remove()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-61",
    "title": "str.upper",
    "category": "String Methods",
    "order_index": 61,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "str.upper(...)",
      "description": "Deep dive into str.upper in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for str.upper arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of str.upper\nresult = str.upper()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-62",
    "title": "str.lower",
    "category": "String Methods",
    "order_index": 62,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "str.lower(...)",
      "description": "Deep dive into str.lower in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for str.lower arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of str.lower\nresult = str.lower()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-63",
    "title": "str.strip",
    "category": "String Methods",
    "order_index": 63,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "str.strip(...)",
      "description": "Deep dive into str.strip in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for str.strip arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of str.strip\nresult = str.strip()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-64",
    "title": "str.split",
    "category": "String Methods",
    "order_index": 64,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "str.split(...)",
      "description": "Deep dive into str.split in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for str.split arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of str.split\nresult = str.split()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-65",
    "title": "str.join",
    "category": "String Methods",
    "order_index": 65,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "str.join(...)",
      "description": "Deep dive into str.join in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for str.join arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of str.join\nresult = str.join()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-66",
    "title": "str.replace",
    "category": "String Methods",
    "order_index": 66,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "str.replace(...)",
      "description": "Deep dive into str.replace in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for str.replace arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of str.replace\nresult = str.replace()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-67",
    "title": "str.startswith",
    "category": "String Methods",
    "order_index": 67,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "str.startswith(...)",
      "description": "Deep dive into str.startswith in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for str.startswith arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of str.startswith\nresult = str.startswith()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-68",
    "title": "str.endswith",
    "category": "String Methods",
    "order_index": 68,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "str.endswith(...)",
      "description": "Deep dive into str.endswith in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for str.endswith arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of str.endswith\nresult = str.endswith()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-69",
    "title": "str.find",
    "category": "String Methods",
    "order_index": 69,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "str.find(...)",
      "description": "Deep dive into str.find in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for str.find arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of str.find\nresult = str.find()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-70",
    "title": "str.format",
    "category": "String Methods",
    "order_index": 70,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "str.format(...)",
      "description": "Deep dive into str.format in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for str.format arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of str.format\nresult = str.format()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-71",
    "title": "list.append",
    "category": "List & Dict Methods",
    "order_index": 71,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "list.append(...)",
      "description": "Deep dive into list.append in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for list.append arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of list.append\nresult = list.append()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-72",
    "title": "list.extend",
    "category": "List & Dict Methods",
    "order_index": 72,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "list.extend(...)",
      "description": "Deep dive into list.extend in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for list.extend arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of list.extend\nresult = list.extend()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-73",
    "title": "list.pop",
    "category": "List & Dict Methods",
    "order_index": 73,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "list.pop(...)",
      "description": "Deep dive into list.pop in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for list.pop arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of list.pop\nresult = list.pop()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-74",
    "title": "list.remove",
    "category": "List & Dict Methods",
    "order_index": 74,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "list.remove(...)",
      "description": "Deep dive into list.remove in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for list.remove arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of list.remove\nresult = list.remove()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-75",
    "title": "list.sort",
    "category": "List & Dict Methods",
    "order_index": 75,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "list.sort(...)",
      "description": "Deep dive into list.sort in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for list.sort arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of list.sort\nresult = list.sort()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-76",
    "title": "dict.get",
    "category": "List & Dict Methods",
    "order_index": 76,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "dict.get(...)",
      "description": "Deep dive into dict.get in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for dict.get arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of dict.get\nresult = dict.get()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-77",
    "title": "dict.keys",
    "category": "List & Dict Methods",
    "order_index": 77,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "dict.keys(...)",
      "description": "Deep dive into dict.keys in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for dict.keys arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of dict.keys\nresult = dict.keys()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-78",
    "title": "dict.values",
    "category": "List & Dict Methods",
    "order_index": 78,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "dict.values(...)",
      "description": "Deep dive into dict.values in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for dict.values arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of dict.values\nresult = dict.values()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-79",
    "title": "dict.items",
    "category": "List & Dict Methods",
    "order_index": 79,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "dict.items(...)",
      "description": "Deep dive into dict.items in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for dict.items arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of dict.items\nresult = dict.items()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-80",
    "title": "dict.update",
    "category": "List & Dict Methods",
    "order_index": 80,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "dict.update(...)",
      "description": "Deep dive into dict.update in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for dict.update arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of dict.update\nresult = dict.update()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-81",
    "title": "datetime.now",
    "category": "Date & Time",
    "order_index": 81,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "datetime.now(...)",
      "description": "Deep dive into datetime.now in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for datetime.now arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of datetime.now\nresult = datetime.now()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-82",
    "title": "datetime.today",
    "category": "Date & Time",
    "order_index": 82,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "datetime.today(...)",
      "description": "Deep dive into datetime.today in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for datetime.today arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of datetime.today\nresult = datetime.today()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-83",
    "title": "datetime.strptime",
    "category": "Date & Time",
    "order_index": 83,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "datetime.strptime(...)",
      "description": "Deep dive into datetime.strptime in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for datetime.strptime arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of datetime.strptime\nresult = datetime.strptime()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-84",
    "title": "datetime.strftime",
    "category": "Date & Time",
    "order_index": 84,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "datetime.strftime(...)",
      "description": "Deep dive into datetime.strftime in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for datetime.strftime arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of datetime.strftime\nresult = datetime.strftime()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-85",
    "title": "timedelta",
    "category": "Date & Time",
    "order_index": 85,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "timedelta(...)",
      "description": "Deep dive into timedelta in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for timedelta arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of timedelta\nresult = timedelta()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-86",
    "title": "date",
    "category": "Date & Time",
    "order_index": 86,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "date(...)",
      "description": "Deep dive into date in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for date arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of date\nresult = date()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-87",
    "title": "time",
    "category": "Date & Time",
    "order_index": 87,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "time(...)",
      "description": "Deep dive into time in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for time arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of time\nresult = time()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-88",
    "title": "timezone",
    "category": "Date & Time",
    "order_index": 88,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "timezone(...)",
      "description": "Deep dive into timezone in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for timezone arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of timezone\nresult = timezone()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-89",
    "title": "calendar.month",
    "category": "Date & Time",
    "order_index": 89,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "calendar.month(...)",
      "description": "Deep dive into calendar.month in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for calendar.month arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of calendar.month\nresult = calendar.month()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-90",
    "title": "time.sleep",
    "category": "Date & Time",
    "order_index": 90,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "time.sleep(...)",
      "description": "Deep dive into time.sleep in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for time.sleep arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of time.sleep\nresult = time.sleep()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-91",
    "title": "json.loads",
    "category": "Advanced Topics",
    "order_index": 91,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "json.loads(...)",
      "description": "Deep dive into json.loads in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for json.loads arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of json.loads\nresult = json.loads()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-92",
    "title": "json.dumps",
    "category": "Advanced Topics",
    "order_index": 92,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "json.dumps(...)",
      "description": "Deep dive into json.dumps in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for json.dumps arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of json.dumps\nresult = json.dumps()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-93",
    "title": "re.match",
    "category": "Advanced Topics",
    "order_index": 93,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "re.match(...)",
      "description": "Deep dive into re.match in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for re.match arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of re.match\nresult = re.match()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-94",
    "title": "re.search",
    "category": "Advanced Topics",
    "order_index": 94,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "re.search(...)",
      "description": "Deep dive into re.search in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for re.search arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of re.search\nresult = re.search()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-95",
    "title": "re.sub",
    "category": "Advanced Topics",
    "order_index": 95,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "re.sub(...)",
      "description": "Deep dive into re.sub in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for re.sub arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of re.sub\nresult = re.sub()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-96",
    "title": "asyncio.run",
    "category": "Advanced Topics",
    "order_index": 96,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "asyncio.run(...)",
      "description": "Deep dive into asyncio.run in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for asyncio.run arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of asyncio.run\nresult = asyncio.run()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-97",
    "title": "multiprocessing.Process",
    "category": "Advanced Topics",
    "order_index": 97,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "multiprocessing.Process(...)",
      "description": "Deep dive into multiprocessing.Process in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for multiprocessing.Process arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of multiprocessing.Process\nresult = multiprocessing.Process()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-98",
    "title": "threading.Thread",
    "category": "Advanced Topics",
    "order_index": 98,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "threading.Thread(...)",
      "description": "Deep dive into threading.Thread in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for threading.Thread arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of threading.Thread\nresult = threading.Thread()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-99",
    "title": "functools.partial",
    "category": "Advanced Topics",
    "order_index": 99,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "functools.partial(...)",
      "description": "Deep dive into functools.partial in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for functools.partial arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of functools.partial\nresult = functools.partial()\nprint(result)"
    }
  },
  {
    "lesson_slug": "python-100",
    "title": "functools.lru_cache",
    "category": "Advanced Topics",
    "order_index": 100,
    "is_free": false,
    "content_type": "theory",
    "duration_minutes": 5,
    "content": {
      "prototype": "functools.lru_cache(...)",
      "description": "Deep dive into functools.lru_cache in Python. This module covers syntax, edge cases, and best practices.",
      "parameters": "Detailed specifications for functools.lru_cache arguments and typing.",
      "return_value": "Returns corresponding primitive or object depending on input.",
      "example": "# Example usage of functools.lru_cache\nresult = functools.lru_cache()\nprint(result)"
    }
  }
];