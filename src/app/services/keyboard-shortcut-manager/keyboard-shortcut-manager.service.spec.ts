import { TestBed } from '@angular/core/testing';

import { KeyboardShortcutManagerService } from './keyboard-shortcut-manager.service';

describe('KeyboardShortcutManagerService', () => {
  let service: KeyboardShortcutManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyboardShortcutManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
