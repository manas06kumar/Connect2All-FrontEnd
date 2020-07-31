import { TestBed } from '@angular/core/testing';

import { PlaceshopService } from './placeshop.service';

describe('PlaceshopService', () => {
  let service: PlaceshopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceshopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
