import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";
import { ServiceType } from "./ServiceType";
import { ServiceComment } from "./ServiceComment";

@Entity({ name: 'Service' })
export class Service {
    @PrimaryColumn()
    id!: string;

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'granted_entry_user_id' })
    granted_entry_user_id!: string;

    @ManyToOne(() => User, (user) => user.id, { nullable: true })
    @JoinColumn({ name: 'granted_exit_user_id' })
    granted_exit_user_id!: string;

    @OneToOne(() => ServiceType, (serviceType) => serviceType.id)
    @JoinColumn({ name: 'id_type' })
    id_type!: number;

    @Column()
    observations!: string;

    @Column()
    folio!: string;

    @Column()
    exitDate!: Date;

    @Column({ type: 'integer' })
    codeclient!: number;

    @Column()
    digital!: string

    @Column()
    cron!: string

    @Column()
    isDelivered!: boolean

    @Column()
    showKeys!: boolean

    @Column()
    verifyUsers!: boolean

    @Column()
    status!: string

    @Column({ nullable: true })
    zones!: string

    @Column({ nullable: true })
    users!: string

    @Column({ type: 'smallint' })
    link!: number

    @CreateDateColumn()
    createdAt!: Date

    @UpdateDateColumn()
    updatedAt!: Date

    @OneToMany(() => ServiceComment, (comment) => comment.id_service)
    comments!: ServiceComment[]
}