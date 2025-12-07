import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
export declare const DbNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const JsonNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const AnyNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const ModelName: {
    readonly activity_logs: "activity_logs";
    readonly files: "files";
    readonly app_utilities: "app_utilities";
    readonly certificates: "certificates";
    readonly chats: "chats";
    readonly class_participants: "class_participants";
    readonly classes: "classes";
    readonly comment_reactions: "comment_reactions";
    readonly comments: "comments";
    readonly course_prerequisites: "course_prerequisites";
    readonly course_reviews: "course_reviews";
    readonly course_teachers: "course_teachers";
    readonly courses: "courses";
    readonly exam_scores: "exam_scores";
    readonly leaderboard: "leaderboard";
    readonly lesson_media: "lesson_media";
    readonly lesson_progress_details: "lesson_progress_details";
    readonly lessons: "lessons";
    readonly listening_exercises: "listening_exercises";
    readonly listening_questions: "listening_questions";
    readonly minigames: "minigames";
    readonly notifications: "notifications";
    readonly payments: "payments";
    readonly permissions: "permissions";
    readonly post_reactions: "post_reactions";
    readonly posts: "posts";
    readonly progress: "progress";
    readonly pronunciation_exercises: "pronunciation_exercises";
    readonly quiz_base: "quiz_base";
    readonly quiz_fill_blank: "quiz_fill_blank";
    readonly quiz_multiple_choice: "quiz_multiple_choice";
    readonly quiz_ordering: "quiz_ordering";
    readonly registrations: "registrations";
    readonly role_permissions: "role_permissions";
    readonly roles: "roles";
    readonly system_settings: "system_settings";
    readonly user_roles: "user_roles";
    readonly user_utilities: "user_utilities";
    readonly users: "users";
    readonly vocabularies: "vocabularies";
    readonly writing_exercises: "writing_exercises";
    readonly writing_submissions: "writing_submissions";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const Activity_logsScalarFieldEnum: {
    readonly log_id: "log_id";
    readonly user_id: "user_id";
    readonly action: "action";
    readonly details: "details";
    readonly created_at: "created_at";
};
export type Activity_logsScalarFieldEnum = (typeof Activity_logsScalarFieldEnum)[keyof typeof Activity_logsScalarFieldEnum];
export declare const FilesScalarFieldEnum: {
    readonly id: "id";
    readonly filename: "filename";
    readonly originalName: "originalName";
    readonly mimetype: "mimetype";
    readonly size: "size";
    readonly path: "path";
    readonly publicId: "publicId";
    readonly type: "type";
    readonly userId: "userId";
    readonly courseId: "courseId";
    readonly lessonId: "lessonId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FilesScalarFieldEnum = (typeof FilesScalarFieldEnum)[keyof typeof FilesScalarFieldEnum];
export declare const App_utilitiesScalarFieldEnum: {
    readonly utility_id: "utility_id";
    readonly key: "key";
    readonly name: "name";
    readonly description: "description";
    readonly icon_url: "icon_url";
    readonly route_path: "route_path";
    readonly is_active: "is_active";
    readonly category: "category";
    readonly display_order: "display_order";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type App_utilitiesScalarFieldEnum = (typeof App_utilitiesScalarFieldEnum)[keyof typeof App_utilitiesScalarFieldEnum];
export declare const CertificatesScalarFieldEnum: {
    readonly cert_id: "cert_id";
    readonly user_id: "user_id";
    readonly course_id: "course_id";
    readonly issue_date: "issue_date";
    readonly cert_url: "cert_url";
    readonly created_by: "created_by";
};
export type CertificatesScalarFieldEnum = (typeof CertificatesScalarFieldEnum)[keyof typeof CertificatesScalarFieldEnum];
export declare const ChatsScalarFieldEnum: {
    readonly chat_id: "chat_id";
    readonly user_id: "user_id";
    readonly sender: "sender";
    readonly message: "message";
    readonly created_at: "created_at";
};
export type ChatsScalarFieldEnum = (typeof ChatsScalarFieldEnum)[keyof typeof ChatsScalarFieldEnum];
export declare const Class_participantsScalarFieldEnum: {
    readonly participant_id: "participant_id";
    readonly class_id: "class_id";
    readonly user_id: "user_id";
    readonly attendance_status: "attendance_status";
    readonly score: "score";
    readonly feedback: "feedback";
    readonly created_at: "created_at";
};
export type Class_participantsScalarFieldEnum = (typeof Class_participantsScalarFieldEnum)[keyof typeof Class_participantsScalarFieldEnum];
export declare const ClassesScalarFieldEnum: {
    readonly class_id: "class_id";
    readonly course_id: "course_id";
    readonly teacher_id: "teacher_id";
    readonly title: "title";
    readonly description: "description";
    readonly class_type: "class_type";
    readonly start_time: "start_time";
    readonly end_time: "end_time";
    readonly meeting_link: "meeting_link";
    readonly recording_url: "recording_url";
    readonly location: "location";
    readonly exam_type: "exam_type";
    readonly max_score: "max_score";
    readonly status: "status";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type ClassesScalarFieldEnum = (typeof ClassesScalarFieldEnum)[keyof typeof ClassesScalarFieldEnum];
export declare const Comment_reactionsScalarFieldEnum: {
    readonly reaction_id: "reaction_id";
    readonly comment_id: "comment_id";
    readonly user_id: "user_id";
    readonly reaction_type: "reaction_type";
    readonly created_at: "created_at";
};
export type Comment_reactionsScalarFieldEnum = (typeof Comment_reactionsScalarFieldEnum)[keyof typeof Comment_reactionsScalarFieldEnum];
export declare const CommentsScalarFieldEnum: {
    readonly comment_id: "comment_id";
    readonly post_id: "post_id";
    readonly user_id: "user_id";
    readonly parent_id: "parent_id";
    readonly content: "content";
    readonly media_url: "media_url";
    readonly media_type: "media_type";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly status: "status";
};
export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum];
export declare const Course_prerequisitesScalarFieldEnum: {
    readonly id: "id";
    readonly course_id: "course_id";
    readonly prereq_course_id: "prereq_course_id";
};
export type Course_prerequisitesScalarFieldEnum = (typeof Course_prerequisitesScalarFieldEnum)[keyof typeof Course_prerequisitesScalarFieldEnum];
export declare const Course_reviewsScalarFieldEnum: {
    readonly review_id: "review_id";
    readonly user_id: "user_id";
    readonly course_id: "course_id";
    readonly rating: "rating";
    readonly comment: "comment";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Course_reviewsScalarFieldEnum = (typeof Course_reviewsScalarFieldEnum)[keyof typeof Course_reviewsScalarFieldEnum];
export declare const Course_teachersScalarFieldEnum: {
    readonly id: "id";
    readonly course_id: "course_id";
    readonly teacher_id: "teacher_id";
    readonly role_in_course: "role_in_course";
    readonly assigned_at: "assigned_at";
};
export type Course_teachersScalarFieldEnum = (typeof Course_teachersScalarFieldEnum)[keyof typeof Course_teachersScalarFieldEnum];
export declare const CoursesScalarFieldEnum: {
    readonly course_id: "course_id";
    readonly title: "title";
    readonly description: "description";
    readonly image_url: "image_url";
    readonly price: "price";
    readonly level: "level";
    readonly duration_weeks: "duration_weeks";
    readonly language: "language";
    readonly zalo_link: "zalo_link";
    readonly status: "status";
    readonly teacher_id: "teacher_id";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type CoursesScalarFieldEnum = (typeof CoursesScalarFieldEnum)[keyof typeof CoursesScalarFieldEnum];
export declare const Exam_scoresScalarFieldEnum: {
    readonly score_id: "score_id";
    readonly class_id: "class_id";
    readonly user_id: "user_id";
    readonly listening_score: "listening_score";
    readonly speaking_score: "speaking_score";
    readonly reading_score: "reading_score";
    readonly writing_score: "writing_score";
    readonly total_score: "total_score";
    readonly feedback: "feedback";
    readonly graded_by: "graded_by";
    readonly graded_at: "graded_at";
    readonly created_at: "created_at";
};
export type Exam_scoresScalarFieldEnum = (typeof Exam_scoresScalarFieldEnum)[keyof typeof Exam_scoresScalarFieldEnum];
export declare const LeaderboardScalarFieldEnum: {
    readonly score_id: "score_id";
    readonly user_id: "user_id";
    readonly game_id: "game_id";
    readonly score: "score";
    readonly achieved_at: "achieved_at";
};
export type LeaderboardScalarFieldEnum = (typeof LeaderboardScalarFieldEnum)[keyof typeof LeaderboardScalarFieldEnum];
export declare const Lesson_mediaScalarFieldEnum: {
    readonly media_id: "media_id";
    readonly lesson_id: "lesson_id";
    readonly media_type: "media_type";
    readonly media_url: "media_url";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
};
export type Lesson_mediaScalarFieldEnum = (typeof Lesson_mediaScalarFieldEnum)[keyof typeof Lesson_mediaScalarFieldEnum];
export declare const Lesson_progress_detailsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly lesson_id: "lesson_id";
    readonly content_type: "content_type";
    readonly content_id: "content_id";
    readonly progress_percent: "progress_percent";
    readonly status: "status";
    readonly updated_at: "updated_at";
};
export type Lesson_progress_detailsScalarFieldEnum = (typeof Lesson_progress_detailsScalarFieldEnum)[keyof typeof Lesson_progress_detailsScalarFieldEnum];
export declare const LessonsScalarFieldEnum: {
    readonly lesson_id: "lesson_id";
    readonly course_id: "course_id";
    readonly title: "title";
    readonly content: "content";
    readonly order_index: "order_index";
    readonly duration_seconds: "duration_seconds";
    readonly total_pages: "total_pages";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type LessonsScalarFieldEnum = (typeof LessonsScalarFieldEnum)[keyof typeof LessonsScalarFieldEnum];
export declare const Listening_exercisesScalarFieldEnum: {
    readonly exercise_id: "exercise_id";
    readonly lesson_id: "lesson_id";
    readonly title: "title";
    readonly audio_url: "audio_url";
    readonly transcript: "transcript";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
};
export type Listening_exercisesScalarFieldEnum = (typeof Listening_exercisesScalarFieldEnum)[keyof typeof Listening_exercisesScalarFieldEnum];
export declare const Listening_questionsScalarFieldEnum: {
    readonly question_id: "question_id";
    readonly exercise_id: "exercise_id";
    readonly question: "question";
    readonly options: "options";
    readonly correct_answer: "correct_answer";
    readonly order_index: "order_index";
    readonly created_at: "created_at";
};
export type Listening_questionsScalarFieldEnum = (typeof Listening_questionsScalarFieldEnum)[keyof typeof Listening_questionsScalarFieldEnum];
export declare const MinigamesScalarFieldEnum: {
    readonly game_id: "game_id";
    readonly name: "name";
    readonly description: "description";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type MinigamesScalarFieldEnum = (typeof MinigamesScalarFieldEnum)[keyof typeof MinigamesScalarFieldEnum];
export declare const NotificationsScalarFieldEnum: {
    readonly noti_id: "noti_id";
    readonly user_id: "user_id";
    readonly message: "message";
    readonly is_read: "is_read";
    readonly created_at: "created_at";
};
export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum];
export declare const PaymentsScalarFieldEnum: {
    readonly payment_id: "payment_id";
    readonly user_id: "user_id";
    readonly course_id: "course_id";
    readonly amount: "amount";
    readonly currency: "currency";
    readonly payment_method: "payment_method";
    readonly payment_status: "payment_status";
    readonly transaction_id: "transaction_id";
    readonly payment_note: "payment_note";
    readonly paid_at: "paid_at";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum];
export declare const PermissionsScalarFieldEnum: {
    readonly perm_id: "perm_id";
    readonly perm_key: "perm_key";
    readonly module: "module";
    readonly description: "description";
    readonly created_at: "created_at";
};
export type PermissionsScalarFieldEnum = (typeof PermissionsScalarFieldEnum)[keyof typeof PermissionsScalarFieldEnum];
export declare const Post_reactionsScalarFieldEnum: {
    readonly reaction_id: "reaction_id";
    readonly post_id: "post_id";
    readonly user_id: "user_id";
    readonly reaction_type: "reaction_type";
    readonly created_at: "created_at";
};
export type Post_reactionsScalarFieldEnum = (typeof Post_reactionsScalarFieldEnum)[keyof typeof Post_reactionsScalarFieldEnum];
export declare const PostsScalarFieldEnum: {
    readonly post_id: "post_id";
    readonly user_id: "user_id";
    readonly title: "title";
    readonly content: "content";
    readonly media_url: "media_url";
    readonly media_type: "media_type";
    readonly category: "category";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly status: "status";
};
export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum];
export declare const ProgressScalarFieldEnum: {
    readonly progress_id: "progress_id";
    readonly user_id: "user_id";
    readonly lesson_id: "lesson_id";
    readonly progress_percent: "progress_percent";
    readonly status: "status";
    readonly updated_at: "updated_at";
};
export type ProgressScalarFieldEnum = (typeof ProgressScalarFieldEnum)[keyof typeof ProgressScalarFieldEnum];
export declare const Pronunciation_exercisesScalarFieldEnum: {
    readonly exercise_id: "exercise_id";
    readonly lesson_id: "lesson_id";
    readonly sentence: "sentence";
    readonly sample_audio_url: "sample_audio_url";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
};
export type Pronunciation_exercisesScalarFieldEnum = (typeof Pronunciation_exercisesScalarFieldEnum)[keyof typeof Pronunciation_exercisesScalarFieldEnum];
export declare const Quiz_baseScalarFieldEnum: {
    readonly quiz_id: "quiz_id";
    readonly lesson_id: "lesson_id";
    readonly question: "question";
    readonly question_type: "question_type";
    readonly explanation: "explanation";
    readonly order_index: "order_index";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Quiz_baseScalarFieldEnum = (typeof Quiz_baseScalarFieldEnum)[keyof typeof Quiz_baseScalarFieldEnum];
export declare const Quiz_fill_blankScalarFieldEnum: {
    readonly fb_id: "fb_id";
    readonly quiz_id: "quiz_id";
    readonly correct_text: "correct_text";
};
export type Quiz_fill_blankScalarFieldEnum = (typeof Quiz_fill_blankScalarFieldEnum)[keyof typeof Quiz_fill_blankScalarFieldEnum];
export declare const Quiz_multiple_choiceScalarFieldEnum: {
    readonly mcq_id: "mcq_id";
    readonly quiz_id: "quiz_id";
    readonly option_text: "option_text";
    readonly is_correct: "is_correct";
};
export type Quiz_multiple_choiceScalarFieldEnum = (typeof Quiz_multiple_choiceScalarFieldEnum)[keyof typeof Quiz_multiple_choiceScalarFieldEnum];
export declare const Quiz_orderingScalarFieldEnum: {
    readonly ord_id: "ord_id";
    readonly quiz_id: "quiz_id";
    readonly item_text: "item_text";
    readonly correct_position: "correct_position";
};
export type Quiz_orderingScalarFieldEnum = (typeof Quiz_orderingScalarFieldEnum)[keyof typeof Quiz_orderingScalarFieldEnum];
export declare const RegistrationsScalarFieldEnum: {
    readonly reg_id: "reg_id";
    readonly user_id: "user_id";
    readonly course_id: "course_id";
    readonly registered_at: "registered_at";
};
export type RegistrationsScalarFieldEnum = (typeof RegistrationsScalarFieldEnum)[keyof typeof RegistrationsScalarFieldEnum];
export declare const Role_permissionsScalarFieldEnum: {
    readonly role_id: "role_id";
    readonly perm_id: "perm_id";
};
export type Role_permissionsScalarFieldEnum = (typeof Role_permissionsScalarFieldEnum)[keyof typeof Role_permissionsScalarFieldEnum];
export declare const RolesScalarFieldEnum: {
    readonly role_id: "role_id";
    readonly role_name: "role_name";
    readonly display_name: "display_name";
    readonly description: "description";
    readonly created_at: "created_at";
};
export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum];
export declare const System_settingsScalarFieldEnum: {
    readonly setting_id: "setting_id";
    readonly key: "key";
    readonly value: "value";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type System_settingsScalarFieldEnum = (typeof System_settingsScalarFieldEnum)[keyof typeof System_settingsScalarFieldEnum];
export declare const User_rolesScalarFieldEnum: {
    readonly user_id: "user_id";
    readonly role_id: "role_id";
    readonly assigned_at: "assigned_at";
};
export type User_rolesScalarFieldEnum = (typeof User_rolesScalarFieldEnum)[keyof typeof User_rolesScalarFieldEnum];
export declare const User_utilitiesScalarFieldEnum: {
    readonly user_id: "user_id";
    readonly utility_id: "utility_id";
    readonly is_enabled: "is_enabled";
    readonly pinned: "pinned";
    readonly customized_label: "customized_label";
    readonly updated_at: "updated_at";
};
export type User_utilitiesScalarFieldEnum = (typeof User_utilitiesScalarFieldEnum)[keyof typeof User_utilitiesScalarFieldEnum];
export declare const UsersScalarFieldEnum: {
    readonly user_id: "user_id";
    readonly full_name: "full_name";
    readonly email: "email";
    readonly password_hash: "password_hash";
    readonly language_pref: "language_pref";
    readonly avatar_url: "avatar_url";
    readonly phone: "phone";
    readonly address: "address";
    readonly date_of_birth: "date_of_birth";
    readonly status: "status";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];
export declare const VocabulariesScalarFieldEnum: {
    readonly vocab_id: "vocab_id";
    readonly lesson_id: "lesson_id";
    readonly word: "word";
    readonly phonetic: "phonetic";
    readonly meaning: "meaning";
    readonly example: "example";
    readonly audio_url: "audio_url";
    readonly image_url: "image_url";
    readonly part_of_speech: "part_of_speech";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
};
export type VocabulariesScalarFieldEnum = (typeof VocabulariesScalarFieldEnum)[keyof typeof VocabulariesScalarFieldEnum];
export declare const Writing_exercisesScalarFieldEnum: {
    readonly exercise_id: "exercise_id";
    readonly lesson_id: "lesson_id";
    readonly title: "title";
    readonly prompt: "prompt";
    readonly sample_answer: "sample_answer";
    readonly word_limit: "word_limit";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
};
export type Writing_exercisesScalarFieldEnum = (typeof Writing_exercisesScalarFieldEnum)[keyof typeof Writing_exercisesScalarFieldEnum];
export declare const Writing_submissionsScalarFieldEnum: {
    readonly submission_id: "submission_id";
    readonly exercise_id: "exercise_id";
    readonly user_id: "user_id";
    readonly content: "content";
    readonly file_url: "file_url";
    readonly word_count: "word_count";
    readonly grade: "grade";
    readonly feedback: "feedback";
    readonly graded_by: "graded_by";
    readonly status: "status";
    readonly submitted_at: "submitted_at";
    readonly graded_at: "graded_at";
};
export type Writing_submissionsScalarFieldEnum = (typeof Writing_submissionsScalarFieldEnum)[keyof typeof Writing_submissionsScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly JsonNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JsonNullValueFilter: {
    readonly DbNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly JsonNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly AnyNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
