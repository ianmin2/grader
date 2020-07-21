import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentGeneratorComponent } from './assignment-generator.component';

describe('AssignmentGeneratorComponent', () => {
  let component: AssignmentGeneratorComponent;
  let fixture: ComponentFixture<AssignmentGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
