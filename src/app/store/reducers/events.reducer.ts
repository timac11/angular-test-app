import {EventsState, initialEventsState} from '../state/events.state';
import {EventsActions, EventsTypeActions} from '../actions/events.actions';
import {EventModel} from '../../model/event.model';

export const eventsReducer = (
  state = initialEventsState,
  action: EventsActions
): EventsState => {
  switch (action.type) {
    case EventsTypeActions.LoadEventsIsLoading:
      return {...state, isLoading: (action.payload as boolean)};
    case EventsTypeActions.LoadEventsSuccess:
      return {...state, events: (action.payload as EventModel[])};
    case EventsTypeActions.PutEventSuccess:
      const events: EventModel[] = [...state.events, (action.payload as EventModel)];
      return {...state, ...{events}};
    default:
      return state;
  }
};
