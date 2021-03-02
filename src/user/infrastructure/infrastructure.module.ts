import { Module } from '@nestjs/common';
import { PostCreateUserController } from 'src/user/infrastructure/controllers/post-create-user/post-create-user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SchemaUser } from 'src/user/infrastructure/user.schema';
import { ApplicationModule } from 'src/user/application/application.module';
import { Create } from 'src/user/application/create';

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
    controllers: [PostCreateUserController],
    providers: [Create],
})
export class InfrastructureModule {}
