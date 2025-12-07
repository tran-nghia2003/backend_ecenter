"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudyShiftsController = void 0;
const common_1 = require("@nestjs/common");
const study_shifts_service_1 = require("./study-shifts.service");
const create_study_shift_dto_1 = require("./dto/create-study-shift.dto");
const update_study_shift_dto_1 = require("./dto/update-study-shift.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../shared/guards/roles.guard");
const permissions_guard_1 = require("../../shared/guards/permissions.guard");
const roles_decorator_1 = require("../../shared/decorators/roles.decorator");
const permissions_decorator_1 = require("../../shared/decorators/permissions.decorator");
const user_role_enum_1 = require("../../common/enums/user-role.enum");
let StudyShiftsController = class StudyShiftsController {
    studyShiftsService;
    constructor(studyShiftsService) {
        this.studyShiftsService = studyShiftsService;
    }
    findAll(includeInactive, search, day, active) {
        return this.studyShiftsService.findAll({
            includeInactive,
            search,
            day,
            active: active !== undefined ? active === 'true' : undefined,
        });
    }
    findOne(id) {
        return this.studyShiftsService.findOne(id);
    }
    create(dto) {
        return this.studyShiftsService.create(dto);
    }
    update(id, dto) {
        return this.studyShiftsService.update(id, dto);
    }
    remove(id) {
        return this.studyShiftsService.remove(id);
    }
};
exports.StudyShiftsController = StudyShiftsController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CLASS_MANAGE, user_role_enum_1.Permission.CLASS_MANAGE_TEACHER),
    __param(0, (0, common_1.Query)('includeInactive', new common_1.ParseBoolPipe({ optional: true }))),
    __param(1, (0, common_1.Query)('search')),
    __param(2, (0, common_1.Query)('day')),
    __param(3, (0, common_1.Query)('active')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean, String, String, String]),
    __metadata("design:returntype", void 0)
], StudyShiftsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CLASS_MANAGE, user_role_enum_1.Permission.CLASS_MANAGE_TEACHER),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StudyShiftsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CLASS_MANAGE),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_study_shift_dto_1.CreateStudyShiftDto]),
    __metadata("design:returntype", void 0)
], StudyShiftsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CLASS_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_study_shift_dto_1.UpdateStudyShiftDto]),
    __metadata("design:returntype", void 0)
], StudyShiftsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CLASS_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StudyShiftsController.prototype, "remove", null);
exports.StudyShiftsController = StudyShiftsController = __decorate([
    (0, common_1.Controller)('study-shifts'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, permissions_guard_1.PermissionsGuard),
    __metadata("design:paramtypes", [study_shifts_service_1.StudyShiftsService])
], StudyShiftsController);
//# sourceMappingURL=study-shifts.controller.js.map