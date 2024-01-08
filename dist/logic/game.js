import { win, lose } from "../popup.js";
export class Game {
    constructor(grid) {
        this._remaining = 0;
        this._grid = grid;
    }
    //Démarrage du jeu
    start() {
        let w = this._grid.width;
        let h = this._grid.height;
        this._remaining = w * h;
        for (let x = 0; x < w; x++)
            for (let y = 0; y < h; y++)
                if (this._grid.cells[y][x].bomb)
                    this._remaining -= 1;
    }
    // Gestion d'un click sur une cellule
    play(view, cell) {
        if (cell.hit)
            return;
        view.cells[cell.y][cell.x].classList.remove("mask");
        cell.hit = true;
        if (cell.bomb) {
            lose();
        }
        else {
            let n = cell.risk;
            let hint = n >= 1 ? `${n}` : "";
            view.cells[cell.y][cell.x].innerHTML = hint;
            this._remaining -= 1;
            if (this._remaining == 0) {
                win();
                return;
            }
            if (n == 0)
                this._grid.explore(cell, (near) => this.play(view, near));
        }
    }
}
