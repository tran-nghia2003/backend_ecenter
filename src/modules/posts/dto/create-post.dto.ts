import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsEnum,
  IsUrl,
} from 'class-validator';

export class CreatePostDto {
  @IsNumber()
  user_id: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsOptional()
  @IsUrl()
  media_url?: string;

  @IsOptional()
  @IsEnum(['image', 'video'])
  media_type?: string;

  @IsOptional()
  @IsString()
  category?: string;
}
