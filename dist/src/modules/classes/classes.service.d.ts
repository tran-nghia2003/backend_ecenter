import { PrismaService } from '../../prisma.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Prisma } from '../../generated/client';
export declare class ClassesService {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    private sanitizePayload;
    private normalizeScoreValue;
    private logActivity;
    private buildClassInclude;
    create(createClassDto: CreateClassDto, createdBy: number): Promise<{
        class_participants: {
            user_id: number;
            created_at: Date | null;
            participant_id: number;
            class_id: number | null;
            attendance_status: string | null;
            feedback: string | null;
        }[];
        exam_scores: {
            user_id: number | null;
            created_at: Date | null;
            class_id: number | null;
            feedback: string | null;
            score_id: number;
            listening_score: import("@prisma/client/runtime/library").Decimal | null;
            speaking_score: import("@prisma/client/runtime/library").Decimal | null;
            reading_score: import("@prisma/client/runtime/library").Decimal | null;
            writing_score: import("@prisma/client/runtime/library").Decimal | null;
            total_score: import("@prisma/client/runtime/library").Decimal | null;
            graded_by: number | null;
            graded_at: Date | null;
        }[];
        _count: {
            class_participants: number;
            exam_scores: number;
            class_group: number;
        };
        class_group: {
            created_at: Date | null;
            name: string;
            created_by: number | null;
            updated_at: Date | null;
            course_id: number;
            teacher_id: number | null;
            status: string | null;
            zalo_link: string | null;
            class_group_id: number;
            shift_id: number;
            start_date: Date;
            end_date: Date | null;
            max_students: number | null;
        };
    } & {
        created_at: Date | null;
        description: string | null;
        created_by: number | null;
        updated_at: Date | null;
        class_id: number;
        teacher_id: number | null;
        title: string;
        class_type: string;
        start_time: Date;
        end_time: Date | null;
        meeting_link: string | null;
        recording_url: string | null;
        location: string | null;
        exam_type: string | null;
        max_score: import("@prisma/client/runtime/library").Decimal | null;
        status: string | null;
        class_group_id: number;
        attendance_start_time: Date | null;
        attendance_end_time: Date | null;
    }>;
    findAll(page?: number, limit?: number, search?: string, classType?: string, status?: string, courseId?: number): Promise<{
        data: ({
            class_participants: {
                user_id: number;
                created_at: Date | null;
                participant_id: number;
                class_id: number | null;
                attendance_status: string | null;
                feedback: string | null;
            }[];
            exam_scores: {
                user_id: number | null;
                created_at: Date | null;
                class_id: number | null;
                feedback: string | null;
                score_id: number;
                listening_score: import("@prisma/client/runtime/library").Decimal | null;
                speaking_score: import("@prisma/client/runtime/library").Decimal | null;
                reading_score: import("@prisma/client/runtime/library").Decimal | null;
                writing_score: import("@prisma/client/runtime/library").Decimal | null;
                total_score: import("@prisma/client/runtime/library").Decimal | null;
                graded_by: number | null;
                graded_at: Date | null;
            }[];
            _count: {
                class_participants: number;
                exam_scores: number;
                class_group: number;
            };
            class_group: {
                created_at: Date | null;
                name: string;
                created_by: number | null;
                updated_at: Date | null;
                course_id: number;
                teacher_id: number | null;
                status: string | null;
                zalo_link: string | null;
                class_group_id: number;
                shift_id: number;
                start_date: Date;
                end_date: Date | null;
                max_students: number | null;
            };
        } & {
            created_at: Date | null;
            description: string | null;
            created_by: number | null;
            updated_at: Date | null;
            class_id: number;
            teacher_id: number | null;
            title: string;
            class_type: string;
            start_time: Date;
            end_time: Date | null;
            meeting_link: string | null;
            recording_url: string | null;
            location: string | null;
            exam_type: string | null;
            max_score: import("@prisma/client/runtime/library").Decimal | null;
            status: string | null;
            class_group_id: number;
            attendance_start_time: Date | null;
            attendance_end_time: Date | null;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findOne(id: number): Promise<{
        class_participants: {
            user_id: number;
            created_at: Date | null;
            participant_id: number;
            class_id: number | null;
            attendance_status: string | null;
            feedback: string | null;
        }[];
        exam_scores: {
            user_id: number | null;
            created_at: Date | null;
            class_id: number | null;
            feedback: string | null;
            score_id: number;
            listening_score: import("@prisma/client/runtime/library").Decimal | null;
            speaking_score: import("@prisma/client/runtime/library").Decimal | null;
            reading_score: import("@prisma/client/runtime/library").Decimal | null;
            writing_score: import("@prisma/client/runtime/library").Decimal | null;
            total_score: import("@prisma/client/runtime/library").Decimal | null;
            graded_by: number | null;
            graded_at: Date | null;
        }[];
        _count: {
            class_participants: number;
            exam_scores: number;
            class_group: number;
        };
        class_group: {
            created_at: Date | null;
            name: string;
            created_by: number | null;
            updated_at: Date | null;
            course_id: number;
            teacher_id: number | null;
            status: string | null;
            zalo_link: string | null;
            class_group_id: number;
            shift_id: number;
            start_date: Date;
            end_date: Date | null;
            max_students: number | null;
        };
    } & {
        created_at: Date | null;
        description: string | null;
        created_by: number | null;
        updated_at: Date | null;
        class_id: number;
        teacher_id: number | null;
        title: string;
        class_type: string;
        start_time: Date;
        end_time: Date | null;
        meeting_link: string | null;
        recording_url: string | null;
        location: string | null;
        exam_type: string | null;
        max_score: import("@prisma/client/runtime/library").Decimal | null;
        status: string | null;
        class_group_id: number;
        attendance_start_time: Date | null;
        attendance_end_time: Date | null;
    }>;
    update(id: number, updateClassDto: UpdateClassDto, updatedBy?: number): Promise<{
        class_participants: {
            user_id: number;
            created_at: Date | null;
            participant_id: number;
            class_id: number | null;
            attendance_status: string | null;
            feedback: string | null;
        }[];
        exam_scores: {
            user_id: number | null;
            created_at: Date | null;
            class_id: number | null;
            feedback: string | null;
            score_id: number;
            listening_score: import("@prisma/client/runtime/library").Decimal | null;
            speaking_score: import("@prisma/client/runtime/library").Decimal | null;
            reading_score: import("@prisma/client/runtime/library").Decimal | null;
            writing_score: import("@prisma/client/runtime/library").Decimal | null;
            total_score: import("@prisma/client/runtime/library").Decimal | null;
            graded_by: number | null;
            graded_at: Date | null;
        }[];
        _count: {
            class_participants: number;
            exam_scores: number;
            class_group: number;
        };
        class_group: {
            created_at: Date | null;
            name: string;
            created_by: number | null;
            updated_at: Date | null;
            course_id: number;
            teacher_id: number | null;
            status: string | null;
            zalo_link: string | null;
            class_group_id: number;
            shift_id: number;
            start_date: Date;
            end_date: Date | null;
            max_students: number | null;
        };
    } & {
        created_at: Date | null;
        description: string | null;
        created_by: number | null;
        updated_at: Date | null;
        class_id: number;
        teacher_id: number | null;
        title: string;
        class_type: string;
        start_time: Date;
        end_time: Date | null;
        meeting_link: string | null;
        recording_url: string | null;
        location: string | null;
        exam_type: string | null;
        max_score: import("@prisma/client/runtime/library").Decimal | null;
        status: string | null;
        class_group_id: number;
        attendance_start_time: Date | null;
        attendance_end_time: Date | null;
    }>;
    remove(id: number, removedBy?: number): Promise<{
        message: string;
    }>;
    addParticipant(classId: number, userId: number, addedBy?: number): Promise<{
        users: {
            user_id: number;
            full_name: string;
            email: string;
        };
    } & {
        user_id: number;
        created_at: Date | null;
        participant_id: number;
        class_id: number | null;
        attendance_status: string | null;
        feedback: string | null;
    }>;
    removeParticipant(classId: number, userId: number, removedBy?: number): Promise<{
        message: string;
    }>;
    updateAttendance(classId: number, userId: number, payload: {
        attendance_status?: string;
        feedback?: string;
    }, updatedBy?: number): Promise<{
        user_id: number;
        created_at: Date | null;
        participant_id: number;
        class_id: number | null;
        attendance_status: string | null;
        feedback: string | null;
    }>;
    getClassParticipants(classId: number): Promise<({
        users: {
            user_id: number;
            full_name: string;
            email: string;
            phone: string;
        };
    } & {
        user_id: number;
        created_at: Date | null;
        participant_id: number;
        class_id: number | null;
        attendance_status: string | null;
        feedback: string | null;
    })[]>;
    addExamScore(classId: number, userId: number, scoreData: any, gradedBy: number): Promise<{
        users: {
            user_id: number;
            full_name: string;
            email: string;
        };
    } & {
        user_id: number | null;
        created_at: Date | null;
        class_id: number | null;
        feedback: string | null;
        score_id: number;
        listening_score: import("@prisma/client/runtime/library").Decimal | null;
        speaking_score: import("@prisma/client/runtime/library").Decimal | null;
        reading_score: import("@prisma/client/runtime/library").Decimal | null;
        writing_score: import("@prisma/client/runtime/library").Decimal | null;
        total_score: import("@prisma/client/runtime/library").Decimal | null;
        graded_by: number | null;
        graded_at: Date | null;
    }>;
    updateExamScore(classId: number, userId: number, scoreData: any, updatedBy?: number): Promise<Prisma.BatchPayload>;
    getClassExamScores(classId: number): Promise<({
        users: {
            user_id: number;
            full_name: string;
            email: string;
        };
    } & {
        user_id: number | null;
        created_at: Date | null;
        class_id: number | null;
        feedback: string | null;
        score_id: number;
        listening_score: import("@prisma/client/runtime/library").Decimal | null;
        speaking_score: import("@prisma/client/runtime/library").Decimal | null;
        reading_score: import("@prisma/client/runtime/library").Decimal | null;
        writing_score: import("@prisma/client/runtime/library").Decimal | null;
        total_score: import("@prisma/client/runtime/library").Decimal | null;
        graded_by: number | null;
        graded_at: Date | null;
    })[]>;
    getTeacherClasses(teacherId: number, page?: number, limit?: number): Promise<{
        data: ({
            class_participants: {
                user_id: number;
                created_at: Date | null;
                participant_id: number;
                class_id: number | null;
                attendance_status: string | null;
                feedback: string | null;
            }[];
            exam_scores: {
                user_id: number | null;
                created_at: Date | null;
                class_id: number | null;
                feedback: string | null;
                score_id: number;
                listening_score: import("@prisma/client/runtime/library").Decimal | null;
                speaking_score: import("@prisma/client/runtime/library").Decimal | null;
                reading_score: import("@prisma/client/runtime/library").Decimal | null;
                writing_score: import("@prisma/client/runtime/library").Decimal | null;
                total_score: import("@prisma/client/runtime/library").Decimal | null;
                graded_by: number | null;
                graded_at: Date | null;
            }[];
            _count: {
                class_participants: number;
                exam_scores: number;
                class_group: number;
            };
            class_group: {
                created_at: Date | null;
                name: string;
                created_by: number | null;
                updated_at: Date | null;
                course_id: number;
                teacher_id: number | null;
                status: string | null;
                zalo_link: string | null;
                class_group_id: number;
                shift_id: number;
                start_date: Date;
                end_date: Date | null;
                max_students: number | null;
            };
        } & {
            created_at: Date | null;
            description: string | null;
            created_by: number | null;
            updated_at: Date | null;
            class_id: number;
            teacher_id: number | null;
            title: string;
            class_type: string;
            start_time: Date;
            end_time: Date | null;
            meeting_link: string | null;
            recording_url: string | null;
            location: string | null;
            exam_type: string | null;
            max_score: import("@prisma/client/runtime/library").Decimal | null;
            status: string | null;
            class_group_id: number;
            attendance_start_time: Date | null;
            attendance_end_time: Date | null;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    updateClassStatus(classId: number, status: 'scheduled' | 'live' | 'completed' | 'cancelled', updatedBy?: number): Promise<{
        created_at: Date | null;
        description: string | null;
        created_by: number | null;
        updated_at: Date | null;
        class_id: number;
        teacher_id: number | null;
        title: string;
        class_type: string;
        start_time: Date;
        end_time: Date | null;
        meeting_link: string | null;
        recording_url: string | null;
        location: string | null;
        exam_type: string | null;
        max_score: import("@prisma/client/runtime/library").Decimal | null;
        status: string | null;
        class_group_id: number;
        attendance_start_time: Date | null;
        attendance_end_time: Date | null;
    }>;
    getUpcomingClasses(days?: number): Promise<({
        class_participants: {
            user_id: number;
            created_at: Date | null;
            participant_id: number;
            class_id: number | null;
            attendance_status: string | null;
            feedback: string | null;
        }[];
        exam_scores: {
            user_id: number | null;
            created_at: Date | null;
            class_id: number | null;
            feedback: string | null;
            score_id: number;
            listening_score: import("@prisma/client/runtime/library").Decimal | null;
            speaking_score: import("@prisma/client/runtime/library").Decimal | null;
            reading_score: import("@prisma/client/runtime/library").Decimal | null;
            writing_score: import("@prisma/client/runtime/library").Decimal | null;
            total_score: import("@prisma/client/runtime/library").Decimal | null;
            graded_by: number | null;
            graded_at: Date | null;
        }[];
        _count: {
            class_participants: number;
            exam_scores: number;
            class_group: number;
        };
        class_group: {
            created_at: Date | null;
            name: string;
            created_by: number | null;
            updated_at: Date | null;
            course_id: number;
            teacher_id: number | null;
            status: string | null;
            zalo_link: string | null;
            class_group_id: number;
            shift_id: number;
            start_date: Date;
            end_date: Date | null;
            max_students: number | null;
        };
    } & {
        created_at: Date | null;
        description: string | null;
        created_by: number | null;
        updated_at: Date | null;
        class_id: number;
        teacher_id: number | null;
        title: string;
        class_type: string;
        start_time: Date;
        end_time: Date | null;
        meeting_link: string | null;
        recording_url: string | null;
        location: string | null;
        exam_type: string | null;
        max_score: import("@prisma/client/runtime/library").Decimal | null;
        status: string | null;
        class_group_id: number;
        attendance_start_time: Date | null;
        attendance_end_time: Date | null;
    })[]>;
    findById(id: number): Promise<{
        class_participants: {
            user_id: number;
            created_at: Date | null;
            participant_id: number;
            class_id: number | null;
            attendance_status: string | null;
            feedback: string | null;
        }[];
        exam_scores: {
            user_id: number | null;
            created_at: Date | null;
            class_id: number | null;
            feedback: string | null;
            score_id: number;
            listening_score: import("@prisma/client/runtime/library").Decimal | null;
            speaking_score: import("@prisma/client/runtime/library").Decimal | null;
            reading_score: import("@prisma/client/runtime/library").Decimal | null;
            writing_score: import("@prisma/client/runtime/library").Decimal | null;
            total_score: import("@prisma/client/runtime/library").Decimal | null;
            graded_by: number | null;
            graded_at: Date | null;
        }[];
        _count: {
            class_participants: number;
            exam_scores: number;
            class_group: number;
        };
        class_group: {
            created_at: Date | null;
            name: string;
            created_by: number | null;
            updated_at: Date | null;
            course_id: number;
            teacher_id: number | null;
            status: string | null;
            zalo_link: string | null;
            class_group_id: number;
            shift_id: number;
            start_date: Date;
            end_date: Date | null;
            max_students: number | null;
        };
    } & {
        created_at: Date | null;
        description: string | null;
        created_by: number | null;
        updated_at: Date | null;
        class_id: number;
        teacher_id: number | null;
        title: string;
        class_type: string;
        start_time: Date;
        end_time: Date | null;
        meeting_link: string | null;
        recording_url: string | null;
        location: string | null;
        exam_type: string | null;
        max_score: import("@prisma/client/runtime/library").Decimal | null;
        status: string | null;
        class_group_id: number;
        attendance_start_time: Date | null;
        attendance_end_time: Date | null;
    }>;
    getClassStats(): Promise<{
        totalClasses: number;
        onlineClasses: number;
        offlineClasses: number;
        upcomingClasses: number;
        completedClasses: number;
    }>;
    updateAttendanceStatus(classId: number, userId: number, status: string, updatedBy?: number): Promise<{
        user_id: number;
        created_at: Date | null;
        participant_id: number;
        class_id: number | null;
        attendance_status: string | null;
        feedback: string | null;
    }>;
    recordExamScore(classId: number, userId: number, scoreData: any, gradedBy?: number): Promise<{
        user_id: number | null;
        created_at: Date | null;
        class_id: number | null;
        feedback: string | null;
        score_id: number;
        listening_score: import("@prisma/client/runtime/library").Decimal | null;
        speaking_score: import("@prisma/client/runtime/library").Decimal | null;
        reading_score: import("@prisma/client/runtime/library").Decimal | null;
        writing_score: import("@prisma/client/runtime/library").Decimal | null;
        total_score: import("@prisma/client/runtime/library").Decimal | null;
        graded_by: number | null;
        graded_at: Date | null;
    }>;
    isTeacherOfClass(teacherId: number, classId: number): Promise<boolean>;
    listParticipants(classId: number): Promise<({
        users: {
            user_id: number;
            full_name: string;
            email: string;
            phone: string;
        };
    } & {
        user_id: number;
        created_at: Date | null;
        participant_id: number;
        class_id: number | null;
        attendance_status: string | null;
        feedback: string | null;
    })[]>;
    getClassRoster(classId: number): Promise<{
        class: {
            class_id: number;
            title: string;
            description: string;
            class_type: string;
            start_time: Date;
            end_time: Date;
            attendance_start_time: Date;
            attendance_end_time: Date;
            status: string;
            class_group: {
                class_group_id: number;
                name: string;
                course: {
                    course_id: number;
                    title: string;
                    status: string;
                };
                teacher: {
                    user_id: number;
                    full_name: string;
                    email: string;
                };
            };
        };
        members: {
            member_id: number;
            user_id: number;
            status: string;
            user: {
                user_id: number;
                full_name: string;
                email: string;
                phone: string;
            };
            attendance: {
                user_id: number;
                created_at: Date | null;
                participant_id: number;
                class_id: number | null;
                attendance_status: string | null;
                feedback: string | null;
            };
            examScore: {
                user_id: number | null;
                created_at: Date | null;
                class_id: number | null;
                feedback: string | null;
                score_id: number;
                listening_score: import("@prisma/client/runtime/library").Decimal | null;
                speaking_score: import("@prisma/client/runtime/library").Decimal | null;
                reading_score: import("@prisma/client/runtime/library").Decimal | null;
                writing_score: import("@prisma/client/runtime/library").Decimal | null;
                total_score: import("@prisma/client/runtime/library").Decimal | null;
                graded_by: number | null;
                graded_at: Date | null;
            };
        }[];
    }>;
    setAttendanceStatus(classId: number, userId: number, payload: {
        attendance_status?: string;
        feedback?: string;
    }, updatedBy?: number): Promise<{
        user_id: number;
        created_at: Date | null;
        participant_id: number;
        class_id: number | null;
        attendance_status: string | null;
        feedback: string | null;
    }>;
    listExamScores(classId: number): Promise<({
        users: {
            user_id: number;
            full_name: string;
            email: string;
        };
    } & {
        user_id: number | null;
        created_at: Date | null;
        class_id: number | null;
        feedback: string | null;
        score_id: number;
        listening_score: import("@prisma/client/runtime/library").Decimal | null;
        speaking_score: import("@prisma/client/runtime/library").Decimal | null;
        reading_score: import("@prisma/client/runtime/library").Decimal | null;
        writing_score: import("@prisma/client/runtime/library").Decimal | null;
        total_score: import("@prisma/client/runtime/library").Decimal | null;
        graded_by: number | null;
        graded_at: Date | null;
    })[]>;
    gradeStudent(classId: number, userId: number, payload: any, gradedBy?: number): Promise<{
        user_id: number | null;
        created_at: Date | null;
        class_id: number | null;
        feedback: string | null;
        score_id: number;
        listening_score: import("@prisma/client/runtime/library").Decimal | null;
        speaking_score: import("@prisma/client/runtime/library").Decimal | null;
        reading_score: import("@prisma/client/runtime/library").Decimal | null;
        writing_score: import("@prisma/client/runtime/library").Decimal | null;
        total_score: import("@prisma/client/runtime/library").Decimal | null;
        graded_by: number | null;
        graded_at: Date | null;
    }>;
    getTeachingSchedule(teacherId: number, weekStart: string): Promise<{
        weekStart: string;
        weekEnd: string;
        schedule: Record<string, Record<string, any[]>>;
        nearestWeekWithSchedule: string;
        hasSchedule: boolean;
    }>;
}
