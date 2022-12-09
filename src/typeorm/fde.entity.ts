import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FDE {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id',
    })
    id: number;

    @Column({
        type: 'timestamptz',
        nullable: true,
    })
    first_date_of_execution: Date;

    @Column({
        type: 'int',
        nullable: true,})
    repeat: number

    @Column({
        nullable: true,
    })
    task_id: String
}