import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServerOnclickComponent } from './add-server-onclick.component';

describe('AddServerOnclickComponent', () => {
  let component: AddServerOnclickComponent;
  let fixture: ComponentFixture<AddServerOnclickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServerOnclickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServerOnclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
