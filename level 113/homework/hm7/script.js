// 7)შექმენი ფუნქცია ავტომობილზე,ქონდეს model,brand,year,color და მოიფიქრე სხვა მნიშვნელობები შენითაც თუ შეძლებ

// შექმენი factory function რომელიც შექმნის მანქანის ობიექტებს,შექმენი რამდენიმე ობიექტი და ნახე კონსოლში ყველა მათგანი

function createCar(model, brand, year, color, fuelType){
    return{
        model: model,
        brand: brand,
        year: year,
        color: color,
        fuelType: fuelType
    }
}

let car1 = createCar("Corolla", "Toyota", 2020, "white", "Petrol")
let car2 = createCar("C-Class", "Mercedes", 2022, "black", "Diesel")
let car3 = createCar("A4", "Audi", 2019, "red", "Petrol")
let car4 = createCar("Model 3", "Tesla", 2021, "blue", "Battery")
let car5 = createCar("Mustang", "Ford", 2018, "yellow", "Petrol")

console.log(car1)
console.log(car2)
console.log(car3)
console.log(car4)
console.log(car5)
