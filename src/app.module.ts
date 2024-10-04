import { Module } from '@nestjs/common';
import { ProxyrmqModule } from './proxyrmq/proxyrmq.module';
import { ConfigModule } from '@nestjs/config';
import { ClientProxyPingMe } from './proxyrmq/client-proxy';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    ProxyrmqModule,
    ConfigModule.forRoot({ isGlobal: true }),
    OrderModule,
  ],
  controllers: [],
  providers: [ClientProxyPingMe],
})
export class AppModule {}
