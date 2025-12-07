import { Module } from '@nestjs/common';
import { ReactionsService } from './reactions.service';
import { ReactionsController } from './reactions.controller';
import { PrismaService } from '../../prisma.service';

@Module({
  providers: [ReactionsService, PrismaService],
  controllers: [ReactionsController],
  exports: [ReactionsService],
})
export class ReactionsModule {}
