import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesBrowserComponent } from './grades-browser.component';

describe('GradesBrowserComponent', () => {
  let component: GradesBrowserComponent;
  let fixture: ComponentFixture<GradesBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradesBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradesBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
