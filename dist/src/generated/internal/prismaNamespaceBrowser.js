"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App_utilitiesScalarFieldEnum = exports.System_settingsScalarFieldEnum = exports.LeaderboardScalarFieldEnum = exports.MinigamesScalarFieldEnum = exports.Notification_recipientsScalarFieldEnum = exports.NotificationsScalarFieldEnum = exports.Post_reactionsScalarFieldEnum = exports.PostsScalarFieldEnum = exports.Comment_reactionsScalarFieldEnum = exports.CommentsScalarFieldEnum = exports.ChatsScalarFieldEnum = exports.CertificatesScalarFieldEnum = exports.Exam_scoresScalarFieldEnum = exports.Class_group_membersScalarFieldEnum = exports.Class_groupsScalarFieldEnum = exports.Study_shiftsScalarFieldEnum = exports.Class_participantsScalarFieldEnum = exports.ClassesScalarFieldEnum = exports.Quiz_attemptsScalarFieldEnum = exports.Quiz_attempt_setsScalarFieldEnum = exports.Listening_answersScalarFieldEnum = exports.Listening_attempt_setsScalarFieldEnum = exports.Lesson_progress_detailsScalarFieldEnum = exports.ProgressScalarFieldEnum = exports.PaymentsScalarFieldEnum = exports.Writing_submissionsScalarFieldEnum = exports.Writing_exercisesScalarFieldEnum = exports.QuizzesScalarFieldEnum = exports.Listening_questionsScalarFieldEnum = exports.Listening_exercisesScalarFieldEnum = exports.VocabulariesScalarFieldEnum = exports.Lesson_mediaScalarFieldEnum = exports.LessonsScalarFieldEnum = exports.Course_teachersScalarFieldEnum = exports.Course_reviewsScalarFieldEnum = exports.Course_prerequisitesScalarFieldEnum = exports.CoursesScalarFieldEnum = exports.Role_permissionsScalarFieldEnum = exports.PermissionsScalarFieldEnum = exports.User_rolesScalarFieldEnum = exports.RolesScalarFieldEnum = exports.Push_tokensScalarFieldEnum = exports.UsersScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.NullableJsonNullValueInput = exports.JsonNullValueInput = exports.SortOrder = exports.RegistrationsScalarFieldEnum = exports.FilesScalarFieldEnum = exports.Activity_logsScalarFieldEnum = exports.User_utilitiesScalarFieldEnum = void 0;
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
    users: 'users',
    push_tokens: 'push_tokens',
    roles: 'roles',
    user_roles: 'user_roles',
    permissions: 'permissions',
    role_permissions: 'role_permissions',
    courses: 'courses',
    course_prerequisites: 'course_prerequisites',
    course_reviews: 'course_reviews',
    course_teachers: 'course_teachers',
    lessons: 'lessons',
    lesson_media: 'lesson_media',
    vocabularies: 'vocabularies',
    listening_exercises: 'listening_exercises',
    listening_questions: 'listening_questions',
    quizzes: 'quizzes',
    writing_exercises: 'writing_exercises',
    writing_submissions: 'writing_submissions',
    payments: 'payments',
    progress: 'progress',
    lesson_progress_details: 'lesson_progress_details',
    listening_attempt_sets: 'listening_attempt_sets',
    listening_answers: 'listening_answers',
    quiz_attempt_sets: 'quiz_attempt_sets',
    quiz_attempts: 'quiz_attempts',
    classes: 'classes',
    class_participants: 'class_participants',
    study_shifts: 'study_shifts',
    class_groups: 'class_groups',
    class_group_members: 'class_group_members',
    exam_scores: 'exam_scores',
    certificates: 'certificates',
    chats: 'chats',
    comments: 'comments',
    comment_reactions: 'comment_reactions',
    posts: 'posts',
    post_reactions: 'post_reactions',
    notifications: 'notifications',
    notification_recipients: 'notification_recipients',
    minigames: 'minigames',
    leaderboard: 'leaderboard',
    system_settings: 'system_settings',
    app_utilities: 'app_utilities',
    user_utilities: 'user_utilities',
    activity_logs: 'activity_logs',
    files: 'files',
    registrations: 'registrations'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
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
exports.Push_tokensScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    device_token: 'device_token',
    platform: 'platform',
    is_active: 'is_active',
    created_at: 'created_at'
};
exports.RolesScalarFieldEnum = {
    role_id: 'role_id',
    role_name: 'role_name',
    display_name: 'display_name',
    description: 'description',
    created_at: 'created_at'
};
exports.User_rolesScalarFieldEnum = {
    user_id: 'user_id',
    role_id: 'role_id',
    assigned_at: 'assigned_at'
};
exports.PermissionsScalarFieldEnum = {
    perm_id: 'perm_id',
    perm_key: 'perm_key',
    module: 'module',
    description: 'description',
    created_at: 'created_at'
};
exports.Role_permissionsScalarFieldEnum = {
    role_id: 'role_id',
    perm_id: 'perm_id'
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
    status: 'status',
    teacher_id: 'teacher_id',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_at: 'updated_at'
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
    is_visible: 'is_visible',
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
exports.LessonsScalarFieldEnum = {
    lesson_id: 'lesson_id',
    course_id: 'course_id',
    title: 'title',
    content: 'content',
    order_index: 'order_index',
    approval_status: 'approval_status',
    approved_by: 'approved_by',
    approved_at: 'approved_at',
    review_note: 'review_note',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Lesson_mediaScalarFieldEnum = {
    media_id: 'media_id',
    lesson_id: 'lesson_id',
    media_type: 'media_type',
    media_url: 'media_url',
    duration_seconds: 'duration_seconds',
    total_pages: 'total_pages',
    created_by: 'created_by',
    created_at: 'created_at'
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
    question_type: 'question_type',
    question: 'question',
    options: 'options',
    correct_answer: 'correct_answer',
    order_index: 'order_index',
    created_at: 'created_at'
};
exports.QuizzesScalarFieldEnum = {
    quiz_id: 'quiz_id',
    lesson_id: 'lesson_id',
    question: 'question',
    question_type: 'question_type',
    explanation: 'explanation',
    options: 'options',
    correct_answer: 'correct_answer',
    order_index: 'order_index',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Writing_exercisesScalarFieldEnum = {
    exercise_id: 'exercise_id',
    lesson_id: 'lesson_id',
    title: 'title',
    prompt: 'prompt',
    sample_answer: 'sample_answer',
    word_limit: 'word_limit',
    order_index: 'order_index',
    created_by: 'created_by',
    created_at: 'created_at'
};
exports.Writing_submissionsScalarFieldEnum = {
    submission_id: 'submission_id',
    exercise_id: 'exercise_id',
    user_id: 'user_id',
    reg_id: 'reg_id',
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
exports.PaymentsScalarFieldEnum = {
    payment_id: 'payment_id',
    user_id: 'user_id',
    course_id: 'course_id',
    amount: 'amount',
    currency: 'currency',
    payment_method: 'payment_method',
    payment_status: 'payment_status',
    transaction_id: 'transaction_id',
    gateway_transaction_code: 'gateway_transaction_code',
    order_code: 'order_code',
    bank_code: 'bank_code',
    card_type: 'card_type',
    payment_url: 'payment_url',
    payment_note: 'payment_note',
    created_by: 'created_by',
    created_at: 'created_at',
    paid_at: 'paid_at',
    refund_at: 'refund_at',
    updated_at: 'updated_at'
};
exports.ProgressScalarFieldEnum = {
    progress_id: 'progress_id',
    user_id: 'user_id',
    lesson_id: 'lesson_id',
    reg_id: 'reg_id',
    progress_percent: 'progress_percent',
    status: 'status',
    updated_at: 'updated_at',
    course_id: 'course_id'
};
exports.Lesson_progress_detailsScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    lesson_id: 'lesson_id',
    reg_id: 'reg_id',
    content_type: 'content_type',
    content_id: 'content_id',
    progress_percent: 'progress_percent',
    status: 'status',
    updated_at: 'updated_at'
};
exports.Listening_attempt_setsScalarFieldEnum = {
    attempt_set_id: 'attempt_set_id',
    user_id: 'user_id',
    exercise_id: 'exercise_id',
    reg_id: 'reg_id',
    correct_count: 'correct_count',
    total_questions: 'total_questions',
    accuracy_percent: 'accuracy_percent',
    created_at: 'created_at'
};
exports.Listening_answersScalarFieldEnum = {
    answer_id: 'answer_id',
    user_id: 'user_id',
    question_id: 'question_id',
    attempt_set_id: 'attempt_set_id',
    user_answer: 'user_answer',
    is_correct: 'is_correct',
    created_at: 'created_at'
};
exports.Quiz_attempt_setsScalarFieldEnum = {
    attempt_set_id: 'attempt_set_id',
    user_id: 'user_id',
    lesson_id: 'lesson_id',
    reg_id: 'reg_id',
    average_score: 'average_score',
    total_questions: 'total_questions',
    correct_count: 'correct_count',
    created_at: 'created_at'
};
exports.Quiz_attemptsScalarFieldEnum = {
    attempt_id: 'attempt_id',
    user_id: 'user_id',
    quiz_id: 'quiz_id',
    attempt_set_id: 'attempt_set_id',
    is_correct: 'is_correct',
    user_answer: 'user_answer',
    score_percent: 'score_percent',
    created_at: 'created_at'
};
exports.ClassesScalarFieldEnum = {
    class_id: 'class_id',
    class_group_id: 'class_group_id',
    teacher_id: 'teacher_id',
    title: 'title',
    description: 'description',
    class_type: 'class_type',
    start_time: 'start_time',
    end_time: 'end_time',
    attendance_start_time: 'attendance_start_time',
    attendance_end_time: 'attendance_end_time',
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
exports.Class_participantsScalarFieldEnum = {
    participant_id: 'participant_id',
    class_id: 'class_id',
    user_id: 'user_id',
    attendance_status: 'attendance_status',
    feedback: 'feedback',
    created_at: 'created_at'
};
exports.Study_shiftsScalarFieldEnum = {
    shift_id: 'shift_id',
    name: 'name',
    days_of_week: 'days_of_week',
    start_time: 'start_time',
    end_time: 'end_time',
    description: 'description',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Class_groupsScalarFieldEnum = {
    class_group_id: 'class_group_id',
    course_id: 'course_id',
    shift_id: 'shift_id',
    name: 'name',
    teacher_id: 'teacher_id',
    start_date: 'start_date',
    end_date: 'end_date',
    max_students: 'max_students',
    zalo_link: 'zalo_link',
    status: 'status',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Class_group_membersScalarFieldEnum = {
    member_id: 'member_id',
    class_group_id: 'class_group_id',
    user_id: 'user_id',
    reg_id: 'reg_id',
    joined_at: 'joined_at',
    status: 'status'
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
    read_by_student: 'read_by_student',
    read_by_teacher: 'read_by_teacher',
    read_at: 'read_at',
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
exports.Comment_reactionsScalarFieldEnum = {
    reaction_id: 'reaction_id',
    comment_id: 'comment_id',
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
exports.Post_reactionsScalarFieldEnum = {
    reaction_id: 'reaction_id',
    post_id: 'post_id',
    user_id: 'user_id',
    reaction_type: 'reaction_type',
    created_at: 'created_at'
};
exports.NotificationsScalarFieldEnum = {
    notification_id: 'notification_id',
    sender_id: 'sender_id',
    title: 'title',
    message: 'message',
    course_id: 'course_id',
    class_group_id: 'class_group_id',
    target_audience: 'target_audience',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Notification_recipientsScalarFieldEnum = {
    recipient_id: 'recipient_id',
    notification_id: 'notification_id',
    user_id: 'user_id',
    is_read: 'is_read',
    read_at: 'read_at',
    delivered_at: 'delivered_at'
};
exports.MinigamesScalarFieldEnum = {
    game_id: 'game_id',
    name: 'name',
    description: 'description',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.LeaderboardScalarFieldEnum = {
    score_id: 'score_id',
    user_id: 'user_id',
    game_id: 'game_id',
    score: 'score',
    achieved_at: 'achieved_at'
};
exports.System_settingsScalarFieldEnum = {
    setting_id: 'setting_id',
    key: 'key',
    value: 'value',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_at: 'updated_at'
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
exports.User_utilitiesScalarFieldEnum = {
    user_id: 'user_id',
    utility_id: 'utility_id',
    is_enabled: 'is_enabled',
    pinned: 'pinned',
    customized_label: 'customized_label',
    updated_at: 'updated_at'
};
exports.Activity_logsScalarFieldEnum = {
    log_id: 'log_id',
    user_id: 'user_id',
    action: 'action',
    details: 'details',
    created_at: 'created_at'
};
exports.FilesScalarFieldEnum = {
    file_id: 'file_id',
    filename: 'filename',
    original_name: 'original_name',
    file_path: 'file_path',
    file_size: 'file_size',
    mime_type: 'mime_type',
    uploaded_by: 'uploaded_by',
    created_at: 'created_at'
};
exports.RegistrationsScalarFieldEnum = {
    reg_id: 'reg_id',
    user_id: 'user_id',
    course_id: 'course_id',
    payment_id: 'payment_id',
    attempt_no: 'attempt_no',
    registration_status: 'registration_status',
    registered_at: 'registered_at',
    activated_at: 'activated_at',
    completed_at: 'completed_at'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.JsonNullValueInput = {
    JsonNull: exports.JsonNull
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map