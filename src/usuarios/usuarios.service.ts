import { CreateUsuariosDTO } from './DTO/create-usuarios';
import { Usuarios } from './entities/usuarios.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
    constructor (
        @InjectRepository(Usuarios)
        private usuarios: Repository <Usuarios>
    ){}

    async GetAll(){
        return await this.usuarios.find();
    }

    async findUsuario(id: any){
        return await this.usuarios.findOne({
            where: {'id_usuario': id}
        });
    }

    async createUsuario(UsuarioNuevo: CreateUsuariosDTO){
        const newUser = new Usuarios();
        newUser.nombre = UsuarioNuevo.nombre;
        newUser.a_p = UsuarioNuevo.a_p;
        newUser.a_m = UsuarioNuevo.a_m;
        newUser.usuario = UsuarioNuevo.usuario;
        newUser.correo = UsuarioNuevo.correo;
        newUser.password = UsuarioNuevo.password;
        this.usuarios.save(newUser);
    }

    async deleteUser(id: number){
        return await this.usuarios.delete(id);
    }
}
