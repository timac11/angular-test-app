import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EventsService} from '../../services/events.service';
import {EventsTypeActions, LoadEventsSuccessAction} from '../actions/events.actions';
import {switchMap} from 'rxjs/operators';
import {EventModel} from '../../model/event.model';
import {of} from 'rxjs';

@Injectable()
export class EventsEffects {
  constructor(private actions$: Actions,
              private eventsService: EventsService) {
  }

  @Effect()
  getEvents = this.actions$.pipe(
    ofType(EventsTypeActions.LoadEvents),
    switchMap(() => this.eventsService.getEvents()),
    switchMap((events: EventModel[]) =>  of(new LoadEventsSuccessAction(events)))
  );
}
