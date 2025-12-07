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
var ClassesService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const timezone_util_1 = require("../../shared/utils/timezone.util");
let ClassesService = ClassesService_1 = class ClassesService {
    prisma;
    logger = new common_1.Logger(ClassesService_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    sanitizePayload(payload) {
        return Object.fromEntries(Object.entries(payload).filter(([, value]) => value !== undefined));
    }
    normalizeScoreValue(value) {
        if (value === null || value === undefined || value === '')
            return 0;
        const num = typeof value === 'number' ? value : parseFloat(String(value).replace(',', '.'));
        if (Number.isNaN(num)) {
            return 0;
        }
        return num;
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
    buildClassInclude(options) {
        const include = {
            class_group: {
                select: {
                    class_group_id: true,
                    name: true,
                    course: {
                        select: {
                            course_id: true,
                            title: true,
                            level: true,
                        },
                    },
                    teacher: {
                        select: {
                            user_id: true,
                            full_name: true,
                            email: true,
                        },
                    },
                    shift: {
                        select: {
                            shift_id: true,
                            name: true,
                            start_time: true,
                            end_time: true,
                        },
                    },
                },
            },
        };
        if (options?.includeParticipants !== false) {
            include.class_participants = {
                include: {
                    users: {
                        select: {
                            user_id: true,
                            full_name: true,
                            email: true,
                            ...(options?.includeParticipantContact ? { phone: true } : {}),
                        },
                    },
                },
            };
        }
        if (options?.includeExamScores !== false) {
            include.exam_scores = {
                include: {
                    users: {
                        select: {
                            user_id: true,
                            full_name: true,
                            email: true,
                        },
                    },
                },
            };
        }
        return include;
    }
    async create(createClassDto, createdBy) {
        console.log('🟢 [SERVICE] Starting class creation');
        console.log('🟢 [SERVICE] Created by user ID:', createdBy);
        console.log('🟢 [SERVICE] Class data:', {
            class_group_id: createClassDto.class_group_id,
            title: createClassDto.title,
            class_type: createClassDto.class_type,
            start_time: createClassDto.start_time,
            end_time: createClassDto.end_time,
            teacher_id: createClassDto.teacher_id,
        });
        const classGroup = await this.prisma.class_groups.findUnique({
            where: { class_group_id: createClassDto.class_group_id },
        });
        if (!classGroup) {
            console.error('❌ [SERVICE] Class group not found:', createClassDto.class_group_id);
            throw new common_1.BadRequestException('Nhóm lớp không tồn tại');
        }
        const startTime = (0, timezone_util_1.normalizeVietnamTimestamp)(createClassDto.start_time);
        if (!startTime) {
            throw new common_1.BadRequestException('start_time không hợp lệ');
        }
        const endTime = (0, timezone_util_1.normalizeVietnamTimestamp)(createClassDto.end_time);
        const attendanceStartTime = createClassDto.attendance_start_time !== undefined
            ? (0, timezone_util_1.normalizeVietnamTimestamp)(createClassDto.attendance_start_time)
            : undefined;
        const attendanceEndTime = createClassDto.attendance_end_time !== undefined
            ? (0, timezone_util_1.normalizeVietnamTimestamp)(createClassDto.attendance_end_time)
            : undefined;
        const timestampNow = (0, timezone_util_1.getVietnamCurrentDate)();
        try {
            console.log('🟢 [SERVICE] Creating class in database...');
            const classData = await this.prisma.classes.create({
                data: {
                    class_group_id: createClassDto.class_group_id,
                    teacher_id: createClassDto.teacher_id,
                    title: createClassDto.title,
                    description: createClassDto.description,
                    class_type: createClassDto.class_type,
                    start_time: startTime,
                    end_time: endTime ?? null,
                    attendance_start_time: attendanceStartTime ?? null,
                    attendance_end_time: attendanceEndTime ?? null,
                    meeting_link: createClassDto.meeting_link,
                    recording_url: createClassDto.recording_url,
                    location: createClassDto.location,
                    exam_type: createClassDto.exam_type,
                    max_score: createClassDto.max_score,
                    ...(typeof createClassDto.status !== 'undefined'
                        ? { status: createClassDto.status }
                        : {}),
                    created_by: createdBy,
                    created_at: timestampNow,
                    updated_at: timestampNow,
                },
                include: this.buildClassInclude(),
            });
            console.log('✅ [SERVICE] Class created successfully, ID:', classData.class_id);
            await this.logActivity(createdBy, 'class.create', {
                class_id: classData.class_id,
                title: classData.title,
                class_type: classData.class_type,
                class_group_id: classData.class_group_id,
                start_time: classData.start_time,
                payload: this.sanitizePayload(createClassDto),
            });
            return classData;
        }
        catch (error) {
            console.error('❌ [SERVICE] Error creating class:', error);
            console.error('❌ [SERVICE] Error message:', error?.message);
            console.error('❌ [SERVICE] Error code:', error?.code);
            console.error('❌ [SERVICE] Error meta:', error?.meta);
            throw new common_1.BadRequestException(error?.message || 'Failed to create class');
        }
    }
    async findAll(page = 1, limit = 10, search, classType, status, courseId) {
        const skip = (page - 1) * limit;
        const where = {};
        if (search) {
            where.OR = [
                { title: { contains: search, mode: 'insensitive' } },
                { description: { contains: search, mode: 'insensitive' } },
            ];
        }
        if (classType) {
            where.class_type = classType;
        }
        if (status) {
            where.status = status;
        }
        if (courseId) {
            where.class_group = {
                course_id: courseId,
            };
        }
        const [classes, total] = await Promise.all([
            this.prisma.classes.findMany({
                where,
                skip,
                take: limit,
                include: this.buildClassInclude(),
                orderBy: { start_time: 'desc' },
            }),
            this.prisma.classes.count({ where }),
        ]);
        return {
            data: classes,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async findOne(id) {
        const classData = await this.prisma.classes.findUnique({
            where: { class_id: id },
            include: this.buildClassInclude({ includeParticipantContact: true }),
        });
        if (!classData) {
            throw new common_1.NotFoundException('Class not found');
        }
        return classData;
    }
    async update(id, updateClassDto, updatedBy) {
        try {
            const { class_group_id, start_time, end_time, attendance_start_time, attendance_end_time, ...rest } = updateClassDto;
            const data = { ...rest };
            if (class_group_id !== undefined) {
                const classGroup = await this.prisma.class_groups.findUnique({
                    where: { class_group_id },
                });
                if (!classGroup) {
                    throw new common_1.BadRequestException('Nhóm lớp không tồn tại');
                }
                data.class_group_id = class_group_id;
            }
            if (start_time !== undefined) {
                const normalized = (0, timezone_util_1.normalizeVietnamTimestamp)(start_time);
                if (!normalized) {
                    throw new common_1.BadRequestException('start_time không hợp lệ');
                }
                data.start_time = normalized;
            }
            if (end_time !== undefined) {
                data.end_time = (0, timezone_util_1.normalizeVietnamTimestamp)(end_time);
            }
            if (attendance_start_time !== undefined) {
                data.attendance_start_time = attendance_start_time === null
                    ? null
                    : (0, timezone_util_1.normalizeVietnamTimestamp)(attendance_start_time);
            }
            if (attendance_end_time !== undefined) {
                data.attendance_end_time = attendance_end_time === null
                    ? null
                    : (0, timezone_util_1.normalizeVietnamTimestamp)(attendance_end_time);
            }
            data.updated_at = (0, timezone_util_1.getVietnamCurrentDate)();
            const classData = await this.prisma.classes.update({
                where: { class_id: id },
                data,
                include: this.buildClassInclude(),
            });
            if (updatedBy) {
                await this.logActivity(updatedBy, 'class.update', {
                    class_id: id,
                    title: classData.title,
                    changes: this.sanitizePayload(updateClassDto),
                });
            }
            return classData;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Class not found');
            }
            throw error;
        }
    }
    async remove(id, removedBy) {
        try {
            const classData = await this.prisma.classes.findUnique({
                where: { class_id: id },
                select: { title: true, class_group_id: true },
            });
            await this.prisma.classes.delete({
                where: { class_id: id },
            });
            if (removedBy && classData) {
                await this.logActivity(removedBy, 'class.delete', {
                    class_id: id,
                    title: classData.title,
                    class_group_id: classData.class_group_id,
                });
            }
            return { message: 'Class deleted successfully' };
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Class not found');
            }
            throw error;
        }
    }
    async addParticipant(classId, userId, addedBy) {
        try {
            const timestampNow = (0, timezone_util_1.getVietnamCurrentDate)();
            const participant = await this.prisma.class_participants.create({
                data: {
                    class_id: classId,
                    user_id: userId,
                    attendance_status: 'joined',
                    created_at: timestampNow,
                },
                include: {
                    users: {
                        select: {
                            user_id: true,
                            full_name: true,
                            email: true,
                        },
                    },
                },
            });
            if (addedBy) {
                await this.logActivity(addedBy, 'class.addParticipant', {
                    class_id: classId,
                    user_id: userId,
                });
            }
            return participant;
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_1.BadRequestException('User already enrolled in this class');
            }
            throw error;
        }
    }
    async removeParticipant(classId, userId, removedBy) {
        try {
            await this.prisma.class_participants.deleteMany({
                where: {
                    class_id: classId,
                    user_id: userId,
                },
            });
            if (removedBy) {
                await this.logActivity(removedBy, 'class.removeParticipant', {
                    class_id: classId,
                    user_id: userId,
                });
            }
            return { message: 'Participant removed successfully' };
        }
        catch (error) {
            throw error;
        }
    }
    async updateAttendance(classId, userId, payload, updatedBy) {
        try {
            const classData = await this.prisma.classes.findUnique({
                where: { class_id: classId },
                select: {
                    class_group: {
                        select: { course_id: true },
                    },
                },
            });
            if (!classData?.class_group) {
                throw new common_1.NotFoundException('Class not found');
            }
            const courseId = classData.class_group.course_id;
            const registration = await this.prisma.registrations.findFirst({
                where: {
                    user_id: userId,
                    course_id: courseId,
                    registration_status: {
                        in: ['paid', 'active', 'completed'],
                    },
                },
            });
            if (!registration) {
                throw new common_1.BadRequestException('Student must have valid registration status (paid, active, or completed) to mark attendance');
            }
            const attendanceStatus = payload.attendance_status ?? 'joined';
            const feedback = payload.feedback ?? null;
            const timestampNow = (0, timezone_util_1.getVietnamCurrentDate)();
            const participant = await this.prisma.class_participants.upsert({
                where: {
                    class_id_user_id: {
                        class_id: classId,
                        user_id: userId,
                    },
                },
                update: {
                    ...(payload.attendance_status ? { attendance_status: attendanceStatus } : {}),
                    ...(payload.feedback !== undefined ? { feedback } : {}),
                },
                create: {
                    class_id: classId,
                    user_id: userId,
                    attendance_status: attendanceStatus,
                    feedback,
                    created_at: timestampNow,
                },
            });
            if (updatedBy) {
                await this.logActivity(updatedBy, 'class.updateAttendance', {
                    class_id: classId,
                    user_id: userId,
                    attendance_status: attendanceStatus,
                });
            }
            return participant;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException || error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw error;
        }
    }
    async getClassParticipants(classId) {
        const participants = await this.prisma.class_participants.findMany({
            where: { class_id: classId },
            include: {
                users: {
                    select: {
                        user_id: true,
                        full_name: true,
                        email: true,
                        phone: true,
                    },
                },
            },
        });
        return participants;
    }
    async addExamScore(classId, userId, scoreData, gradedBy) {
        try {
            const listening = this.normalizeScoreValue(scoreData.listening_score);
            const speaking = this.normalizeScoreValue(scoreData.speaking_score);
            const reading = this.normalizeScoreValue(scoreData.reading_score);
            const writing = this.normalizeScoreValue(scoreData.writing_score);
            const totalScore = listening + speaking + reading + writing;
            const timestampNow = (0, timezone_util_1.getVietnamCurrentDate)();
            const examScore = await this.prisma.exam_scores.create({
                data: {
                    ...scoreData,
                    class_id: classId,
                    user_id: userId,
                    graded_by: gradedBy,
                    listening_score: listening,
                    speaking_score: speaking,
                    reading_score: reading,
                    writing_score: writing,
                    total_score: totalScore,
                    graded_at: timestampNow,
                    created_at: timestampNow,
                },
                include: {
                    users: {
                        select: {
                            user_id: true,
                            full_name: true,
                            email: true,
                        },
                    },
                },
            });
            await this.logActivity(gradedBy, 'class.addExamScore', {
                class_id: classId,
                user_id: userId,
                total_score: examScore.total_score,
            });
            return examScore;
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_1.BadRequestException('Exam score already exists for this user');
            }
            throw error;
        }
    }
    async updateExamScore(classId, userId, scoreData, updatedBy) {
        try {
            const listening = this.normalizeScoreValue(scoreData.listening_score);
            const speaking = this.normalizeScoreValue(scoreData.speaking_score);
            const reading = this.normalizeScoreValue(scoreData.reading_score);
            const writing = this.normalizeScoreValue(scoreData.writing_score);
            const totalScore = listening + speaking + reading + writing;
            const examScore = await this.prisma.exam_scores.updateMany({
                where: {
                    class_id: classId,
                    user_id: userId,
                },
                data: {
                    ...scoreData,
                    listening_score: listening,
                    speaking_score: speaking,
                    reading_score: reading,
                    writing_score: writing,
                    total_score: totalScore,
                    graded_at: (0, timezone_util_1.getVietnamCurrentDate)(),
                },
            });
            if (updatedBy) {
                await this.logActivity(updatedBy, 'class.updateExamScore', {
                    class_id: classId,
                    user_id: userId,
                    total_score: totalScore,
                });
            }
            return examScore;
        }
        catch (error) {
            throw error;
        }
    }
    async getClassExamScores(classId) {
        const examScores = await this.prisma.exam_scores.findMany({
            where: { class_id: classId },
            include: {
                users: {
                    select: {
                        user_id: true,
                        full_name: true,
                        email: true,
                    },
                },
            },
            orderBy: { total_score: 'desc' },
        });
        return examScores;
    }
    async getTeacherClasses(teacherId, page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const where = {
            OR: [
                { teacher_id: teacherId },
                { class_group: { teacher_id: teacherId } },
            ],
        };
        const [classes, total] = await Promise.all([
            this.prisma.classes.findMany({
                where,
                skip,
                take: limit,
                include: this.buildClassInclude(),
                orderBy: { start_time: 'desc' },
            }),
            this.prisma.classes.count({ where }),
        ]);
        return {
            data: classes,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async updateClassStatus(classId, status, updatedBy) {
        try {
            const classData = await this.prisma.classes.update({
                where: { class_id: classId },
                data: { status, updated_at: (0, timezone_util_1.getVietnamCurrentDate)() },
            });
            if (updatedBy) {
                await this.logActivity(updatedBy, 'class.updateStatus', {
                    class_id: classId,
                    title: classData.title,
                    status,
                });
            }
            return classData;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Class not found');
            }
            throw error;
        }
    }
    async getUpcomingClasses(days = 7) {
        const startDate = (0, timezone_util_1.getVietnamCurrentDate)();
        const endDate = new Date(startDate.getTime());
        endDate.setDate(startDate.getDate() + days);
        const classes = await this.prisma.classes.findMany({
            where: {
                start_time: {
                    gte: startDate,
                    lte: endDate,
                },
                status: 'scheduled',
            },
            include: this.buildClassInclude({ includeParticipants: false, includeExamScores: false }),
            orderBy: { start_time: 'asc' },
        });
        return classes;
    }
    async findById(id) {
        const classData = await this.prisma.classes.findUnique({
            where: { class_id: id },
            include: this.buildClassInclude({ includeParticipantContact: true }),
        });
        if (!classData) {
            throw new common_1.NotFoundException('Class not found');
        }
        return classData;
    }
    async getClassStats() {
        const [totalClasses, onlineClasses, offlineClasses, upcomingClasses, completedClasses,] = await Promise.all([
            this.prisma.classes.count(),
            this.prisma.classes.count({ where: { class_type: 'online' } }),
            this.prisma.classes.count({ where: { class_type: 'offline' } }),
            this.prisma.classes.count({
                where: {
                    start_time: { gt: (0, timezone_util_1.getVietnamCurrentDate)() },
                    status: 'scheduled',
                },
            }),
            this.prisma.classes.count({ where: { status: 'completed' } }),
        ]);
        return {
            totalClasses,
            onlineClasses,
            offlineClasses,
            upcomingClasses,
            completedClasses,
        };
    }
    async updateAttendanceStatus(classId, userId, status, updatedBy) {
        return this.updateAttendance(classId, userId, { attendance_status: status }, updatedBy);
    }
    async recordExamScore(classId, userId, scoreData, gradedBy) {
        const classData = await this.prisma.classes.findUnique({
            where: { class_id: classId },
            select: {
                class_type: true,
                exam_type: true,
                class_group: {
                    select: { course_id: true },
                },
            },
        });
        if (!classData?.class_group) {
            throw new common_1.NotFoundException('Class not found');
        }
        if (classData.class_type !== 'offline' || !classData.exam_type) {
            throw new common_1.BadRequestException('Chỉ được chấm điểm cho các buổi thi offline (có exam_type)');
        }
        const registration = await this.prisma.registrations.findFirst({
            where: {
                user_id: userId,
                course_id: classData.class_group.course_id,
                registration_status: {
                    in: ['paid', 'active', 'completed'],
                },
            },
        });
        if (!registration) {
            throw new common_1.BadRequestException('Student must have valid registration status (paid, active, or completed) to be graded');
        }
        const listening = this.normalizeScoreValue(scoreData.listening_score);
        const speaking = this.normalizeScoreValue(scoreData.speaking_score);
        const reading = this.normalizeScoreValue(scoreData.reading_score);
        const writing = this.normalizeScoreValue(scoreData.writing_score);
        const feedback = scoreData.feedback;
        const totalScore = listening + speaking + reading + writing;
        const timestampNow = (0, timezone_util_1.getVietnamCurrentDate)();
        const result = await this.prisma.exam_scores.upsert({
            where: {
                class_id_user_id: {
                    class_id: classId,
                    user_id: userId,
                },
            },
            update: {
                listening_score: listening,
                speaking_score: speaking,
                reading_score: reading,
                writing_score: writing,
                total_score: totalScore,
                feedback,
                graded_at: timestampNow,
            },
            create: {
                class_id: classId,
                user_id: userId,
                listening_score: listening,
                speaking_score: speaking,
                reading_score: reading,
                writing_score: writing,
                total_score: totalScore,
                feedback,
                graded_at: timestampNow,
                created_at: timestampNow,
            },
        });
        if (gradedBy) {
            await this.logActivity(gradedBy, 'class.recordExamScore', {
                class_id: classId,
                user_id: userId,
                total_score: totalScore,
            });
        }
        return result;
    }
    async isTeacherOfClass(teacherId, classId) {
        const cls = await this.prisma.classes.findUnique({
            where: { class_id: classId },
            select: {
                teacher_id: true,
                class_group: {
                    select: { teacher_id: true },
                },
            },
        });
        if (!cls)
            return false;
        if (cls.teacher_id && cls.teacher_id === teacherId)
            return true;
        return cls.class_group?.teacher_id === teacherId;
    }
    async listParticipants(classId) {
        const classData = await this.prisma.classes.findUnique({
            where: { class_id: classId },
            select: {
                class_group: {
                    select: { course_id: true },
                },
            },
        });
        if (!classData?.class_group) {
            throw new common_1.NotFoundException('Class not found');
        }
        const validRegistrations = await this.prisma.registrations.findMany({
            where: {
                course_id: classData.class_group.course_id,
                registration_status: {
                    in: ['paid', 'active', 'completed'],
                },
            },
            select: { user_id: true },
        });
        const validUserIds = validRegistrations.map(reg => reg.user_id);
        return this.prisma.class_participants.findMany({
            where: {
                class_id: classId,
                user_id: {
                    in: validUserIds,
                },
            },
            include: {
                users: {
                    select: {
                        user_id: true,
                        full_name: true,
                        email: true,
                        phone: true,
                    },
                },
            },
            orderBy: { participant_id: 'asc' },
        });
    }
    async getClassRoster(classId) {
        const klass = await this.prisma.classes.findUnique({
            where: { class_id: classId },
            select: {
                class_id: true,
                title: true,
                description: true,
                class_type: true,
                start_time: true,
                end_time: true,
                attendance_start_time: true,
                attendance_end_time: true,
                status: true,
                class_group_id: true,
                class_group: {
                    select: {
                        class_group_id: true,
                        name: true,
                        course: { select: { course_id: true, title: true, status: true } },
                        teacher: { select: { user_id: true, full_name: true, email: true } },
                        members: {
                            include: {
                                user: {
                                    select: {
                                        user_id: true,
                                        full_name: true,
                                        email: true,
                                        phone: true,
                                    },
                                },
                            },
                            orderBy: { member_id: 'asc' },
                        },
                    },
                },
            },
        });
        if (!klass || !klass.class_group) {
            throw new common_1.NotFoundException('Class not found');
        }
        const [attendanceRecords, examScores] = await Promise.all([
            this.prisma.class_participants.findMany({
                where: { class_id: classId },
            }),
            this.prisma.exam_scores.findMany({
                where: { class_id: classId },
            }),
        ]);
        const attendanceMap = new Map(attendanceRecords.map((record) => [record.user_id, record]));
        const examScoreMap = new Map(examScores.map((record) => [record.user_id, record]));
        return {
            class: {
                class_id: klass.class_id,
                title: klass.title,
                description: klass.description,
                class_type: klass.class_type,
                start_time: klass.start_time,
                end_time: klass.end_time,
                attendance_start_time: klass.attendance_start_time,
                attendance_end_time: klass.attendance_end_time,
                status: klass.status,
                class_group: {
                    class_group_id: klass.class_group.class_group_id,
                    name: klass.class_group.name,
                    course: klass.class_group.course,
                    teacher: klass.class_group.teacher,
                },
            },
            members: klass.class_group.members.map((member) => ({
                member_id: member.member_id,
                user_id: member.user_id,
                status: member.status,
                user: member.user,
                attendance: attendanceMap.get(member.user_id) || null,
                examScore: examScoreMap.get(member.user_id) || null,
            })),
        };
    }
    async setAttendanceStatus(classId, userId, payload, updatedBy) {
        return this.updateAttendance(classId, userId, payload, updatedBy);
    }
    async listExamScores(classId) {
        const classData = await this.prisma.classes.findUnique({
            where: { class_id: classId },
            select: {
                class_group: {
                    select: { course_id: true },
                },
            },
        });
        if (!classData?.class_group) {
            throw new common_1.NotFoundException('Class not found');
        }
        const validRegistrations = await this.prisma.registrations.findMany({
            where: {
                course_id: classData.class_group.course_id,
                registration_status: {
                    in: ['paid', 'active', 'completed'],
                },
            },
            select: { user_id: true },
        });
        const validUserIds = validRegistrations.map(reg => reg.user_id);
        return this.prisma.exam_scores.findMany({
            where: {
                class_id: classId,
                user_id: {
                    in: validUserIds,
                },
            },
            include: {
                users: {
                    select: {
                        user_id: true,
                        full_name: true,
                        email: true,
                    },
                },
            },
            orderBy: { score_id: 'asc' },
        });
    }
    async gradeStudent(classId, userId, payload, gradedBy) {
        return this.recordExamScore(classId, userId, payload, gradedBy);
    }
    async getTeachingSchedule(teacherId, weekStart) {
        try {
            this.logger.log('🔍 [Teaching Schedule] Starting query...');
            this.logger.log(`📌 Teacher ID: ${teacherId}`);
            this.logger.log(`📅 Week Start: ${weekStart}`);
            if (!weekStart || !/^\d{4}-\d{2}-\d{2}$/.test(weekStart)) {
                this.logger.error(`❌ [Service] Invalid weekStart format: ${weekStart}`);
                throw new common_1.BadRequestException(`Invalid weekStart format. Expected YYYY-MM-DD, got: ${weekStart}`);
            }
            const [year, month, day] = weekStart.split('-').map(Number);
            if (!year || !month || !day || month < 1 || month > 12 || day < 1 || day > 31) {
                this.logger.error(`❌ [Service] Invalid date components: year=${year}, month=${month}, day=${day}`);
                throw new common_1.BadRequestException(`Invalid date: ${weekStart}`);
            }
            const startDate = new Date(Date.UTC(year, month - 1, day, 0, 0, 0, 0));
            if (isNaN(startDate.getTime())) {
                this.logger.error(`❌ [Service] Invalid date after parsing: ${weekStart}`);
                throw new common_1.BadRequestException(`Invalid date: ${weekStart}`);
            }
            const endDate = new Date(startDate);
            endDate.setUTCDate(endDate.getUTCDate() + 6);
            endDate.setUTCHours(23, 59, 59, 999);
            this.logger.log(`📅 Date Range: ${startDate.toISOString()} to ${endDate.toISOString()}`);
            const classes = await this.prisma.classes.findMany({
                where: {
                    teacher_id: teacherId,
                    start_time: {
                        gte: startDate,
                        lte: endDate,
                    },
                },
                include: {
                    class_group: {
                        select: {
                            class_group_id: true,
                            name: true,
                            course: {
                                select: {
                                    course_id: true,
                                    title: true,
                                },
                            },
                            shift: {
                                select: {
                                    shift_id: true,
                                    name: true,
                                    start_time: true,
                                    end_time: true,
                                },
                            },
                        },
                    },
                },
                orderBy: {
                    start_time: 'asc',
                },
            });
            this.logger.log(`📚 Classes found in week: ${classes.length}`);
            if (classes.length > 0) {
                this.logger.log('📝 Classes details:');
                classes.forEach(c => {
                    this.logger.log(`  - Class ID: ${c.class_id}, Title: ${c.title}, Start: ${c.start_time}, Teacher ID: ${c.teacher_id}, Group ID: ${c.class_group_id}`);
                });
            }
            const schedule = {};
            for (let i = 0; i < 7; i++) {
                const date = new Date(startDate);
                date.setDate(date.getDate() + i);
                const dateKey = date.toISOString().split('T')[0];
                schedule[dateKey] = {
                    morning: [],
                    afternoon: [],
                    evening: [],
                };
            }
            classes.forEach((classItem) => {
                const classDate = new Date(classItem.start_time);
                const dateKey = classDate.toISOString().split('T')[0];
                const hour = classDate.getHours();
                let timeSlot;
                if (hour >= 6 && hour < 12) {
                    timeSlot = 'morning';
                }
                else if (hour >= 12 && hour < 18) {
                    timeSlot = 'afternoon';
                }
                else {
                    timeSlot = 'evening';
                }
                if (schedule[dateKey]) {
                    let classGroupData = null;
                    if (classItem.class_group) {
                        classGroupData = {
                            class_group_id: classItem.class_group.class_group_id,
                            name: classItem.class_group.name,
                            course: classItem.class_group.course,
                            shift: classItem.class_group.shift,
                        };
                    }
                    else {
                        classGroupData = {
                            class_group_id: classItem.class_group_id || null,
                            name: 'Không có nhóm lớp',
                            course: {
                                course_id: null,
                                title: 'Không xác định',
                            },
                            shift: null,
                        };
                    }
                    schedule[dateKey][timeSlot].push({
                        class_id: classItem.class_id,
                        title: classItem.title,
                        description: classItem.description,
                        class_type: classItem.class_type,
                        start_time: classItem.start_time,
                        end_time: classItem.end_time,
                        status: classItem.status,
                        meeting_link: classItem.meeting_link,
                        location: classItem.location,
                        exam_type: classItem.exam_type,
                        class_group: classGroupData,
                    });
                }
            });
            let nearestWeekWithSchedule = null;
            if (classes.length === 0) {
                this.logger.warn('⚠️ No classes found in current week, searching for nearest week...');
                const nearestClassFuture = await this.prisma.classes.findFirst({
                    where: {
                        teacher_id: teacherId,
                        start_time: {
                            gte: startDate,
                        },
                    },
                    orderBy: {
                        start_time: 'asc',
                    },
                    select: {
                        start_time: true,
                    },
                });
                const nearestClassPast = await this.prisma.classes.findFirst({
                    where: {
                        teacher_id: teacherId,
                        start_time: {
                            lt: startDate,
                        },
                    },
                    orderBy: {
                        start_time: 'desc',
                    },
                    select: {
                        start_time: true,
                    },
                });
                const nearestClass = nearestClassFuture || nearestClassPast;
                if (nearestClass) {
                    const nearestDate = new Date(nearestClass.start_time);
                    const dayOfWeek = nearestDate.getDay();
                    const monday = new Date(nearestDate);
                    monday.setDate(nearestDate.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));
                    nearestWeekWithSchedule = monday.toISOString().split('T')[0];
                    this.logger.log(`✅ Nearest week with schedule found: ${nearestWeekWithSchedule}`);
                    this.logger.log(`📅 Nearest class date: ${nearestClass.start_time}`);
                }
                else {
                    this.logger.warn('❌ No classes found for this teacher at all');
                }
            }
            this.logger.log('📊 Final result:');
            this.logger.log(`  - Week Start: ${weekStart}`);
            this.logger.log(`  - Week End: ${endDate.toISOString().split('T')[0]}`);
            this.logger.log(`  - Schedule Days: ${Object.keys(schedule).length}`);
            this.logger.log(`  - Total Classes: ${classes.length}`);
            this.logger.log(`  - Nearest Week: ${nearestWeekWithSchedule || 'N/A'}`);
            this.logger.log(`  - Has Schedule: ${classes.length > 0}`);
            return {
                weekStart,
                weekEnd: endDate.toISOString().split('T')[0],
                schedule,
                nearestWeekWithSchedule,
                hasSchedule: classes.length > 0,
            };
        }
        catch (error) {
            this.logger.error(`❌ [Service] Error in getTeachingSchedule: ${error.message}`);
            this.logger.error(`❌ [Service] Error stack: ${error.stack}`);
            throw error;
        }
    }
};
exports.ClassesService = ClassesService;
exports.ClassesService = ClassesService = ClassesService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClassesService);
//# sourceMappingURL=classes.service.js.map