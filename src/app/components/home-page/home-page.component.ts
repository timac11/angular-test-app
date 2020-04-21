import { Component, OnInit } from '@angular/core';
import {AppState} from '../../store/state/app.state';
import {Store} from '@ngrx/store';
import {LoadEventsAction, LoadEventsIsLoadingAction} from '../../store/actions/events.actions';
import {select} from '@ngrx/store';
import {getEvents, getIsLoading} from '../../store/selectors/events.selector';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {EventModel} from '../../model/event.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public events$: Observable<EventModel[]> = this.store.pipe(select(getEvents));

  public isLoading = this.store.pipe(select(getIsLoading));

  constructor(private store: Store<AppState>,
              private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadEventsIsLoadingAction(true));
    this.store.dispatch(new LoadEventsAction());
  }

  public navigateToCreateEvent() {
    this.router.navigate(['add-event']);
  }

}
