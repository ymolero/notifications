import { HttpModule, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserController } from './user.controller';

describe('UserController', () => {
    let controller: UserController;
    let service: UserService;
    let app: INestApplication;

    const mockResult: Array<any> = [
        {
            name: 'testing',
            username: 'testing',
            email: 'testing@bdsol.com.ar',
            createdAt: '10/10/2021',
        },
    ];

    class mockService {
        constructor(private data) {}
        static getUsers = jest.fn().mockImplementation(() => Promise.resolve(mockResult));
        static createUser = jest.fn().mockImplementation(() => Promise.resolve(mockResult[0]));
        static deleteUser = jest.fn().mockImplementation(() => Promise.resolve(true));
        static updateUser = jest.fn().mockImplementation(() => Promise.resolve(true));
    }

    beforeEach(async () => {
        const moduleRef: TestingModule = await Test.createTestingModule({
            imports: [HttpModule],
            controllers: [UserController],
            providers: [
                {
                    provide: UserService,
                    useValue: mockService,
                }
            ],
        }).compile();

        controller = moduleRef.get<UserController>(UserController);
        service = moduleRef.get<UserService>(UserService);
        app = moduleRef.createNestApplication();
        await app.init();
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('Unit Test Get User', () => {
        it('should call property method get user in service', async () => {
            const spy = jest.spyOn(service, 'getUsers');
            controller.getUsers();
            expect(spy).toHaveBeenCalled();
            spy.mockClear();
        });

        it('should response data', async () => {
            const result = await controller.getUsers();
            expect(mockResult).toMatchObject(result);
        });
    });

    describe('Unit Test Create User', () => {
        it('should call property method create user in service', async () => {
            const spy = jest.spyOn(service, 'createUser');
            controller.createUser(mockResult[0]);
            expect(spy).toHaveBeenCalled();
            spy.mockClear();
        });

        it('should response data', async () => {
            const result = await controller.getUsers();
            expect(mockResult).toMatchObject(result);
        });
    });

    describe('Unit Test Delete User', () => {
        it('should call property method delete user in service', async () => {
            const spy = jest.spyOn(service, 'deleteUser');
            controller.deleteUser('123');
            expect(spy).toHaveBeenCalled();
            spy.mockClear();
        });

        it('should response data', async () => {
            const result = await controller.deleteUser('123');
            expect(true).toEqual(result);
        });
    });

    describe('Unit Test Update User', () => {
        it('should call property method update user in service', async () => {
            const spy = jest.spyOn(service, 'updateUser');
            controller.updateUser(mockResult[0], '123');
            expect(spy).toHaveBeenCalled();
            spy.mockClear();
        });

        it('should response data', async () => {
            const result = await controller.updateUser(mockResult[0], '123');
            expect(true).toEqual(result);
        });
    });

});
