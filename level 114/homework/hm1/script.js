// დაწერე ფუნქცია createCar(brand, model, year), რომელიც დააბრუნებს ობიექტს. გამოიყენე shorthand სინტაქსი პარამეტრების მისანიჭებლად.

function car(brand, model, year){
    return {brand, model, year}
}

console.log(car("toyota", "camry", 2020))
console.log(car("bMW", "X5", 2018))
console.log(car("Mercedes", "C class", 2022))
