"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_service_1 = require("./prisma.service");
const auth_module_1 = require("./modules/auth/auth.module");
const users_module_1 = require("./modules/users/users.module");
const courses_module_1 = require("./modules/courses/courses.module");
const lessons_module_1 = require("./modules/lessons/lessons.module");
const progress_module_1 = require("./modules/progress/progress.module");
const payments_module_1 = require("./modules/payments/payments.module");
const notifications_module_1 = require("./modules/notifications/notifications.module");
const chat_module_1 = require("./modules/chat/chat.module");
const system_module_1 = require("./modules/system/system.module");
const files_module_1 = require("./modules/files/files.module");
const certificates_module_1 = require("./modules/certificates/certificates.module");
const minigames_module_1 = require("./modules/minigames/minigames.module");
const leaderboard_module_1 = require("./modules/leaderboard/leaderboard.module");
const reviews_module_1 = require("./modules/reviews/reviews.module");
const posts_module_1 = require("./modules/posts/posts.module");
const comments_module_1 = require("./modules/comments/comments.module");
const reactions_module_1 = require("./modules/reactions/reactions.module");
const roles_module_1 = require("./modules/roles/roles.module");
const permissions_module_1 = require("./modules/permissions/permissions.module");
const classes_module_1 = require("./modules/classes/classes.module");
const registrations_module_1 = require("./modules/registrations/registrations.module");
const study_shifts_module_1 = require("./modules/study-shifts/study-shifts.module");
const class_groups_module_1 = require("./modules/class-groups/class-groups.module");
const push_tokens_module_1 = require("./modules/push-tokens/push-tokens.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            courses_module_1.CoursesModule,
            lessons_module_1.LessonsModule,
            classes_module_1.ClassesModule,
            registrations_module_1.RegistrationsModule,
            progress_module_1.ProgressModule,
            payments_module_1.PaymentsModule,
            notifications_module_1.NotificationsModule,
            chat_module_1.ChatModule,
            system_module_1.SystemModule,
            files_module_1.FilesModule,
            certificates_module_1.CertificatesModule,
            minigames_module_1.MinigamesModule,
            leaderboard_module_1.LeaderboardModule,
            reviews_module_1.ReviewsModule,
            posts_module_1.PostsModule,
            comments_module_1.CommentsModule,
            reactions_module_1.ReactionsModule,
            roles_module_1.RolesModule,
            permissions_module_1.PermissionsModule,
            study_shifts_module_1.StudyShiftsModule,
            class_groups_module_1.ClassGroupsModule,
            push_tokens_module_1.PushTokensModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, prisma_service_1.PrismaService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map