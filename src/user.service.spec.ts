import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { User } from './interfaces/user.interface';
import { UserService } from './user.service';
//import mockAxios from 'jest-mock-axios';

describe('SancorService', () => {
    let service: UserService;
    let userModel: any;

    const mockResult: Array<any> = [
        {
            name: 'testing',
            username: 'testing',
            email: 'testing@bdsol.com.ar',
            createdAt: '10/10/2021',
        },
    ];

    class mockModel {
        constructor(private data) {}
        save = jest.fn().mockImplementation(() => Promise.resolve(mockResult[0]));
        static find = jest.fn().mockImplementation(() => Promise.resolve(mockResult));
        static updateOne = jest.fn().mockImplementation(() => Promise.resolve({ nModified: 1 }));
        static deleteOne = jest.fn().mockImplementation(() => Promise.resolve({ deletedCount: 1 }));
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            providers: [
                UserService,
                {
                    provide: getModelToken('User'),
                    useValue: mockModel,
                },
            ],
        }).compile();

        service = module.get<UserService>(UserService);
        userModel = module.get(getModelToken('User'));
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('Unit Test Get User', () => {
        it('should call property method find in model', async () => {
            const spy = jest.spyOn(userModel, 'find');
            service.getUsers();
            expect(spy).toHaveBeenCalled();
            spy.mockClear();
        });

        it('should response data', async () => {
            const result = await service.getUsers();
            expect(mockResult).toMatchObject(result);
        });
    });

    describe('Unit Test Create User', () => {
        it('should response data', async () => {
            const result = await service.createUser(mockResult[0]);
            expect(mockResult[0]).toMatchObject(result);
        });
    });

    describe('Unit Test Delete User', () => {
        it('should call property method find in model', async () => {
            const spy = jest.spyOn(userModel, 'deleteOne');
            service.deleteUser('123');
            expect(spy).toHaveBeenCalled();
            spy.mockClear();
        });

        it('should response data', async () => {
            const result = await service.deleteUser('123');
            expect(true).toEqual(result);
        });
    });

    describe('Unit Test Update User', () => {
        it('should call property method find in model', async () => {
            const spy = jest.spyOn(userModel, 'updateOne');
            service.updateUser('123', mockResult[0]);
            expect(spy).toHaveBeenCalled();
            spy.mockClear();
        });

        it('should response data', async () => {
            const result = await service.updateUser('123', mockResult[0]);
            expect(true).toEqual(result);
        });
    });
});
