import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputManagerComponent } from './output-manager.component';

describe('OutputManagerComponent', () => {
  let component: OutputManagerComponent;
  let fixture: ComponentFixture<OutputManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
