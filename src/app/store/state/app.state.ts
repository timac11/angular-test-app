import {EventsState, initialEventsState} from './events.state';
import {RouterReducerState} from '@ngrx/router-store';

export interface AppState {
  events: EventsState;
  router?: RouterReducerState;
}

export const  initialAppState: AppState = {
  events: initialEventsState
};

export function getInitialState() {
  return initialAppState;
}
