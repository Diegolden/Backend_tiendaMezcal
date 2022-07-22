import { CreateMedidaDTO } from './DTO/create-medida';
import { MedidaService } from './medida.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('medida')
export class MedidaController {
    constructor (private med:MedidaService){}

    @Get()
    obtenerMedidas(): any {
        return this.med.GetAll();
    }

    @Get(':id')
    obtenerMedida(@Param('id') id: any): any{
        return this.med.findMezc(id);
    }

    @Post()
    crearMedida(@Body()Medida: CreateMedidaDTO){
        return this.med.createMedida(Medida);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number): any {
        return this.med.deleteMedida(id);
    }
}
