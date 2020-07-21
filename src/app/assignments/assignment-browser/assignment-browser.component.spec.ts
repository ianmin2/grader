import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentBrowserComponent } from './assignment-browser.component';

describe('AssignmentBrowserComponent', () => {
  let component: AssignmentBrowserComponent;
  let fixture: ComponentFixture<AssignmentBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
