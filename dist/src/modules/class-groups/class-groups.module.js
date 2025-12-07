"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassGroupsModule = void 0;
const common_1 = require("@nestjs/common");
const class_groups_controller_1 = require("./class-groups.controller");
const class_groups_service_1 = require("./class-groups.service");
const prisma_service_1 = require("../../prisma.service");
let ClassGroupsModule = class ClassGroupsModule {
};
exports.ClassGroupsModule = ClassGroupsModule;
exports.ClassGroupsModule = ClassGroupsModule = __decorate([
    (0, common_1.Module)({
        controllers: [class_groups_controller_1.ClassGroupsController],
        providers: [class_groups_service_1.ClassGroupsService, prisma_service_1.PrismaService],
        exports: [class_groups_service_1.ClassGroupsService],
    })
], ClassGroupsModule);
//# sourceMappingURL=class-groups.module.js.map