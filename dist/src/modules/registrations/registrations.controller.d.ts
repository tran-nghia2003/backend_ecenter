import { RegistrationsService } from './registrations.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
export declare class RegistrationsController {
    private readonly registrationsService;
    constructor(registrationsService: RegistrationsService);
    create(createRegistrationDto: CreateRegistrationDto, req: any): Promise<{
        courses: {
            course_id: number;
            title: string;
            price: import("@prisma/client/runtime/library").Decimal;
            level: string;
        };
        payments: {
            payment_id: number;
            amount: import("@prisma/client/runtime/library").Decimal;
            payment_status: string;
        };
        users: {
            user_id: number;
            full_name: string;
            email: string;
            phone: string;
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
    }>;
    findAll(courseId?: number, registrationStatus?: string, page?: number, limit?: number, search?: string): Promise<{
        data: ({
            courses: {
                course_id: number;
                title: string;
                price: import("@prisma/client/runtime/library").Decimal;
                level: string;
            };
            payments: {
                payment_id: number;
                amount: import("@prisma/client/runtime/library").Decimal;
                payment_method: string;
                payment_status: string;
            };
            users: {
                user_id: number;
                full_name: string;
                email: string;
                phone: string;
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
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findOne(id: number): Promise<{
        courses: {
            description: string;
            course_id: number;
            title: string;
            price: import("@prisma/client/runtime/library").Decimal;
            level: string;
            duration_weeks: number;
        };
        payments: {
            payment_id: number;
            amount: import("@prisma/client/runtime/library").Decimal;
            currency: string;
            payment_method: string;
            payment_status: string;
            transaction_id: string;
            paid_at: Date;
        };
        users: {
            user_id: number;
            full_name: string;
            email: string;
            phone: string;
            address: string;
            date_of_birth: Date;
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
    }>;
    update(id: number, updateRegistrationDto: UpdateRegistrationDto): Promise<{
        courses: {
            course_id: number;
            title: string;
            price: import("@prisma/client/runtime/library").Decimal;
            level: string;
        };
        payments: {
            payment_id: number;
            amount: import("@prisma/client/runtime/library").Decimal;
            payment_status: string;
        };
        users: {
            user_id: number;
            full_name: string;
            email: string;
            phone: string;
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
    }>;
    updateStatus(id: number, status: string): Promise<{
        courses: {
            course_id: number;
            title: string;
            level: string;
        };
        users: {
            user_id: number;
            full_name: string;
            email: string;
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
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
