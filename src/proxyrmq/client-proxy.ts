import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class ClientProxyPingMe {
  constructor(private configService: ConfigService) {}

  public getClientOrderServiceInstance(): ClientProxy {
    console.log(this.configService.get<string>('RABBITMQ_USER'), 'user');
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [
          `amqp://${this.configService.get<string>('RABBITMQ_USER')}:${this.configService.get<string>('RABBITMQ_PASSWORD')}@${this.configService.get<string>('RABBITMQ_URL')}`,
        ],
        queue: 'order-service',
      },
    });
  }
}
