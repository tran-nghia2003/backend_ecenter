"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamType = exports.ClassStatus = exports.ClassType = exports.CourseStatus = exports.CourseLevel = void 0;
var CourseLevel;
(function (CourseLevel) {
    CourseLevel["BEGINNER"] = "beginner";
    CourseLevel["INTERMEDIATE"] = "intermediate";
    CourseLevel["ADVANCED"] = "advanced";
})(CourseLevel || (exports.CourseLevel = CourseLevel = {}));
var CourseStatus;
(function (CourseStatus) {
    CourseStatus["ACTIVE"] = "active";
    CourseStatus["INACTIVE"] = "inactive";
    CourseStatus["DRAFT"] = "draft";
})(CourseStatus || (exports.CourseStatus = CourseStatus = {}));
var ClassType;
(function (ClassType) {
    ClassType["ONLINE"] = "online";
    ClassType["OFFLINE"] = "offline";
})(ClassType || (exports.ClassType = ClassType = {}));
var ClassStatus;
(function (ClassStatus) {
    ClassStatus["SCHEDULED"] = "scheduled";
    ClassStatus["LIVE"] = "live";
    ClassStatus["COMPLETED"] = "completed";
    ClassStatus["CANCELLED"] = "cancelled";
})(ClassStatus || (exports.ClassStatus = ClassStatus = {}));
var ExamType;
(function (ExamType) {
    ExamType["MIDTERM"] = "midterm";
    ExamType["FINAL"] = "final";
    ExamType["MAKEUP"] = "makeup";
    ExamType["OTHER"] = "other";
})(ExamType || (exports.ExamType = ExamType = {}));
//# sourceMappingURL=course.enum.js.map