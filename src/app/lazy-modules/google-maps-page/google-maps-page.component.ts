import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {EventModel} from '../../model/event.model';
import {select, Store} from '@ngrx/store';
import {getEvents, getIsLoading} from '../../store/selectors/events.selector';
import {AppState} from '../../store/state/app.state';
import {LoadEventsAction, LoadEventsIsLoadingAction} from '../../store/actions/events.actions';

@Component({
  selector: 'app-google-maps-page',
  templateUrl: './google-maps-page.component.html',
  styleUrls: ['./google-maps-page.component.scss']
})
export class GoogleMapsPageComponent implements OnInit, OnDestroy {

  public events$: Observable<EventModel[]> = this.store.pipe(select(getEvents));
  public isLoading = this.store.pipe(select(getIsLoading));
  public currentLatitude: number;
  public currentLongitude: number;
  public eventsSubscription: Subscription;
  public zoom = 4;
  public currentEvent: EventModel;

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.eventsSubscription = this.events$.subscribe((events: EventModel[]) => {
      this.currentEvent = events && events[0] || null;
    });
    this.store.dispatch(new LoadEventsIsLoadingAction(true));
    this.store.dispatch(new LoadEventsAction());
  }

  ngOnDestroy(): void {
    this.eventsSubscription?.unsubscribe();
  }

}
