import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsPageComponent } from './google-maps-page.component';
import {AgmCoreModule} from '@agm/core';
import {GoogleMapPageRoutingModule} from './google-map-page-routing.module';
import {LoaderModule} from '../../../shared/components/loader/loader.module';
import {EventModule} from '../../../shared/components/event/event.module';

@NgModule({
  declarations: [GoogleMapsPageComponent],
  imports: [
    CommonModule,
    GoogleMapPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDYA2UODkBmwcmeaHZ-wHduAhSqED9FwZM'
    }),
    LoaderModule,
    EventModule
  ]
})
export class GoogleMapsPageModule { }
