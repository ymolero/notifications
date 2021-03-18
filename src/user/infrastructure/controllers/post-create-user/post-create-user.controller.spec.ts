import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Create } from '../../../application/create';
import { MongodbRepository } from '../../mongodb.repository';
import { SchemaUser } from '../../user.schema';
import { PostCreateUserController } from './post-create-user.controller';
import * as httpMock from 'node-mocks-http';

describe('PostCreateUserController', () => {
    let controller: PostCreateUserController;
    let createService: Create;

    const mockResult: Array<any> = [
        {
            name: 'testing',
            username: 'testing',
            email: 'testing@bdsol.com.ar',
            createdAt: '10/10/2021',
        },
    ];

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
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
                    inject: [MongodbRepository],
                    provide: 'CreateUser',
                    useFactory: (repository: MongodbRepository) => new Create(repository),
                },
                MongodbRepository,
                Create,
            ],
        }).compile();

        controller = module.get<PostCreateUserController>(PostCreateUserController);
        createService = module.get<Create>(Create);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    xdescribe('Unit Test Create User', () => {
        it('should call property method exec in service', async () => {
            const spy = jest.spyOn(createService, 'exec');
            const res = httpMock.createResponse();
            controller.exec(mockResult[0], res);
            expect(spy).toHaveBeenCalled();
            spy.mockClear();
        });
    });
});
