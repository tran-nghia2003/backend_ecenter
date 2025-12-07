import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  // In development, allow all localhost ports for Vite
  const isDevelopment = process.env.NODE_ENV !== 'production';
  app.enableCors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      // In development, allow any localhost port
      if (isDevelopment && origin.startsWith('http://localhost:')) {
        return callback(null, true);
      }

      // In production, use specific allowed origins
      const allowedOrigins = [
        'http://localhost:5173',
        'http://localhost:5174',
        'http://localhost:5175',
        'http://localhost:3000',
      ];

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
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
