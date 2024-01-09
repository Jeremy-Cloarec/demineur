import { win, lose } from "../../popup.js";
export class Game {
    constructor() { }
    ;
    //démarrage du jeu
    start() { }
    ;
    play(view, cell) {
        if (cell.hit)
            return;
        cell.hit = true;
        view.show(cell);
        if (cell.bomb) {
            lose();
        }
        else {
            let n = cell.risk;
            let hint = cell.ground && n >= 1 ? `${n}` : cell.icon;
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
//Singleton
Game.INSTANCE = new Game();
