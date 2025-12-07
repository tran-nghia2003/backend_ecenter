import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  ParseIntPipe,
  Request,
  Req,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { LessonsService } from './lessons.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { ApproveLessonDto } from './dto/approve-lesson.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../shared/guards/roles.guard';
import { PermissionsGuard } from '../../shared/guards/permissions.guard';
import { Roles } from '../../shared/decorators/roles.decorator';
import { RequirePermissions } from '../../shared/decorators/permissions.decorator';
import { UserRole, Permission } from '../../common/enums/user-role.enum';

@Controller('lessons')
@UseGuards(JwtAuthGuard, RolesGuard, PermissionsGuard)
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Post()
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.LESSON_MANAGE, Permission.LESSON_MANAGE_TEACHER)
  async create(@Body() createLessonDto: CreateLessonDto, @Request() req) {
    const user = req.user;
    if (!user.permissions.includes(Permission.LESSON_MANAGE)) {
      const allowed = await this.lessonsService.isTeacherOfCourse(user.user_id, createLessonDto.course_id);
      if (!allowed) {
        const { ForbiddenException } = await import('@nestjs/common');
        throw new ForbiddenException('Bạn không thể tạo bài học cho khóa học không thuộc của bạn');
      }
    }
    return this.lessonsService.create(createLessonDto, user.user_id);
  }

  @Get()
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.LESSON_MANAGE, Permission.LESSON_MANAGE_TEACHER)
  findAll(
    @Request() req,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('search') search?: string,
    @Query('courseId') courseId?: string,
  ) {
    const pageNum = page ? Number(page) : 1;
    const limitNum = limit ? Number(limit) : 10;
    const courseIdNum = courseId ? Number(courseId) : undefined;
    const user = req.user;
    if (user?.permissions?.includes(Permission.LESSON_MANAGE)) {
      return this.lessonsService.findAll(pageNum, limitNum, search, courseIdNum);
    }
    if (user?.permissions?.includes(Permission.LESSON_MANAGE_TEACHER)) {
      return this.lessonsService.getTeacherLessons(user.user_id, pageNum, limitNum, search, courseIdNum);
    }
    return { data: [], total: 0, page: pageNum, limit: limitNum, totalPages: 0 };
  }

  @Get(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.LESSON_MANAGE, Permission.LESSON_MANAGE_TEACHER)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.lessonsService.findById(id);
  }

  @Patch(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.LESSON_MANAGE, Permission.LESSON_MANAGE_TEACHER)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateLessonDto: UpdateLessonDto,
    @Request() req,
  ) {
    const user = req.user;
    if (!user.permissions.includes(Permission.LESSON_MANAGE)) {
      const allowed = await this.lessonsService.isTeacherOfLesson(user.user_id, id);
      if (!allowed) {
        const { ForbiddenException } = await import('@nestjs/common');
        throw new ForbiddenException('Bạn không thể sửa bài học không thuộc khóa học của bạn');
      }
      // If course_id is being changed, ensure new course also belongs to teacher
      if (updateLessonDto?.course_id) {
        const allowedNew = await this.lessonsService.isTeacherOfCourse(user.user_id, updateLessonDto.course_id as any);
        if (!allowedNew) {
          const { ForbiddenException } = await import('@nestjs/common');
          throw new ForbiddenException('Bạn không thể chuyển bài học sang khóa học không thuộc của bạn');
        }
      }
    }
    return this.lessonsService.update(id, updateLessonDto, user.user_id);
  }

  @Delete(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.LESSON_MANAGE, Permission.LESSON_MANAGE_TEACHER)
  async remove(@Param('id', ParseIntPipe) id: number, @Request() req) {
    const user = req.user;
    if (!user.permissions.includes(Permission.LESSON_MANAGE)) {
      const allowed = await this.lessonsService.isTeacherOfLesson(user.user_id, id);
      if (!allowed) {
        const { ForbiddenException } = await import('@nestjs/common');
        throw new ForbiddenException('Bạn không thể xóa bài học không thuộc khóa học của bạn');
      }
    }
    return this.lessonsService.remove(id, user.user_id);
  }

  @Post('reorder')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  reorderLessons(
    @Body('courseId') courseId: number,
    @Body('lessonOrders')
    lessonOrders: { lessonId: number; orderIndex: number }[],
    @Request() req,
  ) {
    return this.lessonsService.reorderLessons(courseId, lessonOrders, req.user?.user_id);
  }

  // Vocabulary endpoints
  @Get(':id/vocabularies')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.LESSON_MANAGE, Permission.LESSON_MANAGE_TEACHER)
  async getVocabularies(
    @Param('id', ParseIntPipe) lessonId: number,
    @Request() req,
  ) {
    const user = req.user;
    if (!user.permissions.includes(Permission.LESSON_MANAGE)) {
      const allowed = await this.lessonsService.isTeacherOfLesson(user.user_id, lessonId);
      if (!allowed) {
        const { ForbiddenException } = await import('@nestjs/common');
        throw new ForbiddenException('Bạn không thể xem từ vựng của bài học không thuộc khóa học của bạn');
      }
    }
    return this.lessonsService.getLessonVocabularies(lessonId);
  }
  @Post(':id/vocabularies')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  addVocabulary(
    @Param('id', ParseIntPipe) lessonId: number,
    @Body() vocabularyData: any,
    @Req() req: any,
  ) {
    return this.lessonsService.addVocabulary(lessonId, vocabularyData, req.user.user_id);
  }

  @Post(':id/vocabularies/upload-audio')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.LESSON_MANAGE, Permission.LESSON_MANAGE_TEACHER)
  @UseInterceptors(FileInterceptor('file'))
  async uploadVocabularyAudio(
    @Param('id', ParseIntPipe) lessonId: number,
    @UploadedFile() file: Express.Multer.File,
    @Request() req,
  ) {
    console.log('\n🎵 [LessonsController] POST /lessons/:id/vocabularies/upload-audio');
    console.log('   └─ lessonId:', lessonId);
    console.log('   └─ File:', file ? {
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: `${(file.size / 1024).toFixed(2)} KB`,
    } : 'NO FILE');
    console.log('   └─ User:', req.user?.user_id, req.user?.email);

    if (!file) {
      throw new BadRequestException('No file provided');
    }

    if (!file.mimetype.startsWith('audio/')) {
      throw new BadRequestException('File must be an audio file');
    }

    try {
      const result = await this.lessonsService.uploadVocabularyFile(lessonId, file, 'audio');
      console.log('✅ [LessonsController] uploadVocabularyAudio completed');
      console.log('   └─ URL:', result.url);
      return result;
    } catch (error) {
      console.error('❌ [LessonsController] uploadVocabularyAudio error:', error);
      throw error;
    }
  }

  @Post(':id/vocabularies/upload-image')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.LESSON_MANAGE, Permission.LESSON_MANAGE_TEACHER)
  @UseInterceptors(FileInterceptor('file'))
  async uploadVocabularyImage(
    @Param('id', ParseIntPipe) lessonId: number,
    @UploadedFile() file: Express.Multer.File,
    @Request() req,
  ) {
    console.log('\n🖼️  [LessonsController] POST /lessons/:id/vocabularies/upload-image');
    console.log('   └─ lessonId:', lessonId);
    console.log('   └─ File:', file ? {
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: `${(file.size / 1024).toFixed(2)} KB`,
    } : 'NO FILE');
    console.log('   └─ User:', req.user?.user_id, req.user?.email);

    if (!file) {
      throw new BadRequestException('No file provided');
    }

    if (!file.mimetype.startsWith('image/')) {
      throw new BadRequestException('File must be an image file');
    }

    try {
      const result = await this.lessonsService.uploadVocabularyFile(lessonId, file, 'image');
      console.log('✅ [LessonsController] uploadVocabularyImage completed');
      console.log('   └─ URL:', result.url);
      return result;
    } catch (error) {
      console.error('❌ [LessonsController] uploadVocabularyImage error:', error);
      throw error;
    }
  }

  @Patch('vocabularies/:vocabId')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  updateVocabulary(
    @Param('vocabId', ParseIntPipe) vocabId: number,
    @Body() vocabularyData: any,
    @Request() req,
  ) {
    return this.lessonsService.updateVocabulary(vocabId, vocabularyData, req.user.user_id);
  }

  @Delete('vocabularies/:vocabId')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  removeVocabulary(@Param('vocabId', ParseIntPipe) vocabId: number, @Request() req) {
    return this.lessonsService.removeVocabulary(vocabId, req.user.user_id);
  }

  // Listening Exercise endpoints
  @Get(':id/listening-exercises')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.LESSON_MANAGE, Permission.LESSON_MANAGE_TEACHER)
  async getListeningExercises(
    @Param('id', ParseIntPipe) lessonId: number,
    @Request() req,
  ) {
    const user = req.user;
    if (!user.permissions.includes(Permission.LESSON_MANAGE)) {
      const allowed = await this.lessonsService.isTeacherOfLesson(user.user_id, lessonId);
      if (!allowed) {
        const { ForbiddenException } = await import('@nestjs/common');
        throw new ForbiddenException('Bạn không thể xem nghe của bài học không thuộc khóa học của bạn');
      }
    }
    return this.lessonsService.getLessonListeningExercises(lessonId);
  }
  @Post(':id/listening-exercises/upload-audio')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @UseInterceptors(FileInterceptor('file'))
  async uploadListeningAudio(
    @Param('id', ParseIntPipe) lessonId: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log(`\n══════════════════════════════════════════════════════════`);
    console.log(`☁️  [LessonsController] POST /lessons/:id/listening-exercises/upload-audio`);
    console.log(`══════════════════════════════════════════════════════════`);
    console.log(`   └─ lessonId: ${lessonId}`);
    console.log(`   └─ File:`, {
      originalname: file?.originalname,
      mimetype: file?.mimetype,
      size: file ? `${(file.size / 1024).toFixed(2)} KB` : 'N/A',
    });

    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    // Kiểm tra MIME type
    if (!file.mimetype.startsWith('audio/')) {
      throw new BadRequestException('File must be an audio file');
    }

    const result = await this.lessonsService.uploadListeningAudio(lessonId, file);
    console.log(`✅ [LessonsController] uploadListeningAudio completed successfully`);
    return result;
  }

  @Post(':id/listening-exercises')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  addListeningExercise(
    @Param('id', ParseIntPipe) lessonId: number,
    @Body() exerciseData: any,
    @Req() req: any,
  ) {
    return this.lessonsService.addListeningExercise(lessonId, exerciseData, req.user.user_id);
  }

  @Post('listening-exercises/:exerciseId/questions')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  addListeningQuestion(
    @Param('exerciseId', ParseIntPipe) exerciseId: number,
    @Body() questionData: any,
    @Request() req,
  ) {
    return this.lessonsService.addListeningQuestion(exerciseId, questionData, req.user.user_id);
  }

  @Patch('listening-exercises/:exerciseId')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  updateListeningExercise(
    @Param('exerciseId', ParseIntPipe) exerciseId: number,
    @Body() data: any,
    @Request() req,
  ) {
    return this.lessonsService.updateListeningExercise(exerciseId, data, req.user.user_id);
  }

  @Delete('listening-exercises/:exerciseId')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  deleteListeningExercise(
    @Param('exerciseId', ParseIntPipe) exerciseId: number,
    @Request() req,
  ) {
    return this.lessonsService.deleteListeningExercise(exerciseId, req.user.user_id);
  }

  @Patch('listening-questions/:questionId')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  updateListeningQuestion(
    @Param('questionId', ParseIntPipe) questionId: number,
    @Body() data: any,
    @Request() req,
  ) {
    return this.lessonsService.updateListeningQuestion(questionId, data, req.user.user_id);
  }

  @Delete('listening-questions/:questionId')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  deleteListeningQuestion(
    @Param('questionId', ParseIntPipe) questionId: number,
    @Request() req,
  ) {
    return this.lessonsService.deleteListeningQuestion(questionId, req.user.user_id);
  }

  // Quiz endpoints
  @Get(':id/quizzes')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.LESSON_MANAGE, Permission.LESSON_MANAGE_TEACHER)
  async getQuizzes(
    @Param('id', ParseIntPipe) lessonId: number,
    @Request() req,
  ) {
    const user = req.user;
    if (!user.permissions.includes(Permission.LESSON_MANAGE)) {
      const allowed = await this.lessonsService.isTeacherOfLesson(user.user_id, lessonId);
      if (!allowed) {
        const { ForbiddenException } = await import('@nestjs/common');
        throw new ForbiddenException('Bạn không thể xem quiz của bài học không thuộc khóa học của bạn');
      }
    }
    return this.lessonsService.getLessonQuizzes(lessonId);
  }
  @Post(':id/quizzes')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  addQuiz(@Param('id', ParseIntPipe) lessonId: number, @Body() quizData: any, @Req() req: any) {
    return this.lessonsService.addQuiz(lessonId, quizData, req.user.user_id);
  }

  @Patch('quizzes/:quizId')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  updateQuiz(
    @Param('quizId', ParseIntPipe) quizId: number,
    @Body() data: any,
    @Request() req,
  ) {
    return this.lessonsService.updateQuiz(quizId, data, req.user.user_id);
  }

  @Delete('quizzes/:quizId')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  deleteQuiz(@Param('quizId', ParseIntPipe) quizId: number, @Request() req) {
    return this.lessonsService.deleteQuiz(quizId, req.user.user_id);
  }

  // (removed) Pronunciation Exercise endpoints – table dropped

  // Writing Exercise endpoints
  @Get(':id/writing-exercises')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.LESSON_MANAGE, Permission.LESSON_MANAGE_TEACHER)
  async getWritingExercises(
    @Param('id', ParseIntPipe) lessonId: number,
    @Request() req,
  ) {
    const user = req.user;
    if (!user.permissions.includes(Permission.LESSON_MANAGE)) {
      const allowed = await this.lessonsService.isTeacherOfLesson(user.user_id, lessonId);
      if (!allowed) {
        const { ForbiddenException } = await import('@nestjs/common');
        throw new ForbiddenException('Bạn không thể xem bài viết của bài học không thuộc khóa học của bạn');
      }
    }
    return this.lessonsService.getWritingExercises(lessonId);
  }
  @Post(':id/writing-exercises')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  addWritingExercise(
    @Param('id', ParseIntPipe) lessonId: number,
    @Body() exerciseData: any,
    @Req() req: any,
  ) {
    return this.lessonsService.addWritingExercise(lessonId, exerciseData, req.user.user_id);
  }

  @Patch('writing-exercises/:exerciseId')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  updateWritingExercise(
    @Param('exerciseId', ParseIntPipe) exerciseId: number,
    @Body() data: any,
    @Request() req,
  ) {
    return this.lessonsService.updateWritingExercise(exerciseId, data, req.user.user_id);
  }

  @Delete('writing-exercises/:exerciseId')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  deleteWritingExercise(
    @Param('exerciseId', ParseIntPipe) exerciseId: number,
    @Request() req,
  ) {
    return this.lessonsService.deleteWritingExercise(exerciseId, req.user.user_id);
  }

  @Post('writing-exercises/:exerciseId/submit')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  submitWritingExercise(
    @Param('exerciseId', ParseIntPipe) exerciseId: number,
    @Body() submissionData: any,
    @Request() req,
  ) {
    return this.lessonsService.submitWritingExercise(
      exerciseId,
      req.user.user_id,
      submissionData,
    );
  }

  @Patch('writing-submissions/:submissionId/grade')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  gradeWritingSubmission(
    @Param('submissionId', ParseIntPipe) submissionId: number,
    @Body() gradeData: any,
    @Request() req,
  ) {
    return this.lessonsService.gradeWritingSubmission(
      submissionId,
      gradeData,
      req.user.user_id,
    );
  }

  @Get('writing-exercises/:exerciseId/submissions')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.LESSON_MANAGE, Permission.LESSON_MANAGE_TEACHER)
  async getWritingSubmissions(
    @Param('exerciseId', ParseIntPipe) exerciseId: number,
    @Request() req,
  ) {
    // Ownership check is indirectly enforced by requiring access to the lesson; here we simply list by exercise
    return this.lessonsService.getWritingSubmissions(exerciseId);
  }

  // File upload endpoints using Cloudinary
  @Post(':id/upload-only')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.LESSON_MANAGE, Permission.LESSON_MANAGE_TEACHER)
  @UseInterceptors(FileInterceptor('file'))
  uploadOnly(
    @Param('id', ParseIntPipe) lessonId: number,
    @UploadedFile() file: Express.Multer.File,
    @Request() req,
    @Body('type') type: string,
  ) {
    console.log('\n═══════════════════════════════════════════════════════════');
    console.log('☁️  [LessonsController] POST /lessons/:id/upload-only');
    console.log('═══════════════════════════════════════════════════════════');
    console.log('   └─ lessonId:', lessonId);
    console.log('   └─ File:', file ? {
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: `${(file.size / 1024).toFixed(2)} KB`,
    } : 'NO FILE');
    console.log('   └─ Type from body:', type);
    
    if (!file) {
      console.log('   ❌ No file provided');
      throw new Error('No file provided');
    }

    // Validate và normalize contentType
    let contentType = type;
    if (!contentType) {
      // Tự động detect từ MIME type nếu không có
      if (file.mimetype === 'application/pdf') {
        contentType = 'pdf';
        console.log('   └─ Auto-detected PDF from MIME type');
      } else if (file.mimetype.startsWith('video/')) {
        contentType = 'video';
        console.log('   └─ Auto-detected video from MIME type');
      } else if (file.mimetype.startsWith('image/')) {
        contentType = 'image';
        console.log('   └─ Auto-detected image from MIME type');
      } else {
        contentType = 'attachment';
        console.log('   └─ Using default: attachment');
      }
    }
    
    console.log('   └─ Final contentType:', contentType);
    console.log('   └─ Will use resource_type:', contentType === 'pdf' ? 'raw' : contentType);

    // If only teacher permission, ensure ownership
    if (!req.user.permissions.includes(Permission.LESSON_MANAGE)) {
      // validation will occur in service call as well, but early guard here could be added if needed
    }

    console.log('   └─ Calling service.uploadContentOnly...');
    console.log('═══════════════════════════════════════════════════════════\n');
    
    return this.lessonsService.uploadContentOnly(lessonId, file, contentType);
  }

  @Post(':id/extract-pdf-metadata')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.LESSON_MANAGE, Permission.LESSON_MANAGE_TEACHER)
  @UseInterceptors(FileInterceptor('file'))
  async extractPdfMetadata(
    @Param('id', ParseIntPipe) lessonId: number,
    @UploadedFile() file: Express.Multer.File,
    @Request() req,
  ) {
    console.log('\n═══════════════════════════════════════════════════════════');
    console.log('📄 [LessonsController] POST /lessons/:id/extract-pdf-metadata');
    console.log('═══════════════════════════════════════════════════════════');
    console.log('   └─ lessonId:', lessonId);
    console.log('   └─ File:', file ? {
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: `${(file.size / 1024).toFixed(2)} KB`,
    } : 'NO FILE');
    console.log('   └─ User:', req.user?.user_id, req.user?.email);
    
    if (!file) {
      console.log('   ❌ No file provided');
      throw new BadRequestException('No file provided');
    }

    // Kiểm tra cả MIME type và extension
    const isPdf = file.mimetype === 'application/pdf' || 
                  file.originalname.toLowerCase().endsWith('.pdf');
    
    if (!isPdf) {
      console.log('   ❌ File is not PDF:', { mimetype: file.mimetype, filename: file.originalname });
      throw new BadRequestException('File must be a PDF');
    }
    
    console.log('   ✅ File is PDF, proceeding with extraction...');

    console.log('   └─ Calling service.extractPdfMetadata...');
    console.log('═══════════════════════════════════════════════════════════\n');
    
    try {
      const result = await this.lessonsService.extractPdfMetadata(file);
      console.log('═══════════════════════════════════════════════════════════');
      console.log('✅ [LessonsController] extractPdfMetadata completed');
      console.log('   └─ Result:', JSON.stringify(result, null, 2));
      console.log('═══════════════════════════════════════════════════════════\n');
      return result;
    } catch (error) {
      console.error('❌ [LessonsController] extractPdfMetadata error:', error);
      throw error;
    }
  }

  @Post(':id/content')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.LESSON_MANAGE, Permission.LESSON_MANAGE_TEACHER)
  @UseInterceptors(FileInterceptor('file'))
  uploadContent(
    @Param('id', ParseIntPipe) lessonId: number,
    @UploadedFile() file: Express.Multer.File,
    @Request() req,
    @Body('type') type: string,
  ) {
    if (!file) {
      throw new Error('No file provided');
    }

    // If only teacher permission, ensure ownership
    if (!req.user.permissions.includes(Permission.LESSON_MANAGE)) {
      // validation will occur in service call as well, but early guard here could be added if needed
    }

    return this.lessonsService.uploadContent(
      lessonId,
      file,
      type,
      req.user.user_id,
    );
  }

  @Post(':id/attachment')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @UseInterceptors(FileInterceptor('file'))
  uploadAttachment(
    @Param('id', ParseIntPipe) lessonId: number,
    @UploadedFile() file: Express.Multer.File,
    @Request() req,
  ) {
    if (!file) {
      throw new Error('No file provided');
    }

    return this.lessonsService.uploadAttachment(
      lessonId,
      file,
      'attachment',
      req.user.user_id,
    );
  }

  // ========================================================
  // 📁 MEDIA (by URL) CRUD ENDPOINTS
  // ========================================================

  @Get(':id/media')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.LESSON_MANAGE, Permission.LESSON_MANAGE_TEACHER)
  async getMedia(@Param('id', ParseIntPipe) lessonId: number, @Request() req) {
    // If teacher-only, ensure teacher owns this lesson
    const user = req.user;
    if (!user.permissions.includes(Permission.LESSON_MANAGE)) {
      const allowed = await this.lessonsService.isTeacherOfLesson(user.user_id, lessonId);
      if (!allowed) {
        const { ForbiddenException } = await import('@nestjs/common');
        throw new ForbiddenException('Bạn không thể xem nội dung bài học không thuộc khóa học của bạn');
      }
    }
    return this.lessonsService.getLessonMedia(lessonId);
  }

  @Post(':id/media')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.LESSON_MANAGE, Permission.LESSON_MANAGE_TEACHER)
  async createMedia(
    @Param('id', ParseIntPipe) lessonId: number,
    @Body() body: any,
    @Request() req,
  ) {
    console.log('\n═══════════════════════════════════════════════════════════');
    console.log('📥 [LessonsController] POST /lessons/:id/media');
    console.log('═══════════════════════════════════════════════════════════');
    console.log('   └─ lessonId:', lessonId);
    console.log('   └─ Request body:', JSON.stringify(body, null, 2));
    
    const user = req.user;
    console.log('   └─ User:', { user_id: user.user_id, email: user.email });
    
    if (!user.permissions.includes(Permission.LESSON_MANAGE)) {
      console.log('   └─ Checking teacher permission...');
      const allowed = await this.lessonsService.isTeacherOfLesson(user.user_id, lessonId);
      if (!allowed) {
        console.log('   ❌ Teacher permission denied');
        const { ForbiddenException } = await import('@nestjs/common');
        throw new ForbiddenException('Bạn không thể thêm nội dung cho bài học không thuộc khóa học của bạn');
      }
      console.log('   ✅ Teacher permission granted');
    }

    const { media_type, media_url, duration_seconds, total_pages } = body;

    if (!media_type || !media_url) {
      console.log('   ❌ Validation failed: media_type or media_url is missing');
      throw new BadRequestException('media_type và media_url là bắt buộc');
    }

    console.log('   └─ Extracted fields:');
    console.log('      • media_type:', media_type);
    console.log('      • media_url:', media_url);
    console.log('      • duration_seconds (raw):', duration_seconds);
    console.log('      • total_pages (raw):', total_pages);

    const parsedDuration = duration_seconds !== undefined && duration_seconds !== null && duration_seconds !== ''
      ? Number(duration_seconds)
      : undefined;
    const parsedPages = total_pages !== undefined && total_pages !== null && total_pages !== ''
      ? Number(total_pages)
      : undefined;

    if (parsedDuration !== undefined && (Number.isNaN(parsedDuration) || parsedDuration < 0)) {
      console.log('   ❌ Validation failed: invalid duration_seconds');
      throw new BadRequestException('duration_seconds phải là số không âm');
    }

    if (parsedPages !== undefined && (Number.isNaN(parsedPages) || parsedPages < 0)) {
      console.log('   ❌ Validation failed: invalid total_pages');
      throw new BadRequestException('total_pages phải là số không âm');
    }

    const mediaData = {
      media_type,
      media_url,
      duration_seconds: parsedDuration,
      total_pages: parsedPages,
    };

    console.log('   └─ Calling service.createLessonMedia...');
    console.log('═══════════════════════════════════════════════════════════\n');
    
    const result = await this.lessonsService.createLessonMedia(
      lessonId,
      mediaData,
      user.user_id,
    );
    
    console.log('═══════════════════════════════════════════════════════════');
    console.log('✅ [LessonsController] createMedia completed successfully');
    console.log('   └─ Result:', JSON.stringify(result, null, 2));
    console.log('═══════════════════════════════════════════════════════════\n');
    
    return result;
  }

  @Delete('media/:mediaId')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.LESSON_MANAGE, Permission.LESSON_MANAGE_TEACHER)
  async deleteMedia(@Param('mediaId', ParseIntPipe) mediaId: number, @Request() req) {
    // For teacher, ensure the media belongs to a lesson they teach
    const user = req.user;
    if (!user.permissions.includes(Permission.LESSON_MANAGE)) {
      // Find media's lesson
      const prisma = (this as any).lessonsService['prisma'] as any;
      const media = await prisma.lesson_media.findUnique({ where: { media_id: mediaId } });
      if (!media) {
        const { NotFoundException } = await import('@nestjs/common');
        throw new NotFoundException('Media not found');
      }
      const allowed = await this.lessonsService.isTeacherOfLesson(user.user_id, media.lesson_id);
      if (!allowed) {
        const { ForbiddenException } = await import('@nestjs/common');
        throw new ForbiddenException('Bạn không thể xóa nội dung không thuộc khóa học của bạn');
      }
    }
    return this.lessonsService.deleteLessonMedia(mediaId, user.user_id);
  }

  // ========================================================
  // ✅ APPROVAL ENDPOINTS - Cho phép mọi user có lesson.manage
  // ========================================================

  @Patch(':id/approve')
  @RequirePermissions(Permission.LESSON_MANAGE)
  approveLesson(
    @Param('id', ParseIntPipe) lessonId: number,
    @Body() approveLessonDto: ApproveLessonDto,
    @Request() req,
  ) {
    if (approveLessonDto.approval_status === 'approved') {
      return this.lessonsService.approveLesson(
        lessonId,
        req.user.user_id,
        approveLessonDto.review_note,
      );
    } else if (approveLessonDto.approval_status === 'rejected') {
      if (!approveLessonDto.review_note) {
        throw new Error('Review note is required when rejecting a lesson');
      }
      return this.lessonsService.rejectLesson(
        lessonId,
        req.user.user_id,
        approveLessonDto.review_note,
      );
    } else {
      return this.lessonsService.updateApprovalStatus(
        lessonId,
        approveLessonDto.approval_status,
        req.user.user_id,
        approveLessonDto.review_note,
      );
    }
  }

  @Post(':id/approve')
  @RequirePermissions(Permission.LESSON_MANAGE)
  approveLessonPost(
    @Param('id', ParseIntPipe) lessonId: number,
    @Body('review_note') reviewNote: string,
    @Request() req,
  ) {
    return this.lessonsService.approveLesson(lessonId, req.user.user_id, reviewNote);
  }

  @Post(':id/reject')
  @RequirePermissions(Permission.LESSON_MANAGE)
  rejectLesson(
    @Param('id', ParseIntPipe) lessonId: number,
    @Body('review_note') reviewNote: string,
    @Request() req,
  ) {
    if (!reviewNote) {
      throw new Error('Review note is required when rejecting a lesson');
    }
    return this.lessonsService.rejectLesson(lessonId, req.user.user_id, reviewNote);
  }
}
