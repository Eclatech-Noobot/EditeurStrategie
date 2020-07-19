import { Injectable } from '@angular/core';
import {Position} from "../../model/position/position";

@Injectable({
  providedIn: 'root'
})
export class PositionManagerService {

  positions: Array<Position> = new Array<Position>();

  constructor() { }

}
