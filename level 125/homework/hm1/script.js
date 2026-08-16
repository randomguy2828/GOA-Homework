// 1)პატარა Keyboard Game

// ეკრანზე იყოს პერსონაჟი 🧙‍♂️.

// ArrowRight → მარჯვნივ გადაადგილდეს
// ArrowLeft → მარცხნივ
// ArrowUp → ზემოთ
// ArrowDown → ქვემოთ
// ღილაკზე დაჭერისას მოძრაობა დაიწყოს
// ღილაკის აშვებისას მოძრაობა შეწყდეს

let mage = document.getElementById("mage")
let left = 0
let up = 0
document.onkeydown = function(event){
    if(event.key === "ArrowRight"){
        left = left + 10
        mage.style.left = left + "px"
    }
    else if(event.key === "ArrowDown"){
        up = up + 10
        mage.style.top = up + "px"
    }
    if(event.key === "ArrowLeft"){
        left = left - 10
        mage.style.left = left + "px"
    }
    else if(event.key === "ArrowUp"){
        up = up - 10
        mage.style.top = up + "px"
    }
}