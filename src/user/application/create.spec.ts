import { HttpModule, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Create } from './create';

describe('Application Service Create', () => {
    let service: Create;
    let app: INestApplication;

    const mockResult: Array<any> = [
        {
            name: 'testing',
            username: 'testing',
            email: 'testing@bdsol.com.ar',
            createdAt: '10/10/2021',
        },
    ];

    const params = {
        name: 'testing',
        username: 'testing',
        email: 'testing',
    };

    class mockRepository {
        constructor(private data) {}
        static create = jest.fn().mockImplementation(() => Promise.resolve(mockResult[0]));
    }

    beforeEach(async () => {
        const moduleRef: TestingModule = await Test.createTestingModule({
            imports: [HttpModule],
            providers: [Create],
        }).compile();

        service = moduleRef.get<Create>(Create);
        app = moduleRef.createNestApplication();
        await app.init();
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('Unit Test Service', () => {
        it('Should succesfull create user', async () => {
            const newInstance = new Create(mockRepository);
            const result = await newInstance.exec(params);
            expect(mockResult[0]).toMatchObject(result);
        });
    });
});
