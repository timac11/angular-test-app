import {ActionReducerMap} from '@ngrx/store';
import {AppState} from '../state/app.state';
import {routerReducer} from '@ngrx/router-store';
import {eventsReducer} from './events.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  events: eventsReducer
};
