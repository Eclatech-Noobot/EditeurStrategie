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
  currentPosition: Subject<Position> = new Subject<Position>();
  isSaved = false;

  constructor(public fsm: FirebaseStorageManagerService) {
    this.newStrategie();
  }

  saveStrategie(){
    this.fsm.saveStrategie(this.currentStrategie).then( () => this.isSaved = true).catch( err => console.error("Error while saving strategy : ",err));
  }

  newStrategie(){
    this.currentStrategie = new Strategie("Sans Nom", new Date().toUTCString(), new Date().toUTCString(), 0, new Array<Position>());
    this.currentPosition.next(new Position(0,0,0,0,0,0,0,false,0,"",""));
    this.currentStrategie.positions.push(new Position(0,0,0,0,0,0,0,false,0,"",""));
  }

  loadStrategie(name: string) {
    this.currentStrategie = this.fsm.getStrategie(name);
  }
}
