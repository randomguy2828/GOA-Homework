// 2)საიტზე შექმენი ღილაკი ინფუთი და ერთ დივი

// წამოიღე სამივე ჯს ში

// თქვენი დავალებაა რომ ინფუთში ჩაწერილი მნიშვნელობა დაემატოს დივში h1 სახით

// გამოიყენეთ eventlistener , createElement , append , push , forEach ამ დავალების შესასრულებლად ,
//  ანუ ყოველ დაჭერაზე ემატება ელემენტები მასივში და მერე ეს სია უნდა დაარენდეროთ ყოველ დაკლიკებაზე

let input = document.getElementById("inp")
let btn = document.getElementById("btn")
let div = document.getElementById("div1")

let list = []

btn.addEventListener("click", () =>{
    let h1 = document.createElement("h1")
    h1.textContent = input.value
    list.push(h1)
    list.forEach(item => {
        div.append(item)
    })
})