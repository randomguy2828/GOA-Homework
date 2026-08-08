// 2)
// შექმენი პროდუქტის ბარათი.

// თავიდან:

// ფოტო
// პროდუქტის სახელი

// onmouseover

// გამოჩნდეს ფასი.
// ღილაკი "Buy Now".
// ბარათს დაემატოს ჩრდილი.

// onmouseout

// ფასი და ღილაკი დაიმალოს.
// ჩრდილი გაქრეს.

let card = document.getElementById("card")
let price = document.getElementById("price")
let bt = document.getElementById("bt")

function hov(){
    card.style.boxShadow = "0 5px 15px 0"
}

function out(){
    card.style.display = "none"
    price.style.display = "none"
    bt.style.display = "none"
}