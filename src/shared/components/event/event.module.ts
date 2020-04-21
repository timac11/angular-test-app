import {NgModule} from '@angular/core';
import {EventComponent} from './event.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [EventComponent],
  exports: [EventComponent]
})
export class EventModule {}
