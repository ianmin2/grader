import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentPlaceholderComponent } from './assignment-placeholder.component';

describe('AssignmentPlaceholderComponent', () => {
  let component: AssignmentPlaceholderComponent;
  let fixture: ComponentFixture<AssignmentPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
