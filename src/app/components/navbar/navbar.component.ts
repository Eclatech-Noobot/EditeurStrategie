import { Component, OnInit } from '@angular/core';
import {DialogService} from "ng-metro4";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  openAboutDialog() {
    this.dialogService.alert('A propos', 'Editeur de stratégie v0.0.1<br>Noobot 2020<br><a href="https://github.com/Eclatech-Noobot/EditeurStrategie" target="_blank">Github</a>');
  }
}
