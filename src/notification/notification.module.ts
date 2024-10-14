import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { ProxyrmqModule } from 'src/proxyrmq/proxyrmq.module';

@Module({
  imports: [ProxyrmqModule],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}
