import { ClassesService } from './classes.service';
export declare class ClassesController {
    private readonly classesService;
    private readonly logger;
    constructor(classesService: ClassesService);
    findAll(req: any, page?: string, limit?: string, search?: string, courseId?: string): any[] | Promise<{
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
    getTeachingSchedule(req: any, weekStart?: string): Promise<{
        weekStart: string;
        weekEnd: string;
        schedule: Record<string, Record<string, any[]>>;
        nearestWeekWithSchedule: string;
        hasSchedule: boolean;
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
    create(data: any, req: any): Promise<{
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
    update(id: number, data: any, req: any): Promise<{
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
    remove(id: number, req: any): Promise<{
        message: string;
    }>;
    listParticipants(classId: number, req: any): Promise<({
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
    setAttendance(classId: number, userId: number, body: {
        attendance_status?: 'joined' | 'left' | 'absent' | 'late' | 'present';
        feedback?: string;
    }, req: any): Promise<{
        user_id: number;
        created_at: Date | null;
        participant_id: number;
        class_id: number | null;
        attendance_status: string | null;
        feedback: string | null;
    }>;
    getClassRoster(classId: number, req: any): Promise<{
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
    listExamScores(classId: number, req: any): Promise<({
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
    gradeStudent(classId: number, userId: number, body: any, req: any): Promise<{
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
}
