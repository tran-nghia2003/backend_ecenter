import {
  IsNumber,
  IsNotEmpty,
  IsOptional,
  IsEnum,
} from 'class-validator';

export class CreateRegistrationDto {
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @IsNumber()
  @IsNotEmpty()
  course_id: number;

  @IsOptional()
  @IsNumber()
  payment_id?: number;

  @IsOptional()
  @IsEnum(['pending', 'paid', 'active', 'cancelled', 'completed'])
  registration_status?: string;
}

