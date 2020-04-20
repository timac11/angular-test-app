import {NgModule} from '@angular/core';
import {EventsContainerComponent} from './events-container.component';
import {EventModule} from '../event/event.module';

@NgModule({
  imports: [EventModule],
  declarations: [EventsContainerComponent],
  exports: [EventsContainerComponent]
})
export class EventsContainerModule {}
