import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // tslint:disable-next-line:no-host-metadata-property
  host: {class: 'app-header'}
})
export class HeaderComponent {
  constructor() { }
}
