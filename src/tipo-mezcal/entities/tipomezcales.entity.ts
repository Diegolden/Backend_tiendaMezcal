import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tipomezcales{
    @PrimaryGeneratedColumn()
    id_tipo_mezcal:number;
    @Column()
    nombre:string;
}