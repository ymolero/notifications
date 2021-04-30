import { Module } from '@nestjs/common';
import { EmailModule } from './email/email.module';
import { PushInModule } from './push-in/push-in.module';

@Module({
  imports: [EmailModule, PushInModule],
})
export class NotificationsModule {}
