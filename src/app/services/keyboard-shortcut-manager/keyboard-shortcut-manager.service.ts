import { Injectable } from '@angular/core';
import { ShortcutInput } from "ng-keyboard-shortcuts";

@Injectable({
  providedIn: 'root'
})
export class KeyboardShortcutManagerService {

  private shortcuts: ShortcutInput[] = [];

  constructor() {
    this.initShortcuts();

  }

  initShortcuts() {
    this.shortcuts.push({
        key: "ctrl + s",
        preventDefault: true,
        command: e => console.log("Saving... " , e.key)
    });
  }

  getShortcuts() : ShortcutInput[] {
    return this.shortcuts;
  }
}
