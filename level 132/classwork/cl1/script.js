// შექმენი მასივი სადაც შეინახავ ადამიანის სახელებს , html ში შექმენი დივი და წამოიღე ჯს ში

// შენი დავალებაა რომ ამ დივში დაარენდერო სიაში მყოფი თითოეული სახელი p თეგების სახით

let names = ["giorgi", "erekle", "tengo", "qeti"]

let save = document.getElementById("div1")

names.forEach(items =>{
    let p1 = document.createElement("p")
    p1.textContent = items

    save.append(p1)
})