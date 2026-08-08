// 5)თავიდან გამოჩნდეს ტექსტი:

// Move your mouse here
// onmouseover → "Welcome!"
// onmousedown → "Don't hold me 😅"
// onmouseup → "Thanks!"
// onmouseout → ისევ "Move your mouse here"

let text = document.getElementById("text")

function act1(){
    text.textContent = "Welcome!"
}

function act2(){
    text.textContent = "Don't hold me 😅"
}

function act3(){
    text.textContent = "Thanks!"
}

function act4(){
    text.textContent = "Move your mouse here"
}