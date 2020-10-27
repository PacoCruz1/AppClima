import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecatsComponent } from './Forecats.component';

describe('ForecatsComponent', () => {
  let component: ForecatsComponent;
  let fixture: ComponentFixture<ForecatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
