import { ClassType, ExamType } from '../../../common/enums/course.enum';
export declare class CreateClassDto {
    class_group_id: number;
    teacher_id?: number;
    title: string;
    description?: string;
    class_type: ClassType;
    start_time: string;
    end_time?: string;
    attendance_start_time?: string;
    attendance_end_time?: string;
    meeting_link?: string;
    recording_url?: string;
    location?: string;
    exam_type?: ExamType;
    max_score?: number;
}
