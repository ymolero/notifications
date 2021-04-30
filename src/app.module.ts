import { Module } from '@nestjs/common';
import { NotificationsModule } from './notifications/notifications.module';
import { DatabaseConfigModule } from './config/database/config.module';
import { AppConfigModule } from './config/app/config.module';

@Module({
  imports: [NotificationsModule, DatabaseConfigModule, AppConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
