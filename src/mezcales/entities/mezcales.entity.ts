import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class mezcales{
    @PrimaryGeneratedColumn()
    id_mezcal:number;
    @Column()
    nombre:string;
    @Column()
    stock:number;
    @Column()
    precio:number;
    @Column()
    descripcion:string;
    
}