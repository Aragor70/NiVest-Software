import { TestBed } from '@angular/core/testing';

import { NivestService } from './nivest.service';

describe('NivestService', () => {
  let service: NivestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NivestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
