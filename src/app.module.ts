import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { CoursesModule } from './modules/courses/courses.module';
import { LessonsModule } from './modules/lessons/lessons.module';
import { ProgressModule } from './modules/progress/progress.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { ChatModule } from './modules/chat/chat.module';
import { SystemModule } from './modules/system/system.module';
import { FilesModule } from './modules/files/files.module';
import { CertificatesModule } from './modules/certificates/certificates.module';
import { MinigamesModule } from './modules/minigames/minigames.module';
import { LeaderboardModule } from './modules/leaderboard/leaderboard.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { PostsModule } from './modules/posts/posts.module';
import { CommentsModule } from './modules/comments/comments.module';
import { ReactionsModule } from './modules/reactions/reactions.module';
import { RolesModule } from './modules/roles/roles.module';
import { PermissionsModule } from './modules/permissions/permissions.module';
import { ClassesModule } from './modules/classes/classes.module';
import { RegistrationsModule } from './modules/registrations/registrations.module';
import { StudyShiftsModule } from './modules/study-shifts/study-shifts.module';
import { ClassGroupsModule } from './modules/class-groups/class-groups.module';
import { PushTokensModule } from './modules/push-tokens/push-tokens.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
    CoursesModule,
    LessonsModule,
    ClassesModule,
    RegistrationsModule,
    ProgressModule,
    PaymentsModule,
    NotificationsModule,
    ChatModule,
    SystemModule,
    FilesModule,
    CertificatesModule,
    MinigamesModule,
    LeaderboardModule,
    ReviewsModule,
    PostsModule,
    CommentsModule,
    ReactionsModule,
    RolesModule,
    PermissionsModule,
    StudyShiftsModule,
    ClassGroupsModule,
    PushTokensModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
