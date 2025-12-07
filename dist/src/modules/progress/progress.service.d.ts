import { PrismaService } from '../../prisma.service';
export declare class ProgressService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly allowedContentTypes;
    private validateContentType;
    private getActiveRegistrationForLesson;
    createProgress(userId: number, lessonId: number, progressData: any): Promise<{
        lessons: {
            courses: {
                course_id: number;
                title: string;
                level: string;
            };
        } & {
            created_at: Date | null;
            created_by: number | null;
            updated_at: Date | null;
            course_id: number | null;
            title: string;
            content: string | null;
            lesson_id: number;
            order_index: number | null;
            approval_status: string | null;
            approved_by: number | null;
            approved_at: Date | null;
            review_note: string | null;
        };
        users: {
            user_id: number;
            full_name: string;
            email: string;
        };
    } & {
        user_id: number | null;
        updated_at: Date | null;
        course_id: number | null;
        status: string | null;
        lesson_id: number | null;
        progress_percent: import("@prisma/client/runtime/library").Decimal | null;
        progress_id: number;
        reg_id: number | null;
    }>;
    updateLessonProgress(userId: number, lessonId: number, progressData: any): Promise<import("../../generated/internal/prismaNamespace").BatchPayload>;
    updateContentProgress(userId: number, lessonId: number, contentType: string, contentId: number, progressData: any): Promise<import("../../generated/internal/prismaNamespace").BatchPayload>;
    updateProgress(userId: number, lessonId: number, progressData: any): Promise<import("../../generated/internal/prismaNamespace").BatchPayload>;
    getUserProgress(userId: number, courseId?: number): Promise<({
        lessons: {
            courses: {
                course_id: number;
                title: string;
                level: string;
            };
        } & {
            created_at: Date | null;
            created_by: number | null;
            updated_at: Date | null;
            course_id: number | null;
            title: string;
            content: string | null;
            lesson_id: number;
            order_index: number | null;
            approval_status: string | null;
            approved_by: number | null;
            approved_at: Date | null;
            review_note: string | null;
        };
    } & {
        user_id: number | null;
        updated_at: Date | null;
        course_id: number | null;
        status: string | null;
        lesson_id: number | null;
        progress_percent: import("@prisma/client/runtime/library").Decimal | null;
        progress_id: number;
        reg_id: number | null;
    })[]>;
    getCourseProgress(courseId: number, page?: number, limit?: number): Promise<{
        data: ({
            lessons: {
                title: string;
                lesson_id: number;
                order_index: number;
            };
            users: {
                user_id: number;
                full_name: string;
                email: string;
            };
        } & {
            user_id: number | null;
            updated_at: Date | null;
            course_id: number | null;
            status: string | null;
            lesson_id: number | null;
            progress_percent: import("@prisma/client/runtime/library").Decimal | null;
            progress_id: number;
            reg_id: number | null;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getCourseCompletionStats(courseId: number): Promise<{
        courseId: number;
        courseTitle: string;
        totalLessons: any;
        completedLessons: any;
        completionRate: number;
        totalStudents: any;
    }>;
    getStudentProgress(userId: number): Promise<{
        userId: number;
        userName: string;
        totalCourses: number;
        completedCourses: number;
        totalLessons: number;
        completedLessons: number;
        completionRate: number;
    }>;
    getStudentProgressStats(userId: number): Promise<{
        userId: number;
        userName: string;
        totalCourses: number;
        completedCourses: number;
        totalLessons: number;
        completedLessons: number;
        completionRate: number;
    }>;
    getSystemAnalytics(): Promise<{
        totalProgress: number;
        completedProgress: number;
        inProgressProgress: number;
        notStartedProgress: number;
        completionRate: number;
        progressByCourse: unknown;
        progressByUser: unknown;
    }>;
    getTeacherAnalytics(teacherId: number): Promise<{
        data: ({
            lessons: {
                courses: {
                    course_id: number;
                    title: string;
                    level: string;
                };
            } & {
                created_at: Date | null;
                created_by: number | null;
                updated_at: Date | null;
                course_id: number | null;
                title: string;
                content: string | null;
                lesson_id: number;
                order_index: number | null;
                approval_status: string | null;
                approved_by: number | null;
                approved_at: Date | null;
                review_note: string | null;
            };
            users: {
                user_id: number;
                full_name: string;
                email: string;
            };
        } & {
            user_id: number | null;
            updated_at: Date | null;
            course_id: number | null;
            status: string | null;
            lesson_id: number | null;
            progress_percent: import("@prisma/client/runtime/library").Decimal | null;
            progress_id: number;
            reg_id: number | null;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getOverallProgressStats(): Promise<{
        totalProgress: number;
        completedProgress: number;
        inProgressProgress: number;
        notStartedProgress: number;
        completionRate: number;
        progressByCourse: unknown;
        progressByUser: unknown;
    }>;
    getTeacherStudentProgress(teacherId: number, page?: number, limit?: number): Promise<{
        data: ({
            lessons: {
                courses: {
                    course_id: number;
                    title: string;
                    level: string;
                };
            } & {
                created_at: Date | null;
                created_by: number | null;
                updated_at: Date | null;
                course_id: number | null;
                title: string;
                content: string | null;
                lesson_id: number;
                order_index: number | null;
                approval_status: string | null;
                approved_by: number | null;
                approved_at: Date | null;
                review_note: string | null;
            };
            users: {
                user_id: number;
                full_name: string;
                email: string;
            };
        } & {
            user_id: number | null;
            updated_at: Date | null;
            course_id: number | null;
            status: string | null;
            lesson_id: number | null;
            progress_percent: import("@prisma/client/runtime/library").Decimal | null;
            progress_id: number;
            reg_id: number | null;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    createLessonProgressDetail(userId: number, lessonId: number, detailData: any): Promise<{
        user_id: number;
        id: number;
        updated_at: Date | null;
        status: string | null;
        lesson_id: number;
        content_type: string;
        content_id: number | null;
        progress_percent: import("@prisma/client/runtime/library").Decimal | null;
        reg_id: number;
    }>;
    updateLessonProgressDetail(userId: number, lessonId: number, contentType: string, contentId: number, detailData: any): Promise<import("../../generated/internal/prismaNamespace").BatchPayload>;
    getLessonProgressDetails(userId: number, lessonId: number): Promise<{
        user_id: number;
        id: number;
        updated_at: Date | null;
        status: string | null;
        lesson_id: number;
        content_type: string;
        content_id: number | null;
        progress_percent: import("@prisma/client/runtime/library").Decimal | null;
        reg_id: number;
    }[]>;
    calculateCourseProgress(userId: number, courseId: number): Promise<{
        progress: number;
        completedLessons: number;
        totalLessons: number;
    }>;
    getProgressHistory(userId: number, days?: number): Promise<({
        lessons: {
            courses: {
                course_id: number;
                title: string;
                level: string;
            };
        } & {
            created_at: Date | null;
            created_by: number | null;
            updated_at: Date | null;
            course_id: number | null;
            title: string;
            content: string | null;
            lesson_id: number;
            order_index: number | null;
            approval_status: string | null;
            approved_by: number | null;
            approved_at: Date | null;
            review_note: string | null;
        };
    } & {
        user_id: number | null;
        updated_at: Date | null;
        course_id: number | null;
        status: string | null;
        lesson_id: number | null;
        progress_percent: import("@prisma/client/runtime/library").Decimal | null;
        progress_id: number;
        reg_id: number | null;
    })[]>;
    listStudentsProgress(params: {
        currentUserId: number;
        permissions: string[];
        page?: number;
        limit?: number;
        search?: string;
        courseId?: number;
        classGroupId?: number;
    }): Promise<{
        data: {
            user: {
                user_id: number;
                full_name: string;
                email: string;
            };
            course: {
                course_id: number;
                title: string;
                level: string;
            };
            progressSummary: {
                completedLessons: number;
                totalLessons: number;
            };
            registered_at: any;
        }[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getStudentCourseLessonProgress(params: {
        requesterId: number;
        permissions: string[];
        userId: number;
        courseId: number;
    }): Promise<{
        data: {
            lesson_id: any;
            title: any;
            order_index: any;
            status: any;
            progress_percent: any;
            updated_at: any;
            details: any;
        }[];
        total: number;
        user: {
            user_id: number;
            full_name: string;
            email: string;
        };
        course: {
            course_id: number;
            title: string;
        };
    }>;
    getQuizAttemptHistory(userId: number, lessonId: number): Promise<{
        data: ({
            quiz_attempts: ({
                quizzes: {
                    order_index: number;
                    question: string;
                    options: import("@prisma/client/runtime/library").JsonValue;
                    correct_answer: import("@prisma/client/runtime/library").JsonValue;
                    quiz_id: number;
                    question_type: string;
                };
            } & {
                user_id: number;
                created_at: Date | null;
                quiz_id: number;
                is_correct: boolean | null;
                attempt_set_id: number;
                user_answer: import("@prisma/client/runtime/library").JsonValue | null;
                attempt_id: number;
                score_percent: import("@prisma/client/runtime/library").Decimal | null;
            })[];
        } & {
            user_id: number;
            created_at: Date | null;
            lesson_id: number;
            reg_id: number | null;
            attempt_set_id: number;
            correct_count: number | null;
            total_questions: number | null;
            average_score: import("@prisma/client/runtime/library").Decimal | null;
        })[];
        total: number;
    }>;
    getListeningAttemptHistory(userId: number, exerciseId: number): Promise<{
        data: ({
            listening_answers: ({
                listening_questions: {
                    order_index: number;
                    question_id: number;
                    question: string;
                    options: import("@prisma/client/runtime/library").JsonValue;
                    correct_answer: import("@prisma/client/runtime/library").JsonValue;
                    question_type: string;
                };
            } & {
                user_id: number;
                created_at: Date | null;
                question_id: number;
                is_correct: boolean | null;
                attempt_set_id: number;
                answer_id: number;
                user_answer: import("@prisma/client/runtime/library").JsonValue | null;
            })[];
        } & {
            user_id: number;
            created_at: Date | null;
            exercise_id: number;
            reg_id: number | null;
            attempt_set_id: number;
            correct_count: number | null;
            total_questions: number | null;
            accuracy_percent: import("@prisma/client/runtime/library").Decimal | null;
        })[];
        total: number;
    }>;
    getWritingSubmissionHistory(userId: number, lessonId: number): Promise<{
        data: ({
            users: {
                user_id: number;
                full_name: string;
                email: string;
            };
            writing_exercises: {
                title: string;
                exercise_id: number;
                prompt: string;
            };
        } & {
            user_id: number | null;
            feedback: string | null;
            status: string | null;
            content: string;
            graded_by: number | null;
            graded_at: Date | null;
            exercise_id: number | null;
            reg_id: number | null;
            submission_id: number;
            file_url: string | null;
            word_count: number | null;
            grade: import("@prisma/client/runtime/library").Decimal | null;
            submitted_at: Date | null;
        })[];
        total: number;
    }>;
    getLessonProgressStatistics(userId: number, lessonId: number): Promise<{
        data: Record<string, {
            total: number;
            completed: number;
            in_progress: number;
            not_started: number;
        }>;
    }>;
}
