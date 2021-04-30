import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Console } from 'console';
import { AppModule } from './app.module';
import { AppConfigService } from './config/app/config.service';
import { DatabaseConfigService } from './config/database/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const appConfig: AppConfigService = app.get('AppConfigService');
  await app.listen(appConfig.port);
  Logger.log(`Notification Server running on port ${appConfig.port}`);

}
bootstrap();
