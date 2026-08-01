// 10)გააკეთე ვარსკვლავი ⭐.

// onclick → ⭐⭐⭐⭐⭐ (ერთი ვარსკვლავით იზრდება).
// მაქსიმუმ 5 ვარსკვლავი.
// ondblclick → ყველა ვარსკვლავი წაიშალოს.

let star = document.getElementById("star")
let bt = document.getElementById("bt")
let count = 1

function starcount(){
    if(count < 5){
        count++
        star.textContent += "⭐"
    }
}

function reset(){
    count = 0
    star.textContent = " "
}