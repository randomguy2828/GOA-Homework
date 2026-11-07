let fruits = []


let appleBtn = document.getElementById("appleBtn")
let bananaBtn = document.getElementById("bananaBtn")
let orangeBtn = document.getElementById("orangeBtn")
let fruitsList = document.getElementById("fruitsList")


function renderFruits(){
    fruitsList.innerHTML = ""
    fruits.forEach(fruit =>{
        fruitsList.innerHTML += `<li>${fruit}</li>`
    })
}

appleBtn.addEventListener("click", function (){
    fruits.push("apple")
    renderFruits()
})

bananaBtn.addEventListener("click", function (){
    fruits.push("banana")
    renderFruits()
})

orangeBtn.addEventListener("click", function (){
    fruits.push("orange")
    renderFruits()
})