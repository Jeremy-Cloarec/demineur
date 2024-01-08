import { win, lose } from "../../popup.js";
export class Game {
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
            let hint = n >= 1 ? `${n}` : "";
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
