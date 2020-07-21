import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesViewerComponent } from './grades-viewer.component';

describe('GradesViewerComponent', () => {
  let component: GradesViewerComponent;
  let fixture: ComponentFixture<GradesViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradesViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradesViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
