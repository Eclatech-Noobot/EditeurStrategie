import { TestBed } from '@angular/core/testing';

import { FirebaseStorageManagerService } from './firebase-storage-manager.service';

describe('FirebaseStorageManagerService', () => {
  let service: FirebaseStorageManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseStorageManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
