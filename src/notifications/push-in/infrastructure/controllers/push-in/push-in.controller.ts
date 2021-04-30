import { Body, Controller, HttpStatus, Inject, Logger, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { DispatcherNotification } from 'src/notifications/push-in/application/dispatcher-notification';
import { SendNotificationDto } from 'src/notifications/push-in/application/dto/send-notification.dto';
import { PushInRequest } from '../../dtos/push-in-notification';

@Controller('push-in')
export class PushInController {
  constructor(@Inject('PushInSender') private readonly dispatcherService: DispatcherNotification) {}

  @Post()
  async send(@Body() params: PushInRequest, @Res() res: Response): Promise<void> {
    Logger.log(`Request push in notification with payload ${JSON.stringify(params)}`);

    const platform = 'android';
    const firebaseToken = '123';
    const data = {};

    const dto = new SendNotificationDto(
      params.customerIds,
      params.title,
      params.body,
      platform,
      firebaseToken,
      data,
      params.category,
      params.type,
      params.companyId,
      params.companyClientId,
    );
    try {
      const resp = await this.dispatcherService.exec(dto);
      res.status(HttpStatus.CREATED).send(resp);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
        error,
      });
    }
  }
}
