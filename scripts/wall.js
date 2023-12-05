var imagen = document.getElementById("letras");

document.addEventListener("keydown", teclado);
document.addEventListener("keyup", reset);

function teclado(event) {
    var codigo = event.code;
    imagen.src = "Recursos/Images/Pared/vacio.gif"+codigo+".gif";
}

function reset(event) {
    imagen.scr = "Recursos/Images/Pared/vacio.gif";
}