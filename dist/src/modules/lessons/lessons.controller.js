"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const lessons_service_1 = require("./lessons.service");
const create_lesson_dto_1 = require("./dto/create-lesson.dto");
const update_lesson_dto_1 = require("./dto/update-lesson.dto");
const approve_lesson_dto_1 = require("./dto/approve-lesson.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../shared/guards/roles.guard");
const permissions_guard_1 = require("../../shared/guards/permissions.guard");
const roles_decorator_1 = require("../../shared/decorators/roles.decorator");
const permissions_decorator_1 = require("../../shared/decorators/permissions.decorator");
const user_role_enum_1 = require("../../common/enums/user-role.enum");
let LessonsController = class LessonsController {
    lessonsService;
    constructor(lessonsService) {
        this.lessonsService = lessonsService;
    }
    async create(createLessonDto, req) {
        const user = req.user;
        if (!user.permissions.includes(user_role_enum_1.Permission.LESSON_MANAGE)) {
            const allowed = await this.lessonsService.isTeacherOfCourse(user.user_id, createLessonDto.course_id);
            if (!allowed) {
                const { ForbiddenException } = await Promise.resolve().then(() => require('@nestjs/common'));
                throw new ForbiddenException('Bạn không thể tạo bài học cho khóa học không thuộc của bạn');
            }
        }
        return this.lessonsService.create(createLessonDto, user.user_id);
    }
    findAll(req, page, limit, search, courseId) {
        const pageNum = page ? Number(page) : 1;
        const limitNum = limit ? Number(limit) : 10;
        const courseIdNum = courseId ? Number(courseId) : undefined;
        const user = req.user;
        if (user?.permissions?.includes(user_role_enum_1.Permission.LESSON_MANAGE)) {
            return this.lessonsService.findAll(pageNum, limitNum, search, courseIdNum);
        }
        if (user?.permissions?.includes(user_role_enum_1.Permission.LESSON_MANAGE_TEACHER)) {
            return this.lessonsService.getTeacherLessons(user.user_id, pageNum, limitNum, search, courseIdNum);
        }
        return { data: [], total: 0, page: pageNum, limit: limitNum, totalPages: 0 };
    }
    findOne(id) {
        return this.lessonsService.findById(id);
    }
    async update(id, updateLessonDto, req) {
        const user = req.user;
        if (!user.permissions.includes(user_role_enum_1.Permission.LESSON_MANAGE)) {
            const allowed = await this.lessonsService.isTeacherOfLesson(user.user_id, id);
            if (!allowed) {
                const { ForbiddenException } = await Promise.resolve().then(() => require('@nestjs/common'));
                throw new ForbiddenException('Bạn không thể sửa bài học không thuộc khóa học của bạn');
            }
            if (updateLessonDto?.course_id) {
                const allowedNew = await this.lessonsService.isTeacherOfCourse(user.user_id, updateLessonDto.course_id);
                if (!allowedNew) {
                    const { ForbiddenException } = await Promise.resolve().then(() => require('@nestjs/common'));
                    throw new ForbiddenException('Bạn không thể chuyển bài học sang khóa học không thuộc của bạn');
                }
            }
        }
        return this.lessonsService.update(id, updateLessonDto, user.user_id);
    }
    async remove(id, req) {
        const user = req.user;
        if (!user.permissions.includes(user_role_enum_1.Permission.LESSON_MANAGE)) {
            const allowed = await this.lessonsService.isTeacherOfLesson(user.user_id, id);
            if (!allowed) {
                const { ForbiddenException } = await Promise.resolve().then(() => require('@nestjs/common'));
                throw new ForbiddenException('Bạn không thể xóa bài học không thuộc khóa học của bạn');
            }
        }
        return this.lessonsService.remove(id, user.user_id);
    }
    reorderLessons(courseId, lessonOrders, req) {
        return this.lessonsService.reorderLessons(courseId, lessonOrders, req.user?.user_id);
    }
    async getVocabularies(lessonId, req) {
        const user = req.user;
        if (!user.permissions.includes(user_role_enum_1.Permission.LESSON_MANAGE)) {
            const allowed = await this.lessonsService.isTeacherOfLesson(user.user_id, lessonId);
            if (!allowed) {
                const { ForbiddenException } = await Promise.resolve().then(() => require('@nestjs/common'));
                throw new ForbiddenException('Bạn không thể xem từ vựng của bài học không thuộc khóa học của bạn');
            }
        }
        return this.lessonsService.getLessonVocabularies(lessonId);
    }
    addVocabulary(lessonId, vocabularyData, req) {
        return this.lessonsService.addVocabulary(lessonId, vocabularyData, req.user.user_id);
    }
    async uploadVocabularyAudio(lessonId, file, req) {
        console.log('\n🎵 [LessonsController] POST /lessons/:id/vocabularies/upload-audio');
        console.log('   └─ lessonId:', lessonId);
        console.log('   └─ File:', file ? {
            originalname: file.originalname,
            mimetype: file.mimetype,
            size: `${(file.size / 1024).toFixed(2)} KB`,
        } : 'NO FILE');
        console.log('   └─ User:', req.user?.user_id, req.user?.email);
        if (!file) {
            throw new common_1.BadRequestException('No file provided');
        }
        if (!file.mimetype.startsWith('audio/')) {
            throw new common_1.BadRequestException('File must be an audio file');
        }
        try {
            const result = await this.lessonsService.uploadVocabularyFile(lessonId, file, 'audio');
            console.log('✅ [LessonsController] uploadVocabularyAudio completed');
            console.log('   └─ URL:', result.url);
            return result;
        }
        catch (error) {
            console.error('❌ [LessonsController] uploadVocabularyAudio error:', error);
            throw error;
        }
    }
    async uploadVocabularyImage(lessonId, file, req) {
        console.log('\n🖼️  [LessonsController] POST /lessons/:id/vocabularies/upload-image');
        console.log('   └─ lessonId:', lessonId);
        console.log('   └─ File:', file ? {
            originalname: file.originalname,
            mimetype: file.mimetype,
            size: `${(file.size / 1024).toFixed(2)} KB`,
        } : 'NO FILE');
        console.log('   └─ User:', req.user?.user_id, req.user?.email);
        if (!file) {
            throw new common_1.BadRequestException('No file provided');
        }
        if (!file.mimetype.startsWith('image/')) {
            throw new common_1.BadRequestException('File must be an image file');
        }
        try {
            const result = await this.lessonsService.uploadVocabularyFile(lessonId, file, 'image');
            console.log('✅ [LessonsController] uploadVocabularyImage completed');
            console.log('   └─ URL:', result.url);
            return result;
        }
        catch (error) {
            console.error('❌ [LessonsController] uploadVocabularyImage error:', error);
            throw error;
        }
    }
    updateVocabulary(vocabId, vocabularyData, req) {
        return this.lessonsService.updateVocabulary(vocabId, vocabularyData, req.user.user_id);
    }
    removeVocabulary(vocabId, req) {
        return this.lessonsService.removeVocabulary(vocabId, req.user.user_id);
    }
    async getListeningExercises(lessonId, req) {
        const user = req.user;
        if (!user.permissions.includes(user_role_enum_1.Permission.LESSON_MANAGE)) {
            const allowed = await this.lessonsService.isTeacherOfLesson(user.user_id, lessonId);
            if (!allowed) {
                const { ForbiddenException } = await Promise.resolve().then(() => require('@nestjs/common'));
                throw new ForbiddenException('Bạn không thể xem nghe của bài học không thuộc khóa học của bạn');
            }
        }
        return this.lessonsService.getLessonListeningExercises(lessonId);
    }
    async uploadListeningAudio(lessonId, file) {
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
            throw new common_1.BadRequestException('No file uploaded');
        }
        if (!file.mimetype.startsWith('audio/')) {
            throw new common_1.BadRequestException('File must be an audio file');
        }
        const result = await this.lessonsService.uploadListeningAudio(lessonId, file);
        console.log(`✅ [LessonsController] uploadListeningAudio completed successfully`);
        return result;
    }
    addListeningExercise(lessonId, exerciseData, req) {
        return this.lessonsService.addListeningExercise(lessonId, exerciseData, req.user.user_id);
    }
    addListeningQuestion(exerciseId, questionData, req) {
        return this.lessonsService.addListeningQuestion(exerciseId, questionData, req.user.user_id);
    }
    updateListeningExercise(exerciseId, data, req) {
        return this.lessonsService.updateListeningExercise(exerciseId, data, req.user.user_id);
    }
    deleteListeningExercise(exerciseId, req) {
        return this.lessonsService.deleteListeningExercise(exerciseId, req.user.user_id);
    }
    updateListeningQuestion(questionId, data, req) {
        return this.lessonsService.updateListeningQuestion(questionId, data, req.user.user_id);
    }
    deleteListeningQuestion(questionId, req) {
        return this.lessonsService.deleteListeningQuestion(questionId, req.user.user_id);
    }
    async getQuizzes(lessonId, req) {
        const user = req.user;
        if (!user.permissions.includes(user_role_enum_1.Permission.LESSON_MANAGE)) {
            const allowed = await this.lessonsService.isTeacherOfLesson(user.user_id, lessonId);
            if (!allowed) {
                const { ForbiddenException } = await Promise.resolve().then(() => require('@nestjs/common'));
                throw new ForbiddenException('Bạn không thể xem quiz của bài học không thuộc khóa học của bạn');
            }
        }
        return this.lessonsService.getLessonQuizzes(lessonId);
    }
    addQuiz(lessonId, quizData, req) {
        return this.lessonsService.addQuiz(lessonId, quizData, req.user.user_id);
    }
    updateQuiz(quizId, data, req) {
        return this.lessonsService.updateQuiz(quizId, data, req.user.user_id);
    }
    deleteQuiz(quizId, req) {
        return this.lessonsService.deleteQuiz(quizId, req.user.user_id);
    }
    async getWritingExercises(lessonId, req) {
        const user = req.user;
        if (!user.permissions.includes(user_role_enum_1.Permission.LESSON_MANAGE)) {
            const allowed = await this.lessonsService.isTeacherOfLesson(user.user_id, lessonId);
            if (!allowed) {
                const { ForbiddenException } = await Promise.resolve().then(() => require('@nestjs/common'));
                throw new ForbiddenException('Bạn không thể xem bài viết của bài học không thuộc khóa học của bạn');
            }
        }
        return this.lessonsService.getWritingExercises(lessonId);
    }
    addWritingExercise(lessonId, exerciseData, req) {
        return this.lessonsService.addWritingExercise(lessonId, exerciseData, req.user.user_id);
    }
    updateWritingExercise(exerciseId, data, req) {
        return this.lessonsService.updateWritingExercise(exerciseId, data, req.user.user_id);
    }
    deleteWritingExercise(exerciseId, req) {
        return this.lessonsService.deleteWritingExercise(exerciseId, req.user.user_id);
    }
    submitWritingExercise(exerciseId, submissionData, req) {
        return this.lessonsService.submitWritingExercise(exerciseId, req.user.user_id, submissionData);
    }
    gradeWritingSubmission(submissionId, gradeData, req) {
        return this.lessonsService.gradeWritingSubmission(submissionId, gradeData, req.user.user_id);
    }
    async getWritingSubmissions(exerciseId, req) {
        return this.lessonsService.getWritingSubmissions(exerciseId);
    }
    uploadOnly(lessonId, file, req, type) {
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
        let contentType = type;
        if (!contentType) {
            if (file.mimetype === 'application/pdf') {
                contentType = 'pdf';
                console.log('   └─ Auto-detected PDF from MIME type');
            }
            else if (file.mimetype.startsWith('video/')) {
                contentType = 'video';
                console.log('   └─ Auto-detected video from MIME type');
            }
            else if (file.mimetype.startsWith('image/')) {
                contentType = 'image';
                console.log('   └─ Auto-detected image from MIME type');
            }
            else {
                contentType = 'attachment';
                console.log('   └─ Using default: attachment');
            }
        }
        console.log('   └─ Final contentType:', contentType);
        console.log('   └─ Will use resource_type:', contentType === 'pdf' ? 'raw' : contentType);
        if (!req.user.permissions.includes(user_role_enum_1.Permission.LESSON_MANAGE)) {
        }
        console.log('   └─ Calling service.uploadContentOnly...');
        console.log('═══════════════════════════════════════════════════════════\n');
        return this.lessonsService.uploadContentOnly(lessonId, file, contentType);
    }
    async extractPdfMetadata(lessonId, file, req) {
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
            throw new common_1.BadRequestException('No file provided');
        }
        const isPdf = file.mimetype === 'application/pdf' ||
            file.originalname.toLowerCase().endsWith('.pdf');
        if (!isPdf) {
            console.log('   ❌ File is not PDF:', { mimetype: file.mimetype, filename: file.originalname });
            throw new common_1.BadRequestException('File must be a PDF');
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
        }
        catch (error) {
            console.error('❌ [LessonsController] extractPdfMetadata error:', error);
            throw error;
        }
    }
    uploadContent(lessonId, file, req, type) {
        if (!file) {
            throw new Error('No file provided');
        }
        if (!req.user.permissions.includes(user_role_enum_1.Permission.LESSON_MANAGE)) {
        }
        return this.lessonsService.uploadContent(lessonId, file, type, req.user.user_id);
    }
    uploadAttachment(lessonId, file, req) {
        if (!file) {
            throw new Error('No file provided');
        }
        return this.lessonsService.uploadAttachment(lessonId, file, 'attachment', req.user.user_id);
    }
    async getMedia(lessonId, req) {
        const user = req.user;
        if (!user.permissions.includes(user_role_enum_1.Permission.LESSON_MANAGE)) {
            const allowed = await this.lessonsService.isTeacherOfLesson(user.user_id, lessonId);
            if (!allowed) {
                const { ForbiddenException } = await Promise.resolve().then(() => require('@nestjs/common'));
                throw new ForbiddenException('Bạn không thể xem nội dung bài học không thuộc khóa học của bạn');
            }
        }
        return this.lessonsService.getLessonMedia(lessonId);
    }
    async createMedia(lessonId, body, req) {
        console.log('\n═══════════════════════════════════════════════════════════');
        console.log('📥 [LessonsController] POST /lessons/:id/media');
        console.log('═══════════════════════════════════════════════════════════');
        console.log('   └─ lessonId:', lessonId);
        console.log('   └─ Request body:', JSON.stringify(body, null, 2));
        const user = req.user;
        console.log('   └─ User:', { user_id: user.user_id, email: user.email });
        if (!user.permissions.includes(user_role_enum_1.Permission.LESSON_MANAGE)) {
            console.log('   └─ Checking teacher permission...');
            const allowed = await this.lessonsService.isTeacherOfLesson(user.user_id, lessonId);
            if (!allowed) {
                console.log('   ❌ Teacher permission denied');
                const { ForbiddenException } = await Promise.resolve().then(() => require('@nestjs/common'));
                throw new ForbiddenException('Bạn không thể thêm nội dung cho bài học không thuộc khóa học của bạn');
            }
            console.log('   ✅ Teacher permission granted');
        }
        const { media_type, media_url, duration_seconds, total_pages } = body;
        if (!media_type || !media_url) {
            console.log('   ❌ Validation failed: media_type or media_url is missing');
            throw new common_1.BadRequestException('media_type và media_url là bắt buộc');
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
            throw new common_1.BadRequestException('duration_seconds phải là số không âm');
        }
        if (parsedPages !== undefined && (Number.isNaN(parsedPages) || parsedPages < 0)) {
            console.log('   ❌ Validation failed: invalid total_pages');
            throw new common_1.BadRequestException('total_pages phải là số không âm');
        }
        const mediaData = {
            media_type,
            media_url,
            duration_seconds: parsedDuration,
            total_pages: parsedPages,
        };
        console.log('   └─ Calling service.createLessonMedia...');
        console.log('═══════════════════════════════════════════════════════════\n');
        const result = await this.lessonsService.createLessonMedia(lessonId, mediaData, user.user_id);
        console.log('═══════════════════════════════════════════════════════════');
        console.log('✅ [LessonsController] createMedia completed successfully');
        console.log('   └─ Result:', JSON.stringify(result, null, 2));
        console.log('═══════════════════════════════════════════════════════════\n');
        return result;
    }
    async deleteMedia(mediaId, req) {
        const user = req.user;
        if (!user.permissions.includes(user_role_enum_1.Permission.LESSON_MANAGE)) {
            const prisma = this.lessonsService['prisma'];
            const media = await prisma.lesson_media.findUnique({ where: { media_id: mediaId } });
            if (!media) {
                const { NotFoundException } = await Promise.resolve().then(() => require('@nestjs/common'));
                throw new NotFoundException('Media not found');
            }
            const allowed = await this.lessonsService.isTeacherOfLesson(user.user_id, media.lesson_id);
            if (!allowed) {
                const { ForbiddenException } = await Promise.resolve().then(() => require('@nestjs/common'));
                throw new ForbiddenException('Bạn không thể xóa nội dung không thuộc khóa học của bạn');
            }
        }
        return this.lessonsService.deleteLessonMedia(mediaId, user.user_id);
    }
    approveLesson(lessonId, approveLessonDto, req) {
        if (approveLessonDto.approval_status === 'approved') {
            return this.lessonsService.approveLesson(lessonId, req.user.user_id, approveLessonDto.review_note);
        }
        else if (approveLessonDto.approval_status === 'rejected') {
            if (!approveLessonDto.review_note) {
                throw new Error('Review note is required when rejecting a lesson');
            }
            return this.lessonsService.rejectLesson(lessonId, req.user.user_id, approveLessonDto.review_note);
        }
        else {
            return this.lessonsService.updateApprovalStatus(lessonId, approveLessonDto.approval_status, req.user.user_id, approveLessonDto.review_note);
        }
    }
    approveLessonPost(lessonId, reviewNote, req) {
        return this.lessonsService.approveLesson(lessonId, req.user.user_id, reviewNote);
    }
    rejectLesson(lessonId, reviewNote, req) {
        if (!reviewNote) {
            throw new Error('Review note is required when rejecting a lesson');
        }
        return this.lessonsService.rejectLesson(lessonId, req.user.user_id, reviewNote);
    }
};
exports.LessonsController = LessonsController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.LESSON_MANAGE, user_role_enum_1.Permission.LESSON_MANAGE_TEACHER),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lesson_dto_1.CreateLessonDto, Object]),
    __metadata("design:returntype", Promise)
], LessonsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.LESSON_MANAGE, user_role_enum_1.Permission.LESSON_MANAGE_TEACHER),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __param(3, (0, common_1.Query)('search')),
    __param(4, (0, common_1.Query)('courseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, String]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.LESSON_MANAGE, user_role_enum_1.Permission.LESSON_MANAGE_TEACHER),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.LESSON_MANAGE, user_role_enum_1.Permission.LESSON_MANAGE_TEACHER),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_lesson_dto_1.UpdateLessonDto, Object]),
    __metadata("design:returntype", Promise)
], LessonsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.LESSON_MANAGE, user_role_enum_1.Permission.LESSON_MANAGE_TEACHER),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], LessonsController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('reorder'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    __param(0, (0, common_1.Body)('courseId')),
    __param(1, (0, common_1.Body)('lessonOrders')),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Array, Object]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "reorderLessons", null);
__decorate([
    (0, common_1.Get)(':id/vocabularies'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.LESSON_MANAGE, user_role_enum_1.Permission.LESSON_MANAGE_TEACHER),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], LessonsController.prototype, "getVocabularies", null);
__decorate([
    (0, common_1.Post)(':id/vocabularies'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "addVocabulary", null);
__decorate([
    (0, common_1.Post)(':id/vocabularies/upload-audio'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.LESSON_MANAGE, user_role_enum_1.Permission.LESSON_MANAGE_TEACHER),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], LessonsController.prototype, "uploadVocabularyAudio", null);
__decorate([
    (0, common_1.Post)(':id/vocabularies/upload-image'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.LESSON_MANAGE, user_role_enum_1.Permission.LESSON_MANAGE_TEACHER),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], LessonsController.prototype, "uploadVocabularyImage", null);
__decorate([
    (0, common_1.Patch)('vocabularies/:vocabId'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    __param(0, (0, common_1.Param)('vocabId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "updateVocabulary", null);
__decorate([
    (0, common_1.Delete)('vocabularies/:vocabId'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    __param(0, (0, common_1.Param)('vocabId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "removeVocabulary", null);
__decorate([
    (0, common_1.Get)(':id/listening-exercises'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.LESSON_MANAGE, user_role_enum_1.Permission.LESSON_MANAGE_TEACHER),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], LessonsController.prototype, "getListeningExercises", null);
__decorate([
    (0, common_1.Post)(':id/listening-exercises/upload-audio'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], LessonsController.prototype, "uploadListeningAudio", null);
__decorate([
    (0, common_1.Post)(':id/listening-exercises'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "addListeningExercise", null);
__decorate([
    (0, common_1.Post)('listening-exercises/:exerciseId/questions'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    __param(0, (0, common_1.Param)('exerciseId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "addListeningQuestion", null);
__decorate([
    (0, common_1.Patch)('listening-exercises/:exerciseId'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    __param(0, (0, common_1.Param)('exerciseId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "updateListeningExercise", null);
__decorate([
    (0, common_1.Delete)('listening-exercises/:exerciseId'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    __param(0, (0, common_1.Param)('exerciseId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "deleteListeningExercise", null);
__decorate([
    (0, common_1.Patch)('listening-questions/:questionId'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    __param(0, (0, common_1.Param)('questionId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "updateListeningQuestion", null);
__decorate([
    (0, common_1.Delete)('listening-questions/:questionId'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    __param(0, (0, common_1.Param)('questionId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "deleteListeningQuestion", null);
__decorate([
    (0, common_1.Get)(':id/quizzes'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.LESSON_MANAGE, user_role_enum_1.Permission.LESSON_MANAGE_TEACHER),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], LessonsController.prototype, "getQuizzes", null);
__decorate([
    (0, common_1.Post)(':id/quizzes'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "addQuiz", null);
__decorate([
    (0, common_1.Patch)('quizzes/:quizId'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    __param(0, (0, common_1.Param)('quizId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "updateQuiz", null);
__decorate([
    (0, common_1.Delete)('quizzes/:quizId'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    __param(0, (0, common_1.Param)('quizId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "deleteQuiz", null);
__decorate([
    (0, common_1.Get)(':id/writing-exercises'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.LESSON_MANAGE, user_role_enum_1.Permission.LESSON_MANAGE_TEACHER),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], LessonsController.prototype, "getWritingExercises", null);
__decorate([
    (0, common_1.Post)(':id/writing-exercises'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "addWritingExercise", null);
__decorate([
    (0, common_1.Patch)('writing-exercises/:exerciseId'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    __param(0, (0, common_1.Param)('exerciseId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "updateWritingExercise", null);
__decorate([
    (0, common_1.Delete)('writing-exercises/:exerciseId'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    __param(0, (0, common_1.Param)('exerciseId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "deleteWritingExercise", null);
__decorate([
    (0, common_1.Post)('writing-exercises/:exerciseId/submit'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    __param(0, (0, common_1.Param)('exerciseId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "submitWritingExercise", null);
__decorate([
    (0, common_1.Patch)('writing-submissions/:submissionId/grade'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    __param(0, (0, common_1.Param)('submissionId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "gradeWritingSubmission", null);
__decorate([
    (0, common_1.Get)('writing-exercises/:exerciseId/submissions'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.LESSON_MANAGE, user_role_enum_1.Permission.LESSON_MANAGE_TEACHER),
    __param(0, (0, common_1.Param)('exerciseId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], LessonsController.prototype, "getWritingSubmissions", null);
__decorate([
    (0, common_1.Post)(':id/upload-only'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.LESSON_MANAGE, user_role_enum_1.Permission.LESSON_MANAGE_TEACHER),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Request)()),
    __param(3, (0, common_1.Body)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object, String]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "uploadOnly", null);
__decorate([
    (0, common_1.Post)(':id/extract-pdf-metadata'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.LESSON_MANAGE, user_role_enum_1.Permission.LESSON_MANAGE_TEACHER),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], LessonsController.prototype, "extractPdfMetadata", null);
__decorate([
    (0, common_1.Post)(':id/content'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.LESSON_MANAGE, user_role_enum_1.Permission.LESSON_MANAGE_TEACHER),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Request)()),
    __param(3, (0, common_1.Body)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object, String]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "uploadContent", null);
__decorate([
    (0, common_1.Post)(':id/attachment'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "uploadAttachment", null);
__decorate([
    (0, common_1.Get)(':id/media'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.LESSON_MANAGE, user_role_enum_1.Permission.LESSON_MANAGE_TEACHER),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], LessonsController.prototype, "getMedia", null);
__decorate([
    (0, common_1.Post)(':id/media'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.LESSON_MANAGE, user_role_enum_1.Permission.LESSON_MANAGE_TEACHER),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], LessonsController.prototype, "createMedia", null);
__decorate([
    (0, common_1.Delete)('media/:mediaId'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.LESSON_MANAGE, user_role_enum_1.Permission.LESSON_MANAGE_TEACHER),
    __param(0, (0, common_1.Param)('mediaId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], LessonsController.prototype, "deleteMedia", null);
__decorate([
    (0, common_1.Patch)(':id/approve'),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.LESSON_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, approve_lesson_dto_1.ApproveLessonDto, Object]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "approveLesson", null);
__decorate([
    (0, common_1.Post)(':id/approve'),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.LESSON_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('review_note')),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Object]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "approveLessonPost", null);
__decorate([
    (0, common_1.Post)(':id/reject'),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.LESSON_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('review_note')),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Object]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "rejectLesson", null);
exports.LessonsController = LessonsController = __decorate([
    (0, common_1.Controller)('lessons'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, permissions_guard_1.PermissionsGuard),
    __metadata("design:paramtypes", [lessons_service_1.LessonsService])
], LessonsController);
//# sourceMappingURL=lessons.controller.js.map