//Modificando Elementos.
//Metodos para reemplazar o insertar en un lugar especifico.
const $crads = document.querySelector(".cards"),
$newcard = document.createElement("figure"),
$clonecards = $crads.cloneNode(true);
$newcard.innerHTML = `
<img src="https://placeimg.com/200/200/Any" alt="Any">
<figcaption>Any</figcaption>
`;
$newcard.classList.add("card");
//Metodo Reemplazar un nodo
$crads.replaceChild($newcard,$crads.children[2]);
//Metodo para agregar un nodo en una posicion especifica.
$crads.insertBefore($newcard,$crads.firstElementChild);
//Metodo para eliminar
$crads.removeChild($crads.lastElementChild);
//Clonar nodo
document.body.appendChild($clonecards);