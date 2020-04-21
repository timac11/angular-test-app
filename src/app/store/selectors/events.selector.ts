import {createSelector} from '@ngrx/store';
import {AppState} from '../state/app.state';
import {EventsState} from '../state/events.state';

export const getEvents = createSelector(
  (state: AppState) => state.events,
  (eventsState: EventsState) => eventsState.events
);

export const getIsLoading = createSelector(
  (state: AppState) => state.events,
  (eventsState: EventsState) => eventsState.isLoading
);
