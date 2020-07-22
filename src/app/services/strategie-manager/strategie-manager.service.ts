import { Injectable } from '@angular/core';
import {Strategie} from "../../model/strategie/strategie";
import {Position} from "../../model/position/position";
import {FirebaseStorageManagerService} from "../firebase-storage-manager/firebase-storage-manager.service";

@Injectable({
  providedIn: 'root'
})
export class StrategieManagerService {

  currentStrategie: Strategie = new Strategie("Sans Nom", new Date().toUTCString(), new Date().toUTCString(), 0, new Array<Position>());
  isSaved = false;

  constructor(public fsm: FirebaseStorageManagerService) {

  }

  saveStrategie(){
    this.fsm.saveStrategie(this.currentStrategie).then( () => this.isSaved = true).catch( err => console.error("Error while saving strategy : ",err));
  }

  newStrategie(){
    this.currentStrategie = new Strategie("Sans Nom", new Date().toUTCString(), new Date().toUTCString(), 0, new Array<Position>());
  }

  loadStrategie(name: string) {
    this.currentStrategie = this.fsm.getStrategie(name);
  }
}
