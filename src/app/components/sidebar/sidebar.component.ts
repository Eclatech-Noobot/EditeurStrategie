import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StrategieManagerService} from "../../services/strategie-manager/strategie-manager.service";
import {Position} from "../../model/position/position";
import {Strategie} from "../../model/strategie/strategie";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @ViewChild("selectPosition", { static: true }) selectPosition: any;
  currentPosition: Position = new Position(0,150,150,0,0,0,0,false,0,"","");
  currentStrategie: Strategie = new Strategie("Sans Nom", new Date().toUTCString(), new Date().toUTCString(), 0, new Array<Position>());

  constructor(public strategieManager: StrategieManagerService) {
    this.strategieManager.currentPosition.subscribe( value => {
      this.currentPosition = value;
    });
    this.strategieManager.currentStrategie.subscribe( value => {
      this.currentStrategie = value;
    });
    this.strategieManager.refreshValues();
  }

  ngOnInit(): void {

  }


  /*
  Called when we need to dispatch the new position to the Strategie Manager
   */
  updatePosition() {
    // Check position values and replace them if needed
    if (this.currentPosition.xpos < 150) this.currentPosition.xpos = 150;
    if (this.currentPosition.ypos < 150) this.currentPosition.ypos = 150;
    if (this.currentPosition.xpos > 2850) this.currentPosition.xpos = 2850;
    if (this.currentPosition.ypos > 1850) this.currentPosition.ypos = 1850;
    this.strategieManager.currentPosition.next(this.currentPosition);
  }

  newPosition() {
    this.strategieManager.createPosition();
  }

  updateSelectedPosition($event) {
    this.strategieManager.setCurrentPosition($event.target.value);
  }
}
