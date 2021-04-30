import { Module } from '@nestjs/common';
import { Create } from '../application/create';
import { EmailNotificationController } from './controllers/email-notification/email-notification.controller';
import { EmailNotificationSender } from './senders/email-notification-sender';

@Module({
  controllers: [EmailNotificationController],

  providers: [
    {
      inject: [EmailNotificationSender],
      provide: 'EmailSender',
      useFactory: (sender: EmailNotificationSender) => new Create(sender),
    },
    EmailNotificationSender,
  ],
})
export class InfrastructureModule {}
