"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const isDevelopment = process.env.NODE_ENV !== 'production';
    app.enableCors({
        origin: (origin, callback) => {
            if (!origin)
                return callback(null, true);
            if (isDevelopment && origin.startsWith('http://localhost:')) {
                return callback(null, true);
            }
            const allowedOrigins = [
                'http://localhost:5173',
                'http://localhost:5174',
                'http://localhost:5175',
                'http://localhost:3000',
            ];
            if (allowedOrigins.includes(origin)) {
                callback(null, true);
            }
            else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
    });
    const port = process.env.PORT ?? 3000;
    await app.listen(port);
    console.log(`\n🚀 ==========================================`);
    console.log(`🚀 Backend server is running on port ${port}`);
    console.log(`🚀 ==========================================\n`);
    console.log(`📡 WebSocket Gateway: http://localhost:${port}/chat`);
    console.log(`📡 Waiting for WebSocket connections...`);
    console.log(`📡 Waiting for PostgreSQL LISTEN/NOTIFY...\n`);
}
bootstrap();
//# sourceMappingURL=main.js.map