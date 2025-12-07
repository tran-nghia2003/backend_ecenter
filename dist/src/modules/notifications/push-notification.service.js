"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var PushNotificationService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushNotificationService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const admin = require("firebase-admin");
const path = require("path");
const fs = require("fs");
let PushNotificationService = PushNotificationService_1 = class PushNotificationService {
    configService;
    logger = new common_1.Logger(PushNotificationService_1.name);
    isInitialized;
    constructor(configService) {
        this.configService = configService;
        const configuredPath = this.configService.get('FIREBASE_SERVICE_ACCOUNT_PATH');
        const serviceAccountPath = configuredPath && configuredPath.trim().length > 0
            ? configuredPath
            : path.join(process.cwd(), 'firebase-service-account.json');
        const resolvedPath = path.isAbsolute(serviceAccountPath)
            ? serviceAccountPath
            : path.join(process.cwd(), serviceAccountPath);
        if (!fs.existsSync(resolvedPath)) {
            this.logger.warn(`Firebase service account file not found at ${resolvedPath}. Push notifications are disabled.`);
            this.isInitialized = false;
            return;
        }
        try {
            const serviceAccount = require(resolvedPath);
            if (!admin.apps.length) {
                admin.initializeApp({
                    credential: admin.credential.cert(serviceAccount),
                });
                this.logger.log('Firebase Admin initialized for FCM');
            }
            this.isInitialized = true;
        }
        catch (error) {
            this.logger.error('Failed to initialize Firebase Admin SDK', error);
            this.isInitialized = false;
        }
    }
    async sendToTokens(tokens, payload) {
        if (!this.isInitialized) {
            this.logger.warn('sendToTokens called but Firebase Admin is not initialized. Skipping FCM send.');
            return;
        }
        if (!tokens || tokens.length === 0) {
            this.logger.warn('sendToTokens called with empty tokens array. Skipping.');
            return;
        }
        const uniqueTokens = Array.from(new Set(tokens));
        try {
            this.logger.log(`Preparing to send FCM notification to ${uniqueTokens.length} device tokens. ` +
                `Title="${payload.title}", hasData=${!!payload.data}`);
            const message = {
                tokens: uniqueTokens,
                notification: {
                    title: payload.title,
                    body: payload.body,
                },
                data: payload.data
                    ? Object.fromEntries(Object.entries(payload.data).map(([k, v]) => [k, String(v)]))
                    : {},
                android: {
                    priority: 'high',
                },
            };
            const response = await admin.messaging().sendEachForMulticast(message);
            this.logger.log(`FCM sent: success=${response.successCount}, failure=${response.failureCount}`);
        }
        catch (error) {
            this.logger.error('Error sending FCM via Admin SDK', error);
        }
    }
};
exports.PushNotificationService = PushNotificationService;
exports.PushNotificationService = PushNotificationService = PushNotificationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], PushNotificationService);
//# sourceMappingURL=push-notification.service.js.map