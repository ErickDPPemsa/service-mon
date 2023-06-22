import { Entity, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn, Index, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from "typeorm"
import { Hash } from "../helpers/Hash"
import { Service } from "./Service"

@Entity({ name: 'User' })
export class User {

    @PrimaryGeneratedColumn("uuid")
    id!: string

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'created_By' })
    createdBy!: string

    @Column()
    roles!: string

    @Column()
    fullName!: string

    @Index({ unique: true })
    @Column({ nullable: true })
    email!: string

    @Index({ unique: true })
    @Column()
    userName!: string

    @Column()
    password!: string

    @CreateDateColumn()
    createdAt!: Date

    @UpdateDateColumn()
    updatedAt!: Date

    @OneToMany(() => User, (user) => user.id)
    users!: User[]

    @OneToMany(() => Service, (service) => service.id)
    service!: Service[]

    @BeforeInsert()
    hashPassword() {
        if (this.password) {
            this.password = Hash(this.password);
        }
    }
}
