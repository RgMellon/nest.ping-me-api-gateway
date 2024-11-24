import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDTO } from './dtos/create-order.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/v1/order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() payload: CreateOrderDTO) {
    return this.orderService.createOrder(payload);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAll() {
    return await this.orderService.getAll();
  }
}
