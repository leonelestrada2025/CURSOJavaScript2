//DETENER LA PROPAGACION.
//Flujo de eventos.
//Una ves que el evento se origina propagacion del elemento mas interno al elemnto mas externo.
//fase de burbuja.
const $divsEventos = document.querySelectorAll(".eventos-flujo div");
const $linkEventos = document.querySelector(".eventos-flujo a")
console.log($divsEventos);
function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
    e.stopPropagation();
}
$divsEventos.forEach(div => {
    //Fase de burbuja sin especificar el valor o especificandolo con el valor de false.
    div.addEventListener("click", flujoEventos, false);
    //Fase de captura activando el valor a true.
    //Del elemento mas interno al mas externo.
    /*div.addEventListener("click", flujoEventos, {
        capture: false,
        once: true
    });*/
});
$linkEventos.addEventListener("click", (e) => {
    alert('Hola soy tu amigo y docente digital jhonatan mircha');
    e.preventDefault();
    e.stopPropagation();
})
