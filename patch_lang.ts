import fs from 'fs';
import { languageTrackData } from './src/context/tracks/languageData';

const updates = {
  'lang-1': {
    title: "Lesson 1: Hello (مرحباً)",
    content: {
      context: "كلمة Hello هي المفتاح الأول لأي محادثة في اللغة الإنجليزية. تُستخدم للتحية في أي وقت من اليوم.",
      description: "يمكن استخدامها بشكل رسمي (Formal) أو غير رسمي (Informal). المرادفات الشائعة: Hi, Hey.",
      prototype: "Hello, [Name]",
      parameters: "الكلمة نفسها أو تليها اسم الشخص",
      return_value: "استجابة ودية",
      example: "Hello, Ahmad. How are you?"
    },
    exercise_instructions: "اكتب تحية قصيرة لصديقك المسمى Ali.",
    expected_output: "Hello, Ali",
    quick_practical_examples: [
      { type: "correct", title: "تحية رسمية", code: "Hello, Mr. Smith.", explanation: "استخدام Hello مع لقب السيد يعتبر رسمياً ومهذباً." },
      { type: "wrong", title: "كتابة خاطئة", code: "Hellow", error_message: "Spelling Error", explanation: "تُكتب Hello وليس Hellow." },
      { type: "mistake", title: "الاستخدام في رسائل الوداع", code: "Hello, see you tomorrow.", explanation: "Hello تُستخدم للقاء فقط، للوداع نستخدم Goodbye." }
    ],
    exam_data: {
      title: "Quiz: Hello",
      questions: [{ question: "أي كلمة نستخدمها لبدء محادثة؟", options: ["Goodbye", "Hello", "Thanks", "Please"], correct_answer: "Hello", explanation: "Hello هي التحية الأساسية." }]
    }
  },
  'lang-2': {
    title: "Lesson 2: Goodbye (إلى اللقاء)",
    content: {
      context: "كلمة Goodbye تُستخدم لإنهاء المحادثة أو توديع شخص ما.",
      description: "يوجد اختصارات شائعة غير رسمية مثل Bye، أو عبارات أخرى مثل See you later.",
      prototype: "Goodbye!",
      parameters: "نهاية الجملة",
      return_value: "انتهاء المحادثة",
      example: "Goodbye, have a great day!"
    },
    exercise_instructions: "كيف تودع صديقك وتخبره أنك ستراه لاحقاً؟",
    expected_output: "Goodbye, see you later",
    quick_practical_examples: [
      { type: "correct", title: "وداع مختصر", code: "Bye!", explanation: "Bye هي النسخة اليومية السريعة من Goodbye." },
      { type: "wrong", title: "نطق خاطئ", code: "Goodby", error_message: "Spelling Error", explanation: "ينقصها حرف e في النهاية." },
      { type: "mistake", title: "قول Goodbye عند اللقاء", code: "Goodbye, nice to meet you.", explanation: "تُقال عند المغادرة، وليس عند بدء اللقاء." }
    ],
    exam_data: {
      title: "Quiz: Goodbye",
      questions: [{ question: "ما هي الكلمة المختصرة لـ Goodbye؟", options: ["Good", "Bye", "Hello", "See"], correct_answer: "Bye", explanation: "Bye هي الاختصار الأكثر شيوعاً." }]
    }
  },
  'lang-3': {
    title: "Lesson 3: Please (من فضلك)",
    content: {
      context: "كلمة Please هي كلمة السر للأدب واللباقة (Politeness) في الثقافة الإنجليزية.",
      description: "تُضاف دائماً عند الطلب أو السؤال. يمكن وضعها في بداية الجملة أو في نهايتها.",
      prototype: "Please + [Request]\n[Request] + please",
      parameters: "جملة الطلب",
      return_value: "طلب مهذب",
      example: "Can you help me, please?"
    },
    exercise_instructions: "اطلب كوباً من الماء (A cup of water) بطريقة مهذبة.",
    expected_output: "A cup of water, please.",
    quick_practical_examples: [
      { type: "correct", title: "الطلب في المطعم", code: "The menu, please.", explanation: "طريقة مهذبة ومباشرة للطلب." },
      { type: "wrong", title: "أمر غير مهذب", code: "Give me water.", error_message: "Too Direct/Rude", explanation: "يجب دائماً استخدام please للطلب." },
      { type: "mistake", title: "الجمع بين please وعبارة أمر قاسية", code: "Shut up, please.", explanation: "كلمة please لا تحسن من الكلمات المهينة." }
    ],
    exam_data: {
      title: "Quiz: Please",
      questions: [{ question: "أين نضع Please في الطلب: 'Help me'؟", options: ["Please help me", "Help please me", "Help me please", "الأولى والثالثة صحيحة"], correct_answer: "الأولى والثالثة صحيحة", explanation: "يمكن وضع Please في البداية أو في النهاية." }]
    }
  },
  'lang-4': {
    title: "Lesson 4: Thank you (شكراً لك)",
    content: {
      context: "تُستخدم عبارة Thank you للتعبير عن الامتنان والشكر.",
      description: "الاختصار غير الرسمي هو Thanks. للرد عليها نقول You're welcome.",
      prototype: "Thank you [for ...]",
      parameters: "السبب (اختياري)",
      return_value: "إظهار التقدير",
      example: "Thank you for your help."
    },
    exercise_instructions: "اكتب رسالة شكر قصيرة لاستلامك الهدية (the gift).",
    expected_output: "Thank you for the gift.",
    quick_practical_examples: [
      { type: "correct", title: "شكر غير رسمي", code: "Thanks a lot!", explanation: "تُستخدم كثيراً مع الأصدقاء." },
      { type: "wrong", title: "خطأ قواعدي", code: "Thank to you", error_message: "Grammar Error", explanation: "الصحيح Thank you مباشرة بدون to." },
      { type: "mistake", title: "الرد بـ Thanks بدلاً من Welcome", code: "- Thank you!\n- Thanks!", explanation: "الرد الصحيح على الشكر هو You're welcome." }
    ],
    exam_data: {
      title: "Quiz: Thank you",
      questions: [{ question: "ما هو الرد المناسب على Thank you؟", options: ["Hello", "Goodbye", "You're welcome", "Please"], correct_answer: "You're welcome", explanation: "تعني 'على الرحب والسعة'." }]
    }
  },
  'lang-5': {
    title: "Lesson 5: Yes (نعم)",
    content: {
      context: "Yes هي كلمة الموافقة الإيجابية الأساسية في الإنجليزية.",
      description: "في المحادثات اليومية، غالباً ما يستخدم الناس Yeah أو Yep.",
      prototype: "Yes, [Sentence]",
      parameters: "جملة تأكيدية",
      return_value: "إجابة بالإيجاب",
      example: "Yes, I agree."
    },
    exercise_instructions: "أجب بالموافقة على السؤال: هل أنت مستعد؟ (Are you ready?)",
    expected_output: "Yes, I am ready.",
    quick_practical_examples: [
      { type: "correct", title: "موافقة مؤكدة", code: "Yes, absolutely.", explanation: "تعني نعم بالتأكيد." },
      { type: "wrong", title: "تهجئة خاطئة", code: "Yas", error_message: "Spelling Error", explanation: "تكتب Yes." },
      { type: "mistake", title: "الإجابة بـ Yes على سؤال تفصيلي", code: "- What is your name?\n- Yes.", explanation: "Yes تستخدم للإجابة على الأسئلة التي تبدأ بـ هل (Is/Are/Do/Does)." }
    ],
    exam_data: {
      title: "Quiz: Yes",
      questions: [{ question: "ما هو الاختصار غير الرسمي لـ Yes؟", options: ["No", "Yeah", "Please", "Yus"], correct_answer: "Yeah", explanation: "Yeah هي الأكثر استخداماً في الشارع." }]
    }
  },
  'lang-6': {
    title: "Lesson 6: No (لا)",
    content: {
      context: "No هي الكلمة الأساسية للرفض أو النفي.",
      description: "تُستخدم كإجابة قاطعة، وغالباً تُتبع باعتذار (No, sorry) لتخفيف حدتها. من البدائل غير الرسمية: Nope.",
      prototype: "No, [Sentence]",
      parameters: "جملة منفية",
      return_value: "إجابة بالسلب",
      example: "No, I am not coming."
    },
    exercise_instructions: "ارفض العرض باحترام قائلاً: لا، شكراً لك.",
    expected_output: "No, thank you.",
    quick_practical_examples: [
      { type: "correct", title: "رفض مهذب", code: "No, thanks.", explanation: "دمج No مع الشكر لرفض العروض بأدب." },
      { type: "wrong", title: "استخدام Not بدلاً من No", code: "Not, I don't.", error_message: "Grammar Error", explanation: "Not تستخدم لنفي الأفعال، أما للإجابة فنستخدم No." },
      { type: "mistake", title: "الرد بـ No فقط", code: "- Would you like tea?\n- No.", explanation: "قد يُعتبر الرد بـ No فقط فظاً. الأفضل No, thank you." }
    ],
    exam_data: {
      title: "Quiz: No",
      questions: [{ question: "ما هي الكلمة البديلة غير الرسمية لـ No؟", options: ["Not", "Never", "Nope", "None"], correct_answer: "Nope", explanation: "Nope تُستخدم بين الأصدقاء للرفض السريع." }]
    }
  },
  'lang-7': {
    title: "Lesson 7: Excuse me (عذراً)",
    content: {
      context: "تُستخدم Excuse me للفت الانتباه بأدب، لطلب المرور، أو للاعتذار عن مقاطعة شخص.",
      description: "مهمة جداً عند سؤال شخص غريب في الشارع عن اتجاه ما.",
      prototype: "Excuse me, [Question/Request]",
      parameters: "السؤال أو الطلب",
      return_value: "لفت انتباه مهذب",
      example: "Excuse me, where is the station?"
    },
    exercise_instructions: "الفت انتباه النادل (waiter) في المطعم بأدب.",
    expected_output: "Excuse me, waiter.",
    quick_practical_examples: [
      { type: "correct", title: "طلب المرور", code: "Excuse me, can I pass?", explanation: "أفضل طريقة لطلب الإذن بالمرور في مكان مزدحم." },
      { type: "wrong", title: "استخدام Sorry بدلاً من Excuse me للفت الانتباه", code: "Sorry, where is the bank?", error_message: "Context Error", explanation: "Sorry تُستخدم للاعتذار عن خطأ، بينما Excuse me لافتتاح الكلام." },
      { type: "mistake", title: "نطقها بحدة", code: "EXCUSE ME!", explanation: "نبرة الصوت مهمة، نطقها بصوت عالٍ وحاد يُعتبر هجوماً أو غضباً." }
    ],
    exam_data: {
      title: "Quiz: Excuse me",
      questions: [{ question: "متى نستخدم Excuse me؟", options: ["عند كسر شيء", "عند وداع شخص", "للفت انتباه شخص لنسأله", "عند الموافقة"], correct_answer: "للفت انتباه شخص لنسأله", explanation: "هي المفتاح المهذب لافتتاح سؤال مع شخص غريب." }]
    }
  },
  'lang-8': {
    title: "Lesson 8: Sorry (آسف)",
    content: {
      context: "Sorry تُستخدم للاعتذار عن خطأ، إزعاج، أو للتعبير عن التعاطف.",
      description: "لإضافة قوة للاعتذار نستخدم I am so sorry أو I apologize (رسمية).",
      prototype: "I am sorry [for/about ...]",
      parameters: "سبب الاعتذار",
      return_value: "اعتذار وتوضيح الموقف",
      example: "I am sorry for being late."
    },
    exercise_instructions: "اعتذر لصديقك عن التأخير (late).",
    expected_output: "Sorry I am late.",
    quick_practical_examples: [
      { type: "correct", title: "التعبير عن التعاطف", code: "I am sorry for your loss.", explanation: "تُقال عند سماع أخبار سيئة مثل فقدان عزيز." },
      { type: "wrong", title: "الخلط مع Excuse me", code: "Sorry, can I squeeze past?", error_message: "Minor Usage Error", explanation: "رغم أنها مفهومة، الأصح Excuse me عند طلب المرور." },
      { type: "mistake", title: "عدم تبرير الاعتذار", code: "I am sorry.", explanation: "الأفضل دائماً توضيح سبب الاعتذار لتجنب سوء الفهم." }
    ],
    exam_data: {
      title: "Quiz: Sorry",
      questions: [{ question: "ما هو الرد اللطيف عندما يعتذر لك شخص؟", options: ["Yes", "That's okay / No problem", "You're welcome", "Goodbye"], correct_answer: "That's okay / No problem", explanation: "عبارات تعني 'لا بأس'." }]
    }
  },
  'lang-9': {
    title: "Lesson 9: Good morning (صباح الخير)",
    content: {
      context: "التحية الرسمية والمناسبة للفترة منذ الفجر وحتى الظهر (12 PM).",
      description: "من الشائع اختصارها إلى Morning بين الأصدقاء والزملاء.",
      prototype: "Good morning, [Name]",
      parameters: "اسم الشخص",
      return_value: "تحية صباحية",
      example: "Good morning, boss."
    },
    exercise_instructions: "قل صباح الخير لمعلمك (teacher).",
    expected_output: "Good morning, teacher.",
    quick_practical_examples: [
      { type: "correct", title: "الرد على التحية", code: "- Good morning!\n- Good morning to you too!", explanation: "الرد يكون بنفس العبارة." },
      { type: "wrong", title: "استخدامها بعد الظهر", code: "Time: 2:00 PM -> Good morning", error_message: "Time Error", explanation: "بعد الساعة 12 ظهراً نستخدم Good afternoon." },
      { type: "mistake", title: "نطقها ككلمة واحدة", code: "Goodmorning", explanation: "تُكتب ككلمتين منفصلتين." }
    ],
    exam_data: {
      title: "Quiz: Good morning",
      questions: [{ question: "متى تتوقف عن قول Good morning؟", options: ["بعد الساعة 10 صباحاً", "بعد الظهر (12 PM)", "عند غروب الشمس", "لا تتوقف أبداً"], correct_answer: "بعد الظهر (12 PM)", explanation: "الظهر هو الفاصل للانتقال إلى Afternoon." }]
    }
  },
  'lang-10': {
    title: "Lesson 10: Good night (تصبح على خير)",
    content: {
      context: "تُستخدم Good night فقط لتوديع شخص يذهب للنوم أو لإنهاء يوم متأخر.",
      description: "لا تُستخدم كتحية عند اللقاء ليلاً! (للقاء ليلاً نستخدم Good evening).",
      prototype: "Good night",
      parameters: "نهاية المحادثة ليلاً",
      return_value: "أمنيات بنوم هادئ",
      example: "Good night, sleep well."
    },
    exercise_instructions: "تمنى لصديقك نوماً جيداً و ليلة سعيدة.",
    expected_output: "Good night, sleep well.",
    quick_practical_examples: [
      { type: "correct", title: "توديع الأصدقاء ليلاً", code: "I'm going home now. Good night!", explanation: "استخدام مثالي عند انتهاء سهرة المغادرة." },
      { type: "wrong", title: "تحية شخص ليلاً", code: "- Arriving at a party at 9 PM: Good night everyone!", error_message: "Context Error", explanation: "Good night تعني الوداع والنوم. يجب قول Good evening." },
      { type: "mistake", title: "كتابتها متصلة", code: "Goodnight", explanation: "الصحيح قواعدياً أن تكون منفصلة، رغم أن المتصلة مقبولة في الدردشة." }
    ],
    exam_data: {
      title: "Quiz: Good night",
      questions: [{ question: "إذا قابلت صديقاً في الشارع الساعة 8 مساءً، ماذا تقول له؟", options: ["Good night", "Good evening", "Good afternoon", "Sleep well"], correct_answer: "Good evening", explanation: "مساء الخير للقاء، وتصبح على خير (night) للوداع." }]
    }
  },
  'lang-11': {
    title: "Lesson 11: Airport (المطار)",
    content: {
      context: "كلمة Airport تُشير إلى المطار. تحتوي المطارات على مصطلحات هامة مثل Departures (المغادرون)، Arrivals (القادمون).",
      description: "من أهم الأسئلة التي ستحتاجها: أين المطار؟ أو متى رحلتي؟",
      prototype: "Where is the airport?",
      parameters: "اسم المكان",
      return_value: "سؤال عن الموقع",
      example: "Take me to the airport, please."
    },
    exercise_instructions: "اطلب من سائق التاكسي أن يأخذك إلى المطار.",
    expected_output: "To the airport, please.",
    quick_practical_examples: [
      { type: "correct", title: "السؤال عن البوابة", code: "Where is gate 5?", explanation: "Gate تعني بوابة المغادرة." },
      { type: "wrong", title: "استخدام حرف جر خاطئ", code: "I am in the airport.", error_message: "Preposition Error", explanation: "الأصح قول I am AT the airport." },
      { type: "mistake", title: "الخلط بين رحلة ومطار", code: "My airport is delayed.", explanation: "المطار لا يتأخر، الرحلة (Flight) هي التي تتأخر." }
    ],
    exam_data: {
      title: "Quiz: Airport",
      questions: [{ question: "ما هو حرف الجر الصحيح للمكان مع المطار؟", options: ["in", "on", "at", "by"], correct_answer: "at", explanation: "نقول at the airport." }]
    }
  },
  'lang-12': {
    title: "Lesson 12: Hotel (الفندق)",
    content: {
      context: "مفردات الفندق ضرورية للمسافرين. Reservation (حجز)، Reception (استقبال)، Room key (مفتاح الغرفة).",
      description: "عند الوصول للفندق نقول 'Check-in'، وعند المغادرة 'Check-out'.",
      prototype: "I have a reservation.",
      parameters: "تأكيد الحجز",
      return_value: "بدء عملية التسجيل",
      example: "I would like to check-in, please."
    },
    exercise_instructions: "أخبر موظف الاستقبال أن لديك حجزاً (reservation).",
    expected_output: "I have a reservation.",
    quick_practical_examples: [
      { type: "correct", title: "طلب خدمة الغرف", code: "Room service, please.", explanation: "لطلب الطعام أو الخدمات للغرفة." },
      { type: "wrong", title: "الدفع عند الخروج", code: "I want to check-in to leave.", error_message: "Vocabulary Error", explanation: "المغادرة تُسمى Check-out." },
      { type: "mistake", title: "عدم تحديد اسم صاحب الحجز", code: "I have a reservation.", explanation: "دائماً أضف 'Under the name of [Your Name]' لتسهيل البحث." }
    ],
    exam_data: {
      title: "Quiz: Hotel",
      questions: [{ question: "ما هي الكلمة المستخدمة لتسجيل الخروج من الفندق؟", options: ["Check-in", "Check-out", "Leave", "Exit"], correct_answer: "Check-out", explanation: "مصطلح عالمي للفنادق." }]
    }
  },
  'lang-13': {
    title: "Lesson 13: Taxi (سيارة الأجرة)",
    content: {
      context: "طلب وتوجيه سيارة الأجرة من أساسيات التنقل. الكلمة البديلة في بريطانيا هي Cab.",
      description: "عليك معرفة كيفية إعطاء العنوان (Address) وطلب التوقف (Stop here).",
      prototype: "I need a taxi to [Destination].",
      parameters: "الوجهة",
      return_value: "تحديد مسار الرحلة",
      example: "How much to the hotel?"
    },
    exercise_instructions: "اسأل سائق التاكسي عن التكلفة (How much) للذهاب إلى المطار.",
    expected_output: "How much to the airport?",
    quick_practical_examples: [
      { type: "correct", title: "طلب التوقف", code: "Please stop here.", explanation: "توجيه واضح للسائق بالتوقف." },
      { type: "wrong", title: "استخدام فعل خاطئ للركوب", code: "I want to ride the taxi.", error_message: "Collocation Error", explanation: "الأصح I want to take a taxi أو catch a cab." },
      { type: "mistake", title: "عدم طلب العداد", code: "Let's go.", explanation: "في بعض الدول، يجب طلب تشغيل العداد: Please use the meter." }
    ],
    exam_data: {
      title: "Quiz: Taxi",
      questions: [{ question: "ما هو الفعل الأنسب مع التاكسي؟", options: ["Drive a taxi", "Take a taxi", "Fly a taxi", "Walk a taxi"], correct_answer: "Take a taxi", explanation: "Take هو الفعل المتلازم (Collocation) مع التاكسي والقطار." }]
    }
  },
  'lang-14': {
    title: "Lesson 14: Train (القطار)",
    content: {
      context: "التنقل بالقطار (Train) يتطلب معرفة كلمات مثل Station (المحطة)، Platform (الرصيف)، و Ticket (التذكرة).",
      description: "القطار له جدول زمني، لذا من المهم السؤال عن موعد المغادرة (Departure).",
      prototype: "Which platform for the train to [City]?",
      parameters: "اسم المدينة",
      return_value: "معرفة رصيف القطار",
      example: "When does the next train leave?"
    },
    exercise_instructions: "اسأل عن رصيف القطار المتجه إلى لندن (London).",
    expected_output: "Which platform for London?",
    quick_practical_examples: [
      { type: "correct", title: "تذكرة ذهاب فقط", code: "A single ticket, please.", explanation: "في بريطانيا Single تعني ذهاب فقط، و Return تعني ذهاب وعودة." },
      { type: "wrong", title: "الخلط بين الرصيف والمحطة", code: "Which station is the train leaving from inside the building?", error_message: "Vocabulary Error", explanation: "داخل المحطة، القطار يغادر من الرصيف (Platform) وليس المحطة." },
      { type: "mistake", title: "عدم تحديد الوجهة عند طلب التذكرة", code: "One ticket please.", explanation: "يجب تحديد الوجهة: One ticket to Paris, please." }
    ],
    exam_data: {
      title: "Quiz: Train",
      questions: [{ question: "ماذا يسمى الرصيف الذي يقف عليه القطار في المحطة؟", options: ["Sidewalk", "Platform", "Street", "Gate"], correct_answer: "Platform", explanation: "Platform هو رصيف القطارات، بينما Gate للطائرات." }]
    }
  },
  'lang-15': {
    title: "Lesson 15: Bus (الحافلة)",
    content: {
      context: "استخدام الحافلة (Bus) يتطلب الوقوف في المحطة (Bus stop) ومعرفة رقم المسار (Route number).",
      description: "الباص يعتبر وسيلة النقل العامة الأرخص في معظم الدول.",
      prototype: "Does this bus go to [Destination]?",
      parameters: "الوجهة المطلوبة",
      return_value: "التأكد من مسار الحافلة",
      example: "How much is the bus fare?"
    },
    exercise_instructions: "اسأل السائق إذا كانت الحافلة تذهب إلى وسط المدينة (City Center).",
    expected_output: "Does this bus go to the city center?",
    quick_practical_examples: [
      { type: "correct", title: "طلب التوقف", code: "Next stop, please.", explanation: "يخبر السائق أنك تريد النزول في المحطة القادمة." },
      { type: "wrong", title: "فعل خاطئ للركوب", code: "Enter the bus.", error_message: "Collocation Error", explanation: "الصحيح هو Get on the bus للركوب، و Get off للنزول." },
      { type: "mistake", title: "الدفع النقدي بدون فكة", code: "Giving a $100 bill to the driver.", explanation: "الباصات غالباً تتطلب Exact change (المبلغ بالضبط)." }
    ],
    exam_data: {
      title: "Quiz: Bus",
      questions: [{ question: "ما هو الفعل المركب (Phrasal verb) للنزول من الحافلة؟", options: ["Get out", "Get down", "Get off", "Get away"], correct_answer: "Get off", explanation: "Get on للركوب و Get off للنزول." }]
    }
  },
  'lang-16': {
    title: "Lesson 16: Map (الخريطة)",
    content: {
      context: "قراءة الخريطة (Map) أو استخدام تطبيقات الخرائط يحتاج لكلمات تحديد الاتجاهات.",
      description: "أهم الكلمات: North (شمال)، South (جنوب)، East (شرق)، West (غرب).",
      prototype: "Can you show me on the map?",
      parameters: "موقع على الخريطة",
      return_value: "توضيح بصري للموقع",
      example: "We are here on the map."
    },
    exercise_instructions: "اسأل شخصاً أن يريك موقعك الحالي (here) على الخريطة.",
    expected_output: "Can you show me here on the map?",
    quick_practical_examples: [
      { type: "correct", title: "تحديد الموقع الحالي", code: "Where are we on this map?", explanation: "سؤال أساسي لتحديد نقطة الانطلاق." },
      { type: "wrong", title: "حرف جر خاطئ", code: "Look in the map.", error_message: "Preposition Error", explanation: "الصحيح Look AT the map أو ON the map." },
      { type: "mistake", title: "تجاهل مقياس الرسم", code: "It looks close on the map.", explanation: "يجب التأكد من المسافة الفعلية فربما تستغرق ساعات مشياً." }
    ],
    exam_data: {
      title: "Quiz: Map",
      questions: [{ question: "كيف تقول 'هل يمكنك أن تريني على الخريطة'؟", options: ["Show me in map", "Can you show me on the map?", "Where is map?", "Look map"], correct_answer: "Can you show me on the map?", explanation: "طلب مهذب وصحيح قواعدياً." }]
    }
  },
  'lang-17': {
    title: "Lesson 17: Ticket (التذكرة)",
    content: {
      context: "التذكرة (Ticket) ضرورية للسفر أو الدخول للفعاليات.",
      description: "يمكن أن تكون التذكرة ذهاب فقط (One-way / Single) أو ذهاب وعودة (Round-trip / Return).",
      prototype: "I would like to buy a ticket to [Place].",
      parameters: "المكان المقصود",
      return_value: "شراء التذكرة",
      example: "Two tickets to the museum, please."
    },
    exercise_instructions: "اطلب شراء تذكرة ذهاب وعودة (Round-trip ticket) إلى نيويورك.",
    expected_output: "A round-trip ticket to New York, please.",
    quick_practical_examples: [
      { type: "correct", title: "تحديد العدد", code: "Three adult tickets and one child.", explanation: "توضيح دقيق لتفاصيل التذاكر المطلوبة." },
      { type: "wrong", title: "استخدام كلمة خاطئة للسعر", code: "What is the price of the bus?", error_message: "Vocabulary Error", explanation: "الأفضل السؤال عن Fare (أجرة) بدلاً من Price للرحلات." },
      { type: "mistake", title: "نسيان الاحتفاظ بالتذكرة", code: "Throwing the ticket after getting on the train.", explanation: "قد يطلب المفتش (Inspector) رؤية التذكرة أثناء الرحلة." }
    ],
    exam_data: {
      title: "Quiz: Ticket",
      questions: [{ question: "ما هو المصطلح الأمريكي لتذكرة ذهاب وعودة؟", options: ["Single", "Return", "Round-trip", "Two-way"], correct_answer: "Round-trip", explanation: "Round-trip (أمريكي)، Return (بريطاني)." }]
    }
  },
  'lang-18': {
    title: "Lesson 18: Luggage (الأمتعة)",
    content: {
      context: "الأمتعة أو الحقائب تسمى Luggage أو Baggage، وتُعتبر أسماء غير قابلة للعد في الإنجليزية.",
      description: "في المطار ستحتاج للسؤال عن Baggage claim (مكان استلام الأمتعة) أو Hand luggage (حقيبة اليد).",
      prototype: "Where is the luggage claim?",
      parameters: "مكان الاستلام",
      return_value: "العثور على الحقائب",
      example: "I lost my luggage."
    },
    exercise_instructions: "اسأل عن مكان استلام الأمتعة (Baggage claim).",
    expected_output: "Where is the baggage claim?",
    quick_practical_examples: [
      { type: "correct", title: "الاستعلام عن الوزن", code: "What is the luggage weight limit?", explanation: "سؤال هام قبل تسليم الحقائب للميزان." },
      { type: "wrong", title: "جمع كلمة Luggage", code: "I have three luggages.", error_message: "Grammar Error", explanation: "الكلمة لا تُجمع بـ s. قل: three pieces of luggage أو three bags." },
      { type: "mistake", title: "ترك الأمتعة دون مراقبة", code: "Leaving bags unattended.", explanation: "مخالفة أمنية خطيرة في جميع المطارات." }
    ],
    exam_data: {
      title: "Quiz: Luggage",
      questions: [{ question: "كيف تقول 'لدي حقيبتان' بشكل صحيح؟", options: ["I have two luggages", "I have two bags", "I have two luggaging", "I have two baggage"], correct_answer: "I have two bags", explanation: "Luggage و Baggage لا تُجمع بـ s." }]
    }
  },
  'lang-19': {
    title: "Lesson 19: Passport (جواز السفر)",
    content: {
      context: "الوثيقة الأهم في السفر. سيطلبها منك موظف الجوازات (Customs / Immigration).",
      description: "العبارة التي ستسمعها دائماً: 'Your passport and boarding pass, please'.",
      prototype: "Here is my passport.",
      parameters: "تقديم الوثيقة",
      return_value: "التحقق من الهوية",
      example: "I need to renew my passport."
    },
    exercise_instructions: "قل للموظف: تفضل جواز سفري (Here is my passport).",
    expected_output: "Here is my passport.",
    quick_practical_examples: [
      { type: "correct", title: "فقدان الجواز", code: "I lost my passport, where is the embassy?", explanation: "سؤال طارئ للبحث عن السفارة لاستخراج بدل فاقد." },
      { type: "wrong", title: "إعطاء جواز شخص آخر بدون إذن", code: "This is my friend's passport.", error_message: "Security Protocol", explanation: "في الجمارك، يجب أن يقدم كل شخص جوازه بيده." },
      { type: "mistake", title: "انتهاء الصلاحية", code: "Traveling with 1 month validity.", explanation: "معظم الدول تشترط صلاحية 6 أشهر على الأقل في الجواز." }
    ],
    exam_data: {
      title: "Quiz: Passport",
      questions: [{ question: "ماذا ترد عندما يقول الموظف 'Passport, please'؟", options: ["It is a passport", "Here you are", "No", "Goodbye"], correct_answer: "Here you are", explanation: "Here you are تعني 'تفضل'." }]
    }
  },
  'lang-20': {
    title: "Lesson 20: Direction (الاتجاهات)",
    content: {
      context: "السؤال عن وإعطاء الاتجاهات مهارة حيوية. أهم الكلمات: Right (يمين)، Left (يسار)، Straight (إلى الأمام).",
      description: "تستخدم أفعال الأمر (Imperatives) مثل Turn right (انعطف يميناً) أو Go straight (سر للأمام).",
      prototype: "How do I get to [Place]?",
      parameters: "المكان المراد الوصول إليه",
      return_value: "الحصول على التوجيهات",
      example: "Turn left at the next traffic light."
    },
    exercise_instructions: "اسأل عن كيفية الوصول إلى المستشفى (the hospital).",
    expected_output: "How do I get to the hospital?",
    quick_practical_examples: [
      { type: "correct", title: "وصف مسار", code: "Go straight and turn right.", explanation: "توجيه واضح وبسيط." },
      { type: "wrong", title: "استخدام حرف جر خاطئ للاتجاهات", code: "Turn in the left.", error_message: "Preposition Error", explanation: "الصحيح Turn left أو On the left." },
      { type: "mistake", title: "استخدام كلمات معقدة للغرباء", code: "Proceed northbound until the intersection.", explanation: "الأفضل استخدام لغة بسيطة: Go straight until the traffic light." }
    ],
    exam_data: {
      title: "Quiz: Directions",
      questions: [{ question: "كيف تأمر شخصاً بالانعطاف يميناً؟", options: ["Go right", "Turn right", "Walk right", "Take right"], correct_answer: "Turn right", explanation: "Turn هو الفعل المستخدم لتغيير الاتجاهات." }]
    }
  }
};

const updatedData = languageTrackData.map(lesson => {
  if (updates[lesson.lesson_slug]) {
    return { ...lesson, ...updates[lesson.lesson_slug], lesson_type: 'concept' };
  }
  return lesson;
});

fs.writeFileSync(
  './src/context/tracks/languageData.ts',
  "export const languageTrackData = " + JSON.stringify(updatedData, null, 2) + ";\n",
  'utf8'
);
console.log('Language Phase 3 (20 lessons) patched successfully!');
