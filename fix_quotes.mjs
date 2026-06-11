import fs from 'fs';

let content = fs.readFileSync('src/context/tracks/pythonData.ts', 'utf8');

// The problematic lines
const targetExpectedOutput = `"expected_output": "She said, "Welcome to the platform" today",`;
const correctExpectedOutput = `"expected_output": "She said, \\"Welcome to the platform\\" today",`;

const targetExplanation = `"explanation": "استخدم علامة التنصيص المفردة ' من الخارج أو علامة \\" في الداخل."`;
const correctExplanation = `"explanation": "استخدم علامة التنصيص المفردة ' من الخارج أو علامة \\\\\\" في الداخل."`;

// The code line has backslashes that might be messing up
const targetCode = `"code": "# قم بتعديل السطر التالي ليعمل باستخدام علامات تنصيص مختلفة\\nwelcome = \\"She said, \\\\\\"Welcome to the platform\\\\\\" today\\"\\n",`;
const correctCode = `"code": "# قم بتعديل السطر التالي ليعمل باستخدام علامات تنصيص مختلفة\\nwelcome = 'She said, \\\\\\"Welcome to the platform\\\\\\" today'\\n",`;

content = content.replace(targetExpectedOutput, correctExpectedOutput);
content = content.replace(targetExplanation, correctExplanation);
content = content.replace(targetCode, correctCode);

// Let's also do a fallback replace just in case the arabic characters got garbled in PowerShell output but not in the file
content = content.replace(/"expected_output": "She said, "Welcome to the platform" today",/g, '"expected_output": "She said, \\"Welcome to the platform\\" today",');

fs.writeFileSync('src/context/tracks/pythonData.ts', content);
console.log('Fixed quotes');
