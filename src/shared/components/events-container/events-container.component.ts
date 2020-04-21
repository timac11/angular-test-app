import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {EventModel} from '../../../app/model/event.model';

@Component({
  selector: 'app-events-container',
  templateUrl: './events-container.component.html',
  styleUrls: ['./events-container.component.scss'],
  // tslint:disable-next-line:no-host-metadata-property
  host: {class: 'app-events-container'}
})
export class EventsContainerComponent implements OnInit, OnChanges {

  @Input()
  public events: EventModel[] = [];

  constructor() { }

  public addEvent(event: Event): void {

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
