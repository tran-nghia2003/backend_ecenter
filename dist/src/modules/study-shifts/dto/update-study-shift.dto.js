"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStudyShiftDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_study_shift_dto_1 = require("./create-study-shift.dto");
class UpdateStudyShiftDto extends (0, mapped_types_1.PartialType)(create_study_shift_dto_1.CreateStudyShiftDto) {
}
exports.UpdateStudyShiftDto = UpdateStudyShiftDto;
//# sourceMappingURL=update-study-shift.dto.js.map