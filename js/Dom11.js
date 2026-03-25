//Metodos nuevos para modificar en los nodos del DOM.
const $cards = document.querySelector(".cards"),
$newcard = document.createElement("figure");
let $contentcard = `
<img src="https://placeimg.com/200/200/Any" alt="Any">
<figcaption></figcaption>`;
$newcard.classList.add("card");
$newcard.insertAdjacentHTML("beforeend", $contentcard);
$newcard.querySelector("figcaption").insertAdjacentText("afterbegin","Any")
$cards.insertAdjacentHTML("beforebegin", $newcard);

$cards.prepend($newcard);
$cards.append($newcard);
$cards.before($newcard);
$cards.after($newcard);



