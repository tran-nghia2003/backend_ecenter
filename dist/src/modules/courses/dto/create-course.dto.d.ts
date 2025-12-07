import { CourseLevel, CourseStatus } from '../../../common/enums/course.enum';
export declare class CreateCourseDto {
    title: string;
    description?: string;
    image_url?: string;
    price?: number;
    level?: CourseLevel;
    duration_weeks?: number;
    language?: string;
    status?: CourseStatus;
    teacher_id?: number;
}
