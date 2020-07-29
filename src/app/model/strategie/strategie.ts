import {Position} from "../position/position";

export class Strategie {

  name: string;
  dateCreation: string;
  dateModification: string;
  version: number;
  positions: Array<Position>;

  constructor(name: string, dateCreation: string, dateModification: string, version: number, positions: Array<Position>) {
    this.name = name;
    this.dateCreation = dateCreation;
    this.dateModification = dateModification;
    this.version = version;
    this.positions = positions;
  }

  addPosition(position: Position) {

    let newPositions: Array<Position> = new Array<Position>();
    for (let pos of this.positions) {
      if (pos.index === position.index) newPositions.push(position);
      else newPositions.push(pos);
    }
  }
}
