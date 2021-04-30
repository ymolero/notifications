import { Test, TestingModule } from '@nestjs/testing';
import { PushInController } from './push-in.controller';

describe('PushInController', () => {
  let controller: PushInController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PushInController],
    }).compile();

    controller = module.get<PushInController>(PushInController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
