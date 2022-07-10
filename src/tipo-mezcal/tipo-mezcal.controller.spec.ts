import { Test, TestingModule } from '@nestjs/testing';
import { TipoMezcalController } from './tipo-mezcal.controller';

describe('TipoMezcalController', () => {
  let controller: TipoMezcalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoMezcalController],
    }).compile();

    controller = module.get<TipoMezcalController>(TipoMezcalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
