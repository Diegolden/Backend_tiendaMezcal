import { Module } from '@nestjs/common';
import { TipoMezcalController } from './tipo-mezcal.controller';
import { TipoMezcalService } from './tipo-mezcal.service';

@Module({
  controllers: [TipoMezcalController],
  providers: [TipoMezcalService]
})
export class TipoMezcalModule {}
