// შექმენით სია სადაც იქნება ობიექტები მანქანების შესახებ. ახალ სიაში დააბრუნეთ ამ მანქანების ბრენდები.,

let cars = [
  {brand: "Toyota", model: "Corolla", year: 2020},
  {brand: "Mercedes", model: "C-Class", year: 2022},
  {brand: "Audi", model: "A4", year: 2019},
]

let brands = cars.map(function(car){
    return car.brand
})

console.log(brands)
