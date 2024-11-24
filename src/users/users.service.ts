import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-users.dto';
import { ClientProxyPingMe } from 'src/proxyrmq/client-proxy';
import { AuthDTO } from './dtos/auth-dto';
import { SendNotificationToken } from './dtos/send-notification.token.dto';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class UsersService {
  private readonly logger = new Logger();
  private clientOrderProxy =
    this.clientProxyPingMe.getClientUserServiceInstance();

  constructor(private clientProxyPingMe: ClientProxyPingMe) {}
  async create(payload: CreateUserDTO) {
    try {
      return await this.clientOrderProxy
        .send('create-user', payload)
        .toPromise();
    } catch (err) {
      this.logger.error('Failed to create user', err);
      throw new Error('Failed to create user');
    }
  }

  //   Move to a authModule
  async session(payload: AuthDTO) {
    try {
      return await this.clientOrderProxy.send('session', payload).toPromise();
    } catch (err) {
      if (err instanceof RpcException) {
        // Extrair a mensagem de erro do RpcException
        const errorMessage = err.message;

        this.logger.error('Failed to authenticate user:', errorMessage);

        // Retornar o erro HTTP apropriado
        throw new HttpException(errorMessage, HttpStatus.UNAUTHORIZED);
      } else {
        this.logger.error('Unexpected error:', err);
        throw new HttpException(
          'Failed to create user',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  async addNotificationToken(payload: SendNotificationToken) {
    try {
      return await this.clientOrderProxy
        .send('add-notification-token', payload)
        .toPromise();
    } catch (err) {
      this.logger.error('Failed to add token', err);
      throw new Error('Failed to add token');
    }
  }
}
