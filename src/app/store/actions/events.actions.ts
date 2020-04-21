import {Action} from '@ngrx/store';
import {EventModel} from '../../model/event.model';

export enum EventsTypeActions {
  LoadEvents = '[EVENT] Load events',
  LoadEventsSuccess = '[EVENT] Load events success',
  PutEvent = '[EVENT] Put event',
  PutEventSuccess = '[EVENT] Put event success',
  LoadEventsIsLoading = '[Event] loading in process'
}

export class LoadEventsAction implements Action {
  public readonly type: string = EventsTypeActions.LoadEvents;
  constructor(public payload: void) {}
}

export class PutEventAction implements Action {
  public readonly type: string = EventsTypeActions.PutEvent;
  constructor(public payload: EventModel) {}
}

export class LoadEventsIsLoadingAction implements Action {
  public readonly type: string = EventsTypeActions.LoadEventsIsLoading;
  constructor(public payload: boolean) {}
}

export class LoadEventsSuccessAction implements Action{
  public readonly type: string = EventsTypeActions.LoadEventsSuccess;
  constructor(public payload: EventModel[]) {}
}

export class PutEventSuccessAction implements Action{
  public readonly type: string = EventsTypeActions.PutEventSuccess;
  constructor(public payload: EventModel) {}
}

export type EventsActions = LoadEventsSuccessAction |
  PutEventSuccessAction |
  PutEventAction |
  LoadEventsAction |
  LoadEventsIsLoadingAction;
