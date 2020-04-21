export interface EventModel {
  name: string;
  date: string;
  img: string;
  address: EventAddress;
}

export interface EventAddress {
  place: string;
  xCoordinate: number;
  yCoordinate: number;
}
