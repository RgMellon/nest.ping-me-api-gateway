import { IsNotEmpty } from 'class-validator';

class LocationDTO {
  latitude: number;
  longitude: number;
}

export class CreateNotificationDto {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  location: LocationDTO;
}
