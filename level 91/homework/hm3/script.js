// შექმენით 5 ელემენტიანი სია, მომხმარებლის შემოტანილი მნიშვნელობა დაამატეთ ამ სიაში იმ შემთხვევაში თუ ეს ელემენტი არ არის სიაში,
//  თუ არის მაშინ ამოშალეთ. და კონსოლში გამოიტანეთ ახალი სია.

let list = [1, 2, 3, 4, 5]
let input = Number(prompt("number"))

if(list.includes(input)){
    list.splice(list.indexOf(input), 1)
}
else{
    list.push(input)
}