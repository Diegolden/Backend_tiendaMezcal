import { mezcales } from './entities/mezcales.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { MezcalesController } from './mezcales.controller';
import { MezcalesService } from './mezcales.service';

@Module({
  imports: [TypeOrmModule.forFeature([mezcales])],
  controllers: [MezcalesController],
  providers: [MezcalesService]
})
export class MezcalesModule {}
