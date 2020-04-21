import {Component} from '@angular/core';
import {ToolbarButton} from '../shared/components/toolbar/toolbar.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // tslint:disable-next-line:no-host-metadata-property
  host: {class: 'app-root'}
})
export class AppComponent {
  title = 'angular-test-app';
  toolbarButtons: ToolbarButton[] = [
    {
      id: 'home',
      name: 'Home'
    },
    {
      id: 'map',
      name: 'Map'
    }
  ];

  constructor(private router: Router) {
  }

  public toolbarButtonClick(button): void {
    this.router.navigate([button.id]);
  }
}
