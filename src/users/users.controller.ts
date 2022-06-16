import { Controller, UseGuards, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuthGuard } from 'src/guards/AuthGuards';
import { UserEntity } from './user.entity';
import { UsersService } from './users.service';


@Controller()
export class UserController {
  constructor(
    private readonly userService: UsersService
  ) { }

  @MessagePattern({ role: 'user', cmd: 'get' })
  getUser(data: any): Promise<UserEntity> {
    return this.userService.findOne({ username: data.username });
  }

  @UseGuards(AuthGuard)
  @Get('greet') 
  async greet(): Promise<string> {
    return 'Greetings authenticated user';
  }
}