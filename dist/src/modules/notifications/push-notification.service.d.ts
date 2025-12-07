import { ConfigService } from '@nestjs/config';
export declare class PushNotificationService {
    private readonly configService;
    private readonly logger;
    private readonly isInitialized;
    constructor(configService: ConfigService);
    sendToTokens(tokens: string[], payload: {
        title: string;
        body: string;
        data?: Record<string, any>;
    }): Promise<void>;
}
