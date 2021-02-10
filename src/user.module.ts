import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SchemaUser } from './schemas/user.schema';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/nestjs-seed-nosql', {
            useNewUrlParser: true,
        }),
        MongooseModule.forFeature([
            {
                name: 'User',
                schema: SchemaUser,
            },
        ]),
    ],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
