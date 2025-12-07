import { IsBoolean, IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';

export class CreateStudyShiftDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  days_of_week: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{1,2}:[0-5]\d$/, { message: 'start_time must be in HH:mm format' })
  start_time: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{1,2}:[0-5]\d$/, { message: 'end_time must be in HH:mm format' })
  end_time: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  is_active?: boolean;
}

