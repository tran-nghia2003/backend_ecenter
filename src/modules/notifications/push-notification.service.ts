import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class PushNotificationService {
  private readonly logger = new Logger(PushNotificationService.name);
  private readonly isInitialized: boolean;

  constructor(private readonly configService: ConfigService) {
    // Đường dẫn tới file service account JSON
    const configuredPath = this.configService.get<string>(
      'FIREBASE_SERVICE_ACCOUNT_PATH',
    );
    const serviceAccountPath =
      configuredPath && configuredPath.trim().length > 0
        ? configuredPath
        : path.join(process.cwd(), 'firebase-service-account.json');

    const resolvedPath = path.isAbsolute(serviceAccountPath)
      ? serviceAccountPath
      : path.join(process.cwd(), serviceAccountPath);

    if (!fs.existsSync(resolvedPath)) {
      this.logger.warn(
        `Firebase service account file not found at ${resolvedPath}. Push notifications are disabled.`,
      );
      this.isInitialized = false;
      return;
    }

    try {
      const serviceAccount = require(resolvedPath);

      if (!admin.apps.length) {
        admin.initializeApp({
          credential: admin.credential.cert(
            serviceAccount as admin.ServiceAccount,
          ),
        });
        this.logger.log('Firebase Admin initialized for FCM');
      }

      this.isInitialized = true;
    } catch (error) {
      this.logger.error(
        'Failed to initialize Firebase Admin SDK',
        error as any,
      );
      this.isInitialized = false;
    }
  }

  async sendToTokens(
    tokens: string[],
    payload: { title: string; body: string; data?: Record<string, any> },
  ): Promise<void> {
    if (!this.isInitialized) {
      this.logger.warn(
        'sendToTokens called but Firebase Admin is not initialized. Skipping FCM send.',
      );
      return;
    }

    if (!tokens || tokens.length === 0) {
      this.logger.warn(
        'sendToTokens called with empty tokens array. Skipping.',
      );
      return;
    }

    const uniqueTokens = Array.from(new Set(tokens));

    try {
      this.logger.log(
        `Preparing to send FCM notification to ${uniqueTokens.length} device tokens. ` +
          `Title="${payload.title}", hasData=${!!payload.data}`,
      );
      const message: admin.messaging.MulticastMessage = {
        tokens: uniqueTokens,
        notification: {
          title: payload.title,
          body: payload.body,
        },
        data: payload.data
          ? Object.fromEntries(
              Object.entries(payload.data).map(([k, v]) => [k, String(v)]),
            )
          : {},
        android: {
          priority: 'high',
        },
      };

      const response = await admin.messaging().sendEachForMulticast(message);

      this.logger.log(
        `FCM sent: success=${response.successCount}, failure=${response.failureCount}`,
      );
    } catch (error) {
      this.logger.error('Error sending FCM via Admin SDK', error as any);
    }
  }
}
