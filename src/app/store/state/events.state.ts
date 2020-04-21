import {EventModel} from '../../model/event.model';

export interface EventsState {
  events: EventModel[];
  isLoading: boolean;
}

export const initialEventsState: EventsState = {
  events: [],
  isLoading: false
};
