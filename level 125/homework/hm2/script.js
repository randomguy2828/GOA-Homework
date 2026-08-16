// 2)ეკრანზე იყოს რამდენიმე ღილაკი:

// A S D F G

// კლავიატურაზე შესაბამისი ღილაკის დაჭერისას:

// onkeydown → შესაბამისი ღილაკი გახდეს აქტიური
// onkeyup → დაბრუნდეს ჩვეულებრივ მდგომარეობაში

// მაგალითად:

// A დაჭერილია → 🎹 A ღილაკი ლურჯდება
// A აშვებულია → ჩვეულებრივდება.

let A = document.getElementById("A")
let S = document.getElementById("S")
let D = document.getElementById("D")
let F = document.getElementById("F")
let G = document.getElementById("G")

document.onkeydown = function(event){
    if(event.key === "a"){
        A.style.background = "blue"
        A.style.color = "white"
    }
    else if(event.key === "s"){
        S.style.background = "blue"
        S.style.color = "white"
    }
    else if(event.key === "d"){
        D.style.background = "blue"
        D.style.color = "white"
    }
    else if(event.key === "f"){
        F.style.background = "blue"
        F.style.color = "white"
    }
    else if(event.key === "g"){
        G.style.background = "blue"
        G.style.color = "white"
    }
}

document.onkeyup = function(event){
    if(event.key === "a"){
        A.style.background = ""
        A.style.color = ""
    }
    else if(event.key === "s"){
        S.style.background = ""
        S.style.color = ""
    }
    else if(event.key === "d"){
        D.style.background = ""
        D.style.color = ""
    }
    else if(event.key === "f"){
        F.style.background = ""
        F.style.color = ""
    }
    else if(event.key === "g"){
        G.style.background = ""
        G.style.color = ""
    }
}