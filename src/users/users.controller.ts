import { Controller, UseGuards, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuthGuard } from 'src/guards/AuthGuards';
import { UserEntity } from './user.entity';
import { UsersService } from './users.service';

export type User = any;
@Controller()
export class UserController {
  constructor(
    private readonly userService: UsersService
  ) { }

  @MessagePattern({ role: 'user', cmd: 'get' })
  /*getUser(data: any): Promise<UserEntity> {
    return this.userService.findOne({ email: data.email });
  }
  */

  async getUser(user: any): Promise<UserEntity | undefined> {
    return this.userService.findOne(user.email);
  }

  @UseGuards(AuthGuard)
  @Get('greet') 
  async greet(): Promise<string> {
    return 'Greetings authenticated user';
  }
}