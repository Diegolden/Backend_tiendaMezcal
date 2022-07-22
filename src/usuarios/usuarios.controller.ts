import { CreateUsuariosDTO } from './DTO/create-usuarios';
import { UsuariosService } from './usuarios.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('usuarios')
export class UsuariosController {
    constructor (private use: UsuariosService){}

    @Get()
    ObtenerUser(): any {
        return this.use.GetAll();
    }

    @Get(':id')
    obtenerUser(@Param('id') id: any ): any {
        return this.use.findUsuario(id);
    }

    @Post()
    crearUser(@Body()Usuario: CreateUsuariosDTO){
        return this.use.createUsuario(Usuario);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number): any {
        return this.use.deleteUser(id);
    }
}
