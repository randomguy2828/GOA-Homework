// 8)createElement()-ით შექმენი:
// div
// img
// h2
// button
// img-ზე setAttribute()-ით დაამატე src და alt.
// div-ს className-ით მიანიჭე კლასი card.

// div-ს setAttribute()-ით დაუმატე:

// data-id="1"
// append()-ით ყველა ელემენტი ჩასვი div-ში.
// div დაამატე body-ში.

let div = document.createElement("div")
div.setAttribute("data-id", "1")

let img = document.createElement("img")
img.setAttribute("src", "rame foto")
img.setAttribute("alt", "ararsebuli foto")

let h2 = document.createElement("h2")
h2.textContent = "xinkali"

let button = document.createElement("button")
button.textContent = "click"

div.append(img)
div.append(h2)
div.append(button)

document.body.append(div)
