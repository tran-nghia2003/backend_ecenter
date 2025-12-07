import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CourseLevel, CourseStatus } from '../../common/enums/course.enum';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    create(createCourseDto: CreateCourseDto, req: any): Promise<any>;
    findAll(req: any, page?: number, limit?: number, search?: string, level?: CourseLevel, status?: CourseStatus): Promise<{
        data: any[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }> | {
        data: any[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    findOne(id: number): Promise<any>;
    getStats(): Promise<{
        totalCourses: number;
        activeCourses: number;
        totalLessons: number;
        totalRegistrations: number;
        totalRevenue: number | import("@prisma/client/runtime/library").Decimal;
    }>;
    update(id: number, updateCourseDto: UpdateCourseDto, req: any): Promise<any>;
    remove(id: number, req: any): Promise<{
        message: string;
    }>;
    assignTeacher(courseId: number, teacherId: number, req: any, roleInCourse?: string): Promise<{
        course_id: number;
        teacher_id: number;
        title: string;
    }>;
    removeTeacher(courseId: number, teacherId: number, req: any): Promise<{
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
    uploadThumbnail(courseId: number, file: Express.Multer.File, req: any): Promise<any>;
    uploadMedia(courseId: number, file: Express.Multer.File, req: any, type: string): Promise<{
        message: string;
        file: string;
    }>;
}
