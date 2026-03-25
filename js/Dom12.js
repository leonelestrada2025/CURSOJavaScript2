//Manejando eventos del dom.
function holaMundo(){
    alert('Hola mundo');
    console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico");
$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e){
    alert('Hola mundo manejador de vento semantico');
    console.log(e);
    console.log(event);
}
//Una misma funcion te puede ayudar a desencadenar eventos.
const $eventoMultiple = document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
    alert('Hola mundo manejador de evento multiple');
    console.log(e);
    console.log(e.type);
    console.log(e.target);
});