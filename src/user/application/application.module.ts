import { Module } from '@nestjs/common';
import { Create } from './create';

@Module({
    providers: [Create],
})
export class ApplicationModule {}
