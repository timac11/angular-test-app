import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {AddEventPageComponent} from './components/add-event-page/add-event-page.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'add-event',
    component: AddEventPageComponent
  },
  {
    path: 'map',
    loadChildren: () => import('./lazy-modules/google-maps-page/google-maps-page.module').then(m => m.GoogleMapsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
