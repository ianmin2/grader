import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentSubmissionBrowserComponent } from './assignment-submission-browser.component';

describe('AssignmentSubmissionBrowserComponent', () => {
  let component: AssignmentSubmissionBrowserComponent;
  let fixture: ComponentFixture<AssignmentSubmissionBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentSubmissionBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentSubmissionBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
