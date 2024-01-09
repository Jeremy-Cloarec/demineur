import { GridView } from "../../ui/grid.view.js";
import { win, lose } from "../../popup.js";
import { Cell } from "./cell.js";
import { IGridView } from "../../interfaces/i-grid-view.js";

export class Game {
    //Singleton
    public static INSTANCE: Game = new Game();
    private constructor() { }
;
    //démarrage du jeu
    start() { };

    play(view: IGridView, cell: Cell) {
        if (cell.hit)
            return;

        cell.hit = true;
        view.show(cell);
        if (cell.bomb) {
            lose();
        } else {
            let n = cell.risk;
            let hint = cell.ground && n>=1 ? `${n}` : cell.icon;
            view.help(cell, hint);
            let grid = cell.grid;
            if (grid.remaining == 0) {
                win();
                return;
            }
            if (n == 0)
                grid.explore(cell, (near) => this.play(view, near));
        }
    }
}








