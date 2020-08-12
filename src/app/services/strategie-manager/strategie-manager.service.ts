import { Injectable } from '@angular/core';
import {Strategie} from "../../model/strategie/strategie";
import {Position} from "../../model/position/position";
import {FirebaseStorageManagerService} from "../firebase-storage-manager/firebase-storage-manager.service";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StrategieManagerService {

  currentStrat: Strategie;
  currentStrategie: Subject<Strategie> = new Subject<Strategie>();
  currentPos: Position = new Position(0,150,150,0,0,0,0,false,0,"","");
  currentPosition: Subject<Position> = new Subject<Position>();
  isSaved = false;

  constructor(public fsm: FirebaseStorageManagerService) {
    this.newStrategie();
    this.currentPosition.subscribe( val => this.currentPos = val);
    this.currentStrategie.subscribe( val => this.currentStrat = val);
  }

  saveStrategie(){
    this.fsm.saveStrategie(this.currentStrat).then( () => this.isSaved = true).catch( err => console.error("Error while saving strategy : ",err));
  }

  newStrategie(){
    this.currentStrat = new Strategie("Sans Nom", new Date().toUTCString(), new Date().toUTCString(), 0, new Array<Position>());
    this.currentPosition.next(new Position(0,150,150,0,0,0,0,false,0,"",""));
    this.currentStrat.positions.push(new Position(0,150,0,0,0,0,0,false,0,"",""));
    this.currentStrategie.next(this.currentStrat);
  }

  loadStrategie(name: string) {
    this.currentStrat = this.fsm.getStrategie(name);
    this.currentStrategie.next(this.currentStrat);
  }

  saveCurrentPosition() {
    let newPositionsArray: Array<Position> = new Array<Position>();
    for (let pos of this.currentStrat.positions) {
      if (pos.index === this.currentPos.index) newPositionsArray.push(this.currentPos);
      else newPositionsArray.push(pos);
    }
    this.currentStrat.positions = newPositionsArray;
    this.currentStrategie.next(this.currentStrat);
  }

  createPosition() {
    this.saveCurrentPosition();
    let pos: Position = new Position(this.currentStrat.positions.length,150,150,0,0,0,0,false,0,"","");
    this.currentStrat.positions.push(pos);
    this.currentPosition.next(pos);
    this.currentStrategie.next(this.currentStrat);
  }

  deletePosition(){
    let newPositions: Array<Position> = new Array<Position>();
    let isRemoved = false;
    for (let pos of this.currentStrat.positions) {
      if (pos.index !== this.currentPos.index) {
        if (isRemoved) {
          pos.index--;
        }
        newPositions.push(pos);
      } else isRemoved = true;
    }
    this.currentStrat.positions = newPositions;

    this.currentPosition.next(this.currentStrat.positions[0])
    this.currentStrategie.next(this.currentStrat);
  }

  setCurrentPosition(index: number){
    this.saveCurrentPosition();
    for (let pos of this.currentStrat.positions) {
      if (pos.index == index) {
        this.currentPos = pos;
        this.currentPosition.next(pos);
      }
    }
  }

  refreshValues(){
    this.currentStrategie.next(this.currentStrat);
    this.currentPosition.next(this.currentPos);
  }

  invertStrategy(){
    for(let pos of this.currentStrat.positions){
      pos.xpos = 3000 - pos.xpos;
      pos.angle = pos.angle * (-1);
    }
    this.refreshValues();
  }
}
