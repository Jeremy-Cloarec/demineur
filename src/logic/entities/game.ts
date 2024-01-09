import { win, lose } from "../../popup.js";
import { Cell } from "./cell.js";
import { Subject } from "../../helpers/subject.js";

export class Game {

    //Singleton
    public static INSTANCE: Game = new Game();
    private constructor() {}

    //Slot de notification
    onHit = new Subject<Cell>();
    onHelp = new Subject<{cell:Cell, hint:string}>();
;
    //démarrage du jeu
    start() {};

    play(cell: Cell) {
        if (cell.hit)
            return;

        cell.hit = true;
        this.onHit.raise(cell);
        if (cell.bomb) {
            lose();
        } else {
            let n = cell.risk;
            let hint = cell.ground && n>=1 ? `${n}` : cell.icon;
            this.onHelp.raise({cell, hint});
            let grid = cell.grid;
            if (grid.remaining == 0) {
                win();
                return;
            }
            if (n == 0)
                grid.explore(cell, (near) => this.play(near));
        }
    }
}








