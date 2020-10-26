import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCarComponent } from './WeatherCar.component';

describe('WeatherCarComponent', () => {
  let component: WeatherCarComponent;
  let fixture: ComponentFixture<WeatherCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
