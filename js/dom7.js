//Recorriendo el dom.
//Tomando como referencia un nodo poder recorrer diferentes elementos en el dom.
//Enfocado a los elemntos a las etiquetas html como tal.
const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children);
console.log($cards[2]);
console.log($cards.firstChild);
console.log($cards.firstElementChild);
console.log($cards.lastChild);
console.log($cards.lastElementChild);
console.log($cards.previousSibling);
console.log($cards.previousElementSibling);
console.log($cards.nextSibling);
console.log(nextElementSibling);
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));
