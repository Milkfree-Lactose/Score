let puntosHome = 0
let puntosGuest = 0

function puntosHome1() {
    puntosHome +=1
    document.getElementById("muestraMarcador1").textContent = puntosHome;
}

function puntosHome2() {
    puntosHome +=2
    document.getElementById("muestraMarcador1").textContent = puntosHome;

}
function puntosHome3() {
    puntosHome +=3
    document.getElementById("muestraMarcador1").textContent = puntosHome;
}
function puntosGuest1() {
    puntosGuest +=1
    document.getElementById("muestraMarcador2").textContent = puntosGuest;
}
function puntosGuest2() {
    puntosGuest +=2
    document.getElementById("muestraMarcador2").textContent = puntosGuest;
}
function puntosGuest3() {
    puntosGuest +=3
    document.getElementById("muestraMarcador2").textContent = puntosGuest;

}