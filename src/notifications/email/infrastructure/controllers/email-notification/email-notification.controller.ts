import { Body, Controller, HttpStatus, Inject, Post, Res } from '@nestjs/common';
import { templateEmailDto } from '../../../application/dto/template-email.dto';
import { Create } from '../../../application/create';
import { SendEmailRequest } from '../../dtos/email-notification';

@Controller('email-notification')
export class EmailNotificationController {
  constructor(@Inject('EmailSender') private readonly createService: Create) {}

  @Post()
  async send(@Body() params: SendEmailRequest): Promise<void> {
    const dto = new templateEmailDto(params.template, params.subject, params.to, params.from, params.globalVariables);
    try {
      const resp = await this.createService.exec(dto);
      // res.status(HttpStatus.CREATED).send(resp);
    } catch (error) {
      // res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
      //   error,
      // });
    }
  }
}
