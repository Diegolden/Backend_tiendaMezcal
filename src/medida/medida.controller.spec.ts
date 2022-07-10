import { Test, TestingModule } from '@nestjs/testing';
import { MedidaController } from './medida.controller';

describe('MedidaController', () => {
  let controller: MedidaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedidaController],
    }).compile();

    controller = module.get<MedidaController>(MedidaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
