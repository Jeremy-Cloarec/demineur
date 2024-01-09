import { EItem } from "../enums/e-item.js";
export class Cell {
    get icon() {
        if (this.item == EItem.Bomb)
            return '<span class="material-symbols-outlined">bomb</span>';
        if (this.item == EItem.Rabbit)
            return '<span class="material-symbols-outlined">cruelty_free</span>';
        return "";
    }
    get bomb() {
        return this.item == EItem.Bomb;
    }
    get ground() {
        return this.item == EItem.Ground;
    }
    //Création d'une grille
    constructor(grid, x, y, item) {
        this.hit = false;
        this.grid = grid;
        this.x = x;
        this.y = y;
        this.item = item;
    }
    //Gestion d'un click sur une cellule
    get risk() {
        let n = 0;
        this.grid.explore(this, (near) => {
            if (near.bomb)
                n += 1;
        });
        return n;
    }
}
