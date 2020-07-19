import { TestBed } from '@angular/core/testing';

import { PositionManagerService } from './position-manager.service';

describe('PositionManagerService', () => {
  let service: PositionManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PositionManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
