import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesReviewerComponent } from './grades-reviewer.component';

describe('GradesReviewerComponent', () => {
  let component: GradesReviewerComponent;
  let fixture: ComponentFixture<GradesReviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradesReviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradesReviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
