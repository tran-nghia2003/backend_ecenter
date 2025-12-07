import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsEnum,
} from 'class-validator';

export class CreateReactionDto {
  @IsOptional()
  @IsNumber()
  post_id?: number;

  @IsOptional()
  @IsNumber()
  comment_id?: number;

  @IsNumber()
  user_id: number;

  @IsString()
  @IsNotEmpty()
  @IsEnum(['like', 'dislike'])
  reaction_type: string;
}
