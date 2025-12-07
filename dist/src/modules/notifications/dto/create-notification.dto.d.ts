export declare class CreateNotificationDto {
    title: string;
    message: string;
    sender_id?: number;
    course_id?: number;
    class_group_id?: number;
    target_audience?: 'all' | 'course' | 'class_group' | 'user';
    user_ids?: number[];
}
