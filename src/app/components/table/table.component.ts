import {AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DraggableDirective, DragPosition} from "ng-metro4";
import {Subject} from "rxjs";
import {Position} from "../../model/position/position";
import {StrategieManagerService} from "../../services/strategie-manager/strategie-manager.service";

@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewChecked {

  @ViewChild(DraggableDirective, { static: true }) draggable: DraggableDirective;
  @ViewChild("table", { static: true }) img: ElementRef;
  @ViewChild("robot", { static: true }) robot: ElementRef;

  /*

  Table real size in millimeters

   */
  tableWidthInMm: number = 3000;
  tableHeightInMm: number = 2000;

  /*

  Robot real size in millimeters

   */
  robotWidthInMm: number = 300;
  robotHeightInMm: number = 300;

  /*

  Robot size in pixel (do not change, will be automagically updated based on real sizes and image size)

   */
  robotWidth: number = 100;
  robotHeight: number = 100;

  currentPosition: Position = new Position(0,150,150,0,0,0,0,false,0,"","");

  constructor(private strategieManager: StrategieManagerService) {
    // Listening to position updates
    this.strategieManager.currentPosition.subscribe( val => {
      //console.log("New pos : ",val);
      this.currentPosition = val;
      /*
      Calculating robot position based on values in millimeters in Position and table and robot sizes
       */
      let xPos: number = ((this.img.nativeElement.width * val.xpos)/this.tableWidthInMm) - (this.robotWidth / 2);
      let yPos: number = ((this.img.nativeElement.height * val.ypos)/this.tableHeightInMm) - (this.robotHeight / 2);
      // Setting robot position
      this.draggable.setPosition({x: xPos, y:yPos});
    });
  }

  ngOnInit(): void {
  }

  onDragged($event: DragPosition) {
    console.log("Dragged to x :"+$event.x+" y :"+$event.y);
    let xPos: number = Math.floor(Math.floor(($event.x + this.robotWidth/2) * this.tableWidthInMm) / this.img.nativeElement.width);
    let yPos: number = Math.floor(Math.floor(($event.y + this.robotHeight/2) * this.tableHeightInMm) / this.img.nativeElement.height);
    console.log("Real pos, x : "+xPos+" y : "+yPos);
    this.currentPosition.xpos = xPos;
    this.currentPosition.ypos = yPos;
    this.strategieManager.currentPosition.next(this.currentPosition);
  }

  /*
  Called after view init and checked

  Will calculate robot size based on real sizes and image size
   */
  ngAfterViewChecked (): void {
    this.robotWidth = (this.robotWidthInMm * this.img.nativeElement.width) / this.tableWidthInMm;
    this.robotHeight = (this.robotHeightInMm * this.img.nativeElement.height) / this.tableHeightInMm

    //console.log("Img : "+this.img.nativeElement.width+" * "+this.img.nativeElement.height);
    //console.log("Robot : "+this.robotWidth+" * "+this.robotHeight);
  }
}
