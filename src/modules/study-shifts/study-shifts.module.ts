import { Module } from '@nestjs/common';
import { StudyShiftsController } from './study-shifts.controller';
import { StudyShiftsService } from './study-shifts.service';
import { PrismaService } from '../../prisma.service';

@Module({
  controllers: [StudyShiftsController],
  providers: [StudyShiftsService, PrismaService],
  exports: [StudyShiftsService],
})
export class StudyShiftsModule {}

