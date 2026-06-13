// შექმენით ფუნქცია სახელად displayCar, რომელიც პარამეტრად მიიღებს ობიექტს. პარამეტრების სიაშივე მოახდინეთ დესტრუქცია ({brand, model, year})

function displayCar({brand, model, year}){
    console.log(brand, model, year)
}

let car = {brand: "Mercedes", model: "C-Class", year: 2022}

displayCar(car)
