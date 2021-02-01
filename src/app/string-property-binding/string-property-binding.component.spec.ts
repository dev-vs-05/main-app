import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringPropertyBindingComponent } from './string-property-binding.component';

describe('StringPropertyBindingComponent', () => {
  let component: StringPropertyBindingComponent;
  let fixture: ComponentFixture<StringPropertyBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringPropertyBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
