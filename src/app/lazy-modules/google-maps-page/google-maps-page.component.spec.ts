import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapsPageComponent } from './google-maps-page.component';

describe('GoogleMapsPageComponent', () => {
  let component: GoogleMapsPageComponent;
  let fixture: ComponentFixture<GoogleMapsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleMapsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
