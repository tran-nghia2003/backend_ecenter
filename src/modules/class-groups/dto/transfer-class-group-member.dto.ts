import { IsNumber, IsOptional, IsString } from 'class-validator';

export class TransferClassGroupMemberDto {
  @IsNumber()
  user_id: number;

  @IsNumber()
  target_class_group_id: number;

  @IsOptional()
  @IsString()
  reason?: string;

  @IsOptional()
  @IsString()
  note?: string;
}

