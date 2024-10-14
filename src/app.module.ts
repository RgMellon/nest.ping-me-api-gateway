import { Module } from '@nestjs/common';
import { ProxyrmqModule } from './proxyrmq/proxyrmq.module';
import { ConfigModule } from '@nestjs/config';
import { ClientProxyPingMe } from './proxyrmq/client-proxy';
import { OrderModule } from './order/order.module';
import { NotificationModule } from './notification/notification.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ProxyrmqModule,
    NotificationModule,
    ConfigModule.forRoot({ isGlobal: true }),
    OrderModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [ClientProxyPingMe],
})
export class AppModule {}
