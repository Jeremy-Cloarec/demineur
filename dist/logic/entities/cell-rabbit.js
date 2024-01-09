import { Cell } from './cell.js';
import { EItem } from '../enums/e-item.js';
export class CellRabbit extends Cell {
    constructor(grid, x, y) {
        super(grid, x, y, EItem.Rabbit);
    }
    get icon() {
        return '<span class="material-symbols-outlined">cruelty_free</span>';
    }
}
