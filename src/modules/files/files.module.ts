import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { CloudinaryService } from './cloudinary.service';
import { PrismaService } from '../../prisma.service';

@Module({
  imports: [ConfigModule],
  controllers: [FilesController],
  providers: [FilesService, CloudinaryService, PrismaService],
  exports: [FilesService, CloudinaryService],
})
export class FilesModule {}
