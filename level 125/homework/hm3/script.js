// 3)ეკრანზე იყოს დიდი ღილაკი "PRESS SPACE".

// Space დაჭერისას → ღილაკი შეიცვალოს
// onkeydown → "Pressed!"
// onkeyup → "Release!"
// თუ სხვა ღილაკს დააჭერს → "Wrong key!"

let press = document.getElementById("press")

document.onkeydown = function(event){
    if(event.key === " "){
        press.textContent = "Pressed!"
    }
    else{
        press.textContent = "Wrong key!"
    }
}

document.onkeyup = function(event){
    if(event.key === " "){
        press.textContent = "Release!"
    }
}