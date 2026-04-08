const d = document, w = window;
export default function scrollTop(btn){
const $srcollBtn = d.querySelector(btn);
w.addEventListener("scroll", (e) => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
    if(scrollTop > 600){
        $srcollBtn.classList.remove("hidden");
    }else{
        $srcollBtn.classList.add("hidden");
    }
    console.log(w.pageYOffset, d.documentElement.scrollTop);
});
d.addEventListener("click", (e) =>{
    if(e.target.matches(btn)){
        w.scrollTo({
            behavior:"smooth",
            top: 0,
        });
    }
    
});
} 