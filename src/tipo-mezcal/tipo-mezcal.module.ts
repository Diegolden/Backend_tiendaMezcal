import { TypeOrmModule } from '@nestjs/typeorm';
import { Tipomezcales } from './entities/tipomezcales.entity';
import { Module } from '@nestjs/common';
import { TipoMezcalController } from './tipo-mezcal.controller';
import { TipoMezcalService } from './tipo-mezcal.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tipomezcales])],
  controllers: [TipoMezcalController],
  providers: [TipoMezcalService]
})
export class TipoMezcalModule {}
