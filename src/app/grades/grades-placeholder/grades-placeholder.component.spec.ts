import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesPlaceholderComponent } from './grades-placeholder.component';

describe('GradesPlaceholderComponent', () => {
  let component: GradesPlaceholderComponent;
  let fixture: ComponentFixture<GradesPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradesPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradesPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
