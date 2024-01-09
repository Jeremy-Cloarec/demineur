import { Cell } from "./cell.js";
import { EItem } from "../enums/e-item.js";
export class CellBomb extends Cell {
    constructor(grid, x, y) {
        super(grid, x, y, EItem.Bomb);
    }
    get icon() {
        return '<span class="material-symbols-outlined">bomb</span>';
    }
}
