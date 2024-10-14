import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-users.dto';
import { ClientProxyPingMe } from 'src/proxyrmq/client-proxy';
import { AuthDTO } from './dtos/auth-dto';

@Injectable()
export class UsersService {
  private readonly logger = new Logger();
  private clientOrderProxy =
    this.clientProxyPingMe.getClientUserServiceInstance();

  constructor(private clientProxyPingMe: ClientProxyPingMe) {}
  create(payload: CreateUserDTO) {
    try {
      this.clientOrderProxy.emit('create-user', payload);
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
      this.logger.error('Failed to create user', err);
      throw new Error('Failed to create user');
    }
  }
}
