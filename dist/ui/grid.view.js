import { Game } from "../logic/entities/game.js";
export class GridView {
    constructor(grid) {
        this.cells = [];
        this.grid = grid;
    }
    //Dessin de la grille
    draw() {
        //Création d'une grille avec liste imbriquée
        const htmlMain = document.getElementById("ground");
        const htmlGrid = document.createElement("ul");
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
                htmlCell.onclick = () => Game.INSTANCE.play(cell);
                htmlCells.appendChild(htmlCell);
                this.cells[y].push(htmlCell);
            }
        }
        //Abonnement
        Game.INSTANCE.onHit.listen(cell => this.cells[cell.y][cell.x].classList.remove("mask"));
        Game.INSTANCE.onHelp.listen(e => this.cells[e.cell.y][e.cell.x].innerHTML = e.hint);
        // Insertion du tableau dans la page
        htmlMain.appendChild(htmlGrid);
    }
}
