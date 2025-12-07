declare const ALLOWED_STATUSES: readonly ["planning", "open", "ongoing", "finished", "cancelled"];
export type ClassGroupStatus = (typeof ALLOWED_STATUSES)[number];
export declare class CreateClassGroupDto {
    course_id: number;
    shift_id: number;
    name: string;
    teacher_id?: number;
    start_date: string;
    end_date?: string | null;
    max_students?: number;
    zalo_link?: string | null;
    status?: ClassGroupStatus;
}
export {};
