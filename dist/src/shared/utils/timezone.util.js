"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVietnamCurrentDate = getVietnamCurrentDate;
exports.normalizeVietnamTimestamp = normalizeVietnamTimestamp;
const VIETNAM_TIMEZONE_OFFSET_MS = 7 * 60 * 60 * 1000;
function getVietnamCurrentDate() {
    const now = new Date();
    return new Date(now.getTime() + VIETNAM_TIMEZONE_OFFSET_MS);
}
function normalizeVietnamTimestamp(value) {
    if (value === undefined)
        return undefined;
    if (value === null || value === '')
        return null;
    const base = new Date(value);
    if (Number.isNaN(base.getTime())) {
        throw new Error('Invalid date value provided');
    }
    return new Date(base.getTime() + VIETNAM_TIMEZONE_OFFSET_MS);
}
//# sourceMappingURL=timezone.util.js.map