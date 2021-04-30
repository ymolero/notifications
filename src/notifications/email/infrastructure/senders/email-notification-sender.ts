/* eslint-disable @typescript-eslint/no-var-requires */
import { HttpService } from '@nestjs/common';
import { templateEmailDto } from 'src/notifications/email/application/dto/template-email.dto';

const mailchimpClient = require('@mailchimp/mailchimp_transactional')('u144Tyjz5Pq45XaDiGSNwg');

export class EmailNotificationSender {
  constructor(private httpService: HttpService) {}

  // send(payload: any): Observable<AxiosResponse<any>> {
  async send(template: templateEmailDto): Promise<void> {
    const response = await mailchimpClient.messages.sendTemplate({
      template_name: 'template_name',
      template_content: [{}],
      message: {},
    });
    console.log(response, 'responseee');
  }
}
