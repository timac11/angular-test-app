import {RouterModule, Routes} from '@angular/router';
import {GoogleMapsPageComponent} from './google-maps-page.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: GoogleMapsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleMapPageRoutingModule {
}
