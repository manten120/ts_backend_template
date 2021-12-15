import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users') // テーブル名 users
export class UserORMEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  first_name!: string;

  @Column()
  last_name!: string;
}
