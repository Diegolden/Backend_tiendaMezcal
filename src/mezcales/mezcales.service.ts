import { mezcales } from './entities/mezcales.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMezcalesDTO } from './DTO/create-mezcales';

@Injectable()
export class MezcalesService {
    constructor(
        @InjectRepository(mezcales)
        private mezcales:Repository <mezcales>,
    ){}

    async GetAll(){
        return await this.mezcales.find();
    }

    async findMezc(id: any){
        return await this.mezcales.findOne({
            where: {'id_mezcal': id}
        });
    }

    async createMezc(MezcalNuevo:CreateMezcalesDTO){
        const newMez = new mezcales();
        newMez.nombre = MezcalNuevo.nombre;
        newMez.stock = MezcalNuevo.stock;
        newMez.precio = MezcalNuevo.precio;
        newMez.descripcion = MezcalNuevo.descripcion;
        this.mezcales.save(newMez);
    }

    async deleteMezc(id:number){
        return await this.mezcales.delete(id);
    }
}
