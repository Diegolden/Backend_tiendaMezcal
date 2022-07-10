import { Module } from '@nestjs/common';
import { MedidaController } from './medida.controller';
import { MedidaService } from './medida.service';

@Module({
  controllers: [MedidaController],
  providers: [MedidaService]
})
export class MedidaModule {}
