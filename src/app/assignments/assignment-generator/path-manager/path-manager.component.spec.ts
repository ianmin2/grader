import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathManagerComponent } from './path-manager.component';

describe('PathManagerComponent', () => {
  let component: PathManagerComponent;
  let fixture: ComponentFixture<PathManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
