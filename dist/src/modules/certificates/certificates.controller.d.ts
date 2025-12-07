import { CertificatesService } from './certificates.service';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
export declare class CertificatesController {
    private readonly certificatesService;
    constructor(certificatesService: CertificatesService);
    create(createCertificateDto: CreateCertificateDto, req: any): Promise<{
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
    findAll(page?: string, limit?: string, search?: string, courseId?: string): Promise<{
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
    getManagementList(page?: string, limit?: string, search?: string, courseId?: string, classGroupId?: string, status?: 'all' | 'issued' | 'eligible' | 'not_eligible'): Promise<{
        data: any[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getEligibleStudents(page?: string, limit?: string, search?: string, courseId?: string): Promise<{
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
    getMyCertificates(req: any): Promise<{
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
    getByCourse(courseId: number): Promise<{
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
    getStats(): Promise<{
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
    generateCertificate(userId: number, courseId: number, req: any): Promise<{
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
}
