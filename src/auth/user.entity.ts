import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  usermail: string;

  @Column()
  fullName: string;

  @Column()
  age: string;

  @Column()
  gender: string;

  @Column()
  phoneNumber: string;

  @Column()
  password: string;
}
