import { TestBed } from '@angular/core/testing';

import { PrayerServiceService } from './prayer-service.service';

describe('PrayerServiceService', () => {
  let service: PrayerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrayerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
