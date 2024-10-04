import { Module } from '@nestjs/common';
import { OrderServiceModule } from './order-service/order-service.module';
import { ProxyrmqModule } from './proxyrmq/proxyrmq.module';
import { ConfigModule } from '@nestjs/config';
import { ClientProxyPingMe } from './proxyrmq/client-proxy';

@Module({
  imports: [
    OrderServiceModule,
    ProxyrmqModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [],
  providers: [ClientProxyPingMe],
})
export class AppModule {}
