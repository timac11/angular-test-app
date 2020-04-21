import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {EventModel} from '../../../app/model/event.model';

export interface EventInfo {
  name: string;
  place: string;
  date: string;
}

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  // tslint:disable-next-line:no-host-metadata-property
  host: {class: 'app-event'}
})
export class EventComponent {
  @Input()
  public eventInfo: EventModel;
}
