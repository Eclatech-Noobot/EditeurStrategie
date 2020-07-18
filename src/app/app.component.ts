import { Component } from '@angular/core';
import {ShortcutInput} from "ng-keyboard-shortcuts";
import {KeyboardShortcutManagerService} from "./services/keyboard-shortcut-manager/keyboard-shortcut-manager.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EditeurStrategie';
  shortcuts: ShortcutInput[] = [];

  constructor(private kbms: KeyboardShortcutManagerService) {
    this.shortcuts = this.kbms.getShortcuts();
  }
}
