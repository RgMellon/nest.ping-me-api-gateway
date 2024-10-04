import { Module } from '@nestjs/common';
import { ClientProxyPingMe } from './client-proxy';

@Module({
  imports: [],
  providers: [ClientProxyPingMe],
  exports: [ClientProxyPingMe],
})
export class ProxyrmqModule {}
