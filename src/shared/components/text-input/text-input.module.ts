import {NgModule} from '@angular/core';
import {TextInputComponent} from './text-input.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [TextInputComponent],
  declarations: [TextInputComponent]
})
export class TextInputModule {
}
