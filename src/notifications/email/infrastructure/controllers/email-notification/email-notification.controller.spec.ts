import { Test, TestingModule } from '@nestjs/testing';
import { Create } from '../../../application/create';
import { EmailNotificationSender } from '../../senders/email-notification-sender';
import { EmailNotificationController } from './email-notification.controller';

describe('EmailNotificationController', () => {
  let controller: EmailNotificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailNotificationController],
      providers: [
        {
          inject: [EmailNotificationSender],
          provide: 'CreateUser',
          useFactory: (sender: EmailNotificationSender) => new Create(sender),
        },
        EmailNotificationSender,
      ],
    }).compile();

    controller = module.get<EmailNotificationController>(EmailNotificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
