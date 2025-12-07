import { IsString, IsOptional, IsEnum, IsNumber } from 'class-validator';

export class UpdateNotificationDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  message?: string;

  @IsOptional()
  @IsNumber()
  course_id?: number;

  @IsOptional()
  @IsNumber()
  class_group_id?: number; // ✅ Thêm field mới

  @IsOptional()
  @IsEnum(['all', 'course', 'class_group', 'user'])
  target_audience?: 'all' | 'course' | 'class_group' | 'user'; // ✅ Thêm 'class_group'
}
