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
exports.PaymentsController = void 0;
const common_1 = require("@nestjs/common");
const payments_service_1 = require("./payments.service");
const create_payment_dto_1 = require("./dto/create-payment.dto");
const update_payment_dto_1 = require("./dto/update-payment.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../shared/guards/roles.guard");
const permissions_guard_1 = require("../../shared/guards/permissions.guard");
const roles_decorator_1 = require("../../shared/decorators/roles.decorator");
const permissions_decorator_1 = require("../../shared/decorators/permissions.decorator");
const user_role_enum_1 = require("../../common/enums/user-role.enum");
let PaymentsController = class PaymentsController {
    paymentsService;
    constructor(paymentsService) {
        this.paymentsService = paymentsService;
    }
    create(createPaymentDto, req) {
        return this.paymentsService.create(createPaymentDto, req.user.user_id);
    }
    findAll(userId, courseId, paymentStatus, paymentMethod, page, limit, search) {
        return this.paymentsService.findAll(userId ? Number(userId) : undefined, courseId ? Number(courseId) : undefined, paymentStatus, paymentMethod, page ? Number(page) : undefined, limit ? Number(limit) : undefined, search);
    }
    getStats(startDate, endDate) {
        const start = startDate ? new Date(startDate) : undefined;
        const end = endDate ? new Date(endDate) : undefined;
        return this.paymentsService.getPaymentStats(start, end);
    }
    getMonthlyRevenue(year) {
        return this.paymentsService.getRevenueByMonth(year || new Date().getFullYear());
    }
    getTopCoursesByRevenue(limit) {
        return this.paymentsService.getTopCoursesByRevenue(limit);
    }
    findOne(id) {
        return this.paymentsService.findById(id);
    }
    update(id, updatePaymentDto) {
        return this.paymentsService.update(id, updatePaymentDto);
    }
    updateStatus(id, status, transactionId) {
        return this.paymentsService.updatePaymentStatus(id, status, transactionId);
    }
    processRefund(id, refundAmount, reason) {
        return this.paymentsService.processRefund(id, refundAmount, reason);
    }
    remove(id) {
        return this.paymentsService.remove(id);
    }
};
exports.PaymentsController = PaymentsController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.SALES_STAFF),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.PAYMENT_RECORD),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_payment_dto_1.CreatePaymentDto, Object]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.SALES_STAFF),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.PAYMENT_VIEW, user_role_enum_1.Permission.PAYMENT_MANAGE_SALES_STAFF),
    __param(0, (0, common_1.Query)('userId')),
    __param(1, (0, common_1.Query)('courseId')),
    __param(2, (0, common_1.Query)('paymentStatus')),
    __param(3, (0, common_1.Query)('paymentMethod')),
    __param(4, (0, common_1.Query)('page')),
    __param(5, (0, common_1.Query)('limit')),
    __param(6, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String, Number, Number, String]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('stats'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.SALES_STAFF),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.PAYMENT_MANAGE),
    __param(0, (0, common_1.Query)('startDate')),
    __param(1, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)('revenue/monthly'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.SALES_STAFF),
    __param(0, (0, common_1.Query)('year')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "getMonthlyRevenue", null);
__decorate([
    (0, common_1.Get)('top-courses'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.SALES_STAFF),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "getTopCoursesByRevenue", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.SALES_STAFF),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.SALES_STAFF),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.PAYMENT_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_payment_dto_1.UpdatePaymentDto]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/status'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.SALES_STAFF),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('status')),
    __param(2, (0, common_1.Body)('transactionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Post)(':id/refund'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.SALES_STAFF),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('refundAmount')),
    __param(2, (0, common_1.Body)('reason')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "processRefund", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "remove", null);
exports.PaymentsController = PaymentsController = __decorate([
    (0, common_1.Controller)('payments'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, permissions_guard_1.PermissionsGuard),
    __metadata("design:paramtypes", [payments_service_1.PaymentsService])
], PaymentsController);
//# sourceMappingURL=payments.controller.js.map