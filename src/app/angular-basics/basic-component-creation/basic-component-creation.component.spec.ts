import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicComponentCreationComponent } from './basic-component-creation.component';

describe('BasicComponentCreationComponent', () => {
  let component: BasicComponentCreationComponent;
  let fixture: ComponentFixture<BasicComponentCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicComponentCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicComponentCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
