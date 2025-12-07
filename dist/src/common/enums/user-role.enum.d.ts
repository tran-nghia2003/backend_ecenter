export declare enum UserRole {
    SYSTEM_ADMIN = "system_admin",
    ACADEMIC_MANAGER = "academic_manager",
    SALES_STAFF = "sales_staff",
    TEACHER = "teacher",
    STUDENT = "student"
}
export declare enum UserStatus {
    ACTIVE = "active",
    INACTIVE = "inactive",
    BANNED = "banned"
}
export declare enum Permission {
    USER_MANAGE = "user.manage",
    ROLE_MANAGE = "role.manage",
    COURSE_MANAGE = "course.manage",
    COURSE_MANAGE_TEACHER = "course.manage.teacher",
    CLASS_MANAGE = "class.manage",
    CLASS_MANAGE_TEACHER = "class.manage.teacher",
    ATTENDANCE_GRADING_MANAGE = "attendance.grading.manage",
    ATTENDANCE_GRADING_TEACHER = "attendance.grading.teacher",
    LESSON_MANAGE = "lesson.manage",
    LESSON_MANAGE_TEACHER = "lesson.manage.teacher",
    CONTENT_MANAGE = "content.manage",
    CONTENT_APPROVE = "content.approve",
    CLASS_TEACH = "class.teach",
    PROGRESS_VIEW = "progress.view",
    PROGRESS_VIEW_TEACHER = "progress.view.teacher",
    PROGRESS_VIEW_SALES_STAFF = "progress.view.sales_staff",
    PROGRESS_VIEW_ALL = "progress.view_all",
    PROGRESS_VIEW_COURSE = "progress.view_course",
    PAYMENT_MANAGE = "payment.manage",
    PAYMENT_MANAGE_SALES_STAFF = "payment.manage.sales_staff",
    PAYMENT_RECORD = "payment.record",
    PAYMENT_VIEW = "payment.view",
    REGISTRATION_MANAGE_SALES_STAFF = "registration.manage.sales_staff",
    CERTIFICATE_MANAGE = "certificate.manage",
    CERTIFICATE_VIEW = "certificate.view",
    REVIEW_MANAGE = "review.manage",
    CHAT_MANAGE = "chat.manage",
    NOTIFICATION_SEND = "notification.send",
    NOTIFICATION_MANAGE = "notification.manage",
    NOTIFICATION_MANAGE_TEACHER = "notification.manage.teacher",
    MINIGAME_MANAGE = "minigame.manage",
    POSTS_MANAGE = "posts.manage",
    SYSTEM_CONFIG = "system.config",
    UTILITIES_MANAGE = "utilities.manage",
    ACTIVITY_MANAGE = "activity.manage"
}
