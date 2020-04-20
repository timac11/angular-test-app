export interface EventModel {
  name: string;
  date: Date;
  address: EventAddress;
}

export interface EventAddress {
  place: string;
  xCoordinate: number;
  yCoordinate: number;
}
