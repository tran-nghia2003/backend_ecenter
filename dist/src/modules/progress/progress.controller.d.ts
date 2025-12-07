import { ProgressService } from './progress.service';
import { ContentType } from '../../common/enums/progress.enum';
export declare class ProgressController {
    private readonly progressService;
    constructor(progressService: ProgressService);
    getStudentsProgress(req: any, page?: string, limit?: string, search?: string, courseId?: string, classGroupId?: string): Promise<{
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
    getStudentCourseLessonProgress(userId: number, courseId: number, req: any): Promise<{
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
    getStudentProgress(req: any): Promise<{
        userId: number;
        userName: string;
        totalCourses: number;
        completedCourses: number;
        totalLessons: number;
        completedLessons: number;
        completionRate: number;
    }>;
    getCourseProgress(courseId: number, req: any): Promise<{
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
    updateLessonProgress(lessonId: number, progressData: any, req: any): Promise<import("../../generated/internal/prismaNamespace").BatchPayload>;
    updateContentProgress(lessonId: number, contentType: ContentType, contentId: number, progressData: any, req: any): Promise<import("../../generated/internal/prismaNamespace").BatchPayload>;
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
    getQuizAttemptHistory(userId: number, lessonId: number, req: any): Promise<{
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
    getListeningAttemptHistory(userId: number, exerciseId: number, req: any): Promise<{
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
    getWritingSubmissionHistory(userId: number, lessonId: number, req: any): Promise<{
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
    getLessonProgressStatistics(userId: number, lessonId: number, req: any): Promise<{
        data: Record<string, {
            total: number;
            completed: number;
            in_progress: number;
            not_started: number;
        }>;
    }>;
}
