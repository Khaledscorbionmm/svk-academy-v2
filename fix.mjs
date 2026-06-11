import fs from 'fs';

let content = fs.readFileSync('src/context/tracks/pythonData.ts', 'utf8');

const target = `      {
        "type": "challenge",
        "title": "إصلاح رسالة الترحيب",
        "code": "# قم بتعديل السطر التالي ليعمل باستخدام علامات تنصيص مختلفة\\nwelcome = \\"She said, \\"Welcome to the platform\\" today\\"\\n",
        "expected_output": "She said, \\"Welcome to the platform\\" today",
        "explanation": "استخدم علامة التنصيص المفردة ' من الخارج أو علامة \\" في الداخل."
      }`;

const replacement = `      {
        "type": "challenge",
        "title": "إصلاح رسالة الترحيب",
        "code": "# قم بتعديل السطر التالي ليعمل باستخدام علامات تنصيص مختلفة\\nwelcome = 'She said, \\\\\\"Welcome to the platform\\\\\\" today'\\n",
        "expected_output": "She said, \\\\\\"Welcome to the platform\\\\\\" today",
        "explanation": "استخدم علامة التنصيص المفردة ' من الخارج أو علامة \\\\\\" في الداخل."
      }`;

content = content.replace(target, replacement);

fs.writeFileSync('src/context/tracks/pythonData.ts', content);
console.log('Done');
