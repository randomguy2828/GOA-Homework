// 5)შექმენი button.

// setAttribute()-ით დაუმატე:

// data-color="red"
//  getAttribute()-ით წაიკითხე data-color და გამოიტანე console.log()-ში.

let rume = document.createElement("button")
rume.textContent = "click"

rume.setAttribute("data-color", "red")

document.body.append(rume)

let feri = rume.getAttribute("data-color")
console.log(feri)
