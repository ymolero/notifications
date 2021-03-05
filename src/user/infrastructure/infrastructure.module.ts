import { Module } from '@nestjs/common';
import { PostCreateUserController } from 'src/user/infrastructure/controllers/post-create-user/post-create-user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SchemaUser } from 'src/user/infrastructure/user.schema';
import { ApplicationModule } from 'src/user/application/application.module';
import { Create } from 'src/user/application/create';
import { MongodbRepository } from './mongodb.repository';

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
    providers: [
        {
            Create,
        },  
        {
            inject: [MongodbRepository],
            provide: 'CreateUser',
            useValue: (repository: MongodbRepository) => repository,
        },
    ],
})
export class InfrastructureModule {}
