import { Colors } from "./Colors";
import { Cell } from "./Cell";

export class Player {
  color: Colors;

  constructor(color: Colors) {
    this.color = color;
  }

  canMove(cell: Cell) {
    if (cell.figure?.color !== this.color) return false;
    return true;
  }
}
