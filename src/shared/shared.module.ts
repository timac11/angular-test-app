import {NgModule} from '@angular/core';
import {EventModule} from './components/event/event.module';
import {EventFormModule} from './components/event-form/event-form.module';
import {EventsContainerModule} from './components/events-container/events-container.module';
import {HeaderModule} from './components/header/header.module';
import {TextInputModule} from './components/text-input/text-input.module';
import {ToolbarModule} from './components/toolbar/toolbar.module';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {LoaderModule} from './components/loader/loader.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    EventModule,
    EventFormModule,
    EventsContainerModule,
    HeaderModule,
    TextInputModule,
    ToolbarModule,
    LoaderModule
  ],
  exports: [
    EventModule,
    EventFormModule,
    EventsContainerModule,
    HeaderModule,
    TextInputModule,
    ToolbarModule,
    LoaderModule
  ]
})
export class SharedModule {
}
