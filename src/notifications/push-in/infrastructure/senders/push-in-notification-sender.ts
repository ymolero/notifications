import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';
import { AppConfigService } from 'src/config/app/config.service';
import { DatabaseConfigService } from 'src/config/database/config.service';

export class PushInNotificationSender {
  private serviceBus: string;

  constructor() {
    const serviceAccount = {
      projectId: 'bds-7de15',
      privateKey: `
      -----BEGIN PRIVATE KEY-----
      MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCfU3Y9g8qpqz6w
      yez3cExCTj7QYDROJ2dZBabDifQjIZ1qlmJAG8J7xuAFJpJ9RdJC4eTKjVFXb9vN
      k03J6hsi8udZ/v5RLHTCM7MEVLIbbtjLdDTPsOHh4rDDYM8fo77mnbO0LvJ0+4Jf
      7LJ3NQxbbDizgubtHgaHcHkSghL6jkhpq0b61rtAENT/EAdGqwYqK7mr0Xmuv7QS
      MYoSJ88Wat/3FLAQv8jiX2n1wh7EOubkXFkb7kBoHVmk1c9UNsYOHF+6oF52pES4
      rnhBvg0d7lqS/wG/jgvBN2Kl69pcSPLkvp7kbGUeTQlxRJ7KkZ0OogzSIXBOuQ58
      dCQu6T73AgMBAAECggEAOrD2J6b66xGoIFviLSxzCyHjxcMKwZeGXKbWTcXt51sk
      r/UB8HfJZutV7s/MutUTpYutSmhQhJMyN0KCL1VL9c3hJ6fla2WjBT8iPQAuNCjb
      N+dw5OlV7G4ji3WIFzGsyytg3YlFy44y8r8w5vTlvm/ZW1dnVgXvhckK8KR19VIL
      TSqu6KyI5UQpJtwZlCD6g6LJnFcO28mIntwsZNve/bt8ZFcJMbQf0EwuO/tAZ+t7
      /HX5Vd89aLdB98USKWZHUmhNcsypXNm/4YAjkhI2w3fsKj0rkJ6YlhhVJYJL7+3X
      JEp4EDVDkNU37LOH2MvhiRK1nzrrQCEgVaABdr2P0QKBgQDbpNKhAP1gdsSud/XL
      Xf/2YSYTCP6aoCn1NS0yyJ5+jl2FcihLJfu5ogUYKnXMcNI/QaLqvdMRcYQaIPk1
      clBMmIVb7A/vsnu1OU0OniFeAnbOueeZom/GypjlJ2fH4mNu8TP5qkkYLlScsp7s
      7WCAvDeQdK5d+W/NuRQztsWNkwKBgQC5srwk6Ws6EJDcCPHkXEQs8IS8grU7MjXB
      Jk2JhIioohGzK373dJpZTgK/I94Zqs66rk3jZOhl9KlhSc4IM2BOULajJqkTEZOW
      vMbsXLH9Mq6rXHW9xkU3JlO4KCRoz5mPCqmKoBHpmUkc1ZmUS/wLiVIMBxXbpe+E
      g6mq4N/HjQKBgQCZMB9nA1W0TaFnPWtEZ075+0+evwsztLkOuAPKA3nnMkuvoqrP
      nrIuCf4bmKGH8LfyPkjuB26KH+3Oe2jUCeJPSaDZN4710jnNbyV7KHaFJprOG4KX
      +F6U+wAf8pfDJPXMjpV9b3KDVuzUTQ/ilrxTjPID4h0qlamQhaC9YJ/v2QKBgENu
      ae+lazB8j323Kc9YydDfzfN+Kz1BsE9hD0ree5lwsKi1JLfK+blwIIM0DRSY99TG
      MrZeEB3lyBPx7wT/UvtdR9Ta1w57lXJpPnrZ9jARVWgYfRDajIvIOSJoQUBmEkbl
      Ake6dIa1CN2Vmt1E8lNmHAsOD5vhF6axAM1yNxCJAoGAXaV7KLgA8sKipFUK8ce8
      /CUQZfgaigC6mKZNQVFPvR/4NIqLH3zqVlK29rlYviatgoU/iFFaMEfx/lpi6OH1
      7Wve/TvTCwaWstd/BxRYPSrQn9ZRKv0Tz4N7+TxKNo/nwZnFNyYqc1WIiTIpSkyl
      j1qm6VsBkosENjFV8ACtG74=
      -----END PRIVATE KEY-----
      `,
      clientEmail: 'firebase-adminsdk-ibpru@bds-7de15.iam.gserviceaccount.com',
    };

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });

    Logger.log('Start connection with Firebase-admin');
  }

  // send(payload: any): Observable<AxiosResponse<any>> {
  async send(template: any): Promise<void> {
    const { platform, firebaseToken, appVersion, event, payload } = template.body;

    const isAndroid = platform === 'android';
    // const hasAppVersion = !isNil(appVersion);
    const token = firebaseToken;

    const message: admin.messaging.Message = {
      token,
      data: { event, payload: JSON.stringify(payload), type: 'DATA_ONLY' },
    };

    if (isAndroid) {
      message.android = { priority: 'high' };
    } else {
      message.apns = {
        headers: {
          'apns-push-type': 'background',
          'apns-priority': '5',
        },
        payload: {
          aps: {
            contentAvailable: true,
          },
        },
      };
    }

    try {
      const response = await admin.messaging().send(message);
      // Logger.log(`Data-only message sent ok: ${response}`, 'sendDataOnlyToUser')
    } catch (e) {
      // Logger.error(`Error sending data-only message: ${e.message}`, e.stack, 'Error')
    }
  }
}
