import { Module } from '@nestjs/common';
import { ClassGroupsController } from './class-groups.controller';
import { ClassGroupsService } from './class-groups.service';
import { PrismaService } from '../../prisma.service';

@Module({
  controllers: [ClassGroupsController],
  providers: [ClassGroupsService, PrismaService],
  exports: [ClassGroupsService],
})
export class ClassGroupsModule {}

