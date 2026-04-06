const d = document;
let x = 0, y = 0;
export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitBall = $ball.getBoundingClientRect(),
    limitSatge = $stage.getBoundingClientRect();
    
    console.log(e.keyCode);
    console.log(e.key);
    console.log(limitBall);
    console.log(limitSatge);

    switch(e.keyCode){
        case 37:
            if(limitBall.left > limitSatge.left){
                e.preventDefault();
                x--;
            }
        break;
        case 38:
            if(limitBall.top > limitSatge.top){
                e.preventDefault();
                y--;
            }
        break;
        case 39:
            if(limitBall.right < limitSatge.right){
                e.preventDefault();
                x++;
            }
        break;
        case 40:
            if(limitBall.bottom < limitSatge.bottom){
                e.preventDefault();
                y++;
            }
        break;      
        default:
        break;
    }  
    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}
export function shortcut (e){
    /*console.log(e.type);
    console.log(e.key); 
    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
    console.log(e);*/
    if(e.key === "a" && e.altKey){
        alert("Haz lanzado una alerta con el teclado");
    }
    if(e.key === "c" && e.altKey){
        confirm("Haz lanzado una confirmacion con el teclado");
    }
    if(e.key === "p" && e.altKey){
        prompt("Haz lanzado un aviso con el teclado");
    }
}

