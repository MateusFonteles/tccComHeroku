import { TestBed } from '@angular/core/testing';

import { SiblingsService } from './siblings.service';

describe('SiblingsService', () => {
  let service: SiblingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiblingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
