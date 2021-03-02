import { Test, TestingModule } from '@nestjs/testing';
import { PostCreateUserController } from './post-create-user.controller';

describe('PostCreateUserController', () => {
    let controller: PostCreateUserController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PostCreateUserController],
        }).compile();

        controller = module.get<PostCreateUserController>(PostCreateUserController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
