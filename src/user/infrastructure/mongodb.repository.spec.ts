import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { UserEntity } from '../domain/user.entity';
import { MongodbRepository } from './mongodb.repository';

describe('Mongo Repository', () => {
    let repository: MongodbRepository;

    const mockResult: Array<any> = [
        {
            name: 'testing',
            username: 'testing',
            email: 'testing@bdsol.com.ar',
        },
    ];

    class mockModel {
        constructor(private data) {}
        save = jest.fn().mockImplementation(() => Promise.resolve(mockResult[0]));
        static find = jest.fn().mockImplementation(() => Promise.resolve(mockResult));
        static updateOne = jest.fn().mockImplementation(() => Promise.resolve({ nModified: 1 }));
        static deleteOne = jest.fn().mockImplementation(() => Promise.resolve({ deletedCount: 1 }));
    }

    const mockDto = new UserEntity('testing', 'testing', 'testing@bdsol.com.ar');

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            providers: [
                MongodbRepository,
                {
                    provide: getModelToken('User'),
                    useValue: mockModel,
                },
            ],
        }).compile();

        repository = module.get<MongodbRepository>(MongodbRepository);
    });

    it('should be defined', () => {
        expect(repository).toBeDefined();
    });

    describe('Unit Test Create User', () => {
        it('should response data', async () => {
            const result = await repository.create(mockDto);
            expect(mockResult[0]).toMatchObject(result);
        });
    });
});
