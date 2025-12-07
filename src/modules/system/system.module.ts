import { Module } from '@nestjs/common';
import { SystemService } from './system.service';
import { SystemController } from './system.controller';
import { ActivityController } from './activity.controller';
import { PrismaService } from '../../prisma.service';
import { CloudinaryService } from '../files/cloudinary.service';

@Module({
  providers: [SystemService, PrismaService, CloudinaryService],
  controllers: [SystemController, ActivityController],
  exports: [SystemService],
})
export class SystemModule {}
