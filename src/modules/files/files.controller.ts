import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Body,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  Request,
  Query,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../shared/guards/roles.guard';
import { PermissionsGuard } from '../../shared/guards/permissions.guard';
import { Roles } from '../../shared/decorators/roles.decorator';
import { RequirePermissions } from '../../shared/decorators/permissions.decorator';
import { UserRole, Permission } from '../../common/enums/user-role.enum';
import { FilesService } from './files.service';
import type { Express } from 'express';

@Controller('files')
@UseGuards(JwtAuthGuard, RolesGuard, PermissionsGuard)
export class FilesController {
  constructor(private filesService: FilesService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Request() req,
    @Body('type') type: string,
    @Body('folder') folder?: string,
  ) {
    if (!file) {
      throw new Error('No file provided');
    }

    return await this.filesService.uploadFile(
      file,
      req.user.user_id,
      type,
      folder,
    );
  }

  @Post('upload/image')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Request() req,
    @Body('type') type: string,
    @Body('folder') folder?: string,
  ) {
    if (!file) {
      throw new Error('No file provided');
    }

    // Validate image type
    if (!file.mimetype.startsWith('image/')) {
      throw new Error('File must be an image');
    }

    return await this.filesService.uploadImage(
      file,
      req.user.user_id,
      type,
      folder,
    );
  }

  @Post('upload/video')
  @UseInterceptors(FileInterceptor('file'))
  async uploadVideo(
    @UploadedFile() file: Express.Multer.File,
    @Request() req,
    @Body('type') type: string,
    @Body('folder') folder?: string,
  ) {
    if (!file) {
      throw new Error('No file provided');
    }

    // Validate video type
    if (!file.mimetype.startsWith('video/')) {
      throw new Error('File must be a video');
    }

    return await this.filesService.uploadVideo(
      file,
      req.user.user_id,
      type,
      folder,
    );
  }

  @Get(':id')
  async getFile(@Param('id') id: string) {
    return await this.filesService.getFile(+id);
  }

  @Get('user/:userId')
  @UseGuards(RolesGuard)
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.USER_MANAGE)
  async getUserFiles(
    @Param('userId') userId: string,
    @Query('type') type?: string,
  ) {
    return await this.filesService.getUserFiles(+userId, type);
  }

  @Get('my-files')
  async getMyFiles(@Request() req, @Query('type') type?: string) {
    return await this.filesService.getUserFiles(req.user.user_id, type);
  }

  @Get(':id/info')
  async getFileInfo(@Param('id') id: string) {
    return await this.filesService.getFileInfo(+id);
  }

  @Get(':id/signed-url')
  async getSignedUrl(
    @Param('id') id: string,
    @Query('options') options?: string,
  ) {
    const parsedOptions = options ? JSON.parse(options) : {};
    return await this.filesService.generateSignedUrl(+id, parsedOptions);
  }

  @Delete(':id')
  async deleteFile(@Param('id') id: string, @Request() req) {
    return await this.filesService.deleteFile(+id, req.user.user_id);
  }
}
