import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SenderRepository } from 'src/notifications/push-in/domain/sender.repository';
import { NotificationDocument } from 'src/notifications/push-in/infrastructure/notification.document';
import { NotificationEntity } from 'src/notifications/push-in/domain/notification.entity';

@Injectable()
export class MongodbRepository implements SenderRepository {
  constructor(@InjectModel('Notification') private readonly notificationModel: Model<NotificationDocument>) {}

  async send(params: NotificationEntity): Promise<any> {
    // const dto = new ReceiveUserDto(params.name.getValue(), params.username.getValue(), params.email.getValue());

    const notification = new this.notificationModel(params);
    return await notification.save();
  }
}
