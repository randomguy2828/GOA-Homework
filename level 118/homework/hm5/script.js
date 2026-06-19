// შექმენი ობიექტი და მოახდინეთ ამ ობიექტის დესტრუქცია, შეუცვალეთ სახელებიც.

let random = {
    first: "banana",
    second: "lettuce",
    third: "cheese",
    fourth: "beef"
}

let {first: fruit, second: vegetable, third: dairy, fourth: meat} = random

console.log(fruit)
console.log(vegetable)
console.log(dairy)
console.log(meat)