import { Logger } from '@nestjs/common';
import { SenderRepository } from '../domain/sender.repository';
import { SendNotificationDto } from './dto/send-notification.dto';

export class DispatcherNotification {
  constructor(private readonly pushInNotificationSender: SenderRepository) {}

  exec(params: SendNotificationDto): void {
    Logger.log(`Execute dispatcher with params ${JSON.stringify(params)}`);
    this.pushInNotificationSender.send(params);
  }
}
