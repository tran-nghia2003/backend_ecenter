import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsUrl,
  IsEnum,
} from 'class-validator';

export class CreateCommentDto {
  @IsNumber()
  post_id: number;

  @IsNumber()
  user_id: number;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsOptional()
  @IsNumber()
  parent_id?: number;

  @IsOptional()
  @IsUrl()
  media_url?: string;

  @IsOptional()
  @IsEnum(['image', 'video'])
  media_type?: string;
}
