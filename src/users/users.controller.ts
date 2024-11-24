import {
  Body,
  Controller,
  Logger,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-users.dto';
import { UsersService } from './users.service';
import { AuthDTO } from './dtos/auth-dto';
import { SendNotificationToken } from './dtos/send-notification.token.dto';

@Controller('api/v1/users')
export class UsersController {
  private logger = new Logger(UsersController.name);

  constructor(private userService: UsersService) {}
  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() payload: CreateUserDTO) {
    this.logger.log('create', payload);
    return await this.userService.create(payload);
  }

  @Post('/session')
  @UsePipes(ValidationPipe)
  session(@Body() payload: AuthDTO) {
    return this.userService.session(payload);
  }

  @Post('/token/notification')
  @UsePipes(ValidationPipe)
  async sendNotificationToken(@Body() payload: SendNotificationToken) {
    this.logger.log('sendNotificationToken', payload);
    return this.userService.addNotificationToken(payload);
  }
}
