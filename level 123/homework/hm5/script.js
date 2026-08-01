let count = 0 
let counter = document.getElementById("counter")
let bt = document.getElementById("bt")

function click1(){
    count++
    counter.textContent = count
}

function clickres(){
    count = 0
    counter.textContent = count
}