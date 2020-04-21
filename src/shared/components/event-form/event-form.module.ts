import {NgModule} from '@angular/core';
import {EventFormComponent} from './event-form.component';
import {TextInputModule} from '../text-input/text-input.module';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextInputModule,
    ReactiveFormsModule
  ],
  declarations: [EventFormComponent],
  exports: [EventFormComponent]
})
export class EventFormModule {}
