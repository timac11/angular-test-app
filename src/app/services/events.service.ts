import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {EventModel} from '../model/event.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventsService {
  constructor(private http: HttpClient) {}

  getEvents(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>('/api/events');
  }

  putEvent(event: EventModel): Observable<EventModel> {
    console.log(event);
    return (this.http.post('/api/events', event) as Observable<EventModel>);
  }
}
