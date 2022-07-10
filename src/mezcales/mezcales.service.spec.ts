import { Test, TestingModule } from '@nestjs/testing';
import { MezcalesService } from './mezcales.service';

describe('MezcalesService', () => {
  let service: MezcalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MezcalesService],
    }).compile();

    service = module.get<MezcalesService>(MezcalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
