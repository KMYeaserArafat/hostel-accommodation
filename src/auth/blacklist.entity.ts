import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Blacklist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  token: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
