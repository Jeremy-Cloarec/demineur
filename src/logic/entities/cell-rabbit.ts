import { Cell } from './cell.js';
import { Grid } from '../grid.js';
import { EItem } from '../enums/e-item.js';

export class CellRabbit extends Cell {
    constructor(grid: Grid, x:number, y:number) {
        super(grid, x, y, EItem.Rabbit);
    }
    get icon():string {
        return '<span class="material-symbols-outlined">cruelty_free</span>';
    }
}