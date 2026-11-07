// 1)let names = [];


// მოთხოვნები:
// 1. ღილაკზე დაჭერისას მასივში დაამატე სახელი "Goga".
// 2. მასივის თითოეული სახელი გამოიტანე ცალკე li ელემენტში.
// 3. ყოველი დაჭერისას ახალი სახელი დაემატოს სიას.
// 4. გვერდზე გამოჩნდეს ყველა დამატებული სახელი.
// მაგალითად, ღილაკზე სამჯერ დაჭერის შემდეგ:
// - Goga
// - Goga
// - Goga
// გამოიყენე: addEventListener(), push(), createElement(), textContent, append()

let names = []

let btn = document.getElementById("btn")
let list = document.getElementById("list")

btn.addEventListener("click", function () {
    names.push("Goga")

    list.innerHTML = ""


    for(let i = 0; i < names.length; i++) {
        let li = document.createElement("li")
        li.textContent = names[i]
        list.append(li)
    }
})