// 4)შექმენი სამი ღილაკი:
// - +5 Points
// - +10 Points
// - +20 Points
// და ცარიელი ul ელემენტი.
// JavaScript-ში შექმენი:
// let scores = [];


// მოთხოვნები:
// 1. +5 Points ღილაკზე დაჭერისას დაამატე რიცხვი 5.
// 2. +10 Points ღილაკზე დაჭერისას დაამატე რიცხვი 10.
// 3. +20 Points ღილაკზე დაჭერისას დაამატე რიცხვი 20.
// 4. თითოეული ქულა გამოიტანე ცალკე li ელემენტში.
// 5. სიის ქვემოთ გამოიტანე ყველა ქულის ჯამიც.
// მაგალითად, თუ მომხმარებელი დააჭერს +5, შემდეგ +20 და ბოლოს +10 ღილაკს, გვერდზე გამოჩნდეს:
// - 5 points
// - 20 points
// - 10 points

let scores = []

let list = document.getElementById("list")
let total = document.getElementById("total")

let btn5 = document.getElementById("btn5")
let btn10 = document.getElementById("btn10")
let btn20 = document.getElementById("btn20")

function render(){
    list.innerHTML = ""
    let sum = 0

    scores.forEach(score => {
        list.innerHTML+= `<li>${score}</li>`
        sum += score
    })

    total.textContent = sum
}

btn5.addEventListener("click", ()=>{
    scores.push(5)
    render()
})

btn10.addEventListener("click", ()=>{
    scores.push(10)
    render()
})

btn20.addEventListener("click", ()=>{
    scores.push(20)
    render()
})
