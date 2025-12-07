import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  Req,
  ParseIntPipe,
  Request,
} from '@nestjs/common';
import { CertificatesService } from './certificates.service';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../shared/guards/roles.guard';
import { PermissionsGuard } from '../../shared/guards/permissions.guard';
import { Roles } from '../../shared/decorators/roles.decorator';
import { UserRole, Permission } from '../../common/enums/user-role.enum';
import { RequirePermissions } from '../../shared/decorators/permissions.decorator';

@Controller('certificates')
@UseGuards(JwtAuthGuard, RolesGuard, PermissionsGuard)
export class CertificatesController {
  constructor(private readonly certificatesService: CertificatesService) {}

  @Post()
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.CERTIFICATE_MANAGE)
  create(@Body() createCertificateDto: CreateCertificateDto, @Req() req: any) {
    return this.certificatesService.create(createCertificateDto, req.user.user_id);
  }

  @Get()
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.CERTIFICATE_VIEW, Permission.CERTIFICATE_MANAGE)
  findAll(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('search') search?: string,
    @Query('courseId') courseId?: string,
  ) {
    const pageNum = page ? Number(page) : 1;
    const limitNum = limit ? Number(limit) : 10;
    const courseIdNum = courseId ? Number(courseId) : undefined;
    return this.certificatesService.findAll(pageNum, limitNum, search, courseIdNum);
  }

  @Get('management')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.CERTIFICATE_VIEW, Permission.CERTIFICATE_MANAGE)
  getManagementList(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('search') search?: string,
    @Query('courseId') courseId?: string,
    @Query('classGroupId') classGroupId?: string,
    @Query('status') status?: 'all' | 'issued' | 'eligible' | 'not_eligible',
  ) {
    const pageNum = page ? Number(page) : 1;
    const limitNum = limit ? Number(limit) : 10;
    const courseIdNum = courseId ? Number(courseId) : undefined;
    const classGroupIdNum = classGroupId ? Number(classGroupId) : undefined;

    return this.certificatesService.getManagementList(
      pageNum,
      limitNum,
      search,
      courseIdNum,
      classGroupIdNum,
      status,
    );
  }

  @Get('eligible-students')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.CERTIFICATE_MANAGE)
  getEligibleStudents(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('search') search?: string,
    @Query('courseId') courseId?: string,
  ) {
    const pageNum = page ? Number(page) : 1;
    const limitNum = limit ? Number(limit) : 10;
    const courseIdNum = courseId ? Number(courseId) : undefined;
    return this.certificatesService.getCompletedStudents(pageNum, limitNum, search, courseIdNum);
  }

  @Get('my-certificates')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  @RequirePermissions(Permission.CERTIFICATE_VIEW)
  getMyCertificates(@Request() req) {
    return this.certificatesService.findByUser(req.user.user_id);
  }

  @Get('course/:courseId')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  getByCourse(@Param('courseId', ParseIntPipe) courseId: number) {
    return this.certificatesService.findByCourse(courseId);
  }

  @Get('stats')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.CERTIFICATE_MANAGE)
  getStats() {
    return this.certificatesService.getCertificateStats();
  }

  @Get(':id')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  @RequirePermissions(Permission.CERTIFICATE_VIEW)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.certificatesService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.CERTIFICATE_MANAGE)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCertificateDto: UpdateCertificateDto,
  ) {
    return this.certificatesService.update(id, updateCertificateDto);
  }

  @Delete(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.CERTIFICATE_MANAGE)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.certificatesService.remove(id);
  }

  @Post('generate')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.CERTIFICATE_MANAGE)
  generateCertificate(
    @Body('userId', ParseIntPipe) userId: number,
    @Body('courseId', ParseIntPipe) courseId: number,
    @Request() req,
  ) {
    return this.certificatesService.generateCertificate(
      userId,
      courseId,
      req.user.user_id,
    );
  }
}
