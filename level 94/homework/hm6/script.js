// შექმენით ფუნქცია რომელსაც გადაეცემა რიცხვი. და 1-დან ამ რიცხვის ჩათვლით ყველა რიცხვს შეკრიბავს.

function number(num){
    let sum = 0
    for(let i = 1; i < num; i++){
        sum += i
    }
    return sum
}

console.log(number(8))
