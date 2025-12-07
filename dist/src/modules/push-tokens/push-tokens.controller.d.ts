import { PushTokensService } from './push-tokens.service';
import { CreatePushTokenDto } from './dto/create-push-token.dto';
export declare class PushTokensController {
    private readonly pushTokensService;
    constructor(pushTokensService: PushTokensService);
    upsert(dto: CreatePushTokenDto): Promise<{
        id: number;
    }>;
}
