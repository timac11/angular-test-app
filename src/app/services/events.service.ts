import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {EventModel} from '../model/event.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventsService {
  constructor(private http: HttpClient) {}

  getEvents(): Observable<EventModel[]> {
    console.log(this.http.get<EventModel[]>('/api/events'));
    return this.http.get<EventModel[]>('/api/events');
  }

  putEvent(event: EventModel): Observable<EventModel> {
    return (this.http.post('/api/event', {event}) as Observable<EventModel>);
  }
}
