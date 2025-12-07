"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceStatus = exports.ContentType = exports.ProgressStatus = void 0;
var ProgressStatus;
(function (ProgressStatus) {
    ProgressStatus["NOT_STARTED"] = "not_started";
    ProgressStatus["IN_PROGRESS"] = "in_progress";
    ProgressStatus["COMPLETED"] = "completed";
})(ProgressStatus || (exports.ProgressStatus = ProgressStatus = {}));
var ContentType;
(function (ContentType) {
    ContentType["VOCABULARY"] = "vocabulary";
    ContentType["LISTENING"] = "listening";
    ContentType["QUIZ"] = "quiz";
    ContentType["VIDEO"] = "video";
    ContentType["PDF"] = "pdf";
    ContentType["WRITING"] = "writing";
})(ContentType || (exports.ContentType = ContentType = {}));
var AttendanceStatus;
(function (AttendanceStatus) {
    AttendanceStatus["JOINED"] = "joined";
    AttendanceStatus["LEFT"] = "left";
    AttendanceStatus["ABSENT"] = "absent";
    AttendanceStatus["LATE"] = "late";
    AttendanceStatus["PRESENT"] = "present";
})(AttendanceStatus || (exports.AttendanceStatus = AttendanceStatus = {}));
//# sourceMappingURL=progress.enum.js.map