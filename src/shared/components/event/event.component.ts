import {Component, Input, OnInit} from '@angular/core';

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
export class EventComponent implements OnInit {

  @Input()
  public image: string;

  @Input()
  public eventInfo: EventInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
