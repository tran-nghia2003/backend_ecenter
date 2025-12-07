import { LessonsService } from './lessons.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { ApproveLessonDto } from './dto/approve-lesson.dto';
export declare class LessonsController {
    private readonly lessonsService;
    constructor(lessonsService: LessonsService);
    create(createLessonDto: CreateLessonDto, req: any): Promise<{
        courses: {
            course_teachers: {
                users: {
                    user_id: number;
                    full_name: string;
                    email: string;
                };
            }[];
            course_id: number;
            title: string;
            level: string;
            teacher: {
                user_id: number;
                full_name: string;
                email: string;
            };
        };
        lesson_media: {
            created_at: Date | null;
            created_by: number | null;
            media_url: string;
            media_type: string | null;
            media_id: number;
            lesson_id: number | null;
            duration_seconds: number | null;
            total_pages: number | null;
        }[];
        listening_exercises: {
            created_at: Date | null;
            created_by: number | null;
            title: string | null;
            lesson_id: number | null;
            exercise_id: number;
            audio_url: string;
            transcript: string | null;
        }[];
        vocabularies: {
            created_at: Date | null;
            created_by: number | null;
            image_url: string | null;
            lesson_id: number | null;
            audio_url: string | null;
            vocab_id: number;
            word: string;
            phonetic: string | null;
            meaning: string | null;
            example: string | null;
            part_of_speech: string | null;
        }[];
        writing_exercises: {
            created_at: Date | null;
            created_by: number | null;
            title: string | null;
            lesson_id: number | null;
            order_index: number | null;
            exercise_id: number;
            prompt: string;
            sample_answer: string | null;
            word_limit: number | null;
        }[];
        quizzes: {
            created_at: Date | null;
            created_by: number | null;
            updated_at: Date | null;
            lesson_id: number | null;
            order_index: number | null;
            question: string;
            options: import("@prisma/client/runtime/library").JsonValue | null;
            correct_answer: import("@prisma/client/runtime/library").JsonValue | null;
            quiz_id: number;
            question_type: string | null;
            explanation: string | null;
        }[];
        _count: {
            listening_exercises: number;
            vocabularies: number;
            writing_exercises: number;
            quizzes: number;
        };
        approver: {
            user_id: number;
            full_name: string;
            email: string;
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
    }>;
    findAll(req: any, page?: string, limit?: string, search?: string, courseId?: string): Promise<{
        data: ({
            courses: {
                course_teachers: {
                    users: {
                        user_id: number;
                        full_name: string;
                        email: string;
                    };
                }[];
                course_id: number;
                title: string;
                level: string;
                teacher: {
                    user_id: number;
                    full_name: string;
                    email: string;
                };
            };
            _count: {
                listening_exercises: number;
                vocabularies: number;
                writing_exercises: number;
                quizzes: number;
            };
            approver: {
                user_id: number;
                full_name: string;
                email: string;
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
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }> | {
        data: any[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    findOne(id: number): Promise<{
        courses: {
            course_id: number;
            title: string;
            level: string;
        };
        lesson_media: {
            created_at: Date | null;
            created_by: number | null;
            media_url: string;
            media_type: string | null;
            media_id: number;
            lesson_id: number | null;
            duration_seconds: number | null;
            total_pages: number | null;
        }[];
        listening_exercises: ({
            listening_questions: {
                created_at: Date | null;
                order_index: number | null;
                exercise_id: number | null;
                question_id: number;
                question: string;
                options: import("@prisma/client/runtime/library").JsonValue;
                correct_answer: import("@prisma/client/runtime/library").JsonValue;
                question_type: string | null;
            }[];
        } & {
            created_at: Date | null;
            created_by: number | null;
            title: string | null;
            lesson_id: number | null;
            exercise_id: number;
            audio_url: string;
            transcript: string | null;
        })[];
        vocabularies: {
            created_at: Date | null;
            created_by: number | null;
            image_url: string | null;
            lesson_id: number | null;
            audio_url: string | null;
            vocab_id: number;
            word: string;
            phonetic: string | null;
            meaning: string | null;
            example: string | null;
            part_of_speech: string | null;
        }[];
        writing_exercises: ({
            writing_submissions: {
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
            }[];
        } & {
            created_at: Date | null;
            created_by: number | null;
            title: string | null;
            lesson_id: number | null;
            order_index: number | null;
            exercise_id: number;
            prompt: string;
            sample_answer: string | null;
            word_limit: number | null;
        })[];
        quizzes: {
            created_at: Date | null;
            created_by: number | null;
            updated_at: Date | null;
            lesson_id: number | null;
            order_index: number | null;
            question: string;
            options: import("@prisma/client/runtime/library").JsonValue | null;
            correct_answer: import("@prisma/client/runtime/library").JsonValue | null;
            quiz_id: number;
            question_type: string | null;
            explanation: string | null;
        }[];
        approver: {
            user_id: number;
            full_name: string;
            email: string;
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
    }>;
    update(id: number, updateLessonDto: UpdateLessonDto, req: any): Promise<{
        courses: {
            course_id: number;
            title: string;
            level: string;
        };
        _count: {
            listening_exercises: number;
            vocabularies: number;
            writing_exercises: number;
            quizzes: number;
        };
        approver: {
            user_id: number;
            full_name: string;
            email: string;
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
    }>;
    remove(id: number, req: any): Promise<{
        message: string;
    }>;
    reorderLessons(courseId: number, lessonOrders: {
        lessonId: number;
        orderIndex: number;
    }[], req: any): Promise<{
        message: string;
    }>;
    getVocabularies(lessonId: number, req: any): Promise<{
        created_at: Date | null;
        created_by: number | null;
        image_url: string | null;
        lesson_id: number | null;
        audio_url: string | null;
        vocab_id: number;
        word: string;
        phonetic: string | null;
        meaning: string | null;
        example: string | null;
        part_of_speech: string | null;
    }[]>;
    addVocabulary(lessonId: number, vocabularyData: any, req: any): Promise<{
        created_at: Date | null;
        created_by: number | null;
        image_url: string | null;
        lesson_id: number | null;
        audio_url: string | null;
        vocab_id: number;
        word: string;
        phonetic: string | null;
        meaning: string | null;
        example: string | null;
        part_of_speech: string | null;
    }>;
    uploadVocabularyAudio(lessonId: number, file: Express.Multer.File, req: any): Promise<{
        url: string;
    }>;
    uploadVocabularyImage(lessonId: number, file: Express.Multer.File, req: any): Promise<{
        url: string;
    }>;
    updateVocabulary(vocabId: number, vocabularyData: any, req: any): Promise<{
        created_at: Date | null;
        created_by: number | null;
        image_url: string | null;
        lesson_id: number | null;
        audio_url: string | null;
        vocab_id: number;
        word: string;
        phonetic: string | null;
        meaning: string | null;
        example: string | null;
        part_of_speech: string | null;
    }>;
    removeVocabulary(vocabId: number, req: any): Promise<{
        message: string;
    }>;
    getListeningExercises(lessonId: number, req: any): Promise<({
        listening_questions: {
            created_at: Date | null;
            order_index: number | null;
            exercise_id: number | null;
            question_id: number;
            question: string;
            options: import("@prisma/client/runtime/library").JsonValue;
            correct_answer: import("@prisma/client/runtime/library").JsonValue;
            question_type: string | null;
        }[];
    } & {
        created_at: Date | null;
        created_by: number | null;
        title: string | null;
        lesson_id: number | null;
        exercise_id: number;
        audio_url: string;
        transcript: string | null;
    })[]>;
    uploadListeningAudio(lessonId: number, file: Express.Multer.File): Promise<{
        url: string;
    }>;
    addListeningExercise(lessonId: number, exerciseData: any, req: any): Promise<{
        created_at: Date | null;
        created_by: number | null;
        title: string | null;
        lesson_id: number | null;
        exercise_id: number;
        audio_url: string;
        transcript: string | null;
    }>;
    addListeningQuestion(exerciseId: number, questionData: any, req: any): Promise<{
        listening_exercises: {
            lesson_id: number;
            exercise_id: number;
        };
    } & {
        created_at: Date | null;
        order_index: number | null;
        exercise_id: number | null;
        question_id: number;
        question: string;
        options: import("@prisma/client/runtime/library").JsonValue;
        correct_answer: import("@prisma/client/runtime/library").JsonValue;
        question_type: string | null;
    }>;
    updateListeningExercise(exerciseId: number, data: any, req: any): Promise<{
        created_at: Date | null;
        created_by: number | null;
        title: string | null;
        lesson_id: number | null;
        exercise_id: number;
        audio_url: string;
        transcript: string | null;
    }>;
    deleteListeningExercise(exerciseId: number, req: any): Promise<{
        message: string;
    }>;
    updateListeningQuestion(questionId: number, data: any, req: any): Promise<{
        listening_exercises: {
            lesson_id: number;
            exercise_id: number;
        };
    } & {
        created_at: Date | null;
        order_index: number | null;
        exercise_id: number | null;
        question_id: number;
        question: string;
        options: import("@prisma/client/runtime/library").JsonValue;
        correct_answer: import("@prisma/client/runtime/library").JsonValue;
        question_type: string | null;
    }>;
    deleteListeningQuestion(questionId: number, req: any): Promise<{
        message: string;
    }>;
    getQuizzes(lessonId: number, req: any): Promise<{
        created_at: Date | null;
        created_by: number | null;
        updated_at: Date | null;
        lesson_id: number | null;
        order_index: number | null;
        question: string;
        options: import("@prisma/client/runtime/library").JsonValue | null;
        correct_answer: import("@prisma/client/runtime/library").JsonValue | null;
        quiz_id: number;
        question_type: string | null;
        explanation: string | null;
    }[]>;
    addQuiz(lessonId: number, quizData: any, req: any): Promise<{
        created_at: Date | null;
        created_by: number | null;
        updated_at: Date | null;
        lesson_id: number | null;
        order_index: number | null;
        question: string;
        options: import("@prisma/client/runtime/library").JsonValue | null;
        correct_answer: import("@prisma/client/runtime/library").JsonValue | null;
        quiz_id: number;
        question_type: string | null;
        explanation: string | null;
    }>;
    updateQuiz(quizId: number, data: any, req: any): Promise<{
        created_at: Date | null;
        created_by: number | null;
        updated_at: Date | null;
        lesson_id: number | null;
        order_index: number | null;
        question: string;
        options: import("@prisma/client/runtime/library").JsonValue | null;
        correct_answer: import("@prisma/client/runtime/library").JsonValue | null;
        quiz_id: number;
        question_type: string | null;
        explanation: string | null;
    }>;
    deleteQuiz(quizId: number, req: any): Promise<{
        message: string;
    }>;
    getWritingExercises(lessonId: number, req: any): Promise<{
        created_at: Date | null;
        created_by: number | null;
        title: string | null;
        lesson_id: number | null;
        order_index: number | null;
        exercise_id: number;
        prompt: string;
        sample_answer: string | null;
        word_limit: number | null;
    }[]>;
    addWritingExercise(lessonId: number, exerciseData: any, req: any): Promise<{
        created_at: Date | null;
        created_by: number | null;
        title: string | null;
        lesson_id: number | null;
        order_index: number | null;
        exercise_id: number;
        prompt: string;
        sample_answer: string | null;
        word_limit: number | null;
    }>;
    updateWritingExercise(exerciseId: number, data: any, req: any): Promise<{
        created_at: Date | null;
        created_by: number | null;
        title: string | null;
        lesson_id: number | null;
        order_index: number | null;
        exercise_id: number;
        prompt: string;
        sample_answer: string | null;
        word_limit: number | null;
    }>;
    deleteWritingExercise(exerciseId: number, req: any): Promise<{
        message: string;
    }>;
    submitWritingExercise(exerciseId: number, submissionData: any, req: any): Promise<{
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
    }>;
    gradeWritingSubmission(submissionId: number, gradeData: any, req: any): Promise<{
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
    }>;
    getWritingSubmissions(exerciseId: number, req: any): Promise<{
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
    }[]>;
    uploadOnly(lessonId: number, file: Express.Multer.File, req: any, type: string): Promise<{
        media_url: string;
        media_type: string;
        duration_seconds: number;
        total_pages: number;
    }>;
    extractPdfMetadata(lessonId: number, file: Express.Multer.File, req: any): Promise<{
        total_pages: number;
    }>;
    uploadContent(lessonId: number, file: Express.Multer.File, req: any, type: string): Promise<{
        created_at: Date | null;
        created_by: number | null;
        media_url: string;
        media_type: string | null;
        media_id: number;
        lesson_id: number | null;
        duration_seconds: number | null;
        total_pages: number | null;
    }>;
    uploadAttachment(lessonId: number, file: Express.Multer.File, req: any): Promise<{
        lessonId: number;
        fileName: string;
        attachmentType: string;
        uploadedBy: number;
        uploadedAt: Date;
    }>;
    getMedia(lessonId: number, req: any): Promise<{
        created_at: Date | null;
        created_by: number | null;
        media_url: string;
        media_type: string | null;
        media_id: number;
        lesson_id: number | null;
        duration_seconds: number | null;
        total_pages: number | null;
    }[]>;
    createMedia(lessonId: number, body: any, req: any): Promise<{
        created_at: Date | null;
        created_by: number | null;
        media_url: string;
        media_type: string | null;
        media_id: number;
        lesson_id: number | null;
        duration_seconds: number | null;
        total_pages: number | null;
    }>;
    deleteMedia(mediaId: number, req: any): Promise<{
        message: string;
    }>;
    approveLesson(lessonId: number, approveLessonDto: ApproveLessonDto, req: any): Promise<{
        courses: {
            course_id: number;
            title: string;
            level: string;
        };
        _count: {
            listening_exercises: number;
            vocabularies: number;
            writing_exercises: number;
            quizzes: number;
        };
        approver: {
            user_id: number;
            full_name: string;
            email: string;
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
    }>;
    approveLessonPost(lessonId: number, reviewNote: string, req: any): Promise<{
        courses: {
            course_id: number;
            title: string;
            level: string;
        };
        _count: {
            listening_exercises: number;
            vocabularies: number;
            writing_exercises: number;
            quizzes: number;
        };
        approver: {
            user_id: number;
            full_name: string;
            email: string;
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
    }>;
    rejectLesson(lessonId: number, reviewNote: string, req: any): Promise<{
        courses: {
            course_id: number;
            title: string;
            level: string;
        };
        _count: {
            listening_exercises: number;
            vocabularies: number;
            writing_exercises: number;
            quizzes: number;
        };
        approver: {
            user_id: number;
            full_name: string;
            email: string;
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
    }>;
}
