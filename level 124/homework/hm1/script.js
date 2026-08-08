// 1)შექმენი div.

// onmouseover → გახდეს მწვანე.
// onmouseout → დაბრუნდეს საწყის ფერზე.
// onmousedown → შემცირდეს (scale).
// onmouseup → დაუბრუნდეს ჩვეულებრივ ზომას.

let cube = document.getElementById("cube")

function green(){
    cube.style.backgroundColor = "green"
}

function origincolor(){
    cube.style.backgroundColor = "black"
}

function shrink(){
    cube.style.scale = "0.5"
}

function originsize(){
    cube.style.scale = "1"
}