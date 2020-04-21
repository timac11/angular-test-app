import { Component, OnInit } from '@angular/core';
import {AppState} from '../../store/state/app.state';
import {Store} from '@ngrx/store';
import {LoadEventsAction} from '../../store/actions/events.actions';
import {select} from '@ngrx/store';
import {getEvents} from '../../store/selectors/events.selector';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public events$ = this.store.pipe(select(getEvents));

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadEventsAction());
  }

}
