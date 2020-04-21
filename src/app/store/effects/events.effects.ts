import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EventsService} from '../../services/events.service';
import {
  EventsActions,
  EventsTypeActions,
  LoadEventsIsLoadingAction,
  LoadEventsSuccessAction,
  PutEventSuccessAction
} from '../actions/events.actions';
import {switchMap} from 'rxjs/operators';
import {EventModel} from '../../model/event.model';
import {of} from 'rxjs';
import {AppState} from '../state/app.state';
import {Store} from '@ngrx/store';

@Injectable()
export class EventsEffects {
  constructor(private actions$: Actions,
              private store$: Store<AppState>,
              private eventsService: EventsService) {
  }

  @Effect()
  putEvent = this.actions$.pipe(
    ofType(EventsTypeActions.PutEvent),
    switchMap((action: EventsActions) => this.eventsService.putEvent((action.payload) as EventModel)),
    switchMap((event: EventModel) => of(new PutEventSuccessAction(event)))
  );

  @Effect()
  getEvents = this.actions$.pipe(
    ofType(EventsTypeActions.LoadEvents),
    switchMap(() => this.eventsService.getEvents()),
    switchMap((events: EventModel[]) =>  {
      this.store$.dispatch(new LoadEventsIsLoadingAction(false));
      return of(new LoadEventsSuccessAction(events));
    })
  );
}
