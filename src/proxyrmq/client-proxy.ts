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

  public getClientNotificationServiceInstance(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [
          `amqp://${this.configService.get<string>('RABBITMQ_USER')}:${this.configService.get<string>('RABBITMQ_PASSWORD')}@${this.configService.get<string>('RABBITMQ_URL')}`,
        ],
        queue: 'notification-service',
      },
    });
  }

  public getClientUserServiceInstance(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [
          `amqp://${this.configService.get<string>('RABBITMQ_USER')}:${this.configService.get<string>('RABBITMQ_PASSWORD')}@${this.configService.get<string>('RABBITMQ_URL')}`,
        ],
        queue: 'users-service',
      },
    });
  }
}
