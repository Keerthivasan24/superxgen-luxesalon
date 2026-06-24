import { TestBed } from '@angular/core/testing';

import { SalonDetailService } from './salon-detail.service';

describe('SalonDetailService', () => {
  let service: SalonDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalonDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
