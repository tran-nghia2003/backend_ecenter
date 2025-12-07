import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { PrismaService } from '../../prisma.service';
import { PushNotificationService } from './push-notification.service';
import { PushTokensModule } from '../push-tokens/push-tokens.module';

@Module({
  imports: [PushTokensModule],
  providers: [NotificationsService, PrismaService, PushNotificationService],
  controllers: [NotificationsController],
  exports: [NotificationsService],
})
export class NotificationsModule {}
