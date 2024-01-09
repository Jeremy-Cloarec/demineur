import { EItem } from "../enums/e-item.js";
import { Grid } from "../grid.js";

export class Cell {
    readonly grid: Grid;
    readonly x: number;
    readonly y: number;
    readonly item: EItem;
    hit = false;

    get icon():string {
        return "";
    }

    get bomb() {
        return this.item == EItem.Bomb;
    }
    get ground () {
        return this.item == EItem.Ground;
    }

    //Création d'une grille
    constructor(grid: Grid, x: number, y: number, item?: EItem) {
        this.grid = grid;
        this.x = x;
        this.y = y;
        this.item = item ?? EItem.Ground; 
    }

    //Gestion d'un click sur une cellule
    get risk(): number {
        let n = 0;
        this.grid.explore(this, (near) => {
            if (near.bomb)
                n += 1;
        });
        return n;
    }
}
