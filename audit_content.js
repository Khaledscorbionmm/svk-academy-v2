"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pythonData_1 = require("./src/context/tracks/pythonData");
var missingTextCount = 0;
var emptyQuizzesCount = 0;
console.log("Auditing Lessons 20-100...");
for (var i = 19; i < 100; i++) {
    var lesson = pythonData_1.pythonTrackData[i];
    if (!lesson)
        continue;
    var hasText = !!lesson.text_content && lesson.text_content.trim() !== '';
    var hasExam = !!lesson.exam_data;
    if (!hasText) {
        console.log("Lesson ".concat(lesson.id, " (").concat(lesson.lesson_type, "): Missing text_content"));
        missingTextCount++;
    }
}
console.log("Total missing text: ".concat(missingTextCount));
