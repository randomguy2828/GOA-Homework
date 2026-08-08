// 3)შექმენი კვადრატი.

// onwheel-ზე ყოველ დატრიალებაზე შეიცვალოს ფერი.
// onmouseover-ზე დაემატოს ჩრდილი.
// onmouseout-ზე ჩრდილი გაქრეს.

let cube = document.getElementById("cube")

function changecolor(){
    cube.style.backgroundColor = "green"
}

function shadow(){
    cube.style.boxShadow = "0 0 20px"
}

function noshadow(){
    cube.style.boxShadow = "none"
}