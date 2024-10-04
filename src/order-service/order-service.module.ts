import { Module } from '@nestjs/common';
import { OrderServiceController } from './order-service.controller';
import { OrderServiceService } from './order-service.service';

@Module({
  controllers: [OrderServiceController],
  providers: [OrderServiceService],
})
export class OrderServiceModule {}