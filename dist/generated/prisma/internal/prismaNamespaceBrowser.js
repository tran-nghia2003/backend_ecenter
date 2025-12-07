"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortOrder = exports.Writing_submissionsScalarFieldEnum = exports.Writing_exercisesScalarFieldEnum = exports.VocabulariesScalarFieldEnum = exports.UsersScalarFieldEnum = exports.User_utilitiesScalarFieldEnum = exports.User_rolesScalarFieldEnum = exports.System_settingsScalarFieldEnum = exports.RolesScalarFieldEnum = exports.Role_permissionsScalarFieldEnum = exports.RegistrationsScalarFieldEnum = exports.Quiz_orderingScalarFieldEnum = exports.Quiz_multiple_choiceScalarFieldEnum = exports.Quiz_fill_blankScalarFieldEnum = exports.Quiz_baseScalarFieldEnum = exports.Pronunciation_exercisesScalarFieldEnum = exports.ProgressScalarFieldEnum = exports.PostsScalarFieldEnum = exports.Post_reactionsScalarFieldEnum = exports.PermissionsScalarFieldEnum = exports.PaymentsScalarFieldEnum = exports.NotificationsScalarFieldEnum = exports.MinigamesScalarFieldEnum = exports.Listening_questionsScalarFieldEnum = exports.Listening_exercisesScalarFieldEnum = exports.LessonsScalarFieldEnum = exports.Lesson_progress_detailsScalarFieldEnum = exports.Lesson_mediaScalarFieldEnum = exports.LeaderboardScalarFieldEnum = exports.Exam_scoresScalarFieldEnum = exports.CoursesScalarFieldEnum = exports.Course_teachersScalarFieldEnum = exports.Course_reviewsScalarFieldEnum = exports.Course_prerequisitesScalarFieldEnum = exports.CommentsScalarFieldEnum = exports.Comment_reactionsScalarFieldEnum = exports.ClassesScalarFieldEnum = exports.Class_participantsScalarFieldEnum = exports.ChatsScalarFieldEnum = exports.CertificatesScalarFieldEnum = exports.App_utilitiesScalarFieldEnum = exports.FilesScalarFieldEnum = exports.Activity_logsScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
exports.NullsOrder = exports.JsonNullValueFilter = exports.QueryMode = exports.JsonNullValueInput = exports.NullableJsonNullValueInput = void 0;
const runtime = require("@prisma/client/runtime/index-browser");
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.objectEnumValues.classes.DbNull,
    JsonNull: runtime.objectEnumValues.classes.JsonNull,
    AnyNull: runtime.objectEnumValues.classes.AnyNull,
};
exports.DbNull = runtime.objectEnumValues.instances.DbNull;
exports.JsonNull = runtime.objectEnumValues.instances.JsonNull;
exports.AnyNull = runtime.objectEnumValues.instances.AnyNull;
exports.ModelName = {
    activity_logs: 'activity_logs',
    files: 'files',
    app_utilities: 'app_utilities',
    certificates: 'certificates',
    chats: 'chats',
    class_participants: 'class_participants',
    classes: 'classes',
    comment_reactions: 'comment_reactions',
    comments: 'comments',
    course_prerequisites: 'course_prerequisites',
    course_reviews: 'course_reviews',
    course_teachers: 'course_teachers',
    courses: 'courses',
    exam_scores: 'exam_scores',
    leaderboard: 'leaderboard',
    lesson_media: 'lesson_media',
    lesson_progress_details: 'lesson_progress_details',
    lessons: 'lessons',
    listening_exercises: 'listening_exercises',
    listening_questions: 'listening_questions',
    minigames: 'minigames',
    notifications: 'notifications',
    payments: 'payments',
    permissions: 'permissions',
    post_reactions: 'post_reactions',
    posts: 'posts',
    progress: 'progress',
    pronunciation_exercises: 'pronunciation_exercises',
    quiz_base: 'quiz_base',
    quiz_fill_blank: 'quiz_fill_blank',
    quiz_multiple_choice: 'quiz_multiple_choice',
    quiz_ordering: 'quiz_ordering',
    registrations: 'registrations',
    role_permissions: 'role_permissions',
    roles: 'roles',
    system_settings: 'system_settings',
    user_roles: 'user_roles',
    user_utilities: 'user_utilities',
    users: 'users',
    vocabularies: 'vocabularies',
    writing_exercises: 'writing_exercises',
    writing_submissions: 'writing_submissions'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.Activity_logsScalarFieldEnum = {
    log_id: 'log_id',
    user_id: 'user_id',
    action: 'action',
    details: 'details',
    created_at: 'created_at'
};
exports.FilesScalarFieldEnum = {
    id: 'id',
    filename: 'filename',
    originalName: 'originalName',
    mimetype: 'mimetype',
    size: 'size',
    path: 'path',
    publicId: 'publicId',
    type: 'type',
    userId: 'userId',
    courseId: 'courseId',
    lessonId: 'lessonId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.App_utilitiesScalarFieldEnum = {
    utility_id: 'utility_id',
    key: 'key',
    name: 'name',
    description: 'description',
    icon_url: 'icon_url',
    route_path: 'route_path',
    is_active: 'is_active',
    category: 'category',
    display_order: 'display_order',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.CertificatesScalarFieldEnum = {
    cert_id: 'cert_id',
    user_id: 'user_id',
    course_id: 'course_id',
    issue_date: 'issue_date',
    cert_url: 'cert_url',
    created_by: 'created_by'
};
exports.ChatsScalarFieldEnum = {
    chat_id: 'chat_id',
    user_id: 'user_id',
    sender: 'sender',
    message: 'message',
    created_at: 'created_at'
};
exports.Class_participantsScalarFieldEnum = {
    participant_id: 'participant_id',
    class_id: 'class_id',
    user_id: 'user_id',
    attendance_status: 'attendance_status',
    score: 'score',
    feedback: 'feedback',
    created_at: 'created_at'
};
exports.ClassesScalarFieldEnum = {
    class_id: 'class_id',
    course_id: 'course_id',
    teacher_id: 'teacher_id',
    title: 'title',
    description: 'description',
    class_type: 'class_type',
    start_time: 'start_time',
    end_time: 'end_time',
    meeting_link: 'meeting_link',
    recording_url: 'recording_url',
    location: 'location',
    exam_type: 'exam_type',
    max_score: 'max_score',
    status: 'status',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Comment_reactionsScalarFieldEnum = {
    reaction_id: 'reaction_id',
    comment_id: 'comment_id',
    user_id: 'user_id',
    reaction_type: 'reaction_type',
    created_at: 'created_at'
};
exports.CommentsScalarFieldEnum = {
    comment_id: 'comment_id',
    post_id: 'post_id',
    user_id: 'user_id',
    parent_id: 'parent_id',
    content: 'content',
    media_url: 'media_url',
    media_type: 'media_type',
    created_at: 'created_at',
    updated_at: 'updated_at',
    status: 'status'
};
exports.Course_prerequisitesScalarFieldEnum = {
    id: 'id',
    course_id: 'course_id',
    prereq_course_id: 'prereq_course_id'
};
exports.Course_reviewsScalarFieldEnum = {
    review_id: 'review_id',
    user_id: 'user_id',
    course_id: 'course_id',
    rating: 'rating',
    comment: 'comment',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Course_teachersScalarFieldEnum = {
    id: 'id',
    course_id: 'course_id',
    teacher_id: 'teacher_id',
    role_in_course: 'role_in_course',
    assigned_at: 'assigned_at'
};
exports.CoursesScalarFieldEnum = {
    course_id: 'course_id',
    title: 'title',
    description: 'description',
    image_url: 'image_url',
    price: 'price',
    level: 'level',
    duration_weeks: 'duration_weeks',
    language: 'language',
    zalo_link: 'zalo_link',
    status: 'status',
    teacher_id: 'teacher_id',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Exam_scoresScalarFieldEnum = {
    score_id: 'score_id',
    class_id: 'class_id',
    user_id: 'user_id',
    listening_score: 'listening_score',
    speaking_score: 'speaking_score',
    reading_score: 'reading_score',
    writing_score: 'writing_score',
    total_score: 'total_score',
    feedback: 'feedback',
    graded_by: 'graded_by',
    graded_at: 'graded_at',
    created_at: 'created_at'
};
exports.LeaderboardScalarFieldEnum = {
    score_id: 'score_id',
    user_id: 'user_id',
    game_id: 'game_id',
    score: 'score',
    achieved_at: 'achieved_at'
};
exports.Lesson_mediaScalarFieldEnum = {
    media_id: 'media_id',
    lesson_id: 'lesson_id',
    media_type: 'media_type',
    media_url: 'media_url',
    created_by: 'created_by',
    created_at: 'created_at'
};
exports.Lesson_progress_detailsScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    lesson_id: 'lesson_id',
    content_type: 'content_type',
    content_id: 'content_id',
    progress_percent: 'progress_percent',
    status: 'status',
    updated_at: 'updated_at'
};
exports.LessonsScalarFieldEnum = {
    lesson_id: 'lesson_id',
    course_id: 'course_id',
    title: 'title',
    content: 'content',
    order_index: 'order_index',
    duration_seconds: 'duration_seconds',
    total_pages: 'total_pages',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Listening_exercisesScalarFieldEnum = {
    exercise_id: 'exercise_id',
    lesson_id: 'lesson_id',
    title: 'title',
    audio_url: 'audio_url',
    transcript: 'transcript',
    created_by: 'created_by',
    created_at: 'created_at'
};
exports.Listening_questionsScalarFieldEnum = {
    question_id: 'question_id',
    exercise_id: 'exercise_id',
    question: 'question',
    options: 'options',
    correct_answer: 'correct_answer',
    order_index: 'order_index',
    created_at: 'created_at'
};
exports.MinigamesScalarFieldEnum = {
    game_id: 'game_id',
    name: 'name',
    description: 'description',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.NotificationsScalarFieldEnum = {
    noti_id: 'noti_id',
    user_id: 'user_id',
    message: 'message',
    is_read: 'is_read',
    created_at: 'created_at'
};
exports.PaymentsScalarFieldEnum = {
    payment_id: 'payment_id',
    user_id: 'user_id',
    course_id: 'course_id',
    amount: 'amount',
    currency: 'currency',
    payment_method: 'payment_method',
    payment_status: 'payment_status',
    transaction_id: 'transaction_id',
    payment_note: 'payment_note',
    paid_at: 'paid_at',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.PermissionsScalarFieldEnum = {
    perm_id: 'perm_id',
    perm_key: 'perm_key',
    module: 'module',
    description: 'description',
    created_at: 'created_at'
};
exports.Post_reactionsScalarFieldEnum = {
    reaction_id: 'reaction_id',
    post_id: 'post_id',
    user_id: 'user_id',
    reaction_type: 'reaction_type',
    created_at: 'created_at'
};
exports.PostsScalarFieldEnum = {
    post_id: 'post_id',
    user_id: 'user_id',
    title: 'title',
    content: 'content',
    media_url: 'media_url',
    media_type: 'media_type',
    category: 'category',
    created_at: 'created_at',
    updated_at: 'updated_at',
    status: 'status'
};
exports.ProgressScalarFieldEnum = {
    progress_id: 'progress_id',
    user_id: 'user_id',
    lesson_id: 'lesson_id',
    progress_percent: 'progress_percent',
    status: 'status',
    updated_at: 'updated_at'
};
exports.Pronunciation_exercisesScalarFieldEnum = {
    exercise_id: 'exercise_id',
    lesson_id: 'lesson_id',
    sentence: 'sentence',
    sample_audio_url: 'sample_audio_url',
    created_by: 'created_by',
    created_at: 'created_at'
};
exports.Quiz_baseScalarFieldEnum = {
    quiz_id: 'quiz_id',
    lesson_id: 'lesson_id',
    question: 'question',
    question_type: 'question_type',
    explanation: 'explanation',
    order_index: 'order_index',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Quiz_fill_blankScalarFieldEnum = {
    fb_id: 'fb_id',
    quiz_id: 'quiz_id',
    correct_text: 'correct_text'
};
exports.Quiz_multiple_choiceScalarFieldEnum = {
    mcq_id: 'mcq_id',
    quiz_id: 'quiz_id',
    option_text: 'option_text',
    is_correct: 'is_correct'
};
exports.Quiz_orderingScalarFieldEnum = {
    ord_id: 'ord_id',
    quiz_id: 'quiz_id',
    item_text: 'item_text',
    correct_position: 'correct_position'
};
exports.RegistrationsScalarFieldEnum = {
    reg_id: 'reg_id',
    user_id: 'user_id',
    course_id: 'course_id',
    registered_at: 'registered_at'
};
exports.Role_permissionsScalarFieldEnum = {
    role_id: 'role_id',
    perm_id: 'perm_id'
};
exports.RolesScalarFieldEnum = {
    role_id: 'role_id',
    role_name: 'role_name',
    display_name: 'display_name',
    description: 'description',
    created_at: 'created_at'
};
exports.System_settingsScalarFieldEnum = {
    setting_id: 'setting_id',
    key: 'key',
    value: 'value',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.User_rolesScalarFieldEnum = {
    user_id: 'user_id',
    role_id: 'role_id',
    assigned_at: 'assigned_at'
};
exports.User_utilitiesScalarFieldEnum = {
    user_id: 'user_id',
    utility_id: 'utility_id',
    is_enabled: 'is_enabled',
    pinned: 'pinned',
    customized_label: 'customized_label',
    updated_at: 'updated_at'
};
exports.UsersScalarFieldEnum = {
    user_id: 'user_id',
    full_name: 'full_name',
    email: 'email',
    password_hash: 'password_hash',
    language_pref: 'language_pref',
    avatar_url: 'avatar_url',
    phone: 'phone',
    address: 'address',
    date_of_birth: 'date_of_birth',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.VocabulariesScalarFieldEnum = {
    vocab_id: 'vocab_id',
    lesson_id: 'lesson_id',
    word: 'word',
    phonetic: 'phonetic',
    meaning: 'meaning',
    example: 'example',
    audio_url: 'audio_url',
    image_url: 'image_url',
    part_of_speech: 'part_of_speech',
    created_by: 'created_by',
    created_at: 'created_at'
};
exports.Writing_exercisesScalarFieldEnum = {
    exercise_id: 'exercise_id',
    lesson_id: 'lesson_id',
    title: 'title',
    prompt: 'prompt',
    sample_answer: 'sample_answer',
    word_limit: 'word_limit',
    created_by: 'created_by',
    created_at: 'created_at'
};
exports.Writing_submissionsScalarFieldEnum = {
    submission_id: 'submission_id',
    exercise_id: 'exercise_id',
    user_id: 'user_id',
    content: 'content',
    file_url: 'file_url',
    word_count: 'word_count',
    grade: 'grade',
    feedback: 'feedback',
    graded_by: 'graded_by',
    status: 'status',
    submitted_at: 'submitted_at',
    graded_at: 'graded_at'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.JsonNullValueInput = {
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map