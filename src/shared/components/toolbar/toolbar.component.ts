import {Component, EventEmitter, Input, Output} from '@angular/core';

export interface ToolbarButton {
  id: string;
  name: string;
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  // tslint:disable-next-line:no-host-metadata-property
  host: {class: 'app-toolbar'}
})
export class ToolbarComponent {
  @Input()
  public buttons: ToolbarButton[] = [];

  @Output()
  public buttonClick: EventEmitter<ToolbarButton> = new EventEmitter<ToolbarButton>();

  constructor() { }

  public onButtonClick(button: ToolbarButton) {
    this.buttonClick.emit(button);
  }
}
