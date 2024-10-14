import { IsNotEmpty } from 'class-validator';

class LocationDTO {
  latitude: number;
  longitude: number;
}

export class NearbyUsers {
  @IsNotEmpty()
  location: LocationDTO;
}
