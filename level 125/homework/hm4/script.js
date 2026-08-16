// 4)ეკრანზე იყოს წითელი, ყვითელი და მწვანე წრე.

// R → წითელი აინთოს
// Y → ყვითელი
// G → მწვანე

let ball1 = document.getElementById("ball1")
let ball2 = document.getElementById("ball2")
let ball3 = document.getElementById("ball3")

document.onkeydown = function(event){
    if(event.key === "r"){
        ball1.style.backgroundColor = "red"
        ball2.style.backgroundColor = "grey"
        ball3.style.backgroundColor = "grey"
    }
    if(event.key === "y"){
        ball1.style.backgroundColor = "grey"
        ball2.style.backgroundColor = "yellow"
        ball3.style.backgroundColor = "grey"
    }
    if(event.key === "g"){
        ball1.style.backgroundColor = "grey"
        ball2.style.backgroundColor = "grey"
        ball3.style.backgroundColor = "green"
    }
}