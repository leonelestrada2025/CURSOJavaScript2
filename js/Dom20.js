import hamburgerMenu from "./menu_amburguesa.js";
import { digitalclock, alarm } from "./reloj.js";
import { moveBall, shortcut } from "./teclado.js"
//Menu de navegacion de boton amburguesa.
const d = document;
d.addEventListener("DOMContentLoaded", (e) =>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalclock("#reloj","#activar-reloj","#desactivar-reloj")
    alarm("assets/ringtones-super-mario-bros.mp3","#activar-alarma","#desactivar-alarma")

});
//Reloj digital.
d.addEventListener("keydown", (e) => {
    shortcut(e);
    moveBall(e, ".ball", ".stage");

});
//KEY DAWN CUANDO PRESIONAMOS LA TECLA.
//KEY UP CUNADO SOLTAMOS LA TECLA.
//KEY PRESS MIENTRAS TENGAS PRESIONADA LA TECLA SE VA A EJECUTAR.
