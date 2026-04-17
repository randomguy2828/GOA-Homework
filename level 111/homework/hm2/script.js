// შექმენით სია სადაც იქნება რიცხვები. და შეკრიბეთ ყველაფერი.

let list = [14, 1234, 57]

let sum = list.reduce((total, current) => {
    return total + current
}, 0)

console.log(sum)
