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
  ParseIntPipe,
  Request,
} from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../shared/guards/roles.guard';
import { PermissionsGuard } from '../../shared/guards/permissions.guard';
import { Roles } from '../../shared/decorators/roles.decorator';
import { RequirePermissions } from '../../shared/decorators/permissions.decorator';
import { UserRole, Permission } from '../../common/enums/user-role.enum';

@Controller('payments')
@UseGuards(JwtAuthGuard, RolesGuard, PermissionsGuard)
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.SALES_STAFF)
  @RequirePermissions(Permission.PAYMENT_RECORD)
  create(@Body() createPaymentDto: CreatePaymentDto, @Request() req) {
    return this.paymentsService.create(createPaymentDto, req.user.user_id);
  }

  @Get()
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.SALES_STAFF)
  @RequirePermissions(Permission.PAYMENT_VIEW, Permission.PAYMENT_MANAGE_SALES_STAFF)
  findAll(
    @Query('userId') userId?: number,
    @Query('courseId') courseId?: number,
    @Query('paymentStatus') paymentStatus?: string,
    @Query('paymentMethod') paymentMethod?: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('search') search?: string,
  ) {
    return this.paymentsService.findAll(
      userId ? Number(userId) : undefined,
      courseId ? Number(courseId) : undefined,
      paymentStatus,
      paymentMethod,
      page ? Number(page) : undefined,
      limit ? Number(limit) : undefined,
      search,
    );
  }

  @Get('stats')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.SALES_STAFF)
  @RequirePermissions(Permission.PAYMENT_MANAGE)
  getStats(
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    const start = startDate ? new Date(startDate) : undefined;
    const end = endDate ? new Date(endDate) : undefined;
    return this.paymentsService.getPaymentStats(start, end);
  }

  @Get('revenue/monthly')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.SALES_STAFF)
  getMonthlyRevenue(@Query('year') year?: number) {
    return this.paymentsService.getRevenueByMonth(
      year || new Date().getFullYear(),
    );
  }

  @Get('top-courses')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.SALES_STAFF)
  getTopCoursesByRevenue(@Query('limit') limit?: number) {
    return this.paymentsService.getTopCoursesByRevenue(limit);
  }

  @Get(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.SALES_STAFF)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.paymentsService.findById(id);
  }

  @Patch(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.SALES_STAFF)
  @RequirePermissions(Permission.PAYMENT_MANAGE)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePaymentDto: UpdatePaymentDto,
  ) {
    return this.paymentsService.update(id, updatePaymentDto);
  }

  @Patch(':id/status')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.SALES_STAFF)
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status') status: 'pending' | 'completed' | 'failed' | 'refunded',
    @Body('transactionId') transactionId?: string,
  ) {
    return this.paymentsService.updatePaymentStatus(id, status, transactionId);
  }

  @Post(':id/refund')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.SALES_STAFF)
  processRefund(
    @Param('id', ParseIntPipe) id: number,
    @Body('refundAmount') refundAmount?: number,
    @Body('reason') reason?: string,
  ) {
    return this.paymentsService.processRefund(id, refundAmount, reason);
  }

  @Delete(':id')
  @Roles(UserRole.SYSTEM_ADMIN)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.paymentsService.remove(id);
  }
}
