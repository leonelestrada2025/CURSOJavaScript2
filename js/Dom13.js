//REMOVER EVENTOS Y EVENTOS CON PARAMETROS.
//Manejando eventos del dom.
function holaMundo(){
    alert('Hola mundo');
    console.log(event);
}
function saludar(nombre = "Hola desconocido"){
    alert(`Hola ${nombre}-${event}`);
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
$eventoMultiple.addEventListener("click", () => {
    saludar();
    saludar('leo');
});
const $removerEvento = document.getElementById("evento-remover");
const removerDobleClick = (e) => {
    alert(`Removiendo el evento de tipó ${e.type}`);
    console.log(e);
    $removerEvento.removeEventListener("dblclick", removerDobleClick);
    $removerEvento.disabled = true;
}
$removerEvento.addEventListener("dblclick", removerDobleClick);


