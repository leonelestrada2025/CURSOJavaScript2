
const $divsEventos = document.querySelectorAll(".eventos-flujo div");
const $linkEventos = document.querySelector(".eventos-flujo a")
console.log($divsEventos);
function flujoEventos(e){
    console.log(`Hola te saluda ${this}, el click lo origino ${e.target.className}`);
}
document.addEventListener("click", (e) => {
    console.log("click en", e.target);
    if(e.target.matches(".eventos-flujo a")){
        flujoEventos(e);
    }
    if(e.target.matches(".eventos-flujo a")){
        alert("Hola soy tu amigo y docente digital... jhonatan mircha");
        e.preventDefault();
    }
});
console.log(window.document);
