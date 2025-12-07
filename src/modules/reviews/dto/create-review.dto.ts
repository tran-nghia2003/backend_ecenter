import { IsNumber, IsString, IsOptional, Min, Max, IsBoolean } from 'class-validator';

export class CreateReviewDto {
  @IsNumber()
  user_id: number;

  @IsNumber()
  course_id: number;

  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;

  @IsOptional()
  @IsString()
  comment?: string;

  @IsOptional()
  @IsBoolean()
  is_visible?: boolean;
}
