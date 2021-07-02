/**
 * @param id              // Идентификатор пользователя
 * @param login           // Имя пользователя
 * @param password        // Пароль пользователя 
 */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  login: string;

  @Column({nullable: false})
  passwordHash?: string;

  @Column({nullable: false})
  nikName: string;
  
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}