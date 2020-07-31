import { Component, OnInit } from '@angular/core';
import {StrategieManagerService} from "../../services/strategie-manager/strategie-manager.service";
import {Position} from "../../model/position/position";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  currentPosition: Position = new Position(0,0,0,0,0,0,0,false,0,"","");

  constructor(public strategieManager: StrategieManagerService) {
    this.strategieManager.currentPosition.subscribe( value => this.currentPosition = value);
    console.log("Strategie : ",this.strategieManager.currentStrategie);
  }

  ngOnInit(): void {

  }

}
