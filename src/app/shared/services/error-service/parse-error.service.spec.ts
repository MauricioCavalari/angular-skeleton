import { TestBed } from '@angular/core/testing';

import { ParseErrorService } from './parse-error.service';

describe('ParseErrorService', () => {
  let service: ParseErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParseErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
