import {Component, OnInit} from '@angular/core';
import {AppState} from '../../store/state/app.state';
import {Store} from '@ngrx/store';
import {EventAddress, EventModel} from '../../model/event.model';
import {EventsTypeActions, PutEventAction} from '../../store/actions/events.actions';

// while hardcoded link
const imageUrl = 'https://lh5.googleusercontent.com/p/AF1QipO7obThlZ63X5STkOOZA8Uw62U5LBY-lZndRG8i=s1016-k-no';

@Component({
  selector: 'app-add-event-page',
  templateUrl: './add-event-page.component.html',
  styleUrls: ['./add-event-page.component.scss']
})
export class AddEventPageComponent implements OnInit {

  constructor(private store: Store<AppState>) {
  }

  public currentEvent: EventModel = {
    img: imageUrl,
    name: '',
    date: '',
    address: {
      place: '',
      xCoordinate: 0,
      yCoordinate: 0
    }
  };

  ngOnInit(): void {
  }

  public createEvent() {
    this.store.dispatch(new PutEventAction(this.currentEvent));
  }

  public valueChanged(values) {
    const address: EventAddress = this.currentEvent?.address;
    this.currentEvent = {
      ...this.currentEvent,
      name: values.name,
      date: values.date,
      address: {
        ...address,
        place: values.place
      }
    };
  }

}
