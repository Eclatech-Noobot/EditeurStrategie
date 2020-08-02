import { Injectable } from '@angular/core';
import {Strategie} from "../../model/strategie/strategie";
import {Position} from "../../model/position/position";
import {FirebaseStorageManagerService} from "../firebase-storage-manager/firebase-storage-manager.service";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StrategieManagerService {

  currentStrategie: Strategie;
  currentPos: Position = new Position(0,150,150,0,0,0,0,false,0,"","");
  currentPosition: Subject<Position> = new Subject<Position>();
  isSaved = false;

  constructor(public fsm: FirebaseStorageManagerService) {
    this.newStrategie();
    this.currentPosition.subscribe( val => this.currentPos = val);
  }

  saveStrategie(){
    this.fsm.saveStrategie(this.currentStrategie).then( () => this.isSaved = true).catch( err => console.error("Error while saving strategy : ",err));
  }

  newStrategie(){
    this.currentStrategie = new Strategie("Sans Nom", new Date().toUTCString(), new Date().toUTCString(), 0, new Array<Position>());
    this.currentPosition.next(new Position(0,150,150,0,0,0,0,false,0,"",""));
    this.currentStrategie.positions.push(new Position(0,150,0,0,0,0,0,false,0,"",""));
  }

  loadStrategie(name: string) {
    this.currentStrategie = this.fsm.getStrategie(name);
  }

  saveCurrentPosition() {
    console.log("Saving position : ",this.currentPos);
    let newPositionsArray: Array<Position> = new Array<Position>();
    for (let pos of this.currentStrategie.positions) {
      if (pos.index === this.currentPos.index) newPositionsArray.push(this.currentPos);
      else newPositionsArray.push(pos);
    }
    console.log("Saved postion, strategy : ",this.currentStrategie);
    this.currentStrategie.positions = newPositionsArray;
  }

  createPosition() {
    this.saveCurrentPosition();
    let pos: Position = new Position(this.currentStrategie.positions.length,150,150,0,0,0,0,false,0,"","");
    this.currentStrategie.positions.push(pos);

    console.log("Positions : ",this.currentStrategie.positions);

    this.currentPosition.next(pos);
  }

  setCurrentPosition(index: number){
    this.saveCurrentPosition();
    for (let pos of this.currentStrategie.positions) if (pos.index === index) this.currentPosition.next(pos);
  }
}
