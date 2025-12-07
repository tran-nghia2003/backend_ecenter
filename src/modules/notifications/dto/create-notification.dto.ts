import { IsString, IsOptional, IsNumber, IsEnum, IsNotEmpty, IsArray } from 'class-validator';

export class CreateNotificationDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsOptional()
  @IsNumber()
  sender_id?: number;

  @IsOptional()
  @IsNumber()
  course_id?: number;

  @IsOptional()
  @IsNumber()
  class_group_id?: number; // ✅ Thêm field mới - ID của lớp học

  @IsOptional()
  @IsEnum(['all', 'course', 'class_group', 'user'])
  target_audience?: 'all' | 'course' | 'class_group' | 'user'; // ✅ Thêm 'class_group'

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  user_ids?: number[]; // For 'user' target_audience - specific user IDs
}
