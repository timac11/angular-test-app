import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-maps-page',
  templateUrl: './google-maps-page.component.html',
  styleUrls: ['./google-maps-page.component.scss']
})
export class GoogleMapsPageComponent implements OnInit {

  texto = 'Wenceslau Braz - Cuidado com as cargas';
  lat = -23.8779431;
  lng = -49.8046873;
  zoom = 15;

  constructor() { }

  ngOnInit(): void {
  }

}
