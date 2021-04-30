import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DispatcherNotification } from '../application/dispatcher-notification';
import { PushInController } from './controllers/push-in/push-in.controller';
import { PushInNotificationSender } from './senders/push-in-notification-sender';
import { SchemaNotification } from './notification.schema';
import { SbListenQueueNotifation } from './listeners/sb-listen-queue-notification';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs-seed-nosql', {
      useNewUrlParser: true,
    }),
    MongooseModule.forFeature([
      {
        name: 'Notification',
        schema: SchemaNotification,
      },
    ]),
  ],
  controllers: [PushInController],
  providers: [
    {
      inject: [PushInNotificationSender],
      provide: 'PushInSender',
      useFactory: (sender: PushInNotificationSender) => new DispatcherNotification(sender),
    },
    PushInNotificationSender,
    SbListenQueueNotifation,
  ],
})
export class InfrastructureModule {}
