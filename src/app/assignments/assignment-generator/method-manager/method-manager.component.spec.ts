import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodManagerComponent } from './method-manager.component';

describe('MethodManagerComponent', () => {
  let component: MethodManagerComponent;
  let fixture: ComponentFixture<MethodManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
