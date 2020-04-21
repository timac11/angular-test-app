import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddEventPageComponent } from './components/add-event-page/add-event-page.component';
import {SharedModule} from '../shared/shared.module';
import {InMemoryDataService} from './services/in-memory-data.service';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {EventsService} from './services/events.service';
import { HttpClientModule } from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {appReducers} from './store/reducers/app.reducer';
import {EffectsModule} from '@ngrx/effects';
import {EventsEffects} from './store/effects/events.effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {CommonModule} from '@angular/common';
import {HomePageModule} from './components/home-page/home-page.module';

@NgModule({
  declarations: [
    AppComponent,
    AddEventPageComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HomePageModule,
    SharedModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 2000}),
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([EventsEffects]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    InMemoryDataService,
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
