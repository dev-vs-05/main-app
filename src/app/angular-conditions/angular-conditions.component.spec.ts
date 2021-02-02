import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularConditionsComponent } from './angular-conditions.component';

describe('AngularConditionsComponent', () => {
  let component: AngularConditionsComponent;
  let fixture: ComponentFixture<AngularConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
