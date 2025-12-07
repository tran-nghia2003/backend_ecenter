import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsEnum,
  IsDateString,
  Min,
} from 'class-validator';
import { ClassType, ExamType } from '../../../common/enums/course.enum';

export class CreateClassDto {
  @IsNumber()
  @IsNotEmpty()
  class_group_id: number;

  @IsOptional()
  @IsNumber()
  teacher_id?: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(ClassType)
  @IsNotEmpty()
  class_type: ClassType;

  @IsDateString()
  @IsNotEmpty()
  start_time: string;

  @IsOptional()
  @IsDateString()
  end_time?: string;

  @IsOptional()
  @IsDateString()
  attendance_start_time?: string;

  @IsOptional()
  @IsDateString()
  attendance_end_time?: string;

  // For online classes
  @IsOptional()
  @IsString()
  meeting_link?: string;

  @IsOptional()
  @IsString()
  recording_url?: string;

  // For offline classes
  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsEnum(ExamType)
  exam_type?: ExamType;

  @IsOptional()
  @IsNumber()
  @Min(0)
  max_score?: number;
}
