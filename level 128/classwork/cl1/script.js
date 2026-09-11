// 1)შექმენით ერთ h1 ჯს იდან html ში არ შექმნათ! და დაამატეთ body ში
// ამის შემდეგ შენი დავალებაა რომ ეს h1 გახდეს დღევანდელი თარიღი ,
//  გამოიტანე ლამაზად interpolation ის დახმარებით,ეწეროს წელი თვე რიცხვი ,
//  ასევე საათი წუთი და წამიც,გამოიტანეთ ლამაზად ყველაფერი

let h1 = document.createElement("h1")
document.body.appendChild(h1)

let date = new Date()

let year = date.getFullYear()
let month = date.getMonth() + 1
let day = date.getDate()
let hour = date.getHours()
let min = date.getMinutes()
let sec = date.getSeconds()

h1.textContent = `წელი ${year}, თვე ${month}, რიცხვი ${day} საათი ${hour}, წუთი ${min}, წამი ${sec}`