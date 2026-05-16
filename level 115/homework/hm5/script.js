// დაწერე Factory Function, რომელიც აბრუნებს მოტოციკლეტის/მანქანის ინფორმაციებს. გამოიყენე Property Value Shorthand კოდის შესამცირებლად.

function func(type, brand, model, year, color){
    return{
        type, 
        brand,
        model,
        year,
        color
    }
}

let car = func("car", "toyota", "camry", 2020, "black")
let moto = func("motorcycle", "yamaha", "r1", 2021, "red")

console.log(car)
console.log(moto)
