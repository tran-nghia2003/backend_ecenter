import {
  IsNumber,
  IsOptional,
  IsEnum,
} from 'class-validator';

export class UpdateRegistrationDto {
  @IsOptional()
  @IsNumber()
  payment_id?: number;

  @IsOptional()
  @IsEnum(['pending', 'paid', 'active', 'cancelled', 'completed'])
  registration_status?: string;
}

