import {
  IsNumber,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsEnum,
  Min,
} from 'class-validator';

export class CreatePaymentDto {
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @IsNumber()
  @IsNotEmpty()
  course_id: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  amount: number;

  @IsOptional()
  @IsString()
  currency?: string;

  @IsEnum(['credit_card', 'momo', 'zalopay', 'bank_transfer', 'vnpay', 'cash'])
  @IsNotEmpty()
  payment_method: string;

  @IsOptional()
  @IsString()
  transaction_id?: string;

  @IsOptional()
  @IsString()
  gateway_transaction_code?: string;

  @IsOptional()
  @IsString()
  order_code?: string;

  @IsOptional()
  @IsString()
  bank_code?: string;

  @IsOptional()
  @IsString()
  card_type?: string;

  @IsOptional()
  @IsString()
  payment_url?: string;

  @IsOptional()
  @IsString()
  payment_note?: string;
}
