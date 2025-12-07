import { StudyShiftsService } from './study-shifts.service';
import { CreateStudyShiftDto } from './dto/create-study-shift.dto';
import { UpdateStudyShiftDto } from './dto/update-study-shift.dto';
export declare class StudyShiftsController {
    private readonly studyShiftsService;
    constructor(studyShiftsService: StudyShiftsService);
    findAll(includeInactive?: boolean, search?: string, day?: string, active?: string): Promise<{
        total_class_groups: number;
        _count: {
            class_groups: number;
        };
        created_at: Date | null;
        name: string;
        description: string | null;
        is_active: boolean | null;
        updated_at: Date | null;
        start_time: Date & string;
        end_time: Date & string;
        shift_id: number;
        days_of_week: string;
    }[]>;
    findOne(id: number): Promise<{
        created_at: Date | null;
        name: string;
        description: string | null;
        is_active: boolean | null;
        updated_at: Date | null;
        start_time: Date;
        end_time: Date;
        shift_id: number;
        days_of_week: string;
    } & {
        start_time: string;
        end_time: string;
    }>;
    create(dto: CreateStudyShiftDto): Promise<{
        created_at: Date | null;
        name: string;
        description: string | null;
        is_active: boolean | null;
        updated_at: Date | null;
        start_time: Date;
        end_time: Date;
        shift_id: number;
        days_of_week: string;
    } & {
        start_time: string;
        end_time: string;
    }>;
    update(id: number, dto: UpdateStudyShiftDto): Promise<{
        created_at: Date | null;
        name: string;
        description: string | null;
        is_active: boolean | null;
        updated_at: Date | null;
        start_time: Date;
        end_time: Date;
        shift_id: number;
        days_of_week: string;
    } & {
        start_time: string;
        end_time: string;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
