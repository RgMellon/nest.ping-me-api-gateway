import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dtos/create-notification.dto';

@Controller('api/v1/notification')
export class NotificationController {
  constructor(private notificationService: NotificationService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() payload: CreateNotificationDto) {
    return this.notificationService.send(payload);
  }

  @Get()
  @UsePipes(ValidationPipe)
  getNearbyUsersByLocation(
    @Query('latitude') latitude: number,
    @Query('longitude') longitude: number,
  ) {
    return this.notificationService.getNearbyUsers({
      location: {
        latitude: Number(latitude),
        longitude: Number(longitude),
      },
    });
  }
}
