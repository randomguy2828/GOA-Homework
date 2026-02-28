// შექმენით სია, სადაც იქნება ნებისმიერი ტიპის მონაცემი. და წამოიღეთ რენდომულად რომელიმე ინდექსზე მყოფი სიმბოლო.

let list = [ "hello", 51, 67, false, true,]

let index = Math.floor(Math.random() * list.length)

let element = list[index]
console.log(index)