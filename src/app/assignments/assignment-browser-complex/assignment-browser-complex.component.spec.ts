import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentBrowserComplexComponent } from './assignment-browser-complex.component';

describe('AssignmentBrowserComplexComponent', () => {
  let component: AssignmentBrowserComplexComponent;
  let fixture: ComponentFixture<AssignmentBrowserComplexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentBrowserComplexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentBrowserComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
