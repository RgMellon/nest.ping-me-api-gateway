import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-users.dto';
import { UsersService } from './users.service';
import { AuthDTO } from './dtos/auth-dto';

@Controller('api/v1/users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() payload: CreateUserDTO) {
    return this.userService.create(payload);
  }

  @Post('/session')
  @UsePipes(ValidationPipe)
  session(@Body() payload: AuthDTO) {
    return this.userService.session(payload);
  }
}
