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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const files_service_1 = require("../files/files.service");
const cloudinary_service_1 = require("../files/cloudinary.service");
const timezone_util_1 = require("../../shared/utils/timezone.util");
let LessonsService = class LessonsService {
    prisma;
    filesService;
    cloudinaryService;
    constructor(prisma, filesService, cloudinaryService) {
        this.prisma = prisma;
        this.filesService = filesService;
        this.cloudinaryService = cloudinaryService;
    }
    sanitizePayload(payload) {
        return Object.fromEntries(Object.entries(payload).filter(([, value]) => value !== undefined));
    }
    async logActivity(userId, action, details) {
        if (!userId)
            return;
        try {
            await this.prisma.activity_logs.create({
                data: {
                    user_id: userId,
                    action,
                    details,
                    created_at: (0, timezone_util_1.getVietnamCurrentDate)(),
                },
            });
        }
        catch (error) {
            console.error(`[activity_logs] Failed to record activity (${action})`, error);
        }
    }
    async isTeacherOfCourse(teacherId, courseId) {
        const count = await this.prisma.class_groups.count({
            where: {
                course_id: courseId,
                teacher_id: teacherId,
            },
        });
        return count > 0;
    }
    async isTeacherOfLesson(teacherId, lessonId) {
        const lesson = await this.prisma.lessons.findUnique({
            where: { lesson_id: lessonId },
            select: { course_id: true },
        });
        if (!lesson) {
            return false;
        }
        return this.isTeacherOfCourse(teacherId, lesson.course_id);
    }
    async create(createLessonDto, createdBy) {
        try {
            const timestamp = (0, timezone_util_1.getVietnamCurrentDate)();
            const lesson = await this.prisma.lessons.create({
                data: {
                    ...createLessonDto,
                    created_by: createdBy,
                    created_at: timestamp,
                    updated_at: timestamp,
                },
                include: {
                    courses: {
                        select: {
                            course_id: true,
                            title: true,
                            level: true,
                            teacher: {
                                select: {
                                    user_id: true,
                                    full_name: true,
                                    email: true,
                                },
                            },
                            course_teachers: {
                                select: {
                                    users: {
                                        select: {
                                            user_id: true,
                                            full_name: true,
                                            email: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                    approver: {
                        select: {
                            user_id: true,
                            full_name: true,
                            email: true,
                        },
                    },
                    vocabularies: true,
                    listening_exercises: true,
                    quizzes: true,
                    writing_exercises: true,
                    lesson_media: true,
                    _count: {
                        select: {
                            vocabularies: true,
                            listening_exercises: true,
                            quizzes: true,
                            writing_exercises: true,
                        },
                    },
                },
            });
            await this.logActivity(createdBy, 'lesson.create', {
                lesson_id: lesson.lesson_id,
                title: lesson.title,
                course_id: lesson.course_id,
                payload: this.sanitizePayload(createLessonDto),
            });
            return lesson;
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to create lesson');
        }
    }
    async findAll(page = 1, limit = 10, search, courseId) {
        const skip = (page - 1) * limit;
        const where = {};
        if (search) {
            where.OR = [
                { title: { contains: search, mode: 'insensitive' } },
                { content: { contains: search, mode: 'insensitive' } },
            ];
        }
        if (courseId) {
            where.course_id = courseId;
        }
        const [lessons, total] = await Promise.all([
            this.prisma.lessons.findMany({
                where,
                skip,
                take: limit,
                include: {
                    courses: {
                        select: {
                            course_id: true,
                            title: true,
                            level: true,
                            teacher: {
                                select: {
                                    user_id: true,
                                    full_name: true,
                                    email: true,
                                },
                            },
                            course_teachers: {
                                select: {
                                    users: {
                                        select: {
                                            user_id: true,
                                            full_name: true,
                                            email: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                    approver: {
                        select: {
                            user_id: true,
                            full_name: true,
                            email: true,
                        },
                    },
                    vocabularies: {
                        take: 3,
                    },
                    listening_exercises: {
                        take: 2,
                    },
                    quizzes: {
                        take: 3,
                    },
                    writing_exercises: {
                        take: 2,
                    },
                    lesson_media: {
                        take: 3,
                    },
                    _count: {
                        select: {
                            vocabularies: true,
                            listening_exercises: true,
                            quizzes: true,
                            writing_exercises: true,
                        },
                    },
                },
                orderBy: { order_index: 'asc' },
            }),
            this.prisma.lessons.count({ where }),
        ]);
        return {
            data: lessons,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async findOne(id) {
        const lesson = await this.prisma.lessons.findUnique({
            where: { lesson_id: id },
            include: {
                courses: {
                    select: {
                        course_id: true,
                        title: true,
                        level: true,
                        description: true,
                    },
                },
                approver: {
                    select: {
                        user_id: true,
                        full_name: true,
                        email: true,
                    },
                },
                vocabularies: {
                    orderBy: { created_at: 'asc' },
                },
                listening_exercises: {
                    include: {
                        listening_questions: {
                            orderBy: { order_index: 'asc' },
                        },
                    },
                    orderBy: { created_at: 'asc' },
                },
                quizzes: {
                    orderBy: { order_index: 'asc' },
                },
                writing_exercises: {
                    include: {
                        writing_submissions: {
                            include: {
                                users: {
                                    select: {
                                        user_id: true,
                                        full_name: true,
                                    },
                                },
                            },
                            orderBy: { submitted_at: 'desc' },
                        },
                    },
                    orderBy: { created_at: 'asc' },
                },
                lesson_media: {
                    orderBy: { created_at: 'asc' },
                },
                progress: {
                    include: {
                        users: {
                            select: {
                                user_id: true,
                                full_name: true,
                                email: true,
                            },
                        },
                    },
                },
            },
        });
        if (!lesson) {
            throw new common_1.NotFoundException('Lesson not found');
        }
        return lesson;
    }
    async update(id, updateLessonDto, updatedBy) {
        try {
            const timestamp = (0, timezone_util_1.getVietnamCurrentDate)();
            const lesson = await this.prisma.lessons.update({
                where: { lesson_id: id },
                data: {
                    ...updateLessonDto,
                    updated_at: timestamp,
                },
                include: {
                    courses: {
                        select: {
                            course_id: true,
                            title: true,
                            level: true,
                        },
                    },
                    approver: {
                        select: {
                            user_id: true,
                            full_name: true,
                            email: true,
                        },
                    },
                    _count: {
                        select: {
                            vocabularies: true,
                            listening_exercises: true,
                            quizzes: true,
                            writing_exercises: true,
                        },
                    },
                },
            });
            if (updatedBy) {
                await this.logActivity(updatedBy, 'lesson.update', {
                    lesson_id: lesson.lesson_id,
                    title: lesson.title,
                    course_id: lesson.course_id,
                    payload: this.sanitizePayload(updateLessonDto),
                });
            }
            return lesson;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Lesson not found');
            }
            throw error;
        }
    }
    async remove(id, removedBy) {
        try {
            console.log(`🗑️  [LessonsService] Starting delete process for lesson ID: ${id}`);
            const lesson = await this.prisma.lessons.findUnique({
                where: { lesson_id: id },
                select: { lesson_id: true, title: true, course_id: true },
            });
            const mediaFiles = await this.prisma.lesson_media.findMany({
                where: { lesson_id: id },
                select: { media_id: true, media_url: true, media_type: true },
            });
            const vocabularies = await this.prisma.vocabularies.findMany({
                where: { lesson_id: id },
                select: { vocab_id: true, audio_url: true, image_url: true },
            });
            console.log(`📋 Found ${mediaFiles.length} media files and ${vocabularies.length} vocabularies`);
            for (const media of mediaFiles) {
                if (media.media_url) {
                    try {
                        console.log(`🗑️  Deleting media file: ${media.media_id} (${media.media_type})`);
                        const urlParts = media.media_url.split('/');
                        const uploadIndex = urlParts.findIndex((part) => part === 'upload');
                        if (uploadIndex !== -1 && uploadIndex < urlParts.length - 1) {
                            const afterUpload = urlParts.slice(uploadIndex + 1);
                            let publicIdParts = afterUpload;
                            if (afterUpload.length > 0 && /^v\d+$/.test(afterUpload[0])) {
                                publicIdParts = afterUpload.slice(1);
                            }
                            let publicId = publicIdParts.join('/');
                            publicId = publicId.split('?')[0].split('#')[0];
                            let resourceType = 'image';
                            if (media.media_type === 'video') {
                                resourceType = 'video';
                            }
                            else if (media.media_type === 'pdf') {
                                resourceType = 'raw';
                            }
                            let publicIdToTry = publicId;
                            if (resourceType !== 'raw') {
                                const lastDotIndex = publicIdToTry.lastIndexOf('.');
                                if (lastDotIndex !== -1) {
                                    const afterLastDot = publicIdToTry.substring(lastDotIndex + 1);
                                    if (/^[a-zA-Z0-9]{2,5}$/.test(afterLastDot)) {
                                        publicIdToTry = publicIdToTry.substring(0, lastDotIndex);
                                    }
                                }
                            }
                            if (resourceType === 'raw' && media.media_url.toLowerCase().includes('.pdf') && !publicIdToTry.toLowerCase().endsWith('.pdf')) {
                                try {
                                    await this.cloudinaryService.deleteFile(publicIdToTry + '.pdf', resourceType);
                                    console.log(`   ✅ Deleted media file ${media.media_id} from Cloudinary (with .pdf extension)`);
                                }
                                catch (extError) {
                                    await this.cloudinaryService.deleteFile(publicIdToTry, resourceType);
                                    console.log(`   ✅ Deleted media file ${media.media_id} from Cloudinary`);
                                }
                            }
                            else {
                                await this.cloudinaryService.deleteFile(publicIdToTry, resourceType);
                                console.log(`   ✅ Deleted media file ${media.media_id} from Cloudinary`);
                            }
                        }
                    }
                    catch (cloudinaryError) {
                        console.error(`   ❌ Error deleting media file ${media.media_id} from Cloudinary:`, cloudinaryError?.message);
                        console.warn(`   ⚠️  Continuing with lesson deletion...`);
                    }
                }
            }
            for (const vocab of vocabularies) {
                if (vocab.audio_url) {
                    try {
                        await this.deleteFileFromCloudinary(vocab.audio_url, 'audio');
                        console.log(`   ✅ Deleted vocabulary audio file ${vocab.vocab_id} from Cloudinary`);
                    }
                    catch (error) {
                        console.error(`   ❌ Error deleting vocabulary audio ${vocab.vocab_id} from Cloudinary:`, error?.message);
                        console.warn(`   ⚠️  Continuing with lesson deletion...`);
                    }
                }
                if (vocab.image_url) {
                    try {
                        await this.deleteFileFromCloudinary(vocab.image_url, 'image');
                        console.log(`   ✅ Deleted vocabulary image file ${vocab.vocab_id} from Cloudinary`);
                    }
                    catch (error) {
                        console.error(`   ❌ Error deleting vocabulary image ${vocab.vocab_id} from Cloudinary:`, error?.message);
                        console.warn(`   ⚠️  Continuing with lesson deletion...`);
                    }
                }
            }
            console.log(`✅ All Cloudinary files deleted, deleting lesson from database...`);
            await this.prisma.lessons.delete({
                where: { lesson_id: id },
            });
            if (removedBy && lesson) {
                await this.logActivity(removedBy, 'lesson.delete', {
                    lesson_id: lesson.lesson_id,
                    title: lesson.title,
                    course_id: lesson.course_id,
                });
            }
            console.log(`✅ Lesson ${id} deleted successfully`);
            return { message: 'Lesson deleted successfully' };
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Lesson not found');
            }
            throw error;
        }
    }
    async createVocabulary(lessonId, vocabularyData, createdBy) {
        try {
            const timestamp = (0, timezone_util_1.getVietnamCurrentDate)();
            const vocabulary = await this.prisma.vocabularies.create({
                data: {
                    ...vocabularyData,
                    lesson_id: lessonId,
                    created_by: createdBy,
                    created_at: timestamp,
                },
            });
            await this.logActivity(createdBy, 'lesson.vocabulary.create', {
                vocab_id: vocabulary.vocab_id,
                word: vocabulary.word,
                lesson_id: lessonId,
                payload: this.sanitizePayload(vocabularyData),
            });
            return vocabulary;
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to create vocabulary');
        }
    }
    async getLessonVocabularies(lessonId) {
        const vocabularies = await this.prisma.vocabularies.findMany({
            where: { lesson_id: lessonId },
            orderBy: { created_at: 'asc' },
        });
        return vocabularies;
    }
    async updateVocabulary(vocabId, vocabularyData, updatedBy) {
        try {
            const oldVocabulary = await this.prisma.vocabularies.findUnique({
                where: { vocab_id: vocabId },
            });
            if (!oldVocabulary) {
                throw new common_1.NotFoundException('Vocabulary not found');
            }
            const oldAudioUrl = oldVocabulary.audio_url;
            const oldImageUrl = oldVocabulary.image_url;
            const newAudioUrl = vocabularyData.audio_url;
            const newImageUrl = vocabularyData.image_url;
            if (oldAudioUrl && oldAudioUrl !== newAudioUrl) {
                try {
                    await this.deleteFileFromCloudinary(oldAudioUrl, 'audio');
                }
                catch (error) {
                    console.error('   ❌ Error deleting old audio from Cloudinary:', error?.message);
                    console.warn('   ⚠️  Continuing with database update...');
                }
            }
            if (oldImageUrl && oldImageUrl !== newImageUrl) {
                try {
                    await this.deleteFileFromCloudinary(oldImageUrl, 'image');
                }
                catch (error) {
                    console.error('   ❌ Error deleting old image from Cloudinary:', error?.message);
                    console.warn('   ⚠️  Continuing with database update...');
                }
            }
            const vocabulary = await this.prisma.vocabularies.update({
                where: { vocab_id: vocabId },
                data: vocabularyData,
            });
            if (updatedBy) {
                await this.logActivity(updatedBy, 'lesson.vocabulary.update', {
                    vocab_id: vocabulary.vocab_id,
                    word: vocabulary.word,
                    lesson_id: vocabulary.lesson_id,
                    payload: this.sanitizePayload(vocabularyData),
                });
            }
            return vocabulary;
        }
        catch (error) {
            if (error.code === 'P2025' || error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException('Vocabulary not found');
            }
            throw error;
        }
    }
    async deleteVocabulary(vocabId, deletedBy) {
        try {
            const vocabulary = await this.prisma.vocabularies.findUnique({
                where: { vocab_id: vocabId },
            });
            if (!vocabulary) {
                throw new common_1.NotFoundException('Vocabulary not found');
            }
            if (vocabulary.audio_url) {
                try {
                    await this.deleteFileFromCloudinary(vocabulary.audio_url, 'audio');
                }
                catch (error) {
                    console.error('   ❌ Error deleting audio from Cloudinary:', error?.message);
                    console.warn('   ⚠️  Continuing with database deletion...');
                }
            }
            if (vocabulary.image_url) {
                try {
                    await this.deleteFileFromCloudinary(vocabulary.image_url, 'image');
                }
                catch (error) {
                    console.error('   ❌ Error deleting image from Cloudinary:', error?.message);
                    console.warn('   ⚠️  Continuing with database deletion...');
                }
            }
            await this.prisma.vocabularies.delete({
                where: { vocab_id: vocabId },
            });
            if (deletedBy) {
                await this.logActivity(deletedBy, 'lesson.vocabulary.delete', {
                    vocab_id: vocabulary.vocab_id,
                    word: vocabulary.word,
                    lesson_id: vocabulary.lesson_id,
                });
            }
            return { message: 'Vocabulary deleted successfully' };
        }
        catch (error) {
            if (error.code === 'P2025' || error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException('Vocabulary not found');
            }
            throw error;
        }
    }
    async uploadVocabularyFile(lessonId, file, type) {
        console.log(`\n📤 [LessonsService] uploadVocabularyFile called (type: ${type})`);
        console.log('   └─ lessonId:', lessonId);
        console.log('   └─ File:', {
            originalname: file.originalname,
            mimetype: file.mimetype,
            size: `${(file.size / 1024).toFixed(2)} KB`,
            sizeMB: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
        });
        const fileSizeMB = file.size / (1024 * 1024);
        const maxSizeMB = 10;
        if (fileSizeMB > maxSizeMB) {
            console.error(`   ❌ File size exceeds Cloudinary limit: ${fileSizeMB.toFixed(2)} MB > ${maxSizeMB} MB`);
            throw new common_1.BadRequestException(`File quá lớn (${fileSizeMB.toFixed(2)} MB). Cloudinary free plan chỉ hỗ trợ file tối đa ${maxSizeMB} MB. Vui lòng chọn file nhỏ hơn hoặc nén file trước khi upload.`);
        }
        const folder = 'lessons/vocabularies';
        console.log('   └─ Uploading to Cloudinary folder:', folder);
        try {
            const contentType = type === 'audio' ? 'audio' : 'image';
            const uploadResult = await this.cloudinaryService.uploadFileWithMetadata(file, folder, contentType);
            console.log('   ✅ Upload successful!');
            console.log('   └─ URL:', uploadResult.url);
            return { url: uploadResult.url };
        }
        catch (error) {
            console.error('   ❌ Upload failed:', error);
            throw error;
        }
    }
    async deleteFileFromCloudinary(url, type) {
        try {
            const urlParts = url.split('/');
            const uploadIndex = urlParts.findIndex((part) => part === 'upload');
            if (uploadIndex !== -1 && uploadIndex < urlParts.length - 1) {
                const afterUpload = urlParts.slice(uploadIndex + 1);
                let publicIdParts = afterUpload;
                if (afterUpload.length > 0 && /^v\d+$/.test(afterUpload[0])) {
                    publicIdParts = afterUpload.slice(1);
                }
                let publicId = publicIdParts.join('/');
                publicId = publicId.split('?')[0];
                const lastDotIndex = publicId.lastIndexOf('.');
                if (lastDotIndex !== -1) {
                    publicId = publicId.substring(0, lastDotIndex);
                }
                let resourceType = 'image';
                if (type === 'audio') {
                    resourceType = 'video';
                }
                console.log('🗑️  [LessonsService] Deleting file from Cloudinary:');
                console.log('   └─ Public ID:', publicId);
                console.log('   └─ Resource type:', resourceType);
                console.log('   └─ Original URL:', url);
                await this.cloudinaryService.deleteFile(publicId, resourceType);
                console.log('   ✅ File deleted from Cloudinary successfully');
            }
            else {
                console.warn('   ⚠️  Could not extract public_id from URL:', url);
            }
        }
        catch (error) {
            console.error('   ❌ Error deleting file from Cloudinary:', error?.message);
            throw error;
        }
    }
    async createListeningExercise(lessonId, exerciseData, createdBy) {
        try {
            const timestamp = (0, timezone_util_1.getVietnamCurrentDate)();
            const exercise = await this.prisma.listening_exercises.create({
                data: {
                    ...exerciseData,
                    lesson_id: lessonId,
                    created_by: createdBy,
                    created_at: timestamp,
                },
            });
            await this.logActivity(createdBy, 'lesson.listening.create', {
                exercise_id: exercise.exercise_id,
                title: exercise.title,
                lesson_id: lessonId,
                payload: this.sanitizePayload(exerciseData),
            });
            return exercise;
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to create listening exercise');
        }
    }
    async getLessonListeningExercises(lessonId) {
        const exercises = await this.prisma.listening_exercises.findMany({
            where: { lesson_id: lessonId },
            include: {
                listening_questions: {
                    orderBy: { order_index: 'asc' },
                },
            },
            orderBy: { created_at: 'asc' },
        });
        return exercises;
    }
    async updateListeningExercise(exerciseId, data, updatedBy) {
        try {
            const oldExercise = await this.prisma.listening_exercises.findUnique({
                where: { exercise_id: exerciseId },
                select: { audio_url: true, lesson_id: true },
            });
            if (!oldExercise) {
                throw new common_1.NotFoundException('Listening exercise not found');
            }
            if (oldExercise.audio_url && data.audio_url && oldExercise.audio_url !== data.audio_url) {
                try {
                    await this.deleteFileFromCloudinary(oldExercise.audio_url, 'audio');
                    console.log(`   ✅ Deleted old listening exercise audio file ${exerciseId} from Cloudinary`);
                }
                catch (error) {
                    console.error(`   ❌ Error deleting old listening exercise audio ${exerciseId} from Cloudinary:`, error?.message);
                    console.warn(`   ⚠️  Continuing with update...`);
                }
            }
            const exercise = await this.prisma.listening_exercises.update({
                where: { exercise_id: exerciseId },
                data,
            });
            if (updatedBy) {
                await this.logActivity(updatedBy, 'lesson.listening.update', {
                    exercise_id: exercise.exercise_id,
                    title: exercise.title,
                    lesson_id: exercise.lesson_id,
                    payload: this.sanitizePayload(data),
                });
            }
            return exercise;
        }
        catch (error) {
            if (error.code === 'P2025' || error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException('Listening exercise not found');
            }
            throw error;
        }
    }
    async deleteListeningExercise(exerciseId, deletedBy) {
        try {
            const exercise = await this.prisma.listening_exercises.findUnique({
                where: { exercise_id: exerciseId },
                select: { exercise_id: true, title: true, lesson_id: true, audio_url: true },
            });
            if (!exercise) {
                throw new common_1.NotFoundException('Listening exercise not found');
            }
            if (exercise.audio_url) {
                try {
                    await this.deleteFileFromCloudinary(exercise.audio_url, 'audio');
                    console.log(`   ✅ Deleted listening exercise audio file ${exerciseId} from Cloudinary`);
                }
                catch (error) {
                    console.error(`   ❌ Error deleting listening exercise audio ${exerciseId} from Cloudinary:`, error?.message);
                    console.warn(`   ⚠️  Continuing with database deletion...`);
                }
            }
            await this.prisma.listening_exercises.delete({ where: { exercise_id: exerciseId } });
            if (deletedBy) {
                await this.logActivity(deletedBy, 'lesson.listening.delete', {
                    exercise_id: exercise.exercise_id,
                    title: exercise.title,
                    lesson_id: exercise.lesson_id,
                });
            }
            return { message: 'Listening exercise deleted successfully' };
        }
        catch (error) {
            if (error.code === 'P2025' || error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException('Listening exercise not found');
            }
            throw error;
        }
    }
    async uploadListeningAudio(lessonId, file) {
        console.log(`\n📤 [LessonsService] uploadListeningAudio called`);
        console.log('   └─ lessonId:', lessonId);
        console.log('   └─ File:', {
            originalname: file.originalname,
            mimetype: file.mimetype,
            size: `${(file.size / 1024).toFixed(2)} KB`,
            sizeMB: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
        });
        const fileSizeMB = file.size / (1024 * 1024);
        const maxSizeMB = 10;
        if (fileSizeMB > maxSizeMB) {
            console.error(`   ❌ File size exceeds Cloudinary limit: ${fileSizeMB.toFixed(2)} MB > ${maxSizeMB} MB`);
            throw new common_1.BadRequestException(`File quá lớn (${fileSizeMB.toFixed(2)} MB). Cloudinary free plan chỉ hỗ trợ file tối đa ${maxSizeMB} MB. Vui lòng chọn file nhỏ hơn hoặc nén file trước khi upload.`);
        }
        const folder = 'lessons/listening_exercises';
        console.log('   └─ Uploading to Cloudinary folder:', folder);
        try {
            const uploadResult = await this.cloudinaryService.uploadFileWithMetadata(file, folder, 'audio');
            console.log('   ✅ Upload successful!');
            console.log('   └─ URL:', uploadResult.url);
            return { url: uploadResult.url };
        }
        catch (error) {
            console.error('   ❌ Upload failed:', error);
            throw error;
        }
    }
    async createListeningQuestion(exerciseId, questionData, createdBy) {
        try {
            console.log('▶️ createListeningQuestion input:', {
                exerciseId,
                questionData,
            });
            const validQuestionTypes = ['multiple_choice', 'true_false', 'fill_blank'];
            const questionType = questionData.question_type || 'multiple_choice';
            if (!validQuestionTypes.includes(questionType)) {
                throw new common_1.BadRequestException(`Invalid question_type: ${questionType}. Must be one of: ${validQuestionTypes.join(', ')}`);
            }
            let normalizedCorrectAnswer = [];
            if (Array.isArray(questionData.correct_answer)) {
                normalizedCorrectAnswer = questionData.correct_answer;
            }
            else if (questionData.correct_answer === undefined || questionData.correct_answer === null) {
                normalizedCorrectAnswer = [];
            }
            else {
                normalizedCorrectAnswer = [questionData.correct_answer];
            }
            if (questionType === 'fill_blank' && typeof questionData.correct_answer === 'string') {
                normalizedCorrectAnswer = questionData.correct_answer
                    .split(/\r?\n|;|,/)
                    .map((s) => s.trim())
                    .filter((s) => s.length > 0);
            }
            const data = {
                ...questionData,
                question_type: questionType,
                correct_answer: normalizedCorrectAnswer,
                exercise_id: exerciseId,
            };
            const question = await this.prisma.listening_questions.create({
                data: {
                    ...data,
                    created_at: (0, timezone_util_1.getVietnamCurrentDate)(),
                },
                include: {
                    listening_exercises: {
                        select: { exercise_id: true, lesson_id: true },
                    },
                },
            });
            if (createdBy) {
                await this.logActivity(createdBy, 'lesson.listening.question.create', {
                    question_id: question.question_id,
                    exercise_id: exerciseId,
                    lesson_id: question.listening_exercises?.lesson_id,
                    payload: this.sanitizePayload(questionData),
                });
            }
            return question;
        }
        catch (error) {
            console.error('❌ createListeningQuestion error:', error);
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.BadRequestException(error?.message || 'Failed to create listening question');
        }
    }
    async updateListeningQuestion(questionId, data, updatedBy) {
        try {
            if (data.question_type) {
                const validQuestionTypes = ['multiple_choice', 'true_false', 'fill_blank'];
                if (!validQuestionTypes.includes(data.question_type)) {
                    throw new common_1.BadRequestException(`Invalid question_type: ${data.question_type}. Must be one of: ${validQuestionTypes.join(', ')}`);
                }
            }
            if (data.hasOwnProperty('correct_answer')) {
                if (Array.isArray(data.correct_answer)) {
                }
                else if (data.correct_answer === undefined || data.correct_answer === null) {
                    data.correct_answer = [];
                }
                else if (typeof data.correct_answer === 'string' && data.question_type === 'fill_blank') {
                    data.correct_answer = data.correct_answer
                        .split(/\r?\n|;|,/)
                        .map((s) => s.trim())
                        .filter((s) => s.length > 0);
                }
                else {
                    data.correct_answer = [data.correct_answer];
                }
            }
            const question = await this.prisma.listening_questions.update({
                where: { question_id: questionId },
                data,
                include: {
                    listening_exercises: {
                        select: { exercise_id: true, lesson_id: true },
                    },
                },
            });
            if (updatedBy) {
                await this.logActivity(updatedBy, 'lesson.listening.question.update', {
                    question_id: question.question_id,
                    exercise_id: question.listening_exercises?.exercise_id,
                    lesson_id: question.listening_exercises?.lesson_id,
                    payload: this.sanitizePayload(data),
                });
            }
            return question;
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Listening question not found');
            }
            throw error;
        }
    }
    async deleteListeningQuestion(questionId, deletedBy) {
        try {
            const question = await this.prisma.listening_questions.findUnique({
                where: { question_id: questionId },
                include: {
                    listening_exercises: {
                        select: { exercise_id: true, lesson_id: true },
                    },
                },
            });
            if (!question) {
                throw new common_1.NotFoundException('Listening question not found');
            }
            await this.prisma.listening_questions.delete({ where: { question_id: questionId } });
            if (deletedBy) {
                await this.logActivity(deletedBy, 'lesson.listening.question.delete', {
                    question_id: question.question_id,
                    exercise_id: question.listening_exercises?.exercise_id,
                    lesson_id: question.listening_exercises?.lesson_id,
                });
            }
            return { message: 'Listening question deleted successfully' };
        }
        catch (error) {
            if (error.code === 'P2025' || error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException('Listening question not found');
            }
            throw error;
        }
    }
    async createQuiz(lessonId, quizData, createdBy) {
        try {
            const timestamp = (0, timezone_util_1.getVietnamCurrentDate)();
            const questionType = quizData.question_type || 'multiple_choice';
            const options = Array.isArray(quizData.options) ? quizData.options : [];
            let correctAnswer = [];
            if (Array.isArray(quizData.correct_answer)) {
                correctAnswer = quizData.correct_answer;
            }
            else if (quizData.correct_answer != null) {
                correctAnswer = [quizData.correct_answer];
            }
            const quiz = await this.prisma.quizzes.create({
                data: {
                    question: quizData.question,
                    question_type: questionType,
                    explanation: quizData.explanation,
                    options,
                    correct_answer: correctAnswer,
                    order_index: quizData.order_index || 0,
                    lesson_id: lessonId,
                    created_by: createdBy,
                    created_at: timestamp,
                    updated_at: timestamp,
                },
            });
            await this.logActivity(createdBy, 'lesson.quiz.create', {
                quiz_id: quiz.quiz_id,
                question: quiz.question,
                question_type: quiz.question_type,
                lesson_id: lessonId,
                payload: this.sanitizePayload(quizData),
            });
            return quiz;
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to create quiz');
        }
    }
    async getLessonQuizzes(lessonId) {
        const quizzes = await this.prisma.quizzes.findMany({
            where: { lesson_id: lessonId },
            orderBy: { order_index: 'asc' },
        });
        return quizzes;
    }
    async createWritingExercise(lessonId, exerciseData, createdBy) {
        try {
            if (!exerciseData.prompt) {
                throw new common_1.BadRequestException('Đề bài (prompt) là bắt buộc');
            }
            const normalizedWordLimit = exerciseData.word_limit === undefined || exerciseData.word_limit === null
                ? null
                : Number(exerciseData.word_limit);
            if (normalizedWordLimit !== null && (Number.isNaN(normalizedWordLimit) || normalizedWordLimit < 0)) {
                throw new common_1.BadRequestException('Giới hạn từ phải là số không âm');
            }
            const normalizedOrderIndex = exerciseData.order_index === undefined || exerciseData.order_index === null
                ? 0
                : Number(exerciseData.order_index);
            if (Number.isNaN(normalizedOrderIndex) || normalizedOrderIndex < 0) {
                throw new common_1.BadRequestException('Thứ tự hiển thị phải là số không âm');
            }
            const timestamp = (0, timezone_util_1.getVietnamCurrentDate)();
            const exercise = await this.prisma.writing_exercises.create({
                data: {
                    title: exerciseData.title || null,
                    prompt: exerciseData.prompt,
                    sample_answer: exerciseData.sample_answer || null,
                    word_limit: normalizedWordLimit,
                    order_index: normalizedOrderIndex,
                    lesson_id: lessonId,
                    created_by: createdBy,
                    created_at: timestamp,
                },
            });
            await this.logActivity(createdBy, 'lesson.writing.create', {
                exercise_id: exercise.exercise_id,
                title: exercise.title,
                lesson_id: lessonId,
                payload: this.sanitizePayload(exerciseData),
            });
            return exercise;
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            console.error('Error creating writing exercise:', error);
            throw new common_1.BadRequestException(error?.message || 'Không thể tạo bài viết. Vui lòng kiểm tra lại dữ liệu.');
        }
    }
    async getLessonWritingExercises(lessonId) {
        const exercises = await this.prisma.writing_exercises.findMany({
            where: { lesson_id: lessonId },
            include: {
                writing_submissions: {
                    include: {
                        users: {
                            select: {
                                user_id: true,
                                full_name: true,
                                email: true,
                            },
                        },
                    },
                    orderBy: { submitted_at: 'desc' },
                },
            },
            orderBy: [
                { order_index: 'asc' },
                { created_at: 'asc' },
            ],
        });
        return exercises;
    }
    async createLessonMedia(lessonId, mediaData, createdBy) {
        console.log('\n📝 [LessonsService] createLessonMedia called');
        console.log('   └─ lessonId:', lessonId);
        console.log('   └─ mediaData:', JSON.stringify(mediaData, null, 2));
        console.log('   └─ createdBy:', createdBy);
        try {
            const { media_type, media_url, duration_seconds, total_pages } = mediaData;
            const normalizedDuration = duration_seconds === undefined || duration_seconds === null
                ? null
                : Number(duration_seconds);
            const normalizedPages = total_pages === undefined || total_pages === null
                ? null
                : Number(total_pages);
            console.log('   └─ Normalized values:');
            console.log('      • duration_seconds:', normalizedDuration);
            console.log('      • total_pages:', normalizedPages);
            if (normalizedDuration !== null && (Number.isNaN(normalizedDuration) || normalizedDuration < 0)) {
                throw new common_1.BadRequestException('duration_seconds must be a non-negative number');
            }
            if (normalizedPages !== null && (Number.isNaN(normalizedPages) || normalizedPages < 0)) {
                throw new common_1.BadRequestException('total_pages must be a non-negative number');
            }
            console.log('   └─ Creating database record...');
            const timestamp = (0, timezone_util_1.getVietnamCurrentDate)();
            const media = await this.prisma.lesson_media.create({
                data: {
                    lesson_id: lessonId,
                    media_type,
                    media_url,
                    duration_seconds: normalizedDuration,
                    total_pages: normalizedPages,
                    created_by: createdBy,
                    created_at: timestamp,
                },
            });
            console.log('   ✅ Database record created successfully!');
            console.log('   └─ media_id:', media.media_id);
            console.log('   └─ media_url:', media.media_url);
            console.log('');
            await this.logActivity(createdBy, 'lesson.media.create', {
                media_id: media.media_id,
                media_type: media.media_type,
                lesson_id: lessonId,
                payload: this.sanitizePayload(mediaData),
            });
            return media;
        }
        catch (error) {
            console.error('   ❌ [LessonsService] Error creating lesson media:');
            console.error('      └─ Error:', error);
            console.error('      └─ Error message:', error?.message);
            console.error('      └─ Error stack:', error?.stack);
            console.log('');
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.BadRequestException(`Failed to create lesson media: ${error?.message || 'Unknown error'}`);
        }
    }
    async getLessonMedia(lessonId) {
        const media = await this.prisma.lesson_media.findMany({
            where: { lesson_id: lessonId },
            orderBy: { created_at: 'asc' },
        });
        return media;
    }
    async deleteLessonMedia(mediaId, deletedBy) {
        try {
            const media = await this.prisma.lesson_media.findUnique({
                where: { media_id: mediaId },
            });
            if (!media) {
                throw new common_1.NotFoundException('Media not found');
            }
            if (media.media_url) {
                try {
                    const urlParts = media.media_url.split('/');
                    const uploadIndex = urlParts.findIndex((part) => part === 'upload');
                    if (uploadIndex !== -1 && uploadIndex < urlParts.length - 1) {
                        const afterUpload = urlParts.slice(uploadIndex + 1);
                        let publicIdParts = afterUpload;
                        if (afterUpload.length > 0 && /^v\d+$/.test(afterUpload[0])) {
                            publicIdParts = afterUpload.slice(1);
                        }
                        let publicId = publicIdParts.join('/');
                        publicId = publicId.split('?')[0].split('#')[0];
                        let resourceType = 'image';
                        if (media.media_type === 'video') {
                            resourceType = 'video';
                        }
                        else if (media.media_type === 'pdf') {
                            resourceType = 'raw';
                        }
                        let publicIdToTry = publicId;
                        if (resourceType !== 'raw') {
                            const lastDotIndex = publicIdToTry.lastIndexOf('.');
                            if (lastDotIndex !== -1) {
                                const afterLastDot = publicIdToTry.substring(lastDotIndex + 1);
                                if (/^[a-zA-Z0-9]{2,5}$/.test(afterLastDot)) {
                                    publicIdToTry = publicIdToTry.substring(0, lastDotIndex);
                                }
                            }
                        }
                        let deletedSuccessfully = false;
                        if (resourceType === 'raw') {
                            if (media.media_url.toLowerCase().includes('.pdf') && !publicIdToTry.toLowerCase().endsWith('.pdf')) {
                                const publicIdWithExt = publicIdToTry + '.pdf';
                                console.log('   └─ Trying with .pdf extension:', publicIdWithExt);
                                try {
                                    await this.cloudinaryService.deleteFile(publicIdWithExt, resourceType);
                                    console.log('   ✅ File deleted from Cloudinary successfully (with .pdf extension)');
                                    deletedSuccessfully = true;
                                }
                                catch (extError) {
                                    console.warn('   ⚠️  Failed with .pdf extension, trying without:', extError?.message);
                                }
                            }
                        }
                        if (!deletedSuccessfully) {
                            console.log('🗑️  [LessonsService] Deleting file from Cloudinary:');
                            console.log('   └─ Public ID (extracted):', publicId);
                            console.log('   └─ Public ID (to try):', publicIdToTry);
                            console.log('   └─ Resource type:', resourceType);
                            console.log('   └─ Original URL:', media.media_url);
                            await this.cloudinaryService.deleteFile(publicIdToTry, resourceType);
                            console.log('   ✅ File deleted from Cloudinary successfully');
                        }
                    }
                    else {
                        console.warn('   ⚠️  Could not extract public_id from URL:', media.media_url);
                    }
                }
                catch (cloudinaryError) {
                    console.error('   ❌ Error deleting file from Cloudinary:', cloudinaryError?.message);
                    console.warn('   ⚠️  Continuing with database deletion...');
                }
            }
            await this.prisma.lesson_media.delete({ where: { media_id: mediaId } });
            console.log('   ✅ Database record deleted successfully');
            if (deletedBy) {
                await this.logActivity(deletedBy, 'lesson.media.delete', {
                    media_id: media.media_id,
                    media_type: media.media_type,
                    lesson_id: media.lesson_id,
                });
            }
            return { message: 'Media deleted successfully' };
        }
        catch (error) {
            if (error.code === 'P2025' || error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException('Media not found');
            }
            throw error;
        }
    }
    async getLessonStats() {
        const [totalLessons, lessonsByCourse, totalVocabularies, totalListeningExercises, totalQuizzes, totalWritingExercises,] = await Promise.all([
            this.prisma.lessons.count(),
            this.prisma.lessons.groupBy({
                by: ['course_id'],
                _count: {
                    lesson_id: true,
                },
            }),
            this.prisma.vocabularies.count(),
            this.prisma.listening_exercises.count(),
            this.prisma.quizzes.count(),
            this.prisma.writing_exercises.count(),
        ]);
        return {
            totalLessons,
            lessonsByCourse,
            totalVocabularies,
            totalListeningExercises,
            totalQuizzes,
            totalWritingExercises,
        };
    }
    async getTeacherLessons(teacherId, page = 1, limit = 10, search, courseId) {
        const skip = (page - 1) * limit;
        const teacherCourseScope = {
            class_groups: {
                some: {
                    teacher_id: teacherId,
                    status: {
                        in: ['open', 'ongoing'],
                    },
                },
            },
        };
        const where = {
            courses: teacherCourseScope,
        };
        if (courseId) {
            where.course_id = courseId;
            const course = await this.prisma.courses.findFirst({
                where: {
                    course_id: courseId,
                    class_groups: {
                        some: {
                            teacher_id: teacherId,
                            status: {
                                in: ['open', 'ongoing'],
                            },
                        },
                    },
                },
            });
            if (!course) {
                return {
                    data: [],
                    total: 0,
                    page,
                    limit,
                    totalPages: 0,
                };
            }
        }
        if (search) {
            where.OR = [
                { title: { contains: search, mode: 'insensitive' } },
                { content: { contains: search, mode: 'insensitive' } },
            ];
        }
        const [lessons, total] = await Promise.all([
            this.prisma.lessons.findMany({
                where,
                skip,
                take: limit,
                include: {
                    courses: {
                        select: {
                            course_id: true,
                            title: true,
                            level: true,
                            teacher: {
                                select: {
                                    user_id: true,
                                    full_name: true,
                                    email: true,
                                },
                            },
                            course_teachers: {
                                select: {
                                    users: {
                                        select: {
                                            user_id: true,
                                            full_name: true,
                                            email: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                    approver: {
                        select: {
                            user_id: true,
                            full_name: true,
                            email: true,
                        },
                    },
                    _count: {
                        select: {
                            vocabularies: true,
                            listening_exercises: true,
                            quizzes: true,
                            writing_exercises: true,
                        },
                    },
                },
                orderBy: { order_index: 'asc' },
            }),
            this.prisma.lessons.count({ where }),
        ]);
        return {
            data: lessons,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async reorderLessons(courseId, lessonOrders, userId) {
        try {
            const timestamp = (0, timezone_util_1.getVietnamCurrentDate)();
            const updatePromises = lessonOrders.map(({ lessonId, orderIndex }) => this.prisma.lessons.update({
                where: { lesson_id: lessonId },
                data: { order_index: orderIndex, updated_at: timestamp },
            }));
            await Promise.all(updatePromises);
            if (userId) {
                await this.logActivity(userId, 'lesson.reorder', {
                    course_id: courseId,
                    lesson_orders: lessonOrders,
                });
            }
            return { message: 'Lessons reordered successfully' };
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to reorder lessons');
        }
    }
    async duplicateLesson(lessonId, newTitle, createdBy) {
        const originalLesson = await this.prisma.lessons.findUnique({
            where: { lesson_id: lessonId },
            include: {
                lesson_media: true,
            },
        });
        if (!originalLesson) {
            throw new common_1.NotFoundException('Lesson not found');
        }
        const timestamp = (0, timezone_util_1.getVietnamCurrentDate)();
        const newLesson = await this.prisma.lessons.create({
            data: {
                course_id: originalLesson.course_id,
                title: newTitle,
                content: originalLesson.content,
                order_index: originalLesson.order_index,
                created_by: createdBy,
                created_at: timestamp,
                updated_at: timestamp,
            },
        });
        const lessonMediaList = (originalLesson.lesson_media ?? []);
        if (lessonMediaList.length) {
            await this.prisma.$transaction(lessonMediaList.map((media) => this.prisma.lesson_media.create({
                data: {
                    lesson_id: newLesson.lesson_id,
                    media_type: media.media_type,
                    media_url: media.media_url,
                    duration_seconds: media.duration_seconds ?? null,
                    total_pages: media.total_pages ?? null,
                    created_by: createdBy ?? media.created_by ?? null,
                    created_at: timestamp,
                },
            })));
        }
        await this.logActivity(createdBy, 'lesson.duplicate', {
            original_lesson_id: lessonId,
            original_title: originalLesson.title,
            new_lesson_id: newLesson.lesson_id,
            new_title: newTitle,
            course_id: originalLesson.course_id,
        });
        return this.findOne(newLesson.lesson_id);
    }
    async findById(id) {
        const lesson = await this.prisma.lessons.findUnique({
            where: { lesson_id: id },
            include: {
                courses: {
                    select: {
                        course_id: true,
                        title: true,
                        level: true,
                    },
                },
                approver: {
                    select: {
                        user_id: true,
                        full_name: true,
                        email: true,
                    },
                },
                vocabularies: true,
                listening_exercises: {
                    include: {
                        listening_questions: true,
                    },
                },
                quizzes: {
                    orderBy: { order_index: 'asc' },
                },
                writing_exercises: {
                    include: {
                        writing_submissions: true,
                    },
                },
                lesson_media: true,
            },
        });
        if (!lesson) {
            throw new common_1.NotFoundException('Lesson not found');
        }
        return lesson;
    }
    async addVocabulary(lessonId, vocabularyData, createdBy) {
        return this.createVocabulary(lessonId, vocabularyData, createdBy);
    }
    async removeVocabulary(vocabId, deletedBy) {
        return this.deleteVocabulary(vocabId, deletedBy);
    }
    async addListeningExercise(lessonId, exerciseData, createdBy) {
        return this.createListeningExercise(lessonId, exerciseData, createdBy);
    }
    async addListeningQuestion(exerciseId, questionData, createdBy) {
        return this.createListeningQuestion(exerciseId, questionData, createdBy);
    }
    async addQuiz(lessonId, quizData, createdBy) {
        return this.createQuiz(lessonId, quizData, createdBy);
    }
    async updateQuiz(quizId, data, updatedBy) {
        try {
            if (data.options && !Array.isArray(data.options)) {
                data.options = [];
            }
            if (data.hasOwnProperty('correct_answer')) {
                if (Array.isArray(data.correct_answer)) {
                }
                else if (data.correct_answer == null) {
                    data.correct_answer = [];
                }
                else {
                    data.correct_answer = [data.correct_answer];
                }
            }
            const quiz = await this.prisma.quizzes.update({
                where: { quiz_id: quizId },
                data: {
                    ...data,
                    updated_at: (0, timezone_util_1.getVietnamCurrentDate)(),
                },
            });
            if (updatedBy) {
                await this.logActivity(updatedBy, 'lesson.quiz.update', {
                    quiz_id: quiz.quiz_id,
                    question: quiz.question,
                    question_type: quiz.question_type,
                    lesson_id: quiz.lesson_id,
                    payload: this.sanitizePayload(data),
                });
            }
            return quiz;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Quiz not found');
            }
            throw error;
        }
    }
    async deleteQuiz(quizId, deletedBy) {
        try {
            const quiz = await this.prisma.quizzes.findUnique({
                where: { quiz_id: quizId },
            });
            if (!quiz) {
                throw new common_1.NotFoundException('Quiz not found');
            }
            await this.prisma.quizzes.delete({ where: { quiz_id: quizId } });
            if (deletedBy) {
                await this.logActivity(deletedBy, 'lesson.quiz.delete', {
                    quiz_id: quiz.quiz_id,
                    question: quiz.question,
                    question_type: quiz.question_type,
                    lesson_id: quiz.lesson_id,
                });
            }
            return { message: 'Quiz deleted successfully' };
        }
        catch (error) {
            if (error.code === 'P2025' || error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException('Quiz not found');
            }
            throw error;
        }
    }
    async addWritingExercise(lessonId, exerciseData, createdBy) {
        return this.createWritingExercise(lessonId, exerciseData, createdBy);
    }
    async getWritingExercises(lessonId) {
        const list = await this.prisma.writing_exercises.findMany({
            where: { lesson_id: lessonId },
            orderBy: [
                { order_index: 'asc' },
                { created_at: 'asc' },
            ],
        });
        return list;
    }
    async updateWritingExercise(exerciseId, data, updatedBy) {
        try {
            const updatePayload = { ...data };
            if (updatePayload.word_limit !== undefined) {
                updatePayload.word_limit =
                    updatePayload.word_limit === null || updatePayload.word_limit === ''
                        ? null
                        : Number(updatePayload.word_limit);
                if (updatePayload.word_limit !== null &&
                    (Number.isNaN(updatePayload.word_limit) || updatePayload.word_limit < 0)) {
                    throw new common_1.BadRequestException('Giới hạn từ phải là số không âm');
                }
            }
            if (updatePayload.order_index !== undefined) {
                updatePayload.order_index =
                    updatePayload.order_index === null || updatePayload.order_index === ''
                        ? 0
                        : Number(updatePayload.order_index);
                if (Number.isNaN(updatePayload.order_index) || updatePayload.order_index < 0) {
                    throw new common_1.BadRequestException('Thứ tự hiển thị phải là số không âm');
                }
            }
            const exercise = await this.prisma.writing_exercises.update({
                where: { exercise_id: exerciseId },
                data: updatePayload,
            });
            if (updatedBy) {
                await this.logActivity(updatedBy, 'lesson.writing.update', {
                    exercise_id: exercise.exercise_id,
                    title: exercise.title,
                    lesson_id: exercise.lesson_id,
                    payload: this.sanitizePayload(data),
                });
            }
            return exercise;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Writing exercise not found');
            }
            throw error;
        }
    }
    async deleteWritingExercise(exerciseId, deletedBy) {
        try {
            const exercise = await this.prisma.writing_exercises.findUnique({
                where: { exercise_id: exerciseId },
            });
            if (!exercise) {
                throw new common_1.NotFoundException('Writing exercise not found');
            }
            await this.prisma.writing_exercises.delete({ where: { exercise_id: exerciseId } });
            if (deletedBy) {
                await this.logActivity(deletedBy, 'lesson.writing.delete', {
                    exercise_id: exercise.exercise_id,
                    title: exercise.title,
                    lesson_id: exercise.lesson_id,
                });
            }
            return { message: 'Writing exercise deleted successfully' };
        }
        catch (error) {
            if (error.code === 'P2025' || error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException('Writing exercise not found');
            }
            throw error;
        }
    }
    async submitWritingExercise(exerciseId, userId, submissionData) {
        const exercise = await this.prisma.writing_exercises.findUnique({
            where: { exercise_id: exerciseId },
            select: {
                lesson_id: true,
                lessons: {
                    select: {
                        course_id: true,
                    },
                },
            },
        });
        if (!exercise?.lesson_id || !exercise.lessons?.course_id) {
            throw new common_1.NotFoundException('Bài viết không thuộc khóa học hợp lệ');
        }
        const registration = await this.prisma.registrations.findFirst({
            where: {
                user_id: userId,
                course_id: exercise.lessons.course_id,
                registration_status: {
                    in: ['paid', 'active', 'completed'],
                },
            },
            orderBy: {
                attempt_no: 'desc',
            },
        });
        if (!registration) {
            throw new common_1.BadRequestException('Học viên chưa có đăng ký hợp lệ cho khóa học này để nộp bài viết');
        }
        return await this.prisma.writing_submissions.create({
            data: {
                exercise_id: exerciseId,
                user_id: userId,
                reg_id: registration.reg_id,
                content: submissionData.content,
                file_url: submissionData.file_url,
                word_count: submissionData.word_count || 0,
                status: 'submitted',
                submitted_at: (0, timezone_util_1.getVietnamCurrentDate)(),
            },
        });
    }
    async gradeWritingSubmission(submissionId, gradeData, gradedBy) {
        const submission = await this.prisma.writing_submissions.findUnique({
            where: { submission_id: submissionId },
            include: {
                writing_exercises: {
                    include: {
                        lessons: {
                            select: {
                                lesson_id: true,
                                title: true,
                                course_id: true,
                            },
                        },
                    },
                },
            },
        });
        if (!submission) {
            throw new common_1.NotFoundException('Writing submission not found');
        }
        const updated = await this.prisma.writing_submissions.update({
            where: { submission_id: submissionId },
            data: {
                grade: gradeData.grade,
                feedback: gradeData.feedback,
                graded_by: gradedBy,
                graded_at: (0, timezone_util_1.getVietnamCurrentDate)(),
                status: 'reviewed',
            },
        });
        await this.logActivity(gradedBy, 'lesson.writing.grade', {
            submission_id: submissionId,
            exercise_id: submission.exercise_id,
            lesson_id: submission.writing_exercises?.lessons?.lesson_id,
            lesson_title: submission.writing_exercises?.lessons?.title,
            grade: gradeData.grade,
            user_id: submission.user_id,
        });
        return updated;
    }
    async getWritingSubmissions(exerciseId) {
        const subs = await this.prisma.writing_submissions.findMany({
            where: { exercise_id: exerciseId },
            orderBy: { submitted_at: 'desc' },
        });
        return subs;
    }
    async extractPdfMetadata(file) {
        console.log('\n📄 [LessonsService] extractPdfMetadata called');
        console.log('   └─ File:', {
            originalname: file.originalname,
            mimetype: file.mimetype,
            size: `${(file.size / 1024).toFixed(2)} KB`,
        });
        try {
            const pdfParse = require('pdf-parse');
            console.log('   └─ pdfParse type:', typeof pdfParse);
            if (typeof pdfParse !== 'function') {
                throw new Error(`pdfParse is not a function, got: ${typeof pdfParse}`);
            }
            console.log('   └─ Calling pdfParse with buffer...');
            const pdfData = await pdfParse(file.buffer);
            if (!pdfData || typeof pdfData !== 'object') {
                throw new Error(`Invalid pdfData returned: ${typeof pdfData}`);
            }
            const total_pages = pdfData.numpages;
            if (!total_pages || typeof total_pages !== 'number') {
                console.warn('   ⚠️  Could not find numpages in result:', Object.keys(pdfData || {}));
                throw new Error(`Could not extract page count. Result keys: ${JSON.stringify(Object.keys(pdfData || {}))}`);
            }
            console.log('   ✅ PDF pages extracted:', total_pages);
            console.log('');
            return { total_pages };
        }
        catch (error) {
            console.error('   ❌ Error extracting PDF metadata:', error);
            throw new common_1.BadRequestException(`Failed to extract PDF metadata: ${error?.message || 'Unknown error'}`);
        }
    }
    async uploadContentOnly(lessonId, file, contentType) {
        console.log('\n☁️  [LessonsService] uploadContentOnly called');
        console.log('   └─ lessonId:', lessonId);
        console.log('   └─ File:', {
            originalname: file.originalname,
            mimetype: file.mimetype,
            size: `${(file.size / 1024).toFixed(2)} KB`,
            sizeMB: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
        });
        console.log('   └─ contentType:', contentType);
        const fileSizeMB = file.size / (1024 * 1024);
        const maxSizeMB = 10;
        if (fileSizeMB > maxSizeMB) {
            console.error(`   ❌ File size exceeds Cloudinary limit: ${fileSizeMB.toFixed(2)} MB > ${maxSizeMB} MB`);
            throw new common_1.BadRequestException(`File quá lớn (${fileSizeMB.toFixed(2)} MB). Cloudinary free plan chỉ hỗ trợ file tối đa ${maxSizeMB} MB. Vui lòng chọn file nhỏ hơn hoặc nén file trước khi upload.`);
        }
        const folder = `lessons/lessons_media`;
        console.log('   └─ Uploading to Cloudinary folder:', folder);
        try {
            const uploadResult = await this.cloudinaryService.uploadFileWithMetadata(file, folder, contentType);
            console.log('   ✅ Cloudinary upload successful!');
            console.log('   └─ URL:', uploadResult.url);
            let duration_seconds = undefined;
            let total_pages = undefined;
            if (contentType === 'video') {
                if (uploadResult.duration) {
                    duration_seconds = uploadResult.duration;
                    console.log('   └─ Video duration from Cloudinary:', duration_seconds, 'seconds');
                }
                else {
                    try {
                        const getVideoDuration = require('get-video-duration');
                        const duration = await getVideoDuration(file.buffer);
                        duration_seconds = Math.round(duration);
                        console.log('   └─ Video duration extracted from file:', duration_seconds, 'seconds');
                    }
                    catch (error) {
                        console.warn('   ⚠️  Could not extract video duration from file buffer:', error?.message);
                        console.warn('   ⚠️  Duration will be left empty. User can fill manually.');
                    }
                }
            }
            else if (contentType === 'pdf') {
                try {
                    const pdfParse = require('pdf-parse');
                    const pdfData = await pdfParse(file.buffer);
                    total_pages = pdfData.numpages;
                    console.log('   └─ PDF pages extracted:', total_pages);
                }
                catch (error) {
                    console.warn('   ⚠️  Could not extract PDF pages:', error?.message);
                    console.warn('   ⚠️  Pages will be left empty. User can fill manually.');
                }
            }
            console.log('');
            return {
                media_url: uploadResult.url,
                media_type: contentType || 'attachment',
                duration_seconds,
                total_pages,
            };
        }
        catch (error) {
            console.error('   ❌ Cloudinary upload failed:');
            console.error('      └─ Error:', error);
            console.error('      └─ Error message:', error?.message);
            console.error('      └─ Error http_code:', error?.http_code);
            console.log('');
            if (error?.http_code === 400 && error?.message?.includes('File size too large')) {
                const fileSizeMB = file.size / (1024 * 1024);
                throw new common_1.BadRequestException(`File quá lớn (${fileSizeMB.toFixed(2)} MB). Cloudinary free plan chỉ hỗ trợ file tối đa 10 MB. Vui lòng chọn file nhỏ hơn hoặc nén file trước khi upload.`);
            }
            if (error?.message) {
                throw new common_1.BadRequestException(`Lỗi upload lên Cloudinary: ${error.message}`);
            }
            throw error;
        }
    }
    async uploadContent(lessonId, file, contentType, createdBy) {
        const folder = `lessons/lessons_media`;
        const uploaded = await this.filesService.uploadFile(file, createdBy, contentType || 'attachment', folder);
        const media = await this.prisma.lesson_media.create({
            data: {
                lesson_id: lessonId,
                media_type: contentType || 'attachment',
                media_url: uploaded.url,
                duration_seconds: null,
                total_pages: null,
                created_by: createdBy,
                created_at: (0, timezone_util_1.getVietnamCurrentDate)(),
            },
        });
        return media;
    }
    async uploadAttachment(lessonId, file, attachmentType, createdBy) {
        return {
            lessonId,
            fileName: file.filename,
            attachmentType,
            uploadedBy: createdBy,
            uploadedAt: (0, timezone_util_1.getVietnamCurrentDate)(),
        };
    }
    async approveLesson(lessonId, approvedBy, reviewNote) {
        try {
            const lesson = await this.findOne(lessonId);
            const timestamp = (0, timezone_util_1.getVietnamCurrentDate)();
            const updatedLesson = await this.prisma.lessons.update({
                where: { lesson_id: lessonId },
                data: {
                    approval_status: 'approved',
                    approved_by: approvedBy,
                    approved_at: timestamp,
                    updated_at: timestamp,
                    review_note: reviewNote || null,
                },
                include: {
                    courses: {
                        select: {
                            course_id: true,
                            title: true,
                            level: true,
                        },
                    },
                    approver: {
                        select: {
                            user_id: true,
                            full_name: true,
                            email: true,
                        },
                    },
                    _count: {
                        select: {
                            vocabularies: true,
                            listening_exercises: true,
                            quizzes: true,
                            writing_exercises: true,
                        },
                    },
                },
            });
            await this.logActivity(approvedBy, 'lesson.approve', {
                lesson_id: updatedLesson.lesson_id,
                title: updatedLesson.title,
                course_id: updatedLesson.course_id,
                review_note: reviewNote || null,
            });
            return updatedLesson;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Lesson not found');
            }
            throw error;
        }
    }
    async rejectLesson(lessonId, approvedBy, reviewNote) {
        try {
            const lesson = await this.findOne(lessonId);
            const timestamp = (0, timezone_util_1.getVietnamCurrentDate)();
            const updatedLesson = await this.prisma.lessons.update({
                where: { lesson_id: lessonId },
                data: {
                    approval_status: 'rejected',
                    approved_by: approvedBy,
                    approved_at: timestamp,
                    updated_at: timestamp,
                    review_note: reviewNote,
                },
                include: {
                    courses: {
                        select: {
                            course_id: true,
                            title: true,
                            level: true,
                        },
                    },
                    approver: {
                        select: {
                            user_id: true,
                            full_name: true,
                            email: true,
                        },
                    },
                    _count: {
                        select: {
                            vocabularies: true,
                            listening_exercises: true,
                            quizzes: true,
                            writing_exercises: true,
                        },
                    },
                },
            });
            await this.logActivity(approvedBy, 'lesson.reject', {
                lesson_id: updatedLesson.lesson_id,
                title: updatedLesson.title,
                course_id: updatedLesson.course_id,
                review_note: reviewNote,
            });
            return updatedLesson;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Lesson not found');
            }
            throw error;
        }
    }
    async updateApprovalStatus(lessonId, approvalStatus, approvedBy, reviewNote) {
        try {
            const lesson = await this.findOne(lessonId);
            const updateData = {
                approval_status: approvalStatus,
            };
            const timestamp = (0, timezone_util_1.getVietnamCurrentDate)();
            if (approvalStatus === 'approved' || approvalStatus === 'rejected') {
                updateData.approved_by = approvedBy;
                updateData.approved_at = timestamp;
            }
            if (reviewNote !== undefined) {
                updateData.review_note = reviewNote;
            }
            const updatedLesson = await this.prisma.lessons.update({
                where: { lesson_id: lessonId },
                data: {
                    ...updateData,
                    updated_at: timestamp,
                },
                include: {
                    courses: {
                        select: {
                            course_id: true,
                            title: true,
                            level: true,
                        },
                    },
                    approver: {
                        select: {
                            user_id: true,
                            full_name: true,
                            email: true,
                        },
                    },
                    _count: {
                        select: {
                            vocabularies: true,
                            listening_exercises: true,
                            quizzes: true,
                            writing_exercises: true,
                        },
                    },
                },
            });
            return updatedLesson;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Lesson not found');
            }
            throw error;
        }
    }
};
exports.LessonsService = LessonsService;
exports.LessonsService = LessonsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        files_service_1.FilesService,
        cloudinary_service_1.CloudinaryService])
], LessonsService);
//# sourceMappingURL=lessons.service.js.map