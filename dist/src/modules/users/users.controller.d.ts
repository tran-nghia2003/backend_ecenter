import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserStatus } from '../../common/enums/user-role.enum';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto, req: any): Promise<{
        user_roles: ({
            roles: {
                created_at: Date | null;
                description: string | null;
                role_id: number;
                role_name: string;
                display_name: string | null;
            };
        } & {
            user_id: number;
            assigned_at: Date | null;
            role_id: number;
        })[];
    } & {
        user_id: number;
        created_at: Date | null;
        updated_at: Date | null;
        status: string | null;
        full_name: string;
        email: string;
        password_hash: string;
        language_pref: string | null;
        avatar_url: string | null;
        phone: string | null;
        address: string | null;
        date_of_birth: Date | null;
    }>;
    findAll(page?: number, limit?: number, search?: string, role?: string): Promise<{
        data: ({
            registrations: ({
                courses: {
                    course_id: number;
                    title: string;
                    level: string;
                };
            } & {
                user_id: number;
                course_id: number;
                payment_id: number | null;
                reg_id: number;
                registered_at: Date | null;
                attempt_no: number;
                registration_status: string | null;
                activated_at: Date | null;
                completed_at: Date | null;
            })[];
            user_roles: ({
                roles: {
                    created_at: Date | null;
                    description: string | null;
                    role_id: number;
                    role_name: string;
                    display_name: string | null;
                };
            } & {
                user_id: number;
                assigned_at: Date | null;
                role_id: number;
            })[];
        } & {
            user_id: number;
            created_at: Date | null;
            updated_at: Date | null;
            status: string | null;
            full_name: string;
            email: string;
            password_hash: string;
            language_pref: string | null;
            avatar_url: string | null;
            phone: string | null;
            address: string | null;
            date_of_birth: Date | null;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findTeachers(page?: number, limit?: number, search?: string): Promise<{
        data: ({
            registrations: ({
                courses: {
                    course_id: number;
                    title: string;
                    level: string;
                };
            } & {
                user_id: number;
                course_id: number;
                payment_id: number | null;
                reg_id: number;
                registered_at: Date | null;
                attempt_no: number;
                registration_status: string | null;
                activated_at: Date | null;
                completed_at: Date | null;
            })[];
            user_roles: ({
                roles: {
                    created_at: Date | null;
                    description: string | null;
                    role_id: number;
                    role_name: string;
                    display_name: string | null;
                };
            } & {
                user_id: number;
                assigned_at: Date | null;
                role_id: number;
            })[];
        } & {
            user_id: number;
            created_at: Date | null;
            updated_at: Date | null;
            status: string | null;
            full_name: string;
            email: string;
            password_hash: string;
            language_pref: string | null;
            avatar_url: string | null;
            phone: string | null;
            address: string | null;
            date_of_birth: Date | null;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findAllStudents(page?: number, limit?: number, search?: string): Promise<{
        data: ({
            registrations: ({
                courses: {
                    course_id: number;
                    title: string;
                    level: string;
                };
            } & {
                user_id: number;
                course_id: number;
                payment_id: number | null;
                reg_id: number;
                registered_at: Date | null;
                attempt_no: number;
                registration_status: string | null;
                activated_at: Date | null;
                completed_at: Date | null;
            })[];
            user_roles: ({
                roles: {
                    created_at: Date | null;
                    description: string | null;
                    role_id: number;
                    role_name: string;
                    display_name: string | null;
                };
            } & {
                user_id: number;
                assigned_at: Date | null;
                role_id: number;
            })[];
        } & {
            user_id: number;
            created_at: Date | null;
            updated_at: Date | null;
            status: string | null;
            full_name: string;
            email: string;
            password_hash: string;
            language_pref: string | null;
            avatar_url: string | null;
            phone: string | null;
            address: string | null;
            date_of_birth: Date | null;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findStudentsByExclusion(page?: number, limit?: number, search?: string): Promise<{
        data: ({
            registrations: ({
                courses: {
                    course_id: number;
                    title: string;
                    level: string;
                };
            } & {
                user_id: number;
                course_id: number;
                payment_id: number | null;
                reg_id: number;
                registered_at: Date | null;
                attempt_no: number;
                registration_status: string | null;
                activated_at: Date | null;
                completed_at: Date | null;
            })[];
            user_roles: ({
                roles: {
                    created_at: Date | null;
                    description: string | null;
                    role_id: number;
                    role_name: string;
                    display_name: string | null;
                };
            } & {
                user_id: number;
                assigned_at: Date | null;
                role_id: number;
            })[];
        } & {
            user_id: number;
            created_at: Date | null;
            updated_at: Date | null;
            status: string | null;
            full_name: string;
            email: string;
            password_hash: string;
            language_pref: string | null;
            avatar_url: string | null;
            phone: string | null;
            address: string | null;
            date_of_birth: Date | null;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findStudentsByRegistration(page?: number, limit?: number, search?: string): Promise<{
        data: ({
            registrations: ({
                courses: {
                    course_id: number;
                    title: string;
                    level: string;
                };
            } & {
                user_id: number;
                course_id: number;
                payment_id: number | null;
                reg_id: number;
                registered_at: Date | null;
                attempt_no: number;
                registration_status: string | null;
                activated_at: Date | null;
                completed_at: Date | null;
            })[];
            user_roles: ({
                roles: {
                    created_at: Date | null;
                    description: string | null;
                    role_id: number;
                    role_name: string;
                    display_name: string | null;
                };
            } & {
                user_id: number;
                assigned_at: Date | null;
                role_id: number;
            })[];
        } & {
            user_id: number;
            created_at: Date | null;
            updated_at: Date | null;
            status: string | null;
            full_name: string;
            email: string;
            password_hash: string;
            language_pref: string | null;
            avatar_url: string | null;
            phone: string | null;
            address: string | null;
            date_of_birth: Date | null;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findStudentsByProgress(page?: number, limit?: number, search?: string): Promise<{
        data: ({
            progress: ({
                lessons: {
                    course_id: number;
                    title: string;
                    lesson_id: number;
                };
            } & {
                user_id: number | null;
                updated_at: Date | null;
                course_id: number | null;
                status: string | null;
                lesson_id: number | null;
                progress_percent: import("@prisma/client/runtime/library").Decimal | null;
                progress_id: number;
                reg_id: number | null;
            })[];
            registrations: ({
                courses: {
                    course_id: number;
                    title: string;
                    level: string;
                };
            } & {
                user_id: number;
                course_id: number;
                payment_id: number | null;
                reg_id: number;
                registered_at: Date | null;
                attempt_no: number;
                registration_status: string | null;
                activated_at: Date | null;
                completed_at: Date | null;
            })[];
            user_roles: ({
                roles: {
                    created_at: Date | null;
                    description: string | null;
                    role_id: number;
                    role_name: string;
                    display_name: string | null;
                };
            } & {
                user_id: number;
                assigned_at: Date | null;
                role_id: number;
            })[];
        } & {
            user_id: number;
            created_at: Date | null;
            updated_at: Date | null;
            status: string | null;
            full_name: string;
            email: string;
            password_hash: string;
            language_pref: string | null;
            avatar_url: string | null;
            phone: string | null;
            address: string | null;
            date_of_birth: Date | null;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findOne(id: number): Promise<{
        registrations: ({
            courses: {
                created_at: Date | null;
                description: string | null;
                created_by: number | null;
                updated_at: Date | null;
                course_id: number;
                teacher_id: number | null;
                title: string;
                status: string | null;
                image_url: string | null;
                price: import("@prisma/client/runtime/library").Decimal | null;
                level: string | null;
                duration_weeks: number | null;
                language: string | null;
            };
        } & {
            user_id: number;
            course_id: number;
            payment_id: number | null;
            reg_id: number;
            registered_at: Date | null;
            attempt_no: number;
            registration_status: string | null;
            activated_at: Date | null;
            completed_at: Date | null;
        })[];
        user_roles: ({
            roles: {
                created_at: Date | null;
                description: string | null;
                role_id: number;
                role_name: string;
                display_name: string | null;
            };
        } & {
            user_id: number;
            assigned_at: Date | null;
            role_id: number;
        })[];
    } & {
        user_id: number;
        created_at: Date | null;
        updated_at: Date | null;
        status: string | null;
        full_name: string;
        email: string;
        password_hash: string;
        language_pref: string | null;
        avatar_url: string | null;
        phone: string | null;
        address: string | null;
        date_of_birth: Date | null;
    }>;
    update(id: number, updateUserDto: UpdateUserDto, req: any): Promise<{
        user_roles: ({
            roles: {
                created_at: Date | null;
                description: string | null;
                role_id: number;
                role_name: string;
                display_name: string | null;
            };
        } & {
            user_id: number;
            assigned_at: Date | null;
            role_id: number;
        })[];
    } & {
        user_id: number;
        created_at: Date | null;
        updated_at: Date | null;
        status: string | null;
        full_name: string;
        email: string;
        password_hash: string;
        language_pref: string | null;
        avatar_url: string | null;
        phone: string | null;
        address: string | null;
        date_of_birth: Date | null;
    }>;
    remove(id: number, req: any): Promise<{
        message: string;
    }>;
    updateStatus(id: number, status: UserStatus, req: any): Promise<{
        user_id: number;
        created_at: Date | null;
        updated_at: Date | null;
        status: string | null;
        full_name: string;
        email: string;
        password_hash: string;
        language_pref: string | null;
        avatar_url: string | null;
        phone: string | null;
        address: string | null;
        date_of_birth: Date | null;
    }>;
    assignRole(userId: number, roleId: number, req: any): Promise<{
        roles: {
            role_id: number;
            role_name: string;
            display_name: string;
        };
        users: {
            user_id: number;
            full_name: string;
            email: string;
        };
    } & {
        user_id: number;
        assigned_at: Date | null;
        role_id: number;
    }>;
    removeRole(userId: number, roleId: number, req: any): Promise<{
        message: string;
    }>;
    uploadAvatar(userId: number, file: Express.Multer.File, req: any): Promise<{
        user_roles: ({
            roles: {
                created_at: Date | null;
                description: string | null;
                role_id: number;
                role_name: string;
                display_name: string | null;
            };
        } & {
            user_id: number;
            assigned_at: Date | null;
            role_id: number;
        })[];
    } & {
        user_id: number;
        created_at: Date | null;
        updated_at: Date | null;
        status: string | null;
        full_name: string;
        email: string;
        password_hash: string;
        language_pref: string | null;
        avatar_url: string | null;
        phone: string | null;
        address: string | null;
        date_of_birth: Date | null;
    }>;
}
