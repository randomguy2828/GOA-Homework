// 3)შექმენი:
// - input, რომელშიც მომხმარებელი შეიყვანს სახელს;
// - ღილაკი Add;
// - ცარიელი ul სიის გამოსატანად.
// JavaScript-ში შექმენი:
// let names = [];


// მოთხოვნები:
// 1. მომხმარებელმა input-ში უნდა შეიყვანოს სახელი.
// 2. ღილაკზე დაჭერისას შეყვანილი სახელი დაამატე names მასივში.
// 3. მასივის ყველა სახელი გამოიტანე li ელემენტებში.
// 4. ყოველი დამატების შემდეგ გვერდზე უნდა ჩანდეს სრული სია და არა მხოლოდ ბოლო სახელი.
// 5. დამატების შემდეგ გაასუფთავე input.
// მაგალითი: მომხმარებელი შეიყვანს Nika-ს, დააჭერს ღილაკს, შემდეგ შეიყვანს Ana-ს და ისევ დააჭერს.
// შედეგი:
// - Nika
// - Ana

let names = []

let input = document.getElementById("input")
let btn = document.getElementById("btn")
let list = document.getElementById("list")

btn.addEventListener("click", () =>{
    names.push(input.value)

    list.innerHTML = ""

    names.forEach(name =>{
        list.innerHTML += `<li>${name}</li>`
    })
    input.value = ""
})