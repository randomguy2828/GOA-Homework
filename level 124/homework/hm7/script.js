// 7)ერთ div-ზე დაამატე ყველა ეს event:

// onmouseover → გამოჩნდეს "Mouse Over".
// onmouseout → "Mouse Out".
// onmousedown → "Mouse Down".
// onmouseup → "Mouse Up".
// onwheel → "Wheel Up" ან "Wheel Down" იმის მიხედვით, რომელი მიმართულებით დაატრიალეს ბორბალი.

let events = document.getElementById("event")

function move1(){
    events.textContent = "Mouse Over"
}

function move2(){
    events.textContent = "Mouse Out"
}

function move3(){
    events.textContent = "Mouse Down"
}

function move4(){
    events.textContent = "Mouse Up"
}

function move5(){
    events.textContent = "Wheel Up"
}