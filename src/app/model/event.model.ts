export interface EventModel {
  name: string;
  date: Date;
  img: string;
  address: EventAddress;
}

export interface EventAddress {
  place: string;
  xCoordinate: number;
  yCoordinate: number;
}
