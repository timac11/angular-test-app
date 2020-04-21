import {NgModule} from '@angular/core';
import {EventsContainerComponent} from './events-container.component';
import {EventModule} from '../event/event.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [EventModule, CommonModule],
  declarations: [EventsContainerComponent],
  exports: [EventsContainerComponent]
})
export class EventsContainerModule {}
