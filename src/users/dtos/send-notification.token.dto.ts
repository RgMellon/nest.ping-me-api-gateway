import { IsNotEmpty } from 'class-validator';

export class SendNotificationToken {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  token: string;
}
