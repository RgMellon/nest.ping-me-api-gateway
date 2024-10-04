import { Injectable } from '@nestjs/common';
import { CreateOrderDTO } from './dtos/create-order.dto';
import { ClientProxyPingMe } from 'src/proxyrmq/client-proxy';

@Injectable()
export class OrderService {
  private clientOrderProxy =
    this.clientProxyPingMe.getClientOrderServiceInstance();

  constructor(private clientProxyPingMe: ClientProxyPingMe) {}

  createOrder(payload: CreateOrderDTO) {
    this.clientOrderProxy.emit('create-order', payload);
  }
}
