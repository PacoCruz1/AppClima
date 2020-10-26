import { TestBed } from '@angular/core/testing';

import { ForescatService } from './forescat.service';

describe('ForescatServiceService', () => {
  let service: ForescatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForescatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
