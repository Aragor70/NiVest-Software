import {
    Column,
    Entity,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  import { Role } from './role.enum';
  
  @Entity('user')
  export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    firstName: string;
  
    @Column()
    lastName: string;
  
    @Column({ unique: true })
    email: string;
    
    @Column({ unique: true })
    company: string;
  
    @Column({ select: false })
    password: string;
  
    @Column({ nullable: true })
    imagePath: string;
  
    @Column({ type: 'enum', enum: Role, default: Role.USER })
    role: Role;
  
}