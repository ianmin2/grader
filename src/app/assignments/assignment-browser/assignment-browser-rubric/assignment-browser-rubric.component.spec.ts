import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentBrowserRubricComponent } from './assignment-browser-rubric.component';

describe('AssignmentBrowserRubricComponent', () => {
  let component: AssignmentBrowserRubricComponent;
  let fixture: ComponentFixture<AssignmentBrowserRubricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentBrowserRubricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentBrowserRubricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
