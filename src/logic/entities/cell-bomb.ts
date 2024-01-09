import { Cell } from "./cell.js";
import { Grid } from "../grid.js";
import { EItem } from "../enums/e-item.js";

export class CellBomb extends Cell {
    constructor(grid: Grid, x: number, y: number) {
        super(grid, x, y, EItem.Bomb);
    }

    get icon(): string {
        return '<span class="material-symbols-outlined">bomb</span>';
    }

}

