import { Grid } from "../logic/grid.js";
import { Game } from "../logic/entities/game.js";
import { Cell } from "../logic/entities/cell.js";
import { IGridView } from "../interfaces/i-grid-view.js";

export class GridView implements IGridView {
    readonly grid: Grid;
    readonly cells: HTMLElement[][] = [];

    constructor(grid: Grid) {
        this.grid = grid;
    }

    //Dessin de la grille
    draw() {

        //Création d'une grille avec liste imbriquée
        const htmlMain = document.getElementById("ground")!;
        const htmlGrid = document.createElement("ul")!;
        htmlGrid.className = "ground_grid";
        let w = this.grid.width;
        let h = this.grid.height;

        for (let y = 0; y < h; y++) {
            this.cells.push([]);

            //Dessin d'une ligne
            const htmlRow = document.createElement("li");
            const htmlCells = document.createElement("ul");
            htmlRow.className = "gound_row";
            htmlRow.appendChild(htmlCells);
            htmlGrid.appendChild(htmlRow);
            for (let x = 0; x < w; x++) {

                //Dessin d'une cellule
                const cell = this.grid.cells[y][x];
                const htmlCell = document.createElement("li");
                htmlCell.classList.add("ground_cell", "mask");
                htmlCell.innerHTML = cell.icon;
                htmlCell.onclick = () => Game.INSTANCE.play(this, cell);
                htmlCells.appendChild(htmlCell);
                this.cells[y].push(htmlCell);
            }
        }

        // Insertion du tableau dans la page
        htmlMain.appendChild(htmlGrid);
    }

    show(cell: Cell) {
        this.cells[cell.y][cell.x].classList.remove("mask");
    }

    help(cell: Cell, hint: string) {
        this.cells[cell.y][cell.x].innerHTML = hint;
    }
}