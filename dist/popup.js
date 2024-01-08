//affichage fenêtre d'une victoire
export function win() {
    show("win");
}
//affichage fenêtre d'une défaite
export function lose() {
    show("lose");
}
//affichag d'une popup quelconqueen manipulant son styl
export function show(popup) {
    const div = document.getElementById(popup);
    console.log(div);
    div === null || div === void 0 ? void 0 : div.classList.remove("hidden");
}
