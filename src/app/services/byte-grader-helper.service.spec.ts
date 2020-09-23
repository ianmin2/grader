import { TestBed } from '@angular/core/testing';

import { ByteGraderHelperService } from './byte-grader-helper.service';

describe('ByteGraderHelperService', () => {
  let service: ByteGraderHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ByteGraderHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
