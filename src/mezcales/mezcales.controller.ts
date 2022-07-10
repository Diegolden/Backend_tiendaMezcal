import { CreateMezcalesDTO } from './DTO/create-mezcales';
import { MezcalesService } from './mezcales.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('mezcales')
export class MezcalesController {
    constructor(private mez: MezcalesService){}

    @Get()
    obtenerMezcales(): any {
        return this.mez.GetAll();
    }

    @Get(':id')
    obtenerMezcal(@Param('id') id: any): any {
        return this.mez.findMezc(id);
    }

    @Post()
    crearMezcales(@Body()Mezcales: CreateMezcalesDTO){
        return this.mez.createMezc(Mezcales);
    }
}
