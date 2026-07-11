// 7)შექმენი:
// h1
// p
// button
// append()-ით ჯერ დაამატე h1 და p div-ში.
// შემდეგ div და button დაამატე body-ში.

let div = document.createElement("div")

let h1 = document.createElement("h1")
h1.textContent = "rame"

let p = document.createElement("p")
p.textContent = "rameparagh"

let button = document.createElement("button")
button.textContent = "davigale"

div.append(h1)
div.append(p)

document.body.append(div)
document.body.append(button)
