import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Service } from "./Service";

@Entity({ name: 'ServiceComment' })
export class ServiceComment {
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne(() => Service, (service) => service.id)
    @JoinColumn({ name: 'id_service' })
    id_service!: string;

    @Column()
    text!: string;
}