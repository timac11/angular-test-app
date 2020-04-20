import {Component, forwardRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextInputComponent),
    multi: true
  }]
})
export class TextInputComponent implements OnChanges, ControlValueAccessor {

  @Input()
  public value = '';

  @Input()
  public labelText = '';

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value) {
      this.onChange(changes.value.currentValue);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(value: any): void {
    if (value) {
      this.value = value;
    } else {
      this.value = '';
    }
  }

  public changeValue(value: string): void {
    this.value = value;
    this.onChange(value);
  }

  public onChange(_: any) {
  }
}
