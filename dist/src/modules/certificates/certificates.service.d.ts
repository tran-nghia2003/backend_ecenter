import { PrismaService } from '../../prisma.service';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
export declare class CertificatesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCertificateDto: CreateCertificateDto, createdBy: number): Promise<{
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
        user_id: number | null;
        created_by: number | null;
        cert_id: number;
        course_id: number | null;
        issue_date: Date | null;
        cert_url: string | null;
    }>;
    findAll(page?: number, limit?: number, search?: string, courseId?: number): Promise<{
        data: ({
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
            user_id: number | null;
            created_by: number | null;
            cert_id: number;
            course_id: number | null;
            issue_date: Date | null;
            cert_url: string | null;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getCompletedStudents(page?: number, limit?: number, search?: string, courseId?: number): Promise<{
        data: {
            registration: {
                courses: {
                    course_id: number;
                    title: string;
                    level: string;
                    duration_weeks: number;
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
            };
            hasCertificate: boolean;
            certificate: {
                user_id: number | null;
                created_by: number | null;
                cert_id: number;
                course_id: number | null;
                issue_date: Date | null;
                cert_url: string | null;
            };
        }[];
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
            level: string;
            duration_weeks: number;
        };
        users: {
            user_id: number;
            full_name: string;
            email: string;
            avatar_url: string;
            phone: string;
        };
    } & {
        user_id: number | null;
        created_by: number | null;
        cert_id: number;
        course_id: number | null;
        issue_date: Date | null;
        cert_url: string | null;
    }>;
    update(id: number, updateCertificateDto: UpdateCertificateDto): Promise<{
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
        user_id: number | null;
        created_by: number | null;
        cert_id: number;
        course_id: number | null;
        issue_date: Date | null;
        cert_url: string | null;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
    getUserCertificates(userId: number, page?: number, limit?: number): Promise<{
        data: ({
            courses: {
                description: string;
                course_id: number;
                title: string;
                level: string;
            };
        } & {
            user_id: number | null;
            created_by: number | null;
            cert_id: number;
            course_id: number | null;
            issue_date: Date | null;
            cert_url: string | null;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getCourseCertificates(courseId: number, page?: number, limit?: number): Promise<{
        data: ({
            users: {
                user_id: number;
                full_name: string;
                email: string;
            };
        } & {
            user_id: number | null;
            created_by: number | null;
            cert_id: number;
            course_id: number | null;
            issue_date: Date | null;
            cert_url: string | null;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getCertificateStats(): Promise<{
        totalCertificates: number;
        certificatesByCourse: (import("../../generated/internal/prismaNamespace").PickEnumerable<import("../../generated/models").CertificatesGroupByOutputType, "course_id"[]> & {
            _count: {
                cert_id: number;
            };
        })[];
        certificatesByMonth: (import("../../generated/internal/prismaNamespace").PickEnumerable<import("../../generated/models").CertificatesGroupByOutputType, "issue_date"[]> & {
            _count: {
                cert_id: number;
            };
        })[];
        recentCertificates: number;
    }>;
    checkCertificateEligibility(userId: number, courseId: number): Promise<{
        eligible: boolean;
        reason: string;
        completionRate?: undefined;
        completedLessons?: undefined;
        totalLessons?: undefined;
    } | {
        eligible: boolean;
        reason: string;
        completionRate: number;
        completedLessons: number;
        totalLessons: number;
    } | {
        eligible: boolean;
        completionRate: number;
        completedLessons: number;
        totalLessons: number;
        reason?: undefined;
    }>;
    generateCertificate(userId: number, courseId: number, createdBy: number): Promise<{
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
        user_id: number | null;
        created_by: number | null;
        cert_id: number;
        course_id: number | null;
        issue_date: Date | null;
        cert_url: string | null;
    }>;
    bulkGenerateCertificates(courseId: number, createdBy: number): Promise<{
        generated: number;
        certificates: any[];
        errors: any[];
    }>;
    getManagementList(page?: number, limit?: number, search?: string, courseId?: number, classGroupId?: number, status?: 'all' | 'issued' | 'eligible' | 'not_eligible'): Promise<{
        data: any[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    validateCertificate(certificateId: number): Promise<{
        valid: boolean;
        certificate: {
            courses: {
                description: string;
                course_id: number;
                title: string;
                level: string;
                duration_weeks: number;
            };
            users: {
                user_id: number;
                full_name: string;
                email: string;
                avatar_url: string;
                phone: string;
            };
        } & {
            user_id: number | null;
            created_by: number | null;
            cert_id: number;
            course_id: number | null;
            issue_date: Date | null;
            cert_url: string | null;
        };
        validatedAt: Date;
    }>;
    findByUser(userId: number, page?: number, limit?: number): Promise<{
        certificates: ({
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
            user_id: number | null;
            created_by: number | null;
            cert_id: number;
            course_id: number | null;
            issue_date: Date | null;
            cert_url: string | null;
        })[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findByCourse(courseId: number, page?: number, limit?: number): Promise<{
        certificates: ({
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
            user_id: number | null;
            created_by: number | null;
            cert_id: number;
            course_id: number | null;
            issue_date: Date | null;
            cert_url: string | null;
        })[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
}
