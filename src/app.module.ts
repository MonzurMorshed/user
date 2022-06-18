import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/user.entity';
import { UserModule } from './users/users.module';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'users_db',
    port: 5432,
    username: 'root',
    password: 'root',
    database: 'users',
    entities: [UserEntity],
    synchronize: true,
  })],
})

export class AppModule {}
