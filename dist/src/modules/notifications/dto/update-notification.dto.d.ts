export declare class UpdateNotificationDto {
    title?: string;
    message?: string;
    course_id?: number;
    class_group_id?: number;
    target_audience?: 'all' | 'course' | 'class_group' | 'user';
}
