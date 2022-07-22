import { CreateMezcalesDTO } from './DTO/create-mezcales';
import { MezcalesService } from './mezcales.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

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

    @Delete(':id')
    deleteUser(@Param('id') id: number): any {
        return this.mez.deleteMezc(id);
    }
}
