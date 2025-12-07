import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateMinigameDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  created_by?: number;
}
