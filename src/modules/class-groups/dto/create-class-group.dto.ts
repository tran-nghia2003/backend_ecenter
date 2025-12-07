import { IsDateString, IsIn, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, MaxLength, Min } from 'class-validator';

const ALLOWED_STATUSES = ['planning', 'open', 'ongoing', 'finished', 'cancelled'] as const;
export type ClassGroupStatus = (typeof ALLOWED_STATUSES)[number];

export class CreateClassGroupDto {
  @IsInt()
  @IsPositive()
  course_id: number;

  @IsInt()
  @IsPositive()
  shift_id: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  name: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  teacher_id?: number;

  @IsDateString()
  start_date: string;

  @IsOptional()
  @IsDateString()
  end_date?: string | null;

  @IsOptional()
  @IsInt()
  @Min(1)
  max_students?: number;

  @IsOptional()
  @IsString()
  zalo_link?: string | null;

  @IsOptional()
  @IsIn(ALLOWED_STATUSES)
  status?: ClassGroupStatus;
}

