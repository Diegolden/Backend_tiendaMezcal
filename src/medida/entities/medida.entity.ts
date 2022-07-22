import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class medida{
    @PrimaryGeneratedColumn()
    id_medida:number;
    @Column()
    ml: number;
}