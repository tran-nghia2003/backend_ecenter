import { PrismaService } from '../../prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CloudinaryService } from '../files/cloudinary.service';
export declare class CoursesService {
    private readonly prisma;
    private readonly cloudinary;
    constructor(prisma: PrismaService, cloudinary: CloudinaryService);
    private sanitizePayload;
    private logActivity;
    private attachTeacherUser;
    findById(id: number): Promise<any>;
    getCourseStats(): Promise<{
        totalCourses: number;
        activeCourses: number;
        totalLessons: number;
        totalRegistrations: number;
        totalRevenue: number | import("@prisma/client/runtime/library").Decimal;
    }>;
    uploadThumbnail(courseId: number, file: any, userId?: number): Promise<any>;
    uploadMedia(courseId: number, file: any): Promise<{
        message: string;
        file: string;
    }>;
    create(createCourseDto: CreateCourseDto, createdBy: number): Promise<any>;
    findAll(page?: number, limit?: number, search?: string, level?: string, status?: string): Promise<{
        data: any[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findOne(id: number): Promise<any>;
    update(id: number, updateCourseDto: UpdateCourseDto, updatedBy: number): Promise<any>;
    private deleteCloudinaryFiles;
    remove(id: number, removedBy: number): Promise<{
        message: string;
    }>;
    assignTeacher(courseId: number, teacherId: number, _roleInCourse?: string, userId?: number): Promise<{
        course_id: number;
        teacher_id: number;
        title: string;
    }>;
    removeTeacher(courseId: number, teacherId: number, userId?: number): Promise<{
        message: string;
    }>;
    addPrerequisite(courseId: number, prereqCourseId: number): Promise<{
        prereq_courses: {
            course_id: number;
            title: string;
            level: string;
        };
    } & {
        id: number;
        course_id: number | null;
        prereq_course_id: number | null;
    }>;
    removePrerequisite(courseId: number, prereqCourseId: number): Promise<{
        message: string;
    }>;
    getCoursePrerequisites(courseId: number): Promise<({
        prereq_courses: {
            description: string;
            course_id: number;
            title: string;
            level: string;
        };
    } & {
        id: number;
        course_id: number | null;
        prereq_course_id: number | null;
    })[]>;
    getCourseReviews(courseId: number, page?: number, limit?: number): Promise<{
        data: ({
            users: {
                user_id: number;
                full_name: string;
                avatar_url: string;
            };
        } & {
            user_id: number | null;
            created_at: Date | null;
            updated_at: Date | null;
            course_id: number | null;
            review_id: number;
            rating: number | null;
            comment: string | null;
            is_visible: boolean | null;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getCourseRating(courseId: number): Promise<{
        averageRating: number;
        totalReviews: number;
        totalRegistrations: number;
    }>;
    getTeacherCourses(teacherId: number, page?: number, limit?: number, search?: string): Promise<{
        data: any[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    updateCourseStatus(courseId: number, status: 'active' | 'inactive' | 'draft', userId?: number): Promise<any>;
    duplicateCourse(courseId: number, newTitle: string, createdBy: number): Promise<{
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
    }>;
}
