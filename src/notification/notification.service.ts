import { Injectable, Logger } from '@nestjs/common';
import { CreateNotificationDto } from './dtos/create-notification.dto';
import { ClientProxyPingMe } from 'src/proxyrmq/client-proxy';
import { NearbyUsers } from './dtos/nearby-user';

@Injectable()
export class NotificationService {
  private logger = new Logger(NotificationService.name);
  private clientOrderProxy =
    this.clientProxyPingMe.getClientNotificationServiceInstance();

  constructor(private clientProxyPingMe: ClientProxyPingMe) {}

  send(payload: CreateNotificationDto) {
    this.clientOrderProxy.emit('send-notification', payload);
  }

  getNearbyUsers(payload: NearbyUsers) {
    this.logger.log(
      `Getting nearby users at ${payload.location.latitude}, ${payload.location.longitude}`,
    );

    return this.clientOrderProxy.send('get-nearby-users', payload).toPromise();
  }
}
