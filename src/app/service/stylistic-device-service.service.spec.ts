import { TestBed } from '@angular/core/testing';

import { StylisticDeviceService } from './stylistic-device-service.service';

describe('StylisticDeviceServiceService', () => {
  let service: StylisticDeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StylisticDeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
