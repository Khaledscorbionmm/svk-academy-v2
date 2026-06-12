const fs = require('fs');
const data = fs.readFileSync('src/context/tracks/pythonData.ts', 'utf8');

const s21 = data.indexOf("id: 'python-21'");
const s22 = data.indexOf("id: 'python-22'");
if (s21 > -1 && s22 > -1) {
    console.log(data.substring(s21, s21 + 1000));
} else {
    console.log("Not found");
}
