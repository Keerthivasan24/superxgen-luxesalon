import { TestBed } from '@angular/core/testing';

import { StyleAiService } from './style-ai.service';

describe('StyleAiService', () => {
  let service: StyleAiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StyleAiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
