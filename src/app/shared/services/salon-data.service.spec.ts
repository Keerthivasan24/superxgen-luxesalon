import { TestBed } from '@angular/core/testing';

import { SalonDataService } from './salon-data.service';

describe('SalonDataService', () => {
  let service: SalonDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalonDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
