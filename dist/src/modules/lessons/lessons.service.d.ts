import { PrismaService } from '../../prisma.service';
import { FilesService } from '../files/files.service';
import { CloudinaryService } from '../files/cloudinary.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { Prisma } from '../../generated/client';
export declare class LessonsService {
    private readonly prisma;
    private readonly filesService;
    private readonly cloudinaryService;
    constructor(prisma: PrismaService, filesService: FilesService, cloudinaryService: CloudinaryService);
    private sanitizePayload;
    private logActivity;
    isTeacherOfCourse(teacherId: number, courseId: number): Promise<boolean>;
    isTeacherOfLesson(teacherId: number, lessonId: number): Promise<boolean>;
    create(createLessonDto: CreateLessonDto, createdBy: number): Promise<{
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
    findAll(page?: number, limit?: number, search?: string, courseId?: number): Promise<{
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
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findOne(id: number): Promise<{
        courses: {
            description: string;
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
        progress: ({
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
            writing_submissions: ({
                users: {
                    user_id: number;
                    full_name: string;
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
    update(id: number, updateLessonDto: UpdateLessonDto, updatedBy?: number): Promise<{
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
    remove(id: number, removedBy?: number): Promise<{
        message: string;
    }>;
    createVocabulary(lessonId: number, vocabularyData: any, createdBy: number): Promise<{
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
    getLessonVocabularies(lessonId: number): Promise<{
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
    updateVocabulary(vocabId: number, vocabularyData: any, updatedBy?: number): Promise<{
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
    deleteVocabulary(vocabId: number, deletedBy?: number): Promise<{
        message: string;
    }>;
    uploadVocabularyFile(lessonId: number, file: Express.Multer.File, type: 'audio' | 'image'): Promise<{
        url: string;
    }>;
    private deleteFileFromCloudinary;
    createListeningExercise(lessonId: number, exerciseData: any, createdBy: number): Promise<{
        created_at: Date | null;
        created_by: number | null;
        title: string | null;
        lesson_id: number | null;
        exercise_id: number;
        audio_url: string;
        transcript: string | null;
    }>;
    getLessonListeningExercises(lessonId: number): Promise<({
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
    updateListeningExercise(exerciseId: number, data: any, updatedBy?: number): Promise<{
        created_at: Date | null;
        created_by: number | null;
        title: string | null;
        lesson_id: number | null;
        exercise_id: number;
        audio_url: string;
        transcript: string | null;
    }>;
    deleteListeningExercise(exerciseId: number, deletedBy?: number): Promise<{
        message: string;
    }>;
    uploadListeningAudio(lessonId: number, file: Express.Multer.File): Promise<{
        url: string;
    }>;
    createListeningQuestion(exerciseId: number, questionData: any, createdBy?: number): Promise<{
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
    updateListeningQuestion(questionId: number, data: any, updatedBy?: number): Promise<{
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
    deleteListeningQuestion(questionId: number, deletedBy?: number): Promise<{
        message: string;
    }>;
    createQuiz(lessonId: number, quizData: any, createdBy: number): Promise<{
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
    getLessonQuizzes(lessonId: number): Promise<{
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
    createWritingExercise(lessonId: number, exerciseData: any, createdBy: number): Promise<{
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
    getLessonWritingExercises(lessonId: number): Promise<({
        writing_submissions: ({
            users: {
                user_id: number;
                full_name: string;
                email: string;
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
    })[]>;
    createLessonMedia(lessonId: number, mediaData: any, createdBy: number): Promise<{
        created_at: Date | null;
        created_by: number | null;
        media_url: string;
        media_type: string | null;
        media_id: number;
        lesson_id: number | null;
        duration_seconds: number | null;
        total_pages: number | null;
    }>;
    getLessonMedia(lessonId: number): Promise<{
        created_at: Date | null;
        created_by: number | null;
        media_url: string;
        media_type: string | null;
        media_id: number;
        lesson_id: number | null;
        duration_seconds: number | null;
        total_pages: number | null;
    }[]>;
    deleteLessonMedia(mediaId: number, deletedBy?: number): Promise<{
        message: string;
    }>;
    getLessonStats(): Promise<{
        totalLessons: number;
        lessonsByCourse: (Prisma.PickEnumerable<Prisma.LessonsGroupByOutputType, "course_id"[]> & {
            _count: {
                lesson_id: number;
            };
        })[];
        totalVocabularies: number;
        totalListeningExercises: number;
        totalQuizzes: number;
        totalWritingExercises: number;
    }>;
    getTeacherLessons(teacherId: number, page?: number, limit?: number, search?: string, courseId?: number): Promise<{
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
    }>;
    reorderLessons(courseId: number, lessonOrders: {
        lessonId: number;
        orderIndex: number;
    }[], userId?: number): Promise<{
        message: string;
    }>;
    duplicateLesson(lessonId: number, newTitle: string, createdBy: number): Promise<{
        courses: {
            description: string;
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
        progress: ({
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
            writing_submissions: ({
                users: {
                    user_id: number;
                    full_name: string;
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
    findById(id: number): Promise<{
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
    addVocabulary(lessonId: number, vocabularyData: any, createdBy: number): Promise<{
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
    removeVocabulary(vocabId: number, deletedBy?: number): Promise<{
        message: string;
    }>;
    addListeningExercise(lessonId: number, exerciseData: any, createdBy: number): Promise<{
        created_at: Date | null;
        created_by: number | null;
        title: string | null;
        lesson_id: number | null;
        exercise_id: number;
        audio_url: string;
        transcript: string | null;
    }>;
    addListeningQuestion(exerciseId: number, questionData: any, createdBy?: number): Promise<{
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
    addQuiz(lessonId: number, quizData: any, createdBy: number): Promise<{
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
    updateQuiz(quizId: number, data: any, updatedBy?: number): Promise<{
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
    deleteQuiz(quizId: number, deletedBy?: number): Promise<{
        message: string;
    }>;
    addWritingExercise(lessonId: number, exerciseData: any, createdBy: number): Promise<{
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
    getWritingExercises(lessonId: number): Promise<{
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
    updateWritingExercise(exerciseId: number, data: any, updatedBy?: number): Promise<{
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
    deleteWritingExercise(exerciseId: number, deletedBy?: number): Promise<{
        message: string;
    }>;
    submitWritingExercise(exerciseId: number, userId: number, submissionData: any): Promise<{
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
    gradeWritingSubmission(submissionId: number, gradeData: any, gradedBy: number): Promise<{
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
    getWritingSubmissions(exerciseId: number): Promise<{
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
    extractPdfMetadata(file: Express.Multer.File): Promise<{
        total_pages: number;
    }>;
    uploadContentOnly(lessonId: number, file: Express.Multer.File, contentType: string): Promise<{
        media_url: string;
        media_type: string;
        duration_seconds: number;
        total_pages: number;
    }>;
    uploadContent(lessonId: number, file: Express.Multer.File, contentType: string, createdBy: number): Promise<{
        created_at: Date | null;
        created_by: number | null;
        media_url: string;
        media_type: string | null;
        media_id: number;
        lesson_id: number | null;
        duration_seconds: number | null;
        total_pages: number | null;
    }>;
    uploadAttachment(lessonId: number, file: Express.Multer.File, attachmentType: string, createdBy: number): Promise<{
        lessonId: number;
        fileName: string;
        attachmentType: string;
        uploadedBy: number;
        uploadedAt: Date;
    }>;
    approveLesson(lessonId: number, approvedBy: number, reviewNote?: string): Promise<{
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
    rejectLesson(lessonId: number, approvedBy: number, reviewNote: string): Promise<{
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
    updateApprovalStatus(lessonId: number, approvalStatus: 'pending' | 'approved' | 'rejected', approvedBy: number, reviewNote?: string): Promise<{
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
