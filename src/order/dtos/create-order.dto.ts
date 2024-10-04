import { IsNotEmpty } from 'class-validator';

class LocationDTO {
  latitude: number;
  longitude: number;
}

export class CreateOrderDTO {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  amount: number;

  status: Status;

  @IsNotEmpty()
  location: LocationDTO;
}

enum Status {
  PENDING,
  COMPLETED,
  CANCELLED,
  ACCEPTED,
}
