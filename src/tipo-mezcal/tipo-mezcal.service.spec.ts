import { Test, TestingModule } from '@nestjs/testing';
import { TipoMezcalService } from './tipo-mezcal.service';

describe('TipoMezcalService', () => {
  let service: TipoMezcalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoMezcalService],
    }).compile();

    service = module.get<TipoMezcalService>(TipoMezcalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
