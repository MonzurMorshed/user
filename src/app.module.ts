import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from './users/user.entity';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'users_db',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'users',
    entities: [UserEntity],
    synchronize: true,
  })],
  controllers: [UsersController],
  providers: [],
})
export class AppModule {}
