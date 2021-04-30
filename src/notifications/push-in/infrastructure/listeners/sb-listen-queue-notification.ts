import { ServiceBusClient } from '@azure/service-bus';
import { Logger } from '@nestjs/common';

export class SbListenQueueNotifation {
  private sbClient: ServiceBusClient;

  constructor() {
    Logger.log('Start connection with Service Bus Client');

    this.sbClient = new ServiceBusClient(
      'Endpoint=sb://bds-test.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=LGd++/ILy5R9Xma0hAT5ZR2tz4s0V5pmswElyjX2WWw=',
    );

    this.listen();
  }

  listen(): void {
    Logger.log('[*] Waiting for messages in new-notifications queue.');
    const receiver = this.sbClient.createReceiver('new-notifications');
    receiver.subscribe({
      processMessage: this.myMessageHandler,
      processError: this.myErrorHandler,
    });
  }

  async myMessageHandler(message: any): Promise<void> {
    console.log(`message.body: ${message.body.description}`);
  }
  async myErrorHandler(args: any): Promise<void> {
    console.log(`Error occurred with ${args.entityPath} within ${args.fullyQualifiedNamespace}: `, args.error);
  }
}
