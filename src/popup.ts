//affichage fenêtre d'une victoire
export function win() {
    show("win");
}

//affichage fenêtre d'une défaite
export function lose() {
    show("lose");
}

//affichag d'une popup quelconqueen manipulant son styl
export function show(popup: string) {
    const div = document.getElementById(popup);
    console.log(div);
    div?.classList.remove("hidden");
}