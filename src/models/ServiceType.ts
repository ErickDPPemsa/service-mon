import { Column, Entity, Index, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Service } from "./Service";

@Entity({ name: 'ServiceType' })
export class ServiceType {
    @PrimaryGeneratedColumn()
    id!: number

    @Index({ unique: true })
    @Column({ type: 'varchar' })
    title!: string

    @OneToOne((_) => Service, (service) => service.id)
    service!: Service
}