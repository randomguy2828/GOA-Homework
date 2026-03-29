// შექმენით სია,სადაც მოათავსებ რაიმე სტრინგენბს, შემნი დავალებაა რომ do while ის გამოყენებით დაითვალო თუ რამდენი სტრინგია სიაში ისეთი რომლის სიგრძე არის 

let list = ["giorgi", "dato", "eka", "tinatini"]
let i = 0
let j = 0

do {
    if(list[i].length % 2 === 0){
        j++
    }
    i++
} while(i < list.length)

console.log(j)