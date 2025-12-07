import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { PrismaService } from '../../prisma.service';
import { CloudinaryService } from '../files/cloudinary.service';

@Module({
  providers: [CoursesService, PrismaService, CloudinaryService],
  controllers: [CoursesController],
  exports: [CoursesService],
})
export class CoursesModule {}
