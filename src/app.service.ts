import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
      const x = "sadasd";
    
      return 'Hello World!';
  }
}
