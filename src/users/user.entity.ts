import { hash } from "bcryptjs";
import { IsEmail, Min } from "class-validator";
import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['email'])
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @Min(8)
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }
}
