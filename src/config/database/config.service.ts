import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class DatabaseConfigService {
  constructor(private configService: ConfigService) {}

  get name(): string {
    return this.configService.get<string>('database.name');
  }
  get password(): string {
    return this.configService.get<string>('database.password');
  }
}
