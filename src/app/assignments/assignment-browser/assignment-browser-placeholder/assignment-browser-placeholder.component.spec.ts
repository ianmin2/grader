import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentBrowserPlaceholderComponent } from './assignment-browser-placeholder.component';

describe('AssignmentBrowserPlaceholderComponent', () => {
  let component: AssignmentBrowserPlaceholderComponent;
  let fixture: ComponentFixture<AssignmentBrowserPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentBrowserPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentBrowserPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
