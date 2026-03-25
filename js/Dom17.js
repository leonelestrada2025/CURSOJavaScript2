//Se van a hacer una serie de ejercicios.
//BROWSER OBJECT MODEL.
window.addEventListener("resize", (e) => {
    console.clear();
    console.log("**********Evento resize**************");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerHeight);
    console.log(window.outerWidth);
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});
window.addEventListener("scroll", e => {
    console.clear();
    console.log("**********Evento Scroll**************");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});

window.addEventListener("load", e =>{
    console.log("**********Evento Load**************");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});
 document.addEventListener("DOMContentLoaded", e =>{
    console.log("**********Evento DOMContentLoaded**************");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
 });

