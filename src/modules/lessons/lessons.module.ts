import { Module } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonsController } from './lessons.controller';
import { PrismaService } from '../../prisma.service';
import { FilesModule } from '../files/files.module';

@Module({
  imports: [FilesModule],
  providers: [LessonsService, PrismaService],
  controllers: [LessonsController],
  exports: [LessonsService],
})
export class LessonsModule {}
