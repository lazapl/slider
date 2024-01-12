let items = document.querySelectorAll('.slider .card')

let next = document.querySelector("#next")
let prev = document.querySelector("#prev")

let current = 3;

function onLoad() {
    items[current].style.transform = `none`;
    items[current].style.zIndex = 1;
    items[current].style.filter = 'none';
    items[current].style.opacity = 1;

    let stt = 0;
    for (let i = current - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120}px) scale(${1 - 0.2}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
    }

    for (let i = current + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120}px) scale(${1 - 0.2}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        
    }
}


next.onclick = function(){
   current = current + 1 < items.length ?  current + 1 : current;
   onLoad()
}
prev.onclick = function(){
    current = current - 1 >= 0 ? current -1 : current;
    onLoad()
}