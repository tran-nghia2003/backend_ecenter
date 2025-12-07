import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePushTokenDto {
  @IsNumber()
  user_id: number;

  @IsString()
  @IsNotEmpty()
  device_token: string;

  @IsString()
  @IsEnum(['android', 'ios'])
  platform: 'android' | 'ios';
}


