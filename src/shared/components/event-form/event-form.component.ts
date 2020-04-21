import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit, OnDestroy {

  public form: FormGroup;

  @Output()
  public formSubmit: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public valuesChange: EventEmitter<any> = new EventEmitter<any>();

  private formSubscription: Subscription;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      place: ['', Validators.required],
      date: ['', Validators.required]
    });
    this.formSubscription = this.form.valueChanges.subscribe((value => this.valuesChange.emit(value)));
  }

  ngOnDestroy(): void {
    this.formSubscription?.unsubscribe();
  }

  public buttonClick() {
    this.formSubmit.emit(this.form.value);
  }
}
