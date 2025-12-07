"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudyShiftsModule = void 0;
const common_1 = require("@nestjs/common");
const study_shifts_controller_1 = require("./study-shifts.controller");
const study_shifts_service_1 = require("./study-shifts.service");
const prisma_service_1 = require("../../prisma.service");
let StudyShiftsModule = class StudyShiftsModule {
};
exports.StudyShiftsModule = StudyShiftsModule;
exports.StudyShiftsModule = StudyShiftsModule = __decorate([
    (0, common_1.Module)({
        controllers: [study_shifts_controller_1.StudyShiftsController],
        providers: [study_shifts_service_1.StudyShiftsService, prisma_service_1.PrismaService],
        exports: [study_shifts_service_1.StudyShiftsService],
    })
], StudyShiftsModule);
//# sourceMappingURL=study-shifts.module.js.map