import { Component, OnInit } from '@angular/core';
import {StrategieManagerService} from "../../services/strategie-manager/strategie-manager.service";
import {Position} from "../../model/position/position";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentPosition: Position = new Position(0,150,150,0,0,0,0,false,0,"","");


  constructor(public strategieManager: StrategieManagerService) {
    this.strategieManager.currentPosition.subscribe( value => this.currentPosition = value);
    console.log("Strategie : ",this.strategieManager.currentStrategie);
  }

  ngOnInit(): void {

  }


  /*
  Called when we need to dispatch the new position to the Strategie Manager
   */
  updatePosition() {
    console.log("Current Pos : ",this.currentPosition);
    // Check position values and replace them if needed
    if (this.currentPosition.xpos < 150) this.currentPosition.xpos = 150;
    if (this.currentPosition.ypos < 150) this.currentPosition.ypos = 150;
    if (this.currentPosition.xpos > 2850) this.currentPosition.xpos = 2850;
    if (this.currentPosition.ypos > 1850) this.currentPosition.ypos = 1850;
    this.strategieManager.currentPosition.next(this.currentPosition);
  }

  newPosition() {
    console.log("New position");
    this.strategieManager.createPosition();
  }

  updateSelectedPosition($event: Event) {
    console.log("Select change : ",$event);
  }
}
