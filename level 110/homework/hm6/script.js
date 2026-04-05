// შექმენით სია სადაც იქნება რიცხვები. დააბრუნეთ პირველივე რიცხვი რომელიც არის მარტივი რიცხვი.

let numbers = [4, 68, 8, 9, 17]

let num1 = numbers.find(num => {
    if(num < 2) return false
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false
        }
    }
    return true            
})

console.log(num1)