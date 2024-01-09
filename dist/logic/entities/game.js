import { win, lose } from "../../popup.js";
import { Subject } from "../../helpers/subject.js";
export class Game {
    constructor() {
        //Slot de notification
        this.onHit = new Subject();
        this.onHelp = new Subject();
    }
    ;
    //démarrage du jeu
    start() { }
    ;
    play(cell) {
        if (cell.hit)
            return;
        cell.hit = true;
        this.onHit.raise(cell);
        if (cell.bomb) {
            lose();
        }
        else {
            let n = cell.risk;
            let hint = cell.ground && n >= 1 ? `${n}` : cell.icon;
            this.onHelp.raise({ cell, hint });
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
//Singleton
Game.INSTANCE = new Game();
