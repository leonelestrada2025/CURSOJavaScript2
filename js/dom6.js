const $whatIsDOM = document.getElementById("que-es");
let text = `<p>El modelo de objetos de documento es una api para documentos HTML Y XML<\p>`
//$whatIsDOM.innerText = text; //Inner text no es parte del estandar.
$whatIsDOM.textContent = text;
$whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text; //Se reemplaza el nuevo contenido en el dom.
