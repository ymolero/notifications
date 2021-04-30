import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './configuration';
import { DatabaseConfigService } from './config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      // validationSchema: Joi.object({
      //   APP_NAME: Joi.string().default('MyApp'),
      //   APP_ENV: Joi.string().valid('development', 'production', 'test', 'provision').default('development'),
      //   APP_URL: Joi.string().default('http://my-app.test'),
      //   APP_PORT: Joi.number().default(9000),
      // }),
    }),
  ],
  providers: [ConfigService, DatabaseConfigService],
  exports: [ConfigService, DatabaseConfigService],
})
export class DatabaseConfigModule {}
