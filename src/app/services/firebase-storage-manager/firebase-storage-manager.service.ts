import { Injectable } from '@angular/core';
import {Strategie} from "../../model/strategie/strategie";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {DocumentReference} from "@angular/fire/firestore/interfaces";

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageManagerService {

  private strategieCollection: AngularFirestoreCollection<Strategie>;
  strategies: Observable<Strategie[]>;

  constructor(private afs: AngularFirestore) {
    this.strategieCollection = afs.collection<Strategie>('strategies');
    this.strategies = this.strategieCollection.valueChanges();
  }

  getAllStrategies(): Observable<Strategie[]> {
    return this.strategies;
  }

  getStrategie(name: string): Strategie {
    let strats: Strategie[] = new Array<Strategie>();
    this.strategies.subscribe( val => strats = val);
    for (let s of strats) if (s.name === name) return s;
    return null;
  }

  saveStrategie(strategie: Strategie): Promise<DocumentReference> {
    return this.strategieCollection.add(strategie);
  }
}
