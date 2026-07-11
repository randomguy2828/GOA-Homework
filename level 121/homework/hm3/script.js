// 3)დავალება 1
// createElement()-ით შექმენი div.
// div-ში ჩაწერე ტექსტი "Hello JavaScript".
// className-ით მიანიჭე კლასი box.
// append()-ით დაამატე body-ში.


let rame = document.createElement("div")

rame.textContent = "Hello JavaScript"

rame.className = "box"

document.body.append(rame)