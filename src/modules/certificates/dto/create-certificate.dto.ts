import { IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateCertificateDto {
  @IsNumber()
  user_id: number;

  @IsNumber()
  course_id: number;

  @IsOptional()
  @IsUrl()
  cert_url?: string;

  @IsOptional()
  @IsNumber()
  created_by?: number;
}
