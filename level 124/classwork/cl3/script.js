// 3)შექმენი div.

// onmousedown
// ფერი გახდეს წითელი.
// ტექსტი გახდეს "Pressed".

// onmouseup
// ფერი გახდეს მწვანე.
// ტექსტი გახდეს "Released".

// onwheel
// ყოველ დატრიალებაზე div-ის ზომა გაიზარდოს 10px-ით.
let size = 100
let cube = document.getElementById("cube")

function down1(){
    cube.style.backgroundColor = "red"
    cube.textContent = "Pressed"
}

function up1(){
    cube.style.backgroundColor = "green"
    cube.textContent = "Released"
}

function wheel1(){
    size += 10
    cube.style.height = size + "px"
    cube.style.width = size + "px"
}