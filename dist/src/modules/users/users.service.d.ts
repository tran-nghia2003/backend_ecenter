import { PrismaService } from '../../prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CloudinaryService } from '../files/cloudinary.service';
export declare class UsersService {
    private readonly prisma;
    private readonly cloudinaryService;
    constructor(prisma: PrismaService, cloudinaryService: CloudinaryService);
    private sanitizePayload;
    private normalizeValue;
    private areValuesEqual;
    private diffFields;
    private logActivity;
    create(createUserDto: CreateUserDto, performedBy?: number): Promise<{
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
    findById(id: number): Promise<{
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
    findByEmail(email: string): Promise<{
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
    findByIdWithRoles(id: number): Promise<{
        user_roles: ({
            roles: {
                role_permissions: ({
                    permissions: {
                        created_at: Date | null;
                        description: string | null;
                        perm_id: number;
                        perm_key: string;
                        module: string | null;
                    };
                } & {
                    perm_id: number;
                    role_id: number;
                })[];
            } & {
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
    findAll(page?: number | string, limit?: number | string, search?: string): Promise<{
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
    findByRole(roleName: string, page?: number | string, limit?: number | string, search?: string): Promise<{
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
    findOne(id: number): Promise<{
        certificates: {
            user_id: number | null;
            created_by: number | null;
            cert_id: number;
            course_id: number | null;
            issue_date: Date | null;
            cert_url: string | null;
        }[];
        course_reviews: {
            user_id: number | null;
            created_at: Date | null;
            updated_at: Date | null;
            course_id: number | null;
            review_id: number;
            rating: number | null;
            comment: string | null;
            is_visible: boolean | null;
        }[];
        payments: {
            user_id: number;
            created_at: Date | null;
            created_by: number | null;
            updated_at: Date | null;
            course_id: number | null;
            payment_id: number;
            amount: import("@prisma/client/runtime/library").Decimal;
            currency: string | null;
            payment_method: string;
            payment_status: string | null;
            transaction_id: string | null;
            payment_note: string | null;
            paid_at: Date | null;
            gateway_transaction_code: string | null;
            order_code: string | null;
            bank_code: string | null;
            card_type: string | null;
            payment_url: string | null;
            refund_at: Date | null;
        }[];
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
                role_permissions: ({
                    permissions: {
                        created_at: Date | null;
                        description: string | null;
                        perm_id: number;
                        perm_key: string;
                        module: string | null;
                    };
                } & {
                    perm_id: number;
                    role_id: number;
                })[];
            } & {
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
    update(id: number, updateUserDto: UpdateUserDto, performedBy?: number): Promise<{
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
    remove(id: number, performedBy?: number): Promise<{
        message: string;
    }>;
    assignRole(userId: number, roleId: number, performedBy?: number): Promise<{
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
    removeRole(userId: number, roleId: number, performedBy?: number): Promise<{
        message: string;
    }>;
    getUserRoles(userId: number): Promise<({
        roles: {
            role_permissions: ({
                permissions: {
                    created_at: Date | null;
                    description: string | null;
                    perm_id: number;
                    perm_key: string;
                    module: string | null;
                };
            } & {
                perm_id: number;
                role_id: number;
            })[];
        } & {
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
    })[]>;
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
    getUserStats(): Promise<{
        totalUsers: number;
        activeUsers: number;
        students: number;
        teachers: number;
        admins: number;
        recentRegistrations: number;
    }>;
    updateUserStatus(userId: number, status: 'active' | 'inactive' | 'banned'): Promise<{
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
    updateStatus(userId: number, status: 'active' | 'inactive' | 'banned', performedBy?: number): Promise<{
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
    uploadAvatar(userId: number, file: Express.Multer.File): Promise<{
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
    resetPassword(userId: number, newPasswordHash: string): Promise<{
        message: string;
    }>;
}
