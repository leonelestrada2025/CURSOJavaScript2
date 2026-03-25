import saludar, {PI, usuario} from "./constantes.js";
import {aritmetica as cal} from "./aritemetica.js"

(function(c){
    c.log(usuario);
    c.log(PI)
    c.log(cal.sumar(3,4));
    saludar();
})(console);


