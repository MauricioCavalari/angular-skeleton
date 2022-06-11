import { TestBed } from '@angular/core/testing';

import { InitialGuard } from './initial.guard';

describe('InitialGuard', () => {
  let guard: InitialGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InitialGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
