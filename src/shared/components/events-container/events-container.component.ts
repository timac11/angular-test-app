import {Component, Input, OnInit} from '@angular/core';
import {EventInfo} from '../event/event.component';

interface EventFullInfo {
  eventInfo: EventInfo;
  image: string;
}

@Component({
  selector: 'app-events-container',
  templateUrl: './events-container.component.html',
  styleUrls: ['./events-container.component.scss'],
  // tslint:disable-next-line:no-host-metadata-property
  host: {class: 'app-events-container'}
})
export class EventsContainerComponent implements OnInit {

  @Input()
  public events: EventFullInfo[] = [];

  constructor() { }

  public addEvent(event: Event): void {
    this.events.push({
      image: 'https://sun9-52.userapi.com/c830408/v830408617/9a623/Z_zAKNcxUPY.jpg?ava=1',
      eventInfo: {
        name: 'name',
        place: 'NY',
        date: '13 june'
      }
    });
  }

  ngOnInit(): void {
  }

}
