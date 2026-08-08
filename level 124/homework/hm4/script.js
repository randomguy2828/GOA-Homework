// 4)შექმენი ბურთი (div).

// onmouseover → ოდნავ გაიზარდოს.
// onmouseout → დაუბრუნდეს საწყის ზომას.
// onwheel → კიდევ უფრო გაიზარდოს ან შემცირდეს იმის მიხედვით, ბორბალი ზემოთ დატრიალდა თუ ქვემოთ.

let circle = document.getElementById("circle")
let size = 200

function increaseS(){
    circle.style.height = size + 20 + "px"
    circle.style.width = size + 20 + "px"
}

function increaseS1(){
    circle.style.height = size + "px"
    circle.style.width = size + "px"
}

function increaseS2(){
    // ???
}