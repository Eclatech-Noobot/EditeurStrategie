import { TestBed } from '@angular/core/testing';

import { StrategieManagerService } from './strategie-manager.service';

describe('StrategieManagerService', () => {
  let service: StrategieManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrategieManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
