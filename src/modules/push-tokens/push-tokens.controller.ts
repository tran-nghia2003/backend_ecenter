import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { PushTokensService } from './push-tokens.service';
import { CreatePushTokenDto } from './dto/create-push-token.dto';

@Controller('push-tokens')
export class PushTokensController {
  constructor(private readonly pushTokensService: PushTokensService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async upsert(@Body() dto: CreatePushTokenDto) {
    const token = await this.pushTokensService.upsertToken(dto);
    return { id: token.id };
  }
}


