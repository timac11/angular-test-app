import {NgModule} from '@angular/core';
import {EventFormComponent} from './event-form.component';
import {TextInputModule} from '../text-input/text-input.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    TextInputModule,
    ReactiveFormsModule
  ],
  declarations: [EventFormComponent],
  exports: [EventFormComponent]
})
export class EventFormModule {}
