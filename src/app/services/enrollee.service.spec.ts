import { TestBed } from '@angular/core/testing';

import { EnrolleeService } from './enrollee.service';

describe('EnrolleeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnrolleeService = TestBed.get(EnrolleeService);
    expect(service).toBeTruthy();
  });
});
