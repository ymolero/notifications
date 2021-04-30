import { templateEmailDto } from './dto/template-email.dto';

export class Create {
  constructor(private readonly emailNotificationSender: any) {}

  exec(template: templateEmailDto): void {
    this.emailNotificationSender.send(template);
  }
}
