import { ClassGroupsService } from './class-groups.service';
import { CreateClassGroupDto } from './dto/create-class-group.dto';
import { UpdateClassGroupDto } from './dto/update-class-group.dto';
import { AddClassGroupMemberDto } from './dto/add-class-group-member.dto';
import { UpdateClassGroupMemberDto } from './dto/update-class-group-member.dto';
import { TransferClassGroupMemberDto } from './dto/transfer-class-group-member.dto';
export declare class ClassGroupsController {
    private readonly classGroupsService;
    constructor(classGroupsService: ClassGroupsService);
    list(req: any, page?: string, limit?: string, search?: string, status?: string, courseId?: string, teacherId?: string): Promise<{
        data: ({
            teacher: {
                user_id: number;
                full_name: string;
                email: string;
            };
            _count: {
                members: number;
            };
            shift: {
                created_at: Date | null;
                name: string;
                description: string | null;
                is_active: boolean | null;
                updated_at: Date | null;
                start_time: Date;
                end_time: Date;
                shift_id: number;
                days_of_week: string;
            };
            course: {
                course_id: number;
                title: string;
            };
        } & {
            created_at: Date | null;
            name: string;
            created_by: number | null;
            updated_at: Date | null;
            course_id: number;
            teacher_id: number | null;
            status: string | null;
            zalo_link: string | null;
            class_group_id: number;
            shift_id: number;
            start_date: Date;
            end_date: Date | null;
            max_students: number | null;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findOne(id: number, req: any): Promise<{
        teacher: {
            user_id: number;
            full_name: string;
            email: string;
        };
        shift: {
            created_at: Date | null;
            name: string;
            description: string | null;
            is_active: boolean | null;
            updated_at: Date | null;
            start_time: Date;
            end_time: Date;
            shift_id: number;
            days_of_week: string;
        };
        course: {
            course_id: number;
            title: string;
        };
        creator: {
            user_id: number;
            full_name: string;
            email: string;
        };
        members: ({
            user: {
                user_id: number;
                full_name: string;
                email: string;
            };
        } & {
            user_id: number;
            status: string | null;
            reg_id: number | null;
            class_group_id: number;
            member_id: number;
            joined_at: Date | null;
        })[];
    } & {
        created_at: Date | null;
        name: string;
        created_by: number | null;
        updated_at: Date | null;
        course_id: number;
        teacher_id: number | null;
        status: string | null;
        zalo_link: string | null;
        class_group_id: number;
        shift_id: number;
        start_date: Date;
        end_date: Date | null;
        max_students: number | null;
    }>;
    create(dto: CreateClassGroupDto, req: any): Promise<{
        teacher: {
            user_id: number;
            full_name: string;
            email: string;
        };
        shift: {
            created_at: Date | null;
            name: string;
            description: string | null;
            is_active: boolean | null;
            updated_at: Date | null;
            start_time: Date;
            end_time: Date;
            shift_id: number;
            days_of_week: string;
        };
        course: {
            course_id: number;
            title: string;
        };
        creator: {
            user_id: number;
            full_name: string;
            email: string;
        };
        members: ({
            user: {
                user_id: number;
                full_name: string;
                email: string;
            };
        } & {
            user_id: number;
            status: string | null;
            reg_id: number | null;
            class_group_id: number;
            member_id: number;
            joined_at: Date | null;
        })[];
    } & {
        created_at: Date | null;
        name: string;
        created_by: number | null;
        updated_at: Date | null;
        course_id: number;
        teacher_id: number | null;
        status: string | null;
        zalo_link: string | null;
        class_group_id: number;
        shift_id: number;
        start_date: Date;
        end_date: Date | null;
        max_students: number | null;
    }>;
    update(id: number, dto: UpdateClassGroupDto): Promise<{
        teacher: {
            user_id: number;
            full_name: string;
            email: string;
        };
        shift: {
            created_at: Date | null;
            name: string;
            description: string | null;
            is_active: boolean | null;
            updated_at: Date | null;
            start_time: Date;
            end_time: Date;
            shift_id: number;
            days_of_week: string;
        };
        course: {
            course_id: number;
            title: string;
        };
        creator: {
            user_id: number;
            full_name: string;
            email: string;
        };
        members: ({
            user: {
                user_id: number;
                full_name: string;
                email: string;
            };
        } & {
            user_id: number;
            status: string | null;
            reg_id: number | null;
            class_group_id: number;
            member_id: number;
            joined_at: Date | null;
        })[];
    } & {
        created_at: Date | null;
        name: string;
        created_by: number | null;
        updated_at: Date | null;
        course_id: number;
        teacher_id: number | null;
        status: string | null;
        zalo_link: string | null;
        class_group_id: number;
        shift_id: number;
        start_date: Date;
        end_date: Date | null;
        max_students: number | null;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
    listMembers(id: number, req: any, search?: string): Promise<({
        user: {
            user_id: number;
            full_name: string;
            email: string;
        };
    } & {
        user_id: number;
        status: string | null;
        reg_id: number | null;
        class_group_id: number;
        member_id: number;
        joined_at: Date | null;
    })[]>;
    addMember(id: number, dto: AddClassGroupMemberDto): Promise<{
        user: {
            user_id: number;
            full_name: string;
            email: string;
        };
    } & {
        user_id: number;
        status: string | null;
        reg_id: number | null;
        class_group_id: number;
        member_id: number;
        joined_at: Date | null;
    }>;
    updateMember(memberId: number, dto: UpdateClassGroupMemberDto): Promise<{
        user: {
            user_id: number;
            full_name: string;
            email: string;
        };
    } & {
        user_id: number;
        status: string | null;
        reg_id: number | null;
        class_group_id: number;
        member_id: number;
        joined_at: Date | null;
    }>;
    removeMember(memberId: number): Promise<{
        message: string;
    }>;
    transferMember(id: number, dto: TransferClassGroupMemberDto, req: any): Promise<{
        message: string;
    }>;
    listGroupClasses(id: number, req: any): Promise<{
        created_at: Date | null;
        description: string | null;
        created_by: number | null;
        updated_at: Date | null;
        class_id: number;
        teacher_id: number | null;
        title: string;
        class_type: string;
        start_time: Date;
        end_time: Date | null;
        meeting_link: string | null;
        recording_url: string | null;
        location: string | null;
        exam_type: string | null;
        max_score: import("@prisma/client/runtime/library").Decimal | null;
        status: string | null;
        class_group_id: number;
        attendance_start_time: Date | null;
        attendance_end_time: Date | null;
    }[]>;
}
