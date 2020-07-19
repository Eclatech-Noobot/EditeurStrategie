import {Position} from "../position/position";

export class Strategie {

  dateCreation: string;
  dateModification: string;
  version: number;
  positions: Array<Position>;

  constructor(dateCreation: string, dateModification: string, version: number, positions: Array<Position>) {
    this.dateCreation = dateCreation;
    this.dateModification = dateModification;
    this.version = version;
    this.positions = positions;
  }
}
